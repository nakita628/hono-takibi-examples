<h1 id="impala-hotel-booking-api">Impala Hotel Booking API v1.003</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Add room selling to your app with ease, or expand your existing hotel portfolio. Access all the marketing material you need to sell a room, from hotel amenities to images. Constantly updated, ever expanding and always correct. Impala allows you to start selling hotel rooms and earn a commission with every booking in hours.

Getting started is easy:

> **1. Sign-up within seconds**: Head to the [Impala website](https://impala.travel), enter your details and receive your sandbox API key immediately (no credit card needed).

> **2. Start building within minutes**: Build against a sandbox API with realistic test data. Use a [step-by-step walkthrough](https://impala.travel) to see what's possible. Check for available hotels and their rates. Make and manage fake bookings without any risk. Add room booking to your existing website or app, or start an online travel agency from scratch. [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/11303451-9b241872-9961-424d-9ef4-9d949534567d?action=collection%2Ffork&collection-url=entityId%3D11303451-9b241872-9961-424d-9ef4-9d949534567d%26entityType%3Dcollection%26workspaceId%3D5ae55f12-332c-4e7d-8acc-3e75df3b2ee2)

> **3. Go live within hours**: Once your app or integration is ready for prime time, move to production within your Impala dashboard and start making real hotel bookings for your customers right away.

Want to see how it all works? Watch [a 5-minute walkthrough](https://www.youtube.com/watch?v=7B3evCL3nrY) of the two API requests you need to make a booking, and a demo of one of our customer's apps.

Base URLs:

* <a href="https://sandbox.impala.travel/v1">https://sandbox.impala.travel/v1</a> - Hotel Booking API Sandbox

* <a href="https://api.impala.travel/v1">https://api.impala.travel/v1</a> - Hotel Booking API Production

<a href="https://impala.travel/terms-and-conditions/">Terms of service</a>
Email: <a href="mailto:support@impala.travel">Impala Developer Support</a> 
Web: <a href="https://docs.impala.travel/">Impala Developer Support</a> 

# Authentication

* API Key (API_Key_Authentication)
    - Parameter Name: **x-api-key**, in: header.

- HTTP Authentication, scheme: bearer

<h1 id="impala-hotel-booking-api-hotels">Hotels</h1>

Accessing hotel content, available rooms and rates.

## List all hotels

<a id="opIdlistHotels"></a>

> Code samples

```bash
curl https://example.com/hotels \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /hotels`

Returns a list of all hotels worldwide that can be booked through Impala.

You can **filter** the results:

* Adding `longitude`, `latitude` and a `radius` (in meters) query parameters will filter the results to hotels around this location.
* Adding `start` and `end` dates (in ISO 8601 notation, e.g. `2021-12-31`) for the expected arrival and departure dates of your guests will limit the results to hotels that have at least one room bookable for this timeframe.
* Adding `starRating`, `name` or `country` allows you to filter to hotels based on these values (e.g. `?starRating[gte]=4&name[like]=palace` for hotels with a rating of 4 or up with a name containing "palace")
* Adding `hotelIds` allows you to limit the results to include only hotels with the ids listed. Its value should be a comma-separated list of hotel ids (e.g. `?hotelIds[]=hotelIdA,hotelIdB`)

* Adding `contractable` allows you to filter to hotels that you can directly negotiate with through our [deals feature](https://docs.impala.travel/docs/booking-api/ZG9jOjcyNjgzMTA-contracting-with-hotels). (e.g `?contractable=true` or `?contractable=false`)

You can specify the **sorting order** in which hotels are returned:
* This is done by using the `sortBy` query parameter.
* Results can be sorted by `name` alphabetically, star `rating` and `distance_m` (in meters from the specified latitude/longitude location).
* The parameter allows for a comma-separated list of arguments with optional `:asc` (ascending, the default if the modifier is omitted) and `:desc` (descending) modifiers.

If no hotels match your filter criteria, an empty array will be returned.

<h3 id="list-all-hotels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|object|false|Allows for filtering based on the property name. Available modifiers include equal to (`eq`) or case insensitive search (`like`). Usage example: `?name[like]=palace`|
|starRating|query|object|false|Allows for filtering based on the starRating of a property. Available modifiers include less than (`lt`), greater than (`gt`), less than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?starRating[gt]=3&starRating[lt]=5`|
|country|query|object|false|Allows for filtering based on the country of a property. The only available modifier for this parameter is equal to (`eq`). Usage example: `?country[eq]=GBR`|
|start|query|string|false|The arrival day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).|
|end|query|string|false|The departure day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).|
|latitude|query|number(double)|false|The WGS 84 latitude of the location to search around (e.g. `58.386186`).|
|longitude|query|number(double)|false|The WGS 84 longitude of the location to search around (e.g. `-9.952549`).|
|radius|query|integer(int32)|false|The distance (in meters) to search around the specified location (e.g. `10000` for 10 km).|
|hotelIds|query|[string]|false|A comma-separated list of hotel ids you wish to filter by (e.g. `60a06628-2c71-44bf-9685-efbd2df4179e,60a06628-2c71-44bf-9685-efbd2df4179e`).|
|created|query|object|false|Allows for filtering based on the date and time when this hotel was first added to the Impala platform, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?created[lte]=2020-11-04T19:37:37Z&created[gte]=2020-11-04T15:56:37.000Z`|
|updated|query|object|false|Allows for filtering based on the date and time the content of this hotel was last updated, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?updated[lte]=2020-11-04T19:37:37Z&updated[gte]=2020-11-04T15:56:37.000Z`|
|size|query|number(int32)|false|Number of hotels returned on a given page (pagination).|
|offset|query|number(int32)|false|Offset from the first hotel in the result (for pagination).|
|sortBy|query|string|false|Order in which the results should be sorted. Currently allows you to sort by `name` (alphabetical), star `rating`, and `distance_m` in meters from the specified latitude/longitude. Allows for a comma-separated list of of arguments with modifiers for `:asc` (ascending) and `:desc` (descending) ordering.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": {
        "city": "Impalaland",
        "country": "GBR",
        "countryName": "United Kingdom of Great Britain and Northern Ireland",
        "line1": "456 Impala Street",
        "line2": null,
        "postalCode": "0987-654",
        "region": "Impalaland Beach"
      },
      "amenities": [
        {
          "code": 5,
          "formatted": "Air conditioning"
        },
        {
          "code": 7,
          "formatted": "ATM/Cash machine"
        },
        {
          "code": 8,
          "formatted": "Baby sitting"
        },
        {
          "code": 9,
          "formatted": "BBQ/Picnic area"
        },
        {
          "code": 14,
          "formatted": "Business library"
        },
        {
          "code": 16,
          "formatted": "Casino"
        },
        {
          "code": 22,
          "formatted": "Concierge desk"
        }
      ],
      "checkIn": {
        "from": "15:00"
      },
      "checkOut": {
        "to": "12:00"
      },
      "contractable": true,
      "createdAt": "2020-12-18T13:29:22.865Z",
      "currency": "GBP",
      "description": {
        "short": "This fictional example hotel allows you to experience all the content, rates and features the Impala platform (https://impala.travel) has to offer. Testing with this hotel allows you to experience the full breadth of functionality and rate options hotels might offer on Impala – and to ensure your app displays everything correctly."
      },
      "emails": [
        "mail@impala-all-avaialable-resort.hotel"
      ],
      "externalUrls": [
        {
          "name": "BOOKING.COM",
          "url": "https://www.booking.com/hotel/im/impala"
        },
        {
          "name": "HOTELS.COM",
          "url": "https://uk.hotels.com/imp123456/"
        }
      ],
      "hotelId": "0e25533a-2db2-4894-9db1-4c1ff92d798c",
      "images": [
        {
          "altText": null,
          "height": 1536,
          "isHeroImage": true,
          "url": "https://cdn.impala.travel/properties/ckiuattho00013e6ar0tiilgt.jpg",
          "width": 2884
        },
        {
          "altText": null,
          "height": 2461,
          "isHeroImage": false,
          "url": "https://cdn.impala.travel/properties/ckiuavcvm00023e6aordygdiy.jpg",
          "width": 3072
        },
        {
          "altText": null,
          "height": 3640,
          "isHeroImage": false,
          "url": "https://cdn.impala.travel/properties/ckiuavvr100033e6ajep6w5dl.jpg",
          "width": 2912
        },
        {
          "altText": null,
          "height": 2848,
          "isHeroImage": false,
          "url": "https://cdn.impala.travel/properties/ckiuawdeo00043e6ajyqc70nm.jpg",
          "width": 4288
        },
        {
          "altText": null,
          "height": 3072,
          "isHeroImage": false,
          "url": "https://cdn.impala.travel/properties/ckiuawt9y00053e6a76l0qgqe.jpg",
          "width": 4608
        }
      ],
      "location": {
        "latitude": 58.386186,
        "longitude": -9.952549
      },
      "name": "Impala All-Inclusive Always Available Resort (Example Hotel)",
      "phoneNumbers": [
        "+48789789789"
      ],
      "roomCount": 200,
      "roomTypes": [
        {
          "amenities": [
            {
              "code": 11,
              "formatted": "Bathroom amenities (free toiletries)"
            },
            {
              "code": 15,
              "formatted": "Bath or Shower"
            },
            {
              "code": 28,
              "formatted": "Desk"
            },
            {
              "code": 50,
              "formatted": "Hairdryer"
            },
            {
              "code": 69,
              "formatted": "Minibar"
            },
            {
              "code": 85,
              "formatted": "Private bathroom"
            },
            {
              "code": 123,
              "formatted": "Wireless internet connection"
            },
            {
              "code": 144,
              "formatted": "Soundproofed room"
            },
            {
              "code": 210,
              "formatted": "Satellite television"
            },
            {
              "code": 228,
              "formatted": "Slippers"
            }
          ],
          "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
          "images": [
            {
              "altText": null,
              "height": 3255,
              "url": "https://cdn.impala.travel/area-types/ckiub6h8c00093e6ag7kufw24.jpg",
              "width": 4890
            }
          ],
          "maxOccupancy": 1,
          "name": "Single Room",
          "rates": [
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 10500,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.718"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "b0e2ec0fa2ae1b3697f467393558a69a:474f39c17490c46b4e622da1bffbd5c1",
              "ratePlanId": 1,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 10500,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.718"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 12600,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "17b005e4c35575b654171d4589191b5d:bd277330e925805cad8686093554efe5",
              "ratePlanId": 2,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 12600,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 9975,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.718"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "058e478777fe3b4248670c6d6be3722c:06bbe6754161b5991e02e51849c6ae83",
              "ratePlanId": 3,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 9975,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.718"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 11970,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "38143de2077774891c4f136d86ce817a:7fa93ac18e3851dec34dead83648148f",
              "ratePlanId": 4,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 11970,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            }
          ],
          "roomTypeId": "7b4e914f-0551-4fdc-b349-db3c32c5afed"
        },
        {
          "amenities": [
            {
              "code": 228,
              "formatted": "Slippers"
            },
            {
              "code": 144,
              "formatted": "Soundproofed room"
            },
            {
              "code": 210,
              "formatted": "Satellite television"
            },
            {
              "code": 11,
              "formatted": "Bathroom amenities (free toiletries)"
            },
            {
              "code": 15,
              "formatted": "Bath or Shower"
            },
            {
              "code": 28,
              "formatted": "Desk"
            },
            {
              "code": 50,
              "formatted": "Hairdryer"
            },
            {
              "code": 69,
              "formatted": "Minibar"
            },
            {
              "code": 85,
              "formatted": "Private bathroom"
            },
            {
              "code": 123,
              "formatted": "Wireless internet connection"
            }
          ],
          "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
          "images": [
            {
              "altText": null,
              "height": 3024,
              "url": "https://cdn.impala.travel/area-types/ckiub0igb00063e6am6q2b0w3.jpg",
              "width": 4032
            }
          ],
          "maxOccupancy": 2,
          "name": "Junior Suite",
          "rates": [
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 31500,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "b815b95a5b6a847b7b0c09c1a9ea5827:77a228b50273fad2c224468c91739c3c",
              "ratePlanId": 1,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 31500,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 28875,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "bcd9e5f11c6e747374d63d635b6f2d07:f5d244b004c18e3fef40606f83b72e76",
              "ratePlanId": 22,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 28875,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 29925,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "e3d5af44011974bf705e792735778b44:88853f3b36a97a6adf8009d97102ad79",
              "ratePlanId": 11,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 29925,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 27431,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "5c0db8cb17c9e5316b2a62bda48f1dd4:39b27339fc838dfbfc48216e22a8ce44",
              "ratePlanId": 19,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 27431,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            }
          ],
          "roomTypeId": "280b6f5a-c645-44c0-a63d-03f1d7bc3d55"
        },
        {
          "amenities": [
            {
              "code": 2,
              "formatted": "Air conditioning"
            },
            {
              "code": 228,
              "formatted": "Slippers"
            },
            {
              "code": 210,
              "formatted": "Satellite television"
            },
            {
              "code": 144,
              "formatted": "Soundproofed room"
            },
            {
              "code": 123,
              "formatted": "Wireless internet connection"
            },
            {
              "code": 85,
              "formatted": "Private bathroom"
            },
            {
              "code": 69,
              "formatted": "Minibar"
            },
            {
              "code": 50,
              "formatted": "Hairdryer"
            },
            {
              "code": 28,
              "formatted": "Desk"
            },
            {
              "code": 15,
              "formatted": "Bath or Shower"
            },
            {
              "code": 11,
              "formatted": "Bathroom amenities (free toiletries)"
            }
          ],
          "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
          "images": [
            {
              "altText": null,
              "height": 6000,
              "url": "https://cdn.impala.travel/area-types/ckiub4vym00083e6amqnt3a6u.jpg",
              "width": 4000
            }
          ],
          "maxOccupancy": 2,
          "name": "Double Room",
          "rates": [
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 14700,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.719"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "470a4b225742d213e9182a8ca650fe61:7b5f9d774a96e402438537b1e73fcfe5",
              "ratePlanId": 1,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 14700,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 15750,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "19ba73ba97cda6d3febfe533acc25ba1:338e5ff8073767a23fdf0edc4cec1892",
              "ratePlanId": 2,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 15750,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.719"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 16800,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "e7df0bcb2d335124b609ad188b1c364d:7bee69f1eafb714cadcbd90bd06cf66d",
              "ratePlanId": 3,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 16800,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 13650,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.719"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "2463f0474c058652951adbefd3bc8ff2:f2873919bedce820524ded4e2947e9b5",
              "ratePlanId": 22,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 13650,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 13965,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.719"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "022166b0c439dc27b83a96be5e561d97:fc7b648edf136c63b7114a2d13bfc02d",
              "ratePlanId": 23,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 13965,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 14962,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "35a9baa5068ba59163e930b14af4949b:bf061e368daac6ac9d57172d91f01f1b",
              "ratePlanId": 9,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 14962,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 15960,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "caf9b66563911b0e1525debcd9cf0ada:6fa29977e8403d97cfca5f6dcd6da6eb",
              "ratePlanId": 11,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 15960,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 12967,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.720"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "891394f48e8ab2f406f4a9087c840768:933a218d184e74c5a67a59a649f4285f",
              "ratePlanId": 4,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 12967,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            }
          ],
          "roomTypeId": "8cb8ce9e-221a-4220-a358-35b6852fb359"
        },
        {
          "amenities": [
            {
              "code": 228,
              "formatted": "Slippers"
            },
            {
              "code": 144,
              "formatted": "Soundproofed room"
            },
            {
              "code": 123,
              "formatted": "Wireless internet connection"
            },
            {
              "code": 85,
              "formatted": "Private bathroom"
            },
            {
              "code": 69,
              "formatted": "Minibar"
            },
            {
              "code": 50,
              "formatted": "Hairdryer"
            },
            {
              "code": 28,
              "formatted": "Desk"
            },
            {
              "code": 15,
              "formatted": "Bath or Shower"
            },
            {
              "code": 11,
              "formatted": "Bathroom amenities (free toiletries)"
            }
          ],
          "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
          "images": [
            {
              "altText": null,
              "height": 4480,
              "url": "https://cdn.impala.travel/area-types/ckiub3dw100073e6alkifv3ok.jpg",
              "width": 6720
            }
          ],
          "maxOccupancy": 4,
          "name": "Presidential Suite",
          "rates": [
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 47250,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "42efaad56d0f614f5cc65e0c5c30669f:1866b6b4e0b2ca054a68ee58565fc6e9",
              "ratePlanId": 3,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 47250,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 42000,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.720"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "2fb14f477f41541d5598b61aab21f1b4:afc6e4cfb689d05fd17e9780be16af9d",
              "ratePlanId": 2,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 42000,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 44625,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "896624e8d1733cf9f533d58080b0f217:f77b2b8805413ec948c3f609eb241c33",
              "ratePlanId": 4,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 44625,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 39900,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.720"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "0fc4232f1726473c3f12c99849262e84:3fca5c554e779783c73a5ea293da831f",
              "ratePlanId": 5,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 39900,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 10,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 44887,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "1471020e7f634138b7088a081e45231a:15006e156c471ef4a22d38fee7f84c68",
              "ratePlanId": 22,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 44887,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 39900,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.720"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 2,
              "rateId": "23888f2637881fed0fb1253d2ebeace6:a844bb82cab7f71f0514a7d458dfec99",
              "ratePlanId": 7,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 39900,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "end": "2021-06-28 23:59:59.999",
                  "fee": {
                    "price": {
                      "amount": 0,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "NONE"
                  },
                  "formatted": "Fully refundable until June 28, 2021 23:59",
                  "start": "2021-03-11 00:23:35.720"
                },
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 42393,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after June 29, 2021 00:00",
                  "start": "2021-06-29 00:00:00.000"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "bacf1877347d8936da6ea4b9609f2e06:3b8938ba186b5788dae45a868d1a5228",
              "ratePlanId": 9,
              "retailRate": {
                "deal": {
                  "conditions": [],
                  "dealId": "D3",
                  "discount": {
                    "count": 5,
                    "type": "PERCENTAGE"
                  }
                },
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 42393,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            },
            {
              "cancellationPolicies": [
                {
                  "fee": {
                    "count": 100,
                    "price": {
                      "amount": 37905,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "type": "PERCENTAGE"
                  },
                  "formatted": "Non-refundable after March 11, 2021 00:23",
                  "start": "2021-03-11 00:23:35.720"
                }
              ],
              "components": [],
              "end": "2021-07-02",
              "hotelAgreement": null,
              "maxOccupancy": 1,
              "rateId": "7f1f053b76157a70e19cade3e38fd763:8f82c19071c9f4d12f5bdf92e181c140",
              "ratePlanId": 8,
              "retailRate": {
                "taxesAndFees": {
                  "includedInRate": [],
                  "payAtHotel": []
                },
                "total": {
                  "amount": 37905,
                  "currency": {
                    "code": "EUR"
                  }
                }
              },
              "sellerCommissionPercentage": 15,
              "start": "2021-07-01"
            }
          ],
          "roomTypeId": "1bd16eed-e10f-47f6-8f28-67c40deb4f3b"
        }
      ],
      "starRating": 5,
      "termsAndConditions": "",
      "updatedAt": "2021-02-17T09:07:41.615Z",
      "websiteUrl": "https://impala-all-avaialable-resort.hotel/"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 500 Response

```json
{
  "message": "InternalServerError"
}
```

<h3 id="list-all-hotels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of hotels.|Inline|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<h3 id="list-all-hotels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[hotelFullDetail](#schemahotelfulldetail)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|Information that helps paginate through lists of resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Retrieve a hotel

<a id="opIdretrieveHotel"></a>

> Code samples

```bash
curl https://example.com/hotels/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /hotels/{hotelId}`

Returns the full content, room types and rates for the specified hotel.

When querying the hotels API you can query with or without dates. Where querying with dates requires providing valid values for the `start` and `end` parameters. Requests without these values will be considered a query without dates.

**Querying without dates:**

When you query without dates, the search result will include all properties that match your request. Including all content that is associated with those properties. However you will find that the `rates` attribute for each room will always be empty.

**Querying with dates:**

When you query with dates, the search result will include all properties that match your request, including all content that is associated with those properties. Rooms which do not have available prices for the provided dates will appear with an empty `rates` array.

For rooms where there are available prices the `rates` array will include both the public rates of the hotel, along with prices that come from deals in which you are participating. This would include private deals which you have negotiated with a hotel, along with Impala deals which you have been verified for.

Using the `rateId` of any of those rates, you can use the [Create a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post) endpoint to make a booking.

<h3 id="retrieve-a-hotel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hotelId|path|string(uuid)|true|The unique identifier of this hotel on the Impala platform.|
|start|query|string|false|The arrival day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).|
|end|query|string|false|The departure day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).|

> Example responses

> 200 Response

```json
{
  "address": {
    "city": "Impalaland",
    "country": "GBR",
    "countryName": "United Kingdom of Great Britain and Northern Ireland",
    "line1": "456 Impala Street",
    "line2": null,
    "postalCode": "0987-654",
    "region": "Impalaland Beach"
  },
  "amenities": [
    {
      "code": 5,
      "formatted": "Air conditioning"
    },
    {
      "code": 7,
      "formatted": "ATM/Cash machine"
    },
    {
      "code": 8,
      "formatted": "Baby sitting"
    },
    {
      "code": 9,
      "formatted": "BBQ/Picnic area"
    },
    {
      "code": 14,
      "formatted": "Business library"
    },
    {
      "code": 16,
      "formatted": "Casino"
    },
    {
      "code": 22,
      "formatted": "Concierge desk"
    }
  ],
  "checkIn": {
    "from": "15:00"
  },
  "checkOut": {
    "to": "12:00"
  },
  "contractable": true,
  "createdAt": "2020-12-18T13:29:22.865Z",
  "currency": "GBP",
  "description": {
    "short": "This fictional example hotel allows you to experience all the content, rates and features the Impala platform (https://impala.travel) has to offer. Testing with this hotel allows you to experience the full breadth of functionality and rate options hotels might offer on Impala – and to ensure your app displays everything correctly."
  },
  "emails": [
    "mail@impala-all-avaialable-resort.hotel"
  ],
  "externalUrls": [
    {
      "name": "BOOKING.COM",
      "url": "https://www.booking.com/hotel/im/impala"
    },
    {
      "name": "HOTELS.COM",
      "url": "https://uk.hotels.com/imp123456/"
    }
  ],
  "hotelId": "0e25533a-2db2-4894-9db1-4c1ff92d798c",
  "images": [
    {
      "altText": null,
      "height": 1536,
      "isHeroImage": true,
      "url": "https://cdn.impala.travel/properties/ckiuattho00013e6ar0tiilgt.jpg",
      "width": 2884
    },
    {
      "altText": null,
      "height": 2461,
      "isHeroImage": false,
      "url": "https://cdn.impala.travel/properties/ckiuavcvm00023e6aordygdiy.jpg",
      "width": 3072
    },
    {
      "altText": null,
      "height": 3640,
      "isHeroImage": false,
      "url": "https://cdn.impala.travel/properties/ckiuavvr100033e6ajep6w5dl.jpg",
      "width": 2912
    },
    {
      "altText": null,
      "height": 2848,
      "isHeroImage": false,
      "url": "https://cdn.impala.travel/properties/ckiuawdeo00043e6ajyqc70nm.jpg",
      "width": 4288
    },
    {
      "altText": null,
      "height": 3072,
      "isHeroImage": false,
      "url": "https://cdn.impala.travel/properties/ckiuawt9y00053e6a76l0qgqe.jpg",
      "width": 4608
    }
  ],
  "location": {
    "latitude": 58.386186,
    "longitude": -9.952549
  },
  "name": "Impala All-Inclusive Always Available Resort (Example Hotel)",
  "phoneNumbers": [
    "+48789789789"
  ],
  "roomCount": 200,
  "roomTypes": [
    {
      "amenities": [
        {
          "code": 11,
          "formatted": "Bathroom amenities (free toiletries)"
        },
        {
          "code": 15,
          "formatted": "Bath or Shower"
        },
        {
          "code": 28,
          "formatted": "Desk"
        },
        {
          "code": 50,
          "formatted": "Hairdryer"
        },
        {
          "code": 69,
          "formatted": "Minibar"
        },
        {
          "code": 85,
          "formatted": "Private bathroom"
        },
        {
          "code": 123,
          "formatted": "Wireless internet connection"
        },
        {
          "code": 144,
          "formatted": "Soundproofed room"
        },
        {
          "code": 210,
          "formatted": "Satellite television"
        },
        {
          "code": 228,
          "formatted": "Slippers"
        }
      ],
      "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
      "images": [
        {
          "altText": null,
          "height": 3255,
          "url": "https://cdn.impala.travel/area-types/ckiub6h8c00093e6ag7kufw24.jpg",
          "width": 4890
        }
      ],
      "maxOccupancy": 1,
      "name": "Single Room",
      "rates": [
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 10500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.718"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "notes": {
            "fromGuest": "",
            "fromSeller": ""
          },
          "rateId": "b0e2ec0fa2ae1b3697f467393558a69a:474f39c17490c46b4e622da1bffbd5c1",
          "ratePlanId": 7,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 10500,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.718"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 12600,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "17b005e4c35575b654171d4589191b5d:bd277330e925805cad8686093554efe5",
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 12600,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 9975,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.718"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "058e478777fe3b4248670c6d6be3722c:06bbe6754161b5991e02e51849c6ae83",
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 9975,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.718"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 11970,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "38143de2077774891c4f136d86ce817a:7fa93ac18e3851dec34dead83648148f",
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 11970,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        }
      ],
      "roomTypeId": "7b4e914f-0551-4fdc-b349-db3c32c5afed"
    },
    {
      "amenities": [
        {
          "code": 228,
          "formatted": "Slippers"
        },
        {
          "code": 144,
          "formatted": "Soundproofed room"
        },
        {
          "code": 210,
          "formatted": "Satellite television"
        },
        {
          "code": 11,
          "formatted": "Bathroom amenities (free toiletries)"
        },
        {
          "code": 15,
          "formatted": "Bath or Shower"
        },
        {
          "code": 28,
          "formatted": "Desk"
        },
        {
          "code": 50,
          "formatted": "Hairdryer"
        },
        {
          "code": 69,
          "formatted": "Minibar"
        },
        {
          "code": 85,
          "formatted": "Private bathroom"
        },
        {
          "code": 123,
          "formatted": "Wireless internet connection"
        }
      ],
      "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
      "images": [
        {
          "altText": null,
          "height": 3024,
          "url": "https://cdn.impala.travel/area-types/ckiub0igb00063e6am6q2b0w3.jpg",
          "width": 4032
        }
      ],
      "maxOccupancy": 2,
      "name": "Junior Suite",
      "rates": [
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 31500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "b815b95a5b6a847b7b0c09c1a9ea5827:77a228b50273fad2c224468c91739c3c",
          "ratePlanId": 5,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 31500,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 28875,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "bcd9e5f11c6e747374d63d635b6f2d07:f5d244b004c18e3fef40606f83b72e76",
          "ratePlanId": 1,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 28875,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 29925,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "e3d5af44011974bf705e792735778b44:88853f3b36a97a6adf8009d97102ad79",
          "ratePlanId": 1,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 29925,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 27431,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "5c0db8cb17c9e5316b2a62bda48f1dd4:39b27339fc838dfbfc48216e22a8ce44",
          "ratePlanId": 1,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 27431,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        }
      ],
      "roomTypeId": "280b6f5a-c645-44c0-a63d-03f1d7bc3d55"
    },
    {
      "amenities": [
        {
          "code": 2,
          "formatted": "Air conditioning"
        },
        {
          "code": 228,
          "formatted": "Slippers"
        },
        {
          "code": 210,
          "formatted": "Satellite television"
        },
        {
          "code": 144,
          "formatted": "Soundproofed room"
        },
        {
          "code": 123,
          "formatted": "Wireless internet connection"
        },
        {
          "code": 85,
          "formatted": "Private bathroom"
        },
        {
          "code": 69,
          "formatted": "Minibar"
        },
        {
          "code": 50,
          "formatted": "Hairdryer"
        },
        {
          "code": 28,
          "formatted": "Desk"
        },
        {
          "code": 15,
          "formatted": "Bath or Shower"
        },
        {
          "code": 11,
          "formatted": "Bathroom amenities (free toiletries)"
        }
      ],
      "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
      "images": [
        {
          "altText": null,
          "height": 6000,
          "url": "https://cdn.impala.travel/area-types/ckiub4vym00083e6amqnt3a6u.jpg",
          "width": 4000
        }
      ],
      "maxOccupancy": 2,
      "name": "Double Room",
      "rates": [
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 14700,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.719"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "470a4b225742d213e9182a8ca650fe61:7b5f9d774a96e402438537b1e73fcfe5",
          "ratePlanId": 1,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 14700,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 15750,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "19ba73ba97cda6d3febfe533acc25ba1:338e5ff8073767a23fdf0edc4cec1892",
          "ratePlanId": 3,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 15750,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.719"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 16800,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "e7df0bcb2d335124b609ad188b1c364d:7bee69f1eafb714cadcbd90bd06cf66d",
          "ratePlanId": 5,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 16800,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 13650,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.719"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "2463f0474c058652951adbefd3bc8ff2:f2873919bedce820524ded4e2947e9b5",
          "ratePlanId": 6,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 13650,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 13965,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.719"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "022166b0c439dc27b83a96be5e561d97:fc7b648edf136c63b7114a2d13bfc02d",
          "ratePlanId": 7,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 13965,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 14962,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "35a9baa5068ba59163e930b14af4949b:bf061e368daac6ac9d57172d91f01f1b",
          "ratePlanId": 1,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 14962,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 15960,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "caf9b66563911b0e1525debcd9cf0ada:6fa29977e8403d97cfca5f6dcd6da6eb",
          "ratePlanId": 3,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 15960,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 12967,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.720"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "891394f48e8ab2f406f4a9087c840768:933a218d184e74c5a67a59a649f4285f",
          "ratePlanId": 3,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 12967,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        }
      ],
      "roomTypeId": "8cb8ce9e-221a-4220-a358-35b6852fb359"
    },
    {
      "amenities": [
        {
          "code": 228,
          "formatted": "Slippers"
        },
        {
          "code": 144,
          "formatted": "Soundproofed room"
        },
        {
          "code": 123,
          "formatted": "Wireless internet connection"
        },
        {
          "code": 85,
          "formatted": "Private bathroom"
        },
        {
          "code": 69,
          "formatted": "Minibar"
        },
        {
          "code": 50,
          "formatted": "Hairdryer"
        },
        {
          "code": 28,
          "formatted": "Desk"
        },
        {
          "code": 15,
          "formatted": "Bath or Shower"
        },
        {
          "code": 11,
          "formatted": "Bathroom amenities (free toiletries)"
        }
      ],
      "description": "This is a fictional example room type that you can use to test all the features you might encounter on any hotel available on the Impala platform on the Impala platform (https://impala.travel). Testing with this room type means your app or site will be able to handle any values that you might find on Impala.",
      "images": [
        {
          "altText": null,
          "height": 4480,
          "url": "https://cdn.impala.travel/area-types/ckiub3dw100073e6alkifv3ok.jpg",
          "width": 6720
        }
      ],
      "maxOccupancy": 4,
      "name": "Presidential Suite",
      "rates": [
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 47250,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "42efaad56d0f614f5cc65e0c5c30669f:1866b6b4e0b2ca054a68ee58565fc6e9",
          "ratePlanId": 1,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 47250,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 42000,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.720"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "2fb14f477f41541d5598b61aab21f1b4:afc6e4cfb689d05fd17e9780be16af9d",
          "ratePlanId": 2,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 42000,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 44625,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "896624e8d1733cf9f533d58080b0f217:f77b2b8805413ec948c3f609eb241c33",
          "ratePlanId": 3,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 44625,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 39900,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.720"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "0fc4232f1726473c3f12c99849262e84:3fca5c554e779783c73a5ea293da831f",
          "ratePlanId": 7,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 39900,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 10,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 44887,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "1471020e7f634138b7088a081e45231a:15006e156c471ef4a22d38fee7f84c68",
          "ratePlanId": 8,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 44887,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 39900,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.720"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 2,
          "rateId": "23888f2637881fed0fb1253d2ebeace6:a844bb82cab7f71f0514a7d458dfec99",
          "ratePlanId": 22,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 39900,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "end": "2021-06-28 23:59:59.999",
              "fee": {
                "price": {
                  "amount": 0,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "NONE"
              },
              "formatted": "Fully refundable until June 28, 2021 23:59",
              "start": "2021-03-11 00:23:35.720"
            },
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 42393,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after June 29, 2021 00:00",
              "start": "2021-06-29 00:00:00.000"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "bacf1877347d8936da6ea4b9609f2e06:3b8938ba186b5788dae45a868d1a5228",
          "ratePlanId": 19,
          "retailRate": {
            "deal": {
              "conditions": [],
              "dealId": "D3",
              "discount": {
                "count": 5,
                "type": "PERCENTAGE"
              }
            },
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 42393,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        },
        {
          "cancellationPolicies": [
            {
              "fee": {
                "count": 100,
                "price": {
                  "amount": 37905,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after March 11, 2021 00:23",
              "start": "2021-03-11 00:23:35.720"
            }
          ],
          "components": [],
          "end": "2021-07-02",
          "hotelAgreement": null,
          "maxOccupancy": 1,
          "rateId": "7f1f053b76157a70e19cade3e38fd763:8f82c19071c9f4d12f5bdf92e181c140",
          "ratePlanId": 7,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [],
              "payAtHotel": []
            },
            "total": {
              "amount": 37905,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "sellerCommissionPercentage": 15,
          "start": "2021-07-01"
        }
      ],
      "roomTypeId": "1bd16eed-e10f-47f6-8f28-67c40deb4f3b"
    }
  ],
  "starRating": 5,
  "termsAndConditions": "",
  "updatedAt": "2021-02-17T09:07:41.615Z",
  "websiteUrl": "https://impala-all-avaialable-resort.hotel/"
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 403 Response

```json
{
  "message": "Forbidden resource"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="retrieve-a-hotel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested hotel.|[hotelFullDetail](#schemahotelfulldetail)|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|403|Forbidden|Forbidden|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

<h1 id="impala-hotel-booking-api-bookings">Bookings</h1>

Making and managing bookings.

## List all bookings

<a id="opIdlistBookings"></a>

> Code samples

```bash
curl https://example.com/bookings \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /bookings`

Returns a list of all the bookings you've made.

You can filter the list based on when bookings were created or last updated, as well as their arrival (`start`) and departure (`end`). These date-based filters allow to narrow down the result with modifiers for less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`).

Example: Adding the query parameters `start[gt]=2021-05-20&updated[lte]=2020-11-20T11:11:00.000Z` would return bookings arriving after May 20th, 2020 that were updated before or on November 20th, 2020 at 11:11 am UTC.

You can specify the **sorting order** in which bookings are returned:
* This is done by using the `sortBy` query parameter.
* Results can be sorted by `createdAt` and `updatedAt`
* The parameter allows for a comma-separated list of arguments with `:asc` (ascending, the default if no sorting is specified) and `:desc` (descending) modifiers.

<h3 id="list-all-bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|object|false|Allows for filtering based on arrival date of the booking in ISO 8601 format (e.g. `2021-12-01`). Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?start[lte]=2021-12-20&start[gte]=2021-12-10`|
|end|query|object|false|Allows for filtering based on departure date of the booking in ISO 8601 format (e.g. `2021-12-01`). Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?end[lte]=2021-12-25&end[gte]=2021-12-15`|
|created|query|object|false|Allows for filtering based on creation date and time of the booking in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?created[lte]=2020-11-04T19:37:37Z&created[gte]=2020-11-04T15:56:37.000Z`|
|updated|query|object|false|Allows for filtering based on the date and time the booking was last updated, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?updated[lte]=2020-11-04T19:37:37Z&updated[gte]=2020-11-04T15:56:37.000Z`|
|size|query|number(int32)|false|Pagination size. Defaults to 100 if omitted.|
|offset|query|number(int32)|false|Pagination offset. Defaults to 0 if omitted.|
|sortBy|query|string|false|Order in which the results should be sorted. Currently allows you to sort by `createdAt` and `updatedAt`. Specify multiple paramaters by separating with commas|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bookedRooms": [
        {
          "adults": 1,
          "cancellationPolicies": [
            {
              "end": "2020-12-17 23:59:59.999",
              "fee": {
                "count": 100,
                "price": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after October 19, 2021 00:00",
              "start": "2020-12-15 23:59:59.999"
            }
          ],
          "notes": {
            "fromGuest": "Please add an extra bed to this room",
            "fromSeller": ""
          },
          "rate": {
            "cancellationPolicies": [
              {
                "end": "2020-12-17 23:59:59.999",
                "fee": {
                  "count": 100,
                  "price": {
                    "amount": 9500,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "type": "PERCENTAGE"
                },
                "formatted": "Non-refundable after October 19, 2021 00:00",
                "start": "2020-12-15 23:59:59.999"
              }
            ],
            "components": [
              {
                "formatted": "Breakfast",
                "includedInRate": true,
                "type": "BREAKFAST"
              }
            ],
            "end": "2021-11-23",
            "hotelAgreement": null,
            "maxOccupancy": 2,
            "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
            "retailRate": {
              "taxesAndFees": {
                "includedInRate": [
                  {
                    "category": "VAT",
                    "charge": {
                      "amount": 9500,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "formatted": "10% VAT"
                  }
                ],
                "payAtHotel": [
                  {
                    "category": "VAT",
                    "charge": {
                      "amount": 9500,
                      "currency": {
                        "code": "EUR"
                      }
                    },
                    "formatted": "10% VAT"
                  }
                ]
              },
              "total": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              }
            },
            "sellerCommissionPercentage": 9.5,
            "start": "2021-11-20"
          },
          "roomType": {
            "name": "Penthouse Suite",
            "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
          },
          "sellerToImpalaPayment": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        }
      ],
      "bookingId": "IM-0199-00000103",
      "cancellation": {
        "fee": {
          "count": 100,
          "price": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "type": "PERCENTAGE"
        }
      },
      "contact": {
        "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
        "email": "jocelin.carreon.crespo@example.com",
        "firstName": "Jocelín",
        "lastName": "Carreón Sample"
      },
      "createdAt": "2020-10-20T12:38:22Z",
      "end": "2020-10-24",
      "hotel": {
        "address": {
          "city": "Impalaland",
          "country": "GBR",
          "countryName": "United Kingdom",
          "line1": "12 Sample Avenue",
          "line2": "string",
          "postalCode": "12345",
          "region": "string"
        },
        "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
        "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
        "images": [
          {
            "altText": "A photo of an object",
            "height": 4000,
            "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
            "width": 4000
          }
        ],
        "location": {
          "latitude": 58.386186,
          "longitude": -9.952549
        },
        "name": "Impala Minimalist Palace",
        "starRating": 2.5
      },
      "hotelConfirmationCode": "04M3995",
      "notes": {
        "fromGuest": "I am travelling with my family",
        "fromSeller": ""
      },
      "start": "2020-10-21",
      "status": "ACCEPTED",
      "updatedAt": "2020-10-22T20:12:33Z"
    }
  ],
  "pagination": {
    "count": 10,
    "next": "/v1/hotels?size=20&offset=120",
    "prev": "/v1/hotels?size=20&offset=80",
    "total": 1500
  }
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="list-all-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of bookings (filtered based on your query parameters).|Inline|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<h3 id="list-all-bookings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[booking](#schemabooking)]|true|none|none|
|pagination|[pagination](#schemapagination)|true|none|Information that helps paginate through lists of resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Create a booking

<a id="opIdcreateBooking"></a>

> Code samples

```bash
curl https://example.com/bookings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "bookingContact": {
      "email": "jocelin.carreon.crespo@example.com",
      "firstName": "Jocelín",
      "lastName": "Carreón Sample"
    },
    "end": "2019-08-24",
    "rooms": [
      {
        "adults": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ"
      }
    ],
    "start": "2019-08-24"
  }'
```

`POST /bookings`

Creates a booking for for the rate and dates you specify in the request body.

You'll need a `roomTypes[].rates[].rateId` that's bookable for those dates, which you can find using the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) endpoint.

If you have provided a credit card on the dashboard then **Impala will send the booking to the hotel immediately**. We'll ensure payment is taken care of before your guest arrives at the hotel.

* Your guest needs to be **paying you** the rate specified in `retailRate` (as listed in the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) response) before you submit this request.
* Once your request is received and the booking is confirmed, **Impala will charge you** as the seller this `retailRate` minus the `sellerCommissionPercentage` (which is the affiliate commission you get to keep). We'll use the business credit card you've added to your account as payment method for this.
* The difference between the amount you charge your guest (`retailRate`, e.g. 200 €) and what Impala charges you (`retailRate` minus `sellerCommissionPercentage`, e.g. 200 €) is your commission (in this example: 20 €) to keep.

You can find more information on how money flows between your guest and you, and you and Impala, [in this article](https://impala.stoplight.io/docs/booking-api/branches/v1.003/docs/good-to-know/payments-and-commissions.md)

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

> Body parameter

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "end": "2019-08-24",
  "rooms": [
    {
      "adults": 2,
      "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ"
    }
  ],
  "start": "2019-08-24"
}
```

<h3 id="create-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[bookingRequest](#schemabookingrequest)|false|Specifies the room you want to book for your guest.|
|» bookingContact|body|object|true|Details of your guest (will be provided to the hotel in case of questions).|
|» » email|body|string|true|Email address.|
|» » firstName|body|string|true|First name.|
|» » lastName|body|string|true|Family name or surname.|
|» end|body|string(date)|true|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|» notes|body|[notesBooking](#schemanotesbooking)|false|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|» paymentType|body|string|false|How will the guest make payment for this booking?|
|» rooms|body|[object]|true|List of room type identifiers to be booked.|
|» » adults|body|number|true|The number of adult guests staying in the room.|
|» » notes|body|[notesBookedRoom](#schemanotesbookedroom)|false|Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.<br>These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.|
|» » rateId|body|string|true|The unique identifier of this rate within Impala. Every rate returned in the `roomTypes[].rates[]` array when retrieving hotel availability includes this id.|
|» start|body|string(date)|true|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» paymentType|API|

> Example responses

> 202 Response

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "notes": {
        "fromGuest": "Please add an extra bed to this room",
        "fromSeller": ""
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "Breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": null,
        "maxOccupancy": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [],
            "payAtHotel": []
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "starRating": 2.5
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "I am travelling with my family",
    "fromSeller": ""
  },
  "paymentBearerToken": "xxxxx.yyyyy.zzzzz",
  "start": "2020-10-21",
  "status": "ACCEPTED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

> 400 Response

```json
{
  "code": "BAD_REQUEST",
  "message": "There must be rate for each different day of the stay."
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 403 Response

```json
{
  "code": "ERROR_CODE",
  "message": "Resource not found"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="create-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|We've created the booking and are returning some of its details in the response body.|[booking](#schemabooking)|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed. |[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|403|Forbidden|You are not authorized to use this service. Please contact support@impala.travel to gain access.|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Retrieve a booking

<a id="opIdretrieveBooking"></a>

> Code samples

```bash
curl https://example.com/bookings/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /bookings/{bookingId}`

Returns all details for the specified booking.

<h3 id="retrieve-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string|true|The unique identifier of the booking you would like to update.|

> Example responses

> 200 Response

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "notes": {
        "fromGuest": "Please add an extra bed to this room",
        "fromSeller": ""
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "Breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": null,
        "maxOccupancy": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [],
            "payAtHotel": []
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "starRating": 2.5
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "I am travelling with my family",
    "fromSeller": ""
  },
  "paymentBearerToken": null,
  "start": "2020-10-21",
  "status": "ACCEPTED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find booking with reference IM-0576-00000000"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="retrieve-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested booking.|[booking](#schemabooking)|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|404|Not Found|You've likely requested a booking that doesn't exist. This might be because of a typo in the booking ID. Impala booking IDs start with `IM-` for real-life bookings and `SANDBOX-` for all bookings created in our sandbox environment (e.g. `/bookings/IM-0576-00000601`).|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Change a booking

<a id="opIdupdateBooking"></a>

> Code samples

```bash
curl https://example.com/bookings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "bookingContact": {
      "email": "jocelin.carreon.crespo@example.com",
      "firstName": "Jocelín",
      "lastName": "Carreón Sample"
    },
    "end": "2019-08-24",
    "rooms": [
      {
        "adults": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ"
      }
    ],
    "start": "2019-08-24",
    "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
  }'
```

`PUT /bookings/{bookingId}`

<!-- theme: danger -->

> Updates the specified booking with immediate effect. This action might result in a cancellation charge being charged.

> Please note that if you wish to change the contact details associated with a booking, you should use the [Change a Booking's Contact Details](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D~1booking-contact/put) endpoint.

Changes / updates a confirmed booking with the details you provide in the request body.

When your guest needs to change their booking, you can use this endpoint to change any of the details you initially supplied when you [made their booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post), e.g. you'll need to query for availability and use the `roomTypes[].rates[].rateId` that are available currently for their new stay dates. Any new rates selected must be for the same hotel as the original booking.

A booking cannot be updated on or after the check in day of the original or new stay.

In addition, we require you do supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

The `status` of this booking will switch back to `PENDING` until we have submitted and confirmed the new details with the hotel.

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

> Body parameter

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "end": "2019-08-24",
  "rooms": [
    {
      "adults": 2,
      "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ"
    }
  ],
  "start": "2019-08-24",
  "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
}
```

<h3 id="change-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string|true|The unique identifier of the booking you would like to update.|
|body|body|[updateBookingRequest](#schemaupdatebookingrequest)|false|Specifies the room you want to book for your guest.|
|» bookingContact|body|object|true|Details of your guest (will be provided to the hotel in case of questions).|
|» » email|body|string|true|Email address.|
|» » firstName|body|string|true|First name.|
|» » lastName|body|string|true|Family name or surname.|
|» end|body|string(date)|true|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|» notes|body|[notesBooking](#schemanotesbooking)|false|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|» paymentType|body|string|false|How will the guest make payment for this booking?|
|» rooms|body|[object]|true|List of room type identifiers to be booked.|
|» » adults|body|number|true|The number of adult guests staying in the room.|
|» » notes|body|[notesBookedRoom](#schemanotesbookedroom)|false|Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.<br>These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.|
|» » rateId|body|string|true|The unique identifier of this rate within Impala. Every rate returned in the `roomTypes[].rates[]` array when retrieving hotel availability includes this id.|
|» start|body|string(date)|true|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|» updateBookingVersionAtTimestamp|body|[updateBookingVersionAtTimestamp](#schemaupdatebookingversionattimestamp)|true|The timestamp of when the booking was last updated|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» paymentType|API|

> Example responses

> 200 Response

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "notes": {
        "fromGuest": "Please add an extra bed to this room",
        "fromSeller": ""
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "Breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": null,
        "maxOccupancy": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [],
            "payAtHotel": []
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "starRating": 2.5
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "I am travelling with my family",
    "fromSeller": ""
  },
  "paymentBearerToken": null,
  "start": "2020-10-21",
  "status": "ACCEPTED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

> 400 Response

```json
{
  "code": "BAD_REQUEST",
  "message": "There must be rate for each different day of the stay."
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find booking"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="change-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|We've submitted the change to the hotel and are returning some of its details in the response body.|[booking](#schemabooking)|
|400|Bad Request|Your request was invalid or wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed. |[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|404|Not Found|Not found|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Cancel a booking

<a id="opIdcancelBooking"></a>

> Code samples

```bash
curl https://example.com/bookings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /bookings/{bookingId}`

<!-- theme: danger -->

> Cancels the specified booking with immediate effect. This action might result in a cancellation charge being charged.

Submitting this request means we'll notify the hotel of the cancellation and that they won't expect your guest.

You can use `GET /bookings/{bookingId}`to see the cancellation policies that apply to a booking at a given point in time. Please note that cancelling a booking will incur a cancellation fee according to the rules that apply at the time of cancellation. You can find the cancellation fee that has been charged in the response of this call in the `cancellation.fee` object.

If the booking you cancelled allows for a partial or full refund, we'll credit your Impala balance with the amount we charged you as the seller of this booking – meaning we'll deduct the amount the next time we're requesting payment for the sum of all the bookings you made.

<h3 id="cancel-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string|true|The unique identifier of the booking you would like to update.|

> Example responses

> 200 Response

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "cancellationPolicies": [
        {
          "end": "2020-12-17 23:59:59.999",
          "fee": {
            "count": 100,
            "price": {
              "amount": 9500,
              "currency": {
                "code": "EUR"
              }
            },
            "type": "PERCENTAGE"
          },
          "formatted": "Non-refundable after October 19, 2021 00:00",
          "start": "2020-12-15 23:59:59.999"
        }
      ],
      "notes": {
        "fromGuest": "Please add an extra bed to this room",
        "fromSeller": ""
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "Breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": null,
        "maxOccupancy": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [
              {
                "category": "VAT",
                "charge": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "formatted": "10% VAT"
              }
            ],
            "payAtHotel": [
              {
                "category": "VAT",
                "charge": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "formatted": "10% VAT"
              }
            ]
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "starRating": 2.5
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "I am travelling with my family",
    "fromSeller": ""
  },
  "start": "2020-10-21",
  "status": "CANCELLED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 403 Response

```json
{
  "code": "FORBIDDEN",
  "message": "The booking's arrival date is in the past"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find booking"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="cancel-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the cancelled booking. This includes the `cancellation.fee` object with details on the fee for this cancellation (most frequently this means either a zero fee, so the booking is fully refundable, or the full amount of the stay is due as a fee, meaning the booking was non-refundable).|[booking](#schemabooking)|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|403|Forbidden|This booking can't be cancelled. This most frequently happens when you're trying to cancel a booking that has already started. Impala allows you to handle booking management up to a guest's arrival. Once the guest is staying or due arrival, please contact the hotel directly for questions around their current stay.|[genericError](#schemagenericerror)|
|404|Not Found|Not found|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## Change a booking contact

<a id="opIdupdateBookingContact"></a>

> Code samples

```bash
curl https://example.com/bookings/string/booking-contact \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "bookingContact": {
      "email": "jocelin.carreon.crespo@example.com",
      "firstName": "Jocelín",
      "lastName": "Carreón Sample"
    },
    "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
  }'
```

`PUT /bookings/{bookingId}/booking-contact`

Updates a confirmed booking with the booking contact details you provide in the request body.

In addition, we require you to supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

> Body parameter

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
}
```

<h3 id="change-a-booking-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string|true|The unique identifier of the booking you would like to update.|
|body|body|[updateBookingContactRequest](#schemaupdatebookingcontactrequest)|false|none|
|» bookingContact|body|[personInfo](#schemapersoninfo)|true|Information on a person and their contact details.|
|» updateBookingVersionAtTimestamp|body|[updateBookingVersionAtTimestamp](#schemaupdatebookingversionattimestamp)|true|The timestamp of when the booking was last updated|

> Example responses

> 200 Response

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "notes": {
        "fromGuest": "Please add an extra bed to this room",
        "fromSeller": ""
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "Breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": null,
        "maxOccupancy": 2,
        "rateId": "i8fIZ277SPDq4UohuxAft5Sr29UhMvyc0VypRxLiRFLoTk0XHmEbgSQ",
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [],
            "payAtHotel": []
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84",
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "starRating": 2.5
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "I am travelling with my family",
    "fromSeller": ""
  },
  "paymentBearerToken": null,
  "start": "2020-10-21",
  "status": "ACCEPTED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "OBJECT_UNKNOWN",
      "message": "\"foo\" is not allowed",
      "property": "foo"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find booking"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="change-a-booking-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|We've submitted the change to the hotel and are returning the booking details in the response body.|[booking](#schemabooking)|
|400|Bad Request|Your request was invalid or wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed. |[validationError](#schemavalidationerror)|
|401|Unauthorized|Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.|[genericError](#schemagenericerror)|
|404|Not Found|Not found|[genericError](#schemagenericerror)|
|500|Internal Server Error|An internal server error within the Impala platform has occurred. Our team will investigate the error.<br>We recommend that you contact us at support@impala.travel with the x-correlation-id value contained<br>within the response headers. Sending us this value will allow us to identify the precise error you encountered.|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

<h1 id="impala-hotel-booking-api-rate-calendar">Rate Calendar</h1>

Getting rates for future dates.

## List all rate plans (rate calendar) for a hotel (Beta endpoint)

<a id="opIdlistRatePlansForHotel"></a>

> Code samples

```bash
curl https://example.com/hotels/40c0b330-186a-40bf-ae36-2c61fb322db0/rate-plans \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /hotels/{hotelId}/rate-plans`

Returns a list of all rate plans available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

For each such rate plan this endpoint returns the room types it's available for, alongside prices for each date and occupancy that can be sold – or the information that the room isn't available (closed) for a certain date.

For the vast majority of our customers, availability searches using the [List all hotels](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels/get) endpoint are the best choice. It accepts the dates your guest is looking for and provides the rates to display.

This endpoint can help augment this for two additional use cases:

This endpoint allows you to query rate prices for all future dates in one go, making it a great choice to feed availability information and prices into your own system or displaying a rate calender to guide your guests to gain an overview of future availability and prices.

<h3 id="list-all-rate-plans-rate-calendar-for-a-hotel-beta-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hotelId|path|string(uuid)|true|The uuid of hotel for which rate plans are being fetched.|
|updatedAt|query|object|false|Returns rate plans changed after the supplied date.|
|size|query|number(int32)|false|Number of rate plans returned on a given page (pagination).|
|offset|query|number(int32)|false|Offset from the first rate plan in the result (for pagination).|
|start|query|string|false|Start date of the considered time window for the returned rate plan.|
|end|query|string|false|Start date of the considered time window for the returned rate plan.|
|roomId|query|string(uuid)|false|The UUID of room for which rate plans are being fetched.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "components": [
        {
          "formatted": "breakfast",
          "includedInRate": true,
          "type": "BREAKFAST"
        },
        {
          "formatted": "lunch",
          "includedInRate": false,
          "type": "LUNCH"
        },
        {
          "formatted": "dinner",
          "includedInRate": false,
          "type": "DINNER"
        },
        {
          "formatted": "allInclusive",
          "includedInRate": false,
          "type": "ALL_INCLUSIVE"
        }
      ],
      "conditions": {
        "cancellationDeadline": null,
        "cancellationPolicy": "NON_REFUNDABLE"
      },
      "description": "BREAKFAST,NON_REFUNDABLE",
      "hotelId": "55b6ae0d-2de3-4ec4-b8b5-042a7003cd87",
      "ratePlanId": 6,
      "restrictions": {
        "lengthOfStay": {
          "min": 1
        }
      },
      "roomTypes": [
        {
          "dates": [
            {
              "closed": false,
              "date": "2021-05-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-05-31",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-06-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-07-31",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-08-31",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-09-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-10-31",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-07",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-08",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-09",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-10",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-11",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-12",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-13",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-14",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-15",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-16",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-17",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-18",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-19",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-20",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-21",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-22",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-23",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-24",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-25",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-26",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-27",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-28",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-29",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-11-30",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-01",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-02",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-03",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-04",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-05",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            },
            {
              "closed": false,
              "date": "2021-12-06",
              "rates": [
                {
                  "adults": 1,
                  "retailRate": {
                    "amount": 70000,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "roomsSellable": 100
                }
              ]
            }
          ],
          "maxOccupancy": 2,
          "name": "Double Room",
          "roomTypeId": "b301f494-d11d-4f9e-9425-c3883f082078"
        }
      ]
    }
  ],
  "pagination": {
    "count": 1,
    "next": "https://api.impala.travel/v1/085c034a-955c-42b7-81a9-a5ec445b18c6/rate-plans?size=1&offset=1",
    "prev": null,
    "total": 2
  }
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find property with id 6f86fd08-5378-4ac4-a6e0-ae099d5ce512"
}
```

<h3 id="list-all-rate-plans-rate-calendar-for-a-hotel-beta-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|404|Not Found|Not Found|[genericError](#schemagenericerror)|

<h3 id="list-all-rate-plans-rate-calendar-for-a-hotel-beta-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ratePlan](#schemarateplan)]|true|none|none|
|pagination|[pagination](#schemapagination)|true|none|Information that helps paginate through lists of resources.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

## List a rate plan (rate calendar) for a hotel (Beta endpoint).

<a id="opIdlistRatePlanForHotelForRatePlanId"></a>

> Code samples

```bash
curl https://example.com/hotels/40c0b330-186a-40bf-ae36-2c61fb322db0/rate-plans/112 \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /hotels/{hotelId}/rate-plans/{ratePlanId}`

Returns a single rate plan available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

This endpoint returns a singular available rate plan.

<h3 id="list-a-rate-plan-rate-calendar-for-a-hotel-beta-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hotelId|path|string(uuid)|true|The uuid of hotel for which rate plans are being fetched.|
|ratePlanId|path|integer|true|The id of requested rateplan|
|updatedAt|query|object|false|Returns rate plans changed after the supplied date.|
|size|query|number(int32)|false|Number of rate plans returned on a given page (pagination).|
|offset|query|number(int32)|false|Offset from the first rate plan in the result (for pagination).|
|start|query|string|false|Start date of the considered time window for the returned rate plan.|
|end|query|string|false|Start date of the considered time window for the returned rate plan.|
|roomTypeId|query|string(uuid)|false|The uuid of room for which rate plans are being fetched.|

> Example responses

> 200 Response

```json
{
  "adjustments": [
    {
      "adjustmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 5,
      "conditions": [
        {
          "rules": {
            "bookableDateRange": {
              "end": "2021-08-23",
              "start": "2021-05-15"
            },
            "nightsRange": {
              "max": 5,
              "min": 3
            }
          },
          "type": "LENGTH_OF_STAY"
        }
      ],
      "type": "PERCENTAGE"
    }
  ],
  "components": [
    {
      "formatted": "breakfast",
      "includedInRate": true,
      "type": "BREAKFAST"
    }
  ],
  "conditions": {
    "cancellationDeadline": 0,
    "cancellationPolicy": "FREE_CANCELLATION"
  },
  "description": "NON_REFUNDABLE,DINNER",
  "hotelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePlanId": 0,
  "restrictions": {
    "lengthOfStay": {
      "max": 0,
      "min": 0
    }
  },
  "roomTypes": [
    {
      "dates": [
        {
          "closed": true,
          "closedToArrival": true,
          "closedToDeparture": true,
          "date": "string",
          "rates": [
            {
              "adults": 1,
              "retailRate": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "roomsSellable": 0
            }
          ],
          "staythrough": {
            "min": 0
          }
        }
      ],
      "maxOccupancy": 1,
      "name": "Junior Suite",
      "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "VALIDATION_ERROR",
  "message": "\"start\" must be in YYYY-MM-DD format. \"foo\" is not allowed. \"lorem\" missing required peer \"ipsum\"",
  "validations": [
    {
      "code": "DATE_FORMAT",
      "message": "\"start\" must be in YYYY-MM-DD format",
      "property": "start"
    },
    {
      "code": "OBJECT_WITH",
      "message": "\"lorem\" missing required peer \"ipsum\"",
      "property": "lorem"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "Cannot find property with id 6f86fd08-5378-4ac4-a6e0-ae099d5ce512"
}
```

<h3 id="list-a-rate-plan-rate-calendar-for-a-hotel-beta-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ratePlan](#schemarateplan)|
|400|Bad Request|Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.|[validationError](#schemavalidationerror)|
|404|Not Found|Not Found|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key_Authentication
</aside>

# Schemas

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "Impalaland",
  "country": "GBR",
  "countryName": "United Kingdom",
  "line1": "12 Sample Avenue",
  "line2": "string",
  "postalCode": "12345",
  "region": "string"
}
```

Physical address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|Three-character country code in ISO alpha-3 format.|
|countryName|string|true|none|English name of the country.|
|line1|string|true|none|First line of the address.|
|line2|string \| null|false|none|Second line of the address.|
|postalCode|string|true|none|none|
|region|string \| null|false|none|none|

<h2 id="tocS_adjustmentConditionLengthOfStayRule">adjustmentConditionLengthOfStayRule</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmentconditionlengthofstayrule"></a>
<a id="schema_adjustmentConditionLengthOfStayRule"></a>
<a id="tocSadjustmentconditionlengthofstayrule"></a>
<a id="tocsadjustmentconditionlengthofstayrule"></a>

```json
{
  "rules": {
    "bookableDateRange": {
      "end": "2021-08-23",
      "start": "2021-05-15"
    },
    "nightsRange": {
      "max": 5,
      "min": 3
    }
  },
  "type": "LENGTH_OF_STAY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|object|true|none|none|
|type|string|true|none|The type of the condition. Currently we only support conditions based on length of stay.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LENGTH_OF_STAY|

<h2 id="tocS_adjustmentConditions">adjustmentConditions</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmentconditions"></a>
<a id="schema_adjustmentConditions"></a>
<a id="tocSadjustmentconditions"></a>
<a id="tocsadjustmentconditions"></a>

```json
{
  "rules": {
    "bookableDateRange": {
      "end": "2021-08-23",
      "start": "2021-05-15"
    },
    "nightsRange": {
      "max": 5,
      "min": 3
    }
  },
  "type": "LENGTH_OF_STAY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|object|true|none|none|
|type|string|true|none|The type of the condition. Currently we only support conditions based on length of stay.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LENGTH_OF_STAY|

<h2 id="tocS_amenity">amenity</h2>
<!-- backwards compatibility -->
<a id="schemaamenity"></a>
<a id="schema_amenity"></a>
<a id="tocSamenity"></a>
<a id="tocsamenity"></a>

```json
{
  "code": 1234,
  "formatted": "WiFi"
}
```

<!--
type: tab
title: Description
-->
Feature or facility available in the hotel or room type. For the full list of property and room amenity codes, you can click on the "Room Amenities" and "Property Amenities" tab.

<!--
type: tab
title: Room Amenities
-->
Below you will find a list of all room amenities in JSON format.
```json
{
  "2": "Air conditioning",
  "3": "Alarm clock",
  "5": "AM/FM radio",
  "8": "Barbeque grills",
  "9": "Bath tub with spray jets",
  "10": "Bathrobe",
  "11": "Bathroom amenities (free toiletries)",
  "13": "Bathtub",
  "14": "Bathtub only",
  "15": "Bath or Shower",
  "16": "Bidet",
  "18": "Cable television",
  "19": "Coffee/Tea maker",
  "20": "Color television",
  "21": "Computer",
  "22": "Connecting rooms",
  "25": "Cordless phone",
  "28": "Desk",
  "29": "Desk with lamp",
  "32": "Dishwasher",
  "38": "Fax machine",
  "41": "Fireplace",
  "46": "Free movies/video",
  "47": "Full kitchen",
  "49": "Grecian tub",
  "50": "Hairdryer",
  "54": "Internet access",
  "55": "Iron (ironing facilities)",
  "56": "Ironing board",
  "57": "Whirpool",
  "59": "Kitchen",
  "60": "Kitchen supplies",
  "61": "Kitchenette",
  "63": "Laptop",
  "64": "Large desk",
  "68": "Microwave",
  "69": "Minibar",
  "72": "Multi-line phone",
  "77": "Oven",
  "78": "Pay per view movies on TV",
  "80": "Phone in bathroom",
  "81": "Plates and bowls",
  "85": "Private bathroom",
  "88": "Refrigerator",
  "89": "Refrigerator with ice maker",
  "92": "Safe",
  "94": "Separate closet",
  "97": "Shower only",
  "98": "Silverware/utensils",
  "99": "Sitting area",
  "103": "Speaker phone",
  "105": "Stove",
  "108": "Telephone for hearing impaired",
  "115": "VCR movies",
  "117": "Video games",
  "119": "Wake-up calls",
  "123": "Wireless internet connection",
  "126": "Air conditioning individually controlled in room",
  "127": "Bathtub & whirlpool separate",
  "129": "CD  player",
  "133": "Desk with electrical outlet",
  "138": "Marble bathroom",
  "139": "List of movie channels available",
  "141": "Oversized bathtub",
  "142": "Shower",
  "144": "Soundproofed room",
  "146": "Tables and chairs",
  "147": "Two-line phone",
  "149": "Washer/dryer",
  "155": "Separate tub and shower",
  "157": "Ceiling fan",
  "158": "CNN available",
  "162": "Closets in room",
  "163": "DVD player",
  "164": "Mini-refrigerator",
  "166": "Self-controlled heating/cooling system",
  "167": "Toaster",
  "193": "Shared bathroom",
  "194": "Telephone TDD/Textphone",
  "210": "Satellite television",
  "214": "iPod docking station",
  "217": "Satellite radio",
  "218": "Video on demand",
  "220": "Gulf view",
  "223": "Mountain view",
  "224": "Ocean view",
  "228": "Slippers",
  "230": "Chair provided with desk",
  "234": "Luxury linen type",
  "245": "Private pool",
  "246": "High Definition (HD) Flat Panel Television  - 32 inches or greater",
  "251": "TV",
  "254": "Video game player:",
  "256": "Dining room seats",
  "258": "Mobile/cellular phones",
  "259": "Movies",
  "260": "Multiple closets",
  "262": "Safe large enough to accommodate a laptop",
  "265": "Bluray player",
  "268": "Non-allergenic room",
  "270": "Seating area with sofa/chair",
  "271": "Separate toilet area",
  "273": "Widescreen TV",
  "276": "Separate tub or shower",
  "249": "Double (Bed)",
  "200": "Futon Mat",
  "58": "Extra large Double",
  "86": "Large Double",
  "102": "Sofa Bed",
  "113": "Twin (bed)",
  "203": "Single (bed)",
  "4001": "Bunk bed",
  "5001": "Coffee/Tea maker",
  "5002": "Internet facilities",
  "5003": "Mini-bar",
  "5004": "Shower",
  "5005": "Bath",
  "5006": "Safe Deposit Box",
  "5007": "Pay-per-view Channels",
  "5008": "TV",
  "5009": "Telephone",
  "5010": "Fax",
  "5011": "Airconditioning",
  "5012": "Hair Dryer",
  "5013": "Wake Up Service/Alarm-clock",
  "5014": "Hot Tub",
  "5015": "Clothing Iron",
  "5016": "Kitchenette",
  "5017": "Balcony",
  "5018": "Trouser Press",
  "5019": "Bath-robe",
  "5020": "Spa Bath",
  "5021": "Radio",
  "5022": "Refrigerator",
  "5023": "Desk",
  "5024": "Shared Bathroom",
  "5025": "Ironing facilities",
  "5026": "Seating area",
  "5027": "Free Toiletries",
  "5028": "DVD-Player",
  "5029": "CD-Player",
  "5030": "Fan",
  "5031": "Toilet",
  "5032": "Microwave",
  "5033": "Dishwasher",
  "5034": "Washing machine",
  "5035": "Video",
  "5036": "Video Games",
  "5037": "Patio",
  "5038": "Bathroom",
  "5039": "Extra long beds (> 2 meter)",
  "5040": "Heating",
  "5041": "Dressing room",
  "5042": "Guest toilet",
  "5043": "Slippers",
  "5044": "Satellite Channels",
  "5045": "Kitchen",
  "5046": "Wireless internet",
  "5068": "Cable channels",
  "5069": "Bath or Shower",
  "5070": "Carpeted Floor",
  "5071": "Fireplace",
  "5072": "Additional Toilet",
  "5073": "Interconnecting Room(s) available",
  "5074": "Laptop Safe Box",
  "5075": "Flat-screen TV",
  "5076": "Private Entrance",
  "5077": "Sofa",
  "5079": "Soundproofing",
  "5080": "Tiled / Marble floor",
  "5081": "View",
  "5082": "Wooden / Parquet floor",
  "5083": "Wake Up Service",
  "5084": "Alarm Clock",
  "5085": "Dining Area",
  "5086": "Electric Kettle",
  "5087": "Executive Lounge Access",
  "5088": "iPod Docking Station",
  "5089": "Kitchenware",
  "5090": "Mosquito Net",
  "5091": "Towels/Linens at surcharge",
  "5092": "Sauna",
  "5093": "Private Pool",
  "5094": "Tumble dryer (machine)",
  "5095": "Wardrobe/Closet",
  "5096": "Oven",
  "5097": "Stove",
  "5098": "Toaster",
  "5099": "Barbecue",
  "5100": "Bidet",
  "5101": "Computer",
  "5102": "iPad",
  "5103": "Game Console",
  "5104": "Game Console - Xbox 360",
  "5105": "Game Console - PS2",
  "5106": "Game Console - PS3",
  "5107": "Game Console - Nintendo Wii",
  "5108": "Sea View",
  "5109": "Lake View",
  "5110": "Garden View",
  "5111": "Pool View",
  "5112": "Mountain View",
  "5113": "Landmark View",
  "5114": "Laptop",
  "5115": "Allergy-Free",
  "5116": "Cleaning products",
  "5117": "Electric blankets",
  "5118": "Additional Bathroom",
  "5119": "Blu-ray player",
  "5120": "Coffee Machine",
  "5121": "City View",
  "5122": "River View",
  "5123": "Terrace",
  "5124": "Towels",
  "5125": "Linen",
  "5126": "Dining table",
  "5127": "Children highchair",
  "5129": "Outdoor furniture",
  "5130": "Outdoor dining area",
  "5131": "Entire property on ground floor",
  "5132": "Upper floor reachable by lift",
  "5133": "Upper floor reachable by stairs only",
  "5134": "Entire unit wheelchair accessible",
  "5135": "Detached",
  "5136": "Semi-detached",
  "5137": "Private flat in block of flats",
  "5138": "Clothes Rack",
  "5139": "Rollaway bed",
  "5140": "Clothes drying rack",
  "5141": "Toilet paper",
  "5142": "Child safety socket covers",
  "5143": "Board games/puzzles",
  "5144": "Book/DVD/Music library for children",
  "5145": "Baby safety gates",
  "5146": "Sofa bed",
  "5147": "toilet with grab rails",
  "5148": "adapted bath",
  "5149": "roll in shower",
  "5150": "walk in shower",
  "5151": "higher level toilet",
  "5152": "low bathroom sink",
  "5153": "bathroom emergency pull cord",
  "5154": "shower chair",
  "5157": "rooftop pool",
  "5158": "infinity pool",
  "5159": "pool with view",
  "5160": "heated pool",
  "5161": "salt-water pool",
  "5162": "plunge pool",
  "5163": "pool towels",
  "5164": "shallow end",
  "5165": "pool cover",
  "5166": "wine/champagne",
  "5167": "bottle of water",
  "5168": "fruits",
  "5169": "chocolate/cookies",
  "5170": "Trash cans",
  "5171": "Wine glasses",
  "5172": "Game console - Xbox One",
  "5173": "Game console - Wii U",
  "5174": "Game console - PS4",
  "5175": "Children crib/cots",
  "5176": "toothbrush",
  "5177": "shampoo",
  "5178": "conditioner",
  "5179": "body soap",
  "5180": "shower cap",
  "5181": "pajamas",
  "5182": "yukata",
  "5184": "socket near the bed",
  "5185": "adapter",
  "5186": "feather pillow",
  "5187": "non-feather pillow",
  "5188": "hypoallergenic pillow",
  "5189": "Accessible by Lift",
  "5190": "Inner courtyard view",
  "5191": "Quiet street view",
  "5196": "Portable Wifi",
  "5198": "Smartphone",
  "5199": "Streaming service (such as Netflix)",
  "5200": "Lockers",
  "5201": "Fire alarms or smoke detectors",
  "5202": "Fire extinguishers",
  "5203": "Metal keys access",
  "5204": "Electronic key card access",
  "5205": "Reading light",
  "5206": "Earplugs",
  "5207": "Private curtain",
  "5211": "Carbon monoxide detector",
  "5212": "Carbon monoxide source"
}

```


<!--
type: tab
title: Property Amenities
-->
Below you will find a list of all property amenities in JSON format.
```JSON
{
  "1": "24-hour front desk",
  "5": "Air conditioning",
  "7": "ATM on site",
  "8": "Baby sitting",
  "9": "BBQ/Picnic area",
  "14": "Library",
  "15": "Car rental",
  "16": "Casino",
  "22": "Concierge desk",
  "26": "Currency exchange",
  "33": "Elevators",
  "35": "Fitness Center",
  "36": "Express Check-in/Check-out",
  "41": "Airport shuttle (free)",
  "44": "Game room",
  "45": "Souvenir/Gift Shop",
  "49": "Heated pool",
  "50": "Housekeeping - daily",
  "53": "Indoor parking",
  "54": "Indoor pool",
  "55": "Jacuzzi (Hot Tub)",
  "60": "Evening Entertainment",
  "61": "Massage",
  "62": "Nightclub/DJ",
  "66": "Outdoor pool",
  "76": "Restaurant",
  "77": "Room service",
  "78": "Safe",
  "79": "Sauna",
  "81": "Shoeshine",
  "83": "Solarium",
  "86": "Turkish/ Steam Bath",
  "91": "Tour Desk",
  "96": "Dry cleaning",
  "97": "Valet parking",
  "98": "Vending Machine(snacks)",
  "116": "Accessible parking",
  "122": "Shops (on site)",
  "149": "Grocery shopping service available",
  "165": "Bar",
  "168": "Laundry",
  "173": "Breakfast",
  "186": "Street parking",
  "193": "Playground",
  "197": "Lockers",
  "198": "Non-smoking rooms",
  "202": "Bicycle rentals",
  "228": "Business center",
  "230": "Secured parking",
  "233": "Tennis court",
  "234": "Water Sport Facilities (on site)",
  "236": "Golf Course (within 2 miles)",
  "237": "Horseback riding",
  "239": "Beachfront",
  "242": "Heating",
  "262": "Shared Kitchen",
  "269": "Meeting/Banquet Facilities",
  "272": "Skiing",
  "282": "Airport shuttle service (surcharge)",
  "283": "Baggage Storage",
  "292": "Newspaper",
  "310": "Hypoallergenic room available",
  "312": "All Spaces Non-Smoking (public and private)",
  "316": "Electric vehicle charging station",
  "327": "Events ticket service",
  "342": "Snack bar",
  "5154": "Swimming pool",
  "5044": "Spa and wellness centre",
  "5041": "Family Rooms",
  "5123": "Airport shuttle with surcharge",
  "5086": "Fitness centre",
  "5006": "Terrace",
  "5005": "Garden",
  "5056": "Water park",
  "5054": "Kids' club",
  "5000": "Breakfast in the room",
  "5001": "Public transport tickets",
  "5002": "Bikes available (free)",
  "5003": "Outdoor furniture",
  "5004": "Outdoor fireplace",
  "5007": "Sun terrace",
  "5008": "Chapel/shrine",
  "5009": "Shared lounge/TV area",
  "5010": "Ironing service",
  "5011": "Trouser press",
  "5012": "Designated smoking area",
  "5013": "Pet basket",
  "5014": "Pet bowls",
  "5015": "Beach",
  "5016": "Bowling",
  "5017": "Darts",
  "5018": "Fishing",
  "5020": "Hiking",
  "5021": "Minigolf",
  "5022": "Snorkeling",
  "5023": "Squash",
  "5024": "Windsurfing",
  "5025": "Billiard",
  "5026": "Table tennis",
  "5027": "Canoeing",
  "5028": "Ski-to-door access",
  "5029": "Diving",
  "5030": "Tennis equipment",
  "5031": "Badminton equipment",
  "5032": "Cycling",
  "5033": "Ski storage",
  "5034": "Ski school",
  "5035": "Ski equipment hire (on site)",
  "5036": "Ski pass vendor",
  "5037": "Private beach area",
  "5039": "Rooms/Facilities for Disabled",
  "5040": "Hair dresser-beautician",
  "5042": "Viproom facilities",
  "5043": "Bridal Suite",
  "5045": "Karaoke",
  "5046": "Soundproof-rooms",
  "5047": "Packed Lunches",
  "5048": "Ticket service",
  "5049": "Entertainment Staff",
  "5050": "Private Check-in/Check-out",
  "5051": "Special Diet Menus (on request)",
  "5052": "Vending Machine (drinks)",
  "5053": "Hot Spring Bath",
  "5055": "Minimarket on site",
  "5057": "Adult only",
  "5058": "Open-air bath",
  "5059": "Public bath",
  "5060": "Water slide",
  "5061": "Board games/puzzles",
  "5062": "Book/DVD/Music library for children",
  "5063": "Indoor play area",
  "5064": "Kids' outdoor play equipment",
  "5065": "Baby safety gates",
  "5066": "Children television networks",
  "5067": "Kid meals",
  "5068": "Kid-friendly buffet",
  "5069": "Pool towels",
  "5070": "Wine/Champagne",
  "5071": "Bottle of water",
  "5072": "Fruits",
  "5073": "Chocolate/Cookies",
  "5074": "Strollers",
  "5075": "On-site coffee house",
  "5076": "Sun loungers or beach chairs",
  "5077": "Sun umbrellas",
  "5078": "Picnic area",
  "5079": "Beauty Services",
  "5080": "Spa Facilities",
  "5081": "Steam room",
  "5082": "Spa lounge/relaxation area",
  "5083": "Foot bath",
  "5084": "Spa/wellness packages",
  "5085": "Massage chair",
  "5087": "Yoga classes",
  "5088": "Fitness classes",
  "5089": "Personal trainer",
  "5090": "Fitness/spa locker rooms",
  "5091": "Kids pool",
  "5092": "Shuttle Service",
  "5093": "Temporary art galleries",
  "5094": "Pub crawls",
  "5095": "Stand-up comedy",
  "5096": "Movie nights",
  "5097": "Walking tours",
  "5098": "Bike tours",
  "5099": "Themed dinner nights",
  "5100": "Happy hour",
  "5101": "Tour or class about local culture",
  "5102": "Cooking class",
  "5103": "Live music/performance",
  "5104": "Live sports events (broadcast)",
  "5105": "Archery",
  "5106": "Aerobics",
  "5107": "Bingo",
  "5108": "Ski Shuttle",
  "5109": "Outdoor Swimming Pool (all year)",
  "5110": "Outdoor Swimming Pool (seasonal)",
  "5111": "Indoor Swimming Pool (all year)",
  "5112": "Indoor Swimming Pool (seasonal)",
  "5113": "Swimming pool toys",
  "5114": "Rooftop pool",
  "5115": "Infinity pool",
  "5116": "Pool with view",
  "5117": "Salt-water pool",
  "5118": "Plunge pool",
  "5119": "Pool bar",
  "5120": "Shallow end pool",
  "5121": "Pool cover",
  "5122": "Fence around pool",
  "5124": "Property is wheel chair accessible",
  "5125": "Toilet with grab rails",
  "5126": "Higher level toilet",
  "5127": "Low bathroom sink",
  "5128": "Bathroom emergency pull cord",
  "5129": "Visual aids: Braille",
  "5130": "Visual aids: Tactile Signs",
  "5131": "Auditory Guidance",
  "5132": "Back massage",
  "5133": "Neck massage",
  "5134": "Foot massage",
  "5135": "Couples massage",
  "5136": "Head massage",
  "5137": "Hand massage",
  "5138": "Full body massage",
  "5139": "Facial treatments",
  "5140": "Waxing services",
  "5141": "Make up services",
  "5142": "Hair treatments",
  "5143": "Manicure",
  "5144": "Pedicure",
  "5145": "Hair cut",
  "5146": "Hair colouring",
  "5147": "Hair styling",
  "5148": "Body Treatments",
  "5149": "Body scrub",
  "5150": "Body wrap",
  "5151": "Light therapy",
  "5152": "Shuttle Service (free)",
  "5153": "Shuttle Service (surcharge)",
  "5156": "No Single-Use Toiletries",
  "5157": "Towels Changed Upon Request",
  "5158": "24-hour security",
  "5159": "Security alarm",
  "5160": "Smoke alarms",
  "5161": "CCTV in common areas",
  "5162": "CCTV outside property",
  "5163": "Fire extinguishers",
  "5164": "Key access",
  "5165": "Key card access",
  "5166": "Carbon monoxide detector",
  "5167": "Carbon monoxide source",
  "5168": "No plastic stirrers",
  "5169": "No plastic straws",
  "5170": "No plastic cups",
  "5171": "No plastic bottles for water",
  "5172": "No plastic bottles for non-water",
  "5173": "No plastic cutlery",
  "5174": "Keycard for room electricity",
  "5175": "Opt-out from daily room cleaning",
  "5176": "Refillable water stations",
  "5177": "Bike rental",
  "5178": "Bike parking",
  "6000": "Lunch",
  "6001": "Dinner"
}
```

<!-- type: tab-end -->

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|Unique identifier of this amenity according to the Open Travel Alliance HAC (Hotel Amenity Code) standard for hotels and RAC (Room Amenity Code) standard for rooms.|
|formatted|string|true|none|A human-readable English description of the amenity.|

<h2 id="tocS_bookedRate">bookedRate</h2>
<!-- backwards compatibility -->
<a id="schemabookedrate"></a>
<a id="schema_bookedRate"></a>
<a id="tocSbookedrate"></a>
<a id="tocsbookedrate"></a>

```json
{
  "cancellationPolicies": [
    {
      "end": "2020-12-17 23:59:59.999",
      "fee": {
        "count": 100,
        "price": {
          "amount": 9500,
          "currency": {
            "code": "EUR"
          }
        },
        "type": "PERCENTAGE"
      },
      "formatted": "Non-refundable after October 19, 2021 00:00",
      "start": "2020-12-15 23:59:59.999"
    }
  ],
  "components": [
    {
      "formatted": "breakfast",
      "includedInRate": true,
      "type": "BREAKFAST"
    }
  ],
  "end": "2021-11-23",
  "hotelAgreement": {
    "conditions": [
      "PRIVATE_RATE"
    ],
    "dealId": "D1234",
    "dealsSellable": {
      "remaining": 5
    },
    "discount": {
      "count": 10,
      "type": "PERCENTAGE"
    },
    "hotelAgreementId": "A82983",
    "href": "v1/deal-requests/D1234/agreements/A76543",
    "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
  },
  "maxOccupancy": 0,
  "retailRate": {
    "taxesAndFees": {
      "includedInRate": [
        {
          "category": "VAT",
          "charges": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "formatted": "10% VAT"
        }
      ],
      "payAtHotel": [
        {
          "category": "VAT",
          "charges": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "formatted": "10% VAT"
        }
      ]
    },
    "total": {
      "amount": 9500,
      "currency": {
        "code": "EUR"
      }
    }
  },
  "sellerCommissionPercentage": 9.5,
  "start": "2021-11-20"
}
```

Information on the price of the booked room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationPolicies|[[cancellationPolicy](#schemacancellationpolicy)]|true|none|none|
|components|[[rateComponent](#schemaratecomponent)]|true|none|none|
|end|string(date)|true|none|none|
|hotelAgreement|[hotelAgreementStub](#schemahotelagreementstub)|true|none|Essential information on an agreement with a hotel.|
|maxOccupancy|number|false|none|none|
|retailRate|object|true|none|The public retail rate you should quote and charge your guest. You're not allowed to quote or charge an amount lower than this if your website or app is publicly accessible.|
|sellerCommissionPercentage|number(float)|true|none|The commission percentage you as a seller will earn from this booking, based on `retailRate.total`.|
|start|string(date)|true|none|none|

<h2 id="tocS_bookedRoom">bookedRoom</h2>
<!-- backwards compatibility -->
<a id="schemabookedroom"></a>
<a id="schema_bookedRoom"></a>
<a id="tocSbookedroom"></a>
<a id="tocsbookedroom"></a>

```json
{
  "adults": 1,
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "rate": {
    "cancellationPolicies": [
      {
        "end": "2020-12-17 23:59:59.999",
        "fee": {
          "count": 100,
          "price": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "type": "PERCENTAGE"
        },
        "formatted": "Non-refundable after October 19, 2021 00:00",
        "start": "2020-12-15 23:59:59.999"
      }
    ],
    "components": [
      {
        "formatted": "breakfast",
        "includedInRate": true,
        "type": "BREAKFAST"
      }
    ],
    "end": "2021-11-23",
    "hotelAgreement": {
      "conditions": [
        "PRIVATE_RATE"
      ],
      "dealId": "D1234",
      "dealsSellable": {
        "remaining": 5
      },
      "discount": {
        "count": 10,
        "type": "PERCENTAGE"
      },
      "hotelAgreementId": "A82983",
      "href": "v1/deal-requests/D1234/agreements/A76543",
      "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
    },
    "maxOccupancy": 0,
    "retailRate": {
      "taxesAndFees": {
        "includedInRate": [
          {
            "category": "VAT",
            "charges": {
              "amount": 9500,
              "currency": {
                "code": "EUR"
              }
            },
            "formatted": "10% VAT"
          }
        ],
        "payAtHotel": [
          {
            "category": "VAT",
            "charges": {
              "amount": 9500,
              "currency": {
                "code": "EUR"
              }
            },
            "formatted": "10% VAT"
          }
        ]
      },
      "total": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    },
    "sellerCommissionPercentage": 9.5,
    "start": "2021-11-20"
  },
  "roomType": {
    "name": "Penthouse Suite",
    "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
  },
  "sellerToImpalaPayment": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|number(integer)|false|none|Number of adult guests booked for this room type.|
|notes|[notesBookedRoom](#schemanotesbookedroom)|true|none|Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.<br>These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.|
|rate|[bookedRate](#schemabookedrate)|true|none|Information on the price of the booked room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.|
|roomType|object|true|none|Booked room|
|sellerToImpalaPayment|[money](#schemamoney)|false|none|An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)|

<h2 id="tocS_booking">booking</h2>
<!-- backwards compatibility -->
<a id="schemabooking"></a>
<a id="schema_booking"></a>
<a id="tocSbooking"></a>
<a id="tocsbooking"></a>

```json
{
  "bookedRooms": [
    {
      "adults": 1,
      "notes": {
        "fromGuest": "string",
        "fromSeller": "string"
      },
      "rate": {
        "cancellationPolicies": [
          {
            "end": "2020-12-17 23:59:59.999",
            "fee": {
              "count": 100,
              "price": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "type": "PERCENTAGE"
            },
            "formatted": "Non-refundable after October 19, 2021 00:00",
            "start": "2020-12-15 23:59:59.999"
          }
        ],
        "components": [
          {
            "formatted": "breakfast",
            "includedInRate": true,
            "type": "BREAKFAST"
          }
        ],
        "end": "2021-11-23",
        "hotelAgreement": {
          "conditions": [
            "PRIVATE_RATE"
          ],
          "dealId": "D1234",
          "dealsSellable": {
            "remaining": 5
          },
          "discount": {
            "count": 10,
            "type": "PERCENTAGE"
          },
          "hotelAgreementId": "A82983",
          "href": "v1/deal-requests/D1234/agreements/A76543",
          "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
        },
        "maxOccupancy": 0,
        "retailRate": {
          "taxesAndFees": {
            "includedInRate": [
              {
                "category": "VAT",
                "charges": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "formatted": "10% VAT"
              }
            ],
            "payAtHotel": [
              {
                "category": "VAT",
                "charges": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "formatted": "10% VAT"
              }
            ]
          },
          "total": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          }
        },
        "sellerCommissionPercentage": 9.5,
        "start": "2021-11-20"
      },
      "roomType": {
        "name": "Penthouse Suite",
        "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
      },
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      }
    }
  ],
  "bookingId": "IM-0199-00000103",
  "cancellation": {
    "fee": {
      "count": 100,
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "type": "PERCENTAGE"
    }
  },
  "contact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample",
    "contactId": "3c8aa2ff-5e5e-4f23-bcfc-9036ba818a84"
  },
  "createdAt": "2020-10-20T12:38:22Z",
  "end": "2020-10-24",
  "hotel": {
    "address": {
      "city": "Impalaland",
      "country": "GBR",
      "countryName": "United Kingdom",
      "line1": "12 Sample Avenue",
      "line2": "string",
      "postalCode": "12345",
      "region": "string"
    },
    "checkIn": {
      "from": "12:00",
      "to": "21:00"
    },
    "checkOut": {
      "from": "12:00",
      "to": "21:00"
    },
    "emails": [
      "string"
    ],
    "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
    "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
    "images": [
      {
        "altText": "A photo of an object",
        "height": 4000,
        "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
        "width": 4000
      }
    ],
    "location": {
      "latitude": 58.386186,
      "longitude": -9.952549
    },
    "name": "Impala Minimalist Palace",
    "phoneNumbers": [
      "string"
    ],
    "starRating": 2.5,
    "timezone": "AST"
  },
  "hotelConfirmationCode": "04M3995",
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "paymentBearerToken": "string",
  "paymentClientSecret": "string",
  "start": "2020-10-21",
  "status": "ACCEPTED",
  "updatedAt": "2020-10-22T20:12:33Z"
}
```

Details of an existing booking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookedRooms|[[bookedRoom](#schemabookedroom)]|true|none|List of rooms booked|
|bookingId|string|true|none|Unique identifier for this booking within the Impala platform.|
|cancellation|object \| null|false|none|Returned in case the booking (or parts of it) has been cancelled. Contains information on the cancellation.|
|contact|object|true|none|Guest details for this booking.|
|createdAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the booking was created.|
|end|string(date)|true|none|The departure date of the booking.|
|hotel|[hotelStub](#schemahotelstub)|true|none|Essential information on a hotel returned as part of other resources, linking to the full resource within its `href` field.|
|hotelConfirmationCode|string \| null|false|none|The hotel's confirmation identifier for this booking.|
|notes|object|true|none|The notes that were transmitted to the hotel as part of this booking.<br><br>These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.|
|paymentBearerToken|string \| null|false|none|If status is PAYMENT_REQUIRED, then this should be used as the Authorisation header for the POST to the /payments endpoint.|
|paymentClientSecret|string \| null|false|none|If status is PAYMENT_REQUIRED, then this should be used as the client secret when rendering Impala Payment Elements in the UI.|
|start|string(date)|true|none|The arrival date of the booking.|
|status|string|true|none|Status of this booking within the Impala platform. When you make a booking, it'll first appear as `PENDING` until we receive the hotel's confirmation details. At this point your booking will move to `ACCEPTED`.|
|updatedAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the booking was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELLED|
|status|PENDING|
|status|ACCEPTED|
|status|PAYMENT_REQUIRED|
|status|PAYMENT_ABANDONED|

<h2 id="tocS_bookingRequest">bookingRequest</h2>
<!-- backwards compatibility -->
<a id="schemabookingrequest"></a>
<a id="schema_bookingRequest"></a>
<a id="tocSbookingrequest"></a>
<a id="tocsbookingrequest"></a>

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "end": "1970-01-01",
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "paymentType": "API",
  "rooms": [
    {
      "adults": 2,
      "notes": {
        "fromGuest": "string",
        "fromSeller": "string"
      },
      "rateId": "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA"
    }
  ],
  "start": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingContact|object|true|none|Details of your guest (will be provided to the hotel in case of questions).|
|end|string(date)|true|none|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|notes|[notesBooking](#schemanotesbooking)|false|none|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|paymentType|string|false|none|How will the guest make payment for this booking?|
|rooms|[object]|true|none|List of room type identifiers to be booked.|
|start|string(date)|true|none|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentType|API|

<h2 id="tocS_bookingRequestWithRatePlans">bookingRequestWithRatePlans</h2>
<!-- backwards compatibility -->
<a id="schemabookingrequestwithrateplans"></a>
<a id="schema_bookingRequestWithRatePlans"></a>
<a id="tocSbookingrequestwithrateplans"></a>
<a id="tocsbookingrequestwithrateplans"></a>

```json
{
  "bookingContact": {
    "email": "string",
    "firstName": "string",
    "lastName": "string"
  },
  "dealId": "string",
  "end": "1970-01-01",
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "paymentType": "API",
  "rooms": [
    {
      "adults": 0,
      "notes": {
        "fromGuest": "string",
        "fromSeller": "string"
      },
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "ratePlanId": 0,
      "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "start": "1970-01-01"
}
```

Request body with the explicit rate taken from the rate calendar endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingContact|object|true|none|Contact data to the guest that booked the accomodation|
|dealId|string|false|none|The id of the deal that contains agreement made between the hotel and company|
|end|string(date)|true|none|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|notes|[notesBooking](#schemanotesbooking)|false|none|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|paymentType|string|false|none|How will the guest make payment for this booking?|
|rooms|[[ratePlanRoom](#schemarateplanroom)]|true|none|Array of rooms booked within this booking|
|start|string(date)|true|none|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentType|API|

<h2 id="tocS_cancellationFee">cancellationFee</h2>
<!-- backwards compatibility -->
<a id="schemacancellationfee"></a>
<a id="schema_cancellationFee"></a>
<a id="tocScancellationfee"></a>
<a id="tocscancellationfee"></a>

```json
{
  "count": 100,
  "price": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  },
  "type": "PERCENTAGE"
}
```

Describes the costs associated with a cancellation and how it is calculated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The value that is used in calculation of the cost. This could be 50 in case of a 50% fee being charged for a type "PERCENTAGE" or 2 in case of the initial two nights of the stay being charged in full as a fee if the type is "NIGHTS".|
|price|[money](#schemamoney)|true|none|An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)|
|type|string|true|none|The way in which the cancellation fee is calculated. This can be "NONE" in case a full refund is paid out, "NON_REFUNDABLE" if no refund is paid out and the full amount is due, "PERCENTAGE" if a percentage of the total price for the stay is charged as cancellation fee, "NIGHTS" if a defined number of initial nights of the stay are charged in full as cancellation fee or "FLAT" in case a flat cancellation fee is charged.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NON_REFUNDABLE|
|type|PERCENTAGE|
|type|NONE|
|type|NIGHTS|
|type|FLAT|

<h2 id="tocS_cancellationPolicy">cancellationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpolicy"></a>
<a id="schema_cancellationPolicy"></a>
<a id="tocScancellationpolicy"></a>
<a id="tocscancellationpolicy"></a>

```json
{
  "end": "2020-12-17 23:59:59.999",
  "fee": {
    "count": 100,
    "price": {
      "amount": 9500,
      "currency": {
        "code": "EUR"
      }
    },
    "type": "PERCENTAGE"
  },
  "formatted": "Non-refundable after October 19, 2021 00:00",
  "start": "2020-12-15 23:59:59.999"
}
```

A rule that applies if the booking is cancelled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string|false|none|The time (in the hotel's local timezone) at which the policy takes effect, in ISO 8601 format. If omitted, the policy applies open-ended until the guests' stay.|
|fee|[cancellationFee](#schemacancellationfee)|true|none|Describes the costs associated with a cancellation and how it is calculated.|
|formatted|string|true|none|Human-readable plain English cancellation policy information, ready to be shown to your guests.|
|start|string|true|none|The time (in the hotel's local timezone) at which the policy takes effect, in ISO 8601 format. If omitted, the policy is already in effect.|

<h2 id="tocS_conditions">conditions</h2>
<!-- backwards compatibility -->
<a id="schemaconditions"></a>
<a id="schema_conditions"></a>
<a id="tocSconditions"></a>
<a id="tocsconditions"></a>

```json
{
  "cancellationDeadline": 0,
  "cancellationPolicy": "FREE_CANCELLATION"
}
```

Conditions described by the rate plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationDeadline|number(days) \| null|true|none|none|
|cancellationPolicy|string \| null|true|none|Type of cancellation policy applicable to the rate|

#### Enumerated Values

|Property|Value|
|---|---|
|cancellationPolicy|FREE_CANCELLATION|
|cancellationPolicy|FREE_CANCELLATION_24|
|cancellationPolicy|FREE_CANCELLATION_48|
|cancellationPolicy|FREE_CANCELLATION_WEEK|
|cancellationPolicy|NON_REFUNDABLE|
|cancellationPolicy|null|

<h2 id="tocS_dealRequest">dealRequest</h2>
<!-- backwards compatibility -->
<a id="schemadealrequest"></a>
<a id="schema_dealRequest"></a>
<a id="tocSdealrequest"></a>
<a id="tocsdealrequest"></a>

```json
{
  "bookingWindowRestriction": {
    "maxDaysBeforeCheckIn": 0,
    "minDaysBeforeCheckIn": 0
  },
  "cancellationPolicy": {
    "count": 2,
    "type": "DAYS_BEFORE_ARRIVAL_AT_MIDNIGHT"
  },
  "commission": {
    "count": 14,
    "type": "PERCENTAGE"
  },
  "conditions": [
    "PRIVATE_RATE"
  ],
  "createdAt": "2020-01-01T10:36:25.267Z",
  "dealRequestId": "D4578932323",
  "dealRequestStatus": "ACCEPTED",
  "dealType": "IMPALA_SHARED",
  "discount": {
    "count": 5,
    "type": "PERCENTAGE"
  },
  "lengthOfStay": {
    "max": 14,
    "min": 1
  },
  "sellableInDateRanges": [
    {
      "end": "2021-12-31",
      "start": "2021-01-01"
    }
  ],
  "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)",
  "stayDateRanges": [
    {
      "end": "2021-12-31",
      "start": "2021-01-01"
    }
  ],
  "updatedAt": "2020-11-27T10:46:35.569Z"
}
```

A deal request you've sent to hotels on Impala. [Read more about how deal requests work.](deal-requests-and-hotel-agreements.md)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingWindowRestriction|object \| null|true|none|Only show and apply this deal for bookings made min/max days before check-in|
|cancellationPolicy|object \| null|true|none|Public rates hotels offer come with cancellation policies the hotel defines (e.g. free to cancel until 14 days before arrival). If you agree on cancellation policies here, this means they override the hotel's own policies for any booking made with this deal (e.g. free to cancel until two days before arrival).|
|commission|object \| null|true|none|Rather than the commission Impala has pre-negotiated with the hotel, bookings made with this deal will generate the commission defined here for you.|
|conditions|[string]|true|none|A deal may have conditions set to it. For example, the deal may only apply for a closed user group (PRIVATE_RATE) or sold along with another component e.g flights (PACKAGED)|
|createdAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the deal's static content was created.|
|dealRequestId|string|true|none|The unique identifier for this deal request|
|dealRequestStatus|string|true|none|The status of the deal request.|
|dealType|string|true|none|The type of the deal request.|
|discount|object|true|none|Rather than selling the hotel's generally available public rates, if a discount is agreed on, bookings made with this deal will have a reduced rate.|
|lengthOfStay|object|true|none|You're agreeing with the hotel that any booking made will have a minimum and/or maximum amount of nights.|
|sellableInDateRanges|[object]|true|none|The date ranges within which you can sell rates using this deal.|
|specialInstructions|string \| null|true|none|These are conditions set by you the seller or the hotel for which the deal can be sold. For example: this deal can only be sold on mobile. Any specialInstructions will override other variables, for example, if an instruction includes: All bookings are non refundable, this will override any pre-existing cancellationPolicy. |
|stayDateRanges|[object]|true|none|The date ranges within which guests you sell can stay at the hotel with the conditions you agree, given the hotel has rooms available.|
|updatedAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the deal's static content was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|conditions|PACKAGED|
|conditions|PRIVATE_RATE|
|dealRequestStatus|PENDING|
|dealRequestStatus|ACCEPTED|
|dealRequestStatus|REJECTED|
|dealType|SENT_ON_IMPALA|
|dealType|EXTERNAL|
|dealType|IMPALA_SHARED|

<h2 id="tocS_externalUrl">externalUrl</h2>
<!-- backwards compatibility -->
<a id="schemaexternalurl"></a>
<a id="schema_externalUrl"></a>
<a id="tocSexternalurl"></a>
<a id="tocsexternalurl"></a>

```json
{
  "name": "BOOKING.COM",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Destination of the external url|
|url|string|false|none|Value of the external url|

#### Enumerated Values

|Property|Value|
|---|---|
|name|BOOKING.COM|
|name|HOTELS.COM|

<h2 id="tocS_genericError">genericError</h2>
<!-- backwards compatibility -->
<a id="schemagenericerror"></a>
<a id="schema_genericError"></a>
<a id="tocSgenericerror"></a>
<a id="tocsgenericerror"></a>

```json
{
  "code": "ERROR_CODE",
  "message": "Resource not found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Error code for you to use programatically, for error logging and debugging.|
|message|string|true|none|Error message intended to aid developers in debugging issues. We strongly advise against displaying this information publicly to your guests as it **might contain sensitive implementation details**.|

<h2 id="tocS_guestPaymentErrorStub">guestPaymentErrorStub</h2>
<!-- backwards compatibility -->
<a id="schemaguestpaymenterrorstub"></a>
<a id="schema_guestPaymentErrorStub"></a>
<a id="tocSguestpaymenterrorstub"></a>
<a id="tocsguestpaymenterrorstub"></a>

```json
{
  "code": "PAYMENT_FAILED",
  "message": "Incorrect cvc number"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|Information about why we could not successfully charge the guest for the booking|

<h2 id="tocS_guestPaymentStub">guestPaymentStub</h2>
<!-- backwards compatibility -->
<a id="schemaguestpaymentstub"></a>
<a id="schema_guestPaymentStub"></a>
<a id="tocSguestpaymentstub"></a>
<a id="tocsguestpaymentstub"></a>

```json
{
  "authorisationRedirectUrl": "https://www.starling.3ds.co.uk",
  "createdAt": "1970-01-01T00:00:00Z",
  "paymentId": "string",
  "status": "COMPLETED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorisationRedirectUrl|string|false|none|none|
|createdAt|string(date-time)|true|none|none|
|paymentId|string|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|PROCESSING|
|status|AUTHORISATION_REQUIRED|

<h2 id="tocS_hotelAgreement">hotelAgreement</h2>
<!-- backwards compatibility -->
<a id="schemahotelagreement"></a>
<a id="schema_hotelAgreement"></a>
<a id="tocShotelagreement"></a>
<a id="tocshotelagreement"></a>

```json
{
  "cancellationPolicy": {
    "count": 2,
    "type": "DAYS_BEFORE_ARRIVAL_AT_MIDNIGHT"
  },
  "commission": {
    "count": 14,
    "type": "PERCENTAGE"
  },
  "conditions": [
    "PRIVATE_RATE"
  ],
  "createdAt": "2020-01-01T10:36:25.267Z",
  "dealsSellable": {
    "max": 0
  },
  "discount": {
    "count": 5,
    "type": "PERCENTAGE"
  },
  "hotelAgreementId": "A82983",
  "hotelAgreementStatus": "ACCEPTED",
  "hotelId": "D4578932323",
  "lengthOfStay": {
    "max": 14,
    "min": 1
  },
  "sellableInDateRanges": [
    {
      "end": "2021-12-31",
      "start": "2021-01-01"
    }
  ],
  "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)",
  "stayDateRanges": [
    {
      "end": "2021-12-31",
      "start": "2021-01-01"
    }
  ],
  "updatedAt": "2020-11-27T10:46:35.569Z"
}
```

Hotel agreements detail which hotels have accepted/rejected the conditions of your deal request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationPolicy|object \| null|true|none|Public rates hotels offer come with cancellation policies the hotel defines (e.g. free to cancel until 14 days before arrival). If you agree on cancellation policies here, this means they override the hotel's own policies for any booking made with this deal (e.g. free to cancel until two days before arrival).|
|commission|object \| null|true|none|Rather than the commission Impala has pre-negotiated with the hotel, bookings made with this deal will generate the commission defined here for you.|
|conditions|[string]|true|none|A deal may have conditions set to it. For example, the deal may only apply for a closed user group (PRIVATE_RATE) or sold along with another component e.g flights (PACKAGED)|
|createdAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates) was created.|
|dealsSellable|object \| null|true|none|none|
|discount|object|true|none|Rather than selling the hotel's generally available public rates, if a discount is agreed on, bookings made with this deal will have a reduced rate.|
|hotelAgreementId|string|true|none|The unique identifier for this hotel agreement|
|hotelAgreementStatus|string|true|none|none|
|hotelId|string|true|none|The unique identifier for this deal request|
|lengthOfStay|object|true|none|You're agreeing with the hotel that any booking made will have a minimum and/or maximum amount of nights.|
|sellableInDateRanges|[object]|true|none|The date ranges within which you can sell rates using this deal.|
|specialInstructions|string \| null|true|none|These are conditions set by you the seller or the hotel for which the deal can be sold. For example: this deal can only be sold on mobile. Any specialInstructions will override other variables, for example, if an instruction includes: All bookings are non refundable, this will override any pre-existing cancellationPolicy.|
|stayDateRanges|[object]|true|none|The date ranges within which guests you sell can stay at the hotel with the conditions you agree, given the hotel has rooms available.|
|updatedAt|string(date-time)|true|none|Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates)  was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|conditions|PACKAGED|
|conditions|PRIVATE_RATE|
|hotelAgreementStatus|ACCEPTED|
|hotelAgreementStatus|REJECTED|
|hotelAgreementStatus|PENDING|

<h2 id="tocS_hotelAgreementStub">hotelAgreementStub</h2>
<!-- backwards compatibility -->
<a id="schemahotelagreementstub"></a>
<a id="schema_hotelAgreementStub"></a>
<a id="tocShotelagreementstub"></a>
<a id="tocshotelagreementstub"></a>

```json
{
  "conditions": [
    "PRIVATE_RATE"
  ],
  "dealId": "D1234",
  "dealsSellable": {
    "remaining": 5
  },
  "discount": {
    "count": 10,
    "type": "PERCENTAGE"
  },
  "hotelAgreementId": "A82983",
  "href": "v1/deal-requests/D1234/agreements/A76543",
  "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
}
```

Essential information on an agreement with a hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[string]|false|none|A deal may have conditions set to it. For example, the deal may only apply for a closed user group (PRIVATE_RATE) or sold along with another component e.g flights (PACKAGED)|
|dealId|string|true|none|The unique identifier for this deal request.|
|dealsSellable|object|false|none|There is a limit to the number of deals that can be sold. |
|discount|object|false|none|Rather than selling the hotel's generally available public rates, if a discount is agreed on, bookings made with this deal will have a reduced rate.|
|hotelAgreementId|string|true|none|Unique identifier for the hotel agreement.|
|href|string|false|none|URI that allows access to the full deal information.|
|specialInstructions|string \| null|true|none|These are conditions set by you the seller or the hotel for which the deal can be sold. For example: this deal can only be sold on mobile. Any specialInstructions will override other variables, for example, if an instruction includes: All bookings are non refundable, this will override any pre-existing cancellationPolicy.|

<h2 id="tocS_hotelFullDetail">hotelFullDetail</h2>
<!-- backwards compatibility -->
<a id="schemahotelfulldetail"></a>
<a id="schema_hotelFullDetail"></a>
<a id="tocShotelfulldetail"></a>
<a id="tocshotelfulldetail"></a>

```json
{
  "address": {
    "city": "Impalaland",
    "country": "GBR",
    "countryName": "United Kingdom",
    "line1": "12 Sample Avenue",
    "line2": "string",
    "postalCode": "12345",
    "region": "string"
  },
  "amenities": [
    {
      "code": 1234,
      "formatted": "WiFi"
    }
  ],
  "checkIn": {
    "from": "12:00",
    "to": "21:00"
  },
  "checkOut": {
    "from": "12:00",
    "to": "21:00"
  },
  "contractable": true,
  "createdAt": "2020-01-01T10:36:25.267Z",
  "currency": "USD",
  "description": {
    "short": "Don't expect anything fancy. This fictional example hotel has the bare minimum content, rate availability and features you can expect from any hotel on the Impala platform (https://impala.travel). It contains minimum photography at the minimum resolution, only the fields that you can expect to see on every hotel on the platform, and only one room type and rate. Testing with this hotel means your app works well in the rare cases where a hotel has only minimum content available."
  },
  "emails": [
    "string"
  ],
  "externalUrls": [
    {
      "name": "BOOKING.COM",
      "url": "string"
    }
  ],
  "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
  "images": [
    {
      "altText": "A photo of an object",
      "height": 4000,
      "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
      "width": 4000
    }
  ],
  "location": {
    "latitude": 58.386186,
    "longitude": -9.952549
  },
  "name": "Impala Minimalist Palace",
  "phoneNumbers": [
    "string"
  ],
  "roomCount": 30,
  "roomTypes": [
    {
      "amenities": [
        {
          "code": 1234,
          "formatted": "WiFi"
        }
      ],
      "description": "Modern room with plenty of natural light and modern furniture.",
      "images": [
        {
          "altText": "A photo of an object",
          "height": 4000,
          "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
          "width": 4000
        }
      ],
      "maxOccupancy": 4,
      "name": "Standard Room",
      "rates": [
        {
          "cancellationPolicies": [
            {
              "end": "2020-12-17 23:59:59.999",
              "fee": {
                "count": 100,
                "price": {
                  "amount": 9500,
                  "currency": {
                    "code": "EUR"
                  }
                },
                "type": "PERCENTAGE"
              },
              "formatted": "Non-refundable after October 19, 2021 00:00",
              "start": "2020-12-15 23:59:59.999"
            }
          ],
          "components": [
            {
              "formatted": "breakfast",
              "includedInRate": true,
              "type": "BREAKFAST"
            }
          ],
          "end": "2021-11-23",
          "hotelAgreement": {
            "conditions": [
              "PRIVATE_RATE"
            ],
            "dealId": "D1234",
            "dealsSellable": {
              "remaining": 5
            },
            "discount": {
              "count": 10,
              "type": "PERCENTAGE"
            },
            "hotelAgreementId": "A82983",
            "href": "v1/deal-requests/D1234/agreements/A76543",
            "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
          },
          "maxOccupancy": 2,
          "rateId": "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
          "ratePlanId": 1,
          "retailRate": {
            "taxesAndFees": {
              "includedInRate": [
                {
                  "category": "VAT",
                  "charges": {
                    "amount": 9500,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "formatted": "10% VAT"
                }
              ],
              "payAtHotel": [
                {
                  "category": "VAT",
                  "charges": {
                    "amount": 9500,
                    "currency": {
                      "code": "EUR"
                    }
                  },
                  "formatted": "10% VAT"
                }
              ]
            },
            "total": {
              "amount": 9500,
              "currency": {
                "code": "EUR"
              }
            }
          },
          "roomsSellable": 0,
          "sellerCommissionPercentage": 9.5,
          "sellerToImpalaPayment": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "start": "2021-11-20"
        }
      ],
      "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
    }
  ],
  "starRating": 2.5,
  "termsAndConditions": "Please note that passport details will be collected at check-in.",
  "timezone": "ATC",
  "updatedAt": "2020-11-27T10:46:35.569Z",
  "websiteUrl": "string"
}
```

Full details on a hotel, including its room types and available rates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[address](#schemaaddress)|true|none|Physical address|
|amenities|[[amenity](#schemaamenity)]|true|none|none|
|checkIn|[timeRange](#schematimerange)|true|none|A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.|
|checkOut|[timeRange](#schematimerange)|true|none|A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.|
|contractable|boolean|true|none|This determines if you can negotiate directly with the hotel. |
|createdAt|string(date-time)|false|none|Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates) was created.|
|currency|string|true|none|The standard currency code used by the hotel.|
|description|object|false|none|none|
|emails|[string]|true|none|none|
|externalUrls|[[externalUrl](#schemaexternalurl)]|true|none|none|
|hotelId|string(uuid)|true|none|Unique identifier for this hotel within the Impala platform.|
|images|[[image](#schemaimage)]|true|none|Photos of the hotel, sorted in the recommended display order (e.g. for photo galleries) starting with the recommended hero image.|
|location|[location](#schemalocation)|true|none|Precise location on a map (using WGS 84 longitude and latitude notation)|
|name|string|true|none|Name of the hotel.|
|phoneNumbers|[string]|true|none|The hotel's phone number(s)|
|roomCount|number|true|none|The number of rooms at the hotel.|
|roomTypes|[[roomType](#schemaroomtype)]|true|none|List of room types available at this hotel.|
|starRating|number(double) \| null|true|none|The star rating (or star-equivalent rating)|
|termsAndConditions|string|true|none|Rules and terms that apply to this hotel and have to be shown to your guest before the make their booking.|
|timezone|string|false|none|The timezone the hotel is in - e.g AST|
|updatedAt|string(date-time)|false|none|Date and time (in UTC and ISO 8601 format) when the hotel's stable content (i.e. all the details of the hotel excluding its rates)  was last updated.|
|websiteUrl|string \| null|true|none|The URL to the hotel's website.|

<h2 id="tocS_hotelStub">hotelStub</h2>
<!-- backwards compatibility -->
<a id="schemahotelstub"></a>
<a id="schema_hotelStub"></a>
<a id="tocShotelstub"></a>
<a id="tocshotelstub"></a>

```json
{
  "address": {
    "city": "Impalaland",
    "country": "GBR",
    "countryName": "United Kingdom",
    "line1": "12 Sample Avenue",
    "line2": "string",
    "postalCode": "12345",
    "region": "string"
  },
  "checkIn": {
    "from": "12:00",
    "to": "21:00"
  },
  "checkOut": {
    "from": "12:00",
    "to": "21:00"
  },
  "emails": [
    "string"
  ],
  "hotelId": "60a06628-2c71-44bf-9685-efbd2df4179e",
  "href": "/v1/hotels/60a06628-2c71-44bf-9685-efbd2df4179e",
  "images": [
    {
      "altText": "A photo of an object",
      "height": 4000,
      "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
      "width": 4000
    }
  ],
  "location": {
    "latitude": 58.386186,
    "longitude": -9.952549
  },
  "name": "Impala Minimalist Palace",
  "phoneNumbers": [
    "string"
  ],
  "starRating": 2.5,
  "timezone": "AST"
}
```

Essential information on a hotel returned as part of other resources, linking to the full resource within its `href` field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[address](#schemaaddress)|true|none|Physical address|
|checkIn|[timeRange](#schematimerange)|false|none|A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.|
|checkOut|[timeRange](#schematimerange)|false|none|A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.|
|emails|[string]|false|none|none|
|hotelId|string(uuid)|true|none|Unique identifier for this hotel within the Impala platform.|
|href|string|false|none|URI that allows access to the full hotel information.|
|images|[[image](#schemaimage)]|true|none|Photos of the hotel, sorted in the recommended display order (e.g. for photo galleries) starting with the recommended hero image.|
|location|[location](#schemalocation)|true|none|Precise location on a map (using WGS 84 longitude and latitude notation)|
|name|string|true|none|Name of the hotel.|
|phoneNumbers|[string]|false|none|The hotel's phone number(s)|
|starRating|number(double) \| null|true|none|The star rating (or star-equivalent rating)|
|timezone|string|false|none|The timezone the hotel is in - e.g AST|

<h2 id="tocS_image">image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "altText": "A photo of an object",
  "height": 4000,
  "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
  "width": 4000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string \| null|false|none|Alternative text for the image (to be used e.g. to cater to screenreaders).|
|height|number|true|none|Height in pixels.|
|url|string(uri)|true|none|The url of this image. The url of an image might change over time, and we therefore advise not to store or cache image URLs within your app beyond a few minutes.|
|width|number|true|none|Width in pixels.|

<h2 id="tocS_location">location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "latitude": 58.386186,
  "longitude": -9.952549
}
```

Precise location on a map (using WGS 84 longitude and latitude notation)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|true|none|WGS 84 latitude.|
|longitude|number|true|none|WGS 84 longitude.|

<h2 id="tocS_money">money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "amount": 9500,
  "currency": {
    "code": "EUR"
  }
}
```

An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|Amount in the smallest unit of the currency. E.g. 234.56 € is expressed as 23456 (in Euro cents to avoid rounding errors in calculations).|
|currency|object|true|none|Details of the currency.|

<h2 id="tocS_notesBookedRoom">notesBookedRoom</h2>
<!-- backwards compatibility -->
<a id="schemanotesbookedroom"></a>
<a id="schema_notesBookedRoom"></a>
<a id="tocSnotesbookedroom"></a>
<a id="tocsnotesbookedroom"></a>

```json
{
  "fromGuest": "string",
  "fromSeller": "string"
}
```

Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.
These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromGuest|string \| null|true|none|Notes your guest has entered as part of the booking for this booked room. These allow them to communicate anything noteworthy about this booked room to the hotel, e.g. special instructions around room setup, that the minibar should not contain any alcoholic beverages or a wheelchair-accessible room is required.|
|fromSeller|string \| null|true|none|Notes from you as a seller allow you to communicate any instructions for this booked room. These are communicated to the hotel as coming from you. You can use this field to provide the hotel with pointers about e.g. room setup, connecting doors that need to be opened, extrabeds to be placed in the rooms or any other instructions.|

<h2 id="tocS_notesBooking">notesBooking</h2>
<!-- backwards compatibility -->
<a id="schemanotesbooking"></a>
<a id="schema_notesBooking"></a>
<a id="tocSnotesbooking"></a>
<a id="tocsnotesbooking"></a>

```json
{
  "fromGuest": "string",
  "fromSeller": "string"
}
```

Notes allow sellers to their guests to communicate relevant information to the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromGuest|string|false|none|Notes a guest has entered as they made the book can be added here. This allows you to display a free text field to your guests where they can enter any information they want to communicate to the hotel (e.g. that their booking is for a special occassion or that they have a particular room preference).|
|fromSeller|string|false|none|Notes you as a seller want to communicate to the hotel. You might use this field to communicate operational processes to watch out for (e.g. providing the hotel with context around where the booking was made or what to watch out for) or information about the guest.|

<h2 id="tocS_pagination">pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "count": 10,
  "next": "/v1/sample?size=20&offset=120",
  "prev": "/v1/sample?size=20&offset=80",
  "total": 1500
}
```

Information that helps paginate through lists of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number(int32)|true|none|The number of items returned on this page.|
|next|string \| null|true|none|The absolute URL pointing to the next page. Will be null if there are no next pages.|
|prev|string \| null|true|none|The absolute URL pointing to the previous page. Will be null if there are no previous pages.|
|total|number(int32)|true|none|The total number of items that exist for your query across all pages.|

<h2 id="tocS_personInfo">personInfo</h2>
<!-- backwards compatibility -->
<a id="schemapersoninfo"></a>
<a id="schema_personInfo"></a>
<a id="tocSpersoninfo"></a>
<a id="tocspersoninfo"></a>

```json
{
  "email": "jocelin.carreon.crespo@example.com",
  "firstName": "Jocelín",
  "lastName": "Carreón Sample"
}
```

Information on a person and their contact details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address.|
|firstName|string|true|none|First name.|
|lastName|string|true|none|Family name or surname.|

<h2 id="tocS_rate">rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "cancellationPolicies": [
    {
      "end": "2020-12-17 23:59:59.999",
      "fee": {
        "count": 100,
        "price": {
          "amount": 9500,
          "currency": {
            "code": "EUR"
          }
        },
        "type": "PERCENTAGE"
      },
      "formatted": "Non-refundable after October 19, 2021 00:00",
      "start": "2020-12-15 23:59:59.999"
    }
  ],
  "components": [
    {
      "formatted": "breakfast",
      "includedInRate": true,
      "type": "BREAKFAST"
    }
  ],
  "end": "2021-11-23",
  "hotelAgreement": {
    "conditions": [
      "PRIVATE_RATE"
    ],
    "dealId": "D1234",
    "dealsSellable": {
      "remaining": 5
    },
    "discount": {
      "count": 10,
      "type": "PERCENTAGE"
    },
    "hotelAgreementId": "A82983",
    "href": "v1/deal-requests/D1234/agreements/A76543",
    "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
  },
  "maxOccupancy": 2,
  "rateId": "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
  "ratePlanId": 1,
  "retailRate": {
    "taxesAndFees": {
      "includedInRate": [
        {
          "category": "VAT",
          "charges": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "formatted": "10% VAT"
        }
      ],
      "payAtHotel": [
        {
          "category": "VAT",
          "charges": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "formatted": "10% VAT"
        }
      ]
    },
    "total": {
      "amount": 9500,
      "currency": {
        "code": "EUR"
      }
    }
  },
  "roomsSellable": 0,
  "sellerCommissionPercentage": 9.5,
  "sellerToImpalaPayment": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  },
  "start": "2021-11-20"
}
```

Information on the price of the room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationPolicies|[[cancellationPolicy](#schemacancellationpolicy)]|true|none|none|
|components|[[rateComponent](#schemaratecomponent)]|true|none|none|
|end|string(date)|true|none|none|
|hotelAgreement|[hotelAgreementStub](#schemahotelagreementstub)|true|none|Essential information on an agreement with a hotel.|
|maxOccupancy|integer|true|none|Maximum number of adults included in the rate.|
|rateId|string|true|none|none|
|ratePlanId|integer|false|none|The rate plan ID that is attached to this rate. Each rate plan ID can specify a unique combination of a cancellation policy and a meal plan.|
|retailRate|object|true|none|The public retail rate you should quote and charge your guest. You're not allowed to quote or charge an amount lower than this if your website or app is publicly accessible.|
|roomsSellable|number|false|none|Amount of rooms which can be sold for this occupancy level and room type at this rate price.|
|sellerCommissionPercentage|number(float)|true|none|The commission percentage you as a seller will earn from this booking, based on `retailRate.total`.|
|sellerToImpalaPayment|object|false|none|This is the amount payable to the hotel, which Impala will collect from you on the hotel's behalf. The Impala fee will be requested in addition to this, and also documented in a VAT invoice.|
|start|string(date)|true|none|none|

<h2 id="tocS_rateAdjustment">rateAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemarateadjustment"></a>
<a id="schema_rateAdjustment"></a>
<a id="tocSrateadjustment"></a>
<a id="tocsrateadjustment"></a>

```json
{
  "adjustmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 5,
  "conditions": [
    {
      "rules": {
        "bookableDateRange": {
          "end": "2021-08-23",
          "start": "2021-05-15"
        },
        "nightsRange": {
          "max": 5,
          "min": 3
        }
      },
      "type": "LENGTH_OF_STAY"
    }
  ],
  "type": "PERCENTAGE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustmentId|string(uuid)|false|none|Unique identifier of this rate adjustment.|
|amount|number|true|none|The percentage discount between 0 and 100.|
|conditions|[[adjustmentConditionLengthOfStayRule](#schemaadjustmentconditionlengthofstayrule)]|true|none|A list of conditions for the adjustment to apply.|
|type|string|true|none|The adjustment type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PERCENTAGE|

<h2 id="tocS_rateComponent">rateComponent</h2>
<!-- backwards compatibility -->
<a id="schemaratecomponent"></a>
<a id="schema_rateComponent"></a>
<a id="tocSratecomponent"></a>
<a id="tocsratecomponent"></a>

```json
{
  "formatted": "breakfast",
  "includedInRate": true,
  "type": "BREAKFAST"
}
```

Product or service offered as part of a rate in addition to accommodation in the room.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatted|string|true|none|Human-readable plain English version of the component included in the rate, ready to be shown to your guests.|
|includedInRate|boolean|false|none|none|
|type|string|true|none|The type of product or service included in the price. We currently support rates including "BREAKFAST", "LUNCH", "DINNER" and "ALL_INCLUSIVE".|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BREAKFAST|
|type|LUNCH|
|type|DINNER|
|type|WELCOME_BEVERAGE|
|type|ALL_INCLUSIVE|

<h2 id="tocS_ratePlan">ratePlan</h2>
<!-- backwards compatibility -->
<a id="schemarateplan"></a>
<a id="schema_ratePlan"></a>
<a id="tocSrateplan"></a>
<a id="tocsrateplan"></a>

```json
{
  "adjustments": [
    {
      "adjustmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 5,
      "conditions": [
        {
          "rules": {
            "bookableDateRange": {
              "end": "2021-08-23",
              "start": "2021-05-15"
            },
            "nightsRange": {
              "max": 5,
              "min": 3
            }
          },
          "type": "LENGTH_OF_STAY"
        }
      ],
      "type": "PERCENTAGE"
    }
  ],
  "components": [
    {
      "formatted": "breakfast",
      "includedInRate": true,
      "type": "BREAKFAST"
    }
  ],
  "conditions": {
    "cancellationDeadline": 0,
    "cancellationPolicy": "FREE_CANCELLATION"
  },
  "description": "NON_REFUNDABLE,DINNER",
  "hotelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ratePlanId": 0,
  "restrictions": {
    "lengthOfStay": {
      "max": 0,
      "min": 0
    }
  },
  "roomTypes": [
    {
      "dates": [
        {
          "closed": true,
          "closedToArrival": true,
          "closedToDeparture": true,
          "date": "string",
          "rates": [
            {
              "adults": 1,
              "retailRate": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "roomsSellable": 0
            }
          ],
          "staythrough": {
            "min": 0
          }
        }
      ],
      "maxOccupancy": 1,
      "name": "Junior Suite",
      "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

Rate plan encapsulates rates given a set of internal conditions like cancellation policy or meal plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustments|[[rateAdjustment](#schemarateadjustment)]|false|none|A list of adjustments that could apply to this rate.|
|components|[[rateComponent](#schemaratecomponent)]|false|none|none|
|conditions|[conditions](#schemaconditions)|true|none|Conditions described by the rate plan.|
|description|string|true|none|Human-readable summary describing this rate plan.|
|hotelId|string(uuid)|true|none|The unique identifier of the hotel this rate plan is available for.|
|ratePlanId|number(6 digit)|true|none|The integer identifier of this rate plan.|
|restrictions|[ratePlanRestrictions](#schemarateplanrestrictions)|true|none|Restrictions that apply to this rate plan.|
|roomTypes|[[ratePlanRoomType](#schemarateplanroomtype)]|true|none|A list of room types this rate plan is bookable for.|

<h2 id="tocS_ratePlanRate">ratePlanRate</h2>
<!-- backwards compatibility -->
<a id="schemarateplanrate"></a>
<a id="schema_ratePlanRate"></a>
<a id="tocSrateplanrate"></a>
<a id="tocsrateplanrate"></a>

```json
{
  "adults": 1,
  "retailRate": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  },
  "roomsSellable": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|number|true|none|The number of adults in the room for which this price applies.|
|retailRate|[money](#schemamoney)|true|none|An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)|
|roomsSellable|number|true|none|Amount of room which can be sold for this occupancy level and room type at this rate price.|

<h2 id="tocS_ratePlanRestrictions">ratePlanRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemarateplanrestrictions"></a>
<a id="schema_ratePlanRestrictions"></a>
<a id="tocSrateplanrestrictions"></a>
<a id="tocsrateplanrestrictions"></a>

```json
{
  "lengthOfStay": {
    "max": 0,
    "min": 0
  }
}
```

Restrictions that apply to this rate plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthOfStay|object|true|none|Determines the length of stay in nights for which this rate plan can be booked.|

<h2 id="tocS_ratePlanRoom">ratePlanRoom</h2>
<!-- backwards compatibility -->
<a id="schemarateplanroom"></a>
<a id="schema_ratePlanRoom"></a>
<a id="tocSrateplanroom"></a>
<a id="tocsrateplanroom"></a>

```json
{
  "adults": 0,
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "price": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  },
  "ratePlanId": 0,
  "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|number|true|none|number of adult guests|
|notes|[notesBookedRoom](#schemanotesbookedroom)|false|none|Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.<br>These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.|
|price|object|true|none|none|
|ratePlanId|number|true|none|none|
|roomTypeId|string(uuid)|true|none|none|

<h2 id="tocS_ratePlanRoomType">ratePlanRoomType</h2>
<!-- backwards compatibility -->
<a id="schemarateplanroomtype"></a>
<a id="schema_ratePlanRoomType"></a>
<a id="tocSrateplanroomtype"></a>
<a id="tocsrateplanroomtype"></a>

```json
{
  "dates": [
    {
      "closed": true,
      "closedToArrival": true,
      "closedToDeparture": true,
      "date": "string",
      "rates": [
        {
          "adults": 1,
          "retailRate": {
            "amount": 9500,
            "currency": {
              "code": "EUR"
            }
          },
          "roomsSellable": 0
        }
      ],
      "staythrough": {
        "min": 0
      }
    }
  ],
  "maxOccupancy": 1,
  "name": "Junior Suite",
  "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dates|[[ratesPerDate](#schemaratesperdate)]|true|none|A list of future dates and their rate prices for this rate plan and room type.|
|maxOccupancy|number|true|none|Number of adults that the room can accommodate.|
|name|string|true|none|Formatted room type name.|
|roomTypeId|string(uuid)|true|none|Unique identifier of this room type.|

<h2 id="tocS_ratesPerDate">ratesPerDate</h2>
<!-- backwards compatibility -->
<a id="schemaratesperdate"></a>
<a id="schema_ratesPerDate"></a>
<a id="tocSratesperdate"></a>
<a id="tocsratesperdate"></a>

```json
{
  "closed": true,
  "closedToArrival": true,
  "closedToDeparture": true,
  "date": "string",
  "rates": [
    {
      "adults": 1,
      "retailRate": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "roomsSellable": 0
    }
  ],
  "staythrough": {
    "min": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|boolean|true|none|Determines whether the rate is available for a stay including this date.|
|closedToArrival|boolean|false|none|Determines whether the rate is available if the arrival falls on this date.|
|closedToDeparture|boolean|false|none|Determines whether the rate is available if the departure falls on this date.|
|date|string(YYYY-MM-DD)|true|none|none|
|rates|[[ratePlanRate](#schemarateplanrate)]|true|none|Rate prices for each occupancy the room can accommodate.|
|staythrough|object|false|none|The minimum number of nights (inclusive) that the guest has to book which include the date to be eligible for this rate.|

<h2 id="tocS_roomType">roomType</h2>
<!-- backwards compatibility -->
<a id="schemaroomtype"></a>
<a id="schema_roomType"></a>
<a id="tocSroomtype"></a>
<a id="tocsroomtype"></a>

```json
{
  "amenities": [
    {
      "code": 1234,
      "formatted": "WiFi"
    }
  ],
  "description": "Modern room with plenty of natural light and modern furniture.",
  "images": [
    {
      "altText": "A photo of an object",
      "height": 4000,
      "url": "https://cdn.impala.travel/ckhlsuxbb000b3b666rr9ussq.jpg",
      "width": 4000
    }
  ],
  "maxOccupancy": 4,
  "name": "Standard Room",
  "rates": [
    {
      "cancellationPolicies": [
        {
          "end": "2020-12-17 23:59:59.999",
          "fee": {
            "count": 100,
            "price": {
              "amount": 9500,
              "currency": {
                "code": "EUR"
              }
            },
            "type": "PERCENTAGE"
          },
          "formatted": "Non-refundable after October 19, 2021 00:00",
          "start": "2020-12-15 23:59:59.999"
        }
      ],
      "components": [
        {
          "formatted": "breakfast",
          "includedInRate": true,
          "type": "BREAKFAST"
        }
      ],
      "end": "2021-11-23",
      "hotelAgreement": {
        "conditions": [
          "PRIVATE_RATE"
        ],
        "dealId": "D1234",
        "dealsSellable": {
          "remaining": 5
        },
        "discount": {
          "count": 10,
          "type": "PERCENTAGE"
        },
        "hotelAgreementId": "A82983",
        "href": "v1/deal-requests/D1234/agreements/A76543",
        "specialInstructions": "This deal can only be sold via desktop (not allowed for mobile apps)"
      },
      "maxOccupancy": 2,
      "rateId": "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
      "ratePlanId": 1,
      "retailRate": {
        "taxesAndFees": {
          "includedInRate": [
            {
              "category": "VAT",
              "charges": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "formatted": "10% VAT"
            }
          ],
          "payAtHotel": [
            {
              "category": "VAT",
              "charges": {
                "amount": 9500,
                "currency": {
                  "code": "EUR"
                }
              },
              "formatted": "10% VAT"
            }
          ]
        },
        "total": {
          "amount": 9500,
          "currency": {
            "code": "EUR"
          }
        }
      },
      "roomsSellable": 0,
      "sellerCommissionPercentage": 9.5,
      "sellerToImpalaPayment": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "start": "2021-11-20"
    }
  ],
  "roomTypeId": "d5b192ce-c45f-46da-abf5-3880b429b7cc"
}
```

Bookable category of bookable rooms within a hotel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amenities|[[amenity](#schemaamenity)]|true|none|none|
|description|string|true|none|Description|
|images|[[image](#schemaimage)]|true|none|Lists photos of this room type|
|maxOccupancy|integer|true|none|Maximum number of adults that can occupy the room.|
|name|string|true|none|Name|
|rates|[[rate](#schemarate)]|false|none|Bookable rates for this room type and the start and end dates of your availability search.|
|roomTypeId|string(uuid)|true|none|Unique identifier of the room type within the Impala platform.|

<h2 id="tocS_taxOrFee">taxOrFee</h2>
<!-- backwards compatibility -->
<a id="schemataxorfee"></a>
<a id="schema_taxOrFee"></a>
<a id="tocStaxorfee"></a>
<a id="tocstaxorfee"></a>

```json
{
  "category": "VAT",
  "charges": {
    "amount": 9500,
    "currency": {
      "code": "EUR"
    }
  },
  "formatted": "10% VAT"
}
```

Details of a tax or fee (included or excluded in a rate).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Structured information on what type the type of tax or fee.|
|charges|[money](#schemamoney)|false|none|An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)|
|formatted|string|false|none|Formatted English description of this tax or fee, ready to be shown to your guests.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|VAT|
|category|CITY_TAX|
|category|OTHER|

<h2 id="tocS_timeRange">timeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_timeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "from": "12:00",
  "to": "21:00"
}
```

A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|Time in ISO 8601 time format.|
|to|string|false|none|Time in ISO 8601 time format.|

<h2 id="tocS_updateBookingContactRequest">updateBookingContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookingcontactrequest"></a>
<a id="schema_updateBookingContactRequest"></a>
<a id="tocSupdatebookingcontactrequest"></a>
<a id="tocsupdatebookingcontactrequest"></a>

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
}
```

Request body for update contact booking

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingContact|[personInfo](#schemapersoninfo)|true|none|Information on a person and their contact details.|
|updateBookingVersionAtTimestamp|[updateBookingVersionAtTimestamp](#schemaupdatebookingversionattimestamp)|true|write-only|The timestamp of when the booking was last updated|

<h2 id="tocS_updateBookingRequest">updateBookingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookingrequest"></a>
<a id="schema_updateBookingRequest"></a>
<a id="tocSupdatebookingrequest"></a>
<a id="tocsupdatebookingrequest"></a>

```json
{
  "bookingContact": {
    "email": "jocelin.carreon.crespo@example.com",
    "firstName": "Jocelín",
    "lastName": "Carreón Sample"
  },
  "end": "1970-01-01",
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "paymentType": "API",
  "rooms": [
    {
      "adults": 2,
      "notes": {
        "fromGuest": "string",
        "fromSeller": "string"
      },
      "rateId": "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA"
    }
  ],
  "start": "1970-01-01",
  "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingContact|object|true|none|Details of your guest (will be provided to the hotel in case of questions).|
|end|string(date)|true|none|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|notes|[notesBooking](#schemanotesbooking)|false|none|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|paymentType|string|false|none|How will the guest make payment for this booking?|
|rooms|[object]|true|none|List of room type identifiers to be booked.|
|start|string(date)|true|none|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|updateBookingVersionAtTimestamp|[updateBookingVersionAtTimestamp](#schemaupdatebookingversionattimestamp)|true|write-only|The timestamp of when the booking was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentType|API|

<h2 id="tocS_updateBookingRequestWithRatePlans">updateBookingRequestWithRatePlans</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookingrequestwithrateplans"></a>
<a id="schema_updateBookingRequestWithRatePlans"></a>
<a id="tocSupdatebookingrequestwithrateplans"></a>
<a id="tocsupdatebookingrequestwithrateplans"></a>

```json
{
  "bookingContact": {
    "email": "string",
    "firstName": "string",
    "lastName": "string"
  },
  "dealId": "string",
  "end": "1970-01-01",
  "notes": {
    "fromGuest": "string",
    "fromSeller": "string"
  },
  "paymentType": "API",
  "rooms": [
    {
      "adults": 0,
      "notes": {
        "fromGuest": "string",
        "fromSeller": "string"
      },
      "price": {
        "amount": 9500,
        "currency": {
          "code": "EUR"
        }
      },
      "ratePlanId": 0,
      "roomTypeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "start": "1970-01-01",
  "updateBookingVersionAtTimestamp": "2020-12-20T11:01:30.745Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingContact|object|true|none|Contact data to the guest that booked the accomodation|
|dealId|string|false|none|The id of the deal that contains agreement made between the hotel and company|
|end|string(date)|true|none|The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|notes|[notesBooking](#schemanotesbooking)|false|none|Notes allow sellers to their guests to communicate relevant information to the hotel.|
|paymentType|string|false|none|How will the guest make payment for this booking?|
|rooms|[[ratePlanRoom](#schemarateplanroom)]|true|none|Array of rooms booked within this booking|
|start|string(date)|true|none|The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.|
|updateBookingVersionAtTimestamp|[updateBookingVersionAtTimestamp](#schemaupdatebookingversionattimestamp)|true|write-only|The timestamp of when the booking was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentType|API|

<h2 id="tocS_updateBookingVersionAtTimestamp">updateBookingVersionAtTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookingversionattimestamp"></a>
<a id="schema_updateBookingVersionAtTimestamp"></a>
<a id="tocSupdatebookingversionattimestamp"></a>
<a id="tocsupdatebookingversionattimestamp"></a>

```json
"2020-12-20T11:01:30.745Z"
```

The timestamp of when the booking was last updated

<h2 id="tocS_validationError">validationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_validationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "code": "ERROR_CODE",
  "message": "Resource not found",
  "validations": [
    {
      "code": "ANY_REQUIRED",
      "field": "start",
      "message": "\"start\" is required"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Error code for you to use programatically, for error logging and debugging.|
|message|string|true|none|Error message intended to aid developers in debugging issues. We strongly advise against displaying this information publicly to your guests as it **might contain sensitive implementation details**.|
|validations|[[validationResult](#schemavalidationresult)]|false|none|none|

<h2 id="tocS_validationResult">validationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_validationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "code": "ANY_REQUIRED",
  "field": "start",
  "message": "\"start\" is required"
}
```

Describes the validation that failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Error code intended for logging and debugging.|
|field|string|false|none|Name of the field that has failed to validate. Intended to aid developers in finding and fixing implementation mistakes.|
|message|string|true|none|Error message in English intended to aid developers in finding and solving implementation mistakes. Do not display to your guests as it **might contain sensitive implementation information**.|
