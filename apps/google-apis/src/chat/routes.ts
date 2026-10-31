import { createRoute, z } from '@hono/zod-openapi'

const ActionParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter for the action script.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the parameter.' }),
  })
  .openapi({
    description:
      'List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.',
    required: [],
  })
  .openapi('ActionParameter')

const FormActionSchema = z
  .object({
    actionMethodName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.',
      }),
    parameters: z
      .array(ActionParameterSchema)
      .exactOptional()
      .openapi({ description: 'List of action parameters.' }),
  })
  .openapi({
    description:
      'A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.',
    required: [],
  })
  .openapi('FormAction')

const OpenLinkSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The URL to open.' }) })
  .openapi({ description: 'A link that opens a new window.', required: [] })
  .openapi('OpenLink')

const OnClickSchema = z
  .object({
    action: FormActionSchema.exactOptional().openapi({
      description: 'A form action is triggered by this `onclick` action if specified.',
    }),
    openLink: OpenLinkSchema.exactOptional().openapi({
      description: 'This `onclick` action triggers an open link action if specified.',
    }),
  })
  .openapi({ description: 'An `onclick` action (for example, open a link).', required: [] })
  .openapi('OnClick')

const ImageButtonSchema = z
  .object({
    icon: z
      .enum([
        'ICON_UNSPECIFIED',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The icon specified by an `enum` that indices to an icon provided by Chat API.',
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon specified by a URL.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified.",
      }),
    onClick: OnClickSchema.exactOptional().openapi({ description: 'The `onclick` action.' }),
  })
  .openapi({ description: 'An image button with an `onclick` action.', required: [] })
  .openapi('ImageButton')

const TextButtonSchema = z
  .object({
    onClick: OnClickSchema.exactOptional().openapi({
      description: 'The `onclick` action of the button.',
    }),
    text: z.string().exactOptional().openapi({ description: 'The text of the button.' }),
  })
  .openapi({ description: 'A button with text and `onclick` action.', required: [] })
  .openapi('TextButton')

type ButtonType = {
  imageButton?: z.infer<typeof ImageButtonSchema>
  textButton?: z.infer<typeof TextButtonSchema>
}

type ColorType = { alpha?: number; blue?: number; green?: number; red?: number }

const CustomEmojiSchema = z
  .object({
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique key for the custom emoji resource.' }),
  })
  .openapi({ description: 'Represents a custom emoji.', required: [] })
  .openapi('CustomEmoji')

type EmojiType = { customEmoji?: z.infer<typeof CustomEmojiSchema>; unicode?: string }

const GoogleAppsCardV1ActionParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter for the action script.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the parameter.' }),
  })
  .openapi({
    description:
      'List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1ActionParameter')

type GoogleAppsCardV1ActionType = {
  function?: string
  interaction?: 'INTERACTION_UNSPECIFIED' | 'OPEN_DIALOG'
  loadIndicator?: 'SPINNER' | 'NONE'
  parameters?: z.infer<typeof GoogleAppsCardV1ActionParameterSchema>[]
  persistValues?: boolean
}

const ColorSchema: z.ZodType<ColorType> = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).',
      }),
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
  })
  .openapi({
    description:
      "Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...",
    required: [],
  })
  .openapi('Color')

type GoogleAppsCardV1BorderStyleType = {
  cornerRadius?: number
  strokeColor?: z.infer<typeof ColorSchema>
  type?: 'BORDER_TYPE_UNSPECIFIED' | 'NO_BORDER' | 'STROKE'
}

type GoogleAppsCardV1IconType = {
  altText?: string
  iconUrl?: string
  imageType?: 'SQUARE' | 'CIRCLE'
  knownIcon?: string
}

