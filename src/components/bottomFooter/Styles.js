import styled from 'styled-components';

export const Styles = styled.div`
    .container-fluid{
        border-top: 1px solid #FFFFFF;
    }
    .flex-column a{
        padding:3px;
        color:#D1D1D3;
        font-size: 11.5px;
    }
    .copy-right-container{
        color: #FFFFFF;
        font-size: 11px;
        background-color: #2C2C36;
        padding:15px;
    }
    
    .footer-menu-heading{
        font-size : 13px;
    }

    .nav-link{
        padding:2px 5px;
        color:#C19129;;
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
    }

    .nav-link:hover{
        color:#1D2331;;
        cursor:pointer;
        text-decoration:none;
    }

    .footer-logo-container{
        background-color:#FDC624;
        padding: 50px 135px;
    }
    
    @media(max-width:480px){
        .footer-logo-container{
            padding: 10px 30px;
        }
    }
`;