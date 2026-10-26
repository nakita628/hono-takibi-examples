import { createRoute, z } from '@hono/zod-openapi'

type VariableAliasType = { type: 'VARIABLE_ALIAS'; id: string }

const VariableAliasSchema: z.ZodType<VariableAliasType> = z
  .object({
    type: z.literal('VARIABLE_ALIAS'),
    id: z
      .string()
      .openapi({
        description:
          'The id of the variable that the current variable is aliased to. This variable can be a local or remote variable, and both can be retrieved via the GET /v1/files/:file_key/variables/local endpoint.',
      }),
  })
  .openapi({ description: 'Contains a variable alias', required: ['type', 'id'] })
  .openapi('VariableAlias')

type IsLayerTraitType = {
  id: string
  name: string
  type: string
  visible?: boolean
  locked?: boolean
  isFixed?: boolean
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number
  componentPropertyReferences?: { [key: string]: string }
  pluginData?: { [key: string]: unknown }
  sharedPluginData?: { [key: string]: unknown }
  boundVariables?: {
    size?: { x?: z.infer<typeof VariableAliasSchema>; y?: z.infer<typeof VariableAliasSchema> }
    individualStrokeWeights?: {
      top?: z.infer<typeof VariableAliasSchema>
      bottom?: z.infer<typeof VariableAliasSchema>
      left?: z.infer<typeof VariableAliasSchema>
      right?: z.infer<typeof VariableAliasSchema>
    }
    characters?: z.infer<typeof VariableAliasSchema>
    itemSpacing?: z.infer<typeof VariableAliasSchema>
    paddingLeft?: z.infer<typeof VariableAliasSchema>
    paddingRight?: z.infer<typeof VariableAliasSchema>
    paddingTop?: z.infer<typeof VariableAliasSchema>
    paddingBottom?: z.infer<typeof VariableAliasSchema>
    visible?: z.infer<typeof VariableAliasSchema>
    topLeftRadius?: z.infer<typeof VariableAliasSchema>
    topRightRadius?: z.infer<typeof VariableAliasSchema>
    bottomLeftRadius?: z.infer<typeof VariableAliasSchema>
    bottomRightRadius?: z.infer<typeof VariableAliasSchema>
    minWidth?: z.infer<typeof VariableAliasSchema>
    maxWidth?: z.infer<typeof VariableAliasSchema>
    minHeight?: z.infer<typeof VariableAliasSchema>
    maxHeight?: z.infer<typeof VariableAliasSchema>
    counterAxisSpacing?: z.infer<typeof VariableAliasSchema>
    opacity?: z.infer<typeof VariableAliasSchema>
    fontFamily?: z.infer<typeof VariableAliasSchema>[]
    fontSize?: z.infer<typeof VariableAliasSchema>[]
    fontStyle?: z.infer<typeof VariableAliasSchema>[]
    fontWeight?: z.infer<typeof VariableAliasSchema>[]
    letterSpacing?: z.infer<typeof VariableAliasSchema>[]
    lineHeight?: z.infer<typeof VariableAliasSchema>[]
    paragraphSpacing?: z.infer<typeof VariableAliasSchema>[]
    paragraphIndent?: z.infer<typeof VariableAliasSchema>[]
    fills?: z.infer<typeof VariableAliasSchema>[]
    strokes?: z.infer<typeof VariableAliasSchema>[]
    componentProperties?: { [key: string]: z.infer<typeof VariableAliasSchema> }
    textRangeFills?: z.infer<typeof VariableAliasSchema>[]
    effects?: z.infer<typeof VariableAliasSchema>[]
    layoutGrids?: z.infer<typeof VariableAliasSchema>[]
    rectangleCornerRadii?: {
      RECTANGLE_TOP_LEFT_CORNER_RADIUS?: z.infer<typeof VariableAliasSchema>
      RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: z.infer<typeof VariableAliasSchema>
      RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: z.infer<typeof VariableAliasSchema>
      RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: z.infer<typeof VariableAliasSchema>
    }
  }
  explicitVariableModes?: { [key: string]: string }
}

const SubcanvasNodeSchema: z.ZodType<SubcanvasNodeType> = z
  .lazy(() =>
    z
      .xor([
        BooleanOperationNodeSchema,
        ComponentNodeSchema,
        ComponentSetNodeSchema,
        ConnectorNodeSchema,
        EllipseNodeSchema,
        EmbedNodeSchema,
        FrameNodeSchema,
        GroupNodeSchema,
        InstanceNodeSchema,
        LineNodeSchema,
        LinkUnfurlNodeSchema,
        RectangleNodeSchema,
        RegularPolygonNodeSchema,
        SectionNodeSchema,
        ShapeWithTextNodeSchema,
        SliceNodeSchema,
        StarNodeSchema,
        StickyNodeSchema,
        TableNodeSchema,
        TableCellNodeSchema,
        TextNodeSchema,
        TextPathNodeSchema,
        TransformGroupNodeSchema,
        VectorNodeSchema,
        WashiTapeNodeSchema,
        WidgetNodeSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            BOOLEAN_OPERATION: '#/components/schemas/BooleanOperationNode',
            COMPONENT: '#/components/schemas/ComponentNode',
            COMPONENT_SET: '#/components/schemas/ComponentSetNode',
            CONNECTOR: '#/components/schemas/ConnectorNode',
            ELLIPSE: '#/components/schemas/EllipseNode',
            EMBED: '#/components/schemas/EmbedNode',
            FRAME: '#/components/schemas/FrameNode',
            GROUP: '#/components/schemas/GroupNode',
            INSTANCE: '#/components/schemas/InstanceNode',
            LINE: '#/components/schemas/LineNode',
            LINK_UNFURL: '#/components/schemas/LinkUnfurlNode',
            RECTANGLE: '#/components/schemas/RectangleNode',
            REGULAR_POLYGON: '#/components/schemas/RegularPolygonNode',
            SECTION: '#/components/schemas/SectionNode',
            SHAPE_WITH_TEXT: '#/components/schemas/ShapeWithTextNode',
            SLICE: '#/components/schemas/SliceNode',
            STAR: '#/components/schemas/StarNode',
            STICKY: '#/components/schemas/StickyNode',
            TABLE: '#/components/schemas/TableNode',
            TABLE_CELL: '#/components/schemas/TableCellNode',
            TEXT: '#/components/schemas/TextNode',
            TEXT_PATH: '#/components/schemas/TextPathNode',
            TRANSFORM_GROUP: '#/components/schemas/TransformGroupNode',
            VECTOR: '#/components/schemas/VectorNode',
            WASHI_TAPE: '#/components/schemas/WashiTapeNode',
            WIDGET: '#/components/schemas/WidgetNode',
          },
        },
      }),
  )
  .openapi('SubcanvasNode')

type HasChildrenTraitType = { children: z.infer<typeof SubcanvasNodeSchema>[] }

const RectangleSchema = z
  .object({
    x: z.number().openapi({ description: 'X coordinate of top left corner of the rectangle.' }),
    y: z.number().openapi({ description: 'Y coordinate of top left corner of the rectangle.' }),
    width: z.number().openapi({ description: 'Width of the rectangle.' }),
    height: z.number().openapi({ description: 'Height of the rectangle.' }),
  })
  .openapi({
    description: 'A rectangle that expresses a bounding box in absolute coordinates.',
    required: ['x', 'y', 'width', 'height'],
  })
  .openapi('Rectangle')

const LayoutConstraintSchema = z
  .object({
    vertical: z
      .enum(['TOP', 'BOTTOM', 'CENTER', 'TOP_BOTTOM', 'SCALE'])
      .openapi({
        description:
          'Vertical constraint (relative to containing frame) as an enum:\n\n- `TOP`: Node is laid out relative to top of the containing frame\n- `BOTTOM`: Node is laid out relative to bottom of the containing frame\n- `CENTER`: Node is vertically centered relative to containing frame\n- `TOP_BOTTOM`: Both top and bottom of node are constrained relative to containing frame (node stretches with frame)\n- `SCALE`: Node scales vertically with containing frame',
      }),
    horizontal: z
      .enum(['LEFT', 'RIGHT', 'CENTER', 'LEFT_RIGHT', 'SCALE'])
      .openapi({
        description:
          'Horizontal constraint (relative to containing frame) as an enum:\n\n- `LEFT`: Node is laid out relative to left of the containing frame\n- `RIGHT`: Node is laid out relative to right of the containing frame\n- `CENTER`: Node is horizontally centered relative to containing frame\n- `LEFT_RIGHT`: Both left and right of node are constrained relative to containing frame (node stretches with frame)\n- `SCALE`: Node scales horizontally with containing frame',
      }),
  })
  .openapi({
    description: 'Layout constraint relative to containing Frame',
    required: ['vertical', 'horizontal'],
  })
  .openapi('LayoutConstraint')

const TransformSchema = z
  .array(z.array(z.number()).length(3))
  .length(2)
  .openapi({
    description:
      'A transformation matrix is standard way in computer graphics to represent translation and rotation. These are the top two rows of a 3x3 matrix. The bottom row of the matrix is assumed to be [0, 0, 1]. This is known as an affine transform and is enough to represent translation, rotation, and skew.\n\nThe identity transform is [[1, 0, 0], [0, 1, 0]].\n\nA translation matrix will typically look like:\n\n```\n[[1, 0, tx],\n  [0, 1, ty]]\n```\n\nand a rotation matrix will typically look like:\n\n```\n[[cos(angle), sin(angle), 0],\n  [-sin(angle), cos(angle), 0]]\n```\n\nAnother way to think about this transform is as three vectors:\n\n- The x axis (t[0][0], t[1][0])\n- The y axis (t[0][1], t[1][1])\n- The translation offset (t[0][2], t[1][2])\n\nThe most common usage of the Transform matrix is the `relativeTransform property`. This particular usage of the matrix has a few additional restrictions. The translation offset can take on any value but we do enforce that the axis vectors are unit vectors (i.e. have length 1). The axes are not required to be at 90° angles to each other.',
  })
  .openapi('Transform')

const VectorSchema = z
  .object({
    x: z.number().openapi({ description: 'X coordinate of the vector.' }),
    y: z.number().openapi({ description: 'Y coordinate of the vector.' }),
  })
  .openapi({ description: 'A 2d vector.', required: ['x', 'y'] })
  .openapi('Vector')

type HasLayoutTraitType = {
  absoluteBoundingBox: z.infer<typeof RectangleSchema> | ({ [key: string]: unknown } | null)
  absoluteRenderBounds: z.infer<typeof RectangleSchema> | ({ [key: string]: unknown } | null)
  preserveRatio?: boolean
  constraints?: z.infer<typeof LayoutConstraintSchema>
  relativeTransform?: z.infer<typeof TransformSchema>
  size?: z.infer<typeof VectorSchema>
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX'
  layoutGrow?: 0 | 1
  layoutPositioning?: 'AUTO' | 'ABSOLUTE'
  minWidth?: number
  maxWidth?: number
  minHeight?: number
  maxHeight?: number
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL'
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL'
  gridRowCount?: number
  gridColumnCount?: number
  gridRowGap?: number
  gridColumnGap?: number
  gridColumnsSizing?: string
  gridRowsSizing?: string
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX'
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX'
  gridRowSpan?: number
  gridColumnSpan?: number
  gridRowAnchorIndex?: number
  gridColumnAnchorIndex?: number
}

const PaintSchema: z.ZodType<PaintType> = z
  .lazy(() => z.xor([SolidPaintSchema, GradientPaintSchema, ImagePaintSchema, PatternPaintSchema]))
  .openapi('Paint')

type RGBAType = { r: number; g: number; b: number; a: number }

const RGBASchema: z.ZodType<RGBAType> = z
  .object({
    r: z.number().min(0).max(1).openapi({ description: 'Red channel value, between 0 and 1.' }),
    g: z.number().min(0).max(1).openapi({ description: 'Green channel value, between 0 and 1.' }),
    b: z.number().min(0).max(1).openapi({ description: 'Blue channel value, between 0 and 1.' }),
    a: z.number().min(0).max(1).openapi({ description: 'Alpha channel value, between 0 and 1.' }),
  })
  .openapi({ description: 'An RGBA color', required: ['r', 'g', 'b', 'a'] })
  .openapi('RGBA')

const LayoutGridSchema = z
  .object({
    pattern: z
      .enum(['COLUMNS', 'ROWS', 'GRID'])
      .openapi({
        description:
          'Orientation of the grid as a string enum\n\n- `COLUMNS`: Vertical grid\n- `ROWS`: Horizontal grid\n- `GRID`: Square grid',
      }),
    sectionSize: z
      .number()
      .openapi({
        description: 'Width of column grid or height of row grid or square grid spacing.',
      }),
    visible: z.boolean().openapi({ description: 'Is the grid currently visible?' }),
    color: RGBASchema.openapi({ description: 'Color of the grid' }),
    alignment: z
      .enum(['MIN', 'MAX', 'STRETCH', 'CENTER'])
      .openapi({
        description:
          'Positioning of grid as a string enum\n\n- `MIN`: Grid starts at the left or top of the frame\n- `MAX`: Grid starts at the right or bottom of the frame\n- `STRETCH`: Grid is stretched to fit the frame\n- `CENTER`: Grid is center aligned',
      }),
    gutterSize: z.number().openapi({ description: 'Spacing in between columns and rows' }),
    offset: z.number().openapi({ description: 'Spacing before the first column or row' }),
    count: z.number().openapi({ description: 'Number of columns or rows' }),
    boundVariables: z
      .object({
        gutterSize: VariableAliasSchema.exactOptional(),
        numSections: VariableAliasSchema.exactOptional(),
        sectionSize: VariableAliasSchema.exactOptional(),
        offset: VariableAliasSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this layout grid',
        required: [],
      }),
  })
  .openapi({
    description: 'Guides to align and place objects within a frames.',
    required: [
      'pattern',
      'sectionSize',
      'visible',
      'color',
      'alignment',
      'gutterSize',
      'offset',
      'count',
    ],
  })
  .openapi('LayoutGrid')

type HasFramePropertiesTraitType = {
  clipsContent: boolean
  background?: z.infer<typeof PaintSchema>[]
  backgroundColor?: z.infer<typeof RGBASchema>
  layoutGrids?: z.infer<typeof LayoutGridSchema>[]
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID'
  primaryAxisSizingMode?: 'FIXED' | 'AUTO'
  counterAxisSizingMode?: 'FIXED' | 'AUTO'
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE'
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  itemSpacing?: number
  itemReverseZIndex?: boolean
  strokesIncludedInLayout?: boolean
  layoutWrap?: 'NO_WRAP' | 'WRAP'
  counterAxisSpacing?: number
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN'
}

const BlendModeSchema = z
  .enum([
    'PASS_THROUGH',
    'NORMAL',
    'DARKEN',
    'MULTIPLY',
    'LINEAR_BURN',
    'COLOR_BURN',
    'LIGHTEN',
    'SCREEN',
    'LINEAR_DODGE',
    'COLOR_DODGE',
    'OVERLAY',
    'SOFT_LIGHT',
    'HARD_LIGHT',
    'DIFFERENCE',
    'EXCLUSION',
    'HUE',
    'SATURATION',
    'COLOR',
    'LUMINOSITY',
  ])
  .openapi({
    description:
      'This type is a string enum with the following possible values\n\nNormal blends:\n- `PASS_THROUGH` (only applicable to objects with children)\n- `NORMAL`\n\nDarken:\n- `DARKEN`\n- `MULTIPLY`\n- `LINEAR_BURN`\n- `COLOR_BURN`\n\nLighten:\n- `LIGHTEN`\n- `SCREEN`\n- `LINEAR_DODGE`\n- `COLOR_DODGE`\n\nContrast:\n- `OVERLAY`\n- `SOFT_LIGHT`\n- `HARD_LIGHT`\n\nInversion:\n- `DIFFERENCE`\n- `EXCLUSION`\n\nComponent:\n- `HUE`\n- `SATURATION`\n- `COLOR`\n- `LUMINOSITY`',
  })
  .openapi('BlendMode')

type HasBlendModeAndOpacityTraitType = {
  blendMode: z.infer<typeof BlendModeSchema>
  opacity?: number
}

const ConstraintSchema = z
  .object({
    type: z
      .enum(['SCALE', 'WIDTH', 'HEIGHT'])
      .openapi({
        description:
          'Type of constraint to apply:\n\n- `SCALE`: Scale by `value`.\n- `WIDTH`: Scale proportionally and set width to `value`.\n- `HEIGHT`: Scale proportionally and set height to `value`.',
      }),
    value: z.number().openapi({ description: 'See type property for effect of this field.' }),
  })
  .openapi({ description: 'Sizing constraint for exports.', required: ['type', 'value'] })
  .openapi('Constraint')

const ExportSettingSchema = z
  .object({
    suffix: z.string(),
    format: z.enum(['JPG', 'PNG', 'SVG', 'PDF']),
    constraint: ConstraintSchema,
  })
  .openapi({ description: 'An export setting.', required: ['suffix', 'format', 'constraint'] })
  .openapi('ExportSetting')

type HasExportSettingsTraitType = { exportSettings?: z.infer<typeof ExportSettingSchema>[] }

const MinimalFillsTraitSchema = z
  .object({
    fills: z
      .array(PaintSchema)
      .openapi({ description: 'An array of fill paints applied to the node.' }),
    styles: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.',
      }),
  })
  .openapi({ required: ['fills'] })
  .openapi('MinimalFillsTrait')

type MinimalStrokesTraitType = {
  strokes?: z.infer<typeof PaintSchema>[]
  strokeWeight?: number
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER'
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND'
  strokeDashes?: number[]
}

const MinimalStrokesTraitSchema: z.ZodType<MinimalStrokesTraitType> = z
  .object({
    strokes: z
      .array(PaintSchema)
      .exactOptional()
      .openapi({ description: 'An array of stroke paints applied to the node.' }),
    strokeWeight: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({ description: 'The weight of strokes on the node.' }),
    strokeAlign: z
      .enum(['INSIDE', 'OUTSIDE', 'CENTER'])
      .exactOptional()
      .openapi({
        description:
          'Position of stroke relative to vector outline, as a string enum\n\n- `INSIDE`: stroke drawn inside the shape boundary\n- `OUTSIDE`: stroke drawn outside the shape boundary\n- `CENTER`: stroke drawn centered along the shape boundary',
      }),
    strokeJoin: z
      .enum(['MITER', 'BEVEL', 'ROUND'])
      .default('MITER')
      .exactOptional()
      .openapi({
        description:
          'A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.',
      }),
    strokeDashes: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.\n\nFor example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MinimalStrokesTrait')

const PaintOverrideSchema = z
  .object({
    fills: z
      .array(PaintSchema)
      .exactOptional()
      .openapi({ description: 'Paints applied to characters.' }),
    inheritFillStyleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of style node, if any, that this inherits fill data from.' }),
  })
  .openapi({ description: 'Paint metadata to override default paints.', required: [] })
  .openapi('PaintOverride')

const PathSchema = z
  .object({
    path: z
      .string()
      .openapi({ description: 'A series of path commands that encodes how to draw the path.' }),
    windingRule: z
      .enum(['NONZERO', 'EVENODD'])
      .openapi({
        description:
          'The winding rule for the path (same as in SVGs). This determines whether a given point in space is inside or outside the path.',
      }),
    overrideID: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'If there is a per-region fill, this refers to an ID in the `fillOverrideTable`.',
      }),
  })
  .openapi({ description: 'Defines a single path', required: ['path', 'windingRule'] })
  .openapi('Path')

type HasGeometryTraitType = z.infer<typeof MinimalFillsTraitSchema> &
  z.infer<typeof MinimalStrokesTraitSchema> & {
    fillOverrideTable?: {
      [key: string]: z.infer<typeof PaintOverrideSchema> | ({ [key: string]: unknown } | null)
    }
    fillGeometry?: z.infer<typeof PathSchema>[]
    strokeGeometry?: z.infer<typeof PathSchema>[]
    strokeCap?:
      | 'NONE'
      | 'ROUND'
      | 'SQUARE'
      | 'LINE_ARROW'
      | 'TRIANGLE_ARROW'
      | 'DIAMOND_FILLED'
      | 'CIRCLE_FILLED'
      | 'TRIANGLE_FILLED'
      | 'WASHI_TAPE_1'
      | 'WASHI_TAPE_2'
      | 'WASHI_TAPE_3'
      | 'WASHI_TAPE_4'
      | 'WASHI_TAPE_5'
      | 'WASHI_TAPE_6'
    strokeMiterAngle?: number
  }

const StrokeWeightsSchema = z
  .object({
    top: z.number().openapi({ description: 'The top stroke weight.' }),
    right: z.number().openapi({ description: 'The right stroke weight.' }),
    bottom: z.number().openapi({ description: 'The bottom stroke weight.' }),
    left: z.number().openapi({ description: 'The left stroke weight.' }),
  })
  .openapi({
    description: 'Individual stroke weights',
    required: ['top', 'right', 'bottom', 'left'],
  })
  .openapi('StrokeWeights')

type IndividualStrokesTraitType = { individualStrokeWeights?: z.infer<typeof StrokeWeightsSchema> }

type VariableWidthStrokesTraitType = { [key: string]: unknown }

type ComplexStrokesTraitType = { [key: string]: unknown }

type CornerTraitType = {
  cornerRadius?: number
  cornerSmoothing?: number
  rectangleCornerRadii?: number[]
}

const EffectSchema: z.ZodType<EffectType> = z
  .lazy(() =>
    z
      .xor([
        DropShadowEffectSchema,
        InnerShadowEffectSchema,
        BlurEffectSchema,
        TextureEffectSchema,
        NoiseEffectSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            DROP_SHADOW: '#/components/schemas/DropShadowEffect',
            INNER_SHADOW: '#/components/schemas/InnerShadowEffect',
            LAYER_BLUR: '#/components/schemas/BlurEffect',
            BACKGROUND_BLUR: '#/components/schemas/BlurEffect',
            TEXTURE: '#/components/schemas/TextureEffect',
            NOISE: '#/components/schemas/NoiseEffect',
          },
        },
      }),
  )
  .openapi('Effect')

type HasEffectsTraitType = { effects: z.infer<typeof EffectSchema>[] }

type HasMaskTraitType = {
  isMask?: boolean
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE'
  isMaskOutline?: boolean
}

const ComponentPropertyTypeSchema = z
  .enum(['BOOLEAN', 'INSTANCE_SWAP', 'TEXT', 'VARIANT', 'SLOT'])
  .openapi({ description: 'Component property type.' })
  .openapi('ComponentPropertyType')

const SlotContentIdSchema = z
  .object({
    guid: z
      .object({ sessionID: z.int(), localID: z.int() })
      .openapi({
        description: 'Identifier for the slot content.',
        required: ['sessionID', 'localID'],
      }),
  })
  .openapi({
    description: 'Identifier for the content of a slot component property.',
    required: ['guid'],
  })
  .openapi('SlotContentId')

const InstanceSwapPreferredValueSchema = z
  .object({
    type: z
      .enum(['COMPONENT', 'COMPONENT_SET'])
      .openapi({ description: 'Type of node for this preferred value.' }),
    key: z.string().openapi({ description: 'Key of this component or component set.' }),
  })
  .openapi({ description: 'Instance swap preferred value.', required: ['type', 'key'] })
  .openapi('InstanceSwapPreferredValue')

const SlotSettingsSchema = z
  .object({
    stretchChildOnInsert: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether layers inserted into the slot fill its counter axis.' }),
    displayEmptyByDefault: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether an empty slot is shown by default.' }),
    minChildren: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Minimum number of children allowed in the slot. null means no minimum.',
      }),
    maxChildren: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Maximum number of children allowed in the slot. null means no maximum.',
      }),
    allowPreferredValuesOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether slot contents are limited to preferred values.' }),
  })
  .openapi({
    description: 'Slot-specific configuration for a SLOT component property.',
    required: [],
  })
  .openapi('SlotSettings')

const ComponentPropertyDefinitionSchema = z
  .object({
    type: ComponentPropertyTypeSchema.openapi({ description: 'Type of this component property.' }),
    defaultValue: z
      .xor([z.boolean(), z.string(), SlotContentIdSchema])
      .openapi({ description: 'Initial value of this property for instances.' }),
    variantOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'All possible values for this property. Only exists on VARIANT properties.',
      }),
    preferredValues: z
      .array(InstanceSwapPreferredValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Preferred values for this property. Only applicable if type is `INSTANCE_SWAP` or `SLOT`.',
      }),
    slotSettings: SlotSettingsSchema.exactOptional().openapi({
      description: 'Settings for a SLOT property.',
    }),
  })
  .openapi({ description: 'A property of a component.', required: ['type', 'defaultValue'] })
  .openapi('ComponentPropertyDefinition')

type ComponentPropertiesTraitType = {
  componentPropertyDefinitions?: {
    [key: string]: z.infer<typeof ComponentPropertyDefinitionSchema>
  }
}

const EasingTypeSchema = z
  .enum([
    'EASE_IN',
    'EASE_OUT',
    'EASE_IN_AND_OUT',
    'LINEAR',
    'EASE_IN_BACK',
    'EASE_OUT_BACK',
    'EASE_IN_AND_OUT_BACK',
    'CUSTOM_CUBIC_BEZIER',
    'GENTLE',
    'QUICK',
    'BOUNCY',
    'SLOW',
    'CUSTOM_SPRING',
  ])
  .openapi({
    description:
      "This type is a string enum with the following possible values:\n\n- `EASE_IN`: Ease in with an animation curve similar to CSS ease-in.\n- `EASE_OUT`: Ease out with an animation curve similar to CSS ease-out.\n- `EASE_IN_AND_OUT`: Ease in and then out with an animation curve similar to CSS ease-in-out.\n- `LINEAR`: No easing, similar to CSS linear.\n- `EASE_IN_BACK`: Ease in with an animation curve that moves past the initial keyframe's value and then accelerates as it reaches the end.\n- `EASE_OUT_BACK`: Ease out with an animation curve that starts fast, then slows and goes past the ending keyframe's value.\n- `EASE_IN_AND_OUT_BACK`: Ease in and then out with an animation curve that overshoots the initial keyframe's value, then accelerates quickly before it slows and overshoots the ending keyframes value.\n- `CUSTOM_CUBIC_BEZIER`: User-defined cubic bezier curve.\n- `GENTLE`: Gentle animation similar to react-spring.\n- `QUICK`: Quick spring animation, great for toasts and notifications.\n- `BOUNCY`: Bouncy spring, for delightful animations like a heart bounce.\n- `SLOW`: Slow spring, useful as a steady, natural way to scale up fullscreen content.\n- `CUSTOM_SPRING`: User-defined spring animation.",
  })
  .openapi('EasingType')

const TriggerSchema: z.ZodType<TriggerType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ type: z.enum(['ON_CLICK', 'ON_HOVER', 'ON_PRESS', 'ON_DRAG']) })
          .openapi({ required: ['type'] }),
        AfterTimeoutTriggerSchema,
        z
          .object({
            type: z.enum(['MOUSE_ENTER', 'MOUSE_LEAVE', 'MOUSE_UP', 'MOUSE_DOWN']),
            delay: z.number(),
            deprecatedVersion: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether this is a [deprecated version](https://help.figma.com/hc/en-us/articles/360040035834-Prototype-triggers#h_01HHN04REHJNP168R26P1CMP0A) of the trigger that was left unchanged for backwards compatibility.\nIf not present, the trigger is the latest version.',
              }),
          })
          .openapi({ required: ['type', 'delay'] }),
        OnKeyDownTriggerSchema,
        OnMediaHitTriggerSchema,
        z.object({ type: z.literal('ON_MEDIA_END') }).openapi({ required: ['type'] }),
      ])
      .openapi({
        description:
          'The `"ON_HOVER"` and `"ON_PRESS"` trigger types revert the navigation when the trigger is finished (the result is temporary). \n`"MOUSE_ENTER"`, `"MOUSE_LEAVE"`, `"MOUSE_UP"` and `"MOUSE_DOWN"` are permanent, one-way navigation.\nThe `delay` parameter requires the trigger to be held for a certain duration of time before the action occurs.\nBoth `timeout` and `delay` values are in milliseconds.\nThe `"ON_MEDIA_HIT"` and `"ON_MEDIA_END"` trigger types can only trigger from a video. \nThey fire when a video reaches a certain time or ends. The `timestamp` value is in seconds.',
      }),
  )
  .openapi('Trigger')

const ActionSchema: z.ZodType<ActionType> = z
  .lazy(() =>
    z
      .xor([
        z.object({ type: z.enum(['BACK', 'CLOSE']) }).openapi({ required: ['type'] }),
        OpenURLActionSchema,
        UpdateMediaRuntimeActionSchema,
        SetVariableActionSchema,
        SetVariableModeActionSchema,
        ConditionalActionSchema,
        NodeActionSchema,
      ])
      .openapi({ description: 'An action that is performed when a trigger is activated.' }),
  )
  .openapi('Action')

const InteractionSchema = z
  .object({
    trigger: z
      .xor([TriggerSchema, z.null().nullable()])
      .openapi({ description: 'The user event that initiates the interaction.' }),
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({ description: 'The actions that are performed when the trigger is activated.' }),
  })
  .openapi({
    description:
      'An interaction in the Figma viewer, containing a trigger and one or more actions.',
    required: ['trigger'],
  })
  .openapi('Interaction')

type TransitionSourceTraitType = {
  transitionNodeID?: string
  transitionDuration?: number
  transitionEasing?: z.infer<typeof EasingTypeSchema>
  interactions?: z.infer<typeof InteractionSchema>[]
}

type DevStatusTraitType = {
  devStatus?: { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string }
}

type AnnotationsTraitType = { [key: string]: unknown }

type TransformModifiersTraitType = { [key: string]: unknown }

