import styled from 'styled-components';

export const Styles = styled.div`
    tr, th, td{
        border:none!important;
    }

    .nav-link{
        color:#688090;
        text-decoration:none;
        text-transform: uppercase;
        font-size:14px;
        padding: 5px 40px;
        font-weight: 900;
        margin:0px;
        letter-spacing: 0.0357143em;
    }

    .active{
        background-color:#688090;
        color:#ffff;
    }

    .nav-link:hover{
        background-color: #688090;
        color: #fff;
        border-right:1px #FFFFFF solid;
        border-left:1px #FFFFFF solid;
    }

    .group-heading{
        font-size:13px;  
        color: #23262B;
        text-align : center;
        background-color: #68809085;;
    }
`;