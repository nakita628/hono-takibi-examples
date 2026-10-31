import { createRoute, z } from '@hono/zod-openapi'

const GoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesSchema = z
  .object({
    canRead: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can read related applied metadata on items.' }),
    canSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the user can search for Drive items referencing this field.',
      }),
    canWrite: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can set this field on Drive items.' }),
  })
  .openapi({
    description: 'The capabilities related to this field on applied metadata.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities')

const GoogleAppsDriveLabelsV2betaUserInfoSchema = z
  .object({
    person: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for this user that can be used with the People API to get more information. For example, people/12345678.',
      }),
  })
  .openapi({ description: 'Information about a user.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaUserInfo')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleAppsDriveLabelsV2betaFieldDateOptionsSchema = z
  .object({
    dateFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ICU date format.', readOnly: true }),
    dateFormatType: z
      .enum(['DATE_FORMAT_UNSPECIFIED', 'LONG_DATE', 'SHORT_DATE'])
      .exactOptional()
      .openapi({
        description:
          'Localized date formatting option. Field values are rendered in this format according to their locale.',
      }),
    maxValue: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Output only. Maximum valid value (year, month, day).',
      readOnly: true,
    }),
    minValue: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Output only. Minimum valid value (year, month, day).',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Options for the date field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldDateOptions')