const IsLayerTraitSchema: z.ZodType<IsLayerTraitType> = z
  .object({
    id: z
      .string()
      .openapi({ description: 'A string uniquely identifying this node within the document.' }),
    name: z
      .string()
      .openapi({ description: 'The name given to the node by the user in the tool.' }),
    type: z.string().openapi({ description: 'The type of the node' }),
    visible: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether or not the node is visible on the canvas.' }),
    locked: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If true, layer is locked and cannot be edited' }),
    isFixed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Whether the layer is fixed while the parent is scrolling',
        deprecated: true,
      }),
    scrollBehavior: z
      .enum(['SCROLLS', 'FIXED', 'STICKY_SCROLLS'])
      .default('SCROLLS')
      .openapi({ description: 'How layer should be treated when the frame is resized' }),
    rotation: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The rotation of the node, if not 0.' }),
    componentPropertyReferences: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.",
      }),
    pluginData: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.',
      }),
    sharedPluginData: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".',
      }),
    boundVariables: z
      .object({
        size: z
          .object({
            x: VariableAliasSchema.exactOptional(),
            y: VariableAliasSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        individualStrokeWeights: z
          .object({
            top: VariableAliasSchema.exactOptional(),
            bottom: VariableAliasSchema.exactOptional(),
            left: VariableAliasSchema.exactOptional(),
            right: VariableAliasSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        characters: VariableAliasSchema.exactOptional(),
        itemSpacing: VariableAliasSchema.exactOptional(),
        paddingLeft: VariableAliasSchema.exactOptional(),
        paddingRight: VariableAliasSchema.exactOptional(),
        paddingTop: VariableAliasSchema.exactOptional(),
        paddingBottom: VariableAliasSchema.exactOptional(),
        visible: VariableAliasSchema.exactOptional(),
        topLeftRadius: VariableAliasSchema.exactOptional(),
        topRightRadius: VariableAliasSchema.exactOptional(),
        bottomLeftRadius: VariableAliasSchema.exactOptional(),
        bottomRightRadius: VariableAliasSchema.exactOptional(),
        minWidth: VariableAliasSchema.exactOptional(),
        maxWidth: VariableAliasSchema.exactOptional(),
        minHeight: VariableAliasSchema.exactOptional(),
        maxHeight: VariableAliasSchema.exactOptional(),
        counterAxisSpacing: VariableAliasSchema.exactOptional(),
        opacity: VariableAliasSchema.exactOptional(),
        fontFamily: z.array(VariableAliasSchema).exactOptional(),
        fontSize: z.array(VariableAliasSchema).exactOptional(),
        fontStyle: z.array(VariableAliasSchema).exactOptional(),
        fontWeight: z.array(VariableAliasSchema).exactOptional(),
        letterSpacing: z.array(VariableAliasSchema).exactOptional(),
        lineHeight: z.array(VariableAliasSchema).exactOptional(),
        paragraphSpacing: z.array(VariableAliasSchema).exactOptional(),
        paragraphIndent: z.array(VariableAliasSchema).exactOptional(),
        fills: z.array(VariableAliasSchema).exactOptional(),
        strokes: z.array(VariableAliasSchema).exactOptional(),
        componentProperties: z.record(z.string(), VariableAliasSchema).exactOptional(),
        textRangeFills: z.array(VariableAliasSchema).exactOptional(),
        effects: z.array(VariableAliasSchema).exactOptional(),
        layoutGrids: z.array(VariableAliasSchema).exactOptional(),
        rectangleCornerRadii: z
          .object({
            RECTANGLE_TOP_LEFT_CORNER_RADIUS: VariableAliasSchema.exactOptional(),
            RECTANGLE_TOP_RIGHT_CORNER_RADIUS: VariableAliasSchema.exactOptional(),
            RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: VariableAliasSchema.exactOptional(),
            RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: VariableAliasSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({
        description:
          'A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.',
        required: [],
      }),
    explicitVariableModes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.',
      }),
  })
  .openapi({ required: ['id', 'name', 'type', 'scrollBehavior'] })
  .openapi('IsLayerTrait')

const HasBlendModeAndOpacityTraitSchema: z.ZodType<HasBlendModeAndOpacityTraitType> = z
  .object({
    blendMode: BlendModeSchema.openapi({
      description:
        'How this node blends with nodes behind it in the scene (see blend mode section for more details)',
    }),
    opacity: z
      .number()
      .min(0)
      .max(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Opacity of the node' }),
  })
  .openapi({ required: ['blendMode'] })
  .openapi('HasBlendModeAndOpacityTrait')

const HasChildrenTraitSchema: z.ZodType<HasChildrenTraitType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(SubcanvasNodeSchema)
          .openapi({ description: 'An array of nodes that are direct children of this node' }),
      })
      .openapi({ required: ['children'] }),
  )
  .openapi('HasChildrenTrait')

const HasLayoutTraitSchema: z.ZodType<HasLayoutTraitType> = z
  .object({
    absoluteBoundingBox: z
      .xor([RectangleSchema, z.null().nullable()])
      .openapi({ description: 'Bounding box of the node in absolute space coordinates.' }),
    absoluteRenderBounds: z
      .xor([RectangleSchema, z.null().nullable()])
      .openapi({
        description:
          "The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.",
      }),
    preserveRatio: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Keep height and width constrained to same ratio.' }),
    constraints: LayoutConstraintSchema.exactOptional().openapi({
      description: 'Horizontal and vertical layout constraints for node.',
    }),
    relativeTransform: TransformSchema.exactOptional().openapi({
      description:
        'The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.',
    }),
    size: VectorSchema.exactOptional().openapi({
      description:
        'Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.',
    }),
    layoutAlign: z
      .enum(['INHERIT', 'STRETCH', 'MIN', 'CENTER', 'MAX'])
      .exactOptional()
      .openapi({
        description:
          '\nDetermines if the layer should stretch along the parent\'s counter axis. This property is only provided for direct children of auto-layout frames.\n\n- `INHERIT`\n- `STRETCH`\n\nIn previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.\n\n- `MIN`\n- `CENTER`\n- `MAX`\n- `STRETCH`\n\nIn horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".',
      }),
    layoutGrow: z
      .union([z.literal(0), z.literal(1)])
      .default(0)
      .exactOptional()
      .openapi({
        description:
          "This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.",
      }),
    layoutPositioning: z
      .enum(['AUTO', 'ABSOLUTE'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          "Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.",
      }),
    minWidth: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.',
      }),
    maxWidth: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.',
      }),
    minHeight: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.',
      }),
    maxHeight: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.',
      }),
    layoutSizingHorizontal: z
      .enum(['FIXED', 'HUG', 'FILL'])
      .exactOptional()
      .openapi({
        description:
          'The horizontal sizing setting on this auto-layout frame or frame child.\n- `FIXED`\n- `HUG`: only valid on auto-layout frames and text nodes\n- `FILL`: only valid on auto-layout frame children',
      }),
    layoutSizingVertical: z
      .enum(['FIXED', 'HUG', 'FILL'])
      .exactOptional()
      .openapi({
        description:
          'The vertical sizing setting on this auto-layout frame or frame child.\n- `FIXED`\n- `HUG`: only valid on auto-layout frames and text nodes\n- `FILL`: only valid on auto-layout frame children',
      }),
    gridRowCount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The number of rows in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridColumnCount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The number of columns in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridRowGap: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The distance between rows in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridColumnGap: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The distance between columns in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridColumnsSizing: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string for the CSS grid-template-columns property. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridRowsSizing: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string for the CSS grid-template-rows property. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`.',
      }),
    gridChildHorizontalAlign: z
      .enum(['AUTO', 'MIN', 'CENTER', 'MAX'])
      .exactOptional()
      .openapi({
        description:
          'Determines how a GRID frame\'s child should be aligned in the horizontal direction within its grid area. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
    gridChildVerticalAlign: z
      .enum(['AUTO', 'MIN', 'CENTER', 'MAX'])
      .exactOptional()
      .openapi({
        description:
          'Determines how a GRID frame\'s child should be aligned in the vertical direction within its grid area. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
    gridRowSpan: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of rows that a GRID frame\'s child should span. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
    gridColumnSpan: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of columns that a GRID frame\'s child should span. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
    gridRowAnchorIndex: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The index of the row that a GRID frame\'s child should be anchored to. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
    gridColumnAnchorIndex: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The index of the column that a GRID frame\'s child should be anchored to. This property is only applicable for direct children of frames with `layoutMode: "GRID"`.',
      }),
  })
  .openapi({ required: ['absoluteBoundingBox', 'absoluteRenderBounds'] })
  .openapi('HasLayoutTrait')

const HasFramePropertiesTraitSchema: z.ZodType<HasFramePropertiesTraitType> = z
  .object({
    clipsContent: z
      .boolean()
      .openapi({ description: 'Whether or not this node clip content outside of its bounds' }),
    background: z
      .array(PaintSchema)
      .exactOptional()
      .openapi({
        description:
          'Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.',
        deprecated: true,
      }),
    backgroundColor: RGBASchema.exactOptional().openapi({
      description:
        'Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.',
      deprecated: true,
    }),
    layoutGrids: z
      .array(LayoutGridSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute',
      }),
    overflowDirection: z
      .enum([
        'HORIZONTAL_SCROLLING',
        'VERTICAL_SCROLLING',
        'HORIZONTAL_AND_VERTICAL_SCROLLING',
        'NONE',
      ])
      .default('NONE')
      .exactOptional()
      .openapi({
        description: 'Whether a node has primary axis scrolling, horizontal or vertical.',
      }),
    layoutMode: z
      .enum(['NONE', 'HORIZONTAL', 'VERTICAL', 'GRID'])
      .default('NONE')
      .exactOptional()
      .openapi({ description: 'Whether this layer uses auto-layout to position its children.' }),
    primaryAxisSizingMode: z
      .enum(['FIXED', 'AUTO'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          'Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.',
      }),
    counterAxisSizingMode: z
      .enum(['FIXED', 'AUTO'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          'Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.',
      }),
    primaryAxisAlignItems: z
      .enum(['MIN', 'CENTER', 'MAX', 'SPACE_BETWEEN'])
      .default('MIN')
      .exactOptional()
      .openapi({
        description:
          "Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.",
      }),
    counterAxisAlignItems: z
      .enum(['MIN', 'CENTER', 'MAX', 'BASELINE'])
      .default('MIN')
      .exactOptional()
      .openapi({
        description:
          "Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.",
      }),
    paddingLeft: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.',
      }),
    paddingRight: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.',
      }),
    paddingTop: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.',
      }),
    paddingBottom: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.',
      }),
    itemSpacing: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.',
      }),
    itemReverseZIndex: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.',
      }),
    strokesIncludedInLayout: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.',
      }),
    layoutWrap: z
      .enum(['NO_WRAP', 'WRAP'])
      .exactOptional()
      .openapi({ description: 'Whether this auto-layout frame has wrapping enabled.' }),
    counterAxisSpacing: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`',
      }),
    counterAxisAlignContent: z
      .enum(['AUTO', 'SPACE_BETWEEN'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          'Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.',
      }),
  })
  .openapi({ required: ['clipsContent'] })
  .openapi('HasFramePropertiesTrait')

