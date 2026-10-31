import { createRoute, z } from '@hono/zod-openapi'

const AudioElementSchema = z
  .strictObject({
    muted: z.boolean().default(false).exactOptional().openapi({ description: 'Mutes the audio' }),
    volume: z.number().min(0).max(10).default(5).exactOptional(),
  })
  .openapi({ title: 'AudioElement', required: [] })
  .openapi('AudioElement')

const BaseElementSchema = z
  .strictObject({
    cache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.",
        example: false,
      }),
    comment: z.string().exactOptional().openapi({ description: 'Used for adding your comments' }),
    duration: z
      .float32()
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          "Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.",
        example: 7.3,
      }),
    'extra-time': z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: "Element's time span added after the playback.", example: 0.5 }),
    'fade-in': z
      .float32()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Adds a fade in effect to the element. Value in seconds.' }),
    'fade-out': z
      .float32()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Adds a fade out effect to the element. Value in seconds.' }),
    start: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          "Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.",
      }),
    'z-index': z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          "Element's z-index. Use this property to reorganize the layering of the elements like in HTML",
        example: 3,
      }),
  })
  .openapi({ title: 'BaseElement', required: [] })
  .openapi('BaseElement')

const CapturePropertySchema = z
  .strictObject({
    capture: z
      .strictObject({
        duration: z
          .float32()
          .min(0)
          .max(10)
          .default(0)
          .exactOptional()
          .openapi({
            description: 'Screen recording duration in seconds. Use 0 to take a screenshot',
          }),
        height: z.int().min(50).max(1080).default(360).openapi({ description: 'Viewport height' }),
        width: z.int().min(50).max(1920).default(640).openapi({ description: 'Viewport width' }),
      })
      .exactOptional()
      .openapi({ description: 'Browser capture settings', required: ['width', 'height'] }),
  })
  .openapi({ title: 'CaptureProperty', required: [] })
  .openapi('CaptureProperty')

const VisualElementSchema = z
  .strictObject({
    'chroma-key': z
      .object({
        color: z
          .string()
          .openapi({
            description: 'Set the color for which alpha will be set to 0 (full transparency)',
            example: '#00b140',
          }),
        tolerance: z
          .int()
          .min(1)
          .max(100)
          .default(25)
          .exactOptional()
          .openapi({
            description:
              'Makes the selection more or less sensitive to changes in color. A value of 1 will select only the provided color. A value of 100 will select all colors, so the full canvas',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Allows to define a color (or a range of colors) that will be converted to transparent',
        required: ['color'],
      }),
    crop: z
      .strictObject({
        height: z.int().openapi({ description: 'Sets the height of the croping' }),
        width: z.int().openapi({ description: 'Sets the width of the croping' }),
        x: z
          .int()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Sets the left point of croping' }),
        y: z
          .int()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Sets the top point of croping' }),
      })
      .exactOptional()
      .openapi({ description: 'Crops the element', required: ['width', 'height'] }),
    pan: z
      .enum([
        'left',
        'top',
        'right',
        'bottom',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ])
      .exactOptional()
      .openapi({
        description:
          'Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan',
      }),
    position: z
      .enum(['top-left', 'top-right', 'bottom-right', 'bottom-left', 'center-center', 'custom'])
      .default('custom')
      .exactOptional()
      .openapi({
        description:
          "Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties",
      }),
    rotate: z
      .strictObject({
        angle: z
          .number()
          .min(-360)
          .max(360)
          .default(0)
          .openapi({ description: 'Sets the angle of rotation' }),
        speed: z
          .number()
          .min(0)
          .default(0)
          .exactOptional()
          .openapi({
            description:
              'Sets the time it takes to rotate the provided angle. A zero value means no movement',
          }),
      })
      .exactOptional()
      .openapi({ required: ['angle'] }),
    scale: z
      .strictObject({
        height: z
          .int()
          .min(-1)
          .default(-1)
          .exactOptional()
          .openapi({ description: 'Sets the height for scaling the element' }),
        width: z
          .int()
          .min(-1)
          .default(-1)
          .exactOptional()
          .openapi({ description: 'Sets the width for scaling the element' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    x: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side',
      }),
    y: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side',
      }),
    zoom: z
      .int()
      .min(-100)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming',
      }),
  })
  .openapi({ title: 'VisualElement', required: [] })
  .openapi('VisualElement')

const AudioSchema = z
  .strictObject({ src: z.url().exactOptional(), type: z.literal('audio').exactOptional() })
  .openapi({ required: [] })
  .and(BaseElementSchema)
  .and(AudioElementSchema)
  .openapi({ title: 'Audio' })
  .openapi('Audio')

