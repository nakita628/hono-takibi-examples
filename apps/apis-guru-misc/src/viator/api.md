<h1 id="viator-api-documentation-amp-specification-merchant-partners">Viator API Documentation &amp;amp; Specification – Merchant Partners v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

&lt;style type='text/css'&gt;
code { white-space: nowrap; }
a { font-weight: bold; }

figure {
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: smaller;
  text-indent: 0;
  border: thin silver solid;
  margin: 0.5em;
  padding: 0.5em;
}

&lt;/style&gt;

## Updates

### Latest update: 

| Date | Description |
|------|-------------|
| 3 Feb 2021 | Added [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) section |
| 28 Oct 2020 | Updated FAQ section re booking questions, traveler names, and pricing |
| 16 Sep 2020 | Modified FAQ section re booking currencies, supplier name display and requesting additional reviews |
| 20 July 2020 | Added [Booking references](#section/Key-concepts/Booking-references) section |

**Previous updates**: See [Update log](#section/Appendices/Update-log)

# Overview

The Viator Partner API comprises a set of endpoints that can support the operation of a fully-featured tours and experiences booking website or application; or, it can be integrated with your existing travel-booking software.

The API exposes a variety of services that allow the retrieval of all product details, such as descriptions, pricing, terms and conditions, photos and reviews. This data can either be ingested periodically and managed on your local system, or calls can be made in real time to retrieve content in response to your users' activity on your systems.

The API allows product availability schedules to be retrieved in bulk or queried in real-time, and it can perform pricing calculations according to the number and type of traveler for the wide variety of product option combinations typically available in the tours and activities sales workflow.

The API provides booking and post-booking functionality, allowing booking requests, ticket purchase, and booking status updates.

Various utility services are available to map between yours and Viator's data taxonomy.

**Please note:** The API does not provide services for storing data, such as user accounts. We assume that merchant partners have their own systems for storing this data.

## Who is the API for?

The Viator Partner API is designed for use by organizations and individuals partnered with Viator in one of the following capacities:

### Merchant partners

A merchant partner is one who operates as the merchant of record; i.e., takes full responsibility for all monetary transactions carried out by their users, as well as providing customer support with regard to providing help, processing cancellations and refunds, and liaising between suppliers and customers when the need to communicate information arises.

Merchant partners are invoiced periodically by Viator for all product sales. You will need to demonstrate that you have access to the appropriate infrastructure to effectively support the requisite business operations in order to become a merchant partner.

### Viator Branded Affiliates (VBAs)

VBAs have full access to the areas of the API relating to content, but sales of Viator products must be carried out on the Viator site itself; therefore, access to the booking or transactional endpoints necessary to operate as the merchant of record (i.e., merchant partners) is restricted. 

When a customer wishes to book a product from a VBA partner's site, they are instead redirected to [viator.com](https://viator.com) in order to complete the purchase; whereas, merchant partners are able to process and manage bookings through the Viator API itself, allowing their customers to book products without leaving the partner's site.

Viator affiliates instead generate unique URLs that redirect their users to the Viator site, resulting in a cookie being set such that all transactions will accrue a commission for that partner until the cookie expires.

Purchases of products originating from the VBAs site are recorded and a commission on these sales is paid periodically.

- **Note**: VBA partners should refer to a different document for technical specifications relevant to their partner type. If you are a VBA partner, please navigate to: [https://docs.viator.com/partner-api/affiliate/technical/](https://docs.viator.com/partner-api/affiliate/technical)

### VBAs with booking capability

VBAs also have the option of allowing their customers to process bookings directly from their site and via the API – similar to a merchant partner – without being redirected to viator.com to complete their transaction. This partner type sends customer details, product details and credit card payment information via the API, but Viator retains control of and responsibility for processing payments and customer support.

### White label partners

White label partners do not operate their own site infrastructure. Instead, Viator provides a white label site with full functionality that can be branded according to the partner’s wishes.

## Uses of the Viator Partner API

The Viator Partner API is used to carry out the following tasks:

### Product search and ingestion

Partners can use the product search endpoints to retrieve lists of products from Viator’s inventory relevant to their business. The available search criteria include:

- The location (destination) in which the product operates
- Whether the product is associated with a well-known tourist attraction; e.g., Empire State Building
- The type of product (known as its category and/or subcategory)
- The time period during which the product operates 
- Words or phrases that occur in a product's description via a free-text search

Partners who prefer to download product details periodically (instead of performing all operations in real time in response to user behavior) do so by using the product search endpoints to compile a list of products that they wish to sell on their site. They then download comprehensive product details for each via the /product endpoint.

#### Product search endpoints:

| Endpoint | Use |
|-|-|
| [/search/products](#operation/searchProducts) | Allows searching for products according to: destination / location, relationship to a known tourist attraction; category and/or subcategory; date of operation |
| [/search/products/codes](#operation/searchProductsCodes) | Retrieves product details for products that match a list of product codes (unique identifiers for the product) |
| [/search/freetext](#operation/searchFreetext) | Retrieves product details for products that include the search terms in the product's description and details. |
| [/available/products](#operation/availableProducts) | Retrieves products that are identified by specific product codes, operate during a specified day range and accept a certain number of adult travelers |

#### Product information endpoints:

All information about a product that must be communicated to customers prior to purchase is available via [/product](#operation/product) and its auxiliary endpoints. This content is generally used to construct product display pages and for performing local searches.

Important information about a product includes:

- Product and supplier names
- Geographic location
- Product description
- Category and subcategory
- Photos (from both users and the supplier)
- User reviews and ratings
- Product options (variants of the tour/activity, such as starting times, passenger mix options, and inclusions/add-ons, including basic pricing information for each)
- Which age ranges can participate
- Booking details
- Cancellation policies
- Basic pricing
- Logistics
  + Inclusions (e.g., provided meals)
  + Exclusions (e.g., entrance fees to visited attractions)
  + Health restrictions and accessibility
  + Departure times
  + Passenger pick-up
  + Duration
  + Tour routes

### Availability

The availability of a tour is communicated via the API's availability endpoints. The availability aspects of a product include:

- On which days and at which times the product is available to be booked
- Whether the product option (variant) supports a certain combination of passengers according to age and number
- Pricing information

Some partners choose to bulk-ingest availability information for their products in order to expedite this part of the customer workflow or to facilitate a local search functionality on their website; but, because this information changes very regularly, a final real-time call is generally recommended to ensure that when the booking request is submitted by the customer it is unlikely to fail on account of a change in availability.

#### Availability endpoints

| Endpoint | Use |
|-|-|
| [/booking/availability](#operation/bookingAvailability) | Returns the product option with the lowest price that is available on each day |
| [/booking/availability/dates](#operation/bookingAvailabilityDates) | Returns all available dates for a product (but without regard to product option) |
| [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) | Returns all product options for a product that are available on the specified day for the specified passenger mix |
| [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) | Returns a detailed matrix of product options, passenger mixes and the pricing applicable to each combination |
| [/booking/calculateprice](#operation/bookingCalculateprice) | Provides a reconfirmation of a product's availability with respect to the product option and passenger mix provided and calculates a final price; used as a final availability check immediately prior to making a booking |

### Booking and cancellations

Merchant partners and VBAs with booking capabilities can use the Viator Partner API to purchase the product through the [/booking/book](#operation/bookingBook) endpoint.

The API also provides services to:

- Enquire about the status of an existing booking
- Retrieve tickets/vouchers for the product
- Cancel a booking

#### Booking endpoints

| Endpoint | Use |
|-|-|
| [/booking/book](#operation/bookingBook) | Make a booking / purchase a product |
| [/booking/status](#operation/bookingStatus) | Retrieve multiple detailed booking statuses based on a range of specified criteria |
| [/booking/status/items](#operation/bookingStatusItems) | Similar to [/booking/status](#operation/bookingStatus), but provides slightly less detail and can be called more frequently |

#### Cancellation endpoints

| Endpoint | Use |
|-|-|
| [/bookings/{booking-reference}/cancel-quote](#operation/bookingQuote) | Returns the expected outcome of a booking cancellation request (taking into consideration the product's cancellation policy) were the cancellation request performed immediately |
| [/bookings/{booking-reference}/cancel](#operation/cancelBooking) | Cancels the booking and assigns a refund depending on the product’s cancellation policy |

### Auxiliary services

Taxonomical data sets are required to interact meaningfully with the Viator Partner API; for example, mappings from destination (location of operation) to their respective identification codes. This information may occasionally change or be added to. Consequently, the API includes endpoints that return the most up-to-date versions of this information.

#### Taxonomy endpoints

| Endpoint | Use |
|-|-|
| [/taxonomy/destinations](#operation/taxonomyDestinations) | Retrieves a list of destination names, types and unique identifiers to be used when interacting with the Viator Partner API |
| [/taxonomy/categories](#operation/taxonomyCategories) | Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](#operation/searchProducts) endpoint |
| [/taxonomy/attractions](#operation/taxonomyAttractions) | Retrieves a list of tourist attractions (e.g., the Eiffel Tower or Empire State Building) and their associated identification codes to be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service |
| [/booking/hotels](#operation/bookingHotels) | Retrieves a list of hotels, including names and geographic locations, to be used when making booking requests |

---

# Authentication

**Note**:

- The authentication mechanism for this API has been updated recently. Now, partners can also authenticate using a [new style of API key](#section/Authentication/exp-api-key) that is included in each call as a &lt;u&gt;header parameter&lt;/u&gt;. Previously, authentication was accomplished by including an API key as a query parameter.

- Partners who are currently authenticating via the [API key query parameter](#section/Authentication/Legacy-API-keys) can continue to authenticate in this way; however, access to the new booking cancellation endpoints ([/bookings/cancel-reasons](#operation/cancellationReasons), [/bookings/cancel-quote](#operation/cancelBookingQuote) and [/bookings/cancel](#operation/cancelBooking)) does require the new-style of API key. All other endpoints remain compatible with both authentication methods.

- If you would like to switch to the [new style of key](#section/Authentication/exp-api-key), please speak to your business development account manager.

## API key

Access to the API is managed using an **API key** that is included as a **header parameter** to every call made to all API endpoints described in this document.

| Header parameter name | Example value |
|-----------------------|---------------|
| exp-api-key | bcac8986-4c33-4fa0-ad3f-75409487026c |

If you do not know the API key for your organization, please contact your business development account manager for these details.

Please note that language localization is now controlled on a per-call basis. Previously, language localization was controlled via API-key configuration, with one language available per API key. Under the present scheme, you can access any language enabled for your organization's point of sale via a **single API key**. 

Language selection is accomplished by specifying the desired language as a header parameter (`Accept-Language`). See [Accept-Language header](#section/Appendices/Accept-Language-header) for available language codes. If you would like access to additional languages, please contact your business development account manager.

## Legacy API key

Previously, authenticating to this API was accomplished by passing an API-key **as a query parameter** appended to the URI for each call; e.g.:

```html
GET https://viatorapi.sandbox.viator.com/service/taxonomy/destinations?apiKey=xxxxxxxxxxxxxxxxxx
```

This method of authentication remains available for backwards-compatibility with existing implementations. If you would like to upgrade to the new style of API key, please contact your business development account manager. 

# Key concepts

## Content ingestion and caching strategy

Much of the information you will need to retrieve from the Viator API – such as the taxonomy, product lists and product details – do not change frequently.

Therefore, we recommend implementing a caching strategy in order to eliminate unnecessary traffic to Viator’s servers and improve the operation of your site. 

This section discusses the different strategies for retrieving and caching Viator’s product catalogue.

You will need to decide on how you will retrieve and manage content from Viator’s product catalogue. The two main options are as follows:

### 1. API response caching

*Partners retrieve content as-needed and cache responses on a service-by-service basis*

If you do not need to store product details locally, we recommend performing caching of on a service-by-service basis; i.e., storing the entire response and applying a time-to-live (TTL) of less than 24 hours.

#### Benefits of API response caching

* All the benefits of caching with minimal overhead
* Minimal risk of serving stale or invalid data cached on the partner's side
* No need to download data about products that are not selling
* A smaller volume of local data improves cache hit performance
* Fewer requests made of Viator's systems
* Avoids rate limitations
* Closer adherence to best practices
* Removes need to manage a complex data structure locally

#### Service endpoints to cache

Caching should only be applied to services that yield infrequently changing data; i.e.:

* [/taxonomy/destinations](](#operation/taxonomyDestinations)
* [/taxonomy/categories](#operation/taxonomyCategories)
* [/taxonomy/attractions](#operation/taxonomyAttractions)
* [/search/products](#operation/searchProducts)
* [/search/products/codes](#operation/searchProductsCodes)
* [/search/freetext](#operation/searchFreetext)
* [/product](#operation/product)
* [/product/reviews](#operation/productReviews)
* [/product/photos](#operation/productPhotos)
* [/available/products](#operation/availableProducts)

**Note**: these services should be considered cacheable even though some are POST and none include a Cache-Control HTTP header in their response.

### 2. Periodic content ingestion

*Partners download either the full product catalogue or a subset of the catalogue at regular intervals based on destination, linked attraction, or product category filters.*

#### Who should use periodic ingestion
This approach may be preferable for partners whose requirements include:
* **System agnosticism/data centralization** – i.e., partners who are simultaneously selling products from vendors other than Viator, have existing product databases or are likely to want to maintain a central product catalogue with a unified taxonomy / data structure
* **Enhanced search capability** – i.e., the ability to apply different categorization rules, filters, exclusions or search optimizations to the product catalogue; e.g., grouping or filtering products according to criteria other than those supported directly by the Viator API (destination, attraction-link or category)

#### Frequency of content ingestion
We recommend that you perform an ingestion of the product catalogue once every 24 hours.

#### How to retrieve product codes

Make a call to one of the product search services:

* [/search/products](#operation/searchProducts) – to search by `destId` (destination), `catId` (category), `subCatId` (subcategory) or `seoId` (attraction)
* [/search/freetext](#operation/searchFreetext) – free-text search across all identifying fields 

#### How to retrieve all products in the catalogue

To retrieve all products from the Viator catalogue:

* Retrieve all available destination identifiers (`destId`) from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
* Iterate through the complete list of `destId`s you retrieved in the previous step, and call [/search/products](#operation/searchProducts) for each `destId`

**Note**: As some products operate in multiple destinations, the same product code may be returned for a range of different destinations. Therefore, make sure your list of product codes only contains one copy of each code.

You may then iterate through this list of product codes to retrieve any other product details necessary in order to properly populate your local database with the information you require.

#### Retrieving a subsection of the product catalogue

You may wish to retrieve only some of the products available in the Viator catalogue; for example, if your organization is only interested in selling products that operate locally.

Your top level search using [/search/products](#operation/searchProducts) is restricted to one of the three main categorization methods for products; i.e., destination, category/subcategory, or attraction-link; however, you may employ your own methods to filter the selection of products based on any attribute in the product data structure.

#### Dealing with pagination using `totalCount` and `topX`

Due to the large number of results that can be returned by the [/search/products](#operation/searchProducts) service, the request might exceed the 30-second time-out limitation on both sandbox and live servers. Therefore, you will need to make multiple requests to this service including pagination information in order to retrieve all products that match your search criteria.

This is accomplished by sequentially requesting successive segments of the results using the `topX` request parameter together with the `totalCount` response field; i.e.:

* For your first request, specify a `topX` of `"1-100"`
  - **Note**: this range is *inclusive*; i.e., `"topX": 1-100"` will yield the first 100 records 
* The first response will indicate the total number of records available through the value of the `totalCount` field in the response object; e.g.: `"totalCount": 13843`
* For each subsequent request, specify the next logical 'chunk' of data via the `topX` parameter of the request; e.g.:
  - "topX": "1-100"
  - "topX": "101-200"
  - ...
  - "topX": "13801-13843"

#### Rate limiting

Due to the heavy load that pre-caching can place on Viator's servers and the downstream servers we connect to, we apply a rate limit of **150 requests per 10 second time window**.

Request rates exceeding this limit will result in a **HTTP 429 (Too Many Requests)** status code being returned.

**Note**: The rate is calculated over a rolling 10-second time window

* In order to avoid running-up against rate limits:
  - insert a delay of 2s if you receive a HTTP 429 status code
  - do not run this as a multi-threaded process

## Categorization of content

The products available in Viator’s catalogue are mainly categorized according to:

1. **Destination**: every product in the Viator catalogue is categorized according to the destination/locale in which it operates. There are three kinds of destination:
&lt;table&gt;
  &lt;thead&gt;
    &lt;th&gt;Destination type&lt;/th&gt;
    &lt;th&gt;Meaning&lt;/th&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;“COUNTRY”&lt;/td&gt;
      &lt;td&gt;A country; e.g., “Australia”, “Japan”, “USA”&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;"REGION"&lt;/td&gt;
      &lt;td&gt;A geographical region or state; e.g., “South Australia”, “French Riviera”, “Punjab”&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;"CITY"&lt;/td&gt;
      &lt;td&gt;A city within a state; e.g., “Townsville”, “Osaka”, “Singapore”&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;&lt;code&gt;destinationName&lt;/code&gt;&lt;/th&gt;
      &lt;th&gt;&lt;code&gt;destId&lt;/code&gt;&lt;/th&gt;
      &lt;th&gt;&lt;code&gt;destinationType&lt;/code&gt;&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;USA&lt;/td&gt;
      &lt;td&gt;77&lt;/td&gt;
      &lt;td&gt;COUNTRY&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Wisconsin&lt;/td&gt;
      &lt;td&gt;22231&lt;/td&gt;
      &lt;td&gt;REGION&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Madison&lt;/td&gt;
      &lt;td&gt;24146&lt;/td&gt;
      &lt;td&gt;CITY&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;France&lt;/td&gt;
      &lt;td&gt;51&lt;/td&gt;
      &lt;td&gt;COUNTRY&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Brittany&lt;/td&gt;
      &lt;td&gt;21942&lt;/td&gt;
      &lt;td&gt;REGION&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Rennes&lt;/td&gt;
      &lt;td&gt;21943&lt;/td&gt;
      &lt;td&gt;CITY&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

1. **Category and subcategory**: the products in the Viator catalogue are grouped according to the kind of activity they entail and may be subcategorized further to provide greater specificity; for example:
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Category&lt;/th&gt;
      &lt;th&gt;Subcategories&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td rowspan=3&gt;Air, Helicopter &amp; Balloon Tours&lt;/td&gt;
      &lt;td&gt;Air Tours&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Helicopter Tours&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Balloon Rides&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td rowspan=2&gt;Weddings &amp; Honeymoons&lt;/td&gt;
      &lt;td&gt;Wedding Packages&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Honeymoon Packages&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
1. **Attraction link** (i.e., association to a particular "point of interest"); e.g.:
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Attraction&lt;/th&gt;
      &lt;th&gt;`seoId`&lt;/th&gt;
    &lt;tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Bellagio Fountains&lt;/td&gt;
      &lt;td&gt;1243&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Black Canyon&lt;/td&gt;
      &lt;td&gt;4437&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Epcot Centre&lt;/td&gt;
      &lt;td&gt;1141&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;


## Booking concepts

### Booking types - *on-request* and *freesale*

Bookings made with Viator can be either *freesale* (immediate confirmation) or *on-request*, which require us to confirm with our product supplier that the product has not sold out and is still available. This difference must be clearly communicated to the customer during the price check and on the *order summary* post-purchase page.

For *freesale* bookings, the voucher becomes available immediately, and the customer's credit card will be charged at the time of booking. For *on-request* bookings, confirmation will be sent to the customer within a timeframe supplied in the [/booking/calculateprice](#operation/bookingCalculateprice) and [/booking](#operation/bookingBook) service responses.

The customer's credit card will be charged once their *on-request* booking is confirmed.

###  bookingEngineId

`bookingEngineId` is a field returned in the responses from several endpoints documented in this manual. It is a **booking type specifier** indicating whether, when the product in question is booked, the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made, indicating that it is an on-request product.

`bookingEngineId` takes *one of* the following values:

  - `"FreesaleBE"` – the product will be confirmed immediately and the supplier will be sent a notification.

  - `"UnconditionalBE"` - the product will be confirmed immediately and the supplier will not be notified.

  - `"DeferredCRMBE"` - the product is an on-request product and the booking will not be confirmed immediately. The booking will remain with a `PENDING` status after it is made, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services.

  - `"FreesaleOnRequestBE"` - The product is freesale up until a certain number of days before the travel date, after which it becomes on-request. It is then referred to as being within the *on-request period*. If a booking is made within the on-request period, the product can be considered to be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period.                      

### Tour grades

Products can have one or more *tour grades*. Each tour grade might represent a departure time or different tour option, such as additional meals, transport and so forth. If the tour grade code is `"DEFAULT"`, *do not* display this to the customer, simply hide the product's tour grade information.

### Language options

Many tours deliver a commentary in multiple languages using multilingual tour guides or with written or prerecorded information. Where available, the customer can preselect their preferred language option.

### Traveler mix (pax)

Some tour grades have defined traveler mixes used to price family passes; or, they might have special mixes for limited passenger tours, such as small buggies or weddings.

These traveler mixes are provided by the [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) service. You may need to display these to your customers so that they are able to understand why they can or cannot select a particular tour grade if there is a traveler mix mismatch.

### Pick-up location and hotel lists

Some products have pick-up and return shuttle bus services. For these tours, you will need the customer to supply a pick-up hotel, or they must select *live locally* or *hotel not yet booked* options.

Viator maintains pick-up hotel lists for many popular destinations. These lists are available for customers to select their pick-up location for various tours. For destinations without hotel lists, customers can enter the name of their hotel. If a customer's hotel is not listed, they should be able to enter a hotel name; however, pick-up may not be possible for that hotel.

### Lead traveler

Each tour booking requires a lead traveler to be identified. To identify the lead traveler in your request, set the `leadTraveller` flag to `true` in the traveler class.

### Booking questions

Some products have a list of one or more [booking questions](#section/Appendices/Booking-questions) that need to be asked. Some are mandatory. The question, a description, etc are provided in the product details object. The answers need to be included with the booking request.

### SSL/HTTPS

Calls to the [/booking/book](#operation/bookingBook) service *must* use a secure channel (https) as they contain credit card information.

### Promo codes

Viator can create promotional (promo) codes for discounts and other purposes. As it's unlikely for you to wish to support this feature, we recommend supplying `null` in the `promoCode` field and not including any customer-entered fields during the checkout process.

### Partner data

Partners can also supply additional information for their own internal purposes. These are attached to booking reports and other materials for use in allocating commissions to agents and so forth.

## Availability services

Product availability information can be retrieved with the following services:

- [/booking/availability](#operation/bookingAvailability): get the tourgrade with the lowest price available on a day
- [/booking/availability/dates](#operation/bookingAvailabilityDates): get all available dates for a product excluding days it does not operate and blockouts
- [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades): list all available tour grades for a specific day
- [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix): returns available days only (ie days which have at least one tour grade available), and the pricing matrix for that tour grade on that day

### Example: multiple departures in a single day

Multiple departures in a single day (each represented by a tour grade) and the language options (langServices).

This request is for 3 adults on a helicopter tour:
- **Note:** No prices are returned if the tour grade is unavailable.

**Request object** ([/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades)):

```javascript
{
  "productCode": "2280AAHT",
  "bookingDate": "2013-05-11",
  "currencyCode": "EUR",
  "ageBands": [{
    "bandId": 1,
    "count": 3
  }]
}
```

**Response object** ([/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades))
:

```javascript
{
  "data": [{
    "available": false,
    "ageBands": null,
    "langServices": null,
    "gradeCode": "EARLYM",
    "unavailableReason": "BOOKING_CUTOFF_EXPIRED",
    "gradeTitle": "Early Morning Departure",
    "gradeDepartureTime": "",
    "gradeDescription": "Flight departs Las Vegas between 7am &amp; 8am",
    "defaultLanguageCode": "en",
    "ageBandsRequired": null,
    "currencyCode": "ERROR",
    "retailPrice": 0,
    "bookingDate": "2013-05-11",
    "retailPriceFormatted": "",
    "merchantNetPrice": 0,
    "merchantNetPriceFormatted": "",
    "sortOrder": 1
  },
  {
    "available": false,
    "ageBands": null,
    "langServices": null,
    "gradeCode": "LATEM",
    "unavailableReason": "BOOKING_CUTOFF_EXPIRED",
    "gradeTitle": "Late Morning Departure",
    "gradeDepartureTime": "",
    "gradeDescription": "Flight departs Las Vegas between 9:45am &amp; 10:45am",
    "defaultLanguageCode": "en",
    "ageBandsRequired": null,
    "currencyCode": "ERROR",
    "retailPrice": 0,
    "bookingDate": "2013-05-11",
    "retailPriceFormatted": "",
    "merchantNetPrice": 0,
    "merchantNetPriceFormatted": "",
    "sortOrder": 2
  },
  {
    "available": false,
    "ageBands": null,
    "langServices": null,
    "gradeCode": "EARLYA",
    "unavailableReason": "BOOKING_CUTOFF_EXPIRED",
    "gradeTitle": "Early Afternoon Departure",
    "gradeDepartureTime": "2:50 PM",
    "gradeDescription": "Flight departs Las Vegas between 12:30pm &amp; 1:30pm",
    "defaultLanguageCode": "en",
    "ageBandsRequired": null,
    "currencyCode": "ERROR",
    "retailPrice": 0,
    "bookingDate": "2013-05-11",
    "retailPriceFormatted": "",
    "merchantNetPrice": 0,
    "merchantNetPriceFormatted": "",
    "sortOrder": 3
  },
  {
    "available": false,
    "ageBands": null,
    "langServices": null,
    "gradeCode": "LATEA",
    "unavailableReason": "BOOKING_CUTOFF_EXPIRED",
    "gradeTitle": "Late Afternoon Departure",
    "gradeDepartureTime": "",
    "gradeDescription": "Flight departs Las Vegas between 3:15pm &amp; 4:15pm; available Ap",
    "defaultLanguageCode": "en",
    "ageBandsRequired": null,
    "currencyCode": "ERROR",
    "retailPrice": 0,
    "bookingDate": "2013-05-11",
    "retailPriceFormatted": "",
    "merchantNetPrice": 0,
    "merchantNetPriceFormatted": "",
    "sortOrder": 4
  }],
  "vmid": "221001",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-06-04T17:01:34+0000",
  "totalCount": 1,
  "errorReference": null,
  "errorMessageText": null,
  "success": true,
  "errorName": null
}
```

### Example: traveler mix mismatch

The request is for five adults, but this product only support up to four adults.

**Example request object** ([/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades)):
```javascript
{
  "productCode": "2280ULTWED",
  "bookingDate": "2013-12-11",
  "currencyCode": "EUR",
  "ageBands": [{
    "bandId": 1,
    "count": 5
  }]
}
```

**Example response object**
The response contains `"TRAVELLER_MISMATCH"` and you can see the `ageBandsRequired` values for the adult (1) age band in the available tour grade.

```javascript
{
  "data": [{
    "available": false,
    "ageBands": null,
    "langServices": null,
    "gradeCode": "DEFAULT",
    "unavailableReason": "TRAVELLER_MISMATCH",
    "gradeTitle": "DEFAULT",
    "gradeDepartureTime": "12:00 AM",
    "gradeDescription": "DEFAULT",
    "defaultLanguageCode": "en",
    "ageBandsRequired": [
    [{
      "bandId": 1,
      "minimumCountRequired": 2,
      "maximumCountRequired": 2
    }],
    [{
      "bandId": 1,
      "minimumCountRequired": 3,
      "maximumCountRequired": 3
    }],
    [{
      "bandId": 1,
      "minimumCountRequired": 4,
      "maximumCountRequired": 4
    }]],
    "currencyCode": "ERROR",
    "retailPrice": 0,
    "bookingDate": "2013-12-11",
    "retailPriceFormatted": "",
    "merchantNetPrice": 0,
    "merchantNetPriceFormatted": "",
    "sortOrder": 1
  }],
  "vmid": "221001",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-06-04T17:02:35+0000",
  "totalCount": 1,
  "errorReference": null,
  "errorMessageText": null,
  "success": true,
  "errorName": null
}
```

## Understanding the pricingUnit field

This section explains the meaning and function of the `pricingUnit` field in the response object received from the [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service.

### Request body
The [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service takes the following parameters as input in its request body:

| Parameter | Type | Meaning |
|-----------|------|---------|
| `productCode` | string | unique alphanumeric identifier of the product to enquire about; e.g., `10040WORLD` |
| `month` | string | **month** of the year by which to filter results |
| `year` | string | **year** by which to filter results |
| `currencyCode` | string | **currency code** for the currency in which to display pricing information |

#### Example request body

Sending the following request body to the [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service will retrieve pricing information for "Skip the Line: World of Discoveries Entrance Ticket in Porto" (product code: 10040WORLD).

```javascript
{
  "productCode": "10040WORLD",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

### Response object

Within each object item of the `tourGrades` array – each of which gives the pricing details for a specific tour grade – is a `pricingMatrix` array. Each object in this array details the per-age-band pricing for a specific pricing unit (`pricingUnit`) associated with that product.

Using this information, you should be able to calculate the total cost of the booking – considering any booking options – with regard to the number of participants.

How to identify the fundamental unit prices for a booking, which are then summed in order to calculate a total price, is detailed below.

Note that in the response object received from the service, pricing schedules are organized hierarchically as follows:

```c
bookingDate
--tourGrade
----ageBand
------price
```

### Types of pricing unit
There are two fundamental types of pricing unit – **per-person** and **per-group**.

#### Per-person pricing schedule
If the pricing is *per-person*, then the total price of the booking will be directly proportional to the number of participants (passengers) of each type that are booking the product; i.e., a direct multiple of the per-person price.

The only pricing unit specifier for *per-person* pricing is “per person”, given in the `pricingUnit` field; i.e.:

- `"pricingUnit": "per person"`

| Pricing unit | Example product | Meaning |
|--------------|---------|---------|
| `"per person"` | **10040WORLD** | **Per-person pricing** – the unit price refers to the price for an individual participant.&lt;br /&gt;Some products have tiered pricing arrangements; i.e., a different per-person price can apply if certain numbers and combinations of participants in a particular age band are booking the product; e.g.:&lt;br /&gt;&lt;ul&gt;&lt;li&gt;**1-2 adults**: $50 per person&lt;/li&gt;&lt;li&gt;**3-4 adults**: $45 per person&lt;/li&gt;&lt;/ul&gt;&lt;br /&gt;Whether a range is available to be booked depends on whether the customer’s desired passenger mix satisfies the `minimumCountRequired` and `maximumCountRequired` fields in each item of the `ageBandPrices` array. |

#### Per-group pricing
If the pricing is per-group, then the total price of the booking will depend on the number of groups and types of group that ideally accommodate the participant mix.

The following pricing schedules follow “per-group” logic:

- `"pricingUnit": "per vehicle"`
- `"pricingUnit": "per car"`
- `"pricingUnit": "per group"`
- `"pricingUnit": "per boat"`
- `"pricingUnit": "per package"`
- `"pricingUnit": "per jetski"`
- `"pricingUnit": "per vessel"`
- `"pricingUnit": "per helicopter"`
- `"pricingUnit": "per room"`
- `"pricingUnit": "per bike"`
- `"pricingUnit": "per flight"`
- `"pricingUnit": "per plane"`
- `"pricingUnit": "per couple"`

Eligibility for a certain individual pricing schedule; or, for inclusion in a particular group type, depends on the tour grade for the product, the type of participant (e.g., the age-band they fall into) and the date of the booking.

#### Group pricing schedules

| Pricing unit  | Example product | Meaning |
|---------------|-----------|---------|
| `"per group"` | **10847P42**  | **Per-group** pricing – the unit price is calculated according to the number of groups the specified passenger will fit into rather than the exact number of participants. `minimumCountRequired` and `maximumCountRequired` must be considered as these fields relate to the available group sizes. |
| `"per room"`  | **6279P26** | **Per-room** pricing relates the room price, which depends on the number of participants making the booking. |
| `"per package"` | **25941P70**  | **Per-package** pricing refers to products that are sold as part of a package; for example a family package stipulating a passenger mix of two adults and two children |
| `"per vehicle"` | **6154SHOP**  | **Per-vehicle** pricing is calculated according to the number of vehicles required for the specified passenger mix rather than the exact number of participants. `minimumCountRequired` and `maximumCountRequired` must be considered as these fields relate to the occupancy limitations for each vehicle. The minimum price will depend on the rate for a single vehicle. |
| `"per car"` | **10175P10**  | **Per-car** pricing – identical to "per vehicle", but refers specifically to vehicles that are cars. |
| `"per boat"`  | **11121P40**  | **Per-boat** pricing – identical to "per vehicle", but refers specifically to vehicles that are boats. |
| `"per jetski"`  | **28965P127** | **Per-jetski** pricing – identical to "per vehicle", but refers specifically to vehicles that are jet-skis. |
| `"per vessel"`  | **17295P24**  | **Per-vessel** pricing – identical to "per vehicle", but refers specifically to maritime vessels that are not strictly boats. |
| `"per helicopter"`  | **12189P23**  | **Per-helicopter** pricing – identical to "per vehicle", but refers specifically to vehicles that are helicopters. |
| `"per bike"`  | **17448P8** | **Per-bike** pricing – identical to "per vehicle", but refers specifically to vehicles that are bikes. |
| `"per flight"`  | **28965P134** | **Per-flight** pricing – identical to "per vehicle", but refers specifically to the act of being aboard a flying vehicle. |
| `"per plane"` | **14876P5** | **Per-plane** pricing – identical to "per vehicle", but refers specifically to vehicles that are aeroplanes. |

### Interpreting response objects by example

In this section, we’ll have a look at snippets from the response objects received from the [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service and interpret the results.

#### Per-person pricing
##### Request object
```javascript
{
  "productCode": "10040WORLD",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```
#### Response snippet

**Note:** `pricingMatrix` is an array of objects that detail the available pricing schedules for the product:

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per person",
    "bookingDate": "2019-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 13.85,
            "priceFormatted": "$13.85",
            "merchantNetPrice": 11.05,
            "merchantNetPriceFormatted": "$11.05",
            "minNoOfTravellersRequiredForPrice": 1
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 0,
        "maximumCountRequired": 15
      },
      {
        "bandId": 2,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 6.92,
            "priceFormatted": "$6.92",
            "merchantNetPrice": 5.53,
            "merchantNetPriceFormatted": "$5.53",
            "minNoOfTravellersRequiredForPrice": 1
          }
        ],
        "sortOrder": 2,
        "minimumCountRequired": 0,
        "maximumCountRequired": 15
      },
      {
        "bandId": 3,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 0,
            "priceFormatted": "$0.00",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "minNoOfTravellersRequiredForPrice": 1
          }
        ],
        "sortOrder": 3,
        "minimumCountRequired": 0,
        "maximumCountRequired": 15
      },
      {
        "bandId": 5,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 10.39,
            "priceFormatted": "$10.39",
            "merchantNetPrice": 8.3,
            "merchantNetPriceFormatted": "$8.30",
            "minNoOfTravellersRequiredForPrice": 1
          }
        ],
        "sortOrder": 4,
        "minimumCountRequired": 0,
        "maximumCountRequired": 15
      }
    ]
  }
]
```

In this example, four age bands (1, 2, 3 and 5) have pricing information available. These numerically-identified age bands are the age bands allowed to book the product. Details of the age ranges that the product operator has defined are available from the **/product** service.

A call to **/product** regarding `10040WORLD` yields the following information:

```javascript
"ageBands": [
  {
    "sortOrder": 1,
    "ageFrom": 13,
    "ageTo": 64,
    "adult": true,
    "bandId": 1,
    "pluralDescription": "Adults",
    "treatAsAdult": true,
    "count": 0,
    "description": "Adult"
  },
  {
    "sortOrder": 2,
    "ageFrom": 65,
    "ageTo": 99,
    "adult": false,
    "bandId": 5,
    "pluralDescription": "Seniors",
    "treatAsAdult": true,
    "count": 0,
    "description": "Senior"
  },
  {
    "sortOrder": 3,
    "ageFrom": 4,
    "ageTo": 12,
    "adult": false,
    "bandId": 2,
    "pluralDescription": "Children",
    "treatAsAdult": false,
    "count": 0,
    "description": "Child"
  },
  {
    "sortOrder": 4,
    "ageFrom": 0,
    "ageTo": 3,
    "adult": false,
    "bandId": 3,
    "pluralDescription": "Infants",
    "treatAsAdult": false,
    "count": 0,
    "description": "Infant"
  }
```

Product operators choose the age bands available for their product from the following five categories and define the age ranges that pertain to each band; i.e.:

| `bandId` | `description` |
|:----------:|:-----------:|
| **1** | Adult |
| **2** | Child |
| **3** | Infant |
| **4** | Youth |
| **5** | Senior |

For this product, the age bands have been defined as follows:

| `bandId` | `description` | `ageFrom` | `ageTo` |
|:--------:|:-----------:|:-------:|:-----:|
| **1** | Adult | 13 | 64 |
| **5** | Senior | 65 | 99 |
| **2** | Child | 4 | 12 |
| **3** | Infant | 0 | 3 |

Therefore, for this product, the following pricing applies:

| Passenger type | Number | Price |
|----------------|:------:|-------|
| **Adult** | 1-15 | $13.85 per person |
| **Senior** | 1-15 | $10.39 per person |
| **Child** | 1-15 | $6.92 per person |
| **Infant** | 1-15 | free ($0) |

Per-person pricing might depend on the mix of passengers booking the tour. In the following example (`5010SYDNEY`), a "48 Hour Family Pass Ticket" has a different price for children depending on how many are participating, which we'll see in the following snippet.

##### Response snippet
```javascript
"tourGrades": [
  {
    "sortOrder": 1,
    "gradeCode": "14HFAM",
    "gradeTitle": "48 Hour Family Pass Ticket",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 133.47,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$133.47",
                "merchantNetPrice": 106.62,
                "merchantNetPriceFormatted": "$106.62"
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 1
          },
          {
            "bandId": 2,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 0,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$0.00",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00"
              }
            ],
            "sortOrder": 2,
            "minimumCountRequired": 2,
            "maximumCountRequired": 2
          },
          {
            "bandId": 3,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 0,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$0.00",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00"
              }
            ],
            "sortOrder": 3,
            "minimumCountRequired": 0,
            "maximumCountRequired": null
          }
        ]
      },
      {
        "sortOrder": 2,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 133.47,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$133.47",
                "merchantNetPrice": 106.62,
                "merchantNetPriceFormatted": "$106.62"
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 1
          },
          {
            "bandId": 2,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 3.71,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$3.71",
                "merchantNetPrice": 2.96,
                "merchantNetPriceFormatted": "$2.96"
              }
            ],
            "sortOrder": 2,
            "minimumCountRequired": 3,
            "maximumCountRequired": 4
          },
          {
            "bandId": 3,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 0,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$0.00",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00"
              }
            ],
            "sortOrder": 3,
            "minimumCountRequired": 0,
            "maximumCountRequired": null
          }
        ]
      }
    ]
  },
  …
]
```

##### Interpretation

To be eligible for a family pass ticket, the group must consist of an adult and at least two children.

| Passenger mix | Adult price | Child price | Infant price |
|---------------|:-----------:|:-----------:|:------------:|
| 1 Adult +&lt;br /&gt;1 Child | N/A | N/A | N/A |
| 1 Adult +&lt;br /&gt;2 Children +&lt;br /&gt;Any infants | $133.47 | FREE | FREE |
| 1 Adult +&lt;br /&gt;3-4 Children +&lt;br /&gt;Any infants | $133.47 | $3.71 | FREE |

#### Tiered per-person pricing

In this example, we see a per-person pricing schedule with a tiered arrangement, where the per-person price decreases depending on how many people are booking the tour, but the total price is still calculated as the sum of the individual per-person prices rather than an overall 'group' price.

##### Request object
```javascript
{
  "productCode": "17972P102",
  "currencyCode": "USD",
  "month": "08",
  "year": "2019"
}
```
##### Response snippet

```javascript
"tourGrades": [
  {
    "sortOrder": 1,
    "gradeCode": "TG1",
    "gradeTitle": "Arrival transfer",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 52.45,
                "priceFormatted": "$52.45",
                "merchantNetPrice": 40.87,
                "merchantNetPriceFormatted": "$40.87",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 1,
            "minimumCountRequired": 1
          }
        ]
      },
      {
        "sortOrder": 2,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 26.22,
                "priceFormatted": "$26.22",
                "merchantNetPrice": 20.44,
                "merchantNetPriceFormatted": "$20.44",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 2,
            "minimumCountRequired": 2
          }
        ]
      },
      {
        "sortOrder": 3,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 17.91,
                "priceFormatted": "$17.91",
                "merchantNetPrice": 13.62,
                "merchantNetPriceFormatted": "$13.62",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 3,
            "minimumCountRequired": 3
          }
        ]
      },
      {
        "sortOrder": 4,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 19.19,
                "priceFormatted": "$19.19",
                "merchantNetPrice": 14.99,
                "merchantNetPriceFormatted": "$14.99",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 4,
            "minimumCountRequired": 4
          }
        ]
      },
      {
        "sortOrder": 5,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 15.35,
                "priceFormatted": "$15.35",
                "merchantNetPrice": 12.25,
                "merchantNetPriceFormatted": "$12.25",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 5,
            "minimumCountRequired": 5
          }
        ]
      },
      {
        "sortOrder": 6,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 12.66,
                "priceFormatted": "$12.66",
                "merchantNetPrice": 10.08,
                "merchantNetPriceFormatted": "$10.08",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 6,
            "minimumCountRequired": 6
          }
        ]
      },
      {
        "sortOrder": 7,
        "pricingUnit": "per person",
        "bookingDate": "2019-08-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 10.94,
                "priceFormatted": "$10.94",
                "merchantNetPrice": 8.72,
                "merchantNetPriceFormatted": "$8.72",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "maximumCountRequired": 7,
            "minimumCountRequired": 7
          }
        ]
      }
    ]
  }
```

##### Interpretation

| Travelers | Per-person price | Total price |
|:----------------:|:----------------:|:-----------:|
| 1 | $52.45 | $52.45 |
| 2 | $26.22 | $52.44 |
| 3 | $17.91 | $53.73 |
| 4 | $19.19 | $76.76 |
| 5 | $15.35 | $76.75 |
| 6 | $12.66 | $75.96 |
| 7 | $10.94 | $76.58 |

#### Per-group pricing
##### Request object
```javascript
{
  "productCode": "10847P42",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

##### Response snippet

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per group",
    "bookingDate": "2019-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 390,
            "minNoOfTravellersRequiredForPrice": 1,
            "priceFormatted": "$390.00",
            "merchantNetPrice": 339.74,
            "merchantNetPriceFormatted": "$339.74"
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 390,
            "minNoOfTravellersRequiredForPrice": 2,
            "priceFormatted": "$390.00",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00"
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 10
      }
    ]
  }
]
```

##### Interpretation

- "$390 per group of up to 10 adults"

#### Per-room pricing

##### Request object
```javascript
{
  "productCode": "100245P40",
  "currencyCode": "USD",
  "month": "08",
  "year": "2019"
}
```
##### Response snippet

```javascript
"pricingMatrix": [
{
    "sortOrder": 1,
    "pricingUnit": "per room",
    "bookingDate": "2019-08-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 110,
            "minNoOfTravellersRequiredForPrice": 1,
            "priceFormatted": "$110.00",
            "merchantNetPrice": 95.85,
            "merchantNetPriceFormatted": "$95.85"
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 110,
            "minNoOfTravellersRequiredForPrice": 2,
            "priceFormatted": "$110.00",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00"
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 10
      }
    ]
  }
]
```

##### Interpretation
- "$110 per group of up to 10 adults"

#### Per-package pricing

##### Request object
```javascript
{
  "productCode": "25941P70",
  "currencyCode": "USD",
  "month": "02",
  "year": "2019"
}
```

##### Response snippet
```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per package",
    "bookingDate": "2019-02-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 87.7,
            "minNoOfTravellersRequiredForPrice": 1,
            "priceFormatted": "$87.70",
            "merchantNetPrice": 67.23,
            "merchantNetPriceFormatted": "$67.23"
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 87.7,
            "minNoOfTravellersRequiredForPrice": 2,
            "priceFormatted": "$87.70",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00"
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 10
      }
    ]
  }
]
```

##### Interpretation
- "$87.70 per group of up to 10 adults"

#### Per-vehicle pricing

##### Request object
```javascript
{
  "productCode": "20190P4",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

##### Response snippet
```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per vehicle",
    "bookingDate": "2019-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 250,
            "minNoOfTravellersRequiredForPrice": 1,
            "priceFormatted": "$250.00",
            "merchantNetPrice": 186.38,
            "merchantNetPriceFormatted": "$186.38"
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 250,
            "minNoOfTravellersRequiredForPrice": 2,
            "priceFormatted": "$250.00",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00"
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 7
      }
    ]
  }
]
```

##### Interpretation
- "$250 per group of up to 7 adults"

#### Per-car pricing
##### Request object
```javascript
{
  "productCode": "10175P10",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

#### Response snippet

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per car",
    "bookingDate": "2019-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 98.08,
            "priceFormatted": "$98.08",
            "merchantNetPrice": 78.34,
            "merchantNetPriceFormatted": "$78.34",
            "minNoOfTravellersRequiredForPrice": 1
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 98.08,
            "priceFormatted": "$98.08",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "minNoOfTravellersRequiredForPrice": 2
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 3
      }
    ]
  }
]
```
##### Interpretation
- "$98.08 per group of up to 3 adults"

#### Per-boat pricing
##### Request object
```javascript
{
  "productCode": "11121P40",
  "currencyCode": "USD",
  "month": "08",
  "year": "2018"
}
```
##### Response snippet

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per boat",
    "bookingDate": "2018-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 266.21,
            "merchantNetPrice": 226.81,
            "merchantNetPriceFormatted": "$226.81",
            "priceFormatted": "$266.21",
            "minNoOfTravellersRequiredForPrice": 1
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 266.21,
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "priceFormatted": "$266.21",
            "minNoOfTravellersRequiredForPrice": 2
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 2
      }
    ]
  }
]
```

##### Interpretation
- "$266.21 per group of up to 2 adults"

#### Per-jetski pricing
##### Request object
```javascript
{
  "productCode": "28965P127",
  "currencyCode": "USD",
  "month": "08",
  "year": "2018"
}
```
##### Response snippet
```javascript
"tourGrades": [
  {
    "sortOrder": 1,
    "gradeCode": "TG1",
    "gradeTitle": "20 minutes for 1 person",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per jetski",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 55.46,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$55.46",
                "merchantNetPrice": 47.25,
                "merchantNetPriceFormatted": "$47.25"
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 1
          }
        ]
      }
    ]
  },
  {
    "sortOrder": 2,
    "gradeCode": "TG3",
    "gradeTitle": "20 minutes for 2 persons",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per jetski",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 66.55,
                "minNoOfTravellersRequiredForPrice": 1,
                "priceFormatted": "$66.55",
                "merchantNetPrice": 56.7,
                "merchantNetPriceFormatted": "$56.70"
              },
              {
                "sortOrder": 2,
                "currencyCode": "USD",
                "price": 66.55,
                "minNoOfTravellersRequiredForPrice": 2,
                "priceFormatted": "$66.55",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00"
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 2
          }
        ]
      }
    ]
  }
]
```

##### Interpretation

This example shows how group prices can differ according to the size of the group in question. In this case, two adults can ride together on a two-person jet ski, whereas a single adult requires his or her own jet ski, and therefore the unit price is slightly higher for the single adult.

| Travelers | Vehicle type | Price per jet ski | Price per person |
|:----------:|--------------|:-----------------:|:----------------:|
| 1 | Single-person jet ski | $55.46 | $55.46 |
| 2 | Two-person jet ski | $66.55 | $33.275 |

#### Per-vessel pricing

##### Request object

```javascript
{
  "productCode": "17295P24",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

##### Response snippet

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per vessel",
    "bookingDate": "2019-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 799,
            "priceFormatted": "$799.00",
            "merchantNetPrice": 680.75,
            "merchantNetPriceFormatted": "$680.75",
            "minNoOfTravellersRequiredForPrice": 1
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 799,
            "priceFormatted": "$799.00",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "minNoOfTravellersRequiredForPrice": 2
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 12
      }
    ]
  }
]
```

##### Interpretation
- "$799.00 per group of up to 12 adults"

#### Per-helicopter pricing

##### Request object

```javascript
{
  "productCode": "12189P23",
  "currencyCode": "USD",
  "month": "08",
  "year": "2018"
}
```

##### Response snippet
```javascript
"tourGrades": [
  {
    "sortOrder": 1,
    "gradeCode": "TG1",
    "gradeTitle": "Private Helicopter 1 to 2 Pax",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per helicopter",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 1714.83,
                "priceFormatted": "$1,714.83",
                "merchantNetPrice": 1461.03,
                "merchantNetPriceFormatted": "$1,461.03",
                "minNoOfTravellersRequiredForPrice": 1
              },
              {
                "sortOrder": 2,
                "currencyCode": "USD",
                "price": 1714.83,
                "priceFormatted": "$1,714.83",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00",
                "minNoOfTravellersRequiredForPrice": 2
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 2
          }
        ]
      }
    ]
  },
  {
    "sortOrder": 2,
    "gradeCode": "TG2",
    "gradeTitle": "Private Helicopter 1 to 3 Pax",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per helicopter",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 2047.41,
                "priceFormatted": "$2,047.41",
                "merchantNetPrice": 1744.4,
                "merchantNetPriceFormatted": "$1,744.40",
                "minNoOfTravellersRequiredForPrice": 1
              },
              {
                "sortOrder": 2,
                "currencyCode": "USD",
                "price": 2047.41,
                "priceFormatted": "$2,047.41",
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00",
                "minNoOfTravellersRequiredForPrice": 2
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 3
          }
        ]
      }
    ]
  }
]
```

##### Interpretation
| Travelers | Vehicle type | Price per helicopter | Price per person |
|:----------:|--------------|:--------------------:|:----------------:|
| 1 | 1-2-person helicopter | $1,714.83 | $1,714.83 |
| 2 | 1-2-person helicopter | $1,714.83 | $857.415 |
| 3 | 1-3-person helicopter | $2,047.41 | $682.47 |

#### Per-bike pricing

##### Request object
```javascript
{
  "productCode": "17448P8",
  "currencyCode": "USD",
  "month": "08",
  "year": "2018"
}
```

#### Response snippet
```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per bike",
    "bookingDate": "2018-06-01",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 208.53,
            "priceFormatted": "$208.53",
            "merchantNetPrice": 177.67,
            "merchantNetPriceFormatted": "$177.67",
            "minNoOfTravellersRequiredForPrice": 1
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 208.53,
            "priceFormatted": "$208.53",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "minNoOfTravellersRequiredForPrice": 2
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 2
      }
    ]
  }
]
```

##### Interpretation

- "$208.53 per bike, with up to two adults per bike"

#### Per-flight pricing

##### Request object

```javascript
{
  "productCode": "28965P134",
  "currencyCode": "USD",
  "month": "08",
  "year": "2018"
}
```

##### Response snippet

```javascript
"tourGrades": [
  {
    "sortOrder": 1,
    "gradeCode": "TG1",
    "gradeTitle": "Individual flight",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per flight",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 61.01,
                "merchantNetPrice": 51.98,
                "merchantNetPriceFormatted": "$51.98",
                "priceFormatted": "$61.01",
                "minNoOfTravellersRequiredForPrice": 1
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 1
          }
        ]
      }
    ]
  },
  {
    "sortOrder": 2,
    "gradeCode": "TG2",
    "gradeTitle": "Double",
    "pricingMatrix": [
      {
        "sortOrder": 1,
        "pricingUnit": "per flight",
        "bookingDate": "2018-06-01",
        "ageBandPrices": [
          {
            "bandId": 1,
            "prices": [
              {
                "sortOrder": 1,
                "currencyCode": "USD",
                "price": 94.28,
                "merchantNetPrice": 80.33,
                "merchantNetPriceFormatted": "$80.33",
                "priceFormatted": "$94.28",
                "minNoOfTravellersRequiredForPrice": 1
              },
              {
                "sortOrder": 2,
                "currencyCode": "USD",
                "price": 94.28,
                "merchantNetPrice": 0,
                "merchantNetPriceFormatted": "$0.00",
                "priceFormatted": "$94.28",
                "minNoOfTravellersRequiredForPrice": 2
              }
            ],
            "sortOrder": 1,
            "minimumCountRequired": 1,
            "maximumCountRequired": 2
          }
        ]
      }
    ]
  }
]
```

##### Interpretation

| Travelers | `gradeTitle` | Price per flight | Price per person |
|:----------:|-----------|:----------------:|:----------------:|
| 1 | Individual flight | $61.01 | $61.01 |
| 2 | Double | $94.28 | $47.14 |

#### Per-plane pricing

##### Request object

```javascript
{
  "productCode": "14876P5",
  "currencyCode": "USD",
  "month": "06",
  "year": "2019"
}
```

##### Response snippet

```javascript
"pricingMatrix": [
  {
    "sortOrder": 1,
    "pricingUnit": "per plane",
    "bookingDate": "2019-01-02",
    "ageBandPrices": [
      {
        "bandId": 1,
        "prices": [
          {
            "sortOrder": 1,
            "currencyCode": "USD",
            "price": 433.03,
            "priceFormatted": "$433.03",
            "merchantNetPrice": 391.99,
            "merchantNetPriceFormatted": "$391.99",
            "minNoOfTravellersRequiredForPrice": 1
          },
          {
            "sortOrder": 2,
            "currencyCode": "USD",
            "price": 433.03,
            "priceFormatted": "$433.03",
            "merchantNetPrice": 0,
            "merchantNetPriceFormatted": "$0.00",
            "minNoOfTravellersRequiredForPrice": 2
          }
        ],
        "sortOrder": 1,
        "minimumCountRequired": 1,
        "maximumCountRequired": 3
      }
    ]
  }
]
```

##### Interpretation
- "$433.03 per group of up to three people"

## Working with age bands

### Age bands

The available age bands for a product, such as *adult*, *child*, *infant*, etc., are returned by the [/product](#operation/product) service. The customer can select a different number of people from each age band during the price check and checkout process.

### Why have age bands?

Tour and experience product operators can set different prices for (and impose different rules on) those wishing to make a booking for their product according to how old they are. 

For example, suppliers might choose to charge people 18 years and older ('adults') the full ticket price, while 'children' can book at a lower price. 

Or, the tour operator may only allow children to make a group booking for the tour so long as the group contains 'at least one adult'.

Viator provides five categories (age bands) that product operators can use to segregate travelers into age groups (the limits of which they also define) in order to set pricing and traveler-count participation rules for their product according to the age band categories.

### Supported age band categories

The age bands supported by the Viator API are as follows:

| `bandId` | Description |
|:------:|-------|
| **1** | Adult |
| **2** | Child |
| **3** | Infant |
| **4** | Youth |
| **5** | Senior |

The names and corresponding numeric identifiers of these categories are fixed as in the table above (i.e., `1` is always `Adult`); however, the exact age range to which each category pertains must be defined manually by the supplier.

The maximum and minimum ages that each age band describes for each product can be retrieved from the [/product](#operation/product) service.

### Example of age band definitions

For example, a call to [/product](#operation/product) regarding `10040WORLD` yields the following `ageBands` array within its response object:

```javascript
"ageBands": [
  {
    "sortOrder": 1,
    "ageFrom": 13,
    "ageTo": 64,
    "adult": true,
    "bandId": 1,
    "pluralDescription": "Adults",
    "treatAsAdult": true,
    "count": 0,
    "description": "Adult"
  },
  {
    "sortOrder": 2,
    "ageFrom": 65,
    "ageTo": 99,
    "adult": false,
    "bandId": 5,
    "pluralDescription": "Seniors",
    "treatAsAdult": true,
    "count": 0,
    "description": "Senior"
  },
  {
    "sortOrder": 3,
    "ageFrom": 4,
    "ageTo": 12,
    "adult": false,
    "bandId": 2,
    "pluralDescription": "Children",
    "treatAsAdult": false,
    "count": 0,
    "description": "Child"
  },
  {
    "sortOrder": 4,
    "ageFrom": 0,
    "ageTo": 3,
    "adult": false,
    "bandId": 3,
    "pluralDescription": "Infants",
    "treatAsAdult": false,
    "count": 0,
    "description": "Infant"
  }
```

For this product, the age bands have been defined as follows:

| `bandId` | `description` | `ageFrom` | `ageTo` |
|:--------:|:-----------:|:-------:|:-----:|
| **1** | Adult | 13 | 64 |
| **5** | Senior | 65 | 99 |
| **2** | Child | 4 | 12 |
| **3** | Infant | 0 | 3 |

Product operators must define at least one age band for their tour, and there are no 'default' age ranges. Therefore, if the product operator has only specified a single 'adult' age band covering ages 18-99, it must be assumed that only people aged 18-99 are eligible to book the tour, essentially excluding children and centenarians in this case.

| Field | Type | Definition |
|-------|------|------|
| `sortOrder` | integer | the sort order for *this* age band |
| `adult` | boolean | `true` if this age band is the 'adult' age band |
| `treatAsAdult` | boolean | `true` if this age band can book the tour without the need for adult accompaniment |

**Note**: `bandId` must be supplied in the request body of the following services:

- [/booking/availability](#operation/bookingAvailability)
- [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades)
- [/booking/calculateprice](#operation/bookingCalculateprice)
- [/booking/book](#operation/bookingBook)

Age bands are referenced by their `bandId` in the responses from the following services:

- [/product](#operation/product)
- [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades)
- [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix)
- [/booking/book](#operation/bookingBook)
- [/booking/pastbooking](#operation/bookingPastbooking)
- [/booking/mybookings](#operation/bookingMybookings)
- [/booking/calculateprice](#operation/bookingCalculateprice)

## How to report a product issue

Occasionally, a product schema in the Viator database will contain incorrect or invalid information. Usually, this occurs due to a mistake made by the supplier of the product when creating the product or updating its details.

Nonetheless, it's in all our best interests for product information to be accurate and up-to-date; therefore, if you discover a problem with a product, we would greatly appreciate it if you could report the error through our [product issue reporting form](https://www.tfaforms.com/433240).

### How to use the product issue reporting form

1. Navigate to the [product issue reporting page](https://www.tfaforms.com/433240)
2. Fill in the **Reporter**, **Supplier ID**, **Product Code** and **Booking ID** fields:

| Field | How to fill it in | Example |
|-------|-------------------|---------|
| Reporter | Enter your email address for tracking or correspondence | `you@emailserver.com` |
| Supplier ID | Enter the value returned in the `supplierCode` field by the [/product](#operation/product) service for the product in question. | `3072` |
| Product Code | Enter the value returned in the `code` field by the [/product](#operation/product) service for the product in question. | `3072LASALL` |
| Booking ID | Leave this field blank | |

3. In the **Reason** box below, choose **Content** by clicking on its radio selector. A list of categories will appear, with meanings as follows:

| Category | Included issues | 
|----------|---------|
| Additional Info | clauses in the `additionalInfo` array in the response from [/product](#operation/product); e.g., departure time or hotel pick-up information |
| Availability &amp; Blockouts | N/A |
| Booking Details | N/A |
| Highlights | `highlights` array items in the response from [/product](#operation/product) |
| Inclusions / Exclusions | `inclusions` or `exclusions` array items in the response from [/product](#operation/product) |
| Images | `productPhotos` and `userPhotos` returned by [/product](#operation/product) or [/product/photos](#operation/productPhotos) |
| Product Title | `title` in the response from [/product](#operation/product), [/search/products](#operation/searchProducts), [/search/products/codes](#operation/searchProductsCodes) and [/search/products/freetext](#operation/searchFreetext) |
| Product Descriptions | `description` and `shortDescription` in the response from [/product](#operation/product)|
| SAPI | N/A |
| Tour Options &amp; Pricing | pricing issues; e.g. when the value of `merchantNetPrice` is `0`; or, if `merchantNetPrice` &gt; `price` |
| Taxonomy | &lt;ul&gt;&lt;li&gt;destination issues in response from [/taxonomy/destination](#operation/taxonomyDestinations)&lt;/li&gt;&lt;li&gt;category / subcategory issues in response from [/taxonomy/categories](#operation/taxonomyCategories)&lt;/li&gt;&lt;/ul&gt; |
| Translation Incorrect | mistakes in any natural-language field in the response from any service where `translationLevel` is non-zero |
| TVRM | N/A |
| VUC incorrect | N/A |

4. After selecting the category of issue from the options shown, fill-in the **Description / Action Required** box with a good, clear description of the problem and any specific additional actions you would like us to take
5. Click **Submit** to send the report

&lt;figure&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/tae-report-a-product-issue.jpg" alt="Tripadvisor experiences report a product form"/&gt;
    &lt;figcaption&gt;Example Report a Product Issue form&lt;/figcaption&gt;
&lt;/figure&gt;

Once your report has been submitted, a member of our Supplier Support Team will contact the supplier of the product in question to resolve any problems with their listing.

## Selling on-request products

This section explains what merchant API partners need to do in order to be granted access to (and, ultimately, sell) the many on-request products available in Viator's product catalogue.

### 'Freesale' vs 'on-request' products

Among the products in our inventory, a major differentiating feature is whether they are 'freesale' or 'on-request':

- **Freesale** products are always available to be booked on their days of operation; therefore, when a freesale product is purchased, the booking is confirmed and the customer is charged immediately.
- **On-request** products only operate at the discretion of the supplier, who must confirm (or reject) each booking request, which will remain 'pending' in the interim. The customer is only charged once confirmation is received.

#### Access to on-request products

By default, you will only have access to the freesale product range; access to the on-request product range is restricted on account of the extra complexities involved with handling this kind of booking.

### Should I elect to sell on-request products?

#### Business case for including on-request products in your inventory

While the majority of products in our inventory are 'freesale', a significant proportion remain 'on-request'. Upgrading your booking platform to support on-request products can lead to an increase in revenue of between 5% and 13%, depending on the locale(s) in which you operate.

| Locale | Revenue increase % |
|:------:|:------------------------:|
| en | 8% |
| es | 8% |
| fr | 11% |
| de | 10% |
| pt | 5% |
| nl | 12% |
| it | 10% |
| ja | 10% |
| sv | 8% |
| no | 8% |
| da | 13% |
| tw | 13% |
| zh | 6% |

Having a wider range of products on offer can be a key differentiator with respect to your competitors. 

Customers often purchase multiple products in the same session – if the product they're looking for isn't available on your platform, they are likely to seek a competitor with a more complete range of products for sale.

#### Logistical considerations to enable on-request products

In order to sell on-request products, you will need to:

- Modify your back-end systems to support extra logic and API requests
- Establish and support an extra, email-based communications channel with your customers
- Create some email templates
- Modify your platform's front end to accommodate the extra steps required in the booking process
- Write copy that ensures customers clearly understand that they are booking a product that will not be confirmed or charged immediately

However, as the on-request booking confirmation process is fully automated, you will not need to:

- Undertake any additional manual steps compared with booking a freesale product
- Personally contact the product supplier or our partner support team

Instead, checking the status of bookings (whether confirmed or not) can be accomplished using the [/booking/status](#operation/bookingStatus) and [/booking/status/items](#operation/bookingStatusItems) services. These services can be polled periodically to determine the confirmation status of your bookings.

&lt;u&gt;**Note**&lt;/u&gt;: We recommend using the [/booking/status/items](#operation/bookingStatusItems) service to poll for booking statuses, as it is both faster and can be polled more frequently than [/booking/status](#operation/bookingStatus), which can only be polled once every thirty minutes.

### How to support on-request products

#### Product detail page

Managing customer expectations is a key factor in supporting on-request products on your booking platform. 

Make clear mention that this is a product for which confirmation will not be received immediately, but rather within 48 hours of making the booking.

This fact, as well as other pertinent tidbits, can be found in the `additionalInfo` array in the response from **/product**. It is mandatory that all clauses in the `additionalInfo` array are clearly displayed on your product detail page.

&lt;figure&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/additional-info-on-request-clause.jpg" alt="Additional info displayed on a product page on the Viator site"/&gt;
    &lt;figcaption&gt;Additional info displayed on a product page on the Viator site
     &lt;/figcaption&gt;
&lt;/figure&gt;

#### Check-out

As you will only charge the customer's credit card once the on-request booking is confirmed (i.e., after we have received confirmation of the booking from the product supplier) it's best to display a message to this effect at a prominent point of the check-out flow for all on-request products.

&lt;figure&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/checkout-flow-confirmation-info.jpg" alt="Example checkout-flow instruction on the Viator site"/&gt;
    &lt;figcaption&gt;Example checkout-flow instruction on the Viator site&lt;/figcaption&gt;
&lt;/figure&gt;

In this way, customers can be reassured that they are not being charged for a booking that may never be confirmed, thereby minimizing needless calls to your customer service team.

#### Combination purchases

If a single booking includes both freesale (instantly confirmed) and on-request products, only the amount for the freesale product should be charged immediately; the portion corresponding to the on-request booking should only be charged once confirmation is received. 

Until that time, a pre-authorization should be held against the customer’s credit card until confirmation is received.

It is important that you clearly differentiate between products that are confirmed and those that are pending confirmation, and communicate the status of each and that the pre-authorization will only finalize once the on-request products are confirmed.

#### Confirmation page

Changes will need to be made to your confirmation page because it will not be possible for your customer to download a voucher after completing an on-request booking.

Vouchers for freesale products, however, must be made available immediately following the completion of the booking process.

#### Email communications

You will need to create email templates for &lt;u&gt;all&lt;/u&gt; the following scenarios:

- Confirmation emails for bookings with on-request products should indicate that the item is pending confirmation from the supplier; and, that confirmation for this activity will take up to 48 hours, depending on availability.
- If the on-request booking is confirmed by the supplier (this time including the voucher details)
- If the on-request booking is rejected
- If multiple on-request products have been booked:
    + If all items have been accepted/confirmed
    + If all items were rejected
    + If there is a mixture of acceptance and rejection; i.e., 'pending' + 'rejected' + 'cancelled' + 'amended' and so forth.
- If a mixture of freesale and on-request products are booked at the same time; i.e., in the same cart or booking

&lt;u&gt;**Note**&lt;/u&gt;: When a booking is declined, it is useful to mention that the customer's card was not charged.

##### Example email for an on-request booking pending confirmation:

&lt;figure&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/on-request-confirmation-email-1.jpg" alt="Viator website showing translation attribution"/&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/on-request-confirmation-email-2.jpg" alt="Viator website showing translation attribution"/&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/on-request-confirmation-email-3.jpg" alt="Viator website showing translation attribution"/&gt;
&lt;/figure&gt;

### Confirmation time-outs resulting in rejection

As mentioned above, once a booking for an on-request product is made, it remains in a 'pending' state, awaiting confirmation by the supplier. The supplier has the option of 'confirming' or 'rejecting' the booking.

Such bookings will not remain 'pending' indefinitely, however. If the supplier has not confirmed the booking within 72 hours –&nbsp;or if they have not confirmed the booking by the time it reaches 24 hours from departure – our systems will automatically reject the booking, and this will be reflected in the response from the [/booking/status/items](#operation/bookingStatusItems) and [/booking/status](#operation/bookingStatus) services.

There will be no indication that the rejection occurred on account of the supplier being unable to perform their duties. Therefore, you should simply inform the customer that, for reasons out of your control, this on-request tour was unavailable.

### Building in the sandbox environment

Upgrading your booking platform to support on-request products will require you to build and test this functionality in the sandbox environment. However, as no actual booking requests are made with the supplier when using a sandbox-only API-key, you will need to contact our API tech support team at [apitechsupport@viator.com](mailto:apitechsupport@viator.com) and request that the booking be confirmed or rejected as you require.

While necessary, this is a manual process. We'd genuinely appreciate your effort in keeping the number of these requests to a minimum.

### Certification and going live

Once you have completed all tasks mentioned here and sent your Viator account manager the email copy for the different scenarios [described above](#email-communications), we will change the status of your product API-key to include on-request products.

## Localization and translation

### Foreign language products

The products available through the Viator API have been created in a variety of languages, often by the suppliers of those products themselves. 

Although the majority of these have been created in English, many have been created in other languages. For example, a tour that operates in Paris might have been created in French.

Viator provides translation services to localize product descriptions to the language of the locale in which they are being presented. In this way, products with descriptions – for example, in French – can be displayed in English on English-language websites. Conversely, products with English-language-descriptions can be displayed in French on French-language websites.

 * **Note**: product descriptions are translated into the language specified in the `Accept-Language` header parameter in the request to each endpoint. 

### Human and machine translation

Some products have been translated by actual humans – 'human translated' –  while others have been automatically translated using Google Translate – 'machine translated'.

The type of translation that has been applied to a product (if any) is indicated by its `translationLevel`, a numeric specifer with meanings as follows:

| `translationLevel` | Meaning |
|-----------------|---------|
| `0` | The product was created by the supplier in the language you specifed using the `Accept-Language` header parameter in the request; i.e., the natural-language text in this response has not been translated |
| `80` | All product information has been &lt;u&gt;machine translated&lt;/u&gt; |
| `90` or `100` | All product information has been &lt;u&gt;human translated&lt;/u&gt; |

Therefore, any product with a non-zero `translationLevel` has been translated either by a human or via an automatic process.

The `translationLevel` field is returned in the response objects from the following services:

* [/search/products](#operation/searchProducts)
* [/search/products/codes](#operation/searchProductsCodes)
* [/search/freetext](#operation/searchFreetext)
* [/product](#operation/product)
* [/available/products](#operation/availableProducts)

When performing a product search using any of these services, you will receive - by default - products with a `translationLevel` of:

* `0` (products that are in the language you specified in `Accept-Language` and are configured for your API-keys), and
* `90` or `100` (products that have been &lt;u&gt;fully human translated&lt;/u&gt;)

### Accessing machine-translated products

If your implementation can support the large number of products available that are machine translated, you can.

However, access to the considerable volume of machine-translated products (level `80`), is &lt;u&gt;not granted by default&lt;/u&gt;.

To access machine-translated products, you will need to: 

1. Request access to machine-translated products in sandbox from your Business Development account manager.
2. Test your site with sandbox to ensure that you can download and display all the available content.
3. Have your Business Development account manager review your implementation and grant access in the production environment.

## Merchant pricing

Many of the endpoints in the Viator API return pricing information. Due to the necessity of supporting legacy implementations, some pricing fields may not be named in an intuitive way.

This section seeks to clarify what each of the pricing fields returned by each endpoint actually refer to and how you need to use this information in your implementation.

### Categories of pricing

| Category | Meaning |
|----------|---------|
| **Suggested retail price** | The recommended retail price for the product and the price that the product is sold at on the Viator site |
| **Merchant net rate** | The amount that Viator will invoice the merchant for this sale, **excluding the transaction fee** |
| **Merchant total price** | The total amount that Viator will invoice the merchant for this sale, **including the transaction fee** |

| Service | Suggested retail price | Merchant net rate |
|---------|------------------------|-------------------|
| [/search/products](#operation/searchProducts) | `price`, `priceFormatted` | `merchantNetPriceFrom`, `merchantNetPriceFromFormatted` |
| [/product](#operation/product) | `price`, `priceFormatted`, `priceFrom`, `priceFromFormatted` | `merchantNetPriceFrom`, `merchantNetPriceFromFormatted` |
| [/booking/availability](#operation/bookingAvailability) | `retailPrice`, `retailPriceFormatted` | `merchantNetPrice`, `merchantNetPriceFormatted` |
| [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) | `retailPrice`, `retailPriceFormatted` | `merchantNetPrice`, `merchantNetPriceFormatted` |
| [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) | `price`, `priceFormatted` | `merchantNetPrice`, `merchantNetPriceFormatted` |
| [/booking/book](#operation/bookingBook) | N/A | `merchantNetPrice`, `merchantNetPriceFormatted`, `lastRetailPrice`, `lastRetailPriceFormatted` |
| [/booking/pricingmatrix](#operation/bookingPricingmatrix) | `price`, `priceFormatted` | `merchantNetPrice`, `merchantNetPriceFormatted` |
| [/booking/calculateprice](#operation/bookingCalculateprice) | N/A | `merchantNetPrice`, `merchantNetPriceFormatted`, `lastRetailPrice`, `lastRetailPriceFormatted`, `itineraryFromPrice`, `itineraryFromPriceFormatted`, `itineraryNewPrice`, `itineraryNewPriceFormatted` |
| [/booking/pastbooking](#operation/bookingPastbooking) | N/A | `merchantNetPrice`, `merchantNetPriceFormatted`, `lastRetailPrice`, `lastRetailPriceFormatted`,  |
| [/booking/mybookings](#operation/bookingMybookings) | N/A | `merchantNetPrice`, `merchantNetPriceFormatted`, `lastRetailPrice`, `lastRetailPriceFormatted` |

The following services return the **merchant total price** (i.e., the merchant net rate + transaction fee) in the fields shown:

| Service | Merchant total price fields |
|---------|-----------------------------|
| [/booking/book](#operation/bookingBook) | `price`, `priceFormatted`, `totalPrice`, `totalPriceFormatted`, `priceUSD`, `totalPriceUSD` |
| [/booking/calculateprice](#operation/bookingCalculateprice) | `price`, `priceFormatted`, `priceUSD`, `totalPrice`, `totalPriceFormatted`, `totalPriceUSD` |
| [/booking/pastbooking](#operation/bookingPastbooking) | `price`, `priceFormatted`, `totalPrice`, `totalPriceFormatted`, `priceUSD`, `totalPriceUSD`, |
| [/booking/mybookings](#operation/bookingMybookings) | `price`, `priceFormatted`, `priceUSD`, `totalPrice`, `totalPriceFormatted`, `totalPriceUSD` |

### Using the pricing fields

Let's have a look at the various pricing fields for a specific product - the Grand Canyon All-American Helicopter Tour (product code: 2280AAHT).

A search for this product (at the time of writing) on the Viator.com site gives the 'from' price of the tour as **$601.11**:

&lt;figure&gt;
    &lt;img src="https://docs.viator.com/partner-api/resources/merchant/technical/img/suggested-retail-price.jpg" alt="'from' price on viator.com product detail page"/&gt;
    &lt;figcaption&gt;Retail price shown on viator.com&lt;/figcaption&gt;
&lt;/figure&gt;

This value comes from the `price` or `priceFormatted` fields in the response from [/product](#operation/product) for this tour; i.e.,:

```javascript
{
  ...,
  "price": 601.11,
  "priceFormatted": "$601.11",
  ...
}
```

Essentially, this value is the price that the product is sold at on the viator site, and is therefore the **suggested retail price**; i.e., the price at which we recommend you advertise and sell the product for.

It is also the price of the tour grade with the lowest price; in this case, the "Earlybird A-Star" tour grade detailed here:

```javascript
{
    "sortOrder": 5,
    "currencyCode": "AUD",
    "langServices": {
        "en/SERVICE_AUDIO": "English - Audio"
    },
    "gradeCode": "EB_ASTAR_SP",
    "merchantNetPriceFrom": 555.37,
    "priceFrom": 601.11,
    "priceFromFormatted": "$601.11",
    "merchantNetPriceFromFormatted": "$555.37",
    "gradeTitle": "Special: Earlybird A-Star",
    "gradeDepartureTime": "",
    "gradeDescription": "Special Offer: Receive a discounted seat for the Grand Canyon All American Helicopter Tour departing between 6:45am and 7am on an A-Star helicopter",
    "defaultLanguageCode": "en"
},
```

As you can see, the "suggested retail price" is given in the `priceFrom` field.

#### Low and zero-margin products

When setting the retail price at which you sell products on your site, it’s important to remember that the “suggested sell price” is the price at which the product is currently advertised on the Viator site and reflects the current standard industry price for the product. It &lt;u&gt;does not&lt;/u&gt; take into consideration the merchant net price (i.e., the price at which you as a merchant partner will be invoiced for the sale) and, in the case of discounting scenarios, may in fact be less than the merchant net price.

Therefore, to ensure that you sell the product at a price which guarantees that you receive at least as much as you will be invoiced for, as well as any extra profit margin that you desire to generate, we recommend you include a check in your implementation that these requirements are satisfied by comparing the suggested retail and merchant net prices and adjusting the retail price at which you advertise the product accordingly.

For example, if the merchant net price for a product is $100, the suggested sell price is $101, and your requirement for a minimum margin is 5%, you should adjust the price at which you advertise the product to $105.

While we recommend that you charge your customers this amount, it is ultimately up to you as to the price you set for the product, bearing in mind that  Viator will then invoice you for the **merchant net rate** (`merchantNetPriceFrom`) of $555.37 &lt;u&gt;plus&lt;/u&gt; a **transaction fee** calculated as a percentage of the net rate; i.e., the **merchant total price**. 

**The exact value of this transaction fee is detailed in your contract with Viator.**

## Special offers and on-sale pricing

Suppliers have the option of setting special pricing deals for their products. When a product is 'on sale'; i.e., has a temporarily lowered price, it will be reflected in the product content response, as follows:

| Field name | Standard pricing | Special offer / on-sale pricing |
|------------|----------------|-------------------------|
| `specialOfferAvailable` | `false` | `true` |
| `specialOffer` | `""` (empty string) | e.g.: `"Book by February 28 to save 10%"` |
| `rrp` | `0.0` | pre-discount price |
| `rrpFormatted` | `""` (empty string) | currency-formatted pre-discount price |
| `price` | standard price | special offer price |
| `priceFormatted` | currency-formatted **standard price** | currency-formatted **special-offer price** |
| `merchantNetPriceFrom` | standard merchant net rate | special offer merchant net rate |
| `merchantNetPriceFromFormatted` | currency formatted standard merchant net rate | currency formatted special offer merchant net rate |
| `priceFormatted` | currency-formatted **standard price** | currency-formatted **special-offer price** |
| `priceFrom` (in `tourgrades`) | standard price | special offer price |
| `priceFromFormatted` (in `tourgrades`) | currency-formatted **standard price** | currency-formatted **special-offer price** |

You can use this information to highlight which products are on special and provide details to the user about the special offer.

## Supplier communications

### How can suppliers communicate with end customers?

Suppliers occasionally need to reach out to customers for a variety of reasons, such as:

* Requesting pick-up locations, flight details or passenger weight information
* Providing weather alerts, sold-out notifications or general messaging

To allow suppliers to contact customers directly, Viator provides a **Closed Loop Communication (CLC)** system. 

### How to enable CLC

CLC is enabled per-booking and at the time of booking by supplying the customer’s `email` and either `homePhone` or [`cellphone` + `cellPhoneCountryCode`] – or both – in the `booker` object in the request body sent to the [/booking/book](#operation/bookingBook) service when making a booking.

This will allow suppliers to send CLC messages directly to the end customer.

#### Note:

* You will receive a CC of each supplier message to your customer support email address in case further assistance is required, but no action from your support team will be necessary for suppliers to communicate with customers.

* Merchants choosing this option should mention to their customers that they are purchasing a product from a third-party supplier, and that they may therefore receive communications regarding the purchase directly from that supplier. 

#### Example request body snippet to enable direct CLC
```javascript
{
    ...
    "booker": {
        "homePhone": "(02)66987564",
        "firstname": "Homer Test",
        "surname": "Simpson Test",
        "title": "Mr",
        "cellPhoneCountryCode": "61",
        "cellPhone": "431532778",
        "email": "hsimpson@customeremail.com"
    }
    ...
}
```

### Supplier communications without CLC

To have CLCs from the supplier sent &lt;u&gt;only&lt;/u&gt; to your (the merchant's) customer support team:

* Leave the `cellPhone`, `cellPhoneCountryCode` and `homePhone` fields blank in the request to the [/booking/book](#operation/bookingBook) service when making a booking.

**Note:** Utilizing this option requires merchants to manage the final loop of communication with the end customer to ensure that their tour/activity can be fulfilled successfully.

## Cancellation policy

As well as *making* bookings, merchant partners are also able to *cancel* bookings through the Viator API using the [/bookings/cancel-reasons](#operation/cancellationReasons), [/bookings/{booking-ref}/cancel-quote](#operation/cancelBookingQuote) and [/bookings/{booking-ref}/cancel](#operation/cancelBooking) endpoints. Items cancelled via the [/bookings/{booking-ref}/cancel](#operation/cancelBooking) endpoint will be cancelled in full, and only one booking can be cancelled at a time.

For more information about the content of the new `merchantTermsAndConditions` object, see [Cancellation policy](#section/Key-concepts/Cancellation-policy).


### Cancellation policies

All products can be cancelled by the merchant; however, the refund granted by the supplier to the customer differs depending on the cancellation policy for the product in question.

There are &lt;u&gt;three&lt;/u&gt; cancellation policy categories, **standard**, **custom** and **all sales final**, represented by an integer in the `merchantTermsAndConditionsType` field in the `merchantTermsAndConditions` object returned by [/product](#operation/product): `1`, `2` or `3`, respectively.

**Note:** *These policies are those provided by Viator to our merchant partners. Merchants can choose whether to extend these terms to their customers unchanged or set their own cancellation terms. For example, the merchant partner can choose to make all products non-refundable; or, they might change the full-refund cancellation window to 72 hours instead of 24 hours, and so forth.*

### `1` – Standard cancellation policy
Products in this category are cancellable up to 24 hours before the travel date (local supplier time) for a full refund. However, a &lt;u&gt;100% cancellation penalty&lt;/u&gt; applies for cancellations submitted less than 24 hours before the start time. Most products (about 85%) fall into this category.

#### Example response snippet

- **Source endpoint**: [/product](#operation/product)
- **Product**: `5010SYDNEY`

```javascript
{
  "data": {
    "merchantTermsAndConditions": {
      "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
      "merchantTermsAndConditionsType": 1,
      "amountRefundable": null,
      "cancellationFromTourDate": [
        {
          "dayRangeMin": 0,
          "dayRangeMax": 1,
          "percentageRefundable": 0,
          "policyStartTimestamp": null,
          "policyEndTimestamp": null
        },
        {
          "dayRangeMin": 1,
          "dayRangeMax": null,
          "percentageRefundable": 100,
          "policyStartTimestamp": null,
          "policyEndTimestamp": null
        }
      ]
    },
    "...": "..."
  }
}
```

This product has the *standard* cancellation policy; i.e., when a booking is cancelled:

| Policy | **dayRangeMin** | **dayRangeMax** | Logic | **percentageRefundable** |
|--------|:-----------:|:-----------:|-------|:--------------------------:|
| *less than* &lt;u&gt;one&lt;/u&gt; day (24 hours) before the start time | 0 | 1 | (product_start_time - cancellation_time) &gt;= 0 days &amp;&amp; (product_start_time - cancellation_time) &lt; 1 days | 0 |
| *more than* &lt;u&gt;one&lt;/u&gt; day (24 hours) before the start time | 1 | null | (product_start_time - cancellation_time) &gt;= 1 day | 100 |

### `2` – Custom cancellation policy
The refund amount for products in this category varies depending on how long before its start time the product is cancelled. Many products on a custom policy are multi-day tours, which require more sophisticated planning on the supplier’s end. Only a small number of products (around 5%) fall into this category.

#### Example response snippet

- **Source endpoint**: [/product](#operation/product)
- **Product**: `2264RJ410`

```javascript
"data": {
  "merchantTermsAndConditions": {
    "termsAndConditions": "If you cancel at least 30 day(s) in advance of the scheduled departure, there is no cancellation fee.&lt;br&gt;If you cancel between 10 and 29 day(s) in advance of the scheduled departure, there is a 50 percent cancellation fee.&lt;br&gt;If you cancel within 9 day(s) of the scheduled departure, there is a 100 percent cancellation fee.&lt;br&gt;",
    "merchantTermsAndConditionsType": 2,
    "amountRefundable": null,
    "cancellationFromTourDate": [
      {
        "dayRangeMin": 10,
        "dayRangeMax": 30,
        "percentageRefundable": 50,
        "policyStartTimestamp": null,
        "policyEndTimestamp": null
      },
      {
        "dayRangeMin": 30,
        "dayRangeMax": null,
        "percentageRefundable": 100,
        "policyStartTimestamp": null,
        "policyEndTimestamp": null
      },
      {
        "dayRangeMin": 0,
        "dayRangeMax": 10,
        "percentageRefundable": 0,
        "policyStartTimestamp": null,
        "policyEndTimestamp": null
      }
    ]
  },
  "...": "..."
}
```

This product has a complex cancellation policy; where cancellations processed:

| Policy | **dayRangeMin** | **dayRangeMax** | Logic | **percentageRefundable** |
|--------|:-----------:|:-----------:|-------|:--------------------------:|
| &lt;u&gt;30&lt;/u&gt; days or more before the start time | 30 | null | (product_start_time - cancellation_time) &gt;= 30 days | 100 |
| &lt;u&gt;10&lt;/u&gt; days and *less than* &lt;u&gt;30&lt;/u&gt; days (10 to 30 days) *before* the start time or more | 10 | 30 | (product_start_time - cancellation_time) &gt;= 10 days &amp;&amp; (product_start_time - cancellation_time) &lt; 30 days | 50 |
| *less than* &lt;u&gt;10&lt;/u&gt; days *before* the start time | 0 | 10 | (product_start_time - cancellation_time) &lt; 10 days | 0 |

**Note:** `null` in the `dateRangeMax` field means *negative infinity*; i.e., *infinitely far in the past with respect to* `dateRangeMin`.

Additional clauses will be included in the `termsAndConditions` field in natural language. This field is for human consumption and is not classically machine-interpretable.

### `3` – All sales final (100% cancellation penalty / no refund offered)

Products in this category cannot be cancelled or amended without incurring a 100% penalty; i.e., the refund amount will be zero. Around 10% of products fall into this category.

#### Example response snippet

- **Source endpoint**: [/product](#operation/product)
- **Product**: `5985P7`

```javascript
{
  "data": {
    "merchantTermsAndConditions": {
      "termsAndConditions": "All sales are final and incur 100% cancellation penalties.&lt;br&gt;",
      "merchantTermsAndConditionsType": 3,
      "amountRefundable": null,
      "cancellationFromTourDate": [
        {
          "dayRangeMin": 0,
          "dayRangeMax": null,
          "percentageRefundable": 0,
          "policyStartTimestamp": null,
          "policyEndTimestamp": null
        }
      ]
    },
    "...": "..."
  }
}
```
Products in this category can be cancelled, but no refund will be granted (in most cases...)

### Canceling items with a 'pending' booking status

As alluded, there is an exception to this rule. Products with an 'on-request' [booking type](#section/Key-concepts/Booking) can still be cancelled when their booking status is `"pending"` – i.e., before the supplier has confirmed the booking – and a full refund will be granted.

It is impossible to predict how long an 'on-request' booking will remain 'pending'. However, it is possible to check by enquiring about the booking using one of the post-booking services; i.e.:

* [/booking/status](#operation/bookingStatus)
* [/booking/status/items](#operation/bookingStatusItems)
* [/booking/pastbooking](#operation/bookingPastbooking)
* [/booking/mybookings](#operation/bookingMybookings)

An 'all sales final' product in a 'pending' state that can be cancelled and a refund granted will have the following characteristics:

1. The `bookingStatus` object returned from one of the services above will have a `type` of `"PENDING"`, and `pending` will be `true`.
2. The `amountRefundable` field of the `merchantTermsAndConditions` object will be non-zero and non-null. Rather, it will contain a currency-formatted string showing the amount that would be refunded if the cancellation were performed immediately; e.g., "USD 55.33".


### Policy start and end times

Within the `merchantTermsAndConditions` object returned in the response from [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking) and [/booking/mybookings](#operation/bookingMybookings), the `amountRefundable` field shows the amount of money in the selected currency that will be refunded if the cancellation is processed now, while the `policyStartTimestamp` and `policyEndTimestamp` fields indicate the exact times between which the different cancellation refund rates apply.

#### Example response snippet (`merchantTermsAndConditions`) from [/booking/book](#operation/bookingBook)

- **Product**: `5010SYDNEY`
- **Note**: observe that `amountRefundable`, `policyStartTimestamp` and `policyEndTimestamp` are populated here.

```javascript
"data": {
  "merchantTermsAndConditions": {
    "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
    "amountRefundable": "USD 55.33",
    "cancellationFromTourDate": [
      {
        "dayRangeMin": 1,
        "dayRangeMax": null,
        "percentageRefundable": 100,
        "policyStartTimestamp": null,
        "policyEndTimestamp": 1551513600000
      },
      {
        "dayRangeMin": 0,
        "dayRangeMax": 1,
        "percentageRefundable": 0,
        "policyStartTimestamp": 1551340800000,
        "policyEndTimestamp": 1551427200000
      }
    ]
  },
  "...": "..."
}
```

### Post-travel cancellations

Occasionally, customers seek a refund for a product **after** completing their travels.

The reason for this might be because they were unable to attend the tour due to the supplier having cancelled the tour due to bad weather or some other reason out of the customer's control; or, the customer might have been extremely dissatisfied with the tour itself, felt that it was misrepresented in its advertising, or some other serious complaint.

When this occurs, you will need to [send a refund request by email to dpsupport](mailto:dpsupport@viator.com) and include both "CANCEL" and the booking reference number in the subject line.

For **all** post-travel cancellation requests, you will need to include a detailed description of the issue. 

Except in cases of known service interruptions (e.g., due to extreme weather events), we will first verify the issue and seek authorization from the product supplier. 

Once a decision regarding the refund has been made, we will notify your Customer Services Department with this information. You will then need to advise your customer directly and process the refund if granted.

### Interpreting `policyStartTimestamp` and `policyEndTimestamp`

The integers that populate the `policyStartTimestamp` and `policyEndTimestamp` fields represent points in time that mark the boundaries of the policy time period in the [Unix time format](https://en.wikipedia.org/wiki/Unix_time); i.e., the number of seconds that have elapsed since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.

Unix timestamps can be easily read and interpreted using the 'time' (or similar) library of your favorite programming language. For human purposes, an [online conversion tool](https://www.epochconverter.com/) can be used.

As per the example above, canceling this booking between the following times yields zero refund (because it is within the 24 hour window):

| **Field name** | `policyStartTimestamp` | `policyEndTimestamp` |
|----------------|------------------------|----------------------|
| **Unix time** | 1551340800000 | 1551427200000 |
| **Human readable time** | GMT: Thursday, February 28, 2019 8:00:00 AM | GMT: Friday, March 1, 2019 8:00:00 AM |

* **Note**: Please use `policyStartTimestamp` and `policyEndTimestamp`, rather than `dayRangeMin` and `dayRangeMax`, to determine which cancellation policy is in effect.

### Partial refunds

While we recommend that you, as a merchant partner, support the processing of partial refunds for your customers, it is up to your whether you implement this functionality. 

If you would prefer to only grant the full (100%) refund that is offered on most products so long as the cancellation is processed more than 24 hours prior to the product's start time, we recommend that you implement logic that checks whether a 100% refund is available for the product at the time the customer wishes to cancel their booking.

| **Type 1: Standard policy** (`merchantTermsAndConditionsType` is `1`) |
|-------------------------------------------------------------|
| The 100% refund is available so long as the cancellation is performed more than 24 hours prior to the product start time |

| **Type 2: Custom policy** (`merchantTermsAndConditionsType` is `2`) |
|-----------------------------------------------------------|
| You will need to check whether any of the object-items in the `cancellationFromTourDate` array have: &lt;ul&gt;&lt;li&gt;a `percentageRefundable` value of `100`, and&lt;/li&gt;&lt;li&gt;`dayRangeMin` and `dayRangeMax` **or** `policyStartTimestamp` and `policyEndTimestamp` values that include the present time&lt;/li&gt;&lt;/ul&gt; |

| **Type 3: All sales final** (`merchantTermsAndConditionsType` is `3`) |
|-------------------------------------------------------------|
| No refunds are available; therefore, granting a refund to your customer for this kind of product will be solely at *your* expense (i.e., you will still be invoiced for the cost of the tour by Viator). Therefore, we recommend that you do not allow refunds for products with this policy. |

## Booking references 

When a booking is made successfully via the [/booking/book](#operation/bookingBook) endpoint, Viator assigns it a numeric identifier, now known as the **booking reference**.

This booking reference is returned in the service's response in the `itemId` field; however, this `itemId` is found in different locations depending on the endpoint used:

| Endpoint |  itemId element location |
|----------|-------------------|
| [/booking/book](#operation/bookingBook) | `data.itemSummaries[].itemId` |
| [/booking/status](#operation/bookingStatus) | `data.itemSummaries[].itemId` |
| [/booking/status/items](#operation/bookingStatusItems) | `data[].itemId` |
| [/booking/pastbooking](#operation/bookingPastbooking) | `data.itemSummaries[].itemId` |
| [/booking/mybookings](#operation/bookingMybookings) | `data[].itemSummaries[].itemId` |

The booking reference can used in the **request** in the following endpoints as the value in the `itemId` field or in the `itemIds` array:

- [/booking/status](#operation/bookingStatus)
- [/booking/status/items](#operation/bookingStatusItems)
- [/booking/pastbooking](#operation/bookingPastbooking)
- [/booking/mybookings](#operation/bookingMybookings)
- [/booking/voucher](#operation/bookingVoucher)

### New booking references

The new booking cancellation endpoints; i.e.: 

- [/bookings/{booking-reference}/cancel-quote](#operation/cancelBookingQuote)
- [/bookings/{booking-reference}/cancel](#operation/cancelBooking)

...use this booking reference value as an in-URL request parameter, but its format is slightly different. 

Essentially, it is the booking's numeric identifier (`itemId`), but prepended with `BR-`.  For example, if the `itemId` is `580254558`, the `bookingId` value in the cancellation request should be `BR-580254558`. 

The booking cancellation endpoints confirm the booking reference in the response in the `bookingId` field; e.g.:

```json
{
  "bookingId": "BR-580669678",
  "refundDetails": {
    "itemPrice": 412.04,
    "refundAmount": 412.04,
    "refundPercentage": 100,
    "currencyCode": "USD"
  },
  "status": "CANCELLABLE"
}
```

# Common workflows and data validation

Users of the API usually implement a booking process workflow. The common workflows are:
- [add to cart](#section/Common-workflows-and-data-validation/Add-to-cart)
- [checkout](#section/Common-workflows-and-data-validation/Checkout)
- [view voucher or confirmation status](#section/Common-workflows-and-data-validation/View-voucher-or-confirmation-status)
- [make a booking](#section/Common-workflows-and-data-validation/Booking-process-flow)

## Add to cart

### Summary

Because the Viator API is both stateless and does not include services for managing a customer's shopping cart, this functionality must be fully managed on the merchant's side.

Viator's servers can generate a price quote for one or several items, but this collection will not be saved by the server.

We recommend the following process:

1. **View product** - allow the customer to browse products and product details
2. **Select date and passengers** - allow the customer to check available dates and select the type and number of passengers
3. **Select tourgrade** - display the available tour grades
4. **View cart** -&gt; **price quote** - display a total price (including multiple items)

### View product
From your *view product details* section, a button should be presented to **check availability** or **book now** or something similar. Use the [/product](#operation/product) service to retrieve product details and schedules.

### Select date and passengers
Here, the customer is presented with the dates that remain available for the product. Available dates can be obtained via a request to [/booking/availability/dates](#operation/bookingAvailabilityDates). The list of [age bands](#section/Key-concepts/Working-with-age-bands) (i.e.: 'adult', 'child'; and, each band's maximum and minimum age) is available from the [/product](#operation/product) service.

**Validation** – ensure that:
1. The total number of travelers being booked does not exceed the limit returned in the `maxTravellerCount` field of the [/product](#operation/product) service
2. *At least one* adult (or adult equivalent) passenger has been selected
3. The selected dates are available (use [/booking/availability/dates](#operation/bookingAvailabilityDates))

### Select tour grade

Once the date and traveler mix have been selected, the customer may need to select a tour grade. Products that do not have this information recorded in the Viator database are assigned a tour grade of `"DEFAULT"`. For these products, it is unnecessary to select a tour grade.

Tour grade options must be displayed to the customer when the product has multiple tour grades, due to:
- different departure times
- traveler mix price deals, like family passes
- different inclusions and prices - e.g., limo pickup, different language delivery options), or...
- non-default tour grades – these tour grades *must* be presented to the customer.

The tour grades for a product are retrieved with the [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) service. If a tour grade is available (check the `available` flag), an 'add to cart' button can be displayed. For unavailable tour grades (`available` is `false`), a reason (`unavailableReason`) is provided, which will be one of:

- `"TRAVELLER_MISMATCH"`
- `"BLOCKED_OUT"`, or
- `"UNAVAILABLE"`

You may choose to hide the blocked-out tour grades (if all tour grades are unavailable on a particular day, a day's tour grades are all `"BLOCKED_OUT"`, or the product is not operating that day, the [/booking/availability/dates](#operation/bookingAvailabilityDates) service will not return that date).

You may also find that a product has no bookable tour grades on a day if the traveler mix does not meet that tour grade's traveler mix restrictions. For example, a honeymoon might require two adults as the only possible traveler mix.

You can choose to hide the `"BLOCKED_OUT"` tour grades, but you will probably want to display the `"TRAVELLER_MISMATCH"` grades with the traveler mix requirements listed so that the customer can elect to alter their traveler mix to suit (e.g., for family passes, etc.) You cannot allow the passenger to book with an incompatible traveler mix.

The return object includes information about tour grade restrictions:

`ageBandsRequired`:
- `minimumCountRequired`: minimum number of travelers for an [age band](#section/Key-concepts/Working-with-age-bands)
- `maximumCountRequired`: maximum number of travelers for an [age band](#section/Key-concepts/Working-with-age-bands). If this field is `null`, any number of travelers may be booked.

You will need to present the `ageBandsRequired` information as in the following examples:

| In 'Adult' age band | Meaning |
|---------------------|---------|
| `minimumCountRequired` = 1&lt;br&gt;`maximumCountRequired` = 3 | From 1 to 3 adults |
| `minimumCountRequired` = 0&lt;br&gt;`maximumCountRequired` = 3 | up to three adults |
| `minimumCountRequired` = 3&lt;br&gt;`MaximumCountRequired` =  | 3 or more adults |
| `minimumCountRequired` = 2&lt;br&gt;`MaximumCountRequired` = 2 | 2 adults |


**Note:** There is a singular and plural version for each age band definition. We recommend automatically generating language that ensures the samples above are grammatically correct using this information.

The user can click **back** and change their traveler mix; or, they can try selecting another day.

### View cart / price quote

Once the item has been added to the cart, you will need to preserve this information as part of the session data in your back-end, or as a browser cookie. In particular, you will need to store the *product code* and *age band to quantity traveler mix*.

#### Sample PHP shopping cart item class
**Note:** this is only an example and is implementation dependent. Alternatively, you could use the item class (as used in the API calls), but much of the information it contains does not need to be stored:

```javascript
class shoppingCartItem {
  var $productCode;
  var $tourGrade;
  var $date;
  var $ageBandIdToQty; // assoc array
}
```

To obtain a price quote, you must call the [/booking/calculateprice](#operation/bookingCalculateprice) service. This service requires a currency code and an array of items to be specified. Each item contains the date, product code, tour grade code and an associative array of `ageBandIds` -&gt; `quantity`.

**Validation** – the data must contain [valid age bands](#section/Key-concepts/Working-with-age-bands), tour codes, dates, etc. acquired in previous requests to the API.

**Note:** A product's availability can change in the time between API calls as tour grades or products may be blocked out, or the booking window may close for upcoming dates.

## Checkout

### Summary

The checkout process can be accomplished using the [/booking/book](#operation/bookingBook) service, but you may need to make requests to other services to calculate prices, display product information (age-band names, etc.) and list available pick-up hotels for user selection.

The Viator mobile website breaks the workflow down into three steps. For multiple items, some steps will need to be repeated, such as capturing the traveler names for each tour. In your implementation, you can reorganize/reorder the data collection to better suit your needs.

**Example workflow:**

1. **Collect traveler details** - collect the names of the lead traveler and all other travelers
2. **Collect travel details** - ask any additional questions, including those about any special requirements, and select pick-up options.
  - **Note:** the aforementioned steps will need to be repeated for each item)
3. **Collect booking details**
  - **Note:** billing and payment details *should not* be sent to Viator.

The classes for the booking request are defined here in Booking Data Classes. You will need implement these in your chosen programming language and verify that the correct JSON objects are generated during serialization.

### Traveler details

The traveler details are used to populate the `booking-&gt;items[]-&gt;travellers[]` objects.

One passenger must be identified as the "lead traveler". A boolean field in the traveler object represents this flag. The lead traveler must be an adult or have the age band `treatAsAdult` flag set to `true`.

All other travelers must be included.

**Validation** 

Ensure that:

  - `bandId` is a [valid age band ID](#section/Key-concepts/Working-with-age-bands) for the product
  - `firstname` is less than 16 chars
  - `surname` is less than 36 chars
  - `title` is not included unnecessarily (it is optional)
  - `leadTraveller` is set to `true` for one of the travelers who is in an [age band](#section/Key-concepts/Working-with-age-bands) that has the `treatAsAdult` flag set to `true`

### Other details

#### Booking questions

The travel details include the [booking questions](#section/Appendices/Booking-questions) that are supplied in the [/product](#operation/product) service.

**Sample question**

**Note:** There may be more than one.

```javascript
bookingQuestions: [{
  "message": "For safety reasons you must enter the weight of &lt;b&gt;all&lt;/b&gt; passengers",
  "required": true,
  "questionId": 23,
  "title": "Passenger Weights",
  "subTitle": "(e.g. 127 pounds, 145 kilos, etc)",
  "sortOrder": 1
}]
```
The questions should be displayed with the title, message, subtitle and whether it is mandatory (required) or not.

**Validation** – if the question is mandatory, the user must enter at least one character.

#### Special requirements

'Special requirements' should be presented as a text input field so that customers can record whether they require wheelchair assistance, for example. It is not mandatory for the customer to enter any text.

#### Pick-up information

The last thing that must be collected for each item being booked is the pick-up information. If the product includes pick-up, the `hotelPickup` flag will be set to `true` (in the product object).

If pick-up is included, you will need to make a request to [/booking/hotels](#operation/bookingHotels) to determine if a hotel list exists. If it does, the list must be displayed so that the customer can make their selection. If not, a text input field should be displayed for hotel name collection.

Please note that the *first three results* in the list are *not* hotels; rather, these three are alternative selections, comprising:

- 'Hotel not listed'
- 'Live locally or staying with family/friends'
- 'Hotel not yet booked'

If the customer selects 'hotel not listed', you *must* provide a hotel selection text input field. For the other two options, no hotel name is required. In all cases, the hotel ID must be updated with either a hotel ID or the IDs of the three items listed.

If no hotel list is available, you must provide a text input field for collecting the customer's hotel name. Please include instructions to enter 'live locally' or 'hotel not yet booked' if they cannot provide a hotel name.

**Validation** – if hotel list is available, the `hotelId` must be supplied. If the `hotelId` is `notListed` the, `pickupPoint` field *must* have at least one character.

If a hotel list is not available, then `pickupPoint` must contain a value.

#### Language services

If the response from the [/product](#operation/product) service contains information in the `languageServices` field, e.g.:

```javascript
"langServices": {
  "en/SERVICE_AUDIO": "English - Audio"
}
```

...you must specify which language option you wish to book for this tour in the `languageOptionCode` field (see request body schema of the [/booking/book service](#operation/bookingBook)).

## View voucher or confirmation status

The object returned by the [/booking/book](#operation/bookingBook) service contains booking details that can be used to display an order summary to the customer.

Confirmed bookings of freesale products will return a `voucherKey` and `voucherURL`. The `voucherURL` is accessible by the customer to view their voucher.

Pending bookings of on-request products will return `null` in the `voucherKey`/`voucherURL` fields. These fields will only contain values once the booking is confirmed.

A `bookingStatus` object is included in the response that contains the status of the booking.

```javascript
"bookingStatus": {
  "status": 1,
  "text": "Paid &amp;amp; Confirmed",
  "type": "CONFIRMED",
  "level": "ITEM",
  "failed": false,
  "confirmed": true,
  "amended": false,
  "pending": false,
  "cancelled": false
}
```

The status field corresponds to a number described in [bookingStatus field values and meanings](#section/Appendices/bookingStatus-field-values-and-meanings).

Boolean flags that you can inspect to determine the booking status of the item:
- `failed`
- `cancelled`
- `confirmed`
- `amended`
- `pending`

### Pending bookings
A booking is considered *pending* if the booking process is 'in progress'. For example, an on-request booking would be *pending* until it is confirmed/rejected by the supplier.

If a customer has made an amendment to an on-request booking that is yet to be accepted by the supplier, the booking would then have a status of *amended* when the supplier or customer service accepts the amendment.

**Example response object:**

```javascript
{
  "errorReference": null,
  "data": {
    "sortOrder": 0,
    "rulesApplied": [],
    "bookingStatus": {
      "status": 3,
      "text": "Confirmed",
      "type": "CONFIRMED",
      "level": "ITINERARY",
      "confirmed": true,
      "pending": false,
      "amended": false,
      "cancelled": false,
      "failed": false
    },
    "itemSummaries": [{
      "sortOrder": 0,
      "rulesApplied": [],
      "bookingStatus": {
        "status": 1,
        "text": "Paid &amp;amp; Confirmed",
        "type": "CONFIRMED",
        "level": "ITEM",
        "pending": false,
        "failed": false,
        "confirmed": true,
        "amended": false,
        "cancelled": false
      },
      "travellerAgeBands": [{
        "sortOrder": 0,
        "count": 1,
        "pluralDescription": "Adults",
        "description": "Adult",
        "ageBandId": 1
      }],
      "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678",
      "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false",
      "voucherRequirements": "You must present a paper voucher for this to",
      "productPulledDown": false,
      "merchantCancellable": true,
      "productWidgetList": null,
      "savingAmount": 0,
      "passbooks": null,
      "termsAndConditions": null,
      "itineraryId": 1000024753,
      "tourGradeCode": "1DAYBOAT",
      "productCode": "2065CPT",
      "leadTravellerSurname": "Test",
      "distributorItemRef": "distroItemRefJDP1803151135",
      "languageServicesLanguageCode": "en",
      "travelDate": "2016-02-01",
      "price": 3.72,
      "bookingEngineId": "UF",
      "merchantNetPrice": 3.51,
      "merchantNetPriceFormatted": "$3.51",
      "leadTravellerTitle": "Mr",
      "leadTravellerFirstname": "Homer",
      "lastRetailPrice": 3.51,
      "destId": 318,
      "voucherOption": "VOUCHER_PAPER_ONLY",
      "productTitle": "Cape Town City Hop-on Hop-off Tour",
      "itemId": 700025496,
      "barcodeOption": "perperson",
      "barcodeType": "code128",
      "obfsId": 3696,
      "priceFormatted": "$3.72",
      "savingAmountFormated": "",
      "priceUSD": 3.72,
      "lastRetailPriceFormatted": "$3.51",
      "departsFrom": "Cape Town, South Africa",
      "hoursConfirmed": 0,
      "currencyCode": "USD"
    }],
    "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678",
    "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false",
    "bookerEmail": "apitest@viator.com",
    "userId": null,
    "itineraryId": 1000024753,
    "exchangeRate": 1,
    "totalPriceFormatted": "$3.51",
    "totalPriceUSD": 3.51,
    "bookingDate": "2015-03-17",
    "distributorRef": "distroRefJDP1803151135",
    "totalPrice": 3.51,
    "hasVoucher": true,
    "currencyCode": "USD"
  },
  "dateStamp": "2015-03-17T17:36:32+0000",
  "errorType": null,
  "errorMessage": null,
  "errorName": null,
  "success": true,
  "totalCount": 1,
  "vmid": "321003",
  "errorMessageText": null
}
```

### Checking the status of bookings

#### Checking the status of a single booking:

- [/booking/mybookings](#operation/bookingMybookings) can be used to check the status of a booking after it has been purchased. This is useful for checking the status of a pending booking, particularly if there are multiple items within the booking.

  It is recommended that you poll the service no more than once per hour.

#### Checking the status of multiple bookings:

- [/booking/status](#operation/bookingStatus) will return the status of all bookings, based on the following:
  - booking date range
  - travel date range
  - specific distributor/distributor item references
  - lead traveler date/first name

This is useful for checking the status of recently-made, but still *pending* bookings, or those that will commence soon.

**Note:** You can only poll this service (successful calls) once every 30 minutes.

### Confirming the booking via email

Upon receiving a successful response from [/booking/book](#operation/bookingBook), merchant partners should confirm the booking with the customer via email. This email must be sent by the merchant partner (not Viator).

#### Sample confirmation email

&lt;pre&gt;
Dear Traveller,

Thank you for booking with [PARTNER NAME] on [www.domain.com]. Your booking is confirmed. This is your booking notification and receipt. Please retain this email for your records.

Please note:

We offer three types of vouchers. Be sure to check below for what type of voucher your tour / activity requires. Voucher requirements vary by tour, so if you've booked more than one tour, be sure to check each one. See below for instructions.

HOTEL/FLIGHT ITINERARY
-----------------------------------------------------------------------
[Your standard reply here]

TOURS
-----------------------------------------------------------------------

1. Name: Whale Watching Cruise
  e-Voucher or Paper Voucher Accepted
  You can present either a paper or an electronic voucher for this activity.
  Voucher: [VOUCHERURL]
  Please click on the above link, follow the directions, and print your voucher to present as per instructions on the voucher under 'Important Information'.
2. Name: Boston City Pass
  Paper Voucher Required
  You must present a paper voucher for this tour. Voucher: [VOUCHERURL]
  Please click on the above link, follow the directions, and print your voucher to present as per instructions on the voucher under 'Important Information'.
3. Name: SuperShuttle Airport Transfer
  Voucher Not Required
  You must present a paper voucher for this tour. Voucher: [VOUCHERURL]
  You can present a paper or electronic voucher for this activity, or you can simply present the Lead Traveller’s Photo ID. Our supplier has your reservation on file and only requires proof of identity on the day of travel.

IMPORTANT INFORMATION
-----------------------------------------------------------------------
[Your standard reply here]

TERMS AND CONDITIONS
-----------------------------------------------------------------------
[Your standard reply here]
&lt;/pre&gt;

## Booking process flow

In this section, we show a sample booking process flow using Viator API services.

### Search for a product

1. Determine the `destinationId` for the desired destination using the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
2. Search for products in the destination with the [/search/products](#operation/searchProducts) service using the `destinationId`, along with optional parameters like the date range (`startDate` and `endDate`), attraction link (`seoId`), category (`catId`) and subcategory (`subCatId`).

#### Example [/search/products](#operation/searchProducts) POST request body:

```javascript
{
  "startDate": "2018-12-25",
  "endDate": "2018-12-28",
  "topX": "1-15", 
  "destId": 684, 
  "currencyCode": "USD",
  "sortOrder": "TOP_SELLERS"
}
```
**Note**: the `startDate` and `endDate` must be in the future.

3. Get the product details with the [/product](#operation/product) service.

#### Example parameters for a [/product](#operation/product) GET request:

```html
code=5010SYDNEY&amp;currencyCode=USD
```

### Determine the product's available dates

Use the [/booking/availability/dates](#operation/bookingAvailabilityDates) service to retrieve a list of dates on which the product is operating. This list can be used to populate a calendar display of available dates.

#### Example parameters for an availability check using the [/booking/availability/dates](#operation/bookingAvailabilityDates) service:

```html
productCode=5010SYDNEY
```

### Determine the available age bands for the product

Because the product option (tour grade) availability check requires the desired passenger mix, the user will first need to select the number of travelers and the age band into which each can be classified.

Note: The exact ages to which each age band refers to differs between products. See [Working with age bands](#section/Key-concepts/Working-with-age-bands) for more information.

1. Determine the number of passengers/travelers (and their respective agebands) by having the user input the passenger mix for which they wish to make a booking.
2. Check for available tour grades for the date chosen using the [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) service; or, check for available tour grades by month using the [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service

#### [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) POST request:
```javascript
{
  "productCode": "5010SYDNEY",
  "bookingDate": "2018-12-05",
  "currencyCode": "USD",
  "ageBands": [
    {      
      "bandId": 1,
      "count": 2    
    }  
  ]
}
```

#### [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgrades) POST request:
```javascript
{
  "productCode": "5010SYDNEY",
  "month": "12",
  "year": "2018",
  "currencyCode": "USD"
}
```
3. Finalize pricing using the [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix) service. 
  - **Note**: we strongly recommend using the [/booking/calculateprice](#operation/bookingCalculateprice) service prior to making the booking, as it reconfirms the product availability for the specified dates and passenger mix.

4. Make the booking
  - Note that the [/booking/book](#operation/bookingBook) service supports multi-item bookings. The response from the [/product](#operation/product) service indicates mandatory information that must be sent when making the booking, such as required [booking questions](#section/Appendices/Booking-questions) and hotel pick-up options.
  - For hotel pick-up:
    - Send a hotel ID to the [/booking/book](#operation/bookingBook) service if `hotelPickup` is `true` for the product.
    - [/booking/hotels](#operation/bookingHotels) can be used to return a list of hotels available for the product.
    - The `hotelId` is the `id` field in the response from the [/booking/hotels](#operation/bookingHotels) service. This can be:
      -  a number (represented as a string) – e.g., `'4119'`
      -  `'local'` – if the customer resides near the location in which the product operates 
      -  `'notBooked'` – if the customer's hotel is not yet booked
      -  `'notListed'` – if the customer's hotel is not listed in the response from [/booking/hotels](#operation/bookingHotels). If this is the case, capture the customer’s hotel details in a text box and pass this information in the `pickupPoint` field in the request body of the [/booking/book](#operation/bookingBook) service.

#### [/booking/book](#operation/bookingBook) POST request example:

```javascript
{
  "demo": true,
  "currencyCode": "USD",
  "partnerDetail": {
      "distributorRef": "distributorRef1550616101308"
  },
  "booker": {
      "firstname": "Homer Test",
      "surname": "Simpson Test",
      "title": "Mr",
      "email": "apitest@viator.com",
      "homePhone": "(02)66987564"
  },
  "items": [
    {
      "partnerItemDetail": {
        "distributorItemRef": "distributorItemRef1550616101308"
      },
      "hotelId": null,
      "pickupPoint": null,
      "travelDate": "2019-03-19",
      "productCode": "5010SYDNEY",
      "tourGradeCode": "24HOUR",
      "languageOptionCode": "en/SERVICE_GUIDE",
      "bookingQuestionAnswers": [
        {
          "questionId": 100,
          "answer": "120 kgs"
        }
      ],
      "specialRequirements": "",
      "travellers": [
        {
          "bandId":1,
          "firstname": "Homer",
          "surname": "Simpson Test",
          "title": "Mr",
          "leadTraveller": true
        }, {
          "bandId": 1,
          "firstname": "Marge",
          "surname": "Merchant Viator Test",
          "title": "Mrs"
        }
      ]
    }
  ]
}
```

#### [/booking/hotels](#operation/bookingHotels) GET example parameters:

```html
productCode=5010SYDNEY
```
or
```html
destId=684
```

5. You will receive different booking statuses depending on the product's booking engine. 
  - For products that are free-sale (`'FreesaleBE'`), unconditional free-sale (`'UnconditionalBE'`) and free-sale / on-request (`'FreesaleOnRequestBE'`) - i.e., during the free-sale period, confirmation should occur instantly. 
  - The `'FreesaleOnRequestBE'` status means that the product will only remain free-sale up until a certain number of days before the travel date, after which it becomes on-request. 
  - Normally, if the product is on-request, its booking status will be `'Pending'`.

### Post-booking

#### Displaying vouchers

To display the voucher to your customer, direct them to the URL returned in the `voucherURL` field in the response from the [/booking/book](#operation/bookingBook) service.

**Note**: the voucher will not be available until the booking is confirmed – the value of the `hoursConfirmed` field in the response from the [/booking/book](#operation/bookingBook) service can be shown to the customer to indicate the time frame within which they are likely to be notified as to their booking confirmation.

#### Viewing bookings

- To view a **single** booking, use the [/booking/pastbooking](#operation/bookingPastbooking) service, which returns one booking at a time. 
- To retrieve **all** bookings for a customer, use the [/booking/mybookings](#operation/bookingMybookings) service.

#### Viewing booking statuses

To view the booking statuses for multiple items based on various criteria, use the [/booking/status](#operation/bookingStatus) service.

Note that this service can only be polled once every five minutes. Ideally, this service should be used by your software implementation to perform bulk updates of pending itineraries. The maximum number of itinerary results returned is 1,000.

#### `merchantNetPrice` and `price` in the [/search/products](#operation/searchProducts) service

The difference between these fields is as follows:

- `merchantNetPrice` is the amount you, as the merchant partner will be invoiced for, excluding any fees.
- `price` is the price at which Viator sells the product

**Note**: these prices are also returned (per age band) by the following services:

- [/booking/availability/tourgrades/pricingmatrix](#operation/bookingAvailabilityTourgradesPricingmatrix)
- [/booking/pricingmatrix](#operation/bookingPricingmatrix)
- [/booking/book](#operation/bookingBook)

### Currency considerations for bookings

If the booking shows prices converted to and formatted according to a different currency to that in which it was made, it is because each API partner has a particular 'base currency', and all bookings will be made in that currency.

### Booking and transaction fees

The total price may be different to the `merchantNetPrice` due to the fact that a booking fee – i.e., a transaction fee or commission – is added to all bookings.

This fee is a fixed percentage with a capped maximum. The exact percentage depends on your merchant partner agreement with Viator and can be found in your contract with Viator.

### Making demo bookings

To make a demo booking, simply set the `demo` field to `true` in the [/booking/book](#operation/bookingBook) service.

While demo bookings are allowed on the live production environment, we recommend not doing so as it is possible that a notification could be sent to the supplier. Performing a cancellation of the demo booking is therefore recommended.

To cancel the booking, partners should use the [/bookings/{id}/cancel](#operation/cancelBooking) service. For details on canceling a booking, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

## Cancellation UX

On the Viator.com website, once the customer has made a booking, they are able to access the details of all their upcoming, past and cancelled bookings by navigating to the **bookings** section of the website.

You must communicate to the user the terms and conditions that pertain to canceling their booking; i.e., what to expect in terms of the refund they will receive if they were to cancel their booking now.

On the Viator website, this information is communicated in the cancellation button text. In the following example, the user has booked the "San Francisco City Tour with Alcatraz", and is viewing their **bookings** page.

In this way, the user is told that they can "cancel for free by Oct 22" – i.e., they will be issued a full refund if they cancel the product prior to October 22:

![user bookings](https://docs.viator.com/partner-api/resources/merchant/technical/img/user-bookings.png)

This text is programmatically generated by inspecting the product's cancellation policy, which is contained within the `merchantTermsAndConditions` object, which is included in the response object from the following endpoints:

- [/booking/book](/partner-api/merchant/technical/#operation/bookingBook)
- [/booking/pastbooking](/partner-api/merchant/technical/#operation/bookingPastbooking)
- [/booking/mybookings](/partner-api/merchant/technical/#operation/bookingMybookings)

For details on how to interpret the `merchantTermsAndConditions` object, see: [Cancellation policy](#section/Key-concepts/Cancellation-policy)

Once the user clicks the button labelled: **Cancel for free by Oct 22**, they are brought to the cancellation confirmation page, where they are provided a more formal cancellation quote prior to confirming their intention to cancel the product.

### Cancellation refund display

As the merchant of record, the amount your customer was charged for the product was your decision; therefore, the amount that you elect to grant the customer as a refund is also up to you, so you will need to retrieve the amount the customer has paid for the product from your own records/databases.

The amount that Viator would have invoiced you for the booking – equivalent to the merchant net price at the time of booking plus the transaction fee – can be retrieved using the [/bookings/{booking-ref}/cancel-quote](#operation/cancelBookingQuote) endpoint. For more information see: [Get a cancellation quote](#get-a-cancellation-quote)

Here, the customer is shown that they will receive a full refund if they cancel the product now:

![cancellation quote](https://docs.viator.com/partner-api/resources/merchant/technical/img/cancellation-quote.png)

### Displaying and choosing cancellation reasons

At this point in the workflow, the user must select a reason for their cancellation. Viator's systems require that a reason for the cancellation be given in order to carry out the cancellation process.

As the set of acceptable reasons for canceling a booking are formally specified by the Viator Partner API and are not necessarily immutable (new reasons may be added at any time) you should retrieve the presently available cancellation reasons from the [/bookings/cancel-reasons](#operation/cancellationReasons) endpoint. We require you to present these to the customer for them to select.

Use the `cancellationReasonText` fields in the response to populate the list from which the customer can select the most-appropriate match for why they are canceling, as on the Viator website:

![user bookings](https://docs.viator.com/partner-api/resources/merchant/technical/img/cancellation-reasons.png)

For more information about getting cancellation reasons, see: [Getting cancellation reasons](#getting-cancellation-reasons)

**Note**: As it is necessary for the user to provide a cancellation reason, it is required that the **Cancel Booking** button remain disabled until a reason has been selected by the customer.

### Completing the cancellation

Once the user has selected a reason, the **Cancel Booking** button can be activated:

![cancel booking](https://docs.viator.com/partner-api/resources/merchant/technical/img/cancel-booking.png)

Clicking the **Cancel Booking** button is the final action required of the customer to complete the cancellation.

At this point, you will want to cancel the booking using the [/bookings/{booking-ref}/cancel](#operation/cancelBooking) API endpoint. For more information on using this service, see: [Cancel the booking](#cancel-the-booking)

### Obtaining confirmation for the cancellation

On the Viator.com site, the following confirmation message is displayed on the page that loads after the **Cancel Booking** button is clicked:

![cancellation confirmation](https://docs.viator.com/partner-api/resources/merchant/technical/img/cancellation-confirmation.png)

### Cancellation confirmation email

Once the cancellation is accepted, a short, succinct email informing the customer that their booking has been successfully canceled is sent immediately:

![cancellation confirmation email](https://docs.viator.com/partner-api/resources/merchant/technical/img/cancellation-email.png)

### Viewing canceled bookings

Clicking on the **View reservation details** button in the cancellation confirmation email returns the customer to their bookings page, where the fact of the booking being canceled is communicated clearly:

![canceled booking](https://docs.viator.com/partner-api/resources/merchant/technical/img/canceled-booking.png)

## Cancellation API workflow

### Note:

- All booking cancellations (except for those requested after the date of travel) must now be performed via the API. Viator no longer offers ordinary cancellation services via our customer support function.
- To cancel a booking after the tour or activity has occurred, please contact [Viator Partner Support](mailto:dpsupport@viator.com)
- **Legacy API keys:** Bookings made via the [v1 /booking/book](#operation/bookingBook) endpoint using a [v1 legacy API key](#section/Authentication/Legacy-API-keys) can be canceled using the [v2 cancellation endpoint](#operation/cancelBooking) and a [v2 API key](#section/Authentication/API-key) so long as the [legacy (v1) API key](#section/Authentication/Legacy-API-keys) used to make the booking is linked to the partner's [v2 API key](#section/Authentication/API-key).


### Getting cancellation reasons
&lt;a id="getting-cancellation-reasons"&gt;&lt;/a&gt;

When canceling a booking, you are required to submit a valid 'reason for the cancellation' to assist with Viator's internal processes. This is accomplished via the inclusion of a valid reason code in the body of the request. The reason codes can be retrieved from the [/bookings/cancel-reasons](#operation/cancellationReasons) endpoint.

As the acceptable reasons for cancellation may be extended at any point (existing reasons will not change or be removed), we recommend retrieving an up-to-date list from this endpoint at least weekly.

The output from the [/bookings/cancel-reasons](#operation/cancellationReasons) endpoint at the time of writing is as follows:

```javascript
{
    "reasons": [
        {
            "cancellationReasonCode": "Customer_Service.I_canceled_my_entire_trip",
            "cancellationReasonText": "I canceled my entire trip"
        },
        {
            "cancellationReasonCode": "Customer_Service.Booked_wrong_tour_date",
            "cancellationReasonText": "Booked wrong tour/date"
        },
        {
            "cancellationReasonCode": "Customer_Service.Duplicate_Booking",
            "cancellationReasonText": "Duplicate Booking"
        },
        {
            "cancellationReasonCode": "Customer_Service.Chose_a_different_cheaper_tour",
            "cancellationReasonText": "Chose a different/cheaper tour"
        },
        {
            "cancellationReasonCode": "Customer_Service.Weather",
            "cancellationReasonText": "Weather"
        },
        {
            "cancellationReasonCode": "Customer_Service.Unexpected_medical_circumstances",
            "cancellationReasonText": "Unexpected/medical circumstances"
        },
        {
            "cancellationReasonCode": "Customer_Service.Tour operator asked me to cancel",
            "cancellationReasonText": "Tour operator asked me to cancel"
        }
    ]
}
```

### Canceling a booking

#### Getting a cancellation quote
&lt;a id="get-a-booking-cancellation-quote"&gt;&lt;/a&gt;

Before canceling the booking, call the [/bookings/{booking-reference}/cancel-quote](#operation/cancelBookingQuote) endpoint to get information about whether the booking can be canceled using this endpoint and what the refund will be, for example:

```html
GET https://api.viator.com/partner/bookings/BR-580254558/cancel-quote
```

**Note**: For information about the **{booking-reference}** in URL parameter, see [Key concepts: Booking references](#section/Key-concepts/Booking-references)

You will receive a cancellation quote object, e.g.:

```javascript
{
    "bookingId": "BR-580254558",
    "status": "CANCELLABLE",
    "refundDetails": {
        "itemPrice": 109.77,
        "refundAmount": 109.77,
        "currencyCode": "USD",
        "refundPercentage": 100.00
    }
}
```

 **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking's status is `"CONFIRMED"`.

The data elements in this object have meanings as follows:

| Element | Meaning | Example |
|---------|---------|---------|
| `bookingId` | the booking reference number prepended with `BR-` | `BR-580254556` |
| `status` | One of the following: &lt;ul&gt;&lt;li&gt;`CANCELLABLE`: the booking is eligible to be cancelled&lt;/li&gt;&lt;li&gt;`CANCELLED`: the booking has already been cancelled&lt;/li&gt;&lt;li&gt;`NOT_CANCELLABLE`: the booking is for a product that operated in the past, and therefore cannot be cancelled using this endpoint (you will need to [send an email to dpsupport](mailto:dpsupport@viator.com) including both "CANCEL" and the booking reference number in the subject line in order to request a refund for such a booking)&lt;/li&gt;&lt;/ul&gt; | `CANCELLABLE` |
| `refundDetails` | object containing information about the refund | |
| `itemPrice` | the **merchant net price** + **transaction fee** for this product at the time of booking in the currency specified by `currencyCode` | `109.77` |
| `refundAmount` | the amount that will be deducted from your invoice if the booking is cancelled now | `109.77` |
| `currencyCode` | the currency code for the currency in which pricing information is displayed | `USD` |
| `refundPercentage` | the refund amount expressed as a percentage of the `itemPrice` | `100.00` |

#### Canceling the booking
&lt;a id="cancel-the-booking"&gt;&lt;/a&gt;

If the `status` field has a value of `CANCELLABLE` and you are happy with the `refundAmount`, call the [/bookings/{booking-ref}/cancel](#operation/cancelBooking) endpoint to cancel the booking, e.g.:

```html
POST https://api.viator.com/partner/bookings/BR-580254558/cancel
```

A reason code corresponding to the reason for cancellation must be included in the request body; e.g.:

```javascript
{
  "reasonCode":"Customer_Service.Chose_a_different_cheaper_tour"
}
```

You should receive a response indicating that the cancellation was successful, e.g.:

```javascript
{
    "bookingId": "BR-580254558",
    "status": "ACCEPTED"
}
```

A `status` of `ACCEPTED` indicates that the booking was successfully canceled.

## Calculating prices

The [/booking/calculateprice](#operation/bookingCalculateprice) service is used to calculate a total price for one or more products, with the ability to specify the date and passenger mix for each product individually. 

It also reconfirms the availability and pricing of the products for the requested dates and passenger mixes. We strongly recommended that you call this service prior to [making a booking](#section/Common-workflows-and-data-validation/Making-a-booking) to establish that the booking will succeed once submitted.

This endpoint is useful when implementing a shopping cart, as multiple product bookings can be enquired about in a single call to this service.

#### Example request body (JSON)

```javascript
{
  "currencyCode": "USD",
  "items": [{
    "travelDate": "2015-03-01",
    "productCode": "2916ROME",
    "tourGradeCode":"24HR",
    "travellers": [
      {
        "bandId": 1
      },
      {
        "bandId": 1
      }
    ]
  }]
}
```
The quirky `travellers` array is used to specify the number of travellers in each age band. Each member object of this array corresponds to a single traveller. The example above signifies "two adults from bandId: 1".

Another example might be "three travelers from bandId:1 and two travelers from bandId:2". That would be as follows:

```javascript
"travellers": [
  {
    "bandId": 1
  },
  {
    "bandId": 1
  },
  {
    "bandId": 1
  },
  {
    "bandId": 2
  },
  {
    "bandId": 2
  }
]
```

- **Note**: See [Working with age bands](#section/Key-concepts/Working-with-age-bands) for more information.

#### Price information

The **total price** (i.e., including the transaction fee) that you will be invoiced for the products to be booked is given in the following fields in the response from this service:

- `data.itemSummaries[].price` (numeric total price of item)
- `data.itemSummaries[].priceFormatted` (currency formatted total price of item) 
- `data.itinerary.totalPrice` (numeric total price of item)
- `data.itinerary.totalPriceFormatted` (currency-formatted total price of item)

For more information about pricing fields and their meaning throughout this API, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing).

#### Determining whether the product is 'freesale' or 'on request'

You can determine whether the booking is *freesale* or *on-request* by examining the response from this endpoint. 'Freesale' bookings are those that are confirmed immediately (with a status of `"CONFIRMED"`) when booked, while *on-request* bookings are instead confirmed by the supplier at a later time. 

The approximate time window for confirmation is provided in the `hoursConfirmed` (integer) field. This can be presented to the customer. 

- An `hoursConfirmed` of `0` means that the booking is *freesale*. 
- An `hoursConfirmed` greater than `0` indicates that the booking is *on-request*.

## Finding hotel pick-up points

### Hotel pickup example:

#### Example response body ([/booking/hotels](#operation/bookingHotels))
```javascript
{
  "vmid":"221002",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2012-04-12T13:48:27+0000",
  "success": true,
  "errorReference": null,
  "errorMessageText": null,
  "totalCount": 1,
  "errorName": null
  "data": [
    {
      "address": null,
      "name": "I live locally / I'm staying with friends, relatives",
      "id": "local",
      "phone": null,
      "productCodes": null,
      "destinationId": 0,
      "city": null,
      "notes": null,
      "latitude": null,
      "longitude": null,
      "postcode": null,
      "brand": null,
      "hotelString": "I live locally / I'm staying with friends, relatives",
      "sortOrder": 1
    },
    {
      "address": null,
      "name": "My hotel is not yet booked",
      "id": "notBooked",
      "phone": null,
      "productCodes": null,
      "destinationId": 0,
      "city": null,
      "notes": null,
      "latitude": null,
      "longitude": null,
      "postcode": null,
      "brand": null,
      "hotelString": "My hotel is not yet booked",
      "sortOrder": 2
    },
    {
      "address": null,
      "name": "My hotel is not listed",
      "id": "notListed",
      "phone": null,
      "productCodes": null,
      "destinationId": 0,
      "city": null,
      "notes": null,
      "latitude": null,
      "longitude": null,
      "postcode": null,
      "brand": null,
      "hotelString": "My hotel is not listed",
      "sortOrder": 3
    },
    {
      "address": "375 East Harmon Avenue",
      "name": "Alexis Park Resort Hotel",
      "id": "684_2",
      "phone": "",
      "productCodes": null,
      "destinationId": 684,
      "city": "Las Vegas",
      "notes": null,
      "latitude": 36.106258,
      "longitude": -115.156146,
      "postcode": "89169",
      "brand": "",
      "hotelString": null,
      "sortOrder": 4
    },
    {
      "address": "167 East Tropicana Avenue",
      "name": "Americas Best Value Inn",
      "id": "684_3",
      "phone": "",
      "productCodes": null,
      "destinationId": 684,
      "city": "Las Vegas",
      "notes": null,
      "latitude": 36.100778,
      "longitude": -115.165522,
      "postcode": "89109",
      "brand": "",
      "hotelString": null,
      "sortOrder": 5
    },
    {
      "address": "3131 Las Vegas Boulevard South",
      "name": "Wynn Resort",
      "id": "684_126",
      "phone": "",
      "productCodes": null,
      "destinationId": 684,
      "city": "Las Vegas",
      "notes": null,
      "latitude": 36.127563,
      "longitude": -115.167704,
      "postcode": "89109",
      "brand": "",
      "hotelString": null,
      "sortOrder": 119
    }
  ]
}
```
## Making a booking

To make a booking, use the [/booking/book](#operation/bookingBook) service.

To make a *real* booking, ensure `demo` is set to `false` in the booking request.

Demo bookings will enter our system as a test booking and will not charge the merchant. To enable demo bookings, set `demo` to `true` in the booking request and pass `"test"` as the traveler's first or last name.

**Note:** Avoid testing on **Live**, as the booking may be sent to the supplier (depending on the product). Any test bookings on live must be cancelled via the [/bookings/{id}/cancel](#operation/cancelBooking) service; or, contact dpsupport@viator.com if you experience any other issues.

### distrbutorRef and distributorItemRef

The `distributorRef` and `distrbutorItemRef` fields are the merchant partner's own reference for the booking. All merchant partners must pass a `distributorRef` and a `distributorItemRef` in all bookings.

It can be any alphanumeric string, and in for the `distrbutorRef`, it must be unique to bookings made by the merchant.

If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response, and a new booking will not be made.

Please see the description for these fields in the table below for more information.

**Example request**

```javascript
{
  "demo": true,
  "currencyCode": "USD",
  "partnerDetail": {
    "distributorRef": "distroRef0412141435"
  },
  "booker": {
    "email": "apitest@viator.com",
    "firstname": "Homer Test",
    "surname": "Simpson Test",
    "title": "Mr"
  },
  "items": [{
    "partnerItemDetail": {
      "distributorItemRef": "distroItemRef0412141435_1"
    },
    "hotelId": null,
    "pickupPoint": null,
    "travelDate": "2015-03-31",
    "productCode": "2916ROME",
    "tourGradeCode": "24HR",
    "languageOptionCode": "en/SERVICE_GUIDE",
    "bookingQuestionAnswers": [{
      "questionId": 100,
      "answer": "120 kgs"
    }],
    "specialRequirements": "",
    "travellers": [{
      "bandId": 1,
      "firstname": "Homer",
      "surname": "Simpson Test",
      "title": "Mr",
      "leadTraveller": true
    }]
  }]
}
```

**Description of JSON request parameters**

| Object name | Element name | Type | Comments | Mandatory |
|-------------|--------------|:----:|----------|:---------:|
|        | `demo`      | boolean | If this is set to True, then it is a demo booking only. Full demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`. | ❌ |
|        | `currencyCode` | string | The currency the booking will be submitted in. You will be billed in this currency. | ❌ |
| `partnerDetail` | | object | Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information | ❌ |
|  | `distributorRef` | string | Merchant API partners must pass a `distributorRef` at itinerary level in the `partnerDetails` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant. Passing an existing `distributorRef`: If an existing distributorRef is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.| ✅ |
| `partnerItemDetail` |  | object | For extra partner detail at an item level, for either partner or merchant partner. | ❌ |
|  | `distributorItemRef` | string | Merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in the items object. The `distributorItemRef` passed must be alphanumeric and unique to the itinerary. | ✅ |
| `booker` |  | object | The information of the primary contact. This contact does not have to be a traveler. | ✅ |
|  | `email` | string | Email address of the primary contact | ❌ |
|  | `homePhone` | string | Home phone number of the primary contact | ❌ |
|  | `firstname` | string | First name of the primary contact | ✅ |
|  | `surname` | string | Surname of the primary contact | ✅ |
|  | `title` | string | Title of the primary contact | ❌ |
| `items` |  |  | Array of items in itinerary to be booked | ✅ |
|  | `productCode` | string | product code of the itinerary to be booked | ✅ |
|  | `tourGradeCode` | string | `tourGradeCode` of the item to be booked. If tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for the product, pass `"DEFAULT"`. | ✅ |
|  | `languageOptionCode` | string | The language service provided for this product that has been chosen for this booking. Usually in the format langcode/Service eg `"en/SERVICE_GUIDE"`. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided. | ✅&lt;br /&gt;(if `languageServices` are provided in [/product](#operation/product)) |
|  | `travelDate` | date | date of travel for the item (format is YYYY-MM-DD; e.g. 2013-12-25) | ✅ |
|  | `hotelId` | string | If [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for this product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured. The hotel id as per the hotel service (id field) or use one of these alternative hotel ids:&lt;br /&gt;`local`: customer lives locally&lt;br /&gt;`notBooked`:  Customer has not booked their hotel yet&lt;br /&gt;`notListed`: Hotel not listed | ✅&lt;br /&gt;(if [/product](#operation/product) returns `hotelPickup`: `true` for `productCode` and hotels available) |
|  | `pickupPoint` | string | Pickup point information related to hotel pickup. Details of the hotel or pickup point must be provided if the `hotelId` selected by the user is `"notListed"` or if no hotels are returned for the product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup`: `true` | ✅&lt;br /&gt;(if `hotelId` = `"notListed"` or no hotels returned) |
|  | `specialRequirements` | string | Capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required. Suggested workflow is if there are no `bookingQuestionAnswers` for the product, to collect `specialRequirements`. | ❌ |
| `travellers` |  |  | Array of traveller names with a required lead traveller selected per item. | ✅ |
|  | `bandId` | integer |  [Age band id](#section/Key-concepts/Working-with-age-bands). Available age band details for the product is listed in [/product](#operation/product). | ✅ |
|  | `firstname` | string | First name of the traveller | ✅ |
|  | `surname` | string | Surname of the traveller | ✅ |
|  | `title` | string | Title of the traveller. Suggested options: Mr, Mrs, Ms, Miss, Mstr, Dr | ✅ |
|  | `leadTraveller` | boolean | Each item must have one traveller assigned as the lead traveller for the tour. The lead traveller will have a value of true, all other travellers will have a value of false. The lead traveller can have a mobile phone number added to the booking. | ✅ |
|  | `cellPhoneCountryCode` | string | Ideally only collect the phone number country code for the lead traveller. Alternatively, collect the phone number of the booker instead. | ❌ |
|  | `cellPhone` | string | Ideally only collect the phone number country code for the lead traveller. Alternatively, collect the phone number of the booker instead. | ❌ |
| `bookingQuestionAnswers` |  | object | Answers to [booking questions](#section/Appendices/Booking-questions) for the particular item. If a booking question is available in the `bookingQuestions` array in [/product](#operation/product) for the product, the matching `bookingQuestionAnswers` must be passed. If a product does not have any `bookingQuestion` items, you can omit the `bookingQuestionAnswers` field completely. Any invalid or unnecessary `bookingQuestionAnswers` that are passed to [/booking/book](#operation/bookingBook) will be ignored (no exceptions will be raised) | ✅&lt;br /&gt;(if [/product](#operation/product) returns `bookingQuestions`) |
|  | `questionId` | integer | `questionId` (provided in [/product](#operation/product)) | ✅ |
|  | `answer` | string | Answer to the question at the `questionId` listed. Recommended length for the answer is 500 characters. | ✅ |

**JSON Response**

The prices returned in the booking response represent the net rate, which is the amount merchant API partners will be invoiced for. See [merchant pricing](#section/Key-concepts/Merchant-pricing) for more information.

### Booking errors

A number of errors may be returned in the response to the [/booking/book](#operation/bookingBook) service. If any errors are reported, NO items will be booked, NO items/data will be returned in the response, and NO billing will occur.

There are two error types:
- `"VALIDATION"` - occurs if a required field is missing or a field is not formatted properly
- `"EXCEPTION"` - occurs when there are issues with the booking date, product / tour grade code or the payment.

Example of an error message:

```javascript
{
  "data": null,
  "vmid": "221001",
  "errorMessage": [ "Missing distributor reference" ],
  "errorType": "EXCEPTION",
  "dateStamp": "2013-04-24T15:50:05+0000",
  "errorReference": "~3713624959841553334512668",
  "errorMessageText": ["Missing distributor reference" ],
  "success": false,
  "totalCount": 1,
  "errorName": "Exception"
}
```

Please see "Standard JSON fields" in the Appendix for an explanation of the fields.

| Scenario | `errorType` | Example error message text |
|----------|-----------|----------------------------|
| Lead traveller is not specified | `VALIDATION` | A traveler needs to be selected as lead traveler. Lead Traveler's name must match credit card name. |
| Traveller names are not provided | `VALIDATION` | First name of traveler 1 is required, Last name of traveler 1 is required |
| No travellers provided | `VALIDATION` | A traveler needs to be selected as lead traveler. Lead Traveler's name must match credit card name. |
| Product code does not exist | `EXCEPTION` | We're sorry, we cannot find the tour, activity or attraction you are looking for
| Product code exists, but tour grade code does not exist | `EXCEPTION` | SICInvalidTourGrade |
| Booking date is in the past | `EXCEPTION` | We're sorry, the following tour you are trying to book is sold out and no longer available: Grand Canyon All American Helicopter Tour (2280AAHT) |
| `languageOptionCode` is in the wrong format | `EXCEPTION` | languageOptionCode should be LangCode/LangServices |
| Missing required answers for item | `EXCEPTION` | Additional questions missing |
| Unsupported currency | `EXCEPTION` | Could not lookup SGD:java.lang.RuntimeException: Could not lookup SGDf:au.com.fim.v3.etravel.PiusRecordNotFoundException: No currency found: select * from CurrencyFormat where currencyID = 'SGD' |
| `distributorRef` not provided in `partnerDetail` object | `EXCEPTION` | Missing distributor reference |
| `distributorItemRef` not provided in `partnerItemDetail` object | `EXCEPTION` | Missing distributor item reference |
| `partnerItemDetail` object not provided for the item | `EXCEPTION` | Missing partner item details! |

## Get the booking status for multiple items

The [/booking/status](#operation/bookingStatus) service retrieves the booking status for multiple items based on different criteria.

This service can only be polled every 30 minutes. This would ideally be used in software for bulk updates of pending itineraries.

The maximum number of results returned is 1,000 itineraries. Narrow your search if you expect results greater than this.

**NOTE:** This will return both live and test bookings.

**Example request body**

```javascript
{
  "bookingDateFrom": "2013-03-22",
  "bookingDateTo": "2013-03-25",
  "itineraryIds": null,
  "itemIds": null,
  "distributorRefs": ["Ref20132603_1","Ref20132603_5"],
  "distributorItemRefs": null,
  "leadFirstName": null,
  "leadSurname": null,
  "test": true
}
```

All fields are optional and can be omitted, however at least one needs to be provided.

| Field | Meaning |
|-------|---------|
| `bookingDateFrom` | The booking date is greater than or equal this date |
| `bookingDateTo` | The booking date is less than or equal this date |
| `itemIds` | Array of item ids (AKA Viator Item Reference) to check for; e.g., `[1234657,2345267,3245154]` |
| `distributorRefs` | Array of partner-defined distributor references; e.g., `["ref1","ref2","ref3"]` |
| `distributorItemRefs` | Array of partner-defined distributor item references; e.g., `["refItem1","refItem2","refItem3"]` |
| `leadFirstName` | The lead traveller's first name |
| `leadSurname` | The lead traveller's surname |
| `test` | Setting `test` to `true` will bypass the poll limit on the sandbox environment only. The default value for `test` is `false`. |

**Example response object** ([/booking/status](#operation/bookingStatus))

```javascript
{
  "data": [
  {
    "itineraryId": 3332064,
    "bookingStatus": {
      "type": "CONFIRMED",
      "level": "ITINERARY",
      "failed": false,
      "text": "Confirmed",
      "cancelled": false,
      "status": 3,
      "confirmed": true,
      "amended": false,
      "pending": false
    },
    "bookingDate": "2013-03-25",
    "distributorRef": "Ref20132603_1",
    "itemSummaries": [{
      "itineraryId": 3332064,
      "itemId": 600088886,
      "bookingStatus": {
        "type": "CONFIRMED",
        "level": "ITEM",
        "failed": false,
        "text": "Paid &amp;amp; Confirmed",
        "cancelled": false,
        "status": 1,
        "confirmed": true,
        "amended": false,
        "pending": false
      },
      "travelDate": "2013-12-03",
      "distributorItemRef": "ItemRefA",
      "sortOrder": 0
    }],
    "sortOrder": 1
  },
  {
    "itineraryId": 3332076,
    "bookingStatus": {
      "type": "CONFIRMED",
      "level": "ITINERARY",
      "failed": false,
      "text": "Confirmed",
      "cancelled": false,
      "status": 3,
      "confirmed": true,
      "amended": false,
      "pending": false
    },
    "bookingDate": "2013-03-26",
    "distributorRef": "Ref20132603_5",
    "itemSummaries": [{
      "itineraryId": 3332076,
      "itemId": 600088907,
      "bookingStatus": {
        "type": "CONFIRMED",
        "level": "ITEM",
        "failed": false,
        "text": "Paid &amp;amp; Confirmed",
        "cancelled": false,
        "status": 1,
        "confirmed": true,
        "amended": false,
        "pending": false
      },
      "travelDate": "2013-12-03",
      "distributorItemRef": "ItemRefA",
      "sortOrder": 0
    }],
    "sortOrder": 2
  }],
  "vmid": "221002",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-03-26T10:25:57+0000",
  "errorReference": null,
  "errorMessageText": null,
  "success": true,
  "totalCount": 2,
  "errorName": null
}
```

### Exceeding the poll limit

You will receive the following error if you exceed the number of calls allowed to the service within the timeframe:

```javascript
{
  "data": null,
  "vmid": "221002",
  "errorMessage": [
    "Access allowed every 30 minutes"
  ],
  "errorType": "EXCEPTION",
  "dateStamp": "2013-03-26T10:28:51+0000",
  "errorReference": "~55315512721712161381352771",
  "errorMessageText": [
    "Access allowed every 30 minutes"
  ],
  "success": false,
  "totalCount": 1,
  "errorName": "PollingDeniedException"
}
```

## Get the tour grade pricing matrix

The [/booking/pricingmatrix](#operation/bookingPricingmatrix) service retrieves the pricing matrix for tour grades, product age bands and pax (passenger) mixes.

**Example request object** ([/booking/pricingmatrix](#operation/bookingPricingmatrix))

```javascript
  "productCode": "5261HTLAP",
  "tourGradeCode": "Zone 1",
  "bookingDate": "2013-12-01",
  "currencyCode": "USD",
  "specialReservation": false
```

`bookingDate`: The date to check for pricing data. This is an optional parameter for a normal product.

If the date is not provided then the nearest available date is determined (i.e. not blocked out or unavailable for any reason)

**Example response object** ([/booking/pricingmatrix](#operation/bookingPricingmatrix))

```javascript
{
  "data": [{
    "pricingUnit": "per person",
    "bookingDate": "2013-12-01",
    "sortOrder": 1,
    "ageBandPrices": [{
      "bandId": 1,
      "prices": [{
        "sortOrder": 1,
        "currencyCode": "USD",
        "price": 81.94,
        "priceFormatted": "$81.94",
        "merchantNetPrice": 65.44,
        "merchantNetPriceFormatted": "$65.44",
        "minNoOfTravellersRequiredForPrice": 1
      }],
      "sortOrder": 1,
      "minimumCountRequired": 1,
      "maximumCountRequired": 1
    }]
  },
  {
    "pricingUnit": "per person",
    "bookingDate": "2013-12-01",
    "sortOrder": 2,
    "ageBandPrices": [{
      "bandId": 1,
      "prices": [{
        "sortOrder": 1,
        "currencyCode": "USD",
        "price": 40.97,
        "priceFormatted": "$40.97",
        "merchantNetPrice": 32.73,
        "merchantNetPriceFormatted": "$32.73",
        "minNoOfTravellersRequiredForPrice": 1
      }],
      "sortOrder": 1,
      "minimumCountRequired": 2,
      "maximumCountRequired": 2
    }]
  },
  {
    "pricingUnit": "per person",
    "bookingDate": "2013-12-01",
    "sortOrder": 3,
    "ageBandPrices": [{
      "bandId": 1,
      "prices": [{
        "sortOrder": 1,
        "currencyCode": "USD",
        "price": 27.32,
        "priceFormatted": "$27.32",
        "merchantNetPrice": 21.81,
        "merchantNetPriceFormatted": "$65.44",
        "minNoOfTravellersRequiredForPrice": 1
      }],
      "sortOrder": 1,
      "minimumCountRequired": 3,
      "maximumCountRequired": 3
    }]
  }],
  "errorReference": null,
  "dateStamp": "2017-11-24T21:30:47+0000",
  "errorType": null,
  "errorCodes": null,
  "errorMessage": null,
  "errorName": null,
  "success": true,
  "totalCount": 3,
  "errorMessageText": null,
  "vmid": "321050"
}
```

**Description of elements in JSON response object**

| Object | Element | Type | Comments | To be viewed by customer | Required field |
|--------|---------|------|----------|:------------------------:|:--------------:|
| `data`   | | object | main response object | ❌ | ✅ |
|  | `sortOrder` | integer | order in which to show the pricing | ✅ | ✅ |
|  | `bookingDate` | date | booking date criteria | ✅ | ✅ |
|  | `pricingUnit` | string | unit for pricing: currently, only "per person" is supported | ✅ | ✅ |
| `ageBandPrices` | | object | available age bands and their pricing | ❌ | ✅ |
| | `sortOrder` | integer | sort order for age band display | ✅ | ✅ |
| | `bandId` | integer | **Note**: the numeric `bandId` is associated with an age band description (e.g., `"Adult"`, `"Infant"` etc.) and a corresponding age range (e.g., from 12 to 99) - these details are available from the [/product](#operation/product) service. See [Working with age bands](#section/Key-concepts/Working-with-age-bands) | ❌ | ✅ |
| | `minimumCountRequired` | integer | minimum number of pricing units that apply to these prices | | ✅ |
| | `maximumCountRequired` | integer | maximum number of pricing units that apply to these prices | | ✅ |
| `prices` | | object | pricing available for the age band (based on the min and max count requirements) | ✅ | ✅ |
| | `currencyCode` | string | currency of the pricing | ✅ | ✅ |
| | `sortOrder` | integer | order the pricing is to be shown within the `bandId` | ✅ | ✅ |
| | `price` | number | price in decimal format (for merchant API partners, this is the 'suggested sell price') | ❌ | ✅ |
| | `priceFormatted` | string | suggested sell price formatted according to the currency selected (with two decimal places where applicable) | ✅ | ✅ |
| | `merchantNetPrice` | number | merchant net price in decimal format | ❌ | ✅ |
| | `merchantNetPriceFormatted` | string | merchant net price formatted according to the selected currency | ❌ | ✅ |
| | `minNoOfTravellersRequiredForPrice` | integer | number of units that the pricing applies to (e.g., a `minNoOfTravellersRequiredForPrice` of `3` means that the price is for three people) | ✅ | ✅ |



## Dealing with vouchers

The [/booking/voucher](#operation/bookingVoucher) service retrieves details for a complete itinerary or a single itinerary item. The data is returned as HTML that can be wrapped in a header/footer.

### Sample URL parameters

`leadLastName=DP&amp;itemId=600033670`

or

`voucherKey=3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670`

### Key concepts

#### `voucherKey`
- Use either the `voucherKey` or the three separate parameters.
- If `voucherKey` is provided as well as other parameters, then the `voucherKey` overrides the other parameters.
- The `voucherKey` is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the [/booking/book](#operation/bookingBook) response object when a booking is made.

#### `fullHTML`
This is an optional parameter: 
- If `true`, the full HTML (including `&lt;!DOCTYPE&gt;`, `&lt;html&gt;` and `&lt;head&gt;` tags) will be returned.
- If `false`, an HTML `&lt;div&gt;` element will be returned.
- The default for this parameter is `false`

#### `mobileVoucher`
- Optional parameter. Defaults to `true`. If `true`, the mobile (cut down) voucher HTML is returned; otherwise, the full voucher HTML is returned and `fullHTML` is ignored
- This field should only be enabled for products that have a `voucherOption` of `"VOUCHER_E"` (electronic voucher). Do not enable `mobileVouchers` for paper vouchers (`voucherOption` of `"VOUCHER_PAPER_ONLY"`) as no barcode is returned.
- The voucher information is available in the responses for:
  - [/product](#operation/product)
  - [/booking/book](#operation/bookingBook)
  - [/booking/pastbooking](#operation/bookingPastbooking)
  - [/booking/mybookings](#operation/bookingMybookings)
- Voucher information is also displayed under the **Redemption Info** heading in the response from this service.

**Example response object** ([/booking/voucher](#operation/bookingVoucher))

```javascript
{
  "data": "&lt;div style=\'line-height: 1.5;font-family:\'Arial\',\'Helvetica\',\'Verdana\',sans-serif; font-size: 12px; padding: 0 10px; border-bottom: 1pxsolid #CAE2EA;\'&gt;&lt;h2 style=\'font-size:16px;font-weight:bold;margin:0.5em 0;padding:0;\'&gt;San FranciscoBay Sunset Catamaran Cruise &amp;reg;&lt;/h2&gt;&lt;h2 style=\'font-size:16px;font-weight:bold;margin:0.5em0;padding:0;\'&gt;SAMPLE ONLY&lt;/h2&gt;&lt;ul style=\'margin:0 0 1em 1em; padding:0;\'&gt; &lt;li&gt;&lt;strong&gt;Date:&lt;/strong&gt;Friday April 13, 2012 &lt;/li&gt;&lt;li&gt;&lt;strong&gt;Time:&lt;/strong&gt;&lt;strong&gt;2011:&lt;/strong&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Nov. 6 to Nov. 27&lt;/strong&gt;: 4:00pm (Fri., Sat. &amp;amp; Sun)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;2012:&lt;/strong&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;March 2 to March 10:&lt;/strong&gt;&amp;nbsp; 5:00 pm (Fri., Sat. &amp;amp; Sun)&lt;/li&gt;&lt;li&gt;&lt;strong&gt;March 11 to April 15:&lt;/strong&gt; 6:00pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;April 16 to May 20:&lt;/strong&gt; 6:30 pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;May 21 to July 22:&lt;/strong&gt; 7:00 pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;July 23 to Aug 26: &lt;/strong&gt;6:30 pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Aug 27 to Sept 23:&lt;/strong&gt;6:00 pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Sept. 24 to Nov. 3:&lt;/strong&gt; 5:30 pm Daily&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Nov 4 to Dec 2:&lt;/strong&gt; 4:00pm (Friday, Sat., &amp;amp; Sun.)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Please arrive 30 minutes prior to cruise departure.&lt;/li&gt;&lt;/ul&gt; &lt;ul style=\'margin:0 0 1em 1em; padding:0;\'&gt; &lt;li&gt;&lt;strong&gt;Lead Traveler: &lt;/strong&gt; jos dp&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Number of Travelers: &lt;/strong&gt; 1 Adult&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Booking Reference: &lt;/strong&gt;VIATOR600033672&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Product Code: &lt;/strong&gt;2316SUN&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Confirmation Details:&lt;/strong&gt;SUN &lt;/li&gt; &lt;li&gt;&lt;strong&gt;Location &lt;/strong&gt;&lt;div&gt;&lt;p&gt;Pier 39&lt;/p&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;When you get to Pier 39, stand on the sidewalk &amp;amp; look towards the water, do NOT go down the center wherethe shops are, but take the left OUTSIDE walkway. Go towards the sea lions &amp;amp; look for a gate with the letter J on it&lt;/div&gt;&lt;/li&gt;&lt;/ul&gt;&lt;h3 style=\'font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\'&gt; Redemption Info&lt;/h3&gt;&lt;ul style=\'margin:0 0 1em 1em; padding:0;\'&gt; &lt;li&gt;You can present either a paper or an electronic voucherfor this activity. &lt;/li&gt; &lt;/ul&gt; &lt;h3 style=\'font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\'&gt;Important&lt;/h3&gt; &lt;ul&gt;&lt;li&gt;Your local contact is Adventure Cat Sailing Charters on +1 800 498 4228.&lt;/li&gt;&lt;li&gt;Please note: You mustreconfirm directly with Adventure Cat Sailing Charters at &lt;ul&gt; &lt;li&gt;Locally on 415 777 1630&lt;/li&gt;&lt;/ul&gt; at least 24 Hour(s)prior to your tour/activity date. If you are not arriving within the specified timeframe, please contact Adventure CatSailing Charters prior to your travels, or immediately upon arrival at your destination.&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;Duringthe months of March, April and November, the weather in San Francisco can be unpredictable and sailings are subject tocancellation or rescheduling. Please ensure that you call the operator 1 day prior to sailing to confirm your tour&lt;/li&gt;&lt;/ul&gt;&lt;h3 style=\'font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\'&gt;Inclusions&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;1.5-hour Sunset Cruise&lt;/li&gt;&lt;li&gt;Light hors d\'oeuvres&lt;/li&gt;&lt;li&gt;Two complimentary drinks&lt;/li&gt;&lt;/ul&gt;&lt;h3 style=\'font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\'&gt;Terms and Conditions &lt;/h3&gt; Read our completeTerms &amp; Conditions for information on cancellations, date changes and other modifications to this confirmed reservation. &lt;/div&gt;&lt;!-- end of voucher_item --&gt;&lt;/div&gt;",
  "vmid": "221001",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2012-04-13T10:40:47+0000",
  "success": true,
  "errorReference": null,
  "errorMessageText": null,
  "totalCount": 1,
  "errorName": null
}
```

## Reviewing bookings

The [/booking/pastbooking](#operation/bookingPastbooking) service gets the details of a single specific past booking based on the `voucherKey` or `itemId` passed into it.

### Sample query Parameters

`"email=john.doe@viator.com&amp;itemId=600033670"`

or

`"voucherKey=3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670"`

### Key concepts
#### Email

The email address passed must match the email address associated to the itinerary

#### Departure Details

Departure details, such as the `departurePoint`, `departurePointAddress` and `departurePointDirections`, will be included in the response. These fields may contain HTML escape characters, such as `&amp;amp;` and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response, or it may cause your JSON to be invalid.


**Example response object** ([/booking/pastbooking](#operation/bookingPastbooking)):

```javascript
{
  "errorReference": null,
  "data": {
    "sortOrder": 0,
    "rulesApplied": null,
    "bookingStatus": {
      "status": 3,
      "text": "Confirmed",
      "type": "CONFIRMED",
      "level": "ITINERARY",
      "confirmed": true,
      "pending": false,
      "amended": false,
      "cancelled": false,
      "failed": false
    },
    "itemSummaries": [{
      "sortOrder": 0,
      "rulesApplied": null,
      "bookingStatus": {
        "status": 1,
        "text": "Paid &amp;amp; Confirmed", "type": "CONFIRMED",
        "level": "ITEM",
        "failed": false,
        "confirmed": true,
        "amended": false,
        "pending": false,
        "cancelled": false
      },
      "travellerAgeBands": [{
        "sortOrder": 0,
        "count": 2,
        "pluralDescription": "Adults",
        "description": "Adult",
        "ageBandId": 1
      }],
      "voucherKey": "1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69:700179574",
      "voucherURL": "https://viatorapi.sandbox.viator.com/service/merchant/voucher.jspa?code=1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69:700179574&amp;embedResources=false",
      "voucherRequirements": "You must present a paper voucher for this tour. We will email a link to access and print your voucher at the Lead Travelers email address.",
      "productPulledDown": false,
      "merchantCancellable": true,
      "productWidgetList": null,
      "savingAmount": 0,
      "vouchers": null,
      "passbooks": null,
      "termsAndConditions": null,
      "itineraryId": 1000308214,
      "productCode": "2065CPT",
      "tourGradeCode": "1DAY",
      "distributorItemRef": "distroItemRefJDP1006151732",
      "languageServicesLanguageCode": "en",
      "travelDate": "2015-09-03",
      "price": 26.28,
      "leadTravellerSurname": "Test",
      "barcodeOption": "tour",
      "barcodeType": "code128",
      "destId": 318,
      "voucherOption": "VOUCHER_PAPER_ONLY",
      "productTitle": "City Sightseeing Cape Town Hop-On Hop-Off Tour",
      "itemId": 700179574,
      "obfsId": 27643,
      "departurePoint": "Tour starts at V&amp;amp;A Waterfront, outside the Two Oceans Aquarium, however you may board the bus at any one of the stops throughout the city (see the Itinerary section below for a list of stops)",
      "departurePointAddress": "",
      "departurePointDirections": "",
      "leadTravellerTitle": "Mr",
      "leadTravellerFirstname": "Homer",
      "lastRetailPrice": 26.28,
      "bookingEngineId": "UF",
      "priceFormatted": "$26.28",
      "savingAmountFormated": "",
      "merchantNetPrice": 26.28,
      "merchantNetPriceFormatted": "$26.28",
      "currencyCode": "USD",
      "lastRetailPriceFormatted": "$26.28",
      "departsFrom": "Cape Town, South Africa",
      "tourGradeDescription": "1-Day Bus Tour (1DAY)",
      "hoursConfirmed": 0,
      "priceUSD": 26.28
    }],
    "voucherURL": "https://viatorapi.sandbox.viator.com/service/merchant/voucher.jspa?code=1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69&amp;embedResources=false",
    "voucherKey": "1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69",
    "bookerEmail": "jocelyn@viator.com",
    "itineraryId": 1000308214,
    "exchangeRate": 1,
    "distributorRef": "distroRefJDP1006151732",
    "totalPrice": 26.28,
    "bookingDate": "2015-06-10",
    "totalPriceFormatted": "$26.28",
    "totalPriceUSD": 26.28,
    "hasVoucher": true,
    "userId": null,
    "currencyCode": "USD"
  }
}

```


## Checking bookings

The [/booking/mybookings](#operation/bookingMybookings) service gets a user's future bookings; i.e., those with travel dates in the future. This service can also be used to check the status of a booking.

### Key concepts
#### Sample URL parameters

- `"sessionId=xxx"`, or
- `"voucherKey=xxx"`, or
- `"email=terry.smith@viator.com&amp;lastCCFourDigits=4242"`, or
- `"email=terry.smith@viator.com&amp;itineraryOrItemId=3299307"`

Provide *one* of:
- a `sessionId` for all bookings related to a user account, or
- a `voucherKey`, or
- an email address (`email`) and the last four digits of the credit card number (`lastCCFourDigits`) used to make the booking to get all associated bookings, or
- an email address (`email`) and `itemId`

...in that order

For `"Failed"` items, display a message that communicates the following information to your customers:

&lt;pre&gt;"The booking has failed either because this tour or activity was not available or there was a technical issue. Please contact Customer Service if you need more information."&lt;/pre&gt;

**See also**: [Booking and item status list](#section/Appendix/bookingStatus-field-values-and-meanings)

#### Departure details

Departure details, such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` will be included in the response. These fields may contain HTML escape characters, such as `&amp;amp;` and special characters that are escaped using a backslash. Ensure that these fields are parsed after receiving the response or it may cause your JSON to be invalid.

**Example response object** ([/booking/mybookings](#operation/bookingMybookings)):

```javascript
{
  "errorReference": null,
  "data": {
    "sortOrder": 0,
    "rulesApplied": null,
    "bookingStatus": {
      "status": 3,
      "text": "Confirmed",
      "type": "CONFIRMED",
      "level": "ITINERARY",
      "confirmed": true,
      "pending": false,
      "amended": false,
      "cancelled": false,
      "failed": false
    },
    "itemSummaries": [{
      "sortOrder": 0,
      "rulesApplied": null,
      "bookingStatus": {
        "status": 1,
        "text": "Paid &amp;amp; Confirmed",
        "type": "CONFIRMED",
        "level": "ITEM",
        "failed": false,
        "confirmed": true,
        "amended": false,
        "pending": false,
        "cancelled": false
      },
      "travellerAgeBands": [{
        "sortOrder": 0,
        "count": 2,
        "pluralDescription": "Adults",
        "description": "Adult",
        "ageBandId": 1
      }],
      "voucherKey": "1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69:700179574",
      "voucherURL": "https://viatorapi.sandbox.viator.com/service/merchant/voucher.jspa?code=1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69:700179574&amp;embedResources=false",
      "voucherRequirements": "You must present a paper voucher for this tour. We will email a link to access and print your voucher at the Lead Travelers email address.",
      "productPulledDown": false,
      "merchantCancellable": true,
      "productWidgetList": null,
      "savingAmount": 0,
      "vouchers": null,
      "passbooks": null,
      "termsAndConditions": null,
      "itineraryId": 1000308214,
      "productCode": "2065CPT",
      "tourGradeCode": "1DAY",
      "distributorItemRef": "distroItemRefJDP1006151732",
      "languageServicesLanguageCode": "en",
      "travelDate": "2015-09-03",
      "price": 26.28,
      "leadTravellerSurname": "Test",
      "barcodeOption": "tour",
      "barcodeType": "code128",
      "destId": 318,
      "voucherOption": "VOUCHER_PAPER_ONLY",
      "productTitle": "City Sightseeing Cape Town Hop-On Hop-Off Tour",
      "itemId": 700179574,
      "obfsId": 27643,
      "departurePoint": "Tour starts at V&amp;amp;A Waterfront, outside the Two Oceans Aquarium, however you may board the bus at any one of the stops throughout the city (see the Itinerary section below for a list of stops)",
      "departurePointAddress": "",
      "departurePointDirections": "",
      "leadTravellerTitle": "Mr",
      "leadTravellerFirstname": "Homer",
      "lastRetailPrice": 26.28,
      "bookingEngineId": "UF",
      "priceFormatted": "$26.28",
      "savingAmountFormatted": "",
      "merchantNetPrice": 26.28,
      "merchantNetPriceFormatted": "$26.28",
      "currencyCode": "USD",
      "lastRetailPriceFormatted": "$26.28",
      "departsFrom": "Cape Town, South Africa",
      "tourGradeDescription": "1-Day Bus Tour (1DAY)",
      "hoursConfirmed": 0,
      "priceUSD": 26.28
    }],
    "voucherURL": "https://viatorapi.sandbox.viator.com/service/merchant/voucher.jspa?code=1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69&amp;embedResources=false",
    "voucherKey": "1000308214:899757cf8b419ed11f39045636b0b30af986d19126d04547097f4b9c05fb4b69",
    "bookerEmail": "jocelyn@viator.com",
    "itineraryId": 1000308214,
    "exchangeRate": 1,
    "distributorRef": "distroRefJDP1006151732",
    "totalPrice": 26.28,
    "bookingDate": "2015-06-10",
    "totalPriceFormatted": "$26.28",
    "totalPriceUSD": 26.28,
    "hasVoucher": true,
    "userId": null,
    "currencyCode": "USD"
  },
  "dateStamp": "2015-06-10T00:33:24+0000", "errorType": null,
  "errorMessage": null,
  "errorName": null,
  "success": true,
  "totalCount": 1,
  "vmid": "321004",
  "errorMessageText": null
}
```

# Testing

## Postman collection for testing

To facilitate your testing of the APIs functionality in the sandbox environment, please use the following file, which can be loaded into the [Postman](https://www.getpostman.com/) API development environment via its **import** function:

  - [Merchant partner API Postman collection](https://docs.viator.com/partner-api/resources/merchant/technical/postman/Viator-API-merchant-Postman.json)

### Setting up API-key authentication in Postman

Before you start using the linked Postman collection for testing, you will need to set up the authorization method you wish to use. This can be either the new method (the `exp-api-key` &lt;u&gt;header&lt;/u&gt; parameter) or, the legacy method (the `apiKey` &lt;u&gt;query&lt;/u&gt; parameter).

While both methods remain available, we strongly recommend that you use the new method, as it:

1. Provides access to all languages available for your organization with a single API-key as opposed to one API-key per language
2. Allows access to the new [booking cancellation endpoints](#section/Common-workflows-and-data-validation/Cancellation-API-workflow), as well as all newly-created endpoints in future
 
Please speak to your account manager if you are still using the legacy apiKey and would like to switch to our new authentication mechanism.

#### How to set up the new exp-api-key header parameter

1. Select **Edit** from the collection menu:

![postman-testing-1](/partner-api/resources/merchant/technical/img/postman-testing-1.png)

2. Set the following values:

* **Key**: `exp-api-key`
* **Value**: Your organization's single exp-api-key, which will have an identical format to that shown in the image below
* **Add to**: Header

![postman-testing-2](/partner-api/resources/merchant/technical/img/postman-testing-2.png)

3. Click **Update**

#### How to set up the legacy apiKey query parameter

1. Select **Edit** from the collection menu:

![postman-testing-1](/partner-api/resources/merchant/technical/img/postman-testing-1.png)

2. Set the following values:

* **Key**: `apiKey`
* **Value**: One of your organization's legacy apiKeys, which will have an identical format to that shown in the image below
* **Add to**: Query Params

![postman-testing-3](/partner-api/resources/merchant/technical/img/postman-testing-2.png)

3. Click **Update**

# FAQs

**Is a confirmation email sent to the customer or supplier when a booking is made in the sandbox environment?**

* No.

**How do I make a demo booking?**

* To make a demo booking, make sure you set `demo` to `true` in your request to the [/booking/book](#operation/bookingBook) service.

**What should I do if I successfully create a test booking in the Live environment?**

* Firstly, please don't make test bookings in the Live environment, as doing so may cause a confirmation email to be sent to the product supplier. Nonetheless, if you have made a test booking, cancel it using the [/bookings/{id}/cancel](#operation/cancelBooking) service; or, send an email to dpsupport@viator.com and include both "CANCEL" and the booking reference number in the subject line.

**Which currencies can I use when making a booking?**

* You can make a booking using the [/booking/book](#operation/bookingBook) endpoint using any of the [supported currencies](#section/Appendices/Supported-currency-codes).
* If you attempt to use a non-supported currency, you will receive an error message similar to the following:

```json
{
  "errorReference": "3D45567E:2D4A_0A5D033A:01BB_5F616D10_1FBBC9:7035",
  "data": null,
  "dateStamp": "2020-09-15T18:41:00+0000",
  "errorType": "EXCEPTION",
  "errorCodes": [
    "UNKNOWN_ERROR"
  ],
  "errorMessage": [
    "Merchant API does not allow the specified currency"
  ],
  "errorName": "RuntimeException",
  "extraInfo": {},
  "extraObject": null,
  "success": false,
  "totalCount": 1,
  "errorMessageText": [
    "Merchant API does not allow the specified currency"
  ],
  "vmid": "331001"
}
```

**Why am I having an SSL handshake issue?**

* It may be that your SSL certificates have expired. Check this. Also, if you are using Java, make sure that it's [updated to the latest version](https://www.java.com/en/download/).

**What is the difference between `merchantNetPrice` and `price` in the response from the [/search/products](#operation/searchProducts) service?**

* `merchantNetPrice` is the amount you, as the merchant partner, will be invoiced for, excluding any fees.
* `price` is the price at which Viator sells the product

**Why is a different price displayed in [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) and [/product](#operation/product)**

* [/product](#operation/product) displays the lowest possible price per traveller; whereas, [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) shows the per-traveller price based on the age-band and number of travellers within that age-band.

**A destination is missing its latitude, longitude or time zone**

* Some destinations in the **sandbox** environment may be missing geolocation or time zone data. However, if you encounter a destination in the **Live** environment with missing information, this can be regarded as an unintended omission – please contact us so that we can update our destination information.

**How do I make a test booking?**

To make a test booking, make sure you:

- set `firstname` and/or `surname` in the `booker` object to `'test'`.
- set `demo` to `true`

Example:

```javascript
{
  "demo": true,
  "currencyCode": "USD",
  "partnerDetail": {
    "distributorRef": "distroRef0412141435"
  },
  "booker": {
    "email": "apitest@viator.com",
    "firstname": "Test",
    "surname": "Test",
    "title": "Mr"
  },
  "items": [{
    "partnerItemDetail": {
      "distributorItemRef": "distroItemRef0412141435_1"
    },
    "hotelId": null,
    "pickupPoint": null,
    "travelDate": "2015-03-31",
    "productCode": "2916ROME",
    "tourGradeCode": "24HR",
    "languageOptionCode": "en/SERVICE_GUIDE",
    "bookingQuestionAnswers": [{
      "questionId": 100,
      "answer": "120 kgs"
    }],
    "specialRequirements": "",
    "travellers": [{
      "bandId": 1,
      "firstname": "Homer",
      "surname": "Simpson Test",
      "title": "Mr",
      "leadTraveller": true
    }]
  }]
}
```

**Is it possible to use a custom value for `distributorRef` and `distributorItemRef`**

* Yes! In fact, this is what you're supposed to do. You can pass anything you like in these fields; however, if you use a `distributorRef` that has already been used, the API will return the previous booking made with that `distributorRef` rather than creating a new booking.
* **Note**: `distributorRef` must be fewer than 40 characters

**What are some common reasons for bookings to fail in the Viator API?**

- `homePhone` or any phone field in the booking request contains spaces. The only acceptable non-numeric characters are: “-“,  “+” , “(“,  and “)”

- `distributorRef` has been re-used.  When making a booking request, a `distributorRef` and `distributorItemRef` must be provided. This is the partner’s ID for the booking, and it must be unique. If a `distributorRef` has been re-used, a booking will not be made and instead, the existing booking will be returned in the response.

- `distributorRef` exceeds 40 characters

- No traveller or an incorrect traveller has been set as the lead traveller in the booking request;
  + `leadTraveller`:`true` must be set for one traveller
  + the `leadTraveller` must be from an `ageBand` that has `treatAsAdult` set to `true`. The data is available in the `ageBands` object in the product details service.

- `languageOptionCode` is invalid
  + To find the valid language option codes for a particular product, have a look at the `langServices` object in the response from the [/product](#operation/product) service; e.g.,

```javascript
"langServices": {
  "en/SERVICE_AUDIO": "English - Audio"
}
```
  + You must then ensure that the `languageOptionCode` in the request to the [/booking/book](#operation/bookingBook) service is populated in the same way; i.e.,

```javascript
"languageOptionCode": "en/SERVICE_AUDIO"
```

**What does it mean if I receive a "Section level access denied" error message?**

- This means that your API-key does not have the correct permissions to access the particular service you were attempting to access when you received this error message. If you feel you would like to use this service nonetheless in your implementation, please contact your account manager to discuss having access granted.

**What does it mean if I receive a "503 Service Unavailable" response?**

- This means that there was a temporary service outage on our end at that time. We recommend that you re-try the operation until you no longer receive this error.

**Does API rate limiting apply to all services?**

- Yes, it does. Regardless of the service you are making requests to, the fundamental rate limits apply equally.

**Can I cancel multiple bookings or items at the same time using the Viator API?**

- No, you may only cancel one booking at a time.

**How many concurrent requests can be made of the API from the same IP address?**

- Three.

**Will my API-key expire?**

- If any API-key is not used for a period of six months, that key is automatically deactivated as a security measure. If this has happened to you, contact your account manager to have the key reactivated or a new key issued to you.

**Why am I getting an empty response when checking booking details?**

- If you are attempting to check a booking using the [/booking/status](#operation/bookingStatus) or [/booking/status/items](#operation/bookingStatusItems) endpoints and receive an empty response, it may be that the booking was made with the demo parameter set to `true`, as the booking status endpoints will ignore demo bookings. Please try making the booking again, ensuring the demo parameter is set to `false`. If this also fails, please email dpsupport@viator.com and include a copy of the request and response JSON objects.

**Must I always provide details for all travelers when booking a product where `allTravellerNamesRequired`=`true`?**

- Approximately 45% of the products in our catalog require all traveller details to be supplied at the time of booking, and this requirement is enforced by the API. While it is technically possible to bypass this requirement – for example, by setting the lead traveler's name, but using dummy values for the the remaining travelers' details ('traveler 2', etc.) – we strongly advise against this, as it can cause problems for suppliers for whom this is a strict requirement. Examples include: Alcatraz tickets, theme park tickets that require a QR code, bookings for flights needing to meet TSA requirements; or, vehicle, Segway or jet-ski rentals. If you are unable to implement the collection of all traveler details on your site, we recommend filtering-out products where this is a strict requirement. You may also request that we filter-out these products for you so that they do not appear in product search results.

**Must I always provide answers to the required booking questions when making a booking?**

- Yes. You must provide answers to all necessary booking questions when making a booking. Approximately 40% of the products in our catalog have booking questions, some of which may be necessary to fulfil the suplier's legal requirements. In the case that the customer cannot provide specific details at the time of booking – e.g., a departure flight number – they may enter 'unknown' and the supplier will manually send a follow-up message to ask for this information.

**Why is there such a big difference in price between that given in the product endpoints and the actual price at the time of booking?**

- The price returned in the product endpoints is the 'From Price', which is the &lt;u&gt;lowest possible price&lt;/u&gt; for an adult passenger when taking into account all available tour grades, group bookings and so forth. The exact price can only be determined when you check the availability for a specific date and passenger/traveler mix. We recommend using the [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) endpoint for this purpose.

**Why doesn't the [/taxonomy/destinations](#operation/taxonomyDestinations) endpoint return continent-level information?**

- Products are categorized according to their 'destination', which includes cities, regions and countries. The next logical grouping would be 'by continent'; however, this would be too broad a grouping, resulting in too many search results and lengthy response times if the product catalogue were to be searched by continent. For more information, see: [Categorization of content](#section/Key-concepts/Categorization-of-content)

**Will there ever be a discrepancy between the amount charged for a tour and the amount refunded due to currency exchange-rate fluctuations?**

- In short: no. Firstly, the cost of the booking and the refund amount are always calculated in the product supplier's native currency – no exchange rate calculations are applied. I.e., if the cost of the booking was USD 100 and the refund percentage is 100% (full refund, as per the response from [/bookings/{booking-reference}/cancel-quote](#operation/cancelBookingQuote)), Viator will simply not invoice you for that USD 100 that we would have if the booking was not canceled. Furthermore, we do not invoice you for the cost of a booking prior to its departure date. 

# Appendices

## Update log

| Date | Description |
|------|-------------|
| 20 July 2020 | Added [Booking references](#section/Key-concepts/Booking-references) section |
| 14 July 2020 | Updated [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices) section |
| 2 June 2020 | Updated Postman collections and [Testing](#section/Testing) section |
| 18 May 2020 | Added note regarding cancel codes to [Legacy merchant cancellation](#section/Appendices/Legacy-merchant-cancellation) section |
| 7 May 2020 | Upgraded search feature; enabled 'Try it Out' console |
| 10 Mar 2020 | Created new [Overview](#section/Overview) section; removed 'Availability services' section, moving section contents into [Key Concepts](#section/Key-concepts) section |

## Accept-Language header

The `Accept-Language` header parameter controls which language the natural language fields in the response from each endpoint will be translated into.

Note that you can only specify languages that have been configured for your API-key. Therefore, if you wish to access additional languages, you will need to contact your business development account manager.

| Language | Accept-Language parameter value |
|----------|-------|
| English | `en`, `en-US` |
| Danish | `da`, `da-DK` |
| Dutch | `nl`, `nl-NL` |
| Norwegian | `no`, `no-NO` |
| Spanish | `es`, `es-ES` |
| Swedish | `sv`, `sv-SE` |
| French | `fr`, `fr-FR` |
| Italian | `it`, `it-IT` |
| German | `de`, `de-DE` |
| Portuguese | `pt`, `pt-PT` |
| Japanese | `ja`, `ja-JP` |
| Chinese (simplified) | `zh-CN` |
| Chinese (traditional) | `zh-TW` |
| Korean | `ko`, `ko-KR` |

## Standard JSON fields

Every service returns a standard set of JSON fields at the end of the JSON response, which indicates if it was processed successfully by the API.

In addition to the `success` flag, you will also need to check the `errorMessage` values for the status of the response. 

An error-free response will have:

- `"success"`:`true`
- `"errorType"`:`null`
- `"errorMessage"`:`null`

### Example JSON - successful:

```javascript
{
  "data": [],
  "vmid": "321001",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-03-06T19:45:10+0000",
  "errorReference": null,
  "errorMessageText": null,
  "success": true,
  "totalCount": 114,
  "errorName": null
}
```

### Example JSON - unsuccessful:

```javascript
{
  "errorReference": "~5793740141815885188840666",
  "data": null,
  "dateStamp": "2013-09-09T11:29:48+0000",
  "errorType": "EXCEPTION",
  "errorMessage": ["* Additional questions missing\n"],
  "errorName": "ValidationException",
  "success": false,
  "totalCount": 1,
  "vmid": "221001",
  "errorMessageText": ["* Additional questions missing" ]
}
```

| Element | Type | Comments | To be viewed by customer | Required |
|---------|------|----------|:------------------------:|:--------:|
| `vmid` | string | The server id that processed the service | ❌ | ✅ |
| `errorMessage` | string | The error message in HTML | ❌ | ✅ |
| `errorType` | string | Type of error: EXCEPTION | ❌ | ✅ |
| `dateStamp` | string | timestamp of the response | ❌ | ✅ |
| `errorReference` | string | The error reference is logged for future reference | ❌ | ✅ |
| `errorMessageText` | string | The textual version of the error message | ✅&lt;br /&gt; (if an error has occurred) | ✅ |
| `success` | boolean | &lt;ul&gt;&lt;li&gt;`true` if the API request was successful with no errors&lt;/li&gt;&lt;li&gt;`false` if an error was encountered&lt;/li&gt;&lt;/ul&gt; | ❌ | ✅ |
| `totalCount` | integer | The number of results returned (minimum = `1`) | ✅&lt;br /&gt; (if displaying the number of results found in a search etc.) | ✅ |
| `errorName` | string | The name of the error type | ❌ | ✅ |

## Country codes
| Country code | Country |
|--------------|---------|
| AF | Afghanistan |
| AL | Albania |
| DZ | Algeria |
| AS | American Samoa |
| AD | Andorra |
| AO | Angola |
| AI | Anguilla |
| AQ | Antarctica |
| AG | Antigua and Barbuda |
| AR | Argentina |
| AM | Armenia |
| AW | Aruba |
| AU | Australia |
| AT | Austria |
| AZ | Azerbaijan |
| BS | Bahamas |
| BH | Bahrain |
| BD | Bangladesh |
| BB | Barbados |
| BY | Belarus |
| BE | Belgium |
| BZ | Belize |
| BJ | Benin |
| BM | Bermuda |
| BT | Bhutan |
| BO | Bolivia |
| BA | Bosnia Herzegovina |
| BW | Botswana |
| BR | Brazil |
| BN | Brunei |
| BG | Bulgaria |
| BF | Burkina Faso |
| BI | Burundi |
| KH | Cambodia |
| CM | Cameroon |
| CA | Canada |
| CV | Cape Verde |
| KY | Cayman Islands |
| CF | Central Africa |
| TD | Chad |
| CL | Chile |
| CN | China |
| CX | Christmas Island |
| CC | Cocos (Keeling) Islands |
| CO | Colombia |
| KM | Comoros |
| CK | Cook Islands |
| CR | Costa Rica |
| CI | Cote D'Ivoire |
| HR | Croatia |
| CY | Cyprus |
| CZ | Czech Republic |
| DK | Denmark |
| DJ | Djibouti |
| DM | Dominica |
| DO | Dominican Republic |
| EC | Ecuador |
| EG | Egypt |
| SV | El Salvador |
| GQ | Equatorial Guinea |
| ER | Eritrea |
| EE | Estonia |
| ET | Ethiopia |
| FK | Falkland Island |
| FO | Faroe Islands |
| FJ | Fiji |
| FI | Finland |
| FR | France |
| GF | French Guiana |
| PF | French Polynesia |
| GA | Gabon |
| GM | Gambia |
| GE | Georgia |
| DE | Germany |
| GH | Ghana |
| GI | Gibraltar |
| GR | Greece |
| GL | Greenland |
| GD | Grenada |
| GP | Guadeloupe |
| GU | Guam |
| GT | Guatemala |
| GN | Guinea |
| GW | Guinea Bissau |
| GY | Guyana |
| HT | Haiti |
| HN | Honduras |
| HK | Hong Kong |
| HU | Hungary |
| IS | Iceland |
| IN | India |
| ID | Indonesia |
| IQ | Iraq |
| IE | Ireland |
| IL | Israel |
| IT | Italy |
| JM | Jamaica |
| JP | Japan |
| JO | Jordan |
| KZ | Kazakhstan |
| KE | Kenya |
| KI | Kiribati |
| KW | Kuwait |
| KG | Kyrgyzstan |
| LA | Lao People's Democratic Republic |
| LV | Latvia |
| LB | Lebanon |
| LS | Lesotho |
| LR | Liberia |
| LY | Libyan Arab Jamahiriya |
| LI | Liechtenstein |
| LT | Lithuania |
| LU | Luxembourg |
| MO | Macau |
| MK | Macedonia |
| MG | Madagascar |
| MW | Malawi |
| MY | Malaysia |
| MV | Maldives |
| ML | Mali |
| MT | Malta |
| MQ | Martinique |
| MR | Mauritania |
| MU | Mauritius |
| YT | Mayotte |
| MX | Mexico |
| FM | Micronesia |
| MD | Moldova |
| MC | Monaco |
| MN | Mongolia |
| MS | Monserrat |
| MA | Morocco |
| MZ | Mozambique |
| NA | Namibia |
| NR | Nauru |
| NP | Nepal |
| NL | Netherlands |
| AN | Netherlands Antilles |
| KN | Nevis- St Kitts |
| NC | New Caledonia |
| NZ | New Zealand |
| NI | Nicaragua |
| NE | Niger |
| NG | Nigeria |
| NU | Niue |
| NF | Norfolk Island |
| KP | North Korea |
| MP | Northern Mariana Islands |
| NO | Norway |
| OM | Oman |
| PK | Pakistan |
| PW | Palau |
| PS | Palestinian Territory, Occupied |
| PA | Panama |
| PG | Papua New Guinea |
| PY | Paraguay |
| PE | Peru |
| PH | Philippines |
| PN | Pitcairn |
| PL | Poland |
| PT | Portugal |
| PR | Puerto Rico |
| QA | Qatar |
| RE | Reunion |
| RO | Romania |
| RU | Russian Federation |
| RW | Rwanda |
| SH | Saint Helena |
| LC | Saint Lucia |
| SM | San Marino |
| ST | Sao Tome and Principe |
| SA | Saudi Arabia |
| SN | Senegal |
| YU | Serbia and Montenegro |
| SC | Seychelles |
| SL | Sierra Leone |
| SG | Singapore |
| SK | Slovakia |
| SI | Slovenia |
| SB | Solomon Islands |
| SO | Somalia |
| ZA | South Africa |
| KR | South Korea |
| ES | Spain |
| LK | Sri Lanka |
| PM | St Pierre Miquelon |
| VC | St Vincent and Grenadines |
| SR | Suriname |
| SZ | Swaziland |
| SE | Sweden |
| CH | Switzerland |
| SY | Syria |
| TW | Taiwan |
| TJ | Tajikistan |
| TZ | Tanzania |
| TH | Thailand |
| TL | Timor-Leste |
| TG | Togo |
| TK | Tokelau |
| TO | Tonga |
| TT | Trinidad and Tobago |
| TN | Tunisia |
| TR | Turkey |
| TM | Turkmenistan |
| TC | Turks and Caicos Islands |
| TV | Tuvalu |
| UG | Uganda |
| UA | Ukraine |
| AE | United Arab Emirates |
| GB | United Kingdom |
| UY | Uruguay |
| UM | US Minor Outlying Islands |
| US | United States of America |
| UZ | Uzbekistan |
| VU | Vanuatu |
| VE | Venezuela |
| VN | Vietnam |
| VG | Virgin Islands-British |
| VI | Virgin Islands-US |
| WF | Wallis and Futuna Islands |
| WS | Western Samoa |
| YE | Yemen Republic |
| ZM | Zambia |
| ZW | Zimbabwe |

## US state codes
| State code | State |
|------------|-------|
| AL | Alabama |
| AK | Alaska |
| AZ | Arizona |
| AR | Arkansas |
| CA | California |
| CO | Colorado |
| CT | Connecticut |
| DE | Delaware |
| DC | District of Columbia |
| FL | Florida |
| GA | Georgia |
| HI | Hawaii |
| ID | Idaho |
| IL | Illinois |
| IN | Indiana |
| IA | Iowa |
| KS | Kansas |
| KY | Kentucky |
| LA | Louisiana |
| ME | Maine |
| MD | Maryland |
| MA | Massachusetts |
| MI | Michigan |
| MN | Minnesota |
| MS | Mississippi |
| MO | Missouri |
| MT | Montana |
| NE | Nebraska |
| NV | Nevada |
| NH | New Hampshire |
| NJ | New Jersey |
| NM | New Mexico |
| NY | New York |
| NC | North Carolina |
| ND | North Dakota |
| OH | Ohio |
| OK | Oklahoma |
| OR | Oregon |
| PA | Pennsylvania |
| RI | Rhode Island |
| SC | South Carolina |
| SD | South Dakota |
| TN | Tennessee |
| TX | Texas |
| UT | Utah |
| VT | Vermont |
| VA | Virginia |
| WA | Washington |
| WV | West Virginia |
| WI | Wisconsin |
| WY | Wyoming |

## Canadian provinces

| Code | Province |
|------|----------|
| Alberta | Alberta |
| British Columbia | British Columbia |
| Manitoba | Manitoba |
| New Brunswick | New Brunswick |
| Newfoundland and Labrador | Newfoundland |
| Northwest Territories | Northwest Territories |
| Nova Scotia | Nova Scotia |
| Nunavut | Nunavut |
| Ontario | Ontario |
| Prince Edward Island | Prince Edward Island |
| Quebec | Quebec |
| Saskatchewan | Saskatchewan |
| Yukon | Yukon Territory |

## Australian states

| Code | State |
|------|-------|
| ACT | Australian Capital Territory |
| NSW | New South Wales |
| NT | Northern Territory |
| QLD | Queensland |
| SA | South Australia |
| TAS | Tasmania |
| VIC | Victoria |
| WA | Western Australia |

## bookingStatus field values and meanings

| Field: `type` | Field: `status` | Meaning |
|-------|:-----:|---------|
| `"WAITING"` | `0` | This item has not been booked. Part of an unfinished itinerary. |
| `"CONFIRMED"` | `1` | This item has been successfully booked |
| `"UNAVAILABLE"` | `2` | This item has been had an availability check, that came back false. |
| `"PENDING"` | `3` | This item has begun booking, but has paused in a deferred booking engine |
| `"FAILED"` | `4` | A merchant partner with a freesale-only API-key has attempted to book an on-request product |
| `"CANCELLED"` | `5` | This item has successfully been cancelled. |
| `"EXPIRED"` | `6` | This item is now expired. |
| `"AMENDED"` | `7` | This item has been amended after booking. |
| `"PENDING_AMEND"` | `8` | This item has a pending amendment which can be cancelled. |
| `"REJECTED"` | `12` | Viator only |
| `"ON_HOLD"` | `13` | Viator only |

## Supported currency codes

Supported currency codes for merchant partners:

| Currency code | Currency |
|---------------|----------|
| USD | US dollar |
| GBP | British pound |
| EUR | Euro |
| AUD | Australian dollar |

**Note:** Partners will be billed in the currency of the booking.

## Viator API error codes

| Error code | Services | Error message | Description |
|------------|----------|---------------|-------------|
| ADDRESS_REQUIRED | [/booking/book](#operation/bookingBook) | "You have not entered an address. Please enter your address information." | `ccAddress1` was empty |
| ADDRESS_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | "Billing address is restricted to 50 characters long." | `address` field was longer than 51 characters |
| ATTRIBUTE_NOT_FOUND | [/product](#operation/product) |   |   |
| AGE_BAND_INVALID | [/booking/book](#operation/bookingBook) |  | a `bandId` has been submitted that does not correspond to any `bandId` available for the tour grade in question |
| BOOKING_QUESTIONS_MISSING | [/booking/book](#operation/bookingBook) | "Additional questions missing" | one or more required [booking questions](#section/Appendices/Booking-questions) are missing in the booking request |
| CARD_EXPIRED | [/booking/book](#operation/bookingBook)  |   | submitted credit card details corresponding to an expired card  |
| CITY_REQUIRED | [/booking/book](#operation/bookingBook) | "You have not entered a city in the address section. Please enter your city." | address is required in the credit card section |
| CITY_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | "City is restricted to 40 characters long." | city name submitted was more than 40 characters long |
| COUNTRY_REQUIRED | [/booking/book](#operation/bookingBook) | "You have not entered a country. Please enter your country." | no country was submitted in the booking request  |
| CREDIT_CARD_DECLINED | [/booking/book](#operation/bookingBook) |   | credit card used for booking was declined by the payment processor  |
| CREDIT_CARD_EXPIRY_DATE_INVALID | [/booking/book](#operation/bookingBook) | "The expiration date for your credit card is not formatted properly. Please verify and re-enter the expiration date." | incorrectly-formatted credit card expiration date was submitted  |
| CREDIT_CARD_HOLDER_NAME_INVALID | [/booking/book](#operation/bookingBook) |  | credit card holder's name was invalid, perhaps due to the inclusion of invalid characters |
| CREDIT_CARD_NUMBER_INVALID | [/booking/book](#operation/bookingBook) | "Please verify and re-enter the credit card details, or use a different credit card" | invalid characters in credit card number |
| CREDIT_CARD_NUMBER_REQUIRED | [/booking/book](#operation/bookingBook) | "Credit card number is required" | credit card number was omitted |
| CREDIT_CARD_SECURITY_NUMBER_INVALID | [/booking/book](#operation/bookingBook) | "The card security number you entered for your credit card is invalid. It must contain 3 digits (or 4 with American Express cards). Please re-enter the card security number." | incorrect CCV code submitted |
| CREDIT_CARD_SECURITY_NUMBER_REQUIRED | [/booking/book](#operation/bookingBook) | "Credit card security number is required" | CCV was not provided |
| DEMO_BOOKING_WITH_REAL_CARD | [/booking/pricingmatrix](#operation/bookingPricingmatrix) |  | `demo` is `true`, but credit card details are real |
| DISTRIBUTOR_REFERENCE_MISMATCH | [/booking/pastbooking](#operation/bookingPastbooking); [/booking/mybookings](#operation/bookingMybookings) | "The distributor reference associated with this itinerary does not match the one provided." | attempt to retrieve a booking with an `itineraryId` or `itemId` and `distributorRef`, but the reference doesn't match the one saved in the itinerary |
| EMAIL_ADDRESS_INVALID | [/booking/book](#operation/bookingBook) | "Your email address format is invalid" | email address is formatted incorrectly  |
| EMAIL_REQUIRED | [/booking/book](#operation/bookingBook) | "Email is required" | email address is missing in the booking request |
| FIRST_NAME_INVALID | [/booking/book](#operation/bookingBook) | "You have entered a name for the credit-card holder that is not valid. Please verify and re-enter the name of the credit card holder." | first name is formatted incorrectly or contains invalid characters in the booking request - string length must be &gt; 1 and must not contain the following characters: &lt;&gt;%;"(),|
| FIRST_NAME_REQUIRED | [/booking/book](#operation/bookingBook) | "First name of credit card details is required" | no first name specified |
| FIRST_NAME_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | "First name of credit card details is restricted to 30 characters long" | first name exceeds 30 characters |
| INTERNAL_ERROR | *any* | *any* | the API itself has experienced an unexpected error |
| LAST_NAME_INVALID | [/booking/book](#operation/bookingBook) |  "You have entered a name for the credit-card holder that is not valid. Please verify and re-enter the name of the credit card holder." | last name is formatted incorrectly in the booking request - string length must be &gt; 1 and must not contain the following characters: &lt;&gt;%;"(), |
| LAST_NAME_REQUIRED | [/booking/book](#operation/bookingBook) | "Last name of credit card details is required" | no last name supplied in the `ccname` field of the `ccPayDetail` object |
| LAST_NAME_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | "Last name of credit card details is restricted to 35 characters long" | the surname in the `ccname` field of the `ccPayDetail` object must not exceed 35 characters in length |
| LEAD_TRAVELLER_REQUIRED | [/booking/book](#operation/bookingBook) | "A traveler needs to be selected as lead traveler." | one traveller object within the `travellers` array in the booking request needs to have `leadTraveller` set to `true` |
| PAYMENT_AMOUNTS_CHANGED |  [/booking/book](#operation/bookingBook) | e.g. "PAYMENT_AMOUNTS_CHANGED: HKD 2213.20 (was HKD 2210.26)" | This error indicates that the exchange rate was updated while the booking was being made. Refresh the product's pricing information and retry the booking.  |
| PAYMENT_CURRENCY_MISMATCH | [/booking/book](#operation/bookingBook) |   |   |
| PAYMENT_ENCRYPTION_ERROR | [/booking/book](#operation/bookingBook)  |   | Viator-only internal error - retry booking request |
| PAYMENT_INTERNAL_ERROR | [/booking/book](#operation/bookingBook)  |   | Viator-only internal error - retry booking request |
| PAYMENT_LIMIT_REACHED | [/booking/book](#operation/bookingBook)  |   | Viator-only internal error - retry booking request |
| PAYMENT_REJECTED | [/booking/book](#operation/bookingBook) | | triggered when expiry: `"01/2018"` and card number: `"4539791001730106"` were submitted |
| POSTCODE_REQUIRED | [/booking/book](#operation/bookingBook) | "You have not entered a zip code / post code. Please enter your zip code / post code.", | `ccaddressZip` was empty |
| POSTCODE_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | "Zip code / post code is restricted to 10 characters long." | `ccaddressZip` was more than 10 characters in length |
| PRICING_DATA_MISSING |   |   | Viator-only internal error - retry booking request |
| PRODUCT_TOUR_GRADE_UNKNOWN | [/booking/pricingmatrix](#operation/bookingPricingmatrix) | Unknown tour grade: &lt;TOUR_GRADE&gt; for product | an invalid tour grade code was submitted |
| PRODUCT_UNAVAILABLE | [/booking/book](#operation/bookingBook)  |   | Viator-only internal error - retry booking request |
| REFUND_REJECTED |   |   |  Viator-only internal error - retry booking request |
| STATE_REQUIRED | [/booking/book](#operation/bookingBook) | | `ccaddressState` is required for this billing request |
| STATE_SIZE_EXCEEDED | [/booking/book](#operation/bookingBook) | | `ccaddressState` must be fewer than 35 characters long |
| TOUR_NOT_AVAILABLE | [/booking/book](#operation/bookingBook) | "We're sorry, the following tour you are trying to book is sold out and no longer available" | the tour is not available on the requested date |
| TOUR_GONE | [/product](#operation/product) | "We're sorry, we cannot find the tour, activity or attraction you are looking for" | no product corresponding to the supplied details was found |
| TOUR_NOT_AVAILABLE_BETWEEN_DATES | | | |
| TOUR_NOT_FOUND | [/product](#operation/product) | "We're sorry, we cannot find the tour, activity or attraction you are looking for" | no product corresponding to the supplied details was found |
| TRAVELLER_COUNT_EXCEEDED_MAX_LIMIT |   |   | number of travellers in the booking request was greater than the limit for the product being booked |
| TRAVELLER_FIRST_NAME_INVALID | [/booking/book](#operation/bookingBook) | "First name of traveler 1 must only contain alphabetical characters" | non-alphabetical characters were used in the traveller's first name |
| TRAVELLER_FIRST_NAME_REQUIRED | [/booking/book](#operation/bookingBook) | "First name of traveler 1 is required" | `firstname` in the `booker` object was omitted |
| TRAVELLER_LAST_NAME_INVALID | [/booking/book](#operation/bookingBook) | "Last name of traveler 1 should contain alphabet only" | `surname` in the `booker` object contained non-alphabetical characters |
| TRAVELLER_LAST_NAME_REQUIRED | [/booking/book](#operation/bookingBook) | "Last name of traveler 1 is required" | `surname` in the `booker` object was omitted |
| TRAVELLER_MISMATCH |  [/booking/availability/tourgrades](#operation/bookingAvailabilityTourgrades) |   | the `bandId` is not available for the selected tour grade; or, the product does not support the number of travelers requested |
| UNKNOWN_ERROR | *any* | *any* | the API reports this error when the exception from the underlying system (e.g. booking server) is not recognized |
| UNKNOWN_PAYMENT_METHOD |   |   |   |
| UNSUPPORTED_CARD |   |   | `cctype` is not one of `"Visa"`, `"Mastercard"` or `"Amex"` |

## Booking questions

Example product codes were valid at the time of writing. If you find that any of these product codes are invalid or do not include the relevant booking question, please [inform us about it via email](apitechsupport@viator.com).

| Id | stringQuestionId | title | subtitle | message | example product |
|:----------:|-------------|-------|----------|----------|-----|
| 1 | `dateOfBirth_dob` | Date of Birth | (e.g. 20 October 1970) | Enter your date of birth. | 100009P2 |
| 2 | `heights_passengerHeights` | Passenger Heights | (eg. 5'2, 158cm etc) | For safety reasons you must enter the height of all passengers. Please indicate inches or centimetres. | 100009P1 |
| 3 | `passport_expiry` | Passport Expiry Date | (e.g. 15 September 2015. If multiple passengers, separate each entry e.g. 01 July 2012, 31 May 2014) | Enter passport expiry date for all passengers | 100014P10 |
| 4 | `passport_nationality` | Passport Nationality | (e.g. United States of America. If multiple passengers, separate each entry e.g. Australia, China) | Enter country of issue of passport for all passengers | 100014P10 |
| 5 | `passport_passportNo` | Passport Number | (e.g. 0123456789. If multiple passengers, separate each entry e.g. 0123456789, 9876543210) | Enter passport number for all passengers | 100014P10 |
| 6 | N/A | N/A | N/A | N/A | N/A |
| 7 | `transfer_air_arrival_airline` | Arrival Airline | (e.g. United, British Airways, Qantas, etc) | Enter the name of your airline. | 100006P15 |
| 8 | `transfer_air_arrival_flightNo` | Arrival Flight No | (e.g. UA 864, BA 923, QA 233, etc) | Enter your flight number. | 100006P15 |
| 9 | `transfer_air_departure_airline` | Departure Airline | (e.g. United, British Airways, Qantas, etc) | Enter the name of your airline. | 100006P17 |
| 10 | `transfer_air_departure_flightNo` | Departure Flight No | (e.g. UA 864, BA 923, QA 233, etc) | Enter your flight number. | 100006P17 |
| 11 | `transfer_arrival_dropOff` | Drop Off Location | (e.g. 1234 Cedar Way, Brooklyn, NY 00123) | Enter the address for drop off. | 100006P15 |
| 12 | `transfer_arrival_time` | Arrival Time | (eg. 8pm, 20:30 etc) | Enter your arrival time. Please indicate AM/PM or use the 24-hour clock. | 100006P15 |
| 13 | `transfer_departure_date` | Departure date | (e.g. 15 September 2015) | Enter your departure date. | 100006P15 |
| 14 | `transfer_departure_pickUp` | Pick up Location | (e.g. 1234 Cedar Way, Brooklyn, NY 00123) | Enter the address for pick up. | 100006P17 |
| 15 | `transfer_departure_time` | Departure Time | (eg. 8pm, 20:30 etc) | Enter your departure time. Please indicate AM/PM or use the 24-hour clock. | 100006P17 |
| 16 | `transfer_port_arrival_time` | Disembarkation Time | (eg. 8pm, 20:30 etc) | Enter your disembarkation time. Please indicate AM/PM or use the 24-hour clock. | 100014P14 |
| 17 | `transfer_port_cruiseShip` | Cruise Ship | (e.g. Brilliance of the Seas, etc) | Enter your cruise ship. | 100014P14 |
| 18 | `transfer_port_departure_time` | Boarding Time | (eg. 8pm, 20:30 etc) | Enter your boarding time. Please indicate AM/PM or use the 24-hour clock. | 100014P4 |
| 19 | `transfer_rail_arrival_line` | Arrival Rail Line | (e.g. Amtrak, etc) | Enter the name of the rail provider. | 100006P15 |
| 20 | `transfer_rail_arrival_station` | Arrival Rail Station | (e.g. Central Station, etc) | Enter name of arrival and/or departure station. | 100006P15 |
| 21 | `transfer_rail_departure_line` | Departure Rail Line | (e.g. Amtrak, etc) | Enter the name of the rail provider. | 100014P10 |
| 22 | `transfer_rail_departure_station` | Departure Rail Station | (e.g. Central Station, etc) | Enter name of arrival and/or departure station. | 100014P10 |
| 23 | `weights_passengerWeights` | Passenger Weights | (e.g. 127 pounds, 145 kilos, etc) | For safety reasons you must enter the weight of &lt;b&gt;all&lt;/b&gt; passengers. Please indicate pounds or kilos. | 100111P12 |

## Legacy merchant cancellation

**Note:** This functionality has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints.

### Requirements for cancellations

- To successfully cancel a booking via the [/merchant/cancellation](#operation/merchantCancellation) service, you must include the itinerary item to cancel (`itemId`). 

- `itineraryItemId` and `itineraryId` need to match the `distributorRef` and `distributorItemRef`, so these four values must also be included in the request body. 

- You must also include a `cancelCode` - a number corresponding to the reason for cancellation. You can use the &lt;a href="#suggested-cancellation-codes"&gt;suggested cancel codes&lt;/a&gt; shown in the table below.


&lt;mark&gt;**Note**: Post-travel cancellations **will not be processed** unless a cancel code of `62` or `66` is passed in the `cancelCode` parameter.&lt;/mark&gt;
### The [/merchant/cancellation](#operation/merchantCancellation) service:

#### Description of JSON request parameters for the [/merchant/cancellation](#operation/merchantCancellation) service:

| Parameter | Type | Comments | Required |
|-----------|------|----------|:--------:|
| `itineraryId` | integer | Viator itinerary reference number | ✅ |
| `distributorRef` | string | Merchant partner's itinerary reference for booking | ✅ |
| `cancelItems` | array | Array of item to cancel in itinerary | ✅ |
| `itemId` | integer | Viator `itemId` of item to cancel in itinerary | ✅ |
| `distributorItemRef` | string | Merchant partner's itinerary item (booking) reference | ✅ |
| `cancelCode` | string | A number indicating the reason for cancelling the booking. A list of &lt;a href="#suggested-cancellation-codes"&gt;suggested cancel codes&lt;/a&gt; is shown in the table below. | ✅ |
| `cancelDescription` | string | Natural-language reason for cancellation. A reason **must** be provided if a `cancelCode` of `'62'` or `'66'` is passed. | ✅ for `cancelCode` `'62'` or `'66'`; otherwise ❌ |

#### Example [/merchant/cancellation](#operation/merchantCancellation) request:

In this request, we wish to cancel the booking identified by the following:

| Parameter | Value |
|-----------|-------|
| `itneraryId` | `12345655` |
| `distributorRef` | `"Jdp122"` |
| `itemId` | `330056` |
| `distributorItemRef` | `"JdpItin001"` |
| `cancelCode` | `"82"` (Honest mistake - incorrect purchase) |

This is accomplished as follows:

**API Service**

```html
POST /merchant/cancellation
```

**Request body**

```javascript
{
  "itineraryId": 1234655,
  "distributorRef": "Jdp122",
  "cancelItems": [
  {
    "itemId": 330056,
    "distributorItemRef": "JdpItin001",
    "cancelCode": "82"
  }]
}
```

#### Example response
```javascript
{
  "data": {
    "itineraryId": 1234655,
    "cancelItems": [
      {
        "cancellationResponseStatusCode": "Confirmed",
        "cancellationResponseDescription": "No further action required",
        "itemId": 330056,
        "distributorItemRef": "JdpItin001"
      }],
    "distributorRef": "Jdp122"
  },
  "vmid": "221002",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-03-21T14:28:08+0000",
  "errorReference": null,
  "errorMessageText": null,
  "success": true,
  "totalCount": 1,
  "errorName": null
}
```

### &lt;a name="suggested-cancellation-codes"&gt;&lt;/a&gt;Suggested cancellation codes:

| cancelcode | meaning |
|:-:|:-|
| `'00'` | Testing (use for test cancellations) |
| `'51'` | Flight cancellation affecting customer |
| `'52'` | Flight schedule change unacceptable to customer |
| `'53'` | Death of the customer or a member of their immediate family |
| `'54'` | Jury duty/court summons affecting customer |
| `'56'` | Medical emergency/hospitalization involving the customer or their immediate family |
| `'57'` | Customer is required for military service |
| `'58'` | National disaster (insurrection, terrorism, war) affecting the customer |
| `'59'` | Natural disaster (earthquake, fire, flood) affecting the customer |
| `'62'` | **Post-travel cancellation**: the product was cancelled by the supplier and the traveller was not given sufficient notice |
| `'63'` | Transport strike/labor dispute affecting customer |
| `'66'` | **Post-travel cancellation**: the product was not cancelled, but the customer was dissatisfied with the product |
| `'71'` | Credit card fraud |
| `'72'` | Car segment cancellation affecting customer |
| `'73'` | Package segment cancellation affecting customer |
| `'74'` | Hotel segment cancellation affecting customer |
| `'77'` | Re-book |
| `'78'` | Duplicate purchase |
| `'82'` | Honest mistake (incorrect purchase) |
| `'87'` | Non-refundable cancellation more than 24 hours prior to travel |
| `'88'` | Non-refundable cancellation less than 24 hours prior to travel |
| `'98'` | Customer service/technical support response outside time limit |
| `'99'` | Duplicate processing |

### Cancellation errors

If the cancellation was **not** successful, you will receive an error response.

#### Example error response

```javascript
{
  "data": {
    "itineraryId": "3331605", 
    "cancelItems": [{
      "cancellationResponseStatusCode": "Error.ItineraryUnknown", 
      "cancellationResponseDescription": "Please double check the details or contact..."
      "itemId": "600088255",
      "distributorItemRef": "ItinItemRef012"
    }],
    "distributorRef": null 
  },
  "vmid": "221002",
  "errorMessage": null,
  "errorType": null,
  "dateStamp": "2013-03-21T14:43:38+0000", 
  "errorReference": null, 
  "errorMessageText": null,
  "success": true, 
  "totalCount": 1, 
  "errorName": null
}
```

### &lt;a name="cancellation-response-status-codes-and-their-meanings"&gt;&lt;/a&gt;Cancellation response status codes and their meanings

| `cancellationResponseStatusCode` | Meaning | Action |
|----------------------------------|----------|--------|
| `"Confirmed"` | The request to cancel and refund the item has been accepted and processed | No further action is required. |
| `"Pending"` | Confirmation of the request to cancel and refund the item is pending. This only applies when a `cancelCode` is `'62'` or `'66'` was sent and the booking was in a 'pending' state. | No action required. Partner will be contacted when a decision to confirm/reject has been made by the supplier. |
| `"Rejected"` | The cancellation request was denied | No action required. The item cannot be cancelled. |
| `"Error.ItemUnknown"` | Item not found | Double-check `itemId`. Contact Viator Customer Service for more information if required. |
| `"Error.ItineraryUnknown"` | Itinerary not found | Double-check `itineraryId`. Contact Viator Customer Service for more information if required. |
| `"Error.MultipleRequests"` | Cancellation request contains multiple requests | Submit **only one** item per cancellation request. |
| `"Error.NoCancellationCodeOrDescription"` | Invalid `cancelCode` | `cancelCode` is invalid – ensure it is **two** digits long |
| `"Error.Unknown"` | An undefined error has occurred | Double-check the `distributorRef` and `distributorItemRef`. If the error is still occurring, [contact the Viator partner support team](mailto:dpsupport@viator.com). |

### Resubmitting a cancellation request

If the same cancellation request is sent more than once, Viator will respond with the last known response.

Base URLs:

* <a href="https://viatorapi.viator.com/service">https://viatorapi.viator.com/service</a> - Production server (uses live data)

* <a href="https://viatorapi.sandbox.viator.com/service">https://viatorapi.sandbox.viator.com/service</a> - Sandbox server (uses test data)

Email: <a href="mailto:dpsupport@viator.com">Viator Partner Support Team</a> 
Web: <a href="https://docs.viator.com/partner-api/merchant/#support-procedures-merchant/">Viator Partner Support Team</a> 
License: <a href="https://creativecommons.org/licenses/by/4.0/au">CC BY 4.0</a>

# Authentication

* API Key (API-key)
    - Parameter Name: **exp-api-key**, in: header.

* API Key (Legacy-API-key)
    - Parameter Name: **apiKey**, in: query.

<h1 id="viator-api-documentation-amp-specification-merchant-partners-general-services">General services</h1>

General services

## /health/check

<a id="opIdhealthCheck"></a>

> Code samples

```bash
curl https://example.com/health/check \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /health/check`

Health check
Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."


<h3 id="healthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|

> Example responses

> 200 Response

```json
{
  "allGood": true,
  "capiOk": true,
  "dbOk": true,
  "memcachedOk": true,
  "message": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  }
}
```

<h3 id="healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="healthcheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allGood|boolean \| null|false|none|**indicator**: `true` signifies health|
|capiOk|boolean \| null|false|none|**indicator**: `true` signifies health|
|dbOk|boolean \| null|false|none|**indicator**: `true` signifies health|
|memcachedOk|boolean \| null|false|none|**indicator**: `true` signifies health|
|message|string \| null|false|none|**natural-language description** of any issues regarding the health of the API|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

<h1 id="viator-api-documentation-amp-specification-merchant-partners-taxonomy-services">Taxonomy services</h1>

Taxonomy services

## /taxonomy/attractions

<a id="opIdtaxonomyAttractions"></a>

> Code samples

```bash
curl https://example.com/taxonomy/attractions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "destId": 684,
    "sortOrder": "SEO_PUBLISHED_DATE_D",
    "topX": "1-3"
  }'
```

`POST /taxonomy/attractions`

Get attractions
- Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
- The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.


> Body parameter

```json
{
  "destId": 684,
  "sortOrder": "SEO_PUBLISHED_DATE_D",
  "topX": "1-3"
}
```

<h3 id="taxonomyattractions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» destId|body|integer|false|**unique numeric identifier** of the destination in which to search for attractions|
|» sortOrder|body|string|false|**sort order** in which to return the results that is *one of*:<br>  * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)<br>  * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)<br>  * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)<br>  * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)<br>  * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)<br>|
|» topX|body|[topX](#schematopx)|false|**start and end rows** to return in the format {start}-{end}<br>- e.g. `'1-10'`, `'11-20'`<br><br>**Note**: <br>- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`<br>- if `topX` is not specified, the default is `'1-100'`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sortOrder|SEO_PUBLISHED_DATE_D|
|» sortOrder|SEO_PUBLISHED_DATE_A|
|» sortOrder|SEO_REVIEW_AVG_RATING_D|
|» sortOrder|SEO_REVIEW_AVG_RATING_A|
|» sortOrder|SEO_ALPHABETICAL|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attractionCity": "",
      "attractionLatitude": 35.8808,
      "attractionLongitude": -113.97048,
      "attractionState": "",
      "attractionStreetAddress": "",
      "destinationId": 684,
      "pageUrlName": "Grand-Canyon-West-Rim",
      "photoCount": 157,
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "productCount": 16,
      "publishedDate": "2020-01-15",
      "rating": 4.5,
      "seoId": 1594,
      "sortOrder": 1,
      "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/44811_GrandCanyon_WestRim_d815-24.jpg",
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/44811_GrandCanyon_WestRim_d815-24.jpg",
      "title": "Grand Canyon West Rim",
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "attractionCity": "Las Vegas",
      "attractionLatitude": 36.162683,
      "attractionLongitude": -115.144685,
      "attractionState": "",
      "attractionStreetAddress": "619 Las Vegas Boulevard South",
      "destinationId": 684,
      "pageUrlName": "Graceland-Wedding-Chapel",
      "photoCount": 10,
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "productCount": 2,
      "publishedDate": "2019-08-22",
      "rating": 4.5,
      "seoId": 1246,
      "sortOrder": 2,
      "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/785937_Viator_Photographer_395090.jpg",
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/785937_Viator_Photographer_395090.jpg",
      "title": "Graceland Wedding Chapel",
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "attractionCity": "Las Vegas",
      "attractionLatitude": 36.126374,
      "attractionLongitude": -115.166749,
      "attractionState": "",
      "attractionStreetAddress": "3131 Las Vegas Blvd South",
      "destinationId": 684,
      "pageUrlName": "Wynn-Las-Vegas",
      "photoCount": 5,
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "productCount": 2,
      "publishedDate": "2019-07-30",
      "rating": 0,
      "seoId": 1266,
      "sortOrder": 3,
      "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/100516_Las%20Vegas_Wynn%20Hotel%20&amp;%20Casino_d684-508.jpg",
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/100516_Las%20Vegas_Wynn%20Hotel%20&amp;%20Casino_d684-508.jpg",
      "title": "Wynn Las Vegas",
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    }
  ],
  "dateStamp": "2020-02-06T19:55:25+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 72,
  "vmid": "331004"
}
```

<h3 id="taxonomyattractions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="taxonomyattractions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of attraction objects|
|» attractionCity|string|false|none|**name** of the city in which the attraction is located|
|» attractionLatitude|number|false|none|**latitude component** of the attraction's location|
|» attractionLongitude|number|false|none|**longitude component** of the attraction's location|
|» attractionState|string|false|none|**name** of the state in which the attraction is located|
|» attractionStreetAddress|string|false|none|**street address** of the attraction|
|» destinationId|integer|false|none|**unique numeric identifier** of the the destination associated with the attraction|
|» pageUrlName|string|false|none|**URL-formatted title** of the attraction page|
|» photoCount|integer|false|none|**number** of user photos published for the attraction|
|» primaryDestinationId|integer|false|none|**unique numeric identifier** of the attraction's primary destination|
|» primaryDestinationName|string|false|none|**natural-language name** of the attraction's primary destination|
|» primaryDestinationUrlName|string|false|none|**URL-formatted name** of the destination associated with *this* attraction|
|» productCount|integer|false|none|**number** of products associated with the attraction|
|» publishedDate|string|false|none|**conventionally-formatted date** on which the attraction was listed|
|» rating|number|false|none|**average user rating** of the attraction|
|» seoId|integer|false|none|**unique numeric identifier** of the attraction<br>- use as an input for [/search/products](#operation/searchProducts)<br>|
|» sortOrder|integer|false|none|**sort order** of *this* listing|
|» thumbnailHiResURL|string|false|none|**URL** for the attraction's high-resolution thumbnail image|
|» thumbnailURL|string|false|none|**URL** the attraction's thumbnail image|
|» title|string|false|none|**natural-language title** of the attraction|
|» webURL|[webURL](#schemaweburl)|false|none|ignore (Viator only)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /taxonomy/categories

<a id="opIdtaxonomyCategories"></a>

> Code samples

```bash
curl https://example.com/taxonomy/categories \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /taxonomy/categories`

Get all product categories
- Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
- This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
- **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields


<h3 id="taxonomycategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|destId|query|integer|false|**unique numeric identifier** of the destination to enquire about (optional)<br>- `destinationId` is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "groupName": "Air, Helicopter &amp; Balloon Tours",
      "groupUrlName": "Air-Helicopter-and-Balloon-Tours",
      "id": 1,
      "productCount": 77,
      "sortOrder": 1,
      "subcategories": [
        {
          "categoryId": 1,
          "sortOrder": 1,
          "subcategoryId": 2,
          "subcategoryName": "Helicopter Tours",
          "subcategoryUrlName": "Helicopter-Tours"
        },
        {
          "categoryId": 1,
          "sortOrder": 2,
          "subcategoryId": 1,
          "subcategoryName": "Air Tours",
          "subcategoryUrlName": "Air-Tours"
        },
        {
          "categoryId": 1,
          "sortOrder": 3,
          "subcategoryId": 3,
          "subcategoryName": "Balloon Rides",
          "subcategoryUrlName": "Balloon-Rides"
        }
      ],
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/71/7c/7d.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/71/7c/7d.jpg"
    },
    {
      "groupName": "Classes &amp; Workshops",
      "groupUrlName": "Classes-and-Workshops",
      "id": 26051,
      "productCount": 12,
      "sortOrder": 2,
      "subcategories": [
        {
          "categoryId": 26051,
          "sortOrder": 1,
          "subcategoryId": 40290,
          "subcategoryName": "Language Classes",
          "subcategoryUrlName": "Language-Classes"
        },
        {
          "categoryId": 26051,
          "sortOrder": 2,
          "subcategoryId": 40293,
          "subcategoryName": "Sports Lessons",
          "subcategoryUrlName": "Sports-Lessons"
        },
        {
          "categoryId": 26051,
          "sortOrder": 3,
          "subcategoryId": 33939,
          "subcategoryName": "Craft Classes",
          "subcategoryUrlName": "Craft-Classes"
        },
        {
          "categoryId": 26051,
          "sortOrder": 4,
          "subcategoryId": 26052,
          "subcategoryName": "Yoga Classes",
          "subcategoryUrlName": "Yoga-Classes"
        },
        {
          "categoryId": 26051,
          "sortOrder": 5,
          "subcategoryId": 40286,
          "subcategoryName": "Art Classes",
          "subcategoryUrlName": "Art-Classes"
        }
      ],
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/03/9e/ca.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0a/03/9e/ca.jpg"
    },
    {
      "groupName": "Cruises, Sailing &amp; Water Tours",
      "groupUrlName": "Cruises-Sailing-and-Water-Tours",
      "id": 3,
      "productCount": 21,
      "sortOrder": 3,
      "subcategories": [
        {
          "categoryId": 3,
          "sortOrder": 1,
          "subcategoryId": 5640,
          "subcategoryName": "Dinner Cruises",
          "subcategoryUrlName": "Dinner-Cruises"
        },
        {
          "categoryId": 3,
          "sortOrder": 2,
          "subcategoryId": 7,
          "subcategoryName": "Day Cruises",
          "subcategoryUrlName": "Day-Cruises"
        },
        {
          "categoryId": 3,
          "sortOrder": 3,
          "subcategoryId": 40295,
          "subcategoryName": "Water Tours",
          "subcategoryUrlName": "Water-Tours"
        }
      ],
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e5/a3/54.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/e5/a3/54.jpg"
    },
    {
      "groupName": "Cultural &amp; Theme Tours",
      "groupUrlName": "Cultural-and-Theme-Tours",
      "id": 4,
      "productCount": 94,
      "sortOrder": 4,
      "subcategories": [
        {
          "categoryId": 4,
          "sortOrder": 1,
          "subcategoryId": 14,
          "subcategoryName": "Literary, Art &amp; Music Tours",
          "subcategoryUrlName": "Literary-Art-and-Music-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 2,
          "subcategoryId": 118,
          "subcategoryName": "Ghost &amp; Vampire Tours",
          "subcategoryUrlName": "Ghost-and-Vampire-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 3,
          "subcategoryId": 12,
          "subcategoryName": "Historical &amp; Heritage Tours",
          "subcategoryUrlName": "Historical-and-Heritage-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 4,
          "subcategoryId": 11,
          "subcategoryName": "Cultural Tours",
          "subcategoryUrlName": "Cultural-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 5,
          "subcategoryId": 26967,
          "subcategoryName": "Architecture Tours",
          "subcategoryUrlName": "Architecture-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 6,
          "subcategoryId": 13,
          "subcategoryName": "Movie &amp; TV Tours",
          "subcategoryUrlName": "Movie-and-TV-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 7,
          "subcategoryId": 40338,
          "subcategoryName": "LGBT Friendly Tours",
          "subcategoryUrlName": "LGBT-Friendly-Tours"
        },
        {
          "categoryId": 4,
          "sortOrder": 8,
          "subcategoryId": 5332,
          "subcategoryName": "Archaeology Tours",
          "subcategoryUrlName": "Archaeology-Tours"
        }
      ],
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/48/34.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/73/48/34.jpg"
    }
  ],
  "dateStamp": "2020-02-06T19:47:58+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331001"
}
```

<h3 id="taxonomycategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="taxonomycategories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of category data objects|
|» groupName|string|false|none|**natural-language name** of *this* product category|
|» groupUrlName|string|false|none|**URL-formatted name** of *this* product category|
|» id|integer|false|none|**unique numeric identifier** for the category|
|» productCount|integer|false|none|**number** of products in this category in the destination specified by `destId`<br>- **note**: will be `null` if no `destId` is included in the query<br>|
|» subcategories|[object]|false|none|**array** of subcategory objects|
|» » categoryId|integer|false|none|**unique numeric identifier** of *this* product category|
|» » sortorder|integer|false|none|**sort order** (suggested) of the subcategory within the category|
|» » subCategoryUrlName|string|false|none|**URL-formatted name** of *this* product subcategory|
|» » subcategoryId|integer|false|none|**unique numeric identifier** of *this* product subcategory|
|» » subcategoryName|string|false|none|**natural-language name** of *this* product subcategory|
|» thumbnailURL|string|false|none|**URL** for this category's thumbnail image, selected from the most popular product within the category<br>- **note:** will be `null` if no `destId` is included in the query<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /taxonomy/destinations

<a id="opIdtaxonomyDestinations"></a>

> Code samples

```bash
curl https://example.com/taxonomy/destinations \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /taxonomy/destinations`

Get details of all destinations supported by this API
- Retrieves all the country taxonomy/city nodes as a flat list
- Returns a complete list of Viator destinations, including destination names and parent identifiers
- Used to provide navigation through drill down lists or combo boxes


<h3 id="taxonomydestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "defaultCurrencyCode": "USD",
      "destinationId": 77,
      "destinationName": "USA",
      "destinationType": "COUNTRY",
      "destinationUrlName": "USA",
      "iataCode": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "latitude": 37.09024,
      "longitude": -95.712891,
      "lookupId": "8.77",
      "parentId": 8,
      "selectable": false,
      "sortOrder": 1,
      "timeZone": "America/New_York"
    },
    {
      "defaultCurrencyCode": "USD",
      "destinationId": 22212,
      "destinationName": "Alabama",
      "destinationType": "REGION",
      "destinationUrlName": "Alabama",
      "iataCode": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "latitude": 32.34,
      "longitude": -86.26,
      "lookupId": "8.77.22212",
      "parentId": 77,
      "selectable": true,
      "sortOrder": 1,
      "timeZone": ""
    },
    {
      "defaultCurrencyCode": "USD",
      "destinationId": 270,
      "destinationName": "Alaska",
      "destinationType": "REGION",
      "destinationUrlName": "Alaska",
      "iataCode": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "latitude": 63.588753,
      "longitude": -154.4930619,
      "lookupId": "8.77.270",
      "parentId": 77,
      "selectable": true,
      "sortOrder": 2,
      "timeZone": "America/Anchorage"
    },
    {
      "defaultCurrencyCode": "USD",
      "destinationId": 271,
      "destinationName": "Arizona",
      "destinationType": "REGION",
      "destinationUrlName": "Arizona",
      "iataCode": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "latitude": 34.0489281,
      "longitude": -111.0937311,
      "lookupId": "8.77.271",
      "parentId": 77,
      "selectable": true,
      "sortOrder": 3,
      "timeZone": "America/Phoenix"
    }
  ],
  "dateStamp": "2020-02-06T19:43:09+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331001"
}
```

<h3 id="taxonomydestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="taxonomydestinations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of destination objects|
|» defaultCurrencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» destinationId|integer|false|none|**unique numeric identifier** of the destination<br>- use this value as the `destId` input field for other Viator API services<br>|
|» destinationName|string|false|none|**natural-language name** of the destination|
|» destinationType|[destinationType](#schemadestinationtype)|false|none|**destination type specifier**<br>- `"COUNTRY"`: destination is a country<br>- `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.<br>- `"CITY"`: destination is a city<br>|
|» destinationUrlName|string|false|none|ignore - (Viator only)|
|» iataCode|[iataCode](#schemaiatacode)|false|none|**IATA airport code** for the destination<br>- a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world<br>- the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'<br>- the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination<br>|
|» latitude|number|false|none|**latitude component** of the destination's geolocation|
|» longitude|number|false|none|**longitude component** of the destination's geolocation|
|» lookupId|string|false|none|**hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes<br>- e.g. `'8.77.673'` for Chicago<br>- format: [top level `parentId`].[any additional `parentId`].[`destinationId`]<br>|
|» parentId|integer|false|none|**unique numeric identifier** of the destination's parent destination|
|» selectable|boolean|false|none|ignore - (Viator only)|
|» sortOrder|integer|false|none|**sort order** for this response|
|» timeZone|string|false|none|**time zone** of the destination|

#### Enumerated Values

|Property|Value|
|---|---|
|» destinationType|CITY|
|» destinationType|COUNTRY|
|» destinationType|REGION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

<h1 id="viator-api-documentation-amp-specification-merchant-partners-product-services">Product services</h1>

Product services

## /available/products

<a id="opIdavailableProducts"></a>

> Code samples

```bash
curl https://example.com/available/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "currencyCode": "USD",
    "endDate": "2020-12-31",
    "numAdults": 1,
    "productCodes": [
      "5010SYDNEY",
      "2280SUN",
      "9169P50"
    ],
    "startDate": "2020-12-21"
  }'
```

`POST /available/products`

Find products that are available

 This endpoint returns available products filtered by product code, date range or number of adult travelers


 - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
 


> Body parameter

```json
{
  "currencyCode": "USD",
  "endDate": "2020-12-31",
  "numAdults": 1,
  "productCodes": [
    "5010SYDNEY",
    "2280SUN",
    "9169P50"
  ],
  "startDate": "2020-12-21"
}
```

<h3 id="availableproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» currencyCode|body|string|false|**currency** in which to display product pricing<br>- default: `'USD'`<br>|
|» endDate|body|string|false|**end date** of the date range to search within (must be in the future)|
|» numAdults|body|integer|false|**number of adult travelers** who wish to participate<br>- default: `1`<br>|
|» productCodes|body|[string]|false|**array of unique alphanumeric product identifiers** specifying which products to find the availability of<br>- maximum: `50`<br>|
|» startDate|body|string|false|**start date** of the date range to search within (must be in the future)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "UnconditionalBE",
      "catIds": [
        6,
        12
      ],
      "code": "5010SYDNEY",
      "currencyCode": "USD",
      "duration": "2 hours",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 29.52,
      "merchantNetPriceFromFormatted": "$29.52",
      "onRequestPeriod": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "incompleteQuote": false,
        "productCode": "5010SYDNEY",
        "removedChildAges": [],
        "tourGrades": {
          "24HOUR": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 36.97",
                "priceQuote": {
                  "generalRetailPrice": "USD 36.97",
                  "merchantNetPrice": "USD 29.52",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 36.97"
                }
              }
            ],
            "bookingEngine": "UNCONDITIONAL_FREESALE",
            "description": "Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "zh": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "24 Hour Classic Ticket ",
            "tourGradeCode": "24HOUR"
          },
          "48HOUR": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 49.50",
                "priceQuote": {
                  "generalRetailPrice": "USD 49.50",
                  "merchantNetPrice": "USD 39.53",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 49.50"
                }
              }
            ],
            "bookingEngine": "UNCONDITIONAL_FREESALE",
            "description": "48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "zh": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "48 Hour Premium Ticket ",
            "tourGradeCode": "48HOUR"
          },
          "DELUXE": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 68.93",
                "priceQuote": {
                  "generalRetailPrice": "USD 68.93",
                  "merchantNetPrice": "USD 55.05",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 68.93"
                }
              }
            ],
            "bookingEngine": "UNCONDITIONAL_FREESALE",
            "description": "Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "zh": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "48 Hour Deluxe Bus and Cruise",
            "tourGradeCode": "DELUXE"
          },
          "TG1": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 89.81",
                "priceQuote": {
                  "generalRetailPrice": "USD 89.81",
                  "merchantNetPrice": "USD 71.74",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 89.81"
                }
              }
            ],
            "bookingEngine": "UNCONDITIONAL_FREESALE",
            "description": "Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "zh": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "48Hour Deluxe PLUS Attractions",
            "tourGradeCode": "TG1"
          }
        },
        "travellerMix": "1A"
      },
      "photoCount": 124,
      "price": 36.97,
      "priceFormatted": "$36.97",
      "primaryDestinationId": 357,
      "primaryDestinationName": "Sydney",
      "primaryDestinationUrlName": "Sydney",
      "primaryGroupId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "rating": 4.5,
      "reviewCount": 1605,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
      "shortTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "sortOrder": 1,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        97,
        98,
        5330,
        26963,
        32024,
        45
      ],
      "supplierCode": "5010",
      "supplierName": "Big Bus Tours",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg",
      "title": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 1,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "FreesaleOnRequestBE",
      "catIds": [
        1,
        25,
        12
      ],
      "code": "2280SUN",
      "currencyCode": "USD",
      "duration": "3 hours 30 minutes",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 420.68,
      "merchantNetPriceFromFormatted": "$420.68",
      "onRequestPeriod": 336,
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "incompleteQuote": false,
        "productCode": "2280SUN",
        "removedChildAges": [],
        "tourGrades": {
          "SUNSET_ASTAR": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 490.00",
                "priceQuote": {
                  "generalRetailPrice": "USD 490.00",
                  "merchantNetPrice": "USD 420.68",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 490.00"
                }
              }
            ],
            "bookingEngine": "FREESALE_ON_REQUEST",
            "description": "Grand Canyon West Rim Deluxe Sunset Tour by A-Star Helicopter",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "it": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "pt": [
                "AUDIO"
              ],
              "ru": [
                "AUDIO"
              ],
              "tw": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "A-Star Helicopter ",
            "tourGradeCode": "SUNSET_ASTAR"
          },
          "SUNSET_EC130": {
            "availDates": [
              {
                "dateList": "20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ",
                "priceFrom": "USD 515.00",
                "priceQuote": {
                  "generalRetailPrice": "USD 515.00",
                  "merchantNetPrice": "USD 441.98",
                  "priceSource": "MANUAL",
                  "retailPrice": "USD 515.00"
                }
              }
            ],
            "bookingEngine": "FREESALE_ON_REQUEST",
            "description": "Grand Canyon West Rim Deluxe Sunset Tour by EC-130 Helicopter ",
            "languageServices": {
              "de": [
                "AUDIO"
              ],
              "en": [
                "AUDIO"
              ],
              "es": [
                "AUDIO"
              ],
              "fr": [
                "AUDIO"
              ],
              "it": [
                "AUDIO"
              ],
              "ja": [
                "AUDIO"
              ],
              "ko": [
                "AUDIO"
              ],
              "pt": [
                "AUDIO"
              ],
              "ru": [
                "AUDIO"
              ],
              "tw": [
                "AUDIO"
              ]
            },
            "sapi": false,
            "title": "EC-130 Helicopter Upgrade",
            "tourGradeCode": "SUNSET_EC130"
          }
        },
        "travellerMix": "1A"
      },
      "photoCount": 7,
      "price": 490,
      "priceFormatted": "$490.00",
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "primaryGroupId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "productUrlName": "Grand-Canyon-West-Rim-Deluxe-Sunset-Helicopter-Tour",
      "rating": 5,
      "reviewCount": 399,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Take off from Las Vegas on a magical sunset helicopter tour to the Grand Canyon. You'll enjoy a 45-minute helicopter flight each way, land at the Grand Canyon for a glass of Champagne and snacks while you watch the sun start it's descent behind the walls of the canyon, then fly low over the famous neon-lit Las Vegas Strip on your return.",
      "shortTitle": "Grand Canyon from Las Vegas West Rim Sunset Helicopter Tour",
      "sortOrder": 2,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        113,
        2,
        98,
        26963,
        45,
        95
      ],
      "supplierCode": "2280",
      "supplierName": "Sundance Helicopters",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/7a/ec/1c.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/7a/ec/1c.jpg",
      "title": "Grand Canyon West Rim Deluxe Sunset Helicopter Tour",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 1,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    }
  ],
  "dateStamp": "2020-02-10T15:41:53+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331005"
}
```

<h3 id="availableproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="availableproducts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of product objects|
|» admission|string|false|none|ignore (Viator only)|
|» available|boolean|false|none|ignore (Viator only)|
|» bookingEngineId|[bookingEngineId](#schemabookingengineid)|false|none|**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification<br>- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified<br>- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br><br>If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        <br>|
|» catIds|[integer]|false|none|**list** of unique numeric category identifiers that this product falls under<br>- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» code|string|false|none|**unique alphanumeric identifier** of *this* product|
|» currencyCode|[currencyCode](#schemacurrencycode)|false|none|Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed|
|» duration|string|false|none|**natural-language description** of *this* product's duration|
|» essential|string|false|none|ignore (Viator only)|
|» merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>    <br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» merchantNetPriceFrom|[merchantNetPriceFrom](#schemamerchantnetpricefrom)|false|none|Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» merchantNetPriceFromFormatted|[merchantNetPriceFromFormatted](#schemamerchantnetpricefromformatted)|false|none|Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» onRequestPeriod|[onRequestPeriod](#schemaonrequestperiod)|false|none|**number** of hours before the travel date that *this* product will be 'on-request' for<br>- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`<br>- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date<br>- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API<br>|
|» onSale|[onSale](#schemaonsale)|false|none|Ignore (Viator only)<br>|
|» panoramaCount|integer|false|none|**number** of panoramic images available for *this* product|
|» pas|object|false|none|**object** detailing product availability<br>- `pas` stands for Product Availability Schema<br>|
|» » incompleteQuote|boolean|false|none|ignore (Viator only)|
|» » productCode|string|false|none|**unique alphanumeric identifier** of *this* product|
|» » removedChildAges|[string]|false|none|ignore (Viator only)|
|» » tourGrades|object|false|none|**dictionary** of tour grade alphanumeric codes to tour grade objects|
|» » » **additionalProperties**|object|false|none|none|
|» » » » availDates|[object]|false|none|**array of objects** with availability and pricing information for *this* tour grade|
|» » » » » dateList|string|false|none|**list of dates** on which *this* tour grade is available formatted according to the example|
|» » » » » priceFrom|string|false|none|**lowest sale price** for *this* tour grade formatted according to the example|
|» » » » » priceQuote|object|false|none|**pricing object** for *this* tour grade|
|» » » » » » generalRetailPrice|string|false|none|**general retail price** of *this* tour grade formatted according to the example|
|» » » » » » merchantNetPrice|string|false|none|ignore (Viator only)|
|» » » » » » retailPrice|string|false|none|**retail price** of *this* tour grade formatted according to the example|
|» » » » bookingEngine|string|false|none|**booking modality specifier** for *this* tour grade|
|» » » » description|string|false|none|**natural-language description** of *this* tour grade|
|» » » » languageServices|object|false|none|**dictionary** of language codes to array of textual language service descriptors available for *this* tour grade|
|» » » » » **additionalProperties**|[object]|false|none|none|
|» » » » sapi|boolean|false|none|ignore (Viator only)|
|» » » » title|string|false|none|**natural-language title** of *this* tour grade|
|» » » » tourGradeCode|string|false|none|**alphanumeric identifier** for *this* tour grade|
|» » travellerMix|string|false|none|**alphanumeric code** indicating the combination of adults and children being enquired about|
|» photoCount|integer|false|none|**number** of user photos published for *this* product|
|» price|[price](#schemaprice)|false|none|**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.<br><br><br>  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» priceFormatted|[priceFormatted](#schemapriceformatted)|false|none|**currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter<br><br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» primaryDestinationId|integer|false|none|**unique numeric identifier** of *this* product's primary destination|
|» primaryDestinationName|string|false|none|**natural-language name** of *this* product's primary destination|
|» primaryDestinationUrlName|string|false|none|**URL-formatted name** of *this* product's primary destination|
|» primaryGroupId|string|false|none|ignore (Viator only)|
|» productUrlName|string|false|none|**URL-formatted name** of *this* product|
|» rating|[rating](#schemarating)|false|none|**average user rating** of *this* product<br><br>users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;<br><br>the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received<br>|
|» reviewCount|[reviewCount](#schemareviewcount)|false|none|**number** of user reviews that have been submitted by users for *this* product<br><br>If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.<br>|
|» rrp|[rrp](#schemarrp)|false|none|**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» rrpFormatted|[rrpFormatted](#schemarrpformatted)|false|none|**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» shortDescription|string|false|none|**natural-language description** (short) of *this* product|
|» shortTitle|string|false|none|**natural-language title (shortened)** of *this* product|
|» sortOrder|integer|false|none|**sort order** of this result object|
|» specialOfferAvailable|[specialOfferAvailable](#schemaspecialofferavailable)|false|none|**indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» specialReservation|boolean|false|none|ignore (Viator only)|
|» specialReservationDetails|string|false|none|ignore (Viator only)|
|» sslSupported|boolean|false|none|ignore (Viator only)|
|» subCatIds|[integer]|false|none|**list** of unique numeric subcategory identifiers that this product falls under<br>- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» supplierCode|string|false|none|**unique identifier** of *this* product's supplier|
|» supplierName|string|false|none|**natural-language name** of *this* product's supplier|
|» thumbnailHiResURL|string|false|none|**URL** of *this* product's high resolution thumbnail image|
|» thumbnailURL|string|false|none|**URL** of *this* product's thumbnail image|
|» title|string|false|none|**natural-language title** of *this* product|
|» translationLevel|[translationLevel](#schematranslationlevel)|false|none|**numeric indicator** of the language translation level for *this* product that is one of:<br>- `0`: no translation (English only)<br>- `80`: full machine translation<br>- `100`: full human translation<br><br>See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information<br>|
|» uniqueShortDescription|string|false|none|**natural-language description** of *this* product|
|» videoCount|integer|false|none|ignore (Viator only) – videos are not available to partners<br>|
|» webURL|[webURL](#schemaweburl)|false|none|ignore (Viator only)|

#### Enumerated Values

|Property|Value|
|---|---|
|» bookingEngineId|FreesaleBE|
|» bookingEngineId|UnconditionalBE|
|» bookingEngineId|DeferredCRMBE|
|» bookingEngineId|FreesaleOnRequestBE|
|» translationLevel|0|
|» translationLevel|80|
|» translationLevel|100|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /product

<a id="opIdproduct"></a>

> Code samples

```bash
curl https://example.com/product \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /product`

Get product information
This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
- age bands
- tour grades
- language options 
- booking questions
- hotel pickup flags

**currencyCode (in query):** 
- use this parameter to specify the currency in which product pricing should be displayed
- the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
- "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
- **Note**: you will be billed in the currency in which the booking was made

**Product photos**

&lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;

**Videos**

- Videos are no longer provided via this API


<h3 id="product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|currencyCode|query|string|false|**currency code** for the currency in which pricing is displayed<br>- default=`'USD'`<br>|
|sortOrder|query|string|false|**specifier** of the order in which to return reviews<br><br>Sort order options:<br><br>  - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average<br>  - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average<br>  - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review<br>|
|voucherOption|query|string|false|- `"VOUCHER_PAPER_ONLY"`: Paper Vouchers only accepted<br>- `"VOUCHER_E"`: EVouchers + Paper Vouchers accepted<br>|
|code|query|string|false|**unique alphanumeric identifier** of the product|
|showUnavailable|query|boolean|false|**specifier** as to whether or not to show 'unavailable' products:<br><br>  - `true`: return *both* available and unavailable products<br>  - `false`: return *only* available products (default)<br>|
|excludeTourGradeAvailability|query|boolean|false|**specifier:** <br>- `true`: return **all** tour grades, including those that are not available<br>- `false`: only display tour grades that *are* available<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|REVIEW_RATING_A|
|sortOrder|REVIEW_RATING_D|
|sortOrder|REVIEW_RATING_SUBMISSION_DATE_D|
|voucherOption|VOUCHER_PAPER_ONLY|
|voucherOption|VOUCHER_E|

> Example responses

> 200 Response

```json
{
  "data": {
    "additionalInfo": [
      "Confirmation will be received at time of booking",
      "Wheelchair accessible",
      "When booking the 24 or 48 hour Family Pass, only the lead passenger name is required for a booking of up to 2 Adults and 2 children 16 years and under. At time of booking you only need to enter 1 adult to complete your booking",
      "Infants aged 0 to 4 years travel free of charge"
    ],
    "admission": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "ageBands": [
      {
        "adult": true,
        "ageFrom": 16,
        "ageTo": 99,
        "bandId": 1,
        "count": 0,
        "description": "Adult",
        "pluralDescription": "Adults",
        "sortOrder": 1,
        "treatAsAdult": true
      },
      {
        "adult": false,
        "ageFrom": 5,
        "ageTo": 15,
        "bandId": 2,
        "count": 0,
        "description": "Child",
        "pluralDescription": "Children",
        "sortOrder": 2,
        "treatAsAdult": true
      },
      {
        "adult": false,
        "ageFrom": 0,
        "ageTo": 4,
        "bandId": 3,
        "count": 0,
        "description": "Infant",
        "pluralDescription": "Infants",
        "sortOrder": 3,
        "treatAsAdult": false
      }
    ],
    "allTravellerNamesRequired": true,
    "applePassSupported": true,
    "available": true,
    "bookingEngineId": "UnconditionalBE",
    "bookingQuestions": [],
    "catIds": [
      6,
      12
    ],
    "city": "Sydney",
    "code": "5010SYDNEY",
    "country": "Australia",
    "currencyCode": "USD",
    "departurePoint": "You may start this tour at any of the stops listed.",
    "departureTime": "See itinerary",
    "departureTimeComments": "",
    "description": "&lt;b&gt;Itinerary&lt;/b&gt;&lt;br&gt;&lt;br&gt;&lt;p&gt;&lt;strong&gt;Red Route - Sydney Icons&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Route Duration: 2 hours&lt;/p&gt;&lt;div&gt;Stops on the Red Route - Sydney Icons:&lt;/div&gt;&lt;ul&gt;&lt;li&gt;T Galleria x Petal met Sugar - Circular Quay, George St, cnr Alfred St. (opp DFS Galleria)&lt;/li&gt;\n&lt;li&gt;Martin Place Station, Elizabeth St, Stand E - Sydney Tower/ Westfield&lt;/li&gt;\n&lt;li&gt;1 William St - Australian Museum&lt;/li&gt;\n&lt;li&gt;William St at Palmer St - William St, Kings Cross&lt;/li&gt;\n&lt;li&gt;121 Darlinghurst Rd - Kings Cross Train Station on Darlinghurst Rd.&lt;/li&gt;\n&lt;li&gt;123-125 MacLeay St - El Alamein Fountain&lt;/li&gt;\n&lt;li&gt;2 Bourke St - Cowper Wharf Rd, outside the Woollomooloo Hotel&lt;/li&gt;\n&lt;li&gt;2A Macquarie St - Sydney Opera House&lt;/li&gt;\n&lt;li&gt;Macquarie Street - Botanical Garden, Scenic Walk to Mrs Macquarie Chair&lt;/li&gt;\n&lt;li&gt;State Library of New South Wales - State Library&lt;/li&gt;\n&lt;li&gt;Prince Albert Rd opp College St - Hyde Park&lt;/li&gt;\n&lt;li&gt;Greyhound Australia - Central Station, Pitt Street, Bus Bay 18&lt;/li&gt;\n&lt;li&gt;Powerhouse Museum, Harris St - Powerhouse Museum&lt;/li&gt;\n&lt;li&gt;Fish Market - Harris St, cnr Pyrmont Bridge Rd&lt;/li&gt;\n&lt;li&gt;Marquee Sydney - The Star Casino&lt;/li&gt;\n&lt;li&gt;Maritime Museum&lt;/li&gt;\n&lt;li&gt;ICC Sydney&lt;/li&gt;\n&lt;li&gt;Chinese Garden of Friendship&lt;/li&gt;\n&lt;li&gt;SEA LIFE Sydney Aquarium&lt;/li&gt;\n&lt;li&gt;ibis Sydney King Street Wharf - Kings Street Wharf&lt;/li&gt;\n&lt;li&gt;Hickson Road&lt;/li&gt;\n&lt;li&gt;Dawes Point - Sydney Harbour Bridge&lt;/li&gt;\n&lt;li&gt;The Rocks&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;Attractions on the Red Route - Sydney Icons:&lt;/div&gt;&lt;p&gt;Hyde Park Barracks / Australian Museum / Sea Life Sydney Aquarium / Darling Harbour / The Rocks / Bondi Beach / Sydney Harbour Bridge / Royal Botanic Garden Sydney / Sydney Town Hall / Hyde Park / Circular Quay / City Sightseeing Sydney / Madame Tussauds Sydney / Big Bus Sydney&lt;/p&gt;&lt;p&gt;&lt;i&gt;Operates:&lt;/i&gt; 1st bus departs from Stop 1 Circular Quay at 8.30am.\nFrequency every 20 minutes\nLast bus departs from stop 1 at 6.30pm&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Blue Route - Bondi Lifestyle&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Route Duration: 2 hours&lt;/p&gt;&lt;div&gt;Stops on the Blue Route - Bondi Lifestyle:&lt;/div&gt;&lt;ul&gt;&lt;li&gt;492 Pitt St - Central Station, Pitt Street, Bus Bay 18&lt;/li&gt;\n&lt;li&gt;1 William St - Australian Museum &lt;/li&gt;\n&lt;li&gt;Paddington Town Hall, Oxford St&lt;/li&gt;\n&lt;li&gt;Oxford St opp Moncur St&lt;/li&gt;\n&lt;li&gt;Bondi Beach&lt;/li&gt;\n&lt;li&gt;North Bondi Beach, Campbell Pde&lt;/li&gt;\n&lt;li&gt;Rose Bay&lt;/li&gt;\n&lt;li&gt;Double Bay&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;Attractions on the Blue Route - Bondi Lifestyle:&lt;/div&gt;&lt;p&gt;Paddington Markets / Centennial Park / Bondi Beach / Rose Bay / Double Bay&lt;/p&gt;&lt;p&gt;&lt;i&gt;Operates:&lt;/i&gt; 1st bus departs from Stop 1 Circular Quay at 9.30am.\nFrequency every 30 minutes\nLast bus departs from stop 1 at 6.30pm&lt;/p&gt;",
    "destinationId": 357,
    "duration": "2 hours",
    "essential": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "exclusions": [
      "Food and drinks",
      "Admission"
    ],
    "highlights": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "hotelPickup": false,
    "inclusions": [
      "Choice of 24 hour or 48 hour pass",
      "Pre-recorded commentary in English, French, Spanish, German, Italian, Mandarin, Japanese, Korean",
      "Free wifi onboard"
    ],
    "itinerary": "",
    "location": "The Rocks, Australia",
    "mapURL": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "maxTravellerCount": 9,
    "merchantCancellable": true,
    "merchantNetPriceFrom": 29.52,
    "merchantNetPriceFromFormatted": "$29.52",
    "merchantTermsAndConditions": {
      "amountRefundable": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "cancellationFromTourDate": [
        {
          "dayRangeMax": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "dayRangeMin": 1,
          "percentageRefundable": 100,
          "policyEndTimestamp": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "policyStartTimestamp": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          }
        },
        {
          "dayRangeMax": 1,
          "dayRangeMin": 0,
          "percentageRefundable": 0,
          "policyEndTimestamp": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "policyStartTimestamp": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          }
        }
      ],
      "merchantTermsAndConditionsType": 1,
      "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience."
    },
    "onRequestPeriod": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "onSale": false,
    "operates": "&lt;p&gt;Daily&lt;/p&gt;",
    "panoramaCount": 0,
    "pas": null,
    "passengerAttributes": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "photoCount": 124,
    "price": 36.97,
    "priceFormatted": "$36.97",
    "primaryDestinationId": 357,
    "primaryDestinationName": "Sydney",
    "primaryDestinationUrlName": "Sydney",
    "primaryGroupId": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "productPhotos": [
      {
        "caption": "Selfies at Bondi Beach",
        "path": "attractions-splice-spp-674x446/09/c5/d3/87.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d3/87.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "",
        "path": "attractions-splice-spp-674x446/09/c5/d2/d1.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/d1.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "",
        "path": "attractions-splice-spp-674x446/07/94/40/f3.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "Sydney and Bondi Hop-On Hop-Off Tour",
        "path": "attractions-splice-spp-674x446/09/c5/d2/d4.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/d4.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "Bondi Beach",
        "path": "attractions-splice-spp-674x446/09/c5/d2/c7.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/c7.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "Visit icons",
        "path": "attractions-splice-spp-674x446/07/90/5a/68.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/68.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "Big Bus App provides live tracking",
        "path": "attractions-splice-spp-674x446/07/90/5a/6a.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/6a.jpg",
        "supplier": "SUPPLIER"
      },
      {
        "caption": "The Rocks",
        "path": "attractions-splice-spp-674x446/07/90/5a/7d.jpg",
        "photoURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/7d.jpg",
        "supplier": "SUPPLIER"
      }
    ],
    "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
    "rating": 4.5,
    "ratingCounts": {
      "1": 38,
      "2": 99,
      "3": 198,
      "4": 500,
      "5": 770
    },
    "region": "New South Wales",
    "returnDetails": "You may disembark at any of the available stops.",
    "reviewCount": 1605,
    "reviews": [
      {
        "ownerAvatarURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerCountry": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerId": 32351278,
        "ownerName": "esperanza h",
        "productCode": "5010SYDNEY",
        "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
        "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
        "publishedDate": "2020-01-16",
        "rating": 5,
        "review": "&lt;p&gt;Excellent way of visiting the city! It’s the only way to see atttactions in Sydney as I only have three days to stay . The next day I went back to Bondi beach to spend half of my day for the birthday of my son. Went to Iceberg Club overlooking the beach with surfers. It’s the best view you can get while having lunch! Walked along the coast to enjoy the magnificent view. I plan to go back again to this beautiful city. Spent sometime at the opera house area where there’s plenty of nice cafes to eat while admiring the view!&lt;/p&gt;",
        "reviewId": 67907371,
        "sortOrder": 1,
        "sslSupported": false,
        "submissionDate": "2020-01-16",
        "viatorFeedback": "",
        "viatorNotes": ""
      },
      {
        "ownerAvatarURL": "http://cache-graphicslib.viator.com/graphicslib/media/f5/tomzak21-account_47925237-45sq.jpg",
        "ownerCountry": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerId": 47925237,
        "ownerName": "tomzak21",
        "productCode": "5010SYDNEY",
        "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
        "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
        "publishedDate": "2020-01-09",
        "rating": 5,
        "review": "&lt;p&gt;Love The Big Bus, Hop On / Hop Off Tour Company! This is the way to see just about all the key areas and tourist attractions. You don't have to rent a car and they are actually comfortable. We also did a Hop On, Hop Off in Budapest, Hungary and that was great also, saw all the major attractions!&lt;/p&gt;\n\n&lt;p&gt;  They provide you with earbuds and there are 6+ languages that you can choose. Being in Sydney, there was Chinese, Korean, Japanese, along with French, Spanish, English and I believe German.&lt;/p&gt;\n\n&lt;p&gt;  There is also a \"package deal\" in which you can purchase a pass to other attractions along the route.. like Wildlife Sydney Zoo, Madame Tussaud's, Sydney Eye. You can buy a 2, 3 or 4 attraction pass in which The Big Bus is one of the attractions.&lt;/p&gt;\n\n&lt;p&gt;  Love The Big Bus! If you want a quick tour or spend a couples days of exploring, this is the way to go!&lt;/p&gt;\n\n&lt;p&gt;  Only complaint... the drop off  and  pick up spots could be better labeled. They should put there logo on a sign and make it noticeable. Some stops had some kind of sign, but there were a few stops that we weren't sure we were in the right spot. It wound up that we were in the correct spot. Addresses are listed in the provided  in the pamphlet / flyer provided.&lt;/p&gt;",
        "reviewId": 67480203,
        "sortOrder": 2,
        "sslSupported": false,
        "submissionDate": "2020-01-09",
        "viatorFeedback": "",
        "viatorNotes": ""
      }
    ],
    "rrp": 0,
    "rrpformatted": "",
    "salesPoints": [],
    "savingAmount": 0,
    "savingAmountFormated": "",
    "shortDescription": "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
    "shortTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
    "specialOffer": "",
    "specialOfferAvailable": false,
    "specialReservation": false,
    "specialReservationDetails": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "sslSupported": false,
    "subCatIds": [
      97,
      98,
      5330,
      26963,
      32024,
      45
    ],
    "supplierCode": "5010",
    "supplierName": "Big Bus Tours",
    "termsAndConditions": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg",
    "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg",
    "title": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
    "tourGrades": [
      {
        "currencyCode": "USD",
        "defaultLanguageCode": "en",
        "gradeCode": "24HOUR",
        "gradeDepartureTime": "",
        "gradeDescription": "Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use",
        "gradeTitle": "24 Hour Classic Ticket ",
        "langServices": {
          "de/SERVICE_AUDIO": "German - Audio",
          "en/SERVICE_AUDIO": "English - Audio",
          "es/SERVICE_AUDIO": "Spanish - Audio",
          "fr/SERVICE_AUDIO": "French - Audio",
          "ja/SERVICE_AUDIO": "Japanese - Audio",
          "ko/SERVICE_AUDIO": "Korean - Audio",
          "zh/SERVICE_AUDIO": "Chinese - Audio"
        },
        "merchantNetPriceFrom": 29.52,
        "merchantNetPriceFromFormatted": "$29.52",
        "priceFrom": 36.97,
        "priceFromFormatted": "$36.97",
        "sortOrder": 1
      },
      {
        "currencyCode": "USD",
        "defaultLanguageCode": "en",
        "gradeCode": "48HOUR",
        "gradeDepartureTime": "",
        "gradeDescription": "48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd",
        "gradeTitle": "48 Hour Premium Ticket ",
        "langServices": {
          "de/SERVICE_AUDIO": "German - Audio",
          "en/SERVICE_AUDIO": "English - Audio",
          "es/SERVICE_AUDIO": "Spanish - Audio",
          "fr/SERVICE_AUDIO": "French - Audio",
          "ja/SERVICE_AUDIO": "Japanese - Audio",
          "ko/SERVICE_AUDIO": "Korean - Audio",
          "zh/SERVICE_AUDIO": "Chinese - Audio"
        },
        "merchantNetPriceFrom": 39.53,
        "merchantNetPriceFromFormatted": "$39.53",
        "priceFrom": 49.5,
        "priceFromFormatted": "$49.50",
        "sortOrder": 2
      },
      {
        "currencyCode": "USD",
        "defaultLanguageCode": "en",
        "gradeCode": "DELUXE",
        "gradeDepartureTime": "",
        "gradeDescription": "Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.",
        "gradeTitle": "48 Hour Deluxe Bus and Cruise",
        "langServices": {
          "de/SERVICE_AUDIO": "German - Audio",
          "en/SERVICE_AUDIO": "English - Audio",
          "es/SERVICE_AUDIO": "Spanish - Audio",
          "fr/SERVICE_AUDIO": "French - Audio",
          "ja/SERVICE_AUDIO": "Japanese - Audio",
          "ko/SERVICE_AUDIO": "Korean - Audio",
          "zh/SERVICE_AUDIO": "Chinese - Audio"
        },
        "merchantNetPriceFrom": 55.05,
        "merchantNetPriceFromFormatted": "$55.05",
        "priceFrom": 68.93,
        "priceFromFormatted": "$68.93",
        "sortOrder": 3
      },
      {
        "currencyCode": "USD",
        "defaultLanguageCode": "en",
        "gradeCode": "TG1",
        "gradeDepartureTime": "",
        "gradeDescription": "Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.",
        "gradeTitle": "48Hour Deluxe PLUS Attractions",
        "langServices": {
          "de/SERVICE_AUDIO": "German - Audio",
          "en/SERVICE_AUDIO": "English - Audio",
          "es/SERVICE_AUDIO": "Spanish - Audio",
          "fr/SERVICE_AUDIO": "French - Audio",
          "ja/SERVICE_AUDIO": "Japanese - Audio",
          "ko/SERVICE_AUDIO": "Korean - Audio",
          "zh/SERVICE_AUDIO": "Chinese - Audio"
        },
        "merchantNetPriceFrom": 71.74,
        "merchantNetPriceFromFormatted": "$71.74",
        "priceFrom": 89.81,
        "priceFromFormatted": "$89.81",
        "sortOrder": 4
      }
    ],
    "tourGradesAvailable": true,
    "translationLevel": 0,
    "userPhotos": [
      {
        "caption": "&lt;p&gt;Carl and Karen meeting a new friend at the Wildlife park.&lt;/p&gt;",
        "editorsPick": true,
        "ownerAvatarURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerCountry": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerId": 1755909,
        "ownerName": "Husker1k",
        "photoHiResURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-1536tall.jpg",
        "photoId": 1909732,
        "photoMediumResURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-260tall.jpg",
        "photoURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-770tall.jpg",
        "productCode": "5010SYDNEY",
        "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
        "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
        "sortOrder": 1,
        "sslSupported": false,
        "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-133sq.jpg",
        "timeUploaded": "2012-02-07",
        "title": "DSC00471"
      },
      {
        "caption": "Sydney Opera House",
        "editorsPick": true,
        "ownerAvatarURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "ownerCountry": "Australia",
        "ownerId": 288013,
        "ownerName": "Kylie G",
        "photoHiResURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-1536tall.jpg",
        "photoId": 997106,
        "photoMediumResURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-260tall.jpg",
        "photoURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-770tall.jpg",
        "productCode": "5010SYDNEY",
        "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
        "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
        "sortOrder": 2,
        "sslSupported": false,
        "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-133sq.jpg",
        "timeUploaded": "2009-07-22",
        "title": "Sydney Opera House"
      }
    ],
    "videoCount": 1,
    "videos": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "voucherOption": "VOUCHER_E",
    "voucherRequirements": "You can present either a paper or an electronic voucher for this activity.",
    "webURL": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    }
  },
  "dateStamp": "2020-02-06T18:15:04+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331001"
}
```

<h3 id="product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="product-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|**object** containing product details|
|» additionalInfo|[string]|false|none|**array** of HTML-formatted clauses providing additional information about *this* product, such as:<br>- when the confirmation will be received (i.e. at time of booking, or within 48 hours of booking etc)<br>- accessibility options; such as whether wheelchair access is available<br>- particulars about the pick-up location and process<br>- **Note**: may contain basic HTML mark-up tags – e.g., br, li, b, u, p, i, ul and ol<br>|
|» admission|string \| null|false|none|ignore (Viator only)|
|» ageBands|[object]|false|none|**array** of age band objects detailing the age bands available for *this* product<br>  <br>- **note**: only the age bands listed here can book this product using the [/booking/book](#operation/bookingBook) service<br>|
|» » adult|boolean|false|none|**indicator**: `true` if *this* age band describes adults (not children)|
|» » ageFrom|integer|false|none|**numeric lower age limit** of the age range defined by *this* age band|
|» » ageTo|integer|false|none|**numeric upper age limit** of the age range included in *this* age band|
|» » bandId|[bandId](#schemabandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » count|integer|false|none|**number** of participants in *this* age band required to book the product|
|» » description|string|false|none|**natural-language description** (singular) of *this* age band|
|» » pluralDescription|string|false|none|**natural-language description** (plural) of *this* age band|
|» » sortOrder|integer|false|none|**sort order** for *this* age band object|
|» » treatAsAdult|boolean|false|none|**indicator**: `true` if members of this age band are considered to be adults|
|» allTravellerNamesRequired|boolean|false|none|**indicator**: `true` if all traveler names are required.&lt;br /&gt;**Note**: if set to `true`, then all passenger names must be included in the booking request, and all must be unique. Placeholder names cannot be used.|
|» applePassSupported|boolean|false|none|**indicator**: `true` if Apple Wallet is supported|
|» available|boolean|false|none|ignore (Viator only)|
|» bookingEngineId|[bookingEngineId](#schemabookingengineid)|false|none|**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification<br>- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified<br>- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br><br>If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        <br>|
|» bookingQuestions|[object]|false|none|none|
|» » message|string|false|none|**natural-language instructions** for *this* booking question<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» » questionId|integer|false|none|**unique numeric identifier** for *this* booking question<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» » required|boolean|false|none|**boolean indicator**:<br>- `true` if the answer to *this* booking question &lt;u&gt;must&lt;/u&gt; be included in the request object to the b service when booking *this* product<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» » sortOrder|integer|false|none|**sort order** for *this* booking question|
|» » stringQuestionId|string|false|none|**unique alphanumeric identifier** for the booking question<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» » subTitle|string|false|none|**natural-language subtitle** for *this* booking question<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» » title|string|false|none|**natural-language title** for *this* booking question<br>- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information<br>|
|» catIds|[integer]|false|none|**list** of unique numeric category identifiers that *this* product falls under<br>- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» city|string|false|none|**name** of city or destination that *this* product operates in|
|» code|string|false|none|**unique alphanumeric identifier** of *this* product|
|» country|string|false|none|**natural-language name** of the country in which *this* product operates|
|» currencyCode|string|false|none|**currency** in which to display *this* product's pricing details|
|» departurePoint|string|false|none|**HTML-formatted natural-language description** of *this* product's departure location|
|» departureTime|string|false|none|**HTML-formatted natural-language description** of *this* product's departure times<br>- may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol<br>|
|» departureTimeComments|string|false|none|**HTML-formatted natural-language description** of extra information pertaining to product departure times|
|» description|string|false|none|**HTML-formatted natural-language description** of *this* product (extended)|
|» destinationId|integer|false|none|**unique numeric identifier** of the destination in which *this* product is located<br>- `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service<br>|
|» duration|string|false|none|**natural-language description** of *this* product's duration|
|» essential|string \| null|false|none|ignore (Viator only)|
|» exclusions|[string]|false|none|**array** of HTML-formatted natural-language exclusions for *this* product<br>- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol<br>|
|» highlights|integer \| null|false|none|ignore (Viator only)|
|» hotelPickup|boolean|false|none|**indicator**: `true` if *this* product offers hotel pick-up; if so, you will need to collect the user's hotel details|
|» inclusions|[string]|false|none|**array** of HTML-formatted features included in *this* product<br>- may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol<br>|
|» itinerary|string|false|none|**HTML-formatted description** of the itinerary of *this* tour if available<br>- may contain basic HTML tags; e.g., br, li, b, u, p, i, ul and ol<br>|
|» location|string|false|none|**natural-language description** of *this* product's location<br>-  can be a combination of the country and city, or a custom location<br>|
|» mapURL|string \| null|false|none|**URL** of this product's map (usually an image)|
|» maxTravellerCount|integer|false|none|**maximum number of travelers** allowed per-booking for *this* product|
|» merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>      <br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» merchantNetPriceFrom|[merchantNetPriceFrom](#schemamerchantnetpricefrom)|false|none|Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» merchantNetPriceFromFormatted|[merchantNetPriceFromFormatted](#schemamerchantnetpricefromformatted)|false|none|Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» merchantTermsAndConditions|object \| null|false|none|none|
|» » amountRefundable|integer \| null|false|none|Usually shows the total amount refundable if the cancellation is processed now. `null` in /product as no booking has been made.|
|» » cancellationFromTourDate|[object]|false|none|none|
|» » » dayRangeMax|integer \| null|false|none|**number** of days prior to the tour start date that *this* policy window begins|
|» » » dayRangeMin|integer|false|none|**number** of days prior to the tour start date that *this* policy window ends|
|» » » percentageRefundable|integer|false|none|**percentage** of total price refundable if cancelled within *this* time window|
|» » » policyEndTimestamp|integer \| null|false|none|Usually shows the Unix timestamp giving the exact time the policy ends. `null` in /product as no booking has yet been made.|
|» » » policyStartTimestamp|integer \| null|false|none|Usually shows the Unix timestamp giving the exact time the policy commences. `null` in /product as no booking has yet been made.|
|» » merchantTermsAndConditionsType|integer|false|none|**numeric identifier** for the merchant terms and conditions type for *this* product|
|» » termsAndConditions|string|false|none|**natural-language description** of the terms and conditions for *this* product|
|» onRequestPeriod|[onRequestPeriod](#schemaonrequestperiod)|false|none|**number** of hours before the travel date that *this* product will be 'on-request' for<br>- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`<br>- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date<br>- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API<br>|
|» onSale|[onSale](#schemaonsale)|false|none|Ignore (Viator only)<br>|
|» operates|string|false|none|**HTML-formatted natural-language description** of *this* product's operation frequency|
|» panoramaCount|integer|false|none|**number** of panoramic images available for *this* product|
|» pas|object|false|none|ignore (Viator only)|
|» passengerAttributes|[object]|false|none|ignore (Viator only)|
|» » customAttribute_kgs|string|false|none|ignore (Viator only)|
|» » customAttribute_lbs|string|false|none|ignore (Viator only)|
|» » errorMissingMessage|string|false|none|ignore (Viator only)|
|» » errorValidationMessage|string|false|none|ignore (Viator only)|
|» » questionId|string|false|none|ignore (Viator only)|
|» » required|boolean|false|none|ignore (Viator only)|
|» » title|string|false|none|ignore (Viator only)|
|» » validateType|string|false|none|ignore (Viator only)|
|» photoCount|integer|false|none|**number** of user photos available for *this* product|
|» price|[price](#schemaprice)|false|none|**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.<br><br><br>  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» priceFormatted|[priceFormatted](#schemapriceformatted)|false|none|**currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter<br><br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» primaryDestinationId|integer|false|none|**unique numeric identifier** of *this* product's primary destination|
|» primaryDestinationName|string|false|none|**natural-language name** of *this* product's primary destination|
|» primaryDestinationUrlName|string|false|none|**URL-formatted name** of the destination in which *this* product is located|
|» primaryGroupId|string \| null|false|none|ignore (Viator only)|
|» productPhotos|[object]|false|none|**array** of image objects detailing images available for *this* product|
|» » caption|string|false|none|**natural-language caption** for *this* photo|
|» » photoURL|string|false|none|**URL** of *this* photo|
|» » supplier|string|false|none|**natural-language name** of the supplier of *this* photo|
|» productUrlName|string|false|none|**URL-formatted name** of *this* product|
|» rating|[rating](#schemarating)|false|none|**average user rating** of *this* product<br><br>users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;<br><br>the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received<br>|
|» ratingCounts|[ratingCounts](#schemaratingcounts)|false|none|**dictionary** of rating (stars) to number of reviews with each rating for *this* product"<br><br>users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)<br><br>- **note**: see response sample for structure<br>|
|» region|string|false|none|**natural-language name** of the region in which *this* product operates|
|» returnDetails|string|false|none|**HTML-formatted natural-language description** of *this* product's drop-off details (if available)|
|» reviewCount|[reviewCount](#schemareviewcount)|false|none|**number** of user reviews that have been submitted by users for *this* product<br><br>If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.<br>|
|» reviews|[reviews](#schemareviews)|false|none|**array** of user review objects<br><br>The number of reviews returned here will either be the number of reviews you are entitled to according to your account configuration; or, if you are not limited in the number of reviews you can receive, will be a maxiumum of 24 reviews. If the value of `reviewCount` in this response exceeds 24, you can use the [/product/reviews](#operation/productReviews) endpoint to retrieve the remainder of the reviews.<br>|
|» rrp|[rrp](#schemarrp)|false|none|**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» rrpFormatted|[rrpFormatted](#schemarrpformatted)|false|none|**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» salesPoints|[string]|false|none|ignore (Viator only)<br><br>**Note**: The information that was previously returned in this field is available in the `additionalInfo`, `inclusions` and `description` fields<br>|
|» savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» shortDescription|string|false|none|**natural-language description** (shortened) of *this* product|
|» shortTitle|string|false|none|**natural-language title** (shortened) of *this* product|
|» specialOffer|[specialOffer](#schemaspecialoffer)|false|none|**natural-language description** of any special offers available for *this* product when `specialOfferAvailable` is `true`.<br>- empty string if there are no specials available<br>- See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.<br>|
|» specialOfferAvailable|[specialOfferAvailable](#schemaspecialofferavailable)|false|none|**indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» specialReservation|boolean|false|none|ignore (Viator only)|
|» specialReservationDetails|string \| null|false|none|ignore (Viator only)|
|» sslSupported|boolean|false|none|ignore (Viator only)|
|» subCatIds|[integer]|false|none|**list** of unique numeric subcategory identifiers that *this* product falls under<br>- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» supplierCode|string|false|none|**unique identification code** of *this* product's supplier|
|» supplierName|string|false|none|**name** of *this* product's supplier|
|» thumbnailHiResURL|string|false|none|**URL** of *this* product's high-resolution thumbnail image|
|» thumbnailURL|string|false|none|**URL** for *this* product's thumbnail image|
|» title|string|false|none|**natural-language title** of *this* product|
|» tourGrades|[object]|false|none|**array** of tour grade objects available for *this* product|
|» » currencyCode|string|false|none|**currency code** of the currency *this* product's tour grades prices are shown in|
|» » defaultLanguageCode|string|false|none|**language code** of the standard language for *this* tour grade|
|» » gradeCode|string|false|none|**unique alphanumeric identifier** of *this* tour grade|
|» » gradeDepartureTime|string|false|none|**departure time** for *this* tour grade if available|
|» » gradeDescription|string|false|none|**natural-language description** of *this* tour grade|
|» » gradeTitle|string|false|none|**natural-language description** of *this* tour grade|
|» » langServices|object|false|none|**dictionary** of language service codes and their natural-language descriptors|
|» » » **additionalProperties**|string|false|none|none|
|» » merchantNetPriceFrom|[merchantNetPriceFrom](#schemamerchantnetpricefrom)|false|none|Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» » merchantNetPriceFromFormatted|[merchantNetPriceFromFormatted](#schemamerchantnetpricefromformatted)|false|none|Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» » priceFrom|number|false|none|**numeric suggested retail price** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceFromFormatted|string|false|none|**currency-formatted suggested retail price** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » sortOrder|integer|false|none|**sort order** of *this* tour grade|
|» tourGradesAvailable|boolean|false|none|**indicator**: <br>- `true`: tour grades are available for this product, meaning you will need to display these tour grades to the user and include a tour grade when booking *this* product<br>- `false`: only a default tour grade is available for *this* product<br>|
|» translationLevel|[translationLevel](#schematranslationlevel)|false|none|**numeric indicator** of the language translation level for *this* product that is one of:<br>- `0`: no translation (English only)<br>- `80`: full machine translation<br>- `100`: full human translation<br><br>See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information<br>|
|» userPhotos|[[photoObject](#schemaphotoobject)]|false|none|**array** of user photo objects|
|» videoCount|integer|false|none|ignore (Viator only) – videos are not available to partners|
|» videos|string \| null|false|none|ignore (Viator only) – videos are not available to partners|
|» voucherOption|string|false|none|**specifier** of the type(s) of vouchers that can be used:<br><br>  - `VOUCHER_PAPER_ONLY` - *only* printed paper vouchers accepted<br>  - `VOUCHER_E` - e-vouchers + printed paper vouchers accepted<br>|
|» voucherRequirements|object|false|none|**natural-language description** of any requirements pertaining to the use of the voucher|
|» webURL|[webURL](#schemaweburl)|false|none|ignore (Viator only)|

#### Enumerated Values

|Property|Value|
|---|---|
|» bookingEngineId|FreesaleBE|
|» bookingEngineId|UnconditionalBE|
|» bookingEngineId|DeferredCRMBE|
|» bookingEngineId|FreesaleOnRequestBE|
|» translationLevel|0|
|» translationLevel|80|
|» translationLevel|100|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /product/photos

<a id="opIdproductPhotos"></a>

> Code samples

```bash
curl https://example.com/product/photos \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /product/photos`

Get photos of a product submitted by users

<h3 id="productphotos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|topX|query|string|false|**start and end rows** to return in the format {start}-{end}<br>- e.g. `'1-10'`, `'11-20'`<br><br>**Note**: <br>- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`<br>- if `topX` is not specified, the default is `'1-100'`<br>|
|code|query|string|false|**unique alphanumeric identifier** of the product|
|showUnavailable|query|boolean|false|**specifier** as to whether or not to show 'unavailable' products:<br><br>  - `true`: return *both* available and unavailable products<br>  - `false`: return *only* available products (default)<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "caption": "&lt;p&gt;Carl and Karen meeting a new friend at the Wildlife park.&lt;/p&gt;",
      "editorsPick": true,
      "ownerAvatarURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerCountry": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerId": 1755909,
      "ownerName": "Husker1k",
      "photoHiResURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-1536tall.jpg",
      "photoId": 1909732,
      "photoMediumResURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-260tall.jpg",
      "photoURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-770tall.jpg",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "sortOrder": 1,
      "sslSupported": false,
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-133sq.jpg",
      "timeUploaded": "2012-02-07",
      "title": "DSC00471"
    },
    {
      "caption": "Sydney Opera House",
      "editorsPick": true,
      "ownerAvatarURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerCountry": "Australia",
      "ownerId": 288013,
      "ownerName": "Kylie G",
      "photoHiResURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-1536tall.jpg",
      "photoId": 997106,
      "photoMediumResURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-260tall.jpg",
      "photoURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-770tall.jpg",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "sortOrder": 2,
      "sslSupported": false,
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-133sq.jpg",
      "timeUploaded": "2009-07-22",
      "title": "Sydney Opera House"
    },
    {
      "caption": "&lt;p&gt;This was taken from a water taxi&lt;/p&gt;",
      "editorsPick": false,
      "ownerAvatarURL": "http://cache-graphicslib.viator.com/graphicslib/media/d7/sheila-t-account_1327319-45sq.jpg",
      "ownerCountry": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerId": 1327319,
      "ownerName": "Sheila T",
      "photoHiResURL": "http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-1536tall.jpg",
      "photoId": 31376266,
      "photoMediumResURL": "http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-260tall.jpg",
      "photoURL": "http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-770tall.jpg",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "sortOrder": 3,
      "sslSupported": false,
      "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-133sq.jpg",
      "timeUploaded": "2018-03-28",
      "title": ""
    }
  ],
  "dateStamp": "2020-02-10T15:32:59+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 118,
  "vmid": "331001"
}
```

<h3 id="productphotos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="productphotos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[[photoObject](#schemaphotoobject)]|false|none|**array** of photo objects|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /product/reviews

<a id="opIdproductReviews"></a>

> Code samples

```bash
curl https://example.com/product/reviews \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /product/reviews`

Get user-submitted reviews of a product

**Note**: 
- The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
- The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
- Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
- Only reviews in the language specified in the Accept-Language request header will be returned

**Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":

```javascript
https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
```


<h3 id="productreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|sortOrder|query|string|false|**specifier** of the order in which to return reviews<br><br>Sort order options:<br><br>  - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average<br>  - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average<br>  - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review<br>|
|topX|query|string|false|**start and end rows** to return in the format {start}-{end}<br>- e.g. `'1-10'`, `'11-20'`<br><br>**Note**: <br>- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`<br>- if `topX` is not specified, the default is `'1-100'`<br>|
|code|query|string|false|**unique alphanumeric identifier** of the product|
|showUnavailable|query|boolean|false|**specifier** as to whether or not to show 'unavailable' products:<br><br>  - `true`: return *both* available and unavailable products<br>  - `false`: return *only* available products (default)<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|REVIEW_RATING_A|
|sortOrder|REVIEW_RATING_D|
|sortOrder|REVIEW_RATING_SUBMISSION_DATE_D|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ownerAvatarURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerCountry": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerId": 29510203,
      "ownerName": "Lauren",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "publishedDate": "2019-12-31",
      "rating": 1,
      "review": "&lt;p&gt;We did the hop on hop off bus for the second half of our day. The buses were supposed to stop running at 7:30 pm. At 6:58 our bus driver kicked everyone off the bus before the end time. We were almost 3 miles from our hotel. We all asked if we could get off at an actual stop which was 2 miles closer to our hotel and the driver said no. I want my money back because it was awful!!! I would give 0 stars if I could!&lt;/p&gt;",
      "reviewId": 63679157,
      "sortOrder": 1,
      "sslSupported": false,
      "submissionDate": "2019-11-04",
      "viatorFeedback": "",
      "viatorNotes": ""
    },
    {
      "ownerAvatarURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerCountry": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerId": 30185188,
      "ownerName": "Robin R",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "publishedDate": "2018-05-09",
      "rating": 1,
      "review": "&lt;p&gt;The bus was so crowded people were standing in the aisle which made it very difficult to see the sights.  I got the last available seat which was facing backwards, so what little I could see, was of no value. The audio system was unusable because the sound quality was terrible. &lt;/p&gt;\n\n&lt;p&gt;When we finally got to Bondi Beach which was lovely, we opted to uber back to our hotel which was much more convenient, efficient and had unobstructed views.&lt;/p&gt;",
      "reviewId": 32425348,
      "sortOrder": 2,
      "sslSupported": false,
      "submissionDate": "2018-05-09",
      "viatorFeedback": "",
      "viatorNotes": ""
    },
    {
      "ownerAvatarURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerCountry": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "ownerId": 29062502,
      "ownerName": "Nancy S",
      "productCode": "5010SYDNEY",
      "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "publishedDate": "2018-03-26",
      "rating": 1,
      "review": "&lt;p&gt;There were not buses. At one stop we waited almost 30 minutes and then the bus was so crowded we had to stand. We had bought our tickets in advance to be sure to have a place on the bus but when we got on they were still selling tickets. Never again.&lt;/p&gt;",
      "reviewId": 31322881,
      "sortOrder": 3,
      "sslSupported": false,
      "submissionDate": "2018-03-26",
      "viatorFeedback": "",
      "viatorNotes": ""
    }
  ],
  "dateStamp": "2020-02-09T19:05:03+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1561,
  "vmid": "331004"
}
```

<h3 id="productreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="productreviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[[reviewObject](#schemareviewobject)]|false|none|**array** of review objects|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /search/freetext

<a id="opIdsearchFreetext"></a>

> Code samples

```bash
curl https://example.com/search/freetext \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "currencyCode": "EUR",
    "destId": 684,
    "searchTypes": [
      "ATTRACTION",
      "RECOMMENDATION"
    ],
    "text": "grand",
    "topX": "1-3"
  }'
```

`POST /search/freetext`

Free text search
- This service provides a **free text search across all products and destinations**
- The `text` parameter is required
- **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content


> Body parameter

```json
{
  "currencyCode": "EUR",
  "destId": 684,
  "searchTypes": [
    "ATTRACTION",
    "RECOMMENDATION"
  ],
  "text": "grand",
  "topX": "1-3"
}
```

<h3 id="searchfreetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» currencyCode|body|string|false|**currency code** for the currency in which to display product pricing information|
|» destId|body|integer|false|**unique numeric identifier** of the destination to search within <br>- `destinationId` can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service<br>|
|» searchTypes|body|[string]|false|**array** of search domain specifiers where each item is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|» sortOrder|body|[sortOrder](#schemasortorder)|false|**sort order** in which to return the results that is *one of*:<br><br>  - `'TOP_SELLERS'`: the top sellers<br>  - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)<br>  - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)<br>  - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)<br>  - `'PRICE_FROM_D'`: descending by price (high -&gt; low)<br>|
|» text|body|string|false|**text** to search for|
|» topX|body|[topX](#schematopx)|false|**start and end rows** to return in the format {start}-{end}<br>- e.g. `'1-10'`, `'11-20'`<br><br>**Note**: <br>- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`<br>- if `topX` is not specified, the default is `'1-100'`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» searchTypes|PRODUCT|
|» searchTypes|DESTINATION|
|» searchTypes|ATTRACTION|
|» searchTypes|RECOMMENDATION|
|» sortOrder|TOP_SELLERS|
|» sortOrder|REVIEW_AVG_RATING_A|
|» sortOrder|REVIEW_AVG_RATING_D|
|» sortOrder|PRICE_FROM_A|
|» sortOrder|PRICE_FROM_D|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": {
        "attractionCity": "Peach Springs",
        "attractionLatitude": 36.011871,
        "attractionLongitude": -113.81094,
        "attractionState": "Arizona",
        "attractionStreetAddress": "Eagle Point Road",
        "descriptionIntro": "Grand Canyon Skywalk",
        "descriptionText": "The Grand Canyon Skywalk is a glass, 70-foot long, open-air bridge suspended 4,000 feet above the canyon floor, providing 720-degree views. The Skywalk is operated by the Hualapai Tribe, which owns and protects more than one million acres of land throughout the Grand Canyon’s western rim. Even with its remote location some 120 miles from Las Vegas, you can easily experience the Grand Canyon Skywalk on a day trip or overnight excursion to the West Rim.",
        "destinationId": 684,
        "editorsPick": false,
        "keywordCount": 0,
        "keywords": [],
        "overviewSummary": "&lt;div style=\"\"&gt;There’s no doubt that 4,000 feet (1,220 meters) is a long way down, especially when standing on a bridge made of glass—and you’re looking down toward the Grand Canyon floor. That’s the experience visitors find at the Grand Canyon Skywalk, a horseshoe-shaped, glass-bottomed bridge that juts out 70 feet (20 meters) above one of America’s most scenic sites. Travelers who step out onto the bridge are rewarded with panoramic West Rim and Colorado River views that extend 720 degrees, wrapping around, below, and behind.&amp;nbsp;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;The Basics&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;Most tours to the Grand Canyon Skywalk begin in Las Vegas, where travelers head east to the Arizona desert by road, plane, or helicopter. A Skywalk ticket can be combined with a Hoover Dam trip or a scenic helicopter tour over the canyon, while other options include visits with Hualapai tribe members or a boat ride up the Colorado River. Those short on time can opt for a skip-the-line experience.&lt;/div&gt;&lt;div style=\"\"&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;Things to Know Before You Go&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;ul&gt;&lt;li&gt;The Skywalk is a must-visit for thrill-seekers.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Cameras aren’t permitted on the Skywalk, but it is possible to purchase photos from Grand Canyon West’s professional photographers.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Outside food and drink are not permitted within Grand Canyon West or on the Skywalk.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Tours to the Skywalk can last upwards of nine hours depending on the option chosen.&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;How to Get There&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;McCarran International Airport in Las Vegas is the nearest commercial airport to the Skywalk bridge, about two hours away by road. Because the Grand Canyon Skywalk is a part of Grand Canyon West—a remote and rugged section of canyon managed by the Hualapai—entry to the bridge can only be purchased as part of a package excursion. While many visitors come on a guided tour, it’s also possible to drive yourself to Grand Canyon West, then take the hop-on, hop-off shuttle to the Skywalk and other attractions.&lt;/div&gt;&lt;div style=\"\"&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;When to Get There&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;Daytime temperatures at the Grand Canyon hover at or above 85°F (30­°C) in summer, making fall and spring much more appealing times to visit. The glass bridge tends to be busiest around midday, so plan to arrive in the morning or later in the afternoon to ensure you have more elbow room.&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;&lt;br&gt;&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;&lt;b&gt;Other Activities at Grand Canyon West&lt;/b&gt;&lt;/div&gt;&lt;div style=\"\"&gt;The Grand Canyon West complex lies outside the national park and is operated by the Hualapai tribe. In addition to the Skywalk, visitors can explore an American Indian village at Eagle Point, cruise along the Colorado River, hike to the ruins of an old guano mine, or even rent a rustic cabin at Hualapai Ranch.&lt;/div&gt;",
        "pagePrimaryLanguage": "en",
        "pageTitle": "Grand Canyon Skywalk",
        "pageUrlName": "Grand-Canyon-Skywalk",
        "panoramaCount": 0,
        "photoCount": 110,
        "primaryDestinationId": 684,
        "primaryDestinationName": "Las Vegas",
        "primaryDestinationUrlName": "Las-Vegas",
        "productCount": 10,
        "publishedDate": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rating": 4.5,
        "reviewCount": 1695,
        "seoId": 10,
        "seoType": "ATTRACTION",
        "showPhotos": false,
        "showReviews": false,
        "sortOrder": 1,
        "tabTitle": "Grand Canyon Skywalk",
        "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/100565_Las%20Vegas_Grand%20Canyon%20Skywalk_d684-224.jpg",
        "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/100565_Las%20Vegas_Grand%20Canyon%20Skywalk_d684-224.jpg",
        "title": "Grand Canyon Skywalk",
        "userName": "",
        "webURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      "searchType": "ATTRACTION",
      "sortOrder": 1
    },
    {
      "data": {
        "attractionCity": "Grand Canyon National Park",
        "attractionLatitude": 36.059053,
        "attractionLongitude": -112.12825,
        "attractionState": "Arizona",
        "attractionStreetAddress": "",
        "descriptionIntro": "Grand Canyon South Rim\n",
        "descriptionText": "&lt;p&gt;Of the two major rims of the Grand Canyon, many visitors choose the South Rim, which boasts easy access, the bulk of services, and the panoramic vistas for which the park is famous. Every summer, visitors throng the park's most popular rim, mainly to ogle its easily accessible dramatic, sweeping canyon views.&lt;/p&gt;&lt;p&gt;\n\nBut the Grand Canyon South Rim is more then those spectacular canyon views. The first stop for many is Grand Canyon Village, which is filled with many historic buildings. Other historic highlights in the South Rim is Desert View Watchtower, which has one of the few views of the bottom of the Canyon and the Colorado River; Grand Canyon Railway Depot, built in 1909; and Bright Angel Lodge, a rustic lodge built of logs and stones.&lt;/p&gt;&lt;p&gt;\n\nFor hikers, the Grand Canyon South Rim is where you'll find Bright Angel Trail, Rim Trail, and South Kaibab Trail - all of which offer the most dazzling views of the Grand Canyon.&lt;/p&gt;",
        "destinationId": 684,
        "editorsPick": true,
        "keywordCount": 0,
        "keywords": [],
        "overviewSummary": "The South Rim is the most popular area of Grand Canyon National Park, boasting easy access to the canyon, the bulk of available amenities and services, and the panoramic vistas for which the natural wonder is famous. One of the most famous attractions in the American Southwest, the area offers breathtaking views over the Colorado River and the chance to immerse yourself in Native American culture.&lt;div&gt;&lt;br&gt;&lt;b&gt;The Basics&lt;br&gt;&lt;/b&gt;The South Rim of the Grand Canyon averages 7,000 feet (2,134 meters) above sea level, with natural wonders including Navajo Point, Hermit Road, and the Abyss. Grand Canyon Village is home to a variety of historic buildings, while other popular stops include the Grand Canyon Railway Depot, the Bright Angel Lodge, Kolb Studio, and the Desert View Watchtower, which features work by Hopi artists and incorporates Native American art and design.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Choosing a group bus tour, helicopter tour, air tour, or a self-drive tour makes the South Rim conveniently accessible from Las Vegas. Tours also leave from Sedona and Phoenix, and some combine the trip with a visit to the West Rim, the North Rim, or the Hoover Dam. A Grand Canyon helicopter tour is undoubtedly the fastest and most dramatic way to visit the canyon from Vegas.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Things to Know Before You Go&lt;/b&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;The Canyon View Visitor Center, near the south entrance, stocks maps, books, and videos, while the Cameron Trading Post, outside the east entrance to the park, boasts a selection of souvenirs and supplies.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Stop by the Hopi House Gift Store and Art Gallery to see art and crafts from the local tribes.&lt;br&gt;&lt;/li&gt;&lt;li&gt;If driving, be sure you have plenty of gas in your car before setting out for the canyon; there are few service stations in this remote part of Arizona.&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;b&gt;How to Get There&lt;br&gt;&lt;/b&gt;Located in the Arizona national park, the South Rim is a three-hour drive from Las Vegas or a short plane ride via Grand Canyon Airport. Driving from Flagstaff, take US 180 directly to the South Rim or US 89 to Arizona 64 and the east entrance to the park.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;b&gt;When to Get There&lt;br&gt;&lt;/b&gt;The South Rim gets quite crowded with visitors in the summertime. Consider visiting in the shoulder season, or booking a South Rim bus or jeep tour so you don't have to struggle with traffic and parking.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;b&gt;Hiking the Grand Canyon South Rim&lt;/b&gt;&lt;/div&gt;&lt;div&gt;The Grand Canyon South Rim is home to the Bright Angel Trail, Rim Trail, and South Kaibab Trail—all of which offer the most dazzling views of the canyon. Keep your eyes open for the regal California condors, which have recently returned to the area.&lt;/div&gt;",
        "pagePrimaryLanguage": "en",
        "pageTitle": "Grand Canyon South Rim",
        "pageUrlName": "Grand-Canyon-South-Rim",
        "panoramaCount": 0,
        "photoCount": 54,
        "primaryDestinationId": 684,
        "primaryDestinationName": "Las Vegas",
        "primaryDestinationUrlName": "Las-Vegas",
        "productCount": 11,
        "publishedDate": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rating": 4,
        "reviewCount": 32,
        "seoId": 1249,
        "seoType": "ATTRACTION",
        "showPhotos": false,
        "showReviews": false,
        "sortOrder": 2,
        "tabTitle": "Grand Canyon South",
        "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/811289_grand-canyon-south-rim.jpg",
        "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/811289_grand-canyon-south-rim.jpg",
        "title": "Grand Canyon South Rim",
        "userName": "",
        "webURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      "searchType": "ATTRACTION",
      "sortOrder": 2
    },
    {
      "data": {
        "attractionCity": "",
        "attractionLatitude": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "attractionLongitude": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "attractionState": "",
        "attractionStreetAddress": "",
        "descriptionIntro": "",
        "descriptionText": "",
        "destinationId": 684,
        "editorsPick": false,
        "keywordCount": 0,
        "keywords": [],
        "overviewSummary": "&lt;div&gt;The Grand Canyon is an inspiring sight from any angle, but seeing it from the air is an unforgettable experience. With a helicopter tour from Las Vegas, you'll travel in style and enjoy incredible aerial views of the canyon. Here are your options.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Highlights&lt;/b&gt;&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;Skip the tour bus and reach the Grand Canyon in just 45 minutes on a helicopter ride from Las Vegas.&lt;/li&gt;&lt;li&gt;Catch views of the famous Las Vegas Strip from above on your way in and out of the city.&lt;/li&gt;&lt;li&gt;Take in the natural beauty of the Grand Canyon and the Colorado River through expansive helicopter windows.&lt;/li&gt;&lt;li&gt;Enjoy easy access to the sights of your choices, from scenic overlooks to the Grand Canyon Skywalk.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Most tours also fly low over the Hoover Dam, affording more scenic views.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;VIP &amp; Exclusive Tours&lt;/b&gt;&lt;/div&gt;&lt;div&gt;From pickup in a luxury vehicle to a multi-course gourmet meal in the canyon, VIP tours kick things up a notch. Choose a tour that pairs your helicopter ride with a below-the-rim landing, a seated meal, or a sunset champagne toast and picnic set at the canyon with table linens and fine china.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Combo Tours&lt;/b&gt;&lt;/div&gt;&lt;div&gt;If you have extra time, add to your Grand Canyon helicopter experience with a boat trip on the Colorado River, a stroll out on the Grand Canyon Skywalk, or some free time for hiking and exploring the national park's West Rim.&lt;/div&gt;",
        "pagePrimaryLanguage": "en",
        "pageTitle": "Grand Canyon Helicopter Tours from Las Vegas",
        "pageUrlName": "Grand-Canyon-Helicopter-Tours-from-Las-Vegas",
        "panoramaCount": 0,
        "photoCount": 229,
        "primaryDestinationId": 684,
        "primaryDestinationName": "Las Vegas",
        "primaryDestinationUrlName": "Las-Vegas",
        "productCount": 6,
        "publishedDate": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rating": 4.5,
        "reviewCount": 2652,
        "seoId": 26043,
        "seoType": "RECOMMENDATION",
        "showPhotos": false,
        "showReviews": false,
        "sortOrder": 3,
        "tabTitle": "",
        "thumbnailHiResURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/668530_Viator_Photographer_392432.jpg",
        "thumbnailURL": "http://cache-graphicslib.viator.com/graphicslib/page-images/668530_Viator_Photographer_392432.jpg",
        "title": "Grand Canyon Helicopter Tours from Las Vegas",
        "userName": "",
        "webURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      "searchType": "RECOMMENDATION",
      "sortOrder": 3
    }
  ],
  "dateStamp": "2021-02-01T18:35:40+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 54,
  "vmid": "331004"
}
```

<h3 id="searchfreetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="searchfreetext-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[[SearchFreetextResponse](#schemasearchfreetextresponse)]|false|none|**array** of search results|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /search/products

<a id="opIdsearchProducts"></a>

> Code samples

```bash
curl https://example.com/search/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "destId": 684,
    "sortOrder": "REVIEW_AVG_RATING_D",
    "subCatId": 26052,
    "topX": "1-3"
  }'
```

`POST /search/products`

Search for products
This service is used to search for products based on various criteria; such as:
* the destination (locale) in which it operates
* its association with a tourist attraction
* its category and/or subcategory
* the time period during which it operates
The fields you include in the request body for this service determine the kind of search that will be performed.

**&lt;u&gt;Note&lt;/u&gt;**: 

* You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
* The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
* The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
* The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.

**&lt;u&gt;Examples&lt;/u&gt;**:

**Search by destination**:

* E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
```javascript
{
    "destId": 684,
    "subCatId": 26052,
    "sortOrder": "REVIEW_AVG_RATING_D",
    "topX": "1-3"
}
```

**Search by attraction-link**:

* E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
```javascript
{
    "seoId": 1115,
    "sortOrder": "PRICE_FROM_D",
    "topX": "1-3"
}
```

**&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
- Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
- E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
```javascript
{
    "destId": 684,
    "startDate": "2020-02-21",
    "endDate": "2020-03-21",
    "sortOrder": "PRICE_FROM_D",
    "topX": "1-3"
}
```

- If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.


> Body parameter

```json
{
  "destId": 684,
  "sortOrder": "REVIEW_AVG_RATING_D",
  "subCatId": 26052,
  "topX": "1-3"
}
```

<h3 id="searchproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» catId|body|integer|false|**unique numeric identifier** of *this* product category to search within<br>- `categoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>- at present, it is not possible to use `catId` in conjunction with `seoId`<br>|
|» currencyCode|body|string|false|**currency** in which to display product prices|
|» destId|body|integer|false|**unique numeric identifier** of the destination in which to search for products<br>- `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service<br>- use **EITHER** `destId` **OR** `seoId`, but not both<br>|
|» endDate|body|string|false|**end date delimiter** for the search (must be in the future)<br>- e.g., `'2019-10-21'`<br>|
|» seoId|body|string|false|**search restriction specifier** for products associated with an attraction uniquely identified by `seoId`<br>- use **EITHER** `destId` **OR** `seoId`, but not both<br>|
|» sortOrder|body|string|false|**sort order** in which to return the results that is *one of*:<br><br>  - `"TOP_SELLERS"`: the top sellers<br>  - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)<br>  - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)<br>  - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)<br>  - `"PRICE_FROM_D"`: descending by price (high -&gt; low) <br>|
|» startDate|body|string|false|**start date delimiter** for the search (must be in the future)<br>- e.g., `'2018-10-21'`<br>|
|» subCatId|body|integer|false|**unique numeric identifier** of *this* product subcategory to search within<br>- `subcategoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>- at present, it is not possible to use `subCatId` in conjunction with `seoId`<br>|
|» topX|body|[topX](#schematopx)|false|**start and end rows** to return in the format {start}-{end}<br>- e.g. `'1-10'`, `'11-20'`<br><br>**Note**: <br>- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`<br>- if `topX` is not specified, the default is `'1-100'`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sortOrder|TOP_SELLERS|
|» sortOrder|REVIEW_AVG_RATING_A|
|» sortOrder|REVIEW_AVG_RATING_D|
|» sortOrder|PRICE_FROM_A|
|» sortOrder|PRICE_FROM_D|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "FreesaleBE",
      "catIds": [
        26051,
        6,
        50127
      ],
      "code": "73492P4",
      "currencyCode": "USD",
      "duration": "1 hour",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": false,
      "merchantNetPriceFrom": 55.38,
      "merchantNetPriceFromFormatted": "$55.38",
      "onRequestPeriod": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "photoCount": 0,
      "price": 65,
      "priceFormatted": "$65.00",
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "primaryGroupId": 26051,
      "productUrlName": "Viva-Las-Vinos-Wine-Yoga",
      "rating": 0,
      "reviewCount": 0,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Sip your wine and unwind with wine yoga! This gentle yoga class combines sipping your wine and practicing fun yoga basics in a rad environment. A tad unconventional, this class is filled with laughter, fun, and cheers-ing your neighbor.&lt;br&gt;&lt;br&gt;Private parties are available upon request.&lt;br&gt;&lt;br&gt;Ticket includes one glass of wine, a souvenir adult sippy (to help prevent the spillage of the wine!), and a gentle quirky yoga class.&lt;br&gt;&lt;br&gt;",
      "shortTitle": "Yoga Uncorked at The Gramercy",
      "sortOrder": 1,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        50128,
        19,
        26052,
        21,
        40293
      ],
      "supplierCode": "73492",
      "supplierName": "MintnHoney",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/27/7e/88.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/27/7e/88.jpg",
      "title": "Yoga Uncorked at The Gramercy",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 0,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "FreesaleBE",
      "catIds": [
        26051,
        6
      ],
      "code": "73492P17",
      "currencyCode": "USD",
      "duration": "1 hour",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 46.86,
      "merchantNetPriceFromFormatted": "$46.86",
      "onRequestPeriod": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "photoCount": 0,
      "price": 55,
      "priceFormatted": "$55.00",
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "primaryGroupId": 6,
      "productUrlName": "Yoga-Uncorked-Artisan-Hotel",
      "rating": 0,
      "reviewCount": 0,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Sip your wine and unwind with wine yoga! This gentle yoga class combines sipping your wine and practicing fun yoga basics in a rad environment. A tad unconventional, this class is filled with laughter, fun, and cheers-ing your neighbor.&lt;br&gt;&lt;br&gt;Private parties are available upon request.&lt;br&gt;&lt;br&gt;Ticket includes one glass of wine, a souvenir adult sippy (to help prevent the spillage of the wine!), and a gentle quirky yoga class.&lt;br&gt;&lt;br&gt;",
      "shortTitle": "Yoga Uncorked-Artisan Hotel",
      "sortOrder": 2,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        19,
        26052,
        21,
        40293
      ],
      "supplierCode": "73492",
      "supplierName": "MintnHoney",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/ac/2b/2d.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/ac/2b/2d.jpg",
      "title": "Yoga Uncorked-Artisan Hotel",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 0,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "DeferredCRMBE",
      "catIds": [
        26051,
        50127
      ],
      "code": "73458P1",
      "currencyCode": "USD",
      "duration": "1 to 2 hours",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 213,
      "merchantNetPriceFromFormatted": "$213.00",
      "onRequestPeriod": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "photoCount": 0,
      "price": 250,
      "priceFormatted": "$250.00",
      "primaryDestinationId": 22171,
      "primaryDestinationName": "Nevada",
      "primaryDestinationUrlName": "Nevada",
      "primaryGroupId": 26051,
      "productUrlName": "Sunset-Yoga-in-Las-Vegas",
      "rating": 0,
      "reviewCount": 0,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Enjoy a quiet, beautiful short walk to a secluded and breathtaking scene in Las Vegas. Travelers can choose to visit Calico Basin, Mt. Charleston, Wetlands, Seven Magic Mountains, or Lake Las Vegas for a private or group yoga session. Each session will provide the freedom from day-to-day distractions and allow you to immerse yourself in a unique and awe-inspiring locale. Each yoga session will be tailored to the individual and/or group in order to ensure the proper tone and intention is set. This is an all-inclusive experience. Guided walking tour, customized yoga session, yoga mats and water will be provided.",
      "shortTitle": "Explore the Beauty of Las Vegas with Private and Group Yoga Classes",
      "sortOrder": 3,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        50128,
        26052,
        40293
      ],
      "supplierCode": "73458",
      "supplierName": "Jennifer Pierotti Yoga ",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/3b/bc/78.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/3b/bc/78.jpg",
      "title": "Explore the Beauty of Las Vegas with Private and Group Yoga Classes",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 0,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    }
  ],
  "dateStamp": "2020-02-09T14:34:51+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 3,
  "vmid": "331005"
}
```

<h3 id="searchproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="searchproducts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of product objects|
|» admission|string \| null|false|none|ignore (Viator only)|
|» available|boolean|false|none|ignore (Viator only)|
|» bookingEngineId|[bookingEngineId](#schemabookingengineid)|false|none|**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification<br>- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified<br>- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br><br>If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        <br>|
|» catIds|[integer]|false|none|**list** of unique numeric category identifiers for *this* product<br>- the `categoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» code|string|false|none|**unique alphanumeric identifier** of *this* product|
|» currencyCode|string|false|none|**indicator** of the currency in which *this* product's prices are displayed|
|» duration|string|false|none|**natural-language description** of the duration of *this* product|
|» essential|string \| null|false|none|ignore (Viator only)|
|» merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>    <br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» merchantNetPriceFrom|[merchantNetPriceFrom](#schemamerchantnetpricefrom)|false|none|Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» merchantNetPriceFromFormatted|[merchantNetPriceFromFormatted](#schemamerchantnetpricefromformatted)|false|none|Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» onRequestPeriod|[onRequestPeriod](#schemaonrequestperiod)|false|none|**number** of hours before the travel date that *this* product will be 'on-request' for<br>- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`<br>- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date<br>- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API<br>|
|» onSale|[onSale](#schemaonsale)|false|none|Ignore (Viator only)<br>|
|» panoramaCount|integer|false|none|**number** of panoramic images available for *this* product|
|» pas|object \| null|false|none|**object** detailing product availability<br>- `pas` stands for Product Availability Schema<br>|
|» photoCount|integer|false|none|**number** of user photos published for *this* product|
|» price|[price](#schemaprice)|false|none|**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.<br><br><br>  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» priceFormatted|[priceFormatted](#schemapriceformatted)|false|none|**currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter<br><br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» primaryDestinationId|integer|false|none|**unique numeric identifier** of *this* product's primary destination|
|» primaryDestinationName|string|false|none|**natural-language name** of *this* product's primary destination|
|» primaryDestinationUrlName|string|false|none|**URL-formatted name** of *this* product's primary destination|
|» primaryGroupId|integer|false|none|ignore (Viator only)|
|» productUrlName|string|false|none|**URL-formatted name** of *this* product|
|» rating|[rating](#schemarating)|false|none|**average user rating** of *this* product<br><br>users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;<br><br>the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received<br>|
|» reviewCount|[reviewCount](#schemareviewcount)|false|none|**number** of user reviews that have been submitted by users for *this* product<br><br>If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.<br>|
|» rrp|[rrp](#schemarrp)|false|none|**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» rrpformatted|[rrpFormatted](#schemarrpformatted)|false|none|**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» shortDescription|string|false|none|**HTML-formatted natural-language description** of *this* product|
|» shortTitle|string|false|none|**short natural-language title** of *this* product (for use when there is a need to conserve space)|
|» sortOrder|integer|false|none|**sort order** for *this* product|
|» specialOfferAvailable|boolean|false|none|ignore (Viator only)|
|» specialReservation|boolean|false|none|ignore (Viator only)|
|» specialReservationDetails|string \| null|false|none|ignore (Viator only)|
|» sslSupported|object|false|none|ignore (Viator only)|
|» subCatIds|[integer]|false|none|**list** of unique numeric subcategory identifiers for *this* product<br>- the `subcategoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» supplierCode|string|false|none|**unique identifier** of *this* product's supplier in text string format|
|» supplierName|string|false|none|**natural-language name** of *this* product's supplier|
|» thumbnailHiResURL|string|false|none|**URL** for the high resolution thumbnail for *this* product|
|» thumbnailURL|string|false|none|**URL** for *this* product's thumbnail image|
|» title|string|false|none|**natural-language title** of *this* product|
|» translationLevel|[translationLevel](#schematranslationlevel)|false|none|**numeric indicator** of the language translation level for *this* product that is one of:<br>- `0`: no translation (English only)<br>- `80`: full machine translation<br>- `100`: full human translation<br><br>See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information<br>|
|» uniqueShortDescription|string \| null|false|none|ignore (Viator only)|
|» videoCount|integer|false|none|ignore (Viator only) – videos are not available to partners|
|» webURL|[webURL](#schemaweburl)|false|none|ignore (Viator only)|

#### Enumerated Values

|Property|Value|
|---|---|
|» bookingEngineId|FreesaleBE|
|» bookingEngineId|UnconditionalBE|
|» bookingEngineId|DeferredCRMBE|
|» bookingEngineId|FreesaleOnRequestBE|
|» translationLevel|0|
|» translationLevel|80|
|» translationLevel|100|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /search/products/codes

<a id="opIdsearchProductsCodes"></a>

> Code samples

```bash
curl https://example.com/search/products/codes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "currencyCode": "USD",
    "productCodes": [
      "123457890"
    ]
  }'
```

`POST /search/products/codes`

Search by product code
- This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
- **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).


> Body parameter

```json
{
  "currencyCode": "USD",
  "productCodes": [
    "123457890"
  ]
}
```

<h3 id="searchproductscodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» currencyCode|body|string|false|**currency code** for the currency in which to display product pricing|
|» productCodes|body|[string]|false|**array** of product codes to search for|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "UnconditionalBE",
      "catIds": [
        6,
        12
      ],
      "code": "5010SYDNEY",
      "currencyCode": "EUR",
      "duration": "2 hours",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 26.64,
      "merchantNetPriceFromFormatted": "€26,64",
      "onRequestPeriod": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "photoCount": 124,
      "price": 33.35,
      "priceFormatted": "€33,35",
      "primaryDestinationId": 357,
      "primaryDestinationName": "Sydney",
      "primaryDestinationUrlName": "Sydney",
      "primaryGroupId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "productUrlName": "Sydney-and-Bondi-Hop-on-Hop-off-Tour",
      "rating": 4.5,
      "reviewCount": 1605,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
      "shortTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "sortOrder": 1,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        97,
        98,
        5330,
        26963,
        32024,
        45
      ],
      "supplierCode": "5010",
      "supplierName": "Big Bus Tours",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg",
      "title": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 1,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "admission": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingEngineId": "FreesaleOnRequestBE",
      "catIds": [
        1,
        25,
        12
      ],
      "code": "2280SUN",
      "currencyCode": "EUR",
      "duration": "3 hours 30 minutes",
      "essential": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "merchantCancellable": true,
      "merchantNetPriceFrom": 386.11,
      "merchantNetPriceFromFormatted": "€386,11",
      "onRequestPeriod": 336,
      "onSale": false,
      "panoramaCount": 0,
      "pas": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "photoCount": 7,
      "price": 449.74,
      "priceFormatted": "€449,74",
      "primaryDestinationId": 684,
      "primaryDestinationName": "Las Vegas",
      "primaryDestinationUrlName": "Las-Vegas",
      "primaryGroupId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "productUrlName": "Grand-Canyon-West-Rim-Deluxe-Sunset-Helicopter-Tour",
      "rating": 5,
      "reviewCount": 399,
      "rrp": 0,
      "rrpformatted": "",
      "savingAmount": 0,
      "savingAmountFormated": "",
      "shortDescription": "Take off from Las Vegas on a magical sunset helicopter tour to the Grand Canyon. You'll enjoy a 45-minute helicopter flight each way, land at the Grand Canyon for a glass of Champagne and snacks while you watch the sun start it's descent behind the walls of the canyon, then fly low over the famous neon-lit Las Vegas Strip on your return.",
      "shortTitle": "Grand Canyon from Las Vegas West Rim Sunset Helicopter Tour",
      "sortOrder": 2,
      "specialOfferAvailable": false,
      "specialReservation": false,
      "specialReservationDetails": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sslSupported": false,
      "subCatIds": [
        113,
        2,
        98,
        26963,
        45,
        95
      ],
      "supplierCode": "2280",
      "supplierName": "Sundance Helicopters",
      "thumbnailHiResURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/7a/ec/1c.jpg",
      "thumbnailURL": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/7a/ec/1c.jpg",
      "title": "Grand Canyon West Rim Deluxe Sunset Helicopter Tour",
      "translationLevel": 0,
      "uniqueShortDescription": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "videoCount": 1,
      "webURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    }
  ],
  "dateStamp": "2020-02-09T16:07:17+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 2,
  "vmid": "331003"
}
```

<h3 id="searchproductscodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="searchproductscodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of product objects|
|» admission|string \| null|false|none|ignore (Viator only)|
|» bookingEngineId|[bookingEngineId](#schemabookingengineid)|false|none|**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification<br>- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified<br>- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br><br>If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        <br>|
|» catIds|[integer]|false|none|**list** of category identifiers *this* product falls under<br>- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» code|string|false|none|**unique alphanumeric identifier** of *this* product|
|» currencyCode|string|false|none|**currency** in which *this* product's pricing is displayed|
|» duration|string|false|none|**natural-language description** of *this* product's duration|
|» essential|string \| null|false|none|ignore (Viator only)|
|» merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>    <br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» merchantNetPriceFrom|[merchantNetPriceFrom](#schemamerchantnetpricefrom)|false|none|Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» merchantNetPriceFromFormatted|[merchantNetPriceFromFormatted](#schemamerchantnetpricefromformatted)|false|none|Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)<br><br>For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» onRequestPeriod|[onRequestPeriod](#schemaonrequestperiod)|false|none|**number** of hours before the travel date that *this* product will be 'on-request' for<br>- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`<br>- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date<br>- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API<br>|
|» onSale|[onSale](#schemaonsale)|false|none|Ignore (Viator only)<br>|
|» panoramaCount|integer|false|none|**number** of panoramic images available for *this* product|
|» pas|object \| null|false|none|ignore (Viator only)|
|» photoCount|integer|false|none|**number** of user photos published for *this* product|
|» price|[price](#schemaprice)|false|none|**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.<br><br><br>  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» priceFormatted|string|false|none|**currency-formatted suggested sell 'from' price** of *this* product|
|» primaryDestinationId|integer|false|none|**unique numeric identifier** of *this* product's primary destination|
|» primaryDestinationName|string|false|none|**natural-language name** of *this* product's primary destination|
|» primaryGroupId|string \| null|false|none|ignore (Viator only)|
|» rating|[rating](#schemarating)|false|none|**average user rating** of *this* product<br><br>users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;<br><br>the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received<br>|
|» reviewCount|[reviewCount](#schemareviewcount)|false|none|**number** of user reviews that have been submitted by users for *this* product<br><br>If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.<br>|
|» rrp|[rrp](#schemarrp)|false|none|**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» rrpformatted|[rrpFormatted](#schemarrpformatted)|false|none|**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.|
|» savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» shortDescription|string|false|none|**natural-language description** of *this* product (short)|
|» shortTitle|string|false|none|**natural-language title** (shortened) of *this* product|
|» sortOrder|integer|false|none|**sort order** for *this* search result|
|» specialOfferAvailable|boolean|false|none|**indicator**: `true` if a special offer is available for *this* product. If `true`, this means that the `specialOffer` field in the response from the [/product] service will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'|
|» specialReservation|boolean|false|none|ignore (Viator only)|
|» specialReservationDetails|string \| null|false|none|ignore (Viator only)|
|» subCatIds|[integer]|false|none|**list** of subcategory identifiers that *this* product falls under <br>- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service<br>|
|» supplierCode|string|false|none|**unique identifier** of *this* product's supplier|
|» supplierName|string|false|none|**natural-language name** of *this* product's supplier|
|» thumbnailHiResURL|string|false|none|**URL** for *this* product's high-resolution thumbnail image|
|» thumbnailURL|string|false|none|**URL** for *this* product's thumbnail image|
|» title|string|false|none|**natural-language title** of *this* product|
|» translationLevel|[translationLevel](#schematranslationlevel)|false|none|**numeric indicator** of the language translation level for *this* product that is one of:<br>- `0`: no translation (English only)<br>- `80`: full machine translation<br>- `100`: full human translation<br><br>See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information<br>|
|» uniqueShortDescription|string \| null|false|none|ignore (Viator only)|
|» videoCount|integer|false|none|ignore (Viator only) – videos are not available to partners|
|» webURL|[webURL](#schemaweburl)|false|none|ignore (Viator only)|

#### Enumerated Values

|Property|Value|
|---|---|
|» bookingEngineId|FreesaleBE|
|» bookingEngineId|UnconditionalBE|
|» bookingEngineId|DeferredCRMBE|
|» bookingEngineId|FreesaleOnRequestBE|
|» translationLevel|0|
|» translationLevel|80|
|» translationLevel|100|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

<h1 id="viator-api-documentation-amp-specification-merchant-partners-booking-services">Booking services</h1>

Booking services

## /booking/availability

<a id="opIdbookingAvailability"></a>

> Code samples

```bash
curl https://example.com/booking/availability \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "ageBands": [
      {
        "bandId": 1,
        "count": 1
      }
    ],
    "currencyCode": "AUD",
    "month": "12",
    "productCode": "5010SYDNEY",
    "year": "2020"
  }'
```

`POST /booking/availability`

Get the tour-grade with the lowest price that is available for a product on each day of the specified month

This service:
- returns 
- useful when displaying a calendar of available tours
- For more information, see: [Availability services](#section/Key-concepts/Availability-services)
- **Notes:** 
  - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.

  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


> Body parameter

```json
{
  "ageBands": [
    {
      "bandId": 1,
      "count": 1
    }
  ],
  "currencyCode": "AUD",
  "month": "12",
  "productCode": "5010SYDNEY",
  "year": "2020"
}
```

<h3 id="bookingavailability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» ageBands|body|[object]|false|**array of objects** specifying the age bands by which to to filter search results|
|» » bandId|body|[ageBandId](#schemaagebandid)|false|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » count|body|integer|false|**number of people** in *this* age band|
|» currencyCode|body|string|false|**currency code** for the currency in which to display tour grade pricing information|
|» month|body|string|false|**month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)|
|» productCode|body|string|false|**unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information|
|» year|body|string|false|**year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)|

> Example responses

> 200 Response

```json
{
  "data": {
    "availability": [
      {
        "available": true,
        "bookingDate": "2020-06-01",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 1,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-02",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 2,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-03",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 3,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-04",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 4,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-05",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 5,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-06",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 6,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-07",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 7,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-08",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 8,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-09",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 9,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-10",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 10,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-11",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 11,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-12",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 12,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-13",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 13,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-14",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 14,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-15",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 15,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-16",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 16,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-17",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 17,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-18",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 18,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-19",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 19,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-20",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 20,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-21",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 21,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-22",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 22,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-23",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 23,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-24",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 24,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-25",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 25,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-26",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 26,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-27",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 27,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-28",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 28,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-29",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 29,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      },
      {
        "available": true,
        "bookingDate": "2020-06-30",
        "currencyCode": "AUD",
        "gradeCode": "24HOUR",
        "merchantNetPrice": 42.41,
        "merchantNetPriceFormatted": "$42.41",
        "retailPrice": 53.1,
        "retailPriceFormatted": "$53.10",
        "sortOrder": 30,
        "unavailableReason": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      }
    ],
    "firstAvailableDate": "2020-06-01",
    "lastAvailableDate": "2021-02-10",
    "productCode": "5010SYDNEY"
  },
  "dateStamp": "2020-02-10T16:43:02+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331004"
}
```

<h3 id="bookingavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingavailability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|**object** detailing available tourgrades for the specified age bands and date range for this product|
|» availability|[object]|false|none|**array** of tour grade availability objects|
|» » available|boolean|false|none|**indicator** - `true` if *this* tour grade is available to book|
|» » bookingDate|string|false|none|**date** on which *this* tour grade is available to be booked|
|» » currencyCode|string|false|none|**currency code** of the currency in which product pricing is displayed|
|» » gradeCode|string|false|none|**alphanumeric identifier** for *this* tour grade|
|» » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » retailPrice|number|false|none|**numeric suggested retail price** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » retailPriceFormatted|string|false|none|**currency-formatted suggested retail price** for *this* tour grade<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » sortOrder|integer|false|none|**sort order** of this tour grade availability object|
|» » unavailableReason|string|false|none|**natural-language explanation** as to why *this* tour grade is not available to be booked|
|» firstAvailableDate|string|false|none|**first available date** (in plain text format) for the tour grade|
|» lastAvailableDate|string|false|none|**last available date** for the tour grade|
|» productCode|string|false|none|**unique alphanumeric identifer** of the product that was specified in the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/availability/dates

<a id="opIdbookingAvailabilityDates"></a>

> Code samples

```bash
curl https://example.com/booking/availability/dates \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /booking/availability/dates`

Get dates on which a product is available

This service:
- retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
- returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
- useful to present the user with a list of dates for selection on which *this* product is available for booking
- **Notes**: 

  - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


<h3 id="bookingavailabilitydates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|productCode|query|string|false|**unique alphanumeric identifier** of the product|

> Example responses

> 200 Response

```json
{
  "data": {
    "2020-02": [
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29"
    ],
    "2020-03": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2020-04": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "2020-05": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2020-06": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "2020-07": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2020-08": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2020-09": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "2020-10": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2020-11": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "2020-12": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2021-01": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "2021-02": [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08"
    ]
  },
  "dateStamp": "2020-02-10T16:51:10+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331004"
}
```

<h3 id="bookingavailabilitydates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingavailabilitydates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|**dictionary** of month identifiers (e.g., `'2018-12'`) to an array of days-of-the-month (text) specifying which days of the specified month *this* product is available to be booked"<br>- **Note**: see response sample for object structure<br>|
|» **additionalProperties**|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/availability/tourgrades

<a id="opIdbookingAvailabilityTourgrades"></a>

> Code samples

```bash
curl https://example.com/booking/availability/tourgrades \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "ageBands": [
      {
        "bandId": 1,
        "count": 1
      }
    ],
    "bookingDate": "2020-12-28",
    "currencyCode": "AUD",
    "productCode": "5010SYDNEY"
  }'
```

`POST /booking/availability/tourgrades`

Get the tour grades of a product that are currently available

This service reports:
- all tour grades for the specified product, on the specified day, that are available for the specified age bands
- the pricing breakdown and the total depending on the travel date and traveler mix

**Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


> Body parameter

```json
{
  "ageBands": [
    {
      "bandId": 1,
      "count": 1
    }
  ],
  "bookingDate": "2020-12-28",
  "currencyCode": "AUD",
  "productCode": "5010SYDNEY"
}
```

<h3 id="bookingavailabilitytourgrades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» ageBands|body|[object]|false|**array** of ageBand objects|
|» » bandId|body|[bandId](#schemabandid)|false|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » count|body|integer|false|**numeric count** of number of travelers in *this* age band|
|» bookingDate|body|string|false|**date** to enquire about available tour grades for *this* product (must be in the future)|
|» currencyCode|body|string|false|**currency code** for the currency in which to display pricing information|
|» productCode|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ageBands": [
        {
          "bandId": 1,
          "bandTotal": 42.41,
          "bandTotalFormatted": "$42.41",
          "count": 1,
          "currencyCode": "AUD",
          "pricePerTraveler": 42.41,
          "pricePerTravelerFormatted": "$42.41"
        }
      ],
      "ageBandsRequired": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingDate": "2020-02-28",
      "currencyCode": "AUD",
      "defaultLanguageCode": "en",
      "gradeCode": "24HOUR",
      "gradeDepartureTime": "",
      "gradeDescription": "Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use",
      "gradeTitle": "24 Hour Classic Ticket ",
      "langServices": {
        "de/SERVICE_AUDIO": "German - Audio",
        "en/SERVICE_AUDIO": "English - Audio",
        "es/SERVICE_AUDIO": "Spanish - Audio",
        "fr/SERVICE_AUDIO": "French - Audio",
        "ja/SERVICE_AUDIO": "Japanese - Audio",
        "ko/SERVICE_AUDIO": "Korean - Audio",
        "zh/SERVICE_AUDIO": "Chinese - Audio"
      },
      "merchantNetPrice": 42.41,
      "merchantNetPriceFormatted": "$42.41",
      "retailPrice": 53.1,
      "retailPriceFormatted": "$53.10",
      "sortOrder": 1,
      "unavailableReason": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "ageBands": [
        {
          "bandId": 1,
          "bandTotal": 56.79,
          "bandTotalFormatted": "$56.79",
          "count": 1,
          "currencyCode": "AUD",
          "pricePerTraveler": 56.79,
          "pricePerTravelerFormatted": "$56.79"
        }
      ],
      "ageBandsRequired": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingDate": "2020-02-28",
      "currencyCode": "AUD",
      "defaultLanguageCode": "en",
      "gradeCode": "48HOUR",
      "gradeDepartureTime": "",
      "gradeDescription": "48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd",
      "gradeTitle": "48 Hour Premium Ticket ",
      "langServices": {
        "de/SERVICE_AUDIO": "German - Audio",
        "en/SERVICE_AUDIO": "English - Audio",
        "es/SERVICE_AUDIO": "Spanish - Audio",
        "fr/SERVICE_AUDIO": "French - Audio",
        "ja/SERVICE_AUDIO": "Japanese - Audio",
        "ko/SERVICE_AUDIO": "Korean - Audio",
        "zh/SERVICE_AUDIO": "Chinese - Audio"
      },
      "merchantNetPrice": 56.79,
      "merchantNetPriceFormatted": "$56.79",
      "retailPrice": 71.1,
      "retailPriceFormatted": "$71.10",
      "sortOrder": 2,
      "unavailableReason": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "ageBands": [
        {
          "bandId": 1,
          "bandTotal": 79.08,
          "bandTotalFormatted": "$79.08",
          "count": 1,
          "currencyCode": "AUD",
          "pricePerTraveler": 79.08,
          "pricePerTravelerFormatted": "$79.08"
        }
      ],
      "ageBandsRequired": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingDate": "2020-02-28",
      "currencyCode": "AUD",
      "defaultLanguageCode": "en",
      "gradeCode": "DELUXE",
      "gradeDepartureTime": "",
      "gradeDescription": "Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.",
      "gradeTitle": "48 Hour Deluxe Bus and Cruise",
      "langServices": {
        "de/SERVICE_AUDIO": "German - Audio",
        "en/SERVICE_AUDIO": "English - Audio",
        "es/SERVICE_AUDIO": "Spanish - Audio",
        "fr/SERVICE_AUDIO": "French - Audio",
        "ja/SERVICE_AUDIO": "Japanese - Audio",
        "ko/SERVICE_AUDIO": "Korean - Audio",
        "zh/SERVICE_AUDIO": "Chinese - Audio"
      },
      "merchantNetPrice": 79.08,
      "merchantNetPriceFormatted": "$79.08",
      "retailPrice": 99,
      "retailPriceFormatted": "$99.00",
      "sortOrder": 3,
      "unavailableReason": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    {
      "ageBands": [
        {
          "bandId": 1,
          "bandTotal": 103.04,
          "bandTotalFormatted": "$103.04",
          "count": 1,
          "currencyCode": "AUD",
          "pricePerTraveler": 103.04,
          "pricePerTravelerFormatted": "$103.04"
        }
      ],
      "ageBandsRequired": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "available": true,
      "bookingDate": "2020-02-28",
      "currencyCode": "AUD",
      "defaultLanguageCode": "en",
      "gradeCode": "TG1",
      "gradeDepartureTime": "",
      "gradeDescription": "Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.",
      "gradeTitle": "48Hour Deluxe PLUS Attractions",
      "langServices": {
        "de/SERVICE_AUDIO": "German - Audio",
        "en/SERVICE_AUDIO": "English - Audio",
        "es/SERVICE_AUDIO": "Spanish - Audio",
        "fr/SERVICE_AUDIO": "French - Audio",
        "ja/SERVICE_AUDIO": "Japanese - Audio",
        "ko/SERVICE_AUDIO": "Korean - Audio",
        "zh/SERVICE_AUDIO": "Chinese - Audio"
      },
      "merchantNetPrice": 103.04,
      "merchantNetPriceFormatted": "$103.04",
      "retailPrice": 129,
      "retailPriceFormatted": "$129.00",
      "sortOrder": 4,
      "unavailableReason": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    }
  ],
  "dateStamp": "2020-02-10T16:57:56+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "CDE_BRAINTREE": {
      "APPAY": "sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj",
      "GPAY": "sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj",
      "PP": "sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj"
    }
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingavailabilitytourgrades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingavailabilitytourgrades-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|none|
|» ageBands|[object]|false|none|**array** of age band objects describing the age bands and respective passenger counts allowed to book *this* tour grade; `null` if `ageBandsRequired` is filled and `available` is `false`|
|» ageBandsRequired|[[object]]|false|none|**array of arrays** of age band objects describing the traveler mixes eligible to book *this* tour grade; `null` if `ageBands` is filled and `available` is `true`<br>- **note**: multiple objects; structure will depend on available tour grades – see response sample for an example, but the exact result you receive will differ<br>|
|» available|boolean|false|none|**indicator** - `true` if this tour grade is available to be booked according to the traveler mix specified|
|» bookingDate|string|false|none|**date** on which *this* tour grade operates|
|» currencyCode|string|false|none|**currency code for the specified currency** (will be `'ERROR'` if `available` is `false`)|
|» defaultLanguageCode|string|false|none|**language code for standard langauge** for *this* product|
|» gradeCode|string|false|none|**alphanumeric identifier** of *this* tour grade|
|» gradeDepartureTime|string|false|none|**time** of *this* product|
|» gradeDescription|string|false|none|**natural-language description** of the tour grade|
|» gradeTitle|string|false|none|**natural-language title** of the tour grade|
|» langServices|object|false|none|**object** detailing language services available for *this* product** (will be `null` if `available` is `false`)|
|» merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* tour grade<br>**Note**: will be `0` if `available` is `false`<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* tour grade<br>**Note**: will be empty if `available` is `false`<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» retailPrice|number|false|none|**numeric suggested retail price** for *this* tour grade<br>**Note**: will be `0` if `available` is `false`<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» retailPriceFormatted|string|false|none|**currency-formatted suggested retail price** for *this* tour grade<br>**Note**: (will be '' if `available` is `false`)<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» sortOrder|integer|false|none|**sort order** for *this* tour grade availability object|
|» unavailableReason|string|false|none|**enum specifier of reason for product unavailability** (will be `null` if `available` is `true`)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/availability/tourgrades/pricingmatrix

<a id="opIdbookingAvailabilityTourgradesPricingmatrix"></a>

> Code samples

```bash
curl https://example.com/booking/availability/tourgrades/pricingmatrix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "currenctCode": "USD",
    "month": "12",
    "productCode": "2280AAHT",
    "year": "2020"
  }'
```

`POST /booking/availability/tourgrades/pricingmatrix`

Get a pricing matrix that includes availability and tour-grades for a product

Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.

- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


> Body parameter

```json
{
  "currenctCode": "USD",
  "month": "12",
  "productCode": "2280AAHT",
  "year": "2020"
}
```

<h3 id="bookingavailabilitytourgradespricingmatrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» currencyCode|body|string|false|**currency code** for the currency in which to display pricing details|
|» month|body|string|false|**month of year** (as text) by which to filter results (must be in the future)|
|» productCode|body|string|false|**alphanumeric identifier** of product about which to retrieve tour grade and pricing information|
|» year|body|string|false|**year** (as text) by which to filter results (must be in the future)|

> Example responses

> 200 Response

```json
{
  "data": {
    "bookingMonth": "2020-03",
    "dates": [
      {
        "bookingDate": "2020-03-01",
        "callForLastMinAvailability": false,
        "sortOrder": 1,
        "tourGrades": [
          {
            "gradeCode": "EB_ASTAR_SP~07:00",
            "gradeTitle": "Special: Earlybird A-Star 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 409.99,
                        "priceFormatted": "$409.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 1
          },
          {
            "gradeCode": "EB_EC130_SP~07:00",
            "gradeTitle": "Special: Earlybird EC-130 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 434.99,
                        "priceFormatted": "$434.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 2
          },
          {
            "gradeCode": "TG1~08:00",
            "gradeTitle": "Morning Departure; A-Star 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 3
          },
          {
            "gradeCode": "TG1~09:45",
            "gradeTitle": "Morning Departure; A-Star 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 4
          },
          {
            "gradeCode": "TG1~10:45",
            "gradeTitle": "Morning Departure; A-Star 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 5
          },
          {
            "gradeCode": "TG2~08:00",
            "gradeTitle": "Morning Departure; EC-130 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 6
          },
          {
            "gradeCode": "TG2~09:45",
            "gradeTitle": "Morning Departure; EC-130 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 7
          },
          {
            "gradeCode": "TG2~10:45",
            "gradeTitle": "Morning Departure; EC-130 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 8
          },
          {
            "gradeCode": "TG3~12:30",
            "gradeTitle": "Afternoon Departure; A-Star 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 9
          },
          {
            "gradeCode": "TG3~13:30",
            "gradeTitle": "Afternoon Departure; A-Star 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 10
          },
          {
            "gradeCode": "TG4~12:30",
            "gradeTitle": "Afternoon Departure; EC-130 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 11
          },
          {
            "gradeCode": "TG4~13:30",
            "gradeTitle": "Afternoon Departure; EC-130 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-01",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 12
          }
        ]
      },
      {
        "bookingDate": "2020-03-02",
        "callForLastMinAvailability": false,
        "sortOrder": 2,
        "tourGrades": [
          {
            "gradeCode": "EB_ASTAR_SP~07:00",
            "gradeTitle": "Special: Earlybird A-Star 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 409.99,
                        "priceFormatted": "$409.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 1
          },
          {
            "gradeCode": "EB_EC130_SP~07:00",
            "gradeTitle": "Special: Earlybird EC-130 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 434.99,
                        "priceFormatted": "$434.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 2
          },
          {
            "gradeCode": "TG1~08:00",
            "gradeTitle": "Morning Departure; A-Star 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 3
          },
          {
            "gradeCode": "TG1~09:45",
            "gradeTitle": "Morning Departure; A-Star 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 4
          },
          {
            "gradeCode": "TG1~10:45",
            "gradeTitle": "Morning Departure; A-Star 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 5
          },
          {
            "gradeCode": "TG2~08:00",
            "gradeTitle": "Morning Departure; EC-130 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 6
          },
          {
            "gradeCode": "TG2~09:45",
            "gradeTitle": "Morning Departure; EC-130 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 7
          },
          {
            "gradeCode": "TG2~10:45",
            "gradeTitle": "Morning Departure; EC-130 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 8
          },
          {
            "gradeCode": "TG3~12:30",
            "gradeTitle": "Afternoon Departure; A-Star 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 9
          },
          {
            "gradeCode": "TG3~13:30",
            "gradeTitle": "Afternoon Departure; A-Star 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 10
          },
          {
            "gradeCode": "TG4~12:30",
            "gradeTitle": "Afternoon Departure; EC-130 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 11
          },
          {
            "gradeCode": "TG4~13:30",
            "gradeTitle": "Afternoon Departure; EC-130 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-02",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 12
          }
        ]
      },
      {
        "bookingDate": "2020-03-03",
        "callForLastMinAvailability": false,
        "sortOrder": 3,
        "tourGrades": [
          {
            "gradeCode": "EB_ASTAR_SP~07:00",
            "gradeTitle": "Special: Earlybird A-Star 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 409.99,
                        "priceFormatted": "$409.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 1
          },
          {
            "gradeCode": "EB_EC130_SP~07:00",
            "gradeTitle": "Special: Earlybird EC-130 07:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 434.99,
                        "priceFormatted": "$434.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 2
          },
          {
            "gradeCode": "TG1~08:00",
            "gradeTitle": "Morning Departure; A-Star 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 3
          },
          {
            "gradeCode": "TG1~09:45",
            "gradeTitle": "Morning Departure; A-Star 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 4
          },
          {
            "gradeCode": "TG1~10:45",
            "gradeTitle": "Morning Departure; A-Star 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 388.72,
                        "merchantNetPriceFormatted": "$388.72",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 459.99,
                        "priceFormatted": "$459.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 5
          },
          {
            "gradeCode": "TG2~08:00",
            "gradeTitle": "Morning Departure; EC-130 08:00",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 6
          },
          {
            "gradeCode": "TG2~09:45",
            "gradeTitle": "Morning Departure; EC-130 09:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 7
          },
          {
            "gradeCode": "TG2~10:45",
            "gradeTitle": "Morning Departure; EC-130 10:45",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 410.02,
                        "merchantNetPriceFormatted": "$410.02",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 484.99,
                        "priceFormatted": "$484.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 8
          },
          {
            "gradeCode": "TG3~12:30",
            "gradeTitle": "Afternoon Departure; A-Star 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 9
          },
          {
            "gradeCode": "TG3~13:30",
            "gradeTitle": "Afternoon Departure; A-Star 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 383.4,
                        "merchantNetPriceFormatted": "$383.40",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 449.99,
                        "priceFormatted": "$449.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 10
          },
          {
            "gradeCode": "TG4~12:30",
            "gradeTitle": "Afternoon Departure; EC-130 12:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 11
          },
          {
            "gradeCode": "TG4~13:30",
            "gradeTitle": "Afternoon Departure; EC-130 13:30",
            "pricingMatrix": [
              {
                "ageBandPrices": [
                  {
                    "bandId": 1,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 1,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 404.7,
                        "merchantNetPriceFormatted": "$404.70",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 474.99,
                        "priceFormatted": "$474.99",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 1
                  },
                  {
                    "bandId": 3,
                    "maximumCountRequired": 9,
                    "minimumCountRequired": 0,
                    "prices": [
                      {
                        "currencyCode": "USD",
                        "merchantNetPrice": 0,
                        "merchantNetPriceFormatted": "$0.00",
                        "minNoOfTravellersRequiredForPrice": 1,
                        "price": 0,
                        "priceFormatted": "$0.00",
                        "sortOrder": 1
                      }
                    ],
                    "sortOrder": 2
                  }
                ],
                "bookingDate": "2020-03-03",
                "pricingUnit": "per person",
                "sortOrder": 1
              }
            ],
            "sortOrder": 12
          }
        ]
      }
    ],
    "pricingUnit": "per person"
  },
  "dateStamp": "2020-02-10T18:17:58+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingavailabilitytourgradespricingmatrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingavailabilitytourgradespricingmatrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» bookingMonth|string|false|none|**month of year** (as text) by which to filter results|
|» dates|[object]|false|none|**array of tour grade pricing objects** each detailing availability on a single day|
|» » bookingDate|string|false|none|**date** on which *this* product operates|
|» » callForLastMinAvailability|boolean|false|none|ignore (Viator only)|
|» » sortOrder|integer|false|none|**sort order** for *this* tour grade pricing object|
|» » tourGrades|[object]|false|none|**array** of tour grade pricing information objects|
|» » » gradeCode|string|false|none|**alphanumeric identifier** of the tour grade|
|» » » gradeTitle|string|false|none|**title of tour grade**|
|» » » pricingMatrix|[object]|false|none|**array of pricing objects** for *this* tour grade|
|» » » » ageBandPrices|[object]|false|none|**array** of pricing objects by age band|
|» » » » » bandId|[bandId](#schemabandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » » » maximumCountRequired|integer|false|none|**maximum number** of participants allowed for *this* tour grade|
|» » » » » minimumCountRequired|integer|false|none|**minimum number** of participants required for *this* tour grade|
|» » » » » prices|[object]|false|none|**array** of pricing detail objects|
|» » » » » » currencyCode|string|false|none|**currency code** of the currency in which pricing details are displayed|
|» » » » » » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » » » » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » » » » minNoOfTravellersRequiredForPrice|integer|false|none|none|
|» » » » » » price|number|false|none|**numeric suggested retail price** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » » » » priceFormatted|string|false|none|**currency-formatted suggested retail price** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » » » » sortOrder|integer|false|none|**sort order** *this* pricing detail object|
|» » » » » sortOrder|integer|false|none|**sort order** for *this* tour grade|
|» » » » bookingDate|string|false|none|**date** on which *this* product operates|
|» » » » pricingUnit|string|false|none|**natural-language description** of the pricing mode<br>- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information<br>|
|» » » » sortOrder|integer|false|none|**sort order** for *this* pricing object|
|» » » sortOrder|integer|false|none|**sort order** for *this* tour grade pricing object|
|» pricingUnit|string|false|none|**natural-language label** for the pricing terms of this tour grade<br>- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/book

<a id="opIdbookingBook"></a>

> Code samples

```bash
curl https://example.com/booking/book \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "booker": {
      "email": "apitest@viator.com",
      "firstname": "Homer Test",
      "surname": "Simpson Test",
      "title": "Mr"
    },
    "currencyCode": "USD",
    "demo": true,
    "items": [
      {
        "bookingQuestionAnswers": [
          {
            "answer": "0123456789, 9876543210",
            "questionId": 5
          },
          {
            "answer": "Australia, Fiji",
            "questionId": 4
          },
          {
            "answer": "01 July 2022, 31 May 2022",
            "questionId": 3
          }
        ],
        "hotelId": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "languageOptionCode": "en/SERVICE_GUIDE",
        "partnerItemDetail": {
          "distributorItemRef": "distroItemRef8348234535_1"
        },
        "pickupPoint": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "productCode": "100022P1",
        "specialRequirements": "",
        "tourGradeCode": "TG1",
        "travelDate": "2020-12-30",
        "travellers": [
          {
            "bandId": 1,
            "firstname": "Homer1",
            "leadTraveller": true,
            "surname": "Simpson Test",
            "title": "Mr"
          },
          {
            "bandId": 1,
            "firstname": "Homer2",
            "leadTraveller": true,
            "surname": "Simpson Test",
            "title": "Mr"
          }
        ]
      }
    ],
    "partnerDetail": {
      "distributorRef": "distroRef34398534535"
    }
  }'
```

`POST /booking/book`

Make a booking

For more information, see: 

  - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
  - [Booking concepts](#section/Key-concepts/Booking-concepts)
  - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
  - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
  - [Supplier communications](#section/Key-concepts/Supplier-communications)


> Body parameter

```json
{
  "booker": {
    "email": "apitest@viator.com",
    "firstname": "Homer Test",
    "surname": "Simpson Test",
    "title": "Mr"
  },
  "currencyCode": "USD",
  "demo": true,
  "items": [
    {
      "bookingQuestionAnswers": [
        {
          "answer": "0123456789, 9876543210",
          "questionId": 5
        },
        {
          "answer": "Australia, Fiji",
          "questionId": 4
        },
        {
          "answer": "01 July 2022, 31 May 2022",
          "questionId": 3
        }
      ],
      "hotelId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "languageOptionCode": "en/SERVICE_GUIDE",
      "partnerItemDetail": {
        "distributorItemRef": "distroItemRef8348234535_1"
      },
      "pickupPoint": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "productCode": "100022P1",
      "specialRequirements": "",
      "tourGradeCode": "TG1",
      "travelDate": "2020-12-30",
      "travellers": [
        {
          "bandId": 1,
          "firstname": "Homer1",
          "leadTraveller": true,
          "surname": "Simpson Test",
          "title": "Mr"
        },
        {
          "bandId": 1,
          "firstname": "Homer2",
          "leadTraveller": true,
          "surname": "Simpson Test",
          "title": "Mr"
        }
      ]
    }
  ],
  "partnerDetail": {
    "distributorRef": "distroRef34398534535"
  }
}
```

<h3 id="bookingbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» booker|body|object|false|**object** containing details about the primary contact (**note**: this contact needn't be a traveller)|
|» » cellPhone|body|string|false|**telephone number** of the lead traveler<br><br>**Note**:<br><br>  * Must be included to enable CLC communications<br>  * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information<br>|
|» » cellPhoneCountryCode|body|string|false|**country code** for the telephone number of the lead traveler<br><br>**Note**: <br><br>  * Must be included to enable CLC communications. <br>  * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information<br>|
|» » email|body|string|false|**email address** of the primary contact|
|» » firstname|body|string((.)*[\\&lt;\\&gt;%;\"\\(\\)+]+(.)*)|true|**first name** of the primary contact<br>|
|» » homePhone|body|string|false|**phone number** (home) of the primary contact|
|» » surname|body|string((.)*[\\&lt;\\&gt;%;\"\\(\\)+]+(.)*)|true|**surname** of the primary contact|
|» » title|body|string|false|**title** of the primary contact|
|» currencyCode|body|string|false|**currency code** for the currency the booking will be submitted in (you will be billed in this currency)|
|» demo|body|boolean|false|**specifier**: `true` if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`.|
|» items|body|[object]|false|**array** of items to be booked|
|» » bookingQuestionAnswers|body|[object]|false|**array** of objects containing booking questions and the answers provided for them for *this* product<br>- If a booking question is available in the `bookingQuestions` array in the response from [/product](#operation/product) for *this* product, the matching `bookingQuestionAnswers` must be passed to *this* service. <br>- If a product does not have any booking questions, you can omit the `bookingQuestionAnswers` array in your request. <br>- Any invalid or unrequired booking-question answers that are passed to *this* service will be ignored (and, no exceptions will be raised) <br>- You will need to include this array if [/product](#operation/product) returns any questions in the `bookingQuestions` array.<br>|
|» » » answer|body|string|false|**answer** to the question for the `questionId` listed (recommended length for the answer is 500 characters)<br><br>**Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example<br>|
|» » » questionId|body|integer|false|**numeric identifier** for the question (**note**: `questionId` can be retrieved from the [/product](#operation/product) service)|
|» » hotelId|body|string|false|**specifer** of the hotel<br>If [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured (as per the hotel service id field); or, use an alternative `hotelId`, such as:<br> <br> - `"notBooked"`: the customer has not yet booked their hotel<br> - `"notListed"`: the customer's hotel is not listed<br><br> If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).<br>|
|» » languageOptionCode|body|string|false|**specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.)|
|» » partnerItemDetail|body|object|false|**object** containing partner details at a per-item level|
|» » » distributorItemRef|body|string|false|**unique alphanumeric code** for the order ('itinerary') (merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in *this* object<br>- this code can be any alphanumeric string and is defined by the distributor<br>|
|» » pickupPoint|body|string|false|**details** about the hotel pick-up point (must be provided if the `hotelId` selected by the user is `'notListed'` or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup` is `true`.|
|» » productCode|body|string|false|**unique alphanumeric identifier** of the product to be booked|
|» » specialRequirements|body|string|false|**text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required|
|» » tourGradeCode|body|string|false|**specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to `'DEFAULT'`.)|
|» » travelDate|body|string|false|**date** of travel for the item in format yyyy-mm-dd|
|» » travellers|body|[object]|false|**array** of traveler names, details and whether they are the lead traveller|
|» » » bandId|body|[bandId](#schemabandid)|false|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » firstname|body|string|false|**first name** of *this* traveller|
|» » » leadTraveller|body|boolean|false|**indicator**: `true` if this traveler is the lead traveler|
|» » » surname|body|string|false|**surname** of *this* traveler|
|» » » title|body|string|false|**title** of the traveler (e.g `'Mr'`, `'Mrs'`, `'Ms'`, `'Miss'`, `'Mstr'`, `'Dr'`)|
|» partnerDetail|body|object|false|Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information<br>|
|» » distributorRef|body|string|false|**unique alphanumeric reference code** for the distributor<br>- Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.<br>- Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "bookerEmail": "apitest@viator.com",
    "bookingDate": "2020-02-11",
    "bookingStatus": {
      "amended": false,
      "cancelled": false,
      "confirmed": true,
      "failed": false,
      "level": "ITINERARY",
      "pending": false,
      "status": 3,
      "text": "Confirmed",
      "type": "CONFIRMED"
    },
    "currencyCode": "USD",
    "distributorRef": "distributorRef100000",
    "exchangeRate": 1,
    "hasVoucher": true,
    "itemSummaries": [
      {
        "applePassSupported": false,
        "appleWalletURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "barcodeOption": "tour",
        "barcodeType": "code128",
        "bookingEngineId": "FO",
        "bookingStatus": {
          "amended": false,
          "cancelled": false,
          "confirmed": true,
          "failed": false,
          "level": "ITEM",
          "pending": false,
          "status": 1,
          "text": "Paid &amp;amp; Confirmed",
          "type": "CONFIRMED"
        },
        "currencyCode": "USD",
        "departsFrom": "Las Vegas, United States",
        "departurePoint": "Traveler pickup is offered&lt;br&gt;&lt;br&gt;",
        "departurePointAddress": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "departurePointDirections": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "destId": 684,
        "distributorItemRef": "itemRef1000000",
        "hoursConfirmed": 0,
        "itemId": 580669678,
        "itineraryId": 1005851866,
        "languageServicesLanguageCode": "en",
        "lastRetailPrice": 388.72,
        "lastRetailPriceFormatted": "$388.72",
        "leadTravellerFirstname": "Homer test",
        "leadTravellerSurname": "Simpson test",
        "leadTravellerTitle": "Mr",
        "merchantCancellable": true,
        "merchantNetPrice": 388.72,
        "merchantNetPriceFormatted": "$388.72",
        "merchantTermsAndConditions": {
          "amountRefundable": "USD 412.04",
          "cancellationFromTourDate": [
            {
              "dayRangeMax": {
                "$ref": "#/components/examples/product-example-1/value/data/pas"
              },
              "dayRangeMin": 1,
              "percentageRefundable": 100,
              "policyEndTimestamp": 1585580400,
              "policyStartTimestamp": {
                "$ref": "#/components/examples/product-example-1/value/data/pas"
              }
            },
            {
              "dayRangeMax": 1,
              "dayRangeMin": 0,
              "percentageRefundable": 0,
              "policyEndTimestamp": 1585666800,
              "policyStartTimestamp": 1585580400
            }
          ],
          "merchantTermsAndConditionsType": 1,
          "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience."
        },
        "obfsId": 362208,
        "passbooks": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "pickupHotelId": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "pickupHotelName": "null",
        "price": 412.04,
        "priceFormatted": "$412.04",
        "priceUSD": 412.04,
        "productCode": "2280AAHT",
        "productPulledDown": false,
        "productTitle": "Grand Canyon All-American Helicopter Tour",
        "productWidgetList": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rnplInfo": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rulesApplied": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "savingAmount": 0,
        "savingAmountFormated": "$0.00",
        "sortOrder": 0,
        "startingTime": "8:00 AM",
        "supplierName": "Sundance Helicopters",
        "supplierPhoneNumber": "+1 123 456 7890",
        "termsAndConditions": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "tourGradeCode": "TG1~08:00",
        "tourGradeDescription": "Morning Departure; A-Star 08:00 (TG1~08:00)",
        "travelDate": "2020-03-31",
        "travellerAgeBands": [
          {
            "ageBandId": 1,
            "count": 1,
            "description": "Adult",
            "pluralDescription": "Adults",
            "sortOrder": 0
          }
        ],
        "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678",
        "voucherOption": "VOUCHER_E",
        "voucherRequirements": "You can present either a paper or an electronic voucher for this activity.",
        "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false",
        "vouchers": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      }
    ],
    "itineraryId": 1005851866,
    "omniPreRuleList": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "paypalRedirectURL": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "rulesApplied": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "securityToken": "4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
    "sortOrder": 0,
    "totalPrice": 412.04,
    "totalPriceFormatted": "$412.04",
    "totalPriceUSD": 412.04,
    "userId": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
    "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false"
  },
  "dateStamp": "2020-02-11T16:55:47+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingbook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» bookerEmail|string|false|none|**email address** of the entity that made *this* booking|
|» bookingDate|string|false|none|**date** of *this* booking|
|» bookingStatus|[bookingStatus_itinerary](#schemabookingstatus_itinerary)|false|none|**object** containing itinerary booking status information|
|» currencyCode|string|false|none|**currency code** of the currency in which *this* booking was made|
|» distributorRef|string|false|none|ignore (Viator only)|
|» exchangeRate|integer|false|none|ignore (Viator only)|
|» hasVoucher|boolean|false|none|ignore (Viator only)|
|» itemSummaries|[object]|false|none|**array** of item summaries|
|» » applePassSupported|boolean|false|none|none|
|» » barcodeOption|string|false|none|Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.|
|» » barcodeType|string|false|none|**alphanumeric code** specifying the type of barcode|
|» » bookingEngineId|[bookingEngineId-response](#schemabookingengineid-response)|false|none|[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately<br>- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br>|
|» » bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» » currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed for *this* item|
|» » departsFrom|string|false|none|**natural-language description** of *this* item's departure location|
|» » departurePoint|string|false|none|**natural-language description** of *this* item's departure point|
|» » departurePointAddress|string|false|none|**HTML-formatted address** of *this* item's departure point|
|» » departurePointDirections|string|false|none|**natural-language description** of directions regarding *this* item's departure point|
|» » destId|integer|false|none|**unique numeric identifer** of the destination of *this* item|
|» » distributorItemRef|string|false|none|ignore (Viator only)|
|» » hoursConfirmed|string|false|none|The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.<br>|
|» » itemId|integer|false|none|**numeric identifer** of *this* item|
|» » itineraryId|integer|false|none|Ignore (Viator only)|
|» » languageServicesCode|string|false|none|**code** for the language that this product operates in|
|» » lastRetailPrice|number|false|none|**numeric merchant net rate** of *this* item|
|» » lastRetailPriceFormatted|string|false|none|**currency-formatted merchant net rate** of *this* item|
|» » leadTravellerFirstname|string|false|none|**first name** of the lead traveler|
|» » leadTravellerSurname|string|false|none|**surname** of the lead traveler|
|» » leadTravellerTitle|string|false|none|**title** of the lead traveler's name|
|» » merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* item"<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantTermsAndConditions|object|false|none|none|
|» » » amountRefundable|string|false|none|**currency-formatted** amount that will be refunded if the cancellation is processed now.|
|» » » cancellationFromTourDate|[object]|false|none|**array** of cancellation policy objects|
|» » » » dayRangeMax|integer|false|none|**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness|
|» » » » dayRangeMin|integer|false|none|**number** of days prior to the tour start date that *this* policy window ends|
|» » » » percentageRefundable|integer|false|none|**percentage** of total price refundable if cancelled within *this* time window|
|» » » » policyEndTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy ends|
|» » » » policyStartTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy commences|
|» » » termsAndConditions|string|false|none|**natural-language description** of the terms and conditions for *this* product|
|» » obfsId|integer|false|none|ignore (Viator only)|
|» » passbooks|string|false|none|ignore (Viator only)|
|» » pickupHotelId|string|false|none|**identifer** for the pick-up hotel|
|» » pickupHotelName|string|false|none|**natural-language name** of the pick-up hotel|
|» » price|number|false|none|**numeric merchant total price** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceFormatted|string|false|none|**currency-formatted merchant total price** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceUSD|number|false|none|**numeric merchant total price** in USD|
|» » productCode|string|false|none|**unique alphanumeric identifier** of *this* product|
|» » productPulledDown|boolean|false|none|ignore (Viator only)|
|» » productTitle|string|false|none|**natural-language title** of *this* product|
|» » productWidgetList|string|false|none|ignore (Viator only)|
|» » rulesApplied|string|false|none|ignore (Viator only)|
|» » savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» » savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» » sortOrder|integer|false|none|**sort order** of *this* item summary|
|» » startingTime|string|false|none|**starting time** of this product|
|» » supplierName|string|false|none|**natural-language name** of *this* product's supplier|
|» » supplierPhoneNumber|string|false|none|**telephone number** of *this* product's supplier|
|» » termsAndConditions|object|false|none|ignore (Viator only)|
|» » tourGradeCode|string|false|none|**identifer** of *this* tour grade|
|» » tourGradeDescription|string|false|none|**natural-language description** of *this* tour grade|
|» » travelDate|string|false|none|**date** of travel|
|» » travellerAgeBands|[object]|false|none|**array** of objects detailing the traveler age bands|
|» » » ageBandId|[ageBandId](#schemaagebandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » count|integer|false|none|**numeric** number of travelers in *this* age band|
|» » » description|string|false|none|**natural-language description** (singular) of *this* age band|
|» » » pluralDescription|string|false|none|**natural-language description** (plural) of *this* age band|
|» » » sortOrder|integer|false|none|**sort order** for *this* age band|
|» » voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» » voucherOption|string|false|none|ignore (Viator only)|
|» » voucherRequirements|string|false|none|**natural-language description** of the requirements pertaining to this voucher|
|» » voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|
|» » vouchers|string|false|none|ignore (Viator only)|
|» itineraryId|integer|false|none|ignore (Viator only)|
|» omniPreRuleList|string|false|none|ignore (Viator only)|
|» paypalRedirectURL|string|false|none|ignore (Viator only)|
|» rulesApplied|string|false|none|ignore (Viator only)|
|» securityToken|string|false|none|ignore (Viator only)|
|» sortOrder|integer|false|none|**sort order** for *this* object|
|» totalPrice|number|false|none|**numeric merchant total price** for *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceFormatted|string|false|none|**currency-formatted merchant total price** for *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceUSD|number|false|none|**numeric merchant total price** of *this* booking in USD|
|» userId|string|false|none|ignore (Viator only)|
|» voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » bookingEngineId|UF|
|» » bookingEngineId|OR|
|» » bookingEngineId|FO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/calculateprice

<a id="opIdbookingCalculateprice"></a>

> Code samples

```bash
curl https://example.com/booking/calculateprice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "currencyCode": "USD",
    "items": [
      {
        "productCode": "5010SYDNEY",
        "tourGradeCode": "24HOUR",
        "travelDate": "2020-12-12",
        "travellers": [
          {
            "bandId": 1
          }
        ]
      }
    ]
  }'
```

`POST /booking/calculateprice`

Confirm the price of a tour / activity prior to booking

For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  

- **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time


> Body parameter

```json
{
  "currencyCode": "USD",
  "items": [
    {
      "productCode": "5010SYDNEY",
      "tourGradeCode": "24HOUR",
      "travelDate": "2020-12-12",
      "travellers": [
        {
          "bandId": 1
        }
      ]
    }
  ]
}
```

<h3 id="bookingcalculateprice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» currencyCode|body|string|false|**currency code** for the currency in which to display pricing details|
|» items|body|[object]|false|**array** of travel detail objects|
|» » productCode|body|string|false|**unique alphanumeric identifier** of the product the total price for which you which to calculate|
|» » tourGradeCode|body|string|false|**alphanumeric identifier** for the tour grade for which to calculate the total price|
|» » travelDate|body|string|false|**date** for which to calculate the total price (must be in the future)|
|» » travellers|body|[object]|false|**array of objects** detailing the age bands for which to calculate the total price|
|» » » bandId|body|[bandId](#schemabandid)|false|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "currencyCode": "USD",
    "hasPromoCode": false,
    "itinerary": {
      "bookerEmail": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "bookingDate": "2020-02-10",
      "bookingStatus": {
        "amended": false,
        "cancelled": false,
        "confirmed": false,
        "failed": false,
        "level": "ITINERARY",
        "pending": false,
        "status": 0,
        "text": "Waiting to be Booked",
        "type": "WAITING"
      },
      "currencyCode": "USD",
      "distributorRef": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "exchangeRate": 1,
      "hasVoucher": false,
      "itemSummaries": [
        {
          "applePassSupported": false,
          "appleWalletURL": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "barcodeOption": "perperson",
          "barcodeType": "qrcode",
          "bookingEngineId": "UF",
          "bookingStatus": {
            "amended": false,
            "cancelled": false,
            "confirmed": false,
            "failed": false,
            "level": "ITEM",
            "pending": false,
            "status": 0,
            "text": "Waiting to be Booked",
            "type": "WAITING"
          },
          "currencyCode": "USD",
          "departsFrom": "The Rocks, Australia",
          "departurePoint": "You may start this tour at any of the stops listed.",
          "departurePointAddress": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "departurePointDirections": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "destId": 357,
          "distributorItemRef": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "hoursConfirmed": 0,
          "itemId": 580659274,
          "itineraryId": 1005847086,
          "languageServicesLanguageCode": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "lastRetailPrice": 29.53,
          "lastRetailPriceFormatted": "$29.53",
          "leadTravellerFirstname": "",
          "leadTravellerSurname": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "leadTravellerTitle": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "merchantCancellable": true,
          "merchantNetPrice": 29.53,
          "merchantNetPriceFormatted": "$29.53",
          "obfsId": 31185,
          "passbooks": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "pickupHotelId": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "pickupHotelName": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "price": 31.3,
          "priceFormatted": "$31.30",
          "priceUSD": 31.3,
          "productCode": "5010SYDNEY",
          "productPulledDown": false,
          "productTitle": "Big Bus Sydney and Bondi Hop-on Hop-off Tour",
          "productWidgetList": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "rnplInfo": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "rulesApplied": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "savingAmount": 0,
          "savingAmountFormated": "$0.00",
          "sortOrder": 0,
          "startingTime": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "supplierName": "Big Bus Tours",
          "supplierPhoneNumber": "+1 123 456 7890",
          "termsAndConditions": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "tourGradeCode": "24HOUR",
          "tourGradeDescription": "24 Hour Classic Ticket  (24HOUR)",
          "travelDate": "2020-03-03",
          "travellerAgeBands": [
            {
              "ageBandId": 1,
              "count": 1,
              "description": "Adult",
              "pluralDescription": "Adults",
              "sortOrder": 0
            }
          ],
          "voucherKey": "",
          "voucherOption": "VOUCHER_E",
          "voucherRequirements": "You can present either a paper or an electronic voucher for this activity.",
          "voucherURL": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "vouchers": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          }
        }
      ],
      "itineraryId": 1005847086,
      "omniPreRuleList": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "paypalRedirectURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "rulesApplied": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "securityToken": "595798ee27965d5178ab6a800f9b796ed7efac8fd303086e4113e1e99848932c",
      "sortOrder": 0,
      "totalPrice": 31.3,
      "totalPriceFormatted": "$31.30",
      "totalPriceUSD": 31.3,
      "userId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "voucherKey": "",
      "voucherURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      }
    },
    "itineraryFromPrice": 29.53,
    "itineraryFromPriceFormatted": "$29.53",
    "itineraryNewPrice": 29.53,
    "itineraryNewPriceFormatted": "$29.53",
    "itinerarySaving": 0,
    "itinerarySavingFormatted": "$0.00",
    "paymentGatewayInfo": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "promoCode": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "promoCodeExpired": false,
    "promoCodeValid": false,
    "rulesApplied": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    }
  },
  "dateStamp": "2020-02-10T18:26:49+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingcalculateprice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingcalculateprice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» currencyCode|string|false|none|**specifier of the currency** in which pricing details are displayed|
|» hasPromoCode|boolean|false|none|ignore (Viator only)|
|» itinerary|object|false|none|**summary results** for all itinerary items|
|» » bookerEmail|string|false|none|ignore (Viator only)|
|» » bookingDate|string|false|none|**date** of *this* booking|
|» » bookingStatus|[bookingStatus_itinerary](#schemabookingstatus_itinerary)|false|none|**object** containing itinerary booking status information|
|» » currencyCode|string|false|none|**specifier** of the currency in which pricing details are displayed|
|» » distributorRef|string|false|none|ignore (Viator only)|
|» » exchangeRate|integer|false|none|ignore (Viator only)|
|» » hasVoucher|boolean|false|none|ignore (Viator only)|
|» » itemSummaries|[object]|false|none|**array** of item summaries|
|» » » applePassSupported|boolean|false|none|ignore (Viator only)|
|» » » barcodeOption|string|false|none|Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.|
|» » » barcodeType|string|false|none|**alphanumeric specifier** of the barcode type|
|» » » bookingEngineId|[bookingEngineId-response](#schemabookingengineid-response)|false|none|[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately<br>- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br>|
|» » » bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» » » currencyCode|string|false|none|**currency code** for the currency in which pricing details are displayed|
|» » » departsFrom|string|false|none|**natural-language description** of *this* item's general departure location|
|» » » departurePoint|string|false|none|**HTML-formatted description** of *this* product's departure location(s)|
|» » » departurePointAddress|string|false|none|**HTML-formatted description** of *this* product's departure address|
|» » » departurePointDirections|string|false|none|**HTML-formatted descriptive notes** about *this* product's departure location|
|» » » destId|integer|false|none|**unique numeric id** of the destination associated with *this* product|
|» » » distributorItemRef|string|false|none|ignore (Viator only)|
|» » » hoursConfirmed|integer|false|none|The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.<br>|
|» » » itemId|integer|false|none|ignore (Viator only)|
|» » » itineraryId|integer|false|none|ignore (Viator only)|
|» » » languageServicesLanguageCode|string|false|none|ignore (Viator only)|
|» » » lastRetailPrice|number|false|none|ignore (Viator only)|
|» » » lastRetailPriceFormatted|string|false|none|**currency-formatted most recent retail price** for *this* item|
|» » » leadTravellerFirstname|string|false|none|ignore (Viator only)|
|» » » leadTravellerSurname|string|false|none|ignore (Viator only)|
|» » » leadTravellerTitle|string|false|none|**title** of the lead traveler's name|
|» » » merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» » » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* product<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* product<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » obfsId|integer|false|none|ignore (Viator only)|
|» » » passbooks|string|false|none|ignore (Viator only)|
|» » » pickupHotelId|integer|false|none|ignore (Viator only)|
|» » » pickupHotelName|string|false|none|ignore (Viator only)|
|» » » price|number|false|none|**numeric suggested retail price** for *this* product<br>- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» » » priceFormatted|string|false|none|**currency-formatted suggested retail price** for *this* product<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » priceUSD|number|false|none|**numeric price of *this* product** in USD|
|» » » productCode|string|false|none|**unique alphanumeric identifier** of *this* product|
|» » » productPulledDown|boolean|false|none|ignore (Viator only)|
|» » » productTitle|string|false|none|**natural-language title** of *this* product|
|» » » productWidgetList|string|false|none|ignore (Viator only)|
|» » » rulesApplied|[string]|false|none|**array** of rules applied to *this* item|
|» » » savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» » » savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» » » sortOrder|integer|false|none|**sort-order** of *this* item summary|
|» » » startingTime|string|false|none|**starting time** of the tour in the supplier's local time zone|
|» » » supplierName|string|false|none|**natural-language name** of *this* product's supplier|
|» » » supplierPhoneNumber|string|false|none|**telephone number** of the supplier|
|» » » termsAndConditions|string|false|none|ignore (Viator only)|
|» » » tourGradeCode|string|false|none|**alphanumeric specifier** of the tour grade|
|» » » tourGradeDescription|string|false|none|**natural-language description** of *this* item's tour grade|
|» » » travelDate|string|false|none|**date** on which *this* product will operate (in the supplier's local time zone)|
|» » » travellerAgeBands|[object]|false|none|**array** of age-band objects|
|» » » » ageBandId|[ageBandId](#schemaagebandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » » count|integer|false|none|**number of travelers in *this* age band|
|» » » » description|string|false|none|**natural-language** description (singular) of *this* age band|
|» » » » pluralDescription|string|false|none|**natural-language** description (plural) of *this* age band|
|» » » » sortOrder|integer|false|none|**sort order** for *this* age band|
|» » » voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» » » voucherOption|string|false|none|**alphanumeric specifier** of the relevant voucher option|
|» » » voucherRequirements|string|false|none|**natural-language description** of the voucher requirements for this tour (**note:** Should agree with value in `voucherOption` field)|
|» » » voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|
|» » » vouchers|string|false|none|ignore (Viator only)|
|» » itineraryId|integer|false|none|**numeric identifier** for *this* order|
|» » omniPreRuleList|integer|false|none|ignore (Viator only)|
|» » paypalRedirectURL|string|false|none|ignore (Viator only)|
|» » rulesApplied|[string]|false|none|ignore (Viator only)|
|» » securityToken|string|false|none|ignore (Viator only)|
|» » sortOrder|integer|false|none|**sort order** for *this* itinerary|
|» » totalPrice|number|false|none|**numeric total price (total)** for *this* order<br>- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» » totalPriceFormatted|string|false|none|**currency-formatted total price (including transaction fee)** for *this* order<br>- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)<br>|
|» » totalPriceUSD|number|false|none|**numeric total price** of *this* order in USD|
|» » userId|integer|false|none|ignore (Viator only)|
|» » voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» » voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|
|» itineraryFromPrice|number|false|none|ignore (Viator only)|
|» itineraryFromPriceFormatted|string|false|none|ignore (Viator only)|
|» itineraryNewPrice|number|false|none|ignore (Viator only)|
|» itineraryNewPriceFormatted|string|false|none|ignore (Viator only)|
|» itinerarySaving|integer|false|none|ignore (Viator only)|
|» itinerarySavingFormatted|string|false|none|ignore (Viator only)|
|» paymentGatewayInfo|string|false|none|ignore (Viator only)|
|» promoCode|string|false|none|ignore (Viator only)|
|» promoCodeExpired|boolean|false|none|ignore (Viator only)|
|» promoCodeValid|boolean|false|none|ignore (Viator only)|
|» rulesApplied|[string]|false|none|ignore (Viator only)|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » bookingEngineId|UF|
|» » » bookingEngineId|OR|
|» » » bookingEngineId|FO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/hotels

<a id="opIdbookingHotels"></a>

> Code samples

```bash
curl https://example.com/booking/hotels \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /booking/hotels`

Get hotel pick-ups
Lists the hotel pickups available for either a product or a destination


<h3 id="bookinghotels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|productCode|query|string|false|**unique alphanumeric identifier** of the product|
|destId|query|integer|false|**unique numeric identifier** of the destination|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": "35 Main St",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Hahndorf",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1001419406",
      "latitude": -35.031216,
      "longitude": 138.81102,
      "name": "The Hahndorf Inn",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5245",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 1
    },
    {
      "address": "Lot 112 Neagles Rock Road",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "10984108",
      "latitude": -33.863453,
      "longitude": 138.61,
      "name": "Neagles Retreat Villas",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 2
    },
    {
      "address": "310 Main North Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "11205163",
      "latitude": -33.831417,
      "longitude": 138.60942,
      "name": "The Mill Apartments",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 3
    },
    {
      "address": "14 Bridge St, Old Reynella",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Reynella",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1255430",
      "latitude": -35.08964,
      "longitude": 138.53828,
      "name": "St. Francis Winery",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5161",
      "productCodes": [
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1"
      ],
      "sortOrder": 4
    },
    {
      "address": "Motel 574 Main North Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Enfield",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1255431",
      "latitude": -34.845764,
      "longitude": 138.60115,
      "name": "Adelaide Manor",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5094",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 5
    },
    {
      "address": "471 Main North Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Enfield",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1255432",
      "latitude": -34.85016,
      "longitude": 138.60077,
      "name": "Comfort Inn Manhattan",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5085",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 6
    },
    {
      "address": "Morphettville Motor Inn 444 - 446 Anzac Hwy",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Camden Park",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1257946",
      "latitude": -34.97334,
      "longitude": 138.54086,
      "name": "Morphettville Motor Inn",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5038",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 7
    },
    {
      "address": "1 Nottage Tce, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Medindie",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1257951",
      "latitude": -34.89378,
      "longitude": 138.60353,
      "name": "Comfort Inn Scottys",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5081",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 8
    },
    {
      "address": "White Hut Road, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1262285",
      "latitude": -33.820854,
      "longitude": 138.61382,
      "name": "Clare Country Club",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 9
    },
    {
      "address": "74a Main North Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1262636",
      "latitude": -33.848263,
      "longitude": 138.6178,
      "name": "Clare Valley Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 10
    },
    {
      "address": "Quarry Rd, Sevenhill via Clare Valley",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1289197",
      "latitude": -33.87362,
      "longitude": 138.6354,
      "name": "Thorn Park by the Vines",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 11
    },
    {
      "address": "141 Brebner Dr",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "West Lakes",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1301167",
      "latitude": -34.88005,
      "longitude": 138.48842,
      "name": "Lakes Hotel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5021",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 12
    },
    {
      "address": "198 Esplanade",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Largs Bay",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1301173",
      "latitude": -34.825584,
      "longitude": 138.4865,
      "name": "Largs Pier Hotel - Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5016",
      "productCodes": [
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1"
      ],
      "sortOrder": 13
    },
    {
      "address": "24 Dequetteville Tce",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Kent Town",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1301183",
      "latitude": -34.924698,
      "longitude": 138.6194,
      "name": "Adelaide Royal Coach",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5067",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "196440P1",
        "19852P6",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "21300P2",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5",
        "40887P6",
        "65854P1",
        "65854P2",
        "65854P3",
        "65854P6",
        "6763ULTIMATE",
        "67705P1",
        "67705P2"
      ],
      "sortOrder": 14
    },
    {
      "address": "540 Marion Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Marion",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1320631",
      "latitude": -34.97743,
      "longitude": 138.55557,
      "name": "Marion Motel and Apartments",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5038",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 15
    },
    {
      "address": "17 Colley Tce, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Glenelg",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1579776",
      "latitude": -34.97872,
      "longitude": 138.51253,
      "name": "Glenelg Beachside Apartments",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5045",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 16
    },
    {
      "address": "373 Glen Osmond Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Glen Osmond",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1584919",
      "latitude": -34.9604,
      "longitude": 138.64185,
      "name": "Jacksons Motor Inn",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5064",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 17
    },
    {
      "address": "288-292 Main North Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Prospect",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1589097",
      "latitude": -34.87285,
      "longitude": 138.60158,
      "name": "Comfort Inn &amp; Suites Sombrero",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5082",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 18
    },
    {
      "address": "Warenda Road, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1626470",
      "latitude": -33.854675,
      "longitude": 138.62292,
      "name": "Brice Hill Country Lodge",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 19
    },
    {
      "address": "Clare Valley, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1630042",
      "latitude": -33.84362,
      "longitude": 138.63342,
      "name": "Springfarm Cottage",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 20
    },
    {
      "address": "647 North East Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Gilles Plains",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1633907",
      "latitude": -34.852222,
      "longitude": 138.665,
      "name": "Highlander Hotel Bar Kitchen Rooftop",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5086",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 21
    },
    {
      "address": "277 Glen Osmond Road, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Frewville",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1661623",
      "latitude": -34.95136,
      "longitude": 138.63423,
      "name": "Welcome Inn 277",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5063",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 22
    },
    {
      "address": "325 Main North Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1729496",
      "latitude": -33.829445,
      "longitude": 138.60802,
      "name": "Comfort Inn Clare Central",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 23
    },
    {
      "address": "73 St Andrews Bvd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Normanville",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "1803904",
      "latitude": -35.46194,
      "longitude": 138.31508,
      "name": "Links Lady Bay Resort",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5204",
      "productCodes": [
        "200245P4"
      ],
      "sortOrder": 24
    },
    {
      "address": "406 Sir Donald Bradman Dr, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Brooklyn Park",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2076447",
      "latitude": -34.93242,
      "longitude": 138.5395,
      "name": "Adelaide Airport Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5032",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "21300P1",
        "21300P7",
        "21300P9",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 25
    },
    {
      "address": "10 Main St",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Mawson Lakes",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2122469",
      "latitude": -34.80973,
      "longitude": 138.61734,
      "name": "Mawson Lakes Hotel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5095",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1"
      ],
      "sortOrder": 26
    },
    {
      "address": "647 North East Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Gilles Plains",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2218971",
      "latitude": -34.85213,
      "longitude": 138.6651,
      "name": "Comfort Inn Riverfront Berriedale",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5086",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 27
    },
    {
      "address": "72 Warenda Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2453318",
      "latitude": -33.856297,
      "longitude": 138.62358,
      "name": "St Helens Country Cottages",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 28
    },
    {
      "address": "190 Gover St, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2479967",
      "latitude": -34.904903,
      "longitude": 138.5927,
      "name": "North Adelaide Boutique Stays Accommodation",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5006",
      "productCodes": [
        "21300P1",
        "21300P11",
        "21300P14",
        "21300P6",
        "21300P7",
        "21300P9"
      ],
      "sortOrder": 29
    },
    {
      "address": "199 Glen Osmond Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Frewville",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2482535",
      "latitude": -34.94779,
      "longitude": 138.62839,
      "name": "Frewville Motor Inn",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5063",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5",
        "6763ULTIMATE"
      ],
      "sortOrder": 30
    },
    {
      "address": "493 Portrush Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Glenunga",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2501758",
      "latitude": -34.94681,
      "longitude": 138.6427,
      "name": "Best Western Adelaide Granada Motor Inn",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5064",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 31
    },
    {
      "address": "33 - 37 Main St",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Mawson Lakes",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2575802",
      "latitude": -34.806805,
      "longitude": 138.61667,
      "name": "Quest Mawson Lakes",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5095",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "21300P10",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1"
      ],
      "sortOrder": 32
    },
    {
      "address": "859 Main North Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Pooraka",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2628301",
      "latitude": -34.82837,
      "longitude": 138.61504,
      "name": "Pavlos Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5095",
      "productCodes": [
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 33
    },
    {
      "address": "23-25 Church St, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Penola",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2640160",
      "latitude": -37.381992,
      "longitude": 140.83783,
      "name": "Alexander Cameron Suites",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5277",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 34
    },
    {
      "address": "151 St Georges Tce",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2773041",
      "latitude": -33.82023,
      "longitude": 138.58174,
      "name": "Patly Hill Farm",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 35
    },
    {
      "address": "corner of South &amp; West Terrace, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Stansbury",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2774580",
      "latitude": -34.91078,
      "longitude": 137.79254,
      "name": "Oyster Court Motel &amp; Holiday Units",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5582",
      "productCodes": [
        "200245P4"
      ],
      "sortOrder": 36
    },
    {
      "address": "1274 South Rd, Adelaide",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Tonsley",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2786536",
      "latitude": -35.00457,
      "longitude": 138.5747,
      "name": "Tonsley Hotel Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5042",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 37
    },
    {
      "address": "445 Torrens Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Woodville Park",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "2853212",
      "latitude": -34.87638,
      "longitude": 138.54959,
      "name": "Lindy Lodge Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5011",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 38
    },
    {
      "address": "516 Glynburn Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Burnside",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3002527",
      "latitude": -34.93765,
      "longitude": 138.66063,
      "name": "The Feathers Hotel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5066",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 39
    },
    {
      "address": "20 Mount Barker Rd, (Corner Gill Terrace)",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Glen Osmond",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3235180",
      "latitude": -34.9643,
      "longitude": 138.6466,
      "name": "Tollgate Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5064",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 40
    },
    {
      "address": "9 Warenda Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3240942",
      "latitude": -33.846573,
      "longitude": 138.62152,
      "name": "Riesling Trail and Clare Valley Cottages",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 41
    },
    {
      "address": "Sevenhill, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3281019",
      "latitude": -33.90826,
      "longitude": 138.6238,
      "name": "Skillogalee Cottages",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 42
    },
    {
      "address": "191 Main North Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3516966",
      "latitude": -33.835503,
      "longitude": 138.61389,
      "name": "Bentleys Hotel Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 43
    },
    {
      "address": "220 Spring Gully Rd, ",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "3668974",
      "latitude": -33.866726,
      "longitude": 138.59903,
      "name": "Clare View Accommodation",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 44
    },
    {
      "address": "Motel 393 Main North Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Enfield",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "4257826",
      "latitude": -34.86265,
      "longitude": 138.60156,
      "name": "Enfield Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5085",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "120684P2",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 45
    },
    {
      "address": "Lot 136 Main North Road",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "4345469",
      "latitude": -33.864716,
      "longitude": 138.62134,
      "name": "Discovery Parks - Clare",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 46
    },
    {
      "address": "16-28 Adelaide Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Stansbury",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "4856431",
      "latitude": -34.903656,
      "longitude": 137.79562,
      "name": "Stansbury Holiday Motel",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5582",
      "productCodes": [
        "200245P4"
      ],
      "sortOrder": 47
    },
    {
      "address": "135 Esplanade, cnr Jetty Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Brighton",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "4861044",
      "latitude": -35.01719,
      "longitude": 138.51463,
      "name": "Esplanade Hotel Adelaide",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5048",
      "productCodes": [
        "181322P2"
      ],
      "sortOrder": 48
    },
    {
      "address": "off Gaelic Cemetery Road, Stanley Flat",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "4971218",
      "latitude": -33.78769,
      "longitude": 138.60567,
      "name": "Wuthering Heights",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5034",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 49
    },
    {
      "address": "431 Bungaree Road, (Off Highway B82)",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "5004100",
      "latitude": -33.7714,
      "longitude": 138.5837,
      "name": "Bungaree Station",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 50
    },
    {
      "address": "18 Victoria Rd",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "6029450",
      "latitude": -33.83657,
      "longitude": 138.61197,
      "name": "Clare Valley Heritage Retreat",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": [
        "56243P2",
        "56243P3",
        "56243P6"
      ],
      "sortOrder": 51
    },
    {
      "address": "29 Hope St",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Clare",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "6461957",
      "latitude": -33.83995,
      "longitude": 138.61311,
      "name": "The Reserve Apartment",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5453",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 52
    },
    {
      "address": "The Watson 33 Warwick St",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Walkerville",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "7755816",
      "latitude": -34.896725,
      "longitude": 138.61743,
      "name": "The Watson Adelaide - Art Series",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5081",
      "productCodes": [
        "119946P4",
        "119946P5",
        "119946P6",
        "119946P8",
        "119946P9",
        "120684P2",
        "120684P5",
        "142696P2",
        "142696P5",
        "200245P1",
        "200245P4",
        "200245P5",
        "200245P7",
        "201625P1",
        "215244P1",
        "233580P1",
        "233580P2",
        "233580P4",
        "238603P1",
        "40887P5"
      ],
      "sortOrder": 53
    },
    {
      "address": "Moana Tourist Park 44 Nashwauk Cres",
      "brand": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "city": "Moana",
      "destinationId": 123,
      "hotelString": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "id": "7870501",
      "latitude": -35.19921,
      "longitude": 138.47296,
      "name": "Moana Beach Tourist Park",
      "notes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "phone": "+1 123 456 7890",
      "postcode": "5169",
      "productCodes": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "sortOrder": 54
    }
  ],
  "dateStamp": "2020-02-10T18:33:02+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331004"
}
```

<h3 id="bookinghotels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookinghotels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** of hotel pick-up objects|
|» address|string|false|none|**natural-language address** of hotel pick-up point|
|» brand|string|false|none|ignore (Viator only)|
|» city|string|false|none|**natural-language name** of the destination that *this* hotel pick-up point pertains to|
|» destinationId|integer|false|none|**unique numeric identifer** of the destination that *this* hotel pick-up point pertains to|
|» hotelString|string|false|none|ignore (Viator only)|
|» id|string|false|none|**identifier** of *this* hotel pick-up point`|
|» latitude|number|false|none|**numeric latitude component** of *this* hotel pick-up point's geolocation|
|» longitude|number|false|none|**numeric longitude component** of *this* hotel pick-up point's geolocation|
|» name|string|false|none|**natural-language name** of hotel pick-up point|
|» notes|string|false|none|**natural-language notes** about *this* hotel pick-up point|
|» phone|string|false|none|**phone number** of *this* hotel pick-up point|
|» postcode|string|false|none|**post code** of *this* hotel pick-up point|
|» productCodes|[string]|false|none|**array** of product codes pertaining to *this* hotel pick-up point|
|» sortOrder|integer|false|none|**sort-order** of *this* hotel pick-up point|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/mybookings

<a id="opIdbookingMybookings"></a>

> Code samples

```bash
curl https://example.com/booking/mybookings \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /booking/mybookings`

Get a user's bookings with travel dates in the future. 

This service can also be used to check the status of a booking. 

**Provide either:** 
- A `voucherKey`, **or...** 
- An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))


<h3 id="bookingmybookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|voucherKey|query|string|false|**voucher key** for the booking|
|email|query|string|false|**email address** of the booker for the booking|
|itineraryOrItemId|query|string|false|The booking reference number of the item<br>- **Note**: For more information, see [Booking references](#section/Key-concepts/Booking-references)<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bookerEmail": "apitest@viator.com",
      "bookingDate": "2020-02-11",
      "bookingStatus": {
        "amended": false,
        "cancelled": false,
        "confirmed": true,
        "failed": false,
        "level": "ITINERARY",
        "pending": false,
        "status": 3,
        "text": "Confirmed",
        "type": "CONFIRMED"
      },
      "currencyCode": "USD",
      "distributorRef": "distributorRef100000",
      "exchangeRate": 1,
      "hasVoucher": true,
      "itemSummaries": [
        {
          "applePassSupported": false,
          "appleWalletURL": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "barcodeOption": "tour",
          "barcodeType": "code128",
          "bookingEngineId": "FO",
          "bookingStatus": {
            "amended": false,
            "cancelled": false,
            "confirmed": true,
            "failed": false,
            "level": "ITEM",
            "pending": false,
            "status": 1,
            "text": "Paid &amp;amp; Confirmed",
            "type": "CONFIRMED"
          },
          "currencyCode": "USD",
          "departsFrom": "Las Vegas, United States",
          "departurePoint": "Traveler pickup is offered&lt;br&gt;&lt;br&gt;",
          "departurePointAddress": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "departurePointDirections": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "destId": 684,
          "distributorItemRef": "itemRef1000000",
          "hoursConfirmed": 0,
          "itemId": 580669678,
          "itineraryId": 1005851866,
          "languageServicesLanguageCode": "en",
          "lastRetailPrice": 388.72,
          "lastRetailPriceFormatted": "$388.72",
          "leadTravellerFirstname": "Homer test",
          "leadTravellerSurname": "Simpson test",
          "leadTravellerTitle": "Mr",
          "merchantCancellable": true,
          "merchantNetPrice": 388.72,
          "merchantNetPriceFormatted": "$388.72",
          "merchantTermsAndConditions": {
            "amountRefundable": "USD 412.04",
            "cancellationFromTourDate": [
              {
                "dayRangeMax": {
                  "$ref": "#/components/examples/product-example-1/value/data/pas"
                },
                "dayRangeMin": 1,
                "percentageRefundable": 100,
                "policyEndTimestamp": 1585580400,
                "policyStartTimestamp": {
                  "$ref": "#/components/examples/product-example-1/value/data/pas"
                }
              },
              {
                "dayRangeMax": 1,
                "dayRangeMin": 0,
                "percentageRefundable": 0,
                "policyEndTimestamp": 1585666800,
                "policyStartTimestamp": 1585580400
              }
            ],
            "merchantTermsAndConditionsType": 1,
            "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience."
          },
          "obfsId": 362208,
          "passbooks": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "pickupHotelId": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "pickupHotelName": "null",
          "price": 412.04,
          "priceFormatted": "$412.04",
          "priceUSD": 412.04,
          "productCode": "2280AAHT",
          "productPulledDown": false,
          "productTitle": "Grand Canyon All-American Helicopter Tour",
          "productWidgetList": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "rnplInfo": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "rulesApplied": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "savingAmount": 0,
          "savingAmountFormated": "$0.00",
          "sortOrder": 0,
          "startingTime": "8:00 AM",
          "supplierName": "Sundance Helicopters",
          "supplierPhoneNumber": "+1 123 456 7890",
          "termsAndConditions": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          },
          "tourGradeCode": "TG1~08:00",
          "tourGradeDescription": "Morning Departure; A-Star 08:00 (TG1~08:00)",
          "travelDate": "2020-03-31",
          "travellerAgeBands": [
            {
              "ageBandId": 1,
              "count": 1,
              "description": "Adult",
              "pluralDescription": "Adults",
              "sortOrder": 0
            }
          ],
          "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678",
          "voucherOption": "VOUCHER_E",
          "voucherRequirements": "You can present either a paper or an electronic voucher for this activity.",
          "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false",
          "vouchers": {
            "$ref": "#/components/examples/product-example-1/value/data/pas"
          }
        }
      ],
      "itineraryId": 1005851866,
      "omniPreRuleList": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "paypalRedirectURL": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "rulesApplied": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "securityToken": "4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
      "sortOrder": 1,
      "totalPrice": 412.04,
      "totalPriceFormatted": "$412.04",
      "totalPriceUSD": 412.04,
      "userId": {
        "$ref": "#/components/examples/product-example-1/value/data/pas"
      },
      "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
      "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false"
    }
  ],
  "dateStamp": "2020-02-11T20:27:20+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331004"
}
```

<h3 id="bookingmybookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingmybookings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» bookerEmail|string|false|none|**email address** of the entity that booked the tour|
|» bookingDate|string|false|none|**date** on which the booking was made|
|» bookingStatus|[bookingStatus_itinerary](#schemabookingstatus_itinerary)|false|none|**object** containing itinerary booking status information|
|» currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» distributorRef|string|false|none|**reference code** for the distributor|
|» exchangeRate|integer|false|none|**exchange rate** applied to the pricing|
|» hasVoucher|boolean|false|none|**indicator**: `true` if a voucher exists|
|» itemSummaries|[object]|false|none|**array** of item summary objects|
|» » barcodeOption|string|false|none|Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.|
|» » barcodeType|string|false|none|**alphanumeric code** specifying the type of barcode|
|» » bookingEngineId|[bookingEngineId-response](#schemabookingengineid-response)|false|none|[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately<br>- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br>|
|» » bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» » currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» » departsFrom|string|false|none|**natural-language description** of *this* item's departure location|
|» » departurePoint|string|false|none|**natural-language description** of the product's departure point|
|» » departurePointAddress|string|false|none|**natural-language address** of the departure point for the product|
|» » departurePointDirections|string|false|none|**natural-language description** of how to access the departure point for the product|
|» » destId|integer|false|none|**unique numeric identifier** of the destination in which the product operates|
|» » distributorItemRef|string|false|none|**alphanumeric reference code** of the distributor item|
|» » hoursConfirmed|integer|false|none|The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.<br>|
|» » itemId|string|false|none|Booking-reference number generated by Viator<br>- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)<br>|
|» » itineraryId|integer|false|none|ignore (Viator only)|
|» » languageServicesLanguageCode|string|false|none|**language code** for the language that the product operates in|
|» » lastRetailPrice|number|false|none|**currency-formatted merchant net rate** of *this* item|
|» » lastRetailPriceFormatted|string|false|none|**currency-formatted retail price** of *this* item|
|» » leadTravellerFirstname|string|false|none|**first name** of the lead traveler|
|» » leadTravellerSurname|string|false|none|**surname** of the lead traveler|
|» » leadTravellerTitle|string|false|none|**title** of the lead traveler's name|
|» » merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» » merchantNetPrice|number|false|none|**currency-formatted merchant net rate** of *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** of *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantTermsAndConditions|object|false|none|none|
|» » » amountRefundable|string|false|none|**currency-formatted** amount that will be refunded if the cancellation is processed now.|
|» » » cancellationFromTourDate|[object]|false|none|**array** of cancellation policy objects|
|» » » » dayRangeMax|integer|false|none|**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness|
|» » » » dayRangeMin|integer|false|none|**number** of days prior to the tour start date that *this* policy window ends|
|» » » » percentageRefundable|integer|false|none|**percentage** of total price refundable if cancelled within *this* time window|
|» » » » policyEndTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy ends|
|» » » » policyStartTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy commences|
|» » » termsAndConditions|string|false|none|**natural-language description** of the terms and conditions for *this* product|
|» » obfsId|string|false|none|ignore (Viator only)|
|» » passbooks|string|false|none|ignore (Viator only)|
|» » price|number|false|none|**numeric merchant total price** of the product that was booked<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceFormatted|string|false|none|**currency-formatted merchant total price** for *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceUSD|number|false|none|none|
|» » productCode|string|false|none|**unique alphanumeric identifier** of the product that was booked|
|» » productPulledDown|boolean|false|none|none|
|» » productTitle|string|false|none|**natural-language description** of the product that was booked|
|» » productWidgetList|string|false|none|ignore (Viator only)|
|» » rulesApplied|string|false|none|ignore (Viator only)|
|» » savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» » savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» » sortOrder|integer|false|none|**sort order** of *this* item summary|
|» » termsAndConditions|string|false|none|ignore (Viator only)|
|» » tourGradeCode|string|false|none|**alphanumeric identifier** of the tour grade of the product that was booked|
|» » tourGradeDescription|string|false|none|**natural-language description** of *this* tour grade|
|» » travelDate|string|false|none|**date** of travel for the product that was booked|
|» » travellerAgeBands|[object]|false|none|**array** of age band objects|
|» » » ageBandId|[ageBandId](#schemaagebandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » count|integer|false|none|**number** of travelers in *this* age band|
|» » » description|string|false|none|**natural-language description** (singular) of *this* age band|
|» » » pluralDescription|string|false|none|**natural-language description** (plural) of *this* age band|
|» » » sortOrder|integer|false|none|**sort order** for *this* age band|
|» » voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» » voucherOption|string|false|none|**specifier** of the rules pertaining to the use of the voucher|
|» » voucherRequirements|string|false|none|**natural-language description** of the requirements for using the voucher|
|» » voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|
|» » vouchers|string|false|none|ignore (Viator only)|
|» itineraryId|integer|false|none|ignore (Viator only)|
|» rulesApplied|string|false|none|ignore (Viator only)|
|» sortOrder|integer|false|none|**sort order** for the booking object|
|» totalPrice|number|false|none|**numeric merchant total price** for *this* booking<br>For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceFormatted|string|false|none|**currency-formatted merchant total price** of *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceUSD|number|false|none|**numeric merchant total price** of this booking in USD|
|» userId|string|false|none|ignore (Viator only)|
|» voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » bookingEngineId|UF|
|» » bookingEngineId|OR|
|» » bookingEngineId|FO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/pastbooking

<a id="opIdbookingPastbooking"></a>

> Code samples

```bash
curl https://example.com/booking/pastbooking \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /booking/pastbooking`

Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.

**Note**: this service will only return past bookings that were made with the same API key that was used to make the booking

**Sample query parameters**:
- email=apitest@viator.com&amp;itemId=580669678

**or**
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678

**email**
- The email address passed must match the email address associated with the booking

**Departure details**

- Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
- These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.

For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)


<h3 id="bookingpastbooking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|voucherKey|query|string|false|**specifier** of past booking type (use *one* of: `itemId` (booking reference) *and* `'voucherKey'` *or* `'email'`)|
|email|query|string|false|**email address** by which to search for past bookings|
|itemId|query|string|false|Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "bookerEmail": "apitest@viator.com",
    "bookingDate": "2020-02-11",
    "bookingStatus": {
      "amended": false,
      "cancelled": false,
      "confirmed": true,
      "failed": false,
      "level": "ITINERARY",
      "pending": false,
      "status": 3,
      "text": "Confirmed",
      "type": "CONFIRMED"
    },
    "currencyCode": "USD",
    "distributorRef": "distributorRef100000",
    "exchangeRate": 1,
    "hasVoucher": true,
    "itemSummaries": [
      {
        "applePassSupported": false,
        "appleWalletURL": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "barcodeOption": "tour",
        "barcodeType": "code128",
        "bookingEngineId": "FO",
        "bookingStatus": {
          "amended": false,
          "cancelled": false,
          "confirmed": true,
          "failed": false,
          "level": "ITEM",
          "pending": false,
          "status": 1,
          "text": "Paid &amp;amp; Confirmed",
          "type": "CONFIRMED"
        },
        "currencyCode": "USD",
        "departsFrom": "Las Vegas, United States",
        "departurePoint": "Traveler pickup is offered&lt;br&gt;&lt;br&gt;",
        "departurePointAddress": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "departurePointDirections": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "destId": 684,
        "distributorItemRef": "itemRef1000000",
        "hoursConfirmed": 0,
        "itemId": 580669678,
        "itineraryId": 1005851866,
        "languageServicesLanguageCode": "en",
        "lastRetailPrice": 388.72,
        "lastRetailPriceFormatted": "$388.72",
        "leadTravellerFirstname": "Homer test",
        "leadTravellerSurname": "Simpson test",
        "leadTravellerTitle": "Mr",
        "merchantCancellable": true,
        "merchantNetPrice": 388.72,
        "merchantNetPriceFormatted": "$388.72",
        "merchantTermsAndConditions": {
          "amountRefundable": "USD 412.04",
          "cancellationFromTourDate": [
            {
              "dayRangeMax": {
                "$ref": "#/components/examples/product-example-1/value/data/pas"
              },
              "dayRangeMin": 1,
              "percentageRefundable": 100,
              "policyEndTimestamp": 1585580400,
              "policyStartTimestamp": {
                "$ref": "#/components/examples/product-example-1/value/data/pas"
              }
            },
            {
              "dayRangeMax": 1,
              "dayRangeMin": 0,
              "percentageRefundable": 0,
              "policyEndTimestamp": 1585666800,
              "policyStartTimestamp": 1585580400
            }
          ],
          "merchantTermsAndConditionsType": 1,
          "termsAndConditions": "For a full refund, cancel at least 24 hours in advance of the start date of the experience."
        },
        "obfsId": 362208,
        "passbooks": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "pickupHotelId": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "pickupHotelName": "null",
        "price": 412.04,
        "priceFormatted": "$412.04",
        "priceUSD": 412.04,
        "productCode": "2280AAHT",
        "productPulledDown": false,
        "productTitle": "Grand Canyon All-American Helicopter Tour",
        "productWidgetList": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rnplInfo": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "rulesApplied": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "savingAmount": 0,
        "savingAmountFormated": "$0.00",
        "sortOrder": 0,
        "startingTime": "8:00 AM",
        "supplierName": "Sundance Helicopters",
        "supplierPhoneNumber": "+1 123 456 7890",
        "termsAndConditions": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        },
        "tourGradeCode": "TG1~08:00",
        "tourGradeDescription": "Morning Departure; A-Star 08:00 (TG1~08:00)",
        "travelDate": "2020-03-31",
        "travellerAgeBands": [
          {
            "ageBandId": 1,
            "count": 1,
            "description": "Adult",
            "pluralDescription": "Adults",
            "sortOrder": 0
          }
        ],
        "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678",
        "voucherOption": "VOUCHER_E",
        "voucherRequirements": "You can present either a paper or an electronic voucher for this activity.",
        "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false",
        "vouchers": {
          "$ref": "#/components/examples/product-example-1/value/data/pas"
        }
      }
    ],
    "itineraryId": 1005851866,
    "omniPreRuleList": [],
    "paypalRedirectURL": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "rulesApplied": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "securityToken": "4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
    "sortOrder": 0,
    "totalPrice": 412.04,
    "totalPriceFormatted": "$412.04",
    "totalPriceUSD": 412.04,
    "userId": {
      "$ref": "#/components/examples/product-example-1/value/data/pas"
    },
    "voucherKey": "1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e",
    "voucherURL": "https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false"
  },
  "dateStamp": "2020-02-11T20:06:43+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingpastbooking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingpastbooking-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|**object** containing pricing matrix information|
|» bookerEmail|string|false|none|**email address** of the entity that booked the tour|
|» bookingDate|string|false|none|**date** on which the booking was made|
|» bookingStatus|[bookingStatus_itinerary](#schemabookingstatus_itinerary)|false|none|**object** containing itinerary booking status information|
|» currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» distributorRef|string|false|none|**reference code** for the distributor|
|» exchangeRate|integer|false|none|ignore (Viator only)|
|» hasVoucher|boolean|false|none|**indicator**: `true` if a voucher exists|
|» itemSummaries|[object]|false|none|**array** of item summary objects|
|» » barcodeOption|string|false|none|Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.|
|» » barcodeType|string|false|none|**alphanumeric code** specifying the type of barcode|
|» » bookingEngineId|[bookingEngineId-response](#schemabookingengineid-response)|false|none|[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made<br><br>*one of* the following:<br>- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately<br>- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services<br>- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.<br>|
|» » bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» » currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» » departsFrom|string|false|none|**natural-language description** of *this* item's departure location|
|» » departurePoint|string|false|none|**natural-language description** of the product departure point|
|» » departurePointAddress|string|false|none|**natural-language address** of the departure point for the product|
|» » departurePointDirections|string|false|none|**natural-language description** of how to access the departure point for the product|
|» » destId|integer|false|none|**unique numeric identifier** of the destination in which the product operates|
|» » distributorItemRef|string|false|none|**alphanumeric reference code** of the distributor item|
|» » hoursConfirmed|integer|false|none|The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.<br>|
|» » itemId|string|false|none|Booking-reference number generated by Viator<br>- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)<br>|
|» » itineraryId|integer|false|none|ignore (Viator only)|
|» » languageServicesLanguageCode|string|false|none|**language code** for the language that the product operates in|
|» » lastRetailPrice|number|false|none|**numeric last retail price** of *this* item|
|» » lastRetailPriceFormatted|string|false|none|**currency-formatted retail price** of *this* item|
|» » leadTravellerFirstname|string|false|none|**first name** of the lead traveler|
|» » leadTravellerSurname|string|false|none|**surname** of the lead traveler|
|» » leadTravellerTitle|string|false|none|**title** of the lead traveler's name|
|» » merchantCancellable|boolean|false|none|ignore (Viator only)<br><br>For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object<br>|
|» » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » merchantTermsAndConditions|object|false|none|none|
|» » » amountRefundable|string|false|none|**currency-formatted** amount that will be refunded if the cancellation is processed now.|
|» » » cancellationFromTourDate|[object]|false|none|**array** of cancellation policy objects|
|» » » » dayRangeMax|integer|false|none|**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness|
|» » » » dayRangeMin|integer|false|none|**number** of days prior to the tour start date that *this* policy window ends|
|» » » » percentageRefundable|integer|false|none|**percentage** of total price refundable if cancelled within *this* time window|
|» » » » policyEndTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy ends|
|» » » » policyStartTimestamp|integer|false|none|**Unix timestamp** giving the exact time the policy commences|
|» » » termsAndConditions|string|false|none|**natural-language description** of the terms and conditions for *this* product|
|» » obfsId|string|false|none|ignore (Viator only)|
|» » passbooks|string|false|none|ignore (Viator only)|
|» » price|number|false|none|**numeric merchant total price** for the booked product<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceFormatted|string|false|none|**currency-formatted merchant total price** for *this* item<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » priceUSD|number|false|none|**numeric merchant total price** of the item in USD|
|» » productCode|string|false|none|**unique alphanumeric identifier** of the product that was booked|
|» » productPulledDown|boolean|false|none|ignore (Viator only)|
|» » productTitle|string|false|none|**natural-language description** of the product that was booked|
|» » productWidgetList|string|false|none|ignore (Viator only)|
|» » rulesApplied|string|false|none|ignore (Viator only)|
|» » savingAmount|[savingAmount](#schemasavingamount)|false|none|Ignore (Viator only)<br>|
|» » savingAmountFormated|[savingAmountFormated](#schemasavingamountformated)|false|none|Ignore (Viator only)<br>|
|» » sortOrder|integer|false|none|none|
|» » termsAndConditions|string|false|none|ignore (Viator only)|
|» » tourGradeCode|string|false|none|**alphanumeric identifier** of the tour grade of the product that was booked|
|» » tourGradeDescription|string|false|none|**natural-language description** of *this* tour grade|
|» » travelDate|string|false|none|**date** of travel for the product that was booked|
|» » travellerAgeBands|[object]|false|none|**array** of age band objects|
|» » » ageBandId|[ageBandId](#schemaagebandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » » count|integer|false|none|**number** of travelers in *this* age band|
|» » » description|string|false|none|**natural-language description** (singular) of *this* age band|
|» » » pluralDescription|string|false|none|**natural-language description** (plural) of *this* age band|
|» » » sortOrder|integer|false|none|**sort order** for *this* age band|
|» » voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» » voucherOption|string|false|none|**specifier** of the rules pertaining to the use of the voucher|
|» » voucherRequirements|string|false|none|**natural-language description** of the requirements for using the voucher|
|» » voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|
|» » vouchers|string|false|none|ignore (Viator only)|
|» itineraryId|integer|false|none|ignore (Viator only)|
|» rulesApplied|string|false|none|ignore (Viator only)|
|» sortOrder|integer|false|none|**sort order** for *this* result|
|» totalPrice|number|false|none|**numeric merchant total price** for *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceFormatted|string|false|none|**currency-formatted merchant total price** for *this* booking<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» totalPriceUSD|number|false|none|**numeric merchant total price** of this booking in USD|
|» userId|string|false|none|ignore (Viator only)|
|» voucherKey|string|false|none|Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints|
|» voucherURL|string|false|none|**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » bookingEngineId|UF|
|» » bookingEngineId|OR|
|» » bookingEngineId|FO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/pricingmatrix

<a id="opIdbookingPricingmatrix"></a>

> Code samples

```bash
curl https://example.com/booking/pricingmatrix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "bookingDate": "2020-12-12",
    "currencyCode": "EUR",
    "productCode": "5010SYDNEY",
    "tourGradeCode": "24HOUR"
  }'
```

`POST /booking/pricingmatrix`

Get the pricing matrix for tour-grades, product age bands and pax mixes

For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)


> Body parameter

```json
{
  "bookingDate": "2020-12-12",
  "currencyCode": "EUR",
  "productCode": "5010SYDNEY",
  "tourGradeCode": "24HOUR"
}
```

<h3 id="bookingpricingmatrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» bookingDate|body|string|false|**date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined)|
|» currencyCode|body|string|false|**currency code** of the currency in which to display pricing information|
|» productCode|body|string|false|**unique alphanumeric identifier** of the product for which to retrieve the pricing matrix|
|» tourGradeCode|body|string|false|**alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ageBandPrices": [
        {
          "bandId": 1,
          "maximumCountRequired": 9,
          "minimumCountRequired": 0,
          "prices": [
            {
              "currencyCode": "EUR",
              "merchantNetPrice": 26.64,
              "merchantNetPriceFormatted": "€26,64",
              "minNoOfTravellersRequiredForPrice": 1,
              "price": 33.35,
              "priceFormatted": "€33,35",
              "sortOrder": 1
            }
          ],
          "sortOrder": 1
        },
        {
          "bandId": 2,
          "maximumCountRequired": 9,
          "minimumCountRequired": 0,
          "prices": [
            {
              "currencyCode": "EUR",
              "merchantNetPrice": 18.06,
              "merchantNetPriceFormatted": "€18,06",
              "minNoOfTravellersRequiredForPrice": 1,
              "price": 22.61,
              "priceFormatted": "€22,61",
              "sortOrder": 1
            }
          ],
          "sortOrder": 2
        }
      ],
      "bookingDate": "2020-03-11",
      "pricingUnit": "per person",
      "sortOrder": 1
    }
  ],
  "dateStamp": "2020-02-11T16:21:23+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingpricingmatrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingpricingmatrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|none|
|» ageBandPrices|[object]|false|none|**array** of age band pricing objects|
|» » bandId|[bandId](#schemabandid)|false|none|**unique numeric identifier** for the age band<br>- See: [Working with age bands](#section/Appendices/Working-with-age-bands)<br>|
|» » maximumCountRequired|integer|false|none|**maximum number of travelers** that this pricing schedule can be applied to<br>- use this field to specify the largest group size you are interested in making a booking for<br>|
|» » minimumCountRequired|integer|false|none|**minimum number of travelers** that this pricing schedule can be applied to<br>- use this field to specify the smallest group size you are interested in making a booking for<br>|
|» » prices|[object]|false|none|**array** of prices available for *this* age band (based on the min and max count required)|
|» » » currencyCode|string|false|none|**currency code** for the currency in which pricing is displayed|
|» » » merchantNetPrice|number|false|none|**numeric merchant net rate** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » merchantNetPriceFormatted|string|false|none|**currency-formatted merchant net rate** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » minNoOfTravellersRequiredForPrice|integer|false|none|**minimum number of travelers** that this pricing schedule can be applied to; e.g., '3' means that the price is for a group of three people or more|
|» » » price|number|false|none|**numeric suggested retail price** for *this* age band<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » priceFormatted|string|false|none|**currency-formatted suggested retail price** for *this* age band and the suggested sell price<br>- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)<br>|
|» » » sortOrder|string|false|none|**sort order** for *this* pricing object|
|» » sortOrder|integer|false|none|**sort order** for *this* age band|
|» bookingDate|string|false|none|**date** for which to retrieve pricing information|
|» pricingUnit|string|false|none|**unit** in which pricing is calculated (currently, only 'per person' is supported)<br>- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information<br>|
|» sortOrder|integer|false|none|**sort order** for *this* response object|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/status

<a id="opIdbookingStatus"></a>

> Code samples

```bash
curl https://example.com/booking/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "bookingDateFrom": "2020-12-21",
    "bookingDateTo": "2020-12-31",
    "distributorItemRefs": [
      "itemRef1000000"
    ],
    "itemIds": [
      580669678
    ],
    "leadFirstName": "Homer test",
    "leadSurname": "Simpson test",
    "test": true
  }'
```

`POST /booking/status`

Get the booking status for multiple items based on different criteria

This service: 
- is ideally be used in software for bulk updates of pending bookings
- returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
- will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
- rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
- For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)

**Exceeding the rate limit**
- You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
```javascript
{
    "data": null
    "vmid": 221002
    "errorMessage": ["Access allowed every 30 minutes"]
    "errorType": "EXCEPTION"
    "dateStamp": "2013-03-26T10:28:51+0000"
    "errorReference": 55315512721712161381352771
    "errorMessageText": ["Access allowed every 30 minutes"]
    "success": false
    "totalCount": 1
    "errorName": "PollingDeniedException"  
}
```


> Body parameter

```json
{
  "bookingDateFrom": "2020-12-21",
  "bookingDateTo": "2020-12-31",
  "distributorItemRefs": [
    "itemRef1000000"
  ],
  "itemIds": [
    580669678
  ],
  "leadFirstName": "Homer test",
  "leadSurname": "Simpson test",
  "test": true
}
```

<h3 id="bookingstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» bookingDateFrom|body|string|false|**earliest date** for *this* booking (must be in the future)|
|» bookingDateTo|body|string|false|**latest date** for *this* booking (must be in the future)|
|» distributorItemRefs|body|[string]|false|**array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']`|
|» distributorRefs|body|[string]|false|**array** of partner-defined distributor reference identifiers|
|» itemIds|body|[integer]|false|**array** of item identifiers to check|
|» leadFirstName|body|string|false|**first name** of the lead traveler|
|» leadSurname|body|string|false|**surname** of the lead traveler|
|» test|body|boolean|false|**specifier**:<br>- `true`: bypass the poll limit in the prelive environment only (recommended for testing)<br>- `false`: (default)<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bookingDate": "2020-02-11",
      "bookingStatus": {
        "amended": false,
        "cancelled": false,
        "confirmed": true,
        "failed": false,
        "level": "ITINERARY",
        "pending": false,
        "status": 3,
        "text": "Confirmed",
        "type": "CONFIRMED"
      },
      "distributorRef": "distributorRef100000",
      "itemSummaries": [
        {
          "bookingStatus": {
            "amended": false,
            "cancelled": false,
            "confirmed": true,
            "failed": false,
            "level": "ITEM",
            "pending": false,
            "status": 1,
            "text": "Paid &amp;amp; Confirmed",
            "type": "CONFIRMED"
          },
          "distributorItemRef": "itemRef1000000",
          "itemId": 580669678,
          "itineraryId": 1005851866,
          "sortOrder": 0,
          "travelDate": "2020-03-31"
        }
      ],
      "itineraryId": 1005851866,
      "sortOrder": 1
    }
  ],
  "dateStamp": "2020-02-11T18:38:25+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331004"
}
```

<h3 id="bookingstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|**object** containing booking status and details|
|» bookingDate|string|false|none|**date**: of *this* booking|
|» bookingStatus|[bookingStatus_itinerary](#schemabookingstatus_itinerary)|false|none|**object** containing itinerary booking status information|
|» distributorRef|string|false|none|**alphanumeric identifer** of the distributor for *this* booking|
|» itemSummaries|[object]|false|none|**array** of item summary objects|
|» » bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» » distributorItemRef|string|false|none|**partner-defined distributor item reference identifier**|
|» » itemId|integer|false|none|Booking-reference number generated by Viator<br>- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)<br>|
|» » itineraryId|integer|false|none|ignore (Viator only)|
|» » sortOrder|integer|false|none|**sort order** for *this* item|
|» » travelDate|string|false|none|**date** of the booking|
|» itineraryId|integer|false|none|ignore (Viator only)|
|» sortOrder|integer|false|none|**sort order** for *this* response|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/status/items

<a id="opIdbookingStatusItems"></a>

> Code samples

```bash
curl https://example.com/booking/status/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "bookingDateFrom": "2020-12-21",
    "bookingDateTo": "2020-12-31",
    "distributorItemRefs": [
      "itemRef1000000"
    ],
    "itemIds": [
      580669678
    ],
    "leadFirstName": "Homer test",
    "leadSurname": "Simpson test",
    "test": true
  }'
```

`POST /booking/status/items`

Get brief booking statuses

This service is similar to [/booking/status](#operation/bookingStatus) in that it:
- retrieves the booking status for multiple items based on different criteria
- has the same request parameters as [/booking/status](#operation/bookingStatus)

However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).


> Body parameter

```json
{
  "bookingDateFrom": "2020-12-21",
  "bookingDateTo": "2020-12-31",
  "distributorItemRefs": [
    "itemRef1000000"
  ],
  "itemIds": [
    580669678
  ],
  "leadFirstName": "Homer test",
  "leadSurname": "Simpson test",
  "test": true
}
```

<h3 id="bookingstatusitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» bookingDateFrom|body|string|false|**earliest date** for when the booking(s) in question were made (must be in the future)|
|» bookingDateTo|body|string|false|**latest date** for when the booking(s) in question were made (must be in the future)|
|» distributorItemRefs|body|[string]|false|**array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']`|
|» distributorRefs|body|[string]|false|**array** of partner-defined distributor reference identifiers|
|» itemIds|body|[integer]|false|**array** of booking-reference numbers to check<br><br> `itemId` (booking-reference provided by Viator). For more information, see [Booking references](#section/Key-concepts/Booking-references)<br>|
|» leadFirstName|body|string|false|**first name** of the lead traveler|
|» leadSurname|body|string|false|**surname** of the lead traveler|
|» test|body|boolean|false|**specifier**:<br>- `true`: bypass the poll limit in the prelive environment only<br>- `false`: (default) make a *real* booking, not a test<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bookingStatus": {
        "amended": false,
        "cancelled": false,
        "confirmed": true,
        "failed": false,
        "level": "ITEM",
        "pending": false,
        "status": 1,
        "text": "Paid &amp;amp; Confirmed",
        "type": "CONFIRMED"
      },
      "distributorItemRef": "itemRef1000000",
      "itemId": 580669678
    }
  ],
  "dateStamp": "2020-02-11T19:03:06+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331001"
}
```

<h3 id="bookingstatusitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingstatusitems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|[object]|false|none|**array** containing item ids and their associated booking status object|
|» bookingStatus|[bookingStatus_item](#schemabookingstatus_item)|false|none|**object** containing item booking status information|
|» distributorItemRef|string|false|none|**partner-defined distributor item reference identifier**|
|» itemId|integer|false|none|Booking-reference number generated by Viator<br>- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /booking/voucher

<a id="opIdbookingVoucher"></a>

> Code samples

```bash
curl https://example.com/booking/voucher \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /booking/voucher`

Get voucher details
- Use this service to retrieve the voucher details of a booked item.
- The data returned is HTML-formatted and can be wrapped in a header and/or footer.

**Sample query parameters**
- leadLastName=Simpson test&amp;itemId=580669678

**or** 
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true


<h3 id="bookingvoucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|leadLastName|query|string|false|**surname** of *this* lead traveler|
|itemId|query|integer|false|Booking-reference number generated by Viator<br><br>  - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)<br>|
|embeddedResources|query|boolean|false|ignore (Viator only)|
|voucherKey|query|string|false|**identifier** for the voucher<br>- **note**: use &lt;u&gt;either&lt;/u&gt; `voucherKey` &lt;u&gt;or&lt;/u&gt; the three separate parameters<br>- if `voucherKey` is provided as well as the other parameters, then `voucherKey` overrides the other paramaters<br>- `voucherKey` is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the response from [/booking/book](#operation/bookingBook) when you make a booking<br>|
|fullHTML|query|boolean|false|**specifier**:<br>- set to `true` if you wish to retrieve the full HTML-formatted voucher<br>- set to `false` if you want the div fragment (optional)<br>|
|mobileVoucher|query|boolean|false|**specifier**: <br>- if set to `true`, the service returns the mobile (cut down) HTML-formatted voucher<br>- if `false` the full voucher HTML is returned (ignoring `fullHTML`)<br>- default: `true` <br>- this field should only be enabled for products that have a `voucherOption` of `'VOUCHER_E'`<br>- do not enable `mobileVouchers` for paper vouchers (`voucherOption` of `'VOUCHER_PAPER_ONLY'`) as no barcode is returned<br>- the voucher information is available in the response from [/product](#operation/product), [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking), [/booking/mybookings](#operation/bookingMybookings) (it is also displayed under the 'Redemption Info' heading in this service)<br>|

> Example responses

> 200 Response

```json
{
  "data": "\n&lt;!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"&gt;\n&lt;html xmlns=\"http://www.w3.org/1999/xhtml\"&gt;\n    &lt;head&gt;\n        &lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /&gt;\n        &lt;meta name=\"viewport\" content=\"width=device-width\" /&gt;\n        &lt;title&gt;Viator&lt;/title&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;div id=\"content\" class=\"voucher_box\"&gt;\n                &lt;div id=\"voucher_1\"&gt;\n\n        &lt;div class=\"section\"&gt;\n            &lt;div class=\"voucher_title\"&gt;\n                Voucher 1\n                of 1: Homer test Simpson test\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;div class=\"section bline\"&gt;\n            &lt;div class=\"btn_box\"&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;div style=\"line-height: 1.5;font-family:'Arial','Helvetica','Verdana',sans-serif; font-size: 12px; padding: 0 10px; border-bottom: 1px solid #CAE2EA;\"&gt;\n\n            &lt;h2 style=\"font-size:16px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;\n            Grand Canyon All-American Helicopter Tour\n                    &lt;span style=\"display: block;font-size:12px;\"&gt;\n                        Morning Departure; A-Star 08:00\n                    &lt;/span&gt;\n            &lt;/h2&gt;\n\n            &lt;div class=\"barcode\"&gt;\n                &lt;img src=\"/voucher/resource?type=barcode&amp;itineraryItemId=580669678&amp;voucherToken=4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e\" alt=\"\"/&gt;\n            &lt;/div&gt;\n\n                &lt;h2 style=\"font-size:16px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;SAMPLE ONLY&lt;/h2&gt;\n\n            &lt;ul style=\"margin:0 0 1em 1em; padding:0;\"&gt;\n                &lt;li&gt;\n                    &lt;strong&gt;Date:&lt;/strong&gt;\n                Tuesday March 31, 2020\n                &lt;/li&gt;\n            &lt;/ul&gt;\n\n            &lt;ul style=\"margin:0 0 1em 1em; padding:0;\"&gt;\n                    &lt;li&gt;\n                        &lt;strong&gt;Lead traveler\n                            :\n                        &lt;/strong&gt;Homer test Simpson test\n                    &lt;/li&gt;\n                    &lt;li&gt;\n                        &lt;strong&gt;Number of Travelers\n                            :\n                        &lt;/strong&gt;1 Adult&lt;/li&gt;\n\n                &lt;li&gt;\n                    &lt;strong&gt;Booking Reference:\n                    &lt;/strong&gt;BR-580669678&lt;/li&gt;\n\n                &lt;li&gt;\n                    &lt;strong&gt;Product Code:\n                    &lt;/strong&gt;2280AAHT&lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Option Code:\n                        &lt;/strong&gt;TG1~08:00&lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Supplier\n                            : &lt;/strong&gt;Sundance Helicopters&lt;/li&gt;\n\n\n\n\n\n                &lt;li&gt;\n                    &lt;strong&gt;Location\n                        :&lt;/strong&gt;\n                            &lt;p&gt;Traveler pickup is offered&lt;br&gt;&lt;br&gt;&lt;/p&gt;\n                &lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Tour Option Description\n                            :&lt;/strong&gt;\n                    Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour\n                        \n                    &lt;/li&gt;\n            &lt;/ul&gt;\n\n            &lt;h3 style=\"font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;\n            Voucher Information\n            &lt;/h3&gt;\n\n            &lt;ul style=\"margin:0 0 1em 1em; padding:0;\"&gt;\n                You can present either a paper or an electronic voucher for this activity.\n                    &lt;span style=\"color:#888888;\"&gt; / You can present either a paper or an electronic voucher for this activity.&lt;/span&gt;\n            &lt;/ul&gt;\n\n            &lt;h3 style=\"font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;\n            Important Information\n            &lt;/h3&gt;\n                &lt;ul&gt;\n&lt;li&gt;Your local contact is Sundance Helicopters on +17027360606.&lt;/li&gt;&lt;/ul&gt;\n• Important: due to comfort, weight and balance of the aircraft, the maximum weight per passenger to ride in an A-Star helicopter is 275lbs (125kg / 19.6st). If passengers weigh in between 275lbs and 300lbs (136kg/21.4st), you will be required to upgrade to the EC-130.&lt;br&gt; • Any passenger over 300lbs will be required to purchase an additional seat. This is payable directly to the tour operator on the day of the tour.&lt;br&gt; • Due to the nature of this tour and the safety of all guests, the tour operator reserves the right to refuse service to passengers who are intoxicated or show signs of intoxication. If, as a result, your tour is canceled, you will not be entitled to a refund.&lt;br&gt; • Infant children must be under the age of two and have proof of age, such as a passport and are considered lap children.&lt;br&gt; • Per FAA regulations, all passenger must present photo ID at check in.&lt;br&gt; • If you would like a vegetarian meal as your lunch option, please contact the local operator as soon as possible.&lt;br&gt; • Please Note: Please look for your Limo driver who will get out and will be looking for the lead traveler’s last name of whom the reservation is under. There is also a sign in the front windshield of the Limo that will say Sundance Helicopters.&lt;br&gt;&lt;br&gt;Hotel pickups commence prior to this time, you must contact the local service provider to verify your exact pickup time.&lt;br&gt;&lt;br&gt;All flight times are approximate and subject to change due to weather conditions and weight restrictions.&lt;br&gt;\n\n                &lt;h3 style=\"font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;\n                Inclusions\n                &lt;/h3&gt;\n                    &lt;ul&gt;\n&lt;li&gt;45-minute (approx.) flight each way (helicopter based on option selected)&lt;/li&gt;&lt;li&gt;Hotel pickup and drop-off by limousine&lt;/li&gt;&lt;li&gt;Snacks&lt;/li&gt;&lt;li&gt;Glass of Champagne&lt;/li&gt;&lt;li&gt;All taxes and fees&lt;/li&gt;&lt;/ul&gt;\n\n\n                &lt;h3 style=\"font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;\"&gt;\n                Exclusions\n                &lt;/h3&gt;\n                    &lt;ul&gt;\n&lt;li&gt;Gratuities&lt;/li&gt;&lt;/ul&gt;\n\n\n\n        &lt;/div&gt;\n\n    &lt;/div&gt;\n        &lt;br/&gt;\n\n        &lt;/div&gt;\n\n    &lt;/body&gt;\n&lt;/html&gt;\n",
  "dateStamp": "2020-02-11T19:50:39+0000",
  "errorCodes": [],
  "errorMessage": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorMessageText": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorName": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorReference": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "errorType": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "extraInfo": {},
  "extraObject": {
    "$ref": "#/components/examples/product-example-1/value/data/pas"
  },
  "success": true,
  "totalCount": 1,
  "vmid": "331003"
}
```

<h3 id="bookingvoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="bookingvoucher-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|string|false|none|**HTML-formatted** voucher content|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /bookings/cancel-reasons

<a id="opIdcancellationReasons"></a>

> Code samples

```bash
curl https://example.com/bookings/cancel-reasons \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US'
```

`GET /bookings/cancel-reasons`

Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`


<h3 id="bookingscancel-reasons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|

> Example responses

> 200 Response

```json
{
  "reasons": [
    {
      "cancellationReasonCode": "Customer_Service.Unexpected_medical_circumstances",
      "cancellationReasonText": "Unexpected/medical circumstances"
    },
    {
      "cancellationReasonCode": "Customer_Service.Duplicate_Booking",
      "cancellationReasonText": "Duplicate Booking"
    },
    {
      "cancellationReasonCode": "Customer_Service.Tour operator asked me to cancel",
      "cancellationReasonText": "Tour operator asked me to cancel"
    },
    {
      "cancellationReasonCode": "Customer_Service.Chose_a_different_cheaper_tour",
      "cancellationReasonText": "Chose a different/cheaper tour"
    },
    {
      "cancellationReasonCode": "Customer_Service.Weather",
      "cancellationReasonText": "Weather"
    },
    {
      "cancellationReasonCode": "Customer_Service.Booked_wrong_tour_date",
      "cancellationReasonText": "Booked wrong tour/date"
    },
    {
      "cancellationReasonCode": "Customer_Service.I_canceled_my_entire_trip",
      "cancellationReasonText": "I canceled my entire trip"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "UNAUTHORIZED",
  "message": "Invalid API key",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 406 Response

```json
{
  "code": "INVALID_HEADER_VALUE",
  "message": "string",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 500 Response

```json
{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 503 Response

```json
{
  "code": "SERVICE_UNAVAILABLE",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

<h3 id="bookingscancel-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[401_UNAUTHORIZED](#schema401_unauthorized)|
|406|Not Acceptable|Not Acceptable|[406_NOT_ACCEPTABLE](#schema406_not_acceptable)|
|500|Internal Server Error|Internal Server Error|[500_INTERNAL_SERVER_ERROR](#schema500_internal_server_error)|
|503|Service Unavailable|Service Unavailable|[503_SERVICE_UNAVAILABLE](#schema503_service_unavailable)|

<h3 id="bookingscancel-reasons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CancellationReasonsResponse](#schemacancellationreasonsresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /bookings/{booking-reference}/cancel

<a id="opIdcancelBooking"></a>

> Code samples

```bash
curl https://example.com/bookings/string/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "reasonCode": "Customer_Service.I_canceled_my_entire_trip"
  }'
```

`POST /bookings/{booking-reference}/cancel`

Submits a cancellation request for the specified booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`


> Body parameter

```json
{
  "reasonCode": "Customer_Service.I_canceled_my_entire_trip"
}
```

<h3 id="bookingsbooking-referencecancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|booking-reference|path|string|true|The ID of the booking|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|[CancellationRequest](#schemacancellationrequest)|false|none|
|» reasonCode|body|string|false|Machine-interpretable identification code for this cancellation reason, retrieved from [cancellationReasons](#operation/cancellationReasons)|

> Example responses

> 200 Response

```json
{
  "bookingId": "BR-580669678",
  "status": "ACCEPTED"
}
```

> 400 Response

```json
{
  "code": "BAD_REQUEST",
  "message": "Missing cancellation reason",
  "timestamp": "2019-09-17T03:20:45.737043Z",
  "trackingId": "XXXX"
}
```

> 401 Response

```json
{
  "code": "UNAUTHORIZED",
  "message": "Invalid API key",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Booking not found",
  "timestamp": "2019-09-17T03:20:45.737043Z",
  "trackingId": "XXXX"
}
```

> 406 Response

```json
{
  "code": "INVALID_HEADER_VALUE",
  "message": "string",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 500 Response

```json
{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 503 Response

```json
{
  "code": "SERVICE_UNAVAILABLE",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

<h3 id="bookingsbooking-referencecancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelBookingResponse](#schemacancelbookingresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|[401_UNAUTHORIZED](#schema401_unauthorized)|
|404|Not Found|Not found|Inline|
|406|Not Acceptable|Not Acceptable|[406_NOT_ACCEPTABLE](#schema406_not_acceptable)|
|500|Internal Server Error|Internal Server Error|[500_INTERNAL_SERVER_ERROR](#schema500_internal_server_error)|
|503|Service Unavailable|Service Unavailable|[503_SERVICE_UNAVAILABLE](#schema503_service_unavailable)|

<h3 id="bookingsbooking-referencecancel-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|timestamp|string|false|none|Timestamp of the request|
|trackingId|string|false|none|Tracking identifier for this error response (useful when seeking support)|

#### Enumerated Values

|Property|Value|
|---|---|
|code|BAD_REQUEST|
|message|Missing cancellation reason|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|The specified booking was not found; or, it was not created with this API key|
|timestamp|string|false|none|Timestamp of the request|
|trackingId|string|false|none|Tracking identifier for this error response (useful when seeking support)|

#### Enumerated Values

|Property|Value|
|---|---|
|code|NOT_FOUND|
|message|Booking not found|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

## /bookings/{booking-reference}/cancel-quote

<a id="opIdcancelBookingQuote"></a>

> Code samples

```bash
curl https://example.com/bookings/string/cancel-quote \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}"
```

`GET /bookings/{booking-reference}/cancel-quote`

Retrieves a quote for the cancellation of a booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`


<h3 id="bookingsbooking-referencecancel-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|booking-reference|path|string|true|Unique numeric identifier of the booking for which to retrieve a cancellation quote|

> Example responses

> 200 Response

```json
{
  "bookingId": "BR-580669678",
  "refundDetails": {
    "currencyCode": "USD",
    "itemPrice": 412.04,
    "refundAmount": 412.04,
    "refundPercentage": 100
  },
  "status": "CANCELLABLE"
}
```

> 401 Response

```json
{
  "code": "UNAUTHORIZED",
  "message": "Invalid API key",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 406 Response

```json
{
  "code": "INVALID_HEADER_VALUE",
  "message": "string",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 500 Response

```json
{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

> 503 Response

```json
{
  "code": "SERVICE_UNAVAILABLE",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

<h3 id="bookingsbooking-referencecancel-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelBookingQuoteResponse](#schemacancelbookingquoteresponse)|
|401|Unauthorized|Unauthorized|[401_UNAUTHORIZED](#schema401_unauthorized)|
|406|Not Acceptable|Not Acceptable|[406_NOT_ACCEPTABLE](#schema406_not_acceptable)|
|500|Internal Server Error|Internal Server Error|[500_INTERNAL_SERVER_ERROR](#schema500_internal_server_error)|
|503|Service Unavailable|Service Unavailable|[503_SERVICE_UNAVAILABLE](#schema503_service_unavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

<h1 id="viator-api-documentation-amp-specification-merchant-partners-deprecated-services">Deprecated services</h1>

Deprecated services

## /merchant/cancellation

<a id="opIdmerchantCancellation"></a>

> Code samples

```bash
curl https://example.com/merchant/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "exp-api-key: ${API_KEY}" \
  -H 'Accept-Language: en-US' \
  -d '{
    "cancelItems": [
      {
        "cancelCode": "82",
        "cancelDescription": "",
        "distributorItemRef": "JdpItin001",
        "itemId": 330056
      }
    ],
    "distributorRef": "Jdp122",
    "itineraryId": 1234655
  }'
```

`POST /merchant/cancellation`

<aside class="warning">
This operation is deprecated
</aside>

Cancel a booking
**Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints


> Body parameter

```json
{
  "cancelItems": [
    {
      "cancelCode": "82",
      "cancelDescription": "",
      "distributorItemRef": "JdpItin001",
      "itemId": 330056
    }
  ],
  "distributorRef": "Jdp122",
  "itineraryId": 1234655
}
```

<h3 id="merchantcancellation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|true|Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)<br>|
|body|body|object|false|none|
|» cancelItems|body|[object]|false|**array** of objects detailing itinerary items to cancel|
|» » cancelCode|body|string|false|**cancellation code** that describes the reason for the cancellation<br>- see: [Suggested cancellation codes](#suggested-cancellation-codes)<br>|
|» » cancelDescription|body|string|false|**natural-language description** of the reason for cancellation (a reason must be provided if `cancelCode` is `62` or `66`)|
|» » distributorItemRef|body|string|false|**alphanumeric reference code** of the distributor item|
|» » itemId|body|integer|false|**numeric identifier** of item to cancel in itinerary|
|» distributorRef|body|string|false|**itinerary reference identifier** (partner defined) for the booking to cancel|
|» itineraryId|body|integer|false|**numeric identifier** for the itinerary|

> Example responses

> 200 Response

```json
{
  "dateStamp": "string",
  "errorCodes": [],
  "errorMessage": [
    null
  ],
  "errorMessageText": "string",
  "errorName": "string",
  "errorReference": "string",
  "errorType": "string",
  "extraInfo": {},
  "extraObject": {},
  "success": true,
  "totalCount": 0,
  "vmid": "string",
  "data": {
    "cancelItems": [
      {
        "cancellationResponseDescription": "No further action required",
        "cancellationResponseStatusCode": "Confirmed",
        "distributorItemRef": "ItinItemRef012",
        "itemId": "600088255"
      }
    ],
    "distributorRef": "ItinRef012",
    "itineraryId": 3331605
  }
}
```

> 400 Response

```json
{
  "dateStamp": "string",
  "errorCodes": [],
  "errorMessage": [
    null
  ],
  "errorMessageText": "string",
  "errorName": "string",
  "errorReference": "string",
  "errorType": "string",
  "extraInfo": {},
  "extraObject": {},
  "success": true,
  "totalCount": 0,
  "vmid": "string",
  "data": {
    "cancellationResponseDescription": "Please double check the details or contact Viator Customer Service",
    "cancellationResponseStatusCode": "Error.ItineraryUnknown",
    "distributorItemRef": "ItinItemRef012",
    "itemId": "600088255"
  }
}
```

<h3 id="merchantcancellation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Error|Inline|

<h3 id="merchantcancellation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» cancelItems|[object]|false|none|**array** of items to be cancelled|
|» » cancellationResponseDescription|string|false|none|See Response codes table|
|» » cancellationResponseStatusCode|string|false|none|See [cancellation response codes table](#cancellation-response-status-codes-and-their-meanings)|
|» » distributorItemRef|string|false|none|**alphanumeric reference code** of the distributor item|
|» » itemId|string|false|none|**numeric identifier** of the item to cancel|
|» distributorRef|string|false|none|**reference code** for the distributor|
|» itineraryId|integer|false|none|**numeric** identifier for the itinerary|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|
|data|object|false|none|none|
|» cancellationResponseDescription|string|false|none|**natural-language description** for this response (see response codes table)|
|» cancellationResponseStatusCode|string|false|none|**status code** for this response (see response codes table)|
|» distributorItemRef|string|false|none|**alphanumeric reference code** of the distributor item|
|» itemId|string|false|none|**identifier** for the item to cancel|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API-key, Legacy-API-key
</aside>

# Schemas

<h2 id="tocS_401_UNAUTHORIZED">401_UNAUTHORIZED</h2>
<!-- backwards compatibility -->
<a id="schema401_unauthorized"></a>
<a id="schema_401_UNAUTHORIZED"></a>
<a id="tocS401_unauthorized"></a>
<a id="tocs401_unauthorized"></a>

```json
{
  "code": "UNAUTHORIZED",
  "message": "Invalid API key",
  "timestamp": "string",
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|timestamp|string|false|none|Timestamp of the request<br><br>  * e.g.: `2019-09-17T03:20:45.737043Z`<br>|
|trackingId|string|false|none|Tracking identifier for this error response|

#### Enumerated Values

|Property|Value|
|---|---|
|code|UNAUTHORIZED|
|message|Invalid API key|

<h2 id="tocS_406_NOT_ACCEPTABLE">406_NOT_ACCEPTABLE</h2>
<!-- backwards compatibility -->
<a id="schema406_not_acceptable"></a>
<a id="schema_406_NOT_ACCEPTABLE"></a>
<a id="tocS406_not_acceptable"></a>
<a id="tocs406_not_acceptable"></a>

```json
{
  "code": "INVALID_HEADER_VALUE",
  "message": "string",
  "timestamp": "string",
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|Describes which in-header parameter was not acceptable to this system; e.g., 'Invalid value for header: exp-api-key'|
|timestamp|string|false|none|Timestamp of the request<br><br>  * e.g.: `2019-09-17T03:20:45.737043Z`<br>|
|trackingId|string|false|none|Tracking identifier for this error response|

#### Enumerated Values

|Property|Value|
|---|---|
|code|INVALID_HEADER_VALUE|

<h2 id="tocS_500_INTERNAL_SERVER_ERROR">500_INTERNAL_SERVER_ERROR</h2>
<!-- backwards compatibility -->
<a id="schema500_internal_server_error"></a>
<a id="schema_500_INTERNAL_SERVER_ERROR"></a>
<a id="tocS500_internal_server_error"></a>
<a id="tocs500_internal_server_error"></a>

```json
{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|timestamp|string|false|none|Timestamp of the request<br><br>  * e.g.: `2019-09-17T03:20:45.737043Z`<br>|
|trackingId|string|false|none|Tracking identifier for this error response|

#### Enumerated Values

|Property|Value|
|---|---|
|code|INTERNAL_SERVER_ERROR|
|message|Internal server error|

<h2 id="tocS_503_SERVICE_UNAVAILABLE">503_SERVICE_UNAVAILABLE</h2>
<!-- backwards compatibility -->
<a id="schema503_service_unavailable"></a>
<a id="schema_503_SERVICE_UNAVAILABLE"></a>
<a id="tocS503_service_unavailable"></a>
<a id="tocs503_service_unavailable"></a>

```json
{
  "code": "SERVICE_UNAVAILABLE",
  "message": "Internal server error",
  "timestamp": "string",
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|timestamp|string|false|none|Timestamp of the request<br>e.g.: `2019-09-17T03:20:45.737043Z`<br>|
|trackingId|string|false|none|Tracking identifier for this error response|

#### Enumerated Values

|Property|Value|
|---|---|
|code|SERVICE_UNAVAILABLE|
|message|Internal server error|

<h2 id="tocS_CancelBookingQuoteResponse">CancelBookingQuoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelbookingquoteresponse"></a>
<a id="schema_CancelBookingQuoteResponse"></a>
<a id="tocScancelbookingquoteresponse"></a>
<a id="tocscancelbookingquoteresponse"></a>

```json
{
  "bookingId": "string",
  "refundDetails": {
    "currencyCode": "string",
    "itemPrice": 0,
    "refundAmount": 0,
    "refundPercentage": 0
  },
  "status": "CANCELLABLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingId|string|false|none|The booking reference number, prepended with `BR-`|
|refundDetails|[RefundDetails](#schemarefunddetails)|false|none|Details of the refund<br><br>**Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.<br>|
|status|string|false|none|String indicating the cancellation status of this itinerary item:<br><br>  * `CANCELLABLE` - this booking is available to be cancelled<br>  * `CANCELLED` - this booking has already been cancelled<br>  * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELLABLE|
|status|CANCELLED|
|status|NOT_CANCELLABLE|

<h2 id="tocS_CancelBookingResponse">CancelBookingResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelbookingresponse"></a>
<a id="schema_CancelBookingResponse"></a>
<a id="tocScancelbookingresponse"></a>
<a id="tocscancelbookingresponse"></a>

```json
{
  "bookingId": "BR-580254558",
  "reason": "ALREADY_CANCELLED",
  "status": "DECLINED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingId|string|false|none|Booking reference number for this booking, prepended with `BR-`|
|reason|string|false|none|none|
|status|string|false|none|String indicating the outcome of the booking cancellation request.<br><br>  * `ACCEPTED`: The cancellation was successful<br>  * `DECLINED`: The cancellation failed<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|ALREADY_CANCELLED|
|reason|NOT_CANCELLABLE|
|status|ACCEPTED|
|status|DECLINED|

<h2 id="tocS_CancellationReason">CancellationReason</h2>
<!-- backwards compatibility -->
<a id="schemacancellationreason"></a>
<a id="schema_CancellationReason"></a>
<a id="tocScancellationreason"></a>
<a id="tocscancellationreason"></a>

```json
{
  "cancellationReasonCode": "Customer_Service.Weather",
  "cancellationReasonText": "The weather conditions were unsuitable"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationReasonCode|string|false|none|Machine-interpretable identification code for this cancellation|
|cancellationReasonText|string|false|none|Natural-language description of this cancellation reason|

<h2 id="tocS_CancellationReasonsResponse">CancellationReasonsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancellationreasonsresponse"></a>
<a id="schema_CancellationReasonsResponse"></a>
<a id="tocScancellationreasonsresponse"></a>
<a id="tocscancellationreasonsresponse"></a>

```json
{
  "reasons": [
    {
      "cancellationReasonCode": "Customer_Service.Weather",
      "cancellationReasonText": "The weather conditions were unsuitable"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasons|[[CancellationReason](#schemacancellationreason)]|false|none|Array of cancellation reason codes and their asssociated texts for display to the user|

<h2 id="tocS_CancellationRequest">CancellationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancellationrequest"></a>
<a id="schema_CancellationRequest"></a>
<a id="tocScancellationrequest"></a>
<a id="tocscancellationrequest"></a>

```json
{
  "reasonCode": "Customer_Service.I_canceled_my_entire_trip"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasonCode|string|false|none|Machine-interpretable identification code for this cancellation reason, retrieved from [cancellationReasons](#operation/cancellationReasons)|

<h2 id="tocS_RefundDetails">RefundDetails</h2>
<!-- backwards compatibility -->
<a id="schemarefunddetails"></a>
<a id="schema_RefundDetails"></a>
<a id="tocSrefunddetails"></a>
<a id="tocsrefunddetails"></a>

```json
{
  "currencyCode": "string",
  "itemPrice": 0,
  "refundAmount": 0,
  "refundPercentage": 0
}
```

Details of the refund

**Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed|
|itemPrice|number|false|none|The merchant net price at the time this product was booked|
|refundAmount|number|false|none|Numeric currency amount that will be refunded if this booking is cancelled now|
|refundPercentage|number|false|none|Percentage of the item price that will be refunded if this booking is cancelled now|

<h2 id="tocS_SearchFreetextResponse">SearchFreetextResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchfreetextresponse"></a>
<a id="schema_SearchFreetextResponse"></a>
<a id="tocSsearchfreetextresponse"></a>
<a id="tocssearchfreetextresponse"></a>

```json
{
  "searchType": "PRODUCT",
  "sortOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|**indicator** of the entity type for *this* result that is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|sortOrder|integer|false|none|**sort order** for *this* data object|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|PRODUCT|
|searchType|DESTINATION|
|searchType|ATTRACTION|
|searchType|RECOMMENDATION|

<h2 id="tocS_SearchFreetextResponseAttraction">SearchFreetextResponseAttraction</h2>
<!-- backwards compatibility -->
<a id="schemasearchfreetextresponseattraction"></a>
<a id="schema_SearchFreetextResponseAttraction"></a>
<a id="tocSsearchfreetextresponseattraction"></a>
<a id="tocssearchfreetextresponseattraction"></a>

```json
{
  "searchType": "PRODUCT",
  "sortOrder": 0,
  "data": {
    "attractionCity": 0,
    "attractionLatitude": 0,
    "attractionLongitude": 0,
    "attractionState": 0,
    "attractionStreetAddress": 0,
    "descriptionIntro": "string",
    "descriptionText": "string",
    "destinationId": 0,
    "editorsPick": true,
    "keywordCount": 0,
    "keywords": [
      "string"
    ],
    "overviewSummary": "string",
    "pagePrimaryLanguage": "string",
    "pageTitle": "string",
    "pageUrlName": "string",
    "panoramaCount": 0,
    "photoCount": 0,
    "primaryDestinationId": 0,
    "primaryDestinationName": "string",
    "primaryDestinationUrlName": "string",
    "productCount": 0,
    "publishedDate": "string",
    "rating": 0,
    "reviewCount": 0,
    "seoId": 0,
    "seoType": "string",
    "showPhotos": true,
    "showReviews": true,
    "sortOrder": 0,
    "tabTitle": "string",
    "thumbnailHiResURL": "string",
    "thumbnailURL": "string",
    "title": "string",
    "userName": "string",
    "webURL": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|**indicator** of the entity type for *this* result that is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|sortOrder|integer|false|none|**sort order** for *this* data object|
|data|object|false|none|**object** detailing **an attraction** that matches the search criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|PRODUCT|
|searchType|DESTINATION|
|searchType|ATTRACTION|
|searchType|RECOMMENDATION|

<h2 id="tocS_SearchFreetextResponseDestination">SearchFreetextResponseDestination</h2>
<!-- backwards compatibility -->
<a id="schemasearchfreetextresponsedestination"></a>
<a id="schema_SearchFreetextResponseDestination"></a>
<a id="tocSsearchfreetextresponsedestination"></a>
<a id="tocssearchfreetextresponsedestination"></a>

```json
{
  "searchType": "PRODUCT",
  "sortOrder": 0,
  "data": {
    "defaultCurrencyCode": "string",
    "destinationId": 0,
    "destinationName": "string",
    "destinationType": "CITY",
    "destinationUrlName": "string",
    "iataCode": "string",
    "latitude": 0,
    "longitude": 0,
    "lookupId": "string",
    "parentId": 0,
    "selectable": true,
    "sortOrder": 0,
    "timeZone": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|**indicator** of the entity type for *this* result that is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|sortOrder|integer|false|none|**sort order** for *this* data object|
|data|object|false|none|**object** detailing **a destination** that matches the search criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|PRODUCT|
|searchType|DESTINATION|
|searchType|ATTRACTION|
|searchType|RECOMMENDATION|

<h2 id="tocS_SearchFreetextResponseProduct">SearchFreetextResponseProduct</h2>
<!-- backwards compatibility -->
<a id="schemasearchfreetextresponseproduct"></a>
<a id="schema_SearchFreetextResponseProduct"></a>
<a id="tocSsearchfreetextresponseproduct"></a>
<a id="tocssearchfreetextresponseproduct"></a>

```json
{
  "searchType": "PRODUCT",
  "sortOrder": 0,
  "data": {
    "admission": "string",
    "attractionLatitude": "string",
    "attractionLongitude": "string",
    "available": true,
    "bookingEngineId": "FreesaleBE",
    "catIds": [
      0
    ],
    "code": "string",
    "currencyCode": "string",
    "duration": "string",
    "essential": "string",
    "merchantCancellable": true,
    "merchantNetPriceFrom": 0,
    "merchantNetPriceFromFormatted": "string",
    "onRequestPeriod": 0,
    "onSale": true,
    "panoramaCount": 0,
    "pas": {},
    "photoCount": 0,
    "price": 0,
    "priceFormatted": "string",
    "primaryDestinationId": 0,
    "primaryDestinationName": "string",
    "primaryDestinationUrlName": "string",
    "primaryGroupId": "string",
    "productURLName": "string",
    "publishedDate": "string",
    "rating": 0,
    "reviewCount": 0,
    "rrp": 0,
    "rrpformatted": "string",
    "savingAmount": "string",
    "savingAmountFormated": "string",
    "shortDescription": "string",
    "shortTitle": "string",
    "sortOrder": 0,
    "specialOfferAvailable": true,
    "specialReservation": true,
    "specialReservationDetails": "string",
    "sslSupported": true,
    "subCatIds": [
      0
    ],
    "supplierCode": "string",
    "supplierName": "string",
    "thumbnailHiResURL": "string",
    "thumbnailURL": "string",
    "title": "string",
    "translationLevel": 0,
    "uniqueShortDescription": "string",
    "videoCount": 0,
    "webURL": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|**indicator** of the entity type for *this* result that is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|sortOrder|integer|false|none|**sort order** for *this* data object|
|data|object|false|none|**object** detailing a **product** that matches the search criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|PRODUCT|
|searchType|DESTINATION|
|searchType|ATTRACTION|
|searchType|RECOMMENDATION|

<h2 id="tocS_SearchFreetextResponseRecommendation">SearchFreetextResponseRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemasearchfreetextresponserecommendation"></a>
<a id="schema_SearchFreetextResponseRecommendation"></a>
<a id="tocSsearchfreetextresponserecommendation"></a>
<a id="tocssearchfreetextresponserecommendation"></a>

```json
{
  "searchType": "PRODUCT",
  "sortOrder": 0,
  "data": {
    "attractionCity": "string",
    "attractionLatitude": 0,
    "attractionLongitude": 0,
    "attractionState": "string",
    "attractionStreetAddress": "string",
    "descriptionIntro": "string",
    "descriptionText": "string",
    "destinationId": 0,
    "editorsPick": true,
    "keywordCount": 0,
    "keywords": [
      "string"
    ],
    "overviewSummary": "string",
    "pagePrimaryLanguage": "string",
    "pageTitle": "string",
    "pageUrlName": "string",
    "panoramaCount": 0,
    "photoCount": 0,
    "primaryDestinationId": 0,
    "primaryDestinationName": "string",
    "primaryDestinationUrlName": "string",
    "productCount": 0,
    "publishedDate": "string",
    "rating": 0,
    "reviewCount": 0,
    "seoId": 0,
    "seoType": "string",
    "showPhotos": true,
    "showReviews": true,
    "sortOrder": 0,
    "tabTitle": "string",
    "thumbnailHiResURL": "string",
    "thumbnailURL": "string",
    "title": "string",
    "userName": "string",
    "webURL": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|**indicator** of the entity type for *this* result that is *one of*:<br>  - `"PRODUCT"`: a tour / activity<br>  - `"DESTINATION"`: continent, country, city, region<br>  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)<br>  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)<br>|
|sortOrder|integer|false|none|**sort order** for *this* data object|
|data|object|false|none|**object** detailing a **recommendation** that matches the search criteria|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|PRODUCT|
|searchType|DESTINATION|
|searchType|ATTRACTION|
|searchType|RECOMMENDATION|

<h2 id="tocS_ageBandId">ageBandId</h2>
<!-- backwards compatibility -->
<a id="schemaagebandid"></a>
<a id="schema_ageBandId"></a>
<a id="tocSagebandid"></a>
<a id="tocsagebandid"></a>

```json
0
```

**unique numeric identifier** for the age band
- See: [Working with age bands](#section/Appendices/Working-with-age-bands)

<h2 id="tocS_bandId">bandId</h2>
<!-- backwards compatibility -->
<a id="schemabandid"></a>
<a id="schema_bandId"></a>
<a id="tocSbandid"></a>
<a id="tocsbandid"></a>

```json
0
```

**unique numeric identifier** for the age band
- See: [Working with age bands](#section/Appendices/Working-with-age-bands)

<h2 id="tocS_basicErrorModel">basicErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemabasicerrormodel"></a>
<a id="schema_basicErrorModel"></a>
<a id="tocSbasicerrormodel"></a>
<a id="tocsbasicerrormodel"></a>

```json
{
  "dateStamp": "string",
  "errorCodes": [],
  "errorMessage": [
    null
  ],
  "errorMessageText": "string",
  "errorName": "string",
  "errorReference": "string",
  "errorType": "string",
  "extraInfo": {},
  "extraObject": {},
  "success": true,
  "totalCount": 0,
  "vmid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateStamp|string \| null|false|none|**timestamp** of *this* response|
|errorCodes|[string]|false|none|**array** of error codes pertaining to *this* error<br>- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes<br>|
|errorMessage|[object]|false|none|**array** of error message strings|
|errorMessageText|string \| null|false|none|**array** of error message strings in plain text|
|errorName|string \| null|false|none|**name** of *this* type of error|
|errorReference|string \| null|false|none|**reference number** of *this* error|
|errorType|string \| null|false|none|**code** specifying the type of error|
|extraInfo|object \| null|false|none|ignore (Viator only)|
|extraObject|object \| null|false|none|ignore (Viator only)|
|success|boolean \| null|false|none|**boolean indicator** of *this* request's outcome<br>- `true`: the request was successful with no errors<br>- `false`: an error was encountered<br>|
|totalCount|integer \| null|false|none|**number** of results available for *this* service<br>|
|vmid|string \| null|false|none|**unique numeric id** of the server that processed *this* request|

<h2 id="tocS_bookingEngineId">bookingEngineId</h2>
<!-- backwards compatibility -->
<a id="schemabookingengineid"></a>
<a id="schema_bookingEngineId"></a>
<a id="tocSbookingengineid"></a>
<a id="tocsbookingengineid"></a>

```json
"FreesaleBE"
```

**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made

*one of* the following:
- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification
- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified
- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.

If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period

<h2 id="tocS_bookingEngineId-response">bookingEngineId-response</h2>
<!-- backwards compatibility -->
<a id="schemabookingengineid-response"></a>
<a id="schema_bookingEngineId-response"></a>
<a id="tocSbookingengineid-response"></a>
<a id="tocsbookingengineid-response"></a>

```json
"UF"
```

[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made

*one of* the following:
- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately
- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.

<h2 id="tocS_bookingStatus_item">bookingStatus_item</h2>
<!-- backwards compatibility -->
<a id="schemabookingstatus_item"></a>
<a id="schema_bookingStatus_item"></a>
<a id="tocSbookingstatus_item"></a>
<a id="tocsbookingstatus_item"></a>

```json
{
  "amended": true,
  "cancelled": true,
  "confirmed": true,
  "failed": true,
  "level": "ITEM",
  "pending": true,
  "status": 0,
  "text": "string",
  "type": "WAITING"
}
```

**object** containing item booking status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amended|boolean|false|none|**indicator**: `true` if *this* item's booking has been amended|
|cancelled|boolean|false|none|**indicator**: `true` if *this* item's booking has been cancelled|
|confirmed|boolean|false|none|**indicator**: `true` if *this* item's booking is confirmed|
|failed|boolean|false|none|**indicator**: `true` if *this* item's booking has failed|
|level|string|false|none|**level** of *this* item's booking status|
|pending|boolean|false|none|**indicator**: `true` if *this* item's booking is pending|
|status|integer|false|none|**numeric identifier** of *this* item's booking status|
|text|string|false|none|**natural-language description** of *this* item's booking status; e.g., 'Waiting to be booked'|
|type|string|false|none|**specifier** of *this* item's booking status<br>* See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|level|ITEM|
|level|ITINERARY|
|type|WAITING|
|type|CONFIRMED|
|type|UNAVAILABLE|
|type|PENDING|
|type|FAILED|
|type|CANCELLED|
|type|EXPIRED|
|type|AMENDED|
|type|PENDING_AMEND|
|type|REJECTED|
|type|ON_HOLD|

<h2 id="tocS_bookingStatus_itinerary">bookingStatus_itinerary</h2>
<!-- backwards compatibility -->
<a id="schemabookingstatus_itinerary"></a>
<a id="schema_bookingStatus_itinerary"></a>
<a id="tocSbookingstatus_itinerary"></a>
<a id="tocsbookingstatus_itinerary"></a>

```json
{
  "amended": true,
  "cancelled": true,
  "confirmed": true,
  "failed": true,
  "level": "ITEM",
  "pending": true,
  "status": 0,
  "text": "string",
  "type": "WAITING"
}
```

**object** containing itinerary booking status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amended|boolean|false|none|**indicator**: `true` if *this* itinerary's booking has been amended|
|cancelled|boolean|false|none|**indicator**: `true` if *this* itinerary's booking has been cancelled|
|confirmed|boolean|false|none|**indicator**: `true` if *this* itinerary's booking is confirmed|
|failed|boolean|false|none|**indicator**: `true` if *this* itinerary's booking has failed|
|level|string|false|none|**level** of *this* itinerary's booking status|
|pending|boolean|false|none|**indicator**: `true` if *this* itinerary's booking is pending|
|status|integer|false|none|**numeric identifier** of *this* itinerary's booking status|
|text|string|false|none|**natural-language description** of *this* itinerary's booking status|
|type|string|false|none|**specifier** of *this* itinerary's booking status<br>* See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|level|ITEM|
|level|ITINERARY|
|type|WAITING|
|type|CONFIRMED|
|type|PENDING|
|type|FAILED|
|type|CANCELLED|
|type|AMENDED|
|type|PENDING_AMEND|

<h2 id="tocS_currencyCode">currencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_currencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"USD"
```

Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed

<h2 id="tocS_destinationType">destinationType</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtype"></a>
<a id="schema_destinationType"></a>
<a id="tocSdestinationtype"></a>
<a id="tocsdestinationtype"></a>

```json
"CITY"
```

**destination type specifier**
- `"COUNTRY"`: destination is a country
- `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
- `"CITY"`: destination is a city

<h2 id="tocS_iataCode">iataCode</h2>
<!-- backwards compatibility -->
<a id="schemaiatacode"></a>
<a id="schema_iataCode"></a>
<a id="tocSiatacode"></a>
<a id="tocsiatacode"></a>

```json
"string"
```

**IATA airport code** for the destination
- a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world
- the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'
- the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination

<h2 id="tocS_merchantNetPriceFrom">merchantNetPriceFrom</h2>
<!-- backwards compatibility -->
<a id="schemamerchantnetpricefrom"></a>
<a id="schema_merchantNetPriceFrom"></a>
<a id="tocSmerchantnetpricefrom"></a>
<a id="tocsmerchantnetpricefrom"></a>

```json
0
```

Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate

For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)

<h2 id="tocS_merchantNetPriceFromFormatted">merchantNetPriceFromFormatted</h2>
<!-- backwards compatibility -->
<a id="schemamerchantnetpricefromformatted"></a>
<a id="schema_merchantNetPriceFromFormatted"></a>
<a id="tocSmerchantnetpricefromformatted"></a>
<a id="tocsmerchantnetpricefromformatted"></a>

```json
"string"
```

Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)

For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)

<h2 id="tocS_onRequestPeriod">onRequestPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaonrequestperiod"></a>
<a id="schema_onRequestPeriod"></a>
<a id="tocSonrequestperiod"></a>
<a id="tocsonrequestperiod"></a>

```json
0
```

**number** of hours before the travel date that *this* product will be 'on-request' for
- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`
- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date
- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API

<h2 id="tocS_onSale">onSale</h2>
<!-- backwards compatibility -->
<a id="schemaonsale"></a>
<a id="schema_onSale"></a>
<a id="tocSonsale"></a>
<a id="tocsonsale"></a>

```json
true
```

Ignore (Viator only)

<h2 id="tocS_photoObject">photoObject</h2>
<!-- backwards compatibility -->
<a id="schemaphotoobject"></a>
<a id="schema_photoObject"></a>
<a id="tocSphotoobject"></a>
<a id="tocsphotoobject"></a>

```json
{
  "caption": "string",
  "editorsPick": true,
  "ownerAvatarURL": "string",
  "ownerCountry": "string",
  "ownerId": 0,
  "ownerName": "string",
  "photoHiResURL": "string",
  "photoId": 0,
  "photoMediumResURL": "string",
  "photoURL": "string",
  "productCode": "string",
  "productTitle": "string",
  "productUrlName": "string",
  "sortOrder": 0,
  "sslSupported": true,
  "thumbnailURL": "string",
  "timeUploaded": "string",
  "title": "string"
}
```

**object** detailing a single photo from a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|**HTML-formatted caption** for *this* photograph<br>- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol<br>|
|editorsPick|boolean|false|none|**indicator**: `true` if *this* photograph has been tagged as an *editor's pick*; i.e., can be given preference for display|
|ownerAvatarURL|string \| null|false|none|**URL** for the avatar image of the user that submitted *this* photograph|
|ownerCountry|string \| null|false|none|**country** in which the owner of *this* photograph is located|
|ownerId|integer|false|none|**unique numeric identifier** of the user that owns the photograph|
|ownerName|string|false|none|**handle** of the user that submitted *this* photograph; e.g., 'Husker1k'|
|photoHiResURL|string|false|none|**URL** of the high-resolution version of *this* photograph|
|photoId|integer|false|none|**unique numeric identifier** of *this* photograph|
|photoMediumResURL|string|false|none|**URL** of the medium-resolution version of *this* photograph|
|photoURL|string|false|none|**URL** for the standard-resolution version of *this* photograph|
|productCode|string|false|none|**product code** for the product that *this* photograph is of|
|productTitle|string|false|none|**natural-language title** of the product associated with *this* photograph; e.g., 'Sydney and Bondi Hop-on Hop-off Tour'|
|productUrlName|string|false|none|**URL-formatted title** of the product associated with *this* photograph; e.g., `Sydney-and-Bondi-Hop-on-Hop-off-Tour`|
|sortOrder|integer|false|none|**sort order** for *this* photograph; e.g., `3`|
|sslSupported|boolean|false|none|ignore (Viator only)|
|thumbnailURL|string|false|none|**URL** of *this* product's thumbnail image|
|timeUploaded|string|false|none|**date** on which *this* photograph was submitted|
|title|string|false|none|**title** of *this* photograph|

<h2 id="tocS_price">price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
0
```

**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.


  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)

<h2 id="tocS_priceFormatted">priceFormatted</h2>
<!-- backwards compatibility -->
<a id="schemapriceformatted"></a>
<a id="schema_priceFormatted"></a>
<a id="tocSpriceformatted"></a>
<a id="tocspriceformatted"></a>

```json
"string"
```

**currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter

- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)

<h2 id="tocS_rating">rating</h2>
<!-- backwards compatibility -->
<a id="schemarating"></a>
<a id="schema_rating"></a>
<a id="tocSrating"></a>
<a id="tocsrating"></a>

```json
0
```

**average user rating** of *this* product

users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;

the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received

<h2 id="tocS_ratingCounts">ratingCounts</h2>
<!-- backwards compatibility -->
<a id="schemaratingcounts"></a>
<a id="schema_ratingCounts"></a>
<a id="tocSratingcounts"></a>
<a id="tocsratingcounts"></a>

```json
{
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0
}
```

**dictionary** of rating (stars) to number of reviews with each rating for *this* product"

users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)

- **note**: see response sample for structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|1|number|false|none|Number of reviews with a one star rating|
|2|number|false|none|Number of reviews with a two star rating|
|3|number|false|none|Number of reviews with a three star rating|
|4|number|false|none|Number of reviews with a four star rating|
|5|number|false|none|Number of reviews with a five star rating|

<h2 id="tocS_reviewCount">reviewCount</h2>
<!-- backwards compatibility -->
<a id="schemareviewcount"></a>
<a id="schema_reviewCount"></a>
<a id="tocSreviewcount"></a>
<a id="tocsreviewcount"></a>

```json
0
```

**number** of user reviews that have been submitted by users for *this* product

If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.

<h2 id="tocS_reviewObject">reviewObject</h2>
<!-- backwards compatibility -->
<a id="schemareviewobject"></a>
<a id="schema_reviewObject"></a>
<a id="tocSreviewobject"></a>
<a id="tocsreviewobject"></a>

```json
{
  "ownerAvatarURL": "string",
  "ownerCountry": "string",
  "ownerId": 0,
  "ownerName": "string",
  "productCode": "string",
  "productTitle": "string",
  "productUrlName": "string",
  "publishedDate": "string",
  "rating": 0,
  "review": "string",
  "reviewId": 0,
  "sortOrder": 0,
  "sslSupported": true,
  "submissionDate": "string",
  "viatorFeedback": "string",
  "viatorNotes": "string"
}
```

**object** containing a single user review

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerAvatarURL|string \| null|false|none|**URL** of the reviewer's avatar image|
|ownerCountry|string \| null|false|none|**country** in which the reviewer is located|
|ownerId|integer|false|none|**unique numeric identifier** of the user that submitted *this* review|
|ownerName|string|false|none|**name** of the user that submitted *this* review|
|productCode|string|false|none|**product code** of the product that *this* review is about; e.g., `5010SYDNEY`|
|productTitle|string|false|none|**title** of the product that *this* review is about|
|productUrlName|string|false|none|**URL-formatted title** of the product that *this* review is about|
|publishedDate|string|false|none|**date** that *this* review was published|
|rating|integer|false|none|**rating** given by the reviewer|
|review|string|false|none|**HTML-formatted content** of the review<br>- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol<br>|
|reviewId|integer|false|none|**unique numeric identifier** of *this* review|
|sortOrder|integer|false|none|**sort order** for *this* review|
|sslSupported|boolean|false|none|ignore (Viator only)|
|submissionDate|string|false|none|**date** that *this* review was submitted|
|viatorFeedback|string|false|none|ignore (Viator only)|
|viatorNotes|string|false|none|ignore (Viator only)|

<h2 id="tocS_reviews">reviews</h2>
<!-- backwards compatibility -->
<a id="schemareviews"></a>
<a id="schema_reviews"></a>
<a id="tocSreviews"></a>
<a id="tocsreviews"></a>

```json
[
  {
    "ownerAvatarURL": "string",
    "ownerCountry": "string",
    "ownerId": 0,
    "ownerName": "string",
    "productCode": "string",
    "productTitle": "string",
    "productUrlName": "string",
    "publishedDate": "string",
    "rating": 0,
    "review": "string",
    "reviewId": 0,
    "sortOrder": 0,
    "sslSupported": true,
    "submissionDate": "string",
    "viatorFeedback": "string",
    "viatorNotes": "string"
  }
]
```

**array** of user review objects

The number of reviews returned here will either be the number of reviews you are entitled to according to your account configuration; or, if you are not limited in the number of reviews you can receive, will be a maxiumum of 24 reviews. If the value of `reviewCount` in this response exceeds 24, you can use the [/product/reviews](#operation/productReviews) endpoint to retrieve the remainder of the reviews.

<h2 id="tocS_rrp">rrp</h2>
<!-- backwards compatibility -->
<a id="schemarrp"></a>
<a id="schema_rrp"></a>
<a id="tocSrrp"></a>
<a id="tocsrrp"></a>

```json
0
```

**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.

<h2 id="tocS_rrpFormatted">rrpFormatted</h2>
<!-- backwards compatibility -->
<a id="schemarrpformatted"></a>
<a id="schema_rrpFormatted"></a>
<a id="tocSrrpformatted"></a>
<a id="tocsrrpformatted"></a>

```json
"string"
```

**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.

<h2 id="tocS_savingAmount">savingAmount</h2>
<!-- backwards compatibility -->
<a id="schemasavingamount"></a>
<a id="schema_savingAmount"></a>
<a id="tocSsavingamount"></a>
<a id="tocssavingamount"></a>

```json
"string"
```

Ignore (Viator only)

<h2 id="tocS_savingAmountFormated">savingAmountFormated</h2>
<!-- backwards compatibility -->
<a id="schemasavingamountformated"></a>
<a id="schema_savingAmountFormated"></a>
<a id="tocSsavingamountformated"></a>
<a id="tocssavingamountformated"></a>

```json
"string"
```

Ignore (Viator only)

<h2 id="tocS_sortOrder">sortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_sortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"TOP_SELLERS"
```

**sort order** in which to return the results that is *one of*:

  - `'TOP_SELLERS'`: the top sellers
  - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)
  - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)
  - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)
  - `'PRICE_FROM_D'`: descending by price (high -&gt; low)

<h2 id="tocS_specialOffer">specialOffer</h2>
<!-- backwards compatibility -->
<a id="schemaspecialoffer"></a>
<a id="schema_specialOffer"></a>
<a id="tocSspecialoffer"></a>
<a id="tocsspecialoffer"></a>

```json
"string"
```

**natural-language description** of any special offers available for *this* product when `specialOfferAvailable` is `true`.
- empty string if there are no specials available
- See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.

<h2 id="tocS_specialOfferAvailable">specialOfferAvailable</h2>
<!-- backwards compatibility -->
<a id="schemaspecialofferavailable"></a>
<a id="schema_specialOfferAvailable"></a>
<a id="tocSspecialofferavailable"></a>
<a id="tocsspecialofferavailable"></a>

```json
true
```

**indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.

<h2 id="tocS_topX">topX</h2>
<!-- backwards compatibility -->
<a id="schematopx"></a>
<a id="schema_topX"></a>
<a id="tocStopx"></a>
<a id="tocstopx"></a>

```json
"string"
```

**start and end rows** to return in the format {start}-{end}
- e.g. `'1-10'`, `'11-20'`

**Note**: 
- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
- if `topX` is not specified, the default is `'1-100'`

<h2 id="tocS_translationLevel">translationLevel</h2>
<!-- backwards compatibility -->
<a id="schematranslationlevel"></a>
<a id="schema_translationLevel"></a>
<a id="tocStranslationlevel"></a>
<a id="tocstranslationlevel"></a>

```json
0
```

**numeric indicator** of the language translation level for *this* product that is one of:
- `0`: no translation (English only)
- `80`: full machine translation
- `100`: full human translation

See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information

<h2 id="tocS_webURL">webURL</h2>
<!-- backwards compatibility -->
<a id="schemaweburl"></a>
<a id="schema_webURL"></a>
<a id="tocSweburl"></a>
<a id="tocsweburl"></a>

```json
"string"
```

ignore (Viator only)
