// Functions utils

function onActive(param) {
    if (param == "calculator") {
        $(`#horoscopo`).removeClass("active");
        $(`#${ param }`).addClass("active");
    } else {
        $(`#calculator`).removeClass("active");
        $(`#${ param }`).addClass("active");
    }
}