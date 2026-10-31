<h1 id="json2video-api">JSON2Video API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Create and edit awesome videos programmatically

Base URLs:

* <a href="https://api.json2video.com/v2">https://api.json2video.com/v2</a> - Version 2 endpoint

<h1 id="json2video-api-default">Default</h1>

## Get the status of your movies

<a id="opIdgetMovies"></a>

> Code samples

```bash
curl https://example.com/movies
```

`GET /movies`

Get the status any of your movies by passing your project ID in the <code>project</code> query parameter. You can get your project ID from the response of the POST request.

<h3 id="get-the-status-of-your-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new movie

<a id="opIdnewMovie"></a>

> Code samples

```bash
curl https://example.com/movies \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "comment": "MyProject",
    "resolution": "640x360",
    "scenes": [
      {
        "elements": [
          {
            "src": "https://example.com/path/to/my/video.mp4",
            "type": "video"
          }
        ]
      }
    ]
  }'
```

`POST /movies`

Submit a new movie rendering job.

> Body parameter

```json
{
  "comment": "MyProject",
  "resolution": "640x360",
  "scenes": [
    {
      "elements": [
        {
          "src": "https://example.com/path/to/my/video.mp4",
          "type": "video"
        }
      ]
    }
  ]
}
```

<h3 id="create-a-new-movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[movie](#schemamovie)|true|none|
|» cache|body|boolean|false|none|
|» comment|body|string|false|Used for adding your comments|
|» draft|body|boolean|false|Draft movies include a watermark. Check your plan how many draft and final movies you have|
|» elements|body|[[video](#schemavideo) \| [image](#schemaimage) \| [text](#schematext) \| [html](#schemahtml) \| [component](#schemacomponent) \| [template](#schematemplate) \| [audio](#schemaaudio) \| [voice](#schemavoice)]|false|none|
|» » *oneOf*|body|[video](#schemavideo)|false|none|
|» » *oneOf*|body|[image](#schemaimage)|false|none|
|» » *oneOf*|body|[text](#schematext)|false|Creates a text element of a given style|
|» » *oneOf*|body|[html](#schemahtml)|false|Creates a video recording or a screenshot of the provided HTML snippet|
|» » *oneOf*|body|[component](#schemacomponent)|false|Creates an element based on the specified feature|
|» » *oneOf*|body|[template](#schematemplate)|false|Creates an element based on the specified feature|
|» » *oneOf*|body|[audio](#schemaaudio)|false|none|
|» » *oneOf*|body|[voice](#schemavoice)|false|Creates a voice audio element from the provided text|
|» fps|body|integer|false|Frames per second|
|» height|body|integer|false|none|
|» quality|body|string|false|none|
|» resolution|body|string|false|none|
|» scenes|body|[[scene](#schemascene)]|true|none|
|» settings|body|object|false|Movie advanced settings|
|» width|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» draft|true|
|» draft|false|
|» quality|low|
|» quality|medium|
|» quality|high|
|» resolution|sd|
|» resolution|hd|
|» resolution|full-hd|
|» resolution|squared|
|» resolution|instagram-story|
|» resolution|instagram-feed|
|» resolution|twitter-landscape|
|» resolution|twitter-portrait|

<h3 id="create-a-new-movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Added|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AudioElement">AudioElement</h2>
<!-- backwards compatibility -->
<a id="schemaaudioelement"></a>
<a id="schema_AudioElement"></a>
<a id="tocSaudioelement"></a>
<a id="tocsaudioelement"></a>

```json
{
  "muted": false,
  "volume": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|muted|boolean|false|none|Mutes the audio|
|volume|number|false|none|none|

<h2 id="tocS_BaseElement">BaseElement</h2>
<!-- backwards compatibility -->
<a id="schemabaseelement"></a>
<a id="schema_BaseElement"></a>
<a id="tocSbaseelement"></a>
<a id="tocsbaseelement"></a>

```json
{
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|

<h2 id="tocS_CaptureProperty">CaptureProperty</h2>
<!-- backwards compatibility -->
<a id="schemacaptureproperty"></a>
<a id="schema_CaptureProperty"></a>
<a id="tocScaptureproperty"></a>
<a id="tocscaptureproperty"></a>

```json
{
  "capture": {
    "duration": 0,
    "height": 360,
    "width": 640
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capture|object|false|none|Browser capture settings|

<h2 id="tocS_VisualElement">VisualElement</h2>
<!-- backwards compatibility -->
<a id="schemavisualelement"></a>
<a id="schema_VisualElement"></a>
<a id="tocSvisualelement"></a>
<a id="tocsvisualelement"></a>

```json
{
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_audio">audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "src": "http://example.com",
  "type": "audio",
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "muted": false,
  "volume": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|src|string(uri)|false|none|none|
|type|string|false|none|none|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|muted|boolean|false|none|Mutes the audio|
|volume|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audio|

<h2 id="tocS_component">component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "component": "basic/001",
  "height": -1,
  "settings": {},
  "type": "component",
  "width": -1,
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

Creates an element based on the specified feature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|string|true|none|ID of the Component element. Check all available components in the <a href='https://json2video.com/docs/resources/basic/'>library</a>|
|height|integer|false|none|Desired text element height, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie height|
|settings|object|false|none|Settings to be passed to the component|
|type|string|true|none|none|
|width|integer|false|none|Desired text element width, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie width|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|type|component|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_html">html</h2>
<!-- backwards compatibility -->
<a id="schemahtml"></a>
<a id="schema_html"></a>
<a id="tocShtml"></a>
<a id="tocshtml"></a>

```json
{
  "height": -1,
  "html": "&lt;h1&gt;Hello world&lt;/h1&gt;",
  "tailwindcss": true,
  "type": "html",
  "width": -1,
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

Creates a video recording or a screenshot of the provided HTML snippet

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|Desired text element height. A value of <code>-1</code> means inherits scenes or movie height|
|html|string|true|none|HTML snippet to render. Compatible with HTML5, CSS3 and Javascript|
|tailwindcss|boolean|false|none|Enables usage of TailwindCSS for the HTML snippet|
|type|string|true|none|none|
|width|integer|false|none|Desired text element width. A value of <code>-1</code> means inherits scenes or movie width|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_image">image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "src": "http://example.com",
  "type": "image",
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|src|string(uri)|false|none|none|
|type|string|false|none|none|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_movie">movie</h2>
<!-- backwards compatibility -->
<a id="schemamovie"></a>
<a id="schema_movie"></a>
<a id="tocSmovie"></a>
<a id="tocsmovie"></a>

```json
{
  "comment": "MyProject",
  "resolution": "640x360",
  "scenes": [
    {
      "elements": [
        {
          "src": "https://example.com/path/to/my/video.mp4",
          "type": "video"
        }
      ]
    }
  ]
}
```

Object defining the movie to be rendered

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|boolean|false|none|none|
|comment|string|false|none|Used for adding your comments|
|draft|boolean|false|none|Draft movies include a watermark. Check your plan how many draft and final movies you have|
|elements|[[video](#schemavideo) \| [image](#schemaimage) \| [text](#schematext) \| [html](#schemahtml) \| [component](#schemacomponent) \| [template](#schematemplate) \| [audio](#schemaaudio) \| [voice](#schemavoice)]|false|none|none|
|fps|integer|false|none|Frames per second|
|height|integer|false|none|none|
|quality|string|false|none|none|
|resolution|string|false|none|none|
|scenes|[[scene](#schemascene)]|true|none|none|
|settings|object|false|none|Movie advanced settings|
|width|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|draft|true|
|draft|false|
|quality|low|
|quality|medium|
|quality|high|
|resolution|sd|
|resolution|hd|
|resolution|full-hd|
|resolution|squared|
|resolution|instagram-story|
|resolution|instagram-feed|
|resolution|twitter-landscape|
|resolution|twitter-portrait|

<h2 id="tocS_scene">scene</h2>
<!-- backwards compatibility -->
<a id="schemascene"></a>
<a id="schema_scene"></a>
<a id="tocSscene"></a>
<a id="tocsscene"></a>

```json
{
  "background-color": "#FF0000",
  "cache": true,
  "comment": "string",
  "duration": -1,
  "elements": [
    {
      "src": "http://example.com",
      "type": "video",
      "cache": false,
      "comment": "string",
      "duration": 7.3,
      "extra-time": 0.5,
      "fade-in": 0,
      "fade-out": 0,
      "start": 0,
      "z-index": 3,
      "chroma-key": {
        "color": "#00b140",
        "tolerance": 25
      },
      "crop": {
        "height": 0,
        "width": 0,
        "x": 0,
        "y": 0
      },
      "pan": "left",
      "position": "custom",
      "rotate": {
        "angle": 0,
        "speed": 0
      },
      "scale": {
        "height": -1,
        "width": -1
      },
      "x": 0,
      "y": 0,
      "zoom": -100,
      "loop": -1,
      "muted": false,
      "volume": 5
    }
  ],
  "transition": {
    "duration": 1.5,
    "style": "circleopen",
    "type": "xfade"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background-color|string|false|none|A hexadecimal representation of a color or 'transparent'|
|cache|boolean|false|none|none|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|none|
|elements|[[video](#schemavideo) \| [image](#schemaimage) \| [text](#schematext) \| [html](#schemahtml) \| [component](#schemacomponent) \| [audio](#schemaaudio) \| [voice](#schemavoice)]|false|none|none|
|transition|object|false|none|none|

<h2 id="tocS_template">template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "height": -1,
  "settings": {},
  "template": "basic/001",
  "type": "template",
  "width": -1,
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

Creates an element based on the specified feature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|Desired text element height, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie height|
|settings|object|false|none|Settings to be passed to the component|
|template|string|true|none|ID of the Component element. Check all available components at <a href='https://json2video.com/docs/resources/basic/'>https://json2video.com/docs/resources/basic/</a>|
|type|string|true|none|none|
|width|integer|false|none|Desired text element width, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie width|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|type|template|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_text">text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "height": -1,
  "settings": {
    "color": "#FF0000",
    "font-size": "60px"
  },
  "style": "003",
  "text": "Lorem ipsum dolor sit amet",
  "type": "text",
  "width": -1,
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100
}
```

Creates a text element of a given style

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|Desired text element height, but can be overriden by the style defaults. A value of <code>-1</code> means inherits scenes or movie height|
|settings|object|false|none|Text formatting settings. In general, these are CSS properties such as <code>font-size</code>, <code>colour</code> or <code>font-weight</code>. See the styles to confirm which properties are available.|
|style|string|false|none|Style of the text element. Check all available text style at <a href='https://json2video.com/docs/resources/text/'>https://json2video.com/resources/text/</a>|
|text|string|true|none|Text to be printed. The text string does not accept HTML formatting.|
|type|string|true|none|none|
|width|integer|false|none|Desired text element width, but can be overriden by the style defaults. A value of <code>-1</code> means inherits scenes or movie width|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_video">video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "src": "http://example.com",
  "type": "video",
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "chroma-key": {
    "color": "#00b140",
    "tolerance": 25
  },
  "crop": {
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "pan": "left",
  "position": "custom",
  "rotate": {
    "angle": 0,
    "speed": 0
  },
  "scale": {
    "height": -1,
    "width": -1
  },
  "x": 0,
  "y": 0,
  "zoom": -100,
  "loop": -1,
  "muted": false,
  "volume": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|src|string(uri)|false|none|URL to the asset file. Videos can be in MP4, MKV, MOV but MP4 is recommended.|
|type|string|true|none|none|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|chroma-key|object|false|none|Allows to define a color (or a range of colors) that will be converted to transparent|
|crop|object|false|none|Crops the element|
|pan|string|false|none|Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan|
|position|string|false|none|Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties|
|rotate|object|false|none|none|
|scale|object|false|none|none|
|x|number(integer)|false|none|Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side|
|y|number(integer)|false|none|Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side|
|zoom|integer|false|none|Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming|
|loop|integer|false|none|Sets the number of loops the video to play. Use -1 for an infinite loop. The default value of 1 plays the video just once.|
|muted|boolean|false|none|Mutes the audio|
|volume|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|video|
|pan|left|
|pan|top|
|pan|right|
|pan|bottom|
|pan|top-left|
|pan|top-right|
|pan|bottom-left|
|pan|bottom-right|
|position|top-left|
|position|top-right|
|position|bottom-right|
|position|bottom-left|
|position|center-center|
|position|custom|

<h2 id="tocS_voice">voice</h2>
<!-- backwards compatibility -->
<a id="schemavoice"></a>
<a id="schema_voice"></a>
<a id="tocSvoice"></a>
<a id="tocsvoice"></a>

```json
{
  "text": "string",
  "type": "voice",
  "voice": "en-GB-LibbyNeural",
  "cache": false,
  "comment": "string",
  "duration": 7.3,
  "extra-time": 0.5,
  "fade-in": 0,
  "fade-out": 0,
  "start": 0,
  "z-index": 3,
  "muted": false,
  "volume": 5
}
```

Creates a voice audio element from the provided text

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The sentence or sentences to be converted to voice audio|
|type|string|true|none|none|
|voice|string|false|none|The voice name to be used. Check <a href="/docs/tutorial/voice-elements/">available voices</a>.|
|cache|boolean(boolean)|false|none|Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.|
|comment|string|false|none|Used for adding your comments|
|duration|number(float)|false|none|Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.|
|extra-time|number(float)|false|none|Element's time span added after the playback.|
|fade-in|number(float)|false|none|Adds a fade in effect to the element. Value in seconds.|
|fade-out|number(float)|false|none|Adds a fade out effect to the element. Value in seconds.|
|start|number(float)|false|none|Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.|
|z-index|number(integer)|false|none|Element's z-index. Use this property to reorganize the layering of the elements like in HTML|
|muted|boolean|false|none|Mutes the audio|
|volume|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|voice|
