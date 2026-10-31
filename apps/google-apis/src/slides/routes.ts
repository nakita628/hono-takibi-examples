import { createRoute, z } from '@hono/zod-openapi'

type AffineTransformType = {
  scaleX?: number
  scaleY?: number
  shearX?: number
  shearY?: number
  translateX?: number
  translateY?: number
  unit?: 'UNIT_UNSPECIFIED' | 'EMU' | 'PT'
}

const PageElementSchema: z.ZodType<PageElementType> = z
  .lazy(() =>
    z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
          }),
        elementGroup: GroupSchema.exactOptional().openapi({
          description: 'A collection of page elements joined as a single unit.',
        }),
        image: ImageSchema.exactOptional().openapi({ description: 'An image page element.' }),
        line: LineSchema.exactOptional().openapi({ description: 'A line page element.' }),
        objectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
          }),
        shape: ShapeSchema.exactOptional().openapi({ description: 'A generic shape.' }),
        sheetsChart: SheetsChartSchema.exactOptional().openapi({
          description:
            'A linked chart embedded from Google Sheets. Unlinked charts are represented as images.',
        }),
        size: SizeSchema.exactOptional().openapi({ description: 'The size of the page element.' }),
        table: TableSchema.exactOptional().openapi({ description: 'A table page element.' }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The title of the page element. Combined with description to display alt text. The field is not supported for Group elements.',
          }),
        transform: AffineTransformSchema.exactOptional().openapi({
          description:
            "The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.",
        }),
        video: VideoSchema.exactOptional().openapi({ description: 'A video page element.' }),
        wordArt: WordArtSchema.exactOptional().openapi({ description: 'A word art page element.' }),
      })
      .openapi({ description: 'A visual element rendered on a page.', required: [] }),
  )
  .openapi('PageElement')

type GroupType = { children?: z.infer<typeof PageElementSchema>[] }

const CropPropertiesSchema = z
  .object({
    angle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
      }),
    bottomOffset: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
      }),
    leftOffset: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
      }),
    rightOffset: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
      }),
    topOffset: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
      }),
  })
  .openapi({
    description:
      "The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.",
    required: [],
  })
  .openapi('CropProperties')

const LinkSchema = z
  .object({
    pageObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
      }),
    relativeLink: z
      .enum([
        'RELATIVE_SLIDE_LINK_UNSPECIFIED',
        'NEXT_SLIDE',
        'PREVIOUS_SLIDE',
        'FIRST_SLIDE',
        'LAST_SLIDE',
      ])
      .exactOptional()
      .openapi({
        description:
          'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
      }),
    slideIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, indicates this is a link to the external web page at this URL.',
      }),
  })
  .openapi({ description: 'A hypertext link.', required: [] })
  .openapi('Link')

const RgbColorSchema = z
  .object({
    blue: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The blue component of the color, from 0.0 to 1.0.' }),
    green: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The green component of the color, from 0.0 to 1.0.' }),
    red: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The red component of the color, from 0.0 to 1.0.' }),
  })
  .openapi({ description: 'An RGB color.', required: [] })
  .openapi('RgbColor')

const OpaqueColorSchema = z
  .object({
    rgbColor: RgbColorSchema.exactOptional().openapi({ description: 'An opaque RGB color.' }),
    themeColor: z
      .enum([
        'THEME_COLOR_TYPE_UNSPECIFIED',
        'DARK1',
        'LIGHT1',
        'DARK2',
        'LIGHT2',
        'ACCENT1',
        'ACCENT2',
        'ACCENT3',
        'ACCENT4',
        'ACCENT5',
        'ACCENT6',
        'HYPERLINK',
        'FOLLOWED_HYPERLINK',
        'TEXT1',
        'BACKGROUND1',
        'TEXT2',
        'BACKGROUND2',
      ])
      .exactOptional()
      .openapi({ description: 'An opaque theme color.' }),
  })
  .openapi({ description: 'A themeable solid color value.', required: [] })
  .openapi('OpaqueColor')

const SolidFillSchema = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
      }),
    color: OpaqueColorSchema.exactOptional().openapi({
      description: 'The color value of the solid fill.',
    }),
  })
  .openapi({
    description:
      'A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.',
    required: [],
  })
  .openapi('SolidFill')

const OutlineFillSchema = z
  .object({
    solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid color fill.' }),
  })
  .openapi({ description: 'The fill of the outline.', required: [] })
  .openapi('OutlineFill')

const DimensionSchema = z
  .object({
    magnitude: z.float64().exactOptional().openapi({ description: 'The magnitude.' }),
    unit: z
      .enum(['UNIT_UNSPECIFIED', 'EMU', 'PT'])
      .exactOptional()
      .openapi({ description: 'The units for magnitude.' }),
  })
  .openapi({
    description: 'A magnitude in a single direction in the specified units.',
    required: [],
  })
  .openapi('Dimension')

const OutlineSchema = z
  .object({
    dashStyle: z
      .enum([
        'DASH_STYLE_UNSPECIFIED',
        'SOLID',
        'DOT',
        'DASH',
        'DASH_DOT',
        'LONG_DASH',
        'LONG_DASH_DOT',
      ])
      .exactOptional()
      .openapi({ description: 'The dash style of the outline.' }),
    outlineFill: OutlineFillSchema.exactOptional().openapi({
      description: 'The fill of the outline.',
    }),
    propertyState: z
      .enum(['RENDERED', 'NOT_RENDERED', 'INHERIT'])
      .exactOptional()
      .openapi({
        description:
          'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
      }),
    weight: DimensionSchema.exactOptional().openapi({
      description: 'The thickness of the outline.',
    }),
  })
  .openapi({
    description:
      'The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.',
    required: [],
  })
  .openapi('Outline')

const ColorStopSchema = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
      }),
    color: OpaqueColorSchema.exactOptional().openapi({
      description: 'The color of the gradient stop.',
    }),
    position: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
      }),
  })
  .openapi({ description: 'A color and position in a gradient band.', required: [] })
  .openapi('ColorStop')

const RecolorSchema = z
  .object({
    name: z
      .enum([
        'NONE',
        'LIGHT1',
        'LIGHT2',
        'LIGHT3',
        'LIGHT4',
        'LIGHT5',
        'LIGHT6',
        'LIGHT7',
        'LIGHT8',
        'LIGHT9',
        'LIGHT10',
        'DARK1',
        'DARK2',
        'DARK3',
        'DARK4',
        'DARK5',
        'DARK6',
        'DARK7',
        'DARK8',
        'DARK9',
        'DARK10',
        'GRAYSCALE',
        'NEGATIVE',
        'SEPIA',
        'CUSTOM',
      ])
      .exactOptional()
      .openapi({
        description:
          "The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
      }),
    recolorStops: z
      .array(ColorStopSchema)
      .exactOptional()
      .openapi({
        description:
          'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
      }),
  })
  .openapi({ description: 'A recolor effect applied on an image.', required: [] })
  .openapi('Recolor')

const AffineTransformSchema: z.ZodType<AffineTransformType> = z
  .object({
    scaleX: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The X coordinate scaling element.' }),
    scaleY: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Y coordinate scaling element.' }),
    shearX: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The X coordinate shearing element.' }),
    shearY: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Y coordinate shearing element.' }),
    translateX: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The X coordinate translation element.' }),
    translateY: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Y coordinate translation element.' }),
    unit: z
      .enum(['UNIT_UNSPECIFIED', 'EMU', 'PT'])
      .exactOptional()
      .openapi({ description: 'The units for translate elements.' }),
  })
  .openapi({
    description:
      "AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.",
    required: [],
  })
  .openapi('AffineTransform')

const ShadowSchema = z
  .object({
    alignment: z
      .enum([
        'RECTANGLE_POSITION_UNSPECIFIED',
        'TOP_LEFT',
        'TOP_CENTER',
        'TOP_RIGHT',
        'LEFT_CENTER',
        'CENTER',
        'RIGHT_CENTER',
        'BOTTOM_LEFT',
        'BOTTOM_CENTER',
        'BOTTOM_RIGHT',
      ])
      .exactOptional()
      .openapi({
        description:
          'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
      }),
    alpha: z
      .float32()
      .exactOptional()
      .openapi({ description: "The alpha of the shadow's color, from 0.0 to 1.0." }),
    blurRadius: DimensionSchema.exactOptional().openapi({
      description:
        'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
    }),
    color: OpaqueColorSchema.exactOptional().openapi({ description: 'The shadow color value.' }),
    propertyState: z
      .enum(['RENDERED', 'NOT_RENDERED', 'INHERIT'])
      .exactOptional()
      .openapi({
        description:
          'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
      }),
    rotateWithShape: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the shadow should rotate with the shape. This property is read-only.',
      }),
    transform: AffineTransformSchema.exactOptional().openapi({
      description:
        'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
    }),
    type: z
      .enum(['SHADOW_TYPE_UNSPECIFIED', 'OUTER'])
      .exactOptional()
      .openapi({ description: 'The type of the shadow. This property is read-only.' }),
  })
  .openapi({
    description:
      'The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.',
    required: [],
  })
  .openapi('Shadow')

const ImagePropertiesSchema = z
  .object({
    brightness: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
      }),
    contrast: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
      }),
    cropProperties: CropPropertiesSchema.exactOptional().openapi({
      description:
        'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
    }),
    link: LinkSchema.exactOptional().openapi({
      description: 'The hyperlink destination of the image. If unset, there is no link.',
    }),
    outline: OutlineSchema.exactOptional().openapi({
      description: 'The outline of the image. If not set, the image has no outline.',
    }),
    recolor: RecolorSchema.exactOptional().openapi({
      description:
        'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
    }),
    shadow: ShadowSchema.exactOptional().openapi({
      description:
        'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
    }),
    transparency: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
      }),
  })
  .openapi({ description: 'The properties of the Image.', required: [] })
  .openapi('ImageProperties')

const PlaceholderSchema = z
  .object({
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
      }),
    parentObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
      }),
    type: z
      .enum([
        'NONE',
        'BODY',
        'CHART',
        'CLIP_ART',
        'CENTERED_TITLE',
        'DIAGRAM',
        'DATE_AND_TIME',
        'FOOTER',
        'HEADER',
        'MEDIA',
        'OBJECT',
        'PICTURE',
        'SLIDE_NUMBER',
        'SUBTITLE',
        'TABLE',
        'TITLE',
        'SLIDE_IMAGE',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the placeholder.' }),
  })
  .openapi({
    description: 'The placeholder information that uniquely identifies a placeholder shape.',
    required: [],
  })
  .openapi('Placeholder')

type ImageType = {
  contentUrl?: string
  imageProperties?: z.infer<typeof ImagePropertiesSchema>
  placeholder?: z.infer<typeof PlaceholderSchema>
  sourceUrl?: string
}

type LayoutPropertiesType = { displayName?: string; masterObjectId?: string; name?: string }

const LineConnectionSchema = z
  .object({
    connectedObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
      }),
    connectionSiteIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor.',
      }),
  })
  .openapi({ description: 'The properties for one end of a Line connection.', required: [] })
  .openapi('LineConnection')

const LineFillSchema = z
  .object({
    solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid color fill.' }),
  })
  .openapi({ description: 'The fill of the line.', required: [] })
  .openapi('LineFill')

const LinePropertiesSchema = z
  .object({
    dashStyle: z
      .enum([
        'DASH_STYLE_UNSPECIFIED',
        'SOLID',
        'DOT',
        'DASH',
        'DASH_DOT',
        'LONG_DASH',
        'LONG_DASH_DOT',
      ])
      .exactOptional()
      .openapi({ description: 'The dash style of the line.' }),
    endArrow: z
      .enum([
        'ARROW_STYLE_UNSPECIFIED',
        'NONE',
        'STEALTH_ARROW',
        'FILL_ARROW',
        'FILL_CIRCLE',
        'FILL_SQUARE',
        'FILL_DIAMOND',
        'OPEN_ARROW',
        'OPEN_CIRCLE',
        'OPEN_SQUARE',
        'OPEN_DIAMOND',
      ])
      .exactOptional()
      .openapi({ description: 'The style of the arrow at the end of the line.' }),
    endConnection: LineConnectionSchema.exactOptional().openapi({
      description:
        'The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.',
    }),
    lineFill: LineFillSchema.exactOptional().openapi({
      description:
        'The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.',
    }),
    link: LinkSchema.exactOptional().openapi({
      description: 'The hyperlink destination of the line. If unset, there is no link.',
    }),
    startArrow: z
      .enum([
        'ARROW_STYLE_UNSPECIFIED',
        'NONE',
        'STEALTH_ARROW',
        'FILL_ARROW',
        'FILL_CIRCLE',
        'FILL_SQUARE',
        'FILL_DIAMOND',
        'OPEN_ARROW',
        'OPEN_CIRCLE',
        'OPEN_SQUARE',
        'OPEN_DIAMOND',
      ])
      .exactOptional()
      .openapi({ description: 'The style of the arrow at the beginning of the line.' }),
    startConnection: LineConnectionSchema.exactOptional().openapi({
      description:
        'The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.',
    }),
    weight: DimensionSchema.exactOptional().openapi({ description: 'The thickness of the line.' }),
  })
  .openapi({
    description:
      'The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.',
    required: [],
  })
  .openapi('LineProperties')

