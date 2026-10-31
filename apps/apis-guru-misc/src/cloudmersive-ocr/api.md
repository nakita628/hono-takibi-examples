<h1 id="ocrapi">ocrapi v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.

Base URLs:

* <a href="https://api.cloudmersive.com">https://api.cloudmersive.com</a>

# Authentication

* API Key (Apikey)
    - Parameter Name: **Apikey**, in: header. API Key Authentication

<h1 id="ocrapi-imageocr">ImageOcr</h1>

## Convert a scanned image into words with location

<a id="opIdImageOcr_ImageLinesWithLocation"></a>

> Code samples

```bash
curl https://example.com/ocr/image/to/lines-with-location \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/image/to/lines-with-location`

Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-scanned-image-into-words-with-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "Lines": [
    {
      "LineText": "string",
      "Words": [
        {
          "BlockNumber": 0,
          "ConfidenceLevel": 0,
          "Height": 0,
          "LineNumber": 0,
          "PageNumber": 0,
          "ParagraphNumber": 0,
          "Width": 0,
          "WordNumber": 0,
          "WordText": "string",
          "XLeft": 0,
          "YTop": 0
        }
      ]
    }
  ],
  "Successful": true
}
```

<h3 id="convert-a-scanned-image-into-words-with-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageToLinesWithLocationResult](#schemaimagetolineswithlocationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert a scanned image into words with location

<a id="opIdImageOcr_ImageWordsWithLocation"></a>

> Code samples

```bash
curl https://example.com/ocr/image/to/words-with-location \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/image/to/words-with-location`

Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-scanned-image-into-words-with-location-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "Successful": true,
  "Words": [
    {
      "BlockNumber": 0,
      "ConfidenceLevel": 0,
      "Height": 0,
      "LineNumber": 0,
      "PageNumber": 0,
      "ParagraphNumber": 0,
      "Width": 0,
      "WordNumber": 0,
      "WordText": "string",
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

<h3 id="convert-a-scanned-image-into-words-with-location-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageToWordsWithLocationResult](#schemaimagetowordswithlocationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert a scanned image into text

<a id="opIdImageOcr_Post"></a>

> Code samples

```bash
curl https://example.com/ocr/image/toText \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/image/toText`

Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-scanned-image-into-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recognitionMode|header|string|false|Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "MeanConfidenceLevel": 0,
  "TextResult": "string"
}
```

<h3 id="convert-a-scanned-image-into-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageToTextResponse](#schemaimagetotextresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Recognize a photo of a business card, extract key business information

<a id="opIdImageOcr_PhotoRecognizeBusinessCard"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/recognize/business-card \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/recognize/business-card`

Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="recognize-a-photo-of-a-business-card-extract-key-business-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "AddressString": "string",
  "BusinessName": "string",
  "EmailAddress": "string",
  "PersonName": "string",
  "PersonTitle": "string",
  "PhoneNumber": "string",
  "Successful": true,
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="recognize-a-photo-of-a-business-card-extract-key-business-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BusinessCardRecognitionResult](#schemabusinesscardrecognitionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Recognize a photo of a form, extract key fields and business information

<a id="opIdImageOcr_PhotoRecognizeForm"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/recognize/form \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/recognize/form`

Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="recognize-a-photo-of-a-form-extract-key-fields-and-business-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formTemplateDefinition|header|[FormDefinitionTemplate](#schemaformdefinitiontemplate)|false|Form field definitions|
|recognitionMode|header|string|false|Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.|
|diagnostics|header|string|false|Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "BestMatchFormSettingName": "string",
  "Diagnostics": [
    "string"
  ],
  "FieldValueExtractionResult": [
    {
      "FieldValues": [
        {
          "BoundingPoints": [
            {
              "X": 0,
              "Y": 0
            }
          ],
          "ConfidenceLevel": 0,
          "Height": 0,
          "Text": "string",
          "Width": 0,
          "XLeft": 0,
          "YTop": 0
        }
      ],
      "TargetField": {
        "AllowNumericDigits": true,
        "AlternateAnchor": "string",
        "AnchorMode": "string",
        "BottomAnchor": "string",
        "DataType": "string",
        "FieldID": "string",
        "HorizontalAlignmentType": "string",
        "Ignore": [
          "string"
        ],
        "LeftAnchor": "string",
        "MinimumCharacterCount": 0,
        "Options": "string",
        "TargetDigitCount": 0,
        "TargetFieldHeight_Relative": 0,
        "TargetFieldHorizontalAdjustment": 0,
        "TargetFieldVerticalAdjustment": 0,
        "TargetFieldWidth_Relative": 0,
        "TopAnchor": "string",
        "VerticalAlignmentType": "string"
      }
    }
  ],
  "Successful": true,
  "TableValueExtractionResults": [
    {
      "TableDefinition": {
        "ColumnDefinitions": [
          {
            "AllowNumericDigits": true,
            "AnchorMode": "string",
            "ColumnID": "string",
            "DataType": "string",
            "MinimumCharacterCount": 0,
            "TopAnchor": "string"
          }
        ],
        "TableID": "string",
        "TargetRowHeight_Relative": 0,
        "TargetTableHeight_Relative": 0
      },
      "TableRowsResult": [
        {
          "TableRowCellsResult": [
            {
              "CellValues": [
                {
                  "BoundingPoints": [
                    {
                      "X": 0,
                      "Y": 0
                    }
                  ],
                  "ConfidenceLevel": 0,
                  "Height": 0,
                  "Text": "string",
                  "Width": 0,
                  "XLeft": 0,
                  "YTop": 0
                }
              ],
              "ColumnID": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="recognize-a-photo-of-a-form-extract-key-fields-and-business-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormRecognitionResult](#schemaformrecognitionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Recognize a photo of a form, extract key fields using stored templates

<a id="opIdImageOcr_PhotoRecognizeFormAdvanced"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/recognize/form/advanced \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/recognize/form/advanced`

Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="recognize-a-photo-of-a-form-extract-key-fields-using-stored-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketID|header|string|false|Bucket ID of the Configuration Bucket storing the form templates|
|bucketSecretKey|header|string|false|Bucket Secret Key of the Configuration Bucket storing the form templates|
|recognitionMode|header|string|false|Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.|
|diagnostics|header|string|false|Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "BestMatchFormSettingName": "string",
  "Diagnostics": [
    "string"
  ],
  "FieldValueExtractionResult": [
    {
      "FieldValues": [
        {
          "BoundingPoints": [
            {
              "X": 0,
              "Y": 0
            }
          ],
          "ConfidenceLevel": 0,
          "Height": 0,
          "Text": "string",
          "Width": 0,
          "XLeft": 0,
          "YTop": 0
        }
      ],
      "TargetField": {
        "AllowNumericDigits": true,
        "AlternateAnchor": "string",
        "AnchorMode": "string",
        "BottomAnchor": "string",
        "DataType": "string",
        "FieldID": "string",
        "HorizontalAlignmentType": "string",
        "Ignore": [
          "string"
        ],
        "LeftAnchor": "string",
        "MinimumCharacterCount": 0,
        "Options": "string",
        "TargetDigitCount": 0,
        "TargetFieldHeight_Relative": 0,
        "TargetFieldHorizontalAdjustment": 0,
        "TargetFieldVerticalAdjustment": 0,
        "TargetFieldWidth_Relative": 0,
        "TopAnchor": "string",
        "VerticalAlignmentType": "string"
      }
    }
  ],
  "Successful": true,
  "TableValueExtractionResults": [
    {
      "TableDefinition": {
        "ColumnDefinitions": [
          {
            "AllowNumericDigits": true,
            "AnchorMode": "string",
            "ColumnID": "string",
            "DataType": "string",
            "MinimumCharacterCount": 0,
            "TopAnchor": "string"
          }
        ],
        "TableID": "string",
        "TargetRowHeight_Relative": 0,
        "TargetTableHeight_Relative": 0
      },
      "TableRowsResult": [
        {
          "TableRowCellsResult": [
            {
              "CellValues": [
                {
                  "BoundingPoints": [
                    {
                      "X": 0,
                      "Y": 0
                    }
                  ],
                  "ConfidenceLevel": 0,
                  "Height": 0,
                  "Text": "string",
                  "Width": 0,
                  "XLeft": 0,
                  "YTop": 0
                }
              ],
              "ColumnID": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="recognize-a-photo-of-a-form-extract-key-fields-using-stored-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormRecognitionResult](#schemaformrecognitionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Recognize a photo of a receipt, extract key business information

<a id="opIdImageOcr_PhotoRecognizeReceipt"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/recognize/receipt \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/recognize/receipt`

Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="recognize-a-photo-of-a-receipt-extract-key-business-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recognitionMode|header|string|false|Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'None'.  Possible values are None (no preprocessing of the image), and 'Advanced' (automatic image enhancement of the image before OCR is applied; this is recommended and needed to handle rotated receipts).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "AddressString": "string",
  "BusinessName": "string",
  "BusinessWebsite": "string",
  "PhoneNumber": "string",
  "ReceiptItems": [
    {
      "ItemDescription": "string",
      "ItemPrice": 0
    }
  ],
  "ReceiptSubTotal": 0,
  "ReceiptTotal": 0,
  "Successful": true,
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="recognize-a-photo-of-a-receipt-extract-key-business-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReceiptRecognitionResult](#schemareceiptrecognitionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert a photo of a document or receipt into words with location

<a id="opIdImageOcr_PhotoWordsWithLocation"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/to/words-with-location \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/to/words-with-location`

Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-photo-of-a-document-or-receipt-into-words-with-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recognitionMode|header|string|false|Optional; possible values are 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|diagnostics|header|string|false|Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "DiagnosticImage": "string",
  "Successful": true,
  "TextElements": [
    {
      "BoundingPoints": [
        {
          "X": 0,
          "Y": 0
        }
      ],
      "ConfidenceLevel": 0,
      "Height": 0,
      "Text": "string",
      "Width": 0,
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

<h3 id="convert-a-photo-of-a-document-or-receipt-into-words-with-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PhotoToWordsWithLocationResult](#schemaphototowordswithlocationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert a photo of a document into text

<a id="opIdImageOcr_PhotoToText"></a>

> Code samples

```bash
curl https://example.com/ocr/photo/toText \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/photo/toText`

Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-photo-of-a-document-into-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recognitionMode|header|string|false|Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "MeanConfidenceLevel": 0,
  "TextResult": "string"
}
```

<h3 id="convert-a-photo-of-a-document-into-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageToTextResponse](#schemaimagetotextresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

<h1 id="ocrapi-pdfocr">PdfOcr</h1>

## Convert a PDF into text lines with location

<a id="opIdPdfOcr_PdfToLinesWithLocation"></a>

> Code samples

```bash
curl https://example.com/ocr/pdf/to/lines-with-location \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/pdf/to/lines-with-location`

Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-pdf-into-text-lines-with-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|PDF file to perform OCR on.|

> Example responses

> 200 Response

```json
{
  "OcrPages": [
    {
      "Lines": [
        {
          "LineText": "string",
          "Words": [
            {
              "BlockNumber": 0,
              "ConfidenceLevel": 0,
              "Height": 0,
              "LineNumber": 0,
              "PageNumber": 0,
              "ParagraphNumber": 0,
              "Width": 0,
              "WordNumber": 0,
              "WordText": "string",
              "XLeft": 0,
              "YTop": 0
            }
          ]
        }
      ],
      "PageNumber": 0,
      "Successful": true
    }
  ],
  "Successful": true
}
```

<h3 id="convert-a-pdf-into-text-lines-with-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PdfToLinesWithLocationResult](#schemapdftolineswithlocationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert a PDF into words with location

<a id="opIdPdfOcr_PdfToWordsWithLocation"></a>

> Code samples

```bash
curl https://example.com/ocr/pdf/to/words-with-location \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/pdf/to/words-with-location`

Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-pdf-into-words-with-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|PDF file to perform OCR on.|

> Example responses

> 200 Response

```json
{
  "OcrPages": [
    {
      "PageNumber": 0,
      "Successful": true,
      "Words": [
        {
          "BlockNumber": 0,
          "ConfidenceLevel": 0,
          "Height": 0,
          "LineNumber": 0,
          "PageNumber": 0,
          "ParagraphNumber": 0,
          "Width": 0,
          "WordNumber": 0,
          "WordText": "string",
          "XLeft": 0,
          "YTop": 0
        }
      ]
    }
  ],
  "Successful": true
}
```

<h3 id="convert-a-pdf-into-words-with-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PdfToWordsWithLocationResult](#schemapdftowordswithlocationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Converts an uploaded PDF file into text via Optical Character Recognition.

<a id="opIdPdfOcr_Post"></a>

> Code samples

```bash
curl https://example.com/ocr/pdf/toText \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/pdf/toText`

> Body parameter

```yaml
imageFile: string
```

<h3 id="converts-an-uploaded-pdf-file-into-text-via-optical-character-recognition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recognitionMode|header|string|false|Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls per page; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls per page; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls per page.  Default recognition mode is 'Basic'|
|language|header|string|false|Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)|
|preprocessing|header|string|false|Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|PDF file to perform OCR on.|

> Example responses

> 200 Response

```json
{
  "OcrPages": [
    {
      "MeanConfidenceLevel": 0,
      "PageNumber": 0,
      "TextResult": "string"
    }
  ],
  "Successful": true
}
```

<h3 id="converts-an-uploaded-pdf-file-into-text-via-optical-character-recognition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PdfToTextResponse](#schemapdftotextresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

<h1 id="ocrapi-preprocessing">Preprocessing</h1>

## Convert an image of text into a binarized (light and dark) view

<a id="opIdPreprocessing_Binarize"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/binarize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/binarize`

Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-an-image-of-text-into-a-binarized-light-and-dark-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="convert-an-image-of-text-into-a-binarized-light-and-dark-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Convert an image of text into a binary (light and dark) view with ML

<a id="opIdPreprocessing_BinarizeAdvanced"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/binarize/advanced \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/binarize/advanced`

Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-an-image-of-text-into-a-binary-light-and-dark-view-with-ml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="convert-an-image-of-text-into-a-binary-light-and-dark-view-with-ml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Get the angle of the page / document / receipt

<a id="opIdPreprocessing_GetPageAngle"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/get-page-angle \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/get-page-angle`

Analyzes a photo or image of a document and identifies the rotation angle of the page.

> Body parameter

```yaml
imageFile: string
```

<h3 id="get-the-angle-of-the-page-document-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{
  "Angle": 0,
  "Successful": true
}
```

<h3 id="get-the-angle-of-the-page-document-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetPageAngleResult](#schemagetpageangleresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Detect and unrotate a document image

<a id="opIdPreprocessing_Unrotate"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/unrotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/unrotate`

Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="detect-and-unrotate-a-document-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="detect-and-unrotate-a-document-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Detect and unrotate a document image (advanced)

<a id="opIdPreprocessing_UnrotateAdvanced"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/unrotate/advanced \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/unrotate/advanced`

Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="detect-and-unrotate-a-document-image-advanced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="detect-and-unrotate-a-document-image-advanced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

## Detect and unskew a photo of a document

<a id="opIdPreprocessing_Unskew"></a>

> Code samples

```bash
curl https://example.com/ocr/preprocessing/image/unskew \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/preprocessing/image/unskew`

Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

> Body parameter

```yaml
imageFile: string
```

<h3 id="detect-and-unskew-a-photo-of-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="detect-and-unskew-a-photo-of-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

<h1 id="ocrapi-receipts">Receipts</h1>

## Convert a photo of a receipt into a CSV file containing structured information from the receipt

<a id="opIdReceipts_PhotoToCSV"></a>

> Code samples

```bash
curl https://example.com/ocr/receipts/photo/to/csv \
  -X POST \
  -H 'Accept: application/json' \
  -H "Apikey: ${API_KEY}" \
  -F 'imageFile=@/path/to/file'
```

`POST /ocr/receipts/photo/to/csv`

<aside class="warning">
This operation is deprecated
</aside>

Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.

> Body parameter

```yaml
imageFile: string
```

<h3 id="convert-a-photo-of-a-receipt-into-a-csv-file-containing-structured-information-from-the-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» imageFile|body|string(binary)|true|Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="convert-a-photo-of-a-receipt-into-a-csv-file-containing-structured-information-from-the-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Apikey
</aside>

# Schemas

<h2 id="tocS_BusinessCardRecognitionResult">BusinessCardRecognitionResult</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscardrecognitionresult"></a>
<a id="schema_BusinessCardRecognitionResult"></a>
<a id="tocSbusinesscardrecognitionresult"></a>
<a id="tocsbusinesscardrecognitionresult"></a>

```json
{
  "AddressString": "string",
  "BusinessName": "string",
  "EmailAddress": "string",
  "PersonName": "string",
  "PersonTitle": "string",
  "PhoneNumber": "string",
  "Successful": true,
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

Result of recognizing a business card, to extract the key information from the business card

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressString|string|false|none|The address printed on the business card (if included on the business card)|
|BusinessName|string|false|none|The name of the business printed on the business card (if included on the business card)|
|EmailAddress|string|false|none|The email address printed on the business card (if included on the business card)|
|PersonName|string|false|none|The name of the person printed on the business card (if included on the business card)|
|PersonTitle|string|false|none|The title of the person printed on the business card (if included on the business card)|
|PhoneNumber|string|false|none|The phone number printed on the business card (if included on the business card)|
|Successful|boolean|false|none|True if the operation was successful, false otherwise|
|Timestamp|string(date-time)|false|none|The date and time printed on the business card (if included on the business card)|

<h2 id="tocS_FieldResult">FieldResult</h2>
<!-- backwards compatibility -->
<a id="schemafieldresult"></a>
<a id="schema_FieldResult"></a>
<a id="tocSfieldresult"></a>
<a id="tocsfieldresult"></a>

```json
{
  "FieldValues": [
    {
      "BoundingPoints": [
        {
          "X": 0,
          "Y": 0
        }
      ],
      "ConfidenceLevel": 0,
      "Height": 0,
      "Text": "string",
      "Width": 0,
      "XLeft": 0,
      "YTop": 0
    }
  ],
  "TargetField": {
    "AllowNumericDigits": true,
    "AlternateAnchor": "string",
    "AnchorMode": "string",
    "BottomAnchor": "string",
    "DataType": "string",
    "FieldID": "string",
    "HorizontalAlignmentType": "string",
    "Ignore": [
      "string"
    ],
    "LeftAnchor": "string",
    "MinimumCharacterCount": 0,
    "Options": "string",
    "TargetDigitCount": 0,
    "TargetFieldHeight_Relative": 0,
    "TargetFieldHorizontalAdjustment": 0,
    "TargetFieldVerticalAdjustment": 0,
    "TargetFieldWidth_Relative": 0,
    "TopAnchor": "string",
    "VerticalAlignmentType": "string"
  }
}
```

A pairing target field and actual value read from form

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldValues|[[OcrPhotoTextElement](#schemaocrphototextelement)]|false|none|Result field value(s) extracted|
|TargetField|[FormFieldDefinition](#schemaformfielddefinition)|false|none|Definition of a form field for OCR data extraction from images|

<h2 id="tocS_FormDefinitionTemplate">FormDefinitionTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaformdefinitiontemplate"></a>
<a id="schema_FormDefinitionTemplate"></a>
<a id="tocSformdefinitiontemplate"></a>
<a id="tocsformdefinitiontemplate"></a>

```json
{
  "FieldDefinitions": [
    {
      "AllowNumericDigits": true,
      "AlternateAnchor": "string",
      "AnchorMode": "string",
      "BottomAnchor": "string",
      "DataType": "string",
      "FieldID": "string",
      "HorizontalAlignmentType": "string",
      "Ignore": [
        "string"
      ],
      "LeftAnchor": "string",
      "MinimumCharacterCount": 0,
      "Options": "string",
      "TargetDigitCount": 0,
      "TargetFieldHeight_Relative": 0,
      "TargetFieldHorizontalAdjustment": 0,
      "TargetFieldVerticalAdjustment": 0,
      "TargetFieldWidth_Relative": 0,
      "TopAnchor": "string",
      "VerticalAlignmentType": "string"
    }
  ],
  "TableDefinitions": [
    {
      "ColumnDefinitions": [
        {
          "AllowNumericDigits": true,
          "AnchorMode": "string",
          "ColumnID": "string",
          "DataType": "string",
          "MinimumCharacterCount": 0,
          "TopAnchor": "string"
        }
      ],
      "TableID": "string",
      "TargetRowHeight_Relative": 0,
      "TargetTableHeight_Relative": 0
    }
  ]
}
```

Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldDefinitions|[[FormFieldDefinition](#schemaformfielddefinition)]|false|none|Field definitions in the template; a field is comprised of a key/value pair|
|TableDefinitions|[[FormTableDefinition](#schemaformtabledefinition)]|false|none|Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice|

<h2 id="tocS_FormFieldDefinition">FormFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaformfielddefinition"></a>
<a id="schema_FormFieldDefinition"></a>
<a id="tocSformfielddefinition"></a>
<a id="tocsformfielddefinition"></a>

```json
{
  "AllowNumericDigits": true,
  "AlternateAnchor": "string",
  "AnchorMode": "string",
  "BottomAnchor": "string",
  "DataType": "string",
  "FieldID": "string",
  "HorizontalAlignmentType": "string",
  "Ignore": [
    "string"
  ],
  "LeftAnchor": "string",
  "MinimumCharacterCount": 0,
  "Options": "string",
  "TargetDigitCount": 0,
  "TargetFieldHeight_Relative": 0,
  "TargetFieldHorizontalAdjustment": 0,
  "TargetFieldVerticalAdjustment": 0,
  "TargetFieldWidth_Relative": 0,
  "TopAnchor": "string",
  "VerticalAlignmentType": "string"
}
```

Definition of a form field for OCR data extraction from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowNumericDigits|boolean|false|none|Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits|
|AlternateAnchor|string|false|none|Optional - alterate match text for the specified anchor|
|AnchorMode|string|false|none|Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.|
|BottomAnchor|string|false|none|Optional - the bottom anchor of the field|
|DataType|string|false|none|The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)|
|FieldID|string|false|none|The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.|
|HorizontalAlignmentType|string|false|none|Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right|
|Ignore|[string]|false|none|Optional - Ignore any result items that contain a partial or complete match with these text strings|
|LeftAnchor|string|false|none|Optional - the left-hand anchor of the field|
|MinimumCharacterCount|integer(int32)|false|none|Optional - the target number of digits in the field; useful for fixed-length fields|
|Options|string|false|none|Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)|
|TargetDigitCount|integer(int32)|false|none|Optional - the target number of digits in the field; useful for fixed-length fields|
|TargetFieldHeight_Relative|number(double)|false|none|Optional - scale factor for target field height - relative to height of field title|
|TargetFieldHorizontalAdjustment|number(double)|false|none|Optional - horizontal adjestment in relative width of the field|
|TargetFieldVerticalAdjustment|number(double)|false|none|Optional - vertical adjestment in relative height of the field|
|TargetFieldWidth_Relative|number(double)|false|none|Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.|
|TopAnchor|string|false|none|Optional - the top anchor of the field|
|VerticalAlignmentType|string|false|none|Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom|

<h2 id="tocS_FormRecognitionResult">FormRecognitionResult</h2>
<!-- backwards compatibility -->
<a id="schemaformrecognitionresult"></a>
<a id="schema_FormRecognitionResult"></a>
<a id="tocSformrecognitionresult"></a>
<a id="tocsformrecognitionresult"></a>

```json
{
  "BestMatchFormSettingName": "string",
  "Diagnostics": [
    "string"
  ],
  "FieldValueExtractionResult": [
    {
      "FieldValues": [
        {
          "BoundingPoints": [
            {
              "X": 0,
              "Y": 0
            }
          ],
          "ConfidenceLevel": 0,
          "Height": 0,
          "Text": "string",
          "Width": 0,
          "XLeft": 0,
          "YTop": 0
        }
      ],
      "TargetField": {
        "AllowNumericDigits": true,
        "AlternateAnchor": "string",
        "AnchorMode": "string",
        "BottomAnchor": "string",
        "DataType": "string",
        "FieldID": "string",
        "HorizontalAlignmentType": "string",
        "Ignore": [
          "string"
        ],
        "LeftAnchor": "string",
        "MinimumCharacterCount": 0,
        "Options": "string",
        "TargetDigitCount": 0,
        "TargetFieldHeight_Relative": 0,
        "TargetFieldHorizontalAdjustment": 0,
        "TargetFieldVerticalAdjustment": 0,
        "TargetFieldWidth_Relative": 0,
        "TopAnchor": "string",
        "VerticalAlignmentType": "string"
      }
    }
  ],
  "Successful": true,
  "TableValueExtractionResults": [
    {
      "TableDefinition": {
        "ColumnDefinitions": [
          {
            "AllowNumericDigits": true,
            "AnchorMode": "string",
            "ColumnID": "string",
            "DataType": "string",
            "MinimumCharacterCount": 0,
            "TopAnchor": "string"
          }
        ],
        "TableID": "string",
        "TargetRowHeight_Relative": 0,
        "TargetTableHeight_Relative": 0
      },
      "TableRowsResult": [
        {
          "TableRowCellsResult": [
            {
              "CellValues": [
                {
                  "BoundingPoints": [
                    {
                      "X": 0,
                      "Y": 0
                    }
                  ],
                  "ConfidenceLevel": 0,
                  "Height": 0,
                  "Text": "string",
                  "Width": 0,
                  "XLeft": 0,
                  "YTop": 0
                }
              ],
              "ColumnID": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

The result of extracting form field values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BestMatchFormSettingName|string|false|none|Optional; populated when using photo/recognize/form/advanced with the Setting Name of the best-matching highest-relevance form|
|Diagnostics|[string]|false|none|Diagnostic images - default is null, enable diagnostics=true to populate this parameter with one image per field|
|FieldValueExtractionResult|[[FieldResult](#schemafieldresult)]|false|none|Result of form field OCR data extraction|
|Successful|boolean|false|none|True if the operation was successful, false otherwise|
|TableValueExtractionResults|[[TableResult](#schematableresult)]|false|none|Result of form table OCR data extraction|

<h2 id="tocS_FormTableColumnDefinition">FormTableColumnDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaformtablecolumndefinition"></a>
<a id="schema_FormTableColumnDefinition"></a>
<a id="tocSformtablecolumndefinition"></a>
<a id="tocsformtablecolumndefinition"></a>

```json
{
  "AllowNumericDigits": true,
  "AnchorMode": "string",
  "ColumnID": "string",
  "DataType": "string",
  "MinimumCharacterCount": 0,
  "TopAnchor": "string"
}
```

Definition of a column within a table for OCR data extraction from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowNumericDigits|boolean|false|none|Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits|
|AnchorMode|string|false|none|Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.|
|ColumnID|string|false|none|The identifier of the field; use this to identify which field is being referenced|
|DataType|string|false|none|The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)|
|MinimumCharacterCount|integer(int32)|false|none|Optional - the target number of digits in the field; useful for fixed-length fields|
|TopAnchor|string|false|none|Optional - the top anchor of the column heading|

<h2 id="tocS_FormTableDefinition">FormTableDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaformtabledefinition"></a>
<a id="schema_FormTableDefinition"></a>
<a id="tocSformtabledefinition"></a>
<a id="tocsformtabledefinition"></a>

```json
{
  "ColumnDefinitions": [
    {
      "AllowNumericDigits": true,
      "AnchorMode": "string",
      "ColumnID": "string",
      "DataType": "string",
      "MinimumCharacterCount": 0,
      "TopAnchor": "string"
    }
  ],
  "TableID": "string",
  "TargetRowHeight_Relative": 0,
  "TargetTableHeight_Relative": 0
}
```

Definition of a form table for OCR data extraction from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnDefinitions|[[FormTableColumnDefinition](#schemaformtablecolumndefinition)]|false|none|Definition of the columns in the table|
|TableID|string|false|none|Optional; the ID of the table|
|TargetRowHeight_Relative|number(double)|false|none|Optional - scale factor for target row height - relative to height of column header|
|TargetTableHeight_Relative|number(double)|false|none|Optional - scale factor for target table height - relative to maximum height of headers of columns|

<h2 id="tocS_GetPageAngleResult">GetPageAngleResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpageangleresult"></a>
<a id="schema_GetPageAngleResult"></a>
<a id="tocSgetpageangleresult"></a>
<a id="tocsgetpageangleresult"></a>

```json
{
  "Angle": 0,
  "Successful": true
}
```

Result of performing a get-page-angle operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Angle|number(double)|false|none|Angle of the page in radians; 0 represents perfectly horizontal|
|Successful|boolean|false|none|True if the operation was successful, false otherwise|

<h2 id="tocS_ImageToLinesWithLocationResult">ImageToLinesWithLocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagetolineswithlocationresult"></a>
<a id="schema_ImageToLinesWithLocationResult"></a>
<a id="tocSimagetolineswithlocationresult"></a>
<a id="tocsimagetolineswithlocationresult"></a>

```json
{
  "Lines": [
    {
      "LineText": "string",
      "Words": [
        {
          "BlockNumber": 0,
          "ConfidenceLevel": 0,
          "Height": 0,
          "LineNumber": 0,
          "PageNumber": 0,
          "ParagraphNumber": 0,
          "Width": 0,
          "WordNumber": 0,
          "WordText": "string",
          "XLeft": 0,
          "YTop": 0
        }
      ]
    }
  ],
  "Successful": true
}
```

Result of an image to lines-with-location OCR operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lines|[[OcrLineElement](#schemaocrlineelement)]|false|none|Words in the image|
|Successful|boolean|false|none|True if successful, false otherwise|

<h2 id="tocS_ImageToTextResponse">ImageToTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimagetotextresponse"></a>
<a id="schema_ImageToTextResponse"></a>
<a id="tocSimagetotextresponse"></a>
<a id="tocsimagetotextresponse"></a>

```json
{
  "MeanConfidenceLevel": 0,
  "TextResult": "string"
}
```

Response from an OCR to text operation.  Includes the confience rating and converted text result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeanConfidenceLevel|number(float)|false|none|Confidence level rating of the OCR operation; ratings above 80% are strong.|
|TextResult|string|false|none|Converted text string from the image input.|

<h2 id="tocS_ImageToWordsWithLocationResult">ImageToWordsWithLocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagetowordswithlocationresult"></a>
<a id="schema_ImageToWordsWithLocationResult"></a>
<a id="tocSimagetowordswithlocationresult"></a>
<a id="tocsimagetowordswithlocationresult"></a>

```json
{
  "Successful": true,
  "Words": [
    {
      "BlockNumber": 0,
      "ConfidenceLevel": 0,
      "Height": 0,
      "LineNumber": 0,
      "PageNumber": 0,
      "ParagraphNumber": 0,
      "Width": 0,
      "WordNumber": 0,
      "WordText": "string",
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

Result of an image to words-with-location OCR operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|boolean|false|none|True if successful, false otherwise|
|Words|[[OcrWordElement](#schemaocrwordelement)]|false|none|Word elements in the image|

<h2 id="tocS_OcrLineElement">OcrLineElement</h2>
<!-- backwards compatibility -->
<a id="schemaocrlineelement"></a>
<a id="schema_OcrLineElement"></a>
<a id="tocSocrlineelement"></a>
<a id="tocsocrlineelement"></a>

```json
{
  "LineText": "string",
  "Words": [
    {
      "BlockNumber": 0,
      "ConfidenceLevel": 0,
      "Height": 0,
      "LineNumber": 0,
      "PageNumber": 0,
      "ParagraphNumber": 0,
      "Width": 0,
      "WordNumber": 0,
      "WordText": "string",
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

A contiguous line of text in an OCR document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineText|string|false|none|Text of the line|
|Words|[[OcrWordElement](#schemaocrwordelement)]|false|none|Word objects in the line|

<h2 id="tocS_OcrPageResult">OcrPageResult</h2>
<!-- backwards compatibility -->
<a id="schemaocrpageresult"></a>
<a id="schema_OcrPageResult"></a>
<a id="tocSocrpageresult"></a>
<a id="tocsocrpageresult"></a>

```json
{
  "MeanConfidenceLevel": 0,
  "PageNumber": 0,
  "TextResult": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeanConfidenceLevel|number(float)|false|none|Confidence level rating of the OCR operation; ratings above 80% are strong.|
|PageNumber|integer(int32)|false|none|Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file|
|TextResult|string|false|none|Converted text string from the image input.|

<h2 id="tocS_OcrPageResultWithLinesWithLocation">OcrPageResultWithLinesWithLocation</h2>
<!-- backwards compatibility -->
<a id="schemaocrpageresultwithlineswithlocation"></a>
<a id="schema_OcrPageResultWithLinesWithLocation"></a>
<a id="tocSocrpageresultwithlineswithlocation"></a>
<a id="tocsocrpageresultwithlineswithlocation"></a>

```json
{
  "Lines": [
    {
      "LineText": "string",
      "Words": [
        {
          "BlockNumber": 0,
          "ConfidenceLevel": 0,
          "Height": 0,
          "LineNumber": 0,
          "PageNumber": 0,
          "ParagraphNumber": 0,
          "Width": 0,
          "WordNumber": 0,
          "WordText": "string",
          "XLeft": 0,
          "YTop": 0
        }
      ]
    }
  ],
  "PageNumber": 0,
  "Successful": true
}
```

OCR results of a page, including lines of text and their location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lines|[[OcrLineElement](#schemaocrlineelement)]|false|none|Word elements in the image|
|PageNumber|integer(int32)|false|none|Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file|
|Successful|boolean|false|none|True if successful, false otherwise|

<h2 id="tocS_OcrPageResultWithWordsWithLocation">OcrPageResultWithWordsWithLocation</h2>
<!-- backwards compatibility -->
<a id="schemaocrpageresultwithwordswithlocation"></a>
<a id="schema_OcrPageResultWithWordsWithLocation"></a>
<a id="tocSocrpageresultwithwordswithlocation"></a>
<a id="tocsocrpageresultwithwordswithlocation"></a>

```json
{
  "PageNumber": 0,
  "Successful": true,
  "Words": [
    {
      "BlockNumber": 0,
      "ConfidenceLevel": 0,
      "Height": 0,
      "LineNumber": 0,
      "PageNumber": 0,
      "ParagraphNumber": 0,
      "Width": 0,
      "WordNumber": 0,
      "WordText": "string",
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

OCR results of a page, including words of text and their location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageNumber|integer(int32)|false|none|Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file|
|Successful|boolean|false|none|True if successful, false otherwise|
|Words|[[OcrWordElement](#schemaocrwordelement)]|false|none|Word elements in the image|

<h2 id="tocS_OcrPhotoTextElement">OcrPhotoTextElement</h2>
<!-- backwards compatibility -->
<a id="schemaocrphototextelement"></a>
<a id="schema_OcrPhotoTextElement"></a>
<a id="tocSocrphototextelement"></a>
<a id="tocsocrphototextelement"></a>

```json
{
  "BoundingPoints": [
    {
      "X": 0,
      "Y": 0
    }
  ],
  "ConfidenceLevel": 0,
  "Height": 0,
  "Text": "string",
  "Width": 0,
  "XLeft": 0,
  "YTop": 0
}
```

A single text in an OCR document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoundingPoints|[[Point](#schemapoint)]|false|none|Points that form the bounding polygon around the text|
|ConfidenceLevel|number(double)|false|none|Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)|
|Height|integer(int32)|false|none|Height of the word in pixels|
|Text|string|false|none|Text of the word|
|Width|integer(int32)|false|none|Width of the word in pixels|
|XLeft|integer(int32)|false|none|X location of the left edge of the word in pixels|
|YTop|integer(int32)|false|none|Y location of the top edge of the word in pixels|

<h2 id="tocS_OcrWordElement">OcrWordElement</h2>
<!-- backwards compatibility -->
<a id="schemaocrwordelement"></a>
<a id="schema_OcrWordElement"></a>
<a id="tocSocrwordelement"></a>
<a id="tocsocrwordelement"></a>

```json
{
  "BlockNumber": 0,
  "ConfidenceLevel": 0,
  "Height": 0,
  "LineNumber": 0,
  "PageNumber": 0,
  "ParagraphNumber": 0,
  "Width": 0,
  "WordNumber": 0,
  "WordText": "string",
  "XLeft": 0,
  "YTop": 0
}
```

A single word in an OCR document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockNumber|integer(int32)|false|none|Index of the containing block|
|ConfidenceLevel|number(double)|false|none|Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)|
|Height|integer(int32)|false|none|Height of the word in pixels|
|LineNumber|integer(int32)|false|none|Line number of the word|
|PageNumber|integer(int32)|false|none|Index of the containing page|
|ParagraphNumber|integer(int32)|false|none|Index of the containing paragraph|
|Width|integer(int32)|false|none|Width of the word in pixels|
|WordNumber|integer(int32)|false|none|Index of the word in the line|
|WordText|string|false|none|Text of the word|
|XLeft|integer(int32)|false|none|X location of the left edge of the word in pixels|
|YTop|integer(int32)|false|none|Y location of the top edge of the word in pixels|

<h2 id="tocS_PdfToLinesWithLocationResult">PdfToLinesWithLocationResult</h2>
<!-- backwards compatibility -->
<a id="schemapdftolineswithlocationresult"></a>
<a id="schema_PdfToLinesWithLocationResult"></a>
<a id="tocSpdftolineswithlocationresult"></a>
<a id="tocspdftolineswithlocationresult"></a>

```json
{
  "OcrPages": [
    {
      "Lines": [
        {
          "LineText": "string",
          "Words": [
            {
              "BlockNumber": 0,
              "ConfidenceLevel": 0,
              "Height": 0,
              "LineNumber": 0,
              "PageNumber": 0,
              "ParagraphNumber": 0,
              "Width": 0,
              "WordNumber": 0,
              "WordText": "string",
              "XLeft": 0,
              "YTop": 0
            }
          ]
        }
      ],
      "PageNumber": 0,
      "Successful": true
    }
  ],
  "Successful": true
}
```

Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OcrPages|[[OcrPageResultWithLinesWithLocation](#schemaocrpageresultwithlineswithlocation)]|false|none|OCR results for each page|
|Successful|boolean|false|none|True if successful, false otherwise|

<h2 id="tocS_PdfToTextResponse">PdfToTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemapdftotextresponse"></a>
<a id="schema_PdfToTextResponse"></a>
<a id="tocSpdftotextresponse"></a>
<a id="tocspdftotextresponse"></a>

```json
{
  "OcrPages": [
    {
      "MeanConfidenceLevel": 0,
      "PageNumber": 0,
      "TextResult": "string"
    }
  ],
  "Successful": true
}
```

Response from an OCR to text operation.  Includes the confidence rating and converted text result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OcrPages|[[OcrPageResult](#schemaocrpageresult)]|false|none|Page OCR results|
|Successful|boolean|false|none|True if successful, false otherwise|

<h2 id="tocS_PdfToWordsWithLocationResult">PdfToWordsWithLocationResult</h2>
<!-- backwards compatibility -->
<a id="schemapdftowordswithlocationresult"></a>
<a id="schema_PdfToWordsWithLocationResult"></a>
<a id="tocSpdftowordswithlocationresult"></a>
<a id="tocspdftowordswithlocationresult"></a>

```json
{
  "OcrPages": [
    {
      "PageNumber": 0,
      "Successful": true,
      "Words": [
        {
          "BlockNumber": 0,
          "ConfidenceLevel": 0,
          "Height": 0,
          "LineNumber": 0,
          "PageNumber": 0,
          "ParagraphNumber": 0,
          "Width": 0,
          "WordNumber": 0,
          "WordText": "string",
          "XLeft": 0,
          "YTop": 0
        }
      ]
    }
  ],
  "Successful": true
}
```

Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OcrPages|[[OcrPageResultWithWordsWithLocation](#schemaocrpageresultwithwordswithlocation)]|false|none|OCR page results|
|Successful|boolean|false|none|True if successful, false otherwise|

<h2 id="tocS_PhotoToWordsWithLocationResult">PhotoToWordsWithLocationResult</h2>
<!-- backwards compatibility -->
<a id="schemaphototowordswithlocationresult"></a>
<a id="schema_PhotoToWordsWithLocationResult"></a>
<a id="tocSphototowordswithlocationresult"></a>
<a id="tocsphototowordswithlocationresult"></a>

```json
{
  "DiagnosticImage": "string",
  "Successful": true,
  "TextElements": [
    {
      "BoundingPoints": [
        {
          "X": 0,
          "Y": 0
        }
      ],
      "ConfidenceLevel": 0,
      "Height": 0,
      "Text": "string",
      "Width": 0,
      "XLeft": 0,
      "YTop": 0
    }
  ]
}
```

Result of an photo to words-with-location OCR operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiagnosticImage|string(byte)|false|none|Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header "DiagnosticMode" with the value "true".  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage.|
|Successful|boolean|false|none|True if successful, false otherwise|
|TextElements|[[OcrPhotoTextElement](#schemaocrphototextelement)]|false|none|Word elements in the image|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "X": 0,
  "Y": 0
}
```

Point location in 2D in an image, where 0, 0 represents the top/left corner of the image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|X|integer(int32)|false|none|X location in 2D in the image, where 0 represents the left edge of the image|
|Y|integer(int32)|false|none|Y location in 2D in the image, where 0 represents the top edge of the image|

<h2 id="tocS_ReceiptLineItem">ReceiptLineItem</h2>
<!-- backwards compatibility -->
<a id="schemareceiptlineitem"></a>
<a id="schema_ReceiptLineItem"></a>
<a id="tocSreceiptlineitem"></a>
<a id="tocsreceiptlineitem"></a>

```json
{
  "ItemDescription": "string",
  "ItemPrice": 0
}
```

Receipt line item, comprised of a product or item and a price (if available)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ItemDescription|string|false|none|Description of the item|
|ItemPrice|number(double)|false|none|Price of the item if available|

<h2 id="tocS_ReceiptRecognitionResult">ReceiptRecognitionResult</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrecognitionresult"></a>
<a id="schema_ReceiptRecognitionResult"></a>
<a id="tocSreceiptrecognitionresult"></a>
<a id="tocsreceiptrecognitionresult"></a>

```json
{
  "AddressString": "string",
  "BusinessName": "string",
  "BusinessWebsite": "string",
  "PhoneNumber": "string",
  "ReceiptItems": [
    {
      "ItemDescription": "string",
      "ItemPrice": 0
    }
  ],
  "ReceiptSubTotal": 0,
  "ReceiptTotal": 0,
  "Successful": true,
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

Result of recognizing a receipt, to extract the key information from the receipt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressString|string|false|none|The address of the business printed on the receipt (if included on the receipt)|
|BusinessName|string|false|none|The name of the business printed on the receipt (if included on the receipt)|
|BusinessWebsite|string|false|none|The website URL of the business printed on the receipt (if included on the receipt)|
|PhoneNumber|string|false|none|The phone number printed on the receipt (if included on the receipt)|
|ReceiptItems|[[ReceiptLineItem](#schemareceiptlineitem)]|false|none|The individual line items comprising the order; does not include total (see ReceiptTotal)|
|ReceiptSubTotal|number(double)|false|none|Optional; if available, the monetary value of the receipt subtotal - typically not including specialized line items such as Tax. If this value is not available, it will be 0.|
|ReceiptTotal|number(double)|false|none|The total monetary value of the receipt (if included on the receipt)|
|Successful|boolean|false|none|True if the operation was successful, false otherwise|
|Timestamp|string(date-time)|false|none|The date and time printed on the receipt (if included on the receipt)|

<h2 id="tocS_TableCellResult">TableCellResult</h2>
<!-- backwards compatibility -->
<a id="schematablecellresult"></a>
<a id="schema_TableCellResult"></a>
<a id="tocStablecellresult"></a>
<a id="tocstablecellresult"></a>

```json
{
  "CellValues": [
    {
      "BoundingPoints": [
        {
          "X": 0,
          "Y": 0
        }
      ],
      "ConfidenceLevel": 0,
      "Height": 0,
      "Text": "string",
      "Width": 0,
      "XLeft": 0,
      "YTop": 0
    }
  ],
  "ColumnID": "string"
}
```

The recognition result of one cell in one row in a table of a form

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CellValues|[[OcrPhotoTextElement](#schemaocrphototextelement)]|false|none|Result cell value(s) extracted|
|ColumnID|string|false|none|The ID of the column|

<h2 id="tocS_TableResult">TableResult</h2>
<!-- backwards compatibility -->
<a id="schematableresult"></a>
<a id="schema_TableResult"></a>
<a id="tocStableresult"></a>
<a id="tocstableresult"></a>

```json
{
  "TableDefinition": {
    "ColumnDefinitions": [
      {
        "AllowNumericDigits": true,
        "AnchorMode": "string",
        "ColumnID": "string",
        "DataType": "string",
        "MinimumCharacterCount": 0,
        "TopAnchor": "string"
      }
    ],
    "TableID": "string",
    "TargetRowHeight_Relative": 0,
    "TargetTableHeight_Relative": 0
  },
  "TableRowsResult": [
    {
      "TableRowCellsResult": [
        {
          "CellValues": [
            {
              "BoundingPoints": [
                {
                  "X": 0,
                  "Y": 0
                }
              ],
              "ConfidenceLevel": 0,
              "Height": 0,
              "Text": "string",
              "Width": 0,
              "XLeft": 0,
              "YTop": 0
            }
          ],
          "ColumnID": "string"
        }
      ]
    }
  ]
}
```

The result of reading a table via OCR from a form

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDefinition|[FormTableDefinition](#schemaformtabledefinition)|false|none|Definition of a form table for OCR data extraction from images|
|TableRowsResult|[[TableRowResult](#schematablerowresult)]|false|none|Rows of data in the table|

<h2 id="tocS_TableRowResult">TableRowResult</h2>
<!-- backwards compatibility -->
<a id="schematablerowresult"></a>
<a id="schema_TableRowResult"></a>
<a id="tocStablerowresult"></a>
<a id="tocstablerowresult"></a>

```json
{
  "TableRowCellsResult": [
    {
      "CellValues": [
        {
          "BoundingPoints": [
            {
              "X": 0,
              "Y": 0
            }
          ],
          "ConfidenceLevel": 0,
          "Height": 0,
          "Text": "string",
          "Width": 0,
          "XLeft": 0,
          "YTop": 0
        }
      ],
      "ColumnID": "string"
    }
  ]
}
```

One row of data in the resulting table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableRowCellsResult|[[TableCellResult](#schematablecellresult)]|false|none|Table cells in this row result|
