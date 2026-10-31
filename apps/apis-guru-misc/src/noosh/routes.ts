import { createRoute, z } from '@hono/zod-openapi'

const PersonVOSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.PersonVO', required: [] })
  .openapi('PersonVO')

const UofmSimpleVOSchema = z
  .object({
    is_default: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    uofm_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    uofm_name: z.string().exactOptional().openapi({ description: '', example: 'sample uofm_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UofmSimpleVO', required: [] })
  .openapi('UofmSimpleVO')

type SpecSimpleVOType = {
  client_status?: string
  create_date?: string
  created_by?: z.infer<typeof PersonVOSchema>
  job_id?: bigint
  last_updated?: string
  reference_number?: string
  spec_id?: bigint
  spec_name?: string
  spec_options_complete?: SpecSimpleVOType[]
  supplier_status?: string
  uofms?: z.infer<typeof UofmSimpleVOSchema>[]
  user_state?: string
}

const TeamTemplateSimpleVOSchema = z
  .object({
    team_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    team_template_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample team_template_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamTemplateSimpleVO', required: [] })
  .openapi('TeamTemplateSimpleVO')

const AutomaticInvitationVOSchema = z
  .object({
    automatic_invitation_type_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample automatic_invitation_type_name' }),
    team_template: TeamTemplateSimpleVOSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.AutomaticInvitationVO', required: [] })
  .openapi('AutomaticInvitationVO')

const AutomaticInvitationsListVOSchema = z
  .object({
    results: z.array(AutomaticInvitationVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.AutomaticInvitationsListVO',
    required: [],
  })
  .openapi('AutomaticInvitationsListVO')

const BigDecimalSchema = z
  .any()
  .openapi({ description: 'Java type: java.math.BigDecimal' })
  .openapi('BigDecimal')

const BreakoutVOSchema = z
  .object({
    breakout_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    breakout_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample breakout_name' }),
    breakout_pre_markup: BigDecimalSchema.exactOptional(),
    breakout_price: BigDecimalSchema.exactOptional(),
    transactional_breakout_pre_markup: BigDecimalSchema.exactOptional(),
    transactional_breakout_price: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.BreakoutVO', required: [] })
  .openapi('BreakoutVO')

const PropertyPaAndAttVOSchema = z
  .object({
    date_value: z.iso.date().exactOptional().openapi({ description: '' }),
    number_value: BigDecimalSchema.exactOptional(),
    param_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
    property_attribute_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    string_value: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample string_value' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.PropertyPaAndAttVO', required: [] })
  .openapi('PropertyPaAndAttVO')

const ClientWorkgroupDetailVOSchema = z
  .object({
    client_ac_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_workgroup_name' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    margin_percent: BigDecimalSchema.exactOptional(),
    markup: BigDecimalSchema.exactOptional(),
    markup_percent: BigDecimalSchema.exactOptional(),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ClientWorkgroupDetailVO',
    required: [],
  })
  .openapi('ClientWorkgroupDetailVO')

const ClientWorkgroupExpandVOSchema = z
  .object({
    result: ClientWorkgroupDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ClientWorkgroupExpandVO',
    required: [],
  })
  .openapi('ClientWorkgroupExpandVO')

const ClientWorkgroupSimpleVOSchema = z
  .object({
    client_ac_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_workgroup_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ClientWorkgroupSimpleVO',
    required: [],
  })
  .openapi('ClientWorkgroupSimpleVO')

const ClientWorkgroupListVOSchema = z
  .object({
    results: z.array(ClientWorkgroupSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ClientWorkgroupListVO', required: [] })
  .openapi('ClientWorkgroupListVO')

const ContactUserVOSchema = z
  .object({
    role_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.ContactUserVO',
    required: ['role_id', 'user_id'],
  })
  .openapi('ContactUserVO')

const ContactsSimpleVOSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: '', example: 'sample address' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample company_name' }),
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    primary_phone: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample primary_phone' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ContactsSimpleVO', required: [] })
  .openapi('ContactsSimpleVO')

const ContactsListVOSchema = z
  .object({
    results: z.array(ContactsSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ContactsListVO', required: [] })
  .openapi('ContactsListVO')

const CountryVOSchema = z
  .object({
    constant_token: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample constant_token' }),
    country: z.string().exactOptional().openapi({ description: '', example: 'sample country' }),
    country_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.CountryVO', required: [] })
  .openapi('CountryVO')

const CountryListVOSchema = z
  .object({
    result: z.array(CountryVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.CountryListVO', required: [] })
  .openapi('CountryListVO')

const CustomFieldPersistVOSchema = z
  .object({
    date_value: z.iso.date().exactOptional().openapi({ description: '' }),
    number_value: BigDecimalSchema.exactOptional(),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
    string_value: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample string_value' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.CustomFieldPersistVO',
    required: [],
  })
  .openapi('CustomFieldPersistVO')

const DeactivationReasonVOSchema = z
  .object({
    deactivation_reason_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    deactivation_reason_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample deactivation_reason_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.DeactivationReasonVO', required: [] })
  .openapi('DeactivationReasonVO')

const DeactivationReasonListVOSchema = z
  .object({
    results: z.array(DeactivationReasonVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.DeactivationReasonListVO',
    required: [],
  })
  .openapi('DeactivationReasonListVO')

const ErgoSpecSimpleVOSchema = z
  .object({
    is_active: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    is_template: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    quantity_1: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    quantity_2: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    quantity_3: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    quantity_4: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    quantity_5: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ergo.ErgoSpecSimpleVO', required: [] })
  .openapi('ErgoSpecSimpleVO')

const ProjectBaseVOSchema = z
  .object({
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectBaseVO', required: [] })
  .openapi('ProjectBaseVO')

const RfeBaseVOSchema = z
  .object({
    rfe_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    rfe_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfe_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfe_title' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeBaseVO', required: [] })
  .openapi('RfeBaseVO')

const WorkgroupBaseVOSchema = z
  .object({
    workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO', required: [] })
  .openapi('WorkgroupBaseVO')

const EstimateBaseVOSchema = z
  .object({
    create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    estimate_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    estimate_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample estimate_title' }),
    expiration_date: z.iso.date().exactOptional().openapi({ description: '' }),
    project: ProjectBaseVOSchema.exactOptional(),
    rfe: RfeBaseVOSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateBaseVO', required: [] })
  .openapi('EstimateBaseVO')

const ItemOptionVOSchema = z
  .object({
    item_option_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity: z.string().exactOptional().openapi({ description: '', example: 'sample quantity' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ItemOptionVO', required: [] })
  .openapi('ItemOptionVO')

const EstimateItemPriceVOSchema = z
  .object({
    add_price: BigDecimalSchema.exactOptional(),
    breakouts: z.array(BreakoutVOSchema).exactOptional().openapi({ description: '' }),
    em_estimate_item_price_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_option: ItemOptionVOSchema.exactOptional(),
    price: BigDecimalSchema.exactOptional(),
    shipping: BigDecimalSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    total_price: BigDecimalSchema.exactOptional(),
    transactional_add_price: BigDecimalSchema.exactOptional(),
    transactional_price: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    transactional_total_price: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateItemPriceVO', required: [] })
  .openapi('EstimateItemPriceVO')

const EstimateItemDetailsVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    estimate_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    option_prices: z.array(EstimateItemPriceVOSchema).exactOptional().openapi({ description: '' }),
    pc_job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    spec_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample spec_reference' }),
    spec_reference_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateItemDetailsVO', required: [] })
  .openapi('EstimateItemDetailsVO')

const EstimateDetailsVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    estimate_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    estimate_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample estimate_title' }),
    expiration_date: z.iso.date().exactOptional().openapi({ description: '' }),
    items: z.array(EstimateItemDetailsVOSchema).exactOptional().openapi({ description: '' }),
    project: ProjectBaseVOSchema.exactOptional(),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    rfe: RfeBaseVOSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    submitted_by: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample submitted_by' }),
    submitted_by_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateDetailsVO', required: [] })
  .openapi('EstimateDetailsVO')

const EstimateExpandVOSchema = z
  .object({
    result: EstimateDetailsVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateExpandVO', required: [] })
  .openapi('EstimateExpandVO')

const PaperItemPOSchema = z
  .object({
    min_uom_qty: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    paper_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    price_1: BigDecimalSchema.exactOptional(),
    price_2: BigDecimalSchema.exactOptional(),
    price_3: BigDecimalSchema.exactOptional(),
    price_4: BigDecimalSchema.exactOptional(),
    price_5: BigDecimalSchema.exactOptional(),
    price_per_tonne: BigDecimalSchema.exactOptional(),
    qty_uom: z.string().exactOptional().openapi({ description: '', example: 'sample qty_uom' }),
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    size: z.string().exactOptional().openapi({ description: '', example: 'sample size' }),
    sku: z.string().exactOptional().openapi({ description: '', example: 'sample sku' }),
    unit_price_1: BigDecimalSchema.exactOptional(),
    unit_price_2: BigDecimalSchema.exactOptional(),
    unit_price_3: BigDecimalSchema.exactOptional(),
    unit_price_4: BigDecimalSchema.exactOptional(),
    unit_price_5: BigDecimalSchema.exactOptional(),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.PaperItemPO',
    required: [],
  })
  .openapi('PaperItemPO')

const EstimateItemPOSchema = z
  .object({
    paper_items: z.array(PaperItemPOSchema).exactOptional().openapi({ description: '' }),
    quantity_1_price: BigDecimalSchema.exactOptional(),
    quantity_1_shipping: BigDecimalSchema.exactOptional(),
    quantity_1_tax: BigDecimalSchema.exactOptional(),
    quantity_2_price: BigDecimalSchema.exactOptional(),
    quantity_2_shipping: BigDecimalSchema.exactOptional(),
    quantity_2_tax: BigDecimalSchema.exactOptional(),
    quantity_3_price: BigDecimalSchema.exactOptional(),
    quantity_3_shipping: BigDecimalSchema.exactOptional(),
    quantity_3_tax: BigDecimalSchema.exactOptional(),
    quantity_4_price: BigDecimalSchema.exactOptional(),
    quantity_4_shipping: BigDecimalSchema.exactOptional(),
    quantity_4_tax: BigDecimalSchema.exactOptional(),
    quantity_5_price: BigDecimalSchema.exactOptional(),
    quantity_5_shipping: BigDecimalSchema.exactOptional(),
    quantity_5_tax: BigDecimalSchema.exactOptional(),
    rfe_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.EstimateItemPO',
    required: [],
  })
  .openapi('EstimateItemPO')

const EstimateListExpandVOSchema = z
  .object({
    result: z.array(EstimateBaseVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateListExpandVO', required: [] })
  .openapi('EstimateListExpandVO')

const EstimatePOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    estimate_items: z.array(EstimateItemPOSchema).exactOptional().openapi({ description: '' }),
    estimate_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample estimate_title' }),
    expiration_date: z.iso.date().exactOptional().openapi({ description: '' }),
    owner_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample owner_reference' }),
    rfe_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.EstimatePO',
    required: [],
  })
  .openapi('EstimatePO')

const EstimateSimpleVOSchema = z
  .object({
    estimate_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    estimate_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample estimate_title' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.EstimateSimpleVO', required: [] })
  .openapi('EstimateSimpleVO')

const TagVOSchema = z
  .object({
    isSpec: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    tagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    tagName: z.string().exactOptional().openapi({ description: '', example: 'sample tagName' }),
  })
  .openapi({ description: 'Java type: com.noosh.domain.collaboration.vo.TagVO', required: [] })
  .openapi('TagVO')

const FileVOSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    download_link: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample download_link' }),
    file_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    file_name: z.string().exactOptional().openapi({ description: '', example: 'sample file_name' }),
    file_size: BigDecimalSchema.exactOptional(),
    file_type: z.string().exactOptional().openapi({ description: '', example: 'sample file_type' }),
    is_remote: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    modified_date: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample modified_date' }),
    tagList: z.array(TagVOSchema).exactOptional().openapi({ description: '' }),
    upload_date: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample upload_date' }),
    uploaded_by: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample uploaded_by' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.file.FileVO', required: [] })
  .openapi('FileVO')

const FileListResponseVOSchema = z
  .object({
    result: z.array(FileVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.file.FileListResponseVO',
    required: [],
  })
  .openapi('FileListResponseVO')

const FileResponseVOSchema = z
  .object({
    result: FileVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.file.FileResponseVO', required: [] })
  .openapi('FileResponseVO')

const TagRepoVOSchema = z
  .object({
    isSpec: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    tagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    tagName: z.string().exactOptional().openapi({ description: '', example: 'sample tagName' }),
  })
  .openapi({ description: 'Java type: com.noosh.domain.collaboration.vo.TagRepoVO', required: [] })
  .openapi('TagRepoVO')

const FileTagResponseVOSchema = z
  .object({
    result: z.array(TagRepoVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.file.FileTagResponseVO', required: [] })
  .openapi('FileTagResponseVO')

const HTTPStatusSchema = z
  .any()
  .openapi({ description: 'Java type: com.noosh.domain.constant.HTTPStatus' })
  .openapi('HTTPStatus')

const HTTPStatusVOSchema = z
  .object({
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.core.vo.HTTPStatusVO', required: [] })
  .openapi('HTTPStatusVO')

const InvoiceItemSimpleVOSchema = z
  .object({
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    invoice_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_cost: BigDecimalSchema.exactOptional(),
    item_quantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_shipping: BigDecimalSchema.exactOptional(),
    item_sub_total: BigDecimalSchema.exactOptional(),
    item_tax: BigDecimalSchema.exactOptional(),
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    transactional_item_cost: BigDecimalSchema.exactOptional(),
    transactional_item_shipping: BigDecimalSchema.exactOptional(),
    transactional_item_sub_total: BigDecimalSchema.exactOptional(),
    transactional_item_tax: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.InvoiceItemSimpleVO', required: [] })
  .openapi('InvoiceItemSimpleVO')

const InvoiceSimpleVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    invoice_date: z.iso.date().exactOptional().openapi({ description: '' }),
    invoice_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    invoice_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    invoice_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample invoice_number' }),
    invoice_to: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample invoice_to' }),
    is_final: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    is_nonBillable: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    items: z.array(InvoiceItemSimpleVOSchema).exactOptional().openapi({ description: '' }),
    order_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_reference' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_method' }),
    prepared_by: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample prepared_by' }),
    project_number: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    sub_total: BigDecimalSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_sub_total: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.InvoiceSimpleVO', required: [] })
  .openapi('InvoiceSimpleVO')

const InvoiceDetailListExpandVOSchema = z
  .object({
    result: z.array(InvoiceSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.InvoiceDetailListExpandVO',
    required: [],
  })
  .openapi('InvoiceDetailListExpandVO')

const InvoiceItemDetailVOSchema = z
  .object({
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    invoice_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_cost: BigDecimalSchema.exactOptional(),
    item_quantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_shipping: BigDecimalSchema.exactOptional(),
    item_sub_total: BigDecimalSchema.exactOptional(),
    item_tax: BigDecimalSchema.exactOptional(),
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipment_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    transactional_item_cost: BigDecimalSchema.exactOptional(),
    transactional_item_shipping: BigDecimalSchema.exactOptional(),
    transactional_item_sub_total: BigDecimalSchema.exactOptional(),
    transactional_item_tax: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.InvoiceItemDetailVO', required: [] })
  .openapi('InvoiceItemDetailVO')

const InvoiceDetailVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    invoice_date: z.iso.date().exactOptional().openapi({ description: '' }),
    invoice_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    invoice_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    invoice_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample invoice_number' }),
    invoice_to: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample invoice_to' }),
    is_final: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    is_nonBillable: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    items: z.array(InvoiceItemDetailVOSchema).exactOptional().openapi({ description: '' }),
    order_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_reference' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_method' }),
    prepared_by: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample prepared_by' }),
    project_number: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    sub_total: BigDecimalSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_sub_total: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.InvoiceDetailVO', required: [] })
  .openapi('InvoiceDetailVO')

const InvoiceExpandVOSchema = z
  .object({
    result: InvoiceDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.InvoiceExpandVO', required: [] })
  .openapi('InvoiceExpandVO')

const MapSchema = z.any().openapi({ description: 'Java type: java.util.Map' }).openapi('Map')

const MultiExchangeRateListVOSchema = z
  .object({
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.MultiExchangeRateListVO',
    required: [],
  })
  .openapi('MultiExchangeRateListVO')

const MultiExchangeRatePersisitVOSchema = z
  .object({
    activate_date: z.iso.date().exactOptional().openapi({ description: '' }),
    buClientWorkgroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    rate: BigDecimalSchema.exactOptional(),
    target: z.string().exactOptional().openapi({ description: '', example: 'sample target' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.MultiExchangeRatePersisitVO',
    required: [],
  })
  .openapi('MultiExchangeRatePersisitVO')

const MultiExchangeRatePersistListVOSchema = z
  .object({
    exchange_rates: z
      .array(MultiExchangeRatePersisitVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.MultiExchangeRatePersistListVO',
    required: [],
  })
  .openapi('MultiExchangeRatePersistListVO')

const ObjectSchema = z
  .any()
  .openapi({ description: 'Java type: java.lang.Object' })
  .openapi('Object')

const ObjectStateSimpleVOSchema = z
  .object({
    object_state_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    object_state_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample object_state_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ObjectStateSimpleVO', required: [] })
  .openapi('ObjectStateSimpleVO')

const ObjectStateListVOSchema = z
  .object({
    results: z.array(ObjectStateSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ObjectStateListVO', required: [] })
  .openapi('ObjectStateListVO')

const UserVOSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UserVO', required: [] })
  .openapi('UserVO')

const OrderDetailBaseVOSchema = z
  .object({
    accepted_date: z.iso.date().exactOptional().openapi({ description: '' }),
    annulled_date: z.iso.date().exactOptional().openapi({ description: '' }),
    approved_date: z.iso.date().exactOptional().openapi({ description: '' }),
    awarded_date: z.iso.date().exactOptional().openapi({ description: '' }),
    budget_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample budget_type' }),
    buyer: UserVOSchema.exactOptional(),
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample classification' }),
    closed_date: z.iso.date().exactOptional().openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    item_count: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    last_activity_date: z.iso.date().exactOptional().openapi({ description: '' }),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    misc_cost: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    order_total: BigDecimalSchema.exactOptional(),
    overs_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    parent_order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier: UserVOSchema.exactOptional(),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_selection_reason' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_order_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    unders_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderDetailBaseVO', required: [] })
  .openapi('OrderDetailBaseVO')

const SpecBaseVOSchema = z
  .object({
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecBaseVO', required: [] })
  .openapi('SpecBaseVO')

const OrderItemSimpleVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_price: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    quantity: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    shipping: BigDecimalSchema.exactOptional(),
    spec: SpecBaseVOSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_item_price: z
      .float64()
      .exactOptional()
      .openapi({ description: '', example: '1.1' }),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    transactional_unit_price: BigDecimalSchema.exactOptional(),
    unit_description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample unit_description' }),
    unit_price: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderItemSimpleVO', required: [] })
  .openapi('OrderItemSimpleVO')

const OrderDetailVOSchema = z
  .object({
    accepted_date: z.iso.date().exactOptional().openapi({ description: '' }),
    annulled_date: z.iso.date().exactOptional().openapi({ description: '' }),
    approved_date: z.iso.date().exactOptional().openapi({ description: '' }),
    awarded_date: z.iso.date().exactOptional().openapi({ description: '' }),
    budget_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample budget_type' }),
    buyer: UserVOSchema.exactOptional(),
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    change_orders: z.array(OrderDetailBaseVOSchema).exactOptional().openapi({ description: '' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample classification' }),
    closed_date: z.iso.date().exactOptional().openapi({ description: '' }),
    closing_change_orders: z
      .array(OrderDetailBaseVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    grand_total_with_changes: BigDecimalSchema.exactOptional(),
    item_count: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    last_activity_date: z.iso.date().exactOptional().openapi({ description: '' }),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    misc_cost: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_items: z.array(OrderItemSimpleVOSchema).exactOptional().openapi({ description: '' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    order_total: BigDecimalSchema.exactOptional(),
    overs_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    parent_order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier: UserVOSchema.exactOptional(),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_selection_reason' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_grand_total_with_changes: BigDecimalSchema.exactOptional(),
    transactional_order_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    unders_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderDetailVO', required: [] })
  .openapi('OrderDetailVO')

const OrderDetailWithIndicatorVOSchema = z
  .object({
    accepted_date: z.iso.date().exactOptional().openapi({ description: '' }),
    annulled_date: z.iso.date().exactOptional().openapi({ description: '' }),
    approved_date: z.iso.date().exactOptional().openapi({ description: '' }),
    awarded_date: z.iso.date().exactOptional().openapi({ description: '' }),
    budget_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample budget_type' }),
    buyer: UserVOSchema.exactOptional(),
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    change_orders: z.array(OrderDetailBaseVOSchema).exactOptional().openapi({ description: '' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample classification' }),
    closed_date: z.iso.date().exactOptional().openapi({ description: '' }),
    closing_change_orders: z
      .array(OrderDetailBaseVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    grand_total_with_changes: BigDecimalSchema.exactOptional(),
    is_sell_order: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    item_count: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    last_activity_date: z.iso.date().exactOptional().openapi({ description: '' }),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    misc_cost: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_items: z.array(OrderItemSimpleVOSchema).exactOptional().openapi({ description: '' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    order_total: BigDecimalSchema.exactOptional(),
    overs_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    parent_order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier: UserVOSchema.exactOptional(),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_selection_reason' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_grand_total_with_changes: BigDecimalSchema.exactOptional(),
    transactional_order_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    unders_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.OrderDetailWithIndicatorVO',
    required: [],
  })
  .openapi('OrderDetailWithIndicatorVO')

const OrderDetailWorkgroupLevelVOSchema = z
  .object({
    accepted_date: z.iso.date().exactOptional().openapi({ description: '' }),
    annulled_date: z.iso.date().exactOptional().openapi({ description: '' }),
    approved_date: z.iso.date().exactOptional().openapi({ description: '' }),
    awarded_date: z.iso.date().exactOptional().openapi({ description: '' }),
    budget_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample budget_type' }),
    buyer: UserVOSchema.exactOptional(),
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    change_orders: z.array(OrderDetailBaseVOSchema).exactOptional().openapi({ description: '' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample classification' }),
    closed_date: z.iso.date().exactOptional().openapi({ description: '' }),
    closing_change_orders: z
      .array(OrderDetailBaseVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    grand_total: BigDecimalSchema.exactOptional(),
    grand_total_with_changes: BigDecimalSchema.exactOptional(),
    item_count: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    last_activity_date: z.iso.date().exactOptional().openapi({ description: '' }),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    misc_cost: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_items: z.array(OrderItemSimpleVOSchema).exactOptional().openapi({ description: '' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    order_total: BigDecimalSchema.exactOptional(),
    overs_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    parent_order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    project: ProjectBaseVOSchema.exactOptional(),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier: UserVOSchema.exactOptional(),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_selection_reason' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_grand_total_with_changes: BigDecimalSchema.exactOptional(),
    transactional_order_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    unders_percent: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.OrderDetailWorkgroupLevelVO',
    required: [],
  })
  .openapi('OrderDetailWorkgroupLevelVO')

const OrderExpandWorkgroupLevelVOSchema = z
  .object({
    result: OrderDetailWorkgroupLevelVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.OrderExpandWorkgroupLevelVO',
    required: [],
  })
  .openapi('OrderExpandWorkgroupLevelVO')

const OrderItemPersistVOSchema = z
  .object({
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    ex_tax_value_calculated: BigDecimalSchema.exactOptional(),
    notes: z.string().exactOptional().openapi({ description: '', example: 'sample notes' }),
    per: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    price: BigDecimalSchema.exactOptional(),
    quantity: BigDecimalSchema.exactOptional(),
    shipping: BigDecimalSchema.exactOptional(),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_reference_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    tax: z.string().exactOptional().openapi({ description: '', example: 'sample tax' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.OrderItemPersistVO',
    required: [],
  })
  .openapi('OrderItemPersistVO')

const OrderSimpleBaseVOSchema = z
  .object({
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderSimpleBaseVO', required: [] })
  .openapi('OrderSimpleBaseVO')

const OrderSimpleVOSchema = z
  .object({
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    change_orders: z.array(OrderSimpleBaseVOSchema).exactOptional().openapi({ description: '' }),
    closing_change_orders: z
      .array(OrderSimpleBaseVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    grand_total_with_changes: BigDecimalSchema.exactOptional(),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_grand_total_with_changes: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderSimpleVO', required: [] })
  .openapi('OrderSimpleVO')

const OrderListVOSchema = z
  .object({
    results: z.array(OrderSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderListVO', required: [] })
  .openapi('OrderListVO')

const OrderPOSchema = z
  .object({
    buyer_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    invoice_or_billing_recipient: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    order_items: z.array(OrderItemPersistVOSchema).exactOptional().openapi({ description: '' }),
    other_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample other_selection_reason' }),
    payment_method_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference_no: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference_no' }),
    sellOrder: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    shipping: BigDecimalSchema.exactOptional(),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_selection_reason_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    supplier_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    tax: z.string().exactOptional().openapi({ description: '', example: 'sample tax' }),
    title: z.string().exactOptional().openapi({ description: '', example: 'sample title' }),
  })
  .openapi({ description: 'Java type: com.noosh.domain.nooshapi.persist.po.OrderPO', required: [] })
  .openapi('OrderPO')

const OrderUpdPersistVOSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'accept or reject', example: 'sample action' }),
    budget_type_field_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    order_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    other_selection_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample other_selection_reason' }),
    overs_percent: BigDecimalSchema.exactOptional(),
    payment_method_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    payment_reference_no: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference_no' }),
    reject_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reject_reason' }),
    supplier_selection_reason_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    unders_percent: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderUpdPersistVO', required: [] })
  .openapi('OrderUpdPersistVO')

const OrderVOSchema = z
  .object({
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.OrderVO', required: [] })
  .openapi('OrderVO')

const OrderWorkgroupLevelSimpleVOSchema = z
  .object({
    buyer_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    change_orders: z.array(OrderSimpleBaseVOSchema).exactOptional().openapi({ description: '' }),
    closing_change_orders: z
      .array(OrderSimpleBaseVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    grand_total_with_changes: BigDecimalSchema.exactOptional(),
    last_changed: z.iso.date().exactOptional().openapi({ description: '' }),
    last_status_change: z.iso.date().exactOptional().openapi({ description: '' }),
    order_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_number' }),
    order_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample order_title' }),
    payment_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample payment_reference' }),
    print_order_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
    project: ProjectBaseVOSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    status_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_comments' }),
    supplier_reference: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_reference' }),
    supplier_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_grand_total_with_changes: BigDecimalSchema.exactOptional(),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelSimpleVO',
    required: [],
  })
  .openapi('OrderWorkgroupLevelSimpleVO')

const OrderWorkgroupLevelListVOSchema = z
  .object({
    results: z
      .array(OrderWorkgroupLevelSimpleVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelListVO',
    required: [],
  })
  .openapi('OrderWorkgroupLevelListVO')

const ProductTypeVOSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: '', example: 'sample label' }),
    product_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProductTypeVO', required: [] })
  .openapi('ProductTypeVO')

const ProfileImageVOSchema = z
  .object({
    profileImgUrl: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample profileImgUrl' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProfileImageVO', required: [] })
  .openapi('ProfileImageVO')

const ProjectCategorySimpleVOSchema = z
  .object({
    project_category_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_category_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_category_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ProjectCategorySimpleVO',
    required: [],
  })
  .openapi('ProjectCategorySimpleVO')

const ProjectCategoryListVOSchema = z
  .object({
    results: z.array(ProjectCategorySimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectCategoryListVO', required: [] })
  .openapi('ProjectCategoryListVO')

const ProjectParentVOSchema = z
  .object({
    client_account: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_account' }),
    client_user: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_user' }),
    client_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    created_by: PersonVOSchema.exactOptional(),
    project_create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    project_description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_description' }),
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectParentVO', required: [] })
  .openapi('ProjectParentVO')

const ProjectDetailVOSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: '', example: 'sample category' }),
    client_account: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_account' }),
    client_user: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_user' }),
    client_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    deactivation_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample deactivation_reason' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_hot: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_spec_update: z.iso.date().exactOptional().openapi({ description: '' }),
    mod_date: z.iso.date().exactOptional().openapi({ description: '' }),
    owner_workgroup: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample owner_workgroup' }),
    parent_project: ProjectParentVOSchema.exactOptional(),
    project_create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    project_description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_description' }),
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
    project_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_status' }),
    team_owners: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample team_owners' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectDetailVO', required: [] })
  .openapi('ProjectDetailVO')

const ProjectExpandVOSchema = z
  .object({
    result: ProjectDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectExpandVO', required: [] })
  .openapi('ProjectExpandVO')

const UserFieldsSimpleVOSchema = z
  .object({
    is_required: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    label: z.string().exactOptional().openapi({ description: '', example: 'sample label' }),
    ordinal_number: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
    type: z.string().exactOptional().openapi({ description: '', example: 'sample type' }),
    user_field_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UserFieldsSimpleVO', required: [] })
  .openapi('UserFieldsSimpleVO')

const ProjectHomeUserFieldsListVOSchema = z
  .object({
    results: z.array(UserFieldsSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ProjectHomeUserFieldsListVO',
    required: [],
  })
  .openapi('ProjectHomeUserFieldsListVO')

const ProjectIdListVOSchema = z
  .object({
    childProjectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.ProjectIdListVO',
    required: [],
  })
  .openapi('ProjectIdListVO')

const ProjectSimpleVOSchema = z
  .object({
    client_account: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_account' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_hot: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_spec_update: z.iso.date().exactOptional().openapi({ description: '' }),
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
    project_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_status' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectSimpleVO', required: [] })
  .openapi('ProjectSimpleVO')

const ProjectListVOSchema = z
  .object({
    results: z.array(ProjectSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectListVO', required: [] })
  .openapi('ProjectListVO')

const ProjectPatchPOSchema = z
  .object({
    client_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    deactivation_reason_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_hot: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    project_category_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_description' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
    project_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.ProjectPatchPO',
    required: [],
  })
  .openapi('ProjectPatchPO')

const ProjectPersistVOSchema = z
  .object({
    client_account: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_account' }),
    client_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    deactivation_reason_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_hot: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_paper_direct: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    project_category_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_description' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
    project_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_number' }),
    project_owner_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.ProjectPersistVO',
    required: ['project_status_id'],
  })
  .openapi('ProjectPersistVO')

const ProjectStatusSimpleVOSchema = z
  .object({
    project_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_status_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_status_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectStatusSimpleVO', required: [] })
  .openapi('ProjectStatusSimpleVO')

const ProjectStatusListVOSchema = z
  .object({
    results: z.array(ProjectStatusSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectStatusListVO', required: [] })
  .openapi('ProjectStatusListVO')

const ProjectTimeCardVOSchema = z
  .object({
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample project_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectTimeCardVO', required: [] })
  .openapi('ProjectTimeCardVO')

const ProjectVOSchema = z
  .object({
    project_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ProjectVO', required: [] })
  .openapi('ProjectVO')

const PropertyParamSimpleVOSchema = z
  .object({
    data_type: z.string().exactOptional().openapi({ description: '', example: 'sample data_type' }),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.PropertyParamSimpleVO', required: [] })
  .openapi('PropertyParamSimpleVO')

const PropertyParamListVOSchema = z
  .object({
    result: z.array(PropertyParamSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.PropertyParamListVO', required: [] })
  .openapi('PropertyParamListVO')

const PropertyPersistVOSchema = z
  .object({
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    paper_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.PropertyPersistVO', required: [] })
  .openapi('PropertyPersistVO')

const QuoteBaseVOSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quote_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample quote_title' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteBaseVO', required: [] })
  .openapi('QuoteBaseVO')

const QuotePriceSourceVOSchema = z
  .any()
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuotePriceSourceVO' })
  .openapi('QuotePriceSourceVO')

const QuotePriceDetailVOSchema = z
  .object({
    breakouts: z.array(BreakoutVOSchema).exactOptional().openapi({ description: '' }),
    cost: BigDecimalSchema.exactOptional(),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    fixed: BigDecimalSchema.exactOptional(),
    is_chosen: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_included: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_quoted: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    parent_price_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    price_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity: BigDecimalSchema.exactOptional(),
    sell_price: BigDecimalSchema.exactOptional(),
    shipping: BigDecimalSchema.exactOptional(),
    source: QuotePriceSourceVOSchema.exactOptional(),
    supplier: z.string().exactOptional().openapi({ description: '', example: 'sample supplier' }),
    tax: BigDecimalSchema.exactOptional(),
    total: BigDecimalSchema.exactOptional(),
    transactional_cost: BigDecimalSchema.exactOptional(),
    transactional_fixed: BigDecimalSchema.exactOptional(),
    transactional_sell_price: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    transactional_total: BigDecimalSchema.exactOptional(),
    transactional_variable: BigDecimalSchema.exactOptional(),
    variable: BigDecimalSchema.exactOptional(),
    variable_percent: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuotePriceDetailVO', required: [] })
  .openapi('QuotePriceDetailVO')

const QuoteItemDetailVOSchema = z
  .object({
    chosen_quantity: BigDecimalSchema.exactOptional(),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    item_prices: z.array(QuotePriceDetailVOSchema).exactOptional().openapi({ description: '' }),
    item_shipping_total: BigDecimalSchema.exactOptional(),
    item_tax_total: BigDecimalSchema.exactOptional(),
    item_total: BigDecimalSchema.exactOptional(),
    reason_for_quote_selection: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reason_for_quote_selection' }),
    show_cost_prices_and_markup: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    spec: SpecBaseVOSchema.exactOptional(),
    transactional_item_shipping_total: BigDecimalSchema.exactOptional(),
    transactional_item_tax_total: BigDecimalSchema.exactOptional(),
    transactional_item_total: BigDecimalSchema.exactOptional(),
    vat_code: z.string().exactOptional().openapi({ description: '', example: 'sample vat_code' }),
    vat_rate: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteItemDetailVO', required: [] })
  .openapi('QuoteItemDetailVO')

const QuoteDetailVOSchema = z
  .object({
    client: z.string().exactOptional().openapi({ description: '', example: 'sample client' }),
    client_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    creator_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    grand_total: BigDecimalSchema.exactOptional(),
    is_show_supplier_information: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    last_update_by_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    proposed_order_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    quote_expiration_date: z.iso.date().exactOptional().openapi({ description: '' }),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quote_items: z.array(QuoteItemDetailVOSchema).exactOptional().openapi({ description: '' }),
    quote_items_total: BigDecimalSchema.exactOptional(),
    quote_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample quote_title' }),
    shipping: BigDecimalSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    tax: BigDecimalSchema.exactOptional(),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
    transactional_quote_items_total: BigDecimalSchema.exactOptional(),
    transactional_shipping: BigDecimalSchema.exactOptional(),
    transactional_tax: BigDecimalSchema.exactOptional(),
    vat_code: z.string().exactOptional().openapi({ description: '', example: 'sample vat_code' }),
    vat_rate: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteDetailVO', required: [] })
  .openapi('QuoteDetailVO')

const QuoteExpandVOSchema = z
  .object({
    result: QuoteDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteExpandVO', required: [] })
  .openapi('QuoteExpandVO')

const RfqBaseVOSchema = z
  .object({
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    rfq_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfq_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfq_title' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqBaseVO', required: [] })
  .openapi('RfqBaseVO')

const QuoteSimpleVOSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quote_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample quote_title' }),
    rfq: RfqBaseVOSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteSimpleVO', required: [] })
  .openapi('QuoteSimpleVO')

const QuoteListVOSchema = z
  .object({
    result: z.array(QuoteSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteListVO', required: [] })
  .openapi('QuoteListVO')

const QuoteOfWgLevelSimpleVOSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: '', example: 'sample currency' }),
    grand_total: BigDecimalSchema.exactOptional(),
    project: ProjectBaseVOSchema.exactOptional(),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quote_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample quote_title' }),
    rfq: RfqBaseVOSchema.exactOptional(),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    transactional_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample transactional_currency' }),
    transactional_grand_total: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.QuoteOfWgLevelSimpleVO', required: [] })
  .openapi('QuoteOfWgLevelSimpleVO')

const QuotePutPersistVOSchema = z
  .object({
    action: z.string().exactOptional().openapi({ description: '', example: 'sample action' }),
    po_number: z.string().exactOptional().openapi({ description: '', example: 'sample po_number' }),
    quote_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    state_change_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample state_change_comments' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.QuotePutPersistVO',
    required: [],
  })
  .openapi('QuotePutPersistVO')

const RfeItemOptionVOSchema = z
  .object({
    item_option_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity: BigDecimalSchema.exactOptional(),
    quantity_index: z.int32().exactOptional().openapi({ description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeItemOptionVO', required: [] })
  .openapi('RfeItemOptionVO')

const RfeItemSimpleEXTVOSchema = z
  .object({
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfe_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfe_item_options: z.array(RfeItemOptionVOSchema).exactOptional().openapi({ description: '' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeItemSimpleEXTVO', required: [] })
  .openapi('RfeItemSimpleEXTVO')

const RfeSuEstimateSimpleVOSchema = z
  .object({
    supplier_estimates: z
      .array(EstimateSimpleVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeSuEstimateSimpleVO', required: [] })
  .openapi('RfeSuEstimateSimpleVO')

const RfeDetailsVOSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    details: z.string().exactOptional().openapi({ description: '', example: 'sample details' }),
    estimate_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    estimators: z
      .array(z.string().openapi({ example: 'sample estimators' }))
      .exactOptional()
      .openapi({ description: '' }),
    itemized_tax_and_shipping: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    proposed_order_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    requestor: z.string().exactOptional().openapi({ description: '', example: 'sample requestor' }),
    rfe_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfe_items: z.array(RfeItemSimpleEXTVOSchema).exactOptional().openapi({ description: '' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    submitted_date: z.iso.date().exactOptional().openapi({ description: '' }),
    supplier_estimates: z
      .array(RfeSuEstimateSimpleVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    title: z.string().exactOptional().openapi({ description: '', example: 'sample title' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeDetailsVO', required: [] })
  .openapi('RfeDetailsVO')

const RfeExpandVOSchema = z
  .object({
    result: RfeDetailsVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeExpandVO', required: [] })
  .openapi('RfeExpandVO')

const RfeItemSimpleVOSchema = z
  .object({
    rfe_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeItemSimpleVO', required: [] })
  .openapi('RfeItemSimpleVO')

const RfeSimpleVOSchema = z
  .object({
    estimate_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    rfe_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfe_items: z.array(RfeItemSimpleVOSchema).exactOptional().openapi({ description: '' }),
    rfe_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfe_title' }),
    supplier_estimates: z
      .array(RfeSuEstimateSimpleVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeSimpleVO', required: [] })
  .openapi('RfeSimpleVO')

const RfeListVOSchema = z
  .object({
    results: z.array(RfeSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfeListVO', required: [] })
  .openapi('RfeListVO')

const RfeSpecPOSchema = z
  .object({
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.RfeSpecPO',
    required: [],
  })
  .openapi('RfeSpecPO')

const RfePOSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    details: z.string().exactOptional().openapi({ description: '', example: 'sample details' }),
    estimate_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    proposed_order_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    rfe_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample rfe_number' }),
    rfe_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfe_title' }),
    specs: z.array(RfeSpecPOSchema).exactOptional().openapi({ description: '' }),
    supplier_user_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: '1' }),
      )
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({ description: 'Java type: com.noosh.domain.nooshapi.persist.po.RfePO', required: [] })
  .openapi('RfePO')

const RfqItemBaseVOSchema = z
  .object({
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfq_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec: ErgoSpecSimpleVOSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqItemBaseVO', required: [] })
  .openapi('RfqItemBaseVO')

const RfqDetailsVOSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    proposed_completion_date: z.iso.date().exactOptional().openapi({ description: '' }),
    quote_due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    quotes: z.array(QuoteBaseVOSchema).exactOptional().openapi({ description: '' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    recipient_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample recipient_name' }),
    requestor_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample requestor_name' }),
    rfq_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfq_items: z.array(RfqItemBaseVOSchema).exactOptional().openapi({ description: '' }),
    rfq_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfq_title' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqDetailsVO', required: [] })
  .openapi('RfqDetailsVO')

const RfqExpandVOSchema = z
  .object({
    result: RfqDetailsVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqExpandVO', required: [] })
  .openapi('RfqExpandVO')

const RfqSimpleVOSchema = z
  .object({
    quotes: z.array(QuoteBaseVOSchema).exactOptional().openapi({ description: '' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    rfq_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    rfq_title: z.string().exactOptional().openapi({ description: '', example: 'sample rfq_title' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqSimpleVO', required: [] })
  .openapi('RfqSimpleVO')

const RfqListVOSchema = z
  .object({
    result: z.array(RfqSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqListVO', required: [] })
  .openapi('RfqListVO')

const RfqVOSchema = z
  .object({
    rfq_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RfqVO', required: [] })
  .openapi('RfqVO')

const RoleSimpleVOSchema = z
  .object({
    role_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    role_name: z.string().exactOptional().openapi({ description: '', example: 'sample role_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RoleSimpleVO', required: [] })
  .openapi('RoleSimpleVO')

const RoleListVOSchema = z
  .object({
    result: z.array(RoleSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.RoleListVO', required: [] })
  .openapi('RoleListVO')

const ShipmentRequestBaseVOSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: '', example: 'sample city' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample company_name' }),
    country: z.string().exactOptional().openapi({ description: '', example: 'sample country' }),
    country_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample country_code' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    description_or_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description_or_title' }),
    due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    is_use_spec_packaging: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    line_1: z.string().exactOptional().openapi({ description: '', example: 'sample line_1' }),
    line_2: z.string().exactOptional().openapi({ description: '', example: 'sample line_2' }),
    line_3: z.string().exactOptional().openapi({ description: '', example: 'sample line_3' }),
    location_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
    postal: z.string().exactOptional().openapi({ description: '', example: 'sample postal' }),
    proof_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample proof_type' }),
    qty_received: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_requested: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_shipped: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    received_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample received_comments' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    requested_shipping_carrier: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample requested_shipping_carrier' }),
    requested_shipping_method: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample requested_shipping_method' }),
    shipped_comments: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipped_comments' }),
    shipped_date: z.iso.date().exactOptional().openapi({ description: '' }),
    shipped_in_units: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipped_in_uofm: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipped_in_uofm' }),
    shipped_shipping_carrier: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipped_shipping_carrier' }),
    shipped_shipping_method: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipped_shipping_method' }),
    shipping_cost: BigDecimalSchema.exactOptional(),
    shipping_instruction: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipping_instruction' }),
    state: z.string().exactOptional().openapi({ description: '', example: 'sample state' }),
    tax: BigDecimalSchema.exactOptional(),
    tracking_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample tracking_number' }),
    type: z.string().exactOptional().openapi({ description: '', example: 'sample type' }),
    weight: BigDecimalSchema.exactOptional(),
    weight_uofm: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample weight_uofm' }),
    work_phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample work_phone_number' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ShipmentRequestBaseVO', required: [] })
  .openapi('ShipmentRequestBaseVO')

const ShipmentDetailVOSchema = z
  .object({
    locations: z.array(ShipmentRequestBaseVOSchema).exactOptional().openapi({ description: '' }),
    locations_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_received: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_requested: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_shipped: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    shipment_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipment_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipment_status' }),
    shipped_date: z.iso.date().exactOptional().openapi({ description: '' }),
    spec: SpecBaseVOSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ShipmentDetailVO', required: [] })
  .openapi('ShipmentDetailVO')

const ShipmentExpandVOSchema = z
  .object({
    result: ShipmentDetailVOSchema.exactOptional(),
    resut: ShipmentDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ShipmentExpandVO', required: [] })
  .openapi('ShipmentExpandVO')

const ShipmentSimpleVOSchema = z
  .object({
    locations_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_received: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_requested: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_shipped: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    shipment_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipment_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipment_status' }),
    shipped_date: z.iso.date().exactOptional().openapi({ description: '' }),
    spec: SpecBaseVOSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ShipmentSimpleVO', required: [] })
  .openapi('ShipmentSimpleVO')

const ShipmentListVOSchema = z
  .object({
    result: z.array(ShipmentSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ShipmentListVO', required: [] })
  .openapi('ShipmentListVO')

const ShipmentLocationPersistVOSchema = z
  .object({
    due_date: z.iso.date().exactOptional().openapi({ description: '' }),
    qty_received: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_requested: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    qty_shipped: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    received_date: z.iso.date().exactOptional().openapi({ description: '' }),
    shipped_date: z.iso.date().exactOptional().openapi({ description: '' }),
    shipping_cost: BigDecimalSchema.exactOptional(),
    type: z.string().exactOptional().openapi({ description: '', example: 'sample type' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPersistVO',
    required: [],
  })
  .openapi('ShipmentLocationPersistVO')

const ShipmentLocationPostPersistVOSchema = z
  .object({
    address_line1: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line1' }),
    address_line2: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line2' }),
    address_line3: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line3' }),
    batch_label: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample batch_label' }),
    city: z.string().exactOptional().openapi({ description: '', example: 'sample city' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample company_name' }),
    country_iso_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample country_iso_code' }),
    delivery_date: z.iso.date().exactOptional().openapi({ description: '' }),
    description_or_title: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description_or_title' }),
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    inner_carton_label: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample inner_carton_label' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
    outer_carton_label: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample outer_carton_label' }),
    pallet_lablel: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample pallet_lablel' }),
    poof_type: z.string().exactOptional().openapi({ description: '', example: 'sample poof_type' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample postal_code' }),
    request_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample request_type' }),
    requested_quantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipment_custom_fields: z
      .array(CustomFieldPersistVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    shipment_request_custom_fields: z
      .array(CustomFieldPersistVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    shipping_carrier: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipping_carrier' }),
    shipping_instruction: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shipping_instruction' }),
    shpping_method: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample shpping_method' }),
    spec_ids: z.string().exactOptional().openapi({ description: '', example: 'sample spec_ids' }),
    state: z.string().exactOptional().openapi({ description: '', example: 'sample state' }),
    work_phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample work_phone_number' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPostPersistVO',
    required: [],
  })
  .openapi('ShipmentLocationPostPersistVO')

const ShipmentLocationsPOSTVOSchema = z
  .object({
    location_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    shipment_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTVO',
    required: [],
  })
  .openapi('ShipmentLocationsPOSTVO')

const ShipmentLocationsPOSTResultVOSchema = z
  .object({
    results: z.array(ShipmentLocationsPOSTVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTResultVO',
    required: [],
  })
  .openapi('ShipmentLocationsPOSTResultVO')

const SpecHTTPStatusVOSchema = z
  .object({
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecHTTPStatusVO', required: [] })
  .openapi('SpecHTTPStatusVO')

const SpecSimpleVOSchema: z.ZodType<SpecSimpleVOType> = z
  .lazy(() =>
    z
      .object({
        client_status: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: 'sample client_status' }),
        create_date: z.iso.date().exactOptional().openapi({ description: '' }),
        created_by: PersonVOSchema.exactOptional(),
        job_id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
        last_updated: z.iso.date().exactOptional().openapi({ description: '' }),
        reference_number: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: 'sample reference_number' }),
        spec_id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
        spec_name: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: 'sample spec_name' }),
        spec_options_complete: z
          .array(SpecSimpleVOSchema)
          .exactOptional()
          .openapi({ description: '' }),
        supplier_status: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: 'sample supplier_status' }),
        uofms: z.array(UofmSimpleVOSchema).exactOptional().openapi({ description: '' }),
        user_state: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: 'sample user_state' }),
      })
      .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecSimpleVO', required: [] }),
  )
  .openapi('SpecSimpleVO')

const SpecListVOSchema = z
  .object({
    results: z.array(SpecSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecListVO', required: [] })
  .openapi('SpecListVO')

const SpecVersionPersistVOSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    qty: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.SpecVersionPersistVO',
    required: [],
  })
  .openapi('SpecVersionPersistVO')

const SpecPersistVOSchema = z
  .object({
    jsonBody: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    product_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    sku: z.string().exactOptional().openapi({ description: '', example: 'sample sku' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    spec_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    versions: z.array(SpecVersionPersistVOSchema).exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.SpecPersistVO',
    required: [],
  })
  .openapi('SpecPersistVO')

const SpecSimplestVOSchema = z
  .object({
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecSimplestVO', required: [] })
  .openapi('SpecSimplestVO')

const SpecTypeVOSchema = z
  .object({
    spec_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_type_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample spec_type_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecTypeVO', required: [] })
  .openapi('SpecTypeVO')

const SpecTemplateDetailVOSchema = z
  .object({
    created_by: PersonVOSchema.exactOptional(),
    created_date: z.iso.date().exactOptional().openapi({ description: '' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_externally_published: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    is_locked: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_date: z.iso.date().exactOptional().openapi({ description: '' }),
    product_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample product_type' }),
    product_type_info: ProductTypeVOSchema.exactOptional(),
    spec_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_template_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample spec_template_name' }),
    spec_type: SpecTypeVOSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecTemplateDetailVO', required: [] })
  .openapi('SpecTemplateDetailVO')

const SpecTemplateExpandVOSchema = z
  .object({
    result: SpecTemplateDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecTemplateExpandVO', required: [] })
  .openapi('SpecTemplateExpandVO')

const SpecTemplateSimpleVOSchema = z
  .object({
    created_by: PersonVOSchema.exactOptional(),
    created_date: z.iso.date().exactOptional().openapi({ description: '' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_externally_published: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    is_locked: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_date: z.iso.date().exactOptional().openapi({ description: '' }),
    spec_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_template_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample spec_template_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecTemplateSimpleVO', required: [] })
  .openapi('SpecTemplateSimpleVO')

const SpecTemplateListVOSchema = z
  .object({
    results: z.array(SpecTemplateSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecTemplateListVO', required: [] })
  .openapi('SpecTemplateListVO')

const SpecTypeFieldsVOSchema = z
  .any()
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.v1x1.SpecTypeFieldsVO' })
  .openapi('SpecTypeFieldsVO')

const SpecTypeFieldsListVOSchema = z
  .object({
    result: SpecTypeFieldsVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.v1x1.SpecTypeFieldsListVO',
    required: [],
  })
  .openapi('SpecTypeFieldsListVO')

const SpecTypePersistVOSchema = z
  .object({
    prdType_labels: z
      .array(z.string().openapi({ example: 'sample prdType_labels' }))
      .exactOptional()
      .openapi({ description: '' }),
    spec_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.SpecTypePersistVO',
    required: [],
  })
  .openapi('SpecTypePersistVO')

const SpecUpdatePersistVOSchema = z
  .object({
    inks_and_paper: z.array(PropertyPersistVOSchema).exactOptional().openapi({ description: '' }),
    product_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    sku: z.string().exactOptional().openapi({ description: '', example: 'sample sku' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecUpdatePersistVO', required: [] })
  .openapi('SpecUpdatePersistVO')

const SpecVOSchema = z
  .object({
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.SpecVO', required: [] })
  .openapi('SpecVO')

const SupplierWorkgroupBasicVOSchema = z
  .object({
    bu_supplier_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    bu_supplier_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample bu_supplier_workgroup_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.SupplierWorkgroupBasicVO',
    required: [],
  })
  .openapi('SupplierWorkgroupBasicVO')

const SupplierWorkgroupDetailVOSchema = z
  .object({
    additional_workgroups_contain_same_supplier: z
      .array(SupplierWorkgroupBasicVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    bu_supplier_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    bu_supplier_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample bu_supplier_workgroup_name' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_workgroup_name' }),
    is_approved: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    supplier_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_code' }),
    supplier_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    supplier_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_workgroup_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.SupplierWorkgroupDetailVO',
    required: [],
  })
  .openapi('SupplierWorkgroupDetailVO')

const SupplierWorkgroupExpandVOSchema = z
  .object({
    result: SupplierWorkgroupDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.SupplierWorkgroupExpandVO',
    required: [],
  })
  .openapi('SupplierWorkgroupExpandVO')

const SupplierWorkgroupSimpleVOSchema = z
  .object({
    bu_supplier_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    bu_supplier_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample bu_supplier_workgroup_name' }),
    client_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    client_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_workgroup_name' }),
    is_approved: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    supplier_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_code' }),
    supplier_workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    supplier_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_workgroup_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.SupplierWorkgroupSimpleVO',
    required: [],
  })
  .openapi('SupplierWorkgroupSimpleVO')

const SupplierWorkgroupListVOSchema = z
  .object({
    result: z.array(SupplierWorkgroupSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.SupplierWorkgroupListVO',
    required: [],
  })
  .openapi('SupplierWorkgroupListVO')

const TaskCreatedVOSchema = z
  .object({
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.ne.TaskCreatedVO', required: [] })
  .openapi('TaskCreatedVO')

const TaskDetailVOSchema = z
  .object({
    actual_duration: BigDecimalSchema.exactOptional(),
    actual_end: z.iso.date().exactOptional().openapi({ description: '' }),
    actual_hours: BigDecimalSchema.exactOptional(),
    actual_start: z.iso.date().exactOptional().openapi({ description: '' }),
    assign_to: PersonVOSchema.exactOptional(),
    baseline_duration: BigDecimalSchema.exactOptional(),
    baseline_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    baseline_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample creator_workgroup_name' }),
    current_duration: BigDecimalSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    is_milestone: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_by: PersonVOSchema.exactOptional(),
    mod_date: z.iso.date().exactOptional().openapi({ description: '' }),
    percent_complete: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    plan_duration: BigDecimalSchema.exactOptional(),
    plan_end: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_start: z.iso.date().exactOptional().openapi({ description: '' }),
    priority: z.string().exactOptional().openapi({ description: '', example: 'sample priority' }),
    requested_by: PersonVOSchema.exactOptional(),
    schedule_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample schedule_code' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_name: z.string().exactOptional().openapi({ description: '', example: 'sample task_name' }),
    task_type: z.string().exactOptional().openapi({ description: '', example: 'sample task_type' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskDetailVO', required: [] })
  .openapi('TaskDetailVO')

const TaskDetailWorkgroupLevelVOSchema = z
  .object({
    actual_duration: BigDecimalSchema.exactOptional(),
    actual_end: z.iso.date().exactOptional().openapi({ description: '' }),
    actual_hours: BigDecimalSchema.exactOptional(),
    actual_start: z.iso.date().exactOptional().openapi({ description: '' }),
    assign_to: PersonVOSchema.exactOptional(),
    baseline_duration: BigDecimalSchema.exactOptional(),
    baseline_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    baseline_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    creator_workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample creator_workgroup_name' }),
    current_duration: BigDecimalSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    is_milestone: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_by: PersonVOSchema.exactOptional(),
    mod_date: z.iso.date().exactOptional().openapi({ description: '' }),
    percent_complete: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    plan_duration: BigDecimalSchema.exactOptional(),
    plan_end: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_start: z.iso.date().exactOptional().openapi({ description: '' }),
    priority: z.string().exactOptional().openapi({ description: '', example: 'sample priority' }),
    project: ProjectBaseVOSchema.exactOptional(),
    requested_by: PersonVOSchema.exactOptional(),
    schedule_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample schedule_code' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_name: z.string().exactOptional().openapi({ description: '', example: 'sample task_name' }),
    task_type: z.string().exactOptional().openapi({ description: '', example: 'sample task_type' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.TaskDetailWorkgroupLevelVO',
    required: [],
  })
  .openapi('TaskDetailWorkgroupLevelVO')

const TaskExpandVOSchema = z
  .object({
    result: TaskDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskExpandVO', required: [] })
  .openapi('TaskExpandVO')

const TaskExpandWorkgroupLevelVOSchema = z
  .object({
    result: TaskDetailWorkgroupLevelVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.TaskExpandWorkgroupLevelVO',
    required: [],
  })
  .openapi('TaskExpandWorkgroupLevelVO')

const TaskSimpleVOSchema = z
  .object({
    actual_end: z.iso.date().exactOptional().openapi({ description: '' }),
    actual_hours: BigDecimalSchema.exactOptional(),
    actual_start: z.iso.date().exactOptional().openapi({ description: '' }),
    assign_to: PersonVOSchema.exactOptional(),
    baseline_duration: BigDecimalSchema.exactOptional(),
    baseline_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    baseline_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    current_duration: BigDecimalSchema.exactOptional(),
    is_milestone: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    mod_date: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_end: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_start: z.iso.date().exactOptional().openapi({ description: '' }),
    priority: z.string().exactOptional().openapi({ description: '', example: 'sample priority' }),
    schedule_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample schedule_code' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_name: z.string().exactOptional().openapi({ description: '', example: 'sample task_name' }),
    task_type: z.string().exactOptional().openapi({ description: '', example: 'sample task_type' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskSimpleVO', required: [] })
  .openapi('TaskSimpleVO')

const TaskListVOSchema = z
  .object({
    results: z.array(TaskSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskListVO', required: [] })
  .openapi('TaskListVO')

const TaskPersistVOSchema = z
  .object({
    actual_duration: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    actual_duration_hour: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    actual_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    actual_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    assign_to_user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    comments: z.string().exactOptional().openapi({ description: '', example: 'sample comments' }),
    contributors: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample contributors' }),
    custom_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    name: z.string().exactOptional().openapi({ description: '', example: 'sample name' }),
    percentage_complete: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    priority: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    revised_duration: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    revised_duration_hour: z.float64().exactOptional().openapi({ description: '', example: '1.1' }),
    revised_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    revised_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.TaskPersistVO',
    required: [],
  })
  .openapi('TaskPersistVO')

const TaskPriorityVOSchema = z
  .object({
    task_priority_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_priority_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample task_priority_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskPriorityVO', required: [] })
  .openapi('TaskPriorityVO')

const TaskPriorityListVOSchema = z
  .object({
    results: z.array(TaskPriorityVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskPriorityListVO', required: [] })
  .openapi('TaskPriorityListVO')

const TaskStatusVOSchema = z
  .object({
    task_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_status_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample task_status_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskStatusVO', required: [] })
  .openapi('TaskStatusVO')

const TaskStatusListVOSchema = z
  .object({
    results: z.array(TaskStatusVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskStatusListVO', required: [] })
  .openapi('TaskStatusListVO')

const TaskTimeCardVOSchema = z
  .object({
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_name: z.string().exactOptional().openapi({ description: '', example: 'sample task_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskTimeCardVO', required: [] })
  .openapi('TaskTimeCardVO')

const TaskTypeSimpleVOSchema = z
  .object({
    task_type: z.string().exactOptional().openapi({ description: '', example: 'sample task_type' }),
    task_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskTypeSimpleVO', required: [] })
  .openapi('TaskTypeSimpleVO')

const TaskTypeListVOSchema = z
  .object({
    results: z.array(TaskTypeSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TaskTypeListVO', required: [] })
  .openapi('TaskTypeListVO')

const TaskWorkgroupLevelSimpleVOSchema = z
  .object({
    actual_end: z.iso.date().exactOptional().openapi({ description: '' }),
    actual_hours: BigDecimalSchema.exactOptional(),
    actual_start: z.iso.date().exactOptional().openapi({ description: '' }),
    assign_to: PersonVOSchema.exactOptional(),
    baseline_duration: BigDecimalSchema.exactOptional(),
    baseline_end_date: z.iso.date().exactOptional().openapi({ description: '' }),
    baseline_start_date: z.iso.date().exactOptional().openapi({ description: '' }),
    current_duration: BigDecimalSchema.exactOptional(),
    is_milestone: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    mod_date: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_end: z.iso.date().exactOptional().openapi({ description: '' }),
    plan_start: z.iso.date().exactOptional().openapi({ description: '' }),
    priority: z.string().exactOptional().openapi({ description: '', example: 'sample priority' }),
    project: ProjectBaseVOSchema.exactOptional(),
    schedule_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample schedule_code' }),
    status: z.string().exactOptional().openapi({ description: '', example: 'sample status' }),
    task_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    task_name: z.string().exactOptional().openapi({ description: '', example: 'sample task_name' }),
    task_type: z.string().exactOptional().openapi({ description: '', example: 'sample task_type' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelSimpleVO',
    required: [],
  })
  .openapi('TaskWorkgroupLevelSimpleVO')

const TaskWorkgroupLevelListVOSchema = z
  .object({
    results: z.array(TaskWorkgroupLevelSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelListVO',
    required: [],
  })
  .openapi('TaskWorkgroupLevelListVO')

const TeamMemberBaseInfVOSchema = z
  .object({
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
    teammember_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamMemberBaseInfVO', required: [] })
  .openapi('TeamMemberBaseInfVO')

const TeamMemberSimpleVOSchema = z
  .object({
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample company_name' }),
    name: z.string().exactOptional().openapi({ description: '', example: 'sample name' }),
    phone: z.string().exactOptional().openapi({ description: '', example: 'sample phone' }),
    role: z.string().exactOptional().openapi({ description: '', example: 'sample role' }),
    teammember_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamMemberSimpleVO', required: [] })
  .openapi('TeamMemberSimpleVO')

const TeamMemberListVOSchema = z
  .object({
    results: z.array(TeamMemberSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamMemberListVO', required: [] })
  .openapi('TeamMemberListVO')

const TeamMemberPOSchema = z
  .object({
    role_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    team_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.TeamMemberPO',
    required: [],
  })
  .openapi('TeamMemberPO')

const UserPersonVOSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UserPersonVO', required: [] })
  .openapi('UserPersonVO')

const TeamTemplateItemVOSchema = z
  .object({ role: RoleSimpleVOSchema.exactOptional(), user: UserPersonVOSchema.exactOptional() })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamTemplateItemVO', required: [] })
  .openapi('TeamTemplateItemVO')

const TeamTemplateDetailVOSchema = z
  .object({
    team_teample_item: z
      .array(TeamTemplateItemVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    team_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    team_template_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample team_template_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamTemplateDetailVO', required: [] })
  .openapi('TeamTemplateDetailVO')

const TeamTemplateExpandVOSchema = z
  .object({
    results: TeamTemplateDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamTemplateExpandVO', required: [] })
  .openapi('TeamTemplateExpandVO')

const TeamTemplateListVOSchema = z
  .object({
    results: z.array(TeamTemplateSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TeamTemplateListVO', required: [] })
  .openapi('TeamTemplateListVO')

const TimeCardLineVOSchema = z
  .object({
    activity_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample activity_name' }),
    day1_hours_spent: BigDecimalSchema.exactOptional(),
    day2_hours_spent: BigDecimalSchema.exactOptional(),
    day3_hours_spent: BigDecimalSchema.exactOptional(),
    day4_hours_spent: BigDecimalSchema.exactOptional(),
    day5_hours_spent: BigDecimalSchema.exactOptional(),
    day6_hours_spent: BigDecimalSchema.exactOptional(),
    day7_hours_spent: BigDecimalSchema.exactOptional(),
    project: ProjectTimeCardVOSchema.exactOptional(),
    task: TaskTimeCardVOSchema.exactOptional(),
    time_card_line_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    total_hours_spent: BigDecimalSchema.exactOptional(),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TimeCardLineVO', required: [] })
  .openapi('TimeCardLineVO')

const TimeCardDetailVOSchema = z
  .object({
    billable_hours: BigDecimalSchema.exactOptional(),
    is_submit: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_date: z.iso.date().exactOptional().openapi({ description: '' }),
    no_of_workdays: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    nonbillable_hours: BigDecimalSchema.exactOptional(),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    time_card_line: z.array(TimeCardLineVOSchema).exactOptional().openapi({ description: '' }),
    timecard_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    total_hours: BigDecimalSchema.exactOptional(),
    week_beginning: z.iso.date().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TimeCardDetailVO', required: [] })
  .openapi('TimeCardDetailVO')

const TimeCardSimpleVOSchema = z
  .object({
    is_submit: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_date: z.iso.date().exactOptional().openapi({ description: '' }),
    no_of_workdays: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    timecard_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    total_hours: BigDecimalSchema.exactOptional(),
    week_beginning: z.iso.date().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TimeCardSimpleVO', required: [] })
  .openapi('TimeCardSimpleVO')

const TimeCardListVOSchema = z
  .object({
    results: z.array(TimeCardSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.TimeCardListVO', required: [] })
  .openapi('TimeCardListVO')

const TimeCardReceivedDetailVOSchema = z
  .object({
    billable_hours: BigDecimalSchema.exactOptional(),
    is_submit: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    last_updated_date: z.iso.date().exactOptional().openapi({ description: '' }),
    no_of_workdays: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    nonbillable_hours: BigDecimalSchema.exactOptional(),
    owner: PersonVOSchema.exactOptional(),
    submit_date: z.iso.date().exactOptional().openapi({ description: '' }),
    time_card_line: z.array(TimeCardLineVOSchema).exactOptional().openapi({ description: '' }),
    timecard_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    total_hours: BigDecimalSchema.exactOptional(),
    week_beginning: z.iso.date().exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.TimeCardReceivedDetailVO',
    required: [],
  })
  .openapi('TimeCardReceivedDetailVO')

const UserDetailsVOSchema = z
  .object({
    address: MapSchema.exactOptional(),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample company_name' }),
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    fax_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample fax_number' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    locale: z.string().exactOptional().openapi({ description: '', example: 'sample locale' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample middle_name' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample organization' }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample phone_number' }),
    time_zone: z.string().exactOptional().openapi({ description: '', example: 'sample time_zone' }),
    title: z.string().exactOptional().openapi({ description: '', example: 'sample title' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UserDetailsVO', required: [] })
  .openapi('UserDetailsVO')

const UserDetailsExpandVOSchema = z
  .object({
    result: UserDetailsVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.UserDetailsExpandVO', required: [] })
  .openapi('UserDetailsExpandVO')

const V1x1SpecPamAndAttPOSchema = z
  .object({
    attribute_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    attribute_value: ObjectSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ description: '', example: 'sample label' }),
    param_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1SpecPamAndAttPO',
    required: [],
  })
  .openapi('V1x1SpecPamAndAttPO')

const V1x1ProperyPOSchema = z
  .object({
    property_attributes: z
      .array(V1x1SpecPamAndAttPOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    property_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    property_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample property_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO',
    required: [],
  })
  .openapi('V1x1ProperyPO')

const V1X1SpecUpdatingPOSchema = z
  .object({
    first_level_custom_fields: V1x1ProperyPOSchema.exactOptional(),
    header_custom_fields: V1x1ProperyPOSchema.exactOptional(),
    product_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    second_level_custom_fields: z
      .array(V1x1ProperyPOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    sku: z.string().exactOptional().openapi({ description: '', example: 'sample sku' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    spec_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    versions: z.array(SpecVersionPersistVOSchema).exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1X1SpecUpdatingPO',
    required: [],
  })
  .openapi('V1X1SpecUpdatingPO')

const V1x1InvitedTeamMemberVOSchema = z
  .object({
    role: RoleSimpleVOSchema.exactOptional(),
    team_member_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    user: UserPersonVOSchema.exactOptional(),
    was_invited_before: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberVO',
    required: [],
  })
  .openapi('V1x1InvitedTeamMemberVO')

const V1x1InvitedTeamMemberResultsVOSchema = z
  .object({
    results: z.array(V1x1InvitedTeamMemberVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberResultsVO',
    required: [],
  })
  .openapi('V1x1InvitedTeamMemberResultsVO')

const V1x1SpecPamAndAttVOSchema = z
  .object({
    attribute_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    attribute_value: ObjectSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ description: '', example: 'sample label' }),
    param_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    param_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample param_name' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecPamAndAttVO',
    required: [],
  })
  .openapi('V1x1SpecPamAndAttVO')

const V1x1ProperyVOSchema = z
  .object({
    property_attributes: z
      .array(V1x1SpecPamAndAttVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    property_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    property_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample property_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO', required: [] })
  .openapi('V1x1ProperyVO')

const V1x1SpecDetailVOSchema = z
  .object({
    client_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample client_status' }),
    create_date: z.iso.date().exactOptional().openapi({ description: '' }),
    created_by: PersonVOSchema.exactOptional(),
    first_level_custom_fields: V1x1ProperyVOSchema.exactOptional(),
    header_custom_fields: V1x1ProperyVOSchema.exactOptional(),
    job_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    last_updated: z.iso.date().exactOptional().openapi({ description: '' }),
    product_type: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample product_type' }),
    product_type_info: ProductTypeVOSchema.exactOptional(),
    quantity_1: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_2: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_3: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_4: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    quantity_5: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample reference_number' }),
    second_level_custom_fields: z
      .array(V1x1ProperyVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
    sku: z.string().exactOptional().openapi({ description: '', example: 'sample sku' }),
    spec_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    spec_name: z.string().exactOptional().openapi({ description: '', example: 'sample spec_name' }),
    spec_options: z.array(SpecSimplestVOSchema).exactOptional().openapi({ description: '' }),
    spec_options_complete: z.array(SpecSimpleVOSchema).exactOptional().openapi({ description: '' }),
    spec_original: SpecSimplestVOSchema.exactOptional(),
    spec_type: SpecTypeVOSchema.exactOptional(),
    supplier_status: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample supplier_status' }),
    uofms: z.array(UofmSimpleVOSchema).exactOptional().openapi({ description: '' }),
    user_state: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample user_state' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecDetailVO', required: [] })
  .openapi('V1x1SpecDetailVO')

const V1x1SpecExpandVOSchema = z
  .object({
    result: V1x1SpecDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecExpandVO', required: [] })
  .openapi('V1x1SpecExpandVO')

const WgSpecPrdTypeRegPersistVOSchema = z
  .object({
    enableDifferentiatePrdTypePreference: z
      .boolean()
      .exactOptional()
      .openapi({ description: '', example: 'false' }),
    spec_prdType_list: z
      .array(SpecTypePersistVOSchema)
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({
    description: 'Java type: com.noosh.domain.nooshapi.persist.vo.WgSpecPrdTypeRegPersistVO',
    required: [],
  })
  .openapi('WgSpecPrdTypeRegPersistVO')

const WgTaskStatusVOSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample description' }),
    is_active: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    is_default: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    task_status_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample task_status_name' }),
    tasks_status_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WgTaskStatusVO', required: [] })
  .openapi('WgTaskStatusVO')

const WgTaskStatusListVOSchema = z
  .object({
    result: z.array(WgTaskStatusVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WgTaskStatusListVO', required: [] })
  .openapi('WgTaskStatusListVO')

const WorkgroupAttributeVOSchema = z
  .object({
    is_checked: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    label: z.string().exactOptional().openapi({ description: '', example: 'sample label' }),
    product_type_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupAttributeVO', required: [] })
  .openapi('WorkgroupAttributeVO')

const WorkgroupAttributeListVOSchema = z
  .object({
    result: z.array(WorkgroupAttributeVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.WorkgroupAttributeListVO',
    required: [],
  })
  .openapi('WorkgroupAttributeListVO')

const WorkgroupDetailVOSchema = z
  .object({
    address_line1: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line1' }),
    address_line2: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line2' }),
    address_line3: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line3' }),
    city: z.string().exactOptional().openapi({ description: '', example: 'sample city' }),
    country: z.string().exactOptional().openapi({ description: '', example: 'sample country' }),
    country_code: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample country_code' }),
    custom_fields: z.array(PropertyPaAndAttVOSchema).exactOptional().openapi({ description: '' }),
    default_currency: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample default_currency' }),
    portal: z.string().exactOptional().openapi({ description: '', example: 'sample portal' }),
    postal: z.string().exactOptional().openapi({ description: '', example: 'sample postal' }),
    state: z.string().exactOptional().openapi({ description: '', example: 'sample state' }),
    workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupDetailVO', required: [] })
  .openapi('WorkgroupDetailVO')

const WorkgroupExpandVOSchema = z
  .object({
    result: WorkgroupDetailVOSchema.exactOptional(),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupExpandVO', required: [] })
  .openapi('WorkgroupExpandVO')

const WorkgroupHTTPStatusVOSchema = z
  .object({
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
    workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupHTTPStatusVO', required: [] })
  .openapi('WorkgroupHTTPStatusVO')

const WorkgroupSimpleVOSchema = z
  .object({
    is_default: z.boolean().exactOptional().openapi({ description: '', example: 'false' }),
    parent_workgroup: WorkgroupBaseVOSchema.exactOptional(),
    workgroup_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupSimpleVO', required: [] })
  .openapi('WorkgroupSimpleVO')

const WorkgroupListVOSchema = z
  .object({
    results: z.array(WorkgroupSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupListVO', required: [] })
  .openapi('WorkgroupListVO')

const WorkgroupMembersSimpleVOSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: '', example: 'sample email' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample first_name' }),
    last_name: z.string().exactOptional().openapi({ description: '', example: 'sample last_name' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
  })
  .openapi({
    description: 'Java type: com.noosh.nooshapi.vo.WorkgroupMembersSimpleVO',
    required: [],
  })
  .openapi('WorkgroupMembersSimpleVO')

const WorkgroupMembersListVOSchema = z
  .object({
    results: z.array(WorkgroupMembersSimpleVOSchema).exactOptional().openapi({ description: '' }),
    status_code: z.int32().exactOptional().openapi({ description: '', example: '1' }),
    status_reason: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample status_reason' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupMembersListVO', required: [] })
  .openapi('WorkgroupMembersListVO')

const WorkgroupUpdPersistVOSchema = z
  .object({
    address_line1: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line1' }),
    address_line2: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line2' }),
    address_line3: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample address_line3' }),
    city: z.string().exactOptional().openapi({ description: '', example: 'sample city' }),
    country: z.string().exactOptional().openapi({ description: '', example: 'sample country' }),
    custom_fields: z.array(CustomFieldPersistVOSchema).exactOptional().openapi({ description: '' }),
    decimal_places: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '', example: '1' }),
    postal: z.string().exactOptional().openapi({ description: '', example: 'sample postal' }),
    state: z.string().exactOptional().openapi({ description: '', example: 'sample state' }),
    workgroup_name: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'sample workgroup_name' }),
  })
  .openapi({ description: 'Java type: com.noosh.nooshapi.vo.WorkgroupUpdPersistVO', required: [] })
  .openapi('WorkgroupUpdPersistVO')

const OrderUpdPersistVORequestBody = {
  content: {
    'application/json': { schema: OrderUpdPersistVOSchema },
    'application/x-json-smile': { schema: OrderUpdPersistVOSchema },
    'application/x-yaml': { schema: OrderUpdPersistVOSchema },
    'application/xml': { schema: OrderUpdPersistVOSchema },
    'text/csv': { schema: OrderUpdPersistVOSchema },
    'text/x-yaml': { schema: OrderUpdPersistVOSchema },
    'text/xml': { schema: OrderUpdPersistVOSchema },
  },
}

const ProjectPersistVORequestBody = {
  content: {
    'application/json': { schema: ProjectPersistVOSchema },
    'application/x-json-smile': { schema: ProjectPersistVOSchema },
    'application/x-yaml': { schema: ProjectPersistVOSchema },
    'application/xml': { schema: ProjectPersistVOSchema },
    'text/csv': { schema: ProjectPersistVOSchema },
    'text/x-yaml': { schema: ProjectPersistVOSchema },
    'text/xml': { schema: ProjectPersistVOSchema },
  },
}

const HTTPBASICSecurityScheme = { scheme: 'basic', type: 'http' }

export const get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsRoute = createRoute({
  method: 'get',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/fileTags',
  tags: ['File'],
  summary: 'List Tags from Workgroup and Project.',
  description: 'List Tags from Workgroup and Project.',
  operationId: 'getFileTags',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: FileTagResponseVOSchema },
        'application/json': { schema: FileTagResponseVOSchema },
        'application/x-json-smile': { schema: FileTagResponseVOSchema },
        'application/x-yaml': { schema: FileTagResponseVOSchema },
        'application/xml': { schema: FileTagResponseVOSchema },
        'text/csv': { schema: FileTagResponseVOSchema },
        'text/x-yaml': { schema: FileTagResponseVOSchema },
        'text/xml': { schema: FileTagResponseVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const get11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute = createRoute({
  method: 'get',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/files',
  tags: ['File'],
  summary: 'List Files from Project.  Works for Regular and Remote Files',
  description: 'List Files from Project.  Works for Regular and Remote Files',
  operationId: 'getFiles',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: FileResponseVOSchema },
        'application/json': { schema: FileResponseVOSchema },
        'application/x-json-smile': { schema: FileResponseVOSchema },
        'application/x-yaml': { schema: FileResponseVOSchema },
        'application/xml': { schema: FileResponseVOSchema },
        'text/csv': { schema: FileResponseVOSchema },
        'text/x-yaml': { schema: FileResponseVOSchema },
        'text/xml': { schema: FileResponseVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const post11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute = createRoute({
  method: 'post',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/files',
  tags: ['File'],
  summary: 'Upload File to Project.  A multipart/form-data request with a name "file"',
  description: 'Upload File to Project.  A multipart/form-data request with a name "file"',
  operationId: 'uploadFile',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: FileResponseVOSchema },
        'application/json': { schema: FileResponseVOSchema },
        'application/x-json-smile': { schema: FileResponseVOSchema },
        'application/x-yaml': { schema: FileResponseVOSchema },
        'application/xml': { schema: FileResponseVOSchema },
        'text/csv': { schema: FileResponseVOSchema },
        'text/x-yaml': { schema: FileResponseVOSchema },
        'text/xml': { schema: FileResponseVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/files/{file_id}',
  tags: ['File'],
  summary: 'Get File from Project.  Works for Regular and Remote Files',
  description: 'Get File from Project.  Works for Regular and Remote Files',
  operationId: 'getFile',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      file_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'file_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: FileResponseVOSchema },
        'application/json': { schema: FileResponseVOSchema },
        'application/x-json-smile': { schema: FileResponseVOSchema },
        'application/x-yaml': { schema: FileResponseVOSchema },
        'application/xml': { schema: FileResponseVOSchema },
        'text/csv': { schema: FileResponseVOSchema },
        'text/x-yaml': { schema: FileResponseVOSchema },
        'text/xml': { schema: FileResponseVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute = createRoute({
  method: 'get',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}',
  tags: ['Spec'],
  summary: 'List a specific spec of project Level',
  description: 'List a specific spec of project Level',
  operationId: 'getSpec',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      spec_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: V1x1SpecExpandVOSchema },
        'application/json': { schema: V1x1SpecExpandVOSchema },
        'application/x-json-smile': { schema: V1x1SpecExpandVOSchema },
        'application/x-yaml': { schema: V1x1SpecExpandVOSchema },
        'application/xml': { schema: V1x1SpecExpandVOSchema },
        'text/csv': { schema: V1x1SpecExpandVOSchema },
        'text/x-yaml': { schema: V1x1SpecExpandVOSchema },
        'text/xml': { schema: V1x1SpecExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const put11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute = createRoute({
  method: 'put',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}',
  tags: ['Spec'],
  summary: 'Update a specific Spec',
  description: 'Update a specific Spec',
  operationId: 'putSpec',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      spec_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: V1X1SpecUpdatingPOSchema },
        'application/x-json-smile': { schema: V1X1SpecUpdatingPOSchema },
        'application/x-yaml': { schema: V1X1SpecUpdatingPOSchema },
        'application/xml': { schema: V1X1SpecUpdatingPOSchema },
        'text/csv': { schema: V1X1SpecUpdatingPOSchema },
        'text/x-yaml': { schema: V1X1SpecUpdatingPOSchema },
        'text/xml': { schema: V1X1SpecUpdatingPOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: SpecHTTPStatusVOSchema },
        'application/json': { schema: SpecHTTPStatusVOSchema },
        'application/x-json-smile': { schema: SpecHTTPStatusVOSchema },
        'application/x-yaml': { schema: SpecHTTPStatusVOSchema },
        'application/xml': { schema: SpecHTTPStatusVOSchema },
        'text/csv': { schema: SpecHTTPStatusVOSchema },
        'text/x-yaml': { schema: SpecHTTPStatusVOSchema },
        'text/xml': { schema: SpecHTTPStatusVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const post11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute = createRoute({
  method: 'post',
  path: '/1.1/workgroups/{workgroup_id}/projects/{project_id}/teammembers',
  tags: ['Team Member'],
  summary: 'Invite a team member or all the members of team template for the specific project.',
  description: 'Invite a team member or all the members of team template for the specific project.',
  operationId: 'postTeamMemberOfProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TeamMemberPOSchema },
        'application/x-json-smile': { schema: TeamMemberPOSchema },
        'application/x-yaml': { schema: TeamMemberPOSchema },
        'application/xml': { schema: TeamMemberPOSchema },
        'text/csv': { schema: TeamMemberPOSchema },
        'text/x-yaml': { schema: TeamMemberPOSchema },
        'text/xml': { schema: TeamMemberPOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'application/json': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'application/x-json-smile': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'application/x-yaml': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'application/xml': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'text/csv': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'text/x-yaml': { schema: V1x1InvitedTeamMemberResultsVOSchema },
        'text/xml': { schema: V1x1InvitedTeamMemberResultsVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute = createRoute({
  method: 'get',
  path: '/1.1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields',
  tags: ['Spec'],
  summary: 'Get Spec Type Fields',
  description: 'Get Spec Type Fields',
  operationId: 'getSpecTypeFields',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      spec_type_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_type_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SpecTypeFieldsListVOSchema },
        'application/json': { schema: SpecTypeFieldsListVOSchema },
        'application/x-json-smile': { schema: SpecTypeFieldsListVOSchema },
        'application/x-yaml': { schema: SpecTypeFieldsListVOSchema },
        'application/xml': { schema: SpecTypeFieldsListVOSchema },
        'text/csv': { schema: SpecTypeFieldsListVOSchema },
        'text/x-yaml': { schema: SpecTypeFieldsListVOSchema },
        'text/xml': { schema: SpecTypeFieldsListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1CountriesRoute = createRoute({
  method: 'get',
  path: '/v1/countries',
  tags: ['Country'],
  summary: 'List all countries',
  description: 'List all countries',
  operationId: 'getCountryList',
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: CountryListVOSchema },
        'application/json': { schema: CountryListVOSchema },
        'application/x-json-smile': { schema: CountryListVOSchema },
        'application/x-yaml': { schema: CountryListVOSchema },
        'application/xml': { schema: CountryListVOSchema },
        'text/csv': { schema: CountryListVOSchema },
        'text/x-yaml': { schema: CountryListVOSchema },
        'text/xml': { schema: CountryListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups',
  tags: ['Workgroup'],
  summary: 'List the workgroups',
  description: 'List the workgroups',
  operationId: 'getWorkgroupList',
  request: {
    query: z.object({
      workgroup_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Workgroup Name',
            in: 'query',
            name: 'workgroup_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      workgroup_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '1000001 for Buyer, 1000002 for supplier, 1000003 for agent, 1000004 for Broker/Outsourcer and 1000005 for Partner',
            explode: false,
            in: 'query',
            name: 'workgroup_types',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WorkgroupListVOSchema },
        'application/json': { schema: WorkgroupListVOSchema },
        'application/x-json-smile': { schema: WorkgroupListVOSchema },
        'application/x-yaml': { schema: WorkgroupListVOSchema },
        'application/xml': { schema: WorkgroupListVOSchema },
        'text/csv': { schema: WorkgroupListVOSchema },
        'text/x-yaml': { schema: WorkgroupListVOSchema },
        'text/xml': { schema: WorkgroupListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdAutomaticInvitationsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/automaticInvitations',
  tags: ['My Info'],
  summary: "List current user's automatic invitations info ",
  description: "List current user's automatic invitations info ",
  operationId: 'getAutomaticInvitationList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: AutomaticInvitationsListVOSchema },
        'application/json': { schema: AutomaticInvitationsListVOSchema },
        'application/x-json-smile': { schema: AutomaticInvitationsListVOSchema },
        'application/x-yaml': { schema: AutomaticInvitationsListVOSchema },
        'application/xml': { schema: AutomaticInvitationsListVOSchema },
        'text/csv': { schema: AutomaticInvitationsListVOSchema },
        'text/x-yaml': { schema: AutomaticInvitationsListVOSchema },
        'text/xml': { schema: AutomaticInvitationsListVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdBillingRecipientsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/billingRecipients',
  tags: ['Contact'],
  summary: 'List Billing Recipients',
  description: 'List Billing Recipients',
  operationId: 'getBillingRecipients',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ContactsListVOSchema },
        'application/json': { schema: ContactsListVOSchema },
        'application/x-json-smile': { schema: ContactsListVOSchema },
        'application/x-yaml': { schema: ContactsListVOSchema },
        'application/xml': { schema: ContactsListVOSchema },
        'text/csv': { schema: ContactsListVOSchema },
        'text/x-yaml': { schema: ContactsListVOSchema },
        'text/xml': { schema: ContactsListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdBuyOrdersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/buyOrders',
  tags: ['Order'],
  summary: 'List the buy orders of workgroup',
  description: 'List the buy orders of workgroup',
  operationId: 'getBuyOrderListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderWorkgroupLevelListVOSchema },
        'application/json': { schema: OrderWorkgroupLevelListVOSchema },
        'application/x-json-smile': { schema: OrderWorkgroupLevelListVOSchema },
        'application/x-yaml': { schema: OrderWorkgroupLevelListVOSchema },
        'application/xml': { schema: OrderWorkgroupLevelListVOSchema },
        'text/csv': { schema: OrderWorkgroupLevelListVOSchema },
        'text/x-yaml': { schema: OrderWorkgroupLevelListVOSchema },
        'text/xml': { schema: OrderWorkgroupLevelListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/buyOrders/{order_id}',
  tags: ['Order'],
  summary: 'Get a specific buy order of workgroup',
  description: 'Get a specific buy order of workgroup',
  operationId: 'getBuyOrderOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/json': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/x-json-smile': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/x-yaml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/xml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/csv': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/x-yaml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/xml': { schema: OrderExpandWorkgroupLevelVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/clientWorkgroups',
  tags: ['Workgroup'],
  summary: 'List client workgroups',
  description: 'List client workgroups',
  operationId: 'getClientWorkgroupList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ClientWorkgroupListVOSchema },
        'application/json': { schema: ClientWorkgroupListVOSchema },
        'application/x-json-smile': { schema: ClientWorkgroupListVOSchema },
        'application/x-yaml': { schema: ClientWorkgroupListVOSchema },
        'application/xml': { schema: ClientWorkgroupListVOSchema },
        'text/csv': { schema: ClientWorkgroupListVOSchema },
        'text/x-yaml': { schema: ClientWorkgroupListVOSchema },
        'text/xml': { schema: ClientWorkgroupListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}',
  tags: ['Workgroup'],
  summary: 'Get a specific client workgroups',
  description: 'Get a specific client workgroups',
  operationId: 'getSpecificClientWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      client_workgroup_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client_workgroup_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ClientWorkgroupExpandVOSchema },
        'application/json': { schema: ClientWorkgroupExpandVOSchema },
        'application/x-json-smile': { schema: ClientWorkgroupExpandVOSchema },
        'application/x-yaml': { schema: ClientWorkgroupExpandVOSchema },
        'application/xml': { schema: ClientWorkgroupExpandVOSchema },
        'text/csv': { schema: ClientWorkgroupExpandVOSchema },
        'text/x-yaml': { schema: ClientWorkgroupExpandVOSchema },
        'text/xml': { schema: ClientWorkgroupExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRoute =
  createRoute({
    method: 'get',
    path: '/v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectCategory',
    tags: ['Project Category'],
    summary: 'List the project categories of client side',
    description: 'List the project categories of client side',
    operationId: 'getProjectCategoryListOfClient',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        client_workgroup_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'client_workgroup_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful retrieval',
        content: {
          '*/*': { schema: ProjectCategoryListVOSchema },
          'application/json': { schema: ProjectCategoryListVOSchema },
          'application/x-json-smile': { schema: ProjectCategoryListVOSchema },
          'application/x-yaml': { schema: ProjectCategoryListVOSchema },
          'application/xml': { schema: ProjectCategoryListVOSchema },
          'text/csv': { schema: ProjectCategoryListVOSchema },
          'text/x-yaml': { schema: ProjectCategoryListVOSchema },
          'text/xml': { schema: ProjectCategoryListVOSchema },
        },
      },
      404: {
        description: 'There are not any result matching your search condition',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      422: {
        description: 'Invalid data',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRoute =
  createRoute({
    method: 'get',
    path: '/v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectHomeUserFields',
    tags: ['User Fields'],
    summary: 'List projec home user fields of client workgroup',
    description: 'List projec home user fields of client workgroup',
    operationId: 'getProjectHomeUserFieldListOfClient',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        client_workgroup_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'client_workgroup_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful retrieval',
        content: {
          '*/*': { schema: ProjectHomeUserFieldsListVOSchema },
          'application/json': { schema: ProjectHomeUserFieldsListVOSchema },
          'application/x-json-smile': { schema: ProjectHomeUserFieldsListVOSchema },
          'application/x-yaml': { schema: ProjectHomeUserFieldsListVOSchema },
          'application/xml': { schema: ProjectHomeUserFieldsListVOSchema },
          'text/csv': { schema: ProjectHomeUserFieldsListVOSchema },
          'text/x-yaml': { schema: ProjectHomeUserFieldsListVOSchema },
          'text/xml': { schema: ProjectHomeUserFieldsListVOSchema },
        },
      },
      404: {
        description: 'There are not any result matching your search condition',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRoute =
  createRoute({
    method: 'get',
    path: '/v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectStatus',
    tags: ['Project Status'],
    summary: 'List the project status of client',
    description: 'List the project status of client',
    operationId: 'getProjectStatusOfClient',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        client_workgroup_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'client_workgroup_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful retrieval',
        content: {
          '*/*': { schema: ProjectStatusListVOSchema },
          'application/json': { schema: ProjectStatusListVOSchema },
          'application/x-json-smile': { schema: ProjectStatusListVOSchema },
          'application/x-yaml': { schema: ProjectStatusListVOSchema },
          'application/xml': { schema: ProjectStatusListVOSchema },
          'text/csv': { schema: ProjectStatusListVOSchema },
          'text/x-yaml': { schema: ProjectStatusListVOSchema },
          'text/xml': { schema: ProjectStatusListVOSchema },
        },
      },
      404: {
        description: 'There are not any result matching your search condition',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdContactsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/contacts',
  tags: ['Contact'],
  summary: 'List the contacts',
  description: 'List the contacts',
  operationId: 'getContactList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ContactsListVOSchema },
        'application/json': { schema: ContactsListVOSchema },
        'application/x-json-smile': { schema: ContactsListVOSchema },
        'application/x-yaml': { schema: ContactsListVOSchema },
        'application/xml': { schema: ContactsListVOSchema },
        'text/csv': { schema: ContactsListVOSchema },
        'text/x-yaml': { schema: ContactsListVOSchema },
        'text/xml': { schema: ContactsListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdContactsUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/contacts/{user_id}',
  tags: ['Contact'],
  summary: 'Contact Info',
  description: 'Contact Info',
  operationId: 'getContactUserInfo',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: UserDetailsExpandVOSchema },
        'application/json': { schema: UserDetailsExpandVOSchema },
        'application/x-json-smile': { schema: UserDetailsExpandVOSchema },
        'application/x-yaml': { schema: UserDetailsExpandVOSchema },
        'application/xml': { schema: UserDetailsExpandVOSchema },
        'text/csv': { schema: UserDetailsExpandVOSchema },
        'text/x-yaml': { schema: UserDetailsExpandVOSchema },
        'text/xml': { schema: UserDetailsExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdCustomTaskStatusRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/customTaskStatus',
  tags: ['Task'],
  summary: 'Get custom task status of workgroup level',
  description: 'Get custom task status of workgroup level',
  operationId: 'getWgTaskStatusListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WgTaskStatusListVOSchema },
        'application/json': { schema: WgTaskStatusListVOSchema },
        'application/x-json-smile': { schema: WgTaskStatusListVOSchema },
        'application/x-yaml': { schema: WgTaskStatusListVOSchema },
        'application/xml': { schema: WgTaskStatusListVOSchema },
        'text/csv': { schema: WgTaskStatusListVOSchema },
        'text/x-yaml': { schema: WgTaskStatusListVOSchema },
        'text/xml': { schema: WgTaskStatusListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdCustomTaskTypesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/customTaskTypes',
  tags: ['Task'],
  summary: 'Get custom task types of workgroup level',
  description: 'Get custom task types of workgroup level',
  operationId: 'getCustomTaskTypesOfWg',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskTypeListVOSchema },
        'application/json': { schema: TaskTypeListVOSchema },
        'application/x-json-smile': { schema: TaskTypeListVOSchema },
        'application/x-yaml': { schema: TaskTypeListVOSchema },
        'application/xml': { schema: TaskTypeListVOSchema },
        'text/csv': { schema: TaskTypeListVOSchema },
        'text/x-yaml': { schema: TaskTypeListVOSchema },
        'text/xml': { schema: TaskTypeListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdDeactivationReasonsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/deactivationReasons',
  tags: ['Deactivation Reason'],
  summary: 'List all deactivation reasons',
  description: 'List all deactivation reasons',
  operationId: 'getDeactivationReasonList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: DeactivationReasonListVOSchema },
        'application/json': { schema: DeactivationReasonListVOSchema },
        'application/x-json-smile': { schema: DeactivationReasonListVOSchema },
        'application/x-yaml': { schema: DeactivationReasonListVOSchema },
        'application/xml': { schema: DeactivationReasonListVOSchema },
        'text/csv': { schema: DeactivationReasonListVOSchema },
        'text/x-yaml': { schema: DeactivationReasonListVOSchema },
        'text/xml': { schema: DeactivationReasonListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/defaultTaskPriority',
  tags: ['Task'],
  summary: 'Get default task priority list',
  description: 'Get default task priority list',
  operationId: 'TaskPriorityList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskPriorityListVOSchema },
        'application/json': { schema: TaskPriorityListVOSchema },
        'application/x-json-smile': { schema: TaskPriorityListVOSchema },
        'application/x-yaml': { schema: TaskPriorityListVOSchema },
        'application/xml': { schema: TaskPriorityListVOSchema },
        'text/csv': { schema: TaskPriorityListVOSchema },
        'text/x-yaml': { schema: TaskPriorityListVOSchema },
        'text/xml': { schema: TaskPriorityListVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdDefaultTaskStatusRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/defaultTaskStatus',
  tags: ['Task'],
  summary: 'Get default task status list',
  description: 'Get default task status list',
  operationId: 'getDefaultTaskStatusList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskStatusListVOSchema },
        'application/json': { schema: TaskStatusListVOSchema },
        'application/x-json-smile': { schema: TaskStatusListVOSchema },
        'application/x-yaml': { schema: TaskStatusListVOSchema },
        'application/xml': { schema: TaskStatusListVOSchema },
        'text/csv': { schema: TaskStatusListVOSchema },
        'text/x-yaml': { schema: TaskStatusListVOSchema },
        'text/xml': { schema: TaskStatusListVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdDetailRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/detail',
  tags: ['Workgroup'],
  summary: 'Detail workgroup info',
  description: 'Detail workgroup info',
  operationId: 'getWorkgroupDetail',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WorkgroupExpandVOSchema },
        'application/json': { schema: WorkgroupExpandVOSchema },
        'application/x-json-smile': { schema: WorkgroupExpandVOSchema },
        'application/x-yaml': { schema: WorkgroupExpandVOSchema },
        'application/xml': { schema: WorkgroupExpandVOSchema },
        'text/csv': { schema: WorkgroupExpandVOSchema },
        'text/x-yaml': { schema: WorkgroupExpandVOSchema },
        'text/xml': { schema: WorkgroupExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdDetailRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/detail',
  tags: ['Workgroup'],
  summary: 'Update a specific Workgroup',
  description: 'Update a specific Workgroup',
  operationId: 'putWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: WorkgroupUpdPersistVOSchema },
        'application/x-json-smile': { schema: WorkgroupUpdPersistVOSchema },
        'application/x-yaml': { schema: WorkgroupUpdPersistVOSchema },
        'application/xml': { schema: WorkgroupUpdPersistVOSchema },
        'text/csv': { schema: WorkgroupUpdPersistVOSchema },
        'text/x-yaml': { schema: WorkgroupUpdPersistVOSchema },
        'text/xml': { schema: WorkgroupUpdPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: WorkgroupHTTPStatusVOSchema },
        'application/json': { schema: WorkgroupHTTPStatusVOSchema },
        'application/x-json-smile': { schema: WorkgroupHTTPStatusVOSchema },
        'application/x-yaml': { schema: WorkgroupHTTPStatusVOSchema },
        'application/xml': { schema: WorkgroupHTTPStatusVOSchema },
        'text/csv': { schema: WorkgroupHTTPStatusVOSchema },
        'text/x-yaml': { schema: WorkgroupHTTPStatusVOSchema },
        'text/xml': { schema: WorkgroupHTTPStatusVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdExchangeRateRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/exchangeRate',
  tags: ['Exchange Rate'],
  summary: 'Get Exchange Rate List',
  description: 'Get Exchange Rate List',
  operationId: 'getExchangeRateList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: MultiExchangeRateListVOSchema },
        'application/json': { schema: MultiExchangeRateListVOSchema },
        'application/x-json-smile': { schema: MultiExchangeRateListVOSchema },
        'application/x-yaml': { schema: MultiExchangeRateListVOSchema },
        'application/xml': { schema: MultiExchangeRateListVOSchema },
        'text/csv': { schema: MultiExchangeRateListVOSchema },
        'text/x-yaml': { schema: MultiExchangeRateListVOSchema },
        'text/xml': { schema: MultiExchangeRateListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdExchangeRateRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/exchangeRate',
  tags: ['Exchange Rate'],
  summary: 'Create Exchange Rates',
  description: 'Create Exchange Rates',
  operationId: 'postExchangeRate',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: MultiExchangeRatePersistListVOSchema },
        'application/x-json-smile': { schema: MultiExchangeRatePersistListVOSchema },
        'application/x-yaml': { schema: MultiExchangeRatePersistListVOSchema },
        'application/xml': { schema: MultiExchangeRatePersistListVOSchema },
        'text/csv': { schema: MultiExchangeRatePersistListVOSchema },
        'text/x-yaml': { schema: MultiExchangeRatePersistListVOSchema },
        'text/xml': { schema: MultiExchangeRatePersistListVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: HTTPStatusSchema },
        'application/json': { schema: HTTPStatusSchema },
        'application/x-json-smile': { schema: HTTPStatusSchema },
        'application/x-yaml': { schema: HTTPStatusSchema },
        'application/xml': { schema: HTTPStatusSchema },
        'text/csv': { schema: HTTPStatusSchema },
        'text/x-yaml': { schema: HTTPStatusSchema },
        'text/xml': { schema: HTTPStatusSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdMyTimeCardsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/myTimeCards',
  tags: ['Time Card'],
  summary: 'List my time cards',
  description: 'List my time cards',
  operationId: 'getMyTimeCardList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TimeCardListVOSchema },
        'application/json': { schema: TimeCardListVOSchema },
        'application/x-json-smile': { schema: TimeCardListVOSchema },
        'application/x-yaml': { schema: TimeCardListVOSchema },
        'application/xml': { schema: TimeCardListVOSchema },
        'text/csv': { schema: TimeCardListVOSchema },
        'text/x-yaml': { schema: TimeCardListVOSchema },
        'text/xml': { schema: TimeCardListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/myTimeCards/{timeCard_id}',
  tags: ['Time Card'],
  summary: 'Get a specific my time cards',
  description: 'Get a specific my time cards',
  operationId: 'getMyTimeCard',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      timeCard_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'timeCard_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TimeCardDetailVOSchema },
        'application/json': { schema: TimeCardDetailVOSchema },
        'application/x-json-smile': { schema: TimeCardDetailVOSchema },
        'application/x-yaml': { schema: TimeCardDetailVOSchema },
        'application/xml': { schema: TimeCardDetailVOSchema },
        'text/csv': { schema: TimeCardDetailVOSchema },
        'text/x-yaml': { schema: TimeCardDetailVOSchema },
        'text/xml': { schema: TimeCardDetailVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProductTypesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/productTypes',
  tags: ['Spec'],
  summary: 'Get product type of workgroup level',
  description: 'Get product type of workgroup level',
  operationId: 'getProductTypeListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WorkgroupAttributeListVOSchema },
        'application/json': { schema: WorkgroupAttributeListVOSchema },
        'application/x-json-smile': { schema: WorkgroupAttributeListVOSchema },
        'application/x-yaml': { schema: WorkgroupAttributeListVOSchema },
        'application/xml': { schema: WorkgroupAttributeListVOSchema },
        'text/csv': { schema: WorkgroupAttributeListVOSchema },
        'text/x-yaml': { schema: WorkgroupAttributeListVOSchema },
        'text/xml': { schema: WorkgroupAttributeListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/productTypesOfSpecTypes',
  tags: ['Spec'],
  summary: 'Get product type of spec level by workgroupId',
  description: 'Get product type of spec level by workgroupId',
  operationId: 'getSpecProductTypeListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WorkgroupAttributeListVOSchema },
        'application/json': { schema: WorkgroupAttributeListVOSchema },
        'application/x-json-smile': { schema: WorkgroupAttributeListVOSchema },
        'application/x-yaml': { schema: WorkgroupAttributeListVOSchema },
        'application/xml': { schema: WorkgroupAttributeListVOSchema },
        'text/csv': { schema: WorkgroupAttributeListVOSchema },
        'text/x-yaml': { schema: WorkgroupAttributeListVOSchema },
        'text/xml': { schema: WorkgroupAttributeListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/productTypesOfSpecTypes',
  tags: ['Spec'],
  summary: 'Register product types for spec types',
  description: 'Register product types for spec types',
  operationId: 'postSpecProductTypeListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/x-json-smile': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/x-yaml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/xml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/csv': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/x-yaml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/xml': { schema: WgSpecPrdTypeRegPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/json': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/x-json-smile': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/x-yaml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'application/xml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/csv': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/x-yaml': { schema: WgSpecPrdTypeRegPersistVOSchema },
        'text/xml': { schema: WgSpecPrdTypeRegPersistVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProfileImageRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/profileImage',
  tags: ['My Info'],
  summary: 'Upload Profile Image.  A multipart/form-data request with a name "file"',
  description: 'Upload Profile Image.  A multipart/form-data request with a name "file"',
  operationId: 'uploadProfileImage',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/x-json-smile': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/x-yaml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/x-yaml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful',
      content: {
        '*/*': { schema: ProfileImageVOSchema },
        'application/json': { schema: ProfileImageVOSchema },
        'application/x-json-smile': { schema: ProfileImageVOSchema },
        'application/x-yaml': { schema: ProfileImageVOSchema },
        'application/xml': { schema: ProfileImageVOSchema },
        'text/csv': { schema: ProfileImageVOSchema },
        'text/x-yaml': { schema: ProfileImageVOSchema },
        'text/xml': { schema: ProfileImageVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectCategoryRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projectCategory',
  tags: ['Project Category'],
  summary: 'List the project categories',
  description: 'List the project categories',
  operationId: 'getProjectCategoryList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ProjectCategoryListVOSchema },
        'application/json': { schema: ProjectCategoryListVOSchema },
        'application/x-json-smile': { schema: ProjectCategoryListVOSchema },
        'application/x-yaml': { schema: ProjectCategoryListVOSchema },
        'application/xml': { schema: ProjectCategoryListVOSchema },
        'text/csv': { schema: ProjectCategoryListVOSchema },
        'text/x-yaml': { schema: ProjectCategoryListVOSchema },
        'text/xml': { schema: ProjectCategoryListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projectHomeUserFields',
  tags: ['User Fields'],
  summary: 'List projec home user fields',
  description: 'List projec home user fields',
  operationId: 'getProjectHomeUserFieldsList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ProjectHomeUserFieldsListVOSchema },
        'application/json': { schema: ProjectHomeUserFieldsListVOSchema },
        'application/x-json-smile': { schema: ProjectHomeUserFieldsListVOSchema },
        'application/x-yaml': { schema: ProjectHomeUserFieldsListVOSchema },
        'application/xml': { schema: ProjectHomeUserFieldsListVOSchema },
        'text/csv': { schema: ProjectHomeUserFieldsListVOSchema },
        'text/x-yaml': { schema: ProjectHomeUserFieldsListVOSchema },
        'text/xml': { schema: ProjectHomeUserFieldsListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectStatusRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projectStatus',
  tags: ['Project Status'],
  summary: 'List the project status',
  description: 'List the project status',
  operationId: 'getProjectStatus',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ProjectStatusListVOSchema },
        'application/json': { schema: ProjectStatusListVOSchema },
        'application/x-json-smile': { schema: ProjectStatusListVOSchema },
        'application/x-yaml': { schema: ProjectStatusListVOSchema },
        'application/xml': { schema: ProjectStatusListVOSchema },
        'text/csv': { schema: ProjectStatusListVOSchema },
        'text/x-yaml': { schema: ProjectStatusListVOSchema },
        'text/xml': { schema: ProjectStatusListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects',
  tags: ['Project'],
  summary: 'List the projects',
  description: 'List the projects',
  operationId: 'getProjectList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ProjectListVOSchema },
        'application/json': { schema: ProjectListVOSchema },
        'application/x-json-smile': { schema: ProjectListVOSchema },
        'application/x-yaml': { schema: ProjectListVOSchema },
        'application/xml': { schema: ProjectListVOSchema },
        'text/csv': { schema: ProjectListVOSchema },
        'text/x-yaml': { schema: ProjectListVOSchema },
        'text/xml': { schema: ProjectListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects',
  tags: ['Project'],
  summary: 'Create a Project',
  description: 'Create a Project',
  operationId: 'postProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: ProjectPersistVORequestBody,
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: ProjectVOSchema },
        'application/json': { schema: ProjectVOSchema },
        'application/x-json-smile': { schema: ProjectVOSchema },
        'application/x-yaml': { schema: ProjectVOSchema },
        'application/xml': { schema: ProjectVOSchema },
        'text/csv': { schema: ProjectVOSchema },
        'text/x-yaml': { schema: ProjectVOSchema },
        'text/xml': { schema: ProjectVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}',
  tags: ['Project'],
  summary: 'Get a specific Project',
  description: 'Get a specific Project',
  operationId: 'getProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ProjectExpandVOSchema },
        'application/json': { schema: ProjectExpandVOSchema },
        'application/x-json-smile': { schema: ProjectExpandVOSchema },
        'application/x-yaml': { schema: ProjectExpandVOSchema },
        'application/xml': { schema: ProjectExpandVOSchema },
        'text/csv': { schema: ProjectExpandVOSchema },
        'text/x-yaml': { schema: ProjectExpandVOSchema },
        'text/xml': { schema: ProjectExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}',
  tags: ['Project'],
  summary: 'Update a specific Project',
  description: 'Update a specific Project',
  operationId: 'putProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: ProjectPersistVORequestBody,
  },
  responses: {
    200: {
      description: 'Successful update',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}',
  tags: ['Project'],
  summary: 'Archieve a specific Project',
  description: 'Archieve a specific Project',
  operationId: 'deleteProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful archive',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const patchV1WorkgroupsWorkgroupIdProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}',
  tags: ['Project'],
  summary: 'Patch a specific Project',
  description: 'Patch a specific Project',
  operationId: 'patchProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProjectPatchPOSchema },
        'application/x-json-smile': { schema: ProjectPatchPOSchema },
        'application/x-yaml': { schema: ProjectPatchPOSchema },
        'application/xml': { schema: ProjectPatchPOSchema },
        'text/csv': { schema: ProjectPatchPOSchema },
        'text/x-yaml': { schema: ProjectPatchPOSchema },
        'text/xml': { schema: ProjectPatchPOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful patch',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders',
  tags: ['Order'],
  summary: 'List the buy orders',
  description: 'List the buy orders',
  operationId: 'getBuyOrderList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderListVOSchema },
        'application/json': { schema: OrderListVOSchema },
        'application/x-json-smile': { schema: OrderListVOSchema },
        'application/x-yaml': { schema: OrderListVOSchema },
        'application/xml': { schema: OrderListVOSchema },
        'text/csv': { schema: OrderListVOSchema },
        'text/x-yaml': { schema: OrderListVOSchema },
        'text/xml': { schema: OrderListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders',
  tags: ['Order'],
  summary: 'Create a quick buy order',
  description: 'Create a quick buy order',
  operationId: 'postBuyOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrderPOSchema },
        'application/x-json-smile': { schema: OrderPOSchema },
        'application/x-yaml': { schema: OrderPOSchema },
        'application/xml': { schema: OrderPOSchema },
        'text/csv': { schema: OrderPOSchema },
        'text/x-yaml': { schema: OrderPOSchema },
        'text/xml': { schema: OrderPOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: OrderPOSchema },
        'application/json': { schema: OrderPOSchema },
        'application/x-json-smile': { schema: OrderPOSchema },
        'application/x-yaml': { schema: OrderPOSchema },
        'application/xml': { schema: OrderPOSchema },
        'text/csv': { schema: OrderPOSchema },
        'text/x-yaml': { schema: OrderPOSchema },
        'text/xml': { schema: OrderPOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders/{order_id}',
  tags: ['Order'],
  summary: 'Get a specific buy order',
  description: 'Get a specific buy order',
  operationId: 'getBuyOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderDetailVOSchema },
        'application/json': { schema: OrderDetailVOSchema },
        'application/x-json-smile': { schema: OrderDetailVOSchema },
        'application/x-yaml': { schema: OrderDetailVOSchema },
        'application/xml': { schema: OrderDetailVOSchema },
        'text/csv': { schema: OrderDetailVOSchema },
        'text/x-yaml': { schema: OrderDetailVOSchema },
        'text/xml': { schema: OrderDetailVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders/{order_id}',
  tags: ['Order'],
  summary: 'Update a specific buy order',
  description: 'Update a specific buy order',
  operationId: 'putBuyOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: OrderUpdPersistVORequestBody,
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: OrderVOSchema },
        'application/json': { schema: OrderVOSchema },
        'application/x-json-smile': { schema: OrderVOSchema },
        'application/x-yaml': { schema: OrderVOSchema },
        'application/xml': { schema: OrderVOSchema },
        'text/csv': { schema: OrderVOSchema },
        'text/x-yaml': { schema: OrderVOSchema },
        'text/xml': { schema: OrderVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/children',
  tags: ['Project'],
  summary: 'Attach children projects to specific Project',
  description: 'Attach children projects to specific Project',
  operationId: 'attachProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProjectIdListVOSchema },
        'application/x-json-smile': { schema: ProjectIdListVOSchema },
        'application/x-yaml': { schema: ProjectIdListVOSchema },
        'application/xml': { schema: ProjectIdListVOSchema },
        'text/csv': { schema: ProjectIdListVOSchema },
        'text/x-yaml': { schema: ProjectIdListVOSchema },
        'text/xml': { schema: ProjectIdListVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful update',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/estimates',
  tags: ['Estimate'],
  summary: 'List the Estimates',
  description: 'List the Estimates',
  operationId: 'getEstimateList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: EstimateListExpandVOSchema },
        'application/json': { schema: EstimateListExpandVOSchema },
        'application/x-json-smile': { schema: EstimateListExpandVOSchema },
        'application/x-yaml': { schema: EstimateListExpandVOSchema },
        'application/xml': { schema: EstimateListExpandVOSchema },
        'text/csv': { schema: EstimateListExpandVOSchema },
        'text/x-yaml': { schema: EstimateListExpandVOSchema },
        'text/xml': { schema: EstimateListExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/estimates',
  tags: ['Estimate'],
  summary: 'Create a Estimate',
  description: 'Create a Estimate',
  operationId: 'postEstimate',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EstimatePOSchema },
        'application/x-json-smile': { schema: EstimatePOSchema },
        'application/x-yaml': { schema: EstimatePOSchema },
        'application/xml': { schema: EstimatePOSchema },
        'text/csv': { schema: EstimatePOSchema },
        'text/x-yaml': { schema: EstimatePOSchema },
        'text/xml': { schema: EstimatePOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful create',
      content: {
        '*/*': { schema: EstimatePOSchema },
        'application/json': { schema: EstimatePOSchema },
        'application/x-json-smile': { schema: EstimatePOSchema },
        'application/x-yaml': { schema: EstimatePOSchema },
        'application/xml': { schema: EstimatePOSchema },
        'text/csv': { schema: EstimatePOSchema },
        'text/x-yaml': { schema: EstimatePOSchema },
        'text/xml': { schema: EstimatePOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/estimates/{estimate_id}',
  tags: ['Estimate'],
  summary: 'Get a specific estimate of project',
  description: 'Get a specific estimate of project',
  operationId: 'getEstimate',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      estimate_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'estimate_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: EstimateExpandVOSchema },
        'application/json': { schema: EstimateExpandVOSchema },
        'application/x-json-smile': { schema: EstimateExpandVOSchema },
        'application/x-yaml': { schema: EstimateExpandVOSchema },
        'application/xml': { schema: EstimateExpandVOSchema },
        'text/csv': { schema: EstimateExpandVOSchema },
        'text/x-yaml': { schema: EstimateExpandVOSchema },
        'text/xml': { schema: EstimateExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/orders/{order_id}',
  tags: ['Invoice'],
  summary: 'List invoices by a specific order',
  description: 'List invoices by a specific order',
  operationId: 'getInvoices',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: InvoiceDetailListExpandVOSchema },
        'application/json': { schema: InvoiceDetailListExpandVOSchema },
        'application/x-json-smile': { schema: InvoiceDetailListExpandVOSchema },
        'application/x-yaml': { schema: InvoiceDetailListExpandVOSchema },
        'application/xml': { schema: InvoiceDetailListExpandVOSchema },
        'text/csv': { schema: InvoiceDetailListExpandVOSchema },
        'text/x-yaml': { schema: InvoiceDetailListExpandVOSchema },
        'text/xml': { schema: InvoiceDetailListExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}',
  tags: ['Invoice'],
  summary: 'List a specific invoice of project Level',
  description: 'List a specific invoice of project Level',
  operationId: 'getInvoice',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      invoice_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'invoice_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: InvoiceExpandVOSchema },
        'application/json': { schema: InvoiceExpandVOSchema },
        'application/x-json-smile': { schema: InvoiceExpandVOSchema },
        'application/x-yaml': { schema: InvoiceExpandVOSchema },
        'application/xml': { schema: InvoiceExpandVOSchema },
        'text/csv': { schema: InvoiceExpandVOSchema },
        'text/x-yaml': { schema: InvoiceExpandVOSchema },
        'text/xml': { schema: InvoiceExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}/files',
  tags: ['Invoice'],
  summary: 'List files of invoice Level',
  description: 'List files of invoice Level',
  operationId: 'getInvoiceFiles',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      invoice_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'invoice_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: FileListResponseVOSchema },
        'application/json': { schema: FileListResponseVOSchema },
        'application/x-json-smile': { schema: FileListResponseVOSchema },
        'application/x-yaml': { schema: FileListResponseVOSchema },
        'application/xml': { schema: FileListResponseVOSchema },
        'text/csv': { schema: FileListResponseVOSchema },
        'text/x-yaml': { schema: FileListResponseVOSchema },
        'text/xml': { schema: FileListResponseVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/memberroles/{user_id}',
  tags: ['Team Member Role'],
  summary: 'List all the role options for the user',
  description: 'List all the role options for the user',
  operationId: 'getMemberRoles',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: RoleListVOSchema },
        'application/json': { schema: RoleListVOSchema },
        'application/x-json-smile': { schema: RoleListVOSchema },
        'application/x-yaml': { schema: RoleListVOSchema },
        'application/xml': { schema: RoleListVOSchema },
        'text/csv': { schema: RoleListVOSchema },
        'text/x-yaml': { schema: RoleListVOSchema },
        'text/xml': { schema: RoleListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/orders/{order_id}',
  tags: ['Order'],
  summary: 'Get a specific buy/sell order',
  description: 'Get a specific buy/sell order',
  operationId: 'getOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderDetailWithIndicatorVOSchema },
        'application/json': { schema: OrderDetailWithIndicatorVOSchema },
        'application/x-json-smile': { schema: OrderDetailWithIndicatorVOSchema },
        'application/x-yaml': { schema: OrderDetailWithIndicatorVOSchema },
        'application/xml': { schema: OrderDetailWithIndicatorVOSchema },
        'text/csv': { schema: OrderDetailWithIndicatorVOSchema },
        'text/x-yaml': { schema: OrderDetailWithIndicatorVOSchema },
        'text/xml': { schema: OrderDetailWithIndicatorVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes',
  tags: ['Quote'],
  summary: 'List the quotes',
  description: 'List the quotes',
  operationId: 'getQuoteList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'quote_state_id, use filters={"quote_state_id":111111}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value',
            in: 'query',
            name: 'quote_state_id, use filters={"quote_state_id":111111}',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: QuoteListVOSchema },
        'application/json': { schema: QuoteListVOSchema },
        'application/x-json-smile': { schema: QuoteListVOSchema },
        'application/x-yaml': { schema: QuoteListVOSchema },
        'application/xml': { schema: QuoteListVOSchema },
        'text/csv': { schema: QuoteListVOSchema },
        'text/x-yaml': { schema: QuoteListVOSchema },
        'text/xml': { schema: QuoteListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}',
  tags: ['Quote'],
  summary: 'Get a specific quote of project',
  description: 'Get a specific quote of project',
  operationId: 'getQuote',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      quote_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'quote_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: QuoteExpandVOSchema },
        'application/json': { schema: QuoteExpandVOSchema },
        'application/x-json-smile': { schema: QuoteExpandVOSchema },
        'application/x-yaml': { schema: QuoteExpandVOSchema },
        'application/xml': { schema: QuoteExpandVOSchema },
        'text/csv': { schema: QuoteExpandVOSchema },
        'text/x-yaml': { schema: QuoteExpandVOSchema },
        'text/xml': { schema: QuoteExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}',
  tags: ['Quote'],
  summary: 'Accept / Reject a Quote',
  description: 'Accept / Reject a Quote',
  operationId: 'putQuote',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      quote_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'quote_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: QuotePutPersistVOSchema },
        'application/x-json-smile': { schema: QuotePutPersistVOSchema },
        'application/x-yaml': { schema: QuotePutPersistVOSchema },
        'application/xml': { schema: QuotePutPersistVOSchema },
        'text/csv': { schema: QuotePutPersistVOSchema },
        'text/x-yaml': { schema: QuotePutPersistVOSchema },
        'text/xml': { schema: QuotePutPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/rfes',
  tags: ['RFE'],
  summary: 'List the RFES',
  description: 'List the RFES',
  operationId: 'getRfeList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: RfeListVOSchema },
        'application/json': { schema: RfeListVOSchema },
        'application/x-json-smile': { schema: RfeListVOSchema },
        'application/x-yaml': { schema: RfeListVOSchema },
        'application/xml': { schema: RfeListVOSchema },
        'text/csv': { schema: RfeListVOSchema },
        'text/x-yaml': { schema: RfeListVOSchema },
        'text/xml': { schema: RfeListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/rfes',
  tags: ['RFE'],
  summary: 'Create a RFE',
  description: 'Create a RFE',
  operationId: 'postRfe',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: RfePOSchema },
        'application/x-json-smile': { schema: RfePOSchema },
        'application/x-yaml': { schema: RfePOSchema },
        'application/xml': { schema: RfePOSchema },
        'text/csv': { schema: RfePOSchema },
        'text/x-yaml': { schema: RfePOSchema },
        'text/xml': { schema: RfePOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful update',
      content: {
        '*/*': { schema: RfqVOSchema },
        'application/json': { schema: RfqVOSchema },
        'application/x-json-smile': { schema: RfqVOSchema },
        'application/x-yaml': { schema: RfqVOSchema },
        'application/xml': { schema: RfqVOSchema },
        'text/csv': { schema: RfqVOSchema },
        'text/x-yaml': { schema: RfqVOSchema },
        'text/xml': { schema: RfqVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/rfes/{rfe_id}',
  tags: ['RFE'],
  summary: 'Get a specific Rfe',
  description: 'Get a specific Rfe',
  operationId: 'getRfe',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      rfe_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rfe_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: RfeExpandVOSchema },
        'application/json': { schema: RfeExpandVOSchema },
        'application/x-json-smile': { schema: RfeExpandVOSchema },
        'application/x-yaml': { schema: RfeExpandVOSchema },
        'application/xml': { schema: RfeExpandVOSchema },
        'text/csv': { schema: RfeExpandVOSchema },
        'text/x-yaml': { schema: RfeExpandVOSchema },
        'text/xml': { schema: RfeExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/rfqs',
  tags: ['Rfq'],
  summary: 'List the rfqs',
  description: 'List the rfqs',
  operationId: 'getRfqList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: RfqListVOSchema },
        'application/json': { schema: RfqListVOSchema },
        'application/x-json-smile': { schema: RfqListVOSchema },
        'application/x-yaml': { schema: RfqListVOSchema },
        'application/xml': { schema: RfqListVOSchema },
        'text/csv': { schema: RfqListVOSchema },
        'text/x-yaml': { schema: RfqListVOSchema },
        'text/xml': { schema: RfqListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/rfqs/{rfq_id}',
  tags: ['Rfq'],
  summary: 'Get a specific Rfq',
  description: 'Get a specific Rfq',
  operationId: 'getRfq',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      rfq_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rfq_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: RfqExpandVOSchema },
        'application/json': { schema: RfqExpandVOSchema },
        'application/x-json-smile': { schema: RfqExpandVOSchema },
        'application/x-yaml': { schema: RfqExpandVOSchema },
        'application/xml': { schema: RfqExpandVOSchema },
        'text/csv': { schema: RfqExpandVOSchema },
        'text/x-yaml': { schema: RfqExpandVOSchema },
        'text/xml': { schema: RfqExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders',
  tags: ['Order'],
  summary: 'List the sell orders',
  description: 'List the sell orders',
  operationId: 'getSellOrderList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderListVOSchema },
        'application/json': { schema: OrderListVOSchema },
        'application/x-json-smile': { schema: OrderListVOSchema },
        'application/x-yaml': { schema: OrderListVOSchema },
        'application/xml': { schema: OrderListVOSchema },
        'text/csv': { schema: OrderListVOSchema },
        'text/x-yaml': { schema: OrderListVOSchema },
        'text/xml': { schema: OrderListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders/{order_id}',
  tags: ['Order'],
  summary: 'Get a specific sell order',
  description: 'Get a specific sell order',
  operationId: 'getSellOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderDetailVOSchema },
        'application/json': { schema: OrderDetailVOSchema },
        'application/x-json-smile': { schema: OrderDetailVOSchema },
        'application/x-yaml': { schema: OrderDetailVOSchema },
        'application/xml': { schema: OrderDetailVOSchema },
        'text/csv': { schema: OrderDetailVOSchema },
        'text/x-yaml': { schema: OrderDetailVOSchema },
        'text/xml': { schema: OrderDetailVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders/{order_id}',
  tags: ['Order'],
  summary: 'Update / Accept or Reject a specific sell order',
  description: 'Update / Accept or Reject a specific sell order',
  operationId: 'putSellOrder',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: OrderUpdPersistVORequestBody,
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: OrderVOSchema },
        'application/json': { schema: OrderVOSchema },
        'application/x-json-smile': { schema: OrderVOSchema },
        'application/x-yaml': { schema: OrderVOSchema },
        'application/xml': { schema: OrderVOSchema },
        'text/csv': { schema: OrderVOSchema },
        'text/x-yaml': { schema: OrderVOSchema },
        'text/xml': { schema: OrderVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/shipments',
  tags: ['Shipment'],
  summary: 'List shipments of project',
  description: 'List shipments of project',
  operationId: 'getShipmentList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ShipmentListVOSchema },
        'application/json': { schema: ShipmentListVOSchema },
        'application/x-json-smile': { schema: ShipmentListVOSchema },
        'application/x-yaml': { schema: ShipmentListVOSchema },
        'application/xml': { schema: ShipmentListVOSchema },
        'text/csv': { schema: ShipmentListVOSchema },
        'text/x-yaml': { schema: ShipmentListVOSchema },
        'text/xml': { schema: ShipmentListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/shipments',
  tags: ['Shipment'],
  summary: 'Create a shipment',
  description: 'Create a shipment',
  operationId: 'postShipment',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ShipmentLocationPostPersistVOSchema },
        'application/x-json-smile': { schema: ShipmentLocationPostPersistVOSchema },
        'application/x-yaml': { schema: ShipmentLocationPostPersistVOSchema },
        'application/xml': { schema: ShipmentLocationPostPersistVOSchema },
        'text/csv': { schema: ShipmentLocationPostPersistVOSchema },
        'text/x-yaml': { schema: ShipmentLocationPostPersistVOSchema },
        'text/xml': { schema: ShipmentLocationPostPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: ShipmentLocationsPOSTResultVOSchema },
        'application/json': { schema: ShipmentLocationsPOSTResultVOSchema },
        'application/x-json-smile': { schema: ShipmentLocationsPOSTResultVOSchema },
        'application/x-yaml': { schema: ShipmentLocationsPOSTResultVOSchema },
        'application/xml': { schema: ShipmentLocationsPOSTResultVOSchema },
        'text/csv': { schema: ShipmentLocationsPOSTResultVOSchema },
        'text/x-yaml': { schema: ShipmentLocationsPOSTResultVOSchema },
        'text/xml': { schema: ShipmentLocationsPOSTResultVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/shipments/{shipment_id}',
  tags: ['Shipment'],
  summary: 'Get a specific shipment.',
  description: 'Get a specific shipment.',
  operationId: 'getShipment',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      shipment_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'shipment_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ShipmentExpandVOSchema },
        'application/json': { schema: ShipmentExpandVOSchema },
        'application/x-json-smile': { schema: ShipmentExpandVOSchema },
        'application/x-yaml': { schema: ShipmentExpandVOSchema },
        'application/xml': { schema: ShipmentExpandVOSchema },
        'text/csv': { schema: ShipmentExpandVOSchema },
        'text/x-yaml': { schema: ShipmentExpandVOSchema },
        'text/xml': { schema: ShipmentExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRoute =
  createRoute({
    method: 'put',
    path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/shipments/{shipment_id}/locations/{location_id}',
    tags: ['Shipment'],
    summary: 'Update a specific shipment location',
    description: 'Update a specific shipment location',
    operationId: 'putShipmentLocation',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
          }),
        shipment_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'shipment_id', required: true, schema: { type: 'string' } },
          }),
        location_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location_id', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ShipmentLocationPersistVOSchema },
          'application/x-json-smile': { schema: ShipmentLocationPersistVOSchema },
          'application/x-yaml': { schema: ShipmentLocationPersistVOSchema },
          'application/xml': { schema: ShipmentLocationPersistVOSchema },
          'text/csv': { schema: ShipmentLocationPersistVOSchema },
          'text/x-yaml': { schema: ShipmentLocationPersistVOSchema },
          'text/xml': { schema: ShipmentLocationPersistVOSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'Update successfully',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      422: {
        description: 'Invalid data',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/specs',
  tags: ['Spec'],
  summary: 'List specs of project Level',
  description: 'List specs of project Level',
  operationId: 'getSpecList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SpecListVOSchema },
        'application/json': { schema: SpecListVOSchema },
        'application/x-json-smile': { schema: SpecListVOSchema },
        'application/x-yaml': { schema: SpecListVOSchema },
        'application/xml': { schema: SpecListVOSchema },
        'text/csv': { schema: SpecListVOSchema },
        'text/x-yaml': { schema: SpecListVOSchema },
        'text/xml': { schema: SpecListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/specs',
  tags: ['Spec'],
  summary: 'Create a Spec',
  description: 'Create a Spec',
  operationId: 'postSpec',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SpecPersistVOSchema },
        'application/x-json-smile': { schema: SpecPersistVOSchema },
        'application/x-yaml': { schema: SpecPersistVOSchema },
        'application/xml': { schema: SpecPersistVOSchema },
        'text/csv': { schema: SpecPersistVOSchema },
        'text/x-yaml': { schema: SpecPersistVOSchema },
        'text/xml': { schema: SpecPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: SpecVOSchema },
        'application/json': { schema: SpecVOSchema },
        'application/x-json-smile': { schema: SpecVOSchema },
        'application/x-yaml': { schema: SpecVOSchema },
        'application/xml': { schema: SpecVOSchema },
        'text/csv': { schema: SpecVOSchema },
        'text/x-yaml': { schema: SpecVOSchema },
        'text/xml': { schema: SpecVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}',
  tags: ['Spec'],
  summary: 'List a specific spec of project Level',
  description: 'List a specific spec of project Level',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      spec_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SpecListVOSchema },
        'application/json': { schema: SpecListVOSchema },
        'application/x-json-smile': { schema: SpecListVOSchema },
        'application/x-yaml': { schema: SpecListVOSchema },
        'application/xml': { schema: SpecListVOSchema },
        'text/csv': { schema: SpecListVOSchema },
        'text/x-yaml': { schema: SpecListVOSchema },
        'text/xml': { schema: SpecListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute = createRoute({
  method: 'put',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}',
  tags: ['Spec'],
  summary: 'Update a specific Spec',
  description: 'Update a specific Spec',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      spec_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: SpecUpdatePersistVOSchema },
        'application/x-json-smile': { schema: SpecUpdatePersistVOSchema },
        'application/x-yaml': { schema: SpecUpdatePersistVOSchema },
        'application/xml': { schema: SpecUpdatePersistVOSchema },
        'text/csv': { schema: SpecUpdatePersistVOSchema },
        'text/x-yaml': { schema: SpecUpdatePersistVOSchema },
        'text/xml': { schema: SpecUpdatePersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful updated',
      content: {
        '*/*': { schema: SpecHTTPStatusVOSchema },
        'application/json': { schema: SpecHTTPStatusVOSchema },
        'application/x-json-smile': { schema: SpecHTTPStatusVOSchema },
        'application/x-yaml': { schema: SpecHTTPStatusVOSchema },
        'application/xml': { schema: SpecHTTPStatusVOSchema },
        'text/csv': { schema: SpecHTTPStatusVOSchema },
        'text/x-yaml': { schema: SpecHTTPStatusVOSchema },
        'text/xml': { schema: SpecHTTPStatusVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/tasks',
  tags: ['Task'],
  summary: 'Get task list of project level',
  description: 'Get task list of project level',
  operationId: 'getTaskListOfProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskListVOSchema },
        'application/json': { schema: TaskListVOSchema },
        'application/x-json-smile': { schema: TaskListVOSchema },
        'application/x-yaml': { schema: TaskListVOSchema },
        'application/xml': { schema: TaskListVOSchema },
        'text/csv': { schema: TaskListVOSchema },
        'text/x-yaml': { schema: TaskListVOSchema },
        'text/xml': { schema: TaskListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/tasks',
  tags: ['Task'],
  summary: 'Create a new task',
  description: 'Create a new task',
  operationId: 'postTaskForProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TaskPersistVOSchema },
        'application/x-json-smile': { schema: TaskPersistVOSchema },
        'application/x-yaml': { schema: TaskPersistVOSchema },
        'application/xml': { schema: TaskPersistVOSchema },
        'text/csv': { schema: TaskPersistVOSchema },
        'text/x-yaml': { schema: TaskPersistVOSchema },
        'text/xml': { schema: TaskPersistVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful created',
      content: {
        '*/*': { schema: TaskCreatedVOSchema },
        'application/json': { schema: TaskCreatedVOSchema },
        'application/x-json-smile': { schema: TaskCreatedVOSchema },
        'application/x-yaml': { schema: TaskCreatedVOSchema },
        'application/xml': { schema: TaskCreatedVOSchema },
        'text/csv': { schema: TaskCreatedVOSchema },
        'text/x-yaml': { schema: TaskCreatedVOSchema },
        'text/xml': { schema: TaskCreatedVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/tasks/{task_id}',
  tags: ['Task'],
  summary: 'Get a sepcific task of project level',
  description: 'Get a sepcific task of project level',
  operationId: 'getTaskOfProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
      task_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'task_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskExpandVOSchema },
        'application/json': { schema: TaskExpandVOSchema },
        'application/x-json-smile': { schema: TaskExpandVOSchema },
        'application/x-yaml': { schema: TaskExpandVOSchema },
        'application/xml': { schema: TaskExpandVOSchema },
        'text/csv': { schema: TaskExpandVOSchema },
        'text/x-yaml': { schema: TaskExpandVOSchema },
        'text/xml': { schema: TaskExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRoute =
  createRoute({
    method: 'get',
    path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/teamMembersOfClientProject',
    tags: ['Team Member'],
    summary: 'List team member of client project side.',
    description: 'List team member of client project side.',
    operationId: 'getTeamMemberListOfClientProject',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful retrieval',
        content: {
          '*/*': { schema: TeamMemberListVOSchema },
          'application/json': { schema: TeamMemberListVOSchema },
          'application/x-json-smile': { schema: TeamMemberListVOSchema },
          'application/x-yaml': { schema: TeamMemberListVOSchema },
          'application/xml': { schema: TeamMemberListVOSchema },
          'text/csv': { schema: TeamMemberListVOSchema },
          'text/x-yaml': { schema: TeamMemberListVOSchema },
          'text/xml': { schema: TeamMemberListVOSchema },
        },
      },
      404: {
        description: 'There are not any result matching your search condition',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers',
  tags: ['Team Member'],
  summary: 'List team member of project.',
  description: 'List team member of project.',
  operationId: 'getTeamMemberListOfProject',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TeamMemberListVOSchema },
        'application/json': { schema: TeamMemberListVOSchema },
        'application/x-json-smile': { schema: TeamMemberListVOSchema },
        'application/x-yaml': { schema: TeamMemberListVOSchema },
        'application/xml': { schema: TeamMemberListVOSchema },
        'text/csv': { schema: TeamMemberListVOSchema },
        'text/x-yaml': { schema: TeamMemberListVOSchema },
        'text/xml': { schema: TeamMemberListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute = createRoute({
  method: 'post',
  path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers',
  tags: ['Team Member'],
  summary: 'Deprecated, please use 1.1 Version',
  description: 'Deprecated, please use 1.1 Version',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ContactUserVOSchema },
        'application/x-json-smile': { schema: ContactUserVOSchema },
        'application/x-yaml': { schema: ContactUserVOSchema },
        'application/xml': { schema: ContactUserVOSchema },
        'text/csv': { schema: ContactUserVOSchema },
        'text/x-yaml': { schema: ContactUserVOSchema },
        'text/xml': { schema: ContactUserVOSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TeamMemberBaseInfVOSchema },
        'application/json': { schema: TeamMemberBaseInfVOSchema },
        'application/x-json-smile': { schema: TeamMemberBaseInfVOSchema },
        'application/x-yaml': { schema: TeamMemberBaseInfVOSchema },
        'application/xml': { schema: TeamMemberBaseInfVOSchema },
        'text/csv': { schema: TeamMemberBaseInfVOSchema },
        'text/x-yaml': { schema: TeamMemberBaseInfVOSchema },
        'text/xml': { schema: TeamMemberBaseInfVOSchema },
      },
    },
    422: {
      description: 'Invalid data',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers/{teammember_id}',
    tags: ['Team Member'],
    summary: 'Delete a team member for the specific project.',
    description: 'Delete a team member for the specific project.',
    operationId: 'deleteTeamMemberOfProject',
    request: {
      params: z.object({
        workgroup_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
          }),
        teammember_id: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'teammember_id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful retrieval',
        content: {
          '*/*': { schema: TeamMemberBaseInfVOSchema },
          'application/json': { schema: TeamMemberBaseInfVOSchema },
          'application/x-json-smile': { schema: TeamMemberBaseInfVOSchema },
          'application/x-yaml': { schema: TeamMemberBaseInfVOSchema },
          'application/xml': { schema: TeamMemberBaseInfVOSchema },
          'text/csv': { schema: TeamMemberBaseInfVOSchema },
          'text/x-yaml': { schema: TeamMemberBaseInfVOSchema },
          'text/xml': { schema: TeamMemberBaseInfVOSchema },
        },
      },
      404: {
        description: 'There are not any result matching your search condition',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          '*/*': { schema: HTTPStatusVOSchema },
          'application/json': { schema: HTTPStatusVOSchema },
          'application/x-json-smile': { schema: HTTPStatusVOSchema },
          'application/x-yaml': { schema: HTTPStatusVOSchema },
          'application/xml': { schema: HTTPStatusVOSchema },
          'text/csv': { schema: HTTPStatusVOSchema },
          'text/x-yaml': { schema: HTTPStatusVOSchema },
          'text/xml': { schema: HTTPStatusVOSchema },
        },
      },
    },
  })

export const getV1WorkgroupsWorkgroupIdQuoteStatesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/quoteStates',
  tags: ['Quote'],
  summary: 'List the quote states',
  description: 'List the quote states',
  operationId: 'getQuoteStateList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: ObjectStateListVOSchema },
        'application/json': { schema: ObjectStateListVOSchema },
        'application/x-json-smile': { schema: ObjectStateListVOSchema },
        'application/x-yaml': { schema: ObjectStateListVOSchema },
        'application/xml': { schema: ObjectStateListVOSchema },
        'text/csv': { schema: ObjectStateListVOSchema },
        'text/x-yaml': { schema: ObjectStateListVOSchema },
        'text/xml': { schema: ObjectStateListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdQuotesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/quotes',
  tags: ['Quote'],
  summary: 'List the quotes of workgroup level',
  description: 'List the quotes of workgroup level',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'quote_state_id, use filters={"quote_state_id":111111}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value',
            in: 'query',
            name: 'quote_state_id, use filters={"quote_state_id":111111}',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: QuoteOfWgLevelSimpleVOSchema },
        'application/json': { schema: QuoteOfWgLevelSimpleVOSchema },
        'application/x-json-smile': { schema: QuoteOfWgLevelSimpleVOSchema },
        'application/x-yaml': { schema: QuoteOfWgLevelSimpleVOSchema },
        'application/xml': { schema: QuoteOfWgLevelSimpleVOSchema },
        'text/csv': { schema: QuoteOfWgLevelSimpleVOSchema },
        'text/x-yaml': { schema: QuoteOfWgLevelSimpleVOSchema },
        'text/xml': { schema: QuoteOfWgLevelSimpleVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdReceivedTimeCardsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/receivedTimeCards',
  tags: ['Time Card'],
  summary: 'List received time cards',
  description: 'List received time cards',
  operationId: 'getReceivedTimeCardList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TimeCardListVOSchema },
        'application/json': { schema: TimeCardListVOSchema },
        'application/x-json-smile': { schema: TimeCardListVOSchema },
        'application/x-yaml': { schema: TimeCardListVOSchema },
        'application/xml': { schema: TimeCardListVOSchema },
        'text/csv': { schema: TimeCardListVOSchema },
        'text/x-yaml': { schema: TimeCardListVOSchema },
        'text/xml': { schema: TimeCardListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/receivedTimeCards/{timeCard_id}',
  tags: ['Time Card'],
  summary: 'List a specific received time cards',
  description: 'List a specific received time cards',
  operationId: 'getReceivedTimeCard',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      timeCard_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'timeCard_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TimeCardReceivedDetailVOSchema },
        'application/json': { schema: TimeCardReceivedDetailVOSchema },
        'application/x-json-smile': { schema: TimeCardReceivedDetailVOSchema },
        'application/x-yaml': { schema: TimeCardReceivedDetailVOSchema },
        'application/xml': { schema: TimeCardReceivedDetailVOSchema },
        'text/csv': { schema: TimeCardReceivedDetailVOSchema },
        'text/x-yaml': { schema: TimeCardReceivedDetailVOSchema },
        'text/xml': { schema: TimeCardReceivedDetailVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSellOrdersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/sellOrders',
  tags: ['Order'],
  summary: 'List the sell orders of workgrop',
  description: 'List the sell orders of workgrop',
  operationId: 'getSellOrderListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderWorkgroupLevelListVOSchema },
        'application/json': { schema: OrderWorkgroupLevelListVOSchema },
        'application/x-json-smile': { schema: OrderWorkgroupLevelListVOSchema },
        'application/x-yaml': { schema: OrderWorkgroupLevelListVOSchema },
        'application/xml': { schema: OrderWorkgroupLevelListVOSchema },
        'text/csv': { schema: OrderWorkgroupLevelListVOSchema },
        'text/x-yaml': { schema: OrderWorkgroupLevelListVOSchema },
        'text/xml': { schema: OrderWorkgroupLevelListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/sellOrders/{order_id}',
  tags: ['Order'],
  summary: 'Get a specific sell order',
  description: 'Get a specific sell order',
  operationId: 'getSellOrderOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/json': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/x-json-smile': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/x-yaml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'application/xml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/csv': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/x-yaml': { schema: OrderExpandWorkgroupLevelVOSchema },
        'text/xml': { schema: OrderExpandWorkgroupLevelVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSpecTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/specTemplates',
  tags: ['Spec Template'],
  summary: 'List Spec Templates of Workgroup Level ',
  description: 'List Spec Templates of Workgroup Level ',
  operationId: 'getSpecTemplateList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SpecTemplateListVOSchema },
        'application/json': { schema: SpecTemplateListVOSchema },
        'application/x-json-smile': { schema: SpecTemplateListVOSchema },
        'application/x-yaml': { schema: SpecTemplateListVOSchema },
        'application/xml': { schema: SpecTemplateListVOSchema },
        'text/csv': { schema: SpecTemplateListVOSchema },
        'text/x-yaml': { schema: SpecTemplateListVOSchema },
        'text/xml': { schema: SpecTemplateListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/specTemplates/{spec_template_id}',
  tags: ['Spec Template'],
  summary: 'Get a specific Spec Template',
  description: 'Get a specific Spec Template',
  operationId: 'getSpecTemplate',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      spec_template_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'spec_template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SpecTemplateExpandVOSchema },
        'application/json': { schema: SpecTemplateExpandVOSchema },
        'application/x-json-smile': { schema: SpecTemplateExpandVOSchema },
        'application/x-yaml': { schema: SpecTemplateExpandVOSchema },
        'application/xml': { schema: SpecTemplateExpandVOSchema },
        'text/csv': { schema: SpecTemplateExpandVOSchema },
        'text/x-yaml': { schema: SpecTemplateExpandVOSchema },
        'text/xml': { schema: SpecTemplateExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields',
  tags: ['Spec'],
  summary: 'Get Spec Type Fields',
  description: 'Get Spec Type Fields',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      spec_type_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'spec_type_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: PropertyParamListVOSchema },
        'application/json': { schema: PropertyParamListVOSchema },
        'application/x-json-smile': { schema: PropertyParamListVOSchema },
        'application/x-yaml': { schema: PropertyParamListVOSchema },
        'application/xml': { schema: PropertyParamListVOSchema },
        'text/csv': { schema: PropertyParamListVOSchema },
        'text/x-yaml': { schema: PropertyParamListVOSchema },
        'text/xml': { schema: PropertyParamListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/supplierWorkgroups',
  tags: ['Workgroup'],
  summary: 'List supplier workgroups',
  description: 'List supplier workgroups',
  operationId: 'getSupplierWorkgroupList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SupplierWorkgroupListVOSchema },
        'application/json': { schema: SupplierWorkgroupListVOSchema },
        'application/x-json-smile': { schema: SupplierWorkgroupListVOSchema },
        'application/x-yaml': { schema: SupplierWorkgroupListVOSchema },
        'application/xml': { schema: SupplierWorkgroupListVOSchema },
        'text/csv': { schema: SupplierWorkgroupListVOSchema },
        'text/x-yaml': { schema: SupplierWorkgroupListVOSchema },
        'text/xml': { schema: SupplierWorkgroupListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/supplierWorkgroups/{bu_supplier_workgroup_id}',
  tags: ['Workgroup'],
  summary: 'Get the specific supplier of My Group',
  description: 'Get the specific supplier of My Group',
  operationId: 'getSupplierWorkgroupDetail',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      bu_supplier_workgroup_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bu_supplier_workgroup_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: SupplierWorkgroupExpandVOSchema },
        'application/json': { schema: SupplierWorkgroupExpandVOSchema },
        'application/x-json-smile': { schema: SupplierWorkgroupExpandVOSchema },
        'application/x-yaml': { schema: SupplierWorkgroupExpandVOSchema },
        'application/xml': { schema: SupplierWorkgroupExpandVOSchema },
        'text/csv': { schema: SupplierWorkgroupExpandVOSchema },
        'text/x-yaml': { schema: SupplierWorkgroupExpandVOSchema },
        'text/xml': { schema: SupplierWorkgroupExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdTaskTypesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/taskTypes',
  tags: ['Task'],
  summary: 'Get task types of workgroup level',
  description: 'Get task types of workgroup level',
  operationId: 'getTaskTypesOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskTypeListVOSchema },
        'application/json': { schema: TaskTypeListVOSchema },
        'application/x-json-smile': { schema: TaskTypeListVOSchema },
        'application/x-yaml': { schema: TaskTypeListVOSchema },
        'application/xml': { schema: TaskTypeListVOSchema },
        'text/csv': { schema: TaskTypeListVOSchema },
        'text/x-yaml': { schema: TaskTypeListVOSchema },
        'text/xml': { schema: TaskTypeListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdTasksRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/tasks',
  tags: ['Task'],
  summary: 'Get task list of workgroup level',
  description: 'Get task list of workgroup level',
  operationId: 'getTaskListOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskWorkgroupLevelListVOSchema },
        'application/json': { schema: TaskWorkgroupLevelListVOSchema },
        'application/x-json-smile': { schema: TaskWorkgroupLevelListVOSchema },
        'application/x-yaml': { schema: TaskWorkgroupLevelListVOSchema },
        'application/xml': { schema: TaskWorkgroupLevelListVOSchema },
        'text/csv': { schema: TaskWorkgroupLevelListVOSchema },
        'text/x-yaml': { schema: TaskWorkgroupLevelListVOSchema },
        'text/xml': { schema: TaskWorkgroupLevelListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/tasks/{task_id}',
  tags: ['Task'],
  summary: 'Get a sepcific task of workgroup level',
  description: 'Get a sepcific task of workgroup level',
  operationId: 'getTaskOfWorkgroup',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      task_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'task_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TaskExpandWorkgroupLevelVOSchema },
        'application/json': { schema: TaskExpandWorkgroupLevelVOSchema },
        'application/x-json-smile': { schema: TaskExpandWorkgroupLevelVOSchema },
        'application/x-yaml': { schema: TaskExpandWorkgroupLevelVOSchema },
        'application/xml': { schema: TaskExpandWorkgroupLevelVOSchema },
        'text/csv': { schema: TaskExpandWorkgroupLevelVOSchema },
        'text/x-yaml': { schema: TaskExpandWorkgroupLevelVOSchema },
        'text/xml': { schema: TaskExpandWorkgroupLevelVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdTeamTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/teamTemplates',
  tags: ['My Info'],
  summary: "List current user's team templates info ",
  description: "List current user's team templates info ",
  operationId: 'getTeamTemplateList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TeamTemplateListVOSchema },
        'application/json': { schema: TeamTemplateListVOSchema },
        'application/x-json-smile': { schema: TeamTemplateListVOSchema },
        'application/x-yaml': { schema: TeamTemplateListVOSchema },
        'application/xml': { schema: TeamTemplateListVOSchema },
        'text/csv': { schema: TeamTemplateListVOSchema },
        'text/x-yaml': { schema: TeamTemplateListVOSchema },
        'text/xml': { schema: TeamTemplateListVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/teamTemplates/{team_template_id}',
  tags: ['My Info'],
  summary: "Get current user's team template detal info ",
  description: "Get current user's team template detal info ",
  operationId: 'getTeamTemplateDetail',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      team_template_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'team_template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: TeamTemplateExpandVOSchema },
        'application/json': { schema: TeamTemplateExpandVOSchema },
        'application/x-json-smile': { schema: TeamTemplateExpandVOSchema },
        'application/x-yaml': { schema: TeamTemplateExpandVOSchema },
        'application/xml': { schema: TeamTemplateExpandVOSchema },
        'text/csv': { schema: TeamTemplateExpandVOSchema },
        'text/x-yaml': { schema: TeamTemplateExpandVOSchema },
        'text/xml': { schema: TeamTemplateExpandVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdWorkgroupMembersRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/workgroupMembers',
  tags: ['Workgroup Members'],
  summary: 'List the workgroup members',
  description: 'List the workgroup members',
  operationId: 'getWorkgroupMemberList',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: WorkgroupMembersListVOSchema },
        'application/json': { schema: WorkgroupMembersListVOSchema },
        'application/x-json-smile': { schema: WorkgroupMembersListVOSchema },
        'application/x-yaml': { schema: WorkgroupMembersListVOSchema },
        'application/xml': { schema: WorkgroupMembersListVOSchema },
        'text/csv': { schema: WorkgroupMembersListVOSchema },
        'text/x-yaml': { schema: WorkgroupMembersListVOSchema },
        'text/xml': { schema: WorkgroupMembersListVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})

export const getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/workgroups/{workgroup_id}/workgroupMembers/{user_id}',
  tags: ['Workgroup Members'],
  summary: 'Workgroup Member Info',
  description: 'Workgroup Member Info',
  operationId: 'getWorkgroupMemberInfo',
  request: {
    params: z.object({
      workgroup_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workgroup_id', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful retrieval',
      content: {
        '*/*': { schema: UserDetailsExpandVOSchema },
        'application/json': { schema: UserDetailsExpandVOSchema },
        'application/x-json-smile': { schema: UserDetailsExpandVOSchema },
        'application/x-yaml': { schema: UserDetailsExpandVOSchema },
        'application/xml': { schema: UserDetailsExpandVOSchema },
        'text/csv': { schema: UserDetailsExpandVOSchema },
        'text/x-yaml': { schema: UserDetailsExpandVOSchema },
        'text/xml': { schema: UserDetailsExpandVOSchema },
      },
    },
    404: {
      description: 'There are not any result matching your search condition',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        '*/*': { schema: HTTPStatusVOSchema },
        'application/json': { schema: HTTPStatusVOSchema },
        'application/x-json-smile': { schema: HTTPStatusVOSchema },
        'application/x-yaml': { schema: HTTPStatusVOSchema },
        'application/xml': { schema: HTTPStatusVOSchema },
        'text/csv': { schema: HTTPStatusVOSchema },
        'text/x-yaml': { schema: HTTPStatusVOSchema },
        'text/xml': { schema: HTTPStatusVOSchema },
      },
    },
  },
})