type LineType = {
  lineCategory?: 'LINE_CATEGORY_UNSPECIFIED' | 'STRAIGHT' | 'BENT' | 'CURVED'
  lineProperties?: z.infer<typeof LinePropertiesSchema>
  lineType?:
    | 'TYPE_UNSPECIFIED'
    | 'STRAIGHT_CONNECTOR_1'
    | 'BENT_CONNECTOR_2'
    | 'BENT_CONNECTOR_3'
    | 'BENT_CONNECTOR_4'
    | 'BENT_CONNECTOR_5'
    | 'CURVED_CONNECTOR_2'
    | 'CURVED_CONNECTOR_3'
    | 'CURVED_CONNECTOR_4'
    | 'CURVED_CONNECTOR_5'
    | 'STRAIGHT_LINE'
}

type MasterPropertiesType = { displayName?: string }

type NotesPropertiesType = { speakerNotesObjectId?: string }

const LayoutPropertiesSchema: z.ZodType<LayoutPropertiesType> = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the layout.' }),
    masterObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the master that this layout is based on.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the layout.' }),
  })
  .openapi({
    description: 'The properties of Page are only relevant for pages with page_type LAYOUT.',
    required: [],
  })
  .openapi('LayoutProperties')

const MasterPropertiesSchema: z.ZodType<MasterPropertiesType> = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the master.' }),
  })
  .openapi({
    description: 'The properties of Page that are only relevant for pages with page_type MASTER.',
    required: [],
  })
  .openapi('MasterProperties')

const NotesPropertiesSchema: z.ZodType<NotesPropertiesType> = z
  .object({
    speakerNotesObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
      }),
  })
  .openapi({
    description: 'The properties of Page that are only relevant for pages with page_type NOTES.',
    required: [],
  })
  .openapi('NotesProperties')

const ThemeColorPairSchema = z
  .object({
    color: RgbColorSchema.exactOptional().openapi({
      description: 'The concrete color corresponding to the theme color type above.',
    }),
    type: z
      .enum([
        'THEME_COLOR_TYPE_UNSPECIFIED',
        'DARK1',
        'LIGHT1',
        'DARK2',
        'LIGHT2',
        'ACCENT1',
        'ACCENT2',
        'ACCENT3',
        'ACCENT4',
        'ACCENT5',
        'ACCENT6',
        'HYPERLINK',
        'FOLLOWED_HYPERLINK',
        'TEXT1',
        'BACKGROUND1',
        'TEXT2',
        'BACKGROUND2',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the theme color.' }),
  })
  .openapi({
    description: 'A pair mapping a theme color type to the concrete color it represents.',
    required: [],
  })
  .openapi('ThemeColorPair')

const ColorSchemeSchema = z
  .object({
    colors: z
      .array(ThemeColorPairSchema)
      .exactOptional()
      .openapi({ description: 'The ThemeColorType and corresponding concrete color pairs.' }),
  })
  .openapi({ description: 'The palette of predefined colors for a page.', required: [] })
  .openapi('ColorScheme')

type SizeType = {
  height?: z.infer<typeof DimensionSchema>
  width?: z.infer<typeof DimensionSchema>
}

const SizeSchema: z.ZodType<SizeType> = z
  .object({
    height: DimensionSchema.exactOptional().openapi({ description: 'The height of the object.' }),
    width: DimensionSchema.exactOptional().openapi({ description: 'The width of the object.' }),
  })
  .openapi({ description: 'A width and height.', required: [] })
  .openapi('Size')

const StretchedPictureFillSchema = z
  .object({
    contentUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
      }),
    size: SizeSchema.exactOptional().openapi({
      description: 'The original size of the picture fill. This field is read-only.',
    }),
  })
  .openapi({
    description:
      'The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.',
    required: [],
  })
  .openapi('StretchedPictureFill')

const PageBackgroundFillSchema = z
  .object({
    propertyState: z
      .enum(['RENDERED', 'NOT_RENDERED', 'INHERIT'])
      .exactOptional()
      .openapi({
        description:
          'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
      }),
    solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid color fill.' }),
    stretchedPictureFill: StretchedPictureFillSchema.exactOptional().openapi({
      description: 'Stretched picture fill.',
    }),
  })
  .openapi({ description: 'The page background fill.', required: [] })
  .openapi('PageBackgroundFill')

type PagePropertiesType = {
  colorScheme?: z.infer<typeof ColorSchemeSchema>
  pageBackgroundFill?: z.infer<typeof PageBackgroundFillSchema>
}

const PagePropertiesSchema: z.ZodType<PagePropertiesType> = z
  .object({
    colorScheme: ColorSchemeSchema.exactOptional().openapi({
      description:
        'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
    }),
    pageBackgroundFill: PageBackgroundFillSchema.exactOptional().openapi({
      description:
        'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
    }),
  })
  .openapi({
    description:
      'The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.',
    required: [],
  })
  .openapi('PageProperties')

const SlidePropertiesSchema: z.ZodType<SlidePropertiesType> = z
  .lazy(() =>
    z
      .object({
        isSkipped: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the slide is skipped in the presentation mode. Defaults to false.',
          }),
        layoutObjectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The object ID of the layout that this slide is based on. This property is read-only.',
          }),
        masterObjectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The object ID of the master that this slide is based on. This property is read-only.',
          }),
        notesPage: PageSchema.exactOptional().openapi({
          description:
            'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
        }),
      })
      .openapi({
        description:
          'The properties of Page that are only relevant for pages with page_type SLIDE.',
        required: [],
      }),
  )
  .openapi('SlideProperties')

type PageType = {
  layoutProperties?: z.infer<typeof LayoutPropertiesSchema>
  masterProperties?: z.infer<typeof MasterPropertiesSchema>
  notesProperties?: z.infer<typeof NotesPropertiesSchema>
  objectId?: string
  pageElements?: z.infer<typeof PageElementSchema>[]
  pageProperties?: z.infer<typeof PagePropertiesSchema>
  pageType?: 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER'
  revisionId?: string
  slideProperties?: z.infer<typeof SlidePropertiesSchema>
}

const GroupSchema: z.ZodType<GroupType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(PageElementSchema)
          .exactOptional()
          .openapi({
            description:
              'The collection of elements in the group. The minimum size of a group is 2.',
          }),
      })
      .openapi({
        description: 'A PageElement kind representing a joined collection of PageElements.',
        required: [],
      }),
  )
  .openapi('Group')

const ImageSchema: z.ZodType<ImageType> = z
  .object({
    contentUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
      }),
    imageProperties: ImagePropertiesSchema.exactOptional().openapi({
      description: 'The properties of the image.',
    }),
    placeholder: PlaceholderSchema.exactOptional().openapi({
      description:
        'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
    }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source URL is the URL used to insert the image. The source URL can be empty.',
      }),
  })
  .openapi({ description: 'A PageElement kind representing an image.', required: [] })
  .openapi('Image')

const LineSchema: z.ZodType<LineType> = z
  .object({
    lineCategory: z
      .enum(['LINE_CATEGORY_UNSPECIFIED', 'STRAIGHT', 'BENT', 'CURVED'])
      .exactOptional()
      .openapi({
        description:
          'The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.',
      }),
    lineProperties: LinePropertiesSchema.exactOptional().openapi({
      description: 'The properties of the line.',
    }),
    lineType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'STRAIGHT_CONNECTOR_1',
        'BENT_CONNECTOR_2',
        'BENT_CONNECTOR_3',
        'BENT_CONNECTOR_4',
        'BENT_CONNECTOR_5',
        'CURVED_CONNECTOR_2',
        'CURVED_CONNECTOR_3',
        'CURVED_CONNECTOR_4',
        'CURVED_CONNECTOR_5',
        'STRAIGHT_LINE',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the line.' }),
  })
  .openapi({
    description:
      'A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.',
    required: [],
  })
  .openapi('Line')

const AutofitSchema = z
  .object({
    autofitType: z
      .enum(['AUTOFIT_TYPE_UNSPECIFIED', 'NONE', 'TEXT_AUTOFIT', 'SHAPE_AUTOFIT'])
      .exactOptional()
      .openapi({
        description:
          'The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.',
      }),
    fontScale: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only.',
      }),
    lineSpacingReduction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only.',
      }),
  })
  .openapi({ description: 'The autofit properties of a Shape.', required: [] })
  .openapi('Autofit')

const ShapeBackgroundFillSchema = z
  .object({
    propertyState: z
      .enum(['RENDERED', 'NOT_RENDERED', 'INHERIT'])
      .exactOptional()
      .openapi({
        description:
          'The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
      }),
    solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid color fill.' }),
  })
  .openapi({ description: 'The shape background fill.', required: [] })
  .openapi('ShapeBackgroundFill')

const ShapePropertiesSchema = z
  .object({
    autofit: AutofitSchema.exactOptional().openapi({
      description:
        'The autofit properties of the shape. This property is only set for shapes that allow text.',
    }),
    contentAlignment: z
      .enum([
        'CONTENT_ALIGNMENT_UNSPECIFIED',
        'CONTENT_ALIGNMENT_UNSUPPORTED',
        'TOP',
        'MIDDLE',
        'BOTTOM',
      ])
      .exactOptional()
      .openapi({
        description:
          'The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.',
      }),
    link: LinkSchema.exactOptional().openapi({
      description:
        'The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.',
    }),
    outline: OutlineSchema.exactOptional().openapi({
      description:
        'The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
    }),
    shadow: ShadowSchema.exactOptional().openapi({
      description:
        'The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.',
    }),
    shapeBackgroundFill: ShapeBackgroundFillSchema.exactOptional().openapi({
      description:
        'The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
    }),
  })
  .openapi({
    description:
      'The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.',
    required: [],
  })
  .openapi('ShapeProperties')

const OptionalColorSchema = z
  .object({
    opaqueColor: OpaqueColorSchema.exactOptional().openapi({
      description:
        'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
    }),
  })
  .openapi({
    description: 'A color that can either be fully opaque or fully transparent.',
    required: [],
  })
  .openapi('OptionalColor')

const WeightedFontFamilySchema = z
  .object({
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
      }),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
      }),
  })
  .openapi({
    description: 'Represents a font family and weight used to style a TextRun.',
    required: [],
  })
  .openapi('WeightedFontFamily')

const TextStyleSchema = z
  .object({
    backgroundColor: OptionalColorSchema.exactOptional().openapi({
      description:
        'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
    }),
    baselineOffset: z
      .enum(['BASELINE_OFFSET_UNSPECIFIED', 'NONE', 'SUPERSCRIPT', 'SUBSCRIPT'])
      .exactOptional()
      .openapi({
        description:
          "The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
      }),
    bold: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the text is rendered as bold.' }),
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
      }),
    fontSize: DimensionSchema.exactOptional().openapi({
      description:
        "The size of the text's font. When read, the `font_size` will specified in points.",
    }),
    foregroundColor: OptionalColorSchema.exactOptional().openapi({
      description:
        'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
    }),
    italic: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the text is italicized.' }),
    link: LinkSchema.exactOptional().openapi({
      description:
        'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
    }),
    smallCaps: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the text is in small capital letters.' }),
    strikethrough: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the text is struck through.' }),
    underline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the text is underlined.' }),
    weightedFontFamily: WeightedFontFamilySchema.exactOptional().openapi({
      description:
        'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
    }),
  })
  .openapi({
    description:
      'Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.',
    required: [],
  })
  .openapi('TextStyle')

const NestingLevelSchema = z
  .object({
    bulletStyle: TextStyleSchema.exactOptional().openapi({
      description: 'The style of a bullet at this level of nesting.',
    }),
  })
  .openapi({
    description:
      'Contains properties describing the look and feel of a list bullet at a given level of nesting.',
    required: [],
  })
  .openapi('NestingLevel')

const ListSchema = z
  .object({
    listId: z.string().exactOptional().openapi({ description: 'The ID of the list.' }),
    nestingLevel: z
      .record(z.string(), NestingLevelSchema)
      .exactOptional()
      .openapi({
        description:
          'A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive.',
      }),
  })
  .openapi({
    description:
      "A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.",
    required: [],
  })
  .openapi('List')

const AutoTextSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rendered content of this auto text, if available.' }),
    style: TextStyleSchema.exactOptional().openapi({
      description: 'The styling applied to this auto text.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'SLIDE_NUMBER'])
      .exactOptional()
      .openapi({ description: 'The type of this auto text.' }),
  })
  .openapi({ description: 'A TextElement kind that represents auto text.', required: [] })
  .openapi('AutoText')

const BulletSchema = z
  .object({
    bulletStyle: TextStyleSchema.exactOptional().openapi({
      description: 'The paragraph specific text style applied to this bullet.',
    }),
    glyph: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rendered bullet glyph for this paragraph.' }),
    listId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the list this paragraph belongs to.' }),
    nestingLevel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The nesting level of this paragraph in the list.' }),
  })
  .openapi({ description: 'Describes the bullet of a paragraph.', required: [] })
  .openapi('Bullet')

const ParagraphStyleSchema = z
  .object({
    alignment: z
      .enum(['ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END', 'JUSTIFIED'])
      .exactOptional()
      .openapi({ description: 'The text alignment for this paragraph.' }),
    direction: z
      .enum(['TEXT_DIRECTION_UNSPECIFIED', 'LEFT_TO_RIGHT', 'RIGHT_TO_LEFT'])
      .exactOptional()
      .openapi({
        description:
          'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
      }),
    indentEnd: DimensionSchema.exactOptional().openapi({
      description:
        'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
    }),
    indentFirstLine: DimensionSchema.exactOptional().openapi({
      description:
        'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
    }),
    indentStart: DimensionSchema.exactOptional().openapi({
      description:
        'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
    }),
    lineSpacing: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
      }),
    spaceAbove: DimensionSchema.exactOptional().openapi({
      description:
        'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
    }),
    spaceBelow: DimensionSchema.exactOptional().openapi({
      description:
        'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
    }),
    spacingMode: z
      .enum(['SPACING_MODE_UNSPECIFIED', 'NEVER_COLLAPSE', 'COLLAPSE_LISTS'])
      .exactOptional()
      .openapi({ description: 'The spacing mode for the paragraph.' }),
  })
  .openapi({
    description:
      'Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.',
    required: [],
  })
  .openapi('ParagraphStyle')

const ParagraphMarkerSchema = z
  .object({
    bullet: BulletSchema.exactOptional().openapi({
      description:
        'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
    }),
    style: ParagraphStyleSchema.exactOptional().openapi({ description: "The paragraph's style" }),
  })
  .openapi({
    description: 'A TextElement kind that represents the beginning of a new paragraph.',
    required: [],
  })
  .openapi('ParagraphMarker')

const TextRunSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The text of this run.' }),
    style: TextStyleSchema.exactOptional().openapi({
      description: 'The styling applied to this run.',
    }),
  })
  .openapi({
    description: 'A TextElement kind that represents a run of text that all has the same styling.',
    required: [],
  })
  .openapi('TextRun')

const TextElementSchema = z
  .object({
    autoText: AutoTextSchema.exactOptional().openapi({
      description:
        'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
    }),
    endIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The zero-based end index of this text element, exclusive, in Unicode code units.',
      }),
    paragraphMarker: ParagraphMarkerSchema.exactOptional().openapi({
      description:
        "A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
    }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The zero-based start index of this text element, in Unicode code units.',
      }),
    textRun: TextRunSchema.exactOptional().openapi({
      description:
        'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
    }),
  })
  .openapi({
    description:
      'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
    required: [],
  })
  .openapi('TextElement')

const TextContentSchema = z
  .object({
    lists: z
      .record(z.string(), ListSchema)
      .exactOptional()
      .openapi({ description: 'The bulleted lists contained in this text, keyed by list ID.' }),
    textElements: z
      .array(TextElementSchema)
      .exactOptional()
      .openapi({
        description:
          'The text contents broken down into its component parts, including styling information. This property is read-only.',
      }),
  })
  .openapi({
    description:
      'The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.',
    required: [],
  })
  .openapi('TextContent')

type ShapeType = {
  placeholder?: z.infer<typeof PlaceholderSchema>
  shapeProperties?: z.infer<typeof ShapePropertiesSchema>
  shapeType?:
    | 'TYPE_UNSPECIFIED'
    | 'TEXT_BOX'
    | 'RECTANGLE'
    | 'ROUND_RECTANGLE'
    | 'ELLIPSE'
    | 'ARC'
    | 'BENT_ARROW'
    | 'BENT_UP_ARROW'
    | 'BEVEL'
    | 'BLOCK_ARC'
    | 'BRACE_PAIR'
    | 'BRACKET_PAIR'
    | 'CAN'
    | 'CHEVRON'
    | 'CHORD'
    | 'CLOUD'
    | 'CORNER'
    | 'CUBE'
    | 'CURVED_DOWN_ARROW'
    | 'CURVED_LEFT_ARROW'
    | 'CURVED_RIGHT_ARROW'
    | 'CURVED_UP_ARROW'
    | 'DECAGON'
    | 'DIAGONAL_STRIPE'
    | 'DIAMOND'
    | 'DODECAGON'
    | 'DONUT'
    | 'DOUBLE_WAVE'
    | 'DOWN_ARROW'
    | 'DOWN_ARROW_CALLOUT'
    | 'FOLDED_CORNER'
    | 'FRAME'
    | 'HALF_FRAME'
    | 'HEART'
    | 'HEPTAGON'
    | 'HEXAGON'
    | 'HOME_PLATE'
    | 'HORIZONTAL_SCROLL'
    | 'IRREGULAR_SEAL_1'
    | 'IRREGULAR_SEAL_2'
    | 'LEFT_ARROW'
    | 'LEFT_ARROW_CALLOUT'
    | 'LEFT_BRACE'
    | 'LEFT_BRACKET'
    | 'LEFT_RIGHT_ARROW'
    | 'LEFT_RIGHT_ARROW_CALLOUT'
    | 'LEFT_RIGHT_UP_ARROW'
    | 'LEFT_UP_ARROW'
    | 'LIGHTNING_BOLT'
    | 'MATH_DIVIDE'
    | 'MATH_EQUAL'
    | 'MATH_MINUS'
    | 'MATH_MULTIPLY'
    | 'MATH_NOT_EQUAL'
    | 'MATH_PLUS'
    | 'MOON'
    | 'NO_SMOKING'
    | 'NOTCHED_RIGHT_ARROW'
    | 'OCTAGON'
    | 'PARALLELOGRAM'
    | 'PENTAGON'
    | 'PIE'
    | 'PLAQUE'
    | 'PLUS'
    | 'QUAD_ARROW'
    | 'QUAD_ARROW_CALLOUT'
    | 'RIBBON'
    | 'RIBBON_2'
    | 'RIGHT_ARROW'
    | 'RIGHT_ARROW_CALLOUT'
    | 'RIGHT_BRACE'
    | 'RIGHT_BRACKET'
    | 'ROUND_1_RECTANGLE'
    | 'ROUND_2_DIAGONAL_RECTANGLE'
    | 'ROUND_2_SAME_RECTANGLE'
    | 'RIGHT_TRIANGLE'
    | 'SMILEY_FACE'
    | 'SNIP_1_RECTANGLE'
    | 'SNIP_2_DIAGONAL_RECTANGLE'
    | 'SNIP_2_SAME_RECTANGLE'
    | 'SNIP_ROUND_RECTANGLE'
    | 'STAR_10'
    | 'STAR_12'
    | 'STAR_16'
    | 'STAR_24'
    | 'STAR_32'
    | 'STAR_4'
    | 'STAR_5'
    | 'STAR_6'
    | 'STAR_7'
    | 'STAR_8'
    | 'STRIPED_RIGHT_ARROW'
    | 'SUN'
    | 'TRAPEZOID'
    | 'TRIANGLE'
    | 'UP_ARROW'
    | 'UP_ARROW_CALLOUT'
    | 'UP_DOWN_ARROW'
    | 'UTURN_ARROW'
    | 'VERTICAL_SCROLL'
    | 'WAVE'
    | 'WEDGE_ELLIPSE_CALLOUT'
    | 'WEDGE_RECTANGLE_CALLOUT'
    | 'WEDGE_ROUND_RECTANGLE_CALLOUT'
    | 'FLOW_CHART_ALTERNATE_PROCESS'
    | 'FLOW_CHART_COLLATE'
    | 'FLOW_CHART_CONNECTOR'
    | 'FLOW_CHART_DECISION'
    | 'FLOW_CHART_DELAY'
    | 'FLOW_CHART_DISPLAY'
    | 'FLOW_CHART_DOCUMENT'
    | 'FLOW_CHART_EXTRACT'
    | 'FLOW_CHART_INPUT_OUTPUT'
    | 'FLOW_CHART_INTERNAL_STORAGE'
    | 'FLOW_CHART_MAGNETIC_DISK'
    | 'FLOW_CHART_MAGNETIC_DRUM'
    | 'FLOW_CHART_MAGNETIC_TAPE'
    | 'FLOW_CHART_MANUAL_INPUT'
    | 'FLOW_CHART_MANUAL_OPERATION'
    | 'FLOW_CHART_MERGE'
    | 'FLOW_CHART_MULTIDOCUMENT'
    | 'FLOW_CHART_OFFLINE_STORAGE'
    | 'FLOW_CHART_OFFPAGE_CONNECTOR'
    | 'FLOW_CHART_ONLINE_STORAGE'
    | 'FLOW_CHART_OR'
    | 'FLOW_CHART_PREDEFINED_PROCESS'
    | 'FLOW_CHART_PREPARATION'
    | 'FLOW_CHART_PROCESS'
    | 'FLOW_CHART_PUNCHED_CARD'
    | 'FLOW_CHART_PUNCHED_TAPE'
    | 'FLOW_CHART_SORT'
    | 'FLOW_CHART_SUMMING_JUNCTION'
    | 'FLOW_CHART_TERMINATOR'
    | 'ARROW_EAST'
    | 'ARROW_NORTH_EAST'
    | 'ARROW_NORTH'
    | 'SPEECH'
    | 'STARBURST'
    | 'TEARDROP'
    | 'ELLIPSE_RIBBON'
    | 'ELLIPSE_RIBBON_2'
    | 'CLOUD_CALLOUT'
    | 'CUSTOM'
  text?: z.infer<typeof TextContentSchema>
}

