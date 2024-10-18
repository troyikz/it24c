class SportList {
    
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.sports = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderSportList(this.sports); 
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.sports = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderSportList(sports) {
        const sportListContainer = document.getElementById('sportList');
        sportListContainer.innerHTML = sports.map(sport => 
            `<button class="btn btn-primary" style="margin-top:15px; 
                                                    width:25rem">
                ${sport.sport_name} | Year Invented: ${sport.year_invented} | Place of Origin: ${sport.place_of_origin} | ${sport.description}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const sportSearchBar = document.getElementById('sportSearchBar');
        const sportSearchListContainer = document.getElementById('sportSearchList');

        sportSearchBar.addEventListener('input', () => {
            this.filterSports(sportSearchBar.value, sportSearchListContainer);
        });

        this.renderSportList(this.sports, sportSearchListContainer);
    }

    filterSports(query, searchListContainer) {
        const filteredSports = this.sports.filter(sport => {
            const fullDetails = `${sport.sport_name} ${sport.year_invented} ${sport.place_of_origin} ${sport.description}`;
            return fullDetails.toLowerCase().includes(query.toLowerCase());
        });

        searchListContainer.innerHTML = '';

        this.renderSportList(filteredSports, searchListContainer);
    }
    
}

const sportList = new SportList('applet-4.json');
