import { createRoute, z } from '@hono/zod-openapi'

const RootUIComponentRequestSchema = z
  .object({
    expires_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time (in ISO 8601 date format) when the request should expire.',
        example: '2019-04-15T01:01:46.055Z',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user GID this hook is coming from.', example: '54321' }),
    workspace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The workspace GID this hook is coming from.', example: '12345' }),
  })
  .openapi({ description: 'The building block of all app component requests.', required: [] })
  .openapi('RootUIComponentRequest')

const FormOnChangeFormSubmissionRequestSchema = z
  .object({
    values: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'An object that maps each FormField’s GID to its value.\nRefer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)',
        example: {
          checkbox_field_1: ['opt-in'],
          date_field_1: '2021-12-31T08:00:00.000Z',
          datetime_field_1: '2023-01-01T00:00:00.000Z',
          dropdown_field_1: 'red',
          multi_line_text_field_1: 'Multiline Text',
          radio_button_field_1: 'blue',
          rich_text_field_1: '<BODY>Rich Text</BODY>',
          single_line_text_field_1: 'Single Line Text',
          static_text_field_1: 'Static Text',
          typeahead_field_1: {
            icon_url: 'https://example.com/icon.png',
            subtitle: 'Subtitle',
            title: 'Title',
            value: 'Typeahead',
          },
        },
      }),
  })
  .openapi({
    description: 'Common properties between app component on change and on submit requests.',
    required: [],
  })
  .openapi('FormOnChangeFormSubmissionRequest')

type FormSubmissionRequestType = z.infer<typeof RootUIComponentRequestSchema> &
  z.infer<typeof FormOnChangeFormSubmissionRequestSchema> & { task?: string }

const AttachResourceRequestSchema = RootUIComponentRequestSchema.and(
  z
    .object({
      task: z
        .string()
        .exactOptional()
        .openapi({ description: 'The task GID this hook is coming from.' }),
      attachment: z
        .string()
        .exactOptional()
        .openapi({ description: 'The attachment ID of the URL attachment' }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The user’s input in the lookup text input. This is often a resource URL or resource key, such as `"CP-1"` or `"https://abcde.atlassian.net/browse/CP-1"`',
        }),
    })
    .openapi({ description: 'The body of an attach request.', required: [] }),
).openapi('AttachResourceRequest')

const AttachedResourceResponseSchema = z
  .object({
    resource_name: z
      .string()
      .openapi({ description: 'The name of the attached resource', example: 'Build the Thing' }),
    resource_url: z
      .string()
      .openapi({
        description: 'The URL of the attached resource',
        example: 'https://example.atlassian.net/browse/CP-1',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error that should be displayed to the user',
        example: 'No resource matched that input',
      }),
  })
  .openapi({
    description: 'The response to a successful lookup request.',
    required: ['resource_name', 'resource_url'],
  })
  .openapi('AttachedResourceResponse')

const BadRequestResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error to display.', example: 'Illegal or malformed request.' }),
  })
  .openapi({
    description:
      'An error response object indicating a bad request (i.e., a status code of `400`).',
    required: [],
  })
  .openapi('BadRequestResponse')

const CheckboxOptionSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the option.', example: 'opt-in' }),
    label: z
      .string()
      .openapi({ description: 'The label of the option. Limit 80 characters.', example: 'Opt in' }),
  })
  .openapi({
    description: "An option for a checkbox field (i.e., an object in the field's `options` array).",
    required: ['id', 'label'],
  })
  .openapi('CheckboxOption')

const DropdownOptionSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the option.', example: 'red' }),
    label: z
      .string()
      .openapi({ description: 'The label of the option. Limit 80 characters.', example: 'Red' }),
    icon_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The URL for the icon beside the label. If not present, no icon will be displayed.',
        example: 'https://example.com/red.png',
      }),
  })
  .openapi({
    description: "An option for a dropdown field (i.e., an object in the field's `options` array).",
    required: ['id', 'label'],
  })
  .openapi('DropdownOption')

const ForbiddenResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error to display.', example: 'Access forbidden.' }),
  })
  .openapi({
    description:
      'An error response object indicating a forbidden request (i.e., a status code of `403`).',
    required: [],
  })
  .openapi('ForbiddenResponse')

const InternalServerErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error to display.', example: 'Internal server error.' }),
  })
  .openapi({
    description:
      'An error response object indicating a request that could not be found (i.e., a status code of `500`).',
    required: [],
  })
  .openapi('InternalServerErrorResponse')

const FormFieldStaticTextSchema = z
  .object({
    type: z
      .literal('static_text')
      .openapi({ description: 'The type of modal form field.', example: 'static_text' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'static_text_field_1',
      }),
    name: z
      .string()
      .openapi({
        description: 'The text (i.e., label) for the field. Limit 50 characters.',
        example: 'Please enter the following details:',
      }),
    style: z
      .enum(['default', 'header'])
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The style of the field. If not provided, the default value will be `"default"`.',
        example: 'default',
      }),
  })
  .openapi({
    description:
      'A modal form "field" that displays static text. Fields of this type do not collect user input.',
    required: ['id', 'type', 'name'],
  })
  .openapi('FormFieldStaticText')