const ShapeSchema: z.ZodType<ShapeType> = z
  .object({
    placeholder: PlaceholderSchema.exactOptional().openapi({
      description:
        'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
    }),
    shapeProperties: ShapePropertiesSchema.exactOptional().openapi({
      description: 'The properties of the shape.',
    }),
    shapeType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'TEXT_BOX',
        'RECTANGLE',
        'ROUND_RECTANGLE',
        'ELLIPSE',
        'ARC',
        'BENT_ARROW',
        'BENT_UP_ARROW',
        'BEVEL',
        'BLOCK_ARC',
        'BRACE_PAIR',
        'BRACKET_PAIR',
        'CAN',
        'CHEVRON',
        'CHORD',
        'CLOUD',
        'CORNER',
        'CUBE',
        'CURVED_DOWN_ARROW',
        'CURVED_LEFT_ARROW',
        'CURVED_RIGHT_ARROW',
        'CURVED_UP_ARROW',
        'DECAGON',
        'DIAGONAL_STRIPE',
        'DIAMOND',
        'DODECAGON',
        'DONUT',
        'DOUBLE_WAVE',
        'DOWN_ARROW',
        'DOWN_ARROW_CALLOUT',
        'FOLDED_CORNER',
        'FRAME',
        'HALF_FRAME',
        'HEART',
        'HEPTAGON',
        'HEXAGON',
        'HOME_PLATE',
        'HORIZONTAL_SCROLL',
        'IRREGULAR_SEAL_1',
        'IRREGULAR_SEAL_2',
        'LEFT_ARROW',
        'LEFT_ARROW_CALLOUT',
        'LEFT_BRACE',
        'LEFT_BRACKET',
        'LEFT_RIGHT_ARROW',
        'LEFT_RIGHT_ARROW_CALLOUT',
        'LEFT_RIGHT_UP_ARROW',
        'LEFT_UP_ARROW',
        'LIGHTNING_BOLT',
        'MATH_DIVIDE',
        'MATH_EQUAL',
        'MATH_MINUS',
        'MATH_MULTIPLY',
        'MATH_NOT_EQUAL',
        'MATH_PLUS',
        'MOON',
        'NO_SMOKING',
        'NOTCHED_RIGHT_ARROW',
        'OCTAGON',
        'PARALLELOGRAM',
        'PENTAGON',
        'PIE',
        'PLAQUE',
        'PLUS',
        'QUAD_ARROW',
        'QUAD_ARROW_CALLOUT',
        'RIBBON',
        'RIBBON_2',
        'RIGHT_ARROW',
        'RIGHT_ARROW_CALLOUT',
        'RIGHT_BRACE',
        'RIGHT_BRACKET',
        'ROUND_1_RECTANGLE',
        'ROUND_2_DIAGONAL_RECTANGLE',
        'ROUND_2_SAME_RECTANGLE',
        'RIGHT_TRIANGLE',
        'SMILEY_FACE',
        'SNIP_1_RECTANGLE',
        'SNIP_2_DIAGONAL_RECTANGLE',
        'SNIP_2_SAME_RECTANGLE',
        'SNIP_ROUND_RECTANGLE',
        'STAR_10',
        'STAR_12',
        'STAR_16',
        'STAR_24',
        'STAR_32',
        'STAR_4',
        'STAR_5',
        'STAR_6',
        'STAR_7',
        'STAR_8',
        'STRIPED_RIGHT_ARROW',
        'SUN',
        'TRAPEZOID',
        'TRIANGLE',
        'UP_ARROW',
        'UP_ARROW_CALLOUT',
        'UP_DOWN_ARROW',
        'UTURN_ARROW',
        'VERTICAL_SCROLL',
        'WAVE',
        'WEDGE_ELLIPSE_CALLOUT',
        'WEDGE_RECTANGLE_CALLOUT',
        'WEDGE_ROUND_RECTANGLE_CALLOUT',
        'FLOW_CHART_ALTERNATE_PROCESS',
        'FLOW_CHART_COLLATE',
        'FLOW_CHART_CONNECTOR',
        'FLOW_CHART_DECISION',
        'FLOW_CHART_DELAY',
        'FLOW_CHART_DISPLAY',
        'FLOW_CHART_DOCUMENT',
        'FLOW_CHART_EXTRACT',
        'FLOW_CHART_INPUT_OUTPUT',
        'FLOW_CHART_INTERNAL_STORAGE',
        'FLOW_CHART_MAGNETIC_DISK',
        'FLOW_CHART_MAGNETIC_DRUM',
        'FLOW_CHART_MAGNETIC_TAPE',
        'FLOW_CHART_MANUAL_INPUT',
        'FLOW_CHART_MANUAL_OPERATION',
        'FLOW_CHART_MERGE',
        'FLOW_CHART_MULTIDOCUMENT',
        'FLOW_CHART_OFFLINE_STORAGE',
        'FLOW_CHART_OFFPAGE_CONNECTOR',
        'FLOW_CHART_ONLINE_STORAGE',
        'FLOW_CHART_OR',
        'FLOW_CHART_PREDEFINED_PROCESS',
        'FLOW_CHART_PREPARATION',
        'FLOW_CHART_PROCESS',
        'FLOW_CHART_PUNCHED_CARD',
        'FLOW_CHART_PUNCHED_TAPE',
        'FLOW_CHART_SORT',
        'FLOW_CHART_SUMMING_JUNCTION',
        'FLOW_CHART_TERMINATOR',
        'ARROW_EAST',
        'ARROW_NORTH_EAST',
        'ARROW_NORTH',
        'SPEECH',
        'STARBURST',
        'TEARDROP',
        'ELLIPSE_RIBBON',
        'ELLIPSE_RIBBON_2',
        'CLOUD_CALLOUT',
        'CUSTOM',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the shape.' }),
    text: TextContentSchema.exactOptional().openapi({
      description: 'The text content of the shape.',
    }),
  })
  .openapi({
    description:
      'A PageElement kind representing a generic shape that does not have a more specific classification.',
    required: [],
  })
  .openapi('Shape')

const SheetsChartPropertiesSchema = z
  .object({
    chartImageProperties: ImagePropertiesSchema.exactOptional().openapi({
      description: 'The properties of the embedded chart image.',
    }),
  })
  .openapi({ description: 'The properties of the SheetsChart.', required: [] })
  .openapi('SheetsChartProperties')

type SheetsChartType = {
  chartId?: number
  contentUrl?: string
  sheetsChartProperties?: z.infer<typeof SheetsChartPropertiesSchema>
  spreadsheetId?: string
}

const SheetsChartSchema: z.ZodType<SheetsChartType> = z
  .object({
    chartId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The ID of the specific chart in the Google Sheets spreadsheet that is embedded.',
      }),
    contentUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
      }),
    sheetsChartProperties: SheetsChartPropertiesSchema.exactOptional().openapi({
      description: 'The properties of the Sheets chart.',
    }),
    spreadsheetId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the Google Sheets spreadsheet that contains the source chart.',
      }),
  })
  .openapi({
    description: 'A PageElement kind representing a linked chart embedded from Google Sheets.',
    required: [],
  })
  .openapi('SheetsChart')

const TableCellLocationSchema = z
  .object({
    columnIndex: z.int32().exactOptional().openapi({ description: 'The 0-based column index.' }),
    rowIndex: z.int32().exactOptional().openapi({ description: 'The 0-based row index.' }),
  })
  .openapi({ description: 'A location of a single table cell within a table.', required: [] })
  .openapi('TableCellLocation')

const TableBorderFillSchema = z
  .object({ solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid fill.' }) })
  .openapi({ description: 'The fill of the border.', required: [] })
  .openapi('TableBorderFill')

const TableBorderPropertiesSchema = z
  .object({
    dashStyle: z
      .enum([
        'DASH_STYLE_UNSPECIFIED',
        'SOLID',
        'DOT',
        'DASH',
        'DASH_DOT',
        'LONG_DASH',
        'LONG_DASH_DOT',
      ])
      .exactOptional()
      .openapi({ description: 'The dash style of the border.' }),
    tableBorderFill: TableBorderFillSchema.exactOptional().openapi({
      description: 'The fill of the table border.',
    }),
    weight: DimensionSchema.exactOptional().openapi({
      description: 'The thickness of the border.',
    }),
  })
  .openapi({ description: 'The border styling properties of the TableBorderCell.', required: [] })
  .openapi('TableBorderProperties')

const TableBorderCellSchema = z
  .object({
    location: TableCellLocationSchema.exactOptional().openapi({
      description: 'The location of the border within the border table.',
    }),
    tableBorderProperties: TableBorderPropertiesSchema.exactOptional().openapi({
      description: 'The border properties.',
    }),
  })
  .openapi({ description: 'The properties of each border cell.', required: [] })
  .openapi('TableBorderCell')

const TableBorderRowSchema = z
  .object({
    tableBorderCells: z
      .array(TableBorderCellSchema)
      .exactOptional()
      .openapi({
        description:
          "Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
      }),
  })
  .openapi({ description: 'Contents of each border row in a table.', required: [] })
  .openapi('TableBorderRow')

const TableColumnPropertiesSchema = z
  .object({
    columnWidth: DimensionSchema.exactOptional().openapi({ description: 'Width of a column.' }),
  })
  .openapi({ description: 'Properties of each column in a table.', required: [] })
  .openapi('TableColumnProperties')

const TableCellBackgroundFillSchema = z
  .object({
    propertyState: z
      .enum(['RENDERED', 'NOT_RENDERED', 'INHERIT'])
      .exactOptional()
      .openapi({
        description:
          'The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
      }),
    solidFill: SolidFillSchema.exactOptional().openapi({ description: 'Solid color fill.' }),
  })
  .openapi({ description: 'The table cell background fill.', required: [] })
  .openapi('TableCellBackgroundFill')

const TableCellPropertiesSchema = z
  .object({
    contentAlignment: z
      .enum([
        'CONTENT_ALIGNMENT_UNSPECIFIED',
        'CONTENT_ALIGNMENT_UNSUPPORTED',
        'TOP',
        'MIDDLE',
        'BOTTOM',
      ])
      .exactOptional()
      .openapi({
        description:
          'The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.',
      }),
    tableCellBackgroundFill: TableCellBackgroundFillSchema.exactOptional().openapi({
      description:
        'The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.',
    }),
  })
  .openapi({ description: 'The properties of the TableCell.', required: [] })
  .openapi('TableCellProperties')

const TableCellSchema = z
  .object({
    columnSpan: z.int32().exactOptional().openapi({ description: 'Column span of the cell.' }),
    location: TableCellLocationSchema.exactOptional().openapi({
      description: 'The location of the cell within the table.',
    }),
    rowSpan: z.int32().exactOptional().openapi({ description: 'Row span of the cell.' }),
    tableCellProperties: TableCellPropertiesSchema.exactOptional().openapi({
      description: 'The properties of the table cell.',
    }),
    text: TextContentSchema.exactOptional().openapi({
      description: 'The text content of the cell.',
    }),
  })
  .openapi({ description: 'Properties and contents of each table cell.', required: [] })
  .openapi('TableCell')

const TableRowPropertiesSchema = z
  .object({
    minRowHeight: DimensionSchema.exactOptional().openapi({
      description:
        "Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).",
    }),
  })
  .openapi({ description: 'Properties of each row in a table.', required: [] })
  .openapi('TableRowProperties')

const TableRowSchema = z
  .object({
    rowHeight: DimensionSchema.exactOptional().openapi({ description: 'Height of a row.' }),
    tableCells: z
      .array(TableCellSchema)
      .exactOptional()
      .openapi({
        description:
          'Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.',
      }),
    tableRowProperties: TableRowPropertiesSchema.exactOptional().openapi({
      description: 'Properties of the row.',
    }),
  })
  .openapi({ description: 'Properties and contents of each row in a table.', required: [] })
  .openapi('TableRow')

type TableType = {
  columns?: number
  horizontalBorderRows?: z.infer<typeof TableBorderRowSchema>[]
  rows?: number
  tableColumns?: z.infer<typeof TableColumnPropertiesSchema>[]
  tableRows?: z.infer<typeof TableRowSchema>[]
  verticalBorderRows?: z.infer<typeof TableBorderRowSchema>[]
}

const TableSchema: z.ZodType<TableType> = z
  .object({
    columns: z.int32().exactOptional().openapi({ description: 'Number of columns in the table.' }),
    horizontalBorderRows: z
      .array(TableBorderRowSchema)
      .exactOptional()
      .openapi({
        description:
          "Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.",
      }),
    rows: z.int32().exactOptional().openapi({ description: 'Number of rows in the table.' }),
    tableColumns: z
      .array(TableColumnPropertiesSchema)
      .exactOptional()
      .openapi({ description: 'Properties of each column.' }),
    tableRows: z
      .array(TableRowSchema)
      .exactOptional()
      .openapi({
        description:
          'Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.',
      }),
    verticalBorderRows: z
      .array(TableBorderRowSchema)
      .exactOptional()
      .openapi({
        description:
          "Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.",
      }),
  })
  .openapi({ description: 'A PageElement kind representing a table.', required: [] })
  .openapi('Table')

const VideoPropertiesSchema = z
  .object({
    autoPlay: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.',
      }),
    end: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          "The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.",
      }),
    mute: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to mute the audio during video playback. Defaults to false.',
      }),
    outline: OutlineSchema.exactOptional().openapi({
      description:
        'The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.',
    }),
    start: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          "The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.",
      }),
  })
  .openapi({ description: 'The properties of the Video.', required: [] })
  .openapi('VideoProperties')

type VideoType = {
  id?: string
  source?: 'SOURCE_UNSPECIFIED' | 'YOUTUBE' | 'DRIVE'
  url?: string
  videoProperties?: z.infer<typeof VideoPropertiesSchema>
}

const VideoSchema: z.ZodType<VideoType> = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "The video source's unique identifier for this video." }),
    source: z
      .enum(['SOURCE_UNSPECIFIED', 'YOUTUBE', 'DRIVE'])
      .exactOptional()
      .openapi({ description: 'The video source.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.',
      }),
    videoProperties: VideoPropertiesSchema.exactOptional().openapi({
      description: 'The properties of the video.',
    }),
  })
  .openapi({ description: 'A PageElement kind representing a video.', required: [] })
  .openapi('Video')

type WordArtType = { renderedText?: string }

const WordArtSchema: z.ZodType<WordArtType> = z
  .object({
    renderedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text rendered as word art.' }),
  })
  .openapi({ description: 'A PageElement kind representing word art.', required: [] })
  .openapi('WordArt')

type PageElementType = {
  description?: string
  elementGroup?: z.infer<typeof GroupSchema>
  image?: z.infer<typeof ImageSchema>
  line?: z.infer<typeof LineSchema>
  objectId?: string
  shape?: z.infer<typeof ShapeSchema>
  sheetsChart?: z.infer<typeof SheetsChartSchema>
  size?: z.infer<typeof SizeSchema>
  table?: z.infer<typeof TableSchema>
  title?: string
  transform?: z.infer<typeof AffineTransformSchema>
  video?: z.infer<typeof VideoSchema>
  wordArt?: z.infer<typeof WordArtSchema>
}

