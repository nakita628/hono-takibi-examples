<h1 id="google-home">Google Home v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Google Home Local API
This is an unofficial documentation of the local API used by the Home app to communicate with GH devices.
[GitHub Repo](https://github.com/rithvikvibhu/GHLocalApi)

[![GitHub stars](https://img.shields.io/github/stars/rithvikvibhu/GHLocalApi)](https://github.com/rithvikvibhu/GHLocalApi/stargazers) [![GitHub license](https://img.shields.io/github/license/rithvikvibhu/GHLocalApi)](https://github.com/rithvikvibhu/GHLocalApi/blob/master/LICENSE.md)

## Getting Started

Requests must be made over HTTPS, port 8443, so the base URL for these endpoints is: `https://<google-home-ip>:8443/setup/`

Get the IP of Google Home from the Google Home app (Device Settings -> End of the list) or from your router.

GET requests are simple, in the browser kind.  
POST requests need to set the header (when there's a body): `content-type: application/json`

## Authentication

Since June 2019, most requests (with exceptions like `/setup/eureka_info`) need a local authorization token.

There are 3 kinds of tokens involved here:

### Local Authorization Token
This token must be sent in all requests in the header `cast-local-authorization-token`. It is short-lived (~1 day) and may change unexpectedly (with a sync, change in homegraph, etc.)
##### Get this token
- With access to an android device, [get this token directly by either method](https://gist.github.com/rithvikvibhu/1a0f4937af957ef6a78453e3be482c1f).
- Without a device, or to integrate it with a script, use an access token to get the homegraph and extract the token. To get an access token, read the next section. Check the example section for more info.

### Access Token
This is a standard google oauth2 access token. It is in the form `ya29.***`.
This gives access to the Google Home Foyer API. These expire in an hour.
Use this to get the homegraph (and then the local authorization token above).
##### Get this token
To get this access token, either a Google account username/password or a Google Master Token is needed. More info in the gist.
Use the script [from this gist](https://gist.github.com/rithvikvibhu/952f83ea656c6782fbd0f1645059055d).

### Master Token
This is in the form `aas_et/***` and can be used to request access tokens.
##### Get this token
The same [script in the gist](https://gist.github.com/rithvikvibhu/952f83ea656c6782fbd0f1645059055d) that gets the access token can also get the master token. Needs Google account creds.

## Example

Here's the whole flow from just a pair of username/password to using the local API.

Prerequisites:
- [grpcurl](https://github.com/fullstorydev/grpcurl)
- [Proto files](https://drive.google.com/drive/folders/1RvnN3y-G23pd2SWHmfV_7sef8QU5GNF4?usp=sharing) (preserve folder structure)

### 1. Get an access token with the script
- Download get_tokens.py
- Fill in username and password
```sh
python3 get_tokens.py
# Note down the access token printed.
```

### 2. Use the access token and get home graph
- This prints the json and uses jq to parse and filter out the fields deviceName and localAuthToken
- This will give a list of all devices and their local auth tokens
```sh
./grpcurl -H 'authorization: Bearer ya29.a0Af****' \
	-import-path /path/to/protos \
	-proto /path/to/protos/google/internal/home/foyer/v1.proto \
	googlehomefoyer-pa.googleapis.com:443 \
	google.internal.home.foyer.v1.StructuresService/GetHomeGraph | jq '.home.devices[] | {deviceName, localAuthToken}'
# Note down the local auth token for the device you want.
```

### 3. Make the call to the local device using the local auth token
```sh
curl -H "cast-local-authorization-token: LOCAL_AUTH_TOKEN" --verbose --insecure https://192.168.0.18:8443/setup/bluetooth/status
```

Base URLs:

* <a href="http://example.com/setup">http://example.com/setup</a>

# Authentication

* API Key (cast-local-authorization-token)
    - Parameter Name: **cast-local-authorization-token**, in: header. Local authorization token. For more details, check the [Authentication section](#section/Google-Home-Local-API/Authentication).

<h1 id="google-home-device-info">Device Info</h1>

Endpoints in this folder give information about the device.

## Check Ready Status

<a id="opIdCheckReadyStatus"></a>

> Code samples

```bash
curl https://example.com/assistant/check_ready_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "play_ready_message": true,
    "user_id": "xxxxx"
  }'
```

`POST /assistant/check_ready_status`

**Update:** This seems to have changed now and is no longer possible. The error is also new.

Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."

> Body parameter

```json
{
  "play_ready_message": true,
  "user_id": "xxxxx"
}
```

<h3 id="check-ready-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CheckReadyStatusRequest](#schemacheckreadystatusrequest)|true|none|
|» play_ready_message|body|boolean|true|none|
|» user_id|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "can_enroll": true,
  "enrollment_state": 0,
  "error_code": 0,
  "ready": false,
  "retryable": true
}
```

<h3 id="check-ready-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example13](#schemaexample13)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Eureka Info

<a id="opIdEurekaInfo"></a>

> Code samples

```bash
curl 'https://example.com/eureka_info?params=version%2Caudio%2Cname%2Cbuild_info%2Cdetail%2Cdevice_info%2Cnet%2Cwifi%2Csetup%2Csettings%2Copt_in%2Copencast%2Cmultizone%2Cproxy%2Cnight_mode_params%2Cuser_eq%2Croom_equalizer%2Csign%2Caogh%2Cultrasound%2Cmesh&options=detail%2Csign&nonce=1234512345' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /eureka_info`

This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`

Nested items can also be filtered using the dot notation. Example: `audio.digital`

The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.

The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).

<h3 id="eureka-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|true|none|
|options|query|string|true|none|
|nonce|query|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "aogh": {
    "aogh_api_version": "2"
  },
  "audio": {
    "digital": false
  },
  "build_info": {
    "build_type": 2,
    "cast_build_revision": "1.46.195690",
    "cast_control_version": 1,
    "preview_channel_state": 4,
    "release_track": "preview-joining-stable-channel",
    "system_build_number": "195690"
  },
  "detail": {
    "icon_list": [
      {
        "depth": 32,
        "height": 55,
        "mimetype": "image/png",
        "url": "/setup/icon.png",
        "width": 98
      }
    ],
    "locale": {
      "display_string": "English (United States)"
    },
    "timezone": {
      "display_string": "India Standard Time (Kolkata)",
      "offset": 330
    }
  },
  "device_info": {
    "4k_blocked": 0,
    "capabilities": {
      "aogh_supported": true,
      "assistant_supported": true,
      "audio_hdr_supported": false,
      "audio_surround_mode_supported": false,
      "ble_supported": true,
      "bluetooth_audio_sink_supported": true,
      "bluetooth_audio_source_supported": true,
      "bluetooth_supported": true,
      "cloudcast_supported": true,
      "content_filters_supported": true,
      "display_supported": false,
      "fdr_supported": false,
      "hdmi_prefer_50hz_supported": false,
      "hdmi_prefer_high_fps_supported": false,
      "hotspot_supported": true,
      "https_setup_supported": true,
      "input_management_supported": true,
      "keep_hotspot_until_connected_supported": true,
      "multi_user_supported": true,
      "multichannel_group_supported": true,
      "multizone_supported": true,
      "night_mode_supported": true,
      "night_mode_supported_v2": true,
      "opencast_supported": false,
      "preview_channel_supported": true,
      "reboot_supported": true,
      "remote_ducking_supported": true,
      "separate_tts_volume_supported": true,
      "setup_supported": true,
      "sleep_mode_supported": true,
      "stats_supported": true,
      "system_sound_effects_supported": false,
      "user_eq_supported": true,
      "wifi_auto_save_supported": true,
      "wifi_regulatory_domain_locked": true,
      "wifi_supported": true
    },
    "cloud_device_id": "003D...",
    "factory_country_code": "US",
    "hotspot_bssid": "FA:8F:CA:30:41:71",
    "local_authorization_token_hash": "hBt2...",
    "mac_address": "F4:F5:...",
    "manufacturer": "Google Inc.",
    "model_name": "Google Home",
    "product_name": "pineapple",
    "public_key": "MIIB...",
    "ssdp_udn": "baab...",
    "uma_client_id": "8ce0...",
    "uptime": 48509.169282,
    "weave_device_id": ""
  },
  "multizone": {
    "audio_output_delay": 0,
    "audio_output_delay_hdmi": 0,
    "audio_output_delay_oem": 0,
    "aux_in_group": "",
    "dynamic_groups": [],
    "groups": [],
    "multichannel_status": 0
  },
  "name": "Bedroom Speaker",
  "net": {
    "ethernet_connected": false,
    "ip_address": "192.168.0.18",
    "online": true
  },
  "night_mode_params": {
    "device_override_do_not_disturb": 0,
    "do_not_disturb": true,
    "enabled": true,
    "led_brightness": 0.5799999833106995,
    "volume": 0.5899999737739563,
    "windows": [
      {
        "days": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "length_hours": 6,
        "start_hour": 23
      }
    ]
  },
  "opencast": {
    "pin_code": ""
  },
  "opt_in": {
    "audio_hdr": false,
    "audio_surround_mode": 0,
    "autoplay_on_signal": true,
    "cloud_ipc": true,
    "hdmi_prefer_50hz": false,
    "hdmi_prefer_high_fps": true,
    "managed_mode": false,
    "opencast": true,
    "preview_channel": true,
    "remote_ducking": true,
    "stats": true,
    "ui_flipped": false,
    "wpa3_support_enabled": false
  },
  "proxy": {
    "mode": "system"
  },
  "settings": {
    "closed_caption": {},
    "control_notifications": 1,
    "country_code": "IN",
    "locale": "en-US",
    "network_standby": 0,
    "system_sound_effects": true,
    "time_format": 1,
    "timezone": "Asia/Kolkata",
    "wake_on_cast": 1
  },
  "setup": {
    "qr_ssid_suffix": "",
    "setup_state": 60,
    "ssid_suffix": "k",
    "stats": {
      "num_check_connectivity": 0,
      "num_connect_wifi": 0,
      "num_connected_wifi_not_saved": 0,
      "num_initial_eureka_info": 0,
      "num_obtain_ip": 0
    },
    "tos_accepted": true
  },
  "sign": {
    "certificate": "-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n",
    "intermediate_certs": [
      "-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n"
    ],
    "nonce": "1234512345",
    "signed_data": "Rr5Q..."
  },
  "user_eq": {
    "high_shelf": {
      "frequency": 4500,
      "gain_db": 0,
      "quality": 0.707
    },
    "low_shelf": {
      "frequency": 150,
      "gain_db": 0,
      "quality": 0.707
    },
    "max_peaking_eqs": 0,
    "peaking_eqs": []
  },
  "version": 10,
  "wifi": {
    "bssid": "a0:ab:...",
    "has_changes": false,
    "noise_level": -90,
    "signal_level": -50,
    "ssid": "Nucl...",
    "wpa_configured": true,
    "wpa_id": 1,
    "wpa_state": 10
  }
}
```

<h3 id="eureka-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example1](#schemaexample1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## App Device ID

<a id="opIdAppDeviceID"></a>

> Code samples

```bash
curl https://example.com/get_app_device_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "app_id": "E8C28D3C"
  }'
```

`POST /get_app_device_id`

This gives "app device id", "certificate" and "signed data".  
The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  

The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.

Not sure what the other two are.

> Body parameter

```json
{
  "app_id": "E8C28D3C"
}
```

<h3 id="app-device-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppDeviceIDRequest](#schemaappdeviceidrequest)|true|none|
|» app_id|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "app_device_id": "...",
  "certificate": "-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n",
  "signed_data": "HAjp..."
}
```

<h3 id="app-device-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example11](#schemaexample11)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Offer

<a id="opIdOffer"></a>

> Code samples

```bash
curl https://example.com/offer \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /offer`

This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
A new token is generated for every request.

> Example responses

> 200 Response

```json
{
  "token": "ADtq..."
}
```

<h3 id="offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example12](#schemaexample12)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Locales

<a id="opIdLocales"></a>

> Code samples

```bash
curl https://example.com/supported_locales \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /supported_locales`

Simply returns a list of all supported locales.

> Example responses

> 200 Response

```json
[
  {
    "display_string": "Arabic - العربية",
    "locale": "ar"
  },
  {
    "display_string": "German - Deutsch",
    "locale": "de"
  },
  {
    "display_string": "English (United States)",
    "locale": "en-US"
  }
]
```

<h3 id="locales-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="locales-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example15](#schemaexample15)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Timezones

<a id="opIdTimezones"></a>

> Code samples

```bash
curl https://example.com/supported_timezones \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /supported_timezones`

Simply returns a list of all supported timezones.

> Example responses

> 200 Response

```json
[
  {
    "display_string": "Samoa Standard Time (Midway)",
    "offset": -660,
    "timezone": "Pacific/Midway"
  },
  {
    "display_string": "Hawaii-Aleutian Standard Time (Honolulu)",
    "offset": -600,
    "timezone": "Pacific/Honolulu"
  }
]
```

<h3 id="timezones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="timezones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example14](#schemaexample14)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Test Internet Download Speed

<a id="opIdTestInternetDownloadSpeed"></a>

> Code samples

```bash
curl https://example.com/test_internet_download_speed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "url": "https://storage.googleapis.com/reliability-speedtest/random.txt"
  }'
```

`POST /test_internet_download_speed`

**Update:** This seems to have been removed. Returns 404 Not Found.

This endpoint tests internet download speed. Any sample file URL can be provided.

> Body parameter

```json
{
  "url": "https://storage.googleapis.com/reliability-speedtest/random.txt"
}
```

<h3 id="test-internet-download-speed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TestInternetDownloadSpeedRequest](#schematestinternetdownloadspeedrequest)|true|none|
|» url|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "bytes_received": 31457280,
  "response_code": 200,
  "time_for_data_fetch": 4722,
  "time_for_http_response": 316
}
```

<h3 id="test-internet-download-speed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example16](#schemaexample16)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

<h1 id="google-home-device-settings">Device Settings</h1>

This folder consists of all endpoints to modify and control the device.

## Night Mode settings

<a id="opIdNightModesettings"></a>

> Code samples

```bash
curl https://example.com/assistant/set_night_mode_params \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "demo_to_user": true,
    "do_not_disturb": true,
    "enabled": false,
    "led_brightness": 0.44999998807907104,
    "volume": 0.46000000834465027,
    "windows": [
      {
        "days": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "length_hours": 8,
        "start_hour": 22
      }
    ]
  }'
```

`POST /assistant/set_night_mode_params`

This sets night mode options.  
To view currently set values, use /setup/eureka_info.  
If `enabled` is set to false, night mode is disabled and the other values do not matter.  
`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.

> Body parameter

```json
{
  "demo_to_user": true,
  "do_not_disturb": true,
  "enabled": false,
  "led_brightness": 0.44999998807907104,
  "volume": 0.46000000834465027,
  "windows": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "length_hours": 8,
      "start_hour": 22
    }
  ]
}
```

<h3 id="night-mode-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NightModesettingsRequest](#schemanightmodesettingsrequest)|true|none|
|» demo_to_user|body|boolean|true|none|
|» do_not_disturb|body|boolean|true|none|
|» enabled|body|boolean|true|none|
|» led_brightness|body|number|true|none|
|» volume|body|number|true|none|
|» windows|body|[[Window](#schemawindow)]|true|none|

> Example responses

> 200 Response

```json
{
  "do_not_disturb": true,
  "enabled": false,
  "led_brightness": 0.44999998807907104,
  "volume": 0.46000000834465027,
  "windows": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "length_hours": 8,
      "start_hour": 22
    }
  ]
}
```

<h3 id="night-mode-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example17](#schemaexample17)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Reboot and Factory Reset

<a id="opIdRebootandFactoryReset"></a>

> Code samples

```bash
curl https://example.com/reboot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "params": "now"
  }'
```

`POST /reboot`

This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).

> Body parameter

```json
{
  "params": "now"
}
```

<h3 id="reboot-and-factory-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RebootandFactoryResetRequest](#schemarebootandfactoryresetrequest)|true|none|
|» params|body|string|true|none|

<h3 id="reboot-and-factory-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Set Eureka Info

<a id="opIdSetEurekaInfo"></a>

> Code samples

```bash
curl https://example.com/set_eureka_info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "name": "Living Room",
    "opt_in": {
      "opencast": true,
      "preview_channel": true,
      "remote_ducking": true,
      "stats": true
    },
    "settings": {
      "control_notifications": 2
    }
  }'
```

`POST /set_eureka_info`

This can set custom values to some options.

Only fields to be modified need to be sent, not all. The example has some modifiable fields.

TODO: List all modifiable fields.

Sending non-existant fields will still return a 200 OK, but they are not saved.

> Body parameter

```json
{
  "name": "Living Room",
  "opt_in": {
    "opencast": true,
    "preview_channel": true,
    "remote_ducking": true,
    "stats": true
  },
  "settings": {
    "control_notifications": 2
  }
}
```

<h3 id="set-eureka-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetEurekaInfoRequest](#schemaseteurekainforequest)|true|none|
|» name|body|string|true|none|
|» opt_in|body|[OptIn1](#schemaoptin1)|true|none|
|» settings|body|[Settings1](#schemasettings1)|true|none|

<h3 id="set-eureka-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

<h1 id="google-home-assistant">Assistant</h1>

This folder contains all endpoints related to Assistant's tasks like Do Not Disturb, Alarms and Timers, Accessibility and equalizer.

## Accessibility

<a id="opIdAccessibility"></a>

> Code samples

```bash
curl https://example.com/assistant/a11y_mode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "endpoint_enabled": false,
    "hotword_enabled": false
  }'
```

`POST /assistant/a11y_mode`

This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
Sending an empty-body POST request returns the current values.  
Either of the fields or both can be sent and new values will be saved.

> Body parameter

```json
{
  "endpoint_enabled": false,
  "hotword_enabled": false
}
```

<h3 id="accessibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccessibilityRequest](#schemaaccessibilityrequest)|true|none|
|» endpoint_enabled|body|boolean|true|none|
|» hotword_enabled|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "endpoint_enabled": false,
  "hotword_enabled": false
}
```

<h3 id="accessibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Getcurrentvalues](#schemagetcurrentvalues)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Get Alarms and Timers

<a id="opIdGetAlarmsandTimers"></a>

> Code samples

```bash
curl https://example.com/assistant/alarms \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /assistant/alarms`

This gives a list of all active alarms and timers.

Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).

Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
`status` is 1 for set up and 2 for ringing.

Timers have `original_duration` is the original duration.  
`status` is 1 for set up and 3 for ringing.

> Example responses

> 200 Response

```json
{
  "alarm": [
    {
      "date_pattern": {
        "day": 15,
        "month": 1,
        "year": 2018
      },
      "fire_time": 1515995400000,
      "id": "alarm/xxx",
      "status": 1,
      "time_pattern": {
        "hour": 6,
        "minute": 50,
        "second": 0
      }
    }
  ],
  "timer": [
    {
      "fire_time": 1516176765589,
      "id": "timer/xxx",
      "original_duration": 20000,
      "status": 1
    }
  ]
}
```

<h3 id="get-alarms-and-timers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example18](#schemaexample18)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Delete Alarms and Timers

<a id="opIdDeleteAlarmsandTimers"></a>

> Code samples

```bash
curl https://example.com/assistant/alarms/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "ids": [
      "timer/xxx",
      "alarm/xxx"
    ]
  }'
```

`POST /assistant/alarms/delete`

This deletes alarms and timers by their id.

`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.

> Body parameter

```json
{
  "ids": [
    "timer/xxx",
    "alarm/xxx"
  ]
}
```

<h3 id="delete-alarms-and-timers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteAlarmsandTimersRequest](#schemadeletealarmsandtimersrequest)|true|none|
|» ids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-alarms-and-timers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example19](#schemaexample19)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Alarm Volume

<a id="opIdAlarmVolume"></a>

> Code samples

```bash
curl https://example.com/assistant/alarms/volume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "volume": 1
  }'
```

`POST /assistant/alarms/volume`

This gets and sets alarms and timers volume.  
**Note:** This is not the same as normal volume.

Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
Sending an empty body gets the volume. Sending `volume` sets the volume.

> Body parameter

```json
{
  "volume": 1
}
```

<h3 id="alarm-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AlarmVolumeRequest](#schemaalarmvolumerequest)|true|none|
|» volume|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "volume": 1
}
```

<h3 id="alarm-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Getvolume](#schemagetvolume)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Do Not Disturb

<a id="opIdDoNotDisturb"></a>

> Code samples

```bash
curl https://example.com/assistant/notifications \
  -X POST \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`POST /assistant/notifications`

This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.

<h3 id="do-not-disturb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "notifications_enabled": true
}
```

<h3 id="do-not-disturb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Getcurrentstate](#schemagetcurrentstate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Set Equalizer Values

<a id="opIdSetEqualizerValues"></a>

> Code samples

```bash
curl https://example.com/user_eq/set_equalizer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "high_shelf": {
      "gain_db": 0
    },
    "low_shelf": {
      "gain_db": 0
    }
  }'
```

`POST /user_eq/set_equalizer`

This can only set new equalizer values. To get already set values, use /setup/eureka_info.

The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.

`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.

Default values are 0 for both.  
While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.

> Body parameter

```json
{
  "high_shelf": {
    "gain_db": 0
  },
  "low_shelf": {
    "gain_db": 0
  }
}
```

<h3 id="set-equalizer-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetEqualizerValuesRequest](#schemasetequalizervaluesrequest)|true|none|
|» high_shelf|body|[HighShelf1](#schemahighshelf1)|true|none|
|» low_shelf|body|[LowShelf1](#schemalowshelf1)|true|none|

<h3 id="set-equalizer-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

<h1 id="google-home-bluetooth">Bluetooth</h1>

This folder contains Bluetooth related endpoints.

## Forget paired device

<a id="opIdForgetpaireddevice"></a>

> Code samples

```bash
curl https://example.com/bluetooth/bond \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "bond": false,
    "mac_address": "xx:xx:xx:xx:xx:xx"
  }'
```

`POST /bluetooth/bond`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).

> Body parameter

```json
{
  "bond": false,
  "mac_address": "xx:xx:xx:xx:xx:xx"
}
```

<h3 id="forget-paired-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ForgetpaireddeviceRequest](#schemaforgetpaireddevicerequest)|true|none|
|» bond|body|boolean|true|none|
|» mac_address|body|string|true|none|

<h3 id="forget-paired-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Pair with Speaker

<a id="opIdPairwithSpeaker"></a>

> Code samples

```bash
curl https://example.com/bluetooth/connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "connect": true,
    "mac_address": "54:13:79:49:19:22",
    "profile": 2
  }'
```

`POST /bluetooth/connect`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This pairs with other bluetooth speakers by mac address.

> Body parameter

```json
{
  "connect": true,
  "mac_address": "54:13:79:49:19:22",
  "profile": 2
}
```

<h3 id="pair-with-speaker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PairwithSpeakerRequest](#schemapairwithspeakerrequest)|true|none|
|» connect|body|boolean|true|none|
|» mac_address|body|string|true|none|
|» profile|body|integer(int32)|true|none|

<h3 id="pair-with-speaker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Change Discoverability

<a id="opIdChangeDiscoverability"></a>

> Code samples

```bash
curl https://example.com/bluetooth/discovery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "enable_discovery": true
  }'
```

`POST /bluetooth/discovery`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 1 only**

This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).

> Body parameter

```json
{
  "enable_discovery": true
}
```

<h3 id="change-discoverability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeDiscoverabilityRequest](#schemachangediscoverabilityrequest)|true|none|
|» enable_discovery|body|boolean|true|none|

<h3 id="change-discoverability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Get Paired Devices

<a id="opIdGetPairedDevices"></a>

> Code samples

```bash
curl https://example.com/bluetooth/get_bonded \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /bluetooth/get_bonded`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.

> Example responses

> 200 Response

```json
[
  {
    "bond_date": 1503212407260.55,
    "device_class": 5898764,
    "device_type": 1,
    "last_connect_date": 1514807829482.111,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "Device Name",
    "rssi": -255,
    "service_uuids": [
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    ]
  }
]
```

<h3 id="get-paired-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-paired-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example111](#schemaexample111)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Scan for devices

<a id="opIdScanfordevices"></a>

> Code samples

```bash
curl https://example.com/bluetooth/scan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "clear_results": true,
    "enable": true,
    "timeout": 60
  }'
```

`POST /bluetooth/scan`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
To get the scan results, see /setup/bluetooth/scan_results.

> Body parameter

```json
{
  "clear_results": true,
  "enable": true,
  "timeout": 60
}
```

<h3 id="scan-for-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScanfordevicesRequest](#schemascanfordevicesrequest)|true|none|
|» clear_results|body|boolean|true|none|
|» enable|body|boolean|true|none|
|» timeout|body|integer(int32)|true|none|

<h3 id="scan-for-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Get Scan Results

<a id="opIdGetScanResults"></a>

> Code samples

```bash
curl https://example.com/bluetooth/scan_results \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /bluetooth/scan_results`

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.

`rssi` is signal strength, `name` is name, `mac_address` is mac address.  
`device_class` and `device_type` are bluetooth codes.  

The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.

> Example responses

> 200 Response

```json
[
  {
    "device_class": 525372,
    "device_type": 3,
    "expected_profiles": 0,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "KD-49X8200E",
    "rssi": -90
  },
  {
    "device_class": 5898764,
    "device_type": 1,
    "expected_profiles": 0,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "vivo 1714",
    "rssi": -96
  },
  {
    "device_class": 2491396,
    "device_type": 1,
    "expected_profiles": 1,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "Bluetooth Speaker",
    "rssi": -93
  }
]
```

<h3 id="get-scan-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-scan-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example112](#schemaexample112)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Status

<a id="opIdStatus"></a>

> Code samples

```bash
curl https://example.com/bluetooth/status \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /bluetooth/status`

> **There are 2 parts of Bluetooth.**
>
> *Part 1*: Devices like phones connect to Home and play audio through Home.  
> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
>
> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
>
> The other endpoints are common for both parts.


**For both parts**

This gives the status of all bluetooth things.
- Not sure what `audio_mode` is.
- `discovery_enabled` states whether Home is discoverable. (**Part 1**)
- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)

