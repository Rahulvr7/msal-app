export const environment = {
	production: true,
	msalConfig: {
		auth: {
			clientId: 'cb7ba9a2-1b64-4907-90ee-670d2bbd779f',
			authority: 'https://login.microsoftonline.com/Stryker.onmicrosoft.com/'
		}
	},
	apiConfig: {
		scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
	}
};