const FormFieldSingleLineTextSchema = z
  .object({
    type: z
      .literal('single_line_text')
      .openapi({ description: 'The type of modal form field.', example: 'single_line_text' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'single_line_text_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    placeholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.',
        example: 'Enter the full title of the resource here',
      }),
    width: z
      .enum(['full', 'half'])
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The width of the form field. If not provided, the default value will be `"full"`.',
        example: 'full',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 200 characters.',
        example: 'Annual Kick-Off Meeting',
      }),
  })
  .openapi({
    description: 'A modal form field that accepts single-line text input.',
    required: ['id', 'type'],
  })
  .openapi('FormFieldSingleLineText')

const FormFieldMultiLineTextSchema = z
  .object({
    type: z
      .literal('multi_line_text')
      .openapi({ description: 'The type of modal form field.', example: 'multi_line_text' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'multi_line_text_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    placeholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.',
        example: 'Enter the full title of the resource here',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 3000 characters.',
        example: 'Annual Kick-Off Meeting',
      }),
  })
  .openapi({
    description: 'A modal form field that accepts multi-line text input.',
    required: ['id', 'type'],
  })
  .openapi('FormFieldMultiLineText')

const FormFieldRichTextSchema = z
  .object({
    type: z
      .literal('rich_text')
      .openapi({ description: 'The type of modal form field.', example: 'rich_text' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'rich_text_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    placeholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.',
        example: 'Enter the full title of the resource here',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 3000 characters.',
        example: 'Annual Kick-Off Meeting',
      }),
  })
  .openapi({
    description: 'A modal form field that accepts rich text input.',
    required: ['id', 'type'],
  })
  .openapi('FormFieldRichText')

const FormFieldDropdownSchema = z
  .object({
    type: z
      .literal('dropdown')
      .openapi({ description: 'The type of modal form field.', example: 'dropdown' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'dropdown_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    width: z
      .enum(['full', 'half'])
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The width of the form field. If not provided, the default value will be `"full"`.',
        example: 'full',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The value for the form field, which is the ID of the chosen DropdownOption object.',
        example: 'dropdown_option_1',
      }),
    options: z
      .array(DropdownOptionSchema)
      .openapi({ description: 'An array (minimum length: 1) of DropdownOption objects.' }),
  })
  .openapi({
    description: 'A modal form field that accepts input via a dropdown list. Limit 50 options.',
    required: ['id', 'type', 'options'],
  })
  .openapi('FormFieldDropdown')

const RadioOptionSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the option.', example: 'radio_option_1' }),
    label: z
      .string()
      .openapi({
        description: 'The label of the option. Limit 80 characters.',
        example: 'Radio Option 1',
      }),
    sub_label: z
      .string()
      .exactOptional()
      .openapi({
        description: '*Optional*. The label to display as subtext for the `label`.',
        example: '#0000FF',
      }),
  })
  .openapi({
    description:
      "An option for a radio button field (i.e., an object in the field's `options` array).",
    required: ['id', 'label'],
  })
  .openapi('RadioOption')

const FormFieldRadioButtonSchema = z
  .object({
    type: z
      .literal('radio_button')
      .openapi({ description: 'The type of modal form field.', example: 'radio_button' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'radio_button_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The value for the form field, which is the ID of the chosen RadioOption object.',
        example: 'radio_option_1',
      }),
    options: z
      .array(RadioOptionSchema)
      .openapi({ description: 'An array (minimum length: 1) of RadioOption objects.' }),
  })
  .openapi({
    description: 'A modal form field that accepts radio button input. Limit 5 options.',
    required: ['id', 'type', 'options'],
  })
  .openapi('FormFieldRadioButton')

const FormFieldCheckboxSchema = z
  .object({
    type: z
      .literal('checkbox')
      .openapi({ description: 'The type of modal form field.', example: 'checkbox' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'checkbox_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Resource name',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The values for the form field, which are the IDs of the chosen CheckboxOption objects.',
        example: ['opt-in'],
      }),
    options: z
      .array(CheckboxOptionSchema)
      .openapi({ description: 'An array (minimum length: 1) of CheckboxOption objects.' }),
  })
  .openapi({
    description: 'A modal form field that accepts checkbox input. Limit 10 options.',
    required: ['id', 'type', 'options'],
  })
  .openapi('FormFieldCheckbox')

