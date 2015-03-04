[
	{
		"name":"Quote",
		"alias":"quote",
		"view":"textstring",
		"icon":"icon-quote",
		"config":{
			"style":"border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-variant: italic; font-size: 18px",
			"markup":"<blockquote>#value#</blockquote>"
		},
		"render":""
	},
	{
		"name":"Image",
		"alias":"media",
		"view":"media",
		"icon":"icon-picture"
	},
	{
		"name":"Macro",
		"alias":"macro",
		"view":"macro",
		"icon":"icon-settings-alt"
	},
	{
		"name":"Embed",
		"alias":"embed",
		"view":"embed",
		"icon":"icon-movie-alt"
	},
	{
		"name":"Headline",
		"alias":"headline",
		"view":"textstring",
		"icon":"icon-coin",
		"config":{
			"style":"font-size: 36px; line-height: 45px; font-weight: bold",
			"markup":"<h1>#value#</h1>"
		}
	},
	{
		"name":"test",
		"alias":"test",
		"view":"textstring",
		"icon":"icon-users-alt",
		"config":{
			
		},
		"render":"/App_Plugins/Lecoati.BlenderGrid/core/views/Base.cshtml"
	},
	{
		"name":"test2",
		"alias":"test2",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-voice",
		"config":{
			"editors":[
				{
					"name":"title",
					"alias":"title",
					"view":"",
					"propretyType":{
						"name":"Textarea",
						"view":"textarea"
					}
				},
				{
					"name":"media",
					"alias":"media",
					"view":"",
					"propretyType":{
						"name":"Media Picker",
						"view":"/umbraco/Views/propertyeditors/mediapicker/mediapicker.html",
						"config":{
							"multiPicker":false
						}
					}
				}
			],
			"renderInGrid":true,
			"limit":5,
			"fixed":false
		},
		"render":"/App_Plugins/Lecoati.BlenderGrid/core/views/Base.cshtml",
		"adv":true,
		"frontView":"test2"
	},
	{
		"name":"LastTweets",
		"alias":"lastTweets",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-newspaper-alt",
		"config":{
			"renderInGrid":true,
			"fixed":true,
			"editors":[
				{
					"name":"account",
					"alias":"account",
					"view":"",
					"propretyType":{
						"name":"Textarea",
						"view":"textarea"
					}
				}
			]
		},
		"render":"/App_Plugins/Lecoati.BlenderGrid/core/views/Base.cshtml",
		"adv":true,
		"frontView":"LastTweets"
	}
]