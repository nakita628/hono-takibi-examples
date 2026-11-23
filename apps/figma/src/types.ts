type Role = 'owner' | 'editor' | 'viewer'
type VariableAlias = { type: 'VARIABLE_ALIAS'; id: string }
type BlendMode =
  | 'PASS_THROUGH'
  | 'NORMAL'
  | 'DARKEN'
  | 'MULTIPLY'
  | 'LINEAR_BURN'
  | 'COLOR_BURN'
  | 'LIGHTEN'
  | 'SCREEN'
  | 'LINEAR_DODGE'
  | 'COLOR_DODGE'
  | 'OVERLAY'
  | 'SOFT_LIGHT'
  | 'HARD_LIGHT'
  | 'DIFFERENCE'
  | 'EXCLUSION'
  | 'HUE'
  | 'SATURATION'
  | 'COLOR'
  | 'LUMINOSITY'
type Rectangle = { x: number; y: number; width: number; height: number }
type LayoutConstraint = {
  vertical: 'TOP' | 'BOTTOM' | 'CENTER' | 'TOP_BOTTOM' | 'SCALE'
  horizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'LEFT_RIGHT' | 'SCALE'
}
type Transform = number[][]
type Vector = { x: number; y: number }
type RGBA = { r: number; g: number; b: number; a: number }
type SolidPaint = {
  type: 'SOLID'
  color: RGBA
  boundVariables?: { color?: VariableAlias | undefined } | undefined
  visible?: boolean | undefined
  opacity?: number | undefined
  blendMode: BlendMode
}
type ColorStop = {
  position: number
  color: RGBA
  boundVariables?: { color?: VariableAlias | undefined } | undefined
}
type GradientPaint = {
  type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
  gradientHandlePositions: Vector[]
  gradientStops: ColorStop[]
  visible?: boolean | undefined
  opacity?: number | undefined
  blendMode: BlendMode
}
type ImageFilters = {
  exposure?: number | undefined
  contrast?: number | undefined
  saturation?: number | undefined
  temperature?: number | undefined
  tint?: number | undefined
  highlights?: number | undefined
  shadows?: number | undefined
}
type ImagePaint = {
  type: 'IMAGE'
  scaleMode: 'FILL' | 'FIT' | 'TILE' | 'STRETCH'
  imageRef: string
  imageTransform?: Transform | undefined
  scalingFactor?: number | undefined
  filters?: ImageFilters | undefined
  rotation?: number | undefined
  gifRef?: string | undefined
  visible?: boolean | undefined
  opacity?: number | undefined
  blendMode: BlendMode
}
type PatternPaint = {
  type: 'PATTERN'
  sourceNodeId: string
  tileType: 'RECTANGULAR' | 'HORIZONTAL_HEXAGONAL' | 'VERTICAL_HEXAGONAL'
  scalingFactor: number
  spacing: Vector
  horizontalAlignment: 'START' | 'CENTER' | 'END'
  verticalAlignment: 'START' | 'CENTER' | 'END'
  visible?: boolean | undefined
  opacity?: number | undefined
  blendMode: BlendMode
}
type Paint = SolidPaint | GradientPaint | ImagePaint | PatternPaint
type PaintOverride = { fills?: Paint[] | undefined; inheritFillStyleId?: string | undefined }
type Path = { path: string; windingRule: 'NONZERO' | 'EVENODD'; overrideID?: number | undefined }
type Constraint = { type: 'SCALE' | 'WIDTH' | 'HEIGHT'; value: number }
type ExportSetting = {
  suffix: string
  format: 'JPG' | 'PNG' | 'SVG' | 'PDF'
  constraint: Constraint
}
type DropShadowEffect = {
  type: 'DROP_SHADOW'
  showShadowBehindNode: boolean
  color: RGBA
  blendMode: BlendMode
  offset: Vector
  radius: number
  spread?: number | undefined
  visible: boolean
  boundVariables?:
    | {
        radius?: VariableAlias | undefined
        spread?: VariableAlias | undefined
        color?: VariableAlias | undefined
        offsetX?: VariableAlias | undefined
        offsetY?: VariableAlias | undefined
      }
    | undefined
}
type InnerShadowEffect = {
  type?: 'INNER_SHADOW' | undefined
  color: RGBA
  blendMode: BlendMode
  offset: Vector
  radius: number
  spread?: number | undefined
  visible: boolean
  boundVariables?:
    | {
        radius?: VariableAlias | undefined
        spread?: VariableAlias | undefined
        color?: VariableAlias | undefined
        offsetX?: VariableAlias | undefined
        offsetY?: VariableAlias | undefined
      }
    | undefined
}
type NormalBlurEffect = {
  blurType?: 'NORMAL' | undefined
  type: 'LAYER_BLUR' | 'BACKGROUND_BLUR'
  visible: boolean
  radius: number
  boundVariables?: { radius?: VariableAlias | undefined } | undefined
}
type ProgressiveBlurEffect = {
  blurType: 'PROGRESSIVE'
  startRadius: number
  startOffset: Vector
  endOffset: Vector
  type: 'LAYER_BLUR' | 'BACKGROUND_BLUR'
  visible: boolean
  radius: number
  boundVariables?: { radius?: VariableAlias | undefined } | undefined
}
type BlurEffect = NormalBlurEffect | ProgressiveBlurEffect
type TextureEffect = {
  type: 'TEXTURE'
  visible: boolean
  noiseSize: number
  radius: number
  clipToShape: boolean
}
type MonotoneNoiseEffect = {
  noiseType: 'MONOTONE'
  type: 'NOISE'
  color: RGBA
  visible: boolean
  blendMode: BlendMode
  noiseSize: number
  density: number
}
type MultitoneNoiseEffect = {
  noiseType: 'MULTITONE'
  opacity: number
  type: 'NOISE'
  color: RGBA
  visible: boolean
  blendMode: BlendMode
  noiseSize: number
  density: number
}
type DuotoneNoiseEffect = {
  noiseType: 'DUOTONE'
  secondaryColor: RGBA
  type: 'NOISE'
  color: RGBA
  visible: boolean
  blendMode: BlendMode
  noiseSize: number
  density: number
}
type NoiseEffect = MonotoneNoiseEffect | MultitoneNoiseEffect | DuotoneNoiseEffect
type Effect = DropShadowEffect | InnerShadowEffect | BlurEffect | TextureEffect | NoiseEffect
type EasingType =
  | 'EASE_IN'
  | 'EASE_OUT'
  | 'EASE_IN_AND_OUT'
  | 'LINEAR'
  | 'EASE_IN_BACK'
  | 'EASE_OUT_BACK'
  | 'EASE_IN_AND_OUT_BACK'
  | 'CUSTOM_CUBIC_BEZIER'
  | 'GENTLE'
  | 'QUICK'
  | 'BOUNCY'
  | 'SLOW'
  | 'CUSTOM_SPRING'
type AfterTimeoutTrigger = { type: 'AFTER_TIMEOUT'; timeout: number }
type OnKeyDownTrigger = {
  type: 'ON_KEY_DOWN'
  device: 'KEYBOARD' | 'XBOX_ONE' | 'PS4' | 'SWITCH_PRO' | 'UNKNOWN_CONTROLLER'
  keyCodes: number[]
}
type OnMediaHitTrigger = { type: 'ON_MEDIA_HIT'; mediaHitTime: number }
type Trigger =
  | { type: 'ON_CLICK' | 'ON_HOVER' | 'ON_PRESS' | 'ON_DRAG' }
  | AfterTimeoutTrigger
  | {
      type: 'MOUSE_ENTER' | 'MOUSE_LEAVE' | 'MOUSE_UP' | 'MOUSE_DOWN'
      delay: number
      deprecatedVersion?: boolean | undefined
    }
  | OnKeyDownTrigger
  | OnMediaHitTrigger
  | { type: 'ON_MEDIA_END' }
