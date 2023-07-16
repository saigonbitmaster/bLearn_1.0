
## Install & run dev
```
git clone https://github.com/saigonbitmaster/bLearn
cd bLearn
change the API url to fetch MCQs 
yarn 
yarn start
```

## Build & run app
```
git clone https://github.com/saigonbitmaster/bLearn
cd bLearn
add .env file at root and add the key REACT_APP_API_URL reflect your API to fetch MCQs 
REACT_APP_API_URL=http://localhost:3000
yarn 
yarn build

app will be built to build folder, this built files can be run by nginx or any http-server
```


## Run app with local data
```
edit src/data/data.js: add your MCQs data
edit App.js: change MCQ component from TakeMcq to TakeMcqStatic:
        <Routes>
          <Route index element={<TakeMcqStatic />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<TakeMcqStatic />} />
        </Routes>
      </BrowserRou

run dev or build App as above steps
```

## Notes
```
app will load first quiz set with value = 0. 
create first quiz set with value = 0 by CMS to let it work properly
```