const GoogleAppsCardV1IconSchema: z.ZodType<GoogleAppsCardV1IconType> = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored.",
      }),
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`.',
      }),
    imageType: z
      .enum(['SQUARE', 'CIRCLE'])
      .exactOptional()
      .openapi({
        description:
          'The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon.',
      }),
    knownIcon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/format-messages#builtinicons).',
      }),
  })
  .openapi({
    description:
      'An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1Icon')

const GoogleAppsCardV1OnClickSchema: z.ZodType<GoogleAppsCardV1OnClickType> = z
  .lazy(() =>
    z
      .object({
        action: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
          description: 'If specified, an action is triggered by this `onClick`.',
        }),
        card: GoogleAppsCardV1CardSchema.exactOptional().openapi({
          description:
            'A new card is pushed to the card stack after clicking if specified. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
        }),
        openDynamicLinkAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
          description:
            'An add-on triggers this action when the action needs to open a link. This differs from the `open_link` above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
        }),
        openLink: GoogleAppsCardV1OpenLinkSchema.exactOptional().openapi({
          description: 'If specified, this `onClick` triggers an open link action.',
        }),
      })
      .openapi({
        description:
          'Represents how to respond when users click an interactive element on a card, such as a button. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1OnClick')

type GoogleAppsCardV1ButtonType = {
  altText?: string
  color?: z.infer<typeof ColorSchema>
  disabled?: boolean
  icon?: z.infer<typeof GoogleAppsCardV1IconSchema>
  onClick?: z.infer<typeof GoogleAppsCardV1OnClickSchema>
  text?: string
}

const GoogleAppsCardV1ButtonSchema: z.ZodType<GoogleAppsCardV1ButtonType> = z
  .lazy(() =>
    z
      .object({
        altText: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The alternative text that\'s used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat".',
          }),
        color: ColorSchema.exactOptional().openapi({
          description:
            'If set, the button is filled with a solid background color and the font color changes to maintain contrast with the background color. For example, setting a blue background likely results in white text. If unset, the image background is white and the font color is blue. For red, green, and blue, the value of each field is a `float` number that you can express in either of two ways: as a number between 0 and 255 divided by 255 (153/255), or as a value between 0 and 1 (0.6). 0 represents the absence of a color and 1 or 255/255 represent the full presence of that color on the RGB scale. Optionally set `alpha`, which sets a level of transparency using this equation: ``` pixel color = alpha * (this color) + (1.0 - alpha) * (background color) ``` For `alpha`, a value of `1` corresponds with a solid color, and a value of `0` corresponds with a completely transparent color. For example, the following color represents a half transparent red: ``` "color": { "red": 1, "green": 0, "blue": 0, "alpha": 0.5 } ```',
        }),
        disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "If `true`, the button is displayed in an inactive state and doesn't respond to user actions.",
          }),
        icon: GoogleAppsCardV1IconSchema.exactOptional().openapi({
          description:
            'The icon image. If both `icon` and `text` are set, then the icon appears before the text.',
        }),
        onClick: GoogleAppsCardV1OnClickSchema.exactOptional().openapi({
          description:
            'Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.',
        }),
        text: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text displayed inside the button.' }),
      })
      .openapi({
        description:
          'A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Button')

type GoogleAppsCardV1ButtonListType = { buttons?: z.infer<typeof GoogleAppsCardV1ButtonSchema>[] }

const GoogleAppsCardV1CardActionSchema: z.ZodType<GoogleAppsCardV1CardActionType> = z
  .lazy(() =>
    z
      .object({
        actionLabel: z
          .string()
          .exactOptional()
          .openapi({ description: 'The label that displays as the action menu item.' }),
        onClick: GoogleAppsCardV1OnClickSchema.exactOptional().openapi({
          description: 'The `onClick` action for this action item.',
        }),
      })
      .openapi({
        description:
          'A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1CardAction')

const GoogleAppsCardV1CardFixedFooterSchema: z.ZodType<GoogleAppsCardV1CardFixedFooterType> = z
  .lazy(() =>
    z
      .object({
        primaryButton: GoogleAppsCardV1ButtonSchema.exactOptional().openapi({
          description:
            'The primary button of the fixed footer. The button must be a text button with text and color set.',
        }),
        secondaryButton: GoogleAppsCardV1ButtonSchema.exactOptional().openapi({
          description:
            'The secondary button of the fixed footer. The button must be a text button with text and color set. If `secondaryButton` is set, you must also set `primaryButton`.',
        }),
      })
      .openapi({
        description:
          'A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1CardFixedFooter')

type GoogleAppsCardV1CardHeaderType = {
  imageAltText?: string
  imageType?: 'SQUARE' | 'CIRCLE'
  imageUrl?: string
  subtitle?: string
  title?: string
}

const GoogleAppsCardV1CardHeaderSchema: z.ZodType<GoogleAppsCardV1CardHeaderType> = z
  .object({
    imageAltText: z
      .string()
      .exactOptional()
      .openapi({
        description: "The alternative text of this image that's used for accessibility.",
      }),
    imageType: z
      .enum(['SQUARE', 'CIRCLE'])
      .exactOptional()
      .openapi({
        description:
          'The shape used to crop the image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTPS URL of the image in the card header.' }),
    subtitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The subtitle of the card header. If specified, appears on its own line below the `title`.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.',
      }),
  })
  .openapi({
    description:
      'Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1CardHeader')

const GoogleAppsCardV1SectionSchema: z.ZodType<GoogleAppsCardV1SectionType> = z
  .lazy(() =>
    z
      .object({
        collapsible: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.',
          }),
        header: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
          }),
        uncollapsibleWidgetsCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.',
          }),
        widgets: z
          .array(GoogleAppsCardV1WidgetSchema)
          .exactOptional()
          .openapi({
            description: 'All the widgets in the section. Must contain at least one widget.',
          }),
      })
      .openapi({
        description:
          "A section contains a collection of widgets that are rendered vertically in the order that they're specified. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):",
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Section')

type GoogleAppsCardV1CardType = {
  cardActions?: z.infer<typeof GoogleAppsCardV1CardActionSchema>[]
  displayStyle?: 'DISPLAY_STYLE_UNSPECIFIED' | 'PEEK' | 'REPLACE'
  fixedFooter?: z.infer<typeof GoogleAppsCardV1CardFixedFooterSchema>
  header?: z.infer<typeof GoogleAppsCardV1CardHeaderSchema>
  name?: string
  peekCardHeader?: z.infer<typeof GoogleAppsCardV1CardHeaderSchema>
  sectionDividerStyle?: 'DIVIDER_STYLE_UNSPECIFIED' | 'SOLID_DIVIDER' | 'NO_DIVIDER'
  sections?: z.infer<typeof GoogleAppsCardV1SectionSchema>[]
}

type GoogleAppsCardV1CardActionType = {
  actionLabel?: string
  onClick?: z.infer<typeof GoogleAppsCardV1OnClickSchema>
}

type GoogleAppsCardV1CardFixedFooterType = {
  primaryButton?: z.infer<typeof GoogleAppsCardV1ButtonSchema>
  secondaryButton?: z.infer<typeof GoogleAppsCardV1ButtonSchema>
}

const GoogleAppsCardV1WidgetsSchema: z.ZodType<GoogleAppsCardV1WidgetsType> = z
  .lazy(() =>
    z
      .object({
        buttonList: GoogleAppsCardV1ButtonListSchema.exactOptional().openapi({
          description: 'ButtonList widget.',
        }),
        dateTimePicker: GoogleAppsCardV1DateTimePickerSchema.exactOptional().openapi({
          description: 'DateTimePicker widget.',
        }),
        decoratedText: GoogleAppsCardV1DecoratedTextSchema.exactOptional().openapi({
          description: 'DecoratedText widget.',
        }),
        image: GoogleAppsCardV1ImageSchema.exactOptional().openapi({
          description: 'Image widget.',
        }),
        selectionInput: GoogleAppsCardV1SelectionInputSchema.exactOptional().openapi({
          description: 'SelectionInput widget.',
        }),
        textInput: GoogleAppsCardV1TextInputSchema.exactOptional().openapi({
          description: 'TextInput widget.',
        }),
        textParagraph: GoogleAppsCardV1TextParagraphSchema.exactOptional().openapi({
          description: 'TextParagraph widget.',
        }),
      })
      .openapi({
        description:
          'The supported widgets that you can include in a column. [Google Chat apps](https://developers.google.com/chat):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Widgets')

type GoogleAppsCardV1ColumnType = {
  horizontalAlignment?: 'HORIZONTAL_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END'
  horizontalSizeStyle?:
    | 'HORIZONTAL_SIZE_STYLE_UNSPECIFIED'
    | 'FILL_AVAILABLE_SPACE'
    | 'FILL_MINIMUM_SPACE'
  verticalAlignment?: 'VERTICAL_ALIGNMENT_UNSPECIFIED' | 'CENTER' | 'TOP' | 'BOTTOM'
  widgets?: z.infer<typeof GoogleAppsCardV1WidgetsSchema>[]
}

const GoogleAppsCardV1ColumnSchema: z.ZodType<GoogleAppsCardV1ColumnType> = z
  .lazy(() =>
    z
      .object({
        horizontalAlignment: z
          .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
          .exactOptional()
          .openapi({
            description:
              'Specifies whether widgets align to the left, right, or center of a column.',
          }),
        horizontalSizeStyle: z
          .enum(['HORIZONTAL_SIZE_STYLE_UNSPECIFIED', 'FILL_AVAILABLE_SPACE', 'FILL_MINIMUM_SPACE'])
          .exactOptional()
          .openapi({
            description:
              'Specifies how a column fills the width of the card. [Google Chat apps](https://developers.google.com/chat):',
          }),
        verticalAlignment: z
          .enum(['VERTICAL_ALIGNMENT_UNSPECIFIED', 'CENTER', 'TOP', 'BOTTOM'])
          .exactOptional()
          .openapi({
            description:
              'Specifies whether widgets align to the top, bottom, or center of a column. [Google Chat apps](https://developers.google.com/chat):',
          }),
        widgets: z
          .array(GoogleAppsCardV1WidgetsSchema)
          .exactOptional()
          .openapi({
            description:
              'An array of widgets included in a column. Widgets appear in the order that they are specified.',
          }),
      })
      .openapi({
        description: 'A column. [Google Chat apps](https://developers.google.com/chat):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Column')

type GoogleAppsCardV1ColumnsType = { columnItems?: z.infer<typeof GoogleAppsCardV1ColumnSchema>[] }

const GoogleAppsCardV1ActionSchema: z.ZodType<GoogleAppsCardV1ActionType> = z
  .object({
    function: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick).',
      }),
    interaction: z
      .enum(['INTERACTION_UNSPECIFIED', 'OPEN_DIALOG'])
      .exactOptional()
      .openapi({
        description:
          "Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client. [Google Chat apps](https://developers.google.com/chat):",
      }),
    loadIndicator: z
      .enum(['SPINNER', 'NONE'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the loading indicator that the action displays while making the call to the action.',
      }),
    parameters: z
      .array(GoogleAppsCardV1ActionParameterSchema)
      .exactOptional()
      .openapi({ description: 'List of action parameters.' }),
    persistValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`.",
      }),
  })
  .openapi({
    description:
      'An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1Action')

type GoogleAppsCardV1DateTimePickerType = {
  label?: string
  name?: string
  onChangeAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  timezoneOffsetDate?: number
  type?: 'DATE_AND_TIME' | 'DATE_ONLY' | 'TIME_ONLY'
  valueMsEpoch?: string
}

type GoogleAppsCardV1SwitchControlType = {
  controlType?: 'SWITCH' | 'CHECKBOX' | 'CHECK_BOX'
  name?: string
  onChangeAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  selected?: boolean
  value?: string
}

const GoogleAppsCardV1SwitchControlSchema: z.ZodType<GoogleAppsCardV1SwitchControlType> = z
  .object({
    controlType: z
      .enum(['SWITCH', 'CHECKBOX', 'CHECK_BOX'])
      .exactOptional()
      .openapi({
        description:
          'How the switch appears in the user interface. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
    onChangeAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description:
        'The action to perform when the switch state is changed, such as what function to run.',
    }),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'When `true`, the switch is selected.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
  })
  .openapi({
    description:
      'Either a toggle-style switch or a checkbox inside a `decoratedText` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Only supported in the `decoratedText` widget.',
    required: [],
  })
  .openapi('GoogleAppsCardV1SwitchControl')

type GoogleAppsCardV1DecoratedTextType = {
  bottomLabel?: string
  button?: z.infer<typeof GoogleAppsCardV1ButtonSchema>
  endIcon?: z.infer<typeof GoogleAppsCardV1IconSchema>
  icon?: z.infer<typeof GoogleAppsCardV1IconSchema>
  onClick?: z.infer<typeof GoogleAppsCardV1OnClickSchema>
  startIcon?: z.infer<typeof GoogleAppsCardV1IconSchema>
  switchControl?: z.infer<typeof GoogleAppsCardV1SwitchControlSchema>
  text?: string
  topLabel?: string
  wrapText?: boolean
}

type GoogleAppsCardV1DividerType = { [key: string]: unknown }

const GoogleAppsCardV1BorderStyleSchema: z.ZodType<GoogleAppsCardV1BorderStyleType> = z
  .object({
    cornerRadius: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The corner radius for the border.' }),
    strokeColor: ColorSchema.exactOptional().openapi({
      description: 'The colors to use when the type is `BORDER_TYPE_STROKE`.',
    }),
    type: z
      .enum(['BORDER_TYPE_UNSPECIFIED', 'NO_BORDER', 'STROKE'])
      .exactOptional()
      .openapi({ description: 'The border type.' }),
  })
  .openapi({
    description:
      'The style options for the border of a card or widget, including the border type and color. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1BorderStyle')

const GoogleAppsCardV1ImageCropStyleSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here\'s how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```',
      }),
    type: z
      .enum([
        'IMAGE_CROP_TYPE_UNSPECIFIED',
        'SQUARE',
        'CIRCLE',
        'RECTANGLE_CUSTOM',
        'RECTANGLE_4_3',
      ])
      .exactOptional()
      .openapi({ description: 'The crop type.' }),
  })
  .openapi({
    description:
      'Represents the crop style applied to an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, here\'s how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```',
    required: [],
  })
  .openapi('GoogleAppsCardV1ImageCropStyle')