const CornerTraitSchema: z.ZodType<CornerTraitType> = z
  .object({
    cornerRadius: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Radius of each corner if a single radius is set for all corners' }),
    cornerSmoothing: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.',
      }),
    rectangleCornerRadii: z
      .array(z.number())
      .length(4)
      .exactOptional()
      .openapi({
        description:
          'Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.\n\nValues are given in the order top-left, top-right, bottom-right, bottom-left.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CornerTrait')

const HasGeometryTraitSchema: z.ZodType<HasGeometryTraitType> = MinimalFillsTraitSchema.and(
  MinimalStrokesTraitSchema,
)
  .and(
    z
      .object({
        fillOverrideTable: z
          .record(z.string(), z.xor([PaintOverrideSchema, z.null().nullable()]))
          .exactOptional()
          .openapi({
            description:
              'Map from ID to PaintOverride for looking up fill overrides. To see which regions are overridden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.',
          }),
        fillGeometry: z
          .array(PathSchema)
          .exactOptional()
          .openapi({
            description:
              'Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.',
          }),
        strokeGeometry: z
          .array(PathSchema)
          .exactOptional()
          .openapi({
            description:
              'Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.',
          }),
        strokeCap: z
          .enum([
            'NONE',
            'ROUND',
            'SQUARE',
            'LINE_ARROW',
            'TRIANGLE_ARROW',
            'DIAMOND_FILLED',
            'CIRCLE_FILLED',
            'TRIANGLE_FILLED',
            'WASHI_TAPE_1',
            'WASHI_TAPE_2',
            'WASHI_TAPE_3',
            'WASHI_TAPE_4',
            'WASHI_TAPE_5',
            'WASHI_TAPE_6',
          ])
          .default('NONE')
          .exactOptional()
          .openapi({ description: 'A string enum describing the end caps of vector paths.' }),
        strokeMiterAngle: z
          .number()
          .default(28.96)
          .exactOptional()
          .openapi({
            description:
              'Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('HasGeometryTrait')

const HasExportSettingsTraitSchema: z.ZodType<HasExportSettingsTraitType> = z
  .object({
    exportSettings: z
      .array(ExportSettingSchema)
      .exactOptional()
      .openapi({
        description: 'An array of export settings representing images to export from the node.',
      }),
  })
  .openapi({ required: [] })
  .openapi('HasExportSettingsTrait')

const HasEffectsTraitSchema: z.ZodType<HasEffectsTraitType> = z
  .object({
    effects: z
      .array(EffectSchema)
      .openapi({
        description:
          'An array of effects attached to this node (see effects section for more details)',
      }),
  })
  .openapi({ required: ['effects'] })
  .openapi('HasEffectsTrait')

const HasMaskTraitSchema: z.ZodType<HasMaskTraitType> = z
  .object({
    isMask: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Does this node mask sibling nodes in front of it?' }),
    maskType: z
      .enum(['ALPHA', 'VECTOR', 'LUMINANCE'])
      .exactOptional()
      .openapi({
        description:
          "If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:\n\n- ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.\n- VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.\n- LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.",
      }),
    isMaskOutline: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'True if maskType is VECTOR. This field is deprecated; use maskType instead.',
        deprecated: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('HasMaskTrait')

const TransitionSourceTraitSchema: z.ZodType<TransitionSourceTraitType> = z
  .object({
    transitionNodeID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Node ID of node to transition to in prototyping' }),
    transitionDuration: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.',
      }),
    transitionEasing: EasingTypeSchema.exactOptional().openapi({
      description: 'The easing curve used in the prototyping transition on this node.',
    }),
    interactions: z.array(InteractionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransitionSourceTrait')

const IndividualStrokesTraitSchema: z.ZodType<IndividualStrokesTraitType> = z
  .object({
    individualStrokeWeights: StrokeWeightsSchema.exactOptional().openapi({
      description:
        'An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.',
    }),
  })
  .openapi({ required: [] })
  .openapi('IndividualStrokesTrait')

const VariableWidthStrokesTraitSchema: z.ZodType<VariableWidthStrokesTraitType> = z
  .object({})
  .openapi('VariableWidthStrokesTrait')

const ComplexStrokesTraitSchema: z.ZodType<ComplexStrokesTraitType> = z
  .object({})
  .openapi('ComplexStrokesTrait')

const DevStatusTraitSchema: z.ZodType<DevStatusTraitType> = z
  .object({
    devStatus: z
      .object({
        type: z.enum(['NONE', 'READY_FOR_DEV', 'COMPLETED']),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An optional field where the designer can add more information about the design and what has changed.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Represents whether or not a node has a particular handoff (or dev) status applied to it.',
        required: ['type'],
      }),
  })
  .openapi({ required: [] })
  .openapi('DevStatusTrait')

const AnnotationsTraitSchema: z.ZodType<AnnotationsTraitType> = z
  .object({})
  .openapi('AnnotationsTrait')

type FrameTraitsType = z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof HasChildrenTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasFramePropertiesTraitSchema> &
  z.infer<typeof CornerTraitSchema> &
  z.infer<typeof HasGeometryTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasMaskTraitSchema> &
  z.infer<typeof TransitionSourceTraitSchema> &
  z.infer<typeof IndividualStrokesTraitSchema> &
  z.infer<typeof VariableWidthStrokesTraitSchema> &
  z.infer<typeof ComplexStrokesTraitSchema> &
  z.infer<typeof DevStatusTraitSchema> &
  z.infer<typeof AnnotationsTraitSchema>

const BooleanOperationNodeSchema: z.ZodType<BooleanOperationNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('BOOLEAN_OPERATION')
          .openapi({
            description:
              'The type of this node, represented by the string literal "BOOLEAN_OPERATION"',
          }),
        booleanOperation: z
          .enum(['UNION', 'INTERSECT', 'SUBTRACT', 'EXCLUDE'])
          .openapi({
            description: 'A string enum indicating the type of boolean operation applied.',
          }),
      })
      .openapi({ required: ['type', 'booleanOperation'] })
      .and(IsLayerTraitSchema)
      .and(HasBlendModeAndOpacityTraitSchema)
      .and(HasChildrenTraitSchema)
      .and(HasLayoutTraitSchema)
      .and(HasGeometryTraitSchema)
      .and(HasExportSettingsTraitSchema)
      .and(HasEffectsTraitSchema)
      .and(HasMaskTraitSchema)
      .and(TransitionSourceTraitSchema),
  )
  .openapi('BooleanOperationNode')

const ComponentNodeSchema: z.ZodType<ComponentNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('COMPONENT')
          .openapi({
            description: 'The type of this node, represented by the string literal "COMPONENT"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(FrameTraitsSchema)
      .and(ComponentPropertiesTraitSchema),
  )
  .openapi('ComponentNode')

const ComponentSetNodeSchema: z.ZodType<ComponentSetNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('COMPONENT_SET')
          .openapi({
            description: 'The type of this node, represented by the string literal "COMPONENT_SET"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(FrameTraitsSchema)
      .and(ComponentPropertiesTraitSchema),
  )
  .openapi('ComponentSetNode')

const ConnectorEndpointSchema = z
  .xor([
    z
      .object({
        endpointNodeId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Node ID that this endpoint attaches to.' }),
        position: VectorSchema.exactOptional().openapi({
          description: 'The position of the endpoint relative to the node.',
        }),
      })
      .openapi({ required: [] }),
    z
      .object({
        endpointNodeId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Node ID that this endpoint attaches to.' }),
        magnet: z
          .enum(['AUTO', 'TOP', 'BOTTOM', 'LEFT', 'RIGHT', 'CENTER'])
          .exactOptional()
          .openapi({ description: 'The magnet type is a string enum.' }),
      })
      .openapi({ required: [] }),
  ])
  .openapi({ description: 'Stores canvas location for a connector start/end point.' })
  .openapi('ConnectorEndpoint')

const ConnectorLineTypeSchema = z
  .enum(['STRAIGHT', 'ELBOWED', 'CURVED'])
  .openapi({ description: 'Connector line type.' })
  .openapi('ConnectorLineType')

const ConnectorTextBackgroundSchema =
  CornerTraitSchema.and(MinimalFillsTraitSchema).openapi('ConnectorTextBackground')

const HasTextSublayerTraitSchema = z
  .object({ characters: z.string().openapi({ description: 'Text contained within a text box.' }) })
  .openapi({ required: ['characters'] })
  .openapi('HasTextSublayerTrait')

type ConnectorNodeType = {
  type: 'CONNECTOR'
  connectorStart: z.infer<typeof ConnectorEndpointSchema>
  connectorEnd: z.infer<typeof ConnectorEndpointSchema>
  connectorStartStrokeCap:
    | 'NONE'
    | 'LINE_ARROW'
    | 'TRIANGLE_ARROW'
    | 'DIAMOND_FILLED'
    | 'CIRCLE_FILLED'
    | 'TRIANGLE_FILLED'
  connectorEndStrokeCap:
    | 'NONE'
    | 'LINE_ARROW'
    | 'TRIANGLE_ARROW'
    | 'DIAMOND_FILLED'
    | 'CIRCLE_FILLED'
    | 'TRIANGLE_FILLED'
  connectorLineType: z.infer<typeof ConnectorLineTypeSchema>
  textBackground?: z.infer<typeof ConnectorTextBackgroundSchema>
} & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasTextSublayerTraitSchema> &
  z.infer<typeof MinimalStrokesTraitSchema>

const ConnectorNodeSchema: z.ZodType<ConnectorNodeType> = z
  .object({
    type: z
      .literal('CONNECTOR')
      .openapi({
        description: 'The type of this node, represented by the string literal "CONNECTOR"',
      }),
    connectorStart: ConnectorEndpointSchema.openapi({
      description: 'The starting point of the connector.',
    }),
    connectorEnd: ConnectorEndpointSchema.openapi({
      description: 'The ending point of the connector.',
    }),
    connectorStartStrokeCap: z
      .enum([
        'NONE',
        'LINE_ARROW',
        'TRIANGLE_ARROW',
        'DIAMOND_FILLED',
        'CIRCLE_FILLED',
        'TRIANGLE_FILLED',
      ])
      .default('NONE')
      .openapi({
        description: 'A string enum describing the end cap of the start of the connector.',
      }),
    connectorEndStrokeCap: z
      .enum([
        'NONE',
        'LINE_ARROW',
        'TRIANGLE_ARROW',
        'DIAMOND_FILLED',
        'CIRCLE_FILLED',
        'TRIANGLE_FILLED',
      ])
      .default('NONE')
      .openapi({
        description: 'A string enum describing the end cap of the end of the connector.',
      }),
    connectorLineType: ConnectorLineTypeSchema.openapi({ description: 'Connector line type.' }),
    textBackground: ConnectorTextBackgroundSchema.exactOptional().openapi({
      description: 'Connector text background.',
    }),
  })
  .openapi({
    required: [
      'type',
      'connectorStart',
      'connectorEnd',
      'connectorStartStrokeCap',
      'connectorEndStrokeCap',
      'connectorLineType',
    ],
  })
  .and(IsLayerTraitSchema)
  .and(HasLayoutTraitSchema)
  .and(HasBlendModeAndOpacityTraitSchema)
  .and(HasEffectsTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .and(HasTextSublayerTraitSchema)
  .and(MinimalStrokesTraitSchema)
  .openapi('ConnectorNode')

const ArcDataSchema = z
  .object({
    startingAngle: z.number().default(0).openapi({ description: 'Start of the sweep in radians.' }),
    endingAngle: z.number().default(0).openapi({ description: 'End of the sweep in radians.' }),
    innerRadius: z
      .number()
      .min(0)
      .max(1)
      .default(0)
      .openapi({ description: 'Inner radius value between 0 and 1' }),
  })
  .openapi({
    description:
      'Information about the arc properties of an ellipse. 0° is the x axis and increasing angles rotate clockwise.',
    required: ['startingAngle', 'endingAngle', 'innerRadius'],
  })
  .openapi('ArcData')

const DefaultShapeTraitsSchema = IsLayerTraitSchema.and(HasBlendModeAndOpacityTraitSchema)
  .and(HasLayoutTraitSchema)
  .and(HasGeometryTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .and(HasEffectsTraitSchema)
  .and(HasMaskTraitSchema)
  .and(TransitionSourceTraitSchema)
  .and(VariableWidthStrokesTraitSchema)
  .and(ComplexStrokesTraitSchema)
  .openapi('DefaultShapeTraits')

type EllipseNodeType = { type: 'ELLIPSE'; arcData: z.infer<typeof ArcDataSchema> } & z.infer<
  typeof DefaultShapeTraitsSchema
> &
  z.infer<typeof AnnotationsTraitSchema>

const EllipseNodeSchema: z.ZodType<EllipseNodeType> = z
  .object({
    type: z
      .literal('ELLIPSE')
      .openapi({
        description: 'The type of this node, represented by the string literal "ELLIPSE"',
      }),
    arcData: ArcDataSchema,
  })
  .openapi({ required: ['type', 'arcData'] })
  .and(DefaultShapeTraitsSchema)
  .and(AnnotationsTraitSchema)
  .openapi('EllipseNode')

type EmbedNodeType = { type: 'EMBED' } & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema>

const EmbedNodeSchema: z.ZodType<EmbedNodeType> = z
  .object({
    type: z
      .literal('EMBED')
      .openapi({ description: 'The type of this node, represented by the string literal "EMBED"' }),
  })
  .openapi({ required: ['type'] })
  .and(IsLayerTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .openapi('EmbedNode')

const FrameNodeSchema: z.ZodType<FrameNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('FRAME')
          .openapi({
            description: 'The type of this node, represented by the string literal "FRAME"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(FrameTraitsSchema),
  )
  .openapi('FrameNode')

const GroupNodeSchema: z.ZodType<GroupNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('GROUP')
          .openapi({
            description: 'The type of this node, represented by the string literal "GROUP"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(FrameTraitsSchema),
  )
  .openapi('GroupNode')

const InstanceNodeSchema: z.ZodType<InstanceNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('INSTANCE')
          .openapi({
            description: 'The type of this node, represented by the string literal "INSTANCE"',
          }),
        componentId: z
          .string()
          .openapi({ description: 'ID of component that this instance came from.' }),
        isExposedInstance: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'If true, this node has been marked as exposed to its containing component or component set.',
          }),
        exposedInstances: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: "IDs of instances that have been exposed to this node's level.",
          }),
        componentProperties: z
          .record(z.string(), ComponentPropertySchema)
          .exactOptional()
          .openapi({
            description:
              'A mapping of name to `ComponentProperty` for all component properties on this instance. Each property has a type, value, and other optional values.',
          }),
        overrides: z
          .array(OverridesSchema)
          .openapi({
            description:
              'An array of all of the fields directly overridden on this instance. Inherited overrides are not included.',
          }),
      })
      .openapi({ required: ['type', 'componentId', 'overrides'] })
      .and(FrameTraitsSchema),
  )
  .openapi('InstanceNode')

type LineNodeType = { type: 'LINE' } & z.infer<typeof DefaultShapeTraitsSchema> &
  z.infer<typeof AnnotationsTraitSchema>

const LineNodeSchema: z.ZodType<LineNodeType> = z
  .object({
    type: z
      .literal('LINE')
      .openapi({ description: 'The type of this node, represented by the string literal "LINE"' }),
  })
  .openapi({ required: ['type'] })
  .and(DefaultShapeTraitsSchema)
  .and(AnnotationsTraitSchema)
  .openapi('LineNode')

type LinkUnfurlNodeType = { type: 'LINK_UNFURL' } & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema>

const LinkUnfurlNodeSchema: z.ZodType<LinkUnfurlNodeType> = z
  .object({
    type: z
      .literal('LINK_UNFURL')
      .openapi({
        description: 'The type of this node, represented by the string literal "LINK_UNFURL"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(IsLayerTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .openapi('LinkUnfurlNode')

const RectangularShapeTraitsSchema = DefaultShapeTraitsSchema.and(CornerTraitSchema)
  .and(IndividualStrokesTraitSchema)
  .and(AnnotationsTraitSchema)
  .openapi('RectangularShapeTraits')

type RectangleNodeType = { type: 'RECTANGLE' } & z.infer<typeof RectangularShapeTraitsSchema>

const RectangleNodeSchema: z.ZodType<RectangleNodeType> = z
  .object({
    type: z
      .literal('RECTANGLE')
      .openapi({
        description: 'The type of this node, represented by the string literal "RECTANGLE"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(RectangularShapeTraitsSchema)
  .openapi('RectangleNode')

const CornerRadiusShapeTraitsSchema =
  DefaultShapeTraitsSchema.and(CornerTraitSchema).openapi('CornerRadiusShapeTraits')

type RegularPolygonNodeType = { type: 'REGULAR_POLYGON' } & z.infer<
  typeof CornerRadiusShapeTraitsSchema
> &
  z.infer<typeof AnnotationsTraitSchema>

const RegularPolygonNodeSchema: z.ZodType<RegularPolygonNodeType> = z
  .object({
    type: z
      .literal('REGULAR_POLYGON')
      .openapi({
        description: 'The type of this node, represented by the string literal "REGULAR_POLYGON"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(CornerRadiusShapeTraitsSchema)
  .and(AnnotationsTraitSchema)
  .openapi('RegularPolygonNode')

const SectionNodeSchema: z.ZodType<SectionNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('SECTION')
          .openapi({
            description: 'The type of this node, represented by the string literal "SECTION"',
          }),
        sectionContentsHidden: z
          .boolean()
          .default(false)
          .openapi({ description: 'Whether the contents of the section are visible' }),
      })
      .openapi({ required: ['type', 'sectionContentsHidden'] })
      .and(IsLayerTraitSchema)
      .and(HasGeometryTraitSchema)
      .and(HasChildrenTraitSchema)
      .and(HasLayoutTraitSchema)
      .and(DevStatusTraitSchema),
  )
  .openapi('SectionNode')

const ShapeTypeSchema = z
  .enum([
    'SQUARE',
    'ELLIPSE',
    'ROUNDED_RECTANGLE',
    'DIAMOND',
    'TRIANGLE_UP',
    'TRIANGLE_DOWN',
    'PARALLELOGRAM_RIGHT',
    'PARALLELOGRAM_LEFT',
    'ENG_DATABASE',
    'ENG_QUEUE',
    'ENG_FILE',
    'ENG_FOLDER',
    'TRAPEZOID',
    'PREDEFINED_PROCESS',
    'SHIELD',
    'DOCUMENT_SINGLE',
    'DOCUMENT_MULTIPLE',
    'MANUAL_INPUT',
    'HEXAGON',
    'CHEVRON',
    'PENTAGON',
    'OCTAGON',
    'STAR',
    'PLUS',
    'ARROW_LEFT',
    'ARROW_RIGHT',
    'SUMMING_JUNCTION',
    'OR',
    'SPEECH_BUBBLE',
    'INTERNAL_STORAGE',
  ])
  .openapi({ description: 'Geometric shape type.' })
  .openapi('ShapeType')

type ShapeWithTextNodeType = {
  type: 'SHAPE_WITH_TEXT'
  shapeType: z.infer<typeof ShapeTypeSchema>
} & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof MinimalFillsTraitSchema> &
  z.infer<typeof HasMaskTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasTextSublayerTraitSchema> &
  z.infer<typeof CornerTraitSchema> &
  z.infer<typeof MinimalStrokesTraitSchema>

const ShapeWithTextNodeSchema: z.ZodType<ShapeWithTextNodeType> = z
  .object({
    type: z
      .literal('SHAPE_WITH_TEXT')
      .openapi({
        description: 'The type of this node, represented by the string literal "SHAPE_WITH_TEXT"',
      }),
    shapeType: ShapeTypeSchema.openapi({
      description:
        'Geometric shape type. Most shape types have the same name as their tooltip but there are a few exceptions. ENG_DATABASE: Cylinder, ENG_QUEUE: Horizontal cylinder, ENG_FILE: File, ENG_FOLDER: Folder.',
    }),
  })
  .openapi({ required: ['type', 'shapeType'] })
  .and(IsLayerTraitSchema)
  .and(HasLayoutTraitSchema)
  .and(HasBlendModeAndOpacityTraitSchema)
  .and(MinimalFillsTraitSchema)
  .and(HasMaskTraitSchema)
  .and(HasEffectsTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .and(HasTextSublayerTraitSchema)
  .and(CornerTraitSchema)
  .and(MinimalStrokesTraitSchema)
  .openapi('ShapeWithTextNode')

type SliceNodeType = { type: 'SLICE' } & z.infer<typeof IsLayerTraitSchema>

const SliceNodeSchema: z.ZodType<SliceNodeType> = z
  .object({
    type: z
      .literal('SLICE')
      .openapi({ description: 'The type of this node, represented by the string literal "SLICE"' }),
  })
  .openapi({ required: ['type'] })
  .and(IsLayerTraitSchema)
  .openapi('SliceNode')

type StarNodeType = { type: 'STAR' } & z.infer<typeof CornerRadiusShapeTraitsSchema> &
  z.infer<typeof AnnotationsTraitSchema>

const StarNodeSchema: z.ZodType<StarNodeType> = z
  .object({
    type: z
      .literal('STAR')
      .openapi({ description: 'The type of this node, represented by the string literal "STAR"' }),
  })
  .openapi({ required: ['type'] })
  .and(CornerRadiusShapeTraitsSchema)
  .and(AnnotationsTraitSchema)
  .openapi('StarNode')

type StickyNodeType = { type: 'STICKY'; authorVisible?: boolean } & z.infer<
  typeof IsLayerTraitSchema
> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof MinimalFillsTraitSchema> &
  z.infer<typeof HasMaskTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasTextSublayerTraitSchema>

const StickyNodeSchema: z.ZodType<StickyNodeType> = z
  .object({
    type: z
      .literal('STICKY')
      .openapi({
        description: 'The type of this node, represented by the string literal "STICKY"',
      }),
    authorVisible: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If true, author name is visible.' }),
  })
  .openapi({ required: ['type'] })
  .and(IsLayerTraitSchema)
  .and(HasLayoutTraitSchema)
  .and(HasBlendModeAndOpacityTraitSchema)
  .and(MinimalFillsTraitSchema)
  .and(HasMaskTraitSchema)
  .and(HasEffectsTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .and(HasTextSublayerTraitSchema)
  .openapi('StickyNode')

const TableNodeSchema: z.ZodType<TableNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('TABLE')
          .openapi({
            description: 'The type of this node, represented by the string literal "TABLE"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(IsLayerTraitSchema)
      .and(HasChildrenTraitSchema)
      .and(HasLayoutTraitSchema)
      .and(MinimalStrokesTraitSchema)
      .and(HasEffectsTraitSchema)
      .and(HasBlendModeAndOpacityTraitSchema)
      .and(HasExportSettingsTraitSchema),
  )
  .openapi('TableNode')

type TableCellNodeType = { type: 'TABLE_CELL' } & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof MinimalFillsTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasTextSublayerTraitSchema>

const TableCellNodeSchema: z.ZodType<TableCellNodeType> = z
  .object({
    type: z
      .literal('TABLE_CELL')
      .openapi({
        description: 'The type of this node, represented by the string literal "TABLE_CELL"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(IsLayerTraitSchema)
  .and(MinimalFillsTraitSchema)
  .and(HasLayoutTraitSchema)
  .and(HasTextSublayerTraitSchema)
  .openapi('TableCellNode')

const TypeStyleSchema: z.ZodType<TypeStyleType> = z
  .lazy(() =>
    z
      .object({
        paragraphSpacing: z
          .number()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Space between paragraphs in px, 0 if not present.' }),
        paragraphIndent: z
          .number()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Paragraph indentation in px, 0 if not present.' }),
        listSpacing: z
          .number()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Space between list items in px, 0 if not present.' }),
        textDecoration: z
          .enum(['NONE', 'STRIKETHROUGH', 'UNDERLINE'])
          .default('NONE')
          .exactOptional()
          .openapi({ description: 'Text decoration applied to the node, default is none.' }),
        textAutoResize: z
          .enum(['NONE', 'WIDTH_AND_HEIGHT', 'HEIGHT', 'TRUNCATE'])
          .default('NONE')
          .exactOptional()
          .openapi({
            description:
              'Dimensions along which text will auto resize, default is that the text does not auto-resize. TRUNCATE means that the text will be shortened and trailing text will be replaced with "…" if the text contents is larger than the bounds. `TRUNCATE` as a return value is deprecated and will be removed in a future version. Read from `textTruncation` instead.',
          }),
        textTruncation: z
          .enum(['DISABLED', 'ENDING'])
          .default('DISABLED')
          .exactOptional()
          .openapi({
            description:
              'Whether this text node will truncate with an ellipsis when the text contents is larger than the text node.',
          }),
        maxLines: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'When `textTruncation: "ENDING"` is set, `maxLines` determines how many lines a text node can grow to before it truncates.',
          }),
        lineHeightPx: z.number().exactOptional().openapi({ description: 'Line height in px.' }),
        lineHeightPercent: z
          .number()
          .default(100)
          .exactOptional()
          .openapi({
            description:
              'Line height as a percentage of normal line height. This is deprecated; in a future version of the API only lineHeightPx and lineHeightPercentFontSize will be returned.',
          }),
        lineHeightPercentFontSize: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Line height as a percentage of the font size. Only returned when `lineHeightPercent` (deprecated) is not 100.',
          }),
        lineHeightUnit: z
          .enum(['PIXELS', 'FONT_SIZE_%', 'INTRINSIC_%'])
          .exactOptional()
          .openapi({ description: 'The unit of the line height value specified by the user.' }),
        isOverrideOverTextStyle: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not this style has overrides over a text style. The possible fields to override are semanticWeight, semanticItalic, hyperlink, and textDecoration. If this is true, then those fields are overrides if present.',
          }),
        boundVariables: z
          .object({
            fontFamily: VariableAliasSchema.exactOptional(),
            fontSize: VariableAliasSchema.exactOptional(),
            fontStyle: VariableAliasSchema.exactOptional(),
            fontWeight: VariableAliasSchema.exactOptional(),
            letterSpacing: VariableAliasSchema.exactOptional(),
            lineHeight: VariableAliasSchema.exactOptional(),
            paragraphSpacing: VariableAliasSchema.exactOptional(),
            paragraphIndent: VariableAliasSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({
            description: 'The variables bound to a particular field on this style',
            required: [],
          }),
      })
      .openapi({ description: 'Metadata for character formatting.', required: [] })
      .and(BaseTypeStyleSchema),
  )
  .openapi('TypeStyle')

const TypePropertiesTraitSchema = z
  .object({
    characters: z.string().openapi({ description: 'The raw characters in the text node.' }),
    style: TypeStyleSchema.openapi({
      description: 'Style of text including font family and weight.',
    }),
    characterStyleOverrides: z
      .array(z.number())
      .openapi({
        description:
          "The array corresponds to characters in the text box, where each element references the 'styleOverrideTable' to apply specific styles to each character. The array's length can be less than or equal to the number of characters due to the removal of trailing zeros. Elements with a value of 0 indicate characters that use the default type style. If the array is shorter than the total number of characters, the characters beyond the array's length also use the default style.",
      }),
    layoutVersion: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Internal property, preserved for backward compatibility. Avoid using this value.',
      }),
    styleOverrideTable: z
      .record(z.string(), TypeStyleSchema)
      .openapi({ description: 'Map from ID to TypeStyle for looking up style overrides.' }),
    lineTypes: z
      .array(z.enum(['NONE', 'ORDERED', 'UNORDERED']))
      .openapi({
        description:
          'An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the list type of a specific line. List types are represented as string enums with one of these possible values:\n\n- `NONE`: Not a list item.\n- `ORDERED`: Text is an ordered list (numbered).\n- `UNORDERED`: Text is an unordered list (bulleted).',
      }),
    lineIndentations: z
      .array(z.number())
      .openapi({
        description:
          'An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the indentation level of a specific line.',
      }),
  })
  .openapi({
    required: [
      'characters',
      'style',
      'characterStyleOverrides',
      'styleOverrideTable',
      'lineTypes',
      'lineIndentations',
    ],
  })
  .openapi('TypePropertiesTrait')

type TextNodeType = { type: 'TEXT' } & z.infer<typeof DefaultShapeTraitsSchema> &
  z.infer<typeof TypePropertiesTraitSchema> &
  z.infer<typeof AnnotationsTraitSchema>

const TextNodeSchema: z.ZodType<TextNodeType> = z
  .object({
    type: z
      .literal('TEXT')
      .openapi({ description: 'The type of this node, represented by the string literal "TEXT"' }),
  })
  .openapi({ required: ['type'] })
  .and(DefaultShapeTraitsSchema)
  .and(TypePropertiesTraitSchema)
  .and(AnnotationsTraitSchema)
  .openapi('TextNode')

const HyperlinkSchema = z
  .object({
    type: z
      .enum(['URL', 'NODE'])
      .openapi({ description: 'The type of hyperlink. Can be either `URL` or `NODE`.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL that the hyperlink points to, if `type` is `URL`.' }),
    nodeID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the node that the hyperlink points to, if `type` is `NODE`.',
      }),
  })
  .openapi({
    description: 'A link to either a URL or another frame (node) in the document.',
    required: ['type'],
  })
  .openapi('Hyperlink')

const BaseTypeStyleSchema = z
  .object({
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({ description: 'Font family of text (standard name).' }),
    fontPostScriptName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'PostScript font name.' }),
    fontStyle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes visual weight or emphasis, such as Bold or Italic.' }),
    italic: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether or not text is italicized.' }),
    fontWeight: z.number().exactOptional().openapi({ description: 'Numeric font weight.' }),
    fontSize: z.number().exactOptional().openapi({ description: 'Font size in px.' }),
    textCase: z
      .enum(['ORIGINAL', 'UPPER', 'LOWER', 'TITLE', 'SMALL_CAPS', 'SMALL_CAPS_FORCED'])
      .exactOptional()
      .openapi({ description: 'Text casing applied to the node, default is the original casing.' }),
    textAlignHorizontal: z
      .enum(['LEFT', 'RIGHT', 'CENTER', 'JUSTIFIED'])
      .exactOptional()
      .openapi({ description: 'Horizontal text alignment as string enum.' }),
    textAlignVertical: z
      .enum(['TOP', 'CENTER', 'BOTTOM'])
      .exactOptional()
      .openapi({ description: 'Vertical text alignment as string enum.' }),
    letterSpacing: z
      .number()
      .exactOptional()
      .openapi({ description: 'Space between characters in px.' }),
    fills: z
      .array(PaintSchema)
      .exactOptional()
      .openapi({ description: 'An array of fill paints applied to the characters.' }),
    hyperlink: HyperlinkSchema.exactOptional().openapi({ description: 'Link to a URL or frame.' }),
    opentypeFlags: z
      .record(z.string(), z.number())
      .exactOptional()
      .openapi({
        description:
          "A map of OpenType feature flags to 1 or 0, 1 if it is enabled and 0 if it is disabled. Note that some flags aren't reflected here. For example, SMCP (small caps) is still represented by the `textCase` field.",
      }),
    semanticWeight: z
      .enum(['BOLD', 'NORMAL'])
      .exactOptional()
      .openapi({
        description:
          'Indicates how the font weight was overridden when there is a text style override.',
      }),
    semanticItalic: z
      .enum(['ITALIC', 'NORMAL'])
      .exactOptional()
      .openapi({
        description:
          'Indicates how the font style was overridden when there is a text style override.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BaseTypeStyle')

const TextPathTypeStyleSchema = z
  .object({
    isOverrideOverTextStyle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this style has overrides over a text style. The possible fields to override are semanticWeight, semanticItalic, and hyperlink. If this is true, then those fields are overrides if present.',
      }),
    boundVariables: z
      .object({
        fontFamily: VariableAliasSchema.exactOptional(),
        fontSize: VariableAliasSchema.exactOptional(),
        fontStyle: VariableAliasSchema.exactOptional(),
        fontWeight: VariableAliasSchema.exactOptional(),
        letterSpacing: VariableAliasSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this style',
        required: [],
      }),
  })
  .openapi({
    description: 'Metadata for character formatting for styles used in text paths.',
    required: [],
  })
  .and(BaseTypeStyleSchema)
  .openapi('TextPathTypeStyle')

const TextPathPropertiesTraitSchema = z
  .object({
    characters: z.string().openapi({ description: 'The raw characters in the text path node.' }),
    style: TextPathTypeStyleSchema.openapi({
      description: 'Style of text including font family and weight.',
    }),
    characterStyleOverrides: z
      .array(z.number())
      .openapi({
        description:
          "The array corresponds to characters in the text box, where each element references the 'styleOverrideTable' to apply specific styles to each character. The array's length can be less than or equal to the number of characters due to the removal of trailing zeros. Elements with a value of 0 indicate characters that use the default type style. If the array is shorter than the total number of characters, the characters beyond the array's length also use the default style.",
      }),
    layoutVersion: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Internal property, preserved for backward compatibility. Avoid using this value.',
      }),
    styleOverrideTable: z
      .record(z.string(), TextPathTypeStyleSchema)
      .openapi({ description: 'Map from ID to TextPathTypeStyle for looking up style overrides.' }),
  })
  .openapi({
    required: [
      'characters',
      'style',
      'characterStyleOverrides',
      'styleOverrideTable',
      'textPathStartData',
    ],
  })
  .openapi('TextPathPropertiesTrait')

type TextPathNodeType = { type: 'TEXT_PATH' } & z.infer<typeof DefaultShapeTraitsSchema> &
  z.infer<typeof TextPathPropertiesTraitSchema>

const TextPathNodeSchema: z.ZodType<TextPathNodeType> = z
  .object({
    type: z
      .literal('TEXT_PATH')
      .openapi({
        description: 'The type of this node, represented by the string literal "TEXT_PATH"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(DefaultShapeTraitsSchema)
  .and(TextPathPropertiesTraitSchema)
  .openapi('TextPathNode')

const TransformGroupNodeSchema: z.ZodType<TransformGroupNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('TRANSFORM_GROUP')
          .openapi({
            description:
              'The type of this node, represented by the string literal "TRANSFORM_GROUP"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(FrameTraitsSchema)
      .and(TransformModifiersTraitSchema),
  )
  .openapi('TransformGroupNode')

type VectorNodeType = { type: 'VECTOR' } & z.infer<typeof CornerRadiusShapeTraitsSchema> &
  z.infer<typeof AnnotationsTraitSchema>

const VectorNodeSchema: z.ZodType<VectorNodeType> = z
  .object({
    type: z
      .literal('VECTOR')
      .openapi({
        description: 'The type of this node, represented by the string literal "VECTOR"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(CornerRadiusShapeTraitsSchema)
  .and(AnnotationsTraitSchema)
  .openapi('VectorNode')

type WashiTapeNodeType = { type: 'WASHI_TAPE' } & z.infer<typeof DefaultShapeTraitsSchema>

const WashiTapeNodeSchema: z.ZodType<WashiTapeNodeType> = z
  .object({
    type: z
      .literal('WASHI_TAPE')
      .openapi({
        description: 'The type of this node, represented by the string literal "WASHI_TAPE"',
      }),
  })
  .openapi({ required: ['type'] })
  .and(DefaultShapeTraitsSchema)
  .openapi('WashiTapeNode')

const WidgetNodeSchema: z.ZodType<WidgetNodeType> = z
  .lazy(() =>
    z
      .object({
        type: z
          .literal('WIDGET')
          .openapi({
            description: 'The type of this node, represented by the string literal "WIDGET"',
          }),
      })
      .openapi({ required: ['type'] })
      .and(IsLayerTraitSchema)
      .and(HasExportSettingsTraitSchema)
      .and(HasChildrenTraitSchema),
  )
  .openapi('WidgetNode')

const FlowStartingPointSchema = z
  .object({
    nodeId: z.string().openapi({ description: 'Unique identifier specifying the frame.' }),
    name: z.string().openapi({ description: 'Name of flow.' }),
  })
  .openapi({
    description:
      'A flow starting point used when launching a prototype to enter Presentation view.',
    required: ['nodeId', 'name'],
  })
  .openapi('FlowStartingPoint')

const SizeSchema = z
  .object({
    width: z.number().openapi({ description: 'The width of a size.' }),
    height: z.number().openapi({ description: 'the height of a size.' }),
  })
  .openapi({ description: 'A width and a height.', required: ['width', 'height'] })
  .openapi('Size')

const PrototypeDeviceSchema = z
  .object({
    type: z.enum(['NONE', 'PRESET', 'CUSTOM', 'PRESENTATION']),
    size: SizeSchema.exactOptional(),
    presetIdentifier: z.string().exactOptional(),
    rotation: z.enum(['NONE', 'CCW_90']),
  })
  .openapi({ description: 'The device used to view a prototype.', required: ['type', 'rotation'] })
  .openapi('PrototypeDevice')

const MeasurementStartEndSchema = z
  .object({ nodeId: z.string(), side: z.enum(['TOP', 'RIGHT', 'BOTTOM', 'LEFT']) })
  .openapi({
    description: 'The node and side a measurement is pinned to',
    required: ['nodeId', 'side'],
  })
  .openapi('MeasurementStartEnd')

const MeasurementOffsetInnerSchema = z
  .object({ type: z.literal('INNER'), relative: z.number() })
  .openapi({
    description: 'Measurement offset relative to the inside of the start node',
    required: ['type', 'relative'],
  })
  .openapi('MeasurementOffsetInner')

const MeasurementOffsetOuterSchema = z
  .object({ type: z.literal('OUTER'), fixed: z.number() })
  .openapi({
    description: 'Measurement offset relative to the outside of the start node',
    required: ['type', 'fixed'],
  })
  .openapi('MeasurementOffsetOuter')

const MeasurementSchema = z
  .object({
    id: z.string(),
    start: MeasurementStartEndSchema,
    end: MeasurementStartEndSchema,
    offset: z.xor([MeasurementOffsetInnerSchema, MeasurementOffsetOuterSchema]),
    freeText: z
      .string()
      .exactOptional()
      .openapi({ description: 'When manually overridden, the displayed value of the measurement' }),
  })
  .openapi({
    description: 'A pinned distance between two nodes in Dev Mode',
    required: ['id', 'start', 'end', 'offset'],
  })
  .openapi('Measurement')

const CanvasNodeSchema = z
  .object({
    type: z.literal('CANVAS'),
    children: z.array(SubcanvasNodeSchema),
    backgroundColor: RGBASchema.openapi({ description: 'Background color of the canvas.' }),
    prototypeStartNodeID: z
      .string()
      .nullable()
      .openapi({
        description:
          'Node ID that corresponds to the start frame for prototypes. This is deprecated with the introduction of multiple flows. Please use the `flowStartingPoints` field.',
        deprecated: true,
      }),
    flowStartingPoints: z
      .array(FlowStartingPointSchema)
      .openapi({
        description:
          'An array of flow starting points sorted by its position in the prototype settings panel.',
      }),
    prototypeDevice: PrototypeDeviceSchema.openapi({
      description: 'The device used to view a prototype.',
    }),
    prototypeBackgrounds: z
      .array(RGBASchema)
      .exactOptional()
      .openapi({
        description:
          'The background color of the prototype (currently only supports a single solid color paint).',
      }),
    measurements: z.array(MeasurementSchema).exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'children',
      'backgroundColor',
      'flowStartingPoints',
      'prototypeDevice',
      'prototypeStartNodeID',
    ],
  })
  .and(IsLayerTraitSchema)
  .and(HasExportSettingsTraitSchema)
  .openapi('CanvasNode')

const DocumentNodeSchema = z
  .object({ type: z.literal('DOCUMENT'), children: z.array(CanvasNodeSchema) })
  .openapi({ required: ['type', 'children'] })
  .and(IsLayerTraitSchema)
  .openapi('DocumentNode')

type NodeType =
  | z.infer<typeof BooleanOperationNodeSchema>
  | z.infer<typeof ComponentNodeSchema>
  | z.infer<typeof ComponentSetNodeSchema>
  | z.infer<typeof ConnectorNodeSchema>
  | z.infer<typeof EllipseNodeSchema>
  | z.infer<typeof EmbedNodeSchema>
  | z.infer<typeof FrameNodeSchema>
  | z.infer<typeof GroupNodeSchema>
  | z.infer<typeof InstanceNodeSchema>
  | z.infer<typeof LineNodeSchema>
  | z.infer<typeof LinkUnfurlNodeSchema>
  | z.infer<typeof RectangleNodeSchema>
  | z.infer<typeof RegularPolygonNodeSchema>
  | z.infer<typeof SectionNodeSchema>
  | z.infer<typeof ShapeWithTextNodeSchema>
  | z.infer<typeof SliceNodeSchema>
  | z.infer<typeof StarNodeSchema>
  | z.infer<typeof StickyNodeSchema>
  | z.infer<typeof TableNodeSchema>
  | z.infer<typeof TableCellNodeSchema>
  | z.infer<typeof TextNodeSchema>
  | z.infer<typeof TextPathNodeSchema>
  | z.infer<typeof TransformGroupNodeSchema>
  | z.infer<typeof VectorNodeSchema>
  | z.infer<typeof WashiTapeNodeSchema>
  | z.infer<typeof WidgetNodeSchema>
  | z.infer<typeof DocumentNodeSchema>
  | z.infer<typeof CanvasNodeSchema>

type SubcanvasNodeType =
  | z.infer<typeof BooleanOperationNodeSchema>
  | z.infer<typeof ComponentNodeSchema>
  | z.infer<typeof ComponentSetNodeSchema>
  | z.infer<typeof ConnectorNodeSchema>
  | z.infer<typeof EllipseNodeSchema>
  | z.infer<typeof EmbedNodeSchema>
  | z.infer<typeof FrameNodeSchema>
  | z.infer<typeof GroupNodeSchema>
  | z.infer<typeof InstanceNodeSchema>
  | z.infer<typeof LineNodeSchema>
  | z.infer<typeof LinkUnfurlNodeSchema>
  | z.infer<typeof RectangleNodeSchema>
  | z.infer<typeof RegularPolygonNodeSchema>
  | z.infer<typeof SectionNodeSchema>
  | z.infer<typeof ShapeWithTextNodeSchema>
  | z.infer<typeof SliceNodeSchema>
  | z.infer<typeof StarNodeSchema>
  | z.infer<typeof StickyNodeSchema>
  | z.infer<typeof TableNodeSchema>
  | z.infer<typeof TableCellNodeSchema>
  | z.infer<typeof TextNodeSchema>
  | z.infer<typeof TextPathNodeSchema>
  | z.infer<typeof TransformGroupNodeSchema>
  | z.infer<typeof VectorNodeSchema>
  | z.infer<typeof WashiTapeNodeSchema>
  | z.infer<typeof WidgetNodeSchema>

type BooleanOperationNodeType = {
  type: 'BOOLEAN_OPERATION'
  booleanOperation: 'UNION' | 'INTERSECT' | 'SUBTRACT' | 'EXCLUDE'
} & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof HasChildrenTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof HasGeometryTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasMaskTraitSchema> &
  z.infer<typeof TransitionSourceTraitSchema>

type SectionNodeType = { type: 'SECTION'; sectionContentsHidden: boolean } & z.infer<
  typeof IsLayerTraitSchema
> &
  z.infer<typeof HasGeometryTraitSchema> &
  z.infer<typeof HasChildrenTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof DevStatusTraitSchema>

const FrameTraitsSchema: z.ZodType<FrameTraitsType> = z
  .lazy(() =>
    IsLayerTraitSchema.and(HasBlendModeAndOpacityTraitSchema)
      .and(HasChildrenTraitSchema)
      .and(HasLayoutTraitSchema)
      .and(HasFramePropertiesTraitSchema)
      .and(CornerTraitSchema)
      .and(HasGeometryTraitSchema)
      .and(HasExportSettingsTraitSchema)
      .and(HasEffectsTraitSchema)
      .and(HasMaskTraitSchema)
      .and(TransitionSourceTraitSchema)
      .and(IndividualStrokesTraitSchema)
      .and(VariableWidthStrokesTraitSchema)
      .and(ComplexStrokesTraitSchema)
      .and(DevStatusTraitSchema)
      .and(AnnotationsTraitSchema),
  )
  .openapi('FrameTraits')

type FrameNodeType = { type: 'FRAME' } & z.infer<typeof FrameTraitsSchema>

type GroupNodeType = { type: 'GROUP' } & z.infer<typeof FrameTraitsSchema>

const ComponentPropertiesTraitSchema: z.ZodType<ComponentPropertiesTraitType> = z
  .object({
    componentPropertyDefinitions: z
      .record(z.string(), ComponentPropertyDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'A mapping of name to `ComponentPropertyDefinition` for every component property on this component. Each property has a type, defaultValue, and other optional values.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ComponentPropertiesTrait')

type ComponentNodeType = { type: 'COMPONENT' } & z.infer<typeof FrameTraitsSchema> &
  z.infer<typeof ComponentPropertiesTraitSchema>

type ComponentSetNodeType = { type: 'COMPONENT_SET' } & z.infer<typeof FrameTraitsSchema> &
  z.infer<typeof ComponentPropertiesTraitSchema>

type TableNodeType = { type: 'TABLE' } & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasChildrenTraitSchema> &
  z.infer<typeof HasLayoutTraitSchema> &
  z.infer<typeof MinimalStrokesTraitSchema> &
  z.infer<typeof HasEffectsTraitSchema> &
  z.infer<typeof HasBlendModeAndOpacityTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema>

const TransformModifiersTraitSchema: z.ZodType<TransformModifiersTraitType> = z
  .object({})
  .openapi('TransformModifiersTrait')

type TransformGroupNodeType = { type: 'TRANSFORM_GROUP' } & z.infer<typeof FrameTraitsSchema> &
  z.infer<typeof TransformModifiersTraitSchema>

type ComponentPropertyType = {
  type: z.infer<typeof ComponentPropertyTypeSchema>
  value: boolean | string | z.infer<typeof SlotContentIdSchema>
  preferredValues?: z.infer<typeof InstanceSwapPreferredValueSchema>[]
  boundVariables?: { value?: z.infer<typeof VariableAliasSchema> }
}

const ComponentPropertySchema: z.ZodType<ComponentPropertyType> = z
  .object({
    type: ComponentPropertyTypeSchema.openapi({ description: 'Type of this component property.' }),
    value: z
      .xor([z.boolean(), z.string(), SlotContentIdSchema])
      .openapi({ description: 'Value of the property for this component instance.' }),
    preferredValues: z
      .array(InstanceSwapPreferredValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Preferred values for this property. Only applicable if type is `INSTANCE_SWAP` or `SLOT`.',
      }),
    boundVariables: z
      .object({ value: VariableAliasSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this component property',
        required: [],
      }),
  })
  .openapi({ description: 'A property of a component.', required: ['type', 'value'] })
  .openapi('ComponentProperty')

type OverridesType = { id: string; overriddenFields: string[] }

const OverridesSchema: z.ZodType<OverridesType> = z
  .object({
    id: z.string().openapi({ description: 'A unique ID for a node.' }),
    overriddenFields: z.array(z.string()).openapi({ description: 'An array of properties.' }),
  })
  .openapi({
    description: 'Fields directly overridden on an instance. Inherited overrides are not included.',
    required: ['id', 'overriddenFields'],
  })
  .openapi('Overrides')

type InstanceNodeType = {
  type: 'INSTANCE'
  componentId: string
  isExposedInstance?: boolean
  exposedInstances?: string[]
  componentProperties?: { [key: string]: z.infer<typeof ComponentPropertySchema> }
  overrides: z.infer<typeof OverridesSchema>[]
} & z.infer<typeof FrameTraitsSchema>

type WidgetNodeType = { type: 'WIDGET' } & z.infer<typeof IsLayerTraitSchema> &
  z.infer<typeof HasExportSettingsTraitSchema> &
  z.infer<typeof HasChildrenTraitSchema>

type RGBType = { r: number; g: number; b: number }

const BasePaintSchema = z
  .object({
    visible: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Is the paint enabled?' }),
    opacity: z
      .number()
      .min(0)
      .max(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Overall opacity of paint (colors within the paint can also have opacity values which would blend with this)',
      }),
    blendMode: BlendModeSchema.openapi({
      description: 'How this node blends with nodes behind it in the scene',
    }),
  })
  .openapi({ required: ['blendMode'] })
  .openapi('BasePaint')

const SolidPaintSchema = z
  .object({
    type: z
      .literal('SOLID')
      .openapi({
        description:
          'The string literal "SOLID" representing the paint\'s type. Always check the `type` before reading other properties.',
      }),
    color: RGBASchema.openapi({ description: 'Solid color of the paint' }),
    boundVariables: z
      .object({ color: VariableAliasSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this paint',
        required: [],
      }),
  })
  .openapi({ description: 'A solid color', required: ['type', 'color'] })
  .and(BasePaintSchema)
  .openapi('SolidPaint')

const ColorStopSchema = z
  .object({
    position: z
      .number()
      .openapi({ description: 'Value between 0 and 1 representing position along gradient axis.' }),
    color: RGBASchema.openapi({ description: 'Color attached to corresponding position.' }),
    boundVariables: z
      .object({ color: VariableAliasSchema.exactOptional() })
      .exactOptional()
      .openapi({ description: 'The variables bound to a particular gradient stop', required: [] }),
  })
  .openapi({
    description:
      'A single color stop with its position along the gradient axis, color, and bound variables if any',
    required: ['position', 'color'],
  })
  .openapi('ColorStop')

const GradientPaintSchema = z
  .object({
    type: z
      .enum(['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'])
      .openapi({
        description:
          "The string literal representing the paint's type. Always check the `type` before reading other properties.",
      }),
    gradientHandlePositions: z
      .array(VectorSchema)
      .openapi({
        description:
          'This field contains three vectors, each of which are a position in normalized object space (normalized object space is if the top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)). The first position corresponds to the start of the gradient (value 0 for the purposes of calculating gradient stops), the second position is the end of the gradient (value 1), and the third handle position determines the width of the gradient.',
      }),
    gradientStops: z
      .array(ColorStopSchema)
      .openapi({
        description:
          'Positions of key points along the gradient axis with the colors anchored there. Colors along the gradient are interpolated smoothly between neighboring gradient stops.',
      }),
  })
  .openapi({
    description: 'A gradient',
    required: ['type', 'gradientHandlePositions', 'gradientStops'],
  })
  .and(BasePaintSchema)
  .openapi('GradientPaint')

const ImageFiltersSchema = z
  .object({
    exposure: z.number().default(0).exactOptional(),
    contrast: z.number().default(0).exactOptional(),
    saturation: z.number().default(0).exactOptional(),
    temperature: z.number().default(0).exactOptional(),
    tint: z.number().default(0).exactOptional(),
    highlights: z.number().default(0).exactOptional(),
    shadows: z.number().default(0).exactOptional(),
  })
  .openapi({ description: 'Image filters to apply to the node.', required: [] })
  .openapi('ImageFilters')

const ImagePaintSchema = z
  .object({
    type: z
      .literal('IMAGE')
      .openapi({
        description:
          'The string literal "IMAGE" representing the paint\'s type. Always check the `type` before reading other properties.',
      }),
    scaleMode: z
      .enum(['FILL', 'FIT', 'TILE', 'STRETCH'])
      .openapi({ description: 'Image scaling mode.' }),
    imageRef: z
      .string()
      .openapi({
        description:
          'A reference to an image embedded in this node. To download the image using this reference, use the `GET file images` endpoint to retrieve the mapping from image references to image URLs.',
      }),
    imageTransform: TransformSchema.exactOptional().openapi({
      description:
        'Affine transform applied to the image, only present if `scaleMode` is `STRETCH`',
    }),
    scalingFactor: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Amount image is scaled by in tiling, only present if scaleMode is `TILE`.',
      }),
    filters: ImageFiltersSchema.exactOptional().openapi({
      description:
        'Defines what image filters have been applied to this paint, if any. If this property is not defined, no filters have been applied.',
    }),
    rotation: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Image rotation, in degrees.' }),
    gifRef: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to an animated GIF embedded in this node. To download the image using this reference, use the `GET file images` endpoint to retrieve the mapping from image references to image URLs.',
      }),
  })
  .openapi({ description: 'An image', required: ['type', 'scaleMode', 'imageRef'] })
  .and(BasePaintSchema)
  .openapi('ImagePaint')

const PatternPaintSchema = z
  .object({
    type: z
      .literal('PATTERN')
      .openapi({
        description:
          'The string literal "PATTERN" representing the paint\'s type. Always check the `type` before reading other properties.',
      }),
    sourceNodeId: z
      .string()
      .openapi({ description: 'The node id of the source node for the pattern' }),
    tileType: z
      .enum(['RECTANGULAR', 'HORIZONTAL_HEXAGONAL', 'VERTICAL_HEXAGONAL'])
      .openapi({ description: 'The tile type for the pattern' }),
    scalingFactor: z.number().openapi({ description: 'The scaling factor for the pattern' }),
    spacing: VectorSchema.openapi({ description: 'The spacing for the pattern' }),
    horizontalAlignment: z
      .enum(['START', 'CENTER', 'END'])
      .openapi({ description: 'The horizontal alignment for the pattern' }),
    verticalAlignment: z
      .enum(['START', 'CENTER', 'END'])
      .openapi({ description: 'The vertical alignment for the pattern' }),
  })
  .openapi({
    description: 'A pattern',
    required: [
      'type',
      'sourceNodeId',
      'tileType',
      'scalingFactor',
      'spacing',
      'horizontalAlignment',
      'verticalAlignment',
    ],
  })
  .and(BasePaintSchema)
  .openapi('PatternPaint')

type PaintType =
  | z.infer<typeof SolidPaintSchema>
  | z.infer<typeof GradientPaintSchema>
  | z.infer<typeof ImagePaintSchema>
  | z.infer<typeof PatternPaintSchema>

const BaseBlurEffectSchema = z
  .object({
    type: z
      .enum(['LAYER_BLUR', 'BACKGROUND_BLUR'])
      .openapi({
        description:
          "A string literal representing the effect's type. Always check the type before reading other properties.",
      }),
    visible: z.boolean().openapi({ description: 'Whether this blur is active.' }),
    radius: z.number().min(0).openapi({ description: 'Radius of the blur effect' }),
    boundVariables: z
      .object({ radius: VariableAliasSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this blur effect',
        required: [],
      }),
  })
  .openapi({
    description: 'Base properties shared by all blur effects',
    required: ['type', 'visible', 'radius'],
  })
  .openapi('BaseBlurEffect')

const NormalBlurEffectSchema = z
  .object({
    blurType: z
      .literal('NORMAL')
      .exactOptional()
      .openapi({
        description:
          "The string literal 'NORMAL' representing the blur type. Always check the blurType before reading other properties.",
      }),
  })
  .openapi({ description: 'A normal blur effect', required: [] })
  .and(BaseBlurEffectSchema)
  .openapi('NormalBlurEffect')

const ProgressiveBlurEffectSchema = z
  .object({
    blurType: z
      .literal('PROGRESSIVE')
      .openapi({
        description:
          "The string literal 'PROGRESSIVE' representing the blur type. Always check the blurType before reading other properties.",
      }),
    startRadius: z.number().openapi({ description: 'The starting radius of the progressive blur' }),
    startOffset: VectorSchema.openapi({
      description: 'The starting offset of the progressive blur',
    }),
    endOffset: VectorSchema.openapi({ description: 'The ending offset of the progressive blur' }),
  })
  .openapi({
    description: 'A progressive blur effect',
    required: ['blurType', 'startRadius', 'startOffset', 'endOffset'],
  })
  .and(BaseBlurEffectSchema)
  .openapi('ProgressiveBlurEffect')

type BlurEffectType =
  | z.infer<typeof NormalBlurEffectSchema>
  | z.infer<typeof ProgressiveBlurEffectSchema>

const BaseNoiseEffectSchema = z
  .object({
    type: z
      .literal('NOISE')
      .openapi({
        description:
          "The string literal 'NOISE' representing the effect's type. Always check the type before reading other properties.",
      }),
    color: RGBASchema.openapi({ description: 'The color of the noise effect' }),
    visible: z.boolean().openapi({ description: 'Whether the noise effect is visible.' }),
    blendMode: BlendModeSchema.openapi({ description: 'Blend mode of the noise effect' }),
    noiseSize: z.number().openapi({ description: 'The size of the noise effect' }),
    density: z.number().openapi({ description: 'The density of the noise effect' }),
  })
  .openapi({
    description: 'A noise effect',
    required: ['type', 'color', 'visible', 'noiseSize', 'density', 'blendMode'],
  })
  .openapi('BaseNoiseEffect')

const MonotoneNoiseEffectSchema = z
  .object({
    noiseType: z
      .literal('MONOTONE')
      .openapi({ description: "The string literal 'MONOTONE' representing the noise type." }),
  })
  .openapi({ description: 'A monotone noise effect', required: ['noiseType'] })
  .and(BaseNoiseEffectSchema)
  .openapi('MonotoneNoiseEffect')

const MultitoneNoiseEffectSchema = z
  .object({
    noiseType: z
      .literal('MULTITONE')
      .openapi({ description: "The string literal 'MULTITONE' representing the noise type." }),
    opacity: z.number().openapi({ description: 'The opacity of the noise effect' }),
  })
  .openapi({ description: 'A multitone noise effect', required: ['noiseType', 'opacity'] })
  .and(BaseNoiseEffectSchema)
  .openapi('MultitoneNoiseEffect')

const DuotoneNoiseEffectSchema = z
  .object({
    noiseType: z
      .literal('DUOTONE')
      .openapi({ description: "The string literal 'DUOTONE' representing the noise type." }),
    secondaryColor: RGBASchema.openapi({ description: 'The secondary color of the noise effect' }),
  })
  .openapi({ description: 'A duotone noise effect', required: ['noiseType', 'secondaryColor'] })
  .and(BaseNoiseEffectSchema)
  .openapi('DuotoneNoiseEffect')

type NoiseEffectType =
  | z.infer<typeof MonotoneNoiseEffectSchema>
  | z.infer<typeof MultitoneNoiseEffectSchema>
  | z.infer<typeof DuotoneNoiseEffectSchema>

const BaseShadowEffectSchema = z
  .object({
    color: RGBASchema.openapi({ description: 'The color of the shadow' }),
    blendMode: BlendModeSchema.openapi({ description: 'Blend mode of the shadow' }),
    offset: VectorSchema.openapi({
      description: 'How far the shadow is projected in the x and y directions',
    }),
    radius: z
      .number()
      .min(0)
      .openapi({ description: 'Radius of the blur effect (applies to shadows as well)' }),
    spread: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The distance by which to expand (or contract) the shadow.\n\nFor drop shadows, a positive `spread` value creates a shadow larger than the node, whereas a negative value creates a shadow smaller than the node.\n\nFor inner shadows, a positive `spread` value contracts the shadow. Spread values are only accepted on rectangles and ellipses, or on frames, components, and instances with visible fill paints and `clipsContent` enabled. When left unspecified, the default value is 0.',
      }),
    visible: z.boolean().openapi({ description: 'Whether this shadow is visible.' }),
    boundVariables: z
      .object({
        radius: VariableAliasSchema.exactOptional(),
        spread: VariableAliasSchema.exactOptional(),
        color: VariableAliasSchema.exactOptional(),
        offsetX: VariableAliasSchema.exactOptional(),
        offsetY: VariableAliasSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'The variables bound to a particular field on this shadow effect',
        required: [],
      }),
  })
  .openapi({
    description: 'Base properties shared by all shadow effects',
    required: ['color', 'blendMode', 'offset', 'radius', 'visible'],
  })
  .openapi('BaseShadowEffect')

const DropShadowEffectSchema = z
  .object({
    type: z
      .literal('DROP_SHADOW')
      .openapi({
        description:
          "A string literal representing the effect's type. Always check the type before reading other properties.",
      }),
    showShadowBehindNode: z
      .boolean()
      .default(false)
      .openapi({
        description: 'Whether to show the shadow behind translucent or transparent pixels',
      }),
  })
  .openapi({ description: 'A drop shadow effect', required: ['type', 'showShadowBehindNode'] })
  .and(BaseShadowEffectSchema)
  .openapi('DropShadowEffect')

const InnerShadowEffectSchema = z
  .object({
    type: z
      .literal('INNER_SHADOW')
      .exactOptional()
      .openapi({
        description:
          "A string literal representing the effect's type. Always check the type before reading other properties.",
      }),
  })
  .openapi({ description: 'An inner shadow effect', required: [] })
  .and(BaseShadowEffectSchema)
  .openapi('InnerShadowEffect')

const BlurEffectSchema: z.ZodType<BlurEffectType> = z
  .lazy(() => z.xor([NormalBlurEffectSchema, ProgressiveBlurEffectSchema]))
  .openapi('BlurEffect')

const TextureEffectSchema = z
  .object({
    type: z
      .literal('TEXTURE')
      .openapi({
        description:
          "The string literal 'TEXTURE' representing the effect's type. Always check the type before reading other properties.",
      }),
    visible: z.boolean().openapi({ description: 'Whether the texture effect is visible.' }),
    noiseSize: z.number().openapi({ description: 'The size of the texture effect' }),
    radius: z.number().openapi({ description: 'The radius of the texture effect' }),
    clipToShape: z
      .boolean()
      .openapi({ description: 'Whether the texture is clipped to the shape' }),
  })
  .openapi({
    description: 'A texture effect',
    required: ['type', 'visible', 'noiseSize', 'radius', 'clipToShape'],
  })
  .openapi('TextureEffect')

const NoiseEffectSchema: z.ZodType<NoiseEffectType> = z
  .lazy(() =>
    z.xor([MonotoneNoiseEffectSchema, MultitoneNoiseEffectSchema, DuotoneNoiseEffectSchema]),
  )
  .openapi('NoiseEffect')

type EffectType =
  | z.infer<typeof DropShadowEffectSchema>
  | z.infer<typeof InnerShadowEffectSchema>
  | z.infer<typeof BlurEffectSchema>
  | z.infer<typeof TextureEffectSchema>
  | z.infer<typeof NoiseEffectSchema>

type TypeStyleType = {
  paragraphSpacing?: number
  paragraphIndent?: number
  listSpacing?: number
  textDecoration?: 'NONE' | 'STRIKETHROUGH' | 'UNDERLINE'
  textAutoResize?: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT' | 'TRUNCATE'
  textTruncation?: 'DISABLED' | 'ENDING'
  maxLines?: number
  lineHeightPx?: number
  lineHeightPercent?: number
  lineHeightPercentFontSize?: number
  lineHeightUnit?: 'PIXELS' | 'FONT_SIZE_%' | 'INTRINSIC_%'
  isOverrideOverTextStyle?: boolean
  boundVariables?: {
    fontFamily?: z.infer<typeof VariableAliasSchema>
    fontSize?: z.infer<typeof VariableAliasSchema>
    fontStyle?: z.infer<typeof VariableAliasSchema>
    fontWeight?: z.infer<typeof VariableAliasSchema>
    letterSpacing?: z.infer<typeof VariableAliasSchema>
    lineHeight?: z.infer<typeof VariableAliasSchema>
    paragraphSpacing?: z.infer<typeof VariableAliasSchema>
    paragraphIndent?: z.infer<typeof VariableAliasSchema>
  }
} & z.infer<typeof BaseTypeStyleSchema>

const AfterTimeoutTriggerSchema = z
  .object({ type: z.literal('AFTER_TIMEOUT'), timeout: z.number() })
  .openapi({ required: ['type', 'timeout'] })
  .openapi('AfterTimeoutTrigger')

const OnKeyDownTriggerSchema = z
  .object({
    type: z.literal('ON_KEY_DOWN'),
    device: z.enum(['KEYBOARD', 'XBOX_ONE', 'PS4', 'SWITCH_PRO', 'UNKNOWN_CONTROLLER']),
    keyCodes: z.array(z.number()),
  })
  .openapi({ required: ['type', 'device', 'keyCodes'] })
  .openapi('OnKeyDownTrigger')

const OnMediaHitTriggerSchema = z
  .object({ type: z.literal('ON_MEDIA_HIT'), mediaHitTime: z.number() })
  .openapi({ required: ['type', 'mediaHitTime'] })
  .openapi('OnMediaHitTrigger')

type TriggerType =
  | { type: 'ON_CLICK' | 'ON_HOVER' | 'ON_PRESS' | 'ON_DRAG' }
  | z.infer<typeof AfterTimeoutTriggerSchema>
  | {
      type: 'MOUSE_ENTER' | 'MOUSE_LEAVE' | 'MOUSE_UP' | 'MOUSE_DOWN'
      delay: number
      deprecatedVersion?: boolean
    }
  | z.infer<typeof OnKeyDownTriggerSchema>
  | z.infer<typeof OnMediaHitTriggerSchema>
  | { type: 'ON_MEDIA_END' }

type OpenURLActionType = { type: 'URL'; url: string }

const OpenURLActionSchema: z.ZodType<OpenURLActionType> = z
  .object({ type: z.literal('URL'), url: z.string() })
  .openapi({ description: 'An action that opens a URL.', required: ['type', 'url'] })
  .openapi('OpenURLAction')

type UpdateMediaRuntimeActionType =
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId: string | null
      mediaAction: 'PLAY' | 'PAUSE' | 'TOGGLE_PLAY_PAUSE' | 'MUTE' | 'UNMUTE' | 'TOGGLE_MUTE_UNMUTE'
    }
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId?: string | null
      mediaAction: 'SKIP_FORWARD' | 'SKIP_BACKWARD'
      amountToSkip: number
    }
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId?: string | null
      mediaAction: 'SKIP_TO'
      newTimestamp: number
    }

const UpdateMediaRuntimeActionSchema: z.ZodType<UpdateMediaRuntimeActionType> = z
  .xor([
    z
      .object({
        type: z.literal('UPDATE_MEDIA_RUNTIME'),
        destinationId: z.string().nullable(),
        mediaAction: z.enum([
          'PLAY',
          'PAUSE',
          'TOGGLE_PLAY_PAUSE',
          'MUTE',
          'UNMUTE',
          'TOGGLE_MUTE_UNMUTE',
        ]),
      })
      .openapi({
        description:
          'An action that updates the runtime of a media node by playing, pausing, toggling play/pause, \nmuting, unmuting, or toggling mute/unmute.\n\nThe `destinationId` is the node ID of the media node to update. If `destinationId` is `null`, the action will \nupdate the media node that contains the action.\n\nThe `mediaAction` is the action to perform on the media node.',
        required: ['type', 'destinationId', 'mediaAction'],
      }),
    z
      .object({
        type: z.literal('UPDATE_MEDIA_RUNTIME'),
        destinationId: z.string().nullable().exactOptional(),
        mediaAction: z.enum(['SKIP_FORWARD', 'SKIP_BACKWARD']),
        amountToSkip: z.number(),
      })
      .openapi({
        description:
          'An action that updates the runtime of a media node by skipping forward or backward.\n\nThe `destinationId` is the node ID of the media node to update. If `destinationId` is `null`, the action will \nupdate the media node that contains the action.\n\nThe `mediaAction` is the action to perform on the media node.\n\nThe `amountToSkip` is the amount of time to skip in seconds.',
        required: ['type', 'mediaAction', 'amountToSkip'],
      }),
    z
      .object({
        type: z.literal('UPDATE_MEDIA_RUNTIME'),
        destinationId: z.string().nullable().exactOptional(),
        mediaAction: z.literal('SKIP_TO'),
        newTimestamp: z.number(),
      })
      .openapi({
        description:
          'An action that updates the runtime of a media node by skipping to a specific time.\n\nThe `destinationId` is the node ID of the media node to update. If `destinationId` is `null`, the action will \nupdate the media node that contains the action.\n\nThe `mediaAction` is the action to perform on the media node.\n\nThe `newTimestamp` is the new time to skip to in seconds.',
        required: ['type', 'mediaAction', 'newTimestamp'],
      }),
  ])
  .openapi({
    description:
      'An action that affects a video node in the Figma viewer. For example, to play, pause, or skip.',
  })
  .openapi('UpdateMediaRuntimeAction')

const VariableDataSchema: z.ZodType<VariableDataType> = z
  .lazy(() =>
    z
      .object({
        type: VariableDataTypeSchema.exactOptional(),
        resolvedType: VariableResolvedDataTypeSchema.exactOptional(),
        value: z
          .xor([
            z.boolean(),
            z.number(),
            z.string(),
            RGBSchema,
            RGBASchema,
            VariableAliasSchema,
            ExpressionSchema,
          ])
          .exactOptional(),
      })
      .openapi({ description: 'A value to set a variable to during prototyping.', required: [] }),
  )
  .openapi('VariableData')

type SetVariableActionType = {
  type: 'SET_VARIABLE'
  variableId: string | null
  variableValue?: z.infer<typeof VariableDataSchema>
}

const SetVariableActionSchema: z.ZodType<SetVariableActionType> = z
  .object({
    type: z.literal('SET_VARIABLE'),
    variableId: z.string().nullable(),
    variableValue: VariableDataSchema.exactOptional(),
  })
  .openapi({
    description: 'Sets a variable to a specific value.',
    required: ['type', 'variableId'],
  })
  .openapi('SetVariableAction')

type SetVariableModeActionType = {
  type: 'SET_VARIABLE_MODE'
  variableCollectionId?: string | null
  variableModeId?: string | null
}

const SetVariableModeActionSchema: z.ZodType<SetVariableModeActionType> = z
  .object({
    type: z.literal('SET_VARIABLE_MODE'),
    variableCollectionId: z.string().nullable().exactOptional(),
    variableModeId: z.string().nullable().exactOptional(),
  })
  .openapi({
    description: 'Sets a variable to a specific mode.',
    required: ['type', 'variableId', 'variableMode'],
  })
  .openapi('SetVariableModeAction')

const ConditionalActionSchema: z.ZodType<ConditionalActionType> = z
  .lazy(() =>
    z
      .object({
        type: z.literal('CONDITIONAL'),
        conditionalBlocks: z.array(ConditionalBlockSchema),
      })
      .openapi({
        description:
          'Checks if a condition is met before performing certain actions by using an if/else conditional statement.',
        required: ['type', 'conditionalBlocks'],
      }),
  )
  .openapi('ConditionalAction')

const NavigationSchema = z
  .enum(['NAVIGATE', 'SWAP', 'OVERLAY', 'SCROLL_TO', 'CHANGE_TO'])
  .openapi({
    description:
      'The method of navigation. The possible values are:\n- `"NAVIGATE"`: Replaces the current screen with the destination, also closing all overlays.\n- `"OVERLAY"`: Opens the destination as an overlay on the current screen.\n- `"SWAP"`: On an overlay, replaces the current (topmost) overlay with the destination. On a top-level frame, \n  behaves the same as `"NAVIGATE"` except that no entry is added to the navigation history.\n- `"SCROLL_TO"`: Scrolls to the destination on the current screen.\n- `"CHANGE_TO"`: Changes the closest ancestor instance of source node to the specified variant.',
  })
  .openapi('Navigation')

const TransitionSchema: z.ZodType<TransitionType> = z
  .lazy(() => z.xor([SimpleTransitionSchema, DirectionalTransitionSchema]))
  .openapi('Transition')

type NodeActionType = {
  type: 'NODE'
  destinationId: string | null
  navigation: z.infer<typeof NavigationSchema>
  transition: z.infer<typeof TransitionSchema> | ({ [key: string]: unknown } | null)
  preserveScrollPosition?: boolean
  overlayRelativePosition?: z.infer<typeof VectorSchema>
  resetVideoPosition?: boolean
  resetScrollPosition?: boolean
  resetInteractiveComponents?: boolean
}

const NodeActionSchema: z.ZodType<NodeActionType> = z
  .object({
    type: z.literal('NODE'),
    destinationId: z.string().nullable(),
    navigation: NavigationSchema,
    transition: z.xor([TransitionSchema, z.null().nullable()]),
    preserveScrollPosition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the scroll offsets of any scrollable elements in the current screen or overlay are preserved when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same.',
      }),
    overlayRelativePosition: VectorSchema.exactOptional().openapi({
      description:
        'Applicable only when `navigation` is `"OVERLAY"` and the destination is a frame with `overlayPosition` equal to `"MANUAL"`. This value represents the offset by which the overlay is opened relative to this node.',
    }),
    resetVideoPosition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, all videos within the destination frame will reset their memorized playback position to 00:00 before starting to play.',
      }),
    resetScrollPosition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the scroll offsets of any scrollable elements in the current screen or overlay reset when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same.',
      }),
    resetInteractiveComponents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the state of any interactive components in the current screen or overlay reset when navigating to the destination. This is applicable if there are interactive components in the destination frame.',
      }),
  })
  .openapi({
    description: 'An action that navigates to a specific node in the Figma viewer.',
    required: ['type', 'destinationId', 'navigation', 'transition'],
  })
  .openapi('NodeAction')

type ActionType =
  | { type: 'BACK' | 'CLOSE' }
  | z.infer<typeof OpenURLActionSchema>
  | z.infer<typeof UpdateMediaRuntimeActionSchema>
  | z.infer<typeof SetVariableActionSchema>
  | z.infer<typeof SetVariableModeActionSchema>
  | z.infer<typeof ConditionalActionSchema>
  | z.infer<typeof NodeActionSchema>

const EasingSchema = z
  .object({
    type: EasingTypeSchema.openapi({ description: 'The type of easing curve.' }),
    easingFunctionCubicBezier: z
      .object({
        x1: z.number().openapi({ description: 'The x component of the first control point.' }),
        y1: z.number().openapi({ description: 'The y component of the first control point.' }),
        x2: z.number().openapi({ description: 'The x component of the second control point.' }),
        y2: z.number().openapi({ description: 'The y component of the second control point.' }),
      })
      .exactOptional()
      .openapi({
        description: 'A cubic bezier curve that defines the easing.',
        required: ['x1', 'y1', 'x2', 'y2'],
      }),
    easingFunctionSpring: z
      .object({ mass: z.number(), stiffness: z.number(), damping: z.number() })
      .exactOptional()
      .openapi({
        description: 'A spring function that defines the easing.',
        required: ['mass', 'stiffness', 'damping'],
      }),
  })
  .openapi({ description: 'Describes an easing curve.', required: ['type'] })
  .openapi('Easing')

const SimpleTransitionSchema = z
  .object({
    type: z.enum(['DISSOLVE', 'SMART_ANIMATE', 'SCROLL_ANIMATE']),
    duration: z
      .number()
      .openapi({ description: 'The duration of the transition in milliseconds.' }),
    easing: EasingSchema.openapi({ description: 'The easing curve of the transition.' }),
  })
  .openapi({
    description: 'Describes an animation used when navigating in a prototype.',
    required: ['type', 'duration', 'easing'],
  })
  .openapi('SimpleTransition')

const DirectionalTransitionSchema = z
  .object({
    type: z.enum(['MOVE_IN', 'MOVE_OUT', 'PUSH', 'SLIDE_IN', 'SLIDE_OUT']),
    direction: z.enum(['LEFT', 'RIGHT', 'TOP', 'BOTTOM']),
    duration: z
      .number()
      .openapi({ description: 'The duration of the transition in milliseconds.' }),
    easing: EasingSchema.openapi({ description: 'The easing curve of the transition.' }),
    matchLayers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When the transition `type` is `"SMART_ANIMATE"` or when `matchLayers` is `true`, then the transition will be performed using smart animate, which attempts to match corresponding layers an interpolate other properties during the animation.',
      }),
  })
  .openapi({
    description: 'Describes an animation used when navigating in a prototype.',
    required: ['type', 'direction', 'duration', 'easing'],
  })
  .openapi('DirectionalTransition')