const FormFieldDateSchema = z
  .object({
    type: z
      .literal('date')
      .openapi({ description: 'The type of modal form field.', example: 'date' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'date_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Date',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    placeholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.',
        example: '2022-02-01',
      }),
    value: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value of the field. This takes a date with format YYYY-MM-DD or ISO 8601 date string in UTC.',
        example: '2022-02-01',
      }),
  })
  .openapi({ description: 'A modal form field that accepts date input.', required: ['id', 'type'] })
  .openapi('FormFieldDate')

const FormFieldDatetimeSchema = z
  .object({
    type: z
      .literal('datetime')
      .openapi({ description: 'The type of modal form field.', example: 'datetime' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'datetime_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Datetime',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    placeholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.',
        example: '2022-02-01T14:48:00.000Z',
      }),
    value: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value of the field. This value takes the form of an ISO 8601 date string in UTC.',
        example: '2022-02-01T14:48:00.000Z',
      }),
  })
  .openapi({
    description: 'A modal form field that accepts datetime input.',
    required: ['id', 'type'],
  })
  .openapi('FormFieldDatetime')

const TypeaheadItemSchema = z
  .object({
    title: z
      .string()
      .openapi({ description: 'The title of the typeahead item.', example: 'OTP Team PF' }),
    subtitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subtitle of the typeahead item.', example: 'OTP' }),
    value: z.string().openapi({ description: 'The value of the typeahead item.', example: 'OTP' }),
    icon_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the icon to display next to the title.',
        example: 'https://example-icon.png',
      }),
  })
  .openapi({
    description: 'An object describing a typeahead result.',
    required: ['title', 'value'],
  })
  .openapi('TypeaheadItem')

const FormFieldTypeaheadSchema = z
  .object({
    type: z
      .literal('typeahead')
      .openapi({ description: 'The type of modal form field.', example: 'typeahead' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the field, which is used to reference the field. These should be unique across the entire form.',
        example: 'typeahead_field_1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 50 characters.',
        example: 'Statuses',
      }),
    is_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    is_watched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.',
        example: true,
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.',
        example: 'Please review and change your input',
      }),
    width: z
      .enum(['full', 'half'])
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The width of the form field. If not provided, the default value will be `"full"`.',
        example: 'full',
      }),
    typeahead_url: z
      .string()
      .openapi({
        description:
          'The URL that Asana uses to request typehead results from the application server.',
        example: 'https://www.app-server.com/app/typeahead',
      }),
    value: TypeaheadItemSchema.and(
      z
        .object({})
        .openapi({
          description:
            '*Optional*. The value for the form field, which is the chosen [TypeaheadItem](/reference/lookups#typeaheaditem) object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A modal form field that accepts typeahead input.',
    required: ['id', 'type', 'typeahead_url'],
  })
  .openapi('FormFieldTypeahead')

const FormMetadataResponseSchema = z
  .object({
    template: z
      .literal('form_metadata_v0')
      .openapi({
        description:
          'The interface name and version of a distinct form UI layout. A `template` is directly associated with a particular `metadata` schema.',
        example: 'form_metadata_v0',
      }),
    metadata: z
      .object({
        title: z
          .string()
          .openapi({
            description:
              'The title of the form, which is displayed at the top of the creation form',
            example: 'Create New Issue',
          }),
        fields: z
          .array(z.any())
          .openapi({
            description:
              'An array of form field objects that are rendered in the order they are in the array. Limit of 30 fields.\n\nValid object schemas: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)',
          }),
        on_submit_callback: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL to `POST` the form to when the user clicks the submit button. If this is field is omitted then the submission button will be disabled. This is useful if the user must enter information in a watched field first, such as to show additional fields.',
            example: 'https://www.example.com/on_submit',
          }),
        on_change_callback: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL to `POST` the form to whenever watched field values are changed.',
            example: 'https://www.example.com/on_change',
          }),
      })
      .openapi({
        description:
          'The metadata (i.e., underlying definition) of a form. `metadata` must exist alongside a `template`, and its schema must be specific to the value of that `template`.',
        required: ['fields', 'title'],
      }),
  })
  .openapi({
    description: 'Contains the metadata that describes how to display and manage a form.',
    required: ['metadata', 'template'],
  })
  .openapi('FormMetadataResponse')

const FormSubmissionRequestSchema: z.ZodType<FormSubmissionRequestType> = z
  .lazy(() =>
    RootUIComponentRequestSchema.and(FormOnChangeFormSubmissionRequestSchema).and(
      z
        .object({
          task: z
            .string()
            .exactOptional()
            .openapi({ description: 'The task GID this hook is coming from.', example: '67890' }),
        })
        .openapi({ description: 'The body of a form submission.', required: [] }),
    ),
  )
  .openapi('FormSubmissionRequest')

const OnSubmitCallbackRequestSchema = FormSubmissionRequestSchema.and(
  z
    .object({
      attachment: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The GID of the attachment created from the form submission.',
          example: '12345',
        }),
    })
    .openapi({ required: [] }),
).openapi('OnSubmitCallbackRequest')