const GoogleAppsCardV1ImageComponentSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The accessibility label for the image.' }),
    borderStyle: GoogleAppsCardV1BorderStyleSchema.exactOptional().openapi({
      description: 'The border style to apply to the image.',
    }),
    cropStyle: GoogleAppsCardV1ImageCropStyleSchema.exactOptional().openapi({
      description: 'The crop style to apply to the image.',
    }),
    imageUri: z.string().exactOptional().openapi({ description: 'The image URL.' }),
  })
  .openapi({
    description:
      'Represents an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1ImageComponent')

type GoogleAppsCardV1GridItemType = {
  id?: string
  image?: z.infer<typeof GoogleAppsCardV1ImageComponentSchema>
  layout?: 'GRID_ITEM_LAYOUT_UNSPECIFIED' | 'TEXT_BELOW' | 'TEXT_ABOVE'
  subtitle?: string
  title?: string
}

const GoogleAppsCardV1GridItemSchema: z.ZodType<GoogleAppsCardV1GridItemType> = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters.",
      }),
    image: GoogleAppsCardV1ImageComponentSchema.exactOptional().openapi({
      description: 'The image that displays in the grid item.',
    }),
    layout: z
      .enum(['GRID_ITEM_LAYOUT_UNSPECIFIED', 'TEXT_BELOW', 'TEXT_ABOVE'])
      .exactOptional()
      .openapi({ description: 'The layout to use for the grid item.' }),
    subtitle: z.string().exactOptional().openapi({ description: "The grid item's subtitle." }),
    title: z.string().exactOptional().openapi({ description: "The grid item's title." }),
  })
  .openapi({
    description:
      'Represents an item in a grid layout. Items can contain text, an image, or both text and an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1GridItem')

type GoogleAppsCardV1GridType = {
  borderStyle?: z.infer<typeof GoogleAppsCardV1BorderStyleSchema>
  columnCount?: number
  items?: z.infer<typeof GoogleAppsCardV1GridItemSchema>[]
  onClick?: z.infer<typeof GoogleAppsCardV1OnClickSchema>
  title?: string
}

type GoogleAppsCardV1ImageType = {
  altText?: string
  imageUrl?: string
  onClick?: z.infer<typeof GoogleAppsCardV1OnClickSchema>
}

const GoogleAppsCardV1CardSchema: z.ZodType<GoogleAppsCardV1CardType> = z
  .lazy(() =>
    z
      .object({
        cardActions: z
          .array(GoogleAppsCardV1CardActionSchema)
          .exactOptional()
          .openapi({
            description:
              'The card\'s actions. Actions are added to the card\'s toolbar menu. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): For example, the following JSON constructs a card action menu with `Settings` and `Send Feedback` options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ```',
          }),
        displayStyle: z
          .enum(['DISPLAY_STYLE_UNSPECIFIED', 'PEEK', 'REPLACE'])
          .exactOptional()
          .openapi({
            description:
              'In Google Workspace Add-ons, sets the display properties of the `peekCardHeader`. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
          }),
        fixedFooter: GoogleAppsCardV1CardFixedFooterSchema.exactOptional().openapi({
          description:
            'The fixed footer shown at the bottom of this card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        }),
        header: GoogleAppsCardV1CardHeaderSchema.exactOptional().openapi({
          description:
            'The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.',
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Name of the card. Used as a card identifier in card navigation. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
          }),
        peekCardHeader: GoogleAppsCardV1CardHeaderSchema.exactOptional().openapi({
          description:
            'When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
        }),
        sectionDividerStyle: z
          .enum(['DIVIDER_STYLE_UNSPECIFIED', 'SOLID_DIVIDER', 'NO_DIVIDER'])
          .exactOptional()
          .openapi({ description: 'The divider style between sections.' }),
        sections: z
          .array(GoogleAppsCardV1SectionSchema)
          .exactOptional()
          .openapi({
            description:
              'Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Card section](https://developers.google.com/chat/ui/widgets/card-section).',
          }),
      })
      .openapi({
        description:
          'A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Card')

type GoogleAppsCardV1OpenLinkType = {
  onClose?: 'NOTHING' | 'RELOAD'
  openAs?: 'FULL_SIZE' | 'OVERLAY'
  url?: string
}

const GoogleAppsCardV1OpenLinkSchema: z.ZodType<GoogleAppsCardV1OpenLinkType> = z
  .object({
    onClose: z
      .enum(['NOTHING', 'RELOAD'])
      .exactOptional()
      .openapi({
        description:
          'Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
      }),
    openAs: z
      .enum(['FULL_SIZE', 'OVERLAY'])
      .exactOptional()
      .openapi({
        description:
          'How to open a link. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
      }),
    url: z.string().exactOptional().openapi({ description: 'The URL to open.' }),
  })
  .openapi({
    description:
      'Represents an `onClick` event that opens a hyperlink. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1OpenLink')

type GoogleAppsCardV1OnClickType = {
  action?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  card?: z.infer<typeof GoogleAppsCardV1CardSchema>
  openDynamicLinkAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  openLink?: z.infer<typeof GoogleAppsCardV1OpenLinkSchema>
}

const GoogleAppsCardV1WidgetSchema: z.ZodType<GoogleAppsCardV1WidgetType> = z
  .lazy(() =>
    z
      .object({
        buttonList: GoogleAppsCardV1ButtonListSchema.exactOptional().openapi({
          description:
            'A list of buttons. For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ { "text": "Edit", "color": { "red": 0, "green": 0, "blue": 1, "alpha": 1 }, "disabled": true, }, { "icon": { "knownIcon": "INVITE", "altText": "check calendar" }, "onClick": { "openLink": { "url": "https://example.com/calendar" } } } ] } ```',
        }),
        columns: GoogleAppsCardV1ColumnsSchema.exactOptional().openapi({
          description:
            'Displays up to 2 columns. To include more than 2 columns, or to use rows, use the `Grid` widget. For example, the following JSON creates 2 columns that each contain text paragraphs: ``` "columns": { "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph" } } ] }, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph" } } ] } ] } ```',
        }),
        dateTimePicker: GoogleAppsCardV1DateTimePickerSchema.exactOptional().openapi({
          description:
            'Displays a widget that lets users input a date, time, or date and time. For example, the following JSON creates a date time picker to schedule an appointment: ``` "dateTimePicker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DATE_AND_TIME", "valueMsEpoch": "796435200000" } ```',
        }),
        decoratedText: GoogleAppsCardV1DecoratedTextSchema.exactOptional().openapi({
          description:
            'Displays a decorated text item. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" }, "topLabel": "Email Address", "text": "sasha@example.com", "bottomLabel": "This is a new Email address!", "switchControl": { "name": "has_send_welcome_email_to_sasha", "selected": false, "controlType": "CHECKBOX" } } ```',
        }),
        divider: GoogleAppsCardV1DividerSchema.exactOptional().openapi({
          description:
            'Displays a horizontal line divider between widgets. For example, the following JSON creates a divider: ``` "divider": { } ```',
        }),
        grid: GoogleAppsCardV1GridSchema.exactOptional().openapi({
          description:
            'Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```',
        }),
        horizontalAlignment: z
          .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
          .exactOptional()
          .openapi({
            description:
              'Specifies whether widgets align to the left, right, or center of a column.',
          }),
        image: GoogleAppsCardV1ImageSchema.exactOptional().openapi({
          description:
            'Displays an image. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "altText": "Chat app avatar" } ```',
        }),
        selectionInput: GoogleAppsCardV1SelectionInputSchema.exactOptional().openapi({
          description:
            'Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus. For example, the following JSON creates a dropdown menu that lets users choose a size: ``` "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false }, { "text": "M", "value": "medium", "selected": true }, { "text": "L", "value": "large", "selected": false }, { "text": "XL", "value": "extra_large", "selected": false } ] } ```',
        }),
        textInput: GoogleAppsCardV1TextInputSchema.exactOptional().openapi({
          description:
            'Displays a text box that users can type into. For example, the following JSON creates a text input for an email address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" } ``` As another example, the following JSON creates a text input for a programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } ```',
        }),
        textParagraph: GoogleAppsCardV1TextParagraphSchema.exactOptional().openapi({
          description:
            'Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" } ```',
        }),
      })
      .openapi({
        description:
          'Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Widget')

type GoogleAppsCardV1SectionType = {
  collapsible?: boolean
  header?: string
  uncollapsibleWidgetsCount?: number
  widgets?: z.infer<typeof GoogleAppsCardV1WidgetSchema>[]
}

const GoogleAppsCardV1SelectionItemSchema = z
  .object({
    bottomText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For multiselect menus, a text description or label that's displayed below the item's `text` field.",
      }),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.',
      }),
    startIconUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For multiselect menus, the URL for the icon displayed next to the item's `text` field. Supports PNG and JPEG files. Must be an `HTTPS` URL. For example, `https://developers.google.com/chat/images/quickstart-app-avatar.png`.",
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that identifies or describes the item to users.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
  })
  .openapi({
    description:
      'An item that users can select in a selection input, such as a checkbox or switch. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1SelectionItem')

const SpaceDataSourceSchema = z
  .object({
    defaultToCurrentSpace: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to `true`, the multiselect menu selects the current Google Chat space as an item by default.',
      }),
  })
  .openapi({
    description:
      'A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. [Google Chat apps](https://developers.google.com/chat):',
    required: [],
  })
  .openapi('SpaceDataSource')

const ChatClientDataSourceMarkupSchema = z
  .object({
    spaceDataSource: SpaceDataSourceSchema.exactOptional().openapi({
      description: 'Google Chat spaces that the user is a member of.',
    }),
  })
  .openapi({
    description:
      "For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. [Google Chat apps](https://developers.google.com/chat):",
    required: [],
  })
  .openapi('ChatClientDataSourceMarkup')

const HostAppDataSourceMarkupSchema = z
  .object({
    chatDataSource: ChatClientDataSourceMarkupSchema.exactOptional().openapi({
      description: 'A data source from Google Chat.',
    }),
  })
  .openapi({
    description:
      'For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. [Google Chat apps](https://developers.google.com/chat):',
    required: [],
  })
  .openapi('HostAppDataSourceMarkup')

const GoogleAppsCardV1PlatformDataSourceSchema = z
  .object({
    commonDataSource: z
      .enum(['UNKNOWN', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.',
      }),
    hostAppDataSource: HostAppDataSourceMarkupSchema.exactOptional().openapi({
      description:
        "A data source that's unique to a Google Workspace host application, such spaces in Google Chat.",
    }),
  })
  .openapi({
    description:
      'For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. [Google Chat apps](https://developers.google.com/chat):',
    required: [],
  })
  .openapi('GoogleAppsCardV1PlatformDataSource')

type GoogleAppsCardV1SelectionInputType = {
  externalDataSource?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  items?: z.infer<typeof GoogleAppsCardV1SelectionItemSchema>[]
  label?: string
  multiSelectMaxSelectedItems?: number
  multiSelectMinQueryLength?: number
  name?: string
  onChangeAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  platformDataSource?: z.infer<typeof GoogleAppsCardV1PlatformDataSourceSchema>
  type?: 'CHECK_BOX' | 'RADIO_BUTTON' | 'SWITCH' | 'DROPDOWN' | 'MULTI_SELECT'
}

const GoogleAppsCardV1SuggestionItemSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of a suggested input to a text input field. This is equivalent to what users enter themselves.',
      }),
  })
  .openapi({
    description:
      'One suggested value that users can enter in a text input field. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1SuggestionItem')

const GoogleAppsCardV1SuggestionsSchema = z
  .object({
    items: z
      .array(GoogleAppsCardV1SuggestionItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of suggestions used for autocomplete recommendations in text input fields.',
      }),
  })
  .openapi({
    description:
      "Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):",
    required: [],
  })
  .openapi('GoogleAppsCardV1Suggestions')

