
import { LocalOffer as Badge } from '@mui/icons-material';
import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p {
    font-size:14px;
    margin-top:10px;
}
`;

const StylesBadge = styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px;
`;


const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td{
    font-size:14px;
    margin-top:10px;
    border:none;
}

`;
const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>8 Ratings & 1 Review
                <Box component="span">
                    <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
                </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹
                    {product.price.cost}
                </Box>&nbsp;&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>

            <Typography>
                Available Offers
            </Typography>
            <SmallText>
                <Typography><StylesBadge />
                    getggfhjfgdgs
                </Typography>
                <Typography><StylesBadge /></Typography>
                <Typography><StylesBadge />fhfhfhdsf</Typography>
                <Typography><StylesBadge />
                    jhfjse
                </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By{date.toDateString()}| ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warrenty</TableCell>
                        <TableCell >No Warrenty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color: '#2874f0' }}>
                                SuperComNent
                            </Box>
                            <Typography>GST Invoice available</Typography>
                            <Typography>View more seller Starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableCell colSpan={2}>
                            <img  src={adURL} style={{width:390}} alt="Flipkart point"/>
                    </TableCell>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>

    )
}

export default ProductDetails