const PageElementPropertiesSchema = z
  .object({
    pageObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the page where the element is located.' }),
    size: SizeSchema.exactOptional().openapi({ description: 'The size of the element.' }),
    transform: AffineTransformSchema.exactOptional().openapi({
      description: 'The transform for the element.',
    }),
  })
  .openapi({
    description:
      'Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.',
    required: [],
  })
  .openapi('PageElementProperties')

const CreateImageRequestSchema = z
  .object({
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description:
        "The element properties for the image. When the aspect ratio of the provided size does not match the image aspect ratio, the image is scaled and centered with respect to the size in order to maintain the aspect ratio. The provided transform is applied after this operation. The PageElementProperties.size property is optional. If you don't specify the size, the default size of the image is used. The PageElementProperties.transform property is optional. If you don't specify a transform, the image will be placed at the top-left corner of the page.",
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can't exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats. The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.",
      }),
  })
  .openapi({ description: 'Creates an image.', required: [] })
  .openapi('CreateImageRequest')

const CreateLineRequestSchema = z
  .object({
    category: z
      .enum(['LINE_CATEGORY_UNSPECIFIED', 'STRAIGHT', 'BENT', 'CURVED'])
      .exactOptional()
      .openapi({
        description:
          "The category of the line to be created. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified `line_category` value is used. If you do not specify either, then STRAIGHT is used.",
      }),
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description: 'The element properties for the line.',
    }),
    lineCategory: z
      .enum(['STRAIGHT', 'BENT', 'CURVED'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence.",
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
  })
  .openapi({ description: 'Creates a line.', required: [] })
  .openapi('CreateLineRequest')

const RangeSchema = z
  .object({
    endIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.',
      }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.',
      }),
    type: z
      .enum(['RANGE_TYPE_UNSPECIFIED', 'FIXED_RANGE', 'FROM_START_INDEX', 'ALL'])
      .exactOptional()
      .openapi({ description: 'The type of range.' }),
  })
  .openapi({
    description:
      'Specifies a contiguous range of an indexed collection, such as characters in text.',
    required: [],
  })
  .openapi('Range')

const CreateParagraphBulletsRequestSchema = z
  .object({
    bulletPreset: z
      .enum([
        'BULLET_DISC_CIRCLE_SQUARE',
        'BULLET_DIAMONDX_ARROW3D_SQUARE',
        'BULLET_CHECKBOX',
        'BULLET_ARROW_DIAMOND_DISC',
        'BULLET_STAR_CIRCLE_SQUARE',
        'BULLET_ARROW3D_CIRCLE_SQUARE',
        'BULLET_LEFTTRIANGLE_DIAMOND_DISC',
        'BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE',
        'BULLET_DIAMOND_CIRCLE_SQUARE',
        'NUMBERED_DIGIT_ALPHA_ROMAN',
        'NUMBERED_DIGIT_ALPHA_ROMAN_PARENS',
        'NUMBERED_DIGIT_NESTED',
        'NUMBERED_UPPERALPHA_ALPHA_ROMAN',
        'NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT',
        'NUMBERED_ZERODIGIT_ALPHA_ROMAN',
      ])
      .exactOptional()
      .openapi({
        description:
          'The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.',
      }),
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to a table.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object ID of the shape or table containing the text to add bullets to.',
      }),
    textRange: RangeSchema.exactOptional().openapi({
      description:
        'The range of text to apply the bullet presets to, based on TextElement indexes.',
    }),
  })
  .openapi({
    description:
      'Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.',
    required: [],
  })
  .openapi('CreateParagraphBulletsRequest')

const CreateShapeRequestSchema = z
  .object({
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description: 'The element properties for the shape.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated.',
      }),
    shapeType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'TEXT_BOX',
        'RECTANGLE',
        'ROUND_RECTANGLE',
        'ELLIPSE',
        'ARC',
        'BENT_ARROW',
        'BENT_UP_ARROW',
        'BEVEL',
        'BLOCK_ARC',
        'BRACE_PAIR',
        'BRACKET_PAIR',
        'CAN',
        'CHEVRON',
        'CHORD',
        'CLOUD',
        'CORNER',
        'CUBE',
        'CURVED_DOWN_ARROW',
        'CURVED_LEFT_ARROW',
        'CURVED_RIGHT_ARROW',
        'CURVED_UP_ARROW',
        'DECAGON',
        'DIAGONAL_STRIPE',
        'DIAMOND',
        'DODECAGON',
        'DONUT',
        'DOUBLE_WAVE',
        'DOWN_ARROW',
        'DOWN_ARROW_CALLOUT',
        'FOLDED_CORNER',
        'FRAME',
        'HALF_FRAME',
        'HEART',
        'HEPTAGON',
        'HEXAGON',
        'HOME_PLATE',
        'HORIZONTAL_SCROLL',
        'IRREGULAR_SEAL_1',
        'IRREGULAR_SEAL_2',
        'LEFT_ARROW',
        'LEFT_ARROW_CALLOUT',
        'LEFT_BRACE',
        'LEFT_BRACKET',
        'LEFT_RIGHT_ARROW',
        'LEFT_RIGHT_ARROW_CALLOUT',
        'LEFT_RIGHT_UP_ARROW',
        'LEFT_UP_ARROW',
        'LIGHTNING_BOLT',
        'MATH_DIVIDE',
        'MATH_EQUAL',
        'MATH_MINUS',
        'MATH_MULTIPLY',
        'MATH_NOT_EQUAL',
        'MATH_PLUS',
        'MOON',
        'NO_SMOKING',
        'NOTCHED_RIGHT_ARROW',
        'OCTAGON',
        'PARALLELOGRAM',
        'PENTAGON',
        'PIE',
        'PLAQUE',
        'PLUS',
        'QUAD_ARROW',
        'QUAD_ARROW_CALLOUT',
        'RIBBON',
        'RIBBON_2',
        'RIGHT_ARROW',
        'RIGHT_ARROW_CALLOUT',
        'RIGHT_BRACE',
        'RIGHT_BRACKET',
        'ROUND_1_RECTANGLE',
        'ROUND_2_DIAGONAL_RECTANGLE',
        'ROUND_2_SAME_RECTANGLE',
        'RIGHT_TRIANGLE',
        'SMILEY_FACE',
        'SNIP_1_RECTANGLE',
        'SNIP_2_DIAGONAL_RECTANGLE',
        'SNIP_2_SAME_RECTANGLE',
        'SNIP_ROUND_RECTANGLE',
        'STAR_10',
        'STAR_12',
        'STAR_16',
        'STAR_24',
        'STAR_32',
        'STAR_4',
        'STAR_5',
        'STAR_6',
        'STAR_7',
        'STAR_8',
        'STRIPED_RIGHT_ARROW',
        'SUN',
        'TRAPEZOID',
        'TRIANGLE',
        'UP_ARROW',
        'UP_ARROW_CALLOUT',
        'UP_DOWN_ARROW',
        'UTURN_ARROW',
        'VERTICAL_SCROLL',
        'WAVE',
        'WEDGE_ELLIPSE_CALLOUT',
        'WEDGE_RECTANGLE_CALLOUT',
        'WEDGE_ROUND_RECTANGLE_CALLOUT',
        'FLOW_CHART_ALTERNATE_PROCESS',
        'FLOW_CHART_COLLATE',
        'FLOW_CHART_CONNECTOR',
        'FLOW_CHART_DECISION',
        'FLOW_CHART_DELAY',
        'FLOW_CHART_DISPLAY',
        'FLOW_CHART_DOCUMENT',
        'FLOW_CHART_EXTRACT',
        'FLOW_CHART_INPUT_OUTPUT',
        'FLOW_CHART_INTERNAL_STORAGE',
        'FLOW_CHART_MAGNETIC_DISK',
        'FLOW_CHART_MAGNETIC_DRUM',
        'FLOW_CHART_MAGNETIC_TAPE',
        'FLOW_CHART_MANUAL_INPUT',
        'FLOW_CHART_MANUAL_OPERATION',
        'FLOW_CHART_MERGE',
        'FLOW_CHART_MULTIDOCUMENT',
        'FLOW_CHART_OFFLINE_STORAGE',
        'FLOW_CHART_OFFPAGE_CONNECTOR',
        'FLOW_CHART_ONLINE_STORAGE',
        'FLOW_CHART_OR',
        'FLOW_CHART_PREDEFINED_PROCESS',
        'FLOW_CHART_PREPARATION',
        'FLOW_CHART_PROCESS',
        'FLOW_CHART_PUNCHED_CARD',
        'FLOW_CHART_PUNCHED_TAPE',
        'FLOW_CHART_SORT',
        'FLOW_CHART_SUMMING_JUNCTION',
        'FLOW_CHART_TERMINATOR',
        'ARROW_EAST',
        'ARROW_NORTH_EAST',
        'ARROW_NORTH',
        'SPEECH',
        'STARBURST',
        'TEARDROP',
        'ELLIPSE_RIBBON',
        'ELLIPSE_RIBBON_2',
        'CLOUD_CALLOUT',
        'CUSTOM',
      ])
      .exactOptional()
      .openapi({ description: 'The shape type.' }),
  })
  .openapi({ description: 'Creates a new shape.', required: [] })
  .openapi('CreateShapeRequest')

const CreateSheetsChartRequestSchema = z
  .object({
    chartId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the specific chart in the Google Sheets spreadsheet.' }),
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description:
        'The element properties for the chart. When the aspect ratio of the provided size does not match the chart aspect ratio, the chart is scaled and centered with respect to the size in order to maintain aspect ratio. The provided transform is applied after this operation.',
    }),
    linkingMode: z
      .enum(['NOT_LINKED_IMAGE', 'LINKED'])
      .exactOptional()
      .openapi({
        description:
          'The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated.',
      }),
    spreadsheetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys).',
      }),
  })
  .openapi({
    description:
      'Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.',
    required: [],
  })
  .openapi('CreateSheetsChartRequest')

const LayoutPlaceholderIdMappingSchema = z
  .object({
    layoutPlaceholder: PlaceholderSchema.exactOptional().openapi({
      description:
        'The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.',
    }),
    layoutPlaceholderObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the placeholder on a layout that will be applied to a slide.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
  })
  .openapi({
    description:
      'The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.',
    required: [],
  })
  .openapi('LayoutPlaceholderIdMapping')

const LayoutReferenceSchema = z
  .object({
    layoutId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Layout ID: the object ID of one of the layouts in the presentation.',
      }),
    predefinedLayout: z
      .enum([
        'PREDEFINED_LAYOUT_UNSPECIFIED',
        'BLANK',
        'CAPTION_ONLY',
        'TITLE',
        'TITLE_AND_BODY',
        'TITLE_AND_TWO_COLUMNS',
        'TITLE_ONLY',
        'SECTION_HEADER',
        'SECTION_TITLE_AND_DESCRIPTION',
        'ONE_COLUMN_TEXT',
        'MAIN_POINT',
        'BIG_NUMBER',
      ])
      .exactOptional()
      .openapi({ description: 'Predefined layout.' }),
  })
  .openapi({
    description:
      'Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.',
    required: [],
  })
  .openapi('LayoutReference')

const CreateSlideRequestSchema = z
  .object({
    insertionIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.",
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated.",
      }),
    placeholderIdMappings: z
      .array(LayoutPlaceholderIdMappingSchema)
      .exactOptional()
      .openapi({
        description:
          'An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when `slide_layout_reference` is specified.',
      }),
    slideLayoutReference: LayoutReferenceSchema.exactOptional().openapi({
      description:
        "Layout reference of the slide to be inserted, based on the *current master*, which is one of the following: - The master of the previous slide index. - The master of the first slide, if the insertion_index is zero. - The first master in the presentation, if there are no slides. If the LayoutReference is not found in the current master, a 400 bad request error is returned. If you don't specify a layout reference, the slide uses the predefined `BLANK` layout.",
    }),
  })
  .openapi({ description: 'Creates a slide.', required: [] })
  .openapi('CreateSlideRequest')

const CreateTableRequestSchema = z
  .object({
    columns: z.int32().exactOptional().openapi({ description: 'Number of columns in the table.' }),
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description:
        'The element properties for the table. The table will be created at the provided size, subject to a minimum size. If no size is provided, the table will be automatically sized. Table transforms must have a scale of 1 and no shear components. If no transform is provided, the table will be centered on the page.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
    rows: z.int32().exactOptional().openapi({ description: 'Number of rows in the table.' }),
  })
  .openapi({ description: 'Creates a new table.', required: [] })
  .openapi('CreateTableRequest')