type GoogleAppsCardV1TextInputType = {
  autoCompleteAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  hintText?: string
  initialSuggestions?: z.infer<typeof GoogleAppsCardV1SuggestionsSchema>
  label?: string
  name?: string
  onChangeAction?: z.infer<typeof GoogleAppsCardV1ActionSchema>
  placeholderText?: string
  type?: 'SINGLE_LINE' | 'MULTIPLE_LINE'
  value?: string
}

type GoogleAppsCardV1TextParagraphType = { text?: string }

const GoogleAppsCardV1ButtonListSchema: z.ZodType<GoogleAppsCardV1ButtonListType> = z
  .lazy(() =>
    z
      .object({
        buttons: z
          .array(GoogleAppsCardV1ButtonSchema)
          .exactOptional()
          .openapi({ description: 'An array of buttons.' }),
      })
      .openapi({
        description:
          'A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1ButtonList')

const GoogleAppsCardV1ColumnsSchema: z.ZodType<GoogleAppsCardV1ColumnsType> = z
  .lazy(() =>
    z
      .object({
        columnItems: z
          .array(GoogleAppsCardV1ColumnSchema)
          .exactOptional()
          .openapi({
            description:
              'An array of columns. You can include up to 2 columns in a card or dialog.',
          }),
      })
      .openapi({
        description:
          "The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in [Developer Preview](https://developers.google.com/workspace/preview).",
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Columns')

const GoogleAppsCardV1DateTimePickerSchema: z.ZodType<GoogleAppsCardV1DateTimePickerType> = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
    onChangeAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description:
        'Triggered when the user clicks **Save** or **Clear** from the `DateTimePicker` interface.',
    }),
    timezoneOffsetDate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.",
      }),
    type: z
      .enum(['DATE_AND_TIME', 'DATE_ONLY', 'TIME_ONLY'])
      .exactOptional()
      .openapi({
        description: 'Whether the widget supports inputting a date, a time, or the date and time.',
      }),
    valueMsEpoch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`).',
      }),
  })
  .openapi({
    description:
      'Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1DateTimePicker')

const GoogleAppsCardV1DecoratedTextSchema: z.ZodType<GoogleAppsCardV1DecoratedTextType> = z
  .lazy(() =>
    z
      .object({
        bottomLabel: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text that appears below `text`. Always wraps.' }),
        button: GoogleAppsCardV1ButtonSchema.exactOptional().openapi({
          description: 'A button that a user can click to trigger an action.',
        }),
        endIcon: GoogleAppsCardV1IconSchema.exactOptional().openapi({
          description:
            'An icon displayed after the text. Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons.',
        }),
        icon: GoogleAppsCardV1IconSchema.exactOptional().openapi({
          deprecated: true,
          description: 'Deprecated in favor of `startIcon`.',
        }),
        onClick: GoogleAppsCardV1OnClickSchema.exactOptional().openapi({
          description: 'This action is triggered when users click `topLabel` or `bottomLabel`.',
        }),
        startIcon: GoogleAppsCardV1IconSchema.exactOptional().openapi({
          description: 'The icon displayed in front of the text.',
        }),
        switchControl: GoogleAppsCardV1SwitchControlSchema.exactOptional().openapi({
          description:
            'A switch widget that a user can click to change its state and trigger an action.',
        }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
          }),
        topLabel: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text that appears above `text`. Always truncates.' }),
        wrapText: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`.',
          }),
      })
      .openapi({
        description:
          'A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1DecoratedText')

const GoogleAppsCardV1DividerSchema: z.ZodType<GoogleAppsCardV1DividerType> = z
  .object({})
  .openapi({
    description:
      'Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a divider: ``` "divider": {} ```',
  })
  .openapi('GoogleAppsCardV1Divider')

const GoogleAppsCardV1GridSchema: z.ZodType<GoogleAppsCardV1GridType> = z
  .lazy(() =>
    z
      .object({
        borderStyle: GoogleAppsCardV1BorderStyleSchema.exactOptional().openapi({
          description: 'The border style to apply to each grid item.',
        }),
        columnCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              "The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).",
          }),
        items: z
          .array(GoogleAppsCardV1GridItemSchema)
          .exactOptional()
          .openapi({ description: 'The items to display in the grid.' }),
        onClick: GoogleAppsCardV1OnClickSchema.exactOptional().openapi({
          description:
            "This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.",
        }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text that displays in the grid header.' }),
      })
      .openapi({
        description:
          'Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Grid')

const GoogleAppsCardV1ImageSchema: z.ZodType<GoogleAppsCardV1ImageType> = z
  .lazy(() =>
    z
      .object({
        altText: z
          .string()
          .exactOptional()
          .openapi({
            description: "The alternative text of this image that's used for accessibility.",
          }),
        imageUrl: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ```',
          }),
        onClick: GoogleAppsCardV1OnClickSchema.exactOptional().openapi({
          description: 'When a user clicks the image, the click triggers this action.',
        }),
      })
      .openapi({
        description:
          'An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
        required: [],
      }),
  )
  .openapi('GoogleAppsCardV1Image')

const GoogleAppsCardV1SelectionInputSchema: z.ZodType<GoogleAppsCardV1SelectionInputType> = z
  .object({
    externalDataSource: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description: 'An external data source, such as a relational data base.',
    }),
    items: z
      .array(GoogleAppsCardV1SelectionItemSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".',
      }),
    multiSelectMaxSelectedItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.',
      }),
    multiSelectMinQueryLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For multiselect menus, the number of text characters that a user inputs before the Chat app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
    onChangeAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description:
        'If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
    }),
    platformDataSource: GoogleAppsCardV1PlatformDataSourceSchema.exactOptional().openapi({
      description: 'A data source from Google Workspace.',
    }),
    type: z
      .enum(['CHECK_BOX', 'RADIO_BUTTON', 'SWITCH', 'DROPDOWN', 'MULTI_SELECT'])
      .exactOptional()
      .openapi({
        description:
          'The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.',
      }),
  })
  .openapi({
    description:
      'A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1SelectionInput')

const GoogleAppsCardV1TextInputSchema: z.ZodType<GoogleAppsCardV1TextInputType> = z
  .object({
    autoCompleteAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description:
        'Optional. Specify what action to take when the text input field provides suggestions to users who interact with it. If unspecified, the suggestions are set by `initialSuggestions` and are processed by the client. If specified, the app takes the action specified here, such as running a custom function. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):',
    }),
    hintText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional.',
      }),
    initialSuggestions: GoogleAppsCardV1SuggestionsSchema.exactOptional().openapi({
      description:
        "Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show just `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):",
    }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
    onChangeAction: GoogleAppsCardV1ActionSchema.exactOptional().openapi({
      description:
        'What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text. Examples of actions to take include running a custom function or opening a [dialog](https://developers.google.com/chat/how-tos/dialogs) in Google Chat.',
    }),
    placeholderText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/chat):',
      }),
    type: z
      .enum(['SINGLE_LINE', 'MULTIPLE_LINE'])
      .exactOptional()
      .openapi({
        description:
          'How a text input field appears in the user interface. For example, whether the field is single or multi-line.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).',
      }),
  })
  .openapi({
    description:
      'A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1TextInput')

const GoogleAppsCardV1TextParagraphSchema: z.ZodType<GoogleAppsCardV1TextParagraphType> = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: "The text that's shown in the widget." }),
  })
  .openapi({
    description:
      'A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):',
    required: [],
  })
  .openapi('GoogleAppsCardV1TextParagraph')

type GoogleAppsCardV1WidgetType = {
  buttonList?: z.infer<typeof GoogleAppsCardV1ButtonListSchema>
  columns?: z.infer<typeof GoogleAppsCardV1ColumnsSchema>
  dateTimePicker?: z.infer<typeof GoogleAppsCardV1DateTimePickerSchema>
  decoratedText?: z.infer<typeof GoogleAppsCardV1DecoratedTextSchema>
  divider?: z.infer<typeof GoogleAppsCardV1DividerSchema>
  grid?: z.infer<typeof GoogleAppsCardV1GridSchema>
  horizontalAlignment?: 'HORIZONTAL_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END'
  image?: z.infer<typeof GoogleAppsCardV1ImageSchema>
  selectionInput?: z.infer<typeof GoogleAppsCardV1SelectionInputSchema>
  textInput?: z.infer<typeof GoogleAppsCardV1TextInputSchema>
  textParagraph?: z.infer<typeof GoogleAppsCardV1TextParagraphSchema>
}