const ActionFormSubmissionRequestSchema = FormSubmissionRequestSchema.and(
  z
    .object({
      rule_name: z
        .string()
        .exactOptional()
        .openapi({ description: 'The name of the rule being created', example: 'rule name' }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The ID of an existing rule action that is being edited',
          example: '12345',
        }),
      action_type: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The ID of the configuration used to create the rule action.',
          example: '45678',
        }),
      project: z
        .string()
        .exactOptional()
        .openapi({ description: 'The project GID this hook is coming from.', example: '12345' }),
    })
    .openapi({ description: 'The body of a form submission.', required: [] }),
).openapi('ActionFormSubmissionRequest')

const WidgetFooterCreatedSchema = z
  .object({
    footer_type: z
      .literal('created')
      .openapi({ description: 'The type of widget footer.', example: 'created' }),
    created_at: z
      .string()
      .openapi({
        description: 'The time (in ISO 8601 date format) to show in the footer.',
        example: '2012-02-22T02:06:58.147Z',
      }),
  })
  .openapi({
    description: "A widget footer that displays the timestamp of the resource's creation time.",
    required: ['created_at', 'footer_type'],
  })
  .openapi('WidgetFooterCreated')

const WidgetFooterCustomTextSchema = z
  .object({
    footer_type: z
      .literal('custom_text')
      .openapi({ description: 'The text to show in the footer.', example: 'custom_text' }),
    text: z
      .string()
      .openapi({
        description: 'The text to show in the footer.',
        example: 'This is a custom footer message',
      }),
    icon_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. The icon to show in the footer next to the text. If not provided, no icon will be shown.',
        example: 'https://example-icon.png',
      }),
  })
  .openapi({
    required: ['footer_type', 'text'],
    description: 'A widget footer that displays custom text and an optional icon.',
  })
  .openapi('WidgetFooterCustomText')

const FormOnChangeBaseRequestSchema = RootUIComponentRequestSchema.and(
  FormOnChangeFormSubmissionRequestSchema,
)
  .and(
    z
      .object({
        changed_field: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the changed FormField.',
            example: 'checkbox_field_1',
          }),
      })
      .openapi({ description: 'The body of an onchange event.', required: [] }),
  )
  .openapi('FormOnChangeBaseRequest')

const FormOnChangeRequestSchema = FormOnChangeBaseRequestSchema.and(
  z
    .object({
      task: z
        .string()
        .exactOptional()
        .openapi({ description: 'The task GID this hook is coming from.', example: '67890' }),
    })
    .openapi({ description: 'The body of an onchange event.', required: [] }),
).openapi('FormOnChangeRequest')

const ActionFormOnChangeRequestSchema = FormOnChangeBaseRequestSchema.and(
  z
    .object({
      action: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The ID of an existing rule action that is being edited.',
          example: '12345',
        }),
      action_type: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The ID of the configuration used to create the rule action.',
          example: '45678',
        }),
      project: z
        .string()
        .exactOptional()
        .openapi({ description: 'The project GID this hook is coming from.', example: '12345' }),
    })
    .openapi({ description: 'The body of an action onchange event.', required: [] }),
).openapi('ActionFormOnChangeRequest')

const NotFoundResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error to display.', example: 'Not found.' }),
  })
  .openapi({
    description:
      'An error response object indicating a request that could not be found (i.e., a status code of `404`).',
    required: [],
  })
  .openapi('NotFoundResponse')

const RunActionRequestSchema = RootUIComponentRequestSchema.and(
  z
    .object({
      project: z
        .string()
        .exactOptional()
        .openapi({ description: 'The project GID this hook is coming from.', example: '12345' }),
      target_object: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The ID of the target object that the rule action is acting on. Currently, this value is always a task GID.',
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({ description: 'The action ID generated from rule creation.' }),
      action_type: z
        .string()
        .exactOptional()
        .openapi({ description: 'The ID from the configuration used to create the rule action.' }),
      idempotency_key: z
        .string()
        .openapi({
          description:
            'A unique key associated with the "run action" request. App servers should use this key to implement idempotency.',
        }),
    })
    .openapi({ description: 'The body of an action request.', required: ['idempotency_key'] }),
).openapi('RunActionRequest')

const RanActionResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error that should be displayed to the user.',
        example: 'That resource no longer exists',
      }),
    action_result: z
      .enum(['resources_created', 'ok'])
      .openapi({
        description:
          'Specifies any additional information that the app wants to send to Asana on completion of the action. Can only be `resources_created` or `ok`.',
        example: 'ok',
      }),
    resources_created: z
      .array(AttachedResourceResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'A field with the data corresponding to the action_result value. Each `action_result` has its own data field shape that Asana expects. `resources_created` expects the name and URL of the resources that the action created.',
      }),
  })
  .openapi({ description: 'The response to an action request.', required: ['action_result'] })
  .openapi('RanActionResponse')

const TypeaheadListRequestSchema = RootUIComponentRequestSchema.and(
  z
    .object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({ description: 'The workspace GID this hook is coming from.', example: '12345' }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          description: "The user's input in the typeahead text input.",
          example: 'Messages',
        }),
      task: z
        .string()
        .exactOptional()
        .openapi({
          description:
            '*Conditional*. The task GID this hook is coming from. `task` is only present in the [modal form](/docs/modal-form) (as there is a "context task"), but not in the [rule action](/docs/rule-action) (as rules are associated with a _project_).',
          example: '67890',
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({ description: 'The user GID this hook is coming from.', example: '54321' }),
      expires_at: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The time (in ISO 8601 format) when the request should expire.',
          example: '2019-04-15T01:01:46.055Z',
        }),
    })
    .openapi({ description: 'The body of a typeahead request.', required: [] }),
).openapi('TypeaheadListRequest')

const TypeaheadListResponseSchema = z
  .object({
    header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Optional*. Header text to display above the list of typeahead results. If no `header` is passed in or the value is an empty string, only the typeahead results with be rendered.',
        example: 'List of messages',
      }),
    items: z
      .array(TypeaheadItemSchema)
      .openapi({
        description:
          'Array of [TypeaheadItem](/reference/lookups#typeaheaditem) objects that indicate typeahead results.',
      }),
  })
  .openapi({ description: 'The response to a successful typeahead request.', required: ['items'] })
  .openapi('TypeaheadListResponse')

const UnauthorizedResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error to display.', example: 'Authorization required.' }),
  })
  .openapi({
    description:
      'An error response object indicating a unauthorized request (i.e., a status code of `401`).',
    required: [],
  })
  .openapi('UnauthorizedResponse')

const WidgetFooterUpdatedSchema = z
  .object({
    footer_type: z
      .literal('updated')
      .openapi({ description: 'The type of widget footer.', example: 'updated' }),
    last_updated_at: z
      .string()
      .openapi({
        description: 'The time (in ISO 8601 date format) to show in the footer.',
        example: '2012-02-22T02:06:58.147Z',
      }),
  })
  .openapi({
    description: "A widget footer that displays the timestamp of the resource's last updated time.",
    required: ['footer_type', 'last_updated_at'],
  })
  .openapi('WidgetFooterUpdated')

const WidgetFieldDatetimeWithIconSchema = z
  .object({
    type: z
      .literal('datetime_with_icon')
      .openapi({ description: 'The type of widget field.', example: 'datetime_with_icon' }),
    name: z
      .string()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 40 characters.',
        example: 'Status',
      }),
    datetime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time (in ISO 8601 date format) to display next to the icon.',
        example: '2012-02-22T02:06:58.147Z',
      }),
    icon_url: z
      .string()
      .exactOptional()
      .openapi({
        description: '*Optional*. The URL of the icon to display next to the time.',
        example: 'https://example-icon.png',
      }),
  })
  .openapi({
    description: 'A widget field that displays a timestamp and an optional icon.',
    required: ['name', 'type'],
  })
  .openapi('WidgetFieldDatetimeWithIcon')

const WidgetFieldPillSchema = z
  .object({
    type: z.literal('pill').openapi({ description: 'The type of widget field.', example: 'pill' }),
    name: z
      .string()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 40 characters.',
        example: 'Status',
      }),
    text: z
      .string()
      .openapi({
        description: 'The text to show in the field. Limit 40 characters.',
        example: 'In Progress',
      }),
    color: z
      .enum([
        'none',
        'red',
        'orange',
        'yellow-orange',
        'yellow',
        'yellow-green',
        'green',
        'blue-green',
        'aqua',
        'blue',
        'indigo',
        'purple',
        'magenta',
        'hot-pink',
        'pink',
        'cool-gray',
      ])
      .openapi({ description: 'The color of the pill.', example: 'cool-gray' }),
  })
  .openapi({
    description: 'A widget field that displays custom text in a colored "pill" format.',
    required: ['color', 'name', 'text', 'type'],
  })
  .openapi('WidgetFieldPill')

const WidgetFieldTextWithIconSchema = z
  .object({
    type: z
      .literal('text_with_icon')
      .openapi({ description: 'The type of widget field.', example: 'text_with_icon' }),
    name: z
      .string()
      .openapi({
        description:
          'The text (i.e., label) to show in the title of the field. Limit 40 characters.',
        example: 'Status',
      }),
    text: z
      .string()
      .openapi({
        description: 'The text to show in the field. Limit 40 characters.',
        example: 'In Progress',
      }),
    icon_url: z
      .string()
      .exactOptional()
      .openapi({
        description: '*Optional*. The URL of the icon to display next to the text.',
        example: 'https://example-icon.png',
      }),
  })
  .openapi({
    description: 'A widget field that displays custom text with an optional icon.',
    required: ['name', 'text', 'type'],
  })
  .openapi('WidgetFieldTextWithIcon')