> Example responses

> 200 Response

```json
{
  "audio_mode": 0,
  "connected_devices": [
    {
      "device": {
        "bond_date": 1529248165656.613,
        "device_class": 2491396,
        "device_type": 1,
        "last_connect_date": 0,
        "mac_address": "xx:xx:xx:xx:xx:xx",
        "name": "PHILIPS BT64",
        "rssi": -255,
        "service_uuids": [
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        ]
      },
      "enabled_profiles": 2
    }
  ],
  "connecting_devices": [],
  "discovery_enabled": false,
  "remote_sink": {
    "bond_date": 1529248165656.613,
    "device_class": 2491396,
    "device_type": 1,
    "last_connect_date": 0,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "PHILIPS BT64",
    "rssi": -255,
    "service_uuids": [
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    ]
  },
  "scanning_enabled": false
}
```

<h3 id="status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Example110](#schemaexample110)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

<h1 id="google-home-wifi">Wifi</h1>

This folder contains Wi-Fi related endpoints.

## Get Saved Networks

<a id="opIdGetSavedNetworks"></a>

> Code samples

```bash
curl https://example.com/configured_networks \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /configured_networks`

This gets a list of all saved Wi-Fi networks.

Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
`wpa_id` is an incrementing number used to identify a saved network.  
#TODO: Add values for `wpa_auth` and `wpa_cipher`.