const CreateVideoRequestSchema = z
  .object({
    elementProperties: PageElementPropertiesSchema.exactOptional().openapi({
      description:
        "The element properties for the video. The PageElementProperties.size property is optional. If you don't specify a size, a default size is chosen by the server. The PageElementProperties.transform property is optional. The transform must not have shear components. If you don't specify a transform, the video will be placed at the top left corner of the page.",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q. To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys).",
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
    source: z
      .enum(['SOURCE_UNSPECIFIED', 'YOUTUBE', 'DRIVE'])
      .exactOptional()
      .openapi({ description: 'The video source.' }),
  })
  .openapi({
    description:
      'Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.',
    required: [],
  })
  .openapi('CreateVideoRequest')

const DeleteObjectRequestSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.',
      }),
  })
  .openapi({
    description: 'Deletes an object, either pages or page elements, from the presentation.',
    required: [],
  })
  .openapi('DeleteObjectRequest')

const DeleteParagraphBulletsRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to a table.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the shape or table containing the text to delete bullets from.',
      }),
    textRange: RangeSchema.exactOptional().openapi({
      description: 'The range of text to delete bullets from, based on TextElement indexes.',
    }),
  })
  .openapi({
    description:
      'Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.',
    required: [],
  })
  .openapi('DeleteParagraphBulletsRequest')

const DeleteTableColumnRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The reference table cell location from which a column will be deleted. The column this cell spans will be deleted. If this is a merged cell, multiple columns will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.',
    }),
    tableObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The table to delete columns from.' }),
  })
  .openapi({ description: 'Deletes a column from a table.', required: [] })
  .openapi('DeleteTableColumnRequest')

const DeleteTableRowRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The reference table cell location from which a row will be deleted. The row this cell spans will be deleted. If this is a merged cell, multiple rows will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.',
    }),
    tableObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The table to delete rows from.' }),
  })
  .openapi({ description: 'Deletes a row from a table.', required: [] })
  .openapi('DeleteTableRowRequest')

const DeleteTextRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The optional table cell location if the text is to be deleted from a table cell. If present, the object_id must refer to a table.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object ID of the shape or table from which the text will be deleted.',
      }),
    textRange: RangeSchema.exactOptional().openapi({
      description:
        'The range of text to delete, based on TextElement indexes. There is always an implicit newline character at the end of a shape\'s or table cell\'s text that cannot be deleted. `Range.Type.ALL` will use the correct bounds, but care must be taken when specifying explicit bounds for range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text is "ABC", followed by an implicit newline, then the maximum value is 2 for `text_range.start_index` and 3 for `text_range.end_index`. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles and lists as the two paragraphs are merged. Ranges that include only one code unit of a surrogate pair are expanded to include both code units.',
    }),
  })
  .openapi({ description: 'Deletes text from a shape or a table cell.', required: [] })
  .openapi('DeleteTextRequest')

const DuplicateObjectRequestSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the object to duplicate.' }),
    objectIds: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.",
      }),
  })
  .openapi({
    description:
      'Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.',
    required: [],
  })
  .openapi('DuplicateObjectRequest')

const GroupObjectsRequestSchema = z
  .object({
    childrenObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholders cannot be grouped.',
      }),
    groupObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
      }),
  })
  .openapi({
    description:
      'Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.',
    required: [],
  })
  .openapi('GroupObjectsRequest')

const InsertTableColumnsRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.',
    }),
    insertRight: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.',
      }),
    number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of columns to be inserted. Maximum 20 per request.' }),
    tableObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The table to insert columns into.' }),
  })
  .openapi({
    description:
      'Inserts columns into a table. Other columns in the table will be resized to fit the new column.',
    required: [],
  })
  .openapi('InsertTableColumnsRequest')

const InsertTableRowsRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.',
    }),
    insertBelow: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.',
      }),
    number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of rows to be inserted. Maximum 20 per request.' }),
    tableObjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The table to insert rows into.' }),
  })
  .openapi({ description: 'Inserts rows into a table.', required: [] })
  .openapi('InsertTableRowsRequest')

const InsertTextRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The optional table cell location if the text is to be inserted into a table cell. If present, the object_id must refer to a table.',
    }),
    insertionIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object ID of the shape or table where the text will be inserted.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.',
      }),
  })
  .openapi({ description: 'Inserts text into a shape or a table cell.', required: [] })
  .openapi('InsertTextRequest')

const TableRangeSchema = z
  .object({
    columnSpan: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The column span of the table range.' }),
    location: TableCellLocationSchema.exactOptional().openapi({
      description: 'The starting location of the table range.',
    }),
    rowSpan: z.int32().exactOptional().openapi({ description: 'The row span of the table range.' }),
  })
  .openapi({
    description:
      "A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]",
    required: [],
  })
  .openapi('TableRange')

const MergeTableCellsRequestSchema = z
  .object({
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    tableRange: TableRangeSchema.exactOptional().openapi({
      description:
        'The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated and stored in the upper-left ("head") cell of the range. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged), a 400 bad request error is returned.',
    }),
  })
  .openapi({ description: 'Merges cells in a Table.', required: [] })
  .openapi('MergeTableCellsRequest')

const RefreshSheetsChartRequestSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the chart to refresh.' }),
  })
  .openapi({
    description:
      'Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.',
    required: [],
  })
  .openapi('RefreshSheetsChartRequest')

const SubstringMatchCriteriaSchema = z
  .object({
    matchCase: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text to search for in the shape or table.' }),
  })
  .openapi({
    description: 'A criteria that matches a specific string of text in a shape or table.',
    required: [],
  })
  .openapi('SubstringMatchCriteria')

const ReplaceAllShapesWithImageRequestSchema = z
  .object({
    containsText: SubstringMatchCriteriaSchema.exactOptional().openapi({
      description:
        'If set, this request will replace all of the shapes that contain the given text.',
    }),
    imageReplaceMethod: z
      .enum(['IMAGE_REPLACE_METHOD_UNSPECIFIED', 'CENTER_INSIDE', 'CENTER_CROP'])
      .exactOptional()
      .openapi({
        description:
          'The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.',
      }),
    pageObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.",
      }),
    replaceMethod: z
      .enum(['CENTER_INSIDE', 'CENTER_CROP'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence.',
      }),
  })
  .openapi({
    description:
      'Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.',
    required: [],
  })
  .openapi('ReplaceAllShapesWithImageRequest')

const ReplaceAllShapesWithSheetsChartRequestSchema = z
  .object({
    chartId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the specific chart in the Google Sheets spreadsheet.' }),
    containsText: SubstringMatchCriteriaSchema.exactOptional().openapi({
      description:
        'The criteria that the shapes must match in order to be replaced. The request will replace all of the shapes that contain the given text.',
    }),
    linkingMode: z
      .enum(['NOT_LINKED_IMAGE', 'LINKED'])
      .exactOptional()
      .openapi({
        description:
          'The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.',
      }),
    pageObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.",
      }),
    spreadsheetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Google Sheets spreadsheet that contains the chart.' }),
  })
  .openapi({
    description:
      'Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.',
    required: [],
  })
  .openapi('ReplaceAllShapesWithSheetsChartRequest')

const ReplaceAllTextRequestSchema = z
  .object({
    containsText: SubstringMatchCriteriaSchema.exactOptional().openapi({
      description: 'Finds text in a shape matching this substring.',
    }),
    pageObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.",
      }),
    replaceText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that will replace the matched text.' }),
  })
  .openapi({
    description: 'Replaces all instances of text matching a criteria with replace text.',
    required: [],
  })
  .openapi('ReplaceAllTextRequest')

const ReplaceImageRequestSchema = z
  .object({
    imageObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.',
      }),
    imageReplaceMethod: z
      .enum(['IMAGE_REPLACE_METHOD_UNSPECIFIED', 'CENTER_INSIDE', 'CENTER_CROP'])
      .exactOptional()
      .openapi({ description: 'The replacement method.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.",
      }),
  })
  .openapi({
    description:
      'Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.',
    required: [],
  })
  .openapi('ReplaceImageRequest')

const RerouteLineRequestSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements.',
      }),
  })
  .openapi({
    description:
      "Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.",
    required: [],
  })
  .openapi('RerouteLineRequest')

const UngroupObjectsRequestSchema = z
  .object({
    objectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved.',
      }),
  })
  .openapi({ description: 'Ungroups objects, such as groups.', required: [] })
  .openapi('UngroupObjectsRequest')

const UnmergeTableCellsRequestSchema = z
  .object({
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    tableRange: TableRangeSchema.exactOptional().openapi({
      description:
        'The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the upper-left ("head") cell of the resulting block of unmerged cells.',
    }),
  })
  .openapi({ description: 'Unmerges cells in a Table.', required: [] })
  .openapi('UnmergeTableCellsRequest')

const UpdateImagePropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    imageProperties: ImagePropertiesSchema.exactOptional().openapi({
      description: 'The image properties to update.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the image the updates are applied to.' }),
  })
  .openapi({ description: 'Update the properties of an Image.', required: [] })
  .openapi('UpdateImagePropertiesRequest')

const UpdateLineCategoryRequestSchema = z
  .object({
    lineCategory: z
      .enum(['LINE_CATEGORY_UNSPECIFIED', 'STRAIGHT', 'BENT', 'CURVED'])
      .exactOptional()
      .openapi({
        description:
          "The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements.",
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category.',
      }),
  })
  .openapi({ description: 'Updates the category of a line.', required: [] })
  .openapi('UpdateLineCategoryRequest')

const UpdateLinePropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    lineProperties: LinePropertiesSchema.exactOptional().openapi({
      description: 'The line properties to update.',
    }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the line the update is applied to.' }),
  })
  .openapi({ description: 'Updates the properties of a Line.', required: [] })
  .openapi('UpdateLinePropertiesRequest')

const UpdatePageElementAltTextRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the page element the updates are applied to.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.',
      }),
  })
  .openapi({
    description: 'Updates the alt text title and/or description of a page element.',
    required: [],
  })
  .openapi('UpdatePageElementAltTextRequest')

const UpdatePageElementTransformRequestSchema = z
  .object({
    applyMode: z
      .enum(['APPLY_MODE_UNSPECIFIED', 'RELATIVE', 'ABSOLUTE'])
      .exactOptional()
      .openapi({ description: 'The apply mode of the transform update.' }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the page element to update.' }),
    transform: AffineTransformSchema.exactOptional().openapi({
      description: 'The input transform matrix used to update the page element.',
    }),
  })
  .openapi({
    description:
      'Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.',
    required: [],
  })
  .openapi('UpdatePageElementTransformRequest')

const UpdatePageElementsZOrderRequestSchema = z
  .object({
    operation: z
      .enum([
        'Z_ORDER_OPERATION_UNSPECIFIED',
        'BRING_TO_FRONT',
        'BRING_FORWARD',
        'SEND_BACKWARD',
        'SEND_TO_BACK',
      ])
      .exactOptional()
      .openapi({
        description:
          'The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.',
      }),
    pageElementObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped.',
      }),
  })
  .openapi({
    description:
      'Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.',
    required: [],
  })
  .openapi('UpdatePageElementsZOrderRequest')

const UpdatePagePropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the page the update is applied to.' }),
    pageProperties: PagePropertiesSchema.exactOptional().openapi({
      description: 'The page properties to update.',
    }),
  })
  .openapi({ description: 'Updates the properties of a Page.', required: [] })
  .openapi('UpdatePagePropertiesRequest')

const UpdateParagraphStyleRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The location of the cell in the table containing the paragraph(s) to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.',
    }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the shape or table with the text to be styled.' }),
    style: ParagraphStyleSchema.exactOptional().openapi({ description: "The paragraph's style." }),
    textRange: RangeSchema.exactOptional().openapi({
      description: 'The range of text containing the paragraph(s) to style.',
    }),
  })
  .openapi({
    description:
      'Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.',
    required: [],
  })
  .openapi('UpdateParagraphStyleRequest')

const UpdateShapePropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the shape the updates are applied to.' }),
    shapeProperties: ShapePropertiesSchema.exactOptional().openapi({
      description: 'The shape properties to update.',
    }),
  })
  .openapi({ description: 'Update the properties of a Shape.', required: [] })
  .openapi('UpdateShapePropertiesRequest')

const UpdateSlidePropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root \'slideProperties\' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the slide the update is applied to.' }),
    slideProperties: SlidePropertiesSchema.exactOptional().openapi({
      description: 'The slide properties to update.',
    }),
  })
  .openapi({ description: 'Updates the properties of a Slide.', required: [] })
  .openapi('UpdateSlidePropertiesRequest')

const UpdateSlidesPositionRequestSchema = z
  .object({
    insertionIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.',
      }),
    slideObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.',
      }),
  })
  .openapi({ description: 'Updates the position of slides in the presentation.', required: [] })
  .openapi('UpdateSlidesPositionRequest')

