importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"24f86d8c4d2c02f1274efc8a840c6f23","url":"contributors.html"},{"revision":"6b33ca29fa0ef505d56660c697a9d45c","url":"details.json"},{"revision":"2a0f1ca5e1cf4b27a6ff836c1cd21769","url":"feedback.html"},{"revision":"254af409f12143e107ca83d8ac3586de","url":"images/Characteristics.png"},{"revision":"a3e5b78d88eb73e4e096565077d3894c","url":"images/figure.png"},{"revision":"23951709ff50bee9c6e238a0bbd6cceb","url":"index.html"},{"revision":"f3bd03e421eea1060aad89c8b22e997f","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"96a644dde5814d02286a290999f90a78","url":"posttest.html"},{"revision":"0fd123e450592b431f8fc6033701301a","url":"posttest.json"},{"revision":"d2e4a3fbfcb1cb5c1f33225595b29d0d","url":"pretest.html"},{"revision":"1131e0c10c8b3a136547c53f47707dd0","url":"pretest.json"},{"revision":"c918da4fd30d6064c75fabe4c8e8b063","url":"procedure.html"},{"revision":"e3f0625ede1c702101fef655712c5cee","url":"references.html"},{"revision":"e23fcc978c96d6071d1ef1a6bacc6e43","url":"simulation.html"},{"revision":"fdc452f8cace501693deb4ec9fa25cb1","url":"simulation/css/expstyle.css"},{"revision":"c185abe1f177b34a905e24834bc9da53","url":"simulation/css/simstyle.css"},{"revision":"e134b2090f30f4f7e39ce653d87dc224","url":"simulation/css/style.css"},{"revision":"72531c99e8c419d33d78bbc2c6368d8e","url":"simulation/exp.html"},{"revision":"5b93ea5c162baac0a30753e297732fbd","url":"simulation/images/ameter.png"},{"revision":"5afd19799fa6d92d729485091b6fa10f","url":"simulation/images/blue-led.jpg"},{"revision":"249145b7dacbb145bc6d15af279433ca","url":"simulation/images/blue.png"},{"revision":"254af409f12143e107ca83d8ac3586de","url":"simulation/images/Characteristics.png"},{"revision":"f57b85992626e0d7000daffa27d75924","url":"simulation/images/circuit.png"},{"revision":"1746729125ab4b23d927248b971c17e1","url":"simulation/images/green-led.jpg"},{"revision":"eccb37e75ece1a0a43c1d2a10b470b8c","url":"simulation/images/help.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"simulation/images/iitb_logo_30dpi.png"},{"revision":"d24aed4c0133531bb4e1633e1f105573","url":"simulation/images/ledd.jpg"},{"revision":"4f72e6bc94abac244bec5e1f872ffa44","url":"simulation/images/meter.png"},{"revision":"ca11bd07978576e68b543903867f7964","url":"simulation/images/meter2.png"},{"revision":"ca1133f0019fdee91fe4f4b1addd9add","url":"simulation/images/red-led.jpg"},{"revision":"a04284f7208e38b5da91fe2464036adf","url":"simulation/images/setup.png"},{"revision":"e5a5654113e98367a4dae1555173d326","url":"simulation/images/setup1.png"},{"revision":"6d647b0673b5e0fc56be093de3804c18","url":"simulation/images/yellow-led.jpg"},{"revision":"d4aeabb935720186e079eab00e896343","url":"simulation/index.html"},{"revision":"b3eb2f51a4fc403bd85db8548016851b","url":"simulation/js/demo.js"},{"revision":"de2856ea93f53cd0d2f26bcc8fb36c34","url":"simulation/js/jsplumb.js"},{"revision":"b3eb2f51a4fc403bd85db8548016851b","url":"simulation/js/script.js"},{"revision":"60c9d852686954326fe749e1fbc62950","url":"theory.html"},{"revision":"32be3a14bc6b17285271247c00ab59fd","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );