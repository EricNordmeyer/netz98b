import { XMLParser } from 'fast-xml-parser'

const parser = new XMLParser();

export default {
    getFeedItems() {
        return fetch('http://localhost:1234/feed/')
          .then((response) => {
            if (response.ok) {
              return response.text();
            }
            throw new Error('Something went wrong');
          })
          .then((result) => {
            return parser.parse(result)
          } 
        )
    }  
  }