type GoogleAppsCardV1WidgetsType = {
  buttonList?: z.infer<typeof GoogleAppsCardV1ButtonListSchema>
  dateTimePicker?: z.infer<typeof GoogleAppsCardV1DateTimePickerSchema>
  decoratedText?: z.infer<typeof GoogleAppsCardV1DecoratedTextSchema>
  image?: z.infer<typeof GoogleAppsCardV1ImageSchema>
  selectionInput?: z.infer<typeof GoogleAppsCardV1SelectionInputSchema>
  textInput?: z.infer<typeof GoogleAppsCardV1TextInputSchema>
  textParagraph?: z.infer<typeof GoogleAppsCardV1TextParagraphSchema>
}

const DateInputSchema = z
  .object({
    msSinceEpoch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time since epoch time, in milliseconds.' }),
  })
  .openapi({ description: 'Date input values.', required: [] })
  .openapi('DateInput')

const DateTimeInputSchema = z
  .object({
    hasDate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the `datetime` input includes a calendar date.' }),
    hasTime: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the `datetime` input includes a timestamp.' }),
    msSinceEpoch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time since epoch time, in milliseconds.' }),
  })
  .openapi({ description: 'Date and time input values.', required: [] })
  .openapi('DateTimeInput')

const StringInputsSchema = z
  .object({
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An list of strings entered by the user.' }),
  })
  .openapi({
    description:
      'Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.',
    required: [],
  })
  .openapi('StringInputs')

const TimeInputSchema = z
  .object({
    hours: z.int32().exactOptional().openapi({ description: 'The hour on a 24-hour clock.' }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of minutes past the hour. Valid values are 0 to 59.' }),
  })
  .openapi({ description: 'Time input values.', required: [] })
  .openapi('TimeInput')

type InputsType = {
  dateInput?: z.infer<typeof DateInputSchema>
  dateTimeInput?: z.infer<typeof DateTimeInputSchema>
  stringInputs?: z.infer<typeof StringInputsSchema>
  timeInput?: z.infer<typeof TimeInputSchema>
}

const ActionStatusSchema = z
  .object({
    statusCode: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'The status code.' }),
    userFacingMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent.',
      }),
  })
  .openapi({
    description:
      'Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).',
    required: [],
  })
  .openapi('ActionStatus')

const DialogSchema = z
  .object({
    body: GoogleAppsCardV1CardSchema.exactOptional().openapi({
      description:
        "Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: `DateTimePicker`, `OnChangeAction`.",
    }),
  })
  .openapi({ description: 'Wrapper around the card body of the dialog.', required: [] })
  .openapi('Dialog')

const DialogActionSchema = z
  .object({
    actionStatus: ActionStatusSchema.exactOptional().openapi({
      description:
        'Input only. Status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). Displays a status and message to users, if necessary. For example, in case of an error or success.',
    }),
    dialog: DialogSchema.exactOptional().openapi({
      description:
        'Input only. [Dialog](https://developers.google.com/chat/how-tos/dialogs) for the request.',
    }),
  })
  .openapi({
    description:
      'Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.',
    required: [],
  })
  .openapi('DialogAction')

const SelectionItemsSchema = z
  .object({
    items: z
      .array(GoogleAppsCardV1SelectionItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of the SelectionItem objects.' }),
  })
  .openapi({ description: 'List of widget autocomplete results.', required: [] })
  .openapi('SelectionItems')

const UpdatedWidgetSchema = z
  .object({
    suggestions: SelectionItemsSchema.exactOptional().openapi({
      description: 'List of widget autocomplete results',
    }),
    widget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the updated widget. The ID must match the one for the widget that triggered the update request.',
      }),
  })
  .openapi({
    description:
      'The response of the updated widget. Used to provide autocomplete options for a widget.',
    required: [],
  })
  .openapi('UpdatedWidget')

const ActionResponseSchema = z
  .object({
    dialogAction: DialogActionSchema.exactOptional().openapi({
      description:
        'Input only. A response to an interaction event related to a [dialog](https://developers.google.com/chat/how-tos/dialogs). Must be accompanied by `ResponseType.Dialog`.',
    }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'NEW_MESSAGE',
        'UPDATE_MESSAGE',
        'UPDATE_USER_MESSAGE_CARDS',
        'REQUEST_CONFIG',
        'DIALOG',
        'UPDATE_WIDGET',
      ])
      .exactOptional()
      .openapi({ description: 'Input only. The type of Chat app response.' }),
    updatedWidget: UpdatedWidgetSchema.exactOptional().openapi({
      description: 'Input only. The response of the updated widget.',
    }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.)',
      }),
  })
  .openapi({
    description: 'Parameters that a Chat app can use to configure how its response is posted.',
    required: [],
  })
  .openapi('ActionResponse')

const UserSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The user's display name.", readOnly: true }),
    domainId: z
      .string()
      .exactOptional()
      .openapi({ description: "Unique identifier of the user's Google Workspace domain." }),
    isAnonymous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. When `true`, the user is deleted or their profile is not visible.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.",
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'HUMAN', 'BOT'])
      .exactOptional()
      .openapi({ description: 'User type.' }),
  })
  .openapi({
    description:
      "A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`.",
    required: [],
  })
  .openapi('User')

const SlashCommandMetadataSchema = z
  .object({
    bot: UserSchema.exactOptional().openapi({
      description: 'The Chat app whose command was invoked.',
    }),
    commandId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The command ID of the invoked slash command.' }),
    commandName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the invoked slash command.' }),
    triggersDialog: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the slash command is for a dialog.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'ADD', 'INVOKE'])
      .exactOptional()
      .openapi({ description: 'The type of slash command.' }),
  })
  .openapi({ description: 'Annotation metadata for slash commands (/).', required: [] })
  .openapi('SlashCommandMetadata')

const UserMentionMetadataSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'ADD', 'MENTION'])
      .exactOptional()
      .openapi({ description: 'The type of user mention.' }),
    user: UserSchema.exactOptional().openapi({ description: 'The user mentioned.' }),
  })
  .openapi({ description: 'Annotation metadata for user mentions (@).', required: [] })
  .openapi('UserMentionMetadata')

const AnnotationSchema = z
  .object({
    length: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Length of the substring in the plain-text message body this annotation corresponds to.',
      }),
    slashCommand: SlashCommandMetadataSchema.exactOptional().openapi({
      description: 'The metadata for a slash command.',
    }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.',
      }),
    type: z
      .enum(['ANNOTATION_TYPE_UNSPECIFIED', 'USER_MENTION', 'SLASH_COMMAND'])
      .exactOptional()
      .openapi({ description: 'The type of this annotation.' }),
    userMention: UserMentionMetadataSchema.exactOptional().openapi({
      description: 'The metadata of user mention.',
    }),
  })
  .openapi({
    description:
      'Output only. Annotations associated with the plain-text body of the message. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/chat/format-messages). Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```',
    required: [],
  })
  .openapi('Annotation')

const AttachedGifSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The URL that hosts the GIF image.', readOnly: true }),
  })
  .openapi({ description: "A GIF image that's specified by a URL.", required: [] })
  .openapi('AttachedGif')

const AttachmentDataRefSchema = z
  .object({
    attachmentUploadToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the attachment data. This field is used with the media API to download the attachment data.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentDataRef')

const DriveDataRefSchema = z
  .object({
    driveFileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID for the drive file. Use with the Drive API.' }),
  })
  .openapi({ description: 'A reference to the data of a drive attachment.', required: [] })
  .openapi('DriveDataRef')

const AttachmentSchema = z
  .object({
    attachmentDataRef: AttachmentDataRefSchema.exactOptional().openapi({
      description:
        'A reference to the attachment data. This field is used with the media API to download the attachment data.',
    }),
    contentName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The original file name for the content, not the full path.',
        readOnly: true,
      }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The content type (MIME type) of the file.',
        readOnly: true,
      }),
    downloadUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.",
        readOnly: true,
      }),
    driveDataRef: DriveDataRefSchema.exactOptional().openapi({
      description:
        'Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the attachment, in the form `spaces/*/messages/*/attachments/*`.',
      }),
    source: z
      .enum(['SOURCE_UNSPECIFIED', 'DRIVE_FILE', 'UPLOADED_CONTENT'])
      .exactOptional()
      .openapi({ description: 'Output only. The source of the attachment.', readOnly: true }),
    thumbnailUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'An attachment in Google Chat.', required: [] })
  .openapi('Attachment')

const ButtonSchema: z.ZodType<ButtonType> = z
  .lazy(() =>
    z
      .object({
        imageButton: ImageButtonSchema.exactOptional().openapi({
          description: 'A button with image and `onclick` action.',
        }),
        textButton: TextButtonSchema.exactOptional().openapi({
          description: 'A button with text and `onclick` action.',
        }),
      })
      .openapi({ description: 'A button. Can be a text button or an image button.', required: [] }),
  )
  .openapi('Button')

const CardActionSchema = z
  .object({
    actionLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label used to be displayed in the action menu item.' }),
    onClick: OnClickSchema.exactOptional().openapi({
      description: 'The onclick action for this action item.',
    }),
  })
  .openapi({
    description:
      'A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.',
    required: [],
  })
  .openapi('CardAction')

const CardHeaderSchema = z
  .object({
    imageStyle: z
      .enum(['IMAGE_STYLE_UNSPECIFIED', 'IMAGE', 'AVATAR'])
      .exactOptional()
      .openapi({
        description: "The image's type (for example, square border or circular border).",
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the image in the card header.' }),
    subtitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subtitle of the card header.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardHeader')

const ImageSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.",
      }),
    imageUrl: z.string().exactOptional().openapi({ description: 'The URL of the image.' }),
    onClick: OnClickSchema.exactOptional().openapi({ description: 'The `onclick` action.' }),
  })
  .openapi({
    description: "An image that's specified by a URL and can have an `onclick` action.",
    required: [],
  })
  .openapi('Image')

