<h1 id="my-business-lodging-api">My Business Lodging API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Lodging API enables managing lodging business information on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinesslodging.googleapis.com/">https://mybusinesslodging.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-lodging-api-locations">locations</h1>

## mybusinesslodging.locations.getLodging

<a id="opIdmybusinesslodging.locations.getLodging"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Returns the Lodging of a specific location.

<h3 id="mybusinesslodginglocationsgetlodging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form: `locations/{location_id}/lodging`|
|readMask|query|string|false|Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accessibility": {
    "mobilityAccessible": true,
    "mobilityAccessibleElevator": true,
    "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleParking": true,
    "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessiblePool": true,
    "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "activities": {
    "beachAccess": true,
    "beachAccessException": "EXCEPTION_UNSPECIFIED",
    "beachFront": true,
    "beachFrontException": "EXCEPTION_UNSPECIFIED",
    "bicycleRental": true,
    "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "boutiqueStores": true,
    "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
    "casino": true,
    "casinoException": "EXCEPTION_UNSPECIFIED",
    "freeBicycleRental": true,
    "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "freeWatercraftRental": true,
    "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
    "gameRoom": true,
    "gameRoomException": "EXCEPTION_UNSPECIFIED",
    "golf": true,
    "golfException": "EXCEPTION_UNSPECIFIED",
    "horsebackRiding": true,
    "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
    "nightclub": true,
    "nightclubException": "EXCEPTION_UNSPECIFIED",
    "privateBeach": true,
    "privateBeachException": "EXCEPTION_UNSPECIFIED",
    "scuba": true,
    "scubaException": "EXCEPTION_UNSPECIFIED",
    "snorkeling": true,
    "snorkelingException": "EXCEPTION_UNSPECIFIED",
    "tennis": true,
    "tennisException": "EXCEPTION_UNSPECIFIED",
    "waterSkiing": true,
    "waterSkiingException": "EXCEPTION_UNSPECIFIED",
    "watercraftRental": true,
    "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
  },
  "allUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "business": {
    "businessCenter": true,
    "businessCenterException": "EXCEPTION_UNSPECIFIED",
    "meetingRooms": true,
    "meetingRoomsCount": 0,
    "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
    "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
  },
  "commonLivingArea": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "connectivity": {
    "freeWifi": true,
    "freeWifiException": "EXCEPTION_UNSPECIFIED",
    "publicAreaWifiAvailable": true,
    "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "publicInternetTerminal": true,
    "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
    "wifiAvailable": true,
    "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "families": {
    "babysitting": true,
    "babysittingException": "EXCEPTION_UNSPECIFIED",
    "kidsActivities": true,
    "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
    "kidsClub": true,
    "kidsClubException": "EXCEPTION_UNSPECIFIED",
    "kidsFriendly": true,
    "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
  },
  "foodAndDrink": {
    "bar": true,
    "barException": "EXCEPTION_UNSPECIFIED",
    "breakfastAvailable": true,
    "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
    "breakfastBuffet": true,
    "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
    "buffet": true,
    "buffetException": "EXCEPTION_UNSPECIFIED",
    "dinnerBuffet": true,
    "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
    "freeBreakfast": true,
    "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
    "restaurant": true,
    "restaurantException": "EXCEPTION_UNSPECIFIED",
    "restaurantsCount": 0,
    "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
    "roomService": true,
    "roomServiceException": "EXCEPTION_UNSPECIFIED",
    "tableService": true,
    "tableServiceException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourRoomService": true,
    "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
    "vendingMachine": true,
    "vendingMachineException": "EXCEPTION_UNSPECIFIED"
  },
  "guestUnits": [
    {
      "codes": [
        "string"
      ],
      "features": {
        "bungalowOrVilla": true,
        "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
        "connectingUnitAvailable": true,
        "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
        "executiveFloor": true,
        "executiveFloorException": "EXCEPTION_UNSPECIFIED",
        "maxAdultOccupantsCount": 0,
        "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxChildOccupantsCount": 0,
        "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxOccupantsCount": 0,
        "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "privateHome": true,
        "privateHomeException": "EXCEPTION_UNSPECIFIED",
        "suite": true,
        "suiteException": "EXCEPTION_UNSPECIFIED",
        "tier": "UNIT_TIER_UNSPECIFIED",
        "tierException": "EXCEPTION_UNSPECIFIED",
        "totalLivingAreas": {
          "accessibility": {
            "adaCompliantUnit": true,
            "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleDoorbell": true,
            "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleFireAlarm": true,
            "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleUnit": true,
            "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleBathtub": true,
            "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleShower": true,
            "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleToilet": true,
            "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleUnit": true,
            "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
          },
          "eating": {
            "coffeeMaker": true,
            "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
            "cookware": true,
            "cookwareException": "EXCEPTION_UNSPECIFIED",
            "dishwasher": true,
            "dishwasherException": "EXCEPTION_UNSPECIFIED",
            "indoorGrill": true,
            "indoorGrillException": "EXCEPTION_UNSPECIFIED",
            "kettle": true,
            "kettleException": "EXCEPTION_UNSPECIFIED",
            "kitchenAvailable": true,
            "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
            "microwave": true,
            "microwaveException": "EXCEPTION_UNSPECIFIED",
            "minibar": true,
            "minibarException": "EXCEPTION_UNSPECIFIED",
            "outdoorGrill": true,
            "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
            "oven": true,
            "ovenException": "EXCEPTION_UNSPECIFIED",
            "refrigerator": true,
            "refrigeratorException": "EXCEPTION_UNSPECIFIED",
            "sink": true,
            "sinkException": "EXCEPTION_UNSPECIFIED",
            "snackbar": true,
            "snackbarException": "EXCEPTION_UNSPECIFIED",
            "stove": true,
            "stoveException": "EXCEPTION_UNSPECIFIED",
            "teaStation": true,
            "teaStationException": "EXCEPTION_UNSPECIFIED",
            "toaster": true,
            "toasterException": "EXCEPTION_UNSPECIFIED"
          },
          "features": {
            "airConditioning": true,
            "airConditioningException": "EXCEPTION_UNSPECIFIED",
            "bathtub": true,
            "bathtubException": "EXCEPTION_UNSPECIFIED",
            "bidet": true,
            "bidetException": "EXCEPTION_UNSPECIFIED",
            "dryer": true,
            "dryerException": "EXCEPTION_UNSPECIFIED",
            "electronicRoomKey": true,
            "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
            "fireplace": true,
            "fireplaceException": "EXCEPTION_UNSPECIFIED",
            "hairdryer": true,
            "hairdryerException": "EXCEPTION_UNSPECIFIED",
            "heating": true,
            "heatingException": "EXCEPTION_UNSPECIFIED",
            "inunitSafe": true,
            "inunitSafeException": "EXCEPTION_UNSPECIFIED",
            "inunitWifiAvailable": true,
            "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
            "ironingEquipment": true,
            "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
            "payPerViewMovies": true,
            "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
            "privateBathroom": true,
            "privateBathroomException": "EXCEPTION_UNSPECIFIED",
            "shower": true,
            "showerException": "EXCEPTION_UNSPECIFIED",
            "toilet": true,
            "toiletException": "EXCEPTION_UNSPECIFIED",
            "tv": true,
            "tvCasting": true,
            "tvCastingException": "EXCEPTION_UNSPECIFIED",
            "tvException": "EXCEPTION_UNSPECIFIED",
            "tvStreaming": true,
            "tvStreamingException": "EXCEPTION_UNSPECIFIED",
            "universalPowerAdapters": true,
            "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
            "washer": true,
            "washerException": "EXCEPTION_UNSPECIFIED"
          },
          "layout": {
            "balcony": true,
            "balconyException": "EXCEPTION_UNSPECIFIED",
            "livingAreaSqMeters": 0,
            "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
            "loft": true,
            "loftException": "EXCEPTION_UNSPECIFIED",
            "nonSmoking": true,
            "nonSmokingException": "EXCEPTION_UNSPECIFIED",
            "patio": true,
            "patioException": "EXCEPTION_UNSPECIFIED",
            "stairs": true,
            "stairsException": "EXCEPTION_UNSPECIFIED"
          },
          "sleeping": {
            "bedsCount": 0,
            "bedsCountException": "EXCEPTION_UNSPECIFIED",
            "bunkBedsCount": 0,
            "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
            "cribsCount": 0,
            "cribsCountException": "EXCEPTION_UNSPECIFIED",
            "doubleBedsCount": 0,
            "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
            "featherPillows": true,
            "featherPillowsException": "EXCEPTION_UNSPECIFIED",
            "hypoallergenicBedding": true,
            "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
            "kingBedsCount": 0,
            "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
            "memoryFoamPillows": true,
            "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
            "otherBedsCount": 0,
            "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
            "queenBedsCount": 0,
            "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
            "rollAwayBedsCount": 0,
            "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
            "singleOrTwinBedsCount": 0,
            "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
            "sofaBedsCount": 0,
            "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
            "syntheticPillows": true,
            "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "views": {
          "beachView": true,
          "beachViewException": "EXCEPTION_UNSPECIFIED",
          "cityView": true,
          "cityViewException": "EXCEPTION_UNSPECIFIED",
          "gardenView": true,
          "gardenViewException": "EXCEPTION_UNSPECIFIED",
          "lakeView": true,
          "lakeViewException": "EXCEPTION_UNSPECIFIED",
          "landmarkView": true,
          "landmarkViewException": "EXCEPTION_UNSPECIFIED",
          "oceanView": true,
          "oceanViewException": "EXCEPTION_UNSPECIFIED",
          "poolView": true,
          "poolViewException": "EXCEPTION_UNSPECIFIED",
          "valleyView": true,
          "valleyViewException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "label": "string"
    }
  ],
  "healthAndSafety": {
    "enhancedCleaning": {
      "commercialGradeDisinfectantCleaning": true,
      "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
      "commonAreasEnhancedCleaning": true,
      "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedCleaningProcedures": true,
      "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedThoroughHandWashing": true,
      "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
      "employeesWearProtectiveEquipment": true,
      "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
      "guestRoomsEnhancedCleaning": true,
      "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
    },
    "increasedFoodSafety": {
      "diningAreasAdditionalSanitation": true,
      "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
      "disposableFlatware": true,
      "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
      "foodPreparationAndServingAdditionalSafety": true,
      "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
      "individualPackagedMeals": true,
      "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
      "singleUseFoodMenus": true,
      "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
    },
    "minimizedContact": {
      "contactlessCheckinCheckout": true,
      "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
      "digitalGuestRoomKeys": true,
      "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
      "housekeepingScheduledRequestOnly": true,
      "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsCommonAreas": true,
      "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsGuestRooms": true,
      "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
      "plasticKeycardsDisinfected": true,
      "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
      "roomBookingsBuffer": true,
      "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
    },
    "personalProtection": {
      "commonAreasOfferSanitizingItems": true,
      "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
      "faceMaskRequired": true,
      "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
      "guestRoomHygieneKitsAvailable": true,
      "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
      "protectiveEquipmentAvailable": true,
      "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "physicalDistancing": {
      "commonAreasPhysicalDistancingArranged": true,
      "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
      "physicalDistancingRequired": true,
      "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
      "safetyDividers": true,
      "safetyDividersException": "EXCEPTION_UNSPECIFIED",
      "sharedAreasLimitedOccupancy": true,
      "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
      "wellnessAreasHavePrivateSpaces": true,
      "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "housekeeping": {
    "dailyHousekeeping": true,
    "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
    "housekeepingAvailable": true,
    "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
    "turndownService": true,
    "turndownServiceException": "EXCEPTION_UNSPECIFIED"
  },
  "metadata": {
    "updateTime": "string"
  },
  "name": "string",
  "parking": {
    "electricCarChargingStations": true,
    "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
    "freeParking": true,
    "freeParkingException": "EXCEPTION_UNSPECIFIED",
    "freeSelfParking": true,
    "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
    "freeValetParking": true,
    "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
    "parkingAvailable": true,
    "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "selfParkingAvailable": true,
    "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "valetParkingAvailable": true,
    "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "pets": {
    "catsAllowed": true,
    "catsAllowedException": "EXCEPTION_UNSPECIFIED",
    "dogsAllowed": true,
    "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowed": true,
    "petsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowedFree": true,
    "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
  },
  "policies": {
    "allInclusiveAvailable": true,
    "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
    "allInclusiveOnly": true,
    "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
    "checkinTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkinTimeException": "EXCEPTION_UNSPECIFIED",
    "checkoutTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
    "kidsStayFree": true,
    "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
    "maxChildAge": 0,
    "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
    "maxKidsStayFreeCount": 0,
    "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
    "paymentOptions": {
      "cash": true,
      "cashException": "EXCEPTION_UNSPECIFIED",
      "cheque": true,
      "chequeException": "EXCEPTION_UNSPECIFIED",
      "creditCard": true,
      "creditCardException": "EXCEPTION_UNSPECIFIED",
      "debitCard": true,
      "debitCardException": "EXCEPTION_UNSPECIFIED",
      "mobileNfc": true,
      "mobileNfcException": "EXCEPTION_UNSPECIFIED"
    },
    "smokeFreeProperty": true,
    "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
  },
  "pools": {
    "adultPool": true,
    "adultPoolException": "EXCEPTION_UNSPECIFIED",
    "hotTub": true,
    "hotTubException": "EXCEPTION_UNSPECIFIED",
    "indoorPool": true,
    "indoorPoolException": "EXCEPTION_UNSPECIFIED",
    "indoorPoolsCount": 0,
    "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "lazyRiver": true,
    "lazyRiverException": "EXCEPTION_UNSPECIFIED",
    "lifeguard": true,
    "lifeguardException": "EXCEPTION_UNSPECIFIED",
    "outdoorPool": true,
    "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
    "outdoorPoolsCount": 0,
    "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "pool": true,
    "poolException": "EXCEPTION_UNSPECIFIED",
    "poolsCount": 0,
    "poolsCountException": "EXCEPTION_UNSPECIFIED",
    "wadingPool": true,
    "wadingPoolException": "EXCEPTION_UNSPECIFIED",
    "waterPark": true,
    "waterParkException": "EXCEPTION_UNSPECIFIED",
    "waterslide": true,
    "waterslideException": "EXCEPTION_UNSPECIFIED",
    "wavePool": true,
    "wavePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "property": {
    "builtYear": 0,
    "builtYearException": "EXCEPTION_UNSPECIFIED",
    "floorsCount": 0,
    "floorsCountException": "EXCEPTION_UNSPECIFIED",
    "lastRenovatedYear": 0,
    "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
    "roomsCount": 0,
    "roomsCountException": "EXCEPTION_UNSPECIFIED"
  },
  "services": {
    "baggageStorage": true,
    "baggageStorageException": "EXCEPTION_UNSPECIFIED",
    "concierge": true,
    "conciergeException": "EXCEPTION_UNSPECIFIED",
    "convenienceStore": true,
    "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
    "currencyExchange": true,
    "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
    "elevator": true,
    "elevatorException": "EXCEPTION_UNSPECIFIED",
    "frontDesk": true,
    "frontDeskException": "EXCEPTION_UNSPECIFIED",
    "fullServiceLaundry": true,
    "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "giftShop": true,
    "giftShopException": "EXCEPTION_UNSPECIFIED",
    "languagesSpoken": [
      {
        "languageCode": "string",
        "spoken": true,
        "spokenException": "EXCEPTION_UNSPECIFIED"
      }
    ],
    "selfServiceLaundry": true,
    "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "socialHour": true,
    "socialHourException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourFrontDesk": true,
    "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
    "wakeUpCalls": true,
    "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
  },
  "someUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "sustainability": {
    "energyEfficiency": {
      "carbonFreeEnergySources": true,
      "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
      "energyConservationProgram": true,
      "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientHeatingAndCoolingSystems": true,
      "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientLighting": true,
      "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
      "energySavingThermostats": true,
      "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
      "greenBuildingDesign": true,
      "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
      "independentOrganizationAuditsEnergyUse": true,
      "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainabilityCertifications": {
      "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
      "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
      "ecoCertifications": [
        {
          "awarded": true,
          "awardedException": "EXCEPTION_UNSPECIFIED",
          "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
        }
      ],
      "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
      "leedCertificationException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainableSourcing": {
      "ecoFriendlyToiletries": true,
      "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
      "locallySourcedFoodAndBeverages": true,
      "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "organicCageFreeEggs": true,
      "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
      "organicFoodAndBeverages": true,
      "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "responsiblePurchasingPolicy": true,
      "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
      "responsiblySourcesSeafood": true,
      "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
      "veganMeals": true,
      "veganMealsException": "EXCEPTION_UNSPECIFIED",
      "vegetarianMeals": true,
      "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
    },
    "wasteReduction": {
      "compostableFoodContainersAndCutlery": true,
      "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
      "compostsExcessFood": true,
      "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "donatesExcessFood": true,
      "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "foodWasteReductionProgram": true,
      "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticStraws": true,
      "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticWaterBottles": true,
      "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
      "noStyrofoamFoodContainers": true,
      "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
      "recyclingProgram": true,
      "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
      "refillableToiletryContainers": true,
      "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesBatteries": true,
      "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesElectronics": true,
      "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesLightbulbs": true,
      "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
      "safelyHandlesHazardousSubstances": true,
      "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
      "soapDonationProgram": true,
      "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "toiletryDonationProgram": true,
      "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "waterBottleFillingStations": true,
      "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
    },
    "waterConservation": {
      "independentOrganizationAuditsWaterUse": true,
      "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
      "linenReuseProgram": true,
      "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "towelReuseProgram": true,
      "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "waterSavingShowers": true,
      "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
      "waterSavingSinks": true,
      "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
      "waterSavingToilets": true,
      "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "transportation": {
    "airportShuttle": true,
    "airportShuttleException": "EXCEPTION_UNSPECIFIED",
    "carRentalOnProperty": true,
    "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
    "freeAirportShuttle": true,
    "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
    "freePrivateCarService": true,
    "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "localShuttle": true,
    "localShuttleException": "EXCEPTION_UNSPECIFIED",
    "privateCarService": true,
    "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "transfer": true,
    "transferException": "EXCEPTION_UNSPECIFIED"
  },
  "wellness": {
    "doctorOnCall": true,
    "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
    "ellipticalMachine": true,
    "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
    "fitnessCenter": true,
    "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeFitnessCenter": true,
    "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeWeights": true,
    "freeWeightsException": "EXCEPTION_UNSPECIFIED",
    "massage": true,
    "massageException": "EXCEPTION_UNSPECIFIED",
    "salon": true,
    "salonException": "EXCEPTION_UNSPECIFIED",
    "sauna": true,
    "saunaException": "EXCEPTION_UNSPECIFIED",
    "spa": true,
    "spaException": "EXCEPTION_UNSPECIFIED",
    "treadmill": true,
    "treadmillException": "EXCEPTION_UNSPECIFIED",
    "weightMachine": true,
    "weightMachineException": "EXCEPTION_UNSPECIFIED"
  }
}
```

<h3 id="mybusinesslodginglocationsgetlodging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Lodging](#schemalodging)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinesslodging.locations.updateLodging

<a id="opIdmybusinesslodging.locations.updateLodging"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessibility": {
      "mobilityAccessible": true,
      "mobilityAccessibleElevator": true,
      "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleParking": true,
      "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessiblePool": true,
      "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "activities": {
      "beachAccess": true,
      "beachAccessException": "EXCEPTION_UNSPECIFIED",
      "beachFront": true,
      "beachFrontException": "EXCEPTION_UNSPECIFIED",
      "bicycleRental": true,
      "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "boutiqueStores": true,
      "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
      "casino": true,
      "casinoException": "EXCEPTION_UNSPECIFIED",
      "freeBicycleRental": true,
      "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "freeWatercraftRental": true,
      "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
      "gameRoom": true,
      "gameRoomException": "EXCEPTION_UNSPECIFIED",
      "golf": true,
      "golfException": "EXCEPTION_UNSPECIFIED",
      "horsebackRiding": true,
      "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
      "nightclub": true,
      "nightclubException": "EXCEPTION_UNSPECIFIED",
      "privateBeach": true,
      "privateBeachException": "EXCEPTION_UNSPECIFIED",
      "scuba": true,
      "scubaException": "EXCEPTION_UNSPECIFIED",
      "snorkeling": true,
      "snorkelingException": "EXCEPTION_UNSPECIFIED",
      "tennis": true,
      "tennisException": "EXCEPTION_UNSPECIFIED",
      "waterSkiing": true,
      "waterSkiingException": "EXCEPTION_UNSPECIFIED",
      "watercraftRental": true,
      "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
    },
    "business": {
      "businessCenter": true,
      "businessCenterException": "EXCEPTION_UNSPECIFIED",
      "meetingRooms": true,
      "meetingRoomsCount": 0,
      "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
      "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
    },
    "commonLivingArea": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "connectivity": {
      "freeWifi": true,
      "freeWifiException": "EXCEPTION_UNSPECIFIED",
      "publicAreaWifiAvailable": true,
      "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "publicInternetTerminal": true,
      "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
      "wifiAvailable": true,
      "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "families": {
      "babysitting": true,
      "babysittingException": "EXCEPTION_UNSPECIFIED",
      "kidsActivities": true,
      "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
      "kidsClub": true,
      "kidsClubException": "EXCEPTION_UNSPECIFIED",
      "kidsFriendly": true,
      "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
    },
    "foodAndDrink": {
      "bar": true,
      "barException": "EXCEPTION_UNSPECIFIED",
      "breakfastAvailable": true,
      "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
      "breakfastBuffet": true,
      "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
      "buffet": true,
      "buffetException": "EXCEPTION_UNSPECIFIED",
      "dinnerBuffet": true,
      "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
      "freeBreakfast": true,
      "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
      "restaurant": true,
      "restaurantException": "EXCEPTION_UNSPECIFIED",
      "restaurantsCount": 0,
      "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
      "roomService": true,
      "roomServiceException": "EXCEPTION_UNSPECIFIED",
      "tableService": true,
      "tableServiceException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourRoomService": true,
      "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
      "vendingMachine": true,
      "vendingMachineException": "EXCEPTION_UNSPECIFIED"
    },
    "guestUnits": [
      {
        "codes": [
          "string"
        ],
        "features": {
          "bungalowOrVilla": true,
          "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
          "connectingUnitAvailable": true,
          "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
          "executiveFloor": true,
          "executiveFloorException": "EXCEPTION_UNSPECIFIED",
          "maxAdultOccupantsCount": 0,
          "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxChildOccupantsCount": 0,
          "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxOccupantsCount": 0,
          "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "privateHome": true,
          "privateHomeException": "EXCEPTION_UNSPECIFIED",
          "suite": true,
          "suiteException": "EXCEPTION_UNSPECIFIED",
          "tier": "UNIT_TIER_UNSPECIFIED",
          "tierException": "EXCEPTION_UNSPECIFIED",
          "totalLivingAreas": {
            "accessibility": {
              "adaCompliantUnit": true,
              "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleDoorbell": true,
              "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleFireAlarm": true,
              "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleUnit": true,
              "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleBathtub": true,
              "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleShower": true,
              "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleToilet": true,
              "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleUnit": true,
              "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
            },
            "eating": {
              "coffeeMaker": true,
              "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
              "cookware": true,
              "cookwareException": "EXCEPTION_UNSPECIFIED",
              "dishwasher": true,
              "dishwasherException": "EXCEPTION_UNSPECIFIED",
              "indoorGrill": true,
              "indoorGrillException": "EXCEPTION_UNSPECIFIED",
              "kettle": true,
              "kettleException": "EXCEPTION_UNSPECIFIED",
              "kitchenAvailable": true,
              "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
              "microwave": true,
              "microwaveException": "EXCEPTION_UNSPECIFIED",
              "minibar": true,
              "minibarException": "EXCEPTION_UNSPECIFIED",
              "outdoorGrill": true,
              "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
              "oven": true,
              "ovenException": "EXCEPTION_UNSPECIFIED",
              "refrigerator": true,
              "refrigeratorException": "EXCEPTION_UNSPECIFIED",
              "sink": true,
              "sinkException": "EXCEPTION_UNSPECIFIED",
              "snackbar": true,
              "snackbarException": "EXCEPTION_UNSPECIFIED",
              "stove": true,
              "stoveException": "EXCEPTION_UNSPECIFIED",
              "teaStation": true,
              "teaStationException": "EXCEPTION_UNSPECIFIED",
              "toaster": true,
              "toasterException": "EXCEPTION_UNSPECIFIED"
            },
            "features": {
              "airConditioning": true,
              "airConditioningException": "EXCEPTION_UNSPECIFIED",
              "bathtub": true,
              "bathtubException": "EXCEPTION_UNSPECIFIED",
              "bidet": true,
              "bidetException": "EXCEPTION_UNSPECIFIED",
              "dryer": true,
              "dryerException": "EXCEPTION_UNSPECIFIED",
              "electronicRoomKey": true,
              "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
              "fireplace": true,
              "fireplaceException": "EXCEPTION_UNSPECIFIED",
              "hairdryer": true,
              "hairdryerException": "EXCEPTION_UNSPECIFIED",
              "heating": true,
              "heatingException": "EXCEPTION_UNSPECIFIED",
              "inunitSafe": true,
              "inunitSafeException": "EXCEPTION_UNSPECIFIED",
              "inunitWifiAvailable": true,
              "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
              "ironingEquipment": true,
              "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
              "payPerViewMovies": true,
              "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
              "privateBathroom": true,
              "privateBathroomException": "EXCEPTION_UNSPECIFIED",
              "shower": true,
              "showerException": "EXCEPTION_UNSPECIFIED",
              "toilet": true,
              "toiletException": "EXCEPTION_UNSPECIFIED",
              "tv": true,
              "tvCasting": true,
              "tvCastingException": "EXCEPTION_UNSPECIFIED",
              "tvException": "EXCEPTION_UNSPECIFIED",
              "tvStreaming": true,
              "tvStreamingException": "EXCEPTION_UNSPECIFIED",
              "universalPowerAdapters": true,
              "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
              "washer": true,
              "washerException": "EXCEPTION_UNSPECIFIED"
            },
            "layout": {
              "balcony": true,
              "balconyException": "EXCEPTION_UNSPECIFIED",
              "livingAreaSqMeters": 0,
              "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
              "loft": true,
              "loftException": "EXCEPTION_UNSPECIFIED",
              "nonSmoking": true,
              "nonSmokingException": "EXCEPTION_UNSPECIFIED",
              "patio": true,
              "patioException": "EXCEPTION_UNSPECIFIED",
              "stairs": true,
              "stairsException": "EXCEPTION_UNSPECIFIED"
            },
            "sleeping": {
              "bedsCount": 0,
              "bedsCountException": "EXCEPTION_UNSPECIFIED",
              "bunkBedsCount": 0,
              "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
              "cribsCount": 0,
              "cribsCountException": "EXCEPTION_UNSPECIFIED",
              "doubleBedsCount": 0,
              "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
              "featherPillows": true,
              "featherPillowsException": "EXCEPTION_UNSPECIFIED",
              "hypoallergenicBedding": true,
              "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
              "kingBedsCount": 0,
              "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
              "memoryFoamPillows": true,
              "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
              "otherBedsCount": 0,
              "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
              "queenBedsCount": 0,
              "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
              "rollAwayBedsCount": 0,
              "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
              "singleOrTwinBedsCount": 0,
              "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
              "sofaBedsCount": 0,
              "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
              "syntheticPillows": true,
              "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
            }
          },
          "views": {
            "beachView": true,
            "beachViewException": "EXCEPTION_UNSPECIFIED",
            "cityView": true,
            "cityViewException": "EXCEPTION_UNSPECIFIED",
            "gardenView": true,
            "gardenViewException": "EXCEPTION_UNSPECIFIED",
            "lakeView": true,
            "lakeViewException": "EXCEPTION_UNSPECIFIED",
            "landmarkView": true,
            "landmarkViewException": "EXCEPTION_UNSPECIFIED",
            "oceanView": true,
            "oceanViewException": "EXCEPTION_UNSPECIFIED",
            "poolView": true,
            "poolViewException": "EXCEPTION_UNSPECIFIED",
            "valleyView": true,
            "valleyViewException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "label": "string"
      }
    ],
    "healthAndSafety": {
      "enhancedCleaning": {
        "commercialGradeDisinfectantCleaning": true,
        "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
        "commonAreasEnhancedCleaning": true,
        "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedCleaningProcedures": true,
        "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedThoroughHandWashing": true,
        "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
        "employeesWearProtectiveEquipment": true,
        "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
        "guestRoomsEnhancedCleaning": true,
        "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
      },
      "increasedFoodSafety": {
        "diningAreasAdditionalSanitation": true,
        "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
        "disposableFlatware": true,
        "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
        "foodPreparationAndServingAdditionalSafety": true,
        "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
        "individualPackagedMeals": true,
        "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
        "singleUseFoodMenus": true,
        "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
      },
      "minimizedContact": {
        "contactlessCheckinCheckout": true,
        "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
        "digitalGuestRoomKeys": true,
        "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
        "housekeepingScheduledRequestOnly": true,
        "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsCommonAreas": true,
        "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsGuestRooms": true,
        "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
        "plasticKeycardsDisinfected": true,
        "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
        "roomBookingsBuffer": true,
        "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
      },
      "personalProtection": {
        "commonAreasOfferSanitizingItems": true,
        "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
        "faceMaskRequired": true,
        "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
        "guestRoomHygieneKitsAvailable": true,
        "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
        "protectiveEquipmentAvailable": true,
        "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
      },
      "physicalDistancing": {
        "commonAreasPhysicalDistancingArranged": true,
        "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
        "physicalDistancingRequired": true,
        "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
        "safetyDividers": true,
        "safetyDividersException": "EXCEPTION_UNSPECIFIED",
        "sharedAreasLimitedOccupancy": true,
        "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
        "wellnessAreasHavePrivateSpaces": true,
        "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "housekeeping": {
      "dailyHousekeeping": true,
      "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
      "housekeepingAvailable": true,
      "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
      "turndownService": true,
      "turndownServiceException": "EXCEPTION_UNSPECIFIED"
    },
    "metadata": {
      "updateTime": "string"
    },
    "name": "string",
    "parking": {
      "electricCarChargingStations": true,
      "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
      "freeParking": true,
      "freeParkingException": "EXCEPTION_UNSPECIFIED",
      "freeSelfParking": true,
      "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
      "freeValetParking": true,
      "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
      "parkingAvailable": true,
      "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "selfParkingAvailable": true,
      "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "valetParkingAvailable": true,
      "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "pets": {
      "catsAllowed": true,
      "catsAllowedException": "EXCEPTION_UNSPECIFIED",
      "dogsAllowed": true,
      "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowed": true,
      "petsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowedFree": true,
      "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
    },
    "policies": {
      "allInclusiveAvailable": true,
      "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
      "allInclusiveOnly": true,
      "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
      "checkinTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkinTimeException": "EXCEPTION_UNSPECIFIED",
      "checkoutTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
      "kidsStayFree": true,
      "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
      "maxChildAge": 0,
      "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
      "maxKidsStayFreeCount": 0,
      "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
      "paymentOptions": {
        "cash": true,
        "cashException": "EXCEPTION_UNSPECIFIED",
        "cheque": true,
        "chequeException": "EXCEPTION_UNSPECIFIED",
        "creditCard": true,
        "creditCardException": "EXCEPTION_UNSPECIFIED",
        "debitCard": true,
        "debitCardException": "EXCEPTION_UNSPECIFIED",
        "mobileNfc": true,
        "mobileNfcException": "EXCEPTION_UNSPECIFIED"
      },
      "smokeFreeProperty": true,
      "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
    },
    "pools": {
      "adultPool": true,
      "adultPoolException": "EXCEPTION_UNSPECIFIED",
      "hotTub": true,
      "hotTubException": "EXCEPTION_UNSPECIFIED",
      "indoorPool": true,
      "indoorPoolException": "EXCEPTION_UNSPECIFIED",
      "indoorPoolsCount": 0,
      "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "lazyRiver": true,
      "lazyRiverException": "EXCEPTION_UNSPECIFIED",
      "lifeguard": true,
      "lifeguardException": "EXCEPTION_UNSPECIFIED",
      "outdoorPool": true,
      "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
      "outdoorPoolsCount": 0,
      "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "pool": true,
      "poolException": "EXCEPTION_UNSPECIFIED",
      "poolsCount": 0,
      "poolsCountException": "EXCEPTION_UNSPECIFIED",
      "wadingPool": true,
      "wadingPoolException": "EXCEPTION_UNSPECIFIED",
      "waterPark": true,
      "waterParkException": "EXCEPTION_UNSPECIFIED",
      "waterslide": true,
      "waterslideException": "EXCEPTION_UNSPECIFIED",
      "wavePool": true,
      "wavePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "property": {
      "builtYear": 0,
      "builtYearException": "EXCEPTION_UNSPECIFIED",
      "floorsCount": 0,
      "floorsCountException": "EXCEPTION_UNSPECIFIED",
      "lastRenovatedYear": 0,
      "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
      "roomsCount": 0,
      "roomsCountException": "EXCEPTION_UNSPECIFIED"
    },
    "services": {
      "baggageStorage": true,
      "baggageStorageException": "EXCEPTION_UNSPECIFIED",
      "concierge": true,
      "conciergeException": "EXCEPTION_UNSPECIFIED",
      "convenienceStore": true,
      "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
      "currencyExchange": true,
      "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
      "elevator": true,
      "elevatorException": "EXCEPTION_UNSPECIFIED",
      "frontDesk": true,
      "frontDeskException": "EXCEPTION_UNSPECIFIED",
      "fullServiceLaundry": true,
      "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "giftShop": true,
      "giftShopException": "EXCEPTION_UNSPECIFIED",
      "languagesSpoken": [
        {
          "languageCode": "string",
          "spoken": true,
          "spokenException": "EXCEPTION_UNSPECIFIED"
        }
      ],
      "selfServiceLaundry": true,
      "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "socialHour": true,
      "socialHourException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourFrontDesk": true,
      "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
      "wakeUpCalls": true,
      "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainability": {
      "energyEfficiency": {
        "carbonFreeEnergySources": true,
        "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
        "energyConservationProgram": true,
        "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientHeatingAndCoolingSystems": true,
        "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientLighting": true,
        "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
        "energySavingThermostats": true,
        "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
        "independentOrganizationAuditsEnergyUse": true,
        "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainabilityCertifications": {
        "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
        "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
        "ecoCertifications": [
          {
            "awarded": true,
            "awardedException": "EXCEPTION_UNSPECIFIED",
            "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
          }
        ],
        "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
        "leedCertificationException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainableSourcing": {
        "ecoFriendlyToiletries": true,
        "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
        "locallySourcedFoodAndBeverages": true,
        "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "organicCageFreeEggs": true,
        "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
        "organicFoodAndBeverages": true,
        "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "responsiblePurchasingPolicy": true,
        "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
        "responsiblySourcesSeafood": true,
        "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
        "veganMeals": true,
        "veganMealsException": "EXCEPTION_UNSPECIFIED",
        "vegetarianMeals": true,
        "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
      },
      "wasteReduction": {
        "compostableFoodContainersAndCutlery": true,
        "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
        "compostsExcessFood": true,
        "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "donatesExcessFood": true,
        "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "foodWasteReductionProgram": true,
        "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticStraws": true,
        "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticWaterBottles": true,
        "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
        "noStyrofoamFoodContainers": true,
        "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
        "recyclingProgram": true,
        "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
        "refillableToiletryContainers": true,
        "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesBatteries": true,
        "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesElectronics": true,
        "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesLightbulbs": true,
        "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
        "safelyHandlesHazardousSubstances": true,
        "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
        "soapDonationProgram": true,
        "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "toiletryDonationProgram": true,
        "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "waterBottleFillingStations": true,
        "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
      },
      "waterConservation": {
        "independentOrganizationAuditsWaterUse": true,
        "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
        "linenReuseProgram": true,
        "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "towelReuseProgram": true,
        "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "waterSavingShowers": true,
        "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
        "waterSavingSinks": true,
        "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
        "waterSavingToilets": true,
        "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "transportation": {
      "airportShuttle": true,
      "airportShuttleException": "EXCEPTION_UNSPECIFIED",
      "carRentalOnProperty": true,
      "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
      "freeAirportShuttle": true,
      "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
      "freePrivateCarService": true,
      "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "localShuttle": true,
      "localShuttleException": "EXCEPTION_UNSPECIFIED",
      "privateCarService": true,
      "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "transfer": true,
      "transferException": "EXCEPTION_UNSPECIFIED"
    },
    "wellness": {
      "doctorOnCall": true,
      "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
      "ellipticalMachine": true,
      "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
      "fitnessCenter": true,
      "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeFitnessCenter": true,
      "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeWeights": true,
      "freeWeightsException": "EXCEPTION_UNSPECIFIED",
      "massage": true,
      "massageException": "EXCEPTION_UNSPECIFIED",
      "salon": true,
      "salonException": "EXCEPTION_UNSPECIFIED",
      "sauna": true,
      "saunaException": "EXCEPTION_UNSPECIFIED",
      "spa": true,
      "spaException": "EXCEPTION_UNSPECIFIED",
      "treadmill": true,
      "treadmillException": "EXCEPTION_UNSPECIFIED",
      "weightMachine": true,
      "weightMachineException": "EXCEPTION_UNSPECIFIED"
    }
  }'
```

`PATCH /v1/{name}`

Updates the Lodging of a specific location.

> Body parameter

```json
{
  "accessibility": {
    "mobilityAccessible": true,
    "mobilityAccessibleElevator": true,
    "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleParking": true,
    "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessiblePool": true,
    "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "activities": {
    "beachAccess": true,
    "beachAccessException": "EXCEPTION_UNSPECIFIED",
    "beachFront": true,
    "beachFrontException": "EXCEPTION_UNSPECIFIED",
    "bicycleRental": true,
    "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "boutiqueStores": true,
    "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
    "casino": true,
    "casinoException": "EXCEPTION_UNSPECIFIED",
    "freeBicycleRental": true,
    "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "freeWatercraftRental": true,
    "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
    "gameRoom": true,
    "gameRoomException": "EXCEPTION_UNSPECIFIED",
    "golf": true,
    "golfException": "EXCEPTION_UNSPECIFIED",
    "horsebackRiding": true,
    "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
    "nightclub": true,
    "nightclubException": "EXCEPTION_UNSPECIFIED",
    "privateBeach": true,
    "privateBeachException": "EXCEPTION_UNSPECIFIED",
    "scuba": true,
    "scubaException": "EXCEPTION_UNSPECIFIED",
    "snorkeling": true,
    "snorkelingException": "EXCEPTION_UNSPECIFIED",
    "tennis": true,
    "tennisException": "EXCEPTION_UNSPECIFIED",
    "waterSkiing": true,
    "waterSkiingException": "EXCEPTION_UNSPECIFIED",
    "watercraftRental": true,
    "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
  },
  "business": {
    "businessCenter": true,
    "businessCenterException": "EXCEPTION_UNSPECIFIED",
    "meetingRooms": true,
    "meetingRoomsCount": 0,
    "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
    "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
  },
  "commonLivingArea": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "connectivity": {
    "freeWifi": true,
    "freeWifiException": "EXCEPTION_UNSPECIFIED",
    "publicAreaWifiAvailable": true,
    "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "publicInternetTerminal": true,
    "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
    "wifiAvailable": true,
    "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "families": {
    "babysitting": true,
    "babysittingException": "EXCEPTION_UNSPECIFIED",
    "kidsActivities": true,
    "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
    "kidsClub": true,
    "kidsClubException": "EXCEPTION_UNSPECIFIED",
    "kidsFriendly": true,
    "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
  },
  "foodAndDrink": {
    "bar": true,
    "barException": "EXCEPTION_UNSPECIFIED",
    "breakfastAvailable": true,
    "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
    "breakfastBuffet": true,
    "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
    "buffet": true,
    "buffetException": "EXCEPTION_UNSPECIFIED",
    "dinnerBuffet": true,
    "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
    "freeBreakfast": true,
    "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
    "restaurant": true,
    "restaurantException": "EXCEPTION_UNSPECIFIED",
    "restaurantsCount": 0,
    "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
    "roomService": true,
    "roomServiceException": "EXCEPTION_UNSPECIFIED",
    "tableService": true,
    "tableServiceException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourRoomService": true,
    "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
    "vendingMachine": true,
    "vendingMachineException": "EXCEPTION_UNSPECIFIED"
  },
  "guestUnits": [
    {
      "codes": [
        "string"
      ],
      "features": {
        "bungalowOrVilla": true,
        "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
        "connectingUnitAvailable": true,
        "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
        "executiveFloor": true,
        "executiveFloorException": "EXCEPTION_UNSPECIFIED",
        "maxAdultOccupantsCount": 0,
        "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxChildOccupantsCount": 0,
        "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxOccupantsCount": 0,
        "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "privateHome": true,
        "privateHomeException": "EXCEPTION_UNSPECIFIED",
        "suite": true,
        "suiteException": "EXCEPTION_UNSPECIFIED",
        "tier": "UNIT_TIER_UNSPECIFIED",
        "tierException": "EXCEPTION_UNSPECIFIED",
        "totalLivingAreas": {
          "accessibility": {
            "adaCompliantUnit": true,
            "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleDoorbell": true,
            "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleFireAlarm": true,
            "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleUnit": true,
            "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleBathtub": true,
            "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleShower": true,
            "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleToilet": true,
            "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleUnit": true,
            "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
          },
          "eating": {
            "coffeeMaker": true,
            "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
            "cookware": true,
            "cookwareException": "EXCEPTION_UNSPECIFIED",
            "dishwasher": true,
            "dishwasherException": "EXCEPTION_UNSPECIFIED",
            "indoorGrill": true,
            "indoorGrillException": "EXCEPTION_UNSPECIFIED",
            "kettle": true,
            "kettleException": "EXCEPTION_UNSPECIFIED",
            "kitchenAvailable": true,
            "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
            "microwave": true,
            "microwaveException": "EXCEPTION_UNSPECIFIED",
            "minibar": true,
            "minibarException": "EXCEPTION_UNSPECIFIED",
            "outdoorGrill": true,
            "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
            "oven": true,
            "ovenException": "EXCEPTION_UNSPECIFIED",
            "refrigerator": true,
            "refrigeratorException": "EXCEPTION_UNSPECIFIED",
            "sink": true,
            "sinkException": "EXCEPTION_UNSPECIFIED",
            "snackbar": true,
            "snackbarException": "EXCEPTION_UNSPECIFIED",
            "stove": true,
            "stoveException": "EXCEPTION_UNSPECIFIED",
            "teaStation": true,
            "teaStationException": "EXCEPTION_UNSPECIFIED",
            "toaster": true,
            "toasterException": "EXCEPTION_UNSPECIFIED"
          },
          "features": {
            "airConditioning": true,
            "airConditioningException": "EXCEPTION_UNSPECIFIED",
            "bathtub": true,
            "bathtubException": "EXCEPTION_UNSPECIFIED",
            "bidet": true,
            "bidetException": "EXCEPTION_UNSPECIFIED",
            "dryer": true,
            "dryerException": "EXCEPTION_UNSPECIFIED",
            "electronicRoomKey": true,
            "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
            "fireplace": true,
            "fireplaceException": "EXCEPTION_UNSPECIFIED",
            "hairdryer": true,
            "hairdryerException": "EXCEPTION_UNSPECIFIED",
            "heating": true,
            "heatingException": "EXCEPTION_UNSPECIFIED",
            "inunitSafe": true,
            "inunitSafeException": "EXCEPTION_UNSPECIFIED",
            "inunitWifiAvailable": true,
            "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
            "ironingEquipment": true,
            "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
            "payPerViewMovies": true,
            "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
            "privateBathroom": true,
            "privateBathroomException": "EXCEPTION_UNSPECIFIED",
            "shower": true,
            "showerException": "EXCEPTION_UNSPECIFIED",
            "toilet": true,
            "toiletException": "EXCEPTION_UNSPECIFIED",
            "tv": true,
            "tvCasting": true,
            "tvCastingException": "EXCEPTION_UNSPECIFIED",
            "tvException": "EXCEPTION_UNSPECIFIED",
            "tvStreaming": true,
            "tvStreamingException": "EXCEPTION_UNSPECIFIED",
            "universalPowerAdapters": true,
            "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
            "washer": true,
            "washerException": "EXCEPTION_UNSPECIFIED"
          },
          "layout": {
            "balcony": true,
            "balconyException": "EXCEPTION_UNSPECIFIED",
            "livingAreaSqMeters": 0,
            "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
            "loft": true,
            "loftException": "EXCEPTION_UNSPECIFIED",
            "nonSmoking": true,
            "nonSmokingException": "EXCEPTION_UNSPECIFIED",
            "patio": true,
            "patioException": "EXCEPTION_UNSPECIFIED",
            "stairs": true,
            "stairsException": "EXCEPTION_UNSPECIFIED"
          },
          "sleeping": {
            "bedsCount": 0,
            "bedsCountException": "EXCEPTION_UNSPECIFIED",
            "bunkBedsCount": 0,
            "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
            "cribsCount": 0,
            "cribsCountException": "EXCEPTION_UNSPECIFIED",
            "doubleBedsCount": 0,
            "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
            "featherPillows": true,
            "featherPillowsException": "EXCEPTION_UNSPECIFIED",
            "hypoallergenicBedding": true,
            "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
            "kingBedsCount": 0,
            "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
            "memoryFoamPillows": true,
            "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
            "otherBedsCount": 0,
            "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
            "queenBedsCount": 0,
            "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
            "rollAwayBedsCount": 0,
            "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
            "singleOrTwinBedsCount": 0,
            "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
            "sofaBedsCount": 0,
            "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
            "syntheticPillows": true,
            "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "views": {
          "beachView": true,
          "beachViewException": "EXCEPTION_UNSPECIFIED",
          "cityView": true,
          "cityViewException": "EXCEPTION_UNSPECIFIED",
          "gardenView": true,
          "gardenViewException": "EXCEPTION_UNSPECIFIED",
          "lakeView": true,
          "lakeViewException": "EXCEPTION_UNSPECIFIED",
          "landmarkView": true,
          "landmarkViewException": "EXCEPTION_UNSPECIFIED",
          "oceanView": true,
          "oceanViewException": "EXCEPTION_UNSPECIFIED",
          "poolView": true,
          "poolViewException": "EXCEPTION_UNSPECIFIED",
          "valleyView": true,
          "valleyViewException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "label": "string"
    }
  ],
  "healthAndSafety": {
    "enhancedCleaning": {
      "commercialGradeDisinfectantCleaning": true,
      "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
      "commonAreasEnhancedCleaning": true,
      "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedCleaningProcedures": true,
      "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedThoroughHandWashing": true,
      "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
      "employeesWearProtectiveEquipment": true,
      "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
      "guestRoomsEnhancedCleaning": true,
      "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
    },
    "increasedFoodSafety": {
      "diningAreasAdditionalSanitation": true,
      "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
      "disposableFlatware": true,
      "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
      "foodPreparationAndServingAdditionalSafety": true,
      "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
      "individualPackagedMeals": true,
      "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
      "singleUseFoodMenus": true,
      "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
    },
    "minimizedContact": {
      "contactlessCheckinCheckout": true,
      "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
      "digitalGuestRoomKeys": true,
      "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
      "housekeepingScheduledRequestOnly": true,
      "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsCommonAreas": true,
      "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsGuestRooms": true,
      "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
      "plasticKeycardsDisinfected": true,
      "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
      "roomBookingsBuffer": true,
      "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
    },
    "personalProtection": {
      "commonAreasOfferSanitizingItems": true,
      "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
      "faceMaskRequired": true,
      "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
      "guestRoomHygieneKitsAvailable": true,
      "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
      "protectiveEquipmentAvailable": true,
      "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "physicalDistancing": {
      "commonAreasPhysicalDistancingArranged": true,
      "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
      "physicalDistancingRequired": true,
      "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
      "safetyDividers": true,
      "safetyDividersException": "EXCEPTION_UNSPECIFIED",
      "sharedAreasLimitedOccupancy": true,
      "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
      "wellnessAreasHavePrivateSpaces": true,
      "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "housekeeping": {
    "dailyHousekeeping": true,
    "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
    "housekeepingAvailable": true,
    "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
    "turndownService": true,
    "turndownServiceException": "EXCEPTION_UNSPECIFIED"
  },
  "metadata": {
    "updateTime": "string"
  },
  "name": "string",
  "parking": {
    "electricCarChargingStations": true,
    "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
    "freeParking": true,
    "freeParkingException": "EXCEPTION_UNSPECIFIED",
    "freeSelfParking": true,
    "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
    "freeValetParking": true,
    "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
    "parkingAvailable": true,
    "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "selfParkingAvailable": true,
    "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "valetParkingAvailable": true,
    "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "pets": {
    "catsAllowed": true,
    "catsAllowedException": "EXCEPTION_UNSPECIFIED",
    "dogsAllowed": true,
    "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowed": true,
    "petsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowedFree": true,
    "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
  },
  "policies": {
    "allInclusiveAvailable": true,
    "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
    "allInclusiveOnly": true,
    "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
    "checkinTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkinTimeException": "EXCEPTION_UNSPECIFIED",
    "checkoutTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
    "kidsStayFree": true,
    "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
    "maxChildAge": 0,
    "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
    "maxKidsStayFreeCount": 0,
    "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
    "paymentOptions": {
      "cash": true,
      "cashException": "EXCEPTION_UNSPECIFIED",
      "cheque": true,
      "chequeException": "EXCEPTION_UNSPECIFIED",
      "creditCard": true,
      "creditCardException": "EXCEPTION_UNSPECIFIED",
      "debitCard": true,
      "debitCardException": "EXCEPTION_UNSPECIFIED",
      "mobileNfc": true,
      "mobileNfcException": "EXCEPTION_UNSPECIFIED"
    },
    "smokeFreeProperty": true,
    "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
  },
  "pools": {
    "adultPool": true,
    "adultPoolException": "EXCEPTION_UNSPECIFIED",
    "hotTub": true,
    "hotTubException": "EXCEPTION_UNSPECIFIED",
    "indoorPool": true,
    "indoorPoolException": "EXCEPTION_UNSPECIFIED",
    "indoorPoolsCount": 0,
    "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "lazyRiver": true,
    "lazyRiverException": "EXCEPTION_UNSPECIFIED",
    "lifeguard": true,
    "lifeguardException": "EXCEPTION_UNSPECIFIED",
    "outdoorPool": true,
    "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
    "outdoorPoolsCount": 0,
    "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "pool": true,
    "poolException": "EXCEPTION_UNSPECIFIED",
    "poolsCount": 0,
    "poolsCountException": "EXCEPTION_UNSPECIFIED",
    "wadingPool": true,
    "wadingPoolException": "EXCEPTION_UNSPECIFIED",
    "waterPark": true,
    "waterParkException": "EXCEPTION_UNSPECIFIED",
    "waterslide": true,
    "waterslideException": "EXCEPTION_UNSPECIFIED",
    "wavePool": true,
    "wavePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "property": {
    "builtYear": 0,
    "builtYearException": "EXCEPTION_UNSPECIFIED",
    "floorsCount": 0,
    "floorsCountException": "EXCEPTION_UNSPECIFIED",
    "lastRenovatedYear": 0,
    "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
    "roomsCount": 0,
    "roomsCountException": "EXCEPTION_UNSPECIFIED"
  },
  "services": {
    "baggageStorage": true,
    "baggageStorageException": "EXCEPTION_UNSPECIFIED",
    "concierge": true,
    "conciergeException": "EXCEPTION_UNSPECIFIED",
    "convenienceStore": true,
    "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
    "currencyExchange": true,
    "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
    "elevator": true,
    "elevatorException": "EXCEPTION_UNSPECIFIED",
    "frontDesk": true,
    "frontDeskException": "EXCEPTION_UNSPECIFIED",
    "fullServiceLaundry": true,
    "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "giftShop": true,
    "giftShopException": "EXCEPTION_UNSPECIFIED",
    "languagesSpoken": [
      {
        "languageCode": "string",
        "spoken": true,
        "spokenException": "EXCEPTION_UNSPECIFIED"
      }
    ],
    "selfServiceLaundry": true,
    "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "socialHour": true,
    "socialHourException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourFrontDesk": true,
    "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
    "wakeUpCalls": true,
    "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
  },
  "sustainability": {
    "energyEfficiency": {
      "carbonFreeEnergySources": true,
      "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
      "energyConservationProgram": true,
      "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientHeatingAndCoolingSystems": true,
      "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientLighting": true,
      "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
      "energySavingThermostats": true,
      "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
      "independentOrganizationAuditsEnergyUse": true,
      "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainabilityCertifications": {
      "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
      "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
      "ecoCertifications": [
        {
          "awarded": true,
          "awardedException": "EXCEPTION_UNSPECIFIED",
          "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
        }
      ],
      "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
      "leedCertificationException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainableSourcing": {
      "ecoFriendlyToiletries": true,
      "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
      "locallySourcedFoodAndBeverages": true,
      "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "organicCageFreeEggs": true,
      "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
      "organicFoodAndBeverages": true,
      "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "responsiblePurchasingPolicy": true,
      "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
      "responsiblySourcesSeafood": true,
      "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
      "veganMeals": true,
      "veganMealsException": "EXCEPTION_UNSPECIFIED",
      "vegetarianMeals": true,
      "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
    },
    "wasteReduction": {
      "compostableFoodContainersAndCutlery": true,
      "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
      "compostsExcessFood": true,
      "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "donatesExcessFood": true,
      "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "foodWasteReductionProgram": true,
      "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticStraws": true,
      "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticWaterBottles": true,
      "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
      "noStyrofoamFoodContainers": true,
      "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
      "recyclingProgram": true,
      "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
      "refillableToiletryContainers": true,
      "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesBatteries": true,
      "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesElectronics": true,
      "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesLightbulbs": true,
      "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
      "safelyHandlesHazardousSubstances": true,
      "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
      "soapDonationProgram": true,
      "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "toiletryDonationProgram": true,
      "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "waterBottleFillingStations": true,
      "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
    },
    "waterConservation": {
      "independentOrganizationAuditsWaterUse": true,
      "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
      "linenReuseProgram": true,
      "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "towelReuseProgram": true,
      "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "waterSavingShowers": true,
      "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
      "waterSavingSinks": true,
      "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
      "waterSavingToilets": true,
      "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "transportation": {
    "airportShuttle": true,
    "airportShuttleException": "EXCEPTION_UNSPECIFIED",
    "carRentalOnProperty": true,
    "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
    "freeAirportShuttle": true,
    "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
    "freePrivateCarService": true,
    "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "localShuttle": true,
    "localShuttleException": "EXCEPTION_UNSPECIFIED",
    "privateCarService": true,
    "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "transfer": true,
    "transferException": "EXCEPTION_UNSPECIFIED"
  },
  "wellness": {
    "doctorOnCall": true,
    "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
    "ellipticalMachine": true,
    "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
    "fitnessCenter": true,
    "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeFitnessCenter": true,
    "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeWeights": true,
    "freeWeightsException": "EXCEPTION_UNSPECIFIED",
    "massage": true,
    "massageException": "EXCEPTION_UNSPECIFIED",
    "salon": true,
    "salonException": "EXCEPTION_UNSPECIFIED",
    "sauna": true,
    "saunaException": "EXCEPTION_UNSPECIFIED",
    "spa": true,
    "spaException": "EXCEPTION_UNSPECIFIED",
    "treadmill": true,
    "treadmillException": "EXCEPTION_UNSPECIFIED",
    "weightMachine": true,
    "weightMachineException": "EXCEPTION_UNSPECIFIED"
  }
}
```

<h3 id="mybusinesslodginglocationsupdatelodging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form: `locations/{location_id}/lodging`|
|updateMask|query|string|false|Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Lodging](#schemalodging)|false|none|
|» accessibility|body|[Accessibility](#schemaaccessibility)|false|Physical adaptations made to the property in consideration of varying levels of human physical ability.|
|» activities|body|[Activities](#schemaactivities)|false|Amenities and features related to leisure and play.|
|» business|body|[Business](#schemabusiness)|false|Features of the property of specific interest to the business traveler.|
|» commonLivingArea|body|[LivingArea](#schemalivingarea)|false|Features of the shared living areas available in this Lodging.|
|» connectivity|body|[Connectivity](#schemaconnectivity)|false|The ways in which the property provides guests with the ability to access the internet.|
|» families|body|[Families](#schemafamilies)|false|Services and amenities for families and young guests.|
|» foodAndDrink|body|[FoodAndDrink](#schemafoodanddrink)|false|Meals, snacks, and beverages available at the property.|
|» guestUnits|body|[[GuestUnitType](#schemaguestunittype)]|false|Individual GuestUnitTypes that are available in this Lodging.|
|» healthAndSafety|body|[HealthAndSafety](#schemahealthandsafety)|false|Health and safety measures implemented by the hotel during COVID-19.|
|» housekeeping|body|[Housekeeping](#schemahousekeeping)|false|Conveniences provided in guest units to facilitate an easier, more comfortable stay.|
|» metadata|body|[LodgingMetadata](#schemalodgingmetadata)|false|Required. Metadata for the lodging.|
|» name|body|string|false|Required. Google identifier for this location in the form: `locations/{location_id}/lodging`|
|» parking|body|[Parking](#schemaparking)|false|Parking options at the property.|
|» pets|body|[Pets](#schemapets)|false|Policies regarding guest-owned animals.|
|» policies|body|[Policies](#schemapolicies)|false|Property rules that impact guests.|
|» pools|body|[Pools](#schemapools)|false|Swimming pool or recreational water facilities available at the hotel.|
|» property|body|[Property](#schemaproperty)|false|General factual information about the property's physical structure and important dates.|
|» services|body|[Services](#schemaservices)|false|Conveniences or help provided by the property to facilitate an easier, more comfortable stay.|
|» sustainability|body|[Sustainability](#schemasustainability)|false|Sustainability practices implemented at the hotel.|
|» transportation|body|[Transportation](#schematransportation)|false|Vehicles or vehicular services facilitated or owned by the property.|
|» wellness|body|[Wellness](#schemawellness)|false|Guest facilities at the property to promote or maintain health, beauty, and fitness.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accessibility": {
    "mobilityAccessible": true,
    "mobilityAccessibleElevator": true,
    "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleParking": true,
    "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessiblePool": true,
    "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "activities": {
    "beachAccess": true,
    "beachAccessException": "EXCEPTION_UNSPECIFIED",
    "beachFront": true,
    "beachFrontException": "EXCEPTION_UNSPECIFIED",
    "bicycleRental": true,
    "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "boutiqueStores": true,
    "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
    "casino": true,
    "casinoException": "EXCEPTION_UNSPECIFIED",
    "freeBicycleRental": true,
    "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "freeWatercraftRental": true,
    "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
    "gameRoom": true,
    "gameRoomException": "EXCEPTION_UNSPECIFIED",
    "golf": true,
    "golfException": "EXCEPTION_UNSPECIFIED",
    "horsebackRiding": true,
    "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
    "nightclub": true,
    "nightclubException": "EXCEPTION_UNSPECIFIED",
    "privateBeach": true,
    "privateBeachException": "EXCEPTION_UNSPECIFIED",
    "scuba": true,
    "scubaException": "EXCEPTION_UNSPECIFIED",
    "snorkeling": true,
    "snorkelingException": "EXCEPTION_UNSPECIFIED",
    "tennis": true,
    "tennisException": "EXCEPTION_UNSPECIFIED",
    "waterSkiing": true,
    "waterSkiingException": "EXCEPTION_UNSPECIFIED",
    "watercraftRental": true,
    "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
  },
  "allUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "business": {
    "businessCenter": true,
    "businessCenterException": "EXCEPTION_UNSPECIFIED",
    "meetingRooms": true,
    "meetingRoomsCount": 0,
    "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
    "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
  },
  "commonLivingArea": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "connectivity": {
    "freeWifi": true,
    "freeWifiException": "EXCEPTION_UNSPECIFIED",
    "publicAreaWifiAvailable": true,
    "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "publicInternetTerminal": true,
    "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
    "wifiAvailable": true,
    "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "families": {
    "babysitting": true,
    "babysittingException": "EXCEPTION_UNSPECIFIED",
    "kidsActivities": true,
    "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
    "kidsClub": true,
    "kidsClubException": "EXCEPTION_UNSPECIFIED",
    "kidsFriendly": true,
    "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
  },
  "foodAndDrink": {
    "bar": true,
    "barException": "EXCEPTION_UNSPECIFIED",
    "breakfastAvailable": true,
    "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
    "breakfastBuffet": true,
    "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
    "buffet": true,
    "buffetException": "EXCEPTION_UNSPECIFIED",
    "dinnerBuffet": true,
    "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
    "freeBreakfast": true,
    "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
    "restaurant": true,
    "restaurantException": "EXCEPTION_UNSPECIFIED",
    "restaurantsCount": 0,
    "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
    "roomService": true,
    "roomServiceException": "EXCEPTION_UNSPECIFIED",
    "tableService": true,
    "tableServiceException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourRoomService": true,
    "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
    "vendingMachine": true,
    "vendingMachineException": "EXCEPTION_UNSPECIFIED"
  },
  "guestUnits": [
    {
      "codes": [
        "string"
      ],
      "features": {
        "bungalowOrVilla": true,
        "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
        "connectingUnitAvailable": true,
        "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
        "executiveFloor": true,
        "executiveFloorException": "EXCEPTION_UNSPECIFIED",
        "maxAdultOccupantsCount": 0,
        "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxChildOccupantsCount": 0,
        "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxOccupantsCount": 0,
        "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "privateHome": true,
        "privateHomeException": "EXCEPTION_UNSPECIFIED",
        "suite": true,
        "suiteException": "EXCEPTION_UNSPECIFIED",
        "tier": "UNIT_TIER_UNSPECIFIED",
        "tierException": "EXCEPTION_UNSPECIFIED",
        "totalLivingAreas": {
          "accessibility": {
            "adaCompliantUnit": true,
            "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleDoorbell": true,
            "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleFireAlarm": true,
            "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleUnit": true,
            "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleBathtub": true,
            "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleShower": true,
            "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleToilet": true,
            "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleUnit": true,
            "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
          },
          "eating": {
            "coffeeMaker": true,
            "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
            "cookware": true,
            "cookwareException": "EXCEPTION_UNSPECIFIED",
            "dishwasher": true,
            "dishwasherException": "EXCEPTION_UNSPECIFIED",
            "indoorGrill": true,
            "indoorGrillException": "EXCEPTION_UNSPECIFIED",
            "kettle": true,
            "kettleException": "EXCEPTION_UNSPECIFIED",
            "kitchenAvailable": true,
            "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
            "microwave": true,
            "microwaveException": "EXCEPTION_UNSPECIFIED",
            "minibar": true,
            "minibarException": "EXCEPTION_UNSPECIFIED",
            "outdoorGrill": true,
            "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
            "oven": true,
            "ovenException": "EXCEPTION_UNSPECIFIED",
            "refrigerator": true,
            "refrigeratorException": "EXCEPTION_UNSPECIFIED",
            "sink": true,
            "sinkException": "EXCEPTION_UNSPECIFIED",
            "snackbar": true,
            "snackbarException": "EXCEPTION_UNSPECIFIED",
            "stove": true,
            "stoveException": "EXCEPTION_UNSPECIFIED",
            "teaStation": true,
            "teaStationException": "EXCEPTION_UNSPECIFIED",
            "toaster": true,
            "toasterException": "EXCEPTION_UNSPECIFIED"
          },
          "features": {
            "airConditioning": true,
            "airConditioningException": "EXCEPTION_UNSPECIFIED",
            "bathtub": true,
            "bathtubException": "EXCEPTION_UNSPECIFIED",
            "bidet": true,
            "bidetException": "EXCEPTION_UNSPECIFIED",
            "dryer": true,
            "dryerException": "EXCEPTION_UNSPECIFIED",
            "electronicRoomKey": true,
            "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
            "fireplace": true,
            "fireplaceException": "EXCEPTION_UNSPECIFIED",
            "hairdryer": true,
            "hairdryerException": "EXCEPTION_UNSPECIFIED",
            "heating": true,
            "heatingException": "EXCEPTION_UNSPECIFIED",
            "inunitSafe": true,
            "inunitSafeException": "EXCEPTION_UNSPECIFIED",
            "inunitWifiAvailable": true,
            "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
            "ironingEquipment": true,
            "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
            "payPerViewMovies": true,
            "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
            "privateBathroom": true,
            "privateBathroomException": "EXCEPTION_UNSPECIFIED",
            "shower": true,
            "showerException": "EXCEPTION_UNSPECIFIED",
            "toilet": true,
            "toiletException": "EXCEPTION_UNSPECIFIED",
            "tv": true,
            "tvCasting": true,
            "tvCastingException": "EXCEPTION_UNSPECIFIED",
            "tvException": "EXCEPTION_UNSPECIFIED",
            "tvStreaming": true,
            "tvStreamingException": "EXCEPTION_UNSPECIFIED",
            "universalPowerAdapters": true,
            "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
            "washer": true,
            "washerException": "EXCEPTION_UNSPECIFIED"
          },
          "layout": {
            "balcony": true,
            "balconyException": "EXCEPTION_UNSPECIFIED",
            "livingAreaSqMeters": 0,
            "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
            "loft": true,
            "loftException": "EXCEPTION_UNSPECIFIED",
            "nonSmoking": true,
            "nonSmokingException": "EXCEPTION_UNSPECIFIED",
            "patio": true,
            "patioException": "EXCEPTION_UNSPECIFIED",
            "stairs": true,
            "stairsException": "EXCEPTION_UNSPECIFIED"
          },
          "sleeping": {
            "bedsCount": 0,
            "bedsCountException": "EXCEPTION_UNSPECIFIED",
            "bunkBedsCount": 0,
            "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
            "cribsCount": 0,
            "cribsCountException": "EXCEPTION_UNSPECIFIED",
            "doubleBedsCount": 0,
            "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
            "featherPillows": true,
            "featherPillowsException": "EXCEPTION_UNSPECIFIED",
            "hypoallergenicBedding": true,
            "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
            "kingBedsCount": 0,
            "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
            "memoryFoamPillows": true,
            "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
            "otherBedsCount": 0,
            "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
            "queenBedsCount": 0,
            "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
            "rollAwayBedsCount": 0,
            "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
            "singleOrTwinBedsCount": 0,
            "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
            "sofaBedsCount": 0,
            "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
            "syntheticPillows": true,
            "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "views": {
          "beachView": true,
          "beachViewException": "EXCEPTION_UNSPECIFIED",
          "cityView": true,
          "cityViewException": "EXCEPTION_UNSPECIFIED",
          "gardenView": true,
          "gardenViewException": "EXCEPTION_UNSPECIFIED",
          "lakeView": true,
          "lakeViewException": "EXCEPTION_UNSPECIFIED",
          "landmarkView": true,
          "landmarkViewException": "EXCEPTION_UNSPECIFIED",
          "oceanView": true,
          "oceanViewException": "EXCEPTION_UNSPECIFIED",
          "poolView": true,
          "poolViewException": "EXCEPTION_UNSPECIFIED",
          "valleyView": true,
          "valleyViewException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "label": "string"
    }
  ],
  "healthAndSafety": {
    "enhancedCleaning": {
      "commercialGradeDisinfectantCleaning": true,
      "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
      "commonAreasEnhancedCleaning": true,
      "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedCleaningProcedures": true,
      "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedThoroughHandWashing": true,
      "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
      "employeesWearProtectiveEquipment": true,
      "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
      "guestRoomsEnhancedCleaning": true,
      "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
    },
    "increasedFoodSafety": {
      "diningAreasAdditionalSanitation": true,
      "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
      "disposableFlatware": true,
      "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
      "foodPreparationAndServingAdditionalSafety": true,
      "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
      "individualPackagedMeals": true,
      "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
      "singleUseFoodMenus": true,
      "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
    },
    "minimizedContact": {
      "contactlessCheckinCheckout": true,
      "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
      "digitalGuestRoomKeys": true,
      "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
      "housekeepingScheduledRequestOnly": true,
      "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsCommonAreas": true,
      "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsGuestRooms": true,
      "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
      "plasticKeycardsDisinfected": true,
      "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
      "roomBookingsBuffer": true,
      "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
    },
    "personalProtection": {
      "commonAreasOfferSanitizingItems": true,
      "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
      "faceMaskRequired": true,
      "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
      "guestRoomHygieneKitsAvailable": true,
      "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
      "protectiveEquipmentAvailable": true,
      "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "physicalDistancing": {
      "commonAreasPhysicalDistancingArranged": true,
      "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
      "physicalDistancingRequired": true,
      "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
      "safetyDividers": true,
      "safetyDividersException": "EXCEPTION_UNSPECIFIED",
      "sharedAreasLimitedOccupancy": true,
      "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
      "wellnessAreasHavePrivateSpaces": true,
      "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "housekeeping": {
    "dailyHousekeeping": true,
    "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
    "housekeepingAvailable": true,
    "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
    "turndownService": true,
    "turndownServiceException": "EXCEPTION_UNSPECIFIED"
  },
  "metadata": {
    "updateTime": "string"
  },
  "name": "string",
  "parking": {
    "electricCarChargingStations": true,
    "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
    "freeParking": true,
    "freeParkingException": "EXCEPTION_UNSPECIFIED",
    "freeSelfParking": true,
    "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
    "freeValetParking": true,
    "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
    "parkingAvailable": true,
    "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "selfParkingAvailable": true,
    "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "valetParkingAvailable": true,
    "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "pets": {
    "catsAllowed": true,
    "catsAllowedException": "EXCEPTION_UNSPECIFIED",
    "dogsAllowed": true,
    "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowed": true,
    "petsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowedFree": true,
    "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
  },
  "policies": {
    "allInclusiveAvailable": true,
    "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
    "allInclusiveOnly": true,
    "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
    "checkinTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkinTimeException": "EXCEPTION_UNSPECIFIED",
    "checkoutTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
    "kidsStayFree": true,
    "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
    "maxChildAge": 0,
    "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
    "maxKidsStayFreeCount": 0,
    "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
    "paymentOptions": {
      "cash": true,
      "cashException": "EXCEPTION_UNSPECIFIED",
      "cheque": true,
      "chequeException": "EXCEPTION_UNSPECIFIED",
      "creditCard": true,
      "creditCardException": "EXCEPTION_UNSPECIFIED",
      "debitCard": true,
      "debitCardException": "EXCEPTION_UNSPECIFIED",
      "mobileNfc": true,
      "mobileNfcException": "EXCEPTION_UNSPECIFIED"
    },
    "smokeFreeProperty": true,
    "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
  },
  "pools": {
    "adultPool": true,
    "adultPoolException": "EXCEPTION_UNSPECIFIED",
    "hotTub": true,
    "hotTubException": "EXCEPTION_UNSPECIFIED",
    "indoorPool": true,
    "indoorPoolException": "EXCEPTION_UNSPECIFIED",
    "indoorPoolsCount": 0,
    "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "lazyRiver": true,
    "lazyRiverException": "EXCEPTION_UNSPECIFIED",
    "lifeguard": true,
    "lifeguardException": "EXCEPTION_UNSPECIFIED",
    "outdoorPool": true,
    "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
    "outdoorPoolsCount": 0,
    "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "pool": true,
    "poolException": "EXCEPTION_UNSPECIFIED",
    "poolsCount": 0,
    "poolsCountException": "EXCEPTION_UNSPECIFIED",
    "wadingPool": true,
    "wadingPoolException": "EXCEPTION_UNSPECIFIED",
    "waterPark": true,
    "waterParkException": "EXCEPTION_UNSPECIFIED",
    "waterslide": true,
    "waterslideException": "EXCEPTION_UNSPECIFIED",
    "wavePool": true,
    "wavePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "property": {
    "builtYear": 0,
    "builtYearException": "EXCEPTION_UNSPECIFIED",
    "floorsCount": 0,
    "floorsCountException": "EXCEPTION_UNSPECIFIED",
    "lastRenovatedYear": 0,
    "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
    "roomsCount": 0,
    "roomsCountException": "EXCEPTION_UNSPECIFIED"
  },
  "services": {
    "baggageStorage": true,
    "baggageStorageException": "EXCEPTION_UNSPECIFIED",
    "concierge": true,
    "conciergeException": "EXCEPTION_UNSPECIFIED",
    "convenienceStore": true,
    "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
    "currencyExchange": true,
    "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
    "elevator": true,
    "elevatorException": "EXCEPTION_UNSPECIFIED",
    "frontDesk": true,
    "frontDeskException": "EXCEPTION_UNSPECIFIED",
    "fullServiceLaundry": true,
    "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "giftShop": true,
    "giftShopException": "EXCEPTION_UNSPECIFIED",
    "languagesSpoken": [
      {
        "languageCode": "string",
        "spoken": true,
        "spokenException": "EXCEPTION_UNSPECIFIED"
      }
    ],
    "selfServiceLaundry": true,
    "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "socialHour": true,
    "socialHourException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourFrontDesk": true,
    "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
    "wakeUpCalls": true,
    "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
  },
  "someUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "sustainability": {
    "energyEfficiency": {
      "carbonFreeEnergySources": true,
      "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
      "energyConservationProgram": true,
      "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientHeatingAndCoolingSystems": true,
      "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientLighting": true,
      "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
      "energySavingThermostats": true,
      "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
      "greenBuildingDesign": true,
      "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
      "independentOrganizationAuditsEnergyUse": true,
      "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainabilityCertifications": {
      "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
      "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
      "ecoCertifications": [
        {
          "awarded": true,
          "awardedException": "EXCEPTION_UNSPECIFIED",
          "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
        }
      ],
      "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
      "leedCertificationException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainableSourcing": {
      "ecoFriendlyToiletries": true,
      "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
      "locallySourcedFoodAndBeverages": true,
      "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "organicCageFreeEggs": true,
      "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
      "organicFoodAndBeverages": true,
      "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "responsiblePurchasingPolicy": true,
      "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
      "responsiblySourcesSeafood": true,
      "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
      "veganMeals": true,
      "veganMealsException": "EXCEPTION_UNSPECIFIED",
      "vegetarianMeals": true,
      "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
    },
    "wasteReduction": {
      "compostableFoodContainersAndCutlery": true,
      "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
      "compostsExcessFood": true,
      "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "donatesExcessFood": true,
      "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "foodWasteReductionProgram": true,
      "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticStraws": true,
      "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticWaterBottles": true,
      "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
      "noStyrofoamFoodContainers": true,
      "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
      "recyclingProgram": true,
      "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
      "refillableToiletryContainers": true,
      "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesBatteries": true,
      "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesElectronics": true,
      "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesLightbulbs": true,
      "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
      "safelyHandlesHazardousSubstances": true,
      "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
      "soapDonationProgram": true,
      "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "toiletryDonationProgram": true,
      "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "waterBottleFillingStations": true,
      "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
    },
    "waterConservation": {
      "independentOrganizationAuditsWaterUse": true,
      "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
      "linenReuseProgram": true,
      "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "towelReuseProgram": true,
      "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "waterSavingShowers": true,
      "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
      "waterSavingSinks": true,
      "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
      "waterSavingToilets": true,
      "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "transportation": {
    "airportShuttle": true,
    "airportShuttleException": "EXCEPTION_UNSPECIFIED",
    "carRentalOnProperty": true,
    "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
    "freeAirportShuttle": true,
    "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
    "freePrivateCarService": true,
    "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "localShuttle": true,
    "localShuttleException": "EXCEPTION_UNSPECIFIED",
    "privateCarService": true,
    "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "transfer": true,
    "transferException": "EXCEPTION_UNSPECIFIED"
  },
  "wellness": {
    "doctorOnCall": true,
    "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
    "ellipticalMachine": true,
    "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
    "fitnessCenter": true,
    "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeFitnessCenter": true,
    "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeWeights": true,
    "freeWeightsException": "EXCEPTION_UNSPECIFIED",
    "massage": true,
    "massageException": "EXCEPTION_UNSPECIFIED",
    "salon": true,
    "salonException": "EXCEPTION_UNSPECIFIED",
    "sauna": true,
    "saunaException": "EXCEPTION_UNSPECIFIED",
    "spa": true,
    "spaException": "EXCEPTION_UNSPECIFIED",
    "treadmill": true,
    "treadmillException": "EXCEPTION_UNSPECIFIED",
    "weightMachine": true,
    "weightMachineException": "EXCEPTION_UNSPECIFIED"
  }
}
```

<h3 id="mybusinesslodginglocationsupdatelodging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Lodging](#schemalodging)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinesslodging.locations.lodging.getGoogleUpdated

<a id="opIdmybusinesslodging.locations.lodging.getGoogleUpdated"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getGoogleUpdated \
  -H 'Accept: application/json'
```

`GET /v1/{name}:getGoogleUpdated`

Returns the Google updated Lodging of a specific location.

<h3 id="mybusinesslodginglocationslodginggetgoogleupdated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form: `locations/{location_id}/lodging`|
|readMask|query|string|false|Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "diffMask": "string",
  "lodging": {
    "accessibility": {
      "mobilityAccessible": true,
      "mobilityAccessibleElevator": true,
      "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleParking": true,
      "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessiblePool": true,
      "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "activities": {
      "beachAccess": true,
      "beachAccessException": "EXCEPTION_UNSPECIFIED",
      "beachFront": true,
      "beachFrontException": "EXCEPTION_UNSPECIFIED",
      "bicycleRental": true,
      "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "boutiqueStores": true,
      "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
      "casino": true,
      "casinoException": "EXCEPTION_UNSPECIFIED",
      "freeBicycleRental": true,
      "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "freeWatercraftRental": true,
      "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
      "gameRoom": true,
      "gameRoomException": "EXCEPTION_UNSPECIFIED",
      "golf": true,
      "golfException": "EXCEPTION_UNSPECIFIED",
      "horsebackRiding": true,
      "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
      "nightclub": true,
      "nightclubException": "EXCEPTION_UNSPECIFIED",
      "privateBeach": true,
      "privateBeachException": "EXCEPTION_UNSPECIFIED",
      "scuba": true,
      "scubaException": "EXCEPTION_UNSPECIFIED",
      "snorkeling": true,
      "snorkelingException": "EXCEPTION_UNSPECIFIED",
      "tennis": true,
      "tennisException": "EXCEPTION_UNSPECIFIED",
      "waterSkiing": true,
      "waterSkiingException": "EXCEPTION_UNSPECIFIED",
      "watercraftRental": true,
      "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
    },
    "allUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "business": {
      "businessCenter": true,
      "businessCenterException": "EXCEPTION_UNSPECIFIED",
      "meetingRooms": true,
      "meetingRoomsCount": 0,
      "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
      "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
    },
    "commonLivingArea": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "connectivity": {
      "freeWifi": true,
      "freeWifiException": "EXCEPTION_UNSPECIFIED",
      "publicAreaWifiAvailable": true,
      "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "publicInternetTerminal": true,
      "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
      "wifiAvailable": true,
      "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "families": {
      "babysitting": true,
      "babysittingException": "EXCEPTION_UNSPECIFIED",
      "kidsActivities": true,
      "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
      "kidsClub": true,
      "kidsClubException": "EXCEPTION_UNSPECIFIED",
      "kidsFriendly": true,
      "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
    },
    "foodAndDrink": {
      "bar": true,
      "barException": "EXCEPTION_UNSPECIFIED",
      "breakfastAvailable": true,
      "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
      "breakfastBuffet": true,
      "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
      "buffet": true,
      "buffetException": "EXCEPTION_UNSPECIFIED",
      "dinnerBuffet": true,
      "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
      "freeBreakfast": true,
      "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
      "restaurant": true,
      "restaurantException": "EXCEPTION_UNSPECIFIED",
      "restaurantsCount": 0,
      "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
      "roomService": true,
      "roomServiceException": "EXCEPTION_UNSPECIFIED",
      "tableService": true,
      "tableServiceException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourRoomService": true,
      "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
      "vendingMachine": true,
      "vendingMachineException": "EXCEPTION_UNSPECIFIED"
    },
    "guestUnits": [
      {
        "codes": [
          "string"
        ],
        "features": {
          "bungalowOrVilla": true,
          "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
          "connectingUnitAvailable": true,
          "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
          "executiveFloor": true,
          "executiveFloorException": "EXCEPTION_UNSPECIFIED",
          "maxAdultOccupantsCount": 0,
          "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxChildOccupantsCount": 0,
          "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxOccupantsCount": 0,
          "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "privateHome": true,
          "privateHomeException": "EXCEPTION_UNSPECIFIED",
          "suite": true,
          "suiteException": "EXCEPTION_UNSPECIFIED",
          "tier": "UNIT_TIER_UNSPECIFIED",
          "tierException": "EXCEPTION_UNSPECIFIED",
          "totalLivingAreas": {
            "accessibility": {
              "adaCompliantUnit": true,
              "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleDoorbell": true,
              "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleFireAlarm": true,
              "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleUnit": true,
              "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleBathtub": true,
              "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleShower": true,
              "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleToilet": true,
              "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleUnit": true,
              "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
            },
            "eating": {
              "coffeeMaker": true,
              "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
              "cookware": true,
              "cookwareException": "EXCEPTION_UNSPECIFIED",
              "dishwasher": true,
              "dishwasherException": "EXCEPTION_UNSPECIFIED",
              "indoorGrill": true,
              "indoorGrillException": "EXCEPTION_UNSPECIFIED",
              "kettle": true,
              "kettleException": "EXCEPTION_UNSPECIFIED",
              "kitchenAvailable": true,
              "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
              "microwave": true,
              "microwaveException": "EXCEPTION_UNSPECIFIED",
              "minibar": true,
              "minibarException": "EXCEPTION_UNSPECIFIED",
              "outdoorGrill": true,
              "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
              "oven": true,
              "ovenException": "EXCEPTION_UNSPECIFIED",
              "refrigerator": true,
              "refrigeratorException": "EXCEPTION_UNSPECIFIED",
              "sink": true,
              "sinkException": "EXCEPTION_UNSPECIFIED",
              "snackbar": true,
              "snackbarException": "EXCEPTION_UNSPECIFIED",
              "stove": true,
              "stoveException": "EXCEPTION_UNSPECIFIED",
              "teaStation": true,
              "teaStationException": "EXCEPTION_UNSPECIFIED",
              "toaster": true,
              "toasterException": "EXCEPTION_UNSPECIFIED"
            },
            "features": {
              "airConditioning": true,
              "airConditioningException": "EXCEPTION_UNSPECIFIED",
              "bathtub": true,
              "bathtubException": "EXCEPTION_UNSPECIFIED",
              "bidet": true,
              "bidetException": "EXCEPTION_UNSPECIFIED",
              "dryer": true,
              "dryerException": "EXCEPTION_UNSPECIFIED",
              "electronicRoomKey": true,
              "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
              "fireplace": true,
              "fireplaceException": "EXCEPTION_UNSPECIFIED",
              "hairdryer": true,
              "hairdryerException": "EXCEPTION_UNSPECIFIED",
              "heating": true,
              "heatingException": "EXCEPTION_UNSPECIFIED",
              "inunitSafe": true,
              "inunitSafeException": "EXCEPTION_UNSPECIFIED",
              "inunitWifiAvailable": true,
              "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
              "ironingEquipment": true,
              "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
              "payPerViewMovies": true,
              "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
              "privateBathroom": true,
              "privateBathroomException": "EXCEPTION_UNSPECIFIED",
              "shower": true,
              "showerException": "EXCEPTION_UNSPECIFIED",
              "toilet": true,
              "toiletException": "EXCEPTION_UNSPECIFIED",
              "tv": true,
              "tvCasting": true,
              "tvCastingException": "EXCEPTION_UNSPECIFIED",
              "tvException": "EXCEPTION_UNSPECIFIED",
              "tvStreaming": true,
              "tvStreamingException": "EXCEPTION_UNSPECIFIED",
              "universalPowerAdapters": true,
              "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
              "washer": true,
              "washerException": "EXCEPTION_UNSPECIFIED"
            },
            "layout": {
              "balcony": true,
              "balconyException": "EXCEPTION_UNSPECIFIED",
              "livingAreaSqMeters": 0,
              "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
              "loft": true,
              "loftException": "EXCEPTION_UNSPECIFIED",
              "nonSmoking": true,
              "nonSmokingException": "EXCEPTION_UNSPECIFIED",
              "patio": true,
              "patioException": "EXCEPTION_UNSPECIFIED",
              "stairs": true,
              "stairsException": "EXCEPTION_UNSPECIFIED"
            },
            "sleeping": {
              "bedsCount": 0,
              "bedsCountException": "EXCEPTION_UNSPECIFIED",
              "bunkBedsCount": 0,
              "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
              "cribsCount": 0,
              "cribsCountException": "EXCEPTION_UNSPECIFIED",
              "doubleBedsCount": 0,
              "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
              "featherPillows": true,
              "featherPillowsException": "EXCEPTION_UNSPECIFIED",
              "hypoallergenicBedding": true,
              "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
              "kingBedsCount": 0,
              "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
              "memoryFoamPillows": true,
              "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
              "otherBedsCount": 0,
              "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
              "queenBedsCount": 0,
              "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
              "rollAwayBedsCount": 0,
              "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
              "singleOrTwinBedsCount": 0,
              "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
              "sofaBedsCount": 0,
              "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
              "syntheticPillows": true,
              "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
            }
          },
          "views": {
            "beachView": true,
            "beachViewException": "EXCEPTION_UNSPECIFIED",
            "cityView": true,
            "cityViewException": "EXCEPTION_UNSPECIFIED",
            "gardenView": true,
            "gardenViewException": "EXCEPTION_UNSPECIFIED",
            "lakeView": true,
            "lakeViewException": "EXCEPTION_UNSPECIFIED",
            "landmarkView": true,
            "landmarkViewException": "EXCEPTION_UNSPECIFIED",
            "oceanView": true,
            "oceanViewException": "EXCEPTION_UNSPECIFIED",
            "poolView": true,
            "poolViewException": "EXCEPTION_UNSPECIFIED",
            "valleyView": true,
            "valleyViewException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "label": "string"
      }
    ],
    "healthAndSafety": {
      "enhancedCleaning": {
        "commercialGradeDisinfectantCleaning": true,
        "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
        "commonAreasEnhancedCleaning": true,
        "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedCleaningProcedures": true,
        "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedThoroughHandWashing": true,
        "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
        "employeesWearProtectiveEquipment": true,
        "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
        "guestRoomsEnhancedCleaning": true,
        "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
      },
      "increasedFoodSafety": {
        "diningAreasAdditionalSanitation": true,
        "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
        "disposableFlatware": true,
        "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
        "foodPreparationAndServingAdditionalSafety": true,
        "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
        "individualPackagedMeals": true,
        "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
        "singleUseFoodMenus": true,
        "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
      },
      "minimizedContact": {
        "contactlessCheckinCheckout": true,
        "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
        "digitalGuestRoomKeys": true,
        "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
        "housekeepingScheduledRequestOnly": true,
        "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsCommonAreas": true,
        "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsGuestRooms": true,
        "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
        "plasticKeycardsDisinfected": true,
        "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
        "roomBookingsBuffer": true,
        "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
      },
      "personalProtection": {
        "commonAreasOfferSanitizingItems": true,
        "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
        "faceMaskRequired": true,
        "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
        "guestRoomHygieneKitsAvailable": true,
        "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
        "protectiveEquipmentAvailable": true,
        "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
      },
      "physicalDistancing": {
        "commonAreasPhysicalDistancingArranged": true,
        "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
        "physicalDistancingRequired": true,
        "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
        "safetyDividers": true,
        "safetyDividersException": "EXCEPTION_UNSPECIFIED",
        "sharedAreasLimitedOccupancy": true,
        "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
        "wellnessAreasHavePrivateSpaces": true,
        "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "housekeeping": {
      "dailyHousekeeping": true,
      "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
      "housekeepingAvailable": true,
      "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
      "turndownService": true,
      "turndownServiceException": "EXCEPTION_UNSPECIFIED"
    },
    "metadata": {
      "updateTime": "string"
    },
    "name": "string",
    "parking": {
      "electricCarChargingStations": true,
      "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
      "freeParking": true,
      "freeParkingException": "EXCEPTION_UNSPECIFIED",
      "freeSelfParking": true,
      "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
      "freeValetParking": true,
      "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
      "parkingAvailable": true,
      "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "selfParkingAvailable": true,
      "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "valetParkingAvailable": true,
      "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "pets": {
      "catsAllowed": true,
      "catsAllowedException": "EXCEPTION_UNSPECIFIED",
      "dogsAllowed": true,
      "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowed": true,
      "petsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowedFree": true,
      "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
    },
    "policies": {
      "allInclusiveAvailable": true,
      "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
      "allInclusiveOnly": true,
      "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
      "checkinTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkinTimeException": "EXCEPTION_UNSPECIFIED",
      "checkoutTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
      "kidsStayFree": true,
      "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
      "maxChildAge": 0,
      "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
      "maxKidsStayFreeCount": 0,
      "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
      "paymentOptions": {
        "cash": true,
        "cashException": "EXCEPTION_UNSPECIFIED",
        "cheque": true,
        "chequeException": "EXCEPTION_UNSPECIFIED",
        "creditCard": true,
        "creditCardException": "EXCEPTION_UNSPECIFIED",
        "debitCard": true,
        "debitCardException": "EXCEPTION_UNSPECIFIED",
        "mobileNfc": true,
        "mobileNfcException": "EXCEPTION_UNSPECIFIED"
      },
      "smokeFreeProperty": true,
      "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
    },
    "pools": {
      "adultPool": true,
      "adultPoolException": "EXCEPTION_UNSPECIFIED",
      "hotTub": true,
      "hotTubException": "EXCEPTION_UNSPECIFIED",
      "indoorPool": true,
      "indoorPoolException": "EXCEPTION_UNSPECIFIED",
      "indoorPoolsCount": 0,
      "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "lazyRiver": true,
      "lazyRiverException": "EXCEPTION_UNSPECIFIED",
      "lifeguard": true,
      "lifeguardException": "EXCEPTION_UNSPECIFIED",
      "outdoorPool": true,
      "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
      "outdoorPoolsCount": 0,
      "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "pool": true,
      "poolException": "EXCEPTION_UNSPECIFIED",
      "poolsCount": 0,
      "poolsCountException": "EXCEPTION_UNSPECIFIED",
      "wadingPool": true,
      "wadingPoolException": "EXCEPTION_UNSPECIFIED",
      "waterPark": true,
      "waterParkException": "EXCEPTION_UNSPECIFIED",
      "waterslide": true,
      "waterslideException": "EXCEPTION_UNSPECIFIED",
      "wavePool": true,
      "wavePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "property": {
      "builtYear": 0,
      "builtYearException": "EXCEPTION_UNSPECIFIED",
      "floorsCount": 0,
      "floorsCountException": "EXCEPTION_UNSPECIFIED",
      "lastRenovatedYear": 0,
      "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
      "roomsCount": 0,
      "roomsCountException": "EXCEPTION_UNSPECIFIED"
    },
    "services": {
      "baggageStorage": true,
      "baggageStorageException": "EXCEPTION_UNSPECIFIED",
      "concierge": true,
      "conciergeException": "EXCEPTION_UNSPECIFIED",
      "convenienceStore": true,
      "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
      "currencyExchange": true,
      "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
      "elevator": true,
      "elevatorException": "EXCEPTION_UNSPECIFIED",
      "frontDesk": true,
      "frontDeskException": "EXCEPTION_UNSPECIFIED",
      "fullServiceLaundry": true,
      "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "giftShop": true,
      "giftShopException": "EXCEPTION_UNSPECIFIED",
      "languagesSpoken": [
        {
          "languageCode": "string",
          "spoken": true,
          "spokenException": "EXCEPTION_UNSPECIFIED"
        }
      ],
      "selfServiceLaundry": true,
      "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "socialHour": true,
      "socialHourException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourFrontDesk": true,
      "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
      "wakeUpCalls": true,
      "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
    },
    "someUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "sustainability": {
      "energyEfficiency": {
        "carbonFreeEnergySources": true,
        "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
        "energyConservationProgram": true,
        "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientHeatingAndCoolingSystems": true,
        "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientLighting": true,
        "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
        "energySavingThermostats": true,
        "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
        "greenBuildingDesign": true,
        "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
        "independentOrganizationAuditsEnergyUse": true,
        "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainabilityCertifications": {
        "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
        "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
        "ecoCertifications": [
          {
            "awarded": true,
            "awardedException": "EXCEPTION_UNSPECIFIED",
            "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
          }
        ],
        "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
        "leedCertificationException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainableSourcing": {
        "ecoFriendlyToiletries": true,
        "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
        "locallySourcedFoodAndBeverages": true,
        "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "organicCageFreeEggs": true,
        "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
        "organicFoodAndBeverages": true,
        "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "responsiblePurchasingPolicy": true,
        "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
        "responsiblySourcesSeafood": true,
        "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
        "veganMeals": true,
        "veganMealsException": "EXCEPTION_UNSPECIFIED",
        "vegetarianMeals": true,
        "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
      },
      "wasteReduction": {
        "compostableFoodContainersAndCutlery": true,
        "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
        "compostsExcessFood": true,
        "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "donatesExcessFood": true,
        "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "foodWasteReductionProgram": true,
        "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticStraws": true,
        "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticWaterBottles": true,
        "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
        "noStyrofoamFoodContainers": true,
        "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
        "recyclingProgram": true,
        "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
        "refillableToiletryContainers": true,
        "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesBatteries": true,
        "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesElectronics": true,
        "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesLightbulbs": true,
        "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
        "safelyHandlesHazardousSubstances": true,
        "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
        "soapDonationProgram": true,
        "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "toiletryDonationProgram": true,
        "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "waterBottleFillingStations": true,
        "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
      },
      "waterConservation": {
        "independentOrganizationAuditsWaterUse": true,
        "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
        "linenReuseProgram": true,
        "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "towelReuseProgram": true,
        "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "waterSavingShowers": true,
        "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
        "waterSavingSinks": true,
        "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
        "waterSavingToilets": true,
        "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "transportation": {
      "airportShuttle": true,
      "airportShuttleException": "EXCEPTION_UNSPECIFIED",
      "carRentalOnProperty": true,
      "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
      "freeAirportShuttle": true,
      "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
      "freePrivateCarService": true,
      "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "localShuttle": true,
      "localShuttleException": "EXCEPTION_UNSPECIFIED",
      "privateCarService": true,
      "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "transfer": true,
      "transferException": "EXCEPTION_UNSPECIFIED"
    },
    "wellness": {
      "doctorOnCall": true,
      "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
      "ellipticalMachine": true,
      "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
      "fitnessCenter": true,
      "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeFitnessCenter": true,
      "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeWeights": true,
      "freeWeightsException": "EXCEPTION_UNSPECIFIED",
      "massage": true,
      "massageException": "EXCEPTION_UNSPECIFIED",
      "salon": true,
      "salonException": "EXCEPTION_UNSPECIFIED",
      "sauna": true,
      "saunaException": "EXCEPTION_UNSPECIFIED",
      "spa": true,
      "spaException": "EXCEPTION_UNSPECIFIED",
      "treadmill": true,
      "treadmillException": "EXCEPTION_UNSPECIFIED",
      "weightMachine": true,
      "weightMachineException": "EXCEPTION_UNSPECIFIED"
    }
  }
}
```

<h3 id="mybusinesslodginglocationslodginggetgoogleupdated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetGoogleUpdatedLodgingResponse](#schemagetgoogleupdatedlodgingresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Accessibility">Accessibility</h2>
<!-- backwards compatibility -->
<a id="schemaaccessibility"></a>
<a id="schema_Accessibility"></a>
<a id="tocSaccessibility"></a>
<a id="tocsaccessibility"></a>

```json
{
  "mobilityAccessible": true,
  "mobilityAccessibleElevator": true,
  "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleParking": true,
  "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessiblePool": true,
  "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
}
```

Physical adaptations made to the property in consideration of varying levels of human physical ability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobilityAccessible|boolean|false|none|Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps.|
|mobilityAccessibleElevator|boolean|false|none|Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons.|
|mobilityAccessibleElevatorException|string|false|none|Mobility accessible elevator exception.|
|mobilityAccessibleException|string|false|none|Mobility accessible exception.|
|mobilityAccessibleParking|boolean|false|none|Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park.|
|mobilityAccessibleParkingException|string|false|none|Mobility accessible parking exception.|
|mobilityAccessiblePool|boolean|false|none|Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift.|
|mobilityAccessiblePoolException|string|false|none|Mobility accessible pool exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|mobilityAccessibleElevatorException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleElevatorException|UNDER_CONSTRUCTION|
|mobilityAccessibleElevatorException|DEPENDENT_ON_SEASON|
|mobilityAccessibleElevatorException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleException|UNDER_CONSTRUCTION|
|mobilityAccessibleException|DEPENDENT_ON_SEASON|
|mobilityAccessibleException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleParkingException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleParkingException|UNDER_CONSTRUCTION|
|mobilityAccessibleParkingException|DEPENDENT_ON_SEASON|
|mobilityAccessibleParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessiblePoolException|EXCEPTION_UNSPECIFIED|
|mobilityAccessiblePoolException|UNDER_CONSTRUCTION|
|mobilityAccessiblePoolException|DEPENDENT_ON_SEASON|
|mobilityAccessiblePoolException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Activities">Activities</h2>
<!-- backwards compatibility -->
<a id="schemaactivities"></a>
<a id="schema_Activities"></a>
<a id="tocSactivities"></a>
<a id="tocsactivities"></a>

```json
{
  "beachAccess": true,
  "beachAccessException": "EXCEPTION_UNSPECIFIED",
  "beachFront": true,
  "beachFrontException": "EXCEPTION_UNSPECIFIED",
  "bicycleRental": true,
  "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
  "boutiqueStores": true,
  "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
  "casino": true,
  "casinoException": "EXCEPTION_UNSPECIFIED",
  "freeBicycleRental": true,
  "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
  "freeWatercraftRental": true,
  "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
  "gameRoom": true,
  "gameRoomException": "EXCEPTION_UNSPECIFIED",
  "golf": true,
  "golfException": "EXCEPTION_UNSPECIFIED",
  "horsebackRiding": true,
  "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
  "nightclub": true,
  "nightclubException": "EXCEPTION_UNSPECIFIED",
  "privateBeach": true,
  "privateBeachException": "EXCEPTION_UNSPECIFIED",
  "scuba": true,
  "scubaException": "EXCEPTION_UNSPECIFIED",
  "snorkeling": true,
  "snorkelingException": "EXCEPTION_UNSPECIFIED",
  "tennis": true,
  "tennisException": "EXCEPTION_UNSPECIFIED",
  "waterSkiing": true,
  "waterSkiingException": "EXCEPTION_UNSPECIFIED",
  "watercraftRental": true,
  "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
}
```

Amenities and features related to leisure and play.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beachAccess|boolean|false|none|Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).|
|beachAccessException|string|false|none|Beach access exception.|
|beachFront|boolean|false|none|Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.|
|beachFrontException|string|false|none|Beach front exception.|
|bicycleRental|boolean|false|none|Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.|
|bicycleRentalException|string|false|none|Bicycle rental exception.|
|boutiqueStores|boolean|false|none|Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.|
|boutiqueStoresException|string|false|none|Boutique stores exception.|
|casino|boolean|false|none|Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.|
|casinoException|string|false|none|Casino exception.|
|freeBicycleRental|boolean|false|none|Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.|
|freeBicycleRentalException|string|false|none|Free bicycle rental exception.|
|freeWatercraftRental|boolean|false|none|Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.|
|freeWatercraftRentalException|string|false|none|Free Watercraft rental exception.|
|gameRoom|boolean|false|none|Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.|
|gameRoomException|string|false|none|Game room exception.|
|golf|boolean|false|none|Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.|
|golfException|string|false|none|Golf exception.|
|horsebackRiding|boolean|false|none|Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.|
|horsebackRidingException|string|false|none|Horseback riding exception.|
|nightclub|boolean|false|none|Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.|
|nightclubException|string|false|none|Nightclub exception.|
|privateBeach|boolean|false|none|Private beach. The beach which is in close proximity to the hotel is open only to guests.|
|privateBeachException|string|false|none|Private beach exception.|
|scuba|boolean|false|none|Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.|
|scubaException|string|false|none|Scuba exception.|
|snorkeling|boolean|false|none|Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.|
|snorkelingException|string|false|none|Snorkeling exception.|
|tennis|boolean|false|none|Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.|
|tennisException|string|false|none|Tennis exception.|
|waterSkiing|boolean|false|none|Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.|
|waterSkiingException|string|false|none|Water skiing exception.|
|watercraftRental|boolean|false|none|Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).|
|watercraftRentalException|string|false|none|Watercraft rental exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|beachAccessException|EXCEPTION_UNSPECIFIED|
|beachAccessException|UNDER_CONSTRUCTION|
|beachAccessException|DEPENDENT_ON_SEASON|
|beachAccessException|DEPENDENT_ON_DAY_OF_WEEK|
|beachFrontException|EXCEPTION_UNSPECIFIED|
|beachFrontException|UNDER_CONSTRUCTION|
|beachFrontException|DEPENDENT_ON_SEASON|
|beachFrontException|DEPENDENT_ON_DAY_OF_WEEK|
|bicycleRentalException|EXCEPTION_UNSPECIFIED|
|bicycleRentalException|UNDER_CONSTRUCTION|
|bicycleRentalException|DEPENDENT_ON_SEASON|
|bicycleRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|boutiqueStoresException|EXCEPTION_UNSPECIFIED|
|boutiqueStoresException|UNDER_CONSTRUCTION|
|boutiqueStoresException|DEPENDENT_ON_SEASON|
|boutiqueStoresException|DEPENDENT_ON_DAY_OF_WEEK|
|casinoException|EXCEPTION_UNSPECIFIED|
|casinoException|UNDER_CONSTRUCTION|
|casinoException|DEPENDENT_ON_SEASON|
|casinoException|DEPENDENT_ON_DAY_OF_WEEK|
|freeBicycleRentalException|EXCEPTION_UNSPECIFIED|
|freeBicycleRentalException|UNDER_CONSTRUCTION|
|freeBicycleRentalException|DEPENDENT_ON_SEASON|
|freeBicycleRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|freeWatercraftRentalException|EXCEPTION_UNSPECIFIED|
|freeWatercraftRentalException|UNDER_CONSTRUCTION|
|freeWatercraftRentalException|DEPENDENT_ON_SEASON|
|freeWatercraftRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|gameRoomException|EXCEPTION_UNSPECIFIED|
|gameRoomException|UNDER_CONSTRUCTION|
|gameRoomException|DEPENDENT_ON_SEASON|
|gameRoomException|DEPENDENT_ON_DAY_OF_WEEK|
|golfException|EXCEPTION_UNSPECIFIED|
|golfException|UNDER_CONSTRUCTION|
|golfException|DEPENDENT_ON_SEASON|
|golfException|DEPENDENT_ON_DAY_OF_WEEK|
|horsebackRidingException|EXCEPTION_UNSPECIFIED|
|horsebackRidingException|UNDER_CONSTRUCTION|
|horsebackRidingException|DEPENDENT_ON_SEASON|
|horsebackRidingException|DEPENDENT_ON_DAY_OF_WEEK|
|nightclubException|EXCEPTION_UNSPECIFIED|
|nightclubException|UNDER_CONSTRUCTION|
|nightclubException|DEPENDENT_ON_SEASON|
|nightclubException|DEPENDENT_ON_DAY_OF_WEEK|
|privateBeachException|EXCEPTION_UNSPECIFIED|
|privateBeachException|UNDER_CONSTRUCTION|
|privateBeachException|DEPENDENT_ON_SEASON|
|privateBeachException|DEPENDENT_ON_DAY_OF_WEEK|
|scubaException|EXCEPTION_UNSPECIFIED|
|scubaException|UNDER_CONSTRUCTION|
|scubaException|DEPENDENT_ON_SEASON|
|scubaException|DEPENDENT_ON_DAY_OF_WEEK|
|snorkelingException|EXCEPTION_UNSPECIFIED|
|snorkelingException|UNDER_CONSTRUCTION|
|snorkelingException|DEPENDENT_ON_SEASON|
|snorkelingException|DEPENDENT_ON_DAY_OF_WEEK|
|tennisException|EXCEPTION_UNSPECIFIED|
|tennisException|UNDER_CONSTRUCTION|
|tennisException|DEPENDENT_ON_SEASON|
|tennisException|DEPENDENT_ON_DAY_OF_WEEK|
|waterSkiingException|EXCEPTION_UNSPECIFIED|
|waterSkiingException|UNDER_CONSTRUCTION|
|waterSkiingException|DEPENDENT_ON_SEASON|
|waterSkiingException|DEPENDENT_ON_DAY_OF_WEEK|
|watercraftRentalException|EXCEPTION_UNSPECIFIED|
|watercraftRentalException|UNDER_CONSTRUCTION|
|watercraftRentalException|DEPENDENT_ON_SEASON|
|watercraftRentalException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Business">Business</h2>
<!-- backwards compatibility -->
<a id="schemabusiness"></a>
<a id="schema_Business"></a>
<a id="tocSbusiness"></a>
<a id="tocsbusiness"></a>

```json
{
  "businessCenter": true,
  "businessCenterException": "EXCEPTION_UNSPECIFIED",
  "meetingRooms": true,
  "meetingRoomsCount": 0,
  "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
  "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
}
```

Features of the property of specific interest to the business traveler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessCenter|boolean|false|none|Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room.|
|businessCenterException|string|false|none|Business center exception.|
|meetingRooms|boolean|false|none|Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms.|
|meetingRoomsCount|integer(int32)|false|none|Meeting rooms count. The number of meeting rooms at the property.|
|meetingRoomsCountException|string|false|none|Meeting rooms count exception.|
|meetingRoomsException|string|false|none|Meeting rooms exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessCenterException|EXCEPTION_UNSPECIFIED|
|businessCenterException|UNDER_CONSTRUCTION|
|businessCenterException|DEPENDENT_ON_SEASON|
|businessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|meetingRoomsCountException|EXCEPTION_UNSPECIFIED|
|meetingRoomsCountException|UNDER_CONSTRUCTION|
|meetingRoomsCountException|DEPENDENT_ON_SEASON|
|meetingRoomsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|meetingRoomsException|EXCEPTION_UNSPECIFIED|
|meetingRoomsException|UNDER_CONSTRUCTION|
|meetingRoomsException|DEPENDENT_ON_SEASON|
|meetingRoomsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Connectivity">Connectivity</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivity"></a>
<a id="schema_Connectivity"></a>
<a id="tocSconnectivity"></a>
<a id="tocsconnectivity"></a>

```json
{
  "freeWifi": true,
  "freeWifiException": "EXCEPTION_UNSPECIFIED",
  "publicAreaWifiAvailable": true,
  "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
  "publicInternetTerminal": true,
  "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
  "wifiAvailable": true,
  "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

The ways in which the property provides guests with the ability to access the internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeWifi|boolean|false|none|Free wifi. The hotel offers guests wifi for free.|
|freeWifiException|string|false|none|Free wifi exception.|
|publicAreaWifiAvailable|boolean|false|none|Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee.|
|publicAreaWifiAvailableException|string|false|none|Public area wifi available exception.|
|publicInternetTerminal|boolean|false|none|Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet.|
|publicInternetTerminalException|string|false|none|Public internet terminal exception.|
|wifiAvailable|boolean|false|none|Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee.|
|wifiAvailableException|string|false|none|Wifi available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|freeWifiException|EXCEPTION_UNSPECIFIED|
|freeWifiException|UNDER_CONSTRUCTION|
|freeWifiException|DEPENDENT_ON_SEASON|
|freeWifiException|DEPENDENT_ON_DAY_OF_WEEK|
|publicAreaWifiAvailableException|EXCEPTION_UNSPECIFIED|
|publicAreaWifiAvailableException|UNDER_CONSTRUCTION|
|publicAreaWifiAvailableException|DEPENDENT_ON_SEASON|
|publicAreaWifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|publicInternetTerminalException|EXCEPTION_UNSPECIFIED|
|publicInternetTerminalException|UNDER_CONSTRUCTION|
|publicInternetTerminalException|DEPENDENT_ON_SEASON|
|publicInternetTerminalException|DEPENDENT_ON_DAY_OF_WEEK|
|wifiAvailableException|EXCEPTION_UNSPECIFIED|
|wifiAvailableException|UNDER_CONSTRUCTION|
|wifiAvailableException|DEPENDENT_ON_SEASON|
|wifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_EcoCertification">EcoCertification</h2>
<!-- backwards compatibility -->
<a id="schemaecocertification"></a>
<a id="schema_EcoCertification"></a>
<a id="tocSecocertification"></a>
<a id="tocsecocertification"></a>

```json
{
  "awarded": true,
  "awardedException": "EXCEPTION_UNSPECIFIED",
  "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
}
```

An eco certificate awarded to the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awarded|boolean|false|none|Whether the eco certificate was awarded or not.|
|awardedException|string|false|none|Awarded exception.|
|ecoCertificate|string|false|none|Required. The eco certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|awardedException|EXCEPTION_UNSPECIFIED|
|awardedException|UNDER_CONSTRUCTION|
|awardedException|DEPENDENT_ON_SEASON|
|awardedException|DEPENDENT_ON_DAY_OF_WEEK|
|ecoCertificate|ECO_CERTIFICATE_UNSPECIFIED|
|ecoCertificate|ISO14001|
|ecoCertificate|ISO50001|
|ecoCertificate|ASIAN_ECOTOURISM|
|ecoCertificate|BIOSPHERE_RESPOSNIBLE_TOURISM|
|ecoCertificate|BUREAU_VERITAS|
|ecoCertificate|CONTROL_UNION|
|ecoCertificate|EARTHCHECK|
|ecoCertificate|ECO_CERTIFICATION_MALTA|
|ecoCertificate|ECOTOURISM_AUSTRALIAS_ECO|
|ecoCertificate|GREAT_GREEN_DEAL|
|ecoCertificate|GREEN_GLOBE|
|ecoCertificate|GREEN_GROWTH2050|
|ecoCertificate|GREEN_KEY|
|ecoCertificate|GREEN_KEY_ECO_RATING|
|ecoCertificate|GREEN_SEAL|
|ecoCertificate|GREEN_STAR|
|ecoCertificate|GREEN_TOURISM_ACTIVE|
|ecoCertificate|HILTON_LIGHTSTAY|
|ecoCertificate|HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY|
|ecoCertificate|HOTELES_MAS_VERDES|
|ecoCertificate|NORDIC_SWAN_ECOLABEL|
|ecoCertificate|PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM|
|ecoCertificate|SUSTAINABLE_TRAVEL_IRELAND|
|ecoCertificate|TOF_TIGERS_INITITIVES_PUG|
|ecoCertificate|TRAVELIFE|
|ecoCertificate|UNITED_CERTIFICATION_SYSTEMS_LIMITED|
|ecoCertificate|VIREO_SRL|

<h2 id="tocS_EnergyEfficiency">EnergyEfficiency</h2>
<!-- backwards compatibility -->
<a id="schemaenergyefficiency"></a>
<a id="schema_EnergyEfficiency"></a>
<a id="tocSenergyefficiency"></a>
<a id="tocsenergyefficiency"></a>

```json
{
  "carbonFreeEnergySources": true,
  "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
  "energyConservationProgram": true,
  "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
  "energyEfficientHeatingAndCoolingSystems": true,
  "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
  "energyEfficientLighting": true,
  "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
  "energySavingThermostats": true,
  "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
  "greenBuildingDesign": true,
  "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
  "independentOrganizationAuditsEnergyUse": true,
  "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
}
```

Energy efficiency practices implemented at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carbonFreeEnergySources|boolean|false|none|Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin).|
|carbonFreeEnergySourcesException|string|false|none|Carbon free energy sources exception.|
|energyConservationProgram|boolean|false|none|Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications.|
|energyConservationProgramException|string|false|none|Energy conservation program exception.|
|energyEfficientHeatingAndCoolingSystems|boolean|false|none|Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas.|
|energyEfficientHeatingAndCoolingSystemsException|string|false|none|Energy efficient heating and cooling systems exception.|
|energyEfficientLighting|boolean|false|none|Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs.|
|energyEfficientLightingException|string|false|none|Energy efficient lighting exception.|
|energySavingThermostats|boolean|false|none|Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied.|
|energySavingThermostatsException|string|false|none|Energy saving thermostats exception.|
|greenBuildingDesign|boolean|false|read-only|Output only. Green building design. True if BREEAM-* or LEED-* certified.|
|greenBuildingDesignException|string|false|read-only|Output only. Green building design exception.|
|independentOrganizationAuditsEnergyUse|boolean|false|none|Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits).|
|independentOrganizationAuditsEnergyUseException|string|false|none|Independent organization audits energy use exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|carbonFreeEnergySourcesException|EXCEPTION_UNSPECIFIED|
|carbonFreeEnergySourcesException|UNDER_CONSTRUCTION|
|carbonFreeEnergySourcesException|DEPENDENT_ON_SEASON|
|carbonFreeEnergySourcesException|DEPENDENT_ON_DAY_OF_WEEK|
|energyConservationProgramException|EXCEPTION_UNSPECIFIED|
|energyConservationProgramException|UNDER_CONSTRUCTION|
|energyConservationProgramException|DEPENDENT_ON_SEASON|
|energyConservationProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|energyEfficientHeatingAndCoolingSystemsException|EXCEPTION_UNSPECIFIED|
|energyEfficientHeatingAndCoolingSystemsException|UNDER_CONSTRUCTION|
|energyEfficientHeatingAndCoolingSystemsException|DEPENDENT_ON_SEASON|
|energyEfficientHeatingAndCoolingSystemsException|DEPENDENT_ON_DAY_OF_WEEK|
|energyEfficientLightingException|EXCEPTION_UNSPECIFIED|
|energyEfficientLightingException|UNDER_CONSTRUCTION|
|energyEfficientLightingException|DEPENDENT_ON_SEASON|
|energyEfficientLightingException|DEPENDENT_ON_DAY_OF_WEEK|
|energySavingThermostatsException|EXCEPTION_UNSPECIFIED|
|energySavingThermostatsException|UNDER_CONSTRUCTION|
|energySavingThermostatsException|DEPENDENT_ON_SEASON|
|energySavingThermostatsException|DEPENDENT_ON_DAY_OF_WEEK|
|greenBuildingDesignException|EXCEPTION_UNSPECIFIED|
|greenBuildingDesignException|UNDER_CONSTRUCTION|
|greenBuildingDesignException|DEPENDENT_ON_SEASON|
|greenBuildingDesignException|DEPENDENT_ON_DAY_OF_WEEK|
|independentOrganizationAuditsEnergyUseException|EXCEPTION_UNSPECIFIED|
|independentOrganizationAuditsEnergyUseException|UNDER_CONSTRUCTION|
|independentOrganizationAuditsEnergyUseException|DEPENDENT_ON_SEASON|
|independentOrganizationAuditsEnergyUseException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_EnhancedCleaning">EnhancedCleaning</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedcleaning"></a>
<a id="schema_EnhancedCleaning"></a>
<a id="tocSenhancedcleaning"></a>
<a id="tocsenhancedcleaning"></a>

```json
{
  "commercialGradeDisinfectantCleaning": true,
  "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
  "commonAreasEnhancedCleaning": true,
  "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
  "employeesTrainedCleaningProcedures": true,
  "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
  "employeesTrainedThoroughHandWashing": true,
  "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
  "employeesWearProtectiveEquipment": true,
  "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
  "guestRoomsEnhancedCleaning": true,
  "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
}
```

Enhanced cleaning measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commercialGradeDisinfectantCleaning|boolean|false|none|Commercial-grade disinfectant used to clean the property.|
|commercialGradeDisinfectantCleaningException|string|false|none|Commercial grade disinfectant cleaning exception.|
|commonAreasEnhancedCleaning|boolean|false|none|Enhanced cleaning of common areas.|
|commonAreasEnhancedCleaningException|string|false|none|Common areas enhanced cleaning exception.|
|employeesTrainedCleaningProcedures|boolean|false|none|Employees trained in COVID-19 cleaning procedures.|
|employeesTrainedCleaningProceduresException|string|false|none|Employees trained cleaning procedures exception.|
|employeesTrainedThoroughHandWashing|boolean|false|none|Employees trained in thorough hand-washing.|
|employeesTrainedThoroughHandWashingException|string|false|none|Employees trained thorough hand washing exception.|
|employeesWearProtectiveEquipment|boolean|false|none|Employees wear masks, face shields, and/or gloves.|
|employeesWearProtectiveEquipmentException|string|false|none|Employees wear protective equipment exception.|
|guestRoomsEnhancedCleaning|boolean|false|none|Enhanced cleaning of guest rooms.|
|guestRoomsEnhancedCleaningException|string|false|none|Guest rooms enhanced cleaning exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commercialGradeDisinfectantCleaningException|EXCEPTION_UNSPECIFIED|
|commercialGradeDisinfectantCleaningException|UNDER_CONSTRUCTION|
|commercialGradeDisinfectantCleaningException|DEPENDENT_ON_SEASON|
|commercialGradeDisinfectantCleaningException|DEPENDENT_ON_DAY_OF_WEEK|
|commonAreasEnhancedCleaningException|EXCEPTION_UNSPECIFIED|
|commonAreasEnhancedCleaningException|UNDER_CONSTRUCTION|
|commonAreasEnhancedCleaningException|DEPENDENT_ON_SEASON|
|commonAreasEnhancedCleaningException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesTrainedCleaningProceduresException|EXCEPTION_UNSPECIFIED|
|employeesTrainedCleaningProceduresException|UNDER_CONSTRUCTION|
|employeesTrainedCleaningProceduresException|DEPENDENT_ON_SEASON|
|employeesTrainedCleaningProceduresException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesTrainedThoroughHandWashingException|EXCEPTION_UNSPECIFIED|
|employeesTrainedThoroughHandWashingException|UNDER_CONSTRUCTION|
|employeesTrainedThoroughHandWashingException|DEPENDENT_ON_SEASON|
|employeesTrainedThoroughHandWashingException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesWearProtectiveEquipmentException|EXCEPTION_UNSPECIFIED|
|employeesWearProtectiveEquipmentException|UNDER_CONSTRUCTION|
|employeesWearProtectiveEquipmentException|DEPENDENT_ON_SEASON|
|employeesWearProtectiveEquipmentException|DEPENDENT_ON_DAY_OF_WEEK|
|guestRoomsEnhancedCleaningException|EXCEPTION_UNSPECIFIED|
|guestRoomsEnhancedCleaningException|UNDER_CONSTRUCTION|
|guestRoomsEnhancedCleaningException|DEPENDENT_ON_SEASON|
|guestRoomsEnhancedCleaningException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Families">Families</h2>
<!-- backwards compatibility -->
<a id="schemafamilies"></a>
<a id="schema_Families"></a>
<a id="tocSfamilies"></a>
<a id="tocsfamilies"></a>

```json
{
  "babysitting": true,
  "babysittingException": "EXCEPTION_UNSPECIFIED",
  "kidsActivities": true,
  "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
  "kidsClub": true,
  "kidsClubException": "EXCEPTION_UNSPECIFIED",
  "kidsFriendly": true,
  "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
}
```

Services and amenities for families and young guests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|babysitting|boolean|false|none|Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee.|
|babysittingException|string|false|none|Babysitting exception.|
|kidsActivities|boolean|false|none|Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.|
|kidsActivitiesException|string|false|none|Kids activities exception.|
|kidsClub|boolean|false|none|Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.|
|kidsClubException|string|false|none|Kids club exception.|
|kidsFriendly|boolean|false|none|Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids' club, babysitting service, or suitable place to play on premises.|
|kidsFriendlyException|string|false|none|Kids friendly exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|babysittingException|EXCEPTION_UNSPECIFIED|
|babysittingException|UNDER_CONSTRUCTION|
|babysittingException|DEPENDENT_ON_SEASON|
|babysittingException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsActivitiesException|EXCEPTION_UNSPECIFIED|
|kidsActivitiesException|UNDER_CONSTRUCTION|
|kidsActivitiesException|DEPENDENT_ON_SEASON|
|kidsActivitiesException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsClubException|EXCEPTION_UNSPECIFIED|
|kidsClubException|UNDER_CONSTRUCTION|
|kidsClubException|DEPENDENT_ON_SEASON|
|kidsClubException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsFriendlyException|EXCEPTION_UNSPECIFIED|
|kidsFriendlyException|UNDER_CONSTRUCTION|
|kidsFriendlyException|DEPENDENT_ON_SEASON|
|kidsFriendlyException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_FoodAndDrink">FoodAndDrink</h2>
<!-- backwards compatibility -->
<a id="schemafoodanddrink"></a>
<a id="schema_FoodAndDrink"></a>
<a id="tocSfoodanddrink"></a>
<a id="tocsfoodanddrink"></a>

```json
{
  "bar": true,
  "barException": "EXCEPTION_UNSPECIFIED",
  "breakfastAvailable": true,
  "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
  "breakfastBuffet": true,
  "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
  "buffet": true,
  "buffetException": "EXCEPTION_UNSPECIFIED",
  "dinnerBuffet": true,
  "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
  "freeBreakfast": true,
  "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
  "restaurant": true,
  "restaurantException": "EXCEPTION_UNSPECIFIED",
  "restaurantsCount": 0,
  "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
  "roomService": true,
  "roomServiceException": "EXCEPTION_UNSPECIFIED",
  "tableService": true,
  "tableServiceException": "EXCEPTION_UNSPECIFIED",
  "twentyFourHourRoomService": true,
  "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
  "vendingMachine": true,
  "vendingMachineException": "EXCEPTION_UNSPECIFIED"
}
```

Meals, snacks, and beverages available at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bar|boolean|false|none|Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub.|
|barException|string|false|none|Bar exception.|
|breakfastAvailable|boolean|false|none|Breakfast available. The morning meal is offered to all guests. Can be free or for a fee.|
|breakfastAvailableException|string|false|none|Breakfast available exception.|
|breakfastBuffet|boolean|false|none|Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.|
|breakfastBuffetException|string|false|none|Breakfast buffet exception.|
|buffet|boolean|false|none|Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient.|
|buffetException|string|false|none|Buffet exception.|
|dinnerBuffet|boolean|false|none|Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.|
|dinnerBuffetException|string|false|none|Dinner buffet exception.|
|freeBreakfast|boolean|false|none|Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages.|
|freeBreakfastException|string|false|none|Free breakfast exception.|
|restaurant|boolean|false|none|Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant.|
|restaurantException|string|false|none|Restaurant exception.|
|restaurantsCount|integer(int32)|false|none|Restaurants count. The number of restaurants at the hotel.|
|restaurantsCountException|string|false|none|Restaurants count exception.|
|roomService|boolean|false|none|Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc).|
|roomServiceException|string|false|none|Room service exception.|
|tableService|boolean|false|none|Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant.|
|tableServiceException|string|false|none|Table service exception.|
|twentyFourHourRoomService|boolean|false|none|24hr room service. Room service is available 24 hours a day.|
|twentyFourHourRoomServiceException|string|false|none|24hr room service exception.|
|vendingMachine|boolean|false|none|Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards.|
|vendingMachineException|string|false|none|Vending machine exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|barException|EXCEPTION_UNSPECIFIED|
|barException|UNDER_CONSTRUCTION|
|barException|DEPENDENT_ON_SEASON|
|barException|DEPENDENT_ON_DAY_OF_WEEK|
|breakfastAvailableException|EXCEPTION_UNSPECIFIED|
|breakfastAvailableException|UNDER_CONSTRUCTION|
|breakfastAvailableException|DEPENDENT_ON_SEASON|
|breakfastAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|breakfastBuffetException|EXCEPTION_UNSPECIFIED|
|breakfastBuffetException|UNDER_CONSTRUCTION|
|breakfastBuffetException|DEPENDENT_ON_SEASON|
|breakfastBuffetException|DEPENDENT_ON_DAY_OF_WEEK|
|buffetException|EXCEPTION_UNSPECIFIED|
|buffetException|UNDER_CONSTRUCTION|
|buffetException|DEPENDENT_ON_SEASON|
|buffetException|DEPENDENT_ON_DAY_OF_WEEK|
|dinnerBuffetException|EXCEPTION_UNSPECIFIED|
|dinnerBuffetException|UNDER_CONSTRUCTION|
|dinnerBuffetException|DEPENDENT_ON_SEASON|
|dinnerBuffetException|DEPENDENT_ON_DAY_OF_WEEK|
|freeBreakfastException|EXCEPTION_UNSPECIFIED|
|freeBreakfastException|UNDER_CONSTRUCTION|
|freeBreakfastException|DEPENDENT_ON_SEASON|
|freeBreakfastException|DEPENDENT_ON_DAY_OF_WEEK|
|restaurantException|EXCEPTION_UNSPECIFIED|
|restaurantException|UNDER_CONSTRUCTION|
|restaurantException|DEPENDENT_ON_SEASON|
|restaurantException|DEPENDENT_ON_DAY_OF_WEEK|
|restaurantsCountException|EXCEPTION_UNSPECIFIED|
|restaurantsCountException|UNDER_CONSTRUCTION|
|restaurantsCountException|DEPENDENT_ON_SEASON|
|restaurantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|roomServiceException|EXCEPTION_UNSPECIFIED|
|roomServiceException|UNDER_CONSTRUCTION|
|roomServiceException|DEPENDENT_ON_SEASON|
|roomServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|tableServiceException|EXCEPTION_UNSPECIFIED|
|tableServiceException|UNDER_CONSTRUCTION|
|tableServiceException|DEPENDENT_ON_SEASON|
|tableServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|twentyFourHourRoomServiceException|EXCEPTION_UNSPECIFIED|
|twentyFourHourRoomServiceException|UNDER_CONSTRUCTION|
|twentyFourHourRoomServiceException|DEPENDENT_ON_SEASON|
|twentyFourHourRoomServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|vendingMachineException|EXCEPTION_UNSPECIFIED|
|vendingMachineException|UNDER_CONSTRUCTION|
|vendingMachineException|DEPENDENT_ON_SEASON|
|vendingMachineException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_GetGoogleUpdatedLodgingResponse">GetGoogleUpdatedLodgingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgoogleupdatedlodgingresponse"></a>
<a id="schema_GetGoogleUpdatedLodgingResponse"></a>
<a id="tocSgetgoogleupdatedlodgingresponse"></a>
<a id="tocsgetgoogleupdatedlodgingresponse"></a>

```json
{
  "diffMask": "string",
  "lodging": {
    "accessibility": {
      "mobilityAccessible": true,
      "mobilityAccessibleElevator": true,
      "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleParking": true,
      "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessiblePool": true,
      "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "activities": {
      "beachAccess": true,
      "beachAccessException": "EXCEPTION_UNSPECIFIED",
      "beachFront": true,
      "beachFrontException": "EXCEPTION_UNSPECIFIED",
      "bicycleRental": true,
      "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "boutiqueStores": true,
      "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
      "casino": true,
      "casinoException": "EXCEPTION_UNSPECIFIED",
      "freeBicycleRental": true,
      "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "freeWatercraftRental": true,
      "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
      "gameRoom": true,
      "gameRoomException": "EXCEPTION_UNSPECIFIED",
      "golf": true,
      "golfException": "EXCEPTION_UNSPECIFIED",
      "horsebackRiding": true,
      "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
      "nightclub": true,
      "nightclubException": "EXCEPTION_UNSPECIFIED",
      "privateBeach": true,
      "privateBeachException": "EXCEPTION_UNSPECIFIED",
      "scuba": true,
      "scubaException": "EXCEPTION_UNSPECIFIED",
      "snorkeling": true,
      "snorkelingException": "EXCEPTION_UNSPECIFIED",
      "tennis": true,
      "tennisException": "EXCEPTION_UNSPECIFIED",
      "waterSkiing": true,
      "waterSkiingException": "EXCEPTION_UNSPECIFIED",
      "watercraftRental": true,
      "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
    },
    "allUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "business": {
      "businessCenter": true,
      "businessCenterException": "EXCEPTION_UNSPECIFIED",
      "meetingRooms": true,
      "meetingRoomsCount": 0,
      "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
      "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
    },
    "commonLivingArea": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "connectivity": {
      "freeWifi": true,
      "freeWifiException": "EXCEPTION_UNSPECIFIED",
      "publicAreaWifiAvailable": true,
      "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "publicInternetTerminal": true,
      "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
      "wifiAvailable": true,
      "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "families": {
      "babysitting": true,
      "babysittingException": "EXCEPTION_UNSPECIFIED",
      "kidsActivities": true,
      "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
      "kidsClub": true,
      "kidsClubException": "EXCEPTION_UNSPECIFIED",
      "kidsFriendly": true,
      "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
    },
    "foodAndDrink": {
      "bar": true,
      "barException": "EXCEPTION_UNSPECIFIED",
      "breakfastAvailable": true,
      "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
      "breakfastBuffet": true,
      "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
      "buffet": true,
      "buffetException": "EXCEPTION_UNSPECIFIED",
      "dinnerBuffet": true,
      "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
      "freeBreakfast": true,
      "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
      "restaurant": true,
      "restaurantException": "EXCEPTION_UNSPECIFIED",
      "restaurantsCount": 0,
      "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
      "roomService": true,
      "roomServiceException": "EXCEPTION_UNSPECIFIED",
      "tableService": true,
      "tableServiceException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourRoomService": true,
      "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
      "vendingMachine": true,
      "vendingMachineException": "EXCEPTION_UNSPECIFIED"
    },
    "guestUnits": [
      {
        "codes": [
          "string"
        ],
        "features": {
          "bungalowOrVilla": true,
          "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
          "connectingUnitAvailable": true,
          "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
          "executiveFloor": true,
          "executiveFloorException": "EXCEPTION_UNSPECIFIED",
          "maxAdultOccupantsCount": 0,
          "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxChildOccupantsCount": 0,
          "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxOccupantsCount": 0,
          "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "privateHome": true,
          "privateHomeException": "EXCEPTION_UNSPECIFIED",
          "suite": true,
          "suiteException": "EXCEPTION_UNSPECIFIED",
          "tier": "UNIT_TIER_UNSPECIFIED",
          "tierException": "EXCEPTION_UNSPECIFIED",
          "totalLivingAreas": {
            "accessibility": {
              "adaCompliantUnit": true,
              "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleDoorbell": true,
              "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleFireAlarm": true,
              "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleUnit": true,
              "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleBathtub": true,
              "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleShower": true,
              "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleToilet": true,
              "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleUnit": true,
              "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
            },
            "eating": {
              "coffeeMaker": true,
              "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
              "cookware": true,
              "cookwareException": "EXCEPTION_UNSPECIFIED",
              "dishwasher": true,
              "dishwasherException": "EXCEPTION_UNSPECIFIED",
              "indoorGrill": true,
              "indoorGrillException": "EXCEPTION_UNSPECIFIED",
              "kettle": true,
              "kettleException": "EXCEPTION_UNSPECIFIED",
              "kitchenAvailable": true,
              "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
              "microwave": true,
              "microwaveException": "EXCEPTION_UNSPECIFIED",
              "minibar": true,
              "minibarException": "EXCEPTION_UNSPECIFIED",
              "outdoorGrill": true,
              "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
              "oven": true,
              "ovenException": "EXCEPTION_UNSPECIFIED",
              "refrigerator": true,
              "refrigeratorException": "EXCEPTION_UNSPECIFIED",
              "sink": true,
              "sinkException": "EXCEPTION_UNSPECIFIED",
              "snackbar": true,
              "snackbarException": "EXCEPTION_UNSPECIFIED",
              "stove": true,
              "stoveException": "EXCEPTION_UNSPECIFIED",
              "teaStation": true,
              "teaStationException": "EXCEPTION_UNSPECIFIED",
              "toaster": true,
              "toasterException": "EXCEPTION_UNSPECIFIED"
            },
            "features": {
              "airConditioning": true,
              "airConditioningException": "EXCEPTION_UNSPECIFIED",
              "bathtub": true,
              "bathtubException": "EXCEPTION_UNSPECIFIED",
              "bidet": true,
              "bidetException": "EXCEPTION_UNSPECIFIED",
              "dryer": true,
              "dryerException": "EXCEPTION_UNSPECIFIED",
              "electronicRoomKey": true,
              "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
              "fireplace": true,
              "fireplaceException": "EXCEPTION_UNSPECIFIED",
              "hairdryer": true,
              "hairdryerException": "EXCEPTION_UNSPECIFIED",
              "heating": true,
              "heatingException": "EXCEPTION_UNSPECIFIED",
              "inunitSafe": true,
              "inunitSafeException": "EXCEPTION_UNSPECIFIED",
              "inunitWifiAvailable": true,
              "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
              "ironingEquipment": true,
              "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
              "payPerViewMovies": true,
              "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
              "privateBathroom": true,
              "privateBathroomException": "EXCEPTION_UNSPECIFIED",
              "shower": true,
              "showerException": "EXCEPTION_UNSPECIFIED",
              "toilet": true,
              "toiletException": "EXCEPTION_UNSPECIFIED",
              "tv": true,
              "tvCasting": true,
              "tvCastingException": "EXCEPTION_UNSPECIFIED",
              "tvException": "EXCEPTION_UNSPECIFIED",
              "tvStreaming": true,
              "tvStreamingException": "EXCEPTION_UNSPECIFIED",
              "universalPowerAdapters": true,
              "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
              "washer": true,
              "washerException": "EXCEPTION_UNSPECIFIED"
            },
            "layout": {
              "balcony": true,
              "balconyException": "EXCEPTION_UNSPECIFIED",
              "livingAreaSqMeters": 0,
              "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
              "loft": true,
              "loftException": "EXCEPTION_UNSPECIFIED",
              "nonSmoking": true,
              "nonSmokingException": "EXCEPTION_UNSPECIFIED",
              "patio": true,
              "patioException": "EXCEPTION_UNSPECIFIED",
              "stairs": true,
              "stairsException": "EXCEPTION_UNSPECIFIED"
            },
            "sleeping": {
              "bedsCount": 0,
              "bedsCountException": "EXCEPTION_UNSPECIFIED",
              "bunkBedsCount": 0,
              "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
              "cribsCount": 0,
              "cribsCountException": "EXCEPTION_UNSPECIFIED",
              "doubleBedsCount": 0,
              "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
              "featherPillows": true,
              "featherPillowsException": "EXCEPTION_UNSPECIFIED",
              "hypoallergenicBedding": true,
              "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
              "kingBedsCount": 0,
              "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
              "memoryFoamPillows": true,
              "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
              "otherBedsCount": 0,
              "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
              "queenBedsCount": 0,
              "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
              "rollAwayBedsCount": 0,
              "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
              "singleOrTwinBedsCount": 0,
              "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
              "sofaBedsCount": 0,
              "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
              "syntheticPillows": true,
              "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
            }
          },
          "views": {
            "beachView": true,
            "beachViewException": "EXCEPTION_UNSPECIFIED",
            "cityView": true,
            "cityViewException": "EXCEPTION_UNSPECIFIED",
            "gardenView": true,
            "gardenViewException": "EXCEPTION_UNSPECIFIED",
            "lakeView": true,
            "lakeViewException": "EXCEPTION_UNSPECIFIED",
            "landmarkView": true,
            "landmarkViewException": "EXCEPTION_UNSPECIFIED",
            "oceanView": true,
            "oceanViewException": "EXCEPTION_UNSPECIFIED",
            "poolView": true,
            "poolViewException": "EXCEPTION_UNSPECIFIED",
            "valleyView": true,
            "valleyViewException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "label": "string"
      }
    ],
    "healthAndSafety": {
      "enhancedCleaning": {
        "commercialGradeDisinfectantCleaning": true,
        "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
        "commonAreasEnhancedCleaning": true,
        "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedCleaningProcedures": true,
        "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedThoroughHandWashing": true,
        "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
        "employeesWearProtectiveEquipment": true,
        "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
        "guestRoomsEnhancedCleaning": true,
        "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
      },
      "increasedFoodSafety": {
        "diningAreasAdditionalSanitation": true,
        "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
        "disposableFlatware": true,
        "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
        "foodPreparationAndServingAdditionalSafety": true,
        "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
        "individualPackagedMeals": true,
        "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
        "singleUseFoodMenus": true,
        "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
      },
      "minimizedContact": {
        "contactlessCheckinCheckout": true,
        "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
        "digitalGuestRoomKeys": true,
        "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
        "housekeepingScheduledRequestOnly": true,
        "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsCommonAreas": true,
        "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsGuestRooms": true,
        "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
        "plasticKeycardsDisinfected": true,
        "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
        "roomBookingsBuffer": true,
        "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
      },
      "personalProtection": {
        "commonAreasOfferSanitizingItems": true,
        "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
        "faceMaskRequired": true,
        "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
        "guestRoomHygieneKitsAvailable": true,
        "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
        "protectiveEquipmentAvailable": true,
        "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
      },
      "physicalDistancing": {
        "commonAreasPhysicalDistancingArranged": true,
        "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
        "physicalDistancingRequired": true,
        "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
        "safetyDividers": true,
        "safetyDividersException": "EXCEPTION_UNSPECIFIED",
        "sharedAreasLimitedOccupancy": true,
        "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
        "wellnessAreasHavePrivateSpaces": true,
        "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "housekeeping": {
      "dailyHousekeeping": true,
      "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
      "housekeepingAvailable": true,
      "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
      "turndownService": true,
      "turndownServiceException": "EXCEPTION_UNSPECIFIED"
    },
    "metadata": {
      "updateTime": "string"
    },
    "name": "string",
    "parking": {
      "electricCarChargingStations": true,
      "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
      "freeParking": true,
      "freeParkingException": "EXCEPTION_UNSPECIFIED",
      "freeSelfParking": true,
      "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
      "freeValetParking": true,
      "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
      "parkingAvailable": true,
      "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "selfParkingAvailable": true,
      "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "valetParkingAvailable": true,
      "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "pets": {
      "catsAllowed": true,
      "catsAllowedException": "EXCEPTION_UNSPECIFIED",
      "dogsAllowed": true,
      "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowed": true,
      "petsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowedFree": true,
      "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
    },
    "policies": {
      "allInclusiveAvailable": true,
      "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
      "allInclusiveOnly": true,
      "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
      "checkinTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkinTimeException": "EXCEPTION_UNSPECIFIED",
      "checkoutTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
      "kidsStayFree": true,
      "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
      "maxChildAge": 0,
      "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
      "maxKidsStayFreeCount": 0,
      "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
      "paymentOptions": {
        "cash": true,
        "cashException": "EXCEPTION_UNSPECIFIED",
        "cheque": true,
        "chequeException": "EXCEPTION_UNSPECIFIED",
        "creditCard": true,
        "creditCardException": "EXCEPTION_UNSPECIFIED",
        "debitCard": true,
        "debitCardException": "EXCEPTION_UNSPECIFIED",
        "mobileNfc": true,
        "mobileNfcException": "EXCEPTION_UNSPECIFIED"
      },
      "smokeFreeProperty": true,
      "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
    },
    "pools": {
      "adultPool": true,
      "adultPoolException": "EXCEPTION_UNSPECIFIED",
      "hotTub": true,
      "hotTubException": "EXCEPTION_UNSPECIFIED",
      "indoorPool": true,
      "indoorPoolException": "EXCEPTION_UNSPECIFIED",
      "indoorPoolsCount": 0,
      "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "lazyRiver": true,
      "lazyRiverException": "EXCEPTION_UNSPECIFIED",
      "lifeguard": true,
      "lifeguardException": "EXCEPTION_UNSPECIFIED",
      "outdoorPool": true,
      "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
      "outdoorPoolsCount": 0,
      "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "pool": true,
      "poolException": "EXCEPTION_UNSPECIFIED",
      "poolsCount": 0,
      "poolsCountException": "EXCEPTION_UNSPECIFIED",
      "wadingPool": true,
      "wadingPoolException": "EXCEPTION_UNSPECIFIED",
      "waterPark": true,
      "waterParkException": "EXCEPTION_UNSPECIFIED",
      "waterslide": true,
      "waterslideException": "EXCEPTION_UNSPECIFIED",
      "wavePool": true,
      "wavePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "property": {
      "builtYear": 0,
      "builtYearException": "EXCEPTION_UNSPECIFIED",
      "floorsCount": 0,
      "floorsCountException": "EXCEPTION_UNSPECIFIED",
      "lastRenovatedYear": 0,
      "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
      "roomsCount": 0,
      "roomsCountException": "EXCEPTION_UNSPECIFIED"
    },
    "services": {
      "baggageStorage": true,
      "baggageStorageException": "EXCEPTION_UNSPECIFIED",
      "concierge": true,
      "conciergeException": "EXCEPTION_UNSPECIFIED",
      "convenienceStore": true,
      "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
      "currencyExchange": true,
      "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
      "elevator": true,
      "elevatorException": "EXCEPTION_UNSPECIFIED",
      "frontDesk": true,
      "frontDeskException": "EXCEPTION_UNSPECIFIED",
      "fullServiceLaundry": true,
      "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "giftShop": true,
      "giftShopException": "EXCEPTION_UNSPECIFIED",
      "languagesSpoken": [
        {
          "languageCode": "string",
          "spoken": true,
          "spokenException": "EXCEPTION_UNSPECIFIED"
        }
      ],
      "selfServiceLaundry": true,
      "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "socialHour": true,
      "socialHourException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourFrontDesk": true,
      "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
      "wakeUpCalls": true,
      "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
    },
    "someUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "sustainability": {
      "energyEfficiency": {
        "carbonFreeEnergySources": true,
        "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
        "energyConservationProgram": true,
        "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientHeatingAndCoolingSystems": true,
        "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
        "energyEfficientLighting": true,
        "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
        "energySavingThermostats": true,
        "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
        "greenBuildingDesign": true,
        "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
        "independentOrganizationAuditsEnergyUse": true,
        "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainabilityCertifications": {
        "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
        "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
        "ecoCertifications": [
          {
            "awarded": true,
            "awardedException": "EXCEPTION_UNSPECIFIED",
            "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
          }
        ],
        "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
        "leedCertificationException": "EXCEPTION_UNSPECIFIED"
      },
      "sustainableSourcing": {
        "ecoFriendlyToiletries": true,
        "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
        "locallySourcedFoodAndBeverages": true,
        "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "organicCageFreeEggs": true,
        "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
        "organicFoodAndBeverages": true,
        "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
        "responsiblePurchasingPolicy": true,
        "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
        "responsiblySourcesSeafood": true,
        "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
        "veganMeals": true,
        "veganMealsException": "EXCEPTION_UNSPECIFIED",
        "vegetarianMeals": true,
        "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
      },
      "wasteReduction": {
        "compostableFoodContainersAndCutlery": true,
        "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
        "compostsExcessFood": true,
        "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "donatesExcessFood": true,
        "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
        "foodWasteReductionProgram": true,
        "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticStraws": true,
        "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
        "noSingleUsePlasticWaterBottles": true,
        "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
        "noStyrofoamFoodContainers": true,
        "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
        "recyclingProgram": true,
        "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
        "refillableToiletryContainers": true,
        "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesBatteries": true,
        "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesElectronics": true,
        "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
        "safelyDisposesLightbulbs": true,
        "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
        "safelyHandlesHazardousSubstances": true,
        "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
        "soapDonationProgram": true,
        "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "toiletryDonationProgram": true,
        "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
        "waterBottleFillingStations": true,
        "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
      },
      "waterConservation": {
        "independentOrganizationAuditsWaterUse": true,
        "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
        "linenReuseProgram": true,
        "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "towelReuseProgram": true,
        "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
        "waterSavingShowers": true,
        "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
        "waterSavingSinks": true,
        "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
        "waterSavingToilets": true,
        "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "transportation": {
      "airportShuttle": true,
      "airportShuttleException": "EXCEPTION_UNSPECIFIED",
      "carRentalOnProperty": true,
      "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
      "freeAirportShuttle": true,
      "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
      "freePrivateCarService": true,
      "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "localShuttle": true,
      "localShuttleException": "EXCEPTION_UNSPECIFIED",
      "privateCarService": true,
      "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "transfer": true,
      "transferException": "EXCEPTION_UNSPECIFIED"
    },
    "wellness": {
      "doctorOnCall": true,
      "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
      "ellipticalMachine": true,
      "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
      "fitnessCenter": true,
      "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeFitnessCenter": true,
      "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeWeights": true,
      "freeWeightsException": "EXCEPTION_UNSPECIFIED",
      "massage": true,
      "massageException": "EXCEPTION_UNSPECIFIED",
      "salon": true,
      "salonException": "EXCEPTION_UNSPECIFIED",
      "sauna": true,
      "saunaException": "EXCEPTION_UNSPECIFIED",
      "spa": true,
      "spaException": "EXCEPTION_UNSPECIFIED",
      "treadmill": true,
      "treadmillException": "EXCEPTION_UNSPECIFIED",
      "weightMachine": true,
      "weightMachineException": "EXCEPTION_UNSPECIFIED"
    }
  }
}
```

Response message for LodgingService.GetGoogleUpdatedLodging

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diffMask|string(google-fieldmask)|false|none|Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified.|
|lodging|[Lodging](#schemalodging)|false|none|Required. The Google updated Lodging.|

<h2 id="tocS_GuestUnitFeatures">GuestUnitFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaguestunitfeatures"></a>
<a id="schema_GuestUnitFeatures"></a>
<a id="tocSguestunitfeatures"></a>
<a id="tocsguestunitfeatures"></a>

```json
{
  "bungalowOrVilla": true,
  "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
  "connectingUnitAvailable": true,
  "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
  "executiveFloor": true,
  "executiveFloorException": "EXCEPTION_UNSPECIFIED",
  "maxAdultOccupantsCount": 0,
  "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "maxChildOccupantsCount": 0,
  "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "maxOccupantsCount": 0,
  "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "privateHome": true,
  "privateHomeException": "EXCEPTION_UNSPECIFIED",
  "suite": true,
  "suiteException": "EXCEPTION_UNSPECIFIED",
  "tier": "UNIT_TIER_UNSPECIFIED",
  "tierException": "EXCEPTION_UNSPECIFIED",
  "totalLivingAreas": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "views": {
    "beachView": true,
    "beachViewException": "EXCEPTION_UNSPECIFIED",
    "cityView": true,
    "cityViewException": "EXCEPTION_UNSPECIFIED",
    "gardenView": true,
    "gardenViewException": "EXCEPTION_UNSPECIFIED",
    "lakeView": true,
    "lakeViewException": "EXCEPTION_UNSPECIFIED",
    "landmarkView": true,
    "landmarkViewException": "EXCEPTION_UNSPECIFIED",
    "oceanView": true,
    "oceanViewException": "EXCEPTION_UNSPECIFIED",
    "poolView": true,
    "poolViewException": "EXCEPTION_UNSPECIFIED",
    "valleyView": true,
    "valleyViewException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Features and available amenities in the guest unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bungalowOrVilla|boolean|false|none|Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types.|
|bungalowOrVillaException|string|false|none|Bungalow or villa exception.|
|connectingUnitAvailable|boolean|false|none|Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group.|
|connectingUnitAvailableException|string|false|none|Connecting unit available exception.|
|executiveFloor|boolean|false|none|Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program.|
|executiveFloorException|string|false|none|Executive floor exception.|
|maxAdultOccupantsCount|integer(int32)|false|none|Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom.|
|maxAdultOccupantsCountException|string|false|none|Max adult occupants count exception.|
|maxChildOccupantsCount|integer(int32)|false|none|Max child occupants count. The total number of children allowed to stay overnight in the room.|
|maxChildOccupantsCountException|string|false|none|Max child occupants count exception.|
|maxOccupantsCount|integer(int32)|false|none|Max occupants count. The total number of guests allowed to stay overnight in the guestroom.|
|maxOccupantsCountException|string|false|none|Max occupants count exception.|
|privateHome|boolean|false|none|Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency.|
|privateHomeException|string|false|none|Private home exception.|
|suite|boolean|false|none|Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom.|
|suiteException|string|false|none|Suite exception.|
|tier|string|false|none|Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.|
|tierException|string|false|none|Tier exception.|
|totalLivingAreas|[LivingArea](#schemalivingarea)|false|none|Features available in the living areas in the guest unit.|
|views|[ViewsFromUnit](#schemaviewsfromunit)|false|none|Views available from the guest unit itself.|

#### Enumerated Values

|Property|Value|
|---|---|
|bungalowOrVillaException|EXCEPTION_UNSPECIFIED|
|bungalowOrVillaException|UNDER_CONSTRUCTION|
|bungalowOrVillaException|DEPENDENT_ON_SEASON|
|bungalowOrVillaException|DEPENDENT_ON_DAY_OF_WEEK|
|connectingUnitAvailableException|EXCEPTION_UNSPECIFIED|
|connectingUnitAvailableException|UNDER_CONSTRUCTION|
|connectingUnitAvailableException|DEPENDENT_ON_SEASON|
|connectingUnitAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|executiveFloorException|EXCEPTION_UNSPECIFIED|
|executiveFloorException|UNDER_CONSTRUCTION|
|executiveFloorException|DEPENDENT_ON_SEASON|
|executiveFloorException|DEPENDENT_ON_DAY_OF_WEEK|
|maxAdultOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxAdultOccupantsCountException|UNDER_CONSTRUCTION|
|maxAdultOccupantsCountException|DEPENDENT_ON_SEASON|
|maxAdultOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|maxChildOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxChildOccupantsCountException|UNDER_CONSTRUCTION|
|maxChildOccupantsCountException|DEPENDENT_ON_SEASON|
|maxChildOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|maxOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxOccupantsCountException|UNDER_CONSTRUCTION|
|maxOccupantsCountException|DEPENDENT_ON_SEASON|
|maxOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|privateHomeException|EXCEPTION_UNSPECIFIED|
|privateHomeException|UNDER_CONSTRUCTION|
|privateHomeException|DEPENDENT_ON_SEASON|
|privateHomeException|DEPENDENT_ON_DAY_OF_WEEK|
|suiteException|EXCEPTION_UNSPECIFIED|
|suiteException|UNDER_CONSTRUCTION|
|suiteException|DEPENDENT_ON_SEASON|
|suiteException|DEPENDENT_ON_DAY_OF_WEEK|
|tier|UNIT_TIER_UNSPECIFIED|
|tier|STANDARD_UNIT|
|tier|DELUXE_UNIT|
|tierException|EXCEPTION_UNSPECIFIED|
|tierException|UNDER_CONSTRUCTION|
|tierException|DEPENDENT_ON_SEASON|
|tierException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_GuestUnitType">GuestUnitType</h2>
<!-- backwards compatibility -->
<a id="schemaguestunittype"></a>
<a id="schema_GuestUnitType"></a>
<a id="tocSguestunittype"></a>
<a id="tocsguestunittype"></a>

```json
{
  "codes": [
    "string"
  ],
  "features": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "label": "string"
}
```

A specific type of unit primarily defined by its features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[string]|false|none|Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.|
|features|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|Features and available amenities of the GuestUnitType.|
|label|string|false|none|Required. Short, English label or name of the GuestUnitType. Target <50 chars.|

<h2 id="tocS_HealthAndSafety">HealthAndSafety</h2>
<!-- backwards compatibility -->
<a id="schemahealthandsafety"></a>
<a id="schema_HealthAndSafety"></a>
<a id="tocShealthandsafety"></a>
<a id="tocshealthandsafety"></a>

```json
{
  "enhancedCleaning": {
    "commercialGradeDisinfectantCleaning": true,
    "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
    "commonAreasEnhancedCleaning": true,
    "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
    "employeesTrainedCleaningProcedures": true,
    "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
    "employeesTrainedThoroughHandWashing": true,
    "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
    "employeesWearProtectiveEquipment": true,
    "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
    "guestRoomsEnhancedCleaning": true,
    "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
  },
  "increasedFoodSafety": {
    "diningAreasAdditionalSanitation": true,
    "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
    "disposableFlatware": true,
    "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
    "foodPreparationAndServingAdditionalSafety": true,
    "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
    "individualPackagedMeals": true,
    "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
    "singleUseFoodMenus": true,
    "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
  },
  "minimizedContact": {
    "contactlessCheckinCheckout": true,
    "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
    "digitalGuestRoomKeys": true,
    "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
    "housekeepingScheduledRequestOnly": true,
    "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
    "noHighTouchItemsCommonAreas": true,
    "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
    "noHighTouchItemsGuestRooms": true,
    "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
    "plasticKeycardsDisinfected": true,
    "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
    "roomBookingsBuffer": true,
    "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
  },
  "personalProtection": {
    "commonAreasOfferSanitizingItems": true,
    "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
    "faceMaskRequired": true,
    "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
    "guestRoomHygieneKitsAvailable": true,
    "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
    "protectiveEquipmentAvailable": true,
    "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "physicalDistancing": {
    "commonAreasPhysicalDistancingArranged": true,
    "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
    "physicalDistancingRequired": true,
    "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
    "safetyDividers": true,
    "safetyDividersException": "EXCEPTION_UNSPECIFIED",
    "sharedAreasLimitedOccupancy": true,
    "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
    "wellnessAreasHavePrivateSpaces": true,
    "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Health and safety measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedCleaning|[EnhancedCleaning](#schemaenhancedcleaning)|false|none|Enhanced cleaning measures implemented by the hotel during COVID-19.|
|increasedFoodSafety|[IncreasedFoodSafety](#schemaincreasedfoodsafety)|false|none|Increased food safety measures implemented by the hotel during COVID-19.|
|minimizedContact|[MinimizedContact](#schemaminimizedcontact)|false|none|Minimized contact measures implemented by the hotel during COVID-19.|
|personalProtection|[PersonalProtection](#schemapersonalprotection)|false|none|Personal protection measures implemented by the hotel during COVID-19.|
|physicalDistancing|[PhysicalDistancing](#schemaphysicaldistancing)|false|none|Physical distancing measures implemented by the hotel during COVID-19.|

<h2 id="tocS_Housekeeping">Housekeeping</h2>
<!-- backwards compatibility -->
<a id="schemahousekeeping"></a>
<a id="schema_Housekeeping"></a>
<a id="tocShousekeeping"></a>
<a id="tocshousekeeping"></a>

```json
{
  "dailyHousekeeping": true,
  "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
  "housekeepingAvailable": true,
  "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
  "turndownService": true,
  "turndownServiceException": "EXCEPTION_UNSPECIFIED"
}
```

Conveniences provided in guest units to facilitate an easier, more comfortable stay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyHousekeeping|boolean|false|none|Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay.|
|dailyHousekeepingException|string|false|none|Daily housekeeping exception.|
|housekeepingAvailable|boolean|false|none|Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week.|
|housekeepingAvailableException|string|false|none|Housekeeping available exception.|
|turndownService|boolean|false|none|Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service.|
|turndownServiceException|string|false|none|Turndown service exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|dailyHousekeepingException|EXCEPTION_UNSPECIFIED|
|dailyHousekeepingException|UNDER_CONSTRUCTION|
|dailyHousekeepingException|DEPENDENT_ON_SEASON|
|dailyHousekeepingException|DEPENDENT_ON_DAY_OF_WEEK|
|housekeepingAvailableException|EXCEPTION_UNSPECIFIED|
|housekeepingAvailableException|UNDER_CONSTRUCTION|
|housekeepingAvailableException|DEPENDENT_ON_SEASON|
|housekeepingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|turndownServiceException|EXCEPTION_UNSPECIFIED|
|turndownServiceException|UNDER_CONSTRUCTION|
|turndownServiceException|DEPENDENT_ON_SEASON|
|turndownServiceException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_IncreasedFoodSafety">IncreasedFoodSafety</h2>
<!-- backwards compatibility -->
<a id="schemaincreasedfoodsafety"></a>
<a id="schema_IncreasedFoodSafety"></a>
<a id="tocSincreasedfoodsafety"></a>
<a id="tocsincreasedfoodsafety"></a>

```json
{
  "diningAreasAdditionalSanitation": true,
  "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
  "disposableFlatware": true,
  "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
  "foodPreparationAndServingAdditionalSafety": true,
  "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
  "individualPackagedMeals": true,
  "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
  "singleUseFoodMenus": true,
  "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
}
```

Increased food safety measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diningAreasAdditionalSanitation|boolean|false|none|Additional sanitation in dining areas.|
|diningAreasAdditionalSanitationException|string|false|none|Dining areas additional sanitation exception.|
|disposableFlatware|boolean|false|none|Disposable flatware.|
|disposableFlatwareException|string|false|none|Disposable flatware exception.|
|foodPreparationAndServingAdditionalSafety|boolean|false|none|Additional safety measures during food prep and serving.|
|foodPreparationAndServingAdditionalSafetyException|string|false|none|Food preparation and serving additional safety exception.|
|individualPackagedMeals|boolean|false|none|Individually-packaged meals.|
|individualPackagedMealsException|string|false|none|Individual packaged meals exception.|
|singleUseFoodMenus|boolean|false|none|Single-use menus.|
|singleUseFoodMenusException|string|false|none|Single use food menus exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|diningAreasAdditionalSanitationException|EXCEPTION_UNSPECIFIED|
|diningAreasAdditionalSanitationException|UNDER_CONSTRUCTION|
|diningAreasAdditionalSanitationException|DEPENDENT_ON_SEASON|
|diningAreasAdditionalSanitationException|DEPENDENT_ON_DAY_OF_WEEK|
|disposableFlatwareException|EXCEPTION_UNSPECIFIED|
|disposableFlatwareException|UNDER_CONSTRUCTION|
|disposableFlatwareException|DEPENDENT_ON_SEASON|
|disposableFlatwareException|DEPENDENT_ON_DAY_OF_WEEK|
|foodPreparationAndServingAdditionalSafetyException|EXCEPTION_UNSPECIFIED|
|foodPreparationAndServingAdditionalSafetyException|UNDER_CONSTRUCTION|
|foodPreparationAndServingAdditionalSafetyException|DEPENDENT_ON_SEASON|
|foodPreparationAndServingAdditionalSafetyException|DEPENDENT_ON_DAY_OF_WEEK|
|individualPackagedMealsException|EXCEPTION_UNSPECIFIED|
|individualPackagedMealsException|UNDER_CONSTRUCTION|
|individualPackagedMealsException|DEPENDENT_ON_SEASON|
|individualPackagedMealsException|DEPENDENT_ON_DAY_OF_WEEK|
|singleUseFoodMenusException|EXCEPTION_UNSPECIFIED|
|singleUseFoodMenusException|UNDER_CONSTRUCTION|
|singleUseFoodMenusException|DEPENDENT_ON_SEASON|
|singleUseFoodMenusException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LanguageSpoken">LanguageSpoken</h2>
<!-- backwards compatibility -->
<a id="schemalanguagespoken"></a>
<a id="schema_LanguageSpoken"></a>
<a id="tocSlanguagespoken"></a>
<a id="tocslanguagespoken"></a>

```json
{
  "languageCode": "string",
  "spoken": true,
  "spokenException": "EXCEPTION_UNSPECIFIED"
}
```

Language spoken by at least one staff member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh.|
|spoken|boolean|false|none|At least one member of the staff can speak the language.|
|spokenException|string|false|none|Spoken exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|spokenException|EXCEPTION_UNSPECIFIED|
|spokenException|UNDER_CONSTRUCTION|
|spokenException|DEPENDENT_ON_SEASON|
|spokenException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingArea">LivingArea</h2>
<!-- backwards compatibility -->
<a id="schemalivingarea"></a>
<a id="schema_LivingArea"></a>
<a id="tocSlivingarea"></a>
<a id="tocslivingarea"></a>

```json
{
  "accessibility": {
    "adaCompliantUnit": true,
    "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleDoorbell": true,
    "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleFireAlarm": true,
    "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleUnit": true,
    "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleBathtub": true,
    "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleShower": true,
    "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleToilet": true,
    "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleUnit": true,
    "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
  },
  "eating": {
    "coffeeMaker": true,
    "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
    "cookware": true,
    "cookwareException": "EXCEPTION_UNSPECIFIED",
    "dishwasher": true,
    "dishwasherException": "EXCEPTION_UNSPECIFIED",
    "indoorGrill": true,
    "indoorGrillException": "EXCEPTION_UNSPECIFIED",
    "kettle": true,
    "kettleException": "EXCEPTION_UNSPECIFIED",
    "kitchenAvailable": true,
    "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
    "microwave": true,
    "microwaveException": "EXCEPTION_UNSPECIFIED",
    "minibar": true,
    "minibarException": "EXCEPTION_UNSPECIFIED",
    "outdoorGrill": true,
    "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
    "oven": true,
    "ovenException": "EXCEPTION_UNSPECIFIED",
    "refrigerator": true,
    "refrigeratorException": "EXCEPTION_UNSPECIFIED",
    "sink": true,
    "sinkException": "EXCEPTION_UNSPECIFIED",
    "snackbar": true,
    "snackbarException": "EXCEPTION_UNSPECIFIED",
    "stove": true,
    "stoveException": "EXCEPTION_UNSPECIFIED",
    "teaStation": true,
    "teaStationException": "EXCEPTION_UNSPECIFIED",
    "toaster": true,
    "toasterException": "EXCEPTION_UNSPECIFIED"
  },
  "features": {
    "airConditioning": true,
    "airConditioningException": "EXCEPTION_UNSPECIFIED",
    "bathtub": true,
    "bathtubException": "EXCEPTION_UNSPECIFIED",
    "bidet": true,
    "bidetException": "EXCEPTION_UNSPECIFIED",
    "dryer": true,
    "dryerException": "EXCEPTION_UNSPECIFIED",
    "electronicRoomKey": true,
    "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
    "fireplace": true,
    "fireplaceException": "EXCEPTION_UNSPECIFIED",
    "hairdryer": true,
    "hairdryerException": "EXCEPTION_UNSPECIFIED",
    "heating": true,
    "heatingException": "EXCEPTION_UNSPECIFIED",
    "inunitSafe": true,
    "inunitSafeException": "EXCEPTION_UNSPECIFIED",
    "inunitWifiAvailable": true,
    "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "ironingEquipment": true,
    "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
    "payPerViewMovies": true,
    "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
    "privateBathroom": true,
    "privateBathroomException": "EXCEPTION_UNSPECIFIED",
    "shower": true,
    "showerException": "EXCEPTION_UNSPECIFIED",
    "toilet": true,
    "toiletException": "EXCEPTION_UNSPECIFIED",
    "tv": true,
    "tvCasting": true,
    "tvCastingException": "EXCEPTION_UNSPECIFIED",
    "tvException": "EXCEPTION_UNSPECIFIED",
    "tvStreaming": true,
    "tvStreamingException": "EXCEPTION_UNSPECIFIED",
    "universalPowerAdapters": true,
    "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
    "washer": true,
    "washerException": "EXCEPTION_UNSPECIFIED"
  },
  "layout": {
    "balcony": true,
    "balconyException": "EXCEPTION_UNSPECIFIED",
    "livingAreaSqMeters": 0,
    "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
    "loft": true,
    "loftException": "EXCEPTION_UNSPECIFIED",
    "nonSmoking": true,
    "nonSmokingException": "EXCEPTION_UNSPECIFIED",
    "patio": true,
    "patioException": "EXCEPTION_UNSPECIFIED",
    "stairs": true,
    "stairsException": "EXCEPTION_UNSPECIFIED"
  },
  "sleeping": {
    "bedsCount": 0,
    "bedsCountException": "EXCEPTION_UNSPECIFIED",
    "bunkBedsCount": 0,
    "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
    "cribsCount": 0,
    "cribsCountException": "EXCEPTION_UNSPECIFIED",
    "doubleBedsCount": 0,
    "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
    "featherPillows": true,
    "featherPillowsException": "EXCEPTION_UNSPECIFIED",
    "hypoallergenicBedding": true,
    "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
    "kingBedsCount": 0,
    "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
    "memoryFoamPillows": true,
    "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
    "otherBedsCount": 0,
    "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
    "queenBedsCount": 0,
    "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
    "rollAwayBedsCount": 0,
    "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
    "singleOrTwinBedsCount": 0,
    "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
    "sofaBedsCount": 0,
    "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
    "syntheticPillows": true,
    "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
  }
}
```

An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[LivingAreaAccessibility](#schemalivingareaaccessibility)|false|none|Accessibility features of the living area.|
|eating|[LivingAreaEating](#schemalivingareaeating)|false|none|Information about eating features in the living area.|
|features|[LivingAreaFeatures](#schemalivingareafeatures)|false|none|Features in the living area.|
|layout|[LivingAreaLayout](#schemalivingarealayout)|false|none|Information about the layout of the living area.|
|sleeping|[LivingAreaSleeping](#schemalivingareasleeping)|false|none|Information about sleeping features in the living area.|

<h2 id="tocS_LivingAreaAccessibility">LivingAreaAccessibility</h2>
<!-- backwards compatibility -->
<a id="schemalivingareaaccessibility"></a>
<a id="schema_LivingAreaAccessibility"></a>
<a id="tocSlivingareaaccessibility"></a>
<a id="tocslivingareaaccessibility"></a>

```json
{
  "adaCompliantUnit": true,
  "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleDoorbell": true,
  "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleFireAlarm": true,
  "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleUnit": true,
  "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleBathtub": true,
  "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleShower": true,
  "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleToilet": true,
  "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleUnit": true,
  "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
}
```

Accessibility features of the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adaCompliantUnit|boolean|false|none|ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.|
|adaCompliantUnitException|string|false|none|ADA compliant unit exception.|
|hearingAccessibleDoorbell|boolean|false|none|Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door.|
|hearingAccessibleDoorbellException|string|false|none|Hearing-accessible doorbell exception.|
|hearingAccessibleFireAlarm|boolean|false|none|Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights.|
|hearingAccessibleFireAlarmException|string|false|none|Hearing-accessible fire alarm exception.|
|hearingAccessibleUnit|boolean|false|none|Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues.|
|hearingAccessibleUnitException|string|false|none|Hearing-accessible unit exception.|
|mobilityAccessibleBathtub|boolean|false|none|Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub.|
|mobilityAccessibleBathtubException|string|false|none|Mobility-accessible bathtub exception.|
|mobilityAccessibleShower|boolean|false|none|Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged.|
|mobilityAccessibleShowerException|string|false|none|Mobility-accessible shower exception.|
|mobilityAccessibleToilet|boolean|false|none|Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged.|
|mobilityAccessibleToiletException|string|false|none|Mobility-accessible toilet exception.|
|mobilityAccessibleUnit|boolean|false|none|Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.|
|mobilityAccessibleUnitException|string|false|none|Mobility-accessible unit exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|adaCompliantUnitException|EXCEPTION_UNSPECIFIED|
|adaCompliantUnitException|UNDER_CONSTRUCTION|
|adaCompliantUnitException|DEPENDENT_ON_SEASON|
|adaCompliantUnitException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleDoorbellException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleDoorbellException|UNDER_CONSTRUCTION|
|hearingAccessibleDoorbellException|DEPENDENT_ON_SEASON|
|hearingAccessibleDoorbellException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleFireAlarmException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleFireAlarmException|UNDER_CONSTRUCTION|
|hearingAccessibleFireAlarmException|DEPENDENT_ON_SEASON|
|hearingAccessibleFireAlarmException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleUnitException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleUnitException|UNDER_CONSTRUCTION|
|hearingAccessibleUnitException|DEPENDENT_ON_SEASON|
|hearingAccessibleUnitException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleBathtubException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleBathtubException|UNDER_CONSTRUCTION|
|mobilityAccessibleBathtubException|DEPENDENT_ON_SEASON|
|mobilityAccessibleBathtubException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleShowerException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleShowerException|UNDER_CONSTRUCTION|
|mobilityAccessibleShowerException|DEPENDENT_ON_SEASON|
|mobilityAccessibleShowerException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleToiletException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleToiletException|UNDER_CONSTRUCTION|
|mobilityAccessibleToiletException|DEPENDENT_ON_SEASON|
|mobilityAccessibleToiletException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleUnitException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleUnitException|UNDER_CONSTRUCTION|
|mobilityAccessibleUnitException|DEPENDENT_ON_SEASON|
|mobilityAccessibleUnitException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaEating">LivingAreaEating</h2>
<!-- backwards compatibility -->
<a id="schemalivingareaeating"></a>
<a id="schema_LivingAreaEating"></a>
<a id="tocSlivingareaeating"></a>
<a id="tocslivingareaeating"></a>

```json
{
  "coffeeMaker": true,
  "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
  "cookware": true,
  "cookwareException": "EXCEPTION_UNSPECIFIED",
  "dishwasher": true,
  "dishwasherException": "EXCEPTION_UNSPECIFIED",
  "indoorGrill": true,
  "indoorGrillException": "EXCEPTION_UNSPECIFIED",
  "kettle": true,
  "kettleException": "EXCEPTION_UNSPECIFIED",
  "kitchenAvailable": true,
  "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
  "microwave": true,
  "microwaveException": "EXCEPTION_UNSPECIFIED",
  "minibar": true,
  "minibarException": "EXCEPTION_UNSPECIFIED",
  "outdoorGrill": true,
  "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
  "oven": true,
  "ovenException": "EXCEPTION_UNSPECIFIED",
  "refrigerator": true,
  "refrigeratorException": "EXCEPTION_UNSPECIFIED",
  "sink": true,
  "sinkException": "EXCEPTION_UNSPECIFIED",
  "snackbar": true,
  "snackbarException": "EXCEPTION_UNSPECIFIED",
  "stove": true,
  "stoveException": "EXCEPTION_UNSPECIFIED",
  "teaStation": true,
  "teaStationException": "EXCEPTION_UNSPECIFIED",
  "toaster": true,
  "toasterException": "EXCEPTION_UNSPECIFIED"
}
```

Information about eating features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coffeeMaker|boolean|false|none|Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee.|
|coffeeMakerException|string|false|none|Coffee maker exception.|
|cookware|boolean|false|none|Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food.|
|cookwareException|string|false|none|Cookware exception.|
|dishwasher|boolean|false|none|Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents.|
|dishwasherException|string|false|none|Dishwasher exception.|
|indoorGrill|boolean|false|none|Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source.|
|indoorGrillException|string|false|none|Indoor grill exception.|
|kettle|boolean|false|none|Kettle. A covered container with a handle and a spout used for boiling water.|
|kettleException|string|false|none|Kettle exception.|
|kitchenAvailable|boolean|false|none|Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher.|
|kitchenAvailableException|string|false|none|Kitchen available exception.|
|microwave|boolean|false|none|Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop.|
|microwaveException|string|false|none|Microwave exception.|
|minibar|boolean|false|none|Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee.|
|minibarException|string|false|none|Minibar exception.|
|outdoorGrill|boolean|false|none|Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue.|
|outdoorGrillException|string|false|none|Outdoor grill exception.|
|oven|boolean|false|none|Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating.|
|ovenException|string|false|none|Oven exception.|
|refrigerator|boolean|false|none|Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods.|
|refrigeratorException|string|false|none|Refrigerator exception.|
|sink|boolean|false|none|Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing.|
|sinkException|string|false|none|Sink exception.|
|snackbar|boolean|false|none|Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee.|
|snackbarException|string|false|none|Snackbar exception.|
|stove|boolean|false|none|Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob.|
|stoveException|string|false|none|Stove exception.|
|teaStation|boolean|false|none|Tea station. A small area with the supplies needed to heat water and make tea.|
|teaStationException|string|false|none|Tea station exception.|
|toaster|boolean|false|none|Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products.|
|toasterException|string|false|none|Toaster exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|coffeeMakerException|EXCEPTION_UNSPECIFIED|
|coffeeMakerException|UNDER_CONSTRUCTION|
|coffeeMakerException|DEPENDENT_ON_SEASON|
|coffeeMakerException|DEPENDENT_ON_DAY_OF_WEEK|
|cookwareException|EXCEPTION_UNSPECIFIED|
|cookwareException|UNDER_CONSTRUCTION|
|cookwareException|DEPENDENT_ON_SEASON|
|cookwareException|DEPENDENT_ON_DAY_OF_WEEK|
|dishwasherException|EXCEPTION_UNSPECIFIED|
|dishwasherException|UNDER_CONSTRUCTION|
|dishwasherException|DEPENDENT_ON_SEASON|
|dishwasherException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorGrillException|EXCEPTION_UNSPECIFIED|
|indoorGrillException|UNDER_CONSTRUCTION|
|indoorGrillException|DEPENDENT_ON_SEASON|
|indoorGrillException|DEPENDENT_ON_DAY_OF_WEEK|
|kettleException|EXCEPTION_UNSPECIFIED|
|kettleException|UNDER_CONSTRUCTION|
|kettleException|DEPENDENT_ON_SEASON|
|kettleException|DEPENDENT_ON_DAY_OF_WEEK|
|kitchenAvailableException|EXCEPTION_UNSPECIFIED|
|kitchenAvailableException|UNDER_CONSTRUCTION|
|kitchenAvailableException|DEPENDENT_ON_SEASON|
|kitchenAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|microwaveException|EXCEPTION_UNSPECIFIED|
|microwaveException|UNDER_CONSTRUCTION|
|microwaveException|DEPENDENT_ON_SEASON|
|microwaveException|DEPENDENT_ON_DAY_OF_WEEK|
|minibarException|EXCEPTION_UNSPECIFIED|
|minibarException|UNDER_CONSTRUCTION|
|minibarException|DEPENDENT_ON_SEASON|
|minibarException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorGrillException|EXCEPTION_UNSPECIFIED|
|outdoorGrillException|UNDER_CONSTRUCTION|
|outdoorGrillException|DEPENDENT_ON_SEASON|
|outdoorGrillException|DEPENDENT_ON_DAY_OF_WEEK|
|ovenException|EXCEPTION_UNSPECIFIED|
|ovenException|UNDER_CONSTRUCTION|
|ovenException|DEPENDENT_ON_SEASON|
|ovenException|DEPENDENT_ON_DAY_OF_WEEK|
|refrigeratorException|EXCEPTION_UNSPECIFIED|
|refrigeratorException|UNDER_CONSTRUCTION|
|refrigeratorException|DEPENDENT_ON_SEASON|
|refrigeratorException|DEPENDENT_ON_DAY_OF_WEEK|
|sinkException|EXCEPTION_UNSPECIFIED|
|sinkException|UNDER_CONSTRUCTION|
|sinkException|DEPENDENT_ON_SEASON|
|sinkException|DEPENDENT_ON_DAY_OF_WEEK|
|snackbarException|EXCEPTION_UNSPECIFIED|
|snackbarException|UNDER_CONSTRUCTION|
|snackbarException|DEPENDENT_ON_SEASON|
|snackbarException|DEPENDENT_ON_DAY_OF_WEEK|
|stoveException|EXCEPTION_UNSPECIFIED|
|stoveException|UNDER_CONSTRUCTION|
|stoveException|DEPENDENT_ON_SEASON|
|stoveException|DEPENDENT_ON_DAY_OF_WEEK|
|teaStationException|EXCEPTION_UNSPECIFIED|
|teaStationException|UNDER_CONSTRUCTION|
|teaStationException|DEPENDENT_ON_SEASON|
|teaStationException|DEPENDENT_ON_DAY_OF_WEEK|
|toasterException|EXCEPTION_UNSPECIFIED|
|toasterException|UNDER_CONSTRUCTION|
|toasterException|DEPENDENT_ON_SEASON|
|toasterException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaFeatures">LivingAreaFeatures</h2>
<!-- backwards compatibility -->
<a id="schemalivingareafeatures"></a>
<a id="schema_LivingAreaFeatures"></a>
<a id="tocSlivingareafeatures"></a>
<a id="tocslivingareafeatures"></a>

```json
{
  "airConditioning": true,
  "airConditioningException": "EXCEPTION_UNSPECIFIED",
  "bathtub": true,
  "bathtubException": "EXCEPTION_UNSPECIFIED",
  "bidet": true,
  "bidetException": "EXCEPTION_UNSPECIFIED",
  "dryer": true,
  "dryerException": "EXCEPTION_UNSPECIFIED",
  "electronicRoomKey": true,
  "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
  "fireplace": true,
  "fireplaceException": "EXCEPTION_UNSPECIFIED",
  "hairdryer": true,
  "hairdryerException": "EXCEPTION_UNSPECIFIED",
  "heating": true,
  "heatingException": "EXCEPTION_UNSPECIFIED",
  "inunitSafe": true,
  "inunitSafeException": "EXCEPTION_UNSPECIFIED",
  "inunitWifiAvailable": true,
  "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
  "ironingEquipment": true,
  "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
  "payPerViewMovies": true,
  "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
  "privateBathroom": true,
  "privateBathroomException": "EXCEPTION_UNSPECIFIED",
  "shower": true,
  "showerException": "EXCEPTION_UNSPECIFIED",
  "toilet": true,
  "toiletException": "EXCEPTION_UNSPECIFIED",
  "tv": true,
  "tvCasting": true,
  "tvCastingException": "EXCEPTION_UNSPECIFIED",
  "tvException": "EXCEPTION_UNSPECIFIED",
  "tvStreaming": true,
  "tvStreamingException": "EXCEPTION_UNSPECIFIED",
  "universalPowerAdapters": true,
  "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
  "washer": true,
  "washerException": "EXCEPTION_UNSPECIFIED"
}
```

Features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airConditioning|boolean|false|none|Air conditioning. An electrical machine used to cool the temperature of the guestroom.|
|airConditioningException|string|false|none|Air conditioning exception.|
|bathtub|boolean|false|none|Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining.|
|bathtubException|string|false|none|Bathtub exception.|
|bidet|boolean|false|none|Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use.|
|bidetException|string|false|none|Bidet exception.|
|dryer|boolean|false|none|Dryer. An electrical machine designed to dry clothing.|
|dryerException|string|false|none|Dryer exception.|
|electronicRoomKey|boolean|false|none|Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry.|
|electronicRoomKeyException|string|false|none|Electronic room key exception.|
|fireplace|boolean|false|none|Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone.|
|fireplaceException|string|false|none|Fireplace exception.|
|hairdryer|boolean|false|none|Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet.|
|hairdryerException|string|false|none|Hairdryer exception.|
|heating|boolean|false|none|Heating. An electrical machine used to warm the temperature of the guestroom.|
|heatingException|string|false|none|Heating exception.|
|inunitSafe|boolean|false|none|In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet.|
|inunitSafeException|string|false|none|In-unit safe exception.|
|inunitWifiAvailable|boolean|false|none|In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee.|
|inunitWifiAvailableException|string|false|none|In-unit Wifi available exception.|
|ironingEquipment|boolean|false|none|Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked.|
|ironingEquipmentException|string|false|none|Ironing equipment exception.|
|payPerViewMovies|boolean|false|none|Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment.|
|payPerViewMoviesException|string|false|none|Pay per view movies exception.|
|privateBathroom|boolean|false|none|Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom.|
|privateBathroomException|string|false|none|Private bathroom exception.|
|shower|boolean|false|none|Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor.|
|showerException|string|false|none|Shower exception.|
|toilet|boolean|false|none|Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste.|
|toiletException|string|false|none|Toilet exception.|
|tv|boolean|false|none|TV. A television is available in the guestroom.|
|tvCasting|boolean|false|none|TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television.|
|tvCastingException|string|false|none|TV exception.|
|tvException|string|false|none|TV exception.|
|tvStreaming|boolean|false|none|TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps.|
|tvStreamingException|string|false|none|TV streaming exception.|
|universalPowerAdapters|boolean|false|none|Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger.|
|universalPowerAdaptersException|string|false|none|Universal power adapters exception.|
|washer|boolean|false|none|Washer. An electrical machine connected to a running water source designed to launder clothing.|
|washerException|string|false|none|Washer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|airConditioningException|EXCEPTION_UNSPECIFIED|
|airConditioningException|UNDER_CONSTRUCTION|
|airConditioningException|DEPENDENT_ON_SEASON|
|airConditioningException|DEPENDENT_ON_DAY_OF_WEEK|
|bathtubException|EXCEPTION_UNSPECIFIED|
|bathtubException|UNDER_CONSTRUCTION|
|bathtubException|DEPENDENT_ON_SEASON|
|bathtubException|DEPENDENT_ON_DAY_OF_WEEK|
|bidetException|EXCEPTION_UNSPECIFIED|
|bidetException|UNDER_CONSTRUCTION|
|bidetException|DEPENDENT_ON_SEASON|
|bidetException|DEPENDENT_ON_DAY_OF_WEEK|
|dryerException|EXCEPTION_UNSPECIFIED|
|dryerException|UNDER_CONSTRUCTION|
|dryerException|DEPENDENT_ON_SEASON|
|dryerException|DEPENDENT_ON_DAY_OF_WEEK|
|electronicRoomKeyException|EXCEPTION_UNSPECIFIED|
|electronicRoomKeyException|UNDER_CONSTRUCTION|
|electronicRoomKeyException|DEPENDENT_ON_SEASON|
|electronicRoomKeyException|DEPENDENT_ON_DAY_OF_WEEK|
|fireplaceException|EXCEPTION_UNSPECIFIED|
|fireplaceException|UNDER_CONSTRUCTION|
|fireplaceException|DEPENDENT_ON_SEASON|
|fireplaceException|DEPENDENT_ON_DAY_OF_WEEK|
|hairdryerException|EXCEPTION_UNSPECIFIED|
|hairdryerException|UNDER_CONSTRUCTION|
|hairdryerException|DEPENDENT_ON_SEASON|
|hairdryerException|DEPENDENT_ON_DAY_OF_WEEK|
|heatingException|EXCEPTION_UNSPECIFIED|
|heatingException|UNDER_CONSTRUCTION|
|heatingException|DEPENDENT_ON_SEASON|
|heatingException|DEPENDENT_ON_DAY_OF_WEEK|
|inunitSafeException|EXCEPTION_UNSPECIFIED|
|inunitSafeException|UNDER_CONSTRUCTION|
|inunitSafeException|DEPENDENT_ON_SEASON|
|inunitSafeException|DEPENDENT_ON_DAY_OF_WEEK|
|inunitWifiAvailableException|EXCEPTION_UNSPECIFIED|
|inunitWifiAvailableException|UNDER_CONSTRUCTION|
|inunitWifiAvailableException|DEPENDENT_ON_SEASON|
|inunitWifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|ironingEquipmentException|EXCEPTION_UNSPECIFIED|
|ironingEquipmentException|UNDER_CONSTRUCTION|
|ironingEquipmentException|DEPENDENT_ON_SEASON|
|ironingEquipmentException|DEPENDENT_ON_DAY_OF_WEEK|
|payPerViewMoviesException|EXCEPTION_UNSPECIFIED|
|payPerViewMoviesException|UNDER_CONSTRUCTION|
|payPerViewMoviesException|DEPENDENT_ON_SEASON|
|payPerViewMoviesException|DEPENDENT_ON_DAY_OF_WEEK|
|privateBathroomException|EXCEPTION_UNSPECIFIED|
|privateBathroomException|UNDER_CONSTRUCTION|
|privateBathroomException|DEPENDENT_ON_SEASON|
|privateBathroomException|DEPENDENT_ON_DAY_OF_WEEK|
|showerException|EXCEPTION_UNSPECIFIED|
|showerException|UNDER_CONSTRUCTION|
|showerException|DEPENDENT_ON_SEASON|
|showerException|DEPENDENT_ON_DAY_OF_WEEK|
|toiletException|EXCEPTION_UNSPECIFIED|
|toiletException|UNDER_CONSTRUCTION|
|toiletException|DEPENDENT_ON_SEASON|
|toiletException|DEPENDENT_ON_DAY_OF_WEEK|
|tvCastingException|EXCEPTION_UNSPECIFIED|
|tvCastingException|UNDER_CONSTRUCTION|
|tvCastingException|DEPENDENT_ON_SEASON|
|tvCastingException|DEPENDENT_ON_DAY_OF_WEEK|
|tvException|EXCEPTION_UNSPECIFIED|
|tvException|UNDER_CONSTRUCTION|
|tvException|DEPENDENT_ON_SEASON|
|tvException|DEPENDENT_ON_DAY_OF_WEEK|
|tvStreamingException|EXCEPTION_UNSPECIFIED|
|tvStreamingException|UNDER_CONSTRUCTION|
|tvStreamingException|DEPENDENT_ON_SEASON|
|tvStreamingException|DEPENDENT_ON_DAY_OF_WEEK|
|universalPowerAdaptersException|EXCEPTION_UNSPECIFIED|
|universalPowerAdaptersException|UNDER_CONSTRUCTION|
|universalPowerAdaptersException|DEPENDENT_ON_SEASON|
|universalPowerAdaptersException|DEPENDENT_ON_DAY_OF_WEEK|
|washerException|EXCEPTION_UNSPECIFIED|
|washerException|UNDER_CONSTRUCTION|
|washerException|DEPENDENT_ON_SEASON|
|washerException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaLayout">LivingAreaLayout</h2>
<!-- backwards compatibility -->
<a id="schemalivingarealayout"></a>
<a id="schema_LivingAreaLayout"></a>
<a id="tocSlivingarealayout"></a>
<a id="tocslivingarealayout"></a>

```json
{
  "balcony": true,
  "balconyException": "EXCEPTION_UNSPECIFIED",
  "livingAreaSqMeters": 0,
  "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
  "loft": true,
  "loftException": "EXCEPTION_UNSPECIFIED",
  "nonSmoking": true,
  "nonSmokingException": "EXCEPTION_UNSPECIFIED",
  "patio": true,
  "patioException": "EXCEPTION_UNSPECIFIED",
  "stairs": true,
  "stairsException": "EXCEPTION_UNSPECIFIED"
}
```

Information about the layout of the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balcony|boolean|false|none|Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai.|
|balconyException|string|false|none|Balcony exception.|
|livingAreaSqMeters|number(float)|false|none|Living area sq meters. The measurement in meters of the area of a guestroom's living space.|
|livingAreaSqMetersException|string|false|none|Living area sq meters exception.|
|loft|boolean|false|none|Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room.|
|loftException|string|false|none|Loft exception.|
|nonSmoking|boolean|false|none|Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited.|
|nonSmokingException|string|false|none|Non smoking exception.|
|patio|boolean|false|none|Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom.|
|patioException|string|false|none|Patio exception.|
|stairs|boolean|false|none|Stairs. There are steps leading from one level or story to another in the unit.|
|stairsException|string|false|none|Stairs exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|balconyException|EXCEPTION_UNSPECIFIED|
|balconyException|UNDER_CONSTRUCTION|
|balconyException|DEPENDENT_ON_SEASON|
|balconyException|DEPENDENT_ON_DAY_OF_WEEK|
|livingAreaSqMetersException|EXCEPTION_UNSPECIFIED|
|livingAreaSqMetersException|UNDER_CONSTRUCTION|
|livingAreaSqMetersException|DEPENDENT_ON_SEASON|
|livingAreaSqMetersException|DEPENDENT_ON_DAY_OF_WEEK|
|loftException|EXCEPTION_UNSPECIFIED|
|loftException|UNDER_CONSTRUCTION|
|loftException|DEPENDENT_ON_SEASON|
|loftException|DEPENDENT_ON_DAY_OF_WEEK|
|nonSmokingException|EXCEPTION_UNSPECIFIED|
|nonSmokingException|UNDER_CONSTRUCTION|
|nonSmokingException|DEPENDENT_ON_SEASON|
|nonSmokingException|DEPENDENT_ON_DAY_OF_WEEK|
|patioException|EXCEPTION_UNSPECIFIED|
|patioException|UNDER_CONSTRUCTION|
|patioException|DEPENDENT_ON_SEASON|
|patioException|DEPENDENT_ON_DAY_OF_WEEK|
|stairsException|EXCEPTION_UNSPECIFIED|
|stairsException|UNDER_CONSTRUCTION|
|stairsException|DEPENDENT_ON_SEASON|
|stairsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaSleeping">LivingAreaSleeping</h2>
<!-- backwards compatibility -->
<a id="schemalivingareasleeping"></a>
<a id="schema_LivingAreaSleeping"></a>
<a id="tocSlivingareasleeping"></a>
<a id="tocslivingareasleeping"></a>

```json
{
  "bedsCount": 0,
  "bedsCountException": "EXCEPTION_UNSPECIFIED",
  "bunkBedsCount": 0,
  "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
  "cribsCount": 0,
  "cribsCountException": "EXCEPTION_UNSPECIFIED",
  "doubleBedsCount": 0,
  "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
  "featherPillows": true,
  "featherPillowsException": "EXCEPTION_UNSPECIFIED",
  "hypoallergenicBedding": true,
  "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
  "kingBedsCount": 0,
  "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
  "memoryFoamPillows": true,
  "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
  "otherBedsCount": 0,
  "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
  "queenBedsCount": 0,
  "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
  "rollAwayBedsCount": 0,
  "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
  "singleOrTwinBedsCount": 0,
  "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
  "sofaBedsCount": 0,
  "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
  "syntheticPillows": true,
  "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
}
```

Information about sleeping features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bedsCount|integer(int32)|false|none|Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds.|
|bedsCountException|string|false|none|Beds count exception.|
|bunkBedsCount|integer(int32)|false|none|Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed.|
|bunkBedsCountException|string|false|none|Bunk beds count exception.|
|cribsCount|integer(int32)|false|none|Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed|
|cribsCountException|string|false|none|Cribs count exception.|
|doubleBedsCount|integer(int32)|false|none|Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed.|
|doubleBedsCountException|string|false|none|Double beds count exception.|
|featherPillows|boolean|false|none|Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese.|
|featherPillowsException|string|false|none|Feather pillows exception.|
|hypoallergenicBedding|boolean|false|none|Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander.|
|hypoallergenicBeddingException|string|false|none|Hypoallergenic bedding exception.|
|kingBedsCount|integer(int32)|false|none|King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king.|
|kingBedsCountException|string|false|none|King beds count exception.|
|memoryFoamPillows|boolean|false|none|Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down.|
|memoryFoamPillowsException|string|false|none|Memory foam pillows exception.|
|otherBedsCount|integer(int32)|false|none|Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots.|
|otherBedsCountException|string|false|none|Other beds count exception.|
|queenBedsCount|integer(int32)|false|none|Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm).|
|queenBedsCountException|string|false|none|Queen beds count exception.|
|rollAwayBedsCount|integer(int32)|false|none|Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request.|
|rollAwayBedsCountException|string|false|none|Roll away beds count exception.|
|singleOrTwinBedsCount|integer(int32)|false|none|Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult.|
|singleOrTwinBedsCountException|string|false|none|Single or twin beds count exception.|
|sofaBedsCount|integer(int32)|false|none|Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress.|
|sofaBedsCountException|string|false|none|Sofa beds count exception.|
|syntheticPillows|boolean|false|none|Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers.|
|syntheticPillowsException|string|false|none|Synthetic pillows exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|bedsCountException|EXCEPTION_UNSPECIFIED|
|bedsCountException|UNDER_CONSTRUCTION|
|bedsCountException|DEPENDENT_ON_SEASON|
|bedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|bunkBedsCountException|EXCEPTION_UNSPECIFIED|
|bunkBedsCountException|UNDER_CONSTRUCTION|
|bunkBedsCountException|DEPENDENT_ON_SEASON|
|bunkBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|cribsCountException|EXCEPTION_UNSPECIFIED|
|cribsCountException|UNDER_CONSTRUCTION|
|cribsCountException|DEPENDENT_ON_SEASON|
|cribsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|doubleBedsCountException|EXCEPTION_UNSPECIFIED|
|doubleBedsCountException|UNDER_CONSTRUCTION|
|doubleBedsCountException|DEPENDENT_ON_SEASON|
|doubleBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|featherPillowsException|EXCEPTION_UNSPECIFIED|
|featherPillowsException|UNDER_CONSTRUCTION|
|featherPillowsException|DEPENDENT_ON_SEASON|
|featherPillowsException|DEPENDENT_ON_DAY_OF_WEEK|
|hypoallergenicBeddingException|EXCEPTION_UNSPECIFIED|
|hypoallergenicBeddingException|UNDER_CONSTRUCTION|
|hypoallergenicBeddingException|DEPENDENT_ON_SEASON|
|hypoallergenicBeddingException|DEPENDENT_ON_DAY_OF_WEEK|
|kingBedsCountException|EXCEPTION_UNSPECIFIED|
|kingBedsCountException|UNDER_CONSTRUCTION|
|kingBedsCountException|DEPENDENT_ON_SEASON|
|kingBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|memoryFoamPillowsException|EXCEPTION_UNSPECIFIED|
|memoryFoamPillowsException|UNDER_CONSTRUCTION|
|memoryFoamPillowsException|DEPENDENT_ON_SEASON|
|memoryFoamPillowsException|DEPENDENT_ON_DAY_OF_WEEK|
|otherBedsCountException|EXCEPTION_UNSPECIFIED|
|otherBedsCountException|UNDER_CONSTRUCTION|
|otherBedsCountException|DEPENDENT_ON_SEASON|
|otherBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|queenBedsCountException|EXCEPTION_UNSPECIFIED|
|queenBedsCountException|UNDER_CONSTRUCTION|
|queenBedsCountException|DEPENDENT_ON_SEASON|
|queenBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|rollAwayBedsCountException|EXCEPTION_UNSPECIFIED|
|rollAwayBedsCountException|UNDER_CONSTRUCTION|
|rollAwayBedsCountException|DEPENDENT_ON_SEASON|
|rollAwayBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|singleOrTwinBedsCountException|EXCEPTION_UNSPECIFIED|
|singleOrTwinBedsCountException|UNDER_CONSTRUCTION|
|singleOrTwinBedsCountException|DEPENDENT_ON_SEASON|
|singleOrTwinBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|sofaBedsCountException|EXCEPTION_UNSPECIFIED|
|sofaBedsCountException|UNDER_CONSTRUCTION|
|sofaBedsCountException|DEPENDENT_ON_SEASON|
|sofaBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|syntheticPillowsException|EXCEPTION_UNSPECIFIED|
|syntheticPillowsException|UNDER_CONSTRUCTION|
|syntheticPillowsException|DEPENDENT_ON_SEASON|
|syntheticPillowsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "accessibility": {
    "mobilityAccessible": true,
    "mobilityAccessibleElevator": true,
    "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleParking": true,
    "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessiblePool": true,
    "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "activities": {
    "beachAccess": true,
    "beachAccessException": "EXCEPTION_UNSPECIFIED",
    "beachFront": true,
    "beachFrontException": "EXCEPTION_UNSPECIFIED",
    "bicycleRental": true,
    "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "boutiqueStores": true,
    "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
    "casino": true,
    "casinoException": "EXCEPTION_UNSPECIFIED",
    "freeBicycleRental": true,
    "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "freeWatercraftRental": true,
    "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
    "gameRoom": true,
    "gameRoomException": "EXCEPTION_UNSPECIFIED",
    "golf": true,
    "golfException": "EXCEPTION_UNSPECIFIED",
    "horsebackRiding": true,
    "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
    "nightclub": true,
    "nightclubException": "EXCEPTION_UNSPECIFIED",
    "privateBeach": true,
    "privateBeachException": "EXCEPTION_UNSPECIFIED",
    "scuba": true,
    "scubaException": "EXCEPTION_UNSPECIFIED",
    "snorkeling": true,
    "snorkelingException": "EXCEPTION_UNSPECIFIED",
    "tennis": true,
    "tennisException": "EXCEPTION_UNSPECIFIED",
    "waterSkiing": true,
    "waterSkiingException": "EXCEPTION_UNSPECIFIED",
    "watercraftRental": true,
    "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
  },
  "allUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "business": {
    "businessCenter": true,
    "businessCenterException": "EXCEPTION_UNSPECIFIED",
    "meetingRooms": true,
    "meetingRoomsCount": 0,
    "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
    "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
  },
  "commonLivingArea": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "connectivity": {
    "freeWifi": true,
    "freeWifiException": "EXCEPTION_UNSPECIFIED",
    "publicAreaWifiAvailable": true,
    "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "publicInternetTerminal": true,
    "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
    "wifiAvailable": true,
    "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "families": {
    "babysitting": true,
    "babysittingException": "EXCEPTION_UNSPECIFIED",
    "kidsActivities": true,
    "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
    "kidsClub": true,
    "kidsClubException": "EXCEPTION_UNSPECIFIED",
    "kidsFriendly": true,
    "kidsFriendlyException": "EXCEPTION_UNSPECIFIED"
  },
  "foodAndDrink": {
    "bar": true,
    "barException": "EXCEPTION_UNSPECIFIED",
    "breakfastAvailable": true,
    "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
    "breakfastBuffet": true,
    "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
    "buffet": true,
    "buffetException": "EXCEPTION_UNSPECIFIED",
    "dinnerBuffet": true,
    "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
    "freeBreakfast": true,
    "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
    "restaurant": true,
    "restaurantException": "EXCEPTION_UNSPECIFIED",
    "restaurantsCount": 0,
    "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
    "roomService": true,
    "roomServiceException": "EXCEPTION_UNSPECIFIED",
    "tableService": true,
    "tableServiceException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourRoomService": true,
    "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
    "vendingMachine": true,
    "vendingMachineException": "EXCEPTION_UNSPECIFIED"
  },
  "guestUnits": [
    {
      "codes": [
        "string"
      ],
      "features": {
        "bungalowOrVilla": true,
        "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
        "connectingUnitAvailable": true,
        "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
        "executiveFloor": true,
        "executiveFloorException": "EXCEPTION_UNSPECIFIED",
        "maxAdultOccupantsCount": 0,
        "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxChildOccupantsCount": 0,
        "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxOccupantsCount": 0,
        "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "privateHome": true,
        "privateHomeException": "EXCEPTION_UNSPECIFIED",
        "suite": true,
        "suiteException": "EXCEPTION_UNSPECIFIED",
        "tier": "UNIT_TIER_UNSPECIFIED",
        "tierException": "EXCEPTION_UNSPECIFIED",
        "totalLivingAreas": {
          "accessibility": {
            "adaCompliantUnit": true,
            "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleDoorbell": true,
            "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleFireAlarm": true,
            "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleUnit": true,
            "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleBathtub": true,
            "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleShower": true,
            "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleToilet": true,
            "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleUnit": true,
            "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
          },
          "eating": {
            "coffeeMaker": true,
            "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
            "cookware": true,
            "cookwareException": "EXCEPTION_UNSPECIFIED",
            "dishwasher": true,
            "dishwasherException": "EXCEPTION_UNSPECIFIED",
            "indoorGrill": true,
            "indoorGrillException": "EXCEPTION_UNSPECIFIED",
            "kettle": true,
            "kettleException": "EXCEPTION_UNSPECIFIED",
            "kitchenAvailable": true,
            "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
            "microwave": true,
            "microwaveException": "EXCEPTION_UNSPECIFIED",
            "minibar": true,
            "minibarException": "EXCEPTION_UNSPECIFIED",
            "outdoorGrill": true,
            "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
            "oven": true,
            "ovenException": "EXCEPTION_UNSPECIFIED",
            "refrigerator": true,
            "refrigeratorException": "EXCEPTION_UNSPECIFIED",
            "sink": true,
            "sinkException": "EXCEPTION_UNSPECIFIED",
            "snackbar": true,
            "snackbarException": "EXCEPTION_UNSPECIFIED",
            "stove": true,
            "stoveException": "EXCEPTION_UNSPECIFIED",
            "teaStation": true,
            "teaStationException": "EXCEPTION_UNSPECIFIED",
            "toaster": true,
            "toasterException": "EXCEPTION_UNSPECIFIED"
          },
          "features": {
            "airConditioning": true,
            "airConditioningException": "EXCEPTION_UNSPECIFIED",
            "bathtub": true,
            "bathtubException": "EXCEPTION_UNSPECIFIED",
            "bidet": true,
            "bidetException": "EXCEPTION_UNSPECIFIED",
            "dryer": true,
            "dryerException": "EXCEPTION_UNSPECIFIED",
            "electronicRoomKey": true,
            "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
            "fireplace": true,
            "fireplaceException": "EXCEPTION_UNSPECIFIED",
            "hairdryer": true,
            "hairdryerException": "EXCEPTION_UNSPECIFIED",
            "heating": true,
            "heatingException": "EXCEPTION_UNSPECIFIED",
            "inunitSafe": true,
            "inunitSafeException": "EXCEPTION_UNSPECIFIED",
            "inunitWifiAvailable": true,
            "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
            "ironingEquipment": true,
            "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
            "payPerViewMovies": true,
            "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
            "privateBathroom": true,
            "privateBathroomException": "EXCEPTION_UNSPECIFIED",
            "shower": true,
            "showerException": "EXCEPTION_UNSPECIFIED",
            "toilet": true,
            "toiletException": "EXCEPTION_UNSPECIFIED",
            "tv": true,
            "tvCasting": true,
            "tvCastingException": "EXCEPTION_UNSPECIFIED",
            "tvException": "EXCEPTION_UNSPECIFIED",
            "tvStreaming": true,
            "tvStreamingException": "EXCEPTION_UNSPECIFIED",
            "universalPowerAdapters": true,
            "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
            "washer": true,
            "washerException": "EXCEPTION_UNSPECIFIED"
          },
          "layout": {
            "balcony": true,
            "balconyException": "EXCEPTION_UNSPECIFIED",
            "livingAreaSqMeters": 0,
            "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
            "loft": true,
            "loftException": "EXCEPTION_UNSPECIFIED",
            "nonSmoking": true,
            "nonSmokingException": "EXCEPTION_UNSPECIFIED",
            "patio": true,
            "patioException": "EXCEPTION_UNSPECIFIED",
            "stairs": true,
            "stairsException": "EXCEPTION_UNSPECIFIED"
          },
          "sleeping": {
            "bedsCount": 0,
            "bedsCountException": "EXCEPTION_UNSPECIFIED",
            "bunkBedsCount": 0,
            "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
            "cribsCount": 0,
            "cribsCountException": "EXCEPTION_UNSPECIFIED",
            "doubleBedsCount": 0,
            "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
            "featherPillows": true,
            "featherPillowsException": "EXCEPTION_UNSPECIFIED",
            "hypoallergenicBedding": true,
            "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
            "kingBedsCount": 0,
            "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
            "memoryFoamPillows": true,
            "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
            "otherBedsCount": 0,
            "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
            "queenBedsCount": 0,
            "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
            "rollAwayBedsCount": 0,
            "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
            "singleOrTwinBedsCount": 0,
            "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
            "sofaBedsCount": 0,
            "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
            "syntheticPillows": true,
            "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "views": {
          "beachView": true,
          "beachViewException": "EXCEPTION_UNSPECIFIED",
          "cityView": true,
          "cityViewException": "EXCEPTION_UNSPECIFIED",
          "gardenView": true,
          "gardenViewException": "EXCEPTION_UNSPECIFIED",
          "lakeView": true,
          "lakeViewException": "EXCEPTION_UNSPECIFIED",
          "landmarkView": true,
          "landmarkViewException": "EXCEPTION_UNSPECIFIED",
          "oceanView": true,
          "oceanViewException": "EXCEPTION_UNSPECIFIED",
          "poolView": true,
          "poolViewException": "EXCEPTION_UNSPECIFIED",
          "valleyView": true,
          "valleyViewException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "label": "string"
    }
  ],
  "healthAndSafety": {
    "enhancedCleaning": {
      "commercialGradeDisinfectantCleaning": true,
      "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
      "commonAreasEnhancedCleaning": true,
      "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedCleaningProcedures": true,
      "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedThoroughHandWashing": true,
      "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
      "employeesWearProtectiveEquipment": true,
      "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
      "guestRoomsEnhancedCleaning": true,
      "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
    },
    "increasedFoodSafety": {
      "diningAreasAdditionalSanitation": true,
      "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
      "disposableFlatware": true,
      "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
      "foodPreparationAndServingAdditionalSafety": true,
      "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
      "individualPackagedMeals": true,
      "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
      "singleUseFoodMenus": true,
      "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
    },
    "minimizedContact": {
      "contactlessCheckinCheckout": true,
      "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
      "digitalGuestRoomKeys": true,
      "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
      "housekeepingScheduledRequestOnly": true,
      "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsCommonAreas": true,
      "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsGuestRooms": true,
      "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
      "plasticKeycardsDisinfected": true,
      "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
      "roomBookingsBuffer": true,
      "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
    },
    "personalProtection": {
      "commonAreasOfferSanitizingItems": true,
      "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
      "faceMaskRequired": true,
      "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
      "guestRoomHygieneKitsAvailable": true,
      "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
      "protectiveEquipmentAvailable": true,
      "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "physicalDistancing": {
      "commonAreasPhysicalDistancingArranged": true,
      "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
      "physicalDistancingRequired": true,
      "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
      "safetyDividers": true,
      "safetyDividersException": "EXCEPTION_UNSPECIFIED",
      "sharedAreasLimitedOccupancy": true,
      "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
      "wellnessAreasHavePrivateSpaces": true,
      "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "housekeeping": {
    "dailyHousekeeping": true,
    "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
    "housekeepingAvailable": true,
    "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
    "turndownService": true,
    "turndownServiceException": "EXCEPTION_UNSPECIFIED"
  },
  "metadata": {
    "updateTime": "string"
  },
  "name": "string",
  "parking": {
    "electricCarChargingStations": true,
    "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
    "freeParking": true,
    "freeParkingException": "EXCEPTION_UNSPECIFIED",
    "freeSelfParking": true,
    "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
    "freeValetParking": true,
    "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
    "parkingAvailable": true,
    "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "selfParkingAvailable": true,
    "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "valetParkingAvailable": true,
    "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "pets": {
    "catsAllowed": true,
    "catsAllowedException": "EXCEPTION_UNSPECIFIED",
    "dogsAllowed": true,
    "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowed": true,
    "petsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowedFree": true,
    "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
  },
  "policies": {
    "allInclusiveAvailable": true,
    "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
    "allInclusiveOnly": true,
    "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
    "checkinTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkinTimeException": "EXCEPTION_UNSPECIFIED",
    "checkoutTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
    "kidsStayFree": true,
    "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
    "maxChildAge": 0,
    "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
    "maxKidsStayFreeCount": 0,
    "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
    "paymentOptions": {
      "cash": true,
      "cashException": "EXCEPTION_UNSPECIFIED",
      "cheque": true,
      "chequeException": "EXCEPTION_UNSPECIFIED",
      "creditCard": true,
      "creditCardException": "EXCEPTION_UNSPECIFIED",
      "debitCard": true,
      "debitCardException": "EXCEPTION_UNSPECIFIED",
      "mobileNfc": true,
      "mobileNfcException": "EXCEPTION_UNSPECIFIED"
    },
    "smokeFreeProperty": true,
    "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
  },
  "pools": {
    "adultPool": true,
    "adultPoolException": "EXCEPTION_UNSPECIFIED",
    "hotTub": true,
    "hotTubException": "EXCEPTION_UNSPECIFIED",
    "indoorPool": true,
    "indoorPoolException": "EXCEPTION_UNSPECIFIED",
    "indoorPoolsCount": 0,
    "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "lazyRiver": true,
    "lazyRiverException": "EXCEPTION_UNSPECIFIED",
    "lifeguard": true,
    "lifeguardException": "EXCEPTION_UNSPECIFIED",
    "outdoorPool": true,
    "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
    "outdoorPoolsCount": 0,
    "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "pool": true,
    "poolException": "EXCEPTION_UNSPECIFIED",
    "poolsCount": 0,
    "poolsCountException": "EXCEPTION_UNSPECIFIED",
    "wadingPool": true,
    "wadingPoolException": "EXCEPTION_UNSPECIFIED",
    "waterPark": true,
    "waterParkException": "EXCEPTION_UNSPECIFIED",
    "waterslide": true,
    "waterslideException": "EXCEPTION_UNSPECIFIED",
    "wavePool": true,
    "wavePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "property": {
    "builtYear": 0,
    "builtYearException": "EXCEPTION_UNSPECIFIED",
    "floorsCount": 0,
    "floorsCountException": "EXCEPTION_UNSPECIFIED",
    "lastRenovatedYear": 0,
    "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
    "roomsCount": 0,
    "roomsCountException": "EXCEPTION_UNSPECIFIED"
  },
  "services": {
    "baggageStorage": true,
    "baggageStorageException": "EXCEPTION_UNSPECIFIED",
    "concierge": true,
    "conciergeException": "EXCEPTION_UNSPECIFIED",
    "convenienceStore": true,
    "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
    "currencyExchange": true,
    "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
    "elevator": true,
    "elevatorException": "EXCEPTION_UNSPECIFIED",
    "frontDesk": true,
    "frontDeskException": "EXCEPTION_UNSPECIFIED",
    "fullServiceLaundry": true,
    "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "giftShop": true,
    "giftShopException": "EXCEPTION_UNSPECIFIED",
    "languagesSpoken": [
      {
        "languageCode": "string",
        "spoken": true,
        "spokenException": "EXCEPTION_UNSPECIFIED"
      }
    ],
    "selfServiceLaundry": true,
    "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "socialHour": true,
    "socialHourException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourFrontDesk": true,
    "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
    "wakeUpCalls": true,
    "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
  },
  "someUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "sustainability": {
    "energyEfficiency": {
      "carbonFreeEnergySources": true,
      "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
      "energyConservationProgram": true,
      "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientHeatingAndCoolingSystems": true,
      "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
      "energyEfficientLighting": true,
      "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
      "energySavingThermostats": true,
      "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
      "greenBuildingDesign": true,
      "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
      "independentOrganizationAuditsEnergyUse": true,
      "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainabilityCertifications": {
      "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
      "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
      "ecoCertifications": [
        {
          "awarded": true,
          "awardedException": "EXCEPTION_UNSPECIFIED",
          "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
        }
      ],
      "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
      "leedCertificationException": "EXCEPTION_UNSPECIFIED"
    },
    "sustainableSourcing": {
      "ecoFriendlyToiletries": true,
      "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
      "locallySourcedFoodAndBeverages": true,
      "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "organicCageFreeEggs": true,
      "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
      "organicFoodAndBeverages": true,
      "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
      "responsiblePurchasingPolicy": true,
      "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
      "responsiblySourcesSeafood": true,
      "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
      "veganMeals": true,
      "veganMealsException": "EXCEPTION_UNSPECIFIED",
      "vegetarianMeals": true,
      "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
    },
    "wasteReduction": {
      "compostableFoodContainersAndCutlery": true,
      "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
      "compostsExcessFood": true,
      "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "donatesExcessFood": true,
      "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
      "foodWasteReductionProgram": true,
      "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticStraws": true,
      "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
      "noSingleUsePlasticWaterBottles": true,
      "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
      "noStyrofoamFoodContainers": true,
      "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
      "recyclingProgram": true,
      "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
      "refillableToiletryContainers": true,
      "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesBatteries": true,
      "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesElectronics": true,
      "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
      "safelyDisposesLightbulbs": true,
      "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
      "safelyHandlesHazardousSubstances": true,
      "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
      "soapDonationProgram": true,
      "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "toiletryDonationProgram": true,
      "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
      "waterBottleFillingStations": true,
      "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
    },
    "waterConservation": {
      "independentOrganizationAuditsWaterUse": true,
      "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
      "linenReuseProgram": true,
      "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "towelReuseProgram": true,
      "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
      "waterSavingShowers": true,
      "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
      "waterSavingSinks": true,
      "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
      "waterSavingToilets": true,
      "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "transportation": {
    "airportShuttle": true,
    "airportShuttleException": "EXCEPTION_UNSPECIFIED",
    "carRentalOnProperty": true,
    "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
    "freeAirportShuttle": true,
    "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
    "freePrivateCarService": true,
    "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "localShuttle": true,
    "localShuttleException": "EXCEPTION_UNSPECIFIED",
    "privateCarService": true,
    "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "transfer": true,
    "transferException": "EXCEPTION_UNSPECIFIED"
  },
  "wellness": {
    "doctorOnCall": true,
    "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
    "ellipticalMachine": true,
    "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
    "fitnessCenter": true,
    "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeFitnessCenter": true,
    "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeWeights": true,
    "freeWeightsException": "EXCEPTION_UNSPECIFIED",
    "massage": true,
    "massageException": "EXCEPTION_UNSPECIFIED",
    "salon": true,
    "salonException": "EXCEPTION_UNSPECIFIED",
    "sauna": true,
    "saunaException": "EXCEPTION_UNSPECIFIED",
    "spa": true,
    "spaException": "EXCEPTION_UNSPECIFIED",
    "treadmill": true,
    "treadmillException": "EXCEPTION_UNSPECIFIED",
    "weightMachine": true,
    "weightMachineException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Lodging of a location that provides accomodations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[Accessibility](#schemaaccessibility)|false|none|Physical adaptations made to the property in consideration of varying levels of human physical ability.|
|activities|[Activities](#schemaactivities)|false|none|Amenities and features related to leisure and play.|
|allUnits|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|Output only. All units on the property have at least these attributes.|
|business|[Business](#schemabusiness)|false|none|Features of the property of specific interest to the business traveler.|
|commonLivingArea|[LivingArea](#schemalivingarea)|false|none|Features of the shared living areas available in this Lodging.|
|connectivity|[Connectivity](#schemaconnectivity)|false|none|The ways in which the property provides guests with the ability to access the internet.|
|families|[Families](#schemafamilies)|false|none|Services and amenities for families and young guests.|
|foodAndDrink|[FoodAndDrink](#schemafoodanddrink)|false|none|Meals, snacks, and beverages available at the property.|
|guestUnits|[[GuestUnitType](#schemaguestunittype)]|false|none|Individual GuestUnitTypes that are available in this Lodging.|
|healthAndSafety|[HealthAndSafety](#schemahealthandsafety)|false|none|Health and safety measures implemented by the hotel during COVID-19.|
|housekeeping|[Housekeeping](#schemahousekeeping)|false|none|Conveniences provided in guest units to facilitate an easier, more comfortable stay.|
|metadata|[LodgingMetadata](#schemalodgingmetadata)|false|none|Required. Metadata for the lodging.|
|name|string|false|none|Required. Google identifier for this location in the form: `locations/{location_id}/lodging`|
|parking|[Parking](#schemaparking)|false|none|Parking options at the property.|
|pets|[Pets](#schemapets)|false|none|Policies regarding guest-owned animals.|
|policies|[Policies](#schemapolicies)|false|none|Property rules that impact guests.|
|pools|[Pools](#schemapools)|false|none|Swimming pool or recreational water facilities available at the hotel.|
|property|[Property](#schemaproperty)|false|none|General factual information about the property's physical structure and important dates.|
|services|[Services](#schemaservices)|false|none|Conveniences or help provided by the property to facilitate an easier, more comfortable stay.|
|someUnits|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|Output only. Some units on the property have as much as these attributes.|
|sustainability|[Sustainability](#schemasustainability)|false|none|Sustainability practices implemented at the hotel.|
|transportation|[Transportation](#schematransportation)|false|none|Vehicles or vehicular services facilitated or owned by the property.|
|wellness|[Wellness](#schemawellness)|false|none|Guest facilities at the property to promote or maintain health, beauty, and fitness.|

<h2 id="tocS_LodgingMetadata">LodgingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalodgingmetadata"></a>
<a id="schema_LodgingMetadata"></a>
<a id="tocSlodgingmetadata"></a>
<a id="tocslodgingmetadata"></a>

```json
{
  "updateTime": "string"
}
```

Metadata for the Lodging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateTime|string(google-datetime)|false|none|Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made.|

<h2 id="tocS_MinimizedContact">MinimizedContact</h2>
<!-- backwards compatibility -->
<a id="schemaminimizedcontact"></a>
<a id="schema_MinimizedContact"></a>
<a id="tocSminimizedcontact"></a>
<a id="tocsminimizedcontact"></a>

```json
{
  "contactlessCheckinCheckout": true,
  "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
  "digitalGuestRoomKeys": true,
  "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
  "housekeepingScheduledRequestOnly": true,
  "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
  "noHighTouchItemsCommonAreas": true,
  "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
  "noHighTouchItemsGuestRooms": true,
  "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
  "plasticKeycardsDisinfected": true,
  "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
  "roomBookingsBuffer": true,
  "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
}
```

Minimized contact measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactlessCheckinCheckout|boolean|false|none|No-contact check-in and check-out.|
|contactlessCheckinCheckoutException|string|false|none|Contactless check-in check-out exception.|
|digitalGuestRoomKeys|boolean|false|none|Keyless mobile entry to guest rooms.|
|digitalGuestRoomKeysException|string|false|none|Digital guest room keys exception.|
|housekeepingScheduledRequestOnly|boolean|false|none|Housekeeping scheduled by request only.|
|housekeepingScheduledRequestOnlyException|string|false|none|Housekeeping scheduled request only exception.|
|noHighTouchItemsCommonAreas|boolean|false|none|High-touch items, such as magazines, removed from common areas.|
|noHighTouchItemsCommonAreasException|string|false|none|No high touch items common areas exception.|
|noHighTouchItemsGuestRooms|boolean|false|none|High-touch items, such as decorative pillows, removed from guest rooms.|
|noHighTouchItemsGuestRoomsException|string|false|none|No high touch items guest rooms exception.|
|plasticKeycardsDisinfected|boolean|false|none|Plastic key cards are disinfected or discarded.|
|plasticKeycardsDisinfectedException|string|false|none|Plastic keycards disinfected exception.|
|roomBookingsBuffer|boolean|false|none|Buffer maintained between room bookings.|
|roomBookingsBufferException|string|false|none|Room bookings buffer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactlessCheckinCheckoutException|EXCEPTION_UNSPECIFIED|
|contactlessCheckinCheckoutException|UNDER_CONSTRUCTION|
|contactlessCheckinCheckoutException|DEPENDENT_ON_SEASON|
|contactlessCheckinCheckoutException|DEPENDENT_ON_DAY_OF_WEEK|
|digitalGuestRoomKeysException|EXCEPTION_UNSPECIFIED|
|digitalGuestRoomKeysException|UNDER_CONSTRUCTION|
|digitalGuestRoomKeysException|DEPENDENT_ON_SEASON|
|digitalGuestRoomKeysException|DEPENDENT_ON_DAY_OF_WEEK|
|housekeepingScheduledRequestOnlyException|EXCEPTION_UNSPECIFIED|
|housekeepingScheduledRequestOnlyException|UNDER_CONSTRUCTION|
|housekeepingScheduledRequestOnlyException|DEPENDENT_ON_SEASON|
|housekeepingScheduledRequestOnlyException|DEPENDENT_ON_DAY_OF_WEEK|
|noHighTouchItemsCommonAreasException|EXCEPTION_UNSPECIFIED|
|noHighTouchItemsCommonAreasException|UNDER_CONSTRUCTION|
|noHighTouchItemsCommonAreasException|DEPENDENT_ON_SEASON|
|noHighTouchItemsCommonAreasException|DEPENDENT_ON_DAY_OF_WEEK|
|noHighTouchItemsGuestRoomsException|EXCEPTION_UNSPECIFIED|
|noHighTouchItemsGuestRoomsException|UNDER_CONSTRUCTION|
|noHighTouchItemsGuestRoomsException|DEPENDENT_ON_SEASON|
|noHighTouchItemsGuestRoomsException|DEPENDENT_ON_DAY_OF_WEEK|
|plasticKeycardsDisinfectedException|EXCEPTION_UNSPECIFIED|
|plasticKeycardsDisinfectedException|UNDER_CONSTRUCTION|
|plasticKeycardsDisinfectedException|DEPENDENT_ON_SEASON|
|plasticKeycardsDisinfectedException|DEPENDENT_ON_DAY_OF_WEEK|
|roomBookingsBufferException|EXCEPTION_UNSPECIFIED|
|roomBookingsBufferException|UNDER_CONSTRUCTION|
|roomBookingsBufferException|DEPENDENT_ON_SEASON|
|roomBookingsBufferException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Parking">Parking</h2>
<!-- backwards compatibility -->
<a id="schemaparking"></a>
<a id="schema_Parking"></a>
<a id="tocSparking"></a>
<a id="tocsparking"></a>

```json
{
  "electricCarChargingStations": true,
  "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
  "freeParking": true,
  "freeParkingException": "EXCEPTION_UNSPECIFIED",
  "freeSelfParking": true,
  "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
  "freeValetParking": true,
  "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
  "parkingAvailable": true,
  "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
  "selfParkingAvailable": true,
  "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
  "valetParkingAvailable": true,
  "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

Parking options at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|electricCarChargingStations|boolean|false|none|Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge.|
|electricCarChargingStationsException|string|false|none|Electric car charging stations exception.|
|freeParking|boolean|false|none|Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply).|
|freeParkingException|string|false|none|Free parking exception.|
|freeSelfParking|boolean|false|none|Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply.|
|freeSelfParkingException|string|false|none|Free self parking exception.|
|freeValetParking|boolean|false|none|Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free.|
|freeValetParkingException|string|false|none|Free valet parking exception.|
|parkingAvailable|boolean|false|none|Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff.|
|parkingAvailableException|string|false|none|Parking available exception.|
|selfParkingAvailable|boolean|false|none|Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee.|
|selfParkingAvailableException|string|false|none|Self parking available exception.|
|valetParkingAvailable|boolean|false|none|Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee.|
|valetParkingAvailableException|string|false|none|Valet parking available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|electricCarChargingStationsException|EXCEPTION_UNSPECIFIED|
|electricCarChargingStationsException|UNDER_CONSTRUCTION|
|electricCarChargingStationsException|DEPENDENT_ON_SEASON|
|electricCarChargingStationsException|DEPENDENT_ON_DAY_OF_WEEK|
|freeParkingException|EXCEPTION_UNSPECIFIED|
|freeParkingException|UNDER_CONSTRUCTION|
|freeParkingException|DEPENDENT_ON_SEASON|
|freeParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|freeSelfParkingException|EXCEPTION_UNSPECIFIED|
|freeSelfParkingException|UNDER_CONSTRUCTION|
|freeSelfParkingException|DEPENDENT_ON_SEASON|
|freeSelfParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|freeValetParkingException|EXCEPTION_UNSPECIFIED|
|freeValetParkingException|UNDER_CONSTRUCTION|
|freeValetParkingException|DEPENDENT_ON_SEASON|
|freeValetParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|parkingAvailableException|EXCEPTION_UNSPECIFIED|
|parkingAvailableException|UNDER_CONSTRUCTION|
|parkingAvailableException|DEPENDENT_ON_SEASON|
|parkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|selfParkingAvailableException|EXCEPTION_UNSPECIFIED|
|selfParkingAvailableException|UNDER_CONSTRUCTION|
|selfParkingAvailableException|DEPENDENT_ON_SEASON|
|selfParkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|valetParkingAvailableException|EXCEPTION_UNSPECIFIED|
|valetParkingAvailableException|UNDER_CONSTRUCTION|
|valetParkingAvailableException|DEPENDENT_ON_SEASON|
|valetParkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PaymentOptions">PaymentOptions</h2>
<!-- backwards compatibility -->
<a id="schemapaymentoptions"></a>
<a id="schema_PaymentOptions"></a>
<a id="tocSpaymentoptions"></a>
<a id="tocspaymentoptions"></a>

```json
{
  "cash": true,
  "cashException": "EXCEPTION_UNSPECIFIED",
  "cheque": true,
  "chequeException": "EXCEPTION_UNSPECIFIED",
  "creditCard": true,
  "creditCardException": "EXCEPTION_UNSPECIFIED",
  "debitCard": true,
  "debitCardException": "EXCEPTION_UNSPECIFIED",
  "mobileNfc": true,
  "mobileNfcException": "EXCEPTION_UNSPECIFIED"
}
```

Forms of payment accepted at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash|boolean|false|none|Cash. The hotel accepts payment by paper/coin currency.|
|cashException|string|false|none|Cash exception.|
|cheque|boolean|false|none|Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment.|
|chequeException|string|false|none|Cheque exception.|
|creditCard|boolean|false|none|Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate.|
|creditCardException|string|false|none|Credit card exception.|
|debitCard|boolean|false|none|Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing.|
|debitCardException|string|false|none|Debit card exception.|
|mobileNfc|boolean|false|none|Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay.|
|mobileNfcException|string|false|none|Mobile nfc exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|cashException|EXCEPTION_UNSPECIFIED|
|cashException|UNDER_CONSTRUCTION|
|cashException|DEPENDENT_ON_SEASON|
|cashException|DEPENDENT_ON_DAY_OF_WEEK|
|chequeException|EXCEPTION_UNSPECIFIED|
|chequeException|UNDER_CONSTRUCTION|
|chequeException|DEPENDENT_ON_SEASON|
|chequeException|DEPENDENT_ON_DAY_OF_WEEK|
|creditCardException|EXCEPTION_UNSPECIFIED|
|creditCardException|UNDER_CONSTRUCTION|
|creditCardException|DEPENDENT_ON_SEASON|
|creditCardException|DEPENDENT_ON_DAY_OF_WEEK|
|debitCardException|EXCEPTION_UNSPECIFIED|
|debitCardException|UNDER_CONSTRUCTION|
|debitCardException|DEPENDENT_ON_SEASON|
|debitCardException|DEPENDENT_ON_DAY_OF_WEEK|
|mobileNfcException|EXCEPTION_UNSPECIFIED|
|mobileNfcException|UNDER_CONSTRUCTION|
|mobileNfcException|DEPENDENT_ON_SEASON|
|mobileNfcException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PersonalProtection">PersonalProtection</h2>
<!-- backwards compatibility -->
<a id="schemapersonalprotection"></a>
<a id="schema_PersonalProtection"></a>
<a id="tocSpersonalprotection"></a>
<a id="tocspersonalprotection"></a>

```json
{
  "commonAreasOfferSanitizingItems": true,
  "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
  "faceMaskRequired": true,
  "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
  "guestRoomHygieneKitsAvailable": true,
  "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
  "protectiveEquipmentAvailable": true,
  "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

Personal protection measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonAreasOfferSanitizingItems|boolean|false|none|Hand-sanitizer and/or sanitizing wipes are offered in common areas.|
|commonAreasOfferSanitizingItemsException|string|false|none|Common areas offer sanitizing items exception.|
|faceMaskRequired|boolean|false|none|Masks required on the property.|
|faceMaskRequiredException|string|false|none|Face mask required exception.|
|guestRoomHygieneKitsAvailable|boolean|false|none|In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes.|
|guestRoomHygieneKitsAvailableException|string|false|none|Guest room hygiene kits available exception.|
|protectiveEquipmentAvailable|boolean|false|none|Masks and/or gloves available for guests.|
|protectiveEquipmentAvailableException|string|false|none|Protective equipment available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonAreasOfferSanitizingItemsException|EXCEPTION_UNSPECIFIED|
|commonAreasOfferSanitizingItemsException|UNDER_CONSTRUCTION|
|commonAreasOfferSanitizingItemsException|DEPENDENT_ON_SEASON|
|commonAreasOfferSanitizingItemsException|DEPENDENT_ON_DAY_OF_WEEK|
|faceMaskRequiredException|EXCEPTION_UNSPECIFIED|
|faceMaskRequiredException|UNDER_CONSTRUCTION|
|faceMaskRequiredException|DEPENDENT_ON_SEASON|
|faceMaskRequiredException|DEPENDENT_ON_DAY_OF_WEEK|
|guestRoomHygieneKitsAvailableException|EXCEPTION_UNSPECIFIED|
|guestRoomHygieneKitsAvailableException|UNDER_CONSTRUCTION|
|guestRoomHygieneKitsAvailableException|DEPENDENT_ON_SEASON|
|guestRoomHygieneKitsAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|protectiveEquipmentAvailableException|EXCEPTION_UNSPECIFIED|
|protectiveEquipmentAvailableException|UNDER_CONSTRUCTION|
|protectiveEquipmentAvailableException|DEPENDENT_ON_SEASON|
|protectiveEquipmentAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Pets">Pets</h2>
<!-- backwards compatibility -->
<a id="schemapets"></a>
<a id="schema_Pets"></a>
<a id="tocSpets"></a>
<a id="tocspets"></a>

```json
{
  "catsAllowed": true,
  "catsAllowedException": "EXCEPTION_UNSPECIFIED",
  "dogsAllowed": true,
  "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
  "petsAllowed": true,
  "petsAllowedException": "EXCEPTION_UNSPECIFIED",
  "petsAllowedFree": true,
  "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
}
```

Policies regarding guest-owned animals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catsAllowed|boolean|false|none|Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.|
|catsAllowedException|string|false|none|Cats allowed exception.|
|dogsAllowed|boolean|false|none|Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.|
|dogsAllowedException|string|false|none|Dogs allowed exception.|
|petsAllowed|boolean|false|none|Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy.|
|petsAllowedException|string|false|none|Pets allowed exception.|
|petsAllowedFree|boolean|false|none|Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish.|
|petsAllowedFreeException|string|false|none|Pets allowed free exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|catsAllowedException|EXCEPTION_UNSPECIFIED|
|catsAllowedException|UNDER_CONSTRUCTION|
|catsAllowedException|DEPENDENT_ON_SEASON|
|catsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|dogsAllowedException|EXCEPTION_UNSPECIFIED|
|dogsAllowedException|UNDER_CONSTRUCTION|
|dogsAllowedException|DEPENDENT_ON_SEASON|
|dogsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|petsAllowedException|EXCEPTION_UNSPECIFIED|
|petsAllowedException|UNDER_CONSTRUCTION|
|petsAllowedException|DEPENDENT_ON_SEASON|
|petsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|petsAllowedFreeException|EXCEPTION_UNSPECIFIED|
|petsAllowedFreeException|UNDER_CONSTRUCTION|
|petsAllowedFreeException|DEPENDENT_ON_SEASON|
|petsAllowedFreeException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PhysicalDistancing">PhysicalDistancing</h2>
<!-- backwards compatibility -->
<a id="schemaphysicaldistancing"></a>
<a id="schema_PhysicalDistancing"></a>
<a id="tocSphysicaldistancing"></a>
<a id="tocsphysicaldistancing"></a>

```json
{
  "commonAreasPhysicalDistancingArranged": true,
  "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
  "physicalDistancingRequired": true,
  "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
  "safetyDividers": true,
  "safetyDividersException": "EXCEPTION_UNSPECIFIED",
  "sharedAreasLimitedOccupancy": true,
  "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
  "wellnessAreasHavePrivateSpaces": true,
  "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
}
```

Physical distancing measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonAreasPhysicalDistancingArranged|boolean|false|none|Common areas arranged to maintain physical distancing.|
|commonAreasPhysicalDistancingArrangedException|string|false|none|Common areas physical distancing arranged exception.|
|physicalDistancingRequired|boolean|false|none|Physical distancing required.|
|physicalDistancingRequiredException|string|false|none|Physical distancing required exception.|
|safetyDividers|boolean|false|none|Safety dividers at front desk and other locations.|
|safetyDividersException|string|false|none|Safety dividers exception.|
|sharedAreasLimitedOccupancy|boolean|false|none|Guest occupancy limited within shared facilities.|
|sharedAreasLimitedOccupancyException|string|false|none|Shared areas limited occupancy exception.|
|wellnessAreasHavePrivateSpaces|boolean|false|none|Private spaces designated in spa and wellness areas.|
|wellnessAreasHavePrivateSpacesException|string|false|none|Wellness areas have private spaces exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonAreasPhysicalDistancingArrangedException|EXCEPTION_UNSPECIFIED|
|commonAreasPhysicalDistancingArrangedException|UNDER_CONSTRUCTION|
|commonAreasPhysicalDistancingArrangedException|DEPENDENT_ON_SEASON|
|commonAreasPhysicalDistancingArrangedException|DEPENDENT_ON_DAY_OF_WEEK|
|physicalDistancingRequiredException|EXCEPTION_UNSPECIFIED|
|physicalDistancingRequiredException|UNDER_CONSTRUCTION|
|physicalDistancingRequiredException|DEPENDENT_ON_SEASON|
|physicalDistancingRequiredException|DEPENDENT_ON_DAY_OF_WEEK|
|safetyDividersException|EXCEPTION_UNSPECIFIED|
|safetyDividersException|UNDER_CONSTRUCTION|
|safetyDividersException|DEPENDENT_ON_SEASON|
|safetyDividersException|DEPENDENT_ON_DAY_OF_WEEK|
|sharedAreasLimitedOccupancyException|EXCEPTION_UNSPECIFIED|
|sharedAreasLimitedOccupancyException|UNDER_CONSTRUCTION|
|sharedAreasLimitedOccupancyException|DEPENDENT_ON_SEASON|
|sharedAreasLimitedOccupancyException|DEPENDENT_ON_DAY_OF_WEEK|
|wellnessAreasHavePrivateSpacesException|EXCEPTION_UNSPECIFIED|
|wellnessAreasHavePrivateSpacesException|UNDER_CONSTRUCTION|
|wellnessAreasHavePrivateSpacesException|DEPENDENT_ON_SEASON|
|wellnessAreasHavePrivateSpacesException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Policies">Policies</h2>
<!-- backwards compatibility -->
<a id="schemapolicies"></a>
<a id="schema_Policies"></a>
<a id="tocSpolicies"></a>
<a id="tocspolicies"></a>

```json
{
  "allInclusiveAvailable": true,
  "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
  "allInclusiveOnly": true,
  "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
  "checkinTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "checkinTimeException": "EXCEPTION_UNSPECIFIED",
  "checkoutTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
  "kidsStayFree": true,
  "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
  "maxChildAge": 0,
  "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
  "maxKidsStayFreeCount": 0,
  "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
  "paymentOptions": {
    "cash": true,
    "cashException": "EXCEPTION_UNSPECIFIED",
    "cheque": true,
    "chequeException": "EXCEPTION_UNSPECIFIED",
    "creditCard": true,
    "creditCardException": "EXCEPTION_UNSPECIFIED",
    "debitCard": true,
    "debitCardException": "EXCEPTION_UNSPECIFIED",
    "mobileNfc": true,
    "mobileNfcException": "EXCEPTION_UNSPECIFIED"
  },
  "smokeFreeProperty": true,
  "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
}
```

Property rules that impact guests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allInclusiveAvailable|boolean|false|none|All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately.|
|allInclusiveAvailableException|string|false|none|All inclusive available exception.|
|allInclusiveOnly|boolean|false|none|All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately.|
|allInclusiveOnlyException|string|false|none|All inclusive only exception.|
|checkinTime|[TimeOfDay](#schematimeofday)|false|none|Check-in time. The time of the day at which the hotel begins providing guests access to their unit at the beginning of their stay.|
|checkinTimeException|string|false|none|Check-in time exception.|
|checkoutTime|[TimeOfDay](#schematimeofday)|false|none|Check-out time. The time of the day on the last day of a guest's reserved stay at which the guest must vacate their room and settle their bill. Some hotels may offer late or early check out for a fee.|
|checkoutTimeException|string|false|none|Check-out time exception.|
|kidsStayFree|boolean|false|none|Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed.|
|kidsStayFreeException|string|false|none|Kids stay free exception.|
|maxChildAge|integer(int32)|false|none|Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee.|
|maxChildAgeException|string|false|none|Max child age exception.|
|maxKidsStayFreeCount|integer(int32)|false|none|Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee.|
|maxKidsStayFreeCountException|string|false|none|Max kids stay free count exception.|
|paymentOptions|[PaymentOptions](#schemapaymentoptions)|false|none|Forms of payment accepted at the property.|
|smokeFreeProperty|boolean|false|none|Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties.|
|smokeFreePropertyException|string|false|none|Smoke free property exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|allInclusiveAvailableException|EXCEPTION_UNSPECIFIED|
|allInclusiveAvailableException|UNDER_CONSTRUCTION|
|allInclusiveAvailableException|DEPENDENT_ON_SEASON|
|allInclusiveAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|allInclusiveOnlyException|EXCEPTION_UNSPECIFIED|
|allInclusiveOnlyException|UNDER_CONSTRUCTION|
|allInclusiveOnlyException|DEPENDENT_ON_SEASON|
|allInclusiveOnlyException|DEPENDENT_ON_DAY_OF_WEEK|
|checkinTimeException|EXCEPTION_UNSPECIFIED|
|checkinTimeException|UNDER_CONSTRUCTION|
|checkinTimeException|DEPENDENT_ON_SEASON|
|checkinTimeException|DEPENDENT_ON_DAY_OF_WEEK|
|checkoutTimeException|EXCEPTION_UNSPECIFIED|
|checkoutTimeException|UNDER_CONSTRUCTION|
|checkoutTimeException|DEPENDENT_ON_SEASON|
|checkoutTimeException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsStayFreeException|EXCEPTION_UNSPECIFIED|
|kidsStayFreeException|UNDER_CONSTRUCTION|
|kidsStayFreeException|DEPENDENT_ON_SEASON|
|kidsStayFreeException|DEPENDENT_ON_DAY_OF_WEEK|
|maxChildAgeException|EXCEPTION_UNSPECIFIED|
|maxChildAgeException|UNDER_CONSTRUCTION|
|maxChildAgeException|DEPENDENT_ON_SEASON|
|maxChildAgeException|DEPENDENT_ON_DAY_OF_WEEK|
|maxKidsStayFreeCountException|EXCEPTION_UNSPECIFIED|
|maxKidsStayFreeCountException|UNDER_CONSTRUCTION|
|maxKidsStayFreeCountException|DEPENDENT_ON_SEASON|
|maxKidsStayFreeCountException|DEPENDENT_ON_DAY_OF_WEEK|
|smokeFreePropertyException|EXCEPTION_UNSPECIFIED|
|smokeFreePropertyException|UNDER_CONSTRUCTION|
|smokeFreePropertyException|DEPENDENT_ON_SEASON|
|smokeFreePropertyException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Pools">Pools</h2>
<!-- backwards compatibility -->
<a id="schemapools"></a>
<a id="schema_Pools"></a>
<a id="tocSpools"></a>
<a id="tocspools"></a>

```json
{
  "adultPool": true,
  "adultPoolException": "EXCEPTION_UNSPECIFIED",
  "hotTub": true,
  "hotTubException": "EXCEPTION_UNSPECIFIED",
  "indoorPool": true,
  "indoorPoolException": "EXCEPTION_UNSPECIFIED",
  "indoorPoolsCount": 0,
  "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
  "lazyRiver": true,
  "lazyRiverException": "EXCEPTION_UNSPECIFIED",
  "lifeguard": true,
  "lifeguardException": "EXCEPTION_UNSPECIFIED",
  "outdoorPool": true,
  "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
  "outdoorPoolsCount": 0,
  "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
  "pool": true,
  "poolException": "EXCEPTION_UNSPECIFIED",
  "poolsCount": 0,
  "poolsCountException": "EXCEPTION_UNSPECIFIED",
  "wadingPool": true,
  "wadingPoolException": "EXCEPTION_UNSPECIFIED",
  "waterPark": true,
  "waterParkException": "EXCEPTION_UNSPECIFIED",
  "waterslide": true,
  "waterslideException": "EXCEPTION_UNSPECIFIED",
  "wavePool": true,
  "wavePoolException": "EXCEPTION_UNSPECIFIED"
}
```

Swimming pool or recreational water facilities available at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adultPool|boolean|false|none|Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors.|
|adultPoolException|string|false|none|Adult pool exception.|
|hotTub|boolean|false|none|Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room.|
|hotTubException|string|false|none|Hot tub exception.|
|indoorPool|boolean|false|none|Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.|
|indoorPoolException|string|false|none|Indoor pool exception.|
|indoorPoolsCount|integer(int32)|false|none|Indoor pools count. The sum of all indoor pools at the hotel.|
|indoorPoolsCountException|string|false|none|Indoor pools count exception.|
|lazyRiver|boolean|false|none|Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors.|
|lazyRiverException|string|false|none|Lazy river exception.|
|lifeguard|boolean|false|none|Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests.|
|lifeguardException|string|false|none|Lifeguard exception.|
|outdoorPool|boolean|false|none|Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children.|
|outdoorPoolException|string|false|none|Outdoor pool exception.|
|outdoorPoolsCount|integer(int32)|false|none|Outdoor pools count. The sum of all outdoor pools at the hotel.|
|outdoorPoolsCountException|string|false|none|Outdoor pools count exception.|
|pool|boolean|false|none|Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.|
|poolException|string|false|none|Pool exception.|
|poolsCount|integer(int32)|false|none|Pools count. The sum of all pools at the hotel.|
|poolsCountException|string|false|none|Pools count exception.|
|wadingPool|boolean|false|none|Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool.|
|wadingPoolException|string|false|none|Wading pool exception.|
|waterPark|boolean|false|none|Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool.|
|waterParkException|string|false|none|Water park exception.|
|waterslide|boolean|false|none|Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water.|
|waterslideException|string|false|none|Waterslide exception.|
|wavePool|boolean|false|none|Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests.|
|wavePoolException|string|false|none|Wave pool exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|adultPoolException|EXCEPTION_UNSPECIFIED|
|adultPoolException|UNDER_CONSTRUCTION|
|adultPoolException|DEPENDENT_ON_SEASON|
|adultPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|hotTubException|EXCEPTION_UNSPECIFIED|
|hotTubException|UNDER_CONSTRUCTION|
|hotTubException|DEPENDENT_ON_SEASON|
|hotTubException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorPoolException|EXCEPTION_UNSPECIFIED|
|indoorPoolException|UNDER_CONSTRUCTION|
|indoorPoolException|DEPENDENT_ON_SEASON|
|indoorPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorPoolsCountException|EXCEPTION_UNSPECIFIED|
|indoorPoolsCountException|UNDER_CONSTRUCTION|
|indoorPoolsCountException|DEPENDENT_ON_SEASON|
|indoorPoolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|lazyRiverException|EXCEPTION_UNSPECIFIED|
|lazyRiverException|UNDER_CONSTRUCTION|
|lazyRiverException|DEPENDENT_ON_SEASON|
|lazyRiverException|DEPENDENT_ON_DAY_OF_WEEK|
|lifeguardException|EXCEPTION_UNSPECIFIED|
|lifeguardException|UNDER_CONSTRUCTION|
|lifeguardException|DEPENDENT_ON_SEASON|
|lifeguardException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorPoolException|EXCEPTION_UNSPECIFIED|
|outdoorPoolException|UNDER_CONSTRUCTION|
|outdoorPoolException|DEPENDENT_ON_SEASON|
|outdoorPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorPoolsCountException|EXCEPTION_UNSPECIFIED|
|outdoorPoolsCountException|UNDER_CONSTRUCTION|
|outdoorPoolsCountException|DEPENDENT_ON_SEASON|
|outdoorPoolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|poolException|EXCEPTION_UNSPECIFIED|
|poolException|UNDER_CONSTRUCTION|
|poolException|DEPENDENT_ON_SEASON|
|poolException|DEPENDENT_ON_DAY_OF_WEEK|
|poolsCountException|EXCEPTION_UNSPECIFIED|
|poolsCountException|UNDER_CONSTRUCTION|
|poolsCountException|DEPENDENT_ON_SEASON|
|poolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|wadingPoolException|EXCEPTION_UNSPECIFIED|
|wadingPoolException|UNDER_CONSTRUCTION|
|wadingPoolException|DEPENDENT_ON_SEASON|
|wadingPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|waterParkException|EXCEPTION_UNSPECIFIED|
|waterParkException|UNDER_CONSTRUCTION|
|waterParkException|DEPENDENT_ON_SEASON|
|waterParkException|DEPENDENT_ON_DAY_OF_WEEK|
|waterslideException|EXCEPTION_UNSPECIFIED|
|waterslideException|UNDER_CONSTRUCTION|
|waterslideException|DEPENDENT_ON_SEASON|
|waterslideException|DEPENDENT_ON_DAY_OF_WEEK|
|wavePoolException|EXCEPTION_UNSPECIFIED|
|wavePoolException|UNDER_CONSTRUCTION|
|wavePoolException|DEPENDENT_ON_SEASON|
|wavePoolException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "builtYear": 0,
  "builtYearException": "EXCEPTION_UNSPECIFIED",
  "floorsCount": 0,
  "floorsCountException": "EXCEPTION_UNSPECIFIED",
  "lastRenovatedYear": 0,
  "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
  "roomsCount": 0,
  "roomsCountException": "EXCEPTION_UNSPECIFIED"
}
```

General factual information about the property's physical structure and important dates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtYear|integer(int32)|false|none|Built year. The year that construction of the property was completed.|
|builtYearException|string|false|none|Built year exception.|
|floorsCount|integer(int32)|false|none|Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests.|
|floorsCountException|string|false|none|Floors count exception.|
|lastRenovatedYear|integer(int32)|false|none|Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior.|
|lastRenovatedYearException|string|false|none|Last renovated year exception.|
|roomsCount|integer(int32)|false|none|Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops.|
|roomsCountException|string|false|none|Rooms count exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|builtYearException|EXCEPTION_UNSPECIFIED|
|builtYearException|UNDER_CONSTRUCTION|
|builtYearException|DEPENDENT_ON_SEASON|
|builtYearException|DEPENDENT_ON_DAY_OF_WEEK|
|floorsCountException|EXCEPTION_UNSPECIFIED|
|floorsCountException|UNDER_CONSTRUCTION|
|floorsCountException|DEPENDENT_ON_SEASON|
|floorsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|lastRenovatedYearException|EXCEPTION_UNSPECIFIED|
|lastRenovatedYearException|UNDER_CONSTRUCTION|
|lastRenovatedYearException|DEPENDENT_ON_SEASON|
|lastRenovatedYearException|DEPENDENT_ON_DAY_OF_WEEK|
|roomsCountException|EXCEPTION_UNSPECIFIED|
|roomsCountException|UNDER_CONSTRUCTION|
|roomsCountException|DEPENDENT_ON_SEASON|
|roomsCountException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Services">Services</h2>
<!-- backwards compatibility -->
<a id="schemaservices"></a>
<a id="schema_Services"></a>
<a id="tocSservices"></a>
<a id="tocsservices"></a>

```json
{
  "baggageStorage": true,
  "baggageStorageException": "EXCEPTION_UNSPECIFIED",
  "concierge": true,
  "conciergeException": "EXCEPTION_UNSPECIFIED",
  "convenienceStore": true,
  "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
  "currencyExchange": true,
  "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
  "elevator": true,
  "elevatorException": "EXCEPTION_UNSPECIFIED",
  "frontDesk": true,
  "frontDeskException": "EXCEPTION_UNSPECIFIED",
  "fullServiceLaundry": true,
  "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
  "giftShop": true,
  "giftShopException": "EXCEPTION_UNSPECIFIED",
  "languagesSpoken": [
    {
      "languageCode": "string",
      "spoken": true,
      "spokenException": "EXCEPTION_UNSPECIFIED"
    }
  ],
  "selfServiceLaundry": true,
  "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
  "socialHour": true,
  "socialHourException": "EXCEPTION_UNSPECIFIED",
  "twentyFourHourFrontDesk": true,
  "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
  "wakeUpCalls": true,
  "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
}
```

Conveniences or help provided by the property to facilitate an easier, more comfortable stay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baggageStorage|boolean|false|none|Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff.|
|baggageStorageException|string|false|none|Baggage storage exception.|
|concierge|boolean|false|none|Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions.|
|conciergeException|string|false|none|Concierge exception.|
|convenienceStore|boolean|false|none|Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers.|
|convenienceStoreException|string|false|none|Convenience store exception.|
|currencyExchange|boolean|false|none|Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest.|
|currencyExchangeException|string|false|none|Currency exchange exception.|
|elevator|boolean|false|none|Elevator. A passenger elevator that transports guests from one story to another. Also known as lift.|
|elevatorException|string|false|none|Elevator exception.|
|frontDesk|boolean|false|none|Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7.|
|frontDeskException|string|false|none|Front desk exception.|
|fullServiceLaundry|boolean|false|none|Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines.|
|fullServiceLaundryException|string|false|none|Full service laundry exception.|
|giftShop|boolean|false|none|Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks.|
|giftShopException|string|false|none|Gift shop exception.|
|languagesSpoken|[[LanguageSpoken](#schemalanguagespoken)]|false|none|Languages spoken by at least one staff member.|
|selfServiceLaundry|boolean|false|none|Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines.|
|selfServiceLaundryException|string|false|none|Self service laundry exception.|
|socialHour|boolean|false|none|Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour.|
|socialHourException|string|false|none|Social hour exception.|
|twentyFourHourFrontDesk|boolean|false|none|24hr front desk. Front desk is staffed 24 hours a day.|
|twentyFourHourFrontDeskException|string|false|none|24hr front desk exception.|
|wakeUpCalls|boolean|false|none|Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call.|
|wakeUpCallsException|string|false|none|Wake up calls exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|baggageStorageException|EXCEPTION_UNSPECIFIED|
|baggageStorageException|UNDER_CONSTRUCTION|
|baggageStorageException|DEPENDENT_ON_SEASON|
|baggageStorageException|DEPENDENT_ON_DAY_OF_WEEK|
|conciergeException|EXCEPTION_UNSPECIFIED|
|conciergeException|UNDER_CONSTRUCTION|
|conciergeException|DEPENDENT_ON_SEASON|
|conciergeException|DEPENDENT_ON_DAY_OF_WEEK|
|convenienceStoreException|EXCEPTION_UNSPECIFIED|
|convenienceStoreException|UNDER_CONSTRUCTION|
|convenienceStoreException|DEPENDENT_ON_SEASON|
|convenienceStoreException|DEPENDENT_ON_DAY_OF_WEEK|
|currencyExchangeException|EXCEPTION_UNSPECIFIED|
|currencyExchangeException|UNDER_CONSTRUCTION|
|currencyExchangeException|DEPENDENT_ON_SEASON|
|currencyExchangeException|DEPENDENT_ON_DAY_OF_WEEK|
|elevatorException|EXCEPTION_UNSPECIFIED|
|elevatorException|UNDER_CONSTRUCTION|
|elevatorException|DEPENDENT_ON_SEASON|
|elevatorException|DEPENDENT_ON_DAY_OF_WEEK|
|frontDeskException|EXCEPTION_UNSPECIFIED|
|frontDeskException|UNDER_CONSTRUCTION|
|frontDeskException|DEPENDENT_ON_SEASON|
|frontDeskException|DEPENDENT_ON_DAY_OF_WEEK|
|fullServiceLaundryException|EXCEPTION_UNSPECIFIED|
|fullServiceLaundryException|UNDER_CONSTRUCTION|
|fullServiceLaundryException|DEPENDENT_ON_SEASON|
|fullServiceLaundryException|DEPENDENT_ON_DAY_OF_WEEK|
|giftShopException|EXCEPTION_UNSPECIFIED|
|giftShopException|UNDER_CONSTRUCTION|
|giftShopException|DEPENDENT_ON_SEASON|
|giftShopException|DEPENDENT_ON_DAY_OF_WEEK|
|selfServiceLaundryException|EXCEPTION_UNSPECIFIED|
|selfServiceLaundryException|UNDER_CONSTRUCTION|
|selfServiceLaundryException|DEPENDENT_ON_SEASON|
|selfServiceLaundryException|DEPENDENT_ON_DAY_OF_WEEK|
|socialHourException|EXCEPTION_UNSPECIFIED|
|socialHourException|UNDER_CONSTRUCTION|
|socialHourException|DEPENDENT_ON_SEASON|
|socialHourException|DEPENDENT_ON_DAY_OF_WEEK|
|twentyFourHourFrontDeskException|EXCEPTION_UNSPECIFIED|
|twentyFourHourFrontDeskException|UNDER_CONSTRUCTION|
|twentyFourHourFrontDeskException|DEPENDENT_ON_SEASON|
|twentyFourHourFrontDeskException|DEPENDENT_ON_DAY_OF_WEEK|
|wakeUpCallsException|EXCEPTION_UNSPECIFIED|
|wakeUpCallsException|UNDER_CONSTRUCTION|
|wakeUpCallsException|DEPENDENT_ON_SEASON|
|wakeUpCallsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Sustainability">Sustainability</h2>
<!-- backwards compatibility -->
<a id="schemasustainability"></a>
<a id="schema_Sustainability"></a>
<a id="tocSsustainability"></a>
<a id="tocssustainability"></a>

```json
{
  "energyEfficiency": {
    "carbonFreeEnergySources": true,
    "carbonFreeEnergySourcesException": "EXCEPTION_UNSPECIFIED",
    "energyConservationProgram": true,
    "energyConservationProgramException": "EXCEPTION_UNSPECIFIED",
    "energyEfficientHeatingAndCoolingSystems": true,
    "energyEfficientHeatingAndCoolingSystemsException": "EXCEPTION_UNSPECIFIED",
    "energyEfficientLighting": true,
    "energyEfficientLightingException": "EXCEPTION_UNSPECIFIED",
    "energySavingThermostats": true,
    "energySavingThermostatsException": "EXCEPTION_UNSPECIFIED",
    "greenBuildingDesign": true,
    "greenBuildingDesignException": "EXCEPTION_UNSPECIFIED",
    "independentOrganizationAuditsEnergyUse": true,
    "independentOrganizationAuditsEnergyUseException": "EXCEPTION_UNSPECIFIED"
  },
  "sustainabilityCertifications": {
    "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
    "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
    "ecoCertifications": [
      {
        "awarded": true,
        "awardedException": "EXCEPTION_UNSPECIFIED",
        "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
      }
    ],
    "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
    "leedCertificationException": "EXCEPTION_UNSPECIFIED"
  },
  "sustainableSourcing": {
    "ecoFriendlyToiletries": true,
    "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
    "locallySourcedFoodAndBeverages": true,
    "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
    "organicCageFreeEggs": true,
    "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
    "organicFoodAndBeverages": true,
    "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
    "responsiblePurchasingPolicy": true,
    "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
    "responsiblySourcesSeafood": true,
    "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
    "veganMeals": true,
    "veganMealsException": "EXCEPTION_UNSPECIFIED",
    "vegetarianMeals": true,
    "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
  },
  "wasteReduction": {
    "compostableFoodContainersAndCutlery": true,
    "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
    "compostsExcessFood": true,
    "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
    "donatesExcessFood": true,
    "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
    "foodWasteReductionProgram": true,
    "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
    "noSingleUsePlasticStraws": true,
    "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
    "noSingleUsePlasticWaterBottles": true,
    "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
    "noStyrofoamFoodContainers": true,
    "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
    "recyclingProgram": true,
    "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
    "refillableToiletryContainers": true,
    "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
    "safelyDisposesBatteries": true,
    "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
    "safelyDisposesElectronics": true,
    "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
    "safelyDisposesLightbulbs": true,
    "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
    "safelyHandlesHazardousSubstances": true,
    "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
    "soapDonationProgram": true,
    "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
    "toiletryDonationProgram": true,
    "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
    "waterBottleFillingStations": true,
    "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
  },
  "waterConservation": {
    "independentOrganizationAuditsWaterUse": true,
    "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
    "linenReuseProgram": true,
    "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
    "towelReuseProgram": true,
    "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
    "waterSavingShowers": true,
    "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
    "waterSavingSinks": true,
    "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
    "waterSavingToilets": true,
    "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Sustainability practices implemented at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|energyEfficiency|[EnergyEfficiency](#schemaenergyefficiency)|false|none|Energy efficiency practices implemented at the hotel.|
|sustainabilityCertifications|[SustainabilityCertifications](#schemasustainabilitycertifications)|false|none|Sustainability certifications the hotel has been awarded.|
|sustainableSourcing|[SustainableSourcing](#schemasustainablesourcing)|false|none|Sustainable sourcing practices implemented at the hotel.|
|wasteReduction|[WasteReduction](#schemawastereduction)|false|none|Waste reduction practices implemented at the hotel.|
|waterConservation|[WaterConservation](#schemawaterconservation)|false|none|Water conservation practices implemented at the hotel.|

<h2 id="tocS_SustainabilityCertifications">SustainabilityCertifications</h2>
<!-- backwards compatibility -->
<a id="schemasustainabilitycertifications"></a>
<a id="schema_SustainabilityCertifications"></a>
<a id="tocSsustainabilitycertifications"></a>
<a id="tocssustainabilitycertifications"></a>

```json
{
  "breeamCertification": "BREEAM_CERTIFICATION_UNSPECIFIED",
  "breeamCertificationException": "EXCEPTION_UNSPECIFIED",
  "ecoCertifications": [
    {
      "awarded": true,
      "awardedException": "EXCEPTION_UNSPECIFIED",
      "ecoCertificate": "ECO_CERTIFICATE_UNSPECIFIED"
    }
  ],
  "leedCertification": "LEED_CERTIFICATION_UNSPECIFIED",
  "leedCertificationException": "EXCEPTION_UNSPECIFIED"
}
```

Sustainability certifications the hotel has been awarded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breeamCertification|string|false|none|BREEAM certification.|
|breeamCertificationException|string|false|none|BREEAM certification exception.|
|ecoCertifications|[[EcoCertification](#schemaecocertification)]|false|none|The eco certificates awarded to the hotel.|
|leedCertification|string|false|none|LEED certification. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.|
|leedCertificationException|string|false|none|LEED certification exception. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.|

#### Enumerated Values

|Property|Value|
|---|---|
|breeamCertification|BREEAM_CERTIFICATION_UNSPECIFIED|
|breeamCertification|NO_BREEAM_CERTIFICATION|
|breeamCertification|BREEAM_PASS|
|breeamCertification|BREEAM_GOOD|
|breeamCertification|BREEAM_VERY_GOOD|
|breeamCertification|BREEAM_EXCELLENT|
|breeamCertification|BREEAM_OUTSTANDING|
|breeamCertificationException|EXCEPTION_UNSPECIFIED|
|breeamCertificationException|UNDER_CONSTRUCTION|
|breeamCertificationException|DEPENDENT_ON_SEASON|
|breeamCertificationException|DEPENDENT_ON_DAY_OF_WEEK|
|leedCertification|LEED_CERTIFICATION_UNSPECIFIED|
|leedCertification|NO_LEED_CERTIFICATION|
|leedCertification|LEED_CERTIFIED|
|leedCertification|LEED_SILVER|
|leedCertification|LEED_GOLD|
|leedCertification|LEED_PLATINUM|
|leedCertificationException|EXCEPTION_UNSPECIFIED|
|leedCertificationException|UNDER_CONSTRUCTION|
|leedCertificationException|DEPENDENT_ON_SEASON|
|leedCertificationException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_SustainableSourcing">SustainableSourcing</h2>
<!-- backwards compatibility -->
<a id="schemasustainablesourcing"></a>
<a id="schema_SustainableSourcing"></a>
<a id="tocSsustainablesourcing"></a>
<a id="tocssustainablesourcing"></a>

```json
{
  "ecoFriendlyToiletries": true,
  "ecoFriendlyToiletriesException": "EXCEPTION_UNSPECIFIED",
  "locallySourcedFoodAndBeverages": true,
  "locallySourcedFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
  "organicCageFreeEggs": true,
  "organicCageFreeEggsException": "EXCEPTION_UNSPECIFIED",
  "organicFoodAndBeverages": true,
  "organicFoodAndBeveragesException": "EXCEPTION_UNSPECIFIED",
  "responsiblePurchasingPolicy": true,
  "responsiblePurchasingPolicyException": "EXCEPTION_UNSPECIFIED",
  "responsiblySourcesSeafood": true,
  "responsiblySourcesSeafoodException": "EXCEPTION_UNSPECIFIED",
  "veganMeals": true,
  "veganMealsException": "EXCEPTION_UNSPECIFIED",
  "vegetarianMeals": true,
  "vegetarianMealsException": "EXCEPTION_UNSPECIFIED"
}
```

Sustainable sourcing practices implemented at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecoFriendlyToiletries|boolean|false|none|Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free.|
|ecoFriendlyToiletriesException|string|false|none|Eco friendly toiletries exception.|
|locallySourcedFoodAndBeverages|boolean|false|none|Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced.|
|locallySourcedFoodAndBeveragesException|string|false|none|Locally sourced food and beverages exception.|
|organicCageFreeEggs|boolean|false|none|Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests).|
|organicCageFreeEggsException|string|false|none|Organic cage free eggs exception.|
|organicFoodAndBeverages|boolean|false|none|Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others.|
|organicFoodAndBeveragesException|string|false|none|Organic food and beverages exception.|
|responsiblePurchasingPolicy|boolean|false|none|Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers.|
|responsiblePurchasingPolicyException|string|false|none|Responsible purchasing policy exception.|
|responsiblySourcesSeafood|boolean|false|none|Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch "avoid" list, and must sustainably source seafood listed as "good alternative," "eco-certified," and "best choice". The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood.|
|responsiblySourcesSeafoodException|string|false|none|Responsibly sources seafood exception.|
|veganMeals|boolean|false|none|Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts.|
|veganMealsException|string|false|none|Vegan meals exception.|
|vegetarianMeals|boolean|false|none|Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood.|
|vegetarianMealsException|string|false|none|Vegetarian meals exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|ecoFriendlyToiletriesException|EXCEPTION_UNSPECIFIED|
|ecoFriendlyToiletriesException|UNDER_CONSTRUCTION|
|ecoFriendlyToiletriesException|DEPENDENT_ON_SEASON|
|ecoFriendlyToiletriesException|DEPENDENT_ON_DAY_OF_WEEK|
|locallySourcedFoodAndBeveragesException|EXCEPTION_UNSPECIFIED|
|locallySourcedFoodAndBeveragesException|UNDER_CONSTRUCTION|
|locallySourcedFoodAndBeveragesException|DEPENDENT_ON_SEASON|
|locallySourcedFoodAndBeveragesException|DEPENDENT_ON_DAY_OF_WEEK|
|organicCageFreeEggsException|EXCEPTION_UNSPECIFIED|
|organicCageFreeEggsException|UNDER_CONSTRUCTION|
|organicCageFreeEggsException|DEPENDENT_ON_SEASON|
|organicCageFreeEggsException|DEPENDENT_ON_DAY_OF_WEEK|
|organicFoodAndBeveragesException|EXCEPTION_UNSPECIFIED|
|organicFoodAndBeveragesException|UNDER_CONSTRUCTION|
|organicFoodAndBeveragesException|DEPENDENT_ON_SEASON|
|organicFoodAndBeveragesException|DEPENDENT_ON_DAY_OF_WEEK|
|responsiblePurchasingPolicyException|EXCEPTION_UNSPECIFIED|
|responsiblePurchasingPolicyException|UNDER_CONSTRUCTION|
|responsiblePurchasingPolicyException|DEPENDENT_ON_SEASON|
|responsiblePurchasingPolicyException|DEPENDENT_ON_DAY_OF_WEEK|
|responsiblySourcesSeafoodException|EXCEPTION_UNSPECIFIED|
|responsiblySourcesSeafoodException|UNDER_CONSTRUCTION|
|responsiblySourcesSeafoodException|DEPENDENT_ON_SEASON|
|responsiblySourcesSeafoodException|DEPENDENT_ON_DAY_OF_WEEK|
|veganMealsException|EXCEPTION_UNSPECIFIED|
|veganMealsException|UNDER_CONSTRUCTION|
|veganMealsException|DEPENDENT_ON_SEASON|
|veganMealsException|DEPENDENT_ON_DAY_OF_WEEK|
|vegetarianMealsException|EXCEPTION_UNSPECIFIED|
|vegetarianMealsException|UNDER_CONSTRUCTION|
|vegetarianMealsException|DEPENDENT_ON_SEASON|
|vegetarianMealsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_Transportation">Transportation</h2>
<!-- backwards compatibility -->
<a id="schematransportation"></a>
<a id="schema_Transportation"></a>
<a id="tocStransportation"></a>
<a id="tocstransportation"></a>

```json
{
  "airportShuttle": true,
  "airportShuttleException": "EXCEPTION_UNSPECIFIED",
  "carRentalOnProperty": true,
  "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
  "freeAirportShuttle": true,
  "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
  "freePrivateCarService": true,
  "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
  "localShuttle": true,
  "localShuttleException": "EXCEPTION_UNSPECIFIED",
  "privateCarService": true,
  "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
  "transfer": true,
  "transferException": "EXCEPTION_UNSPECIFIED"
}
```

Vehicles or vehicular services facilitated or owned by the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airportShuttle|boolean|false|none|Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel.|
|airportShuttleException|string|false|none|Airport shuttle exception.|
|carRentalOnProperty|boolean|false|none|Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot.|
|carRentalOnPropertyException|string|false|none|Car rental on property exception.|
|freeAirportShuttle|boolean|false|none|Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions.|
|freeAirportShuttleException|string|false|none|Free airport shuttle exception.|
|freePrivateCarService|boolean|false|none|Free private car service. Private chauffeured car service is free to guests.|
|freePrivateCarServiceException|string|false|none|Free private car service exception.|
|localShuttle|boolean|false|none|Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee.|
|localShuttleException|string|false|none|Local shuttle exception.|
|privateCarService|boolean|false|none|Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi.|
|privateCarServiceException|string|false|none|Private car service exception.|
|transfer|boolean|false|none|Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them.|
|transferException|string|false|none|Transfer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|airportShuttleException|EXCEPTION_UNSPECIFIED|
|airportShuttleException|UNDER_CONSTRUCTION|
|airportShuttleException|DEPENDENT_ON_SEASON|
|airportShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|carRentalOnPropertyException|EXCEPTION_UNSPECIFIED|
|carRentalOnPropertyException|UNDER_CONSTRUCTION|
|carRentalOnPropertyException|DEPENDENT_ON_SEASON|
|carRentalOnPropertyException|DEPENDENT_ON_DAY_OF_WEEK|
|freeAirportShuttleException|EXCEPTION_UNSPECIFIED|
|freeAirportShuttleException|UNDER_CONSTRUCTION|
|freeAirportShuttleException|DEPENDENT_ON_SEASON|
|freeAirportShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|freePrivateCarServiceException|EXCEPTION_UNSPECIFIED|
|freePrivateCarServiceException|UNDER_CONSTRUCTION|
|freePrivateCarServiceException|DEPENDENT_ON_SEASON|
|freePrivateCarServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|localShuttleException|EXCEPTION_UNSPECIFIED|
|localShuttleException|UNDER_CONSTRUCTION|
|localShuttleException|DEPENDENT_ON_SEASON|
|localShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|privateCarServiceException|EXCEPTION_UNSPECIFIED|
|privateCarServiceException|UNDER_CONSTRUCTION|
|privateCarServiceException|DEPENDENT_ON_SEASON|
|privateCarServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|transferException|EXCEPTION_UNSPECIFIED|
|transferException|UNDER_CONSTRUCTION|
|transferException|DEPENDENT_ON_SEASON|
|transferException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_ViewsFromUnit">ViewsFromUnit</h2>
<!-- backwards compatibility -->
<a id="schemaviewsfromunit"></a>
<a id="schema_ViewsFromUnit"></a>
<a id="tocSviewsfromunit"></a>
<a id="tocsviewsfromunit"></a>

```json
{
  "beachView": true,
  "beachViewException": "EXCEPTION_UNSPECIFIED",
  "cityView": true,
  "cityViewException": "EXCEPTION_UNSPECIFIED",
  "gardenView": true,
  "gardenViewException": "EXCEPTION_UNSPECIFIED",
  "lakeView": true,
  "lakeViewException": "EXCEPTION_UNSPECIFIED",
  "landmarkView": true,
  "landmarkViewException": "EXCEPTION_UNSPECIFIED",
  "oceanView": true,
  "oceanViewException": "EXCEPTION_UNSPECIFIED",
  "poolView": true,
  "poolViewException": "EXCEPTION_UNSPECIFIED",
  "valleyView": true,
  "valleyViewException": "EXCEPTION_UNSPECIFIED"
}
```

Views available from the guest unit itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beachView|boolean|false|none|Beach view. A guestroom that features a window through which guests can see the beach.|
|beachViewException|string|false|none|Beach view exception.|
|cityView|boolean|false|none|City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.|
|cityViewException|string|false|none|City view exception.|
|gardenView|boolean|false|none|Garden view. A guestroom that features a window through which guests can see a garden.|
|gardenViewException|string|false|none|Garden view exception.|
|lakeView|boolean|false|none|Lake view.|
|lakeViewException|string|false|none|Lake view exception.|
|landmarkView|boolean|false|none|Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.|
|landmarkViewException|string|false|none|Landmark view exception.|
|oceanView|boolean|false|none|Ocean view. A guestroom that features a window through which guests can see the ocean.|
|oceanViewException|string|false|none|Ocean view exception.|
|poolView|boolean|false|none|Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.|
|poolViewException|string|false|none|Pool view exception.|
|valleyView|boolean|false|none|Valley view. A guestroom that features a window through which guests can see over a valley.|
|valleyViewException|string|false|none|Valley view exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|beachViewException|EXCEPTION_UNSPECIFIED|
|beachViewException|UNDER_CONSTRUCTION|
|beachViewException|DEPENDENT_ON_SEASON|
|beachViewException|DEPENDENT_ON_DAY_OF_WEEK|
|cityViewException|EXCEPTION_UNSPECIFIED|
|cityViewException|UNDER_CONSTRUCTION|
|cityViewException|DEPENDENT_ON_SEASON|
|cityViewException|DEPENDENT_ON_DAY_OF_WEEK|
|gardenViewException|EXCEPTION_UNSPECIFIED|
|gardenViewException|UNDER_CONSTRUCTION|
|gardenViewException|DEPENDENT_ON_SEASON|
|gardenViewException|DEPENDENT_ON_DAY_OF_WEEK|
|lakeViewException|EXCEPTION_UNSPECIFIED|
|lakeViewException|UNDER_CONSTRUCTION|
|lakeViewException|DEPENDENT_ON_SEASON|
|lakeViewException|DEPENDENT_ON_DAY_OF_WEEK|
|landmarkViewException|EXCEPTION_UNSPECIFIED|
|landmarkViewException|UNDER_CONSTRUCTION|
|landmarkViewException|DEPENDENT_ON_SEASON|
|landmarkViewException|DEPENDENT_ON_DAY_OF_WEEK|
|oceanViewException|EXCEPTION_UNSPECIFIED|
|oceanViewException|UNDER_CONSTRUCTION|
|oceanViewException|DEPENDENT_ON_SEASON|
|oceanViewException|DEPENDENT_ON_DAY_OF_WEEK|
|poolViewException|EXCEPTION_UNSPECIFIED|
|poolViewException|UNDER_CONSTRUCTION|
|poolViewException|DEPENDENT_ON_SEASON|
|poolViewException|DEPENDENT_ON_DAY_OF_WEEK|
|valleyViewException|EXCEPTION_UNSPECIFIED|
|valleyViewException|UNDER_CONSTRUCTION|
|valleyViewException|DEPENDENT_ON_SEASON|
|valleyViewException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_WasteReduction">WasteReduction</h2>
<!-- backwards compatibility -->
<a id="schemawastereduction"></a>
<a id="schema_WasteReduction"></a>
<a id="tocSwastereduction"></a>
<a id="tocswastereduction"></a>

```json
{
  "compostableFoodContainersAndCutlery": true,
  "compostableFoodContainersAndCutleryException": "EXCEPTION_UNSPECIFIED",
  "compostsExcessFood": true,
  "compostsExcessFoodException": "EXCEPTION_UNSPECIFIED",
  "donatesExcessFood": true,
  "donatesExcessFoodException": "EXCEPTION_UNSPECIFIED",
  "foodWasteReductionProgram": true,
  "foodWasteReductionProgramException": "EXCEPTION_UNSPECIFIED",
  "noSingleUsePlasticStraws": true,
  "noSingleUsePlasticStrawsException": "EXCEPTION_UNSPECIFIED",
  "noSingleUsePlasticWaterBottles": true,
  "noSingleUsePlasticWaterBottlesException": "EXCEPTION_UNSPECIFIED",
  "noStyrofoamFoodContainers": true,
  "noStyrofoamFoodContainersException": "EXCEPTION_UNSPECIFIED",
  "recyclingProgram": true,
  "recyclingProgramException": "EXCEPTION_UNSPECIFIED",
  "refillableToiletryContainers": true,
  "refillableToiletryContainersException": "EXCEPTION_UNSPECIFIED",
  "safelyDisposesBatteries": true,
  "safelyDisposesBatteriesException": "EXCEPTION_UNSPECIFIED",
  "safelyDisposesElectronics": true,
  "safelyDisposesElectronicsException": "EXCEPTION_UNSPECIFIED",
  "safelyDisposesLightbulbs": true,
  "safelyDisposesLightbulbsException": "EXCEPTION_UNSPECIFIED",
  "safelyHandlesHazardousSubstances": true,
  "safelyHandlesHazardousSubstancesException": "EXCEPTION_UNSPECIFIED",
  "soapDonationProgram": true,
  "soapDonationProgramException": "EXCEPTION_UNSPECIFIED",
  "toiletryDonationProgram": true,
  "toiletryDonationProgramException": "EXCEPTION_UNSPECIFIED",
  "waterBottleFillingStations": true,
  "waterBottleFillingStationsException": "EXCEPTION_UNSPECIFIED"
}
```

Waste reduction practices implemented at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compostableFoodContainersAndCutlery|boolean|false|none|Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass.|
|compostableFoodContainersAndCutleryException|string|false|none|Compostable food containers and cutlery exception.|
|compostsExcessFood|boolean|false|none|Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing.|
|compostsExcessFoodException|string|false|none|Composts excess food exception.|
|donatesExcessFood|boolean|false|none|Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed.|
|donatesExcessFoodException|string|false|none|Donates excess food exception.|
|foodWasteReductionProgram|boolean|false|none|Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress.|
|foodWasteReductionProgramException|string|false|none|Food waste reduction program exception.|
|noSingleUsePlasticStraws|boolean|false|none|No single use plastic straws. The property bans single-use plastic straws.|
|noSingleUsePlasticStrawsException|string|false|none|No single use plastic straws exception.|
|noSingleUsePlasticWaterBottles|boolean|false|none|No single use plastic water bottles. The property bans single-use plastic water bottles.|
|noSingleUsePlasticWaterBottlesException|string|false|none|No single use plastic water bottles exception.|
|noStyrofoamFoodContainers|boolean|false|none|No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items.|
|noStyrofoamFoodContainersException|string|false|none|No styrofoam food containers exception.|
|recyclingProgram|boolean|false|none|Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals.|
|recyclingProgramException|string|false|none|Recycling program exception.|
|refillableToiletryContainers|boolean|false|none|Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion.|
|refillableToiletryContainersException|string|false|none|Refillable toiletry containers exception.|
|safelyDisposesBatteries|boolean|false|none|Safely disposes batteries. The property safely stores and disposes batteries.|
|safelyDisposesBatteriesException|string|false|none|Safely disposes batteries exception.|
|safelyDisposesElectronics|boolean|false|none|Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers).|
|safelyDisposesElectronicsException|string|false|none|Safely disposes electronics exception.|
|safelyDisposesLightbulbs|boolean|false|none|Safely disposes lightbulbs. The property safely stores and disposes lightbulbs.|
|safelyDisposesLightbulbsException|string|false|none|Safely disposes lightbulbs exception.|
|safelyHandlesHazardousSubstances|boolean|false|none|Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as "hazardous" by an authoritative body (such as OSHA or DOT), are labeled with signal words such as "Danger," "Caution," "Warning," or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals.|
|safelyHandlesHazardousSubstancesException|string|false|none|Safely handles hazardous substances exception.|
|soapDonationProgram|boolean|false|none|Soap donation program. The property participates in a soap donation program such as Clean the World or something similar.|
|soapDonationProgramException|string|false|none|Soap donation program exception.|
|toiletryDonationProgram|boolean|false|none|Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar.|
|toiletryDonationProgramException|string|false|none|Toiletry donation program exception.|
|waterBottleFillingStations|boolean|false|none|Water bottle filling stations. The property offers water stations throughout the building for guest use.|
|waterBottleFillingStationsException|string|false|none|Water bottle filling stations exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|compostableFoodContainersAndCutleryException|EXCEPTION_UNSPECIFIED|
|compostableFoodContainersAndCutleryException|UNDER_CONSTRUCTION|
|compostableFoodContainersAndCutleryException|DEPENDENT_ON_SEASON|
|compostableFoodContainersAndCutleryException|DEPENDENT_ON_DAY_OF_WEEK|
|compostsExcessFoodException|EXCEPTION_UNSPECIFIED|
|compostsExcessFoodException|UNDER_CONSTRUCTION|
|compostsExcessFoodException|DEPENDENT_ON_SEASON|
|compostsExcessFoodException|DEPENDENT_ON_DAY_OF_WEEK|
|donatesExcessFoodException|EXCEPTION_UNSPECIFIED|
|donatesExcessFoodException|UNDER_CONSTRUCTION|
|donatesExcessFoodException|DEPENDENT_ON_SEASON|
|donatesExcessFoodException|DEPENDENT_ON_DAY_OF_WEEK|
|foodWasteReductionProgramException|EXCEPTION_UNSPECIFIED|
|foodWasteReductionProgramException|UNDER_CONSTRUCTION|
|foodWasteReductionProgramException|DEPENDENT_ON_SEASON|
|foodWasteReductionProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|noSingleUsePlasticStrawsException|EXCEPTION_UNSPECIFIED|
|noSingleUsePlasticStrawsException|UNDER_CONSTRUCTION|
|noSingleUsePlasticStrawsException|DEPENDENT_ON_SEASON|
|noSingleUsePlasticStrawsException|DEPENDENT_ON_DAY_OF_WEEK|
|noSingleUsePlasticWaterBottlesException|EXCEPTION_UNSPECIFIED|
|noSingleUsePlasticWaterBottlesException|UNDER_CONSTRUCTION|
|noSingleUsePlasticWaterBottlesException|DEPENDENT_ON_SEASON|
|noSingleUsePlasticWaterBottlesException|DEPENDENT_ON_DAY_OF_WEEK|
|noStyrofoamFoodContainersException|EXCEPTION_UNSPECIFIED|
|noStyrofoamFoodContainersException|UNDER_CONSTRUCTION|
|noStyrofoamFoodContainersException|DEPENDENT_ON_SEASON|
|noStyrofoamFoodContainersException|DEPENDENT_ON_DAY_OF_WEEK|
|recyclingProgramException|EXCEPTION_UNSPECIFIED|
|recyclingProgramException|UNDER_CONSTRUCTION|
|recyclingProgramException|DEPENDENT_ON_SEASON|
|recyclingProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|refillableToiletryContainersException|EXCEPTION_UNSPECIFIED|
|refillableToiletryContainersException|UNDER_CONSTRUCTION|
|refillableToiletryContainersException|DEPENDENT_ON_SEASON|
|refillableToiletryContainersException|DEPENDENT_ON_DAY_OF_WEEK|
|safelyDisposesBatteriesException|EXCEPTION_UNSPECIFIED|
|safelyDisposesBatteriesException|UNDER_CONSTRUCTION|
|safelyDisposesBatteriesException|DEPENDENT_ON_SEASON|
|safelyDisposesBatteriesException|DEPENDENT_ON_DAY_OF_WEEK|
|safelyDisposesElectronicsException|EXCEPTION_UNSPECIFIED|
|safelyDisposesElectronicsException|UNDER_CONSTRUCTION|
|safelyDisposesElectronicsException|DEPENDENT_ON_SEASON|
|safelyDisposesElectronicsException|DEPENDENT_ON_DAY_OF_WEEK|
|safelyDisposesLightbulbsException|EXCEPTION_UNSPECIFIED|
|safelyDisposesLightbulbsException|UNDER_CONSTRUCTION|
|safelyDisposesLightbulbsException|DEPENDENT_ON_SEASON|
|safelyDisposesLightbulbsException|DEPENDENT_ON_DAY_OF_WEEK|
|safelyHandlesHazardousSubstancesException|EXCEPTION_UNSPECIFIED|
|safelyHandlesHazardousSubstancesException|UNDER_CONSTRUCTION|
|safelyHandlesHazardousSubstancesException|DEPENDENT_ON_SEASON|
|safelyHandlesHazardousSubstancesException|DEPENDENT_ON_DAY_OF_WEEK|
|soapDonationProgramException|EXCEPTION_UNSPECIFIED|
|soapDonationProgramException|UNDER_CONSTRUCTION|
|soapDonationProgramException|DEPENDENT_ON_SEASON|
|soapDonationProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|toiletryDonationProgramException|EXCEPTION_UNSPECIFIED|
|toiletryDonationProgramException|UNDER_CONSTRUCTION|
|toiletryDonationProgramException|DEPENDENT_ON_SEASON|
|toiletryDonationProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|waterBottleFillingStationsException|EXCEPTION_UNSPECIFIED|
|waterBottleFillingStationsException|UNDER_CONSTRUCTION|
|waterBottleFillingStationsException|DEPENDENT_ON_SEASON|
|waterBottleFillingStationsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_WaterConservation">WaterConservation</h2>
<!-- backwards compatibility -->
<a id="schemawaterconservation"></a>
<a id="schema_WaterConservation"></a>
<a id="tocSwaterconservation"></a>
<a id="tocswaterconservation"></a>

```json
{
  "independentOrganizationAuditsWaterUse": true,
  "independentOrganizationAuditsWaterUseException": "EXCEPTION_UNSPECIFIED",
  "linenReuseProgram": true,
  "linenReuseProgramException": "EXCEPTION_UNSPECIFIED",
  "towelReuseProgram": true,
  "towelReuseProgramException": "EXCEPTION_UNSPECIFIED",
  "waterSavingShowers": true,
  "waterSavingShowersException": "EXCEPTION_UNSPECIFIED",
  "waterSavingSinks": true,
  "waterSavingSinksException": "EXCEPTION_UNSPECIFIED",
  "waterSavingToilets": true,
  "waterSavingToiletsException": "EXCEPTION_UNSPECIFIED"
}
```

Water conservation practices implemented at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|independentOrganizationAuditsWaterUse|boolean|false|none|Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits).|
|independentOrganizationAuditsWaterUseException|string|false|none|Independent organization audits water use exception.|
|linenReuseProgram|boolean|false|none|Linen reuse program. The property offers a linen reuse program.|
|linenReuseProgramException|string|false|none|Linen reuse program exception.|
|towelReuseProgram|boolean|false|none|Towel reuse program. The property offers a towel reuse program.|
|towelReuseProgramException|string|false|none|Towel reuse program exception.|
|waterSavingShowers|boolean|false|none|Water saving showers. All of the property's guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm).|
|waterSavingShowersException|string|false|none|Water saving showers exception.|
|waterSavingSinks|boolean|false|none|Water saving sinks. All of the property's guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm.|
|waterSavingSinksException|string|false|none|Water saving sinks exception.|
|waterSavingToilets|boolean|false|none|Water saving toilets. All of the property's toilets use 1.6 gallons per flush, or less.|
|waterSavingToiletsException|string|false|none|Water saving toilets exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|independentOrganizationAuditsWaterUseException|EXCEPTION_UNSPECIFIED|
|independentOrganizationAuditsWaterUseException|UNDER_CONSTRUCTION|
|independentOrganizationAuditsWaterUseException|DEPENDENT_ON_SEASON|
|independentOrganizationAuditsWaterUseException|DEPENDENT_ON_DAY_OF_WEEK|
|linenReuseProgramException|EXCEPTION_UNSPECIFIED|
|linenReuseProgramException|UNDER_CONSTRUCTION|
|linenReuseProgramException|DEPENDENT_ON_SEASON|
|linenReuseProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|towelReuseProgramException|EXCEPTION_UNSPECIFIED|
|towelReuseProgramException|UNDER_CONSTRUCTION|
|towelReuseProgramException|DEPENDENT_ON_SEASON|
|towelReuseProgramException|DEPENDENT_ON_DAY_OF_WEEK|
|waterSavingShowersException|EXCEPTION_UNSPECIFIED|
|waterSavingShowersException|UNDER_CONSTRUCTION|
|waterSavingShowersException|DEPENDENT_ON_SEASON|
|waterSavingShowersException|DEPENDENT_ON_DAY_OF_WEEK|
|waterSavingSinksException|EXCEPTION_UNSPECIFIED|
|waterSavingSinksException|UNDER_CONSTRUCTION|
|waterSavingSinksException|DEPENDENT_ON_SEASON|
|waterSavingSinksException|DEPENDENT_ON_DAY_OF_WEEK|
|waterSavingToiletsException|EXCEPTION_UNSPECIFIED|
|waterSavingToiletsException|UNDER_CONSTRUCTION|
|waterSavingToiletsException|DEPENDENT_ON_SEASON|
|waterSavingToiletsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Wellness">Wellness</h2>
<!-- backwards compatibility -->
<a id="schemawellness"></a>
<a id="schema_Wellness"></a>
<a id="tocSwellness"></a>
<a id="tocswellness"></a>

```json
{
  "doctorOnCall": true,
  "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
  "ellipticalMachine": true,
  "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
  "fitnessCenter": true,
  "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
  "freeFitnessCenter": true,
  "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
  "freeWeights": true,
  "freeWeightsException": "EXCEPTION_UNSPECIFIED",
  "massage": true,
  "massageException": "EXCEPTION_UNSPECIFIED",
  "salon": true,
  "salonException": "EXCEPTION_UNSPECIFIED",
  "sauna": true,
  "saunaException": "EXCEPTION_UNSPECIFIED",
  "spa": true,
  "spaException": "EXCEPTION_UNSPECIFIED",
  "treadmill": true,
  "treadmillException": "EXCEPTION_UNSPECIFIED",
  "weightMachine": true,
  "weightMachineException": "EXCEPTION_UNSPECIFIED"
}
```

Guest facilities at the property to promote or maintain health, beauty, and fitness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doctorOnCall|boolean|false|none|Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times.|
|doctorOnCallException|string|false|none|Doctor on call exception.|
|ellipticalMachine|boolean|false|none|Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club.|
|ellipticalMachineException|string|false|none|Elliptical machine exception.|
|fitnessCenter|boolean|false|none|Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center.|
|fitnessCenterException|string|false|none|Fitness center exception.|
|freeFitnessCenter|boolean|false|none|Free fitness center. Guests may use the fitness center for free.|
|freeFitnessCenterException|string|false|none|Free fitness center exception.|
|freeWeights|boolean|false|none|Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club.|
|freeWeightsException|string|false|none|Free weights exception.|
|massage|boolean|false|none|Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief.|
|massageException|string|false|none|Massage exception.|
|salon|boolean|false|none|Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon.|
|salonException|string|false|none|Salon exception.|
|sauna|boolean|false|none|Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room.|
|saunaException|string|false|none|Sauna exception.|
|spa|boolean|false|none|Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well.|
|spaException|string|false|none|Spa exception.|
|treadmill|boolean|false|none|Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club.|
|treadmillException|string|false|none|Treadmill exception.|
|weightMachine|boolean|false|none|Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club.|
|weightMachineException|string|false|none|Weight machine exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|doctorOnCallException|EXCEPTION_UNSPECIFIED|
|doctorOnCallException|UNDER_CONSTRUCTION|
|doctorOnCallException|DEPENDENT_ON_SEASON|
|doctorOnCallException|DEPENDENT_ON_DAY_OF_WEEK|
|ellipticalMachineException|EXCEPTION_UNSPECIFIED|
|ellipticalMachineException|UNDER_CONSTRUCTION|
|ellipticalMachineException|DEPENDENT_ON_SEASON|
|ellipticalMachineException|DEPENDENT_ON_DAY_OF_WEEK|
|fitnessCenterException|EXCEPTION_UNSPECIFIED|
|fitnessCenterException|UNDER_CONSTRUCTION|
|fitnessCenterException|DEPENDENT_ON_SEASON|
|fitnessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|freeFitnessCenterException|EXCEPTION_UNSPECIFIED|
|freeFitnessCenterException|UNDER_CONSTRUCTION|
|freeFitnessCenterException|DEPENDENT_ON_SEASON|
|freeFitnessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|freeWeightsException|EXCEPTION_UNSPECIFIED|
|freeWeightsException|UNDER_CONSTRUCTION|
|freeWeightsException|DEPENDENT_ON_SEASON|
|freeWeightsException|DEPENDENT_ON_DAY_OF_WEEK|
|massageException|EXCEPTION_UNSPECIFIED|
|massageException|UNDER_CONSTRUCTION|
|massageException|DEPENDENT_ON_SEASON|
|massageException|DEPENDENT_ON_DAY_OF_WEEK|
|salonException|EXCEPTION_UNSPECIFIED|
|salonException|UNDER_CONSTRUCTION|
|salonException|DEPENDENT_ON_SEASON|
|salonException|DEPENDENT_ON_DAY_OF_WEEK|
|saunaException|EXCEPTION_UNSPECIFIED|
|saunaException|UNDER_CONSTRUCTION|
|saunaException|DEPENDENT_ON_SEASON|
|saunaException|DEPENDENT_ON_DAY_OF_WEEK|
|spaException|EXCEPTION_UNSPECIFIED|
|spaException|UNDER_CONSTRUCTION|
|spaException|DEPENDENT_ON_SEASON|
|spaException|DEPENDENT_ON_DAY_OF_WEEK|
|treadmillException|EXCEPTION_UNSPECIFIED|
|treadmillException|UNDER_CONSTRUCTION|
|treadmillException|DEPENDENT_ON_SEASON|
|treadmillException|DEPENDENT_ON_DAY_OF_WEEK|
|weightMachineException|EXCEPTION_UNSPECIFIED|
|weightMachineException|UNDER_CONSTRUCTION|
|weightMachineException|DEPENDENT_ON_SEASON|
|weightMachineException|DEPENDENT_ON_DAY_OF_WEEK|
