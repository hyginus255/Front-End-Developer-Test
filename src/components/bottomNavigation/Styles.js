import styled from 'styled-components';

export const Styles = styled.div`

    .container-fluid{
        border : 1px solid #E5E5E5;
        background-color: #FFFFFF;
        box-shadow : 0px 1px 2px rgba(0, 0, 0, 0.15);
        padding:0px;
    }


    .nav-link{
        border : 1px solid #ECECEC;
        color: #23262B;
        font-weight: bold;
        text-transform:uppercase;
        font-size:12px;
        flex-grow: 1;
    }

    .nav-link:hover{
        background-color: #D1D1D3;
    }

    .form-control{
        border:none;
        color:#D1D1D3;
        font-size:14px;
        border : 1px solid #ECECEC;
        margin:0;
        border-radius:0;
    }

    .btn{
        border : 1px solid #ECECEC;
        background-color: #FFFFFF;
        color:#000000;
        border-right: 1px solid #ECECEC;
        font-size:14px;
        margin:0;
        border-radius:0;
    }

    .btn:hover{
        background-color: #D1D1D3;
    }

    @media(max-width:480px){

        .container{
            padding:0px;
            display:none!important;
        }
    }

    @media(min-width: 780px){
        .nav{
            display:flex;
            justify-content: flex-start;
        }
    }

`;