const UpdateTableBorderPropertiesRequestSchema = z
  .object({
    borderPosition: z
      .enum([
        'ALL',
        'BOTTOM',
        'INNER',
        'INNER_HORIZONTAL',
        'INNER_VERTICAL',
        'LEFT',
        'OUTER',
        'RIGHT',
        'TOP',
      ])
      .exactOptional()
      .openapi({
        description:
          'The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range.',
      }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    tableBorderProperties: TableBorderPropertiesSchema.exactOptional().openapi({
      description: 'The table border properties to update.',
    }),
    tableRange: TableRangeSchema.exactOptional().openapi({
      description:
        'The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.',
    }),
  })
  .openapi({ description: 'Updates the properties of the table borders in a Table.', required: [] })
  .openapi('UpdateTableBorderPropertiesRequest')

const UpdateTableCellPropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    tableCellProperties: TableCellPropertiesSchema.exactOptional().openapi({
      description: 'The table cell properties to update.',
    }),
    tableRange: TableRangeSchema.exactOptional().openapi({
      description:
        'The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.',
    }),
  })
  .openapi({ description: 'Update the properties of a TableCell.', required: [] })
  .openapi('UpdateTableCellPropertiesRequest')

const UpdateTableColumnPropertiesRequestSchema = z
  .object({
    columnIndices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated.',
      }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If \'"column_width"\' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points).',
      }),
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    tableColumnProperties: TableColumnPropertiesSchema.exactOptional().openapi({
      description:
        'The table column properties to update. If the value of `table_column_properties#column_width` in the request is less than 406,400 EMU (32 points), a 400 bad request error is returned.',
    }),
  })
  .openapi({ description: 'Updates the properties of a Table column.', required: [] })
  .openapi('UpdateTableColumnPropertiesRequest')

const UpdateTableRowPropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If \'"min_row_height"\' is included in the field mask but the property is left unset, the minimum row height will default to 0.',
      }),
    objectId: z.string().exactOptional().openapi({ description: 'The object ID of the table.' }),
    rowIndices: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated.',
      }),
    tableRowProperties: TableRowPropertiesSchema.exactOptional().openapi({
      description: 'The table row properties to update.',
    }),
  })
  .openapi({ description: 'Updates the properties of a Table row.', required: [] })
  .openapi('UpdateTableRowPropertiesRequest')

const UpdateTextStyleRequestSchema = z
  .object({
    cellLocation: TableCellLocationSchema.exactOptional().openapi({
      description:
        'The location of the cell in the table containing the text to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.',
    }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the shape or table with the text to be styled.' }),
    style: TextStyleSchema.exactOptional().openapi({
      description:
        'The style(s) to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See the documentation of TextStyle for more information.',
    }),
    textRange: RangeSchema.exactOptional().openapi({
      description:
        "The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.",
    }),
  })
  .openapi({ description: 'Update the styling of text in a Shape or Table.', required: [] })
  .openapi('UpdateTextStyleRequest')

const UpdateVideoPropertiesRequestSchema = z
  .object({
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the video the updates are applied to.' }),
    videoProperties: VideoPropertiesSchema.exactOptional().openapi({
      description: 'The video properties to update.',
    }),
  })
  .openapi({ description: 'Update the properties of a Video.', required: [] })
  .openapi('UpdateVideoPropertiesRequest')

type RequestType = {
  createImage?: z.infer<typeof CreateImageRequestSchema>
  createLine?: z.infer<typeof CreateLineRequestSchema>
  createParagraphBullets?: z.infer<typeof CreateParagraphBulletsRequestSchema>
  createShape?: z.infer<typeof CreateShapeRequestSchema>
  createSheetsChart?: z.infer<typeof CreateSheetsChartRequestSchema>
  createSlide?: z.infer<typeof CreateSlideRequestSchema>
  createTable?: z.infer<typeof CreateTableRequestSchema>
  createVideo?: z.infer<typeof CreateVideoRequestSchema>
  deleteObject?: z.infer<typeof DeleteObjectRequestSchema>
  deleteParagraphBullets?: z.infer<typeof DeleteParagraphBulletsRequestSchema>
  deleteTableColumn?: z.infer<typeof DeleteTableColumnRequestSchema>
  deleteTableRow?: z.infer<typeof DeleteTableRowRequestSchema>
  deleteText?: z.infer<typeof DeleteTextRequestSchema>
  duplicateObject?: z.infer<typeof DuplicateObjectRequestSchema>
  groupObjects?: z.infer<typeof GroupObjectsRequestSchema>
  insertTableColumns?: z.infer<typeof InsertTableColumnsRequestSchema>
  insertTableRows?: z.infer<typeof InsertTableRowsRequestSchema>
  insertText?: z.infer<typeof InsertTextRequestSchema>
  mergeTableCells?: z.infer<typeof MergeTableCellsRequestSchema>
  refreshSheetsChart?: z.infer<typeof RefreshSheetsChartRequestSchema>
  replaceAllShapesWithImage?: z.infer<typeof ReplaceAllShapesWithImageRequestSchema>
  replaceAllShapesWithSheetsChart?: z.infer<typeof ReplaceAllShapesWithSheetsChartRequestSchema>
  replaceAllText?: z.infer<typeof ReplaceAllTextRequestSchema>
  replaceImage?: z.infer<typeof ReplaceImageRequestSchema>
  rerouteLine?: z.infer<typeof RerouteLineRequestSchema>
  ungroupObjects?: z.infer<typeof UngroupObjectsRequestSchema>
  unmergeTableCells?: z.infer<typeof UnmergeTableCellsRequestSchema>
  updateImageProperties?: z.infer<typeof UpdateImagePropertiesRequestSchema>
  updateLineCategory?: z.infer<typeof UpdateLineCategoryRequestSchema>
  updateLineProperties?: z.infer<typeof UpdateLinePropertiesRequestSchema>
  updatePageElementAltText?: z.infer<typeof UpdatePageElementAltTextRequestSchema>
  updatePageElementTransform?: z.infer<typeof UpdatePageElementTransformRequestSchema>
  updatePageElementsZOrder?: z.infer<typeof UpdatePageElementsZOrderRequestSchema>
  updatePageProperties?: z.infer<typeof UpdatePagePropertiesRequestSchema>
  updateParagraphStyle?: z.infer<typeof UpdateParagraphStyleRequestSchema>
  updateShapeProperties?: z.infer<typeof UpdateShapePropertiesRequestSchema>
  updateSlideProperties?: z.infer<typeof UpdateSlidePropertiesRequestSchema>
  updateSlidesPosition?: z.infer<typeof UpdateSlidesPositionRequestSchema>
  updateTableBorderProperties?: z.infer<typeof UpdateTableBorderPropertiesRequestSchema>
  updateTableCellProperties?: z.infer<typeof UpdateTableCellPropertiesRequestSchema>
  updateTableColumnProperties?: z.infer<typeof UpdateTableColumnPropertiesRequestSchema>
  updateTableRowProperties?: z.infer<typeof UpdateTableRowPropertiesRequestSchema>
  updateTextStyle?: z.infer<typeof UpdateTextStyleRequestSchema>
  updateVideoProperties?: z.infer<typeof UpdateVideoPropertiesRequestSchema>
}

const CreateImageResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created image.' }),
  })
  .openapi({ description: 'The result of creating an image.', required: [] })
  .openapi('CreateImageResponse')

const CreateLineResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created line.' }),
  })
  .openapi({ description: 'The result of creating a line.', required: [] })
  .openapi('CreateLineResponse')

const CreateShapeResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created shape.' }),
  })
  .openapi({ description: 'The result of creating a shape.', required: [] })
  .openapi('CreateShapeResponse')

const CreateSheetsChartResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created chart.' }),
  })
  .openapi({ description: 'The result of creating an embedded Google Sheets chart.', required: [] })
  .openapi('CreateSheetsChartResponse')

const CreateSlideResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created slide.' }),
  })
  .openapi({ description: 'The result of creating a slide.', required: [] })
  .openapi('CreateSlideResponse')

const CreateTableResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created table.' }),
  })
  .openapi({ description: 'The result of creating a table.', required: [] })
  .openapi('CreateTableResponse')

const CreateVideoResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created video.' }),
  })
  .openapi({ description: 'The result of creating a video.', required: [] })
  .openapi('CreateVideoResponse')

const DuplicateObjectResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the new duplicate object.' }),
  })
  .openapi({ description: 'The response of duplicating an object.', required: [] })
  .openapi('DuplicateObjectResponse')

const GroupObjectsResponseSchema = z
  .object({
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object ID of the created group.' }),
  })
  .openapi({ description: 'The result of grouping objects.', required: [] })
  .openapi('GroupObjectsResponse')

const ReplaceAllShapesWithImageResponseSchema = z
  .object({
    occurrencesChanged: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of shapes replaced with images.' }),
  })
  .openapi({ description: 'The result of replacing shapes with an image.', required: [] })
  .openapi('ReplaceAllShapesWithImageResponse')

const ReplaceAllShapesWithSheetsChartResponseSchema = z
  .object({
    occurrencesChanged: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of shapes replaced with charts.' }),
  })
  .openapi({
    description: 'The result of replacing shapes with a Google Sheets chart.',
    required: [],
  })
  .openapi('ReplaceAllShapesWithSheetsChartResponse')

const ReplaceAllTextResponseSchema = z
  .object({
    occurrencesChanged: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of occurrences changed by replacing all text.' }),
  })
  .openapi({ description: 'The result of replacing text.', required: [] })
  .openapi('ReplaceAllTextResponse')

type ResponseType = {
  createImage?: z.infer<typeof CreateImageResponseSchema>
  createLine?: z.infer<typeof CreateLineResponseSchema>
  createShape?: z.infer<typeof CreateShapeResponseSchema>
  createSheetsChart?: z.infer<typeof CreateSheetsChartResponseSchema>
  createSlide?: z.infer<typeof CreateSlideResponseSchema>
  createTable?: z.infer<typeof CreateTableResponseSchema>
  createVideo?: z.infer<typeof CreateVideoResponseSchema>
  duplicateObject?: z.infer<typeof DuplicateObjectResponseSchema>
  groupObjects?: z.infer<typeof GroupObjectsResponseSchema>
  replaceAllShapesWithImage?: z.infer<typeof ReplaceAllShapesWithImageResponseSchema>
  replaceAllShapesWithSheetsChart?: z.infer<typeof ReplaceAllShapesWithSheetsChartResponseSchema>
  replaceAllText?: z.infer<typeof ReplaceAllTextResponseSchema>
}

const PageSchema: z.ZodType<PageType> = z
  .lazy(() =>
    z
      .object({
        layoutProperties: LayoutPropertiesSchema.exactOptional().openapi({
          description: 'Layout specific properties. Only set if page_type = LAYOUT.',
        }),
        masterProperties: MasterPropertiesSchema.exactOptional().openapi({
          description: 'Master specific properties. Only set if page_type = MASTER.',
        }),
        notesProperties: NotesPropertiesSchema.exactOptional().openapi({
          description: 'Notes specific properties. Only set if page_type = NOTES.',
        }),
        objectId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
          }),
        pageElements: z
          .array(PageElementSchema)
          .exactOptional()
          .openapi({ description: 'The page elements rendered on the page.' }),
        pageProperties: PagePropertiesSchema.exactOptional().openapi({
          description: 'The properties of the page.',
        }),
        pageType: z
          .enum(['SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'])
          .exactOptional()
          .openapi({ description: 'The type of the page.' }),
        revisionId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
          }),
        slideProperties: SlidePropertiesSchema.exactOptional().openapi({
          description: 'Slide specific properties. Only set if page_type = SLIDE.',
        }),
      })
      .openapi({ description: 'A page in a presentation.', required: [] }),
  )
  .openapi('Page')

type SlidePropertiesType = {
  isSkipped?: boolean
  layoutObjectId?: string
  masterObjectId?: string
  notesPage?: z.infer<typeof PageSchema>
}