const KeyValueSchema = z
  .object({
    bottomLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
      }),
    button: ButtonSchema.exactOptional().openapi({
      description: 'A button that can be clicked to trigger an action.',
    }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
      }),
    contentMultiline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the content should be multiline.' }),
    icon: z
      .enum([
        'ICON_UNSPECIFIED',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional()
      .openapi({
        description:
          "An enum value that's replaced by the Chat API with the corresponding icon image.",
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon specified by a URL.' }),
    onClick: OnClickSchema.exactOptional().openapi({
      description:
        'The `onclick` action. Only the top label, bottom label, and content region are clickable.',
    }),
    topLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
      }),
  })
  .openapi({
    description:
      'A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.',
    required: [],
  })
  .openapi('KeyValue')

const TextParagraphSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({
    description:
      'A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
    required: [],
  })
  .openapi('TextParagraph')

const WidgetMarkupSchema = z
  .object({
    buttons: z
      .array(ButtonSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of buttons. Buttons is also `oneof data` and only one of these fields should be set.',
      }),
    image: ImageSchema.exactOptional().openapi({ description: 'Display an image in this widget.' }),
    keyValue: KeyValueSchema.exactOptional().openapi({
      description: 'Display a key value item in this widget.',
    }),
    textParagraph: TextParagraphSchema.exactOptional().openapi({
      description: 'Display a text paragraph in this widget.',
    }),
  })
  .openapi({ description: 'A widget is a UI element that presents text and images.', required: [] })
  .openapi('WidgetMarkup')

const SectionSchema = z
  .object({
    header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
      }),
    widgets: z
      .array(WidgetMarkupSchema)
      .exactOptional()
      .openapi({ description: 'A section must contain at least one widget.' }),
  })
  .openapi({
    description:
      "A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).",
    required: [],
  })
  .openapi('Section')

const CardSchema = z
  .object({
    cardActions: z
      .array(CardActionSchema)
      .exactOptional()
      .openapi({ description: 'The actions of this card.' }),
    header: CardHeaderSchema.exactOptional().openapi({
      description: 'The header of the card. A header usually contains a title and an image.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of the card.' }),
    sections: z
      .array(SectionSchema)
      .exactOptional()
      .openapi({ description: 'Sections are separated by a line divider.' }),
  })
  .openapi({
    description: 'A card is a UI element that can contain UI widgets such as text and images.',
    required: [],
  })
  .openapi('Card')

const CardWithIdSchema = z
  .object({
    card: GoogleAppsCardV1CardSchema.exactOptional().openapi({
      description: 'A card. Maximum size is 32 KB.',
    }),
    cardId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the message contains multiple cards. A unique identifier for a card in a message.',
      }),
  })
  .openapi({
    description:
      "A [card](https://developers.google.com/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder)",
    required: [],
  })
  .openapi('CardWithId')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const ChatAppLogEntrySchema = z
  .object({
    deployment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.',
      }),
    deploymentFunction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unencrypted `callback_method` name that was running when the error was encountered.',
      }),
    error: StatusSchema.exactOptional().openapi({ description: 'The error code and message.' }),
  })
  .openapi({
    description:
      'JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).',
    required: [],
  })
  .openapi('ChatAppLogEntry')

const InputsSchema: z.ZodType<InputsType> = z
  .lazy(() =>
    z
      .object({
        dateInput: DateInputSchema.exactOptional().openapi({
          description:
            'Date input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts date values.',
        }),
        dateTimeInput: DateTimeInputSchema.exactOptional().openapi({
          description:
            'Date and time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that accepts both a date and time.',
        }),
        stringInputs: StringInputsSchema.exactOptional().openapi({
          description:
            'A list of strings that represent the values that the user inputs in a widget. If the widget only accepts one value, such as a [`TextInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#TextInput) widget, the list contains one string object. If the widget accepts multiple values, such as a [`SelectionInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#selectioninput) widget of checkboxes, the list contains a string object for each value that the user inputs or selects.',
        }),
        timeInput: TimeInputSchema.exactOptional().openapi({
          description:
            'Time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts time values.',
        }),
      })
      .openapi({
        description:
          'Types of data that users can [input on cards or dialogs](https://developers.google.com/chat/ui/read-form-data). The input type depends on the type of values that the widget accepts.',
        required: [],
      }),
  )
  .openapi('Inputs')

const TimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto".',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).',
      }),
  })
  .openapi({
    description:
      'The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).',
    required: [],
  })
  .openapi('TimeZone')

const CommonEventObjectSchema = z
  .object({
    formInputs: z
      .record(z.string(), InputsSchema)
      .exactOptional()
      .openapi({
        description:
          'A map containing the values that a user inputs in a widget from a card or dialog. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. For details, see [Process information inputted by users](https://developers.google.com/chat/ui/read-form-data).',
      }),
    hostApp: z
      .enum([
        'UNSPECIFIED_HOST_APP',
        'GMAIL',
        'CALENDAR',
        'DRIVE',
        'DEMO',
        'DOCS',
        'MEET',
        'SHEETS',
        'SLIDES',
        'DRAWINGS',
        'CHAT',
        'CHAT_IN_GMAIL',
      ])
      .exactOptional()
      .openapi({
        description:
          'The hostApp enum which indicates the app the add-on is invoked from. Always `CHAT` for Chat apps.',
      }),
    invokedFunction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the invoked function associated with the widget. Only set for Chat apps.',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings.',
      }),
    platform: z
      .enum(['UNKNOWN_PLATFORM', 'WEB', 'IOS', 'ANDROID'])
      .exactOptional()
      .openapi({
        description:
          'The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps.',
      }),
    timeZone: TimeZoneSchema.exactOptional().openapi({
      description:
        'The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).',
    }),
    userLocale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US".',
      }),
  })
  .openapi({
    description:
      "Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs).",
    required: [],
  })
  .openapi('CommonEventObject')

const CompleteImportSpaceRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for completing the import process for a space.' })
  .openapi('CompleteImportSpaceRequest')

const SpaceDetailsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.",
      }),
    guidelines: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.",
      }),
  })
  .openapi({
    description: 'Details about the space including description and rules.',
    required: [],
  })
  .openapi('SpaceDetails')

const SpaceSchema = z
  .object({
    adminInstalled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.",
      }),
    externalUserAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a Google Account. By default, the space permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview). Import mode spaces must only permit members from the same Google Workspace organization. For existing spaces, this field is output only.',
      }),
    importMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name of the space. Format: `spaces/{space}`' }),
    singleUserBotDm: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Whether the space is a DM between a Chat app and a single human.',
      }),
    spaceDetails: SpaceDetailsSchema.exactOptional().openapi({
      description: 'Details about the space including description and rules.',
    }),
    spaceHistoryState: z
      .enum(['HISTORY_STATE_UNSPECIFIED', 'HISTORY_OFF', 'HISTORY_ON'])
      .exactOptional()
      .openapi({
        description: 'The message history state for messages and threads in this space.',
      }),
    spaceThreadingState: z
      .enum([
        'SPACE_THREADING_STATE_UNSPECIFIED',
        'THREADED_MESSAGES',
        'GROUPED_MESSAGES',
        'UNTHREADED_MESSAGES',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The threading state in the Chat space.',
        readOnly: true,
      }),
    spaceType: z
      .enum(['SPACE_TYPE_UNSPECIFIED', 'SPACE', 'GROUP_CHAT', 'DIRECT_MESSAGE'])
      .exactOptional()
      .openapi({
        description:
          'The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.',
      }),
    threaded: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.',
        readOnly: true,
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'ROOM', 'DM'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Output only. Deprecated: Use `space_type` instead. The type of a space.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.',
    required: [],
  })
  .openapi('Space')

const CompleteImportSpaceResponseSchema = z
  .object({ space: SpaceSchema.exactOptional().openapi({ description: 'The import mode space.' }) })
  .openapi({ required: [] })
  .openapi('CompleteImportSpaceResponse')

const DeletionMetadataSchema = z
  .object({
    deletionType: z
      .enum([
        'DELETION_TYPE_UNSPECIFIED',
        'CREATOR',
        'SPACE_OWNER',
        'ADMIN',
        'APP_MESSAGE_EXPIRY',
        'CREATOR_VIA_APP',
        'SPACE_OWNER_VIA_APP',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates who deleted the message.' }),
  })
  .openapi({
    description:
      'Information about a deleted message. A message is deleted when `delete_time` is set.',
    required: [],
  })
  .openapi('DeletionMetadata')

const EmojiSchema: z.ZodType<EmojiType> = z
  .lazy(() =>
    z
      .object({
        customEmoji: CustomEmojiSchema.exactOptional().openapi({
          description: 'Output only. A custom emoji.',
          readOnly: true,
        }),
        unicode: z
          .string()
          .exactOptional()
          .openapi({ description: 'A basic emoji represented by a unicode string.' }),
      })
      .openapi({ description: 'An emoji that is used as a reaction to a message.', required: [] }),
  )
  .openapi('Emoji')

const EmojiReactionSummarySchema = z
  .object({
    emoji: EmojiSchema.exactOptional().openapi({
      description: 'Emoji associated with the reactions.',
    }),
    reactionCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of reactions using the associated emoji.' }),
  })
  .openapi({
    description: 'The number of people who reacted to a message with a specific emoji.',
    required: [],
  })
  .openapi('EmojiReactionSummary')

const MatchedUrlSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The URL that was matched.', readOnly: true }),
  })
  .openapi({
    description:
      'A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).',
    required: [],
  })
  .openapi('MatchedUrl')

