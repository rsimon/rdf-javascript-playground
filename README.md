## RDF SPARQL Playground

## Dev hints

Run `npm start` to launch the project in development mode. The app will run on
[http://localhost:3000](http://localhost:3000).

## Sample data

The sample data was pulled from Wikidata.

```sparql
CONSTRUCT {
  ?item p:P31 wd:Q194195 .
  ?item dc:title ?itemLabel .
  ?item dc:spatial ?coord .
  ?item foaf:depiction ?image
}
WHERE 
{
  ?item p:P31/ps:P31/wdt:P279* wd:Q194195 .
  OPTIONAL { ?item wdt:P625 ?coord }
  OPTIONAL { ?item wdt:P18 ?image }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
}
```