const RequestSchema: z.ZodType<RequestType> = z
  .lazy(() =>
    z
      .object({
        createImage: CreateImageRequestSchema.exactOptional().openapi({
          description: 'Creates an image.',
        }),
        createLine: CreateLineRequestSchema.exactOptional().openapi({
          description: 'Creates a line.',
        }),
        createParagraphBullets: CreateParagraphBulletsRequestSchema.exactOptional().openapi({
          description: 'Creates bullets for paragraphs.',
        }),
        createShape: CreateShapeRequestSchema.exactOptional().openapi({
          description: 'Creates a new shape.',
        }),
        createSheetsChart: CreateSheetsChartRequestSchema.exactOptional().openapi({
          description: 'Creates an embedded Google Sheets chart.',
        }),
        createSlide: CreateSlideRequestSchema.exactOptional().openapi({
          description: 'Creates a new slide.',
        }),
        createTable: CreateTableRequestSchema.exactOptional().openapi({
          description: 'Creates a new table.',
        }),
        createVideo: CreateVideoRequestSchema.exactOptional().openapi({
          description: 'Creates a video.',
        }),
        deleteObject: DeleteObjectRequestSchema.exactOptional().openapi({
          description: 'Deletes a page or page element from the presentation.',
        }),
        deleteParagraphBullets: DeleteParagraphBulletsRequestSchema.exactOptional().openapi({
          description: 'Deletes bullets from paragraphs.',
        }),
        deleteTableColumn: DeleteTableColumnRequestSchema.exactOptional().openapi({
          description: 'Deletes a column from a table.',
        }),
        deleteTableRow: DeleteTableRowRequestSchema.exactOptional().openapi({
          description: 'Deletes a row from a table.',
        }),
        deleteText: DeleteTextRequestSchema.exactOptional().openapi({
          description: 'Deletes text from a shape or a table cell.',
        }),
        duplicateObject: DuplicateObjectRequestSchema.exactOptional().openapi({
          description: 'Duplicates a slide or page element.',
        }),
        groupObjects: GroupObjectsRequestSchema.exactOptional().openapi({
          description: 'Groups objects, such as page elements.',
        }),
        insertTableColumns: InsertTableColumnsRequestSchema.exactOptional().openapi({
          description: 'Inserts columns into a table.',
        }),
        insertTableRows: InsertTableRowsRequestSchema.exactOptional().openapi({
          description: 'Inserts rows into a table.',
        }),
        insertText: InsertTextRequestSchema.exactOptional().openapi({
          description: 'Inserts text into a shape or table cell.',
        }),
        mergeTableCells: MergeTableCellsRequestSchema.exactOptional().openapi({
          description: 'Merges cells in a Table.',
        }),
        refreshSheetsChart: RefreshSheetsChartRequestSchema.exactOptional().openapi({
          description: 'Refreshes a Google Sheets chart.',
        }),
        replaceAllShapesWithImage: ReplaceAllShapesWithImageRequestSchema.exactOptional().openapi({
          description: 'Replaces all shapes matching some criteria with an image.',
        }),
        replaceAllShapesWithSheetsChart:
          ReplaceAllShapesWithSheetsChartRequestSchema.exactOptional().openapi({
            description: 'Replaces all shapes matching some criteria with a Google Sheets chart.',
          }),
        replaceAllText: ReplaceAllTextRequestSchema.exactOptional().openapi({
          description: 'Replaces all instances of specified text.',
        }),
        replaceImage: ReplaceImageRequestSchema.exactOptional().openapi({
          description: 'Replaces an existing image with a new image.',
        }),
        rerouteLine: RerouteLineRequestSchema.exactOptional().openapi({
          description:
            "Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.",
        }),
        ungroupObjects: UngroupObjectsRequestSchema.exactOptional().openapi({
          description: 'Ungroups objects, such as groups.',
        }),
        unmergeTableCells: UnmergeTableCellsRequestSchema.exactOptional().openapi({
          description: 'Unmerges cells in a Table.',
        }),
        updateImageProperties: UpdateImagePropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of an Image.',
        }),
        updateLineCategory: UpdateLineCategoryRequestSchema.exactOptional().openapi({
          description: 'Updates the category of a line.',
        }),
        updateLineProperties: UpdateLinePropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Line.',
        }),
        updatePageElementAltText: UpdatePageElementAltTextRequestSchema.exactOptional().openapi({
          description: 'Updates the alt text title and/or description of a page element.',
        }),
        updatePageElementTransform: UpdatePageElementTransformRequestSchema.exactOptional().openapi(
          { description: 'Updates the transform of a page element.' },
        ),
        updatePageElementsZOrder: UpdatePageElementsZOrderRequestSchema.exactOptional().openapi({
          description: 'Updates the Z-order of page elements.',
        }),
        updatePageProperties: UpdatePagePropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Page.',
        }),
        updateParagraphStyle: UpdateParagraphStyleRequestSchema.exactOptional().openapi({
          description: 'Updates the styling of paragraphs within a Shape or Table.',
        }),
        updateShapeProperties: UpdateShapePropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Shape.',
        }),
        updateSlideProperties: UpdateSlidePropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Slide',
        }),
        updateSlidesPosition: UpdateSlidesPositionRequestSchema.exactOptional().openapi({
          description: 'Updates the position of a set of slides in the presentation.',
        }),
        updateTableBorderProperties:
          UpdateTableBorderPropertiesRequestSchema.exactOptional().openapi({
            description: 'Updates the properties of the table borders in a Table.',
          }),
        updateTableCellProperties: UpdateTableCellPropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a TableCell.',
        }),
        updateTableColumnProperties:
          UpdateTableColumnPropertiesRequestSchema.exactOptional().openapi({
            description: 'Updates the properties of a Table column.',
          }),
        updateTableRowProperties: UpdateTableRowPropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Table row.',
        }),
        updateTextStyle: UpdateTextStyleRequestSchema.exactOptional().openapi({
          description: 'Updates the styling of text within a Shape or Table.',
        }),
        updateVideoProperties: UpdateVideoPropertiesRequestSchema.exactOptional().openapi({
          description: 'Updates the properties of a Video.',
        }),
      })
      .openapi({
        description: 'A single kind of update to apply to a presentation.',
        required: [],
      }),
  )
  .openapi('Request')

const WriteControlSchema = z
  .object({
    requiredRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.",
      }),
  })
  .openapi({ description: 'Provides control over how write requests are executed.', required: [] })
  .openapi('WriteControl')

const BatchUpdatePresentationRequestSchema = z
  .object({
    requests: z
      .array(RequestSchema)
      .exactOptional()
      .openapi({ description: 'A list of updates to apply to the presentation.' }),
    writeControl: WriteControlSchema.exactOptional().openapi({
      description: 'Provides control over how write requests are executed.',
    }),
  })
  .openapi({
    description: 'Request message for PresentationsService.BatchUpdatePresentation.',
    required: [],
  })
  .openapi('BatchUpdatePresentationRequest')

const ResponseSchema: z.ZodType<ResponseType> = z
  .lazy(() =>
    z
      .object({
        createImage: CreateImageResponseSchema.exactOptional().openapi({
          description: 'The result of creating an image.',
        }),
        createLine: CreateLineResponseSchema.exactOptional().openapi({
          description: 'The result of creating a line.',
        }),
        createShape: CreateShapeResponseSchema.exactOptional().openapi({
          description: 'The result of creating a shape.',
        }),
        createSheetsChart: CreateSheetsChartResponseSchema.exactOptional().openapi({
          description: 'The result of creating a Google Sheets chart.',
        }),
        createSlide: CreateSlideResponseSchema.exactOptional().openapi({
          description: 'The result of creating a slide.',
        }),
        createTable: CreateTableResponseSchema.exactOptional().openapi({
          description: 'The result of creating a table.',
        }),
        createVideo: CreateVideoResponseSchema.exactOptional().openapi({
          description: 'The result of creating a video.',
        }),
        duplicateObject: DuplicateObjectResponseSchema.exactOptional().openapi({
          description: 'The result of duplicating an object.',
        }),
        groupObjects: GroupObjectsResponseSchema.exactOptional().openapi({
          description: 'The result of grouping objects.',
        }),
        replaceAllShapesWithImage: ReplaceAllShapesWithImageResponseSchema.exactOptional().openapi({
          description: 'The result of replacing all shapes matching some criteria with an image.',
        }),
        replaceAllShapesWithSheetsChart:
          ReplaceAllShapesWithSheetsChartResponseSchema.exactOptional().openapi({
            description:
              'The result of replacing all shapes matching some criteria with a Google Sheets chart.',
          }),
        replaceAllText: ReplaceAllTextResponseSchema.exactOptional().openapi({
          description: 'The result of replacing text.',
        }),
      })
      .openapi({ description: 'A single response from an update.', required: [] }),
  )
  .openapi('Response')

const BatchUpdatePresentationResponseSchema = z
  .object({
    presentationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The presentation the updates were applied to.' }),
    replies: z
      .array(ResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.',
      }),
    writeControl: WriteControlSchema.exactOptional().openapi({
      description: 'The updated write control after applying the request.',
    }),
  })
  .openapi({ description: 'Response message from a batch update.', required: [] })
  .openapi('BatchUpdatePresentationResponse')

const PresentationSchema = z
  .object({
    layouts: z
      .array(PageSchema)
      .exactOptional()
      .openapi({
        description:
          'The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout.',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the presentation, as an IETF BCP 47 language tag.' }),
    masters: z
      .array(PageSchema)
      .exactOptional()
      .openapi({
        description:
          'The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout.',
      }),
    notesMaster: PageSchema.exactOptional().openapi({
      description:
        'The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only.',
    }),
    pageSize: SizeSchema.exactOptional().openapi({
      description: 'The size of pages in the presentation.',
    }),
    presentationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the presentation.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
      }),
    slides: z
      .array(PageSchema)
      .exactOptional()
      .openapi({
        description:
          'The slides in the presentation. A slide inherits properties from a slide layout.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the presentation.' }),
  })
  .openapi({ description: 'A Google Slides presentation.', required: [] })
  .openapi('Presentation')

const ThumbnailSchema = z
  .object({
    contentUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`.",
      }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The positive height in pixels of the thumbnail image.' }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The positive width in pixels of the thumbnail image.' }),
  })
  .openapi({ description: 'The thumbnail of a page.', required: [] })
  .openapi('Thumbnail')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/presentations':
          'See, edit, create, and delete all your Google Slides presentations',
        'https://www.googleapis.com/auth/presentations.readonly':
          'See all your Google Slides presentations',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly':
          'See all your Google Sheets spreadsheets',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/presentations':
          'See, edit, create, and delete all your Google Slides presentations',
        'https://www.googleapis.com/auth/presentations.readonly':
          'See all your Google Slides presentations',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly':
          'See all your Google Sheets spreadsheets',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1PresentationsRoute = createRoute({
  method: 'post',
  path: '/v1/presentations',
  tags: ['presentations'],
  description:
    'Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.',
  operationId: 'slides.presentations.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: PresentationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PresentationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations'],
    },
  ],
})

export const getV1PresentationsPresentationIdRoute = createRoute({
  method: 'get',
  path: '/v1/presentations/{presentationId}',
  tags: ['presentations'],
  description: 'Gets the latest version of the specified presentation.',
  operationId: 'slides.presentations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      presentationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the presentation to retrieve.',
            in: 'path',
            name: 'presentationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PresentationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations.readonly'],
    },
  ],
})

export const getV1PresentationsPresentationIdPagesPageObjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/presentations/{presentationId}/pages/{pageObjectId}',
  tags: ['presentations'],
  description: 'Gets the latest version of the specified page in the presentation.',
  operationId: 'slides.presentations.pages.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      presentationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the presentation to retrieve.',
            in: 'path',
            name: 'presentationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pageObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the page to retrieve.',
            in: 'path',
            name: 'pageObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations.readonly'],
    },
  ],
})

export const getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail',
  tags: ['presentations'],
  description:
    'Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.',
  operationId: 'slides.presentations.pages.getThumbnail',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'thumbnailProperties.mimeType': z
        .literal('PNG')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.",
            in: 'query',
            name: 'thumbnailProperties.mimeType',
            schema: { enum: ['PNG'], type: 'string' },
            required: false,
          },
        }),
      'thumbnailProperties.thumbnailSize': z
        .enum(['THUMBNAIL_SIZE_UNSPECIFIED', 'LARGE', 'MEDIUM', 'SMALL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.",
            in: 'query',
            name: 'thumbnailProperties.thumbnailSize',
            schema: {
              enum: ['THUMBNAIL_SIZE_UNSPECIFIED', 'LARGE', 'MEDIUM', 'SMALL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      presentationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the presentation to retrieve.',
            in: 'path',
            name: 'presentationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pageObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the page whose thumbnail to retrieve.',
            in: 'path',
            name: 'pageObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThumbnailSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations.readonly'],
    },
  ],
})

export const postV1PresentationsPresentationIdBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/presentations/{presentationId}:batchUpdate',
  tags: ['presentations'],
  description:
    'Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.',
  operationId: 'slides.presentations.batchUpdate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      presentationId: z
        .string()
        .openapi({
          param: {
            description: 'The presentation to apply the updates to.',
            in: 'path',
            name: 'presentationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdatePresentationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdatePresentationResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/presentations'],
      Oauth2c: ['https://www.googleapis.com/auth/presentations'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    },
  ],
})