const GoogleAppsDriveLabelsV2betaFieldDisplayHintsSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field should be shown in the UI as disabled.' }),
    hiddenInSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field should be hidden in the search menu when searching for Drive items.',
      }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field should be shown as required in the UI.' }),
    shownInApply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field should be shown in the apply menu when applying values to a Drive item.',
      }),
  })
  .openapi({ description: 'UI display hints for rendering a field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldDisplayHints')

const GoogleAppsDriveLabelsV2betaFieldIntegerOptionsSchema = z
  .object({
    maxValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The maximum valid value for the integer field.',
        readOnly: true,
      }),
    minValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The minimum valid value for the integer field.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Options for the Integer field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldIntegerOptions')

const GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicySchema = z
  .object({
    hideInSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items.',
      }),
    showInApply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI.',
      }),
  })
  .openapi({
    description:
      'The policy that governs how to treat a disabled label, field, or selection choice in different contexts.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy')

const GoogleAppsDriveLabelsV2betaLifecycleSchema = z
  .object({
    disabledPolicy:
      GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicySchema.exactOptional().openapi({
        description:
          'The policy that governs how to show a disabled label, field, or selection choice.',
      }),
    hasUnpublishedChanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the object associated with this lifecycle has unpublished changes.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'UNPUBLISHED_DRAFT', 'PUBLISHED', 'DISABLED', 'DELETED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of the object associated with this lifecycle.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLifecycle')

const GoogleAppsDriveLabelsV2betaLockStatusSchema = z
  .object({
    locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Contains information about whether a label component should be considered locked.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLockStatus')

const GoogleAppsDriveLabelsV2betaFieldPropertiesSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display text to show in the UI identifying this field.',
      }),
    insertBeforeField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list.',
      }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field should be marked as required.' }),
  })
  .openapi({ description: 'The basic properties of the field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldProperties')

const GoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesSchema = z
  .object({
    canDelete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can delete this field. The user must have permission and the field must be deprecated.',
      }),
    canDisable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can disable this field. The user must have permission and this field must not already be disabled.',
      }),
    canEnable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can enable this field. The user must have permission and this field must be disabled.',
      }),
    canUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can change this field.' }),
  })
  .openapi({
    description: 'The capabilities related to this field when editing the field.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities')

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchema: z.ZodType<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceType> =
  z
    .lazy(() =>
      z
        .object({
          appliedCapabilities:
            GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesSchema.exactOptional().openapi(
              {
                description:
                  'Output only. The capabilities related to this choice on applied metadata.',
                readOnly: true,
              },
            ),
          createTime: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Output only. The time this choice was created.',
              readOnly: true,
            }),
          creator: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
            description: 'Output only. The user who created this choice.',
            readOnly: true,
          }),
          disableTime: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled.',
              readOnly: true,
            }),
          disabler: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
            description:
              'Output only. The user who disabled this choice. This value has no meaning when the option is not disabled.',
            readOnly: true,
          }),
          displayHints:
            GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsSchema.exactOptional().openapi(
              {
                description: 'Output only. UI display hints for rendering a choice.',
                readOnly: true,
              },
            ),
          id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`.',
            }),
          lifecycle: GoogleAppsDriveLabelsV2betaLifecycleSchema.exactOptional().openapi({
            description: 'Output only. Lifecycle of the choice.',
            readOnly: true,
          }),
          lockStatus: GoogleAppsDriveLabelsV2betaLockStatusSchema.exactOptional().openapi({
            description: 'Output only. The LockStatus of this choice.',
            readOnly: true,
          }),
          properties:
            GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesSchema.exactOptional().openapi(
              { description: 'Basic properties of the choice.' },
            ),
          publishTime: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Output only. The time this choice was published. This value has no meaning when the choice is not published.',
              readOnly: true,
            }),
          publisher: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
            description:
              'Output only. The user who published this choice. This value has no meaning when the choice is not published.',
            readOnly: true,
          }),
          schemaCapabilities:
            GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesSchema.exactOptional().openapi(
              {
                description:
                  'Output only. The capabilities related to this option when editing the option.',
                readOnly: true,
              },
            ),
          updateTime: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Output only. The time this choice was updated last.',
              readOnly: true,
            }),
          updater: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
            description: 'Output only. The user who updated this choice last.',
            readOnly: true,
          }),
        })
        .openapi({ description: 'Selection field choice.', required: [] }),
    )
    .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice')

const GoogleAppsDriveLabelsV2betaFieldListOptionsSchema = z
  .object({
    maxEntries: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of entries permitted.' }),
  })
  .openapi({
    description: 'Options for a multi-valued variant of an associated field type.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldListOptions')

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsSchema = z
  .object({
    choices: z
      .array(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchema)
      .exactOptional()
      .openapi({
        description:
          'The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.',
      }),
    listOptions: GoogleAppsDriveLabelsV2betaFieldListOptionsSchema.exactOptional().openapi({
      description:
        'When specified, indicates this field supports a list of values. Once the field is published, this cannot be changed.',
    }),
  })
  .openapi({ description: 'Options for the selection field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptions')

const GoogleAppsDriveLabelsV2betaFieldTextOptionsSchema = z
  .object({
    maxLength: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The maximum valid length of values for the text field.',
        readOnly: true,
      }),
    minLength: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The minimum valid length of values for the text field.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Options for the Text field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldTextOptions')

const GoogleAppsDriveLabelsV2betaFieldUserOptionsSchema = z
  .object({
    listOptions: GoogleAppsDriveLabelsV2betaFieldListOptionsSchema.exactOptional().openapi({
      description:
        'When specified, indicates that this field supports a list of values. Once the field is published, this cannot be changed.',
    }),
  })
  .openapi({ description: 'Options for the user field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldUserOptions')

type GoogleAppsDriveLabelsV2betaFieldType = {
  appliedCapabilities?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesSchema>
  createTime?: string
  creator?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  dateOptions?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldDateOptionsSchema>
  disableTime?: string
  disabler?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  displayHints?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldDisplayHintsSchema>
  id?: string
  integerOptions?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldIntegerOptionsSchema>
  lifecycle?: z.infer<typeof GoogleAppsDriveLabelsV2betaLifecycleSchema>
  lockStatus?: z.infer<typeof GoogleAppsDriveLabelsV2betaLockStatusSchema>
  properties?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldPropertiesSchema>
  publisher?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  queryKey?: string
  schemaCapabilities?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesSchema>
  selectionOptions?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldSelectionOptionsSchema>
  textOptions?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldTextOptionsSchema>
  updateTime?: string
  updater?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  userOptions?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldUserOptionsSchema>
}

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesSchema = z
  .object({
    canRead: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can read related applied metadata on items.' }),
    canSearch: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can use this choice in search queries.' }),
    canSelect: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can select this choice on an item.' }),
  })
  .openapi({
    description: 'The capabilities related to this choice on applied metadata.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities')

const GoogleTypeColorSchema = z
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
      "Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...",
    required: [],
  })
  .openapi('GoogleTypeColor')

const GoogleAppsDriveLabelsV2betaBadgeColorsSchema = z
  .object({
    backgroundColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Output only. Badge background that pairs with the foreground.',
      readOnly: true,
    }),
    foregroundColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Output only. Badge foreground that pairs with the background.',
      readOnly: true,
    }),
    soloColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Output only. Color that can be used for text without a background.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'The color derived from BadgeConfig and changed to the closest recommended supported color.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaBadgeColors')

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsSchema = z
  .object({
    badgeColors: GoogleAppsDriveLabelsV2betaBadgeColorsSchema.exactOptional().openapi({
      description:
        'The colors to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.',
    }),
    badgePriority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority.',
      }),
    darkBadgeColors: GoogleAppsDriveLabelsV2betaBadgeColorsSchema.exactOptional().openapi({
      description:
        'The dark-mode color to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.',
    }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the option should be shown in the UI as disabled.' }),
    hiddenInSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This option should be hidden in the search menu when searching for Drive items.',
      }),
    shownInApply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This option should be shown in the apply menu when applying values to a Drive item.',
      }),
  })
  .openapi({ description: 'UI display hints for rendering an option.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints')

const GoogleAppsDriveLabelsV2betaBadgeConfigSchema = z
  .object({
    color: GoogleTypeColorSchema.exactOptional().openapi({
      description:
        'The color of the badge. When not specified, no badge is rendered. The background, foreground, and solo (light and dark mode) colors set here are changed in the Drive UI into the closest recommended supported color.',
    }),
    priorityOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Override the default global priority of this badge. When set to 0, the default priority heuristic is used.',
      }),
  })
  .openapi({ description: 'Badge status of the label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaBadgeConfig')

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesSchema = z
  .object({
    badgeConfig: GoogleAppsDriveLabelsV2betaBadgeConfigSchema.exactOptional().openapi({
      description:
        'The badge configuration for this choice. When set, the label that owns this choice is considered a "badged label".',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this label.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display text to show in the UI identifying this field.',
      }),
    insertBeforeChoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list.',
      }),
  })
  .openapi({ description: 'Basic properties of the choice.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties')

const GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesSchema = z
  .object({
    canDelete: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can delete this choice.' }),
    canDisable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can disable this choice.' }),
    canEnable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can enable this choice.' }),
    canUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can update this choice.' }),
  })
  .openapi({
    description: 'The capabilities related to this choice when editing the choice.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities')

type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceType = {
  appliedCapabilities?: z.infer<
    typeof GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesSchema
  >
  createTime?: string
  creator?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  disableTime?: string
  disabler?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  displayHints?: z.infer<
    typeof GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsSchema
  >
  id?: string
  lifecycle?: z.infer<typeof GoogleAppsDriveLabelsV2betaLifecycleSchema>
  lockStatus?: z.infer<typeof GoogleAppsDriveLabelsV2betaLockStatusSchema>
  properties?: z.infer<
    typeof GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesSchema
  >
  publishTime?: string
  publisher?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  schemaCapabilities?: z.infer<
    typeof GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesSchema
  >
  updateTime?: string
  updater?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
}

const GoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesSchema = z
  .object({
    canApply: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can apply this label to items.' }),
    canRead: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the user can read applied metadata related to this label.',
      }),
    canRemove: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can remove this label from items.' }),
  })
  .openapi({
    description: "The capabilities a user has on this label's applied metadata.",
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities')

const GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicySchema = z
  .object({
    copyMode: z
      .enum(['COPY_MODE_UNSPECIFIED', 'DO_NOT_COPY', 'ALWAYS_COPY', 'COPY_APPLIABLE'])
      .exactOptional()
      .openapi({
        description:
          'Indicates how the applied label and field values should be copied when a Drive item is copied.',
      }),
  })
  .openapi({
    description: "Behavior of this label when it's applied to Drive items.",
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy')

const GoogleAppsDriveLabelsV2betaLabelDisplayHintsSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the label should be shown in the UI as disabled.' }),
    hiddenInSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This label should be hidden in the search menu when searching for Drive items.',
      }),
    priority: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order to display label in a list.' }),
    shownInApply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This label should be shown in the apply menu when applying values to a Drive item.',
      }),
  })
  .openapi({ description: 'UI display hints for rendering the label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaLabelDisplayHints')

const GoogleAppsDriveLabelsV2betaFieldSchema: z.ZodType<GoogleAppsDriveLabelsV2betaFieldType> = z
  .lazy(() =>
    z
      .object({
        appliedCapabilities:
          GoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesSchema.exactOptional().openapi({
            description:
              'Output only. The capabilities this user has on this field and its value when the label is applied on Drive items.',
            readOnly: true,
          }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time this field was created.',
            readOnly: true,
          }),
        creator: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description: 'Output only. The user who created this field.',
          readOnly: true,
        }),
        dateOptions: GoogleAppsDriveLabelsV2betaFieldDateOptionsSchema.exactOptional().openapi({
          description: 'Date field options.',
        }),
        disableTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time this field was disabled. This value has no meaning when the field is not disabled.',
            readOnly: true,
          }),
        disabler: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description:
            'Output only. The user who disabled this field. This value has no meaning when the field is not disabled.',
          readOnly: true,
        }),
        displayHints: GoogleAppsDriveLabelsV2betaFieldDisplayHintsSchema.exactOptional().openapi({
          description: 'Output only. UI display hints for rendering a field.',
          readOnly: true,
        }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+`',
            readOnly: true,
          }),
        integerOptions:
          GoogleAppsDriveLabelsV2betaFieldIntegerOptionsSchema.exactOptional().openapi({
            description: 'Integer field options.',
          }),
        lifecycle: GoogleAppsDriveLabelsV2betaLifecycleSchema.exactOptional().openapi({
          description: 'Output only. The lifecycle of this field.',
          readOnly: true,
        }),
        lockStatus: GoogleAppsDriveLabelsV2betaLockStatusSchema.exactOptional().openapi({
          description: 'Output only. The LockStatus of this field.',
          readOnly: true,
        }),
        properties: GoogleAppsDriveLabelsV2betaFieldPropertiesSchema.exactOptional().openapi({
          description: 'The basic properties of the field.',
        }),
        publisher: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description:
            'Output only. The user who published this field. This value has no meaning when the field is not published.',
          readOnly: true,
        }),
        queryKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01".',
            readOnly: true,
          }),
        schemaCapabilities:
          GoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesSchema.exactOptional().openapi({
            description: 'Output only. The capabilities this user has when editing this field.',
            readOnly: true,
          }),
        selectionOptions:
          GoogleAppsDriveLabelsV2betaFieldSelectionOptionsSchema.exactOptional().openapi({
            description: 'Selection field options.',
          }),
        textOptions: GoogleAppsDriveLabelsV2betaFieldTextOptionsSchema.exactOptional().openapi({
          description: 'Text field options.',
        }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time this field was updated.',
            readOnly: true,
          }),
        updater: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description: 'Output only. The user who modified this field.',
          readOnly: true,
        }),
        userOptions: GoogleAppsDriveLabelsV2betaFieldUserOptionsSchema.exactOptional().openapi({
          description: 'User field options.',
        }),
      })
      .openapi({
        description:
          'Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.',
        required: [],
      }),
  )
  .openapi('GoogleAppsDriveLabelsV2betaField')

