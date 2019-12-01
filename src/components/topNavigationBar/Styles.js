import styled from 'styled-components';

export const Styles = styled.div`

    .container-fluid{
        background-color:#25252F;
        color: #FFFFFF;
        padding: 7px;
        text-align:center;
        font-size: 12px;
    }

    .nav-link{
        padding:2px 5px;
        color:#808084;
        font-family: 'Poppins', sans-serif;
    }

    .nav-link:hover{
        color:#FFFFFF;
        cursor:pointer;
        text-decoration:none;
    }

    @media(max-width:480px){
        .content-right, .content-left{
            justify-content: center !important;
        }
    }

`;