const QuotedMessageMetadataSchema = z
  .object({
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the quoted message was created or when the quoted message was last updated.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the quoted message. Format: `spaces/{space}/messages/{message}`',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information about a quoted message.', required: [] })
  .openapi('QuotedMessageMetadata')

const SlashCommandSchema = z
  .object({
    commandId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the slash command invoked.' }),
  })
  .openapi({
    description:
      'A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.',
    required: [],
  })
  .openapi('SlashCommand')

const ThreadSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the thread. Example: `spaces/{space}/threads/{thread}`',
      }),
    threadKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead.',
      }),
  })
  .openapi({
    description:
      'A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found.',
    required: [],
  })
  .openapi('Thread')

const MessageSchema = z
  .object({
    actionResponse: ActionResponseSchema.exactOptional().openapi({
      description:
        'Input only. Parameters that a Chat app can use to configure how its response is posted.',
    }),
    annotations: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Annotations associated with the `text` in this message.',
        readOnly: true,
      }),
    argumentText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Plain-text body of the message with all Chat app mentions stripped out.',
        readOnly: true,
      }),
    attachedGifs: z
      .array(AttachedGifSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. GIF images that are attached to the message.',
        readOnly: true,
      }),
    attachment: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'User-uploaded attachment.' }),
    cards: z
      .array(CardSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.',
      }),
    cardsV2: z
      .array(CardWithIdSchema)
      .exactOptional()
      .openapi({
        description:
          "An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder)",
      }),
    clientAssignedMessageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.',
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.',
        readOnly: true,
      }),
    deletionMetadata: DeletionMetadataSchema.exactOptional().openapi({
      description:
        'Output only. Information about a deleted message. A message is deleted when `delete_time` is set.',
      readOnly: true,
    }),
    emojiReactionSummaries: z
      .array(EmojiReactionSummarySchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The list of emoji reaction summaries on the message.',
        readOnly: true,
      }),
    fallbackText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.",
      }),
    formattedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/chat/format-messages) for bold, italic, strikethrough, monospace, and monospace block. * [User mentions](https://developers.google.com/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url}|{rendered_text}>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/chat/format-messages#view_text_formatting_sent_in_a_message)",
        readOnly: true,
      }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.',
        readOnly: true,
      }),
    matchedUrl: MatchedUrlSchema.exactOptional().openapi({
      description:
        'Output only. A URL in `spaces.messages.text` that matches a link preview pattern. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).',
      }),
    privateMessageViewer: UserSchema.exactOptional().openapi({
      description:
        "Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/chat/api/guides/v1/messages/private).",
    }),
    quotedMessageMetadata: QuotedMessageMetadataSchema.exactOptional().openapi({
      description:
        "Output only. Information about a message that's quoted by a Google Chat user in a space. Google Chat users can quote a message to reply to it.",
      readOnly: true,
    }),
    sender: UserSchema.exactOptional().openapi({
      description:
        'Output only. The user who created the message. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.',
      readOnly: true,
    }),
    slashCommand: SlashCommandSchema.exactOptional().openapi({
      description: 'Output only. Slash command information, if applicable.',
      readOnly: true,
    }),
    space: SpaceSchema.exactOptional().openapi({
      description:
        'If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages).',
      }),
    thread: ThreadSchema.exactOptional().openapi({
      description:
        'The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).',
    }),
    threadReply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'A message in a Google Chat space.', required: [] })
  .openapi('Message')

const DeprecatedEventSchema = z
  .object({
    action: FormActionSchema.exactOptional().openapi({
      description:
        'For `CARD_CLICKED` interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see [Read form data input by users on cards](https://developers.google.com/chat/ui/read-form-data).',
    }),
    common: CommonEventObjectSchema.exactOptional().openapi({
      description:
        "Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes information submitted by users interacting with [dialogs](https://developers.google.com/chat/how-tos/dialogs), like data entered on a card.",
    }),
    configCompleteRedirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/chat/how-tos/connect-web-services-tools).',
      }),
    dialogEventType: z
      .enum(['TYPE_UNSPECIFIED', 'REQUEST_DIALOG', 'SUBMIT_DIALOG', 'CANCEL_DIALOG'])
      .exactOptional()
      .openapi({
        description:
          'The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) interaction event received.',
      }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp indicating when the interaction event occurred.' }),
    isDialogEvent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For `CARD_CLICKED` interaction events, whether the user interacted with a [dialog](https://developers.google.com/chat/how-tos/dialogs).',
      }),
    message: MessageSchema.exactOptional().openapi({
      description: 'The message that triggered the interaction event, if applicable.',
    }),
    space: SpaceSchema.exactOptional().openapi({
      description: 'The space in which the interaction event occurred.',
    }),
    threadKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information.',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat).",
      }),
    type: z
      .enum([
        'UNSPECIFIED',
        'MESSAGE',
        'ADDED_TO_SPACE',
        'REMOVED_FROM_SPACE',
        'CARD_CLICKED',
        'WIDGET_UPDATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events).',
      }),
    user: UserSchema.exactOptional().openapi({
      description: 'The user that triggered the interaction event.',
    }),
  })
  .openapi({
    description:
      'A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events).',
    required: [],
  })
  .openapi('DeprecatedEvent')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GroupSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group}',
      }),
  })
  .openapi({ description: 'A Google Group in Google Chat.', required: [] })
  .openapi('Group')

const MembershipSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.',
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.',
      }),
    groupMember: GroupSchema.exactOptional().openapi({
      description:
        "The Google Group the membership corresponds to. Only supports read operations. Other operations, like creating or updating a membership, aren't currently supported.",
    }),
    member: UserSchema.exactOptional().openapi({
      description:
        'The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`',
      }),
    role: z
      .enum(['MEMBERSHIP_ROLE_UNSPECIFIED', 'ROLE_MEMBER', 'ROLE_MANAGER'])
      .exactOptional()
      .openapi({
        description:
          "Optional. User's role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in `UpdateMembership`.",
      }),
    state: z
      .enum(['MEMBERSHIP_STATE_UNSPECIFIED', 'JOINED', 'INVITED', 'NOT_A_MEMBER'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the membership.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.',
    required: [],
  })
  .openapi('Membership')

const ListMembershipsResponseSchema = z
  .object({
    memberships: z
      .array(MembershipSchema)
      .exactOptional()
      .openapi({
        description: 'Unordered list. List of memberships in the requested (or first) page.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListMembershipsResponse')

const ListMessagesResponseSchema = z
  .object({
    messages: z.array(MessageSchema).exactOptional().openapi({ description: 'List of messages.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListMessagesResponse')

const ReactionSchema = z
  .object({
    emoji: EmojiSchema.exactOptional().openapi({ description: 'The emoji used in the reaction.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`',
      }),
    user: UserSchema.exactOptional().openapi({
      description: 'Output only. The user who created the reaction.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A reaction to a message.', required: [] })
  .openapi('Reaction')

const ListReactionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Continuation token to retrieve the next page of results. It's empty for the last page of results.",
      }),
    reactions: z
      .array(ReactionSchema)
      .exactOptional()
      .openapi({ description: 'List of reactions in the requested (or first) page.' }),
  })
  .openapi({ required: [] })
  .openapi('ListReactionsResponse')

const ListSpacesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.',
      }),
    spaces: z
      .array(SpaceSchema)
      .exactOptional()
      .openapi({ description: 'List of spaces in the requested (or first) page.' }),
  })
  .openapi({ required: [] })
  .openapi('ListSpacesResponse')

const MediaSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the media resource.' }),
  })
  .openapi({ description: 'Media resource.', required: [] })
  .openapi('Media')

