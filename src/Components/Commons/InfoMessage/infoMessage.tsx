import React, { ReactNode } from 'react'
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';

interface InfoMessageProps {
    message: string;
}

export default function infoMessage({ message }: InfoMessageProps) {
    const tooltip = (
        <Tooltip >
            {message}
        </Tooltip>
    );


    return (
        <OverlayTrigger placement="top" overlay={tooltip}>
            <Button className='btn-light btn-outline-danger'>
                <BsInfoCircle />
            </Button>
        </OverlayTrigger>
    )
}