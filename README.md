# aspire_app_demo
# How to run the app
- In the root folder: npm install
- Then: cd ios && pod install
- Run on iOS: yarn ios
- Run on android: yarn android

# Assumption on the flow of the app:
User opens the app -> Fetch the API at Debit Card section -> Getting data for current amount and card data.
User can set the spending limit.

# What I've done:
- Build UI
- Set spending limit
- Seting up redux with dummy data
- API call helper share -> dummy call and response
- UI is rendered based on API call 

# What I did not achieve:
- Floating card as UI design
- Persist the state of the spending limit even if it is restarted
- Some images I just use same icon for demonstration
- Unit testing
- Redux-sagas