const GoogleAppsDriveLabelsV2betaLabelPropertiesSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the label.' }),
    title: z.string().exactOptional().openapi({ description: 'Required. Title of the label.' }),
  })
  .openapi({ description: 'Basic properties of the label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaLabelProperties')

const GoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesSchema = z
  .object({
    canDelete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can delete this label. The user must have permission and the label must be disabled.',
      }),
    canDisable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can disable this label. The user must have permission and this label must not already be disabled.',
      }),
    canEnable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can enable this label. The user must have permission and this label must be disabled.',
      }),
    canUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can change this label.' }),
  })
  .openapi({
    description: 'The capabilities related to this label when editing the label.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities')

type GoogleAppsDriveLabelsV2betaLabelType = {
  appliedCapabilities?: z.infer<typeof GoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesSchema>
  appliedLabelPolicy?: z.infer<typeof GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicySchema>
  createTime?: string
  creator?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  customer?: string
  disableTime?: string
  disabler?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  displayHints?: z.infer<typeof GoogleAppsDriveLabelsV2betaLabelDisplayHintsSchema>
  fields?: z.infer<typeof GoogleAppsDriveLabelsV2betaFieldSchema>[]
  id?: string
  labelType?: 'LABEL_TYPE_UNSPECIFIED' | 'SHARED' | 'ADMIN'
  learnMoreUri?: string
  lifecycle?: z.infer<typeof GoogleAppsDriveLabelsV2betaLifecycleSchema>
  lockStatus?: z.infer<typeof GoogleAppsDriveLabelsV2betaLockStatusSchema>
  name?: string
  properties?: z.infer<typeof GoogleAppsDriveLabelsV2betaLabelPropertiesSchema>
  publishTime?: string
  publisher?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  revisionCreateTime?: string
  revisionCreator?: z.infer<typeof GoogleAppsDriveLabelsV2betaUserInfoSchema>
  revisionId?: string
  schemaCapabilities?: z.infer<typeof GoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesSchema>
}

const GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Label Permission resource name.' }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
  })
  .openapi({
    description:
      'Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest')

const GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequestSchema = z
  .object({
    requests: z
      .array(GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Required. The request message specifying the resources to update.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field.",
      }),
  })
  .openapi({ description: 'Deletes one of more Label Permissions.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest')

const GoogleAppsDriveLabelsV2betaLabelPermissionSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.',
      }),
    group: z.string().exactOptional().openapi({ description: 'Group resource name.' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name of this permission.' }),
    person: z.string().exactOptional().openapi({ description: 'Person resource name.' }),
    role: z
      .enum(['LABEL_ROLE_UNSPECIFIED', 'READER', 'APPLIER', 'ORGANIZER', 'EDITOR'])
      .exactOptional()
      .openapi({ description: 'The role the principal should have.' }),
  })
  .openapi({
    description: 'The permission that applies to a principal (user, group, audience) on a label.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelPermission')

const GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequestSchema = z
  .object({
    labelPermission: GoogleAppsDriveLabelsV2betaLabelPermissionSchema.exactOptional().openapi({
      description: 'Required. The permission to create or update on the Label.',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent Label resource name.' }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
  })
  .openapi({
    description:
      'Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest')

const GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequestSchema = z
  .object({
    requests: z
      .array(GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Required. The request message specifying the resources to update.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field.",
      }),
  })
  .openapi({ description: 'Updates one or more Label Permissions.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest')

const GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(GoogleAppsDriveLabelsV2betaLabelPermissionSchema)
      .exactOptional()
      .openapi({ description: 'Required. Permissions updated.' }),
  })
  .openapi({ description: 'Response for updating one or more Label Permissions.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse')

const GoogleAppsDriveLabelsV2betaDateLimitsSchema = z
  .object({
    maxValue: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Maximum value for the date Field type.',
    }),
    minValue: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Minimum value for the date Field type.',
    }),
  })
  .openapi({ description: 'Limits for date Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDateLimits')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestSchema = z
  .object({
    field: GoogleAppsDriveLabelsV2betaFieldSchema.exactOptional().openapi({
      description: 'Required. Field to create.',
    }),
  })
  .openapi({ description: 'Request to create a Field within a Label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestSchema = z
  .object({
    choice: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchema.exactOptional().openapi({
      description: 'Required. The Choice to create.',
    }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The Selection Field in which a Choice will be created.' }),
  })
  .openapi({ description: 'Request to create a Selection Choice.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequestSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Required. ID of the Field to delete.' }),
  })
  .openapi({ description: 'Request to delete the Field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequestSchema = z
  .object({
    fieldId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The Selection Field from which a Choice will be deleted.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Required. Choice to delete.' }),
  })
  .openapi({ description: 'Request to delete a Choice.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequestSchema = z
  .object({
    disabledPolicy:
      GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicySchema.exactOptional().openapi({
        description: 'Required. Field Disabled Policy.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Key of the Field to disable.' }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: 'Request to disable the Field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequestSchema = z
  .object({
    disabledPolicy:
      GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicySchema.exactOptional().openapi({
        description: 'Required. The disabled policy to update.',
      }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The Selection Field in which a Choice will be disabled.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Required. Choice to disable.' }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: 'Request to disable a Choice.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequestSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Required. ID of the Field to enable.' }),
  })
  .openapi({ description: 'Request to enable the Field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequestSchema = z
  .object({
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The Selection Field in which a Choice will be enabled.' }),
    id: z.string().exactOptional().openapi({ description: 'Required. Choice to enable.' }),
  })
  .openapi({ description: 'Request to enable a Choice.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequestSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Required. The Field to update.' }),
    properties: GoogleAppsDriveLabelsV2betaFieldPropertiesSchema.exactOptional().openapi({
      description: 'Required. Basic Field properties.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: 'Request to update Field properties.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest')

const GoogleAppsDriveLabelsV2betaFieldLongTextOptionsSchema = z
  .object({
    maxLength: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The maximum valid length of values for the text field.',
        readOnly: true,
      }),
    minLength: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The minimum valid length of values for the text field.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Options the Long Text field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaFieldLongTextOptions')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestSchema = z
  .object({
    dateOptions: GoogleAppsDriveLabelsV2betaFieldDateOptionsSchema.exactOptional().openapi({
      description: 'Update field to Date.',
    }),
    id: z.string().exactOptional().openapi({ description: 'Required. The Field to update.' }),
    integerOptions: GoogleAppsDriveLabelsV2betaFieldIntegerOptionsSchema.exactOptional().openapi({
      description: 'Update field to Integer.',
    }),
    longTextOptions: GoogleAppsDriveLabelsV2betaFieldLongTextOptionsSchema.exactOptional().openapi({
      description: 'Update field to Long Text.',
    }),
    selectionOptions:
      GoogleAppsDriveLabelsV2betaFieldSelectionOptionsSchema.exactOptional().openapi({
        description: 'Update field to Selection.',
      }),
    textOptions: GoogleAppsDriveLabelsV2betaFieldTextOptionsSchema.exactOptional().openapi({
      description: 'Update field to Text.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
    userOptions: GoogleAppsDriveLabelsV2betaFieldUserOptionsSchema.exactOptional().openapi({
      description: 'Update field to User.',
    }),
  })
  .openapi({ description: 'Request to change the type of a Field.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequestSchema = z
  .object({
    properties: GoogleAppsDriveLabelsV2betaLabelPropertiesSchema.exactOptional().openapi({
      description: 'Required. Label properties to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: 'Updates basic properties of a Label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestSchema =
  z
    .object({
      fieldId: z
        .string()
        .exactOptional()
        .openapi({ description: 'Required. The Selection Field to update.' }),
      id: z.string().exactOptional().openapi({ description: 'Required. The Choice to update.' }),
      properties:
        GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesSchema.exactOptional().openapi(
          { description: 'Required. The Choice properties to update.' },
        ),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
        }),
    })
    .openapi({ description: 'Request to update a Choice properties.', required: [] })
    .openapi(
      'GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest',
    )

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestSchema = z
  .object({
    createField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestSchema.exactOptional().openapi(
        { description: 'Creates a new Field.' },
      ),
    createSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestSchema.exactOptional().openapi(
        { description: 'Creates Choice within a Selection field.' },
      ),
    deleteField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequestSchema.exactOptional().openapi(
        { description: 'Deletes a Field from the label.' },
      ),
    deleteSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequestSchema.exactOptional().openapi(
        { description: 'Delete a Choice within a Selection Field.' },
      ),
    disableField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequestSchema.exactOptional().openapi(
        { description: 'Disables the Field.' },
      ),
    disableSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequestSchema.exactOptional().openapi(
        { description: 'Disable a Choice within a Selection Field.' },
      ),
    enableField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequestSchema.exactOptional().openapi(
        { description: 'Enables the Field.' },
      ),
    enableSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequestSchema.exactOptional().openapi(
        { description: 'Enable a Choice within a Selection Field.' },
      ),
    updateField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequestSchema.exactOptional().openapi(
        { description: 'Updates basic properties of a Field.' },
      ),
    updateFieldType:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestSchema.exactOptional().openapi(
        { description: 'Update Field type and/or type options.' },
      ),
    updateLabel:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequestSchema.exactOptional().openapi(
        { description: 'Updates the Label properties.' },
      ),
    updateSelectionChoiceProperties:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestSchema.exactOptional().openapi(
        { description: 'Update a Choice properties within a Selection Field.' },
      ),
  })
  .openapi({ description: 'A single kind of update to apply to a Label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest')

const GoogleAppsDriveLabelsV2betaWriteControlSchema = z
  .object({
    requiredRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.',
      }),
  })
  .openapi({
    description:
      'Provides control over how write requests are executed. When not specified, the last write wins.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaWriteControl')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`.',
      }),
    requests: z
      .array(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of updates to apply to the Label. Requests will be applied in the order they are specified.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
    view: z
      .enum(['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'])
      .exactOptional()
      .openapi({
        description:
          'When specified, only certain fields belonging to the indicated view will be returned.',
      }),
    writeControl: GoogleAppsDriveLabelsV2betaWriteControlSchema.exactOptional().openapi({
      description: 'Provides control over how write requests are executed.',
    }),
  })
  .openapi({
    description:
      'The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here.',
      }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).',
      }),
  })
  .openapi({ description: 'Response following Field create.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponseSchema = z
  .object({
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server-generated id of the field.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server-generated ID of the created choice within the Field' }),
  })
  .openapi({ description: 'Response following Selection Choice create.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Field delete.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Choice delete.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Field disable.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Choice disable.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Field enable.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponseSchema = z
  .object({})
  .openapi({ description: 'Response following Choice enable.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponseSchema = z
  .object({
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).',
      }),
  })
  .openapi({ description: 'Response following update to Field properties.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponseSchema = z
  .object({})
  .openapi({ description: 'Response following update to Field type.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponseSchema = z
  .object({})
  .openapi({ description: 'Response following update to Label properties.' })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseSchema =
  z
    .object({
      priority: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).',
        }),
    })
    .openapi({
      description: 'Response following update to Selection Choice properties.',
      required: [],
    })
    .openapi(
      'GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse',
    )

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponseSchema = z
  .object({
    createField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponseSchema.exactOptional().openapi(
        { description: 'Creates a new Field.' },
      ),
    createSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponseSchema.exactOptional().openapi(
        { description: 'Creates a new selection list option to add to a Selection Field.' },
      ),
    deleteField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponseSchema.exactOptional().openapi(
        { description: 'Deletes a Field from the label.' },
      ),
    deleteSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponseSchema.exactOptional().openapi(
        { description: 'Deletes a Choice from a Selection Field.' },
      ),
    disableField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponseSchema.exactOptional().openapi(
        { description: 'Disables Field.' },
      ),
    disableSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponseSchema.exactOptional().openapi(
        { description: 'Disables a Choice within a Selection Field.' },
      ),
    enableField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponseSchema.exactOptional().openapi(
        { description: 'Enables Field.' },
      ),
    enableSelectionChoice:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponseSchema.exactOptional().openapi(
        { description: 'Enables a Choice within a Selection Field.' },
      ),
    updateField:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponseSchema.exactOptional().openapi(
        { description: 'Updates basic properties of a Field.' },
      ),
    updateFieldType:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponseSchema.exactOptional().openapi(
        { description: 'Update Field type and/or type options.' },
      ),
    updateLabel:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponseSchema.exactOptional().openapi(
        { description: 'Updated basic properties of a Label.' },
      ),
    updateSelectionChoiceProperties:
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseSchema.exactOptional().openapi(
        { description: 'Updates a Choice within a Selection Field.' },
      ),
  })
  .openapi({ description: 'A single response from an update.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse')

const GoogleAppsDriveLabelsV2betaLabelSchema: z.ZodType<GoogleAppsDriveLabelsV2betaLabelType> = z
  .lazy(() =>
    z
      .object({
        appliedCapabilities:
          GoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesSchema.exactOptional().openapi({
            description: 'Output only. The capabilities related to this label on applied metadata.',
            readOnly: true,
          }),
        appliedLabelPolicy:
          GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicySchema.exactOptional().openapi({
            description: "Output only. Behavior of this label when it's applied to Drive items.",
            readOnly: true,
          }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time this label was created.',
            readOnly: true,
          }),
        creator: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description: 'Output only. The user who created this label.',
          readOnly: true,
        }),
        customer: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The customer this label belongs to. For example: "customers/123abc789."',
            readOnly: true,
          }),
        disableTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time this label was disabled. This value has no meaning when the label is not disabled.',
            readOnly: true,
          }),
        disabler: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description:
            'Output only. The user who disabled this label. This value has no meaning when the label is not disabled.',
          readOnly: true,
        }),
        displayHints: GoogleAppsDriveLabelsV2betaLabelDisplayHintsSchema.exactOptional().openapi({
          description: 'Output only. UI display hints for rendering the label.',
          readOnly: true,
        }),
        fields: z
          .array(GoogleAppsDriveLabelsV2betaFieldSchema)
          .exactOptional()
          .openapi({ description: 'List of fields in descending priority order.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`',
            readOnly: true,
          }),
        labelType: z
          .enum(['LABEL_TYPE_UNSPECIFIED', 'SHARED', 'ADMIN'])
          .exactOptional()
          .openapi({ description: 'Required. The type of label.' }),
        learnMoreUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Custom URL to present to users to allow them to learn more about this label and how it should be used.',
          }),
        lifecycle: GoogleAppsDriveLabelsV2betaLifecycleSchema.exactOptional().openapi({
          description:
            "Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes.",
          readOnly: true,
        }),
        lockStatus: GoogleAppsDriveLabelsV2betaLockStatusSchema.exactOptional().openapi({
          description: 'Output only. The LockStatus of this label.',
          readOnly: true,
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below.',
            readOnly: true,
          }),
        properties: GoogleAppsDriveLabelsV2betaLabelPropertiesSchema.exactOptional().openapi({
          description: 'Required. The basic properties of the label.',
        }),
        publishTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time this label was published. This value has no meaning when the label is not published.',
            readOnly: true,
          }),
        publisher: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description:
            'Output only. The user who published this label. This value has no meaning when the label is not published.',
          readOnly: true,
        }),
        revisionCreateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time this label revision was created.',
            readOnly: true,
          }),
        revisionCreator: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
          description: 'Output only. The user who created this label revision.',
          readOnly: true,
        }),
        revisionId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`',
            readOnly: true,
          }),
        schemaCapabilities:
          GoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesSchema.exactOptional().openapi({
            description: 'Output only. The capabilities the user has on this label.',
            readOnly: true,
          }),
      })
      .openapi({
        description:
          'A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.',
        required: [],
      }),
  )
  .openapi('GoogleAppsDriveLabelsV2betaLabel')

const GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseSchema = z
  .object({
    responses: z
      .array(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.',
      }),
    updatedLabel: GoogleAppsDriveLabelsV2betaLabelSchema.exactOptional().openapi({
      description:
        'The label after updates were applied. This is only set if [BatchUpdateLabelResponse2.include_label_in_response] is `true` and there were no errors.',
    }),
  })
  .openapi({ description: 'Response for Label update.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse')

const GoogleAppsDriveLabelsV2betaDisableLabelRequestSchema = z
  .object({
    disabledPolicy:
      GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicySchema.exactOptional().openapi({
        description: 'Disabled policy to use.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
    writeControl: GoogleAppsDriveLabelsV2betaWriteControlSchema.exactOptional().openapi({
      description:
        'Provides control over how write requests are executed. Defaults to unset, which means last write wins.',
    }),
  })
  .openapi({ description: 'Request to deprecate a published Label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaDisableLabelRequest')

const GoogleAppsDriveLabelsV2betaEnableLabelRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
    writeControl: GoogleAppsDriveLabelsV2betaWriteControlSchema.exactOptional().openapi({
      description:
        'Provides control over how write requests are executed. Defaults to unset, which means last write wins.',
    }),
  })
  .openapi({ description: 'Request to enable a label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaEnableLabelRequest')

const GoogleAppsDriveLabelsV2betaIntegerLimitsSchema = z
  .object({
    maxValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum value for an integer Field type.' }),
    minValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum value for an integer Field type.' }),
  })
  .openapi({ description: 'Limits for integer Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaIntegerLimits')

const GoogleAppsDriveLabelsV2betaLongTextLimitsSchema = z
  .object({
    maxLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum length allowed for a long text Field type.' }),
    minLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum length allowed for a long text Field type.' }),
  })
  .openapi({ description: 'Limits for long text Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaLongTextLimits')

const GoogleAppsDriveLabelsV2betaListLimitsSchema = z
  .object({
    maxEntries: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of values allowed for the Field type.' }),
  })
  .openapi({ description: 'Limits for list-variant of a Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaListLimits')

const GoogleAppsDriveLabelsV2betaSelectionLimitsSchema = z
  .object({
    listLimits: GoogleAppsDriveLabelsV2betaListLimitsSchema.exactOptional().openapi({
      description: 'Limits for list-variant of a Field type.',
    }),
    maxChoices: z.int32().exactOptional().openapi({ description: 'The max number of choices.' }),
    maxDeletedChoices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of deleted choices.' }),
    maxDisplayNameLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum length for display name.' }),
    maxIdLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum ID length for a selection options.' }),
  })
  .openapi({ description: 'Limits for selection Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaSelectionLimits')

const GoogleAppsDriveLabelsV2betaTextLimitsSchema = z
  .object({
    maxLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum length allowed for a text Field type.' }),
    minLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum length allowed for a text Field type.' }),
  })
  .openapi({ description: 'Limits for text Field type.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaTextLimits')

const GoogleAppsDriveLabelsV2betaUserLimitsSchema = z
  .object({
    listLimits: GoogleAppsDriveLabelsV2betaListLimitsSchema.exactOptional().openapi({
      description: 'Limits for list-variant of a Field type.',
    }),
  })
  .openapi({ description: 'Limits for Field.Type.USER.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaUserLimits')

const GoogleAppsDriveLabelsV2betaFieldLimitsSchema = z
  .object({
    dateLimits: GoogleAppsDriveLabelsV2betaDateLimitsSchema.exactOptional().openapi({
      description: 'Date Field limits.',
    }),
    integerLimits: GoogleAppsDriveLabelsV2betaIntegerLimitsSchema.exactOptional().openapi({
      description: 'Integer Field limits.',
    }),
    longTextLimits: GoogleAppsDriveLabelsV2betaLongTextLimitsSchema.exactOptional().openapi({
      description: 'Long text Field limits.',
    }),
    maxDescriptionLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Limits for Field description, also called help text.' }),
    maxDisplayNameLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Limits for Field title.' }),
    maxIdLength: z.int32().exactOptional().openapi({ description: 'Max length for the id.' }),
    selectionLimits: GoogleAppsDriveLabelsV2betaSelectionLimitsSchema.exactOptional().openapi({
      description: 'Selection Field limits.',
    }),
    textLimits: GoogleAppsDriveLabelsV2betaTextLimitsSchema.exactOptional().openapi({
      description: 'The relevant limits for the specified Field.Type. Text Field limits.',
    }),
    userLimits: GoogleAppsDriveLabelsV2betaUserLimitsSchema.exactOptional().openapi({
      description: 'User Field limits.',
    }),
  })
  .openapi({
    description:
      'Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaFieldLimits')

const GoogleAppsDriveLabelsV2betaLabelLimitsSchema = z
  .object({
    fieldLimits: GoogleAppsDriveLabelsV2betaFieldLimitsSchema.exactOptional().openapi({
      description: 'The limits for Fields.',
    }),
    maxDeletedFields: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of published Fields that can be deleted.' }),
    maxDescriptionLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of characters allowed for the description.' }),
    maxDraftRevisions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of draft revisions that will be kept before deleting old drafts.',
      }),
    maxFields: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of Fields allowed within the label.' }),
    maxTitleLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of characters allowed for the title.' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
  })
  .openapi({
    description:
      'Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelLimits')

const GoogleAppsDriveLabelsV2betaLabelLockCapabilitiesSchema = z
  .object({
    canViewPolicy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the user is authorized to view the policy.' }),
  })
  .openapi({ description: "A description of a user's capabilities on a LabelLock.", required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaLabelLockCapabilities')

const GoogleAppsDriveLabelsV2betaLabelLockSchema = z
  .object({
    capabilities: GoogleAppsDriveLabelsV2betaLabelLockCapabilitiesSchema.exactOptional().openapi({
      description: "Output only. The user's capabilities on this LabelLock.",
      readOnly: true,
    }),
    choiceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time this LabelLock was created.',
        readOnly: true,
      }),
    creator: GoogleAppsDriveLabelsV2betaUserInfoSchema.exactOptional().openapi({
      description:
        'Output only. The user whose credentials were used to create the LabelLock. This will not be present if no user was responsible for creating the LabelLock.',
      readOnly: true,
    }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state.',
        readOnly: true,
      }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Field that should be locked. Empty if the whole Label should be locked.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource name of this LabelLock.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'DELETING'])
      .exactOptional()
      .openapi({ description: "Output only. This LabelLock's state.", readOnly: true }),
  })
  .openapi({
    description: 'A Lock that can be applied to a Label, Field, or Choice.',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaLabelLock')

const GoogleAppsDriveLabelsV2betaListLabelLocksResponseSchema = z
  .object({
    labelLocks: z
      .array(GoogleAppsDriveLabelsV2betaLabelLockSchema)
      .exactOptional()
      .openapi({ description: 'LabelLocks.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token of the next page in the response.' }),
  })
  .openapi({ description: 'The response to a ListLabelLocksRequest.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaListLabelLocksResponse')

const GoogleAppsDriveLabelsV2betaListLabelPermissionsResponseSchema = z
  .object({
    labelPermissions: z
      .array(GoogleAppsDriveLabelsV2betaLabelPermissionSchema)
      .exactOptional()
      .openapi({ description: 'Label permissions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token of the next page in the response.' }),
  })
  .openapi({ description: 'Response for listing the permissions on a Label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse')

const GoogleAppsDriveLabelsV2betaListLabelsResponseSchema = z
  .object({
    labels: z
      .array(GoogleAppsDriveLabelsV2betaLabelSchema)
      .exactOptional()
      .openapi({ description: 'Labels.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token of the next page in the response.' }),
  })
  .openapi({ description: 'Response for listing Labels.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaListLabelsResponse')

const GoogleAppsDriveLabelsV2betaPublishLabelRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
    writeControl: GoogleAppsDriveLabelsV2betaWriteControlSchema.exactOptional().openapi({
      description:
        'Provides control over how write requests are executed. Defaults to unset, which means last write wins.',
    }),
  })
  .openapi({ description: 'Request to publish a label.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaPublishLabelRequest')

const GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestSchema = z
  .object({
    copyMode: z
      .enum(['COPY_MODE_UNSPECIFIED', 'DO_NOT_COPY', 'ALWAYS_COPY', 'COPY_APPLIABLE'])
      .exactOptional()
      .openapi({
        description:
          'Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.',
      }),
    useAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
      }),
    view: z
      .enum(['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'])
      .exactOptional()
      .openapi({
        description:
          'When specified, only certain fields belonging to the indicated view will be returned.',
      }),
  })
  .openapi({
    description:
      'Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \\',
    required: [],
  })
  .openapi('GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest')

const GoogleAppsDriveLabelsV2betaUserCapabilitiesSchema = z
  .object({
    canAccessLabelManager: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the user is allowed access to the label manager.',
        readOnly: true,
      }),
    canAdministrateLabels: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the user is an administrator for the shared labels feature.',
        readOnly: true,
      }),
    canCreateAdminLabels: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the user is allowed to create new admin labels.',
        readOnly: true,
      }),
    canCreateSharedLabels: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the user is allowed to create new shared labels.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Resource name for the user capabilities.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The capabilities of a user.', required: [] })
  .openapi('GoogleAppsDriveLabelsV2betaUserCapabilities')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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

export const getV2betaLabelsRoute = createRoute({
  method: 'get',
  path: '/v2beta/labels',
  tags: ['labels'],
  description: 'List labels.',
  operationId: 'drivelabels.labels.list',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.',
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minimumRole: z
        .enum(['LABEL_ROLE_UNSPECIFIED', 'READER', 'APPLIER', 'ORGANIZER', 'EDITOR'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.',
            in: 'query',
            name: 'minimumRole',
            schema: {
              enum: ['LABEL_ROLE_UNSPECIFIED', 'READER', 'APPLIER', 'ORGANIZER', 'EDITOR'],
              type: 'string',
            },
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
            description: 'Maximum number of labels to return per page. Default: 50. Max: 200.',
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
            description: 'The token of the page to return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishedOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).",
            in: 'query',
            name: 'publishedOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.",
            in: 'query',
            name: 'useAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      view: z
        .enum(['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only certain fields belonging to the indicated view are returned.',
            in: 'query',
            name: 'view',
            schema: { enum: ['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaListLabelsResponseSchema },
      },
    },
  },
})

export const postV2betaLabelsRoute = createRoute({
  method: 'post',
  path: '/v2beta/labels',
  tags: ['labels'],
  description: 'Creates a new Label.',
  operationId: 'drivelabels.labels.create',
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
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } },
    },
  },
})

export const getV2betaLimitsLabelRoute = createRoute({
  method: 'get',
  path: '/v2beta/limits/label',
  tags: ['limits'],
  description:
    'Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.',
  operationId: 'drivelabels.limits.getLabel',
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
            description: 'Required. Label revision resource name Must be: "limits/label"',
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
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelLimitsSchema } },
    },
  },
})

export const getV2betaNameRoute = createRoute({
  method: 'get',
  path: '/v2beta/{name}',
  tags: ['users'],
  description: 'Gets the user capabilities.',
  operationId: 'drivelabels.users.getCapabilities',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.',
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      view: z
        .enum(['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only certain fields belonging to the indicated view are returned.',
            in: 'query',
            name: 'view',
            schema: { enum: ['LABEL_VIEW_BASIC', 'LABEL_VIEW_FULL'], type: 'string' },
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
              'Required. The resource name of the user. Only "users/me/capabilities" is supported.',
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
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaUserCapabilitiesSchema },
      },
    },
  },
})

export const deleteV2betaNameRoute = createRoute({
  method: 'delete',
  path: '/v2beta/{name}',
  tags: ['labels'],
  description:
    "Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.",
  operationId: 'drivelabels.labels.revisions.permissions.delete',
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
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'writeControl.requiredRevisionId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.',
            in: 'query',
            name: 'writeControl.requiredRevisionId',
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
            description: 'Required. Label Permission resource name.',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
})

export const postV2betaNameDeltaRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:delta',
  tags: ['labels'],
  description:
    'Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.',
  operationId: 'drivelabels.labels.delta',
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
            description: 'Required. The resource name of the Label to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseSchema },
      },
    },
  },
})

export const postV2betaNameDisableRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:disable',
  tags: ['labels'],
  description:
    'Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.',
  operationId: 'drivelabels.labels.disable',
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
            description: 'Required. Label resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaDisableLabelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } },
    },
  },
})

export const postV2betaNameEnableRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:enable',
  tags: ['labels'],
  description:
    'Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.',
  operationId: 'drivelabels.labels.enable',
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
            description: 'Required. Label resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaEnableLabelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } },
    },
  },
})

export const postV2betaNamePublishRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:publish',
  tags: ['labels'],
  description:
    'Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.',
  operationId: 'drivelabels.labels.publish',
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
            description: 'Required. Label resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaPublishLabelRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } },
    },
  },
})

export const postV2betaNameUpdateLabelCopyModeRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:updateLabelCopyMode',
  tags: ['labels'],
  description:
    "Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.",
  operationId: 'drivelabels.labels.updateLabelCopyMode',
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
            description: 'Required. The resource name of the Label to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelSchema } },
    },
  },
})

export const getV2betaParentLocksRoute = createRoute({
  method: 'get',
  path: '/v2beta/{parent}/locks',
  tags: ['labels'],
  description: 'Lists the LabelLocks on a Label.',
  operationId: 'drivelabels.labels.revisions.locks.list',
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
            description: 'Maximum number of Locks to return per page. Default: 100. Max: 200.',
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
            description: 'The token of the page to return.',
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
            description: 'Required. Label on which Locks are applied. Format: labels/{label}',
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
      content: {
        'application/json': { schema: GoogleAppsDriveLabelsV2betaListLabelLocksResponseSchema },
      },
    },
  },
})

export const getV2betaParentPermissionsRoute = createRoute({
  method: 'get',
  path: '/v2beta/{parent}/permissions',
  tags: ['labels'],
  description: "Lists a Label's permissions.",
  operationId: 'drivelabels.labels.revisions.permissions.list',
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
            description: 'Maximum number of permissions to return per page. Default: 50. Max: 200.',
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
            description: 'The token of the page to return.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
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
              'Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}',
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
      content: {
        'application/json': {
          schema: GoogleAppsDriveLabelsV2betaListLabelPermissionsResponseSchema,
        },
      },
    },
  },
})

export const postV2betaParentPermissionsRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/permissions',
  tags: ['labels'],
  description:
    "Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.",
  operationId: 'drivelabels.labels.revisions.permissions.create',
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
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
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
              'Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelPermissionSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelPermissionSchema } },
    },
  },
})

export const patchV2betaParentPermissionsRoute = createRoute({
  method: 'patch',
  path: '/v2beta/{parent}/permissions',
  tags: ['labels'],
  description:
    "Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.",
  operationId: 'drivelabels.labels.revisions.updatePermissions',
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
      useAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.",
            in: 'query',
            name: 'useAdminAccess',
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
            description: 'Required. The parent Label resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelPermissionSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAppsDriveLabelsV2betaLabelPermissionSchema } },
    },
  },
})

export const postV2betaParentPermissionsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/permissions:batchDelete',
  tags: ['labels'],
  description:
    'Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.',
  operationId: 'drivelabels.labels.revisions.permissions.batchDelete',
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
              'Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
})

export const postV2betaParentPermissionsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/permissions:batchUpdate',
  tags: ['labels'],
  description:
    "Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.",
  operationId: 'drivelabels.labels.revisions.permissions.batchUpdate',
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
              'Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponseSchema,
        },
      },
    },
  },
})