type OpenURLAction = { type: 'URL'; url: string }
type UpdateMediaRuntimeAction =
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId: string | null
      mediaAction: 'PLAY' | 'PAUSE' | 'TOGGLE_PLAY_PAUSE' | 'MUTE' | 'UNMUTE' | 'TOGGLE_MUTE_UNMUTE'
    }
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId?: (string | null) | undefined
      mediaAction: 'SKIP_FORWARD' | 'SKIP_BACKWARD'
      amountToSkip: number
    }
  | {
      type: 'UPDATE_MEDIA_RUNTIME'
      destinationId?: (string | null) | undefined
      mediaAction: 'SKIP_TO'
      newTimestamp: number
    }
type VariableDataType = 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR' | 'VARIABLE_ALIAS' | 'EXPRESSION'
type VariableResolvedDataType = 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'
type RGB = { r: number; g: number; b: number }
type ExpressionFunction =
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
type Expression = { expressionFunction: ExpressionFunction; expressionArguments: VariableData[] }
type VariableData = {
  type?: VariableDataType | undefined
  resolvedType?: VariableResolvedDataType | undefined
  value?: boolean | number | string | RGB | RGBA | VariableAlias | Expression | undefined
}
type SetVariableAction = {
  type: 'SET_VARIABLE'
  variableId: string | null
  variableValue?: VariableData | undefined
}
type SetVariableModeAction = {
  type: 'SET_VARIABLE_MODE'
  variableCollectionId?: (string | null) | undefined
  variableModeId?: (string | null) | undefined
}
type ConditionalBlock = { condition?: VariableData | undefined; actions: Action[] }
type ConditionalAction = { type: 'CONDITIONAL'; conditionalBlocks: ConditionalBlock[] }
type Navigation = 'NAVIGATE' | 'SWAP' | 'OVERLAY' | 'SCROLL_TO' | 'CHANGE_TO'
type Easing = {
  type: EasingType
  easingFunctionCubicBezier?: { x1: number; y1: number; x2: number; y2: number } | undefined
  easingFunctionSpring?: { mass: number; stiffness: number; damping: number } | undefined
}
type SimpleTransition = {
  type: 'DISSOLVE' | 'SMART_ANIMATE' | 'SCROLL_ANIMATE'
  duration: number
  easing: Easing
}
type DirectionalTransition = {
  type: 'MOVE_IN' | 'MOVE_OUT' | 'PUSH' | 'SLIDE_IN' | 'SLIDE_OUT'
  direction: 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM'
  duration: number
  easing: Easing
  matchLayers?: boolean | undefined
}
type Transition = SimpleTransition | DirectionalTransition
type NodeAction = {
  type: 'NODE'
  destinationId: string | null
  navigation: Navigation
  transition: Transition | ({ [x: string]: unknown } | null)
  preserveScrollPosition?: boolean | undefined
  overlayRelativePosition?: Vector | undefined
  resetVideoPosition?: boolean | undefined
  resetScrollPosition?: boolean | undefined
  resetInteractiveComponents?: boolean | undefined
}
type Action =
  | { type: 'BACK' | 'CLOSE' }
  | OpenURLAction
  | UpdateMediaRuntimeAction
  | SetVariableAction
  | SetVariableModeAction
  | ConditionalAction
  | NodeAction
type Interaction = {
  trigger: Trigger | ({ [x: string]: unknown } | null)
  actions?: Action[] | undefined
}
type BooleanOperationNode = {
  type: string
  booleanOperation: 'UNION' | 'INTERSECT' | 'SUBTRACT' | 'EXCLUDE'
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
}
type LayoutGrid = {
  pattern: 'COLUMNS' | 'ROWS' | 'GRID'
  sectionSize: number
  visible: boolean
  color: RGBA
  alignment: 'MIN' | 'MAX' | 'STRETCH' | 'CENTER'
  gutterSize: number
  offset: number
  count: number
  boundVariables?:
    | {
        gutterSize?: VariableAlias | undefined
        numSections?: VariableAlias | undefined
        sectionSize?: VariableAlias | undefined
        offset?: VariableAlias | undefined
      }
    | undefined
}
type StrokeWeights = { top: number; right: number; bottom: number; left: number }
type ComponentPropertyType = 'BOOLEAN' | 'INSTANCE_SWAP' | 'TEXT' | 'VARIANT' | 'SLOT'
type SlotContentId = { guid: { sessionID: number; localID: number } }
type InstanceSwapPreferredValue = { type: 'COMPONENT' | 'COMPONENT_SET'; key: string }
type SlotSettings = {
  stretchChildOnInsert?: boolean | undefined
  displayEmptyByDefault?: boolean | undefined
  minChildren?: (number | null) | undefined
  maxChildren?: (number | null) | undefined
  allowPreferredValuesOnly?: boolean | undefined
}
type ComponentPropertyDefinition = {
  type: ComponentPropertyType
  defaultValue: boolean | string | SlotContentId
  variantOptions?: string[] | undefined
  preferredValues?: InstanceSwapPreferredValue[] | undefined
  slotSettings?: SlotSettings | undefined
}
type ComponentNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
  componentPropertyDefinitions?: { [x: string]: ComponentPropertyDefinition } | undefined
}
type ComponentSetNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
  componentPropertyDefinitions?: { [x: string]: ComponentPropertyDefinition } | undefined
}
type ConnectorEndpoint =
  | { endpointNodeId?: string | undefined; position?: Vector | undefined }
  | {
      endpointNodeId?: string | undefined
      magnet?: 'AUTO' | 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER' | undefined
    }
type ConnectorLineType = 'STRAIGHT' | 'ELBOWED' | 'CURVED'
type ConnectorTextBackground = {
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
}
type ConnectorNode = {
  type: string
  connectorStart: ConnectorEndpoint
  connectorEnd: ConnectorEndpoint
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
  connectorLineType: ConnectorLineType
  textBackground?: ConnectorTextBackground | undefined
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  effects: Effect[]
  exportSettings?: ExportSetting[] | undefined
  characters: string
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
}
type ArcData = { startingAngle: number; endingAngle: number; innerRadius: number }
type EllipseNode = {
  type: string
  arcData: ArcData
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
}
type EmbedNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  exportSettings?: ExportSetting[] | undefined
}
type FrameNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
}
type GroupNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
}
type ComponentProperty = {
  type: ComponentPropertyType
  value: boolean | string | SlotContentId
  preferredValues?: InstanceSwapPreferredValue[] | undefined
  boundVariables?: { value?: VariableAlias | undefined } | undefined
}
type Overrides = { id: string; overriddenFields: string[] }
type InstanceNode = {
  type: string
  componentId: string
  isExposedInstance?: boolean | undefined
  exposedInstances?: string[] | undefined
  componentProperties?: { [x: string]: ComponentProperty } | undefined
  overrides: Overrides[]
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
}
type LineNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
}
type LinkUnfurlNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  exportSettings?: ExportSetting[] | undefined
}
type RectangleNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
}
type RegularPolygonNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
}
type SectionNode = {
  type: string
  sectionContentsHidden: boolean
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
}
type ShapeType =
  | 'SQUARE'
  | 'ELLIPSE'
  | 'ROUNDED_RECTANGLE'
  | 'DIAMOND'
  | 'TRIANGLE_UP'
  | 'TRIANGLE_DOWN'
  | 'PARALLELOGRAM_RIGHT'
  | 'PARALLELOGRAM_LEFT'
  | 'ENG_DATABASE'
  | 'ENG_QUEUE'
  | 'ENG_FILE'
  | 'ENG_FOLDER'
  | 'TRAPEZOID'
  | 'PREDEFINED_PROCESS'
  | 'SHIELD'
  | 'DOCUMENT_SINGLE'
  | 'DOCUMENT_MULTIPLE'
  | 'MANUAL_INPUT'
  | 'HEXAGON'
  | 'CHEVRON'
  | 'PENTAGON'
  | 'OCTAGON'
  | 'STAR'
  | 'PLUS'
  | 'ARROW_LEFT'
  | 'ARROW_RIGHT'
  | 'SUMMING_JUNCTION'
  | 'OR'
  | 'SPEECH_BUBBLE'
  | 'INTERNAL_STORAGE'
