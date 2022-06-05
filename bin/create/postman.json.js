export default () => {
  return `{
	"info": {
		"_postman_id": "34b3ead6-64f1-4a5e-95fa-f6c7f7e28090",
		"name": "add-express",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "request",
			"item": [
				{
					"name": "注册register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\":\"丽11111丽\",\r\n    \"password\":\"13131\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/user",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"user"
							],
							"query": [
								{
									"key": "",
									"value": null,
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "登录login",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"const res = pm.response.json();\r",
									"pm.globals.set(\"token\",res.token)"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\":\"2\",\r\n    \"password\":\"2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/login",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "测试登录(test login)",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/login/islogin",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"login",
								"islogin"
							]
						}
					},
					"response": []
				},
				{
					"name": "新建请求",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				}
			]
		}
	]
}
  `;
};