const WidgetMetadataResponseSchema = z
  .object({
    template: z
      .literal('summary_with_details_v0')
      .openapi({
        description:
          'The interface name and version of a distinct widget UI layout. A `template` is directly associated with a particular `metadata` schema.',
        example: 'summary_with_details_v0',
      }),
    metadata: z
      .object({
        title: z
          .string()
          .openapi({
            description:
              'The text to show in the title of the widget. Max length of 200 characters.',
            example: 'Status',
          }),
        fields: z
          .array(z.any())
          .openapi({
            description:
              'A list of fields showing data from external resources (i.e., an array of WidgetField objects). A widget must contain at least 1 field and no more than 5 fields.\n\nValid object schemas: [WidgetField-DatetimeWithIcon](/reference/widgets#widgetfield-datetimewithicon), [WidgetField-Pill](/reference/widgets#widgetfield-pill), [WidgetField-TextWithIcon](/reference/widgets#widgetfield-textwithicon).',
          }),
        subtitle: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The text to show under the title of the widget, next to "Open in {App Name}". If not provided, the `resource_name` from the app definition will be used as default.',
            example: 'Custom App Story · Open in Custom App',
          }),
        subicon_url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL of the subicon next to the subtitle . If not provided, no icon will be shown.',
            example: 'https://example-icon.png',
          }),
        footer: z
          .object({})
          .openapi({
            description:
              'Contains the information to display a footer on the widget.\n\nValid schemas: [WidgetFooter-Created](/reference/widgets#widgetfooter-created), [WidgetFooter-CustomText](/reference/widgets#widgetfooter-customtext), [WidgetFooter-Updated](/reference/widgets#widgetfooter-updated).',
          }),
        num_comments: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of comments to display on the lower right corner of the widget. If not provided, no comment count will be shown',
            example: 2,
          }),
      })
      .openapi({
        description:
          'The metadata (i.e., underlying definition) of a widget. `metadata` must exist alongside a `template`, and its schema must be specific to the value of that `template`.',
        required: ['fields', 'footer', 'title'],
      }),
  })
  .openapi({
    description: 'An object containing information about the widget.',
    required: ['metadata', 'template'],
  })
  .openapi('WidgetMetadataResponse')

const BadRequestResponse = {
  description: 'Bad request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ForbiddenResponseSchema } },
}

const NotFoundResponse = {
  description: 'Not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const TooManyRequestsResponse = { description: 'Too Many Requests' }

const GoneResponse = { description: 'Gone' }

const InternalServerErrorResponse = {
  description: 'Server error',
  content: { 'application/json': { schema: InternalServerErrorResponseSchema } },
}

const ImATeapotResponse = { description: "I'm A Teapot" }

const ActionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'action',
      in: 'query',
      schema: { type: 'string' },
      description:
        'The ID of an existing rule action that is being edited. Should be omitted when configuring a new rule action.',
      required: false,
    },
  })

const ActionTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'action_type',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The ID of the configuration used to create the rule action.',
    },
  })

const AttachmentParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'attachment',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The attachment ID of the URL attachment.',
    },
  })

const ExpiresAtParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'expires_at',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The time (in ISO 8601 date format) when the request should expire.',
    },
  })

const FragmentParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'fragment',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The text entered into the typeahead input.',
    },
  })

const ProjectParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'project',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The project GID this hook is coming from.',
    },
  })

const UserParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'user',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The user GID this hook is coming from.',
    },
  })

const ResourceUrlParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'resource_url',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description:
        'The URL of the URL attachment on the task (i.e., Jira issue, GitHub pull request)',
    },
  })

const TaskParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'task',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The task GID this hook is coming from.',
    },
  })

const WorkspaceParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'workspace',
      required: true,
      in: 'query',
      schema: { type: 'string' },
      description: 'The workspace GID this hook is coming from.',
    },
  })

