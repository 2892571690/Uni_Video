<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	image{
		width: 100%;
	}
	view,div{
		box-sizing: border-box;
	}
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAA00AAsAAAAAGJQAAAznAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFeAqfOJlEATYCJANYCy4ABCAFhG0HghcbqRQzknFWPdn/4cAcw2mBvd4Siplyvmo599k8OnjHbla4RXbIpr+yx3wxFiPoqqgN95oBJscJkZk6GU/7HxtD99jfByGtkZNkD/CBqYgOEB2QUH3Vr6wnUERKIOtWXgD8PG7rbR+MmTiMBisBqzAyASOxGi8xY3oRHWlejs4GiMO9ct53ppJ9KAVfDUUCw+XaDgND9kDe2NnYELgcJlwCMAz4i35m+32ztiiM9XIzVs89dw5a4BHXsyUwAOrm9TxpM3YJCh6tpRbYATvcECoZYWPE7fP8zcOE98N4HyCUYR3NNikgKWBZ2wpTY2p8tYyXlQTx7J3myEzQSJ2yl4aaf653hgAxzQbJsmbFBkIc2ih0OqEO7yUcy8IlvIXQ7Eeu6AKZwiPUST0DcKn+/vIHxgtB8Qx9V2sOLT/Aom96vkkKssO6uJhPAC9XAwMGgQP5Gy34jrUwWMtxTOl4Bq3mZ8nBtzAtOwjKGG49qTx78/5964/eeVF80+T4yajQavD2oVxIRAkVylTxyUhweJv8H7wApVJOSkwpxEe3SQEk9AOq8E0dUV6jQYSgg4hAD6IE9CEqwACiDAxR58Na4uHD94DISowhEjCHcGAZhAc2QxjYCSHgGEZy4WwIBedBVILLMZIXtxKPFH70xiOGn4dslNJydbjCIFgL7p8/CaartTDUQVSa0hsSPISSfcuSUBkHa+2itKF32KcdS6HOreR6hXggFjlr7AvLYVWwtDmqZPiGweG0ZeY85wL33YeHrS/f0Gekz4hyn5+jW+BXNO7oXpJa+BJQfTh69OGg9gczD93rn7uvZA4MtRniVrZHdMvfAjgRPeUe9ym3UtbjuxzRXZn8JLa7k3KOaPNkTOEqe4oiK7E1POIMDrzDh3T7dtzMlwkbMwq1bEK2VE4y8wwwConAoVO9qdzpGcGjZwfR6pnXkGZCqFo8NgwADF0aTx/jZI+Yr94fITr69uOgNQ2iZlTe44tdzqJETR0bP2MPBn++lrbr47wrPxozCBOFmSrS/hS8L1s1XglcYnBdl7MieNVh9d3uW73oV72UUP0+xfL2cL3I0VaJLTgjDBLJTYp+sA1R/7CVJJ+wsryZ4eKmpsyXFllHWdFoi0oJMSrIrUdb1OXuH3yHh61kykYIQFL9MXu5fkFBXplDnYwNQ+WuY3/Jg55M+xUGwgDKp9hIusDjUpajM8XJG1JotYoC+TKgCLvdslhRtpL+JiRhgaFzUosxIliqwVeCydOpN34KBbQzkFbPPl6sqrVkhZTHWtkMp+nEUPRiRuUfqrpbTTVbYu+H2JKer6p87aB6YKyp1grs7mlouQxe2Zm+dPbsKCxbpUIa1JFUvshN8gRE4beRVoVQ5ZAJACmjMU/aEsVM9jBA8iy86XQqzyCTpUg5jpMVAAiLkxydrR00BR9HUQNHvPtQugeEj/54K0YoQkMEJQEggCg/LWDwyJL5CxvXbgNoPHbHRVCCxhBtBphavoKeD6TWRTNhwCisnwPKfuVPF/HMWgWDJc6E3WPa3VvlEiNKld66Lab7dAzyxCO36Ijno1S10VE9VSnwvJLTGEN1vfIrAPhTne1HG6VahlO8vYZITx+eKwBiL5YsvubBbnchitxAoc955ku0WeU0RpBMU9OL4wkrovyuPlR69wgsZrD2g6FHsqZyzwApMv9YhGgsKpq9+ELRupY5meBclHaH+ZIn772Fj4vYlLWqK+1xh54distZcNZbda2Xddpvp2IE4a7V2UcAZMTWF3aLQZLwZL7NejL7P/Ol6nOLRU8xKeAcrce/RJuzx/HM+dGy8/e7pC7boYVTO80FyzvMshOJ4ipMsKg5q5Pq7gPamc8vpMcVjU6YuJRDeci2kLKhW79HfbXn9vDQO+VHbv95Vzlw98/wgsDUKrWbE2oERkYLVsXGOH1vvvw7F5nsnEAHt33E5wX9YWjPi3/WeQNC4g3LaEumMYfxA2dlKRXN5LULciemy5q3sTIHik7MoknR28aPop94dKM0ZWvXAXDmvTLY8LqV0EJkcX79xqiI880XJ7SqXQ/Phzh1CIUdTkGdaTDwWMAy9qr29lXsZQE5A9CKK0uXaiMtRUI6iGs2EM2dErYcPGg6E/cMrt8SXS7z3w4+v2XrJFSDZ0AVpF3yW2jVbC5P4R0+29tO3oK7eCpxD9+a4Ojxf4unnWYacfdnioJ06qkg/x6aCu+24i3Ofqh/MfPnHDRNHQnu91f11eGUNK4JWeMN3MHrUl3Lcklod7FkBYYUTthQF+o3BkWkOig6RKQsB4mx37pAXBJyxU7+5bBHjDJMi+f3cAMCyB4SL04Pxwt9iXpaTteWXyVvKbfLHc7dcpbyq+Waxv8sbSpr3V/ct8RSSUVRd2v6vuL9Y1rnNuTvDqWbXSkdal6nkaqj/PWo9ZTqp+boU+nz66L0wIt39Nbw8O7T4MSO9NVg/DAyHOQ/MpSect7d4+xlmxx/mYky/jm2YgeZmoyMD7AoOdkXSmxIUjK2uBSSxgwfYl8buMTefOfy9ZmGE5cG5Ij2yaWLbgz9w4lGjSJkFt3pu1rNw5sLcL7fdwLTv81Sqs1sMTy4+BUCYBqGB5OrSBPOBFNCuJ7qZyQxXnzsiY/U5Bm9y4eGslqtgk4l3vx2hT0FhnMoMvaEicEqA4nT1sqDZ1mUGWXO63Q6cPnoAflbzBkwDWIaxB+1pKTTzHHHGaRU6+NL0imvqQ3eU6tj68UY39DQG9ha2KAJ4voHhnEZ7Ljwko+ryzVB9qkM7Fl+5Pubf9/7FXoS+rnnT+/9k8vzdu3cAZNZ6r2klPwHW3tY6F9r7WWqN9cGLNcLL2TSdhSYnBp8KjFyZRFV8cCJhbepzU5P6mFKmf9gaS/C2tBbTCeMkW9GKzTDMGdSijqJXhzvoxX8v/+8dbnudtuan0buS+0wJ9w+9TRmAk0QmnstTzFKSkzcw2CMCYN7eD0uEVmottaaVLm+5vN5KiQv4UTCm+3sNt4JEJ7Ne86QTE3bAPQKuA0q4+sf/bwN34Lf+RntpWX7TG34wbszmqYVyZUebpNtJpbbbN0xDUOzWS4yxybWTn8xeJDJ5zvRZa8PZchEG/Nl+uSAMWL68rgVGZS86YIViWW6BXrHbpG7yUymOxnP3NArIJ7aucBEYQVMW9BYJlHwrG2Y5VffKGNxnNpD+DZ1G4KCJ+eXqwea0DnZF9HHzsFNTuPel2JN77zJeiRHZcUn5SvLqC1bhN9V/h84yz7VNkcg/iBL8PHb4RPFyQsr4A332hmjRqNTqxb/laitl9f21X4npiBz+TKMjzf0EDrxOSInj2L86ym8BltmKxiNq/t4adytwa/nfXi47fVRGwG2DH9tzhuXubvmsQOLDg88fHpphKCSm6oLBYVtWeArCFf0CcN9s6CsDQr0nDPBZ4ADiexEhjot8svYHvogUpXKp2ozJm8EuKqjS9fZ863Du2Ab+nzbNikqpXBDSApbQ2e/2WfXv8oQZ+CFXV0FGBLVeCGeGP6KGS8+1kGynYbFbFkCJ8AFdGdwfv3gbtsEaQsQLh9zTmEEocq75q2DN9SgdtMAOnAOfYcGShh45kOOROvB6ia8exHuvd9ZtNiG9yzmYRcv0q+WKtSLKyZLj68Ui/ecC4HP/z9A8clc9G6tOPoyLYK+JbuF7/r/tzjn2lEXgOLM/YhPsP/9Qgsf0vGGcw+hUOlxO/AfABT2GrIpQv9rIo3Qv9Yhw9APLINmhP+8iMy8byKd0F9eoAdvL/9jmwklNyBJU+dn9GOPCc7E1RmUQrbK/K9Nyf8J1W/+X11WwzaznhBFFwo8AiBaLuFQ6L91ZXY17XMUx4VjxyZFaTfUnmo4sPKj6xSIzTJ4DFBSDvc2xVQlVikIxzQvTAloYkZIp6NzHWQeCdOYT8hCFjMAwVdPqIAqQIiTB+iHmQUTSmE9U3JeM6MUzjo617vMoxreMp9SDLGYTVivG0zoxoqIZVWi3BqRkJXXyCoSVJTn29waoukcJyqoLc2tGtXVIUmiquqiahbXjjPZHCwqF1XluEh1XQGvpgbBEY9gUVPcHTMGkI+gGely2XX+pSh47KI5AbvaX/lHhrsQkyLtnFYRcHztbn/q238y0RscE6N+pf1lMamdI5VcKXD8kJ1o1E3pmQZR65TgyA2MYJFGCWZMAyA+fjrNSJeTC9T5F4WajUvlfPUmey3I4OwbU78mLm1qbmlta+/o7Oru6e3rr6zyKqqsqupqbHe9V9idVQ7tjcAi1dKDhRa77QR96qG4glReuZ1F9thxvDOqqPYvzKAXKeugP/vsK0zvMgJ+9nRIo9kLnsKd3o+pzpNkTszKWTATJCYvOXIi+0Wgn9nOH/QSnNiQSxQzs4msbS007v4CEdttjkDZljdVm3CKevskw5HI1Qo=') format('woff2')
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-tupian:before {
	  content: "\e624";
	}
	
	.icon-tubiaozhizuomoban:before {
	  content: "\e639";
	}
	
	.icon-sousuo:before {
	  content: "\e61e";
	}
	
	.icon-shipin:before {
	  content: "\e60e";
	}
	
	.icon-zhuanfa:before {
	  content: "\e611";
	}
	
	.icon-shipin1:before {
	  content: "\e518";
	}
	
	.icon-zyojiantou:before {
	  content: "\e631";
	}
	
	.icon-pinglun-copy-copy:before {
	  content: "\e503";
	}
	
	.icon-dianzan-copy:before {
	  content: "\e504";
	}
	
	.icon-tupian1:before {
	  content: "\e728";
	}
	
	.icon-shengyinyinliangxianxing:before {
	  content: "\e60a";
	}
	
	.icon-shouye:before {
	  content: "\e659";
	}
	
	.icon-kouhong:before {
	  content: "\e607";
	}
	
	.icon-huo:before {
	  content: "\e645";
	}
	
	.icon-yemian:before {
	  content: "\e505";
	}
	
	.icon-jinyin:before {
	  content: "\e866";
	}
	
	.icon-shoucang:before {
	  content: "\e507";
	}
	
	.icon-wode:before {
	  content: "\e502";
	}
	
	.icon-wode1:before {
	  content: "\e506";
	}
	
	.icon-shipin2:before {
	  content: "\e63c";
	}
	
	.icon-search:before {
	  content: "\e508";
	}
	

</style>