type TransitionType =
  | z.infer<typeof SimpleTransitionSchema>
  | z.infer<typeof DirectionalTransitionSchema>

const ConditionalBlockSchema: z.ZodType<ConditionalBlockType> = z
  .lazy(() =>
    z
      .object({ condition: VariableDataSchema.exactOptional(), actions: z.array(ActionSchema) })
      .openapi({
        description:
          'Either the if or else conditional blocks. The if block contains a condition to check. If that condition is met then it will run those list of actions, else it will run the actions in the else block.',
        required: ['actions'],
      }),
  )
  .openapi('ConditionalBlock')

type ConditionalActionType = {
  type: 'CONDITIONAL'
  conditionalBlocks: z.infer<typeof ConditionalBlockSchema>[]
}

type VariableDataTypeType =
  | 'BOOLEAN'
  | 'FLOAT'
  | 'STRING'
  | 'COLOR'
  | 'VARIABLE_ALIAS'
  | 'EXPRESSION'

const VariableDataTypeSchema: z.ZodType<VariableDataTypeType> = z
  .enum(['BOOLEAN', 'FLOAT', 'STRING', 'COLOR', 'VARIABLE_ALIAS', 'EXPRESSION'])
  .openapi({ description: 'Defines the types of data a VariableData object can hold' })
  .openapi('VariableDataType')

type VariableResolvedDataTypeType = 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'

const VariableResolvedDataTypeSchema: z.ZodType<VariableResolvedDataTypeType> = z
  .enum(['BOOLEAN', 'FLOAT', 'STRING', 'COLOR'])
  .openapi({ description: 'Defines the types of data a VariableData object can eventually equal' })
  .openapi('VariableResolvedDataType')

const RGBSchema: z.ZodType<RGBType> = z
  .object({
    r: z.number().min(0).max(1).openapi({ description: 'Red channel value, between 0 and 1.' }),
    g: z.number().min(0).max(1).openapi({ description: 'Green channel value, between 0 and 1.' }),
    b: z.number().min(0).max(1).openapi({ description: 'Blue channel value, between 0 and 1.' }),
  })
  .openapi({ description: 'An RGB color', required: ['r', 'g', 'b'] })
  .openapi('RGB')

const ExpressionSchema: z.ZodType<ExpressionType> = z
  .lazy(() =>
    z
      .object({
        expressionFunction: ExpressionFunctionSchema,
        expressionArguments: z.array(VariableDataSchema),
      })
      .openapi({
        description:
          'Defines the [Expression](https://help.figma.com/hc/en-us/articles/15253194385943) object, which contains a list of `VariableData` objects strung together by operators (`ExpressionFunction`).',
        required: ['expressionFunction', 'expressionArguments'],
      }),
  )
  .openapi('Expression')

type VariableDataType = {
  type?: z.infer<typeof VariableDataTypeSchema>
  resolvedType?: z.infer<typeof VariableResolvedDataTypeSchema>
  value?:
    | boolean
    | number
    | string
    | z.infer<typeof RGBSchema>
    | z.infer<typeof RGBASchema>
    | z.infer<typeof VariableAliasSchema>
    | z.infer<typeof ExpressionSchema>
}

type ExpressionFunctionType =
  | 'ADDITION'
  | 'SUBTRACTION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'EQUALS'
  | 'NOT_EQUAL'
  | 'LESS_THAN'
  | 'LESS_THAN_OR_EQUAL'
  | 'GREATER_THAN'
  | 'GREATER_THAN_OR_EQUAL'
  | 'AND'
  | 'OR'
  | 'VAR_MODE_LOOKUP'
  | 'NEGATE'
  | 'NOT'

const ExpressionFunctionSchema: z.ZodType<ExpressionFunctionType> = z
  .enum([
    'ADDITION',
    'SUBTRACTION',
    'MULTIPLICATION',
    'DIVISION',
    'EQUALS',
    'NOT_EQUAL',
    'LESS_THAN',
    'LESS_THAN_OR_EQUAL',
    'GREATER_THAN',
    'GREATER_THAN_OR_EQUAL',
    'AND',
    'OR',
    'VAR_MODE_LOOKUP',
    'NEGATE',
    'NOT',
  ])
  .openapi({ description: 'Defines the list of operators available to use in an Expression.' })
  .openapi('ExpressionFunction')

type ExpressionType = {
  expressionFunction: z.infer<typeof ExpressionFunctionSchema>
  expressionArguments: z.infer<typeof VariableDataSchema>[]
}

type ConditionalBlockType = {
  condition?: z.infer<typeof VariableDataSchema>
  actions: z.infer<typeof ActionSchema>[]
}

const NodeSchema: z.ZodType<NodeType> = z
  .lazy(() =>
    z
      .xor([
        BooleanOperationNodeSchema,
        ComponentNodeSchema,
        ComponentSetNodeSchema,
        ConnectorNodeSchema,
        EllipseNodeSchema,
        EmbedNodeSchema,
        FrameNodeSchema,
        GroupNodeSchema,
        InstanceNodeSchema,
        LineNodeSchema,
        LinkUnfurlNodeSchema,
        RectangleNodeSchema,
        RegularPolygonNodeSchema,
        SectionNodeSchema,
        ShapeWithTextNodeSchema,
        SliceNodeSchema,
        StarNodeSchema,
        StickyNodeSchema,
        TableNodeSchema,
        TableCellNodeSchema,
        TextNodeSchema,
        TextPathNodeSchema,
        TransformGroupNodeSchema,
        VectorNodeSchema,
        WashiTapeNodeSchema,
        WidgetNodeSchema,
        DocumentNodeSchema,
        CanvasNodeSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            BOOLEAN_OPERATION: '#/components/schemas/BooleanOperationNode',
            COMPONENT: '#/components/schemas/ComponentNode',
            COMPONENT_SET: '#/components/schemas/ComponentSetNode',
            CONNECTOR: '#/components/schemas/ConnectorNode',
            ELLIPSE: '#/components/schemas/EllipseNode',
            EMBED: '#/components/schemas/EmbedNode',
            FRAME: '#/components/schemas/FrameNode',
            GROUP: '#/components/schemas/GroupNode',
            INSTANCE: '#/components/schemas/InstanceNode',
            LINE: '#/components/schemas/LineNode',
            LINK_UNFURL: '#/components/schemas/LinkUnfurlNode',
            RECTANGLE: '#/components/schemas/RectangleNode',
            REGULAR_POLYGON: '#/components/schemas/RegularPolygonNode',
            SECTION: '#/components/schemas/SectionNode',
            SHAPE_WITH_TEXT: '#/components/schemas/ShapeWithTextNode',
            SLICE: '#/components/schemas/SliceNode',
            STAR: '#/components/schemas/StarNode',
            STICKY: '#/components/schemas/StickyNode',
            TABLE: '#/components/schemas/TableNode',
            TABLE_CELL: '#/components/schemas/TableCellNode',
            TEXT: '#/components/schemas/TextNode',
            TEXT_PATH: '#/components/schemas/TextPathNode',
            TRANSFORM_GROUP: '#/components/schemas/TransformGroupNode',
            VECTOR: '#/components/schemas/VectorNode',
            WASHI_TAPE: '#/components/schemas/WashiTapeNode',
            WIDGET: '#/components/schemas/WidgetNode',
            DOCUMENT: '#/components/schemas/DocumentNode',
            CANVAS: '#/components/schemas/CanvasNode',
          },
        },
      }),
  )
  .openapi('Node')

const StyleTypeSchema = z
  .enum(['FILL', 'TEXT', 'EFFECT', 'GRID'])
  .openapi({ description: 'The type of style' })
  .openapi('StyleType')

const StyleSchema = z
  .object({
    key: z.string().openapi({ description: 'The key of the style' }),
    name: z.string().openapi({ description: 'Name of the style' }),
    description: z.string().openapi({ description: 'Description of the style' }),
    remote: z
      .boolean()
      .openapi({
        description: "Whether this style is a remote style that doesn't live in this file",
      }),
    styleType: StyleTypeSchema,
  })
  .openapi({
    description:
      "A set of properties that can be applied to nodes and published. Styles for a property can be created in the corresponding property's panel while editing a file.",
    required: ['key', 'name', 'description', 'remote', 'styleType'],
  })
  .openapi('Style')

const DocumentationLinkSchema = z
  .object({
    uri: z.string().openapi({ description: 'Should be a valid URI (e.g. https://www.figma.com).' }),
  })
  .openapi({
    description: 'Represents a link to documentation for a component or component set.',
    required: ['uri'],
  })
  .openapi('DocumentationLink')

const ComponentSchema = z
  .object({
    key: z.string().openapi({ description: 'The key of the component' }),
    name: z.string().openapi({ description: 'Name of the component' }),
    description: z
      .string()
      .openapi({ description: 'The description of the component as entered in the editor' }),
    componentSetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the component set if the component belongs to one' }),
    documentationLinks: z
      .array(DocumentationLinkSchema)
      .openapi({ description: 'An array of documentation links attached to this component' }),
    remote: z
      .boolean()
      .openapi({
        description: "Whether this component is a remote component that doesn't live in this file",
      }),
  })
  .openapi({
    description:
      'A description of a main component. Helps you identify which component instances are attached to.',
    required: ['key', 'name', 'description', 'documentationLinks', 'remote'],
  })
  .openapi('Component')

const ComponentSetSchema = z
  .object({
    key: z.string().openapi({ description: 'The key of the component set' }),
    name: z.string().openapi({ description: 'Name of the component set' }),
    description: z
      .string()
      .openapi({ description: 'The description of the component set as entered in the editor' }),
    documentationLinks: z
      .array(DocumentationLinkSchema)
      .exactOptional()
      .openapi({ description: 'An array of documentation links attached to this component set' }),
    remote: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this component set is a remote component set that doesn't live in this file",
      }),
  })
  .openapi({
    description:
      'A description of a component set, which is a node containing a set of variants of a component.',
    required: ['key', 'name', 'description'],
  })
  .openapi('ComponentSet')

const FrameOffsetSchema = z
  .object({
    node_id: z.string().openapi({ description: 'Unique id specifying the frame.' }),
    node_offset: VectorSchema.openapi({
      description: '2D vector offset within the frame from the top-left corner.',
    }),
  })
  .openapi({
    description: 'Position of a comment relative to the frame to which it is attached.',
    required: ['node_id', 'node_offset'],
  })
  .openapi('FrameOffset')

const RegionSchema = z
  .object({
    x: z.number().openapi({ description: 'X coordinate of the position.' }),
    y: z.number().openapi({ description: 'Y coordinate of the position.' }),
    region_height: z
      .number()
      .openapi({ description: 'The height of the comment region. Must be greater than 0.' }),
    region_width: z
      .number()
      .openapi({ description: 'The width of the comment region. Must be greater than 0.' }),
    comment_pin_corner: z
      .enum(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
      .default('bottom-right')
      .exactOptional()
      .openapi({
        description:
          "The corner of the comment region to pin to the node's corner as a string enum.",
      }),
  })
  .openapi({
    description: 'Position of a region comment on the canvas.',
    required: ['x', 'y', 'region_height', 'region_width'],
  })
  .openapi('Region')

const FrameOffsetRegionSchema = z
  .object({
    node_id: z.string().openapi({ description: 'Unique id specifying the frame.' }),
    node_offset: VectorSchema.openapi({
      description: '2D vector offset within the frame from the top-left corner.',
    }),
    region_height: z
      .number()
      .openapi({ description: 'The height of the comment region. Must be greater than 0.' }),
    region_width: z
      .number()
      .openapi({ description: 'The width of the comment region. Must be greater than 0.' }),
    comment_pin_corner: z
      .enum(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
      .default('bottom-right')
      .exactOptional()
      .openapi({
        description:
          "The corner of the comment region to pin to the node's corner as a string enum.",
      }),
  })
  .openapi({
    description: 'Position of a region comment relative to the frame to which it is attached.',
    required: ['node_id', 'node_offset', 'region_height', 'region_width'],
  })
  .openapi('FrameOffsetRegion')

const UserSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique stable id of the user.' }),
    handle: z.string().openapi({ description: 'Name of the user.' }),
    img_url: z.string().openapi({ description: "URL link to the user's profile image." }),
  })
  .openapi({ description: 'A description of a user.', required: ['id', 'handle', 'img_url'] })
  .openapi('User')

const EmojiSchema = z
  .string()
  .openapi({
    description:
      'The emoji type of reaction as shortcode (e.g. `:heart:`, `:+1::skin-tone-2:`). The list of accepted emoji shortcodes can be found in [this file](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json) under the top-level emojis and aliases fields, with optional skin tone modifiers when applicable.',
  })
  .openapi('Emoji')

const ReactionSchema = z
  .object({
    user: UserSchema.openapi({ description: 'The user who left the reaction.' }),
    emoji: EmojiSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time at which the reaction was left.' }),
  })
  .openapi({ description: 'A reaction left by a user.', required: ['user', 'emoji', 'created_at'] })
  .openapi('Reaction')

const CommentSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for comment.' }),
    client_meta: z
      .xor([VectorSchema, FrameOffsetSchema, RegionSchema, FrameOffsetRegionSchema])
      .openapi({
        description:
          'Positioning information of the comment. Includes information on the location of the comment pin, which is either the absolute coordinates on the canvas or a relative offset within a frame. If the comment is a region, it will also contain the region height, width, and position of the anchor in regards to the region.',
      }),
    file_key: z.string().openapi({ description: 'The file in which the comment lives' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'If present, the id of the comment to which this is the reply' }),
    user: UserSchema.openapi({ description: 'The user who left the comment' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time at which the comment was left' }),
    resolved_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'If set, the UTC ISO 8601 time the comment was resolved' }),
    message: z.string().openapi({ description: 'The content of the comment' }),
    order_id: z
      .string()
      .nullable()
      .openapi({
        description:
          'Only set for top level comments. The number displayed with the comment in the UI',
      }),
    reactions: z
      .array(ReactionSchema)
      .openapi({ description: 'An array of reactions to the comment' }),
  })
  .openapi({
    description: 'A comment or reply left by a user.',
    required: [
      'id',
      'client_meta',
      'file_key',
      'user',
      'created_at',
      'message',
      'reactions',
      'order_id',
    ],
  })
  .openapi('Comment')

const FrameInfoSchema = z
  .object({
    nodeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the frame node within the file.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the frame node.' }),
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The background color of the frame node.' }),
    pageId: z.string().openapi({ description: 'The ID of the page containing the frame node.' }),
    pageName: z
      .string()
      .openapi({ description: 'The name of the page containing the frame node.' }),
    containingStateGroup: z
      .xor([
        z
          .object({
            nodeId: z
              .string()
              .exactOptional()
              .openapi({ description: 'The ID of the state group node.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the state group node.' }),
          })
          .openapi({ required: [] }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated - Use containingComponentSet instead.',
      }),
    containingComponentSet: z
      .xor([
        z
          .object({
            nodeId: z
              .string()
              .exactOptional()
              .openapi({ description: 'The ID of the component set node.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the component set node.' }),
          })
          .openapi({ required: [] }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ description: 'The component set node that contains the frame node.' }),
  })
  .openapi({
    description: 'Data on the frame a component resides in.',
    required: ['pageId', 'pageName'],
  })
  .openapi('FrameInfo')

const PublishedComponentSchema = z
  .object({
    key: z.string().openapi({ description: 'The unique identifier for the component.' }),
    file_key: z
      .string()
      .openapi({
        description: 'The unique identifier of the Figma file that contains the component.',
      }),
    node_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the component node within the Figma file.',
      }),
    thumbnail_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to a thumbnail image of the component.' }),
    name: z.string().openapi({ description: 'The name of the component.' }),
    description: z
      .string()
      .openapi({ description: 'The description of the component as entered by the publisher.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the component was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the component was last updated.' }),
    user: UserSchema.openapi({ description: 'The user who last updated the component.' }),
    containing_frame: FrameInfoSchema.exactOptional().openapi({
      description: 'The containing frame of the component.',
    }),
  })
  .openapi({
    description:
      'An arrangement of published UI elements that can be instantiated across figma files.',
    required: [
      'key',
      'file_key',
      'node_id',
      'name',
      'description',
      'created_at',
      'updated_at',
      'user',
    ],
  })
  .openapi('PublishedComponent')

const PublishedComponentSetSchema = z
  .object({
    key: z.string().openapi({ description: 'The unique identifier for the component set.' }),
    file_key: z
      .string()
      .openapi({
        description: 'The unique identifier of the Figma file that contains the component set.',
      }),
    node_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the component set node within the Figma file.',
      }),
    thumbnail_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to a thumbnail image of the component set.' }),
    name: z.string().openapi({ description: 'The name of the component set.' }),
    description: z
      .string()
      .openapi({
        description: 'The description of the component set as entered by the publisher.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the component set was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the component set was last updated.' }),
    user: UserSchema.openapi({ description: 'The user who last updated the component set.' }),
    containing_frame: FrameInfoSchema.exactOptional().openapi({
      description: 'The containing frame of the component set.',
    }),
  })
  .openapi({
    description: 'A node containing a set of variants of a component.',
    required: [
      'key',
      'file_key',
      'node_id',
      'name',
      'description',
      'created_at',
      'updated_at',
      'user',
    ],
  })
  .openapi('PublishedComponentSet')

const PublishedStyleSchema = z
  .object({
    key: z.string().openapi({ description: 'The unique identifier for the style' }),
    file_key: z
      .string()
      .openapi({ description: 'The unique identifier of the Figma file that contains the style.' }),
    node_id: z.string().openapi({ description: 'ID of the style node within the figma file' }),
    style_type: StyleTypeSchema,
    thumbnail_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to a thumbnail image of the style.' }),
    name: z.string().openapi({ description: 'The name of the style.' }),
    description: z
      .string()
      .openapi({ description: 'The description of the style as entered by the publisher.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the style was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time when the style was last updated.' }),
    user: UserSchema.openapi({ description: 'The user who last updated the style.' }),
    sort_position: z
      .string()
      .openapi({ description: 'A user specified order number by which the style can be sorted.' }),
  })
  .openapi({
    description: 'A set of published properties that can be applied to nodes.',
    required: [
      'key',
      'file_key',
      'node_id',
      'style_type',
      'name',
      'description',
      'created_at',
      'updated_at',
      'user',
      'sort_position',
    ],
  })
  .openapi('PublishedStyle')

const ProjectSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the project.' }),
    name: z.string().openapi({ description: 'The name of the project.' }),
  })
  .openapi({
    description: 'A Project can be identified by both the Project name, and the Project ID.',
    required: ['id', 'name'],
  })
  .openapi('Project')

const VersionSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for version' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time at which the version was created' }),
    label: z
      .string()
      .nullable()
      .openapi({ description: 'The label given to the version in the editor' }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'The description of the version as entered in the editor' }),
    user: UserSchema.openapi({ description: 'The user that created the version' }),
    thumbnail_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to a thumbnail image of the file version.' }),
  })
  .openapi({
    description: 'A version of a file',
    required: ['id', 'created_at', 'label', 'description', 'user'],
  })
  .openapi('Version')

const CreateFolderRequestSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'The name of the folder.' }),
    sharing_audience_control: z
      .enum(['plan_view', 'plan_edit', 'invite_only', 'workspace_view', 'workspace_edit'])
      .openapi({
        description:
          'The audience that can access the folder. Workspace audiences require the specified team to belong to a workspace.',
      }),
  })
  .openapi({
    description: 'Properties for the folder to create.',
    required: ['name', 'sharing_audience_control'],
  })
  .openapi('CreateFolderRequest')

const FolderSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the folder.' }),
    name: z.string().openapi({ description: 'The name of the folder.' }),
    parent_folder_id: z
      .string()
      .nullable()
      .openapi({
        description:
          "The ID of the folder's parent folder, or null if the folder is a top-level folder in the team.",
      }),
    sharing_audience_control: z
      .enum(['plan_view', 'plan_edit', 'invite_only', 'workspace_view', 'workspace_edit'])
      .exactOptional()
      .openapi({ description: 'The audience that can access the folder.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the folder was created.' }),
  })
  .openapi({
    description:
      'A Folder (previously called a "Project") is a collection of files and subfolders. Folders can be nested; a folder\'s parent is identified by `parent_folder_id`.',
    required: ['id', 'name', 'parent_folder_id'],
  })
  .openapi('Folder')

const WebhookV2EventSchema = z
  .enum([
    'PING',
    'FILE_UPDATE',
    'FILE_VERSION_UPDATE',
    'FILE_DELETE',
    'LIBRARY_PUBLISH',
    'FILE_COMMENT',
    'DEV_MODE_STATUS_UPDATE',
  ])
  .openapi({
    description: 'An enum representing the possible events that a webhook can subscribe to',
  })
  .openapi('WebhookV2Event')

const WebhookV2StatusSchema = z
  .enum(['ACTIVE', 'PAUSED'])
  .openapi({
    description:
      'An enum representing the possible statuses you can set a webhook to:\n- `ACTIVE`: The webhook is healthy and receive all events\n- `PAUSED`: The webhook is paused and will not receive any events',
  })
  .openapi('WebhookV2Status')

