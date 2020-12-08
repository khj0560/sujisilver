import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`

    ${reset};

    @font-face {
        font-family:'NotoR';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/NotoSansKR-Regular.eot');
        src: url('/fonts/NotoSansKR-Regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/NotoSansKR-Regular.woff2') format('woff2'),
            url('/fonts/NotoSansKR-Regular.woff') format('woff'),
            url('/fonts/NotoSansKR-Regular.otf') format('opentype'),
            local("※");
        }
        @font-face {
        font-family:'NotoB';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/NotoSansKR-Bold.eot');
        src: url('/fonts/NotoSansKR-Bold.eot?#iefix') format('embedded-opentype'),
            url('/fonts/NotoSansKR-Bold.woff2') format('woff2'),
            url('/fonts/NotoSansKR-Bold.woff') format('woff'),
            url('/fonts/NotoSansKR-Bold.otf') format('opentype'),
            local("※");
        }
        @font-face {
        font-family:'TR';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/TmoneyRoundWindRegular.eot');
        src: url('../fonts/TmoneyRoundWindRegular.eot?#iefix') format('embedded-opentype'),
            url('../fonts/TmoneyRoundWindRegular.woff2') format('woff2'),
            url('../fonts/TmoneyRoundWindRegular.woff') format('woff'),
            url('../fonts/TmoneyRoundWindRegular.otf') format('opentype'),
            local("※");
        }
        @font-face {
        font-family:'TB';
        font-weight: normal;
        font-style: normal;
        src: url('../fonts/TmoneyRoundWindExtraBold.eot');
        src: url('../fonts/TmoneyRoundWindExtraBold.eot?#iefix') format('embedded-opentype'),
            url('../fonts/TmoneyRoundWindExtraBold.woff2') format('woff2'),
            url('../fonts/TmoneyRoundWindExtraBold.woff') format('woff'),
            url('../fonts/TmoneyRoundWindExtraBold.otf') format('opentype'),
            local("※");
        }
        *{
            /* width: 100%일 경우 패딩 돌출 방지를 위함 */
            box-sizing: border-box;
        }

        a {color:#555;}
        a:link, a:visited {text-decoration:none}        
        textarea:focus { outline: none; } button:focus { outline: none; } input:focus { outline: none; }

        body {
            margin: 0;
            padding: 0;
            font-family: 'NotoR', dotum, '돋움', sans-serif;
            font-weight:normal;
            font-size:18px;
            color:#555;
            line-height:35px;
            background-color: #fff;
            height: 100%;
            @media(max-width: 768px) {
                font-size: 16px;
            }
        }

        h1, h2, h3, h4, h5, h6 {
            font-family:'NotoB';
            font-weight:normal;
            word-break: keep-all;
        }

        h1 {
            font-size: 2.2rem;
            line-height: 48px;
        }
        h2 {
            font-size: 2rem;
            line-height: 48px;
        }
        h3 {
            font-size: 1.6rem;
        }
        h4 {
            font-size: 1.2rem;
            line-height: 38px;
        }
        h5 {
            font-size: 1.1rem;
        }
        p {
            font-size: 1rem;
            word-break: keep-all;
        }

        img, button {border:0 none;vertical-align:middle}
`;