const addressApiService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "Address": "339 Macpherson Lane",
                    "Pin code": "768 11",
                    "customerEmail": "lsallter0@hubpages.com",
                    "contact": "191-405-1109"
                },
                {
                    "id": 2,
                    "Address": "7268 Artisan Alley",
                    "Pin code": "",
                    "customerEmail": "akillbey1@europa.eu",
                    "contact": "123-774-0910"
                },
                {
                    "id": 3,
                    "Address": "618 Vera Center",
                    "Pin code": 25508,
                    "customerEmail": "sgreenin2@fastcompany.com",
                    "contact": "373-145-5025"
                },
                {
                    "id": 4,
                    "Address": "09494 Tennessee Circle",
                    "Pin code": "",
                    "customerEmail": "atrippick3@newyorker.com",
                    "contact": "830-640-2733"
                },
                {
                    "id": 5,
                    "Address": "23 Marquette Pass",
                    "Pin code": "98600-000",
                    "customerEmail": "tsywell4@java.com",
                    "contact": "908-558-1070"
                },
                {
                    "id": 6,
                    "Address": "66590 Eastwood Circle",
                    "Pin code": "",
                    "customerEmail": "llyptratt5@illinois.edu",
                    "contact": "445-628-4676"
                },
                {
                    "id": 7,
                    "Address": "1275 Fulton Crossing",
                    "Pin code": 24400,
                    "customerEmail": "ebyrne6@dell.com",
                    "contact": "164-756-5434"
                },
                {
                    "id": 8,
                    "Address": "64 Sullivan Trail",
                    "Pin code": "",
                    "customerEmail": "dgilbride7@ed.gov",
                    "contact": "706-667-6734"
                },
                {
                    "id": 9,
                    "Address": "10 Judy Drive",
                    "Pin code": 412545,
                    "customerEmail": "sweekly8@usatoday.com",
                    "contact": "105-875-7448"
                },
                {
                    "id": 10,
                    "Address": "44 Mcbride Hill",
                    "Pin code": "4805-005",
                    "customerEmail": "pkither9@webmd.com",
                    "contact": "884-448-8680"
                },
                {
                    "id": 11,
                    "Address": "0 Lyons Hill",
                    "Pin code": "",
                    "customerEmail": "crebanksa@umich.edu",
                    "contact": "781-142-8616"
                },
                {
                    "id": 12,
                    "Address": "10 Farwell Center",
                    "Pin code": "",
                    "customerEmail": "parnaob@people.com.cn",
                    "contact": "272-292-3897"
                },
                {
                    "id": 13,
                    "Address": "85 Butternut Crossing",
                    "Pin code": 2431,
                    "customerEmail": "fblankleyc@state.tx.us",
                    "contact": "531-647-2172"
                },
                {
                    "id": 14,
                    "Address": "7 Bunting Parkway",
                    "Pin code": 12006,
                    "customerEmail": "rmcgrathd@redcross.org",
                    "contact": "180-184-4019"
                },
                {
                    "id": 15,
                    "Address": "6 Melvin Way",
                    "Pin code": "",
                    "customerEmail": "eclutherame@china.com.cn",
                    "contact": "996-107-5565"
                },
                {
                    "id": 16,
                    "Address": "277 Twin Pines Pass",
                    "Pin code": 396458,
                    "customerEmail": "abatef@photobucket.com",
                    "contact": "685-319-9251"
                },
                {
                    "id": 17,
                    "Address": "83921 Mariners Cove Place",
                    "Pin code": 625504,
                    "customerEmail": "harmatageg@behance.net",
                    "contact": "746-684-6115"
                },
                {
                    "id": 18,
                    "Address": "8 Moulton Parkway",
                    "Pin code": "",
                    "customerEmail": "sblivenh@webmd.com",
                    "contact": "413-481-5962"
                },
                {
                    "id": 19,
                    "Address": "87490 Melby Terrace",
                    "Pin code": 59762,
                    "customerEmail": "jcopperi@virginia.edu",
                    "contact": "793-871-7819"
                },
                {
                    "id": 20,
                    "Address": "1 Colorado Hill",
                    "Pin code": "77370-000",
                    "customerEmail": "amaclleesej@arstechnica.com",
                    "contact": "619-729-4183"
                }]);
        }, 1000)
    })
}

class AddressListComponent {
    constructor() {
        this.limit = 5;
        this.totalPages = 0;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.table = document.querySelector('table tbody');
        this.paginationContainer = document.querySelector('.pagination');

        addressApiService().then((response) => {
            this.records = response;
            this.totalPages = Math.ceil(this.records.length / this.limit);
            this.setTableRows();
            this.generatePagination();
        });

        this.prev = document.querySelector('.prev');
        this.next = document.querySelector('.next');

        this.prev.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updatePagination();
                this.setTableRows();
            }
        });

        this.next.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.updatePagination();
                this.setTableRows();
            }
        });
    }

    setDisplayRecords() {
        this.start = (this.currentPage - 1) * this.limit;
        this.end = (this.currentPage * this.limit);
        this.displayRecords = this.records.slice(this.start, this.end);
    }

    setTableRows() {
        this.setDisplayRecords();
        this.table.innerHTML = '';
        this.displayRecords.forEach((address, i) => {
            let row = this.table.insertRow(i);
            for (const key of Object.keys(address).reverse()) {
                let cell = row.insertCell(key);
                const addressValue = address[key];
                let cellTextNode = document.createTextNode(addressValue);
                cell.appendChild(cellTextNode);
            }
        })
    }

    generatePagination() {
        // Clear any existing page links (except Prev and Next)
        this.paginationContainer.querySelectorAll('.page-item:not(.prev):not(.next)').forEach(el => el.remove());

        // Dynamically generate page numbers
        for (let i = 1; i <= this.totalPages; i++) {
            let pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            if (i === this.currentPage) pageItem.classList.add('active');
            
            let pageLink = document.createElement('a');
            pageLink.classList.add('page-link');
            pageLink.href = "#";
            pageLink.textContent = i;

            pageLink.addEventListener('click', (event) => {
                event.preventDefault();
                this.currentPage = i;
                this.setTableRows();
                this.updatePagination();
            });

            pageItem.appendChild(pageLink);
            this.next.before(pageItem);
        }
    }

    updatePagination() {
        // Remove 'active' class from all page links
        this.paginationContainer.querySelectorAll('.page-item').forEach(el => el.classList.remove('active'));

        // Add 'active' class to the current page link
        let pageItems = this.paginationContainer.querySelectorAll('.page-item');
        if (pageItems[this.currentPage]) {
            pageItems[this.currentPage].classList.add('active');
        }

        // Update Prev/Next button disable state
        this.prev.classList.toggle('disabled', this.currentPage === 1);
        this.next.classList.toggle('disabled', this.currentPage === this.totalPages);
    }

}

new AddressListComponent();
