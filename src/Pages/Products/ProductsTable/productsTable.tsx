import React, { useState } from 'react'
import './productsTable.scss'
import { productsViewModel } from '../products';
import MyButton from '../../../Components/Commons/Button/myButton';
import { Button } from 'react-bootstrap';
import ConfirmModal from '../../../Components/Commons/Modal/ConfirmModal/confirmModal';


interface ProductsFormProps {
  getNewProducts: (products: productsViewModel[]) => void;
  products: productsViewModel[]
}

export default function ProductsTable({ getNewProducts, products }: ProductsFormProps) {
  console.log(products)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false)
  const [productGuid, setProductGuid] = useState<string>('')

  function onInfoClick() {

  }

  function onDeleteClick(DeleteGuid: string) {
    setIsShowDeleteModal(true);
    setProductGuid(DeleteGuid);
  }

  const deleteModalSubmitAction = () => {
    const newProducts = products.filter(({ Guid }: productsViewModel) => Guid !== productGuid);
    getNewProducts(newProducts);
    setIsShowDeleteModal(false);
  }

  function onEditClick() {

  }


  return (
    <section className='products-table'>
      <div className='table-wrapper'>
        <div className="table-header">
          <span> عکس محصول </span>
          <span> نام دوره </span>
          <span> سطح </span>
          <span> تعداد ویدیو </span>
          <span> زمان آموزش </span>
          <span> مدرس </span>
          <span> آپدیت </span>
          <span> قیمت </span>
        </div>
        {/* <div className="table-content"> */}
        <div className="table-content-item">
          <div className='content-item-img'>
            <img src="/images/Products/3d-paper-and-pen.png" alt="importPng" />
          </div>
          <span> جاوااسکریپت </span>
          <span> پیشرفته </span>
          <span> 100 </span>
          <span> {`${0} ساعت`} </span>
          <span> سهیل طهرانی </span>
          <span> 1402/04/30 </span>
          <div className='content-item-price'>
            <span> 210,000 </span>
            <strong> تومان </strong>
          </div>
        </div>


        {
          products.map(({ Guid, courseName, courseLevel, videoCount, cost, totalCourseTimes, CourseTeacherName, latestVersion, courseIMG, }: any) => (
            <div key={Guid} className="table-content-item">
              <div className='content-item-img'>
                <img src={courseIMG} alt={courseName} />
              </div>
              <span> {courseName} </span>
              <span> {courseLevel} </span>
              <span> {videoCount} </span>
              <span> {`${totalCourseTimes} ساعت`} </span>
              <span> {CourseTeacherName} </span>
              <span> {latestVersion} </span>
              <div className='content-item-price'>
                <span> {cost} </span>
                <strong> تومان </strong>
              </div>
              <div className='content-item-actions'>
                <Button variant="outline-info me-2 py-3 px-5" onClick={onInfoClick} >info</Button>
                <Button variant="outline-danger me-2 py-3 px-5" onClick={() => onDeleteClick(Guid)} >Delete</Button>
                <Button variant="outline-light py-3 px-5" onClick={onEditClick} >Edit</Button>
              </div>
            </div>
          ))
        }
        {/* </div> */}
      </div>
      {isShowDeleteModal &&
        <ConfirmModal
          message='آیا مایل به حذف هستید؟'
          submitAction={deleteModalSubmitAction}
          cancelAction={() => setIsShowDeleteModal(false)}
        />}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  )
}