const WebhookV2Schema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the webhook' }),
    event_type: WebhookV2EventSchema.openapi({ description: 'The event this webhook triggers on' }),
    team_id: z
      .string()
      .openapi({
        description:
          'The team id you are subscribed to for updates. This is deprecated, use context and context_id instead',
        deprecated: true,
      }),
    context: z
      .string()
      .openapi({
        description:
          'The type of context this webhook is attached to. The value will be "PROJECT", "TEAM", or "FILE"',
      }),
    context_id: z
      .string()
      .openapi({ description: 'The ID of the context this webhook is attached to' }),
    plan_api_id: z
      .string()
      .openapi({
        description: 'The plan API ID of the team or organization where this webhook was created',
      }),
    status: WebhookV2StatusSchema.openapi({ description: 'The current status of the webhook' }),
    client_id: z
      .string()
      .nullable()
      .openapi({
        description: 'The client ID of the OAuth application that registered this webhook, if any',
      }),
    passcode: z
      .string()
      .openapi({
        description:
          'The passcode that will be passed back to the webhook endpoint. For security, when using the GET endpoints, the value is an empty string',
      }),
    endpoint: z
      .string()
      .openapi({ description: 'The endpoint that will be hit when the webhook is triggered' }),
    description: z
      .string()
      .nullable()
      .openapi({
        description:
          'Optional user-provided description or name for the webhook. This is provided to help make maintaining a number of webhooks more convenient. Max length 140 characters.',
      }),
  })
  .openapi({
    description: 'A description of an HTTP webhook (from Figma back to your application)',
    required: [
      'id',
      'event_type',
      'team_id',
      'context',
      'context_id',
      'plan_api_id',
      'status',
      'client_id',
      'passcode',
      'endpoint',
      'description',
    ],
  })
  .openapi('WebhookV2')

const WebhookV2RequestInfoSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the webhook' }),
    endpoint: z.string().openapi({ description: 'The actual endpoint the request was sent to' }),
    payload: z
      .object({})
      .openapi({ description: 'The contents of the request that was sent to the endpoint' }),
    sent_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'UTC ISO 8601 timestamp of when the request was sent' }),
  })
  .openapi({
    description: 'Information regarding the request sent to a webhook endpoint',
    required: ['id', 'endpoint', 'payload', 'sent_at'],
  })
  .openapi('WebhookV2RequestInfo')

const WebhookV2ResponseInfoSchema = z
  .object({
    status: z.string().openapi({ description: 'HTTP status code of the response' }),
    received_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'UTC ISO 8601 timestamp of when the response was received' }),
  })
  .nullable()
  .openapi({
    description: 'Information regarding the reply sent back from a webhook endpoint',
    required: ['status', 'received_at'],
  })
  .openapi('WebhookV2ResponseInfo')

const WebhookV2RequestSchema = z
  .object({
    webhook_id: z
      .string()
      .openapi({ description: 'The ID of the webhook the requests were sent to' }),
    request_info: WebhookV2RequestInfoSchema,
    response_info: WebhookV2ResponseInfoSchema,
    error_msg: z
      .string()
      .nullable()
      .openapi({ description: 'Error message for this request. NULL if no error occurred' }),
  })
  .openapi({
    description: 'Information regarding the most recent interactions sent to a webhook endpoint',
    required: ['webhook_id', 'request_info', 'response_info', 'error_msg'],
  })
  .openapi('WebhookV2Request')

const LibraryItemDataSchema = z
  .object({
    key: z.string().openapi({ description: 'Unique identifier for the library item' }),
    name: z.string().openapi({ description: 'Name of the library item' }),
  })
  .openapi({
    description:
      'An object representing the library item information in the payload of the `LIBRARY_PUBLISH` event',
    required: ['key', 'name'],
  })
  .openapi('LibraryItemData')

const CommentFragmentSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comment text that is set if a fragment is text based' }),
    mention: z
      .string()
      .exactOptional()
      .openapi({ description: 'User id that is set if a fragment refers to a user mention' }),
  })
  .openapi({
    description:
      'An object representing a fragment of a comment left by a user, used in the payload of the `FILE_COMMENT` event. Note only ONE of the fields below will be set',
    required: [],
  })
  .openapi('CommentFragment')

const WebhookBasePayloadSchema = z
  .object({
    passcode: z
      .string()
      .openapi({
        description:
          'The passcode specified when the webhook was created, should match what was initially provided',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'UTC ISO 8601 timestamp of when the event was triggered.' }),
    webhook_id: z
      .string()
      .openapi({ description: 'The id of the webhook that caused the callback' }),
  })
  .openapi({ required: ['passcode', 'timestamp', 'webhook_id'] })
  .openapi('WebhookBasePayload')

const WebhookPingPayloadSchema = WebhookBasePayloadSchema.and(
  z.object({ event_type: z.literal('PING') }).openapi({ required: ['event_type'] }),
).openapi('WebhookPingPayload')

const WebhookFileUpdatePayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('FILE_UPDATE'),
      file_key: z.string().openapi({ description: 'The key of the file that was updated' }),
      file_name: z.string().openapi({ description: 'The name of the file that was updated' }),
    })
    .openapi({ required: ['event_type', 'file_key', 'file_name'] }),
).openapi('WebhookFileUpdatePayload')

const WebhookFileDeletePayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('FILE_DELETE'),
      file_key: z.string().openapi({ description: 'The key of the file that was deleted' }),
      file_name: z.string().openapi({ description: 'The name of the file that was deleted' }),
      triggered_by: UserSchema.openapi({
        description: 'The user that deleted the file and triggered this event',
      }),
    })
    .openapi({ required: ['event_type', 'file_key', 'file_name', 'triggered_by'] }),
).openapi('WebhookFileDeletePayload')

const WebhookFileVersionUpdatePayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('FILE_VERSION_UPDATE'),
      created_at: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'UTC ISO 8601 timestamp of when the version was created' }),
      description: z
        .string()
        .exactOptional()
        .openapi({ description: 'Description of the version in the version history' }),
      file_key: z.string().openapi({ description: 'The key of the file that was updated' }),
      file_name: z.string().openapi({ description: 'The name of the file that was updated' }),
      triggered_by: UserSchema.openapi({
        description: 'The user that created the named version and triggered this event',
      }),
      version_id: z.string().openapi({ description: 'ID of the published version' }),
    })
    .openapi({
      required: ['event_type', 'created_at', 'file_key', 'file_name', 'triggered_by', 'version_id'],
    }),
).openapi('WebhookFileVersionUpdatePayload')

const WebhookLibraryPublishPayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('LIBRARY_PUBLISH'),
      created_components: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Components that were created by the library publish' }),
      created_styles: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Styles that were created by the library publish' }),
      created_variables: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Variables that were created by the library publish' }),
      modified_components: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Components that were modified by the library publish' }),
      modified_styles: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Styles that were modified by the library publish' }),
      modified_variables: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Variables that were modified by the library publish' }),
      deleted_components: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Components that were deleted by the library publish' }),
      deleted_styles: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Styles that were deleted by the library publish' }),
      deleted_variables: z
        .array(LibraryItemDataSchema)
        .openapi({ description: 'Variables that were deleted by the library publish' }),
      description: z
        .string()
        .exactOptional()
        .openapi({ description: 'Description of the library publish' }),
      file_key: z.string().openapi({ description: 'The key of the file that was published' }),
      file_name: z.string().openapi({ description: 'The name of the file that was published' }),
      library_item: LibraryItemDataSchema.openapi({
        description: 'The library item that was published',
      }),
      triggered_by: UserSchema.openapi({
        description: 'The user that published the library and triggered this event',
      }),
    })
    .openapi({
      required: [
        'event_type',
        'created_components',
        'created_styles',
        'created_variables',
        'modified_components',
        'modified_styles',
        'modified_variables',
        'deleted_components',
        'deleted_styles',
        'deleted_variables',
        'file_key',
        'file_name',
        'library_item',
        'triggered_by',
      ],
    }),
).openapi('WebhookLibraryPublishPayload')

const WebhookFileCommentPayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('FILE_COMMENT'),
      comment: z
        .array(CommentFragmentSchema)
        .openapi({ description: 'Contents of the comment itself' }),
      comment_id: z.string().openapi({ description: 'Unique identifier for comment' }),
      created_at: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'The UTC ISO 8601 time at which the comment was left' }),
      file_key: z.string().openapi({ description: 'The key of the file that was commented on' }),
      file_name: z.string().openapi({ description: 'The name of the file that was commented on' }),
      mentions: z
        .array(UserSchema)
        .exactOptional()
        .openapi({ description: 'Users that were mentioned in the comment' }),
      triggered_by: UserSchema.openapi({
        description: 'The user that made the comment and triggered this event',
      }),
    })
    .openapi({
      required: [
        'event_type',
        'comment',
        'comment_id',
        'created_at',
        'file_key',
        'file_name',
        'triggered_by',
      ],
    }),
).openapi('WebhookFileCommentPayload')

const DevResourceSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier of the dev resource' }),
    name: z.string().openapi({ description: 'The name of the dev resource.' }),
    url: z.string().openapi({ description: 'The URL of the dev resource.' }),
    file_key: z.string().openapi({ description: 'The file key where the dev resource belongs.' }),
    node_id: z.string().openapi({ description: 'The target node to attach the dev resource to.' }),
  })
  .openapi({
    description: 'A dev resource in a file',
    required: ['id', 'name', 'url', 'file_key', 'node_id'],
  })
  .openapi('DevResource')

const WebhookDevModeStatusUpdatePayloadSchema = WebhookBasePayloadSchema.and(
  z
    .object({
      event_type: z.literal('DEV_MODE_STATUS_UPDATE'),
      file_key: z.string().openapi({ description: 'The key of the file that was updated' }),
      file_name: z.string().openapi({ description: 'The name of the file that was updated' }),
      node_id: z
        .string()
        .openapi({
          description: 'The id of the node where the Dev Mode status changed. For example, "43:2"',
        }),
      related_links: z
        .array(DevResourceSchema)
        .openapi({
          description: 'An array of related links that have been applied to the layer in the file',
        }),
      status: z
        .string()
        .openapi({
          description: 'The Dev Mode status. Either "NONE", "READY_FOR_DEV", or "COMPLETED"',
        }),
      triggered_by: UserSchema.openapi({
        description: 'The user that made the status change and triggered the event',
      }),
    })
    .openapi({
      required: [
        'event_type',
        'file_key',
        'file_name',
        'node_id',
        'related_links',
        'status',
        'triggered_by',
      ],
    }),
).openapi('WebhookDevModeStatusUpdatePayload')

const ActivityLogUserEntitySchema = z
  .object({
    type: z.literal('user').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique stable id of the user.' }),
    name: z.string().openapi({ description: 'Name of the user.' }),
    email: z.string().openapi({ description: "Email associated with the user's account." }),
  })
  .openapi({ description: 'A Figma user', required: ['type', 'id', 'name', 'email'] })
  .openapi('ActivityLogUserEntity')

const LinkAccessSchema = z
  .enum(['view', 'edit', 'org_view', 'org_edit', 'inherit'])
  .openapi({ description: 'Access policy for users who have the link to the resource.' })
  .openapi('LinkAccess')

const ActivityLogFileEntitySchema = z
  .object({
    type: z.literal('file').openapi({ description: 'The type of entity.' }),
    key: z.string().openapi({ description: 'Unique identifier of the file.' }),
    name: z.string().openapi({ description: 'Name of the file.' }),
    editor_type: z
      .enum(['figma', 'figjam'])
      .openapi({ description: 'Indicates if the object is a file on Figma Design or FigJam.' }),
    link_access: LinkAccessSchema.openapi({
      description: 'Access policy for users who have the link to the file.',
    }),
    proto_link_access: z
      .enum(['view', 'org_view', 'inherit'])
      .openapi({
        description: "Access policy for users who have the link to the file's prototype.",
      }),
  })
  .openapi({
    description: 'A Figma Design or FigJam file',
    required: ['type', 'key', 'name', 'editor_type', 'link_access', 'proto_link_access'],
  })
  .openapi('ActivityLogFileEntity')

const ActivityLogFileRepoEntitySchema = z
  .object({
    type: z.literal('file_repo').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the file branch.' }),
    name: z.string().openapi({ description: 'Name of the file.' }),
    main_file_key: z.string().openapi({ description: 'Key of the main file.' }),
  })
  .openapi({
    description: 'A file branch that diverges from and can be merged back into the main file',
    required: ['type', 'id', 'name', 'main_file_key'],
  })
  .openapi('ActivityLogFileRepoEntity')

const ActivityLogProjectEntitySchema = z
  .object({
    type: z.literal('project').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the project.' }),
    name: z.string().openapi({ description: 'Name of the project.' }),
  })
  .openapi({
    description: 'A project that a collection of Figma files are grouped under',
    required: ['type', 'id', 'name'],
  })
  .openapi('ActivityLogProjectEntity')

const ActivityLogTeamEntitySchema = z
  .object({
    type: z.literal('team').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the team.' }),
    name: z.string().openapi({ description: 'Name of the team.' }),
  })
  .openapi({
    description: 'A Figma team that contains multiple users and projects',
    required: ['type', 'id', 'name'],
  })
  .openapi('ActivityLogTeamEntity')

const ActivityLogWorkspaceEntitySchema = z
  .object({
    type: z.literal('workspace').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the workspace.' }),
    name: z.string().openapi({ description: 'Name of the workspace.' }),
  })
  .openapi({
    description:
      'Part of the organizational hierarchy of managing files and users within Figma, only available on the Enterprise Plan',
    required: ['type', 'id', 'name'],
  })
  .openapi('ActivityLogWorkspaceEntity')

const ActivityLogOrgEntitySchema = z
  .object({
    type: z.literal('org').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the organization.' }),
    name: z.string().openapi({ description: 'Name of the organization.' }),
  })
  .openapi({ description: 'A Figma organization', required: ['type', 'id', 'name'] })
  .openapi('ActivityLogOrgEntity')

const ActivityLogPluginEntitySchema = z
  .object({
    type: z.literal('plugin').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the plugin.' }),
    name: z.string().openapi({ description: 'Name of the plugin.' }),
    editor_type: z
      .enum(['figma', 'figjam'])
      .openapi({
        description: 'Indicates if the object is a plugin is available on Figma Design or FigJam.',
      }),
  })
  .openapi({ description: 'A Figma plugin', required: ['type', 'id', 'name', 'editor_type'] })
  .openapi('ActivityLogPluginEntity')

const ActivityLogWidgetEntitySchema = z
  .object({
    type: z.literal('widget').openapi({ description: 'The type of entity.' }),
    id: z.string().openapi({ description: 'Unique identifier of the widget.' }),
    name: z.string().openapi({ description: 'Name of the widget.' }),
    editor_type: z
      .enum(['figma', 'figjam'])
      .openapi({
        description: 'Indicates if the object is a widget available on Figma Design or FigJam.',
      }),
  })
  .openapi({ description: 'A Figma widget', required: ['type', 'id', 'name', 'editor_type'] })
  .openapi('ActivityLogWidgetEntity')

const ActivityLogSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the event.' }),
    timestamp: z
      .number()
      .openapi({ description: 'The timestamp of the event in seconds since the Unix epoch.' }),
    actor: z
      .object({
        type: z.literal('user').exactOptional().openapi({ description: 'The type of the user.' }),
        id: z.string().exactOptional().openapi({ description: 'The ID of the user.' }),
        name: z
          .string()
          .openapi({
            description:
              'The name of the user. For SCIM events, the value is "SCIM Provider". For official support actions, the value is "Figma Support".',
          }),
        email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
      })
      .nullable()
      .openapi({ description: 'The user who performed the action.', required: ['name'] }),
    action: z
      .object({
        type: z.string().openapi({ description: 'The type of the action.' }),
        details: z
          .looseObject({})
          .nullable()
          .openapi({
            description:
              'Metadata of the action. Each action type supports its own metadata attributes.',
          }),
      })
      .openapi({
        description: 'The task or activity the actor performed.',
        required: ['type', 'details'],
      }),
    entity: z
      .discriminatedUnion('type', [
        ActivityLogUserEntitySchema,
        ActivityLogFileEntitySchema,
        ActivityLogFileRepoEntitySchema,
        ActivityLogProjectEntitySchema,
        ActivityLogTeamEntitySchema,
        ActivityLogWorkspaceEntitySchema,
        ActivityLogOrgEntitySchema,
        ActivityLogPluginEntitySchema,
        ActivityLogWidgetEntitySchema,
      ])
      .openapi({
        description:
          'The resource the actor took the action on. It can be a user, file, project or other resource types.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            user: '#/components/schemas/ActivityLogUserEntity',
            file: '#/components/schemas/ActivityLogFileEntity',
            file_repo: '#/components/schemas/ActivityLogFileRepoEntity',
            project: '#/components/schemas/ActivityLogProjectEntity',
            team: '#/components/schemas/ActivityLogTeamEntity',
            workspace: '#/components/schemas/ActivityLogWorkspaceEntity',
            org: '#/components/schemas/ActivityLogOrgEntity',
            plugin: '#/components/schemas/ActivityLogPluginEntity',
            widget: '#/components/schemas/ActivityLogWidgetEntity',
          },
        },
      }),
    context: z
      .object({
        client_name: z
          .string()
          .nullable()
          .openapi({
            description: 'The third-party application that triggered the event, if applicable.',
          }),
        ip_address: z
          .string()
          .openapi({
            description: 'The IP address from of the client that sent the event request.',
          }),
        is_figma_support_team_action: z
          .boolean()
          .openapi({
            description:
              "If Figma's Support team triggered the event. This is either true or false.",
          }),
        org_id: z
          .string()
          .openapi({ description: 'The id of the organization where the event took place.' }),
        team_id: z
          .string()
          .nullable()
          .openapi({
            description:
              'The id of the team where the event took place -- if this took place in a specific team.',
          }),
      })
      .openapi({
        description: 'Contextual information about the event.',
        required: [
          'client_name',
          'ip_address',
          'is_figma_support_team_action',
          'org_id',
          'team_id',
        ],
      }),
  })
  .openapi({
    description: 'An event returned by the Activity Logs API.',
    required: ['id', 'timestamp', 'actor', 'action', 'entity', 'context'],
  })
  .openapi('ActivityLog')

const DeveloperLogActionSchema = z
  .object({
    event_name: z
      .string()
      .openapi({
        description: 'The route path (for REST API requests) or tool name (for MCP server calls).',
      }),
    event_source: z
      .enum(['rest_api', 'mcp_server'])
      .openapi({ description: 'The source of the event.' }),
  })
  .openapi({
    description: 'The API endpoint or tool that was called.',
    required: ['event_name', 'event_source'],
  })
  .openapi('DeveloperLogAction')

const DeveloperLogActorSchema = z
  .object({
    user_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The ID of the user who made the request; null for requests made with plan access tokens, as there is no associated user.',
      }),
    user_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the user who made the request; null for requests made with plan access tokens, as there is no associated user.',
      }),
    user_email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The email of the user who made the request; null for requests made with plan access tokens, as there is no associated user.',
      }),
    token_name: z
      .string()
      .openapi({ description: 'The name of the token, or the OAuth app name for OAuth tokens.' }),
    token_type: z
      .enum(['developer_token', 'plan_access_token', 'oauth_token'])
      .openapi({ description: 'The type of token used for authentication.' }),
  })
  .openapi({
    description: 'The token used and associated user for the request.',
    required: ['token_name', 'token_type'],
  })
  .openapi('DeveloperLogActor')

const DeveloperLogResourceSchema = z
  .object({
    id_or_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The ID or key of the resource. For files this is the file key; for teams and projects this is the numeric ID. Null for requests without an associated resources (e.g. activity logs).',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the resource; null for requests without an associated resource (e.g. activity logs).',
      }),
    type: z
      .union([z.literal('file'), z.literal('team'), z.literal('project'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The type of resource; null for requests without an associated resource (e.g. activity logs).',
      }),
    org_id: z
      .string()
      .openapi({
        description:
          'The ID of the organization associated with the request (e.g. that owns the resource).',
      }),
  })
  .openapi({ description: 'The resource accessed by the request.', required: ['org_id'] })
  .openapi('DeveloperLogResource')

const DeveloperLogContextSchema = z
  .object({
    ip_address: z
      .string()
      .openapi({ description: 'The IP address of the client that made the request.' }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The city of the client, if available.' }),
    country_region: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The region of the client, if available.' }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The country of the client, if available.' }),
  })
  .openapi({ description: 'Context about the request.', required: ['ip_address'] })
  .openapi('DeveloperLogContext')

const DeveloperLogSchema = z
  .object({
    uuid: z.string().openapi({ description: 'The unique identifier of the log entry.' }),
    timestamp: z
      .string()
      .openapi({ description: 'The ISO 8601 timestamp of when the request was made.' }),
    action: DeveloperLogActionSchema,
    actor: DeveloperLogActorSchema,
    resource: DeveloperLogResourceSchema,
    context: DeveloperLogContextSchema,
  })
  .openapi({
    description:
      'A log entry from the Developer Log, representing a REST API or MCP server request.',
    required: ['uuid', 'timestamp', 'action', 'actor', 'resource', 'context'],
  })
  .openapi('DeveloperLog')

const AiUsageDailyRowSchema = z
  .object({
    plan_id: z.string().openapi({ description: 'The id of the plan the usage belongs to.' }),
    user_id: z
      .string()
      .openapi({ description: 'The id of the Figma user that consumed the credits.' }),
    user_email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The email of the Figma user that consumed the credits, or `null` when the user's email could not be resolved (e.g. a deleted user).",
      }),
    day: z
      .string()
      .openapi({
        description: 'The calendar date (UTC) of the aggregated usage, in `YYYY-MM-DD` format.',
      }),
    editor_type: z
      .enum(['design', 'figjam', 'slides', 'sites', 'buzz', 'make', 'not_applicable'])
      .openapi({
        description:
          'The editor the AI action was associated with. `not_applicable` when the underlying AI action had no associated file.',
      }),
    seat_credits_sum: z
      .int()
      .openapi({
        description:
          'The sum of seat-level (per-user-allocated) credits consumed for this day, user, and editor type.',
      }),
    plan_credits_sum: z
      .int()
      .openapi({
        description:
          'The sum of plan-level (shared pool) credits consumed for this day, user, and editor type.',
      }),
    workspace_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the workspace the usage was attributed to, or `null` when the usage had no associated workspace.',
      }),
    workspace_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the workspace the usage was attributed to, or `null` when the usage had no associated workspace.',
      }),
    team_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the team the usage was attributed to, or `null` when the usage had no associated team.',
      }),
    team_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the team the usage was attributed to, or `null` when the usage had no associated team.',
      }),
    license_group_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the license group the usage was attributed to, or `null` when the usage had no associated license group.',
      }),
    license_group_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the license group the usage was attributed to, or `null` when the usage had no associated license group.',
      }),
    metering_period_start: z
      .string()
      .openapi({
        description:
          'The start of the plan-scoped metering period this usage belongs to, as an RFC 3339 UTC timestamp (e.g. `2026-05-01T00:00:00Z`).',
      }),
    metering_period_end: z
      .string()
      .openapi({
        description:
          'The end of the plan-scoped metering period this usage belongs to, as an RFC 3339 UTC timestamp (e.g. `2026-06-01T00:00:00Z`).',
      }),
  })
  .openapi({
    description: 'A single per-user, per-day AI credit usage aggregate for the plan.',
    required: [
      'plan_id',
      'user_id',
      'day',
      'editor_type',
      'seat_credits_sum',
      'plan_credits_sum',
      'metering_period_start',
      'metering_period_end',
    ],
  })
  .openapi('AiUsageDailyRow')

const PaymentStatusSchema = z
  .object({
    type: z
      .enum(['UNPAID', 'PAID', 'TRIAL'])
      .exactOptional()
      .openapi({
        description:
          'The current payment status of the user on the resource, as a string enum:\n  \n- `UNPAID`: user has not paid for the resource\n- `PAID`: user has an active purchase on the resource\n- `TRIAL`: user is in the trial period for a subscription resource',
      }),
  })
  .openapi({ description: "An object describing the user's payment status.", required: [] })
  .openapi('PaymentStatus')

const PaymentInformationSchema = z
  .object({
    user_id: z
      .string()
      .openapi({
        description:
          'The ID of the user whose payment information was queried. Can be used to verify the validity of a response.',
      }),
    resource_id: z
      .string()
      .openapi({
        description:
          'The ID of the plugin, widget, or Community file that was queried. Can be used to verify the validity of a response.',
      }),
    resource_type: z
      .enum(['PLUGIN', 'WIDGET', 'COMMUNITY_FILE'])
      .openapi({ description: 'The type of the resource.' }),
    payment_status: PaymentStatusSchema,
    date_of_purchase: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The UTC ISO 8601 timestamp indicating when the user purchased the resource. No value is given if the user has never purchased the resource.\n  \nNote that a value will still be returned if the user had purchased the resource, but no longer has active access to it (e.g. purchase refunded, subscription ended).',
      }),
  })
  .openapi({
    description:
      "An object describing a user's payment information for a plugin, widget, or Community file.",
    required: ['user_id', 'resource_id', 'resource_type', 'payment_status'],
  })
  .openapi('PaymentInformation')

const VariableScopeSchema = z
  .enum([
    'ALL_SCOPES',
    'TEXT_CONTENT',
    'CORNER_RADIUS',
    'WIDTH_HEIGHT',
    'GAP',
    'ALL_FILLS',
    'FRAME_FILL',
    'SHAPE_FILL',
    'TEXT_FILL',
    'STROKE_COLOR',
    'STROKE_FLOAT',
    'EFFECT_FLOAT',
    'EFFECT_COLOR',
    'OPACITY',
    'COLOR_OPACITY',
    'FONT_FAMILY',
    'FONT_STYLE',
    'FONT_WEIGHT',
    'FONT_SIZE',
    'LINE_HEIGHT',
    'LETTER_SPACING',
    'PARAGRAPH_SPACING',
    'PARAGRAPH_INDENT',
    'FONT_VARIATIONS',
  ])
  .openapi({
    description:
      'Scopes allow a variable to be shown or hidden in the variable picker for various fields. This declutters the Figma UI if you have a large number of variables. Variable scopes are currently supported on `FLOAT`, `STRING`, and `COLOR` variables.\n\n`ALL_SCOPES` is a special scope that means that the variable will be shown in the variable picker for all variable fields. If `ALL_SCOPES` is set, no additional scopes can be set.\n\n`ALL_FILLS` is a special scope that means that the variable will be shown in the variable picker for all fill fields. If `ALL_FILLS` is set, no additional fill scopes can be set.\n\nValid scopes for `FLOAT` variables:\n- `ALL_SCOPES`\n- `TEXT_CONTENT`\n- `WIDTH_HEIGHT`\n- `GAP`\n- `STROKE_FLOAT`\n- `EFFECT_FLOAT`\n- `OPACITY`\n- `COLOR_OPACITY`\n- `FONT_WEIGHT`\n- `FONT_SIZE`\n- `LINE_HEIGHT`\n- `LETTER_SPACING`\n- `PARAGRAPH_SPACING`\n- `PARAGRAPH_INDENT`\n\n`OPACITY` corresponds to layer opacity, while `COLOR_OPACITY` corresponds to the opacity channel of a color.\n\nValid scopes for `STRING` variables:\n- `ALL_SCOPES`\n- `TEXT_CONTENT`\n- `FONT_FAMILY`\n- `FONT_STYLE`\n\nValid scopes for `COLOR` variables:\n- `ALL_SCOPES`\n- `ALL_FILLS`\n- `FRAME_FILL`\n- `SHAPE_FILL`\n- `TEXT_FILL`\n- `STROKE_COLOR`\n- `EFFECT_COLOR`',
  })
  .openapi('VariableScope')

const VariableCodeSyntaxSchema = z
  .object({
    WEB: z.string().exactOptional(),
    ANDROID: z.string().exactOptional(),
    iOS: z.string().exactOptional(),
  })
  .openapi({
    description:
      'An object containing platform-specific code syntax definitions for a variable. All platforms are optional.',
    required: [],
  })
  .openapi('VariableCodeSyntax')

const VariableComposedColorSchema = z
  .xor([
    z
      .object({ color: z.xor([RGBSchema, RGBASchema]), opacity: VariableAliasSchema })
      .openapi({ required: ['color', 'opacity'] }),
    z
      .object({ color: VariableAliasSchema, opacity: z.xor([z.number(), VariableAliasSchema]) })
      .openapi({ required: ['color', 'opacity'] }),
  ])
  .openapi({ description: 'A color with an independently authored opacity.' })
  .openapi('VariableComposedColor')

const VariableValueSchema = z
  .xor([
    z.boolean(),
    z.number(),
    z.string(),
    RGBSchema,
    RGBASchema,
    VariableAliasSchema,
    VariableComposedColorSchema,
    z.null().nullable(),
  ])
  .openapi({
    description:
      "The value for the variable. The value must match the variable's type. If setting to a variable alias, the alias must resolve to this type. If overriding a value, the value type must match the variable's type. If removing an overridden value, the value must be `null`.",
  })
  .openapi('VariableValue')

const LocalVariableCollectionSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of this variable collection.' }),
    name: z.string().openapi({ description: 'The name of this variable collection.' }),
    key: z.string().openapi({ description: 'The key of this variable collection.' }),
    modes: z
      .array(
        z
          .object({
            modeId: z.string().openapi({ description: 'The unique identifier of this mode.' }),
            parentModeId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The unique identifier of this mode's parent mode from the parent variable collection. This will be `undefined` if this mode does not inherit from a parent mode.",
              }),
            name: z.string().openapi({ description: 'The name of this mode.' }),
          })
          .openapi({ required: ['modeId', 'name'] }),
      )
      .openapi({ description: 'The modes of this variable collection.' }),
    defaultModeId: z.string().openapi({ description: 'The id of the default mode.' }),
    remote: z.boolean().openapi({ description: 'Whether this variable collection is remote.' }),
    isExtension: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this variable collection is an extension of another variable collection.',
      }),
    parentVariableCollectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the parent variable collection that this variable collection is an extension of. If this variable collection is not an extension, this value will be `undefined`.',
      }),
    rootVariableCollectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The id of the root variable collection in the extension chain. This is the ID of the original (non-extended) collection at the top of the parent chain. For example, if Collection C extends B which extends A (root), then `rootVariableCollectionId` is A's ID. If this variable collection is not an extension, this value will be `undefined`.",
      }),
    variableOverrides: z
      .record(z.string(), z.record(z.string(), VariableValueSchema))
      .exactOptional()
      .openapi({
        description:
          'The overrides for the variables in this variable collection as a map of variable ids to a map of mode ids to variable values.',
      }),
    hiddenFromPublishing: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Whether this variable collection is hidden when publishing the current file as a library.',
      }),
    variableIds: z
      .array(z.string())
      .openapi({
        description:
          'The ids of the variables in the collection. Note that the order of these variables is roughly the same as what is shown in Figma Design, however it does not account for groups. As a result, the order of these variables may not exactly reflect the exact ordering and grouping shown in the authoring UI.',
      }),
  })
  .openapi({
    description: 'A grouping of related Variable objects each with the same modes.',
    required: [
      'id',
      'name',
      'key',
      'modes',
      'defaultModeId',
      'remote',
      'hiddenFromPublishing',
      'variableIds',
    ],
  })
  .openapi('LocalVariableCollection')

const LocalVariableSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of this variable.' }),
    name: z.string().openapi({ description: 'The name of this variable.' }),
    key: z.string().openapi({ description: 'The key of this variable.' }),
    variableCollectionId: z
      .string()
      .openapi({ description: 'The id of the variable collection that contains this variable.' }),
    resolvedType: VariableResolvedDataTypeSchema.openapi({
      description: 'The resolved type of the variable.',
    }),
    valuesByMode: z
      .record(
        z.string(),
        z.xor([
          z.boolean(),
          z.number(),
          z.string(),
          RGBASchema,
          VariableAliasSchema,
          VariableComposedColorSchema,
        ]),
      )
      .openapi({ description: 'The values for each mode of this variable.' }),
    remote: z.boolean().openapi({ description: 'Whether this variable is remote.' }),
    description: z.string().openapi({ description: 'The description of this variable.' }),
    hiddenFromPublishing: z
      .boolean()
      .openapi({
        description:
          'Whether this variable is hidden when publishing the current file as a library.\n\nIf the parent `VariableCollection` is marked as `hiddenFromPublishing`, then this variable will also be hidden from publishing via the UI. `hiddenFromPublishing` is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.',
      }),
    scopes: z
      .array(VariableScopeSchema)
      .openapi({
        description:
          'An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.\n\nSetting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.',
      }),
    codeSyntax: VariableCodeSyntaxSchema,
    deletedButReferenced: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the variable was deleted in the editor, but the document may still contain references to the variable. References to the variable may exist through bound values or variable aliases.',
      }),
  })
  .openapi({
    description:
      'A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties.',
    required: [
      'id',
      'name',
      'key',
      'variableCollectionId',
      'resolvedType',
      'valuesByMode',
      'remote',
      'description',
      'hiddenFromPublishing',
      'scopes',
      'codeSyntax',
    ],
  })
  .openapi('LocalVariable')

const PublishedVariableCollectionSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of this variable collection.' }),
    subscribed_id: z
      .string()
      .openapi({
        description:
          'The ID of the variable collection that is used by subscribing files. This ID changes every time the variable collection is modified and published.',
      }),
    name: z.string().openapi({ description: 'The name of this variable collection.' }),
    key: z.string().openapi({ description: 'The key of this variable collection.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The UTC ISO 8601 time at which the variable collection was last updated.\n\nThis timestamp will change any time a variable in the collection is changed.',
      }),
  })
  .openapi({
    description: 'A grouping of related Variable objects each with the same modes.',
    required: ['id', 'subscribed_id', 'name', 'key', 'updatedAt'],
  })
  .openapi('PublishedVariableCollection')

const PublishedVariableSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of this variable.' }),
    subscribed_id: z
      .string()
      .openapi({
        description:
          'The ID of the variable that is used by subscribing files. This ID changes every time the variable is modified and published.',
      }),
    name: z.string().openapi({ description: 'The name of this variable.' }),
    key: z.string().openapi({ description: 'The key of this variable.' }),
    variableCollectionId: z
      .string()
      .openapi({ description: 'The id of the variable collection that contains this variable.' }),
    resolvedDataType: VariableResolvedDataTypeSchema.openapi({
      description: 'The resolved type of the variable.',
    }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC ISO 8601 time at which the variable was last updated.' }),
  })
  .openapi({
    description:
      'A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties.',
    required: [
      'id',
      'subscribed_id',
      'name',
      'key',
      'variableCollectionId',
      'resolvedDataType',
      'updatedAt',
    ],
  })
  .openapi('PublishedVariable')

const VariableCollectionCreateSchema = z
  .object({
    action: z
      .literal('CREATE')
      .openapi({ description: 'The action to perform for the variable collection.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A temporary id for this variable collection.' }),
    name: z.string().openapi({ description: 'The name of this variable collection.' }),
    initialModeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The initial mode refers to the mode that is created by default. You can set a temporary id here, in order to reference this mode later in this request.',
      }),
    hiddenFromPublishing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this variable collection is hidden when publishing the current file as a library.',
      }),
    parentVariableCollectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the parent variable collection that this variable collection is extending from.',
      }),
    initialModeIdToParentModeIdMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Maps inherited modes from the parent variable collection to the initial mode ids on the extended variable collection.',
      }),
  })
  .openapi({
    description: 'An object that contains details about creating a `VariableCollection`.',
    required: ['action', 'name'],
  })
  .openapi('VariableCollectionCreate')

const VariableCollectionUpdateSchema = z
  .object({
    action: z
      .literal('UPDATE')
      .openapi({ description: 'The action to perform for the variable collection.' }),
    id: z.string().openapi({ description: 'The id of the variable collection to update.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this variable collection.' }),
    hiddenFromPublishing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this variable collection is hidden when publishing the current file as a library.',
      }),
  })
  .openapi({
    description: 'An object that contains details about updating a `VariableCollection`.',
    required: ['action', 'id'],
  })
  .openapi('VariableCollectionUpdate')

const VariableCollectionDeleteSchema = z
  .object({
    action: z
      .literal('DELETE')
      .openapi({ description: 'The action to perform for the variable collection.' }),
    id: z.string().openapi({ description: 'The id of the variable collection to delete.' }),
  })
  .openapi({
    description: 'An object that contains details about deleting a `VariableCollection`.',
    required: ['action', 'id'],
  })
  .openapi('VariableCollectionDelete')

const VariableCollectionChangeSchema = z
  .discriminatedUnion('action', [
    VariableCollectionCreateSchema,
    VariableCollectionUpdateSchema,
    VariableCollectionDeleteSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'action',
      mapping: {
        CREATE: '#/components/schemas/VariableCollectionCreate',
        UPDATE: '#/components/schemas/VariableCollectionUpdate',
        DELETE: '#/components/schemas/VariableCollectionDelete',
      },
    },
  })
  .openapi('VariableCollectionChange')

const VariableModeCreateSchema = z
  .object({
    action: z
      .literal('CREATE')
      .openapi({ description: 'The action to perform for the variable mode.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A temporary id for this variable mode.' }),
    name: z.string().openapi({ description: 'The name of this variable mode.' }),
    variableCollectionId: z
      .string()
      .openapi({
        description:
          'The variable collection that will contain the mode. You can use the temporary id of a variable collection. New modes cannot be created on extended collections.',
      }),
  })
  .openapi({
    description: 'An object that contains details about creating a `VariableMode`.',
    required: ['action', 'name', 'variableCollectionId'],
  })
  .openapi('VariableModeCreate')

const VariableModeUpdateSchema = z
  .object({
    action: z
      .literal('UPDATE')
      .openapi({ description: 'The action to perform for the variable mode.' }),
    id: z.string().openapi({ description: 'The id of the variable mode to update.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of this variable mode.' }),
    variableCollectionId: z
      .string()
      .openapi({
        description:
          'The variable collection that contains the mode. Modes cannot be updated on extended collections.',
      }),
  })
  .openapi({
    description: 'An object that contains details about updating a `VariableMode`.',
    required: ['action', 'id', 'variableCollectionId'],
  })
  .openapi('VariableModeUpdate')

const VariableModeDeleteSchema = z
  .object({
    action: z
      .literal('DELETE')
      .openapi({ description: 'The action to perform for the variable mode.' }),
    id: z
      .string()
      .openapi({
        description:
          'The id of the variable mode to delete. Modes cannot be deleted on extended collections unless its parent mode has been deleted.',
      }),
  })
  .openapi({
    description: 'An object that contains details about deleting a `VariableMode`.',
    required: ['action', 'id'],
  })
  .openapi('VariableModeDelete')

const VariableModeChangeSchema = z
  .discriminatedUnion('action', [
    VariableModeCreateSchema,
    VariableModeUpdateSchema,
    VariableModeDeleteSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'action',
      mapping: {
        CREATE: '#/components/schemas/VariableModeCreate',
        UPDATE: '#/components/schemas/VariableModeUpdate',
        DELETE: '#/components/schemas/VariableModeDelete',
      },
    },
  })
  .openapi('VariableModeChange')

const VariableCreateSchema = z
  .object({
    action: z.literal('CREATE').openapi({ description: 'The action to perform for the variable.' }),
    id: z.string().exactOptional().openapi({ description: 'A temporary id for this variable.' }),
    name: z.string().openapi({ description: 'The name of this variable.' }),
    variableCollectionId: z
      .string()
      .openapi({
        description:
          'The variable collection that will contain the variable. You can use the temporary id of a variable collection.',
      }),
    resolvedType: VariableResolvedDataTypeSchema.openapi({
      description: 'The resolved type of the variable.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this variable.' }),
    hiddenFromPublishing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this variable is hidden when publishing the current file as a library.',
      }),
    scopes: z
      .array(VariableScopeSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.',
      }),
    codeSyntax: VariableCodeSyntaxSchema.exactOptional(),
  })
  .openapi({
    description: 'An object that contains details about creating a `Variable`.',
    required: ['action', 'name', 'variableCollectionId', 'resolvedType'],
  })
  .openapi('VariableCreate')

const VariableUpdateSchema = z
  .object({
    action: z.literal('UPDATE').openapi({ description: 'The action to perform for the variable.' }),
    id: z.string().openapi({ description: 'The id of the variable to update.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of this variable.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this variable.' }),
    hiddenFromPublishing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether this variable is hidden when publishing the current file as a library.',
      }),
    scopes: z
      .array(VariableScopeSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.',
      }),
    codeSyntax: VariableCodeSyntaxSchema.exactOptional(),
  })
  .openapi({
    description: 'An object that contains details about updating a `Variable`.',
    required: ['action', 'id'],
  })
  .openapi('VariableUpdate')

const VariableDeleteSchema = z
  .object({
    action: z.literal('DELETE').openapi({ description: 'The action to perform for the variable.' }),
    id: z.string().openapi({ description: 'The id of the variable to delete.' }),
  })
  .openapi({
    description: 'An object that contains details about deleting a `Variable`.',
    required: ['action', 'id'],
  })
  .openapi('VariableDelete')

const VariableChangeSchema = z
  .discriminatedUnion('action', [VariableCreateSchema, VariableUpdateSchema, VariableDeleteSchema])
  .openapi({
    discriminator: {
      propertyName: 'action',
      mapping: {
        CREATE: '#/components/schemas/VariableCreate',
        UPDATE: '#/components/schemas/VariableUpdate',
        DELETE: '#/components/schemas/VariableDelete',
      },
    },
  })
  .openapi('VariableChange')

const VariableModeValueSchema = z
  .object({
    variableId: z
      .string()
      .openapi({ description: 'The target variable. You can use the temporary id of a variable.' }),
    modeId: z
      .string()
      .openapi({
        description:
          'Must correspond to a mode in the variable collection that contains the target variable.',
      }),
    value: VariableValueSchema,
  })
  .openapi({
    description:
      'An object that represents a value for a given mode of a variable. All properties are required.',
    required: ['variableId', 'modeId', 'value'],
  })
  .openapi('VariableModeValue')

const LibraryAnalyticsComponentActionsByAssetSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    component_key: z.string().openapi({ description: 'Unique, stable id of the component.' }),
    component_name: z.string().openapi({ description: 'Name of the component.' }),
    component_set_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique, stable id of the component set that this component belongs to.',
      }),
    component_set_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the component set that this component belongs to.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics component actions data broken down by asset.',
    required: ['week', 'component_key', 'component_name', 'detachments', 'insertions'],
  })
  .openapi('LibraryAnalyticsComponentActionsByAsset')

const LibraryAnalyticsComponentActionsByTeamSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    team_name: z.string().openapi({ description: 'The name of the team using the library.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the team belongs to.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics action data broken down by team.',
    required: ['week', 'team_name', 'detachments', 'insertions'],
  })
  .openapi('LibraryAnalyticsComponentActionsByTeam')

const LibraryAnalyticsComponentUsagesByAssetSchema = z
  .object({
    component_key: z.string().openapi({ description: 'Unique, stable id of the component.' }),
    component_name: z.string().openapi({ description: 'Name of the component.' }),
    component_set_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique, stable id of the component set that this component belongs to.',
      }),
    component_set_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the component set that this component belongs to.' }),
    usages: z
      .number()
      .openapi({
        description: 'The number of instances of the component within the organization.',
      }),
    teams_using: z
      .number()
      .openapi({ description: 'The number of teams using the component within the organization.' }),
    files_using: z
      .number()
      .openapi({ description: 'The number of files using the component within the organization.' }),
  })
  .openapi({
    description: 'Library analytics component usage data broken down by component.',
    required: ['component_key', 'component_name', 'usages', 'teams_using', 'files_using'],
  })
  .openapi('LibraryAnalyticsComponentUsagesByAsset')

const LibraryAnalyticsComponentUsagesByFileSchema = z
  .object({
    file_name: z.string().openapi({ description: 'The name of the file using the library.' }),
    team_name: z.string().openapi({ description: 'The name of the team the file belongs to.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the file belongs to.' }),
    usages: z
      .number()
      .openapi({
        description: 'The number of component instances from the library used within the file.',
      }),
  })
  .openapi({
    description: 'Library analytics component usage data broken down by file.',
    required: ['file_name', 'team_name', 'usages'],
  })
  .openapi('LibraryAnalyticsComponentUsagesByFile')

const LibraryAnalyticsStyleActionsByAssetSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    style_key: z.string().openapi({ description: 'Unique, stable id of the style.' }),
    style_name: z.string().openapi({ description: 'The name of the style.' }),
    style_type: z.string().openapi({ description: 'The type of the style.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics style actions data broken down by asset.',
    required: ['week', 'style_key', 'style_name', 'style_type', 'detachments', 'insertions'],
  })
  .openapi('LibraryAnalyticsStyleActionsByAsset')

const LibraryAnalyticsStyleActionsByTeamSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    team_name: z.string().openapi({ description: 'The name of the team using the library.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the team belongs to.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics style action data broken down by team.',
    required: ['week', 'team_name', 'detachments', 'insertions'],
  })
  .openapi('LibraryAnalyticsStyleActionsByTeam')

const LibraryAnalyticsStyleUsagesByAssetSchema = z
  .object({
    style_key: z.string().openapi({ description: 'Unique, stable id of the style.' }),
    style_name: z.string().openapi({ description: 'The name of the style.' }),
    style_type: z.string().openapi({ description: 'The type of the style.' }),
    usages: z
      .number()
      .openapi({ description: 'The number of usages of the style within the organization.' }),
    teams_using: z
      .number()
      .openapi({ description: 'The number of teams using the style within the organization.' }),
    files_using: z
      .number()
      .openapi({ description: 'The number of files using the style within the organization.' }),
  })
  .openapi({
    description: 'Library analytics style usage data broken down by component.',
    required: ['style_key', 'style_name', 'style_type', 'usages', 'teams_using', 'files_using'],
  })
  .openapi('LibraryAnalyticsStyleUsagesByAsset')

const LibraryAnalyticsStyleUsagesByFileSchema = z
  .object({
    file_name: z.string().openapi({ description: 'The name of the file using the library.' }),
    team_name: z.string().openapi({ description: 'The name of the team the file belongs to.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the file belongs to.' }),
    usages: z
      .number()
      .openapi({
        description: 'The number of times styles from this library are used within the file.',
      }),
  })
  .openapi({
    description: 'Library analytics style usage data broken down by file.',
    required: ['file_name', 'team_name', 'usages'],
  })
  .openapi('LibraryAnalyticsStyleUsagesByFile')

const LibraryAnalyticsVariableActionsByAssetSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    variable_key: z.string().openapi({ description: 'Unique, stable id of the variable.' }),
    variable_name: z.string().openapi({ description: 'The name of the variable.' }),
    variable_type: z.string().openapi({ description: 'The type of the variable.' }),
    collection_key: z
      .string()
      .openapi({ description: 'Unique, stable id of the collection the variable belongs to.' }),
    collection_name: z
      .string()
      .openapi({ description: 'The name of the collection the variable belongs to.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics variable actions data broken down by asset.',
    required: [
      'week',
      'variable_key',
      'variable_name',
      'variable_type',
      'collection_key',
      'collection_name',
      'detachments',
      'insertions',
    ],
  })
  .openapi('LibraryAnalyticsVariableActionsByAsset')

const LibraryAnalyticsVariableActionsByTeamSchema = z
  .object({
    week: z.string().openapi({ description: 'The date in ISO 8601 format. e.g. 2023-12-13' }),
    team_name: z.string().openapi({ description: 'The name of the team using the library.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the team belongs to.' }),
    detachments: z
      .number()
      .openapi({ description: 'The number of detach events for this period.' }),
    insertions: z
      .number()
      .openapi({ description: 'The number of insertion events for this period.' }),
  })
  .openapi({
    description: 'Library analytics variable action data broken down by team.',
    required: ['week', 'team_name', 'detachments', 'insertions'],
  })
  .openapi('LibraryAnalyticsVariableActionsByTeam')

const LibraryAnalyticsVariableUsagesByAssetSchema = z
  .object({
    variable_key: z.string().openapi({ description: 'Unique, stable id of the variable.' }),
    variable_name: z.string().openapi({ description: 'The name of the variable.' }),
    variable_type: z.string().openapi({ description: 'The type of the variable.' }),
    collection_key: z
      .string()
      .openapi({ description: 'Unique, stable id of the collection the variable belongs to.' }),
    collection_name: z
      .string()
      .openapi({ description: 'The name of the collection the variable belongs to.' }),
    usages: z
      .number()
      .openapi({ description: 'The number of usages of the variable within the organization.' }),
    teams_using: z
      .number()
      .openapi({ description: 'The number of teams using the variable within the organization.' }),
    files_using: z
      .number()
      .openapi({ description: 'The number of files using the variable within the organization.' }),
  })
  .openapi({
    description: 'Library analytics variable usage data broken down by component.',
    required: [
      'variable_key',
      'variable_name',
      'variable_type',
      'collection_key',
      'collection_name',
      'usages',
      'teams_using',
      'files_using',
    ],
  })
  .openapi('LibraryAnalyticsVariableUsagesByAsset')

const LibraryAnalyticsVariableUsagesByFileSchema = z
  .object({
    file_name: z.string().openapi({ description: 'The name of the file using the library.' }),
    team_name: z.string().openapi({ description: 'The name of the team the file belongs to.' }),
    workspace_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the workspace that the file belongs to.' }),
    usages: z
      .number()
      .openapi({
        description: 'The number of times variables from this library are used within the file.',
      }),
  })
  .openapi({
    description: 'Library analytics variable usage data broken down by file.',
    required: ['file_name', 'team_name', 'usages'],
  })
  .openapi('LibraryAnalyticsVariableUsagesByFile')

const ResponsePaginationSchema = z
  .object({
    prev_page: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL that calls the previous page of the response.' }),
    next_page: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL that calls the next page of the response.' }),
  })
  .openapi({
    description:
      'If pagination is needed due to the length of the response, identifies the next and previous pages.',
    required: [],
  })
  .openapi('ResponsePagination')

const ResponseCursorSchema = z
  .object({ before: z.number().exactOptional(), after: z.number().exactOptional() })
  .openapi({ description: 'Pagination cursor', required: [] })
  .openapi('ResponseCursor')

const ErrorResponsePayloadWithErrMessageSchema = z
  .object({
    status: z.number().openapi({ description: 'Status code' }),
    err: z.string().openapi({ description: 'A string describing the error' }),
  })
  .openapi({ description: 'A response indicating an error occurred.', required: ['status', 'err'] })
  .openapi('ErrorResponsePayloadWithErrMessage')

const ErrorResponsePayloadWithErrorBooleanSchema = z
  .object({
    error: z
      .literal(true)
      .openapi({ description: 'For erroneous requests, this value is always `true`.' }),
    status: z.number().openapi({ description: 'Status code' }),
    message: z.string().openapi({ description: 'A string describing the error' }),
  })
  .openapi({
    description: 'A response indicating an error occurred.',
    required: ['error', 'status', 'message'],
  })
  .openapi('ErrorResponsePayloadWithErrorBoolean')

const RoleSchema = z
  .enum(['owner', 'editor', 'viewer'])
  .openapi({
    description: 'The role of the user making the API request in relation to the resource.',
  })
  .openapi('Role')

const CreateTeamRequestSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'The name of the team.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the team.' }),
    sharing_audience_control: z
      .enum(['org_view', 'org_edit', 'invite_only', 'workspace_view', 'workspace_edit'])
      .openapi({
        description:
          'The audience that can discover and join the team. Workspace audiences require a workspace_id.',
      }),
    org_discoverability: z
      .union([z.literal('hidden'), z.literal('discoverable'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether organization members can discover an invite-only team. Required for invite_only and not accepted for other audiences.',
      }),
    workspace_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The workspace in which to create the team. Required for workspace audiences.',
      }),
  })
  .openapi({
    description: 'Properties for the team to create.',
    required: ['name', 'sharing_audience_control'],
  })
  .openapi('CreateTeamRequest')

const InviteTeamMembersRequestSchema = z
  .strictObject({
    emails: z
      .array(z.email())
      .min(1)
      .max(99)
      .openapi({ description: 'The email addresses to invite.' }),
    role: z
      .enum(['viewer', 'editor', 'admin'])
      .openapi({
        description: 'The role to grant each invited member. Existing roles are never downgraded.',
      }),
  })
  .openapi({
    description: 'Members to invite to a team and the role to assign them.',
    required: ['emails', 'role'],
  })
  .openapi('InviteTeamMembersRequest')

const TeamSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of the team.' }),
    name: z.string().openapi({ description: 'The name of the team.' }),
    description: z.string().nullable().openapi({ description: 'A description of the team.' }),
    sharing_audience_control: z
      .enum(['org_view', 'org_edit', 'invite_only', 'workspace_view', 'workspace_edit'])
      .openapi({ description: 'The audience that can discover and join the team.' }),
    org_discoverability: z
      .union([z.literal('hidden'), z.literal('discoverable'), z.literal(null)])
      .nullable()
      .openapi({ description: 'Whether organization members can discover an invite-only team.' }),
    workspace_id: z
      .string()
      .nullable()
      .openapi({ description: 'The workspace containing the team.' }),
    owner_user_id: z
      .string()
      .nullable()
      .openapi({ description: 'The ID of the user who owns the team.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The time at which the team was created.' }),
  })
  .openapi({
    description: 'A Figma team.',
    required: [
      'id',
      'name',
      'description',
      'sharing_audience_control',
      'org_discoverability',
      'workspace_id',
      'owner_user_id',
      'created_at',
    ],
  })
  .openapi('Team')

const GetFileResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .openapi({ description: 'The name of the file as it appears in the editor.' }),
          role: RoleSchema.openapi({
            description: 'The role of the user making the API request in relation to the file.',
          }),
          lastModified: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The UTC ISO 8601 time at which the file was last modified.' }),
          editorType: z
            .enum(['figma', 'figjam'])
            .openapi({ description: 'The type of editor associated with this file.' }),
          thumbnailUrl: z
            .string()
            .exactOptional()
            .openapi({ description: 'A URL to a thumbnail image of the file.' }),
          version: z
            .string()
            .openapi({
              description:
                'The version number of the file. This number is incremented when a file is modified and can be used to check if the file has changed between requests.',
            }),
          document: DocumentNodeSchema,
          components: z
            .record(z.string(), ComponentSchema)
            .openapi({ description: 'A mapping from component IDs to component metadata.' }),
          componentSets: z
            .record(z.string(), ComponentSetSchema)
            .openapi({
              description: 'A mapping from component set IDs to component set metadata.',
            }),
          schemaVersion: z
            .number()
            .default(0)
            .openapi({ description: 'The version of the file schema that this file uses.' }),
          styles: z
            .record(z.string(), StyleSchema)
            .openapi({ description: 'A mapping from style IDs to style metadata.' }),
          linkAccess: z
            .string()
            .exactOptional()
            .openapi({ description: 'The share permission level of the file link.' }),
          mainFileKey: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The key of the main file for this file. If present, this file is a component or component set.',
            }),
          branches: z
            .array(
              z
                .object({
                  key: z.string().openapi({ description: 'The key of the branch.' }),
                  name: z.string().openapi({ description: 'The name of the branch.' }),
                  thumbnail_url: z
                    .string()
                    .openapi({ description: 'A URL to a thumbnail image of the branch.' }),
                  last_modified: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description: 'The UTC ISO 8601 time at which the branch was last modified.',
                    }),
                })
                .openapi({ required: ['key', 'name', 'thumbnail_url', 'last_modified'] }),
            )
            .exactOptional()
            .openapi({ description: 'A list of branches for this file.' }),
        })
        .openapi({
          required: [
            'name',
            'role',
            'lastModified',
            'editorType',
            'version',
            'document',
            'components',
            'componentSets',
            'schemaVersion',
            'styles',
          ],
        }),
    },
  },
}

const GetFileNodesResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/nodes endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .openapi({ description: 'The name of the file as it appears in the editor.' }),
          role: RoleSchema.openapi({
            description: 'The role of the user making the API request in relation to the file.',
          }),
          lastModified: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The UTC ISO 8601 time at which the file was last modified.' }),
          editorType: z
            .enum(['figma', 'figjam'])
            .openapi({ description: 'The type of editor associated with this file.' }),
          thumbnailUrl: z
            .string()
            .openapi({ description: 'A URL to a thumbnail image of the file.' }),
          version: z
            .string()
            .openapi({
              description:
                'The version number of the file. This number is incremented when a file is modified and can be used to check if the file has changed between requests.',
            }),
          nodes: z
            .record(
              z.string(),
              z
                .object({
                  document: NodeSchema,
                  components: z
                    .record(z.string(), ComponentSchema)
                    .openapi({
                      description: 'A mapping from component IDs to component metadata.',
                    }),
                  componentSets: z
                    .record(z.string(), ComponentSetSchema)
                    .openapi({
                      description: 'A mapping from component set IDs to component set metadata.',
                    }),
                  schemaVersion: z
                    .number()
                    .default(0)
                    .openapi({
                      description: 'The version of the file schema that this file uses.',
                    }),
                  styles: z
                    .record(z.string(), StyleSchema)
                    .openapi({ description: 'A mapping from style IDs to style metadata.' }),
                })
                .openapi({
                  required: ['document', 'components', 'componentSets', 'schemaVersion', 'styles'],
                }),
            )
            .openapi({ description: 'A mapping from node IDs to node metadata.' }),
        })
        .openapi({
          required: [
            'name',
            'role',
            'lastModified',
            'editorType',
            'thumbnailUrl',
            'version',
            'nodes',
          ],
        }),
    },
  },
}

const GetImagesResponseResponse = {
  description: 'Response from the GET /v1/images/{file_key} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          err: z
            .null()
            .nullable()
            .openapi({ description: 'For successful requests, this value is always `null`.' }),
          images: z
            .record(
              z.string(),
              z.url().nullable().openapi({ description: 'A URL to the requested image.' }),
            )
            .openapi({ description: 'A map from node IDs to URLs of the rendered images.' }),
        })
        .openapi({ required: ['err', 'images'] }),
    },
  },
}

const GetImageFillsResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/images endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          status: z.literal(200).openapi({ description: 'Status code' }),
          meta: z
            .object({
              images: z
                .record(
                  z.string(),
                  z.url().openapi({ description: 'A URL to the requested image fill.' }),
                )
                .openapi({ description: 'A map of image references to URLs of the image fills.' }),
            })
            .openapi({ required: ['images'] }),
        })
        .openapi({ required: ['error', 'status', 'meta'] }),
    },
  },
}

const GetFileMetaResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/meta endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          file: z
            .object({
              name: z.string().openapi({ description: 'The name of the file.' }),
              folder_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the project containing the file.' }),
              last_touched_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The UTC ISO 8601 time at which the file content was last modified.',
                }),
              creator: UserSchema.openapi({ description: 'The user who created the file.' }),
              last_touched_by: UserSchema.exactOptional().openapi({
                description: 'The user who last modified the file contents.',
              }),
              thumbnail_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'A URL to a thumbnail image of the file.' }),
              editorType: z
                .enum(['figma', 'figjam', 'slides', 'buzz', 'sites', 'make'])
                .openapi({ description: 'The type of editor associated with this file.' }),
              role: RoleSchema.exactOptional().openapi({
                description: 'The role of the user making the API request in relation to the file.',
              }),
              link_access: LinkAccessSchema.exactOptional().openapi({
                description: 'Access policy for users who have the link to the file.',
              }),
              url: z.string().exactOptional().openapi({ description: 'The URL of the file.' }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version number of the file. This number is incremented when a file is modified and can be used to check if the file has changed between requests.',
                }),
            })
            .openapi({
              description: 'The file metadata.',
              required: ['name', 'last_touched_at', 'creator', 'editorType'],
            }),
        })
        .openapi({ required: ['file'] }),
    },
  },
}

const PostFileDuplicateResponseResponse = {
  description: 'Response from the POST /v1/files/{file_key}/duplicate endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          file_key: z
            .string()
            .openapi({ description: 'The key of the newly created standalone file.' }),
          name: z.string().openapi({ description: 'The name of the duplicated file.' }),
          folder_id: z
            .string()
            .openapi({ description: 'The ID of the folder containing the duplicated file.' }),
          editor_type: z
            .enum(['figma', 'figjam', 'slides', 'buzz', 'make'])
            .openapi({ description: 'The type of editor associated with the duplicated file.' }),
          created_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The UTC ISO 8601 time at which the duplicated file was created.',
            }),
        })
        .openapi({ required: ['file_key', 'name', 'folder_id', 'editor_type', 'created_at'] }),
    },
  },
}

const PostFileDuplicateErrorResponseResponse = {
  description: 'The request failed. The error payload depends on where the request failed.',
  content: {
    'application/json': {
      schema: z.xor([
        ErrorResponsePayloadWithErrMessageSchema,
        ErrorResponsePayloadWithErrorBooleanSchema,
      ]),
    },
  },
}

const GetTeamProjectsResponseResponse = {
  description: 'Response from the GET /v1/teams/{team_id}/projects endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().openapi({ description: "The team's name." }),
          projects: z.array(ProjectSchema).openapi({ description: 'An array of projects.' }),
        })
        .openapi({ required: ['name', 'projects'] }),
    },
  },
}

const GetProjectMetaResponseResponse = {
  description: 'Response from the GET /v1/projects/{project_id}/meta endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z.string().openapi({ description: 'The unique identifier of the project.' }),
          name: z.string().openapi({ description: 'The name of the project.' }),
          thumbnail_url: z
            .string()
            .nullable()
            .openapi({
              description:
                'A URL to a thumbnail image of the project. May be null if the project has no files.',
            }),
          file_count: z.int().openapi({ description: 'The number of files in the project.' }),
          updated_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The UTC ISO 8601 time at which the project was last updated.',
            }),
          created_at: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The UTC ISO 8601 time at which the project was created.' }),
        })
        .openapi({
          required: ['id', 'name', 'thumbnail_url', 'file_count', 'updated_at', 'created_at'],
        }),
    },
  },
}

const GetProjectFilesResponseResponse = {
  description: 'Response from the GET /v1/projects/{project_id}/files endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().openapi({ description: "The project's name." }),
          files: z
            .array(
              z
                .object({
                  key: z.string().openapi({ description: "The file's key." }),
                  name: z.string().openapi({ description: "The file's name." }),
                  thumbnail_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The file's thumbnail URL." }),
                  last_modified: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description: 'The UTC ISO 8601 time at which the file was last modified.',
                    }),
                })
                .openapi({ required: ['key', 'name', 'last_modified'] }),
            )
            .openapi({ description: 'An array of files.' }),
        })
        .openapi({ required: ['name', 'files'] }),
    },
  },
}

const CreateFolderResponseResponse = {
  description: 'Response containing the created Folder resource.',
  content: {
    'application/json': {
      schema: FolderSchema.and(
        z
          .object({
            sharing_audience_control: z
              .enum(['plan_view', 'plan_edit', 'invite_only', 'workspace_view', 'workspace_edit'])
              .openapi({ description: 'The audience that can access the folder.' }),
            created_at: z.iso
              .datetime({ offset: true })
              .openapi({ description: 'The time at which the folder was created.' }),
          })
          .openapi({ required: ['sharing_audience_control', 'created_at'] }),
      ),
    },
  },
}

const GetTeamFoldersResponseResponse = {
  description: 'Response from the GET /v2/teams/{team_id}/folders endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().openapi({ description: "The team's name." }),
          folders: z
            .array(FolderSchema)
            .openapi({
              description:
                "An array of the team's top-level folders. Each folder's `parent_folder_id` is null.",
            }),
        })
        .openapi({ required: ['name', 'folders'] }),
    },
  },
}

const GetFolderFoldersResponseResponse = {
  description: 'Response from the GET /v2/folders/{folder_id}/folders endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().openapi({ description: "The parent folder's name." }),
          folders: z
            .array(FolderSchema)
            .openapi({
              description:
                "An array of the folder's direct subfolders. Each subfolder's `parent_folder_id` equals the requested folder's ID.",
            }),
        })
        .openapi({ required: ['name', 'folders'] }),
    },
  },
}

const GetFolderMetaResponseResponse = {
  description: 'Response from the GET /v2/folders/{folder_id}/meta endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z.string().openapi({ description: 'The ID of the folder.' }),
          name: z.string().openapi({ description: 'The name of the folder.' }),
          thumbnail_url: z
            .string()
            .nullable()
            .openapi({
              description:
                'A URL to a thumbnail image of the folder. Null if the folder has no files.',
            }),
          file_count: z.int().openapi({ description: 'The number of files in the folder.' }),
          updated_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The UTC ISO 8601 time at which the folder was last updated.',
            }),
          created_at: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The UTC ISO 8601 time at which the folder was created.' }),
        })
        .openapi({
          required: ['id', 'name', 'thumbnail_url', 'file_count', 'updated_at', 'created_at'],
        }),
    },
  },
}

const GetFolderFilesResponseResponse = {
  description: 'Response from the GET /v2/folders/{folder_id}/files endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().openapi({ description: "The folder's name." }),
          files: z
            .array(
              z
                .object({
                  key: z.string().openapi({ description: "The file's key." }),
                  name: z.string().openapi({ description: "The file's name." }),
                  thumbnail_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The file's thumbnail URL." }),
                  last_modified: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description: 'The UTC ISO 8601 time at which the file was last modified.',
                    }),
                  branches: z
                    .array(
                      z
                        .object({
                          key: z.string().openapi({ description: "The branch's file key." }),
                          name: z.string().openapi({ description: "The branch's name." }),
                          thumbnail_url: z
                            .string()
                            .exactOptional()
                            .openapi({ description: "The branch's thumbnail URL." }),
                          last_modified: z.iso
                            .datetime({ offset: true })
                            .openapi({
                              description:
                                'The UTC ISO 8601 time at which the branch was last modified.',
                            }),
                        })
                        .openapi({ required: ['key', 'name', 'last_modified'] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        "Present only when `branch_data` is true and the file has branches. An array of the file's branches.",
                    }),
                })
                .openapi({ required: ['key', 'name', 'last_modified'] }),
            )
            .openapi({ description: 'An array of the files directly in the folder.' }),
        })
        .openapi({ required: ['name', 'files'] }),
    },
  },
}

const GetFileVersionsResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/versions endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          versions: z.array(VersionSchema).openapi({ description: 'An array of versions.' }),
          pagination: ResponsePaginationSchema,
        })
        .openapi({ required: ['versions', 'pagination'] }),
    },
  },
}

const GetCommentsResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/comments endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          comments: z.array(CommentSchema).openapi({ description: 'An array of comments.' }),
        })
        .openapi({ required: ['comments'] }),
    },
  },
}

const PostCommentResponseResponse = {
  description: 'Response from the POST /v1/files/{file_key}/comments endpoint.',
  content: { 'application/json': { schema: CommentSchema } },
}

const DeleteCommentResponseResponse = {
  description: 'Response from the DELETE /v1/files/{file_key}/comments/{comment_id} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
        })
        .openapi({ required: ['status', 'error'] }),
    },
  },
}

const GetCommentReactionsResponseResponse = {
  description:
    'Response from the GET /v1/files/{file_key}/comments/{comment_id}/reactions endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          reactions: z.array(ReactionSchema).openapi({ description: 'An array of reactions.' }),
          pagination: ResponsePaginationSchema,
        })
        .openapi({ required: ['reactions', 'pagination'] }),
    },
  },
}

const PostCommentReactionResponseResponse = {
  description:
    'Response from the POST /v1/files/{file_key}/comments/{comment_id}/reactions endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
        })
        .openapi({ required: ['status', 'error'] }),
    },
  },
}

const DeleteCommentReactionResponseResponse = {
  description:
    'Response from the DELETE /v1/files/{file_key}/comments/{comment_id}/reactions endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
        })
        .openapi({ required: ['status', 'error'] }),
    },
  },
}

const GetMeResponseResponse = {
  description: 'Response from the GET /v1/me endpoint.',
  content: {
    'application/json': {
      schema: UserSchema.and(
        z
          .object({
            email: z
              .string()
              .openapi({
                description:
                  "Email associated with the user's account. This property is only present on the /v1/me endpoint.",
              }),
          })
          .openapi({ required: ['email'] }),
      ),
    },
  },
}