> Example responses

> 200 Response

```json
[
  {
    "ssid": "Wifi name",
    "wpa_auth": 7,
    "wpa_cipher": 4,
    "wpa_id": 0
  }
]
```

<h3 id="get-saved-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-saved-networks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example113](#schemaexample113)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Connect to Wi-Fi Network

<a id="opIdConnecttoWi-FiNetwork"></a>

> Code samples

```bash
curl https://example.com/connect_wifi \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "bssid": "5c:0a:xx:xx:xx:xx",
    "enc_passwd": "xxxxxfPY=",
    "signal_level": -42,
    "ssid": "myotherssid",
    "wpa_auth": 7,
    "wpa_cipher": 4
  }'
```

`POST /connect_wifi`

**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).

> Body parameter

```json
{
  "bssid": "5c:0a:xx:xx:xx:xx",
  "enc_passwd": "xxxxxfPY=",
  "signal_level": -42,
  "ssid": "myotherssid",
  "wpa_auth": 7,
  "wpa_cipher": 4
}
```

<h3 id="connect-to-wi-fi-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnecttoWi-FiNetworkRequest](#schemaconnecttowi-finetworkrequest)|true|none|
|» bssid|body|string|true|none|
|» enc_passwd|body|string|true|none|
|» signal_level|body|integer(int32)|true|none|
|» ssid|body|string|true|none|
|» wpa_auth|body|integer(int32)|true|none|
|» wpa_cipher|body|integer(int32)|true|none|

<h3 id="connect-to-wi-fi-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Forget Wi-Fi Network

<a id="opIdForgetWi-FiNetwork"></a>

> Code samples

```bash
curl https://example.com/forget_wifi \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}" \
  -d '{
    "wpa_id": 0
  }'
```

`POST /forget_wifi`

This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks

> Body parameter

```json
{
  "wpa_id": 0
}
```

<h3 id="forget-wi-fi-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ForgetWi-FiNetworkRequest](#schemaforgetwi-finetworkrequest)|true|none|
|» wpa_id|body|integer(int32)|true|none|

<h3 id="forget-wi-fi-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Get Wi-Fi Scan Results

<a id="opIdGetWi-FiScanResults"></a>

> Code samples

```bash
curl https://example.com/scan_results \
  -H 'Accept: application/json' \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /scan_results`

