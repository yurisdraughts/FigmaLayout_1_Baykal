document.querySelector('.header__menu-icon').addEventListener('click', function (e) {
    const iconList = this.classList;
    const iconClosed = 'header__menu-icon_closed';
    const iconOpen = 'header__menu-icon_open';

    const menuList = document.querySelector('.header__menu').classList;
    const menuOpen = 'header__menu_open';

    const headerList = document.querySelector('.header__wrapper-main-background-img').classList;
    const headerClosed = 'header__wrapper-main-background-img_closed';

    if (iconList.contains(iconClosed)) {
        iconList.remove(iconClosed);
        iconList.add(iconOpen);
        menuList.add(menuOpen);
        headerList.add(headerClosed);
    } else {
        iconList.remove(iconOpen);
        iconList.add(iconClosed);
        menuList.remove(menuOpen);
        headerList.remove(headerClosed);
    }
});