const GetTeamComponentsResponseResponse = {
  description: 'Response from the GET /v1/teams/{team_id}/components endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              components: z.array(PublishedComponentSchema),
              cursor: ResponseCursorSchema.exactOptional(),
            })
            .openapi({ required: ['components'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetFileComponentsResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/components endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({ components: z.array(PublishedComponentSchema) })
            .openapi({ required: ['components'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetComponentResponseResponse = {
  description: 'Response from the GET /v1/components/{key} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: PublishedComponentSchema,
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetTeamComponentSetsResponseResponse = {
  description: 'Response from the GET /v1/teams/{team_id}/component_sets endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              component_sets: z.array(PublishedComponentSetSchema),
              cursor: ResponseCursorSchema.exactOptional(),
            })
            .openapi({ required: ['component_sets'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetFileComponentSetsResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/component_sets endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({ component_sets: z.array(PublishedComponentSetSchema) })
            .openapi({ required: ['component_sets'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetComponentSetResponseResponse = {
  description: 'Response from the GET /v1/component_sets/{key} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: PublishedComponentSetSchema,
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetTeamStylesResponseResponse = {
  description: 'Response from the GET /v1/teams/{team_id}/styles endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              styles: z.array(PublishedStyleSchema),
              cursor: ResponseCursorSchema.exactOptional(),
            })
            .openapi({ required: ['styles'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetFileStylesResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/styles endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({ styles: z.array(PublishedStyleSchema) })
            .openapi({ required: ['styles'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetStyleResponseResponse = {
  description: 'Response from the GET /v1/styles/{key} endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The status of the request.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: PublishedStyleSchema,
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const PostWebhookResponseResponse = {
  description: 'Response from the POST /v2/webhooks endpoint.',
  content: { 'application/json': { schema: WebhookV2Schema } },
}

const GetWebhookResponseResponse = {
  description: 'Response from the GET /v2/webhooks/{webhook_id} endpoint.',
  content: { 'application/json': { schema: WebhookV2Schema } },
}

const GetWebhooksResponseResponse = {
  description: 'Response from the GET /v2/webhooks endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          webhooks: z.array(WebhookV2Schema).openapi({ description: 'An array of webhooks.' }),
          pagination: ResponsePaginationSchema.exactOptional(),
        })
        .openapi({ required: ['webhooks'] }),
    },
  },
}

const PutWebhookResponseResponse = {
  description: 'Response from the PUT /v2/webhooks/{webhook_id} endpoint.',
  content: { 'application/json': { schema: WebhookV2Schema } },
}

const DeleteWebhookResponseResponse = {
  description: 'Response from the DELETE /v2/webhooks/{webhook_id} endpoint.',
  content: { 'application/json': { schema: WebhookV2Schema } },
}

const GetTeamWebhooksResponseResponse = {
  description: 'Response from the GET /v2/teams/{team_id}/webhooks endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          webhooks: z.array(WebhookV2Schema).openapi({ description: 'An array of webhooks.' }),
        })
        .openapi({ required: ['webhooks'] }),
    },
  },
}

const GetWebhookRequestsResponseResponse = {
  description: 'Response from the GET /v2/webhooks/{webhook_id}/requests endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          requests: z
            .array(WebhookV2RequestSchema)
            .openapi({ description: 'An array of webhook requests.' }),
        })
        .openapi({ required: ['requests'] }),
    },
  },
}

const GetActivityLogsResponseResponse = {
  description: 'Response from the GET /v1/activity_logs endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z
            .literal(200)
            .exactOptional()
            .openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .exactOptional()
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              activity_logs: z
                .array(ActivityLogSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of activity logs sorted by timestamp in ascending order by default.',
                }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({ description: 'Encodes the last event (the most recent event)' }),
              next_page: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether there is a next page of events' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PostDeveloperLogsResponseResponse = {
  description: 'Response from the POST /v1/developer_logs endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              items: z
                .array(DeveloperLogSchema)
                .openapi({
                  description:
                    'An array of developer log entries sorted by timestamp in descending order.',
                }),
              cursor: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor for pagination. Pass this value as the `cursor` parameter in the next request to retrieve the next page of results. `null` when there are no more results.',
                }),
              has_more: z
                .boolean()
                .openapi({
                  description: 'Whether there are more results available after this page.',
                }),
            })
            .openapi({ required: ['items', 'has_more'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetAiUsageDailyResponseResponse = {
  description: 'Response from the GET /v1/ai_usage/daily endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .array(AiUsageDailyRowSchema)
            .openapi({
              description:
                'Per-user, per-day AI credit usage aggregates, ordered by `day`, then user, then `editor_type`.',
            }),
          next_cursor: z
            .string()
            .openapi({
              description:
                'An opaque cursor to pass as the `cursor` query parameter to fetch the next page. Empty when there are no more pages.',
            }),
          has_next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of results to fetch.' }),
        })
        .openapi({ required: ['rows', 'next_cursor', 'has_next_page'] }),
    },
  },
}

const GetPaymentsResponseResponse = {
  description: 'Response from the GET /v1/payments endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: PaymentInformationSchema,
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetLocalVariablesResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/variables/local endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              variables: z
                .record(z.string(), LocalVariableSchema)
                .openapi({ description: 'A map of variable ids to variables' }),
              variableCollections: z
                .record(z.string(), LocalVariableCollectionSchema)
                .openapi({
                  description: 'A map of variable collection ids to variable collections',
                }),
            })
            .openapi({ required: ['variables', 'variableCollections'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetPublishedVariablesResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/variables/published endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              variables: z
                .record(z.string(), PublishedVariableSchema)
                .openapi({ description: 'A map of variable ids to variables' }),
              variableCollections: z
                .record(z.string(), PublishedVariableCollectionSchema)
                .openapi({
                  description: 'A map of variable collection ids to variable collections',
                }),
            })
            .openapi({ required: ['variables', 'variableCollections'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const PostVariablesResponseResponse = {
  description: 'Response from the POST /v1/files/{file_key}/variables endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          status: z.literal(200).openapi({ description: 'The response status code.' }),
          error: z
            .literal(false)
            .openapi({ description: 'For successful requests, this value is always `false`.' }),
          meta: z
            .object({
              tempIdToRealId: z
                .record(z.string(), z.string())
                .openapi({
                  description:
                    'A map of temporary ids in the request to the real ids of the newly created objects',
                }),
            })
            .openapi({ required: ['tempIdToRealId'] }),
        })
        .openapi({ required: ['status', 'error', 'meta'] }),
    },
  },
}

const GetDevResourcesResponseResponse = {
  description: 'Response from the GET /v1/files/{file_key}/dev_resources endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          dev_resources: z
            .array(DevResourceSchema)
            .openapi({ description: 'An array of dev resources.' }),
        })
        .openapi({ required: ['dev_resources'] }),
    },
  },
}

const PostDevResourcesResponseResponse = {
  description: 'Response from the POST /v1/dev_resources endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          links_created: z
            .array(DevResourceSchema)
            .openapi({ description: 'An array of links created.' }),
          errors: z
            .array(
              z
                .object({
                  file_key: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The file key.' }),
                  node_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The node id.' }),
                  error: z.string().openapi({ description: 'The error message.' }),
                })
                .openapi({ required: ['error'] }),
            )
            .exactOptional()
            .openapi({ description: 'An array of errors.' }),
        })
        .openapi({ required: ['links_created'] }),
    },
  },
}

const PutDevResourcesResponseResponse = {
  description: 'Response from the PUT /v1/dev_resources endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          links_updated: z
            .array(DevResourceSchema)
            .exactOptional()
            .openapi({ description: 'An array of links updated.' }),
          errors: z
            .array(
              z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The id of the dev resource.' }),
                  error: z.string().openapi({ description: 'The error message.' }),
                })
                .openapi({ required: ['error'] }),
            )
            .exactOptional()
            .openapi({ description: 'An array of errors.' }),
        })
        .openapi({ required: ['links_created'] }),
    },
  },
}

const DeleteDevResourceResponseResponse = {
  description:
    'Response from the DELETE /v1/files/{file_key}/dev_resources/{dev_resource_id} endpoint.',
}

const GetLibraryAnalyticsComponentActionsResponseResponse = {
  description: 'Response from the GET /v1/analytics/libraries/{file_key}/component/actions.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsComponentActionsByAssetSchema),
              z.array(LibraryAnalyticsComponentActionsByTeamSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetLibraryAnalyticsComponentUsagesResponseResponse = {
  description: 'Response from the PUT /v1/analytics/libraries/{file_key}/component/usages.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsComponentUsagesByAssetSchema),
              z.array(LibraryAnalyticsComponentUsagesByFileSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetLibraryAnalyticsStyleActionsResponseResponse = {
  description: 'Response from the GET /v1/analytics/libraries/{file_key}/style/actions.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsStyleActionsByAssetSchema),
              z.array(LibraryAnalyticsStyleActionsByTeamSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetLibraryAnalyticsStyleUsagesResponseResponse = {
  description: 'Response from the PUT /v1/analytics/libraries/{file_key}/style/usages.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsStyleUsagesByAssetSchema),
              z.array(LibraryAnalyticsStyleUsagesByFileSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetLibraryAnalyticsVariableActionsResponseResponse = {
  description: 'Response from the GET /v1/analytics/libraries/{file_key}/variable/actions.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsVariableActionsByAssetSchema),
              z.array(LibraryAnalyticsVariableActionsByTeamSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetLibraryAnalyticsVariableUsagesResponseResponse = {
  description: 'Response from the PUT /v1/analytics/libraries/{file_key}/variable/usages.',
  content: {
    'application/json': {
      schema: z
        .object({
          rows: z
            .xor([
              z.array(LibraryAnalyticsVariableUsagesByAssetSchema),
              z.array(LibraryAnalyticsVariableUsagesByFileSchema),
            ])
            .openapi({ description: 'An array of analytics data.' }),
          next_page: z
            .boolean()
            .openapi({ description: 'Whether there is a next page of data that can be fetched.' }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cursor to use to fetch the next page of data. Not present if next_page is false.',
            }),
        })
        .openapi({ required: ['rows', 'next_page'] }),
    },
  },
}

const GetOEmbedResponseResponse = {
  description: 'Response from the GET /v1/oembed endpoint.',
  content: {
    'application/json': {
      schema: z
        .object({
          version: z
            .string()
            .openapi({ description: 'The oEmbed specification version. Always "1.0".' }),
          type: z.string().openapi({ description: 'The oEmbed response type. Always "rich".' }),
          title: z
            .string()
            .openapi({ description: 'The title of the Figma file or published Make site.' }),
          key: z
            .string()
            .exactOptional()
            .openapi({ description: 'The key of the Figma file. Not present for published Makes' }),
          url: z.string().openapi({ description: 'The canonical URL of the resource.' }),
          provider_name: z
            .string()
            .openapi({
              description: 'The name of the content provider. Always "Figma" or "Make".',
            }),
          provider_url: z
            .string()
            .openapi({
              description:
                'The URL of the content provider\'s website. Always "https://www.figma.com".',
            }),
          cache_age: z
            .int()
            .openapi({
              description: 'Suggested cache lifetime for this response in seconds. Always 3600.',
            }),
          width: z.int().openapi({ description: 'Width of the embed in pixels.' }),
          height: z.int().openapi({ description: 'Height of the embed in pixels.' }),
          html: z
            .string()
            .openapi({
              description:
                'The HTML for embedding the file. Contains an iframe pointing to the Figma embed URL.',
            }),
          is_published_site: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'Only present and "true" when the resource is a published Make.',
            }),
          folder_name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the folder containing the file, if the file resides in a folder.',
            }),
          thumbnail_url: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL of a thumbnail image for the file.' }),
          thumbnail_width: z
            .int()
            .exactOptional()
            .openapi({ description: 'Width of the thumbnail image in pixels.' }),
          thumbnail_height: z
            .int()
            .exactOptional()
            .openapi({ description: 'Height of the thumbnail image in pixels.' }),
        })
        .openapi({
          required: [
            'version',
            'type',
            'title',
            'url',
            'provider_name',
            'provider_url',
            'cache_age',
            'width',
            'height',
            'html',
          ],
        }),
    },
  },
}

const BadRequestErrorResponseWithErrMessageResponse = {
  description:
    'Bad request. Parameters are invalid or malformed. Please check the input formats. This error can also happen if the requested resources are too large to complete the request, which results in a timeout. Please reduce the number and size of objects requested.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(400).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const BadRequestErrorResponseWithErrorBooleanResponse = {
  description:
    'Bad request. Parameters are invalid or malformed. Please check the input formats. This error can also happen if the requested resources are too large to complete the request, which results in a timeout. Please reduce the number and size of objects requested.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(400).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const UnauthorizedErrorResponseWithErrorBooleanResponse = {
  description: 'Token is missing or incorrect.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(401).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const UnauthorizedErrorResponseWithErrMessageResponse = {
  description: 'Token is missing or incorrect.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(401).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const ForbiddenErrorResponseWithErrMessageResponse = {
  description:
    'The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(403).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const ForbiddenErrorResponseWithErrorBooleanResponse = {
  description:
    'The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(403).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const NotFoundErrorResponseWithErrMessageResponse = {
  description: 'The requested file or resource was not found.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(404).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const NotFoundErrorResponseWithErrorBooleanResponse = {
  description: 'The requested file or resource was not found.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(404).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const TooManyRequestsErrorResponseWithErrMessageResponse = {
  description:
    'In some cases API requests may be throttled or rate limited. Please wait a while before attempting the request again (typically a minute).',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(429).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const TooManyRequestsErrorResponseWithErrorBooleanResponse = {
  description:
    'In some cases API requests may be throttled or rate limited. Please wait a while before attempting the request again (typically a minute).',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(429).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const NotImplementedErrorResponseWithErrMessageResponse = {
  description: 'The server does not support the functionality required to fulfill the request.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(501).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const InternalServerErrorResponseWithErrMessageResponse = {
  description: 'An internal server error occurred.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrMessageSchema.and(
        z
          .object({ status: z.literal(500).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const InternalServerErrorResponseWithErrorBooleanResponse = {
  description: 'An internal server error occurred.',
  content: {
    'application/json': {
      schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
        z
          .object({ status: z.literal(500).openapi({ description: 'Status code' }) })
          .openapi({ required: ['status'] }),
      ),
    },
  },
}

const TeamResponseResponse = {
  description: 'Response containing a Team resource.',
  content: { 'application/json': { schema: TeamSchema } },
}

const InviteTeamMembersResponseResponse = {
  description:
    'Response from the POST /v1/teams/{team_id}/invites endpoint. Per-address failures return HTTP 200. Always inspect `errors`; `invites` may be empty.',
  content: {
    'application/json': {
      schema: z
        .object({
          invites: z
            .array(
              z
                .object({
                  email: z
                    .email()
                    .openapi({ description: 'The normalized email address that was invited.' }),
                  role: z
                    .enum(['viewer', 'editor', 'admin'])
                    .openapi({
                      description:
                        'The requested team role. Existing roles are never downgraded, so a user already on the team can have a higher role.',
                    }),
                })
                .openapi({ required: ['email', 'role'] }),
            )
            .openapi({
              description:
                'The email addresses that were invited, including users already on the team, whose role is kept or raised. An invitation can still require approval from an organization admin before the user joins the team.',
            }),
          errors: z
            .array(
              z
                .object({
                  email: z
                    .email()
                    .openapi({
                      description: 'The normalized email address that could not be invited.',
                    }),
                  error: z
                    .string()
                    .openapi({ description: 'A human-readable explanation of the failure.' }),
                })
                .openapi({ required: ['email', 'error'] }),
            )
            .openapi({
              description:
                'The email addresses that could not be invited. The other addresses in the request are still processed.',
            }),
        })
        .openapi({ required: ['invites', 'errors'] }),
      example: {
        invites: [{ email: 'alex@example.com', role: 'editor' }],
        errors: [{ email: 'sam@example.com', error: 'Unable to invite this email address.' }],
      },
    },
  },
}

const PostTeamInvitesErrorResponseResponse = {
  description:
    'Error response from the POST /v1/teams/{team_id}/invites endpoint. The error payload depends on where the request failed.',
  content: {
    'application/json': {
      schema: z.xor([
        ErrorResponsePayloadWithErrMessageSchema,
        ErrorResponsePayloadWithErrorBooleanSchema,
      ]),
    },
  },
}

const PersonalAccessTokenSecurityScheme = { type: 'apiKey', name: 'X-Figma-Token', in: 'header' }

const PlanAccessTokenSecurityScheme = { type: 'apiKey', name: 'X-Figma-Token', in: 'header' }

const OAuth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://www.figma.com/oauth',
      tokenUrl: 'https://api.figma.com/v1/oauth/token',
      refreshUrl: 'https://api.figma.com/v1/oauth/refresh',
      scopes: {
        'current_user:read': 'Read your name, email, and profile image.',
        'file_comments:read': 'Read the comments for files.',
        'file_comments:write': 'Post and delete comments and comment reactions in files.',
        'file_content:read': 'Read the contents of files, such as nodes and the editor type.',
        'file_duplicate:write':
          'Duplicate files into folders. Available only to private OAuth apps in an Enterprise plan.',
        'file_dev_resources:read': 'Read dev resources in files.',
        'file_dev_resources:write': 'Write to dev resources in files.',
        'file_metadata:read': 'Read metadata of files.',
        'file_variables:read':
          'Read variables in Figma file. Note: this is only available to members in Enterprise organizations.',
        'file_variables:write':
          'Write to variables in Figma file. Note: this is only available to members in Enterprise organizations.',
        'file_versions:read': 'Read the version history for files you can access.',
        'files:read':
          'Deprecated. Read files, projects, users, versions, comments, components & styles, and webhooks.',
        'library_analytics:read': 'Read library analytics data.',
        'library_assets:read': 'Read data of individual published components and styles.',
        'library_content:read': 'Read published components and styles of files.',
        'project_metadata:read': 'Read metadata of projects.',
        'projects:read': 'List projects and files in projects.',
        'folder_metadata:read': 'Read metadata of folders.',
        'folders:read': 'List folders and files in folders.',
        'folders:write':
          'Create folders. Available only to private OAuth apps in an Enterprise plan.',
        'team_library_content:read': 'Read published components and styles of teams.',
        'team_members:write':
          'Invite members to teams. Available only to private OAuth apps in an Enterprise plan.',
        'teams:read':
          'Read team metadata. Available to private OAuth apps in Professional, Organization, and Enterprise plans, and to plan access tokens in Organization and Enterprise plans.',
        'teams:write': 'Create teams. Available only to private OAuth apps in an Enterprise plan.',
        'webhooks:read': 'Read metadata of webhooks.',
        'webhooks:write': 'Create and manage webhooks.',
      },
    },
  },
}

const OrgOAuth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://www.figma.com/oauth',
      tokenUrl: 'https://api.figma.com/v1/oauth/token',
      refreshUrl: 'https://api.figma.com/v1/oauth/refresh',
      scopes: { 'org:activity_log_read': 'Read activity logs in the organization.' },
    },
  },
}

export const getV1FilesFileKeyRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}',
  tags: ['Files'],
  summary: 'Get file JSON',
  description:
    'Returns the document identified by `file_key` as a JSON object. The file key can be parsed from any Figma file url: `https://www.figma.com/file/{file_key}/{title}`.\n\nThe `document` property contains a node of type `DOCUMENT`.\n\nThe `components` property contains a mapping from node IDs to component metadata. This is to help you determine which components each instance comes from.',
  operationId: 'getFile',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'A specific version ID to get. Omitting this will get the current version of the file.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description:
              "Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes.\n\nNote: There may be other nodes included in the returned JSON that are outside the ancestor chains of the desired nodes. The response may also include dependencies of anything in the nodes' subtrees. For example, if a node subtree contains an instance of a local component that lives elsewhere in that file, that component and its ancestor chain will also be included.\n\nFor historical reasons, top-level canvas nodes are always returned, regardless of whether they are listed in the `ids` parameter. This quirk may be removed in a future version of the API.",
            schema: { type: 'string' },
            required: false,
          },
        }),
      depth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'depth',
            in: 'query',
            description:
              'Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes.',
            schema: { type: 'number' },
            required: false,
          },
        }),
      geometry: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'geometry',
            in: 'query',
            description: 'Set to "paths" to export vector data.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      plugin_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'plugin_data',
            in: 'query',
            description:
              'A comma separated list of plugin IDs and/or the string "shared". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      branch_data: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'branch_data',
            in: 'query',
            description:
              "Returns branch metadata for the requested file. If the file is a branch, the main file's key will be included in the returned response. If the file has branches, their metadata will be included in the returned response. Default: false.",
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetFileResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyNodesRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/nodes',
  tags: ['Files'],
  summary: 'Get file JSON for specific nodes',
  description:
    'Returns the nodes referenced to by `ids` as a JSON object. The nodes are retrieved from the Figma file referenced to by `file_key`.\n\nThe node ID and file key can be parsed from any Figma node url: `https://www.figma.com/file/{file_key}/{title}?node-id={id}`\n\nThe `name`, `lastModified`, `thumbnailUrl`, `editorType`, and `version` attributes are all metadata of the specified file.\n\nThe `linkAccess` field describes the file link share permission level. There are 5 types of permissions a shared link can have: `"inherit"`, `"view"`, `"edit"`, `"org_view"`, and `"org_edit"`. `"inherit"` is the default permission applied to files created in a team project, and will inherit the project\'s permissions. `"org_view"` and `"org_edit"` restrict the link to org users.\n\nThe `document` attribute contains a Node of type `DOCUMENT`.\n\nThe `components` key contains a mapping from node IDs to component metadata. This is to help you determine which components each instance comes from.\n\nBy default, no vector data is returned. To return vector data, pass the geometry=paths parameter to the endpoint.\nEach node can also inherit properties from applicable styles. The styles key contains a mapping from style IDs to style metadata.\n\nImportant: the nodes map may contain values that are `null`. This may be due to the node id not existing within the specified file.',
  operationId: 'getFileNodes',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'A comma separated list of node IDs to retrieve and convert.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'A specific version ID to get. Omitting this will get the current version of the file.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      depth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'depth',
            in: 'query',
            description:
              'Positive integer representing how deep into the node tree to traverse. For example, setting this to 1 will return only the children directly underneath the desired nodes. Not setting this parameter returns all nodes.\n\nNote: this parameter behaves differently from the same parameter in the `GET /v1/files/:key` endpoint. In this endpoint, the depth will be counted starting from the desired node rather than the document root node.',
            schema: { type: 'number' },
            required: false,
          },
        }),
      geometry: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'geometry',
            in: 'query',
            description: 'Set to "paths" to export vector data.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      plugin_data: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'plugin_data',
            in: 'query',
            description:
              'A comma separated list of plugin IDs and/or the string "shared". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetFileNodesResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_content:read', 'files:read'] },
  ],
})

export const getV1ImagesFileKeyRoute = createRoute({
  method: 'get',
  path: '/v1/images/{file_key}',
  tags: ['Files'],
  summary: 'Render images of file nodes',
  description:
    'Renders images from a file.\n\nIf no error occurs, `"images"` will be populated with a map from node IDs to URLs of the rendered images, and `"status"` will be omitted. The image assets will expire after 30 days. Images up to 32 megapixels can be exported. Any images that are larger will be scaled down.\n\nImportant: the image map may contain values that are `null`. This indicates that rendering of that specific node has failed. This may be due to the node id not existing, or other reasons such has the node having no renderable components. It is guaranteed that any node that was requested for rendering will be represented in this map whether or not the render succeeded.\n\nTo render multiple images from the same file, use the `ids` query parameter to specify multiple node ids.\n\n```\nGET /v1/images/:key?ids=1:2,1:3,1:4\n```\n',
  operationId: 'getImages',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to export images from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'A comma separated list of node IDs to render.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'A specific version ID to get. Omitting this will get the current version of the file.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0.01).max(4),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scale',
            in: 'query',
            description: 'A number between 0.01 and 4, the image scaling factor.',
            schema: { type: 'number', minimum: 0.01, maximum: 4 },
            required: false,
          },
        }),
      format: z
        .enum(['jpg', 'png', 'svg', 'pdf'])
        .default('png')
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description: 'A string enum for the image output format.',
            schema: { type: 'string', enum: ['jpg', 'png', 'svg', 'pdf'], default: 'png' },
            required: false,
          },
        }),
      svg_outline_text: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'svg_outline_text',
            in: 'query',
            description:
              "Whether text elements are rendered as outlines (vector paths) or as `<text>` elements in SVGs.\n\nRendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.\n\nExporting as `<text>` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.",
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      svg_include_id: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'svg_include_id',
            in: 'query',
            description:
              'Whether to include id attributes for all SVG elements. Adds the layer name to the `id` attribute of an svg element.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      svg_include_node_id: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'svg_include_node_id',
            in: 'query',
            description:
              'Whether to include node id attributes for all SVG elements. Adds the node id to a `data-node-id` attribute of an svg element.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      svg_simplify_stroke: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'svg_simplify_stroke',
            in: 'query',
            description:
              'Whether to simplify inside/outside strokes and use stroke attribute if possible instead of `<mask>`.',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      contents_only: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'contents_only',
            in: 'query',
            description:
              'Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering.',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      use_absolute_bounds: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'use_absolute_bounds',
            in: 'query',
            description:
              'Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetImagesResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyImagesRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/images',
  tags: ['Files'],
  summary: 'Get image fills',
  description:
    'Returns download links for all images present in image fills in a document. Image fills are how Figma represents any user supplied images. When you drag an image into Figma, we create a rectangle with a single fill that represents the image, and the user is able to transform the rectangle (and properties on the fill) as they wish.\n\nThis endpoint returns a mapping from image references to the URLs at which the images may be download. Image URLs will expire after no more than 14 days. Image references are located in the output of the GET files endpoint under the `imageRef` attribute in a `Paint`.',
  operationId: 'getImageFills',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get image URLs from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetImageFillsResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyMetaRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/meta',
  tags: ['Files'],
  summary: 'Get file metadata',
  description: 'Get file metadata',
  operationId: 'getFileMeta',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get metadata for. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFileMetaResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_metadata:read', 'files:read'] },
  ],
})

export const postV1FilesFileKeyDuplicateRoute = createRoute({
  method: 'post',
  path: '/v1/files/{file_key}/duplicate',
  tags: ['Files'],
  summary: 'Duplicate a file',
  description:
    "Duplicates a main file or branch into the specified folder as a new standalone file. The source file and destination folder must belong to the Enterprise plan associated with the private OAuth app. The authenticated user must be able to export the source file, edit the destination folder, and create files of the source editor type.\n\nThe copy uses the source's latest saved checkpoint and may not include recent unsaved changes. This endpoint is available only to Enterprise plans.",
  operationId: 'postFileDuplicate',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'The key of the main file or branch to duplicate.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The destination for the duplicated file.',
      content: {
        'application/json': {
          schema: z
            .object({
              folder_id: z
                .string()
                .openapi({ description: 'The ID of the folder to create the duplicated file in.' }),
            })
            .openapi({ required: ['folder_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostFileDuplicateResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: PostFileDuplicateErrorResponseResponse,
    403: PostFileDuplicateErrorResponseResponse,
    404: PostFileDuplicateErrorResponseResponse,
    429: PostFileDuplicateErrorResponseResponse,
    500: PostFileDuplicateErrorResponseResponse,
  },
  security: [{ OAuth2: ['file_duplicate:write'] }],
})

export const postV1TeamsRoute = createRoute({
  method: 'post',
  path: '/v1/teams',
  tags: ['Teams'],
  summary: 'Create a team',
  description:
    "Creates a team in the Enterprise plan associated with a private OAuth app. The app uses the authenticated user's permissions, and that user becomes the team owner. The request is subject to the same team-creation controls and permissions as team creation in Figma.",
  operationId: 'postTeam',
  request: {
    body: { content: { 'application/json': { schema: CreateTeamRequestSchema } }, required: true },
  },
  responses: {
    200: TeamResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    401: UnauthorizedErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ OAuth2: ['teams:write'] }],
})

export const getV1TeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{team_id}',
  tags: ['Teams'],
  summary: 'Get a team',
  description:
    'Returns metadata for a team the caller can access. Private OAuth apps can use this endpoint for Professional, Organization, and Enterprise plans. Plan access tokens can use it for Organization and Enterprise plans.',
  operationId: 'getTeam',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'The ID of the team.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TeamResponseResponse,
    401: UnauthorizedErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PlanAccessToken: [] }, { OAuth2: ['teams:read'] }],
})

export const postV1TeamsTeamIdInvitesRoute = createRoute({
  method: 'post',
  path: '/v1/teams/{team_id}/invites',
  tags: ['Teams'],
  summary: 'Invite users to a team',
  description:
    'Invites users to a team with the requested role. This endpoint is available only to private OAuth apps associated with an Enterprise plan, and the team must belong to that plan. The authenticated user must be allowed to grant the requested role on the team.\n\nEach email address is processed independently. Per-address failures are returned in `errors` with HTTP 200, even if `invites` is empty. Always check `errors` to determine which addresses could not be invited.\n\nExisting team members keep their current role when it is higher than the requested role.',
  operationId: 'postTeamInvites',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'The ID of the team to invite users to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The users to invite and the team role to grant them.',
      content: { 'application/json': { schema: InviteTeamMembersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: InviteTeamMembersResponseResponse,
    400: {
      description: 'Bad request. The response may be JSON or HTML.',
      content: {
        'application/json': {
          schema: ErrorResponsePayloadWithErrorBooleanSchema.and(
            z.object({ status: z.literal(400).exactOptional() }).openapi({ required: [] }),
          ),
        },
        'text/html': { schema: z.string() },
      },
    },
    401: PostTeamInvitesErrorResponseResponse,
    403: PostTeamInvitesErrorResponseResponse,
    404: PostTeamInvitesErrorResponseResponse,
    413: {
      description: 'Request body too large.',
      content: { 'text/html': { schema: z.string() } },
    },
    429: PostTeamInvitesErrorResponseResponse,
    500: PostTeamInvitesErrorResponseResponse,
  },
  security: [{ OAuth2: ['team_members:write'] }],
})

export const getV1TeamsTeamIdProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{team_id}/projects',
  tags: ['Projects'],
  summary: '[Deprecated] Get projects in a team',
  description:
    'Deprecated in favor of [Get top-level folders in a team](https://developers.figma.com/docs/rest-api/folders-endpoints/). You can use this endpoint to get a list of the top-level Projects (now called "folders") within the specified team. This will only return projects visible to the authenticated user or owner of the developer token. Note: it is not currently possible to programmatically obtain the team id of a user just from a token. To obtain a team id, navigate to a team page of a team you are a part of. The team id will be present in the URL after the word team and before your team name.',
  operationId: 'getTeamProjects',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'ID of the team to list projects from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetTeamProjectsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  deprecated: true,
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['projects:read', 'files:read'] },
  ],
})

export const getV1ProjectsProjectIdMetaRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/meta',
  tags: ['Projects'],
  summary: '[Deprecated] Get project metadata',
  description:
    'Deprecated in favor of [Get folder metadata](https://developers.figma.com/docs/rest-api/folders-endpoints/). Get metadata for a project (now called a "folder").',
  operationId: 'getProjectMeta',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'ID of the project to get metadata for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetProjectMetaResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  deprecated: true,
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['project_metadata:read'] },
  ],
})

export const getV1ProjectsProjectIdFilesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/files',
  tags: ['Projects'],
  summary: '[Deprecated] Get files in a project',
  description:
    'Deprecated in favor of [Get files in a folder](https://developers.figma.com/docs/rest-api/folders-endpoints/). Get a list of all the Files within the specified project (now called a "folder").',
  operationId: 'getProjectFiles',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'ID of the project to list files from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      branch_data: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'branch_data',
            in: 'query',
            description:
              'Returns branch metadata in the response for each main file with a branch inside the project.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetProjectFilesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  deprecated: true,
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['projects:read', 'files:read'] },
  ],
})

export const postV1TeamsTeamIdFoldersRoute = createRoute({
  method: 'post',
  path: '/v1/teams/{team_id}/folders',
  tags: ['Folders'],
  summary: 'Create a folder',
  description:
    'Creates a top-level folder in a team. The team must belong to the Enterprise plan associated with the private OAuth app, and the authenticated user must be allowed to create a folder in the team.',
  operationId: 'postTeamFolder',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'The ID of the team in which to create the folder.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFolderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateFolderResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    401: UnauthorizedErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ OAuth2: ['folders:write'] }],
})

export const getV2TeamsTeamIdFoldersRoute = createRoute({
  method: 'get',
  path: '/v2/teams/{team_id}/folders',
  tags: ['Folders'],
  summary: 'Get top-level folders in a team',
  description:
    'Get a list of the top-level folders (previously called "projects") within the specified team. Subfolders can be traversed with the GET /v2/folders/{folder_id}/folders endpoint. It is not possible to programmatically obtain team IDs. To obtain a team ID, navigate to the team page in the Figma file browser. The team ID is present in the URL after the word team. For example, in `https://www.figma.com/files/181033233908053158/team/1535685101263221741`, the team ID is `1535685101263221741`.',
  operationId: 'getTeamFolders',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'ID of the team to list folders from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetTeamFoldersResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['folders:read'] }],
})

export const getV2FoldersFolderIdFoldersRoute = createRoute({
  method: 'get',
  path: '/v2/folders/{folder_id}/folders',
  tags: ['Folders'],
  summary: 'Get subfolders in a folder',
  description: 'Get a list of the direct subfolders within the specified folder.',
  operationId: 'getFolderFolders',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            name: 'folder_id',
            in: 'path',
            description: 'ID of the parent folder to list subfolders from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFolderFoldersResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['folders:read'] }],
})

export const getV2FoldersFolderIdFilesRoute = createRoute({
  method: 'get',
  path: '/v2/folders/{folder_id}/files',
  tags: ['Folders'],
  summary: 'Get files in a folder',
  description: 'Get a list of the files directly within the specified folder.',
  operationId: 'getFolderFiles',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            name: 'folder_id',
            in: 'path',
            description: 'ID of the folder to list files from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      branch_data: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'branch_data',
            in: 'query',
            description:
              'Returns branch metadata in the response for each main file with a branch inside the folder.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetFolderFilesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['folders:read'] }],
})

