const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characaters: [] 
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async() => {
				try{
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json()
					let charactersList = []

					data.results.forEach( async (obj) => {
						const resp = await fetch(obj.url)
						const data = await resp.json()
						charactersList.push(
							data
						)

					})

					let store = getStore()
					setStore({...store, characters: charactersList}) 


				}catch(e){
					console.error(e)
				}
			}
		}
	};
};

export default getState;