export const getWidgetMetadataUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/widget_metadata_url_path_placeholder',
  tags: ['Widgets'],
  summary: 'Get widget metadata',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nGet the metadata from the app server to render a widget. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/92841480867031372af8983f2906d26fbff6a2cc/ac-widget-metadata.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/92841480867031372af8983f2906d26fbff6a2cc/ac-widget-metadata.png" alt="App components widget metadata request flow"/>\n</a>',
  operationId: 'getWidgetMetadata',
  request: {
    query: z.object({
      resource_url: ResourceUrlParamsSchema,
      workspace: WorkspaceParamsSchema,
      task: TaskParamsSchema,
      user: UserParamsSchema,
      attachment: AttachmentParamsSchema,
      expires_at: ExpiresAtParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the metadata for a single widget.',
      content: { 'application/json': { schema: WidgetMetadataResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    418: UnauthorizedResponse,
    500: InternalServerErrorResponse,
  },
})

export const postResourceAttachUrlPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/resource_attach_url_path_placeholder',
  tags: ['Lookups'],
  summary: 'Attach resource',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nWhen the user attaches a resource URL to a task, Asana will make a signed request to the specified `resource_attach_url` in the app configuration. Information about the attached resource should be included in the response.',
  operationId: 'attachResource',
  request: {
    body: {
      description: 'Request to attach a resource.',
      content: { 'application/json': { schema: AttachResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully attached the resource to the given object.',
      content: { 'application/json': { schema: AttachedResourceResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getResourceTypeaheadUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/resource_typeahead_url_path_placeholder',
  tags: ['Lookups'],
  summary: 'Get lookup typeahead results',
  description:
    "_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nGets typeahead results to render as a dropdown list in the resource lookup input field.\n\nWhen the user types into the lookup input field, Asana will send a request containing the entered string to the application's `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. When the user selects an item from the list, Asana will send a [resource attach](/reference/attachresource) request to the app server, then process the response and render the attached resource in the widget.",
  operationId: 'getTypeaheadResults',
  request: {
    body: {
      description: 'Request to retrieve typeahead results for a resource lookup query.',
      content: { 'application/json': { schema: TypeaheadListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved typeahead results.',
      content: { 'application/json': { schema: TypeaheadListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getFormMetadataUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/form_metadata_url_path_placeholder',
  tags: ['Modal forms'],
  summary: 'Get form metadata',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nGet the metadata from the app server to render a form. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/65a45303b5fb79a69a322593627e3b9521c68ba1/ac-form-metadata.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/65a45303b5fb79a69a322593627e3b9521c68ba1/ac-form-metadata.png" alt="App components form metadata request flow"/>\n</a>',
  operationId: 'getFormMetadata',
  request: {
    query: z.object({
      workspace: WorkspaceParamsSchema,
      task: TaskParamsSchema,
      user: UserParamsSchema,
      expires_at: ExpiresAtParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the metadata for a single form.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getModalFormTypeaheadUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/modal_form_typeahead_url_path_placeholder',
  tags: ['Modal forms'],
  summary: 'Get modal form typeahead results',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nIf a modal form field is of type `typehead`, this operation gets typeahead results to render as a dropdown list.\n\nWhen the user types into a modal form form field, Asana will send a request containing the entered string to the application\'s `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9ddc32f45cb458d111912b8fe8353bf8f682d6b9/ac-form-typeahead.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9ddc32f45cb458d111912b8fe8353bf8f682d6b9/ac-form-typeahead.png" alt="App components form typeahead request flow"/>\n</a>',
  operationId: 'getModalFormTypeaheadResults',
  request: {
    body: {
      description: 'Request to retrieve typeahead results in a modal form typeahead form field.',
      content: { 'application/json': { schema: TypeaheadListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved typeahead results.',
      content: { 'application/json': { schema: TypeaheadListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const getRuleActionTypeaheadUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/rule_action_typeahead_url_path_placeholder',
  tags: ['Rule actions'],
  summary: 'Get rule action typeahead results',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nIn a rule action typeahead form field, this operation gets typeahead results to render as a dropdown list. Typeahead results are limited to 50 items.\n\nWhen the user types into a rule action form field, Asana will send a request containing the entered string to the application\'s `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9f4a9e93ba7e91e44c4ab09eeecf440992a5d789/ac-rule-typeahead.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9f4a9e93ba7e91e44c4ab09eeecf440992a5d789/ac-rule-typeahead.png" alt="App components rule typeahead request flow"/>\n</a>',
  operationId: 'getRuleActionTypeaheadResults',
  request: {
    body: {
      description: 'Request to retrieve typeahead results in a rule action typeahead form field.',
      content: { 'application/json': { schema: TypeaheadListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved typeahead results.',
      content: { 'application/json': { schema: TypeaheadListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postOnChangeCallbackPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/on_change_callback_path_placeholder',
  tags: ['Modal forms'],
  summary: 'On change callback',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nThe callback request made to an app server when a watched field\'s value changes within a form. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/5b013ab17e2c82e44ede3bc8f1cdfcf48b79fa6d/ac-form-on-change.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/5b013ab17e2c82e44ede3bc8f1cdfcf48b79fa6d/ac-form-on-change.png" alt="App components form on change request flow"/>\n</a>',
  operationId: 'onFormChange',
  request: {
    body: {
      description: 'Request to notify of an on change event.',
      content: { 'application/json': { schema: FormOnChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully returned the new state of the form.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    400: {
      description: 'Something was wrong with the form data.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postOnSubmitCallbackPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/on_submit_callback_path_placeholder',
  tags: ['Modal forms'],
  summary: 'On submit callback',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nThe callback request made to an app server when a form is submitted. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/a58c2641ab72105505ea9d63cf27098d79e56c71/ac-form-on-submit.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/a58c2641ab72105505ea9d63cf27098d79e56c71/ac-form-on-submit.png" alt="App components form on submit request flow"/>\n</a>',
  operationId: 'onFormSubmit',
  request: {
    body: {
      description: 'Request to notify of a form submission.',
      content: { 'application/json': { schema: OnSubmitCallbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully attached the resource created by the form.',
      content: { 'application/json': { schema: AttachedResourceResponseSchema } },
    },
    400: {
      description: 'Something was wrong with the form data.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postRunActionUrlPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/run_action_url_path_placeholder',
  tags: ['Rule actions'],
  summary: 'Run action',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nThe request made when an action is triggered. Rule actions in rules containing a "Task added to this project" trigger have a 2 minute delay for newly created tasks in that project. This is to provide time for the creating user to fill out task details (name, description, etc.) before the rule action is triggered.\n\nAn app server must be hosted in order for rule actions to function. For a brief list of popular hosting options, see [hosting](/docs/hosting). <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/89ac88743dd7446b7ae94ba88937349cdc50f70f/ac-rule-run-action.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/89ac88743dd7446b7ae94ba88937349cdc50f70f/ac-rule-run-action.png" alt="App components rule run action request flow"/>\n</a>',
  operationId: 'runAction',
  request: {
    body: {
      description: 'Request to notify of an action running.',
      content: { 'application/json': { schema: RunActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully attached the resource created by the form.',
      content: { 'application/json': { schema: RanActionResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    410: GoneResponse,
    500: InternalServerErrorResponse,
  },
})

export const getActionMetadataUrlPathPlaceholderRoute = createRoute({
  method: 'get',
  path: '/action.metadata_url_path_placeholder',
  tags: ['Rule actions'],
  summary: 'Get action metadata',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nWhen a user has navigated to the [custom rule builder](https://asana.com/guide/help/premium/rules#gl-create-rule) UI and selected a rule action (either through the sidebar or via a rule preset), Asana will make a request to the app to get the configuration form definition for the chosen rule action. This will initiate the flow to configure a new rule action or edit the configuration of an existing rule action. This is the endpoint and schema for updating rule actions; app triggers (V2) will be analogous. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/54149144bfbdb0897a8720f8411586d4ab86b545/ac-rule-metadata.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/54149144bfbdb0897a8720f8411586d4ab86b545/ac-rule-metadata.png" alt="App components rule metadata request flow"/>\n</a>',
  operationId: 'getActionMetadata',
  request: {
    query: z.object({
      action: ActionParamsSchema,
      action_type: ActionTypeParamsSchema,
      project: ProjectParamsSchema,
      workspace: WorkspaceParamsSchema,
      user: UserParamsSchema,
      expires_at: ExpiresAtParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the metadata for a single action.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postActionOnChangeCallbackPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/action.on_change_callback_path_placeholder',
  tags: ['Rule actions'],
  summary: 'On action change callback',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nThe callback request made to an app server when a watched field\'s value changes within an action form. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/e17aad6e1b091b6fa410679d417d4c48643339ea/ac-rule-on-change.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/e17aad6e1b091b6fa410679d417d4c48643339ea/ac-rule-on-change.png" alt="App components rule on change request flow"/>\n</a>',
  operationId: 'onActionFormChange',
  request: {
    body: {
      description: 'Request to notify of an on change event.',
      content: { 'application/json': { schema: ActionFormOnChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully returned the new state of the form.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    400: {
      description: 'Something was wrong with the form data.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const postActionOnSubmitCallbackPathPlaceholderRoute = createRoute({
  method: 'post',
  path: '/action.on_submit_callback_path_placeholder',
  tags: ['Rule actions'],
  summary: 'On action submit callback',
  description:
    '_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._\n\nThe form is submitted when the user chooses to create their rule. Asana will create the rule action data model object and make a signed request to the `on_submit_callback` specified in the form metadata returned from the fetch/update rule action form endpoints. Information about the created rule action should be included in the response if it was successfully created. This is the endpoint and schema for updating rule actions; app triggers (V2) will be analogous.\n\nThe request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6d4527451c4c506efec463438b506fb8a2e6d73f/ac-rule-on-submit.png">\n  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6d4527451c4c506efec463438b506fb8a2e6d73f/ac-rule-on-submit.png" alt="App components rule on submit request flow"/>\n</a>',
  operationId: 'onActionFormSubmit',
  request: {
    body: {
      description: 'Request to submit an action form.',
      content: { 'application/json': { schema: ActionFormSubmissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully handled form submission.' },
    400: {
      description: 'Something was wrong with the form data.',
      content: { 'application/json': { schema: FormMetadataResponseSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
})