This gets a list of all nearby Wi-Fi access points.

The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.

> Example responses

> 200 Response

```json
[
  {
    "bssid": "APBSSID1",
    "signal_level": -20,
    "ssid": "APSSID1",
    "wpa_auth": 7,
    "wpa_cipher": 4,
    "wpa_id": 0
  }
]
```

<h3 id="get-wi-fi-scan-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-wi-fi-scan-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Example114](#schemaexample114)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Scan for Networks

<a id="opIdScanforNetworks"></a>

> Code samples

```bash
curl https://example.com/scan_wifi \
  -X POST \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`POST /scan_wifi`

This initiates scanning for Wi-Fi networks.

The results can be obtained with `/setup/scan_results` after triggering the scan with this request.

<h3 id="scan-for-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

<h1 id="google-home-static-files">Static Files</h1>

This folder contains a list of static files stored in Home.

## Legal Notice

<a id="opIdLegalNotice"></a>

> Code samples

```bash
curl https://example.com/NOTICE.html.gz \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /NOTICE.html.gz`

All licenses of programs used by Home.

> Example responses

> 200 Response

```text
<html><!-- a long page --></html>
```

<h3 id="legal-notice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

## Chromecast Icon

<a id="opIdChromecastIcon"></a>

> Code samples

```bash
curl https://example.com/icon.png \
  -H "cast-local-authorization-token: ${API_KEY}"
```

`GET /icon.png`

**Update:** This no longer exists. It's not useful, anyway.