export const getV2FoldersFolderIdMetaRoute = createRoute({
  method: 'get',
  path: '/v2/folders/{folder_id}/meta',
  tags: ['Folders'],
  summary: 'Get folder metadata',
  description:
    'Get metadata for a folder (name, thumbnail, file count, timestamps) without enumerating its files.',
  operationId: 'getFolderMeta',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            name: 'folder_id',
            in: 'path',
            description: 'ID of the folder to get metadata for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFolderMetaResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PlanAccessToken: [] }, { OAuth2: ['folder_metadata:read'] }],
})

export const getV1FilesFileKeyVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/versions',
  tags: ['Files'],
  summary: 'Get versions of a file',
  description:
    'This endpoint fetches the version history of a file, allowing you to see the progression of a file over time. You can then use this information to render a specific version of the file, via another endpoint.',
  operationId: 'getFileVersions',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description:
              'The number of items returned in a page of the response. If not included, `page_size` is `30`.',
            schema: { type: 'number', maximum: 50 },
            required: false,
          },
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              'A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response.',
            schema: { type: 'number' },
            required: false,
          },
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included.',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetFileVersionsResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_versions:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyCommentsRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/comments',
  tags: ['Comments'],
  summary: 'Get comments in a file',
  description: 'Gets a list of comments left on the file.',
  operationId: 'getComments',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get comments from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      as_md: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'as_md',
            in: 'query',
            description:
              'If enabled, will return comments as their markdown equivalents when applicable.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetCommentsResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_comments:read', 'files:read'] },
  ],
})

export const postV1FilesFileKeyCommentsRoute = createRoute({
  method: 'post',
  path: '/v1/files/{file_key}/comments',
  tags: ['Comments'],
  summary: 'Add a comment to a file',
  description: 'Posts a new comment on the file.',
  operationId: 'postComment',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Comment to post.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .openapi({ description: 'The text contents of the comment to post.' }),
              comment_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id).',
                }),
              client_meta: z
                .xor([VectorSchema, FrameOffsetSchema, RegionSchema, FrameOffsetRegionSchema])
                .exactOptional()
                .openapi({ description: 'The position where to place the comment.' }),
            })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostCommentResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_comments:write'] }],
})

export const deleteV1FilesFileKeyCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/files/{file_key}/comments/{comment_id}',
  tags: ['Comments'],
  summary: 'Delete a comment',
  description:
    'Deletes a specific comment. Only the person who made the comment is allowed to delete it.',
  operationId: 'deleteComment',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to delete comment from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment_id: z
        .string()
        .openapi({
          param: {
            name: 'comment_id',
            in: 'path',
            description: 'Comment id of comment to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeleteCommentResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_comments:write'] }],
})

export const getV1FilesFileKeyCommentsCommentIdReactionsRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/comments/{comment_id}/reactions',
  tags: ['Comment Reactions'],
  summary: 'Get reactions for a comment',
  description: 'Gets a paginated list of reactions left on the comment.',
  operationId: 'getCommentReactions',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment_id: z
        .string()
        .openapi({
          param: {
            name: 'comment_id',
            in: 'path',
            description: 'ID of comment to get reactions from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Cursor for pagination, retrieved from the response of the previous call.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetCommentReactionsResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_comments:read', 'files:read'] },
  ],
})

export const postV1FilesFileKeyCommentsCommentIdReactionsRoute = createRoute({
  method: 'post',
  path: '/v1/files/{file_key}/comments/{comment_id}/reactions',
  tags: ['Comment Reactions'],
  summary: 'Add a reaction to a comment',
  description: 'Posts a new comment reaction on a file comment.',
  operationId: 'postCommentReaction',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to post comment reactions to. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment_id: z
        .string()
        .openapi({
          param: {
            name: 'comment_id',
            in: 'path',
            description: 'ID of comment to react to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Reaction to post.',
      content: {
        'application/json': {
          schema: z.object({ emoji: EmojiSchema }).openapi({ required: ['emoji'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostCommentReactionResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_comments:write'] }],
})

export const deleteV1FilesFileKeyCommentsCommentIdReactionsRoute = createRoute({
  method: 'delete',
  path: '/v1/files/{file_key}/comments/{comment_id}/reactions',
  tags: ['Comment Reactions'],
  summary: 'Delete a reaction',
  description:
    'Deletes a specific comment reaction. Only the person who made the reaction is allowed to delete it.',
  operationId: 'deleteCommentReaction',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to delete comment reaction from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment_id: z
        .string()
        .openapi({
          param: {
            name: 'comment_id',
            in: 'path',
            description: 'ID of comment to delete reaction from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      emoji: EmojiSchema.openapi({
        param: {
          name: 'emoji',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/Emoji' },
        },
      }),
    }),
  },
  responses: {
    200: DeleteCommentReactionResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_comments:write'] }],
})

export const getV1MeRoute = createRoute({
  method: 'get',
  path: '/v1/me',
  tags: ['Users'],
  summary: 'Get current user',
  description: 'Returns the user information for the currently authenticated user.',
  operationId: 'getMe',
  responses: {
    200: GetMeResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['current_user:read', 'files:read'] }],
})

export const getV1TeamsTeamIdComponentsRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{team_id}/components',
  tags: ['Components'],
  summary: 'Get team components',
  description: 'Get a paginated list of published components within a team library.',
  operationId: 'getTeamComponents',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'Id of the team to list components from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description:
              'Number of items to return in a paged list of results. Defaults to 30. Maximum of 1000.',
            schema: { type: 'number', default: 30 },
            required: false,
          },
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "Cursor indicating which id after which to start retrieving components for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              "Cursor indicating which id before which to start retrieving components for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetTeamComponentsResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['team_library_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyComponentsRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/components',
  tags: ['Components'],
  summary: 'Get file components',
  description: 'Get a list of published components within a file library.',
  operationId: 'getFileComponents',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to list components from. This must be a main file key, not a branch key, as it is not possible to publish from branches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFileComponentsResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_content:read', 'files:read'] },
  ],
})

export const getV1ComponentsKeyRoute = createRoute({
  method: 'get',
  path: '/v1/components/{key}',
  tags: ['Components'],
  summary: 'Get component',
  description: 'Get metadata on a component by key.',
  operationId: 'getComponent',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The unique identifier of the component.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetComponentResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_assets:read', 'files:read'] },
  ],
})

export const getV1TeamsTeamIdComponentSetsRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{team_id}/component_sets',
  tags: ['Component Sets'],
  summary: 'Get team component sets',
  description: 'Get a paginated list of published component sets within a team library.',
  operationId: 'getTeamComponentSets',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'Id of the team to list component sets from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of items to return in a paged list of results. Defaults to 30.',
            schema: { type: 'number', default: 30 },
            required: false,
          },
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "Cursor indicating which id after which to start retrieving component sets for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              "Cursor indicating which id before which to start retrieving component sets for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetTeamComponentSetsResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['team_library_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyComponentSetsRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/component_sets',
  tags: ['Component Sets'],
  summary: 'Get file component sets',
  description: 'Get a list of published component sets within a file library.',
  operationId: 'getFileComponentSets',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFileComponentSetsResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_content:read', 'files:read'] },
  ],
})

export const getV1ComponentSetsKeyRoute = createRoute({
  method: 'get',
  path: '/v1/component_sets/{key}',
  tags: ['Component Sets'],
  summary: 'Get component set',
  description: 'Get metadata on a published component set by key.',
  operationId: 'getComponentSet',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The unique identifier of the component set.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetComponentSetResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_assets:read', 'files:read'] },
  ],
})

export const getV1TeamsTeamIdStylesRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{team_id}/styles',
  tags: ['Styles'],
  summary: 'Get team styles',
  description: 'Get a paginated list of published styles within a team library.',
  operationId: 'getTeamStyles',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'Id of the team to list styles from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of items to return in a paged list of results. Defaults to 30.',
            schema: { type: 'number', default: 30 },
            required: false,
          },
        }),
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              "Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.",
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetTeamStylesResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['team_library_content:read', 'files:read'] },
  ],
})

export const getV1FilesFileKeyStylesRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/styles',
  tags: ['Styles'],
  summary: 'Get file styles',
  description: 'Get a list of published styles within a file library.',
  operationId: 'getFileStyles',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to list styles from. This must be a main file key, not a branch key, as it is not possible to publish from branches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetFileStylesResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_content:read', 'files:read'] },
  ],
})

export const getV1StylesKeyRoute = createRoute({
  method: 'get',
  path: '/v1/styles/{key}',
  tags: ['Styles'],
  summary: 'Get style',
  description: 'Get metadata on a style by key.',
  operationId: 'getStyle',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The unique identifier of the style.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetStyleResponseResponse,
    400: BadRequestErrorResponseWithErrMessageResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_assets:read', 'files:read'] },
  ],
})

export const getV2WebhooksRoute = createRoute({
  method: 'get',
  path: '/v2/webhooks',
  tags: ['Webhooks'],
  summary: 'Get webhooks by context or plan',
  description:
    'Returns a list of webhooks corresponding to the context or plan provided, if they exist. For plan, the webhooks for all contexts that you have access to will be returned, and theresponse is paginated',
  operationId: 'getWebhooks',
  request: {
    query: z.object({
      context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'context',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Context to create the resource on. Should be "team", "project", or "file".',
          },
        }),
      context_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'context_id',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "The id of the context that you want to get attached webhooks for. If you're using context_id, you cannot use plan_api_id.",
          },
        }),
      plan_api_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'plan_api_id',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "The id of your plan. Use this to get all webhooks for all contexts you have access to. If you're using plan_api_id, you cannot use context or context_id. When you use plan_api_id, the response is paginated.",
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "If you're using plan_api_id, this is the cursor to use for pagination. If you're using context or context_id, this parameter is ignored. Provide the next_page or prev_page value from the previous response to get the next or previous page of results.",
          },
        }),
    }),
  },
  responses: {
    200: GetWebhooksResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['webhooks:read'] }],
})

export const postV2WebhooksRoute = createRoute({
  method: 'post',
  path: '/v2/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  description:
    'Create a new webhook which will call the specified endpoint when the event triggers. By default, this webhook will automatically send a PING event to the endpoint when it is created. If this behavior is not desired, you can create the webhook and set the status to PAUSED and reactivate it later.',
  operationId: 'postWebhook',
  request: {
    body: {
      description: 'The webhook to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              event_type: WebhookV2EventSchema,
              team_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Team id to receive updates about. This is deprecated, use 'context' and 'context_id' instead.",
                  deprecated: true,
                }),
              context: z
                .string()
                .openapi({
                  description:
                    'Context to create the webhook for. Must be "team", "project", or "file".',
                }),
              context_id: z
                .string()
                .openapi({
                  description: 'The id of the context you want to receive updates about.',
                }),
              endpoint: z
                .string()
                .openapi({
                  description:
                    'The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters.',
                }),
              passcode: z
                .string()
                .openapi({
                  description:
                    'String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters.',
                }),
              status: WebhookV2StatusSchema.exactOptional().openapi({
                description: 'State of the webhook, including any error state it may be in',
              }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'User provided description or name for the webhook. Max length 150 characters.',
                }),
            })
            .openapi({ required: ['event_type', 'endpoint', 'passcode', 'context', 'context_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostWebhookResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  callbacks: {
    ping: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'Ping event',
          description:
            'Triggers when a webhook is created. Used for debugging. Cannot be subscribed to, all webhooks will receive `PING` events.',
          requestBody: {
            description: 'The webhook will send a PING event to the endpoint when it is created.',
            content: { 'application/json': { schema: WebhookPingPayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    fileUpdate: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'File update event',
          description: 'Triggers within 30 minutes of editing inactivity in a file.',
          requestBody: {
            description:
              'This is useful when you want to stay up-to-date with the contents of a file. For example, you could generate a static website from your Figma document and keep it always up-to-date with this webhook.',
            content: { 'application/json': { schema: WebhookFileUpdatePayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    fileVersionUpdate: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'File version update event',
          description:
            'Triggers whenever a named version is created in the version history of a file.',
          requestBody: {
            description:
              'This is useful for workflow integrations. For example, suppose you have a Figma document with icon assets. When the design for an asset is updated and ready to publish, you can have a member of the team tag that version in the version history and then use this webhook event to generate and deploy your new asset version.',
            content: { 'application/json': { schema: WebhookFileVersionUpdatePayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    fileDelete: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'File delete event',
          description:
            'Triggers whenever a file has been deleted. If you subscribe to `FILE_UPDATE`, you automatically get these notifications. Note that this does not trigger on all files within a folder, if the folder is deleted.',
          requestBody: {
            description:
              'Note if a folder is deleted, this event will not trigger for files within the folder.',
            content: { 'application/json': { schema: WebhookFileDeletePayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    libraryPublish: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'Library publish event',
          description: 'Triggers whenever a library file is published.',
          requestBody: {
            description:
              'This is useful for workflow integrations. This webhook could integrate with Slack, Asana or Jira, notifying designers to modify their assets when new components are published.\n\nNote: when a library is published, a separate `LIBRARY_PUBLISH` event will be triggered for each type of library asset (components, styles, and variables) that has changes.',
            content: { 'application/json': { schema: WebhookLibraryPublishPayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    fileComment: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'File comment event',
          description: 'Triggers when someone comments on a file.',
          requestBody: {
            description:
              'This webhook could integrate with Asana or Jira and automatically create tasks whenever a user comments. It could also integrate with Slack and notify mentioned users.',
            content: { 'application/json': { schema: WebhookFileCommentPayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code\n                    if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
    devModeStatusUpdate: {
      '{$request.body#/endpoint}': {
        post: {
          summary: 'Dev mode status update event',
          description: 'Triggers whenever the Dev Mode status for a layer in a file changes.',
          requestBody: {
            description:
              'This is useful for task management integrations. For example, you could use this webhook to update a task in Jira or Asana when the Dev Mode status of a layer changes.',
            content: { 'application/json': { schema: WebhookDevModeStatusUpdatePayloadSchema } },
            required: true,
          },
          responses: {
            200: {
              description:
                'Your server implementation should return this HTTP status code if the data was received successfully',
            },
            400: {
              description:
                'If your server returns a non-200 status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.',
            },
          },
          security: [{ PersonalAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
        },
      },
    },
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
})

export const getV2WebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v2/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Get a webhook',
  description: 'Get a webhook by ID.',
  operationId: 'getWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .string()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            description: 'ID of webhook to get',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetWebhookResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['webhooks:read', 'files:read'] },
  ],
})

export const putV2WebhooksWebhookIdRoute = createRoute({
  method: 'put',
  path: '/v2/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  description: 'Update a webhook by ID.',
  operationId: 'putWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .string()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            description: 'ID of webhook to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The webhook to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              event_type: WebhookV2EventSchema,
              endpoint: z
                .string()
                .openapi({
                  description:
                    'The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters.',
                }),
              passcode: z
                .string()
                .openapi({
                  description:
                    'String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters.',
                }),
              status: WebhookV2StatusSchema.exactOptional().openapi({
                description: 'State of the webhook, including any error state it may be in',
              }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'User provided description or name for the webhook. Max length 150 characters.',
                }),
            })
            .openapi({ required: ['event_type', 'team_id', 'endpoint', 'passcode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PutWebhookResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
})

export const deleteV2WebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v2/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description: 'Deletes the specified webhook. This operation cannot be reversed.',
  operationId: 'deleteWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .string()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            description: 'ID of webhook to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeleteWebhookResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PersonalAccessToken: [] }, { PlanAccessToken: [] }, { OAuth2: ['webhooks:write'] }],
})

export const getV2TeamsTeamIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/v2/teams/{team_id}/webhooks',
  tags: ['Webhooks'],
  summary: '[Deprecated] Get team webhooks',
  description: 'Returns all webhooks registered under the specified team.',
  operationId: 'getTeamWebhooks',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            name: 'team_id',
            in: 'path',
            description: 'ID of team to get webhooks for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetTeamWebhooksResponseResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrMessageResponse,
  },
  deprecated: true,
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['webhooks:read', 'files:read'] },
  ],
})

export const getV2WebhooksWebhookIdRequestsRoute = createRoute({
  method: 'get',
  path: '/v2/webhooks/{webhook_id}/requests',
  tags: ['Webhooks'],
  summary: 'Get webhook requests',
  description: 'Returns all webhook requests sent within the last week. Useful for debugging.',
  operationId: 'getWebhookRequests',
  request: {
    params: z.object({
      webhook_id: z
        .string()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            description: 'The id of the webhook subscription you want to see events from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetWebhookRequestsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrMessageResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['webhooks:read', 'files:read'] },
  ],
})

export const getV1ActivityLogsRoute = createRoute({
  method: 'get',
  path: '/v1/activity_logs',
  tags: ['Activity Logs'],
  summary: 'Get activity logs',
  description: 'Returns a list of activity log events',
  operationId: 'getActivityLogs',
  request: {
    query: z.object({
      events: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'events',
            description:
              'Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_time',
            description:
              'Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified.',
            in: 'query',
            schema: { type: 'number' },
            required: false,
          },
        }),
      end_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_time',
            description:
              'Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified.',
            in: 'query',
            schema: { type: 'number' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Maximum number of events to return. This param defaults to 1000 if unspecified.',
            in: 'query',
            schema: { type: 'number' },
            required: false,
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            description:
              'Event order by timestamp. This param can be either "asc" (default) or "desc".',
            in: 'query',
            schema: { type: 'string', enum: ['asc', 'desc'], default: 'asc' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetActivityLogsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PlanAccessToken: [] }, { OrgOAuth2: ['org:activity_log_read'] }],
})

export const postV1DeveloperLogsRoute = createRoute({
  method: 'post',
  path: '/v1/developer_logs',
  tags: ['Developer Logs'],
  summary: 'Get developer logs',
  description:
    'Returns a list of developer log entries for REST API and MCP server requests made within the organization. This endpoint requires a plan access token with the `org:developer_log_read` scope.',
  operationId: 'getDeveloperLogs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token_type: z
                .enum(['plan_access_token', 'developer_token', 'oauth_token'])
                .exactOptional()
                .openapi({ description: 'Filter by the type of token used for authentication.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter by token value(s). Multiple values can be separated by commas.',
                }),
              token_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter by token name prefix(es). Multiple values can be separated by commas.',
                }),
              user_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter by user email prefix(es). Multiple values can be separated by commas.',
                }),
              ip_address: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter by IP address prefix(es). Multiple values can be separated by commas.',
                }),
              event_source: z
                .enum(['rest_api', 'mcp_server'])
                .exactOptional()
                .openapi({ description: 'Filter by event source.' }),
              date_range: z
                .enum(['last_24h', 'last_7d', 'last_30d'])
                .default('last_30d')
                .exactOptional()
                .openapi({ description: 'Filter by date range.' }),
              limit: z
                .int()
                .min(1)
                .max(100)
                .default(25)
                .exactOptional()
                .openapi({ description: 'Maximum number of entries to return.' }),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A cursor returned from a previous request, used for pagination.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: PostDeveloperLogsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PlanAccessToken: [] }],
})

export const getV1AiUsageDailyRoute = createRoute({
  method: 'get',
  path: '/v1/ai_usage/daily',
  tags: ['AI Usage'],
  summary: 'Get daily AI credit usage',
  description:
    'Returns per-user, per-day AI credit usage for the plan associated with the calling token. This endpoint requires a plan access token with the `org:ai_metering_usage_read` scope.',
  operationId: 'getAiUsageDaily',
  request: {
    query: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            name: 'start_date',
            description:
              'The first day to include, inclusive, as a `YYYY-MM-DD` calendar date (UTC). Required. Must be on or after `2025-12-01` and no more than 366 days before the current UTC day.',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            name: 'end_date',
            description:
              'The last day to include, inclusive, as a `YYYY-MM-DD` calendar date (UTC). Required. Must be on or after `start_date` and the current UTC day or earlier.',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_email',
            description:
              'Restrict the results to a single Figma user, identified by email. When omitted, rows for every user in the plan with usage in the range are returned. An email that matches no Figma user returns a 400.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description:
              'Maximum number of rows to return. This param defaults to 1000 if unspecified, and may not exceed 1000.',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 1000, default: 1000 },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description: 'An opaque cursor returned from a previous request, used for pagination.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetAiUsageDailyResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PlanAccessToken: [] }],
})

export const getV1PaymentsRoute = createRoute({
  method: 'get',
  path: '/v1/payments',
  tags: ['Payments'],
  summary: 'Get payments',
  description:
    "There are two methods to query for a user's payment information on a plugin, widget, or Community file. The first method, using plugin payment tokens, is typically used when making queries from a plugin's or widget's code. The second method, providing a user ID and resource ID, is typically used when making queries from anywhere else.\n\nNote that you can only query for resources that you own. In most cases, this means that you can only query resources that you originally created.",
  operationId: 'getPayments',
  request: {
    query: z.object({
      plugin_payment_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'plugin_payment_token',
            in: 'query',
            description:
              'Short-lived token returned from "getPluginPaymentTokenAsync" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through "Calling the Payments REST API from a plugin or widget" below.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            description:
              'The ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      community_file_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'community_file_id',
            in: 'query',
            description:
              'The ID of the Community file to query a user\'s payment information on. You can get the Community file ID from the file\'s Community page (look for the number after "file/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".',
            schema: { type: 'string' },
            required: false,
          },
        }),
      plugin_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'plugin_id',
            in: 'query',
            description:
              'The ID of the plugin to query a user\'s payment information on. You can get the plugin ID from the plugin\'s manifest, or from the plugin\'s Community page (look for the number after "plugin/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".',
            schema: { type: 'string' },
            required: false,
          },
        }),
      widget_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'widget_id',
            in: 'query',
            description:
              'The ID of the widget to query a user\'s payment information on. You can get the widget ID from the widget\'s manifest, or from the widget\'s Community page (look for the number after "widget/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetPaymentsResponseResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PersonalAccessToken: [] }],
})

export const getV1FilesFileKeyVariablesLocalRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/variables/local',
  tags: ['Variables'],
  summary: 'Get local variables',
  description:
    '**This API is available to full members of Enterprise orgs.**\n\nThe `GET /v1/files/:file_key/variables/local` endpoint lets you enumerate local variables created in the file and remote variables used in the file. Remote variables are referenced by their `subscribed_id`.\n\nAs a part of the Variables related API additions, the `GET /v1/files/:file_key` endpoint now returns a `boundVariables` property, containing the `variableId` of the bound variable. The `GET /v1/files/:file_key/variables/local` endpoint can be used to get the full variable or variable collection object.\n\nNote that `GET /v1/files/:file_key/variables/published` does not return modes. Instead, you will need to use the `GET /v1/files/:file_key/variables/local` endpoint, in the same file, to examine the mode values.\n        ',
  operationId: 'getLocalVariables',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get variables from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetLocalVariablesResponseResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_variables:read'] }],
})

export const getV1FilesFileKeyVariablesPublishedRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/variables/published',
  tags: ['Variables'],
  summary: 'Get published variables',
  description:
    '**This API is available to full members of Enterprise orgs.**\n\nThe `GET /v1/files/:file_key/variables/published` endpoint returns the variables that are published from the given file.\n\nThe response for this endpoint contains some key differences compared to the `GET /v1/files/:file_key/variables/local` endpoint:\n\n- Each variable and variable collection contains a `subscribed_id`.\n- Modes are omitted for published variable collections\n\nPublished variables have two ids: an id that is assigned in the file where it is created (`id`), and an id that is used by subscribing files (`subscribed_id`). The `id` and `key` are stable over the lifetime of the variable. The `subscribed_id` changes every time the variable is modified and published. The same is true for variable collections.\n\nThe `updatedAt` fields are ISO 8601 timestamps that indicate the last time that a change to a variable was published. For variable collections, this timestamp will change any time a variable in the collection is changed.',
  operationId: 'getPublishedVariables',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetPublishedVariablesResponseResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_variables:read'] }],
})

export const postV1FilesFileKeyVariablesRoute = createRoute({
  method: 'post',
  path: '/v1/files/{file_key}/variables',
  tags: ['Variables'],
  summary: 'Create/modify/delete variables',
  description:
    '**This API is available to full members of Enterprise orgs with Editor seats.**\n\nThe `POST /v1/files/:file_key/variables` endpoint lets you bulk create, update, and delete variables and variable collections.\n\nThe request body supports the following 4 top-level arrays. Changes from these arrays will be applied in the below order, and within each array, by array order.\n\n- **variableCollections**: For creating, updating, and deleting variable collections\n- **variableModes**: For creating, updating, and deleting modes within variable collections\n  - Each collection can have a maximum of 40 modes\n  - Mode names cannot be longer than 40 characters\n- **variables**: For creating, updating, and deleting variables\n  - Each collection can have a maximum of 5000 variables\n  - Variable names must be unique within a collection and cannot contain certain special characters such as `.{}`\n- **variableModeValues**: For setting a variable value under a specific mode.\n  - When setting aliases, a variable cannot be aliased to itself or form an alias cycle\n  - Color variables can use a composed color value with `color` and `opacity` fields. At least one field must be a variable alias.\n\nTemporary ids can be used to reference an object later in the same POST request body. They can be used at create time in the `id` property of variable collections, modes, variables, and in the `initialModeId` property of variable collections. They are scoped to a single request body, and must be unique within the body. The mapping of temporary ids to real ids is returned in the response.\n\nThis endpoint has the following key behaviors:\n\n- The request body must be 4MB or less.\n- Must include an `action` property for collections, modes, and variables to tell the API whether to create, update, or delete the object.\n- When creating a collection, mode, or variable, you can include a temporary `id` that can be referenced in dependent objects in the same request. For example, you can create a new collection with the id `"my_new_collection"`. You can then set `variableCollectionId` to `"my_new_collection"` in new modes or variables. Temporary ids must be unique in the request body.\n- New collections always come with one mode. You can reference this mode by setting `initialModeId` to a temporary id in the request body. This is useful if you want to set values for variables in the mode in the `variableModeValues` array.\n  - The `tempIdToRealId` array returns a mapping of the temporary ids in the request, to the real ids of the newly created objects.\n- When adding new modes or variables, default variable values will be applied, consistent with what happens in the UI.\n- Everything to be created, updated, and deleted in the request body is treated as one atomic operation. If there is any validation failure, you will get a 400 status code response, and no changes will be persisted.\n- You will not be able to update remote variables or variable collections. You can only update variables in the file where they were originally created.',
  operationId: 'postVariables',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'File to modify variables in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              variableCollections: z
                .array(VariableCollectionChangeSchema)
                .exactOptional()
                .openapi({
                  description: 'For creating, updating, and deleting variable collections.',
                }),
              variableModes: z
                .array(VariableModeChangeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'For creating, updating, and deleting modes within variable collections.',
                }),
              variables: z
                .array(VariableChangeSchema)
                .exactOptional()
                .openapi({ description: 'For creating, updating, and deleting variables.' }),
              variableModeValues: z
                .array(VariableModeValueSchema)
                .exactOptional()
                .openapi({
                  description: 'For setting a specific value, given a variable and a mode.',
                }),
            })
            .refine((val) => Object.keys(val).length >= 1)
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostVariablesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_variables:write'] }],
})

export const getV1FilesFileKeyDevResourcesRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_key}/dev_resources',
  tags: ['Dev Resources'],
  summary: 'Get dev resources',
  description: 'Get dev resources in a file',
  operationId: 'getDevResources',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'The file to get the dev resources from. This must be a main file key, not a branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      node_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'node_ids',
            in: 'query',
            description:
              'Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetDevResourcesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_dev_resources:read'] },
  ],
})

export const putV1DevResourcesRoute = createRoute({
  method: 'put',
  path: '/v1/dev_resources',
  tags: ['Dev Resources'],
  summary: 'Update dev resources',
  description:
    'Bulk update dev resources across multiple files.\n\nIds for dev resources that are successfully updated will show up in the `links_updated` array in the response.\n\nIf there are any dev resources that cannot be updated, you may still get a 200 response. These resources will show up in the `errors` array.',
  operationId: 'putDevResources',
  request: {
    body: {
      description: 'A list of dev resources that you want to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              dev_resources: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .openapi({ description: 'Unique identifier of the dev resource' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the dev resource.' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The URL of the dev resource.' }),
                    })
                    .openapi({ required: ['id'] }),
                )
                .openapi({ description: 'An array of dev resources.' }),
            })
            .openapi({ required: ['dev_resources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PutDevResourcesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_dev_resources:write'] },
  ],
})

export const postV1DevResourcesRoute = createRoute({
  method: 'post',
  path: '/v1/dev_resources',
  tags: ['Dev Resources'],
  summary: 'Create dev resources',
  description:
    'Bulk create dev resources across multiple files.\nDev resources that are successfully created will show up in the links_created array in the response.\n\nIf there are any dev resources that cannot be created, you may still get a 200 response. These resources will show up in the errors array. Some reasons a dev resource cannot be created include:\n\n- Resource points to a `file_key` that cannot be found.\n- The node already has the maximum of 10 dev resources.\n- Another dev resource for the node has the same url.',
  operationId: 'postDevResources',
  request: {
    body: {
      description: 'A list of dev resources that you want to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              dev_resources: z
                .array(
                  z
                    .object({
                      name: z.string().openapi({ description: 'The name of the dev resource.' }),
                      url: z.string().openapi({ description: 'The URL of the dev resource.' }),
                      file_key: z
                        .string()
                        .openapi({ description: 'The file key where the dev resource belongs.' }),
                      node_id: z
                        .string()
                        .openapi({ description: 'The target node to attach the dev resource to.' }),
                    })
                    .openapi({ required: ['name', 'url', 'file_key', 'node_id'] }),
                )
                .openapi({ description: 'An array of dev resources.' }),
            })
            .openapi({ required: ['dev_resources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PostDevResourcesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_dev_resources:write'] },
  ],
})

export const deleteV1FilesFileKeyDevResourcesDevResourceIdRoute = createRoute({
  method: 'delete',
  path: '/v1/files/{file_key}/dev_resources/{dev_resource_id}',
  tags: ['Dev Resources'],
  summary: 'Delete dev resource',
  description: 'Delete a dev resource from a file',
  operationId: 'deleteDevResource',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description:
              'The file to delete the dev resource from. This must be a main file key, not a branch key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dev_resource_id: z
        .string()
        .openapi({
          param: {
            name: 'dev_resource_id',
            in: 'path',
            description: 'The id of the dev resource to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeleteDevResourceResponseResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['file_dev_resources:write'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyComponentActionsRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/component/actions',
  tags: ['Library Analytics'],
  summary: 'Get library analytics component action data.',
  description:
    'Returns a list of library analytics component actions data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsComponentActions',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['component', 'team'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['component', 'team'] },
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsComponentActionsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyComponentUsagesRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/component/usages',
  tags: ['Library Analytics'],
  summary: 'Get library analytics component usage data.',
  description:
    'Returns a list of library analytics component usage data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsComponentUsages',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['component', 'file'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['component', 'file'] },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsComponentUsagesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyStyleActionsRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/style/actions',
  tags: ['Library Analytics'],
  summary: 'Get library analytics style action data.',
  description:
    'Returns a list of library analytics style actions data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsStyleActions',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['style', 'team'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['style', 'team'] },
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsStyleActionsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyStyleUsagesRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/style/usages',
  tags: ['Library Analytics'],
  summary: 'Get library analytics style usage data.',
  description:
    'Returns a list of library analytics style usage data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsStyleUsages',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['style', 'file'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['style', 'file'] },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsStyleUsagesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyVariableActionsRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/variable/actions',
  tags: ['Library Analytics'],
  summary: 'Get library analytics variable action data.',
  description:
    'Returns a list of library analytics variable actions data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsVariableActions',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['variable', 'team'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['variable', 'team'] },
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            description:
              'ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsVariableActionsResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1AnalyticsLibrariesFileKeyVariableUsagesRoute = createRoute({
  method: 'get',
  path: '/v1/analytics/libraries/{file_key}/variable/usages',
  tags: ['Library Analytics'],
  summary: 'Get library analytics variable usage data.',
  description:
    'Returns a list of library analytics variable usage data broken down by the requested dimension.',
  operationId: 'getLibraryAnalyticsVariableUsages',
  request: {
    params: z.object({
      file_key: z
        .string()
        .openapi({
          param: {
            name: 'file_key',
            in: 'path',
            description: 'File key of the library to fetch analytics data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            description:
              'Cursor indicating what page of data to fetch. Obtained from prior API call.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['variable', 'file'])
        .openapi({
          param: {
            name: 'group_by',
            description: 'A dimension to group returned analytics data by.',
            required: true,
            in: 'query',
            schema: { type: 'string', enum: ['variable', 'file'] },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryAnalyticsVariableUsagesResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    401: UnauthorizedErrorResponseWithErrorBooleanResponse,
    403: ForbiddenErrorResponseWithErrorBooleanResponse,
    429: TooManyRequestsErrorResponseWithErrorBooleanResponse,
    500: InternalServerErrorResponseWithErrorBooleanResponse,
  },
  security: [
    { PersonalAccessToken: [] },
    { PlanAccessToken: [] },
    { OAuth2: ['library_analytics:read'] },
  ],
})

export const getV1OembedRoute = createRoute({
  method: 'get',
  path: '/v1/oembed',
  tags: ['oEmbed'],
  summary: 'Get oEmbed data',
  description:
    'Returns oEmbed data for a Figma file or published Make site URL, following the [oEmbed specification](https://oembed.com/).',
  operationId: 'getOEmbed',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description:
              'The URL of the Figma file or published Make site to retrieve oEmbed data for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxwidth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(800)
        .exactOptional()
        .openapi({
          param: {
            name: 'maxwidth',
            in: 'query',
            description:
              'Maximum width of the embed in pixels. Defaults to 800. The response width will be adjusted to maintain a 16:9 aspect ratio with maxheight.',
            schema: { type: 'integer', default: 800 },
            required: false,
          },
        }),
      maxheight: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(450)
        .exactOptional()
        .openapi({
          param: {
            name: 'maxheight',
            in: 'query',
            description:
              'Maximum height of the embed in pixels. Defaults to 450. The response height will be adjusted to maintain a 16:9 aspect ratio with maxwidth.',
            schema: { type: 'integer', default: 450 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetOEmbedResponseResponse,
    400: BadRequestErrorResponseWithErrorBooleanResponse,
    404: NotFoundErrorResponseWithErrMessageResponse,
    429: TooManyRequestsErrorResponseWithErrMessageResponse,
    501: NotImplementedErrorResponseWithErrMessageResponse,
  },
  security: [{ PersonalAccessToken: [] }, { OAuth2: ['file_metadata:read'] }],
})