const SetUpSpaceRequestSchema = z
  .object({
    memberships: z
      .array(MembershipSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The `Membership.member` field must contain a `user` with `name` populated (format: `users/{user}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the `user.name` can be `users/example@gmail.com`.\" To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user}`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`).",
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.',
      }),
    space: SpaceSchema.exactOptional().openapi({
      description:
        "Required. The `Space.spaceType` field is required. To create a space, set `Space.spaceType` to `SPACE` and set `Space.displayName`. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. To create a group chat, set `Space.spaceType` to `GROUP_CHAT`. Don't set `Space.displayName`. To create a 1:1 conversation between humans, set `Space.spaceType` to `DIRECT_MESSAGE` and set `Space.singleUserBotDm` to `false`. Don't set `Space.displayName` or `Space.spaceDetails`. To create an 1:1 conversation between a human and the calling Chat app, set `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`. Don't set `Space.displayName` or `Space.spaceDetails`. If a `DIRECT_MESSAGE` space already exists, that space is returned instead of creating a new space.",
    }),
  })
  .openapi({ required: [] })
  .openapi('SetUpSpaceRequest')

const UploadAttachmentRequestSchema = z
  .object({
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The filename of the attachment, including the file extension.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UploadAttachmentRequest')

const UploadAttachmentResponseSchema = z
  .object({
    attachmentDataRef: AttachmentDataRefSchema.exactOptional().openapi({
      description: 'Reference to the uploaded attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UploadAttachmentResponse')

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
        'https://www.googleapis.com/auth/chat.bot':
          'Private Service: https://www.googleapis.com/auth/chat.bot',
        'https://www.googleapis.com/auth/chat.delete':
          'Delete conversations and spaces & remove access to associated files in Google Chat',
        'https://www.googleapis.com/auth/chat.import':
          'Import spaces, messages, and memberships into Google Chat.',
        'https://www.googleapis.com/auth/chat.memberships':
          'View, add, and remove members from conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.memberships.app':
          'Add and remove itself from conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.memberships.readonly':
          'View members in Google Chat conversations.',
        'https://www.googleapis.com/auth/chat.messages':
          'View, compose, send, update, and delete messages, and add, view, and delete reactions to messages.',
        'https://www.googleapis.com/auth/chat.messages.create':
          'Compose and send messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions':
          'View, add, and delete reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions.create':
          'Add reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions.readonly':
          'View reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.readonly':
          'View messages and reactions in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces':
          'Create conversations and spaces and see or edit metadata (including history settings and access settings) in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces.create':
          'Create new conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces.readonly':
          'View chat and spaces in Google Chat',
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
        'https://www.googleapis.com/auth/chat.bot':
          'Private Service: https://www.googleapis.com/auth/chat.bot',
        'https://www.googleapis.com/auth/chat.delete':
          'Delete conversations and spaces & remove access to associated files in Google Chat',
        'https://www.googleapis.com/auth/chat.import':
          'Import spaces, messages, and memberships into Google Chat.',
        'https://www.googleapis.com/auth/chat.memberships':
          'View, add, and remove members from conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.memberships.app':
          'Add and remove itself from conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.memberships.readonly':
          'View members in Google Chat conversations.',
        'https://www.googleapis.com/auth/chat.messages':
          'View, compose, send, update, and delete messages, and add, view, and delete reactions to messages.',
        'https://www.googleapis.com/auth/chat.messages.create':
          'Compose and send messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions':
          'View, add, and delete reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions.create':
          'Add reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.reactions.readonly':
          'View reactions to messages in Google Chat',
        'https://www.googleapis.com/auth/chat.messages.readonly':
          'View messages and reactions in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces':
          'Create conversations and spaces and see or edit metadata (including history settings and access settings) in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces.create':
          'Create new conversations in Google Chat',
        'https://www.googleapis.com/auth/chat.spaces.readonly':
          'View chat and spaces in Google Chat',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1MediaResourceNameRoute = createRoute({
  method: 'get',
  path: '/v1/media/{resourceName}',
  tags: ['media'],
  description: 'Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.',
  operationId: 'chat.media.download',
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
      resourceName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the media that is being downloaded. See ReadRequest.resource_name.',
            in: 'path',
            name: 'resourceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.readonly'],
    },
  ],
})

export const getV1SpacesRoute = createRoute({
  method: 'get',
  path: '/v1/spaces',
  tags: ['spaces'],
  description:
    "Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/chat/api/guides/v1/spaces/list). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.",
  operationId: 'chat.spaces.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can\'t be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSpacesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces.readonly'],
    },
  ],
})

export const postV1SpacesRoute = createRoute({
  method: 'post',
  path: '/v1/spaces',
  tags: ['spaces'],
  description:
    "Creates a named space. Spaces grouped by topics aren't supported. For an example, see [Create a space](https://developers.google.com/chat/api/guides/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).",
  operationId: 'chat.spaces.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpaceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SpaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces.create'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces.create'],
    },
  ],
})

export const getV1SpacesFindDirectMessageRoute = createRoute({
  method: 'get',
  path: '/v1/spaces:findDirectMessage',
  tags: ['spaces'],
  description:
    'Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [user authentication](https://developers.google.com/chat/api/guides/auth/users), returns the direct message space between the specified user and the authenticated user. With [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts), returns the direct message space between the specified user and the calling Chat app. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users) or [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).',
  operationId: 'chat.spaces.findDirectMessage',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/chat/api/guides/auth/users), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SpaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces.readonly'],
    },
  ],
})

export const postV1SpacesSetupRoute = createRoute({
  method: 'post',
  path: '/v1/spaces:setup',
  tags: ['spaces'],
  description:
    "Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space](https://developers.google.com/chat/api/guides/v1/spaces/set-up). To specify the human members to add, add memberships with the appropriate `member.name` in the `SetUpSpaceRequest`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. For a space or group chat, if the caller blocks or is blocked by some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [create a membership](https://developers.google.com/chat/api/guides/v1/members/create). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).",
  operationId: 'chat.spaces.setup',
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
    body: { content: { 'application/json': { schema: SetUpSpaceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SpaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.spaces.create'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.spaces.create'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['spaces'],
  description:
    'Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). For an example, see [Get a message attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/get). Requires [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).',
  operationId: 'chat.spaces.messages.attachments.get',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the attachment, in the form `spaces/*/messages/*/attachments/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.readonly'],
    },
  ],
})

export const putV1NameRoute = createRoute({
  method: 'put',
  path: '/v1/{name}',
  tags: ['spaces'],
  description:
    "Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.",
  operationId: 'chat.spaces.messages.update',
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
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.",
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['spaces'],
  description:
    'Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/chat/api/guides/v1/reactions/delete). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).',
  operationId: 'chat.spaces.messages.reactions.delete',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/chat/api/guides/auth/users). Has no effect when [authenticating as a Chat app] (https://developers.google.com/chat/api/guides/auth/service-accounts).',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.reactions'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.reactions'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['spaces'],
  description:
    "Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.",
  operationId: 'chat.spaces.messages.patch',
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
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.",
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
  ],
})

export const postV1NameCompleteImportRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:completeImport',
  tags: ['spaces'],
  description:
    'Completes the [import process](https://developers.google.com/chat/api/guides/import-data) for the specified space and makes it visible to users. Requires app authentication and domain-wide delegation. For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/chat/api/guides/authorize-import).',
  operationId: 'chat.spaces.completeImport',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the import mode space. Format: `spaces/{space}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteImportSpaceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompleteImportSpaceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
  ],
})

export const postV1ParentAttachmentsUploadRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/attachments:upload',
  tags: ['media'],
  description:
    "Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/upload). Requires user [authentication](https://developers.google.com/chat/api/guides/auth/users). You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).",
  operationId: 'chat.media.upload',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: UploadAttachmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadAttachmentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.create'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.create'],
    },
  ],
})

export const getV1ParentMembersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/members',
  tags: ['spaces'],
  description:
    'Lists memberships in a space. For an example, see [List memberships](https://developers.google.com/chat/api/guides/v1/members/list). Listing memberships with [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/chat/api/guides/auth/users) lists memberships in spaces that the authenticated user has access to. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users).',
  operationId: 'chat.spaces.members.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A query filter. You can filter memberships by a member\'s role ([`role`](https://developers.google.com/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showGroups: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.",
            in: 'query',
            name: 'showGroups',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      showInvited: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).",
            in: 'query',
            name: 'showInvited',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMembershipsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.memberships'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.memberships'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.memberships.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.memberships.readonly'],
    },
  ],
})

export const postV1ParentMembersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/members',
  tags: ['spaces'],
  description:
    "Creates a human membership or app membership for the calling app. Creating memberships for other apps isn't supported. For an example, see [ Create a membership](https://developers.google.com/chat/api/guides/v1/members/create). When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). To specify the member to add, set the `membership.member.name` in the `CreateMembershipRequest`: - To add the calling app to a space or a direct message between two human users, use `users/app`. Unable to add other apps to the space. - To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.",
  operationId: 'chat.spaces.members.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the space for which to create the membership. Format: spaces/{space}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MembershipSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MembershipSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.memberships'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.memberships'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.memberships.app'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.memberships.app'],
    },
  ],
})

export const getV1ParentMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/messages',
  tags: ['spaces'],
  description:
    'Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. For an example, see [List messages](/chat/api/guides/v1/messages/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).',
  operationId: 'chat.spaces.messages.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > "2012-04-21T11:30:00-04:00" create_time > "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the space to list messages from. Format: `spaces/{space}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.readonly'],
    },
  ],
})

export const postV1ParentMessagesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/messages',
  tags: ['spaces'],
  description:
    'Creates a message in a Google Chat space. For an example, see [Create a message](https://developers.google.com/chat/api/guides/v1/messages/create). Calling this method requires [authentication](https://developers.google.com/chat/api/guides/auth) and supports the following authentication types: - For text messages, user authentication or app authentication are supported. - For card messages, only app authentication is supported. (Only Chat apps can create card messages.)',
  operationId: 'chat.spaces.messages.create',
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
      messageId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).",
            in: 'query',
            name: 'messageId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      messageReplyOption: z
        .enum([
          'MESSAGE_REPLY_OPTION_UNSPECIFIED',
          'REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD',
          'REPLY_MESSAGE_OR_FAIL',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.',
            in: 'query',
            name: 'messageReplyOption',
            schema: {
              enum: [
                'MESSAGE_REPLY_OPTION_UNSPECIFIED',
                'REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD',
                'REPLY_MESSAGE_OR_FAIL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      threadKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).',
            in: 'query',
            name: 'threadKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the space in which to create a message. Format: `spaces/{space}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.bot'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.bot'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.create'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.create'],
    },
  ],
})

export const getV1ParentReactionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/reactions',
  tags: ['spaces'],
  description:
    'Lists reactions to a message. For an example, see [List reactions](https://developers.google.com/chat/api/guides/v1/reactions/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).',
  operationId: 'chat.spaces.messages.reactions.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" AND user.name = "users/{user}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}") AND user.name = "users/{user}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" AND user.name = "users/{user}" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The message users reacted to. Format: `spaces/{space}/messages/{message}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReactionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.reactions'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.reactions'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.reactions.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.reactions.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.readonly'],
    },
  ],
})

export const postV1ParentReactionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/reactions',
  tags: ['spaces'],
  description:
    'Creates a reaction and adds it to a message. For an example, see [Create a reaction](https://developers.google.com/chat/api/guides/v1/reactions/create). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). Only unicode emoji are supported.',
  operationId: 'chat.spaces.messages.reactions.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReactionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReactionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.import'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.import'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.reactions'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.reactions'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chat.messages.reactions.create'],
      Oauth2c: ['https://www.googleapis.com/auth/chat.messages.reactions.create'],
    },
  ],
})
