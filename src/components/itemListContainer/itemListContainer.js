import React from 'react';
import {
    Card,   
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    } from 'reactstrap';
import './itemListContainer.css'

export const ItemlistContainer = ({name,precio,img, description,comprar}) => {
    return (
    <div>

        <Card>
            <CardBody >
                <CardTitle tag="h5">
                    <img src={img} className='cafetera__card--img' />
                    {name}
                </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {description}
                    </CardSubtitle>
                        <CardText>
                            {precio}
                        </CardText>
                    <Button>
                            {comprar}
                    </Button>
            </CardBody>
        </Card>
    </div>
    );
};

export default ItemlistContainer;