A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`

<h3 id="chromecast-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cast-local-authorization-token
</aside>

# Schemas

<h2 id="tocS_AccessibilityRequest">AccessibilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccessibilityrequest"></a>
<a id="schema_AccessibilityRequest"></a>
<a id="tocSaccessibilityrequest"></a>
<a id="tocsaccessibilityrequest"></a>

```json
{
  "endpoint_enabled": false,
  "hotword_enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint_enabled|boolean|true|none|none|
|hotword_enabled|boolean|true|none|none|

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "date_pattern": {
    "day": 15,
    "month": 1,
    "year": 2018
  },
  "fire_time": 1515995400000,
  "id": "alarm/xxx",
  "status": 1,
  "time_pattern": {
    "hour": 6,
    "minute": 50,
    "second": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_pattern|[DatePattern](#schemadatepattern)|true|none|none|
|fire_time|number|true|none|none|
|id|string|true|none|none|
|status|integer(int32)|true|none|none|
|time_pattern|[TimePattern](#schematimepattern)|true|none|none|

<h2 id="tocS_AlarmVolumeRequest">AlarmVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaalarmvolumerequest"></a>
<a id="schema_AlarmVolumeRequest"></a>
<a id="tocSalarmvolumerequest"></a>
<a id="tocsalarmvolumerequest"></a>

```json
{
  "volume": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volume|integer(int32)|true|none|none|

<h2 id="tocS_Aogh">Aogh</h2>
<!-- backwards compatibility -->
<a id="schemaaogh"></a>
<a id="schema_Aogh"></a>
<a id="tocSaogh"></a>
<a id="tocsaogh"></a>

```json
{
  "aogh_api_version": "2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aogh_api_version|string|true|none|none|

<h2 id="tocS_AppDeviceIDRequest">AppDeviceIDRequest</h2>
<!-- backwards compatibility -->
<a id="schemaappdeviceidrequest"></a>
<a id="schema_AppDeviceIDRequest"></a>
<a id="tocSappdeviceidrequest"></a>
<a id="tocsappdeviceidrequest"></a>

```json
{
  "app_id": "E8C28D3C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|string|true|none|none|

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "digital": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digital|boolean|true|none|none|

<h2 id="tocS_BuildInfo">BuildInfo</h2>
<!-- backwards compatibility -->
<a id="schemabuildinfo"></a>
<a id="schema_BuildInfo"></a>
<a id="tocSbuildinfo"></a>
<a id="tocsbuildinfo"></a>

```json
{
  "build_type": 2,
  "cast_build_revision": "1.46.195690",
  "cast_control_version": 1,
  "preview_channel_state": 4,
  "release_track": "preview-joining-stable-channel",
  "system_build_number": "195690"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build_type|integer(int32)|true|none|none|
|cast_build_revision|string|true|none|none|
|cast_control_version|integer(int32)|true|none|none|
|preview_channel_state|integer(int32)|true|none|none|
|release_track|string|true|none|none|
|system_build_number|string|true|none|none|

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "aogh_supported": true,
  "assistant_supported": true,
  "audio_hdr_supported": false,
  "audio_surround_mode_supported": false,
  "ble_supported": true,
  "bluetooth_audio_sink_supported": true,
  "bluetooth_audio_source_supported": true,
  "bluetooth_supported": true,
  "cloudcast_supported": true,
  "content_filters_supported": true,
  "display_supported": false,
  "fdr_supported": false,
  "hdmi_prefer_50hz_supported": false,
  "hdmi_prefer_high_fps_supported": false,
  "hotspot_supported": true,
  "https_setup_supported": true,
  "input_management_supported": true,
  "keep_hotspot_until_connected_supported": true,
  "multi_user_supported": true,
  "multichannel_group_supported": true,
  "multizone_supported": true,
  "night_mode_supported": true,
  "night_mode_supported_v2": true,
  "opencast_supported": false,
  "preview_channel_supported": true,
  "reboot_supported": true,
  "remote_ducking_supported": true,
  "separate_tts_volume_supported": true,
  "setup_supported": true,
  "sleep_mode_supported": true,
  "stats_supported": true,
  "system_sound_effects_supported": false,
  "user_eq_supported": true,
  "wifi_auto_save_supported": true,
  "wifi_regulatory_domain_locked": true,
  "wifi_supported": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aogh_supported|boolean|true|none|none|
|assistant_supported|boolean|true|none|none|
|audio_hdr_supported|boolean|true|none|none|
|audio_surround_mode_supported|boolean|true|none|none|
|ble_supported|boolean|true|none|none|
|bluetooth_audio_sink_supported|boolean|true|none|none|
|bluetooth_audio_source_supported|boolean|true|none|none|
|bluetooth_supported|boolean|true|none|none|
|cloudcast_supported|boolean|true|none|none|
|content_filters_supported|boolean|true|none|none|
|display_supported|boolean|true|none|none|
|fdr_supported|boolean|true|none|none|
|hdmi_prefer_50hz_supported|boolean|true|none|none|
|hdmi_prefer_high_fps_supported|boolean|true|none|none|
|hotspot_supported|boolean|true|none|none|
|https_setup_supported|boolean|true|none|none|
|input_management_supported|boolean|true|none|none|
|keep_hotspot_until_connected_supported|boolean|true|none|none|
|multi_user_supported|boolean|true|none|none|
|multichannel_group_supported|boolean|true|none|none|
|multizone_supported|boolean|true|none|none|
|night_mode_supported|boolean|true|none|none|
|night_mode_supported_v2|boolean|true|none|none|
|opencast_supported|boolean|true|none|none|
|preview_channel_supported|boolean|true|none|none|
|reboot_supported|boolean|true|none|none|
|remote_ducking_supported|boolean|true|none|none|
|separate_tts_volume_supported|boolean|true|none|none|
|setup_supported|boolean|true|none|none|
|sleep_mode_supported|boolean|true|none|none|
|stats_supported|boolean|true|none|none|
|system_sound_effects_supported|boolean|true|none|none|
|user_eq_supported|boolean|true|none|none|
|wifi_auto_save_supported|boolean|true|none|none|
|wifi_regulatory_domain_locked|boolean|true|none|none|
|wifi_supported|boolean|true|none|none|

<h2 id="tocS_ChangeDiscoverabilityRequest">ChangeDiscoverabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangediscoverabilityrequest"></a>
<a id="schema_ChangeDiscoverabilityRequest"></a>
<a id="tocSchangediscoverabilityrequest"></a>
<a id="tocschangediscoverabilityrequest"></a>

```json
{
  "enable_discovery": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable_discovery|boolean|true|none|none|

<h2 id="tocS_CheckReadyStatusRequest">CheckReadyStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckreadystatusrequest"></a>
<a id="schema_CheckReadyStatusRequest"></a>
<a id="tocScheckreadystatusrequest"></a>
<a id="tocscheckreadystatusrequest"></a>

```json
{
  "play_ready_message": true,
  "user_id": "xxxxx"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|play_ready_message|boolean|true|none|none|
|user_id|string|true|none|none|

<h2 id="tocS_ConnectedDevice">ConnectedDevice</h2>
<!-- backwards compatibility -->
<a id="schemaconnecteddevice"></a>
<a id="schema_ConnectedDevice"></a>
<a id="tocSconnecteddevice"></a>
<a id="tocsconnecteddevice"></a>

```json
{
  "device": {
    "bond_date": 1529248165656.613,
    "device_class": 2491396,
    "device_type": 1,
    "last_connect_date": 0,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "PHILIPS BT64",
    "rssi": -255,
    "service_uuids": [
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    ]
  },
  "enabled_profiles": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[Device](#schemadevice)|true|none|none|
|enabled_profiles|integer(int32)|true|none|none|

<h2 id="tocS_ConnecttoWi-FiNetworkRequest">ConnecttoWi-FiNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnecttowi-finetworkrequest"></a>
<a id="schema_ConnecttoWi-FiNetworkRequest"></a>
<a id="tocSconnecttowi-finetworkrequest"></a>
<a id="tocsconnecttowi-finetworkrequest"></a>

```json
{
  "bssid": "5c:0a:xx:xx:xx:xx",
  "enc_passwd": "xxxxxfPY=",
  "signal_level": -42,
  "ssid": "myotherssid",
  "wpa_auth": 7,
  "wpa_cipher": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bssid|string|true|none|none|
|enc_passwd|string|true|none|none|
|signal_level|integer(int32)|true|none|none|
|ssid|string|true|none|none|
|wpa_auth|integer(int32)|true|none|none|
|wpa_cipher|integer(int32)|true|none|none|

<h2 id="tocS_DatePattern">DatePattern</h2>
<!-- backwards compatibility -->
<a id="schemadatepattern"></a>
<a id="schema_DatePattern"></a>
<a id="tocSdatepattern"></a>
<a id="tocsdatepattern"></a>

```json
{
  "day": 15,
  "month": 1,
  "year": 2018
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|none|
|month|integer(int32)|true|none|none|
|year|integer(int32)|true|none|none|

<h2 id="tocS_DeleteAlarmsandTimersRequest">DeleteAlarmsandTimersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmsandtimersrequest"></a>
<a id="schema_DeleteAlarmsandTimersRequest"></a>
<a id="tocSdeletealarmsandtimersrequest"></a>
<a id="tocsdeletealarmsandtimersrequest"></a>

```json
{
  "ids": [
    "timer/xxx",
    "alarm/xxx"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|none|

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "icon_list": [
    {
      "depth": 32,
      "height": 55,
      "mimetype": "image/png",
      "url": "/setup/icon.png",
      "width": 98
    }
  ],
  "locale": {
    "display_string": "English (United States)"
  },
  "timezone": {
    "display_string": "India Standard Time (Kolkata)",
    "offset": 330
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon_list|[[IconList](#schemaiconlist)]|true|none|none|
|locale|[Locale](#schemalocale)|true|none|none|
|timezone|[Timezone](#schematimezone)|true|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "bond_date": 1529248165656.613,
  "device_class": 2491396,
  "device_type": 1,
  "last_connect_date": 0,
  "mac_address": "xx:xx:xx:xx:xx:xx",
  "name": "PHILIPS BT64",
  "rssi": -255,
  "service_uuids": [
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bond_date|number|true|none|none|
|device_class|integer(int32)|true|none|none|
|device_type|integer(int32)|true|none|none|
|last_connect_date|integer(int32)|true|none|none|
|mac_address|string|true|none|none|
|name|string|true|none|none|
|rssi|integer(int32)|true|none|none|
|service_uuids|[string]|true|none|none|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "4k_blocked": 0,
  "capabilities": {
    "aogh_supported": true,
    "assistant_supported": true,
    "audio_hdr_supported": false,
    "audio_surround_mode_supported": false,
    "ble_supported": true,
    "bluetooth_audio_sink_supported": true,
    "bluetooth_audio_source_supported": true,
    "bluetooth_supported": true,
    "cloudcast_supported": true,
    "content_filters_supported": true,
    "display_supported": false,
    "fdr_supported": false,
    "hdmi_prefer_50hz_supported": false,
    "hdmi_prefer_high_fps_supported": false,
    "hotspot_supported": true,
    "https_setup_supported": true,
    "input_management_supported": true,
    "keep_hotspot_until_connected_supported": true,
    "multi_user_supported": true,
    "multichannel_group_supported": true,
    "multizone_supported": true,
    "night_mode_supported": true,
    "night_mode_supported_v2": true,
    "opencast_supported": false,
    "preview_channel_supported": true,
    "reboot_supported": true,
    "remote_ducking_supported": true,
    "separate_tts_volume_supported": true,
    "setup_supported": true,
    "sleep_mode_supported": true,
    "stats_supported": true,
    "system_sound_effects_supported": false,
    "user_eq_supported": true,
    "wifi_auto_save_supported": true,
    "wifi_regulatory_domain_locked": true,
    "wifi_supported": true
  },
  "cloud_device_id": "003D...",
  "factory_country_code": "US",
  "hotspot_bssid": "FA:8F:CA:30:41:71",
  "local_authorization_token_hash": "hBt2...",
  "mac_address": "F4:F5:...",
  "manufacturer": "Google Inc.",
  "model_name": "Google Home",
  "product_name": "pineapple",
  "public_key": "MIIB...",
  "ssdp_udn": "baab...",
  "uma_client_id": "8ce0...",
  "uptime": 48509.169282,
  "weave_device_id": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|4k_blocked|integer(int32)|true|none|none|
|capabilities|[Capabilities](#schemacapabilities)|true|none|none|
|cloud_device_id|string|true|none|none|
|factory_country_code|string|true|none|none|
|hotspot_bssid|string|true|none|none|
|local_authorization_token_hash|string|true|none|none|
|mac_address|string|true|none|none|
|manufacturer|string|true|none|none|
|model_name|string|true|none|none|
|product_name|string|true|none|none|
|public_key|string|true|none|none|
|ssdp_udn|string|true|none|none|
|uma_client_id|string|true|none|none|
|uptime|number|true|none|none|
|weave_device_id|string|true|none|none|

<h2 id="tocS_Example1">Example1</h2>
<!-- backwards compatibility -->
<a id="schemaexample1"></a>
<a id="schema_Example1"></a>
<a id="tocSexample1"></a>
<a id="tocsexample1"></a>

```json
{
  "aogh": {
    "aogh_api_version": "2"
  },
  "audio": {
    "digital": false
  },
  "build_info": {
    "build_type": 2,
    "cast_build_revision": "1.46.195690",
    "cast_control_version": 1,
    "preview_channel_state": 4,
    "release_track": "preview-joining-stable-channel",
    "system_build_number": "195690"
  },
  "detail": {
    "icon_list": [
      {
        "depth": 32,
        "height": 55,
        "mimetype": "image/png",
        "url": "/setup/icon.png",
        "width": 98
      }
    ],
    "locale": {
      "display_string": "English (United States)"
    },
    "timezone": {
      "display_string": "India Standard Time (Kolkata)",
      "offset": 330
    }
  },
  "device_info": {
    "4k_blocked": 0,
    "capabilities": {
      "aogh_supported": true,
      "assistant_supported": true,
      "audio_hdr_supported": false,
      "audio_surround_mode_supported": false,
      "ble_supported": true,
      "bluetooth_audio_sink_supported": true,
      "bluetooth_audio_source_supported": true,
      "bluetooth_supported": true,
      "cloudcast_supported": true,
      "content_filters_supported": true,
      "display_supported": false,
      "fdr_supported": false,
      "hdmi_prefer_50hz_supported": false,
      "hdmi_prefer_high_fps_supported": false,
      "hotspot_supported": true,
      "https_setup_supported": true,
      "input_management_supported": true,
      "keep_hotspot_until_connected_supported": true,
      "multi_user_supported": true,
      "multichannel_group_supported": true,
      "multizone_supported": true,
      "night_mode_supported": true,
      "night_mode_supported_v2": true,
      "opencast_supported": false,
      "preview_channel_supported": true,
      "reboot_supported": true,
      "remote_ducking_supported": true,
      "separate_tts_volume_supported": true,
      "setup_supported": true,
      "sleep_mode_supported": true,
      "stats_supported": true,
      "system_sound_effects_supported": false,
      "user_eq_supported": true,
      "wifi_auto_save_supported": true,
      "wifi_regulatory_domain_locked": true,
      "wifi_supported": true
    },
    "cloud_device_id": "003D...",
    "factory_country_code": "US",
    "hotspot_bssid": "FA:8F:CA:30:41:71",
    "local_authorization_token_hash": "hBt2...",
    "mac_address": "F4:F5:...",
    "manufacturer": "Google Inc.",
    "model_name": "Google Home",
    "product_name": "pineapple",
    "public_key": "MIIB...",
    "ssdp_udn": "baab...",
    "uma_client_id": "8ce0...",
    "uptime": 48509.169282,
    "weave_device_id": ""
  },
  "multizone": {
    "audio_output_delay": 0,
    "audio_output_delay_hdmi": 0,
    "audio_output_delay_oem": 0,
    "aux_in_group": "",
    "dynamic_groups": [],
    "groups": [],
    "multichannel_status": 0
  },
  "name": "Bedroom Speaker",
  "net": {
    "ethernet_connected": false,
    "ip_address": "192.168.0.18",
    "online": true
  },
  "night_mode_params": {
    "device_override_do_not_disturb": 0,
    "do_not_disturb": true,
    "enabled": true,
    "led_brightness": 0.5799999833106995,
    "volume": 0.5899999737739563,
    "windows": [
      {
        "days": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "length_hours": 6,
        "start_hour": 23
      }
    ]
  },
  "opencast": {
    "pin_code": ""
  },
  "opt_in": {
    "audio_hdr": false,
    "audio_surround_mode": 0,
    "autoplay_on_signal": true,
    "cloud_ipc": true,
    "hdmi_prefer_50hz": false,
    "hdmi_prefer_high_fps": true,
    "managed_mode": false,
    "opencast": true,
    "preview_channel": true,
    "remote_ducking": true,
    "stats": true,
    "ui_flipped": false,
    "wpa3_support_enabled": false
  },
  "proxy": {
    "mode": "system"
  },
  "settings": {
    "closed_caption": {},
    "control_notifications": 1,
    "country_code": "IN",
    "locale": "en-US",
    "network_standby": 0,
    "system_sound_effects": true,
    "time_format": 1,
    "timezone": "Asia/Kolkata",
    "wake_on_cast": 1
  },
  "setup": {
    "qr_ssid_suffix": "",
    "setup_state": 60,
    "ssid_suffix": "k",
    "stats": {
      "num_check_connectivity": 0,
      "num_connect_wifi": 0,
      "num_connected_wifi_not_saved": 0,
      "num_initial_eureka_info": 0,
      "num_obtain_ip": 0
    },
    "tos_accepted": true
  },
  "sign": {
    "certificate": "-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n",
    "intermediate_certs": [
      "-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n"
    ],
    "nonce": "1234512345",
    "signed_data": "Rr5Q..."
  },
  "user_eq": {
    "high_shelf": {
      "frequency": 4500,
      "gain_db": 0,
      "quality": 0.707
    },
    "low_shelf": {
      "frequency": 150,
      "gain_db": 0,
      "quality": 0.707
    },
    "max_peaking_eqs": 0,
    "peaking_eqs": []
  },
  "version": 10,
  "wifi": {
    "bssid": "a0:ab:...",
    "has_changes": false,
    "noise_level": -90,
    "signal_level": -50,
    "ssid": "Nucl...",
    "wpa_configured": true,
    "wpa_id": 1,
    "wpa_state": 10
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aogh|[Aogh](#schemaaogh)|true|none|none|
|audio|[Audio](#schemaaudio)|true|none|none|
|build_info|[BuildInfo](#schemabuildinfo)|true|none|none|
|detail|[Detail](#schemadetail)|true|none|none|
|device_info|[DeviceInfo](#schemadeviceinfo)|true|none|none|
|multizone|[Multizone](#schemamultizone)|true|none|none|
|name|string|true|none|none|
|net|[Net](#schemanet)|true|none|none|
|night_mode_params|[NightModeParams](#schemanightmodeparams)|true|none|none|
|opencast|[Opencast](#schemaopencast)|true|none|none|
|opt_in|[OptIn](#schemaoptin)|true|none|none|
|proxy|[Proxy](#schemaproxy)|true|none|none|
|settings|[Settings](#schemasettings)|true|none|none|
|setup|[Setup](#schemasetup)|true|none|none|
|sign|[Sign](#schemasign)|true|none|none|
|user_eq|[UserEq](#schemausereq)|true|none|none|
|version|integer(int32)|true|none|none|
|wifi|[Wifi](#schemawifi)|true|none|none|

<h2 id="tocS_Example11">Example11</h2>
<!-- backwards compatibility -->
<a id="schemaexample11"></a>
<a id="schema_Example11"></a>
<a id="tocSexample11"></a>
<a id="tocsexample11"></a>

```json
{
  "app_device_id": "...",
  "certificate": "-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n",
  "signed_data": "HAjp..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_device_id|string|true|none|none|
|certificate|string|true|none|none|
|signed_data|string|true|none|none|

<h2 id="tocS_Example110">Example110</h2>
<!-- backwards compatibility -->
<a id="schemaexample110"></a>
<a id="schema_Example110"></a>
<a id="tocSexample110"></a>
<a id="tocsexample110"></a>

```json
{
  "audio_mode": 0,
  "connected_devices": [
    {
      "device": {
        "bond_date": 1529248165656.613,
        "device_class": 2491396,
        "device_type": 1,
        "last_connect_date": 0,
        "mac_address": "xx:xx:xx:xx:xx:xx",
        "name": "PHILIPS BT64",
        "rssi": -255,
        "service_uuids": [
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        ]
      },
      "enabled_profiles": 2
    }
  ],
  "connecting_devices": [],
  "discovery_enabled": false,
  "remote_sink": {
    "bond_date": 1529248165656.613,
    "device_class": 2491396,
    "device_type": 1,
    "last_connect_date": 0,
    "mac_address": "xx:xx:xx:xx:xx:xx",
    "name": "PHILIPS BT64",
    "rssi": -255,
    "service_uuids": [
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    ]
  },
  "scanning_enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_mode|integer(int32)|true|none|none|
|connected_devices|[[ConnectedDevice](#schemaconnecteddevice)]|true|none|none|
|connecting_devices|[string]|true|none|none|
|discovery_enabled|boolean|true|none|none|
|remote_sink|[RemoteSink](#schemaremotesink)|true|none|none|
|scanning_enabled|boolean|true|none|none|

<h2 id="tocS_Example111">Example111</h2>
<!-- backwards compatibility -->
<a id="schemaexample111"></a>
<a id="schema_Example111"></a>
<a id="tocSexample111"></a>
<a id="tocsexample111"></a>

```json
{
  "bond_date": 1503212407260.55,
  "device_class": 5898764,
  "device_type": 1,
  "last_connect_date": 1514807829482.111,
  "mac_address": "xx:xx:xx:xx:xx:xx",
  "name": "Device Name",
  "rssi": -255,
  "service_uuids": [
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bond_date|number|true|none|none|
|device_class|integer(int32)|true|none|none|
|device_type|integer(int32)|true|none|none|
|last_connect_date|number|true|none|none|
|mac_address|string|true|none|none|
|name|string|true|none|none|
|rssi|integer(int32)|true|none|none|
|service_uuids|[string]|true|none|none|

<h2 id="tocS_Example112">Example112</h2>
<!-- backwards compatibility -->
<a id="schemaexample112"></a>
<a id="schema_Example112"></a>
<a id="tocSexample112"></a>
<a id="tocsexample112"></a>

```json
{
  "device_class": 525372,
  "device_type": 3,
  "expected_profiles": 0,
  "mac_address": "xx:xx:xx:xx:xx:xx",
  "name": "KD-49X8200E",
  "rssi": -90
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_class|integer(int32)|true|none|none|
|device_type|integer(int32)|true|none|none|
|expected_profiles|integer(int32)|true|none|none|
|mac_address|string|true|none|none|
|name|string|true|none|none|
|rssi|integer(int32)|true|none|none|

<h2 id="tocS_Example113">Example113</h2>
<!-- backwards compatibility -->
<a id="schemaexample113"></a>
<a id="schema_Example113"></a>
<a id="tocSexample113"></a>
<a id="tocsexample113"></a>

```json
{
  "ssid": "Wifi name",
  "wpa_auth": 7,
  "wpa_cipher": 4,
  "wpa_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssid|string|true|none|none|
|wpa_auth|integer(int32)|true|none|none|
|wpa_cipher|integer(int32)|true|none|none|
|wpa_id|integer(int32)|true|none|none|

<h2 id="tocS_Example114">Example114</h2>
<!-- backwards compatibility -->
<a id="schemaexample114"></a>
<a id="schema_Example114"></a>
<a id="tocSexample114"></a>
<a id="tocsexample114"></a>

```json
{
  "bssid": "APBSSID1",
  "signal_level": -20,
  "ssid": "APSSID1",
  "wpa_auth": 7,
  "wpa_cipher": 4,
  "wpa_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bssid|string|true|none|none|
|signal_level|integer(int32)|true|none|none|
|ssid|string|true|none|none|
|wpa_auth|integer(int32)|true|none|none|
|wpa_cipher|integer(int32)|true|none|none|
|wpa_id|integer(int32)|true|none|none|

<h2 id="tocS_Example12">Example12</h2>
<!-- backwards compatibility -->
<a id="schemaexample12"></a>
<a id="schema_Example12"></a>
<a id="tocSexample12"></a>
<a id="tocsexample12"></a>

```json
{
  "token": "ADtq..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_Example13">Example13</h2>
<!-- backwards compatibility -->
<a id="schemaexample13"></a>
<a id="schema_Example13"></a>
<a id="tocSexample13"></a>
<a id="tocsexample13"></a>

```json
{
  "can_enroll": true,
  "enrollment_state": 0,
  "error_code": 0,
  "ready": false,
  "retryable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_enroll|boolean|true|none|none|
|enrollment_state|integer(int32)|true|none|none|
|error_code|integer(int32)|true|none|none|
|ready|boolean|true|none|none|
|retryable|boolean|true|none|none|

<h2 id="tocS_Example14">Example14</h2>
<!-- backwards compatibility -->
<a id="schemaexample14"></a>
<a id="schema_Example14"></a>
<a id="tocSexample14"></a>
<a id="tocsexample14"></a>

```json
{
  "display_string": "Samoa Standard Time (Midway)",
  "offset": -660,
  "timezone": "Pacific/Midway"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_string|string|true|none|none|
|offset|integer(int32)|true|none|none|
|timezone|string|true|none|none|

<h2 id="tocS_Example15">Example15</h2>
<!-- backwards compatibility -->
<a id="schemaexample15"></a>
<a id="schema_Example15"></a>
<a id="tocSexample15"></a>
<a id="tocsexample15"></a>

```json
{
  "display_string": "Amharic - አማርኛ",
  "locale": "am"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_string|string|true|none|none|
|locale|string|true|none|none|

<h2 id="tocS_Example16">Example16</h2>
<!-- backwards compatibility -->
<a id="schemaexample16"></a>
<a id="schema_Example16"></a>
<a id="tocSexample16"></a>
<a id="tocsexample16"></a>

```json
{
  "bytes_received": 31457280,
  "response_code": 200,
  "time_for_data_fetch": 4722,
  "time_for_http_response": 316
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes_received|integer(int32)|true|none|none|
|response_code|integer(int32)|true|none|none|
|time_for_data_fetch|integer(int32)|true|none|none|
|time_for_http_response|integer(int32)|true|none|none|

<h2 id="tocS_Example17">Example17</h2>
<!-- backwards compatibility -->
<a id="schemaexample17"></a>
<a id="schema_Example17"></a>
<a id="tocSexample17"></a>
<a id="tocsexample17"></a>

```json
{
  "do_not_disturb": true,
  "enabled": false,
  "led_brightness": 0.44999998807907104,
  "volume": 0.46000000834465027,
  "windows": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "length_hours": 8,
      "start_hour": 22
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|do_not_disturb|boolean|true|none|none|
|enabled|boolean|true|none|none|
|led_brightness|number|true|none|none|
|volume|number|true|none|none|
|windows|[[Window2](#schemawindow2)]|true|none|none|

<h2 id="tocS_Example18">Example18</h2>
<!-- backwards compatibility -->
<a id="schemaexample18"></a>
<a id="schema_Example18"></a>
<a id="tocSexample18"></a>
<a id="tocsexample18"></a>

```json
{
  "alarm": [
    {
      "date_pattern": {
        "day": 15,
        "month": 1,
        "year": 2018
      },
      "fire_time": 1515995400000,
      "id": "alarm/xxx",
      "status": 1,
      "time_pattern": {
        "hour": 6,
        "minute": 50,
        "second": 0
      }
    }
  ],
  "timer": [
    {
      "fire_time": 1516176765589,
      "id": "timer/xxx",
      "original_duration": 20000,
      "status": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarm|[[Alarm](#schemaalarm)]|true|none|none|
|timer|[[Timer](#schematimer)]|true|none|none|

<h2 id="tocS_Example19">Example19</h2>
<!-- backwards compatibility -->
<a id="schemaexample19"></a>
<a id="schema_Example19"></a>
<a id="tocSexample19"></a>
<a id="tocsexample19"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_ForgetWi-FiNetworkRequest">ForgetWi-FiNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforgetwi-finetworkrequest"></a>
<a id="schema_ForgetWi-FiNetworkRequest"></a>
<a id="tocSforgetwi-finetworkrequest"></a>
<a id="tocsforgetwi-finetworkrequest"></a>

```json
{
  "wpa_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wpa_id|integer(int32)|true|none|none|

<h2 id="tocS_ForgetpaireddeviceRequest">ForgetpaireddeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforgetpaireddevicerequest"></a>
<a id="schema_ForgetpaireddeviceRequest"></a>
<a id="tocSforgetpaireddevicerequest"></a>
<a id="tocsforgetpaireddevicerequest"></a>

```json
{
  "bond": false,
  "mac_address": "xx:xx:xx:xx:xx:xx"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bond|boolean|true|none|none|
|mac_address|string|true|none|none|

<h2 id="tocS_Getcurrentstate">Getcurrentstate</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentstate"></a>
<a id="schema_Getcurrentstate"></a>
<a id="tocSgetcurrentstate"></a>
<a id="tocsgetcurrentstate"></a>

```json
{
  "notifications_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications_enabled|boolean|true|none|none|

<h2 id="tocS_Getcurrentvalues">Getcurrentvalues</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentvalues"></a>
<a id="schema_Getcurrentvalues"></a>
<a id="tocSgetcurrentvalues"></a>
<a id="tocsgetcurrentvalues"></a>

```json
{
  "endpoint_enabled": false,
  "hotword_enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint_enabled|boolean|true|none|none|
|hotword_enabled|boolean|true|none|none|

<h2 id="tocS_Getvolume">Getvolume</h2>
<!-- backwards compatibility -->
<a id="schemagetvolume"></a>
<a id="schema_Getvolume"></a>
<a id="tocSgetvolume"></a>
<a id="tocsgetvolume"></a>

```json
{
  "volume": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volume|number|true|none|none|

<h2 id="tocS_HighShelf">HighShelf</h2>
<!-- backwards compatibility -->
<a id="schemahighshelf"></a>
<a id="schema_HighShelf"></a>
<a id="tocShighshelf"></a>
<a id="tocshighshelf"></a>

```json
{
  "frequency": 4500,
  "gain_db": 0,
  "quality": 0.707
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|integer(int32)|true|none|none|
|gain_db|integer(int32)|true|none|none|
|quality|number|true|none|none|

<h2 id="tocS_HighShelf1">HighShelf1</h2>
<!-- backwards compatibility -->
<a id="schemahighshelf1"></a>
<a id="schema_HighShelf1"></a>
<a id="tocShighshelf1"></a>
<a id="tocshighshelf1"></a>

```json
{
  "gain_db": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gain_db|integer(int32)|true|none|none|

<h2 id="tocS_IconList">IconList</h2>
<!-- backwards compatibility -->
<a id="schemaiconlist"></a>
<a id="schema_IconList"></a>
<a id="tocSiconlist"></a>
<a id="tocsiconlist"></a>

```json
{
  "depth": 32,
  "height": 55,
  "mimetype": "image/png",
  "url": "/setup/icon.png",
  "width": 98
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depth|integer(int32)|true|none|none|
|height|integer(int32)|true|none|none|
|mimetype|string|true|none|none|
|url|string|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "display_string": "English (United States)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_string|string|true|none|none|

<h2 id="tocS_LowShelf">LowShelf</h2>
<!-- backwards compatibility -->
<a id="schemalowshelf"></a>
<a id="schema_LowShelf"></a>
<a id="tocSlowshelf"></a>
<a id="tocslowshelf"></a>

```json
{
  "frequency": 150,
  "gain_db": 0,
  "quality": 0.707
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|integer(int32)|true|none|none|
|gain_db|integer(int32)|true|none|none|
|quality|number|true|none|none|

<h2 id="tocS_LowShelf1">LowShelf1</h2>
<!-- backwards compatibility -->
<a id="schemalowshelf1"></a>
<a id="schema_LowShelf1"></a>
<a id="tocSlowshelf1"></a>
<a id="tocslowshelf1"></a>

```json
{
  "gain_db": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gain_db|integer(int32)|true|none|none|

<h2 id="tocS_Multizone">Multizone</h2>
<!-- backwards compatibility -->
<a id="schemamultizone"></a>
<a id="schema_Multizone"></a>
<a id="tocSmultizone"></a>
<a id="tocsmultizone"></a>

```json
{
  "audio_output_delay": 0,
  "audio_output_delay_hdmi": 0,
  "audio_output_delay_oem": 0,
  "aux_in_group": "",
  "dynamic_groups": [],
  "groups": [],
  "multichannel_status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_output_delay|integer(int32)|true|none|none|
|audio_output_delay_hdmi|integer(int32)|true|none|none|
|audio_output_delay_oem|integer(int32)|true|none|none|
|aux_in_group|string|true|none|none|
|dynamic_groups|[string]|true|none|none|
|groups|[string]|true|none|none|
|multichannel_status|integer(int32)|true|none|none|

<h2 id="tocS_Net">Net</h2>
<!-- backwards compatibility -->
<a id="schemanet"></a>
<a id="schema_Net"></a>
<a id="tocSnet"></a>
<a id="tocsnet"></a>

```json
{
  "ethernet_connected": false,
  "ip_address": "192.168.0.18",
  "online": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethernet_connected|boolean|true|none|none|
|ip_address|string|true|none|none|
|online|boolean|true|none|none|

<h2 id="tocS_NightModeParams">NightModeParams</h2>
<!-- backwards compatibility -->
<a id="schemanightmodeparams"></a>
<a id="schema_NightModeParams"></a>
<a id="tocSnightmodeparams"></a>
<a id="tocsnightmodeparams"></a>

```json
{
  "device_override_do_not_disturb": 0,
  "do_not_disturb": true,
  "enabled": true,
  "led_brightness": 0.5799999833106995,
  "volume": 0.5899999737739563,
  "windows": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "length_hours": 6,
      "start_hour": 23
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_override_do_not_disturb|integer(int32)|true|none|none|
|do_not_disturb|boolean|true|none|none|
|enabled|boolean|true|none|none|
|led_brightness|number|true|none|none|
|volume|number|true|none|none|
|windows|[[Window](#schemawindow)]|true|none|none|

<h2 id="tocS_NightModesettingsRequest">NightModesettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemanightmodesettingsrequest"></a>
<a id="schema_NightModesettingsRequest"></a>
<a id="tocSnightmodesettingsrequest"></a>
<a id="tocsnightmodesettingsrequest"></a>

```json
{
  "demo_to_user": true,
  "do_not_disturb": true,
  "enabled": false,
  "led_brightness": 0.44999998807907104,
  "volume": 0.46000000834465027,
  "windows": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "length_hours": 8,
      "start_hour": 22
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demo_to_user|boolean|true|none|none|
|do_not_disturb|boolean|true|none|none|
|enabled|boolean|true|none|none|
|led_brightness|number|true|none|none|
|volume|number|true|none|none|
|windows|[[Window](#schemawindow)]|true|none|none|

<h2 id="tocS_Opencast">Opencast</h2>
<!-- backwards compatibility -->
<a id="schemaopencast"></a>
<a id="schema_Opencast"></a>
<a id="tocSopencast"></a>
<a id="tocsopencast"></a>

```json
{
  "pin_code": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin_code|string|true|none|none|

<h2 id="tocS_OptIn">OptIn</h2>
<!-- backwards compatibility -->
<a id="schemaoptin"></a>
<a id="schema_OptIn"></a>
<a id="tocSoptin"></a>
<a id="tocsoptin"></a>

```json
{
  "audio_hdr": false,
  "audio_surround_mode": 0,
  "autoplay_on_signal": true,
  "cloud_ipc": true,
  "hdmi_prefer_50hz": false,
  "hdmi_prefer_high_fps": true,
  "managed_mode": false,
  "opencast": true,
  "preview_channel": true,
  "remote_ducking": true,
  "stats": true,
  "ui_flipped": false,
  "wpa3_support_enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_hdr|boolean|true|none|none|
|audio_surround_mode|integer(int32)|true|none|none|
|autoplay_on_signal|boolean|true|none|none|
|cloud_ipc|boolean|true|none|none|
|hdmi_prefer_50hz|boolean|true|none|none|
|hdmi_prefer_high_fps|boolean|true|none|none|
|managed_mode|boolean|true|none|none|
|opencast|boolean|true|none|none|
|preview_channel|boolean|true|none|none|
|remote_ducking|boolean|true|none|none|
|stats|boolean|true|none|none|
|ui_flipped|boolean|true|none|none|
|wpa3_support_enabled|boolean|true|none|none|

<h2 id="tocS_OptIn1">OptIn1</h2>
<!-- backwards compatibility -->
<a id="schemaoptin1"></a>
<a id="schema_OptIn1"></a>
<a id="tocSoptin1"></a>
<a id="tocsoptin1"></a>

```json
{
  "opencast": true,
  "preview_channel": true,
  "remote_ducking": true,
  "stats": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opencast|boolean|true|none|none|
|preview_channel|boolean|true|none|none|
|remote_ducking|boolean|true|none|none|
|stats|boolean|true|none|none|

<h2 id="tocS_PairwithSpeakerRequest">PairwithSpeakerRequest</h2>
<!-- backwards compatibility -->
<a id="schemapairwithspeakerrequest"></a>
<a id="schema_PairwithSpeakerRequest"></a>
<a id="tocSpairwithspeakerrequest"></a>
<a id="tocspairwithspeakerrequest"></a>

```json
{
  "connect": true,
  "mac_address": "54:13:79:49:19:22",
  "profile": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connect|boolean|true|none|none|
|mac_address|string|true|none|none|
|profile|integer(int32)|true|none|none|

<h2 id="tocS_Proxy">Proxy</h2>
<!-- backwards compatibility -->
<a id="schemaproxy"></a>
<a id="schema_Proxy"></a>
<a id="tocSproxy"></a>
<a id="tocsproxy"></a>

```json
{
  "mode": "system"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|true|none|none|

<h2 id="tocS_RebootandFactoryResetRequest">RebootandFactoryResetRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootandfactoryresetrequest"></a>
<a id="schema_RebootandFactoryResetRequest"></a>
<a id="tocSrebootandfactoryresetrequest"></a>
<a id="tocsrebootandfactoryresetrequest"></a>

```json
{
  "params": "now"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|string|true|none|none|

<h2 id="tocS_RemoteSink">RemoteSink</h2>
<!-- backwards compatibility -->
<a id="schemaremotesink"></a>
<a id="schema_RemoteSink"></a>
<a id="tocSremotesink"></a>
<a id="tocsremotesink"></a>

```json
{
  "bond_date": 1529248165656.613,
  "device_class": 2491396,
  "device_type": 1,
  "last_connect_date": 0,
  "mac_address": "xx:xx:xx:xx:xx:xx",
  "name": "PHILIPS BT64",
  "rssi": -255,
  "service_uuids": [
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bond_date|number|true|none|none|
|device_class|integer(int32)|true|none|none|
|device_type|integer(int32)|true|none|none|
|last_connect_date|integer(int32)|true|none|none|
|mac_address|string|true|none|none|
|name|string|true|none|none|
|rssi|integer(int32)|true|none|none|
|service_uuids|[string]|true|none|none|

<h2 id="tocS_ScanfordevicesRequest">ScanfordevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemascanfordevicesrequest"></a>
<a id="schema_ScanfordevicesRequest"></a>
<a id="tocSscanfordevicesrequest"></a>
<a id="tocsscanfordevicesrequest"></a>

```json
{
  "clear_results": true,
  "enable": true,
  "timeout": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clear_results|boolean|true|none|none|
|enable|boolean|true|none|none|
|timeout|integer(int32)|true|none|none|

<h2 id="tocS_SetEqualizerValuesRequest">SetEqualizerValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetequalizervaluesrequest"></a>
<a id="schema_SetEqualizerValuesRequest"></a>
<a id="tocSsetequalizervaluesrequest"></a>
<a id="tocssetequalizervaluesrequest"></a>

```json
{
  "high_shelf": {
    "gain_db": 0
  },
  "low_shelf": {
    "gain_db": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high_shelf|[HighShelf1](#schemahighshelf1)|true|none|none|
|low_shelf|[LowShelf1](#schemalowshelf1)|true|none|none|

<h2 id="tocS_SetEurekaInfoRequest">SetEurekaInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaseteurekainforequest"></a>
<a id="schema_SetEurekaInfoRequest"></a>
<a id="tocSseteurekainforequest"></a>
<a id="tocsseteurekainforequest"></a>

```json
{
  "name": "Living Room",
  "opt_in": {
    "opencast": true,
    "preview_channel": true,
    "remote_ducking": true,
    "stats": true
  },
  "settings": {
    "control_notifications": 2
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|opt_in|[OptIn1](#schemaoptin1)|true|none|none|
|settings|[Settings1](#schemasettings1)|true|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "closed_caption": {},
  "control_notifications": 1,
  "country_code": "IN",
  "locale": "en-US",
  "network_standby": 0,
  "system_sound_effects": true,
  "time_format": 1,
  "timezone": "Asia/Kolkata",
  "wake_on_cast": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed_caption|object|true|none|none|
|control_notifications|integer(int32)|true|none|none|
|country_code|string|true|none|none|
|locale|string|true|none|none|
|network_standby|integer(int32)|true|none|none|
|system_sound_effects|boolean|true|none|none|
|time_format|integer(int32)|true|none|none|
|timezone|string|true|none|none|
|wake_on_cast|integer(int32)|true|none|none|

<h2 id="tocS_Settings1">Settings1</h2>
<!-- backwards compatibility -->
<a id="schemasettings1"></a>
<a id="schema_Settings1"></a>
<a id="tocSsettings1"></a>
<a id="tocssettings1"></a>

```json
{
  "control_notifications": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control_notifications|integer(int32)|true|none|none|

<h2 id="tocS_Setup">Setup</h2>
<!-- backwards compatibility -->
<a id="schemasetup"></a>
<a id="schema_Setup"></a>
<a id="tocSsetup"></a>
<a id="tocssetup"></a>

```json
{
  "qr_ssid_suffix": "",
  "setup_state": 60,
  "ssid_suffix": "k",
  "stats": {
    "num_check_connectivity": 0,
    "num_connect_wifi": 0,
    "num_connected_wifi_not_saved": 0,
    "num_initial_eureka_info": 0,
    "num_obtain_ip": 0
  },
  "tos_accepted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|qr_ssid_suffix|string|true|none|none|
|setup_state|integer(int32)|true|none|none|
|ssid_suffix|string|true|none|none|
|stats|[Stats](#schemastats)|true|none|none|
|tos_accepted|boolean|true|none|none|

<h2 id="tocS_Sign">Sign</h2>
<!-- backwards compatibility -->
<a id="schemasign"></a>
<a id="schema_Sign"></a>
<a id="tocSsign"></a>
<a id="tocssign"></a>

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n",
  "intermediate_certs": [
    "-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n"
  ],
  "nonce": "1234512345",
  "signed_data": "Rr5Q..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|true|none|none|
|intermediate_certs|[string]|true|none|none|
|nonce|string|true|none|none|
|signed_data|string|true|none|none|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "num_check_connectivity": 0,
  "num_connect_wifi": 0,
  "num_connected_wifi_not_saved": 0,
  "num_initial_eureka_info": 0,
  "num_obtain_ip": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_check_connectivity|integer(int32)|true|none|none|
|num_connect_wifi|integer(int32)|true|none|none|
|num_connected_wifi_not_saved|integer(int32)|true|none|none|
|num_initial_eureka_info|integer(int32)|true|none|none|
|num_obtain_ip|integer(int32)|true|none|none|

<h2 id="tocS_TestInternetDownloadSpeedRequest">TestInternetDownloadSpeedRequest</h2>
<!-- backwards compatibility -->
<a id="schematestinternetdownloadspeedrequest"></a>
<a id="schema_TestInternetDownloadSpeedRequest"></a>
<a id="tocStestinternetdownloadspeedrequest"></a>
<a id="tocstestinternetdownloadspeedrequest"></a>

```json
{
  "url": "https://storage.googleapis.com/reliability-speedtest/random.txt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_TimePattern">TimePattern</h2>
<!-- backwards compatibility -->
<a id="schematimepattern"></a>
<a id="schema_TimePattern"></a>
<a id="tocStimepattern"></a>
<a id="tocstimepattern"></a>

```json
{
  "hour": 6,
  "minute": 50,
  "second": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|true|none|none|
|minute|integer(int32)|true|none|none|
|second|integer(int32)|true|none|none|

<h2 id="tocS_Timer">Timer</h2>
<!-- backwards compatibility -->
<a id="schematimer"></a>
<a id="schema_Timer"></a>
<a id="tocStimer"></a>
<a id="tocstimer"></a>

```json
{
  "fire_time": 1516176765589,
  "id": "timer/xxx",
  "original_duration": 20000,
  "status": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fire_time|integer(int64)|true|none|none|
|id|string|true|none|none|
|original_duration|integer(int32)|true|none|none|
|status|integer(int32)|true|none|none|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "display_string": "India Standard Time (Kolkata)",
  "offset": 330
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_string|string|true|none|none|
|offset|integer(int32)|true|none|none|

<h2 id="tocS_UserEq">UserEq</h2>
<!-- backwards compatibility -->
<a id="schemausereq"></a>
<a id="schema_UserEq"></a>
<a id="tocSusereq"></a>
<a id="tocsusereq"></a>

```json
{
  "high_shelf": {
    "frequency": 4500,
    "gain_db": 0,
    "quality": 0.707
  },
  "low_shelf": {
    "frequency": 150,
    "gain_db": 0,
    "quality": 0.707
  },
  "max_peaking_eqs": 0,
  "peaking_eqs": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high_shelf|[HighShelf](#schemahighshelf)|true|none|none|
|low_shelf|[LowShelf](#schemalowshelf)|true|none|none|
|max_peaking_eqs|integer(int32)|true|none|none|
|peaking_eqs|[string]|true|none|none|

<h2 id="tocS_Wifi">Wifi</h2>
<!-- backwards compatibility -->
<a id="schemawifi"></a>
<a id="schema_Wifi"></a>
<a id="tocSwifi"></a>
<a id="tocswifi"></a>

```json
{
  "bssid": "a0:ab:...",
  "has_changes": false,
  "noise_level": -90,
  "signal_level": -50,
  "ssid": "Nucl...",
  "wpa_configured": true,
  "wpa_id": 1,
  "wpa_state": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bssid|string|true|none|none|
|has_changes|boolean|true|none|none|
|noise_level|integer(int32)|true|none|none|
|signal_level|integer(int32)|true|none|none|
|ssid|string|true|none|none|
|wpa_configured|boolean|true|none|none|
|wpa_id|integer(int32)|true|none|none|
|wpa_state|integer(int32)|true|none|none|

<h2 id="tocS_Window">Window</h2>
<!-- backwards compatibility -->
<a id="schemawindow"></a>
<a id="schema_Window"></a>
<a id="tocSwindow"></a>
<a id="tocswindow"></a>

```json
{
  "days": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "length_hours": 6,
  "start_hour": 23
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[integer(int32)]|true|none|none|
|length_hours|integer(int32)|true|none|none|
|start_hour|integer(int32)|true|none|none|

<h2 id="tocS_Window2">Window2</h2>
<!-- backwards compatibility -->
<a id="schemawindow2"></a>
<a id="schema_Window2"></a>
<a id="tocSwindow2"></a>
<a id="tocswindow2"></a>

```json
{
  "days": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "length_hours": 8,
  "start_hour": 22
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[integer(int32)]|true|none|none|
|length_hours|number|true|none|none|
|start_hour|number|true|none|none|
