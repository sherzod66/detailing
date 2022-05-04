let center = [39.658188, 66.944880];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Sags',
		balloonContentBody: 'улица Мир Саид Барака, 1',
		balloonContentFooter: 'Авта сервис',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons.flaticon.com/png/512/3082/premium/3082383.png?token=exp=1651642275~hmac=dd800a19d9fe357db44eeb4f959a536b',
		iconImageSize: [40, 40],
		iconImageOffset: [-30, -25],
	});
	map.geoObjects.add(placemark);
}

ymaps.ready(init);