const ComponentSchema = z
  .strictObject({
    component: z
      .string()
      .openapi({
        description:
          "ID of the Component element. Check all available components in the <a href='https://json2video.com/docs/resources/basic/'>library</a>",
        example: 'basic/001',
      }),
    height: z
      .int()
      .min(-1)
      .max(1080)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element height, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie height',
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Settings to be passed to the component' }),
    type: z.literal('component'),
    width: z
      .int()
      .min(-1)
      .max(1920)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element width, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie width',
      }),
  })
  .openapi({ required: ['type', 'component'] })
  .and(BaseElementSchema)
  .and(VisualElementSchema)
  .openapi({ description: 'Creates an element based on the specified feature', title: 'Component' })
  .openapi('Component')

const HtmlSchema = z
  .strictObject({
    height: z
      .int()
      .min(-1)
      .max(1080)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element height. A value of <code>-1</code> means inherits scenes or movie height',
      }),
    html: z
      .string()
      .openapi({
        description: 'HTML snippet to render. Compatible with HTML5, CSS3 and Javascript',
        example: '&lt;h1&gt;Hello world&lt;/h1&gt;',
      }),
    tailwindcss: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enables usage of TailwindCSS for the HTML snippet', example: true }),
    type: z.literal('html'),
    width: z
      .int()
      .min(-1)
      .max(1920)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element width. A value of <code>-1</code> means inherits scenes or movie width',
      }),
  })
  .openapi({ required: ['type', 'html'] })
  .and(BaseElementSchema)
  .and(VisualElementSchema)
  .openapi({
    description: 'Creates a video recording or a screenshot of the provided HTML snippet',
    title: 'HTML',
  })
  .openapi('Html')

const ImageSchema = z
  .strictObject({ src: z.url().exactOptional(), type: z.literal('image').exactOptional() })
  .openapi({ required: [] })
  .and(VisualElementSchema)
  .openapi({ title: 'Image' })
  .openapi('Image')

const VideoSchema = z
  .strictObject({
    src: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL to the asset file. Videos can be in MP4, MKV, MOV but MP4 is recommended.',
      }),
    type: z.literal('video'),
  })
  .openapi({ required: ['type'] })
  .and(BaseElementSchema)
  .and(VisualElementSchema)
  .and(
    z
      .strictObject({
        loop: z
          .int()
          .min(-1)
          .exactOptional()
          .openapi({
            description:
              'Sets the number of loops the video to play. Use -1 for an infinite loop. The default value of 1 plays the video just once.',
            example: -1,
          }),
      })
      .openapi({ required: [] }),
  )
  .and(AudioElementSchema)
  .openapi({ title: 'Video' })
  .openapi('Video')

const TextSchema = z
  .strictObject({
    height: z
      .int()
      .min(-1)
      .max(1080)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element height, but can be overriden by the style defaults. A value of <code>-1</code> means inherits scenes or movie height',
      }),
    settings: z
      .object({})
      .default({})
      .exactOptional()
      .openapi({
        description:
          'Text formatting settings. In general, these are CSS properties such as <code>font-size</code>, <code>colour</code> or <code>font-weight</code>. See the styles to confirm which properties are available.',
        example: { color: '#FF0000', 'font-size': '60px' },
      }),
    style: z
      .string()
      .default('001')
      .exactOptional()
      .openapi({
        description:
          "Style of the text element. Check all available text style at <a href='https://json2video.com/docs/resources/text/'>https://json2video.com/resources/text/</a>",
        example: '003',
      }),
    text: z
      .string()
      .openapi({
        description: 'Text to be printed. The text string does not accept HTML formatting.',
        example: 'Lorem ipsum dolor sit amet',
      }),
    type: z.literal('text'),
    width: z
      .int()
      .min(-1)
      .max(1920)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element width, but can be overriden by the style defaults. A value of <code>-1</code> means inherits scenes or movie width',
      }),
  })
  .openapi({ required: ['type', 'text'] })
  .and(BaseElementSchema)
  .and(VisualElementSchema)
  .openapi({ description: 'Creates a text element of a given style', title: 'Text' })
  .openapi('Text')

const TemplateSchema = z
  .strictObject({
    height: z
      .int()
      .min(-1)
      .max(1080)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element height, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie height',
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Settings to be passed to the component' }),
    template: z
      .string()
      .openapi({
        description:
          "ID of the Component element. Check all available components at <a href='https://json2video.com/docs/resources/basic/'>https://json2video.com/docs/resources/basic/</a>",
        example: 'basic/001',
      }),
    type: z.literal('template'),
    width: z
      .int()
      .min(-1)
      .max(1920)
      .default(-1)
      .exactOptional()
      .openapi({
        description:
          'Desired text element width, but can be overriden by the component defaults. A value of <code>-1</code> means inherits scenes or movie width',
      }),
  })
  .openapi({ required: ['type', 'template'] })
  .and(BaseElementSchema)
  .and(VisualElementSchema)
  .openapi({ description: 'Creates an element based on the specified feature', title: 'Template' })
  .openapi('Template')

