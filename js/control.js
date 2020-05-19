var vm = new Vue({
	el: "#app",
	data: {
		isShow: false, //榛樿涓嶅睍绀烘墦瀛楁満鍐呭
		startTime: "2017/7/7 GMT+0800", // 瀹氫箟鐩歌瘑寮€濮嬫椂闂�
		showTimes: false, //瀹氫箟鏈€寮€濮嬮殣钘忓€掕鏃�
		layTime: 330, //瀹氫箟鎵撳瓧閫熷害
		doraTime: 1000, //瀹氫箟鏃堕棿fade鏄剧ず鏃堕棿寤惰繜
		text1: '',
		text2: '',
		text3: '',
		text4: '',
		text5: '',
		text6: '',
		timeLeft: '',
		showBox: false,
	//	show_popups: false,
	},
	methods: {
		//绗竴琛屾墦瀛楁満寮€濮�
		list_1: function() {
			let that = this;
			let story = "在二零一七年七月七号下午";
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text1 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_2();
				}
			}, that.layTime)
		},
		list_2: function() {
			let that = this;
			let story = "我第一次见你";
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text2 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_3();
				}
			}, that.layTime)
		},
		list_3: function() {
			let that = this;
			let story = '直到今天';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text3 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_4();
				}
			}, that.layTime)
		},
		list_4: function() {
			let that = this;
			let story = '已经过去了';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text4 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.showTime();
				}
			}, that.layTime)
		},
		//灞曠ず鍊掕鏃�
		showTime: function() {
			let that = this;
			that.showTimes = true;
			setTimeout(function() {
				that.list_5();
			}, that.doraTime)
		},
		list_5: function() {
			let that = this;
			let story = '未完，待续';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text5 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_6();
				}
			}, that.layTime)
		},
		list_6: function() {
			let that = this;
			let story = '. . . ';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text6 = text;
				if (text.length == story.length) {
					i = 0;
				}
			}, that.layTime)
		},
		//璁＄畻鍓╀綑鏃堕棿
		getTimeLeft: function(dateTime) {
			let time1 = new Date(dateTime).getTime(); //鑾峰彇寮€濮嬫椂闂存埑
			let time2 = new Date().getTime(); //鑾峰彇姝ゅ埢鏃堕棿鎴�
			let mss = time2 - time1;
			let days = parseInt(mss / (1000 * 60 * 60 * 24));
			// let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			// let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
			// let seconds = parseInt((mss % (1000 * 60)) / 1000);
			return days + "天 ";
		},
	},
	mounted: function() {
		setInterval(() => {
			this.timeLeft = this.getTimeLeft(this.startTime);
		}, 1000);
		setTimeout(() => {
			this.showBox = true;
			this.list_1();
		}, 2000);
	}
})