import styled from 'styled-components';

export const Styles = styled.div`

    .container{
        padding:0px;
    }

    .navbar-brand img{
        height: 70px;
        width: auto;
    }

    .navbar h5{
        color:red;
        margin-bottom:0px;
        color: #000000;
        font-weight: 500;
        font-size: 18px;
    }

    .navbar-brand{
        margin-right:5px;
    }

    .navbar-light .navbar-brand , .navbar-light .navbar-nav .nav-link{
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: #23262B;
        text-transform : uppercase;
    }

    @media(max-width:480px){
        .container{
            padding:0px;
        }
        .navbar-nav{
            padding: 5px;
        }
    }

`;