type ShapeWithTextNode = {
  type: string
  shapeType: ShapeType
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  effects: Effect[]
  exportSettings?: ExportSetting[] | undefined
  characters: string
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
}
type SliceNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
}
type StarNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
}
type StickyNode = {
  type: string
  authorVisible?: boolean | undefined
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  effects: Effect[]
  exportSettings?: ExportSetting[] | undefined
  characters: string
}
type TableNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  effects: Effect[]
  blendMode: BlendMode
  opacity?: number | undefined
  exportSettings?: ExportSetting[] | undefined
}
type TableCellNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  characters: string
}
type Hyperlink = { type: 'URL' | 'NODE'; url?: string | undefined; nodeID?: string | undefined }
type TypeStyle = {
  paragraphSpacing?: number | undefined
  paragraphIndent?: number | undefined
  listSpacing?: number | undefined
  textDecoration?: 'NONE' | 'STRIKETHROUGH' | 'UNDERLINE' | undefined
  fontVariantPosition?: 'NORMAL' | 'SUPER' | 'SUB' | undefined
  textAutoResize?: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT' | 'TRUNCATE' | undefined
  textTruncation?: 'DISABLED' | 'ENDING' | undefined
  maxLines?: number | undefined
  lineHeightPx?: number | undefined
  lineHeightPercent?: number | undefined
  lineHeightPercentFontSize?: number | undefined
  lineHeightUnit?: 'PIXELS' | 'FONT_SIZE_%' | 'INTRINSIC_%' | undefined
  isOverrideOverTextStyle?: boolean | undefined
  boundVariables?:
    | {
        fontFamily?: VariableAlias | undefined
        fontSize?: VariableAlias | undefined
        fontStyle?: VariableAlias | undefined
        fontWeight?: VariableAlias | undefined
        letterSpacing?: VariableAlias | undefined
        lineHeight?: VariableAlias | undefined
        paragraphSpacing?: VariableAlias | undefined
        paragraphIndent?: VariableAlias | undefined
      }
    | undefined
  fontFamily?: string | undefined
  fontPostScriptName?: (string | null) | undefined
  fontStyle?: string | undefined
  italic?: boolean | undefined
  fontWeight?: number | undefined
  fontSize?: number | undefined
  textCase?:
    | 'ORIGINAL'
    | 'UPPER'
    | 'LOWER'
    | 'TITLE'
    | 'SMALL_CAPS'
    | 'SMALL_CAPS_FORCED'
    | undefined
  textAlignHorizontal?: 'LEFT' | 'RIGHT' | 'CENTER' | 'JUSTIFIED' | undefined
  textAlignVertical?: 'TOP' | 'CENTER' | 'BOTTOM' | undefined
  letterSpacing?: number | undefined
  fills?: Paint[] | undefined
  hyperlink?: Hyperlink | undefined
  opentypeFlags?: { [x: string]: number } | undefined
  semanticWeight?: 'BOLD' | 'NORMAL' | undefined
  semanticItalic?: 'ITALIC' | 'NORMAL' | undefined
}
type TextNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  characters: string
  style: TypeStyle
  characterStyleOverrides: number[]
  layoutVersion?: number | undefined
  styleOverrideTable: { [x: string]: TypeStyle }
  lineTypes: ('NONE' | 'ORDERED' | 'UNORDERED')[]
  lineIndentations: number[]
}
type TextPathTypeStyle = {
  isOverrideOverTextStyle?: boolean | undefined
  boundVariables?:
    | {
        fontFamily?: VariableAlias | undefined
        fontSize?: VariableAlias | undefined
        fontStyle?: VariableAlias | undefined
        fontWeight?: VariableAlias | undefined
        letterSpacing?: VariableAlias | undefined
      }
    | undefined
  fontFamily?: string | undefined
  fontPostScriptName?: (string | null) | undefined
  fontStyle?: string | undefined
  italic?: boolean | undefined
  fontWeight?: number | undefined
  fontSize?: number | undefined
  textCase?:
    | 'ORIGINAL'
    | 'UPPER'
    | 'LOWER'
    | 'TITLE'
    | 'SMALL_CAPS'
    | 'SMALL_CAPS_FORCED'
    | undefined
  textAlignHorizontal?: 'LEFT' | 'RIGHT' | 'CENTER' | 'JUSTIFIED' | undefined
  textAlignVertical?: 'TOP' | 'CENTER' | 'BOTTOM' | undefined
  letterSpacing?: number | undefined
  fills?: Paint[] | undefined
  hyperlink?: Hyperlink | undefined
  opentypeFlags?: { [x: string]: number } | undefined
  semanticWeight?: 'BOLD' | 'NORMAL' | undefined
  semanticItalic?: 'ITALIC' | 'NORMAL' | undefined
}
type TextPathNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  characters: string
  style: TextPathTypeStyle
  characterStyleOverrides: number[]
  layoutVersion?: number | undefined
  styleOverrideTable: { [x: string]: TextPathTypeStyle }
}
type TransformGroupNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  children: SubcanvasNode[]
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  clipsContent: boolean
  background?: Paint[] | undefined
  backgroundColor?: RGBA | undefined
  layoutGrids?: LayoutGrid[] | undefined
  overflowDirection?:
    | 'HORIZONTAL_SCROLLING'
    | 'VERTICAL_SCROLLING'
    | 'HORIZONTAL_AND_VERTICAL_SCROLLING'
    | 'NONE'
    | undefined
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'GRID' | undefined
  primaryAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  counterAxisSizingMode?: 'FIXED' | 'AUTO' | undefined
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN' | undefined
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE' | undefined
  paddingLeft?: number | undefined
  paddingRight?: number | undefined
  paddingTop?: number | undefined
  paddingBottom?: number | undefined
  itemSpacing?: number | undefined
  itemReverseZIndex?: boolean | undefined
  strokesIncludedInLayout?: boolean | undefined
  layoutWrap?: 'NO_WRAP' | 'WRAP' | undefined
  counterAxisSpacing?: number | undefined
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN' | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  individualStrokeWeights?: StrokeWeights | undefined
  devStatus?:
    | { type: 'NONE' | 'READY_FOR_DEV' | 'COMPLETED'; description?: string | undefined }
    | undefined
}
type VectorNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
  cornerRadius?: number | undefined
  cornerSmoothing?: number | undefined
  rectangleCornerRadii?: number[] | undefined
}
type WashiTapeNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  blendMode: BlendMode
  opacity?: number | undefined
  absoluteBoundingBox: Rectangle | ({ [x: string]: unknown } | null)
  absoluteRenderBounds: Rectangle | ({ [x: string]: unknown } | null)
  preserveRatio?: boolean | undefined
  constraints?: LayoutConstraint | undefined
  relativeTransform?: Transform | undefined
  size?: Vector | undefined
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX' | undefined
  layoutGrow?: 0 | 1 | undefined
  layoutPositioning?: 'AUTO' | 'ABSOLUTE' | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL' | undefined
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL' | undefined
  gridRowCount?: number | undefined
  gridColumnCount?: number | undefined
  gridRowGap?: number | undefined
  gridColumnGap?: number | undefined
  gridColumnsSizing?: string | undefined
  gridRowsSizing?: string | undefined
  gridChildHorizontalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridChildVerticalAlign?: 'AUTO' | 'MIN' | 'CENTER' | 'MAX' | undefined
  gridRowSpan?: number | undefined
  gridColumnSpan?: number | undefined
  gridRowAnchorIndex?: number | undefined
  gridColumnAnchorIndex?: number | undefined
  fills: Paint[]
  styles?: { [x: string]: string } | undefined
  strokes?: Paint[] | undefined
  strokeWeight?: number | undefined
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER' | undefined
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND' | undefined
  strokeDashes?: number[] | undefined
  fillOverrideTable?: { [x: string]: PaintOverride | ({ [x: string]: unknown } | null) } | undefined
  fillGeometry?: Path[] | undefined
  strokeGeometry?: Path[] | undefined
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
    | undefined
  strokeMiterAngle?: number | undefined
  exportSettings?: ExportSetting[] | undefined
  effects: Effect[]
  isMask?: boolean | undefined
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE' | undefined
  isMaskOutline?: boolean | undefined
  transitionNodeID?: string | undefined
  transitionDuration?: number | undefined
  transitionEasing?: EasingType | undefined
  interactions?: Interaction[] | undefined
}
type WidgetNode = {
  type: string
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  exportSettings?: ExportSetting[] | undefined
  children: SubcanvasNode[]
}
type SubcanvasNode =
  | BooleanOperationNode
  | ComponentNode
  | ComponentSetNode
  | ConnectorNode
  | EllipseNode
  | EmbedNode
  | FrameNode
  | GroupNode
  | InstanceNode
  | LineNode
  | LinkUnfurlNode
  | RectangleNode
  | RegularPolygonNode
  | SectionNode
  | ShapeWithTextNode
  | SliceNode
  | StarNode
  | StickyNode
  | TableNode
  | TableCellNode
  | TextNode
  | TextPathNode
  | TransformGroupNode
  | VectorNode
  | WashiTapeNode
  | WidgetNode
type FlowStartingPoint = { nodeId: string; name: string }
type Size = { width: number; height: number }
type PrototypeDevice = {
  type: 'NONE' | 'PRESET' | 'CUSTOM' | 'PRESENTATION'
  size?: Size | undefined
  presetIdentifier?: string | undefined
  rotation: 'NONE' | 'CCW_90'
}
type MeasurementStartEnd = { nodeId: string; side: 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT' }
type MeasurementOffsetInner = { type: 'INNER'; relative: number }
type MeasurementOffsetOuter = { type: 'OUTER'; fixed: number }
type Measurement = {
  id: string
  start: MeasurementStartEnd
  end: MeasurementStartEnd
  offset: MeasurementOffsetInner | MeasurementOffsetOuter
  freeText?: string | undefined
}
type CanvasNode = {
  type: string
  children: SubcanvasNode[]
  backgroundColor: RGBA
  prototypeStartNodeID: string | null
  flowStartingPoints: FlowStartingPoint[]
  prototypeDevice: PrototypeDevice
  prototypeBackgrounds?: RGBA[] | undefined
  measurements?: Measurement[] | undefined
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
  exportSettings?: ExportSetting[] | undefined
}
type DocumentNode = {
  type: string
  children: CanvasNode[]
  id: string
  name: string
  visible?: boolean | undefined
  locked?: boolean | undefined
  isFixed?: boolean | undefined
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS'
  rotation?: number | undefined
  componentPropertyReferences?: { [x: string]: string } | undefined
  pluginData?: { [x: string]: unknown } | undefined
  sharedPluginData?: { [x: string]: unknown } | undefined
  boundVariables?:
    | {
        size?: { x?: VariableAlias | undefined; y?: VariableAlias | undefined } | undefined
        individualStrokeWeights?:
          | {
              top?: VariableAlias | undefined
              bottom?: VariableAlias | undefined
              left?: VariableAlias | undefined
              right?: VariableAlias | undefined
            }
          | undefined
        characters?: VariableAlias | undefined
        itemSpacing?: VariableAlias | undefined
        paddingLeft?: VariableAlias | undefined
        paddingRight?: VariableAlias | undefined
        paddingTop?: VariableAlias | undefined
        paddingBottom?: VariableAlias | undefined
        visible?: VariableAlias | undefined
        topLeftRadius?: VariableAlias | undefined
        topRightRadius?: VariableAlias | undefined
        bottomLeftRadius?: VariableAlias | undefined
        bottomRightRadius?: VariableAlias | undefined
        minWidth?: VariableAlias | undefined
        maxWidth?: VariableAlias | undefined
        minHeight?: VariableAlias | undefined
        maxHeight?: VariableAlias | undefined
        counterAxisSpacing?: VariableAlias | undefined
        opacity?: VariableAlias | undefined
        fontFamily?: VariableAlias[] | undefined
        fontSize?: VariableAlias[] | undefined
        fontStyle?: VariableAlias[] | undefined
        fontWeight?: VariableAlias[] | undefined
        letterSpacing?: VariableAlias[] | undefined
        lineHeight?: VariableAlias[] | undefined
        paragraphSpacing?: VariableAlias[] | undefined
        paragraphIndent?: VariableAlias[] | undefined
        fills?: VariableAlias[] | undefined
        strokes?: VariableAlias[] | undefined
        componentProperties?: { [x: string]: VariableAlias } | undefined
        textRangeFills?: VariableAlias[] | undefined
        effects?: VariableAlias[] | undefined
        layoutGrids?: VariableAlias[] | undefined
        rectangleCornerRadii?:
          | {
              RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias | undefined
              RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias | undefined
            }
          | undefined
      }
    | undefined
  explicitVariableModes?: { [x: string]: string } | undefined
}
type DocumentationLink = { uri: string }
type Component = {
  key: string
  name: string
  description: string
  componentSetId?: string | undefined
  documentationLinks: DocumentationLink[]
  remote: boolean
}
type ComponentSet = {
  key: string
  name: string
  description: string
  documentationLinks?: DocumentationLink[] | undefined
  remote?: boolean | undefined
}
type StyleType = 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'
type Style = {
  key: string
  name: string
  description: string
  remote: boolean
  styleType: StyleType
}
type Node =
  | BooleanOperationNode
  | ComponentNode
  | ComponentSetNode
  | ConnectorNode
  | EllipseNode
  | EmbedNode
  | FrameNode
  | GroupNode
  | InstanceNode
  | LineNode
  | LinkUnfurlNode
  | RectangleNode
  | RegularPolygonNode
  | SectionNode
  | ShapeWithTextNode
  | SliceNode
  | StarNode
  | StickyNode
  | TableNode
  | TableCellNode
  | TextNode
  | TextPathNode
  | TransformGroupNode
  | VectorNode
  | WashiTapeNode
  | WidgetNode
  | DocumentNode
  | CanvasNode
type User = { id: string; handle: string; img_url: string }
type LinkAccess = 'view' | 'edit' | 'org_view' | 'org_edit' | 'inherit'
type ErrorResponsePayloadWithErrMessage = { status: number; err: string }
type ErrorResponsePayloadWithErrorBoolean = { error: true; status: number; message: string }
type CreateTeamRequest = {
  name: string
  description?: (string | null) | undefined
  sharing_audience_control:
    | 'org_view'
    | 'org_edit'
    | 'invite_only'
    | 'workspace_view'
    | 'workspace_edit'
  org_discoverability?: 'hidden' | 'discoverable' | null | undefined
  workspace_id?: (string | null) | undefined
}
type Team = {
  id: string
  name: string
  description: string | null
  sharing_audience_control:
    | 'org_view'
    | 'org_edit'
    | 'invite_only'
    | 'workspace_view'
    | 'workspace_edit'
  org_discoverability: 'hidden' | 'discoverable' | null
  workspace_id: string | null
  owner_user_id: string | null
  created_at: string
}
type InviteTeamMembersRequest = { emails: string[]; role: 'viewer' | 'editor' | 'admin' }
type Project = { id: string; name: string }
type CreateFolderRequest = {
  name: string
  sharing_audience_control:
    | 'plan_view'
    | 'plan_edit'
    | 'invite_only'
    | 'workspace_view'
    | 'workspace_edit'
}
type Folder = {
  id: string
  name: string
  parent_folder_id: string | null
  sharing_audience_control?:
    | 'plan_view'
    | 'plan_edit'
    | 'invite_only'
    | 'workspace_view'
    | 'workspace_edit'
    | undefined
  created_at?: string | undefined
}
type Version = {
  id: string
  created_at: string
  label: string | null
  description: string | null
  user: User
  thumbnail_url?: string | undefined
}
type ResponsePagination = { prev_page?: string | undefined; next_page?: string | undefined }
type FrameOffset = { node_id: string; node_offset: Vector }
type Region = {
  x: number
  y: number
  region_height: number
  region_width: number
  comment_pin_corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined
}
type FrameOffsetRegion = {
  node_id: string
  node_offset: Vector
  region_height: number
  region_width: number
  comment_pin_corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined
}
type Emoji = string
type Reaction = { user: User; emoji: Emoji; created_at: string }
type Comment = {
  id: string
  client_meta: Vector | FrameOffset | Region | FrameOffsetRegion
  file_key: string
  parent_id?: string | undefined
  user: User
  created_at: string
  resolved_at?: (string | null) | undefined
  message: string
  order_id: string | null
  reactions: Reaction[]
}
type FrameInfo = {
  nodeId?: string | undefined
  name?: string | undefined
  backgroundColor?: string | undefined
  pageId: string
  pageName: string
  containingStateGroup?:
    | { nodeId?: string | undefined; name?: string | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
  containingComponentSet?:
    | { nodeId?: string | undefined; name?: string | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PublishedComponent = {
  key: string
  file_key: string
  node_id: string
  thumbnail_url?: string | undefined
  name: string
  description: string
  created_at: string
  updated_at: string
  user: User
  containing_frame?: FrameInfo | undefined
}
type ResponseCursor = { before?: number | undefined; after?: number | undefined }
type PublishedComponentSet = {
  key: string
  file_key: string
  node_id: string
  thumbnail_url?: string | undefined
  name: string
  description: string
  created_at: string
  updated_at: string
  user: User
  containing_frame?: FrameInfo | undefined
}
type PublishedStyle = {
  key: string
  file_key: string
  node_id: string
  style_type: StyleType
  thumbnail_url?: string | undefined
  name: string
  description: string
  created_at: string
  updated_at: string
  user: User
  sort_position: string
}
type WebhookV2Event =
  | 'PING'
  | 'FILE_UPDATE'
  | 'FILE_VERSION_UPDATE'
  | 'FILE_DELETE'
  | 'LIBRARY_PUBLISH'
  | 'FILE_COMMENT'
  | 'DEV_MODE_STATUS_UPDATE'
type WebhookV2Status = 'ACTIVE' | 'PAUSED'
type WebhookV2 = {
  id: string
  event_type: WebhookV2Event
  team_id: string
  context: string
  context_id: string
  plan_api_id: string
  status: WebhookV2Status
  client_id: string | null
  passcode: string
  endpoint: string
  description: string | null
}
type WebhookV2RequestInfo = {
  id: string
  endpoint: string
  payload: { [x: string]: unknown }
  sent_at: string
}
type WebhookV2ResponseInfo = { status: string; received_at: string } | null
type WebhookV2Request = {
  webhook_id: string
  request_info: WebhookV2RequestInfo
  response_info: WebhookV2ResponseInfo
  error_msg: string | null
}
type ActivityLogUserEntity = { type: 'user'; id: string; name: string; email: string }
type ActivityLogFileEntity = {
  type: 'file'
  key: string
  name: string
  editor_type: 'figma' | 'figjam'
  link_access: LinkAccess
  proto_link_access: 'view' | 'org_view' | 'inherit'
}
type ActivityLogFileRepoEntity = {
  type: 'file_repo'
  id: string
  name: string
  main_file_key: string
}
type ActivityLogProjectEntity = { type: 'project'; id: string; name: string }
type ActivityLogTeamEntity = { type: 'team'; id: string; name: string }
type ActivityLogWorkspaceEntity = { type: 'workspace'; id: string; name: string }
type ActivityLogOrgEntity = { type: 'org'; id: string; name: string }
type ActivityLogPluginEntity = {
  type: 'plugin'
  id: string
  name: string
  editor_type: 'figma' | 'figjam'
}
type ActivityLogWidgetEntity = {
  type: 'widget'
  id: string
  name: string
  editor_type: 'figma' | 'figjam'
}
type ActivityLog = {
  id: string
  timestamp: number
  actor: {
    type?: 'user' | undefined
    id?: string | undefined
    name: string
    email?: string | undefined
  } | null
  action: { type: string; details: { [x: string]: unknown } | null }
  entity:
    | ActivityLogUserEntity
    | ActivityLogFileEntity
    | ActivityLogFileRepoEntity
    | ActivityLogProjectEntity
    | ActivityLogTeamEntity
    | ActivityLogWorkspaceEntity
    | ActivityLogOrgEntity
    | ActivityLogPluginEntity
    | ActivityLogWidgetEntity
  context: {
    client_name: string | null
    ip_address: string
    is_figma_support_team_action: boolean
    org_id: string
    team_id: string | null
  }
}
type DeveloperLogAction = { event_name: string; event_source: 'rest_api' | 'mcp_server' }
type DeveloperLogActor = {
  user_id?: (string | null) | undefined
  user_name?: (string | null) | undefined
  user_email?: (string | null) | undefined
  token_name: string
  token_type: 'developer_token' | 'plan_access_token' | 'oauth_token'
}
type DeveloperLogResource = {
  id_or_key?: (string | null) | undefined
  name?: (string | null) | undefined
  type?: 'file' | 'team' | 'project' | null | undefined
  org_id: string
}
type DeveloperLogContext = {
  ip_address: string
  city?: (string | null) | undefined
  country_region?: (string | null) | undefined
  country?: (string | null) | undefined
}
type DeveloperLog = {
  uuid: string
  timestamp: string
  action: DeveloperLogAction
  actor: DeveloperLogActor
  resource: DeveloperLogResource
  context: DeveloperLogContext
}
type AiUsageDailyRow = {
  plan_id: string
  user_id: string
  user_email?: (string | null) | undefined
  day: string
  editor_type: 'design' | 'figjam' | 'slides' | 'sites' | 'buzz' | 'make' | 'not_applicable'
  seat_credits_sum: number
  plan_credits_sum: number
  workspace_id?: (string | null) | undefined
  workspace_name?: (string | null) | undefined
  team_id?: (string | null) | undefined
  team_name?: (string | null) | undefined
  license_group_id?: (string | null) | undefined
  license_group_name?: (string | null) | undefined
  metering_period_start: string
  metering_period_end: string
}
type PaymentStatus = { type?: 'UNPAID' | 'PAID' | 'TRIAL' | undefined }
type PaymentInformation = {
  user_id: string
  resource_id: string
  resource_type: 'PLUGIN' | 'WIDGET' | 'COMMUNITY_FILE'
  payment_status: PaymentStatus
  date_of_purchase?: string | undefined
}
type VariableComposedColor =
  | { color: RGB | RGBA; opacity: VariableAlias }
  | { color: VariableAlias; opacity: number | VariableAlias }
type VariableScope =
  | 'ALL_SCOPES'
  | 'TEXT_CONTENT'
  | 'CORNER_RADIUS'
  | 'WIDTH_HEIGHT'
  | 'GAP'
  | 'ALL_FILLS'
  | 'FRAME_FILL'
  | 'SHAPE_FILL'
  | 'TEXT_FILL'
  | 'STROKE_COLOR'
  | 'STROKE_FLOAT'
  | 'EFFECT_FLOAT'
  | 'EFFECT_COLOR'
  | 'OPACITY'
  | 'COLOR_OPACITY'
  | 'FONT_FAMILY'
  | 'FONT_STYLE'
  | 'FONT_WEIGHT'
  | 'FONT_SIZE'
  | 'LINE_HEIGHT'
  | 'LETTER_SPACING'
  | 'PARAGRAPH_SPACING'
  | 'PARAGRAPH_INDENT'
  | 'FONT_VARIATIONS'
type VariableCodeSyntax = {
  WEB?: string | undefined
  ANDROID?: string | undefined
  iOS?: string | undefined
}
type LocalVariable = {
  id: string
  name: string
  key: string
  variableCollectionId: string
  resolvedType: VariableResolvedDataType
  valuesByMode: {
    [x: string]: boolean | number | string | RGBA | VariableAlias | VariableComposedColor
  }
  remote: boolean
  description: string
  hiddenFromPublishing: boolean
  scopes: VariableScope[]
  codeSyntax: VariableCodeSyntax
  deletedButReferenced?: boolean | undefined
}
type VariableValue =
  | boolean
  | number
  | string
  | RGB
  | RGBA
  | VariableAlias
  | VariableComposedColor
  | ({ [x: string]: unknown } | null)
type LocalVariableCollection = {
  id: string
  name: string
  key: string
  modes: { modeId: string; parentModeId?: string | undefined; name: string }[]
  defaultModeId: string
  remote: boolean
  isExtension?: boolean | undefined
  parentVariableCollectionId?: string | undefined
  rootVariableCollectionId?: string | undefined
  variableOverrides?: { [x: string]: { [x: string]: VariableValue } } | undefined
  hiddenFromPublishing: boolean
  variableIds: string[]
}
type PublishedVariable = {
  id: string
  subscribed_id: string
  name: string
  key: string
  variableCollectionId: string
  resolvedDataType: VariableResolvedDataType
  updatedAt: string
}
type PublishedVariableCollection = {
  id: string
  subscribed_id: string
  name: string
  key: string
  updatedAt: string
}
type VariableCollectionCreate = {
  action: 'CREATE'
  id?: string | undefined
  name: string
  initialModeId?: string | undefined
  hiddenFromPublishing?: boolean | undefined
  parentVariableCollectionId?: string | undefined
  initialModeIdToParentModeIdMapping?: { [x: string]: string } | undefined
}
type VariableCollectionUpdate = {
  action: 'UPDATE'
  id: string
  name?: string | undefined
  hiddenFromPublishing?: boolean | undefined
}
type VariableCollectionDelete = { action: 'DELETE'; id: string }
type VariableCollectionChange =
  | VariableCollectionCreate
  | VariableCollectionUpdate
  | VariableCollectionDelete
type VariableModeCreate = {
  action: 'CREATE'
  id?: string | undefined
  name: string
  variableCollectionId: string
}
type VariableModeUpdate = {
  action: 'UPDATE'
  id: string
  name?: string | undefined
  variableCollectionId: string
}
type VariableModeDelete = { action: 'DELETE'; id: string }
type VariableModeChange = VariableModeCreate | VariableModeUpdate | VariableModeDelete
type VariableCreate = {
  action: 'CREATE'
  id?: string | undefined
  name: string
  variableCollectionId: string
  resolvedType: VariableResolvedDataType
  description?: string | undefined
  hiddenFromPublishing?: boolean | undefined
  scopes?: VariableScope[] | undefined
  codeSyntax?: VariableCodeSyntax | undefined
}
type VariableUpdate = {
  action: 'UPDATE'
  id: string
  name?: string | undefined
  description?: string | undefined
  hiddenFromPublishing?: boolean | undefined
  scopes?: VariableScope[] | undefined
  codeSyntax?: VariableCodeSyntax | undefined
}
type VariableDelete = { action: 'DELETE'; id: string }
type VariableChange = VariableCreate | VariableUpdate | VariableDelete
type VariableModeValue = { variableId: string; modeId: string; value: VariableValue }
type DevResource = { id: string; name: string; url: string; file_key: string; node_id: string }
type LibraryAnalyticsComponentActionsByAsset = {
  week: string
  component_key: string
  component_name: string
  component_set_key?: string | undefined
  component_set_name?: string | undefined
  detachments: number
  insertions: number
}
type LibraryAnalyticsComponentActionsByTeam = {
  week: string
  team_name: string
  workspace_name?: string | undefined
  detachments: number
  insertions: number
}
type LibraryAnalyticsComponentUsagesByAsset = {
  component_key: string
  component_name: string
  component_set_key?: string | undefined
  component_set_name?: string | undefined
  usages: number
  teams_using: number
  files_using: number
}
type LibraryAnalyticsComponentUsagesByFile = {
  file_name: string
  team_name: string
  workspace_name?: string | undefined
  usages: number
}
type LibraryAnalyticsStyleActionsByAsset = {
  week: string
  style_key: string
  style_name: string
  style_type: string
  detachments: number
  insertions: number
}
type LibraryAnalyticsStyleActionsByTeam = {
  week: string
  team_name: string
  workspace_name?: string | undefined
  detachments: number
  insertions: number
}
type LibraryAnalyticsStyleUsagesByAsset = {
  style_key: string
  style_name: string
  style_type: string
  usages: number
  teams_using: number
  files_using: number
}
type LibraryAnalyticsStyleUsagesByFile = {
  file_name: string
  team_name: string
  workspace_name?: string | undefined
  usages: number
}
type LibraryAnalyticsVariableActionsByAsset = {
  week: string
  variable_key: string
  variable_name: string
  variable_type: string
  collection_key: string
  collection_name: string
  detachments: number
  insertions: number
}
type LibraryAnalyticsVariableActionsByTeam = {
  week: string
  team_name: string
  workspace_name?: string | undefined
  detachments: number
  insertions: number
}
type LibraryAnalyticsVariableUsagesByAsset = {
  variable_key: string
  variable_name: string
  variable_type: string
  collection_key: string
  collection_name: string
  usages: number
  teams_using: number
  files_using: number
}
type LibraryAnalyticsVariableUsagesByFile = {
  file_name: string
  team_name: string
  workspace_name?: string | undefined
  usages: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/files/:file_key': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: {
              name: string
              role: Role
              lastModified: string
              editorType: 'figma' | 'figjam'
              thumbnailUrl?: string | undefined
              version: string
              document: DocumentNode
              components: { [x: string]: Component }
              componentSets: { [x: string]: ComponentSet }
              schemaVersion: number
              styles: { [x: string]: Style }
              linkAccess?: string | undefined
              mainFileKey?: string | undefined
              branches?:
                | { key: string; name: string; thumbnail_url: string; last_modified: string }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                version?: string | undefined
                ids?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
                branch_data?: boolean | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/nodes': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: {
              name: string
              role: Role
              lastModified: string
              editorType: 'figma' | 'figjam'
              thumbnailUrl: string
              version: string
              nodes: {
                [x: string]: {
                  document: Node
                  components: { [x: string]: Component }
                  componentSets: { [x: string]: ComponentSet }
                  schemaVersion: number
                  styles: { [x: string]: Style }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                depth?: number | undefined
                geometry?: string | undefined
                plugin_data?: string | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/images/:file_key': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { err: { [x: string]: unknown } | null; images: { [x: string]: string | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                ids: string
                version?: string | undefined
                scale?: number | undefined
                format?: 'jpg' | 'png' | 'svg' | 'pdf' | undefined
                svg_outline_text?: boolean | undefined
                svg_include_id?: boolean | undefined
                svg_include_node_id?: boolean | undefined
                svg_simplify_stroke?: boolean | undefined
                contents_only?: boolean | undefined
                use_absolute_bounds?: boolean | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/images': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: { error: false; status: 200; meta: { images: { [x: string]: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/meta': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: {
              file: {
                name: string
                folder_name?: string | undefined
                last_touched_at: string
                creator: User
                last_touched_by?: User | undefined
                thumbnail_url?: string | undefined
                editorType: 'figma' | 'figjam' | 'slides' | 'buzz' | 'sites' | 'make'
                role?: Role | undefined
                link_access?: LinkAccess | undefined
                url?: string | undefined
                version?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/duplicate': {
      $post:
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: {
              file_key: string
              name: string
              folder_id: string
              editor_type: 'figma' | 'figjam' | 'slides' | 'buzz' | 'make'
              created_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & { json: { folder_id: string } }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams': {
      $post:
        | { input: { json: CreateTeamRequest }; output: Team; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CreateTeamRequest }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateTeamRequest }
            output: { status: 401; err: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateTeamRequest }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateTeamRequest }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateTeamRequest }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id': {
      $get:
        | { input: { param: { team_id: string } }; output: Team; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { team_id: string } }
            output: { status: 401; err: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id/invites': {
      $post:
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: {
              invites: { email: string; role: 'viewer' | 'editor' | 'admin' }[]
              errors: { email: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: string
            outputFormat: 'text'
            status: 413
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } } & { json: InviteTeamMembersRequest }
            output: ErrorResponsePayloadWithErrMessage | ErrorResponsePayloadWithErrorBoolean
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id/projects': {
      $get:
        | {
            input: { param: { team_id: string } }
            output: { name: string; projects: Project[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/projects/:project_id/meta': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: {
              id: string
              name: string
              thumbnail_url: string | null
              file_count: number
              updated_at: string
              created_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/projects/:project_id/files': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: {
              name: string
              files: {
                key: string
                name: string
                thumbnail_url?: string | undefined
                last_modified: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id/folders': {
      $post:
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: {
              id: string
              name: string
              parent_folder_id: string | null
              sharing_audience_control:
                | 'plan_view'
                | 'plan_edit'
                | 'invite_only'
                | 'workspace_view'
                | 'workspace_edit'
              created_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 401; err: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } } & { json: CreateFolderRequest }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/teams/:team_id/folders': {
      $get:
        | {
            input: { param: { team_id: string } }
            output: { name: string; folders: Folder[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/folders/:folder_id/folders': {
      $get:
        | {
            input: { param: { folder_id: string } }
            output: { name: string; folders: Folder[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/folders/:folder_id/files': {
      $get:
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: {
              name: string
              files: {
                key: string
                name: string
                thumbnail_url?: string | undefined
                last_modified: string
                branches?:
                  | {
                      key: string
                      name: string
                      thumbnail_url?: string | undefined
                      last_modified: string
                    }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { branch_data?: boolean | undefined }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/folders/:folder_id/meta': {
      $get:
        | {
            input: { param: { folder_id: string } }
            output: {
              id: string
              name: string
              thumbnail_url: string | null
              file_count: number
              updated_at: string
              created_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { folder_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/versions': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                page_size?: number | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: { versions: Version[]; pagination: ResponsePagination }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                page_size?: number | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                page_size?: number | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                page_size?: number | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                page_size?: number | undefined
                before?: number | undefined
                after?: number | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/comments': {
      $get:
        | {
            input: { param: { file_key: string } } & { query: { as_md?: boolean | undefined } }
            output: { comments: Comment[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & { query: { as_md?: boolean | undefined } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & { query: { as_md?: boolean | undefined } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & { query: { as_md?: boolean | undefined } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & { query: { as_md?: boolean | undefined } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                message: string
                comment_id?: string | undefined
                client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/comments/:comment_id': {
      $delete:
        | {
            input: { param: { file_key: string; comment_id: string } }
            output: { status: 200; error: false }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string; comment_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string; comment_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string; comment_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string; comment_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/comments/:comment_id/reactions': {
      $get:
        | {
            input: { param: { file_key: string; comment_id: string } } & {
              query: { cursor?: string | undefined }
            }
            output: { reactions: Reaction[]; pagination: ResponsePagination }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & {
              query: { cursor?: string | undefined }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & {
              query: { cursor?: string | undefined }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & {
              query: { cursor?: string | undefined }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & {
              query: { cursor?: string | undefined }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { status: 200; error: false }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { json: { emoji: Emoji } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { file_key: string; comment_id: string } } & { query: { emoji: Emoji } }
            output: { status: 200; error: false }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { query: { emoji: Emoji } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { query: { emoji: Emoji } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { query: { emoji: Emoji } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string; comment_id: string } } & { query: { emoji: Emoji } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/me': {
      $get:
        | {
            input: {}
            output: { id: string; handle: string; img_url: string; email: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { status: 403; err: string }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { status: 429; err: string }; outputFormat: 'json'; status: 429 }
        | { input: {}; output: { status: 500; err: string }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/teams/:team_id/components': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: {
              status: 200
              error: false
              meta: { components: PublishedComponent[]; cursor?: ResponseCursor | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/components': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: { status: 200; error: false; meta: { components: PublishedComponent[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/components/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { status: 200; error: false; meta: PublishedComponent }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id/component_sets': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: {
              status: 200
              error: false
              meta: { component_sets: PublishedComponentSet[]; cursor?: ResponseCursor | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/component_sets': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: { status: 200; error: false; meta: { component_sets: PublishedComponentSet[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/component_sets/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { status: 200; error: false; meta: PublishedComponentSet }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/teams/:team_id/styles': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: {
              status: 200
              error: false
              meta: { styles: PublishedStyle[]; cursor?: ResponseCursor | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } } & {
              query: {
                page_size?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/styles': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: { status: 200; error: false; meta: { styles: PublishedStyle[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/styles/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { status: 200; error: false; meta: PublishedStyle }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { status: 400; err: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { key: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/webhooks': {
      $get:
        | {
            input: {
              query: {
                context?: string | undefined
                context_id?: string | undefined
                plan_api_id?: string | undefined
                cursor?: string | undefined
              }
            }
            output: { webhooks: WebhookV2[]; pagination?: ResponsePagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                context?: string | undefined
                context_id?: string | undefined
                plan_api_id?: string | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                context?: string | undefined
                context_id?: string | undefined
                plan_api_id?: string | undefined
                cursor?: string | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              json: {
                event_type: WebhookV2Event
                team_id?: string | undefined
                context: string
                context_id: string
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                event_type: WebhookV2Event
                team_id?: string | undefined
                context: string
                context_id: string
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                event_type: WebhookV2Event
                team_id?: string | undefined
                context: string
                context_id: string
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                event_type: WebhookV2Event
                team_id?: string | undefined
                context: string
                context_id: string
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                event_type: WebhookV2Event
                team_id?: string | undefined
                context: string
                context_id: string
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                event_type: WebhookV2Event
                endpoint: string
                passcode: string
                status?: WebhookV2Status | undefined
                description?: string | undefined
              }
            }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { webhook_id: string } }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/teams/:team_id/webhooks': {
      $get:
        | {
            input: { param: { team_id: string } }
            output: { webhooks: WebhookV2[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { team_id: string } }
            output: { status: 500; err: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/webhooks/:webhook_id/requests': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: { requests: WebhookV2Request[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 403; err: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: string } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/activity_logs': {
      $get:
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              status?: 200 | undefined
              error?: false | undefined
              meta?:
                | {
                    activity_logs?: ActivityLog[] | undefined
                    cursor?: string | undefined
                    next_page?: boolean | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                events?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/developer_logs': {
      $post:
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              status: 200
              error: false
              meta: {
                items: DeveloperLog[]
                cursor?: (string | null) | undefined
                has_more: boolean
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                token_type?: 'plan_access_token' | 'developer_token' | 'oauth_token' | undefined
                token?: string | undefined
                token_name?: string | undefined
                user_email?: string | undefined
                ip_address?: string | undefined
                event_source?: 'rest_api' | 'mcp_server' | undefined
                date_range?: 'last_24h' | 'last_7d' | 'last_30d' | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/ai_usage/daily': {
      $get:
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { rows: AiUsageDailyRow[]; next_cursor: string; has_next_page: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                user_email?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/payments': {
      $get:
        | {
            input: {
              query: {
                plugin_payment_token?: string | undefined
                user_id?: string | undefined
                community_file_id?: string | undefined
                plugin_id?: string | undefined
                widget_id?: string | undefined
              }
            }
            output: { status: 200; error: false; meta: PaymentInformation }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                plugin_payment_token?: string | undefined
                user_id?: string | undefined
                community_file_id?: string | undefined
                plugin_id?: string | undefined
                widget_id?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                plugin_payment_token?: string | undefined
                user_id?: string | undefined
                community_file_id?: string | undefined
                plugin_id?: string | undefined
                widget_id?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                plugin_payment_token?: string | undefined
                user_id?: string | undefined
                community_file_id?: string | undefined
                plugin_id?: string | undefined
                widget_id?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/variables/local': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: {
              status: 200
              error: false
              meta: {
                variables: { [x: string]: LocalVariable }
                variableCollections: { [x: string]: LocalVariableCollection }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/variables/published': {
      $get:
        | {
            input: { param: { file_key: string } }
            output: {
              status: 200
              error: false
              meta: {
                variables: { [x: string]: PublishedVariable }
                variableCollections: { [x: string]: PublishedVariableCollection }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/variables': {
      $post:
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { status: 200; error: false; meta: { tempIdToRealId: { [x: string]: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              json: {
                variableCollections?: VariableCollectionChange[] | undefined
                variableModes?: VariableModeChange[] | undefined
                variables?: VariableChange[] | undefined
                variableModeValues?: VariableModeValue[] | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/dev_resources': {
      $get:
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { dev_resources: DevResource[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & { query: { node_ids?: string | undefined } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/dev_resources': {
      $post:
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: {
              links_created: DevResource[]
              errors?:
                | {
                    file_key?: (string | null) | undefined
                    node_id?: (string | null) | undefined
                    error: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                dev_resources: { name: string; url: string; file_key: string; node_id: string }[]
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: {
              links_updated?: DevResource[] | undefined
              errors?: { id?: string | undefined; error: string }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                dev_resources: { id: string; name?: string | undefined; url?: string | undefined }[]
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/files/:file_key/dev_resources/:dev_resource_id': {
      $delete:
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: { error: true; status: 404; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string; dev_resource_id: string } }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/component/actions': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {
              rows:
                | LibraryAnalyticsComponentActionsByAsset[]
                | LibraryAnalyticsComponentActionsByTeam[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'component' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/component/usages': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: {
              rows:
                | LibraryAnalyticsComponentUsagesByAsset[]
                | LibraryAnalyticsComponentUsagesByFile[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'component' | 'file' }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/style/actions': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {
              rows: LibraryAnalyticsStyleActionsByAsset[] | LibraryAnalyticsStyleActionsByTeam[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'style' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/style/usages': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: {
              rows: LibraryAnalyticsStyleUsagesByAsset[] | LibraryAnalyticsStyleUsagesByFile[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'style' | 'file' }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/variable/actions': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {
              rows:
                | LibraryAnalyticsVariableActionsByAsset[]
                | LibraryAnalyticsVariableActionsByTeam[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: {
                cursor?: string | undefined
                group_by: 'variable' | 'team'
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/analytics/libraries/:file_key/variable/usages': {
      $get:
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: {
              rows: LibraryAnalyticsVariableUsagesByAsset[] | LibraryAnalyticsVariableUsagesByFile[]
              next_page: boolean
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: { error: true; status: 401; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: { error: true; status: 403; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: { error: true; status: 429; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_key: string } } & {
              query: { cursor?: string | undefined; group_by: 'variable' | 'file' }
            }
            output: { error: true; status: 500; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/oembed': {
      $get:
        | {
            input: {
              query: { url: string; maxwidth?: number | undefined; maxheight?: number | undefined }
            }
            output: {
              version: string
              type: string
              title: string
              key?: string | undefined
              url: string
              provider_name: string
              provider_url: string
              cache_age: number
              width: number
              height: number
              html: string
              is_published_site?: boolean | undefined
              folder_name?: string | undefined
              thumbnail_url?: string | undefined
              thumbnail_width?: number | undefined
              thumbnail_height?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { url: string; maxwidth?: number | undefined; maxheight?: number | undefined }
            }
            output: { error: true; status: 400; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { url: string; maxwidth?: number | undefined; maxheight?: number | undefined }
            }
            output: { status: 404; err: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { url: string; maxwidth?: number | undefined; maxheight?: number | undefined }
            }
            output: { status: 429; err: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { url: string; maxwidth?: number | undefined; maxheight?: number | undefined }
            }
            output: { status: 501; err: string }
            outputFormat: 'json'
            status: 501
          }
    }
  },
  '/'
>
export default routes