const VoiceSchema = z
  .strictObject({
    text: z
      .string()
      .openapi({ description: 'The sentence or sentences to be converted to voice audio' }),
    type: z.literal('voice'),
    voice: z
      .string()
      .default('en-GB-LibbyNeural')
      .exactOptional()
      .openapi({
        description:
          'The voice name to be used. Check <a href="/docs/tutorial/voice-elements/">available voices</a>.',
      }),
  })
  .openapi({ required: ['type', 'text'] })
  .and(BaseElementSchema)
  .and(AudioElementSchema)
  .openapi({ description: 'Creates a voice audio element from the provided text', title: 'Voice' })
  .openapi('Voice')

const SceneSchema = z
  .strictObject({
    'background-color': z
      .string()
      .default('#000000')
      .exactOptional()
      .openapi({
        description: "A hexadecimal representation of a color or 'transparent'",
        example: '#FF0000',
      }),
    cache: z.boolean().default(true).exactOptional(),
    comment: z.string().exactOptional().openapi({ description: 'Used for adding your comments' }),
    duration: z.float32().default(-1).exactOptional(),
    elements: z
      .array(
        z
          .xor([
            VideoSchema,
            ImageSchema,
            TextSchema,
            HtmlSchema,
            ComponentSchema,
            AudioSchema,
            VoiceSchema,
          ])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    transition: z
      .strictObject({
        duration: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Duration of the transition in seconds', example: 1.5 }),
        style: z
          .enum([
            'fade',
            'wipeleft',
            'wiperight',
            'wipeup',
            'wipedown',
            'slideleft',
            'slideright',
            'slideup',
            'slidedown',
            'circlecrop',
            'rectcrop',
            'distance',
            'fadeblack',
            'fadewhite',
            'radial',
            'smoothleft',
            'smoothright',
            'smoothup',
            'smoothdown',
            'circleopen',
            'circleclose',
            'vertopen',
            'vertclose',
            'horzopen',
            'horzclose',
            'dissolve',
            'pixelize',
            'diagtl',
            'diagtr',
            'diagbl',
            'diagbr',
            'hlslice',
            'hrslice',
            'vuslice',
            'vdslice',
            'hblur',
            'fadegrays',
            'wipetl',
            'wipetr',
            'wipebl',
            'wipebr',
            'squeezeh',
            'squeezev',
            'zoomin',
          ])
          .default('fade')
          .exactOptional()
          .openapi({ example: 'circleopen' }),
        type: z.literal('xfade').default('xfade').exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Scene', required: [] })
  .openapi('Scene')

const MovieSchema = z
  .strictObject({
    cache: z.boolean().default(true).exactOptional(),
    comment: z.string().exactOptional().openapi({ description: 'Used for adding your comments' }),
    draft: z
      .union([z.literal(true), z.literal(false)])
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Draft movies include a watermark. Check your plan how many draft and final movies you have',
      }),
    elements: z
      .array(
        z
          .xor([
            VideoSchema,
            ImageSchema,
            TextSchema,
            HtmlSchema,
            ComponentSchema,
            TemplateSchema,
            AudioSchema,
            VoiceSchema,
          ])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    fps: z
      .int()
      .default(25)
      .exactOptional()
      .openapi({ description: 'Frames per second', 'x-hidden': true }),
    height: z.int().min(50).max(1080).default(360).exactOptional().openapi({ example: 360 }),
    quality: z.enum(['low', 'medium', 'high']).default('high').exactOptional(),
    resolution: z
      .enum([
        'sd',
        'hd',
        'full-hd',
        'squared',
        'instagram-story',
        'instagram-feed',
        'twitter-landscape',
        'twitter-portrait',
      ])
      .exactOptional(),
    scenes: z.array(SceneSchema),
    settings: z
      .object({})
      .default({})
      .exactOptional()
      .openapi({ description: 'Movie advanced settings', 'x-hidden': true }),
    width: z.int().min(50).max(1920).default(640).exactOptional().openapi({ example: 640 }),
  })
  .openapi({
    description: 'Object defining the movie to be rendered',
    example: {
      comment: 'MyProject',
      resolution: '640x360',
      scenes: [{ elements: [{ src: 'https://example.com/path/to/my/video.mp4', type: 'video' }] }],
    },
    required: ['scenes'],
    title: 'Movie',
  })
  .openapi('Movie')

export const getMoviesRoute = createRoute({
  method: 'get',
  path: '/movies',
  summary: 'Get the status of your movies',
  description:
    'Get the status any of your movies by passing your project ID in the <code>project</code> query parameter. You can get your project ID from the response of the POST request.',
  operationId: 'getMovies',
  responses: { 200: { description: 'Ok' } },
})

export const postMoviesRoute = createRoute({
  method: 'post',
  path: '/movies',
  summary: 'Create a new movie',
  description: 'Submit a new movie rendering job.',
  operationId: 'newMovie',
  request: { body: { content: { 'application/json': { schema: MovieSchema } }, required: true } },
  responses: { 200: { description: 'Added' } },
})
