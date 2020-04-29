$(function() {
	// .menu-triggerがクリックされたときに、処理が行われるように設定
	$('.menu-trigger').on('click', function() {
		// <a>タグのclassにはactiveは指定されていないが.toggleClass( )を設定すると、
		// アイコンがクリックされたときにactiveクラスが追加され、再クリックすると削除されます
		$(this).toggleClass('active');
		// .fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッド
		// #sp-menuが開いたときに、.fadeToggle( )が処理されるように設定
		$('#sp-menu').fadeToggle();
		return false;
	});

});