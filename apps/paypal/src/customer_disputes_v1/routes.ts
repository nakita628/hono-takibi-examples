import { createRoute, z } from '@hono/zod-openapi'

const AcceptClaimTypeSchema = z
  .enum(['REFUND', 'REFUND_WITH_RETURN', 'PARTIAL_REFUND', 'REFUND_WITH_RETURN_SHIPMENT_LABEL'])
  .openapi({
    title: 'Accept Claim Type',
    description: 'The refund type proposed by the merchant for the dispute.',
    'x-enumDescriptions': [
      {
        value: 'REFUND',
        description:
          'The merchant must refund the customer without any item replacement or return. This type is applicable when a merchant is willing to refund the entire dispute amount without any further action from customer. Omit the <code>refund_amount</code> and <code>return_shipping_address</code> parameters from the <a href="/docs/api/customer-disputes/v1/#disputes-actions_accept-claim">accept claim</a> call.',
      },
      {
        value: 'REFUND_WITH_RETURN',
        description:
          'The customer must return the item to the merchant and then merchant will refund the money. This type is applicable when a merchant is willing to refund the dispute amount and requires the customer to return the item. Include the <code>return_shipping_address</code> parameter in but omit the <code>refund_amount</code> parameter from the <a href="/docs/api/customer-disputes/v1/#disputes-actions_accept-claim">accept claim</a> call.',
      },
      {
        value: 'PARTIAL_REFUND',
        description:
          'The merchant proposes a partial refund for the dispute.This type is applicable when a merchant is willing to refund an amount lesser than dispute amount. Include the <code>refund_amount</code> parameter.',
      },
      {
        value: 'REFUND_WITH_RETURN_SHIPMENT_LABEL',
        description:
          'The customer must return the item to the merchant and then merchant will refund the money. This type is applicable when a merchant is willing to refund the dispute amount and requires the customer to return the item using the shipment label provided by the merchant. Include the <code>return_shipment_info</code> and <code>return_shipping_address</code> parameter in but omit the <code>refund_amount</code> parameter from the <a href="/docs/api/customer-disputes/v1/#disputes-actions_accept-claim">accept claim</a> call.',
      },
    ],
  })
  .openapi('AcceptClaimType')

const AcceptClaimTypeListSchema = z
  .array(AcceptClaimTypeSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'The types of refund the merchant can provide the customer.' })
  .openapi('AcceptClaimTypeList')

const AcceptClaimResponseOptionsSchema = z
  .object({ accept_claim_types: AcceptClaimTypeListSchema.exactOptional() })
  .openapi({
    title: 'Accept Claim Response Options',
    description: 'The allowed response options when the merchant is accepting the claim.',
    required: [],
  })
  .openapi('AcceptClaimResponseOptions')

const AcceptOfferSchema = z
  .object({
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The customer notes about accepting of offer. PayPal can but the merchant cannot view these notes.',
      }),
  })
  .openapi({
    title: 'Accept Offer Request',
    description: 'A customer request to accept the offer made by the merchant.',
    required: [],
  })
  .openapi('AcceptOffer')

const AcknowledgementTypeSchema = z
  .enum([
    'ITEM_RECEIVED',
    'ITEM_NOT_RECEIVED',
    'DAMAGED',
    'EMPTY_PACKAGE_OR_DIFFERENT',
    'MISSING_ITEMS',
  ])
  .openapi({
    title: 'Allowed Acknowledgement Type',
    description:
      'The type of acknowledgement allowed for the merchant after the customer has returned the item. The merchant can update whether the item was received and is as expected or if the item was not received.',
    readOnly: true,
    'x-enumDescriptions': [
      {
        value: 'ITEM_RECEIVED',
        description: 'The merchant has received the item returned by the customer.',
      },
      { value: 'ITEM_NOT_RECEIVED', description: 'The merchant has not received the item.' },
      { value: 'DAMAGED', description: 'The items returned by the customer were damaged.' },
      {
        value: 'EMPTY_PACKAGE_OR_DIFFERENT',
        description: 'The package was empty or the goods were different from what was expected.',
      },
      {
        value: 'MISSING_ITEMS',
        description: 'The package did not have all the items that were expected.',
      },
    ],
  })
  .openapi('AcknowledgementType')

const AcknowledgementTypeListSchema = z
  .array(AcknowledgementTypeSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'The types of response when the merchant acknowledges a returned item.' })
  .openapi('AcknowledgementTypeList')

const AcknowledgeReturnItemResponseOptionsSchema = z
  .object({ acknowledgement_types: AcknowledgementTypeListSchema.exactOptional() })
  .openapi({
    title: 'Acknowledge Return Item Response Options',
    description:
      'The allowed response options when the seller acknowledges that the buyer has returned an item for the dispute.',
    required: [],
  })
  .openapi('AcknowledgeReturnItemResponseOptions')

const ActionInfoSchema = z
  .object({
    action: z
      .enum([
        'ACKNOWLEDGE_RETURN_ITEM',
        'ACCEPT_CLAIM',
        'PROVIDE_EVIDENCE',
        'APPEAL',
        'CANCEL',
        'CHANGE_REASON',
        'ESCALATE',
      ])
      .exactOptional()
      .openapi({
        description: 'The action for which the evidence was requested or submitted.',
        'x-enumDescriptions': [
          {
            value: 'ACKNOWLEDGE_RETURN_ITEM',
            description: 'The evidence corresponds to action `acknowledge_return_item`.',
          },
          {
            value: 'ACCEPT_CLAIM',
            description: 'The evidence corresponds to action `accept_claim`.',
          },
          {
            value: 'PROVIDE_EVIDENCE',
            description: 'The evidence corresponds to action `provide_evidence`.',
          },
          { value: 'APPEAL', description: 'The evidence corresponds to action `appeal`.' },
          { value: 'CANCEL', description: 'The evidence corresponds to action `cancel`.' },
          {
            value: 'CHANGE_REASON',
            description: 'The evidence corresponds to action `change_reason`.',
          },
          { value: 'ESCALATE', description: 'The evidence corresponds to action `escalate`.' },
        ],
      }),
    response_option: z
      .string()
      .regex(/^[A-Z_]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The response option for the corresponding action. Possible values:<ul><li><a href="/docs/api/customer-disputes/v1/#definition-acknowledgement_type">Acknowledgement Types</a></li><li><a href="/docs/api/customer-disputes/v1/#definition-response-accept_claim_type">Accept Claim types</a></li></ul>.',
      }),
    mandatory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the evidence is mandatory for the corresponding action and response option.',
      }),
  })
  .openapi({
    title: 'Evidence Extensions',
    description:
      'The extended properties for a evidence. Includes additional information such as the action for which the evidence was requested/submitted, and whether the evidence is mandatory.',
    required: [],
  })
  .openapi('ActionInfo')

const AddressDetailsSchema = z
  .object({
    street_number: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street number.' }),
    street_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street name. Just `Drury` in `Drury Lane`.' }),
    street_type: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The street type. For example, avenue, boulevard, road, or expressway.',
      }),
    delivery_service: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The delivery service. Post office box, bag number, or post office name.',
      }),
    building_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.',
      }),
    sub_building: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The first-order entity below a named building or location that represents the sub-premises. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.',
      }),
  })
  .openapi({
    title: 'Address Details',
    description:
      'The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.',
    required: [],
  })
  .openapi('AddressDetails')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const AddressPortableSchema = z
  .object({
    address_line_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.',
      }),
    address_line_2: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'The second line of the address. For example, suite or apartment number.',
      }),
    address_line_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.',
      }),
    admin_area_4: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>',
      }),
    admin_area_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>',
      }),
    admin_area_2: z
      .string()
      .max(120)
      .exactOptional()
      .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
    admin_area_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>',
      }),
    postal_code: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
      }),
    country_code: CountryCodeSchema,
    address_details: AddressDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Portable Postal Address (Medium-Grained)',
    description:
      'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
    required: ['country_code'],
  })
  .openapi('AddressPortable')

const AdjudicateSchema = z
  .object({
    adjudication_outcome: z.enum(['BUYER_FAVOR', 'SELLER_FAVOR']).openapi({
      description: 'The outcome of the adjudication.',
      'x-enumDescriptions': [
        {
          value: 'BUYER_FAVOR',
          description:
            "Resolves the case in the customer's favor. Outcome is set to <code>RESOLVED_BUYER_FAVOR</code>.",
        },
        {
          value: 'SELLER_FAVOR',
          description:
            "Resolves the case in the merchant's favor. Outcome is set to <code>RESOLVED_SELLER_FAVOR</code>.",
        },
      ],
    }),
  })
  .openapi({
    title: 'Settle Request',
    description: "A request to settle a dispute in either the customer's or merchant's favor.",
    required: ['adjudication_outcome'],
  })
  .openapi('Adjudicate')

const AdjudicationTypeSchema = z
  .enum(['DENY_BUYER', 'PAYOUT_TO_BUYER', 'PAYOUT_TO_SELLER', 'RECOVER_FROM_SELLER'])
  .openapi({
    description: 'The type of adjudication.',
    'x-enumDescriptions': [
      { value: 'DENY_BUYER', description: 'The decision is to deny the buyer for the dispute.' },
      { value: 'PAYOUT_TO_BUYER', description: 'The decision is to payout to the buyer.' },
      {
        value: 'PAYOUT_TO_SELLER',
        description: 'The decision is to payout to the seller if the seller was debited earlier.',
      },
      {
        value: 'RECOVER_FROM_SELLER',
        description:
          'The decision is to charge the seller for the dispute if the seller was not debited already.',
      },
    ],
  })
  .openapi('AdjudicationType')

const DateTimeSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    description:
      'The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>',
  })
  .openapi('DateTime')

const AdjudicationReasonSchema = z
  .enum([
    'AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES',
    'BILLING_AGREEMENT_CHANGE_DISCLOSED',
    'BILLING_AGREEMENT_CHANGE_NOT_DISCLOSED',
    'BILLING_AGREEMENT_DATE_CHANGE_DISCLOSED',
    'BILLING_AGREEMENT_DATE_CHANGE_NOT_DISCLOSED',
    'BUYER_ATTEMPTED_RETURN',
    'BUYER_BILLED_ONLY_ONCE',
    'BUYER_CANCELLED_CASE',
    'BUYER_CANCELLED_SERVICE',
    'BUYER_FAILED_TO_DESCRIBE_ISSUE',
    'BUYER_HAS_POSSESSION_OF_THE_MERCHANDISE_OR_SERVICE',
    'BUYER_MADE_NO_ATTEMPT_TO_RESOLVE_WITH_SELLER',
    'BUYER_NOT_IN_POSSESSION_OF_ITEM_TO_RETURN',
    'BUYER_PROVIDED_CREDIT_RECEIPT',
    'BUYER_RECEIVED_DUPLICATE_REFUND',
    'CANCELLED_PER_TERMS_OF_BILLING_AGREEMENT',
    'CARD_NOT_STOLEN',
    'CARD_NOT_STOLEN_BEFORE_AUTH',
    'CUSTOMER_RECOGNIZES_TRANSACTION',
    'DECISION_BASED_ON_AVAILABLE_INFORMATION',
    'DELIVERY_AFTER_EXPECTED_DELIVERY_DATE',
    'DELIVERY_DUE_WITHIN_EXPECTED_DELIVERY_DATE',
    'DELIVERY_OR_SERVICE_REFUSED',
    'DOCUMENTATION_MATCHES_AMOUNT_CHARGED',
    'DOCUMENTATION_MATCHES_AMOUNT_IN_PAYPAL_ACCOUNT',
    'DUPLICATE_ADD_FUNDS',
    'EFFORTLESS_SELLER_PROTECTION',
    'IN_PERSON_DELIVERY',
    'INELIGIBLE_BUYER_PROTECTION_POLICY',
    'INELIGIBLE_SELLER_PROTECTION_POLICY',
    'INQUIRY_OFFER_ITEM_REPLACED',
    'INQUIRY_OFFER_PARTIAL_REFUND',
    'INQUIRY_OFFER_REFUND_WITH_ITEM_RETURN',
    'INQUIRY_OFFER_REFUND_WITH_REPLACEMENT',
    'INVALID_APPEAL_REASON',
    'INVALID_CHARGEBACK_SELLER_FAVOUR',
    'INVALID_DELIVERY_PROOF',
    'INVALID_DELIVERY_PROOF_SIGNATURE',
    'INVALID_DOCUMENTATION',
    'INVALID_PROOF_OF_SHIPMENT',
    'INVALID_REFUND_PROOF',
    'INVALID_RETURN_DELIVERY_NO_SIGNATURE_PROOF',
    'INVALID_RETURN_DELIVERY_PROOF',
    'INVALID_TRACKING',
    'ITEM_ALTERED_REPAIRED',
    'ITEM_NOT_AS_ADVERTISED',
    'ITEM_NOT_AS_DESCRIBED',
    'ITEM_NOT_DAMAGED',
    'ITEM_NOT_DELIVERED',
    'ITEM_NOT_RETURNED_TO_SELLER',
    'ITEM_NOT_SHIPPED',
    'ITEM_OF_DIFFERENT_QUALITY_OR_QUANTITY',
    'ITEM_OUT_OF_STOCK_AND_NOT_DELIVERED',
    'ITEM_RETURNED_TO_SELLER',
    'ITEM_SERVICE_MISREPRESENTED',
    'ITEM_SERVICE_NOT_MISREPRESENTED',
    'ITEM_SERVICE_RECEIVED_BY_BUYER',
    'ITEM_SOLD_AS_DESCRIBED',
    'ITEM_VALUE_UNAFFECTED',
    'MULTIPLE_APPEALS_WITH_SAME_REASON',
    'NO_DOCUMENTATION_FROM_BUYER',
    'NO_DOCUMENTATION_SUPPORTING_DUE_OF_CREDIT',
    'NO_PROOF_OF_DELIVERY',
    'NO_PROOF_OF_DELIVERY_INTANGIBLE',
    'NO_PROTECTION_FOR_DIGITAL_GOODS_SERVICE',
    'NO_RESPONSE_FROM_BUYER',
    'NO_RESPONSE_FROM_BUYER_FOR_ADDITIONAL_INFO_REQUEST',
    'NO_SELLER_RESPONSE',
    'NO_SELLER_RESPONSE_FOR_ADDITIONAL_INFO_REQUEST',
    'NO_VALID_SHIPMENT_PROOF',
    'NOT_A_BILLING_ERROR',
    'NOT_AN_UNAUTHORIZED_TRANSACTION',
    'NOT_DUPLICATE_FUNDS_ADDED_ONCE',
    'NOT_DUPLICATE_FUNDS_WITHDRAWN_ONCE',
    'NOT_SHIPPED_TO_CORRECT_ADDRESS',
    'PARTIAL_REFUND_ISSUED_FOR_MISSING_ITEMS',
    'PARTIAL_REFUND_OFFER_ACCEPTED',
    'PAYMENT_REVERSED_ALREADY',
    'POS_SUBMITTED_INSTEAD_OF_POD',
    'PREAUTH_INSTALLMENT_DUE',
    'PROOF_OF_BILLING_AFTER_CANCELLATION_ACCEPTED',
    'PROOF_OF_DUPLICATE_DENIED_OR_INSUFFICIENT',
    'PROOF_OF_INCORRECT_TRANSACTION_AMOUNT_ACCEPTED',
    'PROOF_OF_PAID_BY_OTHER_MEANS_NOT_SUBMITTED',
    'PROOF_OF_TRACKING_NOT_SUBMITTED',
    'PROTECTED_BY_PAYPAL',
    'REPRESENTED_BY_PAYPAL',
    'SELLER_ACCEPTED_MULTIPLE_PAYMENTS',
    'SELLER_AGREED_REFUND_WITHOUT_RETURN',
    'SELLER_AGREED_TO_ISSUE_CREDIT',
    'SELLER_ISSUED_CREDIT_TO_BUYER',
    'SELLER_ISSUED_REFUND',
    'SELLER_NOT_REACHABLE',
    'SELLER_RECEIVED_PAYMENT_TWICE_OR_FOR_REPLACEMENT',
    'SELLER_REFUSED_REFUND',
    'SELLER_REFUSED_RETURN',
    'SELLER_SURCHARGED_BUYER',
    'SERVICE_NOT_COMPLETED_AS_AGREED',
    'SHIPPING_COMPANY_WONT_SHIP',
    'TRACKING_PROOF_NOT_ENOUGH',
    'TRANSACTION_AUTHORIZED_BY_CARDHOLDER',
    'TRANSACTION_CANCELLED_AFTER_AUTHORIZATION_DATE',
    'TRANSACTION_CANCELLED_BEFORE_SHIPMENT_SERVICE_DATE',
    'TRANSACTION_MATCHES_BUYER_SPENDING_PATTERN',
    'TRANSACTION_PROCESSED_CORRECTLY',
    'TRUSTED_BUYER_PAYOUT',
    'UNUSED_SHIPPING_LABEL',
    'VALID_PROOF_OF_DELIVERY',
    'VALID_PROOF_OF_DELIVERY_WITH_SIGNATURE',
    'VALID_PROOF_OF_REFUND',
    'VALID_PROOF_SUPPORTING_CLAIM',
    'VALID_RETURN_DELIVERY_PROOF',
    'VALID_RETURN_DELIVERY_PROOF_WITH_SIGNATURE',
    'VALID_SHIPMENT_PROOF',
    'VALUE_AFFECTED_SIGNIFICANTLY',
    'PROTECTION_POLICY_APPLIES',
    'SNAD_DELAYED_FILING',
    'FUNDS_TRANSFERRED_TO_INCORRECT_RECIPIENT',
  ])
  .openapi({
    description: 'The reason for the adjudication type.',
    'x-enumDescriptions': [
      {
        value: 'AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES',
        description: 'Seller submitted proof of correct charge.',
      },
      {
        value: 'BILLING_AGREEMENT_CHANGE_DISCLOSED',
        description: 'Seller had disclosed billing agreement changes upfront.',
      },
      {
        value: 'BILLING_AGREEMENT_CHANGE_NOT_DISCLOSED',
        description: 'Seller had not disclosed billing agreement changes upfront.',
      },
      {
        value: 'BILLING_AGREEMENT_DATE_CHANGE_DISCLOSED',
        description: 'Seller had shared change in billing agreement date upfront.',
      },
      {
        value: 'BILLING_AGREEMENT_DATE_CHANGE_NOT_DISCLOSED',
        description: 'Seller had not shared change in billing agreement date upfront.',
      },
      { value: 'BUYER_ATTEMPTED_RETURN', description: 'Buyer has attempted to return the item.' },
      {
        value: 'BUYER_BILLED_ONLY_ONCE',
        description:
          'Buyer was charged only once and did not submit sufficient evidence of duplicate charge.',
      },
      { value: 'BUYER_CANCELLED_CASE', description: 'Buyer cancelled the case.' },
      {
        value: 'BUYER_CANCELLED_SERVICE',
        description: 'Buyer cancelled the service or recurring transaction.',
      },
      {
        value: 'BUYER_FAILED_TO_DESCRIBE_ISSUE',
        description: 'Buyer did not describe the issue to justify the refund.',
      },
      {
        value: 'BUYER_HAS_POSSESSION_OF_THE_MERCHANDISE_OR_SERVICE',
        description: 'Buyer continues to possess the item or has received the service.',
      },
      {
        value: 'BUYER_MADE_NO_ATTEMPT_TO_RESOLVE_WITH_SELLER',
        description: 'Buyer did not attempt to resolve the issue with the seller.',
      },
      {
        value: 'BUYER_NOT_IN_POSSESSION_OF_ITEM_TO_RETURN',
        description: 'Buyer is not in possession of the item to be returned.',
      },
      {
        value: 'BUYER_PROVIDED_CREDIT_RECEIPT',
        description: 'Buyer provided credit receipt or relevant documentation.',
      },
      { value: 'BUYER_RECEIVED_DUPLICATE_REFUND', description: 'Buyer received the refund twice.' },
      {
        value: 'CANCELLED_PER_TERMS_OF_BILLING_AGREEMENT',
        description: 'Billing agreement was cancelled as per agreed terms.',
      },
      {
        value: 'CARD_NOT_STOLEN',
        description: 'Buyer in possession of the card which was reported as stolen or lost.',
      },
      {
        value: 'CARD_NOT_STOLEN_BEFORE_AUTH',
        description: 'Buyer reported card as lost or stolen after the authorization date.',
      },
      {
        value: 'CUSTOMER_RECOGNIZES_TRANSACTION',
        description: 'Buyer recognizes the transaction as valid.',
      },
      {
        value: 'DECISION_BASED_ON_AVAILABLE_INFORMATION',
        description:
          'Case decision was made as per available information when specific reasons are not applicable.',
      },
      {
        value: 'DELIVERY_AFTER_EXPECTED_DELIVERY_DATE',
        description: 'Item or service was delivered after the expected delivery date had passed.',
      },
      {
        value: 'DELIVERY_DUE_WITHIN_EXPECTED_DELIVERY_DATE',
        description: 'Delivery of the item or service is due within the expected delivery date.',
      },
      {
        value: 'DELIVERY_OR_SERVICE_REFUSED',
        description: 'Seller refused delivery or service of the item.',
      },
      {
        value: 'DOCUMENTATION_MATCHES_AMOUNT_CHARGED',
        description: 'Documentation provided supports the amount that was charged.',
      },
      {
        value: 'DOCUMENTATION_MATCHES_AMOUNT_IN_PAYPAL_ACCOUNT',
        description: "Documentation provided supports the amount charged on buyer's account.",
      },
      {
        value: 'DUPLICATE_ADD_FUNDS',
        description: 'Buyer submitted sufficient proof of duplicate charge.',
      },
      {
        value: 'EFFORTLESS_SELLER_PROTECTION',
        description: 'The case is decided based on Protection Policy.',
      },
      { value: 'IN_PERSON_DELIVERY', description: 'Seller delivered the item in person.' },
      {
        value: 'INELIGIBLE_BUYER_PROTECTION_POLICY',
        description: 'The pattern identified does not meet buyer protection eligibility.',
      },
      {
        value: 'INELIGIBLE_SELLER_PROTECTION_POLICY',
        description: 'The pattern identified does not meet seller protection eligibility.',
      },
      { value: 'INQUIRY_OFFER_ITEM_REPLACED', description: 'Seller agreed to replace the item.' },
      {
        value: 'INQUIRY_OFFER_PARTIAL_REFUND',
        description: 'Seller agreed to issue a partial refund to the buyer.',
      },
      {
        value: 'INQUIRY_OFFER_REFUND_WITH_ITEM_RETURN',
        description: 'Seller agreed to issue a refund for item return.',
      },
      {
        value: 'INQUIRY_OFFER_REFUND_WITH_REPLACEMENT',
        description: 'Seller agreed to replace the damaged item along with refunds applicable.',
      },
      {
        value: 'INVALID_APPEAL_REASON',
        description: 'Seller appealed twice for the same reason with invalid reason.',
      },
      {
        value: 'INVALID_CHARGEBACK_SELLER_FAVOUR',
        description: 'The case is decided as invalid based on external network policy.',
      },
      {
        value: 'INVALID_DELIVERY_PROOF',
        description: 'Seller provided invalid proof of delivery.',
      },
      {
        value: 'INVALID_DELIVERY_PROOF_SIGNATURE',
        description: "Buyer's signature confirmation missing in proof of delivery.",
      },
      { value: 'INVALID_DOCUMENTATION', description: 'The documentation provided is not valid.' },
      {
        value: 'INVALID_PROOF_OF_SHIPMENT',
        description: 'Seller provided invalid proof of shipment.',
      },
      { value: 'INVALID_REFUND_PROOF', description: 'Seller provided invalid proof of refund.' },
      {
        value: 'INVALID_RETURN_DELIVERY_NO_SIGNATURE_PROOF',
        description: "Seller's signature confirmation missing in proof of return.",
      },
      {
        value: 'INVALID_RETURN_DELIVERY_PROOF',
        description: 'Buyer provided invalid proof of return.',
      },
      { value: 'INVALID_TRACKING', description: 'Seller provided invalid tracking information.' },
      {
        value: 'ITEM_ALTERED_REPAIRED',
        description: "Item was altered or repaired while in buyer's possession.",
      },
      {
        value: 'ITEM_NOT_AS_ADVERTISED',
        description: 'Item or service provided didn’t match as it was advertised.',
      },
      {
        value: 'ITEM_NOT_AS_DESCRIBED',
        description: 'Item or service provided didn’t match as it was described.',
      },
      {
        value: 'ITEM_NOT_DAMAGED',
        description: 'Item or service provided was not damaged or missing any parts.',
      },
      { value: 'ITEM_NOT_DELIVERED', description: 'Seller did not deliver the item to the buyer.' },
      { value: 'ITEM_NOT_RETURNED_TO_SELLER', description: 'Item was not returned to seller.' },
      {
        value: 'ITEM_NOT_SHIPPED',
        description: 'Seller did not provide verified proof of shipment or delivery.',
      },
      {
        value: 'ITEM_OF_DIFFERENT_QUALITY_OR_QUANTITY',
        description: 'Item sent to the buyer was of different quality, quantity, color, or size.',
      },
      {
        value: 'ITEM_OUT_OF_STOCK_AND_NOT_DELIVERED',
        description: 'Item was not delivered as it was no longer in stock.',
      },
      { value: 'ITEM_RETURNED_TO_SELLER', description: 'Buyer returned the item to seller.' },
      {
        value: 'ITEM_SERVICE_MISREPRESENTED',
        description: "Seller's listing misrepresented the item.",
      },
      {
        value: 'ITEM_SERVICE_NOT_MISREPRESENTED',
        description: "Seller's listing accurately represented the item.",
      },
      {
        value: 'ITEM_SERVICE_RECEIVED_BY_BUYER',
        description: 'Buyer received the item or service from the seller.',
      },
      {
        value: 'ITEM_SOLD_AS_DESCRIBED',
        description: 'Item was sold in the condition as described by the seller.',
      },
      {
        value: 'ITEM_VALUE_UNAFFECTED',
        description: 'Item value or usability was not affected significantly.',
      },
      {
        value: 'MULTIPLE_APPEALS_WITH_SAME_REASON',
        description:
          'Seller appealed multiple times for the same reason with no additional compelling evidence.',
      },
      {
        value: 'NO_DOCUMENTATION_FROM_BUYER',
        description: 'No documentation received from buyer.',
      },
      {
        value: 'NO_DOCUMENTATION_SUPPORTING_DUE_OF_CREDIT',
        description: 'No documentation given to support that credit is due to buyer.',
      },
      { value: 'NO_PROOF_OF_DELIVERY', description: 'Seller did not provide proof of delivery.' },
      {
        value: 'NO_PROOF_OF_DELIVERY_INTANGIBLE',
        description: 'Seller did not provide proof of fulfillment for a service or digital good.',
      },
      {
        value: 'NO_PROTECTION_FOR_DIGITAL_GOODS_SERVICE',
        description:
          'Digital goods, services, or other Intangibles not covered under Protection Policies.',
      },
      { value: 'NO_RESPONSE_FROM_BUYER', description: 'No response from buyer.' },
      {
        value: 'NO_RESPONSE_FROM_BUYER_FOR_ADDITIONAL_INFO_REQUEST',
        description: 'No response from buyer to the request for additional information.',
      },
      { value: 'NO_SELLER_RESPONSE', description: 'No response from seller.' },
      {
        value: 'NO_SELLER_RESPONSE_FOR_ADDITIONAL_INFO_REQUEST',
        description: 'No response from seller to the request for additional information.',
      },
      {
        value: 'NO_VALID_SHIPMENT_PROOF',
        description: 'Seller did not provide valid proof of shipment.',
      },
      { value: 'NOT_A_BILLING_ERROR', description: 'No evidence of a billing error.' },
      {
        value: 'NOT_AN_UNAUTHORIZED_TRANSACTION',
        description: 'No evidence of unauthorized account access was found.',
      },
      {
        value: 'NOT_DUPLICATE_FUNDS_ADDED_ONCE',
        description: 'Funds only added once and no duplication.',
      },
      {
        value: 'NOT_DUPLICATE_FUNDS_WITHDRAWN_ONCE',
        description: 'Funds only withdrawn once and no duplication.',
      },
      {
        value: 'NOT_SHIPPED_TO_CORRECT_ADDRESS',
        description: 'Seller did not ship to correct address.',
      },
      {
        value: 'PARTIAL_REFUND_ISSUED_FOR_MISSING_ITEMS',
        description: 'Seller issued refund for missing items.',
      },
      {
        value: 'PARTIAL_REFUND_OFFER_ACCEPTED',
        description: 'Buyer accepted the partial refund offer.',
      },
      {
        value: 'PAYMENT_REVERSED_ALREADY',
        description: 'Payment was previously refunded or reversed.',
      },
      {
        value: 'POS_SUBMITTED_INSTEAD_OF_POD',
        description: 'Seller submitted proof of shipment instead of proof of delivery.',
      },
      {
        value: 'PREAUTH_INSTALLMENT_DUE',
        description: 'Pre-authorized installment or balance is due to seller.',
      },
      {
        value: 'PROOF_OF_BILLING_AFTER_CANCELLATION_ACCEPTED',
        description:
          'Buyer submitted proof of being billed after the billing agreement was cancelled.',
      },
      {
        value: 'PROOF_OF_DUPLICATE_DENIED_OR_INSUFFICIENT',
        description: 'Buyer submitted proof that this was paid by another payment method.',
      },
      {
        value: 'PROOF_OF_INCORRECT_TRANSACTION_AMOUNT_ACCEPTED',
        description: 'Bank or Credit does not match withdrawal amount on PayPal.',
      },
      {
        value: 'PROOF_OF_PAID_BY_OTHER_MEANS_NOT_SUBMITTED',
        description: 'Buyer did not provide sufficient proof of paying by other means.',
      },
      {
        value: 'PROOF_OF_TRACKING_NOT_SUBMITTED',
        description: 'Buyer did not provide sufficient proof of tracking for returns.',
      },
      {
        value: 'PROTECTED_BY_PAYPAL',
        description: 'This case is covered under Seller protection program.',
      },
      {
        value: 'REPRESENTED_BY_PAYPAL',
        description: 'Paypal covered the cost of the case as decided by policy.',
      },
      {
        value: 'SELLER_ACCEPTED_MULTIPLE_PAYMENTS',
        description: 'Seller received multiple payments for the same purchase.',
      },
      {
        value: 'SELLER_AGREED_REFUND_WITHOUT_RETURN',
        description: 'Seller chose to issue a refund without requiring item to be returned.',
      },
      { value: 'SELLER_AGREED_TO_ISSUE_CREDIT', description: 'Seller agreed to refund the buyer.' },
      {
        value: 'SELLER_ISSUED_CREDIT_TO_BUYER',
        description: 'Seller has earlier issued a credit to the buyer for the same transaction.',
      },
      { value: 'SELLER_ISSUED_REFUND', description: 'Seller has issued a refund.' },
      {
        value: 'SELLER_NOT_REACHABLE',
        description: 'Seller could not be reached to resolve case.',
      },
      {
        value: 'SELLER_RECEIVED_PAYMENT_TWICE_OR_FOR_REPLACEMENT',
        description:
          'Seller received the payment twice or received payment for a replacement item.',
      },
      { value: 'SELLER_REFUSED_REFUND', description: 'Seller declined to issue a refund.' },
      {
        value: 'SELLER_REFUSED_RETURN',
        description: 'Seller declined to accept return of the item.',
      },
      { value: 'SELLER_SURCHARGED_BUYER', description: 'Surcharge was assessed to the buyer.' },
      {
        value: 'SERVICE_NOT_COMPLETED_AS_AGREED',
        description: 'Service was not completed by seller as per description in the agreement.',
      },
      {
        value: 'SHIPPING_COMPANY_WONT_SHIP',
        description: 'Shipping company refused to ship the item.',
      },
      {
        value: 'TRACKING_PROOF_NOT_ENOUGH',
        description:
          'For an item which was significantly not as described, seller cannot appeal with tracking information.',
      },
      {
        value: 'TRANSACTION_AUTHORIZED_BY_CARDHOLDER',
        description: 'Card holder authorized the use of card for the transaction.',
      },
      {
        value: 'TRANSACTION_CANCELLED_AFTER_AUTHORIZATION_DATE',
        description: 'Transaction was cancelled after the authorization date.',
      },
      {
        value: 'TRANSACTION_CANCELLED_BEFORE_SHIPMENT_SERVICE_DATE',
        description: 'Transaction was cancelled before the shipment or service date.',
      },
      {
        value: 'TRANSACTION_MATCHES_BUYER_SPENDING_PATTERN',
        description: 'Transaction similar to recent spending patterns of buyer.',
      },
      { value: 'TRANSACTION_PROCESSED_CORRECTLY', description: 'Transaction processed correctly.' },
      {
        value: 'TRUSTED_BUYER_PAYOUT',
        description: 'Payout to the buyer decided based on their profile and policy.',
      },
      { value: 'UNUSED_SHIPPING_LABEL', description: 'Shipping label provided was unused.' },
      { value: 'VALID_PROOF_OF_DELIVERY', description: 'Seller provided valid proof of delivery.' },
      {
        value: 'VALID_PROOF_OF_DELIVERY_WITH_SIGNATURE',
        description: 'Seller provided valid proof of delivery with signature confirmation.',
      },
      { value: 'VALID_PROOF_OF_REFUND', description: 'Seller provided valid proof of refund.' },
      {
        value: 'VALID_PROOF_SUPPORTING_CLAIM',
        description: 'Buyer provided valid documents to support claim.',
      },
      {
        value: 'VALID_RETURN_DELIVERY_PROOF',
        description: 'Buyer provided valid proof of return delivery.',
      },
      {
        value: 'VALID_RETURN_DELIVERY_PROOF_WITH_SIGNATURE',
        description: 'Buyer provided valid proof of return delivery with signature confirmation.',
      },
      { value: 'VALID_SHIPMENT_PROOF', description: 'Seller provided valid proof of shipment.' },
      {
        value: 'VALUE_AFFECTED_SIGNIFICANTLY',
        description: 'The value of item or usability was affected significantly.',
      },
      {
        value: 'PROTECTION_POLICY_APPLIES',
        description: 'The case is decided based on Protection Policy.',
      },
      {
        value: 'SNAD_DELAYED_FILING',
        description: 'The reason as to why the buyer is filing dispute after given specified days.',
      },
      {
        value: 'FUNDS_TRANSFERRED_TO_INCORRECT_RECIPIENT',
        description: 'Funds were not transferred to the correct recipient.',
      },
    ],
  })
  .openapi('AdjudicationReason')

const DisputeLifecycleStageSchema = z
  .enum(['INQUIRY', 'CHARGEBACK', 'PRE_ARBITRATION', 'ARBITRATION'])
  .openapi({
    readOnly: true,
    description: 'The stage in the dispute lifecycle.',
    'x-enumDescriptions': [
      {
        value: 'INQUIRY',
        description:
          'A customer and merchant interact in an attempt to resolve a dispute without escalation to PayPal. Occurs when the customer:<ul><li>Has not received goods or a service.</li><li>Reports that the received goods or service are not as described.</li><li>Needs more details, such as a copy of the transaction or a receipt.</li></ul>',
      },
      {
        value: 'CHARGEBACK',
        description:
          'A customer or merchant escalates an inquiry to a claim, which authorizes PayPal to investigate the case and make a determination. Occurs only when the dispute channel is <code>INTERNAL</code>. This stage is a PayPal dispute lifecycle stage and not a credit card or debit card chargeback. All notes that the customer sends in this stage are visible to PayPal agents only. The customer must wait for PayPal’s response before the customer can take further action. In this stage, PayPal shares dispute details with the merchant, who can complete one of these actions:<ul><li>Accept the claim.</li><li>Submit evidence to challenge the claim.</li><li>Make an offer to the customer to resolve the claim.</li></ul>',
      },
      {
        value: 'PRE_ARBITRATION',
        description:
          "The first appeal stage for merchants. A merchant can appeal a chargeback if PayPal's decision is not in the merchant's favor. If the merchant does not appeal within the appeal period, PayPal considers the case resolved.",
      },
      {
        value: 'ARBITRATION',
        description:
          'The second appeal stage for merchants. A merchant can appeal a dispute for a second time if the first appeal was denied. If the merchant does not appeal within the appeal period, the case returns to a resolved status in pre-arbitration stage.',
      },
    ],
  })
  .openapi('DisputeLifecycleStage')

const AdjudicationSchema = z
  .object({
    type: AdjudicationTypeSchema.openapi({ description: 'The type of adjudication.' }),
    adjudication_time: DateTimeSchema.openapi({
      description:
        'The date and time when the adjudication was done, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    reason: AdjudicationReasonSchema.exactOptional().openapi({
      description: 'The reason for the adjudication type.',
    }),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      description: 'The dispute life cycle stage during the adjudication.',
    }),
  })
  .openapi({
    title: 'Adjudication',
    description: 'The Adjudication details for the dispute.',
    required: ['type', 'adjudication_time'],
  })
  .openapi('Adjudication')

const AdjudicationListSchema = z
  .array(AdjudicationSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'The Teammate Adjudication details for the dispute.' })
  .openapi('AdjudicationList')

const AgreedRefundDetailsSchema = z
  .object({
    merchant_agreed_refund: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether merchant has agreed to refund the buyer or not.',
      }),
    merchant_agreed_refund_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time proposed by merchant to provide the refund, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
  })
  .openapi({
    title: 'Agreed Refund Details',
    description: 'Details of Agreed Refund between customer and merchant.',
    required: [],
  })
  .openapi('AgreedRefundDetails')

const OfferTypeSchema = z
  .enum(['REFUND', 'REFUND_WITH_RETURN', 'REFUND_WITH_REPLACEMENT', 'REPLACEMENT_WITHOUT_REFUND'])
  .openapi({
    title: 'Offer Type',
    description: 'The merchant-proposed offer type for the dispute.',
    'x-enumDescriptions': [
      {
        value: 'REFUND',
        description:
          'The merchant must refund the customer without any item replacement or return. This offer type is valid in the inquiry phase and occurs when a merchant is willing to refund a specific amount. Buyer acceptance is needed for partial refund offers and dispute is auto closed for full refunds. Include the <code>offer_amount</code> but omit the <code>return_shipping_address</code> parameters from the make offer request.',
      },
      {
        value: 'REFUND_WITH_RETURN',
        description:
          'The customer must return the item to the merchant and then merchant will refund the money. This offer type is valid in the inquiry phase and occurs when a merchant is willing to refund a specific amount and requires the customer to return the item. Include the <code>return_shipping_address</code> parameter and the <code>offer_amount</code> parameter in the make offer request.',
      },
      {
        value: 'REFUND_WITH_REPLACEMENT',
        description:
          'The merchant must do a refund and then send a replacement item to the customer. This offer type is valid in the inquiry phase when a merchant is willing to refund a specific amount and send the replacement item. Include the <code>offer_amount</code> parameter in the make offer request.',
      },
      {
        value: 'REPLACEMENT_WITHOUT_REFUND',
        description:
          'The merchant must send a replacement item to the customer with no additional refunds. This offer type is valid in the inquiry phase when a merchant is willing to replace the item without any refund. Omit the <code>offer_amount</code> parameter from the make offer request.',
      },
    ],
  })
  .openapi('OfferType')

const OfferTypeListSchema = z
  .array(OfferTypeSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'The types of offer the merchant can offer the customer.' })
  .openapi('OfferTypeList')

const MakeOfferResponseOptionsSchema = z
  .object({ offer_types: OfferTypeListSchema.exactOptional() })
  .openapi({
    title: 'Make Offer Response Options',
    description: 'The allowed response options when the merchant makes offer to the customer.',
    required: [],
  })
  .openapi('MakeOfferResponseOptions')

const AllowedResponseOptionsSchema = z
  .object({
    acknowledge_return_item: AcknowledgeReturnItemResponseOptionsSchema.exactOptional(),
    accept_claim: AcceptClaimResponseOptionsSchema.exactOptional(),
    make_offer: MakeOfferResponseOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Allowed Response Options',
    description: 'The allowed response options for the buyer/seller update actions.',
    required: [],
  })
  .openapi('AllowedResponseOptions')

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.',
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .max(32)
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).',
      }),
  })
  .openapi({
    title: 'Money',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency_code', 'value'],
  })
  .openapi('Money')

const CryptocurrencySymbolSchema = z
  .enum(['BTC', 'ETH', 'BCH', 'LTC', 'PYUSD', 'LINK', 'SOL', 'MATIC'])
  .openapi({
    description:
      'The cryptocurrency symbol or code ticker options. Assigned by liquidity providers and exchanges.',
    'x-enum-skip-validation': true,
    'x-enumDescriptions': [
      {
        value: 'BTC',
        description: 'The ticker symbol for <b>Bitcoin</b>. https://en.wikipedia.org/wiki/Bitcoin.',
      },
      {
        value: 'ETH',
        description:
          'The ticker symbol for <b>Ethereum</b>. https://en.wikipedia.org/wiki/Ethereum.',
      },
      {
        value: 'BCH',
        description:
          'The ticker symbol for <b>Bitcoin Cash</b>. https://en.wikipedia.org/wiki/Bitcoin_Cash.',
      },
      {
        value: 'LTC',
        description:
          'The ticker symbol for <b>Litecoin</b>. https://en.wikipedia.org/wiki/Litecoin.',
      },
      {
        value: 'PYUSD',
        description:
          'The ticker symbol for <b>PayPal Coin</b>. https://engineering.paypalcorp.com/confluence/display/BCDC/PayPal+Digital+Coin+%28PPDC%29+-+USDP+-+Top+Down+View+of+Requirements.',
      },
      {
        value: 'LINK',
        description:
          'The ticker symbol for <b>Chainlink</b>. https://en.wikipedia.org/wiki/Chainlink_(blockchain).',
      },
      {
        value: 'SOL',
        description:
          'The ticker symbol for <b>Solana</b>. https://en.wikipedia.org/wiki/Solana_(blockchain_platform).',
      },
      { value: 'MATIC', description: 'The ticker symbol for Polygon.' },
    ],
  })
  .openapi('CryptocurrencySymbol')

const CryptocurrencyQuantitySchema = z
  .string()
  .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
  .min(1)
  .max(40)
  .openapi({
    description:
      'The quantity of a cryptocurrency asset. This is a decimal number with a scale defined for each cryptocurrency by its founders. For example, Bitcoin (BTC) has 8 as its scale, Ethereum (ETH) has 18 as its scale. The PayPal Cryptocurrency platform handles the scale to 8 digits for Bitcoin. including its forks or offshoots, as well as Ethereum.',
  })
  .openapi('CryptocurrencyQuantity')

const CryptocurrencySubunitsQuantitySchema = z
  .string()
  .regex(/^-?[0-9]+$/)
  .min(1)
  .max(81)
  .openapi({
    title: 'Cryptocurrency Quantity Subunits',
    description:
      "The quantity of a cryptocurrency asset in the currency's sub units.<br/>Amount is an integer in a string format.<br/>Floating point should be avoided to avoid precision errors. For example: <li>Bitcoin(BTC) has 8 decimals,</li> so 1 BTC will be represented as 100000000 (1 followed by 8 zeroes). <li>Ethereum(ETH) has 18 decimals,</li> so 1 ETH will be represented as 1000000000000000000 (1 followed by 18 zeroes).",
  })
  .openapi('CryptocurrencySubunitsQuantity')

const CryptocurrencyDecimalsSchema = z
  .int()
  .min(0)
  .max(40)
  .openapi({
    description:
      "The number of decimal digits supported by this cryptocurrency. For example, for Bitcoin this value is 8 because there are 10^8 satoshis in one Bitcoin and for Ethereum it's 18 since there are 10^18 wei in one Ether.",
    title: 'Decimals',
  })
  .openapi('CryptocurrencyDecimals')

const CryptocurrencySchema = z
  .object({
    asset_symbol: CryptocurrencySymbolSchema,
    quantity: CryptocurrencyQuantitySchema,
    quantity_in_subunits: CryptocurrencySubunitsQuantitySchema.exactOptional(),
    decimals: CryptocurrencyDecimalsSchema.exactOptional(),
  })
  .openapi({
    title: 'Cryptocurrency',
    description:
      'The details needed to represent a specific cryptocurrency balance, such as its symbol and quantity.',
    required: ['asset_symbol', 'quantity'],
  })
  .openapi('Cryptocurrency')

const BuyerSchema = z
  .object({
    name: z
      .string()
      .regex(/^[^~!@#$%^*()_{}:|\t\n\/]+$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: "The customer's name." }),
  })
  .openapi({
    title: 'Customer',
    description:
      "The details for the customer who funds the payment. For example, the customer's first name, last name, and email address.",
    required: [],
  })
  .openapi('Buyer')

const EmailAddressSchema = z
  .string()
  .regex(
    /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('EmailAddress')

const SellerSchema = z
  .object({
    email: EmailAddressSchema.exactOptional().openapi({
      description: "The email address for the merchant's PayPal account.",
    }),
    merchant_id: z
      .string()
      .regex(/^[0-9A-Za-z]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The PayPal account ID for the merchant.' }),
    name: z
      .string()
      .regex(/^[^~!@#$%^*()_{}:|\t\n\/]+$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The name of the merchant.' }),
  })
  .openapi({
    title: 'Merchant',
    description:
      'The details for the merchant who receives the funds and fulfills the order. For example, merchant ID, and contact email address.',
    required: [],
  })
  .openapi('Seller')

const DisputeReasonSchema = z
  .enum([
    'MERCHANDISE_OR_SERVICE_NOT_RECEIVED',
    'MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED',
    'UNAUTHORISED',
    'CREDIT_NOT_PROCESSED',
    'DUPLICATE_TRANSACTION',
    'INCORRECT_AMOUNT',
    'PAYMENT_BY_OTHER_MEANS',
    'CANCELED_RECURRING_BILLING',
    'PROBLEM_WITH_REMITTANCE',
    'OTHER',
  ])
  .openapi({
    title: 'Dispute Reason',
    description:
      'The reason for the item-level dispute. For information about the required information for each dispute reason and associated evidence type, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.',
    'x-enumDescriptions': [
      {
        value: 'MERCHANDISE_OR_SERVICE_NOT_RECEIVED',
        description: 'The customer did not receive the merchandise or service.',
      },
      {
        value: 'MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED',
        description: 'The customer reports that the merchandise or service is not as described.',
      },
      {
        value: 'UNAUTHORISED',
        description: 'The customer did not authorize purchase of the merchandise or service.',
      },
      {
        value: 'CREDIT_NOT_PROCESSED',
        description: 'The refund or credit was not processed for the customer.',
      },
      { value: 'DUPLICATE_TRANSACTION', description: 'The transaction was a duplicate.' },
      { value: 'INCORRECT_AMOUNT', description: 'The customer was charged an incorrect amount.' },
      {
        value: 'PAYMENT_BY_OTHER_MEANS',
        description: 'The customer paid for the transaction through other means.',
      },
      {
        value: 'CANCELED_RECURRING_BILLING',
        description:
          'The customer was being charged for a subscription or a recurring transaction that was canceled.',
      },
      { value: 'PROBLEM_WITH_REMITTANCE', description: 'A problem occurred with the remittance.' },
      { value: 'OTHER', description: 'Other.' },
    ],
  })
  .openapi('DisputeReason')

const ItemTypeSchema = z
  .enum(['PRODUCT', 'SERVICE', 'BOOKING', 'DIGITAL_DOWNLOAD'])
  .openapi({
    title: 'Item Type',
    description: 'The type of the item which has the issue.',
    'x-enumDescriptions': [
      { value: 'PRODUCT', description: 'The product has an issue.' },
      { value: 'SERVICE', description: 'The service has an issue.' },
      { value: 'BOOKING', description: 'The booking has an issue.' },
      { value: 'DIGITAL_DOWNLOAD', description: 'The digital download has an issue.' },
    ],
  })
  .openapi('ItemType')

const ItemProductDetailsSchema = z.any().openapi('ItemProductDetails')

const ItemServiceDetailsSchema = z.any().openapi('ItemServiceDetails')

const ItemBookingDetailsSchema = z.any().openapi('ItemBookingDetails')

const ItemDigitalDownloadDetailsSchema = z.any().openapi('ItemDigitalDownloadDetails')

const ItemCancellationDetailsSchema = z.any().openapi('ItemCancellationDetails')

const ItemAgreedRefundDetailsSchema = z.any().openapi('ItemAgreedRefundDetails')

const ItemInfoSchema = z
  .object({
    item_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The item ID. If the merchant provides multiple pieces of evidence and the transaction has multiple item IDs, the merchant can use this value to associate a piece of evidence with an item ID.',
      }),
    item_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The item name.' }),
    item_description: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The item description.' }),
    item_quantity: z
      .string()
      .regex(/^[1-9][0-9]{0,9}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'The count of the item in the dispute. Must be a whole number.' }),
    partner_transaction_id: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The ID of the transaction in the partner system. The partner transaction ID is returned at an item level because the partner might show different transactions for different items in the cart.',
      }),
    reason: DisputeReasonSchema.exactOptional(),
    dispute_amount: MoneySchema.exactOptional().openapi({
      description: 'The amount of the item in the dispute.',
      readOnly: true,
    }),
    notes: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'Any notes provided with the item.' }),
    item_type: ItemTypeSchema.exactOptional(),
    product_details: ItemProductDetailsSchema.exactOptional(),
    service_details: ItemServiceDetailsSchema.exactOptional(),
    booking_details: ItemBookingDetailsSchema.exactOptional(),
    digital_download_details: ItemDigitalDownloadDetailsSchema.exactOptional(),
    cancellation_details: ItemCancellationDetailsSchema.exactOptional(),
    agreed_refund_details: ItemAgreedRefundDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Item Information',
    description: 'The information for a purchased item in a disputed transaction.',
    required: [],
  })
  .openapi('ItemInfo')

const ItemInfoListSchema = z
  .array(ItemInfoSchema)
  .min(1)
  .max(100)
  .openapi({
    readOnly: true,
    description: 'An array of items that were purchased as part of the transaction.',
  })
  .openapi('ItemInfoList')

const PaymentProcessorSchema = z.any().openapi('PaymentProcessor')

const TransactionInfoSchema = z
  .object({
    buyer_transaction_id: z
      .string()
      .regex(/^[A-Za-z0-9-]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The ID, as seen by the customer, for this transaction.' }),
    seller_transaction_id: z
      .string()
      .regex(/^[A-Za-z0-9-]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The ID, as seen by the merchant, for this transaction.' }),
    reference_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The ID, as seen by the partner, for this transaction.' }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the transaction was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    transaction_status: z
      .enum([
        'COMPLETED',
        'UNCLAIMED',
        'DENIED',
        'FAILED',
        'HELD',
        'PENDING',
        'PARTIALLY_REFUNDED',
        'REFUNDED',
        'REVERSED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({
        description: 'The transaction status.',
        'x-enumDescriptions': [
          { value: 'COMPLETED', description: 'The transaction processing completed.' },
          {
            value: 'UNCLAIMED',
            description:
              'The items in the transaction are unclaimed. If they are not claimed within 30 days, the funds are returned to the sender.',
          },
          { value: 'DENIED', description: 'The transaction was denied.' },
          { value: 'FAILED', description: 'The transaction failed.' },
          { value: 'HELD', description: 'The transaction is on hold.' },
          { value: 'PENDING', description: 'The transaction is waiting to be processed.' },
          {
            value: 'PARTIALLY_REFUNDED',
            description: 'The payment for the transaction was partially refunded.',
          },
          {
            value: 'REFUNDED',
            description: 'The payment for the transaction was successfully refunded.',
          },
          {
            value: 'REVERSED',
            description:
              'The payment for the transaction was reversed due to a chargeback or other reversal type.',
          },
          { value: 'CANCELLED', description: 'The transaction is cancelled.' },
        ],
      }),
    gross_amount: MoneySchema.exactOptional().openapi({
      description: 'The gross amount of the transaction.',
    }),
    gross_asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The gross asset of the transaction.',
    }),
    invoice_number: z
      .string()
      .regex(/^[A-Za-z0-9:\-|]+$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The ID of the invoice for the payment.' }),
    custom: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'A free-text field that is entered by the merchant during checkout.',
      }),
    buyer: BuyerSchema.exactOptional(),
    seller: SellerSchema.exactOptional(),
    items: ItemInfoListSchema.exactOptional(),
    payment_processor: PaymentProcessorSchema.exactOptional(),
  })
  .openapi({
    title: 'Transaction Information',
    description: 'The information about the disputed transaction.',
    required: [],
  })
  .openapi('TransactionInfo')

const DuplicateTransactionSchema = z
  .object({
    received_duplicate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, indicates that a duplicate transaction was received.' }),
    original_transaction: TransactionInfoSchema.exactOptional().openapi({
      description:
        'The transaction details for the original transaction, when the dispute reason is `DUPLICATE_TRANSACTION`. Currently, contains only the date and amount.',
    }),
  })
  .openapi({
    title: 'Duplicate Transaction',
    description: 'The duplicate transaction details.',
    required: [],
  })
  .openapi('DuplicateTransaction')

const IncorrectTransactionAmountSchema = z
  .object({
    correct_transaction_amount: MoneySchema.exactOptional(),
    correct_transaction_asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The correct asset quantity of the transaction.',
    }),
    correct_transaction_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the customer created the transaction, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
  })
  .openapi({
    title: 'Incorrect Transaction Amount',
    description: 'The incorrect transaction amount details.',
    required: [],
  })
  .openapi('IncorrectTransactionAmount')

const PaymentByOtherMeansSchema = z
  .object({
    charge_different_from_original: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, indicates that a charge was made that is different from the original charge.',
      }),
    received_duplicate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, indicates that a duplicate transaction was received.' }),
    payment_method: z
      .enum(['CASH', 'CREDIT_CARD', 'CHECK', 'PAYPAL', 'DEBIT_CARD', 'GIFT_CARD', 'BANK_TRANSFER'])
      .exactOptional()
      .openapi({
        description: 'The payment method.',
        'x-enumDescriptions': [
          { value: 'CASH', description: 'The payment method was cash.' },
          { value: 'CREDIT_CARD', description: 'The payment method was a credit card.' },
          { value: 'CHECK', description: 'The payment method was a check.' },
          { value: 'PAYPAL', description: 'The payment method was PayPal.' },
          { value: 'DEBIT_CARD', description: 'The payment method was a debit card.' },
          { value: 'GIFT_CARD', description: 'The payment method was a gift card.' },
          { value: 'BANK_TRANSFER', description: 'The payment method was through bank transfer.' },
        ],
      }),
    payment_instrument_suffix: z
      .string()
      .regex(/^.*$/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Last 2-4 characters of the payment instrument. For payment_method CHECK, payment_instrument_suffix entered must be of minimum length 2-4 characters. For payment_method CREDIT_CARD, DEBIT_CARD, GIFT_CARD, BANK_TRANSFER, payment_instrument_suffix entered must be of length 4.',
      }),
  })
  .openapi({
    title: 'Payment by Other Means',
    description: 'The payment by other means details.',
    required: [],
  })
  .openapi('PaymentByOtherMeans')

const CancellationDetailsSchema = z
  .object({
    cancellation_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time of the cancellation, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    cancellation_number: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The cancellation number.' }),
    cancelled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the dispute was canceled.' }),
    cancellation_mode: z
      .enum([
        'CANCELLED_PAYPAL_BILLING_AGREEMENT',
        'WEBSITE',
        'PHONE',
        'EMAIL',
        'WRITTEN',
        'IN_PERSON',
      ])
      .exactOptional()
      .openapi({
        description: 'Indicates the mode used for order cancellation.',
        'x-enumDescriptions': [
          {
            value: 'CANCELLED_PAYPAL_BILLING_AGREEMENT',
            description: 'Cancelled the billing agreement.',
          },
          { value: 'WEBSITE', description: "The item was cancelled on the merchant's website." },
          { value: 'PHONE', description: 'The item was cancelled through either phone or fax.' },
          {
            value: 'EMAIL',
            description: 'The item was cancelled through either email or text message.',
          },
          { value: 'WRITTEN', description: 'The item was cancelled via written communication.' },
          { value: 'IN_PERSON', description: 'The item was cancelled in person.' },
        ],
      }),
  })
  .openapi({
    title: 'Cancellation Details',
    description: 'The cancellation details.',
    required: [],
  })
  .openapi('CancellationDetails')

const SubReasonsSchema = z
  .enum(['DAMAGED', 'DIFFERENT', 'MISSING_PARTS', 'OTHER'])
  .openapi({
    description: 'The sub-reason for the product issue.',
    'x-enumDescriptions': [
      { value: 'DAMAGED', description: 'The product was damaged.' },
      { value: 'DIFFERENT', description: 'The product was different from what was expected.' },
      { value: 'MISSING_PARTS', description: 'The product had missing parts.' },
      { value: 'OTHER', description: 'Other.' },
    ],
  })
  .openapi('SubReasons')

const SubReasonsListSchema = z
  .array(SubReasonsSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'An array of sub-reasons for the product issue.' })
  .openapi('SubReasonsList')

const ReturnDetailsSchema = z
  .object({
    return_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the product was returned, [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    mode: z
      .enum(['SHIPPED', 'IN_PERSON'])
      .exactOptional()
      .openapi({
        description: 'The method that the customer used to return the product.',
        'x-enumDescriptions': [
          {
            value: 'SHIPPED',
            description: 'The customer shipped the product back to the merchant.',
          },
          {
            value: 'IN_PERSON',
            description: 'The customer returned the item to the merchant in person.',
          },
        ],
      }),
    receipt: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether customer has the return receipt.' }),
    return_confirmation_number: z
      .string()
      .regex(/^[A-Za-z0-9:\-]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The confirmation number for the item return.' }),
    returned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, indicates that the item was returned but the seller refused to accept the return and if `false`, indicates the item was not attempted to return.',
      }),
  })
  .openapi({
    title: 'Return Details',
    description: 'The return details for the product.',
    required: [],
  })
  .openapi('ReturnDetails')

const ProductDetailsSchema = z
  .object({
    description: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The product description.' }),
    product_received: z
      .enum(['YES', 'NO', 'RETURNED'])
      .exactOptional()
      .openapi({
        description: 'Indicates whether the product was, or was not, received or returned.',
        'x-enumDescriptions': [
          { value: 'YES', description: 'The product was received.' },
          { value: 'NO', description: 'The product was not received.' },
          { value: 'RETURNED', description: 'The product was returned.' },
        ],
      }),
    product_received_time: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time when product was delivered.',
    }),
    expected_delivery_date: DateTimeSchema.exactOptional().openapi({
      description: 'The expected delivery date and time of the product.',
    }),
    sub_reasons: SubReasonsListSchema.exactOptional(),
    purchase_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL where the customer purchased the product.' }),
    return_details: ReturnDetailsSchema.exactOptional(),
  })
  .openapi({ title: 'Product Details', description: 'The product information.', required: [] })
  .openapi('ProductDetails')

const DefinitionsSubReasonsSchema = z
  .enum(['DAMAGED', 'DIFFERENT', 'INCOMPLETE', 'OTHER'])
  .openapi({
    description: 'The sub-reason for the service issue.',
    'x-enumDescriptions': [
      { value: 'DAMAGED', description: 'The service was damaged.' },
      { value: 'DIFFERENT', description: 'The service was different from what was expected.' },
      { value: 'INCOMPLETE', description: 'The service was incomplete.' },
      { value: 'OTHER', description: 'Other.' },
    ],
  })
  .openapi('DefinitionsSubReasons')

const DefinitionsSubReasonsListSchema = z
  .array(DefinitionsSubReasonsSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'An array of sub-reasons for the service issue.' })
  .openapi('DefinitionsSubReasonsList')

const ServiceDetailsSchema = z
  .object({
    description: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The service description.' }),
    service_started: z
      .enum(['YES', 'NO', 'CANCELLED'])
      .exactOptional()
      .openapi({
        description: 'Indicates whether the service was started or cancelled.',
        'x-enumDescriptions': [
          { value: 'YES', description: 'The service was started.' },
          { value: 'NO', description: 'The service was not started.' },
          { value: 'CANCELLED', description: 'The service was cancelled.' },
        ],
      }),
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The customer specified note about the service usage.' }),
    sub_reasons: DefinitionsSubReasonsListSchema.exactOptional(),
    purchase_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The URL of the merchant or marketplace site where the customer purchased the service.',
      }),
  })
  .openapi({ title: 'Service Details', description: 'The service details.', required: [] })
  .openapi('ServiceDetails')

const CreditNotProcessedSchema = z
  .object({
    issue_type: z
      .enum(['PRODUCT', 'SERVICE'])
      .exactOptional()
      .openapi({
        description: 'The issue type.',
        'x-enumDescriptions': [
          { value: 'PRODUCT', description: 'The product has an issue.' },
          { value: 'SERVICE', description: 'The service has an issue.' },
        ],
      }),
    expected_refund: MoneySchema.exactOptional(),
    cancellation_details: CancellationDetailsSchema.exactOptional(),
    product_details: ProductDetailsSchema.exactOptional(),
    service_details: ServiceDetailsSchema.exactOptional(),
    agreed_refund_details: AgreedRefundDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Credit Not Processed',
    description: 'The credit not processed details.',
    required: [],
  })
  .openapi('CreditNotProcessed')

const CanceledRecurringBillingSchema = z
  .object({
    expected_refund: MoneySchema.exactOptional(),
    cancellation_details: CancellationDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Canceled Recurring Billing',
    description: 'The recurring billing canceled details.',
    required: [],
  })
  .openapi('CanceledRecurringBilling')

const BillingDisputesPropertiesSchema = z
  .object({
    duplicate_transaction: DuplicateTransactionSchema.exactOptional(),
    incorrect_transaction_amount: IncorrectTransactionAmountSchema.exactOptional(),
    payment_by_other_means: PaymentByOtherMeansSchema.exactOptional(),
    credit_not_processed: CreditNotProcessedSchema.exactOptional(),
    canceled_recurring_billing: CanceledRecurringBillingSchema.exactOptional(),
  })
  .openapi({
    title: 'Billing Disputes Properties',
    description: 'The billing issue details.',
    required: [],
  })
  .openapi('BillingDisputesProperties')

const BuyerEscalationReasonSchema = z.any().openapi('BuyerEscalationReason')

const CommunicationDetailsSchema = z
  .object({
    email: EmailAddressSchema.exactOptional().openapi({
      description:
        'The email address that is provided by the merchant where the customer can share the evidences.',
    }),
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The merchant provided notes that are visible to both the customer and PayPal.',
      }),
    time_posted: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the contact details were posted, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Contact Details',
    description:
      'The contact details that a merchant provides to the customer to use to share their evidence documents.',
    required: [],
  })
  .openapi('CommunicationDetails')

const DocumentSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z0-9-_,\s]+[.]{1}[A-Za-z]+$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The document name.' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The downloadable URL for the document for which the client has access.<br/><br/><blockquote><strong>Note:</strong> Document download may require some configuration setup and available as a limited release at this time. For more information, reach out to your PayPal account manager.</blockquote>.',
      }),
  })
  .openapi({
    title: 'Document',
    description: 'An uploaded document as a binary object that supports a dispute.',
    required: [],
  })
  .openapi('Document')

const DefinitionsDocumentListSchema = z
  .array(DocumentSchema)
  .min(1)
  .max(100)
  .openapi({ description: 'An array of evidence documents.' })
  .openapi('DefinitionsDocumentList')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(10)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).',
    readOnly: true,
  })
  .openapi('DefinitionsLinkDescriptionList')

const DenyOfferSchema = z
  .object({
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .openapi({
        description:
          'The customer notes about the denial of offer. PayPal can but the merchant cannot view these notes.',
      }),
  })
  .openapi({
    title: 'Deny Offer Request',
    description: 'A customer request to deny the offer made by the merchant.',
    required: ['note'],
  })
  .openapi('DenyOffer')

const TransactionInfoListSchema = z
  .array(TransactionInfoSchema)
  .min(1)
  .max(1000)
  .openapi({ description: 'An array of transactions for which disputes were created.' })
  .openapi('TransactionInfoList')

const StatusSchema = z
  .enum([
    'OPEN',
    'WAITING_FOR_BUYER_RESPONSE',
    'WAITING_FOR_SELLER_RESPONSE',
    'UNDER_REVIEW',
    'RESOLVED',
    'OTHER',
  ])
  .openapi({
    readOnly: true,
    description:
      'The overall status of the dispute, constant for all the parties involved at anytime during the dispute lifecycle.',
    'x-enumDescriptions': [
      { value: 'OPEN', description: 'The dispute is open.' },
      {
        value: 'WAITING_FOR_BUYER_RESPONSE',
        description: 'The dispute is waiting for a response from the customer.',
      },
      {
        value: 'WAITING_FOR_SELLER_RESPONSE',
        description: 'The dispute is waiting for a response from the merchant.',
      },
      { value: 'UNDER_REVIEW', description: 'The dispute is under review with PayPal.' },
      { value: 'RESOLVED', description: 'The dispute is resolved.' },
      {
        value: 'OTHER',
        description: 'The default status if the dispute does not have one of the other statuses.',
      },
    ],
  })
  .openapi('Status')

const FeePolicySchema = z
  .object({})
  .openapi({
    title: 'Fee Policy',
    description:
      'Policy that determines whether the fee needs to be charged, retained or returned while moving the money as part of dispute process.',
  })
  .openapi('FeePolicy')

const DisputeOutcomeSchema = z
  .object({
    outcome_code: z
      .enum([
        'RESOLVED_BUYER_FAVOUR',
        'RESOLVED_SELLER_FAVOUR',
        'RESOLVED_WITH_PAYOUT',
        'CANCELED_BY_BUYER',
        'ACCEPTED',
        'DENIED',
        'NONE',
      ])
      .exactOptional()
      .openapi({
        description: 'The outcome of a resolved dispute.',
        'x-enumDescriptions': [
          {
            value: 'RESOLVED_BUYER_FAVOUR',
            description: "The dispute was resolved in the customer's favor.",
          },
          {
            value: 'RESOLVED_SELLER_FAVOUR',
            description: "The dispute was resolved in the merchant's favor.",
          },
          {
            value: 'RESOLVED_WITH_PAYOUT',
            description:
              'PayPal provided the merchant or customer with protection and the case is resolved.',
          },
          { value: 'CANCELED_BY_BUYER', description: 'The customer canceled the dispute.' },
          {
            value: 'ACCEPTED',
            description: 'DEPRECATED. PayPal accepted the dispute.',
            deprecated: true,
          },
          {
            value: 'DENIED',
            description: 'DEPRECATED. PayPal denied the dispute.',
            deprecated: true,
          },
          {
            value: 'NONE',
            description:
              'A dispute was created for the same transaction ID, and the previous dispute was closed without any decision.',
          },
        ],
      }),
    outcome_reason: AdjudicationReasonSchema.exactOptional().openapi({
      description: 'The justification for the adjudication outcome.',
    }),
    amount_refunded: MoneySchema.exactOptional().openapi({
      description: 'The amount that either the merchant or PayPal refunds the customer.',
    }),
    asset_refunded: CryptocurrencySchema.exactOptional().openapi({
      description: 'The asset that either the merchant or PayPal refunds the customer.',
    }),
  })
  .openapi({ title: 'Dispute Outcome', description: 'The outcome of a dispute.', required: [] })
  .openapi('DisputeOutcome')

const MoneyMovementReasonSchema = z
  .enum(['DISPUTE_SETTLEMENT_FEE', 'DISPUTE_SETTLEMENT', 'DISPUTE_FEE', 'CHARGEBACK_FEE'])
  .openapi({
    description: 'The reason for the money movement.',
    'x-enumDescriptions': [
      { value: 'DISPUTE_SETTLEMENT_FEE', description: 'The fee is for dispute settlement.' },
      { value: 'DISPUTE_SETTLEMENT', description: 'The money movement is for dispute settlement.' },
      {
        value: 'DISPUTE_FEE',
        description:
          'The money movement is for dispute fee which PayPal charges to sellers for facilitating the online dispute resolution process for transactions that are processed either through a buyer’s PayPal account or through a PayPal guest checkout.',
      },
      {
        value: 'CHARGEBACK_FEE',
        description:
          'The money movement is for chargeback fee which PayPal charges to sellers for facilitating the chargeback process for transactions that are not processed either through a buyer’s PayPal account or through a guest checkout, and where the buyer pursues a chargeback for the transaction with their card issuer.',
      },
    ],
    deprecated: true,
  })
  .openapi('MoneyMovementReason')

const MoneyMovementSchema = z
  .object({
    affected_party: z
      .enum(['SELLER', 'BUYER', 'PAYMENT_PROCESSOR'])
      .exactOptional()
      .openapi({
        description: 'The affected party in the money movement.',
        'x-enumDescriptions': [
          { value: 'SELLER', description: 'The money movement is related to the seller.' },
          { value: 'BUYER', description: 'The money movement is related to the buyer.' },
          {
            value: 'PAYMENT_PROCESSOR',
            description:
              'The money movement is related to the payment processing tenants such as PayPal, Venmo, Braintree etc.',
          },
        ],
      }),
    amount: MoneySchema.exactOptional().openapi({
      description: 'The amount transferred as part of the money movement.',
    }),
    asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The asset transferred as part of the money movement.',
    }),
    initiated_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the money movement was initiated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    type: z
      .enum(['DEBIT', 'CREDIT'])
      .exactOptional()
      .openapi({
        description: 'The type of the money movement.',
        'x-enumDescriptions': [
          { value: 'DEBIT', description: 'The money movement is a debit transaction.' },
          { value: 'CREDIT', description: 'The money movement is a credit transaction.' },
        ],
      }),
    reason: MoneyMovementReasonSchema.exactOptional().openapi({
      description: 'The reason for the money movement.',
    }),
  })
  .openapi({
    title: 'Money movement',
    description: 'The Money movement details with party.',
    deprecated: true,
    required: [],
  })
  .openapi('MoneyMovement')

const MoneyMovementListSchema = z
  .array(MoneyMovementSchema)
  .min(1)
  .max(50)
  .openapi({
    description: 'DEPRECATED The Money movement details for the dispute.',
    deprecated: true,
  })
  .openapi('MoneyMovementList')

const FundMovementReasonSchema = z
  .enum(['REVERSED_TRANSACTION_FEE', 'DISPUTE_SETTLEMENT', 'DISPUTE_FEE', 'CHARGEBACK_FEE'])
  .openapi({
    description: 'The reason for the fund movement.',
    'x-enumDescriptions': [
      {
        value: 'REVERSED_TRANSACTION_FEE',
        description:
          'The fee amount reimbursed to the seller as part of the dispute resolution process.',
      },
      { value: 'DISPUTE_SETTLEMENT', description: 'The money movement is for dispute settlement.' },
      {
        value: 'DISPUTE_FEE',
        description:
          'The money movement is for dispute fee which PayPal charges to sellers for facilitating the online dispute resolution process for transactions that are processed either through a buyer’s PayPal account or through a PayPal guest checkout.',
      },
      {
        value: 'CHARGEBACK_FEE',
        description:
          'The money movement is for chargeback fee which PayPal charges to sellers for facilitating the chargeback process for transactions that are not processed either through a buyer’s PayPal account or through a guest checkout, and where the buyer pursues a chargeback for the transaction with their card issuer.',
      },
    ],
  })
  .openapi('FundMovementReason')

const FundMovementSchema = z
  .object({
    party: z
      .enum(['SELLER', 'BUYER', 'PAYMENT_PROCESSOR'])
      .exactOptional()
      .openapi({
        description: 'The affected party in the money movement.',
        'x-enumDescriptions': [
          { value: 'SELLER', description: 'The money movement is related to the seller.' },
          { value: 'BUYER', description: 'The money movement is related to the buyer.' },
          {
            value: 'PAYMENT_PROCESSOR',
            description:
              'The money movement is related to the payment processing tenants such as PayPal, Venmo, Braintree etc.',
          },
        ],
      }),
    amount: MoneySchema.exactOptional().openapi({
      description: 'The amount transferred as part of the money movement.',
    }),
    asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The asset transferred as part of the money movement.',
    }),
    initiated_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the money movement was initiated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    type: z
      .enum(['DEBIT', 'CREDIT'])
      .exactOptional()
      .openapi({
        description: 'The type of the money movement.',
        'x-enumDescriptions': [
          { value: 'DEBIT', description: 'The money movement is a debit transaction.' },
          { value: 'CREDIT', description: 'The money movement is a credit transaction.' },
        ],
      }),
    reason: FundMovementReasonSchema.exactOptional().openapi({
      description: 'The reason for the fund movement.',
    }),
  })
  .openapi({
    title: 'Fund movement',
    description:
      'This section contains the details about the fund movement of the parties ,time , direction and the reason for it.',
    required: [],
  })
  .openapi('FundMovement')

const FundMovementListSchema = z
  .array(FundMovementSchema)
  .min(1)
  .max(50)
  .openapi({ description: 'The movements of fund due to the dispute.' })
  .openapi('FundMovementList')

const DisputeChannelSchema = z
  .enum(['INTERNAL', 'EXTERNAL', 'ALERT'])
  .openapi({
    readOnly: true,
    description: 'The channel where the customer created the dispute.',
    'x-enumDescriptions': [
      {
        value: 'INTERNAL',
        description: 'The customer contacts PayPal to file a dispute with the merchant.',
      },
      {
        value: 'EXTERNAL',
        description: 'The customer contacts their card issuer or bank to request a refund.',
      },
      {
        value: 'ALERT',
        description:
          'Pre-chargeback alert when customer contacts their card issuer to request a refund.',
      },
    ],
  })
  .openapi('DisputeChannel')

const DocumentListSchema = z
  .array(DocumentSchema)
  .min(1)
  .max(10)
  .openapi({
    readOnly: true,
    description:
      'An array of metadata for the documents which contains any additional info about the message posted.',
  })
  .openapi('DocumentList')

const MessageSchema = z
  .object({
    posted_by: z
      .enum(['BUYER', 'SELLER', 'ARBITER'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the customer, merchant, or dispute arbiter posted the message.',
        readOnly: true,
        'x-enumDescriptions': [
          { value: 'BUYER', description: 'The customer posted the message.' },
          { value: 'SELLER', description: 'The merchant posted the message.' },
          { value: 'ARBITER', description: 'The arbiter of the dispute posted the message.' },
        ],
      }),
    time_posted: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the message was posted, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    content: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The message text.' }),
    documents: DocumentListSchema.exactOptional(),
  })
  .openapi({
    title: 'Message',
    description: 'A customer- or merchant-posted message for the dispute.',
    required: [],
  })
  .openapi('Message')

const MessageListSchema = z
  .array(MessageSchema)
  .min(1)
  .max(1000)
  .openapi({ description: 'An array of customer- or merchant-posted messages for the dispute.' })
  .openapi('MessageList')

const MerchantContactedOutcomeSchema = z
  .enum(['NO_RESPONSE', 'FIXED', 'NOT_FIXED'])
  .openapi({
    title: 'Merchant Contacted Outcome',
    description: 'The outcome when the customer has contacted the merchant.',
    'x-enumDescriptions': [
      { value: 'NO_RESPONSE', description: 'The merchant did not respond to the customer.' },
      {
        value: 'FIXED',
        description: 'The merchant agreed to fix the issue but did not fix it yet.',
      },
      { value: 'NOT_FIXED', description: 'The merchant could not fix the issue.' },
    ],
  })
  .openapi('MerchantContactedOutcome')

const MerchantContactedModeSchema = z
  .enum(['WEBSITE', 'PHONE', 'EMAIL', 'WRITTEN', 'IN_PERSON'])
  .openapi({
    title: 'Merchant Contacted Method',
    description: 'The method used to contact the merchant.',
    'x-enumDescriptions': [
      { value: 'WEBSITE', description: 'The merchant was contacted through his website.' },
      { value: 'PHONE', description: 'The merchant was contacted through either phone or fax.' },
      {
        value: 'EMAIL',
        description: 'The merchant was contacted through either email or text message.',
      },
      {
        value: 'WRITTEN',
        description: 'The merchant was contacted through a written communication.',
      },
      { value: 'IN_PERSON', description: 'The merchant was contacted in person.' },
    ],
  })
  .openapi('MerchantContactedMode')

const MerchandizeDisputePropertiesSchema = z
  .object({
    issue_type: z
      .enum(['PRODUCT', 'SERVICE'])
      .exactOptional()
      .openapi({
        description: 'The issue type.',
        'x-enumDescriptions': [
          { value: 'PRODUCT', description: 'The product has an issue.' },
          { value: 'SERVICE', description: 'The service has an issue.' },
        ],
      }),
    product_details: ProductDetailsSchema.exactOptional(),
    service_details: ServiceDetailsSchema.exactOptional(),
    cancellation_details: CancellationDetailsSchema.exactOptional(),
    return_shipping_address: AddressPortableSchema.exactOptional().openapi({
      description:
        'The return address for the item. Required when the customer must return an item to the merchant for the <a href="/docs/integration/direct/customer-disputes/integration-guide/#merchandise_or_service_not_as_described"><code>MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED</code></a> dispute reason.',
    }),
  })
  .openapi({
    title: 'Merchandise Dispute Properties',
    description: 'The customer-provided merchandise issue details for the dispute.',
    required: [],
  })
  .openapi('MerchandizeDisputeProperties')

const DisputeSourceSchema = z
  .enum(['EMAIL', 'WEB', 'CHAT', 'IVR', 'PHONE', 'MOBILE_APP', 'MOBILE_WEB', 'API'])
  .openapi({
    description: 'The dispute source through which customer initiated the dispute.',
    'x-enumDescriptions': [
      { value: 'EMAIL', description: 'The dispute is initiated through a email communication.' },
      { value: 'WEB', description: 'The dispute is filed directly on paypal website.' },
      { value: 'CHAT', description: 'The dispute is initiated through a chat communication.' },
      { value: 'IVR', description: 'The dispute is initiated through automated phone system.' },
      { value: 'PHONE', description: 'The dispute is initiated through a phone call from user.' },
      {
        value: 'MOBILE_APP',
        description: 'The dispute is filed directly on paypal application on mobile.',
      },
      {
        value: 'MOBILE_WEB',
        description: 'The dispute is filed directly on paypal mobile web page.',
      },
      { value: 'API', description: 'The dispute is filed directly through API request.' },
    ],
  })
  .openapi('DisputeSource')

const ExtensionsSchema = z
  .object({
    merchant_contacted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that the merchant was contacted.' }),
    merchant_contacted_outcome: MerchantContactedOutcomeSchema.exactOptional(),
    merchant_contacted_time: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time when merchant was contacted.',
    }),
    merchant_contacted_mode: MerchantContactedModeSchema.exactOptional().openapi({
      description: 'The method used to contact the merchant.',
    }),
    buyer_contacted_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the buyer contacted the partner to file a dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    buyer_contacted_channel: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The channel through which the buyer contacted the partner to file a dispute. Partners that allow buyers to create dispute from multiple channels can use this field to help identify which channel was used for each individual dispute.',
      }),
    billing_dispute_properties: BillingDisputesPropertiesSchema.exactOptional(),
    merchandize_dispute_properties: MerchandizeDisputePropertiesSchema.exactOptional(),
    reported_source: DisputeSourceSchema.exactOptional(),
  })
  .openapi({
    title: 'Extensions',
    description:
      'The extended properties for the dispute. Includes additional information for a dispute category, such as billing disputes, the original transaction ID, and the correct amount.',
    required: [],
  })
  .openapi('Extensions')

const TrackingInfoSchema = z
  .object({
    carrier_name: z
      .enum([
        'UPS',
        'USPS',
        'FEDEX',
        'AIRBORNE_EXPRESS',
        'DHL',
        'AIRSURE',
        'ROYAL_MAIL',
        'PARCELFORCE',
        'SWIFTAIR',
        'OTHER',
        'UK_PARCELFORCE',
        'UK_ROYALMAIL_SPECIAL',
        'UK_ROYALMAIL_RECORDED',
        'UK_ROYALMAIL_INT_SIGNED',
        'UK_ROYALMAIL_AIRSURE',
        'UK_UPS',
        'UK_FEDEX',
        'UK_AIRBORNE_EXPRESS',
        'UK_DHL',
        'UK_OTHER',
        'UK_CANNOT_PROV_TRACK',
        'UK_CANNOT_PROVIDE_TRACKING',
        'CA_CANADA_POST',
        'CA_PUROLATOR',
        'CA_CANPAR',
        'CA_LOOMIS',
        'CA_TNT',
        'TNT',
        'CA_OTHER',
        'CA_CANNOT_PROV_TRACK',
        'DE_DP_DHL_WITHIN_EUROPE',
        'DE_DP_DHL_T_AND_T_EXPRESS',
        'DE_DHL_DP_INTL_SHIPMENTS',
        'CA_CANNOT_PROVIDE_TRACKING',
        'DE_GLS',
        'DE_DPD_DELISTACK',
        'DE_HERMES',
        'DE_UPS',
        'DE_FEDEX',
        'DE_TNT',
        'DE_OTHER',
        'FR_CHRONOPOST',
        'FR_COLIPOSTE',
        'FR_DHL',
        'FR_UPS',
        'FR_FEDEX',
        'FR_TNT',
        'FR_GLS',
        'FR_OTHER',
        'IT_POSTE_ITALIA',
        'IT_DHL',
        'IT_UPS',
        'IT_FEDEX',
        'IT_TNT',
        'IT_GLS',
        'IT_OTHER',
        'AU_AUSTRALIA_POST_EP_PLAT',
        'AU_AUSTRALIA_POST_EPARCEL',
        'AU_AUSTRALIA_POST_EMS',
        'AU_DHL',
        'AU_STAR_TRACK_EXPRESS',
        'AU_UPS',
        'AU_FEDEX',
        'AU_TNT',
        'AU_TOLL_IPEC',
        'AU_OTHER',
        'FR_SUIVI',
        'IT_EBOOST_SDA',
        'ES_CORREOS_DE_ESPANA',
        'ES_DHL',
        'ES_UPS',
        'ES_FEDEX',
        'ES_TNT',
        'ES_OTHER',
        'AT_AUSTRIAN_POST_EMS',
        'AT_AUSTRIAN_POST_PPRIME',
        'BE_CHRONOPOST',
        'BE_TAXIPOST',
        'CH_SWISS_POST_EXPRES',
        'CH_SWISS_POST_PRIORITY',
        'CN_CHINA_POST',
        'HK_HONGKONG_POST',
        'IE_AN_POST_SDS_EMS',
        'IE_AN_POST_SDS_PRIORITY',
        'IE_AN_POST_REGISTERED',
        'IE_AN_POST_SWIFTPOST',
        'IN_INDIAPOST',
        'JP_JAPANPOST',
        'KR_KOREA_POST',
        'NL_TPG',
        'SG_SINGPOST',
        'TW_CHUNGHWA_POST',
        'CN_CHINA_POST_EMS',
        'CN_FEDEX',
        'CN_TNT',
        'CN_UPS',
        'CN_OTHER',
        'NL_TNT',
        'NL_DHL',
        'NL_UPS',
        'NL_FEDEX',
        'NL_KIALA',
        'BE_KIALA',
        'PL_POCZTA_POLSKA',
        'PL_POCZTEX',
        'PL_GLS',
        'PL_MASTERLINK',
        'PL_TNT',
        'PL_DHL',
        'PL_UPS',
        'PL_FEDEX',
        'JP_SAGAWA_KYUU_BIN',
        'JP_NITTSU_PELICAN_BIN',
        'JP_KURO_NEKO_YAMATO_UNYUU',
        'JP_TNT',
        'JP_DHL',
        'JP_UPS',
        'JP_FEDEX',
        'NL_PICKUP',
        'NL_INTANGIBLE',
        'NL_ABC_MAIL',
        'HK_FOUR_PX_EXPRESS',
        'HK_FLYT_EXPRESS',
        'US_ASCENDIA',
        'US_ENSENDA',
        'US_GLOBEGISTICS',
        'US_ONTRAC',
        'RRDONNELLEY',
        'ASENDIA_UK',
        'UK_COLLECTPLUS',
        'UK_DPD',
        'UK_HERMESWORLD',
        'UK_INTERLINK_EXPRESS',
        'UK_TNT',
        'UK_UK_MAIL',
        'UK_YODEL',
        'BUYLOGIC',
        'CN_EMS',
        'CHINA_POST',
        'CNEXPS',
        'CPACKET',
        'CUCKOOEXPRESS',
        'CN_EC',
        'CN_EMPS',
        'DE_ASENDIA',
        'UK_DELTEC',
        'DE_DEUTSCHE',
        'DE_DPD',
        'RABEN_GROUP',
        'GLOBAL_TNT',
        'ADSONE',
        'AU_AU_POST',
        'BONDSCOURIERS',
        'COURIERS_PLEASE',
        'DTDC_AU',
        'AU_FASTWAY',
        'HUNTER_EXPRESS',
        'SENDLE',
        'AUS_TOLL',
        'TOLL',
        'UBI_LOGISTICS',
        'OMNIPARCEL',
        'QUANTIUM',
        'CN_SF_EXPRESS',
        'SEKOLOGISTICS',
        'HK_TAQBIN',
        'GB_APC',
        'CA_CANPAR_COURIER',
        'GLOBAL_ESTES',
        'CA_GREYHOUND',
        'PUROLATOR',
        'US_RL',
        'IT_BRT',
        'DMM_NETWORK',
        'IT_FERCAM',
        'HERMES_IT',
        'IT_POSTE_ITALIANE',
        'IT_SDA',
        'IT_SGT',
        'GLOBAL_SKYNET',
        'FR_BERT',
        'FR_COLIS',
        'FR_GEODIS',
        'FR_LAPOSTE',
        'FR_TELIWAY',
        'DPD_POLAND',
        'INPOST_PACZKOMATY',
        'POL_POCZTA',
        'POL_SIODEMKA',
        'ESP_CORREOS',
        'ES_CORREOS',
        'ESP_NACEX',
        'ESP_ASM',
        'ESP_REDUR',
        'CBL_LOGISTICA',
        'EKART',
        'IND_DELHIVERY',
        'IND_BLUEDART',
        'IND_DTDC',
        'IND_PROFESSIONAL_COURIERS',
        'IND_REDEXPRESS',
        'IND_XPRESSBEES',
        'IND_DOTZOT',
        'THA_KERRY',
        'SENDIT',
        'ACOMMERCE',
        'NINJAVAN_THAI',
        'NIM_EXPRESS',
        'THA_THAILAND_POST',
        'THA_DYNAMIC_LOGISTICS',
        'ALPHAFAST',
        'FASTRAK_TH',
        'EPARCEL_KR',
        'CJ_KOREA_THAI',
        'RINCOS',
        'KOR_KOREA_POST',
        'KOR_CJ',
        'KOR_ECARGO',
        'SREKOREA',
        'ROCKETPARCEL',
        'BG_BULGARIAN_POST',
        'JPN_JAPAN_POST',
        'JPN_YAMATO',
        'JPN_SAGAWA',
        'TUR_PTT',
        'AUT_AUSTRIAN_POST',
        'AU_AUSTRIAN_POST',
        'RUSSIAN_POST',
        'BEL_DHL',
        'FR_MONDIAL',
        'EU_BPOST',
        'LANDMARK_GLOBAL',
        'IDN_POS',
        'IDN_POS_INT',
        'IDN_JNE',
        'IDN_PANDU',
        'RPX',
        'IDN_TIKI',
        'IDN_LION_PARCEL',
        'NINJAVAN_ID',
        'IDN_WAHANA',
        'IDN_FIRST_LOGISTICS',
        'UK_AN_POST',
        'DPD',
        'UK_FASTWAY',
        'UK_NIGHTLINE',
        'WISELOADS',
        'GR_ELTA',
        'GRC_ACS',
        'GR_GENIKI',
        'NINJAVAN_PHILIPPINES',
        'PHL_XEND_EXPRESS',
        'PHL_LBC',
        'PHL_JAMEXPRESS',
        'PHL_AIRSPEED',
        'PHL_RAF',
        'DIRECTLOG',
        'BRA_CORREIOS',
        'NLD_DHL',
        'NLD_POSTNL',
        'NLD_GLS',
        'NLD_TRANSMISSION',
        'CORREOS_DE_MEXICO',
        'MEX_ESTAFETA',
        'MEX_SENDA',
        'MEX_REDPACK',
        'MEX_AEROFLASH',
        'NATIONWIDE_MY',
        'MYS_MYS_POST',
        'MYS_TAQBIN',
        'MYS_SKYNET',
        'MYS_CITYLINK',
        'MYS_AIRPAK',
        'NINJAVAN_MY',
        'KANGAROO_MY',
        'VNM_VIETNAM_POST',
        'VNPOST_EMS',
        'PRT_INT_SEUR',
        'PRT_CTT',
        'PRT_CHRONOPOST',
        'PRT_SEUR',
        'ADICIONAL',
        'LTU_LIETUVOS',
        'DPEX',
        'LWE_HK',
        'SG_SG_POST',
        'SG_TAQBIN',
        'SG_NINJAVAN',
        'SG_ZALORA',
        'JET_SHIP',
        'SG_PARCELPOST',
        'CHE_SWISS_POST',
        'ASENDIA_HK',
        'HUN_MAGYAR',
        'POSTNORD_LOGISTICS',
        'SWE_DIRECTLINK',
        'SWE_POSTNORD',
        'SWE_DB',
        'CZE_CESKA',
        'NZ_NZ_POST',
        'NZ_COURIER_POST',
        'FASTWAY_NZ',
        'TW_TAIWAN_POST',
        'SPREADEL',
        'ARE_EMIRATES_POST',
        'AXL',
        'CYP_CYPRUS_POST',
        'HRV_HRVATSKA',
        'NOR_POSTEN',
        'RAM',
        'THECOURIERGUY',
        'ZA_FASTWAY',
        'DPE_EXPRESS',
        'POSTI',
        'MATKAHUOLTO',
        'GLOBAL_DHL',
        'ARG_CORREO',
        'ARG_OCA',
        'POST_SERBIA',
        'BH_POSTA',
        'CORREOS_CHILE',
        'APR_72',
        'CORREOS_DE_COSTA_RICA',
        'POSTUR_IS',
        'SPEEDEXCOURIER',
        'ROU_POSTA',
        'UKR_NOVA',
        'UKR_POSHTA',
        'NGA_NIPOST',
        'NG_COURIERPLUS',
        'ESHOPWORLD',
        'WEBINTERPRET',
        'HERMES',
        'ABC_MAIL',
        'ARAMEX',
        'YANWEN',
        'INTERNATIONAL_BRIDGE',
        'SFC_LOGISTICS',
        'BQC_EXPRESS',
        'ONE_WORLD',
        'IT_REGISTER_MAIL',
        'WINIT',
        'CONTINENTAL',
        'EFS',
        'PANTOS',
        'RELAIS_COLIS',
        'US_DHL_EXPRESS',
        'US_DHL_PARCEL',
        'US_DHL_ECOMMERCE',
        'US_DHL_GLOBALFORWARDING',
        'UK_DHL_EXPRESS',
        'UK_DHL_PARCEL',
        'UK_DHL_GLOBALFORWARDING',
        'CN_DHL_EXPRESS',
        'CN_DHL_ECOMMERCE',
        'CN_DHL_GLOBALFORWARDING',
        'DE_DHL_EXPRESS',
        'DE_DHL_PARCEL',
        'DE_DHL_PACKET',
        'DE_DHL_ECOMMERCE',
        'DE_DHL_GLOBALFORWARDING',
        'DE_DHL_DEUTSCHEPOST',
        'AU_DHL_EXPRESS',
        'AU_DHL_ECOMMERCE',
        'AU_DHL_GLOBALFORWARDING',
        'HK_DHL_EXPRESS',
        'HK_DHL_ECOMMERCE',
        'HK_DHL_GLOBALFORWARDING',
        'CA_DHL_EXPRESS',
        'CA_DHL_ECOMMERCE',
        'CA_DHL_GLOBALFORWARDING',
        'IT_DHL_EXPRESS',
        'IT_DHL_ECOMMERCE',
        'IT_DHL_GLOBALFORWARDING',
        'FR_DHL_EXPRESS',
        'FR_DHL_PARCEL',
        'FR_DHL_GLOBALFORWARDING',
        'PL_DHL_EXPRESS',
        'PL_DHL_PARCEL',
        'PL_DHL_GLOBALFORWARDING',
        'ABC_PACKAGE',
        'AN_POST',
        'APC_OVERNIGHT',
        'ASM_ES',
        'AUPOST_CN',
        'ACOMMMERCE',
        'ADICIONAL_PT',
        'AIR_21',
        'AIRBORNE_EXPRESS_UK',
        'AIRPAK_MY',
        'AIRSPEED',
        'ASENDIA_DE',
        'ASENDIA_US',
        'AUSTRALIA_POST',
        'TOLL_AU',
        'AUSTRIAN_POST_EXPRESS',
        'AUSTRIAN_POST',
        'B_TWO_C_EUROPE',
        'BERT',
        'BPOST',
        'BRT_IT',
        'BLUEDART',
        'BONDS_COURIERS',
        'BPOST_INT',
        'BULGARIAN_POST',
        'CJ_LOGISTICS',
        'CJ_INT_MY',
        'CJ_MY',
        'CJ_TH',
        'CANADA_POST',
        'CANPAR',
        'CESKA_CZ',
        'CHRONOPOST_FR',
        'CHRONOPOST_PT',
        'CHUNGHWA_POST',
        'CITYLINK_MY',
        'COLIPOSTE',
        'COLIS',
        'COLLECTPLUS',
        'CORREOS_AG',
        'CORREOS_BR',
        'CORREOS_CL',
        'CORREOS_CR',
        'CORREOS_MX',
        'CORREOS_ES',
        'CORREOS_EXPRESS',
        'COURIERPLUS',
        'COURIER_POST',
        'CYPRUS_POST_CYP',
        'DBSCHENKER_SE',
        'DHL_ES',
        'DHL_ACTIVE_TRACING',
        'DHL_AU',
        'DHL_BENELUX',
        'DHL_DEUTSCHE_POST',
        'DHL_FR',
        'DHL_GLOBAL_ECOMMERCE',
        'DHL_HK',
        'DHL_IT',
        'DHL_JP',
        'DHL_NL',
        'DHL_PACKET',
        'DHL_PARCEL_NL',
        'DHL_PARCEL_ES',
        'DHL_PL',
        'DHL_SG',
        'DHL_UK',
        'DHL_GLOBAL_MAIL_ASIA',
        'DHL_GLOBAL_MAIL',
        'DHL_AT',
        'DPD_DELISTRACK',
        'DPD_FR',
        'DPD_DE',
        'DPD_HK',
        'DPD_IR',
        'DPD_LOCAL_REF',
        'DPD_LOCAL',
        'DPD_PL',
        'DPD_RO',
        'DPD_RU',
        'DPD_UK',
        'DTDC_EXPRESS',
        'DTDC_IN',
        'DAWN_WING',
        'DELHIVERY_IN',
        'DELTEC_DE',
        'DELTEC_UK',
        'DEUTSCHE_DE',
        'DIRECTLINK_SE',
        'DIRECTLOG_BR',
        'DOTZOT',
        'EC_CN',
        'ELTA_GR',
        'EMPS_CN',
        'EMS_CN',
        'ECARGO',
        'EMIRATES_POST',
        'ENSENDA',
        'ESTAFETA',
        'ESTES',
        'FERCAM_IT',
        'FLYT_EXPRESS',
        'FASTRACK',
        'FASTWAY_US',
        'FASTWAY_ZA',
        'FASTWAY_UK',
        'FASTWAY_AU',
        'FIRST_LOGISITCS',
        'FOUR_PX_EXPRESS',
        'GEODIS',
        'GLS_CZ',
        'GLS_FR',
        'GLS_DE',
        'GLS_IT',
        'GLS_NL',
        'GLS_ES',
        'GLS',
        'ACS_GR',
        'GENIKI_GR',
        'GLOBEGISTICS',
        'GREYHOUND',
        'HERMES_DE',
        'HERMESWORLD_UK',
        'HK_POST',
        'HRVATSKA_HR',
        'HUAHAN_EXPRESS',
        'IMX',
        'ITIS',
        'INDIA_POST',
        'INTERLINK',
        'INT_SEUR',
        'INT_SUER',
        'ISRAEL_POST',
        'JNE_IDN',
        'JAMEXPRESS_PH',
        'JAPAN_POST',
        'JP_POST',
        'JETSHIP_MY',
        'JETSHIP_SG',
        'KERRY_EXPRESS_VN',
        'KERRY_EXPRESS_HK',
        'KERRY_EXPRESS_TH',
        'KIALA',
        'KOREA_POST',
        'CJ_KR',
        'LAPOSTE',
        'LBC_PH',
        'LIETUVOS_LT',
        'LION_PARCEL',
        'LOGISTICSWORLDWIDE_HK',
        'LOGISTICSWORLDWIDE_KR',
        'LOGISTICSWORLDWIDE_MY',
        'LOOMIS',
        'MONDIAL',
        'MAGYAR_HU',
        'MALAYSIA_POST',
        'MASTERLINK',
        'AEROFLASH',
        'REDPACK',
        'SENDA_MX',
        'MONDIAL_BE',
        'MYHERMES',
        'NACEX_ES',
        'NATIONWIDE',
        'NZ_POST',
        'NIPOST_NG',
        'NIGHTLINE_UK',
        'NINJAVAN_PH',
        'NINJAVAN_SG',
        'NOVA_POSHTA_INT',
        'NOVA_POSHTA',
        'OCA_AR',
        'ONTRAC',
        'PTT_POST',
        'PANDU',
        'PARCELPOST_SG',
        'POCZTA_POLSKA',
        'POCZTEX',
        'CTT_PT',
        'SEUR_PT',
        'POS_ID',
        'POS_INT',
        'POSTNL_INT_3_S',
        'POSTNL',
        'POSTNL_INT',
        'POSTNORD_LOGISTICS_DK',
        'POSTNORD_LOGISTICS_SE',
        'POSTNORD_LOGISTICS_GLOBAL',
        'POSTA_RO',
        'POSTE_ITALIANE',
        'POSTEN_NORGE',
        'PROFESSIONAL_COURIERS',
        'RAF_PH',
        'RL_US',
        'RPD_2_MAN',
        'RPX_ID',
        'REDEXPRESS',
        'REDUR_ES',
        'REGISTER_MAIL_IT',
        'RELAIS_COLIS_FR',
        'ROCKET_PARCEL',
        'SDA_IT',
        'SF_EXPRESS',
        'SFC_EXPRESS',
        'SGT_IT',
        'SRE_KOREA',
        'SAGAWA',
        'SAGAWA_JP',
        'POST_SERBIA_CS',
        'SINGPOST',
        'SIODEMKA',
        'SKYNET_WORLDWIDE',
        'SKYNET_MY',
        'SKYNET_UAE',
        'SKYNET_UK',
        'SEUR_ES',
        'STARTRACK_EXPRESS',
        'STARTRACK',
        'SWISS_POST',
        'TNT_AU',
        'TNT_CN',
        'TNT_CLICK_IT',
        'TNT_FR',
        'TNT_DE',
        'TNT_IT',
        'TNT_JP',
        'TNT_NL',
        'TNT_PL',
        'TNT_ES',
        'TNT_UK',
        'TPG',
        'TAIWAN_POST_TW',
        'TAQBIN_HK',
        'TAQBIN_MY',
        'TAQBIN_SG',
        'TAXIPOST',
        'TELIWAY',
        'THAILAND_POST',
        'THE_COURIER_GUY',
        'TIKI_ID',
        'TOLL_IPEC',
        'TWO_GO',
        'TRANSMISSION',
        'UK_MAIL',
        'UPS_MI',
        'VIETNAM_POST',
        'WAHANA_ID',
        'XEND_EXPRESS_PH',
        'XPRESSBEES',
        'YAMATO',
        'YANWEN_CN',
        'YODEL',
        'UPS_CANADA',
        'UPS_MAIL_INNOVATIONS',
        'DE_DELTEC',
        'DE_INTERNATIONALSEUR',
        'FR_DPD',
        'FR_IMX',
        'IT_IMX',
        'AU_DTDC',
        'AU_SENDLE',
        'AU_SKYNET',
        'ES_GLS',
        'ES_INTERNATIONALSEUR',
        'ES_IMX',
        'CN_HUAHANEXPRESS',
        'LOCAL_PICKUP',
        'HK_DPEX',
        'HK_KERRYEXPRESS',
        'HK_LOGISTICSWORLDWIDEEXPRESS',
        'HK_RPX',
        'HK_SPREADEL',
        'IN_SPREADEL',
        'TH_CJ',
        'KR_LOGISTICSWORLDWIDE',
        'AT_DHL',
        'BE_IMX',
        'MY_LOGISTICSWORLDWIDE',
        'MY_JETSHIP',
        'SG_DHL',
        'SG_SPREADEL',
        'POSTAROMANA',
        'US_PUROLATOR',
        'US_FASTWAY',
        'CHRONOPOST',
        'CORREOS_DE_ESPANA',
        'DEUTSCHE_POST_DHL',
        'EBOOST_SDA',
        'HONGKONG_POST',
        'INTANGIBLE_DIGITAL_SERVICES',
        'LA_POSTE',
        'LA_POSTE_SUIVI',
        'NEKO_YAMATO_UNYUU',
        'NITTSU_PELICAN_BIN',
        'POSTE_ITALIA',
        'SAGAWA_KYUU_BIN',
        'STAR_TRACK_EXPRESS',
        'US_DTDC',
        'US_STARTRACK',
        'ISR_ISRAEL_POST',
        'BE_MONDIAL',
        'B_2_CEUROPE',
        'PHL_2_GO',
        'PHL_AIR_21',
        'PT_SPANISH_SEUR',
        'ES_SPANISH_SEUR',
        'SG_DPEX',
        'CH_IMX',
        'DHLG',
        'RUSTON',
        'MIKROPAKKET',
        'XPOST',
        'PAN_ASIA',
        'PARCELONE',
        'SPEEDEE',
        'VENIPAK',
        'CROSHOT',
        'SHREENANDANCOURIER',
        'EPST_GLBL',
        'NEWGISTICS',
        'POST_SLOVENIA',
        'JERSEY_POST',
        'WMG',
        'BOMBINOEXP',
        'XQ_EXPRESS',
        'FURDECO',
        'LEGION_EXPRESS',
        'YDH_EXPRESS',
        'LHT_EXPRESS',
        'SOUTH_AFRICAN_POST_OFFICE',
        'GRUPO',
        'SPOTON',
        'DIMERCO',
        'INTERPARCEL_UK',
        'ABCUSTOM',
        'IND_DELIVREE',
        'GLOBAL_ABF',
        'CN_BESTEXPRESS',
        'DX_SFTP',
        'PICKUPP_MYS',
        'XPERT_DELIVERY',
        'FMX',
        'HELLMANN',
        'DHL_REFR',
        'DHL_HK',
        'SHIP_IT_ASIA',
        'KERRY_ECOMMERCE',
        'GOJEK',
        'FRETERAPIDO',
        'YODEL_INTNL',
        'CFL_LOGISTICS',
        'PITNEY_BOWES',
        'ZA_SPECIALISED_FREIGHT',
        'JANCO',
        'XPRESSEN_DK',
        'YTO',
        'RPD2MAN',
        'SEUR_SP_API',
        'DELIVERYONTIME',
        'WISE_EXPRESS',
        'JINSUNG',
        'JTEXPRESS_VN',
        'CHUKOU1',
        'TRANS_KARGO',
        'FEDEX_INTL_MLSERV',
        'SWISHIP_DE',
        'IVOY_WEBHOOK',
        'AIRMEE_WEBHOOK',
        'VAMOX',
        'FIRSTMILE',
        'AMS_GRP',
        'FASTWAY_IR',
        'HH_EXP',
        'HRPARCEL',
        'MYS_MYPOST_ONLINE',
        'GESWL',
        'BLUESTAR',
        'TIPSA',
        'CDEK_TR',
        'KGMHUB',
        'INTEXPRESS',
        'DESCARTES',
        'OVERSE_EXP',
        'ONECLICK',
        'ROADRUNNER_FREIGHT',
        'GLS_CROTIA',
        'TOURLINE',
        'MRW_FTP',
        'BH_WORLDWIDE',
        'BLUEX',
        'DYLT',
        'OCS',
        'YINGNUO_LOGISTICS',
        'SIN_GLBL',
        'TUFFNELLS_REFERENCE',
        'CJPACKET',
        'MILKMAN',
        'FIEGE_NL',
        'ASIGNA',
        'ONEWORLDEXPRESS',
        'LTIANEXP',
        'KWE_GLOBAL',
        'CTC_EXPRESS',
        'LAO_POST',
        'EU_IMX',
        'GLS_SLOV',
        'AMAZON',
        'MORE_LINK',
        'JX',
        'MYS_EMS',
        'EASY_MAIL',
        'ADUIEPYLE',
        'GB_PANTHER',
        'SG_DETRACK',
        'EXPRESSSALE',
        'DICOM',
        'MATDESPATCH',
        'TRUNKRS_WEBHOOK',
        'WESTBANK_COURIER',
        'MBW',
        'KHM_CAMBODIA_POST',
        'FEDEX_CROSSBORDER',
        'JANIO',
        'SINOTRANS',
        'BRT_IT_PARCELID',
        'A1POST',
        'DHL_SUPPLY_CHAIN',
        'TAZMANIAN_FREIGHT',
        'TOPYOU',
        'PALEXPRESS',
        'SAIA_FREIGHT',
        'CN_WEDO',
        'FULFILLME',
        'SG_QXPRESS',
        'UPS_REFERENCE',
        'NHANS_SOLUTIONS',
        'CARIBOU',
        'LOCUS_WEBHOOK',
        'DSV',
        'CN_GOFLY',
        'COORDINADORA',
        'P2P_TRC',
        'ANDREANI',
        'DIRECTPARCELS',
        'DOORA',
        'FEDEX_POLAND',
        'INTERPARCEL_NZ',
        'XDP_UK_REFERENCE',
        'ETOMARS',
        'CN_JCEX',
        'IND_ECOM',
        'FAR_INTERNATIONAL',
        'ESP_ENVIALIA',
        'IDEXPRESS',
        'GANGBAO',
        'SMSA_EXPRESS',
        'NEWAY',
        'DEX_I',
        'DESIGNERTRANSPORT_WEBHOOK',
        'BUDBEE_WEBHOOK',
        'GLS_SLOVEN',
        'PARCELLED_IN',
        'COPA_COURIER',
        'GSI_EXPRESS',
        'CON_WAY',
        'BROUWER_TRANSPORT',
        'TOLL_NZ',
        'CPEX',
        'ECHO',
        'FEDEX_FR',
        'XDE_WEBHOOK',
        'TOLOS',
        'BORDEREXPRESS',
        'GIAO_HANG',
        'MAILPLUS_JPN',
        'GEODIS_ESPACE',
        'TNT_UK_REFR',
        'DOORDASH_WEBHOOK',
        'KEC',
        'CJ_HK_INTERNATIONAL',
        'HELTHJEM',
        'ZA_COURIERIT',
        'SFB2C',
        'FREIGHTQUOTE',
        'FR_EXAPAQ',
        'LANDMARK_GLOBAL_REFERENCE',
        'PARCEL2GO',
        'DELNEXT',
        'TCK_EXPRESS',
        'ENDEAVOUR_DELIVERY',
        'NANJINGWOYUAN',
        'HEPPNER_FR',
        'PICKRR',
        'FONSEN',
        'APC_OVERNIGHT_CONNUM',
        'STAR_TRACK_NEXT_FLIGHT',
        'UPS_FREIGHT',
        'DAJIN',
        'POSTA_PLUS',
        'CEVA',
        'ORANGE_DS',
        'ANSERX',
        'JS_EXPRESS',
        'PADTF',
        'GAC',
        'EZSHIP',
        'GEIS',
        'SYPOST',
        'AMAZON_SHIP_MCF',
        'SF_EX',
        'YUSEN',
        'ESP_MRW',
        'BRING',
        'PAGO',
        'AO_COURIER',
        'GBA',
        'DIAMOND_EUROGISTICS',
        'NEWEGGEXPRESS',
        'LALAMOVE',
        'SPEEDCOURIERS_GR',
        'CORPORATECOURIERS_WEBHOOK',
        'FORRUN',
        'PICKUP',
        'BOND',
        'ECMS',
        'INTELIPOST',
        'SK_POSTA',
        'FLASHEXPRESS',
        'FETCHR_WEBHOOK',
        'CN_STO',
        'SEKO_SFTP',
        'THEDELIVERYGROUP',
        'CELLO_SQUARE',
        'HOME_DELIVERY_SOLUTIONS',
        'DPD_HGRY',
        'KERRYTTC_VN',
        'TARRIVE',
        'JOYING_BOX',
        'COLLIVERY',
        'TOTAL_EXPRESS',
        'ZJS_EXPRESS',
        'STARKEN',
        'MAINFREIGHT',
        'IND_FIRSTFLIGHT',
        'BE_BPOST',
        'DEMANDSHIP',
        'CN_DPEX',
        'ACSWORLDWIDE',
        'LOGISTERS',
        'GOGLOBALPOST',
        'AMSTAN',
        'OKAYPARCEL',
        'I_DIKA',
        'ENVIALIA_REFERENCE',
        'PAACK_WEBHOOK',
        'GRAB_WEBHOOK',
        'PARCELPOINT',
        'ICUMULUS',
        'FDSEXPRESS',
        'DAIGLOBALTRACK',
        'CNDEXPRESS',
        'GLOBAL_IPARCEL',
        'AMAZON_FBA_SWISHIP',
        'WYNGS',
        'YURTICI_KARGO',
        'CN_PAYPAL_PACKAGE',
        'PARCEL_2_POST',
        'ZYLLEM',
        'VIA_EXPRESS',
        'WIZMO',
        'TIGFREIGHT',
        'PIL_LOGISTICS',
        'ZTO_EXPRESS',
        'HEPPNER',
        'GENERAL_OVERNIGHT',
        'HAPPY2POINT',
        'ARCO_SPEDIZIONI',
        'CHITCHATS',
        'IML',
        'SMOOTH',
        'INTEL_VALLEY',
        'CLE_LOGISTICS',
        'FIEGE',
        'MX_CARGO',
        'ZIINGFINALMILE',
        'TCS',
        'DAYTON_FREIGHT',
        'ROADBULL',
        'YODEL_DIR',
        'STONE3PL',
        'PARCELPAL_WEBHOOK',
        'DHL_ECOMERCE_ASA',
        'SIMPLYPOST',
        'KY_EXPRESS',
        'SHENZHEN',
        'UC_EXPRE',
        'US_LASERSHIP',
        'DIDADI',
        'DYNALOGIC',
        'DBSCHENKER_B2B',
        'MXE',
        'PFCEXPRESS',
        'WHISTL',
        'CAE_DELIVERS',
        'WEPOST',
        'ALLIEDEXPRESS',
        'SHIPPIT',
        'DDEXPRESS',
        'ARAMEX_AU',
        'TFM',
        'BNEED',
        'M_XPRESS',
        'HK_TGX',
        'LATVIJAS_PASTS',
        'HDB_BOX',
        'VIAEUROPE',
        'CORREO_UY',
        'CLEVY_LINKS',
        'IBEONE',
        'J_NET',
        'RCL',
        '6LS',
        'CGS_EXPRESS',
        'BLR_BELPOST',
        'BIRDSYSTEM',
        'DOBROPOST',
        'SAP_EXPRESS',
        'WEASHIP',
        'SONICTL',
        'KWT',
        'AFLLOG_FTP',
        'IND_SAFEEXPRESS',
        'TOPHATTEREXPRESS',
        'SEINO',
        'MGLOBAL',
        'SZENDEX',
        'AVERITT',
        'DBSCHENKER_SV',
        'LEADER',
        'AO_DEUTSCHLAND',
        '2EBOX',
        'EU_FLEET_SOLUTIONS',
        'SG_SPEEDPOST',
        'PCFCORP',
        'AERONET',
        'LINKBRIDGE',
        'DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET',
        'PRIMAMULTICIPTA',
        'ISR_POST_DOMESTIC',
        'COUREX',
        'ZAJIL_EXPRESS',
        'BESTWAYPARCEL',
        'COLLECTCO',
        'AEX',
        'JTEXPRESS',
        'FEDEX_UK',
        'USHIP',
        'ROUTIFIC_WEBHOOK',
        'GLOBAL_EXPRESS',
        'BRT_IT_SENDER_REF',
        'GLOBAVEND',
        'PIXSELL',
        'SHIPTOR',
        'CDEK',
        'VNM_VIETTELPOST',
        'PHL_AIR21',
        'PALLET_NETWORK',
        'CJ_CENTURY',
        'UK_XDP',
        'GSO',
        'VIWO',
        'SKYBOX',
        'PAPER_EXPRESS',
        'KERRYTJ',
        'NTLOGISTICS_VN',
        'SDH_SCM',
        'PALLETWAYS',
        'NOX_NACHTEXPRESS',
        'ZINC',
        'DPE_SOUTH_AFRC',
        'LOGISTIKA',
        'CELERITAS',
        'PRESSIODE',
        'SHREE_MARUTI',
        'PARCELINKLOGISTICS',
        'EFEX',
        'LOTTE',
        'LONESTAR',
        'GB_NORSK',
        'APRISAEXPRESS',
        'BEL_RS',
        'OSM_WORLDWIDE',
        'SAILPOST',
        'MAILAMERICAS',
        'WESTGATE_GL',
        'DTD_EXPR',
        'ALFATREX',
        'THABIT_LOGISTICS',
        'PROMEDDELIVERY',
        'PAQUETEXPRESS',
        'NEWZEALAND_COURIERS',
        'LIEFERY',
        'JOOM_LOGIS',
        'STRECK_TRANSPORT',
        'HCT_LOGISTICS',
        'ZA_FASTWAY',
        'CARRY_FLAP',
        'PONY_EXPRESS',
        'US_OLD_DOMINION',
        'ANICAM_BOX',
        'ALWAYS_EXPRESS',
        'WANBEXPRESS',
        'AUS_STARTRACK',
        'GBS_BROKER',
        'STALLIONEXPRESS',
        'RAIDEREX',
        'ALLJOY',
        'SHOPFANS',
        'KYUNGDONG_PARCEL',
        'CHAMPION_LOGISTICS',
        'PICKUPP_SGP',
        'DEALERSEND',
        'MORNING_EXPRESS',
        'NACEX',
        'THENILE_WEBHOOK',
        'JOCOM',
        'HOLISOL',
        'LBCEXPRESS_FTP',
        'CSE',
        'TFORCE_FINALMILE',
        'KURASI',
        'GEMWORLDWIDE',
        'SHIP_GATE',
        'USF_REDDAWAY',
        'SHIPTER',
        'NATIONAL_SAMEDAY',
        'APG',
        'CN_BOXC',
        'YUNEXPRESS',
        'INTEGRA2_FTP',
        'CAINIAO',
        'ECOSCOOTING',
        'DMS_MATRIX',
        'MAINWAY',
        'ASENDIA_USA',
        'PAPERFLY',
        'HOUNDEXPRESS',
        '3JMSLOGISTICS',
        'EP_BOX',
        'BOX_BERRY',
        'LICCARDI_EXPRESS',
        'PLUS_LOG_UK',
        'FULFILLA',
        'SKY_POSTAL',
        'ASE',
        'CNWANGTONG',
        'PITTOHIO',
        'MAIL_PLUS',
        'XPO_LOGISTICS',
        'WNDIRECT',
        'CLOUDWISH_ASIA',
        'ZELERIS',
        'MARA_XPRESS',
        'GIO_EXPRESS',
        'OCS_WORLDWIDE',
        'DESTINY',
        'ARK_LOGISTICS',
        'DE_DPD_DELISTRACK',
        'COMET_TECH',
        'DHL_PARCEL_RU',
        'AQUILINE',
        'PILOT_FREIGHT',
        'TNT_REFR',
        'QWINTRY',
        'DANSKE_FRAGT',
        'SHREE_ANJANI_COURIER',
        'CARRIERS',
        'AIR_CANADA_GLOBAL',
        'PRESIDENT_TRANS',
        'STEPFORWARDFS',
        'ESHIPPING',
        'SHREETIRUPATI',
        'HX_EXPRESS',
        'INDOPAKET',
        'CN_17POST',
        'K1_EXPRESS',
        'CJ_GLS',
        'MYS_GDEX',
        'NATIONEX',
        'CN_EQUICK',
        'ANJUN',
        'VIRTRANSPORT',
        'FARGOOD',
        'SMG_EXPRESS',
        'RZYEXPRESS',
        'SEFL',
        'HIPSHIPPER',
        'HDB',
        'RPXLOGISTICS',
        'MIKROPAKKET_BE',
        'KUEHNE',
        'IT_NEXIVE',
        'PTS',
        'ETS_EXPRESS',
        'SWISS_POST_FTP',
        'COLIS_PRIVE',
        'FASTRK_SERV',
        '4_72',
        'US_YRC',
        'CN_YUNDA',
        'POSTNL_INTL_3S',
        'AAA_COOPER',
        'ELIAN_POST',
        'CUBYN',
        'SAU_SAUDI_POST',
        '360LION',
        'ABXEXPRESS_MY',
        'NINJAVAN_WB',
        'ESP_PACKLINK',
        'IND_JAYONEXPRESS',
        'GB_ARROW',
        'ZES_EXPRESS',
        'IND_GOJAVAS',
        'ZEPTO_EXPRESS',
        'SKYNET_ZA',
        'KPOST',
        'ZEEK_2_DOOR',
        'DHL_FREIGHT',
        'BLUECARE',
        'BLINKLASTMILE',
        'POSTA_UKR',
        'LOGISTYX_TRANSGROUP',
        'JINDOUYUN',
        'CHROBINSON',
        'TRACKON',
        'CN_POST56',
        'GB_TUFFNELLS',
        'COURANT_PLUS',
        'SCUDEX_EXPRESS',
        'SHIPENTEGRA',
        'TRUMPCARD',
        'CHOIR_EXP',
        'ETOTAL',
        'COPE',
        'SFPLUS_WEBHOOK',
        'IND_GATI',
        'HERMES_2MANN_HANDLING',
        'CN_WISHPOST',
        'GLOBALTRANZ',
        'HKD',
        'UDS',
        'BJSHOMEDELIVERY',
        'YAKIT',
        'LEXSHIP',
        'OMNIVA',
        'SUTTON',
        'COSTMETICSNOW',
        'PANTHER_REFERENCE',
        'SFCSERVICE',
        'PFLOGISTICS',
        'LTL',
        'LOOMIS_EXPRESS',
        'PARKNPARCEL',
        'SPRING_GDS',
        'GLS_ITALY',
        'ECEXPRESS',
        'LINE',
        'INTERPARCEL_AU',
        'GEL_EXPRESS',
        'AGILITY',
        'XL_EXPRESS',
        'ADERONLINE',
        'DIRECTCOURIERS',
        'PLANZER',
        'NOX_NIGHT_TIME_EXPRESS',
        'SENDING',
        'HUODULL',
      ])
      .openapi({
        description: 'The name of the shipment carrier for the transaction for this dispute.',
        'x-enumDescriptions': [
          {
            value: 'UPS',
            description:
              '<a href="https://www.ups.com/us/en/global.page">United Parcel Service of America, Inc.</a>.',
          },
          {
            value: 'USPS',
            description: '<a href="https://www.usps.com/">United States Postal Service (USPS)</a>.',
          },
          { value: 'FEDEX', description: 'Federal Express.' },
          { value: 'AIRBORNE_EXPRESS', description: 'Airborne Express.' },
          { value: 'DHL', description: 'DHL Express.' },
          { value: 'AIRSURE', description: 'Airsure.' },
          { value: 'ROYAL_MAIL', description: 'Royal Mail.' },
          { value: 'PARCELFORCE', description: 'Parcel Force.' },
          { value: 'SWIFTAIR', description: 'Swift Air.' },
          { value: 'OTHER', description: 'Other.' },
          { value: 'UK_PARCELFORCE', description: 'Parcelforce UK.' },
          { value: 'UK_ROYALMAIL_SPECIAL', description: 'Royal Mail Special Delivery UK.' },
          { value: 'UK_ROYALMAIL_RECORDED', description: 'Royal Mail Recorded UK.' },
          { value: 'UK_ROYALMAIL_INT_SIGNED', description: 'Royal Mail International Signed.' },
          { value: 'UK_ROYALMAIL_AIRSURE', description: 'Royal Mail AirSure UK.' },
          { value: 'UK_UPS', description: 'United Parcel Service UK.' },
          { value: 'UK_FEDEX', description: 'Federal Express UK.' },
          { value: 'UK_AIRBORNE_EXPRESS', description: 'Airborne Express UK.' },
          { value: 'UK_DHL', description: 'DHL UK.' },
          { value: 'UK_OTHER', description: 'Other - UK.' },
          { value: 'UK_CANNOT_PROV_TRACK', description: 'Cannot provide tracking UK.' },
          { value: 'UK_CANNOT_PROVIDE_TRACKING', description: 'Cannot provide tracking - UK.' },
          {
            value: 'CA_CANADA_POST',
            description: '<a href="https://www.canadapost.ca/cpc/en/home.page">Canada Post</a>.',
          },
          { value: 'CA_PUROLATOR', description: 'Purolator Canada.' },
          { value: 'CA_CANPAR', description: 'Canpar Courier Canada.' },
          { value: 'CA_LOOMIS', description: 'Loomis Express Canada.' },
          { value: 'CA_TNT', description: 'TNT Express Canada.' },
          { value: 'TNT', description: 'TNT Global.' },
          { value: 'CA_OTHER', description: 'Other - Canada.' },
          { value: 'CA_CANNOT_PROV_TRACK', description: 'Cannot provide tracking Canada.' },
          { value: 'DE_DP_DHL_WITHIN_EUROPE', description: 'DHL Parcel Europe.' },
          { value: 'DE_DP_DHL_T_AND_T_EXPRESS', description: 'DHL T and T Express.' },
          { value: 'DE_DHL_DP_INTL_SHIPMENTS', description: 'DHL DP International shipments.' },
          { value: 'CA_CANNOT_PROVIDE_TRACKING', description: 'Cannot provide tracking - Canada.' },
          {
            value: 'DE_GLS',
            description:
              '<a href="https://gls-group.eu/">General Logistics Systems (GLS) Germany</a>.',
          },
          { value: 'DE_DPD_DELISTACK', description: 'DPD Tracking Germany.' },
          { value: 'DE_HERMES', description: 'Hermes Germany.' },
          { value: 'DE_UPS', description: 'United Parcel Service Germany.' },
          { value: 'DE_FEDEX', description: 'Federal Express Germany.' },
          { value: 'DE_TNT', description: 'TNT Germany.' },
          { value: 'DE_OTHER', description: 'Other - Germany.' },
          { value: 'FR_CHRONOPOST', description: 'Chronopost France.' },
          { value: 'FR_COLIPOSTE', description: 'Coliposte France.' },
          { value: 'FR_DHL', description: 'DHL France.' },
          { value: 'FR_UPS', description: 'United Parcel Service France.' },
          { value: 'FR_FEDEX', description: 'Federal Express France.' },
          { value: 'FR_TNT', description: 'TNT France.' },
          {
            value: 'FR_GLS',
            description:
              '<a href="https://gls-group.eu/">General Logistics Systems (GLS) France</a>.',
          },
          { value: 'FR_OTHER', description: 'Other - France.' },
          { value: 'IT_POSTE_ITALIA', description: 'Poste Italia.' },
          { value: 'IT_DHL', description: 'DHL Italy.' },
          { value: 'IT_UPS', description: 'United Parcel Service Italy.' },
          { value: 'IT_FEDEX', description: 'Federal Express Italy.' },
          { value: 'IT_TNT', description: '<a href="https://www.tnt.it/">TNT Italy</a>.' },
          {
            value: 'IT_GLS',
            description:
              '<a href="https://gls-group.eu/">General Logistics Systems (GLS) Italy</a>.',
          },
          { value: 'IT_OTHER', description: 'Other Italy.' },
          { value: 'AU_AUSTRALIA_POST_EP_PLAT', description: 'Australia Post EP Plat.' },
          { value: 'AU_AUSTRALIA_POST_EPARCEL', description: 'Australia Post Eparcel.' },
          { value: 'AU_AUSTRALIA_POST_EMS', description: 'Australia Post EMS.' },
          { value: 'AU_DHL', description: 'DHL Australia.' },
          { value: 'AU_STAR_TRACK_EXPRESS', description: 'StarTrack Express Australia.' },
          { value: 'AU_UPS', description: 'United Parcel Service Australia.' },
          { value: 'AU_FEDEX', description: 'Federal Express Australia.' },
          { value: 'AU_TNT', description: 'TNT Australia.' },
          { value: 'AU_TOLL_IPEC', description: 'Toll IPEC Australia.' },
          { value: 'AU_OTHER', description: 'Other - Australia.' },
          { value: 'FR_SUIVI', description: 'Suivi FedEx France.' },
          { value: 'IT_EBOOST_SDA', description: 'Poste Italiane SDA.' },
          { value: 'ES_CORREOS_DE_ESPANA', description: 'Correos de Espana.' },
          { value: 'ES_DHL', description: 'DHL Spain.' },
          { value: 'ES_UPS', description: 'United Parcel Service Spain.' },
          { value: 'ES_FEDEX', description: 'Federal Express Spain.' },
          { value: 'ES_TNT', description: 'TNT Spain.' },
          { value: 'ES_OTHER', description: 'Other - Spain.' },
          { value: 'AT_AUSTRIAN_POST_EMS', description: 'EMS Express Mail Service Austria.' },
          { value: 'AT_AUSTRIAN_POST_PPRIME', description: 'Austrian Post Prime.' },
          { value: 'BE_CHRONOPOST', description: 'Chronopost Belgium.' },
          { value: 'BE_TAXIPOST', description: 'Taxi Post.' },
          { value: 'CH_SWISS_POST_EXPRES', description: 'Swiss Post Express.' },
          { value: 'CH_SWISS_POST_PRIORITY', description: 'Swiss Post Priority.' },
          { value: 'CN_CHINA_POST', description: 'China Post.' },
          { value: 'HK_HONGKONG_POST', description: 'Hong Kong Post.' },
          {
            value: 'IE_AN_POST_SDS_EMS',
            description: 'Post SDS EMS Express Mail Service Ireland.',
          },
          { value: 'IE_AN_POST_SDS_PRIORITY', description: 'Post SDS Priority Ireland.' },
          { value: 'IE_AN_POST_REGISTERED', description: 'Post Registered Ireland.' },
          { value: 'IE_AN_POST_SWIFTPOST', description: 'Swift Post Ireland.' },
          { value: 'IN_INDIAPOST', description: 'India Post.' },
          { value: 'JP_JAPANPOST', description: 'Japan Post.' },
          { value: 'KR_KOREA_POST', description: 'Korea Post.' },
          { value: 'NL_TPG', description: 'TPG Post Netherlands.' },
          { value: 'SG_SINGPOST', description: 'SingPost Singapore.' },
          { value: 'TW_CHUNGHWA_POST', description: 'Chunghwa POST Taiwan.' },
          { value: 'CN_CHINA_POST_EMS', description: 'China Post EMS Express Mail Service.' },
          { value: 'CN_FEDEX', description: 'Federal Express China.' },
          { value: 'CN_TNT', description: 'TNT China.' },
          { value: 'CN_UPS', description: 'United Parcel Service China.' },
          { value: 'CN_OTHER', description: 'Other - China.' },
          { value: 'NL_TNT', description: 'TNT Netherlands.' },
          { value: 'NL_DHL', description: 'DHL Netherlands.' },
          { value: 'NL_UPS', description: 'United Parcel Service Netherlands.' },
          { value: 'NL_FEDEX', description: 'Federal Express Netherlands.' },
          { value: 'NL_KIALA', description: 'KIALA Netherlands.' },
          { value: 'BE_KIALA', description: 'Kiala Point Belgium.' },
          { value: 'PL_POCZTA_POLSKA', description: 'Poczta Polska.' },
          { value: 'PL_POCZTEX', description: 'Pocztex.' },
          { value: 'PL_GLS', description: 'General Logistics Systems Poland.' },
          { value: 'PL_MASTERLINK', description: 'Masterlink Poland.' },
          { value: 'PL_TNT', description: 'TNT Express Poland.' },
          { value: 'PL_DHL', description: 'DHL Portugal.' },
          { value: 'PL_UPS', description: 'United Parcel Service Poland.' },
          { value: 'PL_FEDEX', description: 'Federal Express Poland.' },
          { value: 'JP_SAGAWA_KYUU_BIN', description: 'Sagawa Kyuu Bin Japan.' },
          { value: 'JP_NITTSU_PELICAN_BIN', description: 'Nittsu Pelican Bin Japan.' },
          { value: 'JP_KURO_NEKO_YAMATO_UNYUU', description: 'Kuro Neko Yamato Unyuu Japan.' },
          { value: 'JP_TNT', description: 'TNT Japan.' },
          { value: 'JP_DHL', description: 'DHL Japan.' },
          { value: 'JP_UPS', description: 'United Parcel Service Japan.' },
          { value: 'JP_FEDEX', description: 'Federal Express Japan.' },
          { value: 'NL_PICKUP', description: 'Pickup Netherlands.' },
          { value: 'NL_INTANGIBLE', description: 'Intangible Netherlands.' },
          { value: 'NL_ABC_MAIL', description: 'ABC Mail Netherlands.' },
          { value: 'HK_FOUR_PX_EXPRESS', description: '4PX Express Hong Kong.' },
          { value: 'HK_FLYT_EXPRESS', description: 'Flyt Express Hong Kong.' },
          { value: 'US_ASCENDIA', description: 'Ascendia US.' },
          { value: 'US_ENSENDA', description: 'Ensenda US.' },
          { value: 'US_GLOBEGISTICS', description: 'Globeistics US.' },
          { value: 'US_ONTRAC', description: 'Ontrac US.' },
          { value: 'RRDONNELLEY', description: 'RR Donnelley.' },
          { value: 'ASENDIA_UK', description: 'Asendia UK.' },
          {
            value: 'UK_COLLECTPLUS',
            description: '<a href="https://www.collectplus.co.uk/">CollectPlus UK</a>.',
          },
          { value: 'UK_DPD', description: 'DPD UK.' },
          { value: 'UK_HERMESWORLD', description: 'Hermesworld UK.' },
          { value: 'UK_INTERLINK_EXPRESS', description: 'Interlink Express UK.' },
          { value: 'UK_TNT', description: 'TNT UK.' },
          { value: 'UK_UK_MAIL', description: '<a href="https://www.ukmail.com/">UK Mail</a>.' },
          { value: 'UK_YODEL', description: '<a href="https://www.yodel.co.uk/">Yodel UK</a>.' },
          {
            value: 'BUYLOGIC',
            description: '<a href="https://www.aftership.com/couriers/buylogic">Buylogic</a>.',
          },
          { value: 'CN_EMS', description: 'EMS China.' },
          { value: 'CHINA_POST', description: 'China Post.' },
          { value: 'CNEXPS', description: 'CN Express China.' },
          { value: 'CPACKET', description: 'Cpacket.' },
          { value: 'CUCKOOEXPRESS', description: 'Cuckoo Express.' },
          { value: 'CN_EC', description: 'EC China.' },
          { value: 'CN_EMPS', description: 'EMPS China.' },
          { value: 'DE_ASENDIA', description: 'Asendia Germany.' },
          { value: 'UK_DELTEC', description: 'Deltec UK.' },
          { value: 'DE_DEUTSCHE', description: 'Deutsche Germany.' },
          { value: 'DE_DPD', description: 'DPD Germany.' },
          { value: 'RABEN_GROUP', description: 'Raben Group.' },
          { value: 'GLOBAL_TNT', description: 'TNT Global.' },
          {
            value: 'ADSONE',
            description: '<a href="https://www.adsone.com.au/">ADSone Cumulus</a>.',
          },
          {
            value: 'AU_AU_POST',
            description: '<a href="https://auspost.com.au/">Australian Postal Corporation</a>.',
          },
          { value: 'BONDSCOURIERS', description: 'Bonds Couriers.' },
          { value: 'COURIERS_PLEASE', description: 'Couriers Please.' },
          { value: 'DTDC_AU', description: 'DTDC Australia.' },
          { value: 'AU_FASTWAY', description: 'Fastway Australia.' },
          { value: 'HUNTER_EXPRESS', description: 'Hunter Express.' },
          { value: 'SENDLE', description: 'Sendle.' },
          { value: 'AUS_TOLL', description: 'Toll Australia.' },
          { value: 'TOLL', description: '<a href="https://www.tollgroup.com/">Toll</a>.' },
          { value: 'UBI_LOGISTICS', description: 'UBI Logistics.' },
          { value: 'OMNIPARCEL', description: 'Omni Parcel.' },
          { value: 'QUANTIUM', description: 'Quantium.' },
          { value: 'CN_SF_EXPRESS', description: 'SF Express China.' },
          { value: 'SEKOLOGISTICS', description: 'Seko Logistics.' },
          { value: 'HK_TAQBIN', description: 'TA-Q-BIN Parcel Hong Kong.' },
          {
            value: 'GB_APC',
            description: '<a href="https://apc-overnight.com/">APC Overnight UK</a>.',
          },
          { value: 'CA_CANPAR_COURIER', description: 'Canpar Courier Canada.' },
          { value: 'GLOBAL_ESTES', description: 'Estes Global.' },
          { value: 'CA_GREYHOUND', description: 'Greyhound Canada.' },
          { value: 'PUROLATOR', description: 'Purolator.' },
          { value: 'US_RL', description: 'RL US.' },
          {
            value: 'IT_BRT',
            description:
              '<a href="https://www.brt.it/en/bartolini_services/italy_service.do">BRT Corriere Espresso Italy</a>.',
          },
          { value: 'DMM_NETWORK', description: 'DMM Network.' },
          { value: 'IT_FERCAM', description: 'Fercam Italy.' },
          { value: 'HERMES_IT', description: 'Hermes Italy.' },
          { value: 'IT_POSTE_ITALIANE', description: 'Poste Italiane.' },
          {
            value: 'IT_SDA',
            description:
              '<a href="https://www.sda.it/SITO_SDA-INSIDEX-WEB/pages/Home_it/119">SDA Express Courier</a>.',
          },
          { value: 'IT_SGT', description: 'SGT Corriere Espresso Italy.' },
          { value: 'GLOBAL_SKYNET', description: 'Skynet Global.' },
          { value: 'FR_BERT', description: '<a href="https://bert.fr/">Bert France</a>.' },
          { value: 'FR_COLIS', description: 'Colis France.' },
          { value: 'FR_GEODIS', description: 'Geodis France.' },
          { value: 'FR_LAPOSTE', description: 'Laposte France.' },
          { value: 'FR_TELIWAY', description: 'Teliway France.' },
          { value: 'DPD_POLAND', description: 'DPD Poland.' },
          { value: 'INPOST_PACZKOMATY', description: 'InPost Paczkomaty.' },
          { value: 'POL_POCZTA', description: 'Poczta Poland.' },
          { value: 'POL_SIODEMKA', description: 'Siodemka Poland.' },
          {
            value: 'ESP_CORREOS',
            description:
              '<a href="https://www.correos.es/ss/Satellite/site/pagina-inicio/info">Sociedad Estatal Correos y Telégrafos</a>.',
          },
          {
            value: 'ES_CORREOS',
            description:
              '<a href="https://www.correos.es/ss/Satellite/site/pagina-inicio/info">Sociedad Estatal Correos y Telégrafos</a>.',
          },
          {
            value: 'ESP_NACEX',
            description:
              '<a href="https://www.nacex.es/cambiarIdioma.do?idioma=EN">Nacex Spain</a>.',
          },
          {
            value: 'ESP_ASM',
            description:
              '<a href="https://www.parcelmonitor.com/track-spain/">Parcel Monitor Spain</a>.',
          },
          { value: 'ESP_REDUR', description: '<a href="https://www.redur.es/">Redur Spain</a>.' },
          {
            value: 'CBL_LOGISTICA',
            description: '<a href="https://www.cbl-logistica.com">CBL Logística</a>.',
          },
          { value: 'EKART', description: 'Ekart.' },
          {
            value: 'IND_DELHIVERY',
            description: '<a href="https://www.delhivery.com/">Delhivery India</a>.',
          },
          {
            value: 'IND_BLUEDART',
            description: '<a href="https://www.bluedart.com/">Blue Dart Express DHL</a>.',
          },
          { value: 'IND_DTDC', description: 'DTDC India.' },
          { value: 'IND_PROFESSIONAL_COURIERS', description: 'Professional Couriers India.' },
          { value: 'IND_REDEXPRESS', description: 'Red Express India.' },
          { value: 'IND_XPRESSBEES', description: 'XpressBees India.' },
          { value: 'IND_DOTZOT', description: '<a href="https://dotzot.in/">DotZot India</a>.' },
          { value: 'THA_KERRY', description: 'Kerry Thailand.' },
          { value: 'SENDIT', description: 'SendIt.' },
          {
            value: 'ACOMMERCE',
            description: '<a href="https://www.acommerce.asia/">aCommerce</a>.',
          },
          { value: 'NINJAVAN_THAI', description: 'Ninjavan Thailand.' },
          {
            value: 'NIM_EXPRESS',
            description: '<a href="https://www.nimexpress.com/web/p/">Nim Express</a>.',
          },
          { value: 'THA_THAILAND_POST', description: 'Thailand Post.' },
          { value: 'THA_DYNAMIC_LOGISTICS', description: 'Dynamic Logistics Thailand.' },
          { value: 'ALPHAFAST', description: 'Alphafast.' },
          { value: 'FASTRAK_TH', description: 'Fastrak Thailand.' },
          { value: 'EPARCEL_KR', description: 'EParcel Korea.' },
          {
            value: 'CJ_KOREA_THAI',
            description:
              '<a href="https://www.cjlogistics.com/en/network/th-th">CJ Logistics in Thailand</a>.',
          },
          { value: 'RINCOS', description: 'Rincos.' },
          { value: 'KOR_KOREA_POST', description: 'Korea Post.' },
          { value: 'KOR_CJ', description: 'CJ Korea.' },
          { value: 'KOR_ECARGO', description: 'Ecargo Korea.' },
          {
            value: 'SREKOREA',
            description: '<a href="https://www.srekorea.co.kr/home/">SRE Korea</a>.',
          },
          {
            value: 'ROCKETPARCEL',
            description: '<a href="https://www.rocketparcel.com/">Rocket Parcel International</a>.',
          },
          {
            value: 'BG_BULGARIAN_POST',
            description: '<a href="https://www.bgpost.bg/">Bulgarian Post</a>.',
          },
          {
            value: 'JPN_JAPAN_POST',
            description: '<a href="https://www.post.japanpost.jp/index_en.html">Japan Post</a>.',
          },
          { value: 'JPN_YAMATO', description: 'Yamato Japan.' },
          { value: 'JPN_SAGAWA', description: 'Sagawa Japan.' },
          { value: 'TUR_PTT', description: 'PTT Turkey.' },
          { value: 'AUT_AUSTRIAN_POST', description: 'Austrian Post.' },
          { value: 'AU_AUSTRIAN_POST', description: 'Austrian Post.' },
          { value: 'RUSSIAN_POST', description: 'Russian Post.' },
          { value: 'BEL_DHL', description: 'DHL Belgium.' },
          { value: 'FR_MONDIAL', description: 'Mondial France.' },
          { value: 'EU_BPOST', description: '<a href="https://parcel.bpost.be/">bpost</a>.' },
          { value: 'LANDMARK_GLOBAL', description: 'Landmark Global.' },
          { value: 'IDN_POS', description: 'Indonesia Post.' },
          { value: 'IDN_POS_INT', description: 'Indonesia Post International.' },
          { value: 'IDN_JNE', description: 'JNE Indonesia.' },
          { value: 'IDN_PANDU', description: 'Pandu Indonesia.' },
          { value: 'RPX', description: 'RPX International.' },
          { value: 'IDN_TIKI', description: 'Tiki Indonesia.' },
          { value: 'IDN_LION_PARCEL', description: 'Lion Parcel Indonesia.' },
          { value: 'NINJAVAN_ID', description: 'Ninjavan Indonesia.' },
          { value: 'IDN_WAHANA', description: 'Wahana Indonesia.' },
          { value: 'IDN_FIRST_LOGISTICS', description: 'First Logistics Indonesia.' },
          {
            value: 'UK_AN_POST',
            description: '<a href="https://addresspal.anpost.ie/">AddressPay UK</a>.',
          },
          { value: 'DPD', description: 'DPD Global.' },
          { value: 'UK_FASTWAY', description: 'Fastway UK.' },
          { value: 'UK_NIGHTLINE', description: 'Nightline UK.' },
          { value: 'WISELOADS', description: 'Wiseloads.' },
          { value: 'GR_ELTA', description: 'Elta Greece.' },
          { value: 'GRC_ACS', description: 'ACS Greece.' },
          { value: 'GR_GENIKI', description: 'Geniki Greece.' },
          { value: 'NINJAVAN_PHILIPPINES', description: 'Ninja Van Philippines.' },
          { value: 'PHL_XEND_EXPRESS', description: 'Xend Express Philippines.' },
          { value: 'PHL_LBC', description: 'LBC Philippines.' },
          { value: 'PHL_JAMEXPRESS', description: 'JamExpress Philippines.' },
          { value: 'PHL_AIRSPEED', description: 'Airspeed Philippines.' },
          { value: 'PHL_RAF', description: 'RAF Philippines.' },
          { value: 'DIRECTLOG', description: 'Directlog.' },
          { value: 'BRA_CORREIOS', description: 'Correios Brazil.' },
          { value: 'NLD_DHL', description: 'DHL Netherlands.' },
          {
            value: 'NLD_POSTNL',
            description: '<a href="https://www.postnl.com">PostNL Netherlands</a>.',
          },
          {
            value: 'NLD_GLS',
            description:
              '<a href="https://gls-group.eu/">General Logistics Systems (GLS) Netherlands</a>.',
          },
          { value: 'NLD_TRANSMISSION', description: 'Transmission Netherlands.' },
          {
            value: 'CORREOS_DE_MEXICO',
            description:
              '<a href="https://www.correosdemexico.com.mx/Paginas/Inicio.asp/">Mex Post Correos de Mexico</a>.',
          },
          {
            value: 'MEX_ESTAFETA',
            description: '<a href="https://www.estafeta.com/">Estafeta Mexico</a>.',
          },
          { value: 'MEX_SENDA', description: 'Senda Mexico.' },
          { value: 'MEX_REDPACK', description: 'Redpack Mexico.' },
          { value: 'MEX_AEROFLASH', description: 'Aeroflash Mexico.' },
          { value: 'NATIONWIDE_MY', description: 'Nationwide Malaysia.' },
          {
            value: 'MYS_MYS_POST',
            description: '<a href="https://www.pos.com.my/">Pos Malaysia</a>.',
          },
          { value: 'MYS_TAQBIN', description: 'TA-Q-BIN Parcel Malaysia.' },
          { value: 'MYS_SKYNET', description: 'Skynet Malaysia.' },
          { value: 'MYS_CITYLINK', description: 'Citylink Malaysia.' },
          { value: 'MYS_AIRPAK', description: 'Airpak Malaysia.' },
          { value: 'NINJAVAN_MY', description: 'Ninjavan Malaysia.' },
          { value: 'KANGAROO_MY', description: 'Kangaroo Express Malaysia.' },
          { value: 'VNM_VIETNAM_POST', description: 'Vietnam Post.' },
          { value: 'VNPOST_EMS', description: 'Post EMS Vietnam.' },
          {
            value: 'PRT_INT_SEUR',
            description: '<a href="https://www.seur.com/en/">Internationational Seur Portugal</a>.',
          },
          {
            value: 'PRT_CTT',
            description: '<a href="https://www.cttexpresso.pt/home/">CTT Expresso Portugal</a>.',
          },
          { value: 'PRT_CHRONOPOST', description: 'Chronopost Portugal.' },
          {
            value: 'PRT_SEUR',
            description: '<a href="https://www.seur.com/pt/">Seur Portugal</a>.',
          },
          { value: 'ADICIONAL', description: 'Adicional.' },
          { value: 'LTU_LIETUVOS', description: 'Lietuvos paštas Lithuania.' },
          { value: 'DPEX', description: '<a href="https://dpex.com/">DPEX Worldwide</a>.' },
          { value: 'LWE_HK', description: 'LWE Hong Kong.' },
          { value: 'SG_SG_POST', description: 'Singapore Post.' },
          { value: 'SG_TAQBIN', description: 'TA-Q-BIN Parcel Singapore.' },
          { value: 'SG_NINJAVAN', description: 'Ninjavan Singapore.' },
          { value: 'SG_ZALORA', description: 'Zalora Singapore.' },
          { value: 'JET_SHIP', description: 'Jetship.' },
          { value: 'SG_PARCELPOST', description: 'Parcel Post Singapore.' },
          { value: 'CHE_SWISS_POST', description: 'Swiss Post.' },
          { value: 'ASENDIA_HK', description: 'Asendia Hong Kong.' },
          { value: 'HUN_MAGYAR', description: '<a href="https://www.posta.hu/">Magyar Posta</a>.' },
          { value: 'POSTNORD_LOGISTICS', description: 'Post Nord Logistics.' },
          {
            value: 'SWE_DIRECTLINK',
            description: '<a href="https://www.directlink.com/">Direct Link Sweden</a>.',
          },
          {
            value: 'SWE_POSTNORD',
            description: '<a href="https://www.postnord.se/">PostNord Sverige</a>.',
          },
          {
            value: 'SWE_DB',
            description: '<a href="https://www.dbschenker.com/se-sv">DB Schenker Sweden</a>.',
          },
          {
            value: 'CZE_CESKA',
            description: '<a href="https://www.ceskaposta.cz/en/">Česká pošta</a>.',
          },
          {
            value: 'NZ_NZ_POST',
            description:
              '<a href="https://www.nzpost.co.nz/tools/tracking">New Zealand Post Limited (NZ)</a>.',
          },
          {
            value: 'NZ_COURIER_POST',
            description:
              '<a href="https://www.courierpost.co.nz/track/track-and-trace/">CourierPost New Zealand</a>.',
          },
          { value: 'FASTWAY_NZ', description: 'Fastway New Zealand.' },
          {
            value: 'TW_TAIWAN_POST',
            description:
              '<a href="https://www.post.gov.tw/post/internet/index.jsp">Chunghwa Post</a>.',
          },
          { value: 'SPREADEL', description: 'Spreadel.' },
          {
            value: 'ARE_EMIRATES_POST',
            description:
              '<a href="https://www.epg.gov.ae/_en/index.xhtml">Emirates Post Group</a>.',
          },
          {
            value: 'AXL',
            description:
              '<a href="https://couriertrackingrobo.com/track/company-details.php?id=axl">AXL Express & Logistics</a>.',
          },
          {
            value: 'CYP_CYPRUS_POST',
            description: '<a href="https://www.cypruspost.post/en/home">Cyprus Post</a>.',
          },
          {
            value: 'HRV_HRVATSKA',
            description: '<a href="https://www.posta.hr/">Hrvatska Pošta</a>.',
          },
          {
            value: 'NOR_POSTEN',
            description: '<a href="https://www.posten.no/en/">Posten Norge</a>.',
          },
          {
            value: 'RAM',
            description:
              '<a href="https://www.jpshipping.co.uk/services/personal_effects">JP RAM Shipping</a>.',
          },
          {
            value: 'THECOURIERGUY',
            description: '<a href="https://www.thecourierguy.co.za/">The Courier Guy</a>.',
          },
          {
            value: 'ZA_FASTWAY',
            description: '<a href="http://www.fastway.co.za/">Fastway Couriers (South Africa)</a>.',
          },
          { value: 'DPE_EXPRESS', description: 'DPE Express.' },
          { value: 'POSTI', description: 'Posti.' },
          { value: 'MATKAHUOLTO', description: 'Matkahuoloto.' },
          { value: 'GLOBAL_DHL', description: 'DHL Global.' },
          {
            value: 'ARG_CORREO',
            description: '<a href="https://www.correoargentino.com.ar/">Correo Argentino</a>.',
          },
          { value: 'ARG_OCA', description: '<a href="https://www.oca.com.ar/">OCA Argentia</a>.' },
          {
            value: 'POST_SERBIA',
            description: '<a href="https://www.posta.rs/default-eng.asp">Post of Serbia</a>.',
          },
          {
            value: 'BH_POSTA',
            description: '<a href="https://www.posta.ba/en/track-trace-2/">BH POŠTA</a>.',
          },
          {
            value: 'CORREOS_CHILE',
            description: '<a href="https://www.correos.cl/SitePages/home.asp/">CorreosChile</a>.',
          },
          { value: 'APR_72', description: 'APR 72.' },
          {
            value: 'CORREOS_DE_COSTA_RICA',
            description: '<a href="https://www.correos.go.cr/">Correos de Costa Rica</a>.',
          },
          { value: 'POSTUR_IS', description: 'Postur.' },
          { value: 'SPEEDEXCOURIER', description: 'Speedex Courier.' },
          {
            value: 'ROU_POSTA',
            description: '<a href="https://www.posta-romana.ro/en">Poșta Română</a>.',
          },
          { value: 'UKR_NOVA', description: '<a href="https://novaposhta.ua/en">Nova Poshta</a>.' },
          {
            value: 'UKR_POSHTA',
            description:
              '<a href="https://ukrposhta.ua/en/vidslidkuvati-forma-poshuku">Ukrposhta - Ukraine\'s National Post</a>.',
          },
          {
            value: 'NGA_NIPOST',
            description: '<a href="https://www.nipost.gov.ng//">Nigerian Postal Service</a>.',
          },
          {
            value: 'NG_COURIERPLUS',
            description: '<a href="https://www.courierplus-ng.com/">Courier Plus Nigeria</a>.',
          },
          { value: 'ESHOPWORLD', description: 'EShopWorld.' },
          { value: 'WEBINTERPRET', description: 'WebInterpret.' },
          { value: 'HERMES', description: 'Hermes.' },
          { value: 'ABC_MAIL', description: 'ABC Mail.' },
          { value: 'ARAMEX', description: 'Aramex.' },
          {
            value: 'YANWEN',
            description: '<a href="https://www.yw56.com.cn/">Yanwen Express</a>.',
          },
          { value: 'INTERNATIONAL_BRIDGE', description: 'International Bridge.' },
          {
            value: 'SFC_LOGISTICS',
            description: '<a href="https://www.sfcservice.com/">SFC Logistics</a>.',
          },
          { value: 'BQC_EXPRESS', description: 'BQC Express.' },
          { value: 'ONE_WORLD', description: 'One World.' },
          { value: 'IT_REGISTER_MAIL', description: 'Registered Mail Italy.' },
          { value: 'WINIT', description: 'WinIt.' },
          { value: 'CONTINENTAL', description: 'Continental.' },
          {
            value: 'EFS',
            description:
              '<a href="https://www.efstrans.com/">Enterprise Freight Systems (EFS)</a>.',
          },
          { value: 'PANTOS', description: 'Pantos.' },
          {
            value: 'RELAIS_COLIS',
            description: '<a href="https://www.relaiscolis.com/">Relais Colis</a>.',
          },
          { value: 'US_DHL_EXPRESS', description: 'DHL Express US.' },
          { value: 'US_DHL_PARCEL', description: 'DHL Parcel US.' },
          {
            value: 'US_DHL_ECOMMERCE',
            description:
              '<a href="https://www.logistics.dhl/us-en/home/tracking/tracking-ecommerce.html">DHL eCommerce US</a>.',
          },
          { value: 'US_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding US.' },
          { value: 'UK_DHL_EXPRESS', description: 'DHL Express UK.' },
          { value: 'UK_DHL_PARCEL', description: 'DHL Parcel UK.' },
          { value: 'UK_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding UK.' },
          { value: 'CN_DHL_EXPRESS', description: 'DHL Express Canada.' },
          { value: 'CN_DHL_ECOMMERCE', description: 'DHL eCommerce China.' },
          { value: 'CN_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding China.' },
          { value: 'DE_DHL_EXPRESS', description: 'DHL Express Germany.' },
          { value: 'DE_DHL_PARCEL', description: 'DHL Parcel Germany.' },
          { value: 'DE_DHL_PACKET', description: 'DHL Packet Germany.' },
          { value: 'DE_DHL_ECOMMERCE', description: 'DHL eCommerce Germany.' },
          { value: 'DE_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding Germany.' },
          { value: 'DE_DHL_DEUTSCHEPOST', description: 'DHL Deutschepost Germany.' },
          { value: 'AU_DHL_EXPRESS', description: 'DHL Express Australia.' },
          { value: 'AU_DHL_ECOMMERCE', description: 'DHL eCommerce Australia.' },
          { value: 'AU_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding Australia.' },
          { value: 'HK_DHL_EXPRESS', description: 'DHL Express Hong Kong.' },
          { value: 'HK_DHL_ECOMMERCE', description: 'DHL eCommerce Hong Kong.' },
          { value: 'HK_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding Hong Kong.' },
          { value: 'CA_DHL_EXPRESS', description: 'DHL Express Canada.' },
          { value: 'CA_DHL_ECOMMERCE', description: 'DHL eCommerce Canada.' },
          { value: 'CA_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding Canada.' },
          { value: 'IT_DHL_EXPRESS', description: 'DHL Express Italy.' },
          { value: 'IT_DHL_ECOMMERCE', description: 'DHL eCommerce Italy.' },
          { value: 'IT_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding Italy.' },
          { value: 'FR_DHL_EXPRESS', description: 'DHL Express France.' },
          { value: 'FR_DHL_PARCEL', description: 'DHL Parcel France.' },
          { value: 'FR_DHL_GLOBALFORWARDING', description: 'DHL Global Forwarding France.' },
          { value: 'PL_DHL_EXPRESS', description: 'DHL Express Poland.' },
          { value: 'PL_DHL_PARCEL', description: 'DHL Parcel Poland.' },
          {
            value: 'PL_DHL_GLOBALFORWARDING',
            description:
              '<a href="https://www.logistics.dhl/pl-en/home/our-divisions/global-forwarding.html">DHL Global Forwarding Poland</a>',
          },
          {
            value: 'ABC_PACKAGE',
            description: '<a href="https://abcpkg.com/">ABC Package Express</a>.',
          },
          {
            value: 'AN_POST',
            description: '<a href="https://www.anpost.com/">An Post Ireland</a>.',
          },
          {
            value: 'APC_OVERNIGHT',
            description: '<a href="https://apc-overnight.com/">APC Overnight</a>.',
          },
          {
            value: 'ASM_ES',
            description:
              '<a href="https://www.aftership.com/es/couriers/asm">ASM Tracking Spain</a>.',
          },
          {
            value: 'AUPOST_CN',
            description:
              '<a href="https://auspost.com.au/business/shipping/international-shipping/logistics-in-china">Logistics in China</a>.',
          },
          {
            value: 'ACOMMMERCE',
            description: '<a href="https://www.acommerce.asia/">aCommerce</a>.',
          },
          {
            value: 'ADICIONAL_PT',
            description: '<a href="https://www.adicional.pt/">Adicional Logistics Portugal</a>.',
          },
          {
            value: 'AIR_21',
            description: '<a href="https://www.air21.com.ph/main/index.php">Air 21</a>.',
          },
          { value: 'AIRBORNE_EXPRESS_UK', description: 'Airborne Express UK.' },
          { value: 'AIRPAK_MY', description: 'Airpak Malaysia.' },
          { value: 'AIRSPEED', description: 'Airspeed.' },
          { value: 'ASENDIA_DE', description: 'Asendia Germany.' },
          {
            value: 'ASENDIA_US',
            description: '<a href="https://www.asendiausa.com/">Asendia USA</a>.',
          },
          { value: 'AUSTRALIA_POST', description: 'Australia Post.' },
          { value: 'TOLL_AU', description: 'Toll Australia.' },
          { value: 'AUSTRIAN_POST_EXPRESS', description: 'Austrian Post Express.' },
          { value: 'AUSTRIAN_POST', description: 'Austrian Post Registered.' },
          { value: 'B_TWO_C_EUROPE', description: 'B2C Europe.' },
          { value: 'BERT', description: '<a href="https://bert.fr/">Groupe Bert</a>.' },
          { value: 'BPOST', description: 'BPost.' },
          { value: 'BRT_IT', description: 'BRT Bartolini.' },
          { value: 'BLUEDART', description: 'Bluedart.' },
          { value: 'BONDS_COURIERS', description: 'Bonds Couriers.' },
          {
            value: 'BPOST_INT',
            description: '<a href="https://landmarkglobal.com/welcome">bpost International</a>.',
          },
          { value: 'BULGARIAN_POST', description: 'Bulgarian Post.' },
          {
            value: 'CJ_LOGISTICS',
            description: '<a href="https://www.cjlogistics.com/en/main">CJ Logistics</a>.',
          },
          { value: 'CJ_INT_MY', description: 'CJ Malaysia International.' },
          { value: 'CJ_MY', description: 'CJ Malaysia.' },
          { value: 'CJ_TH', description: 'CJ Thailand.' },
          { value: 'CANADA_POST', description: 'Canada Post.' },
          {
            value: 'CANPAR',
            description: '<a href="https://www.canpar.com/en/home.jsp">Canpar Express</a>.',
          },
          {
            value: 'CESKA_CZ',
            description: '<a href="https://www.postaonline.cz/en/trackandtrace">Česká Pošta</a>.',
          },
          {
            value: 'CHRONOPOST_FR',
            description: '<a href="https://www.chronopost.fr/en#/step-home">Chronopost France</a>.',
          },
          {
            value: 'CHRONOPOST_PT',
            description:
              '<a href="https://www.chronopost.pt/en#/step-home">Chronopost Portugal</a>.',
          },
          { value: 'CHUNGHWA_POST', description: 'Chunghwa Post.' },
          { value: 'CITYLINK_MY', description: 'CityLink Malaysia.' },
          { value: 'COLIPOSTE', description: 'Coliposte.' },
          { value: 'COLIS', description: 'Colis France.' },
          {
            value: 'COLLECTPLUS',
            description: '<a href="https://www.collectplus.co.uk/">CollectPlus</a>.',
          },
          { value: 'CORREOS_AG', description: 'Correos Argentina.' },
          { value: 'CORREOS_BR', description: 'Correos Brazil.' },
          { value: 'CORREOS_CL', description: 'Correos Chile.' },
          { value: 'CORREOS_CR', description: 'Correos De Costa Rica.' },
          { value: 'CORREOS_MX', description: 'Correos De Mexico.' },
          { value: 'CORREOS_ES', description: 'Correos De Spain.' },
          { value: 'CORREOS_EXPRESS', description: 'Correos Express.' },
          { value: 'COURIERPLUS', description: 'Courier Plus.' },
          { value: 'COURIER_POST', description: 'Courier Post.' },
          { value: 'CYPRUS_POST_CYP', description: 'Cyprus Post.' },
          { value: 'DBSCHENKER_SE', description: 'DB Schenker Sweden.' },
          { value: 'DHL_ES', description: 'DHL Spain.' },
          { value: 'DHL_ACTIVE_TRACING', description: 'DHL Active Tracing.' },
          { value: 'DHL_AU', description: 'DHL Australia.' },
          { value: 'DHL_BENELUX', description: 'DHL Benelux.' },
          { value: 'DHL_DEUTSCHE_POST', description: 'DHL Deutsche Post.' },
          { value: 'DHL_FR', description: 'DHL France.' },
          { value: 'DHL_GLOBAL_ECOMMERCE', description: 'DHL Global eCommerce.' },
          { value: 'DHL_HK', description: 'DHL Hong Kong.' },
          { value: 'DHL_IT', description: 'DHL Italy.' },
          { value: 'DHL_JP', description: 'DHL Japan.' },
          { value: 'DHL_NL', description: 'DHL Netherlands.' },
          { value: 'DHL_PACKET', description: 'DHL Packet.' },
          { value: 'DHL_PARCEL_NL', description: 'DHL Parcel Netherlands.' },
          { value: 'DHL_PARCEL_ES', description: 'DHL Parcel Spain.' },
          { value: 'DHL_PL', description: 'DHL Poland.' },
          { value: 'DHL_SG', description: 'DHL Singapore.' },
          { value: 'DHL_UK', description: 'DHL UK.' },
          { value: 'DHL_GLOBAL_MAIL_ASIA', description: 'DHL eCommerce Asia.' },
          { value: 'DHL_GLOBAL_MAIL', description: 'DHL eCommerce US.' },
          { value: 'DHL_AT', description: 'DHL Austria.' },
          { value: 'DPD_DELISTRACK', description: 'DPD Delistrack.' },
          { value: 'DPD_FR', description: 'DPD France.' },
          { value: 'DPD_DE', description: 'DPD Germany.' },
          { value: 'DPD_HK', description: 'DPD Hong Kong.' },
          { value: 'DPD_IR', description: 'DPD Ireland.' },
          { value: 'DPD_LOCAL_REF', description: 'DPD Local Reference.' },
          { value: 'DPD_LOCAL', description: 'DPD Local.' },
          { value: 'DPD_PL', description: 'DPD Poland.' },
          { value: 'DPD_RO', description: 'DPD Romania.' },
          { value: 'DPD_RU', description: 'DPD Russia.' },
          { value: 'DPD_UK', description: 'DPD UK.' },
          {
            value: 'DTDC_EXPRESS',
            description: '<a href="https://www.dtdc.com/">DTDC Express Global</a>.',
          },
          { value: 'DTDC_IN', description: '<a href="https://www.dtdc.in/">DTDC India</a>.' },
          { value: 'DAWN_WING', description: 'Dawn Wing.' },
          {
            value: 'DELHIVERY_IN',
            description: '<a href="https://www.delhivery.com/">Delhivery India</a>.',
          },
          { value: 'DELTEC_DE', description: 'Deltec Germany.' },
          { value: 'DELTEC_UK', description: 'Deltec UK.' },
          {
            value: 'DEUTSCHE_DE',
            description:
              '<a href="https://www.deutschepost.de/sendung/simpleQuery.html">Deutsche Post</a>.',
          },
          {
            value: 'DIRECTLINK_SE',
            description: '<a href="https://www.directlink.com/">Direct Link Sweden</a>.',
          },
          { value: 'DIRECTLOG_BR', description: 'Directlog.' },
          { value: 'DOTZOT', description: 'Dotzot.' },
          { value: 'EC_CN', description: 'EC China.' },
          { value: 'ELTA_GR', description: 'ELTA Greece.' },
          { value: 'EMPS_CN', description: 'EMPS China.' },
          { value: 'EMS_CN', description: 'EMS China.' },
          { value: 'ECARGO', description: 'Ecargo.' },
          { value: 'EMIRATES_POST', description: 'Emirates Post.' },
          { value: 'ENSENDA', description: 'Ensenda USA.' },
          { value: 'ESTAFETA', description: 'Estafeta.' },
          { value: 'ESTES', description: 'Estes.' },
          { value: 'FERCAM_IT', description: 'FERCAM Logistics & Transport.' },
          { value: 'FLYT_EXPRESS', description: 'FLYT Express.' },
          { value: 'FASTRACK', description: 'FastTrack Thailand.' },
          { value: 'FASTWAY_US', description: 'Fastway USA.' },
          { value: 'FASTWAY_ZA', description: 'Fastway South Africa.' },
          { value: 'FASTWAY_UK', description: 'Fastway UK.' },
          { value: 'FASTWAY_AU', description: 'Fastway Australia.' },
          { value: 'FIRST_LOGISITCS', description: 'First Logistics.' },
          { value: 'FOUR_PX_EXPRESS', description: '4PX Express.' },
          { value: 'GEODIS', description: 'GEODIS - Distribution & Express.' },
          {
            value: 'GLS_CZ',
            description: '<a href="https://gls-group.eu/CZ/cs/home/">GLS Czech Republic</a>.',
          },
          {
            value: 'GLS_FR',
            description: '<a href="https://gls-group.eu/FR/fr/home">GLS France</a>.',
          },
          {
            value: 'GLS_DE',
            description: '<a href="https://gls-group.eu/DE/de/home">GLS Germany</a>.',
          },
          { value: 'GLS_IT', description: '<a href="https://www.gls-italy.com/">GLS Italy</a>.' },
          {
            value: 'GLS_NL',
            description: '<a href="https://gls-group.eu/NL/nl/home">GLS Netherlands</a>.',
          },
          { value: 'GLS_ES', description: '<a href="https://www.gls-spain.es/en/">GLS Spain</a>.' },
          { value: 'GLS', description: '<a href="https://gls-group.eu/EU/en/home">GLS</a>.' },
          {
            value: 'ACS_GR',
            description:
              '<a href="https://www.parcelmonitor.com/track-greece/">Parcel Monitor Greece</a>.',
          },
          { value: 'GENIKI_GR', description: 'Geniki Greece.' },
          { value: 'GLOBEGISTICS', description: 'Globegistics USA.' },
          { value: 'GREYHOUND', description: 'Greyhound.' },
          { value: 'HERMES_DE', description: 'Hermes Germany.' },
          { value: 'HERMESWORLD_UK', description: 'HermesWorld UK.' },
          { value: 'HK_POST', description: 'Hong Kong Post.' },
          {
            value: 'HRVATSKA_HR',
            description: '<a href="https://www.posta.hr/">Hrvatska Pošta</a>.',
          },
          { value: 'HUAHAN_EXPRESS', description: 'Huahan Express.' },
          { value: 'IMX', description: 'IMX France.' },
          {
            value: 'ITIS',
            description:
              '<a href="https://alltrack.org/itis-courier-tracking">ITIS International Courier Tracking</a>.',
          },
          { value: 'INDIA_POST', description: 'India Post.' },
          { value: 'INTERLINK', description: 'Interlink Express.' },
          { value: 'INT_SEUR', description: 'International Seur.' },
          { value: 'INT_SUER', description: 'International Seur.' },
          { value: 'ISRAEL_POST', description: 'Israel Post.' },
          { value: 'JNE_IDN', description: 'JNE Indonesia.' },
          { value: 'JAMEXPRESS_PH', description: 'Jam Express.' },
          { value: 'JAPAN_POST', description: 'Japan Post.' },
          { value: 'JP_POST', description: 'Japan Post.' },
          { value: 'JETSHIP_MY', description: 'Jet Ship Malaysia.' },
          { value: 'JETSHIP_SG', description: 'JetShip Singapore.' },
          { value: 'KERRY_EXPRESS_VN', description: 'Kerry Express Vietnam.' },
          { value: 'KERRY_EXPRESS_HK', description: 'Kerry Express Hong Kong.' },
          { value: 'KERRY_EXPRESS_TH', description: 'Kerry Express Thailand.' },
          { value: 'KIALA', description: 'Kiala.' },
          { value: 'KOREA_POST', description: 'Korea Post.' },
          {
            value: 'CJ_KR',
            description:
              '<a href="https://www.cjlogistics.com/en/network/th-th">CJ Logistics Korea</a>.',
          },
          { value: 'LAPOSTE', description: 'LA Poste.' },
          { value: 'LBC_PH', description: 'LBC Express.' },
          { value: 'LIETUVOS_LT', description: 'Lietuvos Pastas.' },
          { value: 'LION_PARCEL', description: 'Lion Parcel.' },
          {
            value: 'LOGISTICSWORLDWIDE_HK',
            description:
              '<a href="https://www.logisticsworldwide.com/">Logistics Worldwide Hong Kong</a>.',
          },
          {
            value: 'LOGISTICSWORLDWIDE_KR',
            description:
              '<a href="https://www.logisticsworldwide.com/">Logistics Worldwide Korea</a>.',
          },
          {
            value: 'LOGISTICSWORLDWIDE_MY',
            description:
              '<a href="https://www.logisticsworldwide.com/">Logistics Worldwide Malaysia</a>.',
          },
          { value: 'LOOMIS', description: 'Loomis.' },
          {
            value: 'MONDIAL',
            description: '<a href="https://www.mondialrelay.fr/">Mondial Relay</a>.',
          },
          {
            value: 'MAGYAR_HU',
            description:
              '<a href="https://www.posta.hu/sending_mail/parcels_abroad/international_postal_parcel">Magyar Posta</a>.',
          },
          {
            value: 'MALAYSIA_POST',
            description: '<a href="https://www.poslaju.com.my/">Pos Malaysia Berhad</a>.',
          },
          { value: 'MASTERLINK', description: 'Masterlink.' },
          { value: 'AEROFLASH', description: 'Mexico Aeroflash.' },
          { value: 'REDPACK', description: 'Mexico Redpack.' },
          { value: 'SENDA_MX', description: 'Mexico Senda Express.' },
          { value: 'MONDIAL_BE', description: 'Mondial Belgium.' },
          { value: 'MYHERMES', description: 'MyHermes UK.' },
          {
            value: 'NACEX_ES',
            description:
              '<a href="https://www.nacex.es/cambiarIdioma.do?idioma=EN">Nacex Spain</a>.',
          },
          {
            value: 'NATIONWIDE',
            description:
              '<a href="https://www.nationwidetransportation.com/nationwide_carrier.html">Nationwide Carrier and Logistics Services</a>.',
          },
          { value: 'NZ_POST', description: 'New Zealand Post.' },
          {
            value: 'NIPOST_NG',
            description: '<a href="https://www.nipost.gov.ng/">Nigerian Postal Service</a>.',
          },
          { value: 'NIGHTLINE_UK', description: 'Nightline UK.' },
          { value: 'NINJAVAN_PH', description: 'Ninjavan Philippines.' },
          { value: 'NINJAVAN_SG', description: 'Ninjavan Singapore.' },
          { value: 'NOVA_POSHTA_INT', description: 'Nova Poshta International.' },
          { value: 'NOVA_POSHTA', description: 'Nova Poshta.' },
          { value: 'OCA_AR', description: '<a href="https://www.oca.com.ar/">OCA Argentina</a>.' },
          { value: 'ONTRAC', description: 'OnTrac.' },
          { value: 'PTT_POST', description: 'PTT Posta.' },
          { value: 'PANDU', description: 'Pandu Logistics.' },
          { value: 'PARCELPOST_SG', description: 'Parcel Post Singapore.' },
          {
            value: 'POCZTA_POLSKA',
            description: '<a href="https://www.poczta-polska.pl/">Poczta Polska</a>.',
          },
          { value: 'POCZTEX', description: 'Pocztex.' },
          {
            value: 'CTT_PT',
            description: '<a href="https://www.cttexpresso.pt/home/">CTT Expresso Portugal</a>.',
          },
          {
            value: 'SEUR_PT',
            description: '<a href="https://www.seur.com/pt/">Seur Portugal</a>.',
          },
          { value: 'POS_ID', description: 'Pos Indonesia Domestic.' },
          { value: 'POS_INT', description: 'Pos Indonesia International.' },
          {
            value: 'POSTNL_INT_3_S',
            description: '<a href="https://www.postnl.nl/">Koninklijke PostNL</a>.',
          },
          { value: 'POSTNL', description: 'PostNL.' },
          { value: 'POSTNL_INT', description: 'PostNl International.' },
          { value: 'POSTNORD_LOGISTICS_DK', description: 'PostNord Logistics Denmark.' },
          { value: 'POSTNORD_LOGISTICS_SE', description: 'PostNord Logistics Sweden.' },
          { value: 'POSTNORD_LOGISTICS_GLOBAL', description: 'PostNord Logistics.' },
          { value: 'POSTA_RO', description: 'Posta Romana.' },
          { value: 'POSTE_ITALIANE', description: 'Poste Italiane.' },
          { value: 'POSTEN_NORGE', description: 'Posten Norge.' },
          { value: 'PROFESSIONAL_COURIERS', description: 'Professional Couriers.' },
          { value: 'RAF_PH', description: 'RAF Philippines.' },
          { value: 'RL_US', description: 'RL Carriers.' },
          { value: 'RPD_2_MAN', description: 'RPD2man Deliveries.' },
          { value: 'RPX_ID', description: 'RPX Indonesia.' },
          { value: 'REDEXPRESS', description: 'Red Express.' },
          { value: 'REDUR_ES', description: 'Redur Spain.' },
          { value: 'REGISTER_MAIL_IT', description: 'Registered Mail Italy.' },
          { value: 'RELAIS_COLIS_FR', description: 'Relais Colis.' },
          { value: 'ROCKET_PARCEL', description: 'Rocket Parcel International.' },
          { value: 'SDA_IT', description: 'SDA Italy.' },
          {
            value: 'SF_EXPRESS',
            description: '<a href="https://www.sf-express.com/us/en/">SF Express</a>.',
          },
          { value: 'SFC_EXPRESS', description: 'SFC Express.' },
          { value: 'SGT_IT', description: 'SGT Corriere Espresso.' },
          { value: 'SRE_KOREA', description: 'SRE Korea.' },
          { value: 'SAGAWA', description: 'Sagawa.' },
          { value: 'SAGAWA_JP', description: 'Sagawa.' },
          { value: 'POST_SERBIA_CS', description: 'Serbia Post.' },
          { value: 'SINGPOST', description: 'Singapore Post.' },
          { value: 'SIODEMKA', description: 'Siodemka.' },
          {
            value: 'SKYNET_WORLDWIDE',
            description: '<a href="https://www.skynetworldwide.com/">SkyNet Worldwide Express</a>.',
          },
          { value: 'SKYNET_MY', description: 'Skynet Malaysia.' },
          {
            value: 'SKYNET_UAE',
            description:
              '<a href="https://www.skynetworldwide.net/">SkyNet Worldwide Express Dubai, UAE</a>.',
          },
          {
            value: 'SKYNET_UK',
            description:
              '<a href="https://www.skynetworldwide.com/">SkyNet Worldwide Express UK</a>.',
          },
          { value: 'SEUR_ES', description: '<a href="https://www.seur.com/es/">Seur Spain</a>.' },
          { value: 'STARTRACK_EXPRESS', description: 'Star Track Express.' },
          { value: 'STARTRACK', description: 'Star Track.' },
          { value: 'SWISS_POST', description: 'Swiss Post.' },
          { value: 'TNT_AU', description: 'TNT Australia.' },
          { value: 'TNT_CN', description: 'TNT China.' },
          { value: 'TNT_CLICK_IT', description: 'TNT Click Italy.' },
          { value: 'TNT_FR', description: 'TNT France.' },
          { value: 'TNT_DE', description: 'TNT Germany.' },
          { value: 'TNT_IT', description: 'TNT Italy.' },
          { value: 'TNT_JP', description: 'TNT Japan.' },
          { value: 'TNT_NL', description: 'TNT Netherlands.' },
          { value: 'TNT_PL', description: 'TNT Poland.' },
          { value: 'TNT_ES', description: 'TNT Spain.' },
          { value: 'TNT_UK', description: 'TNT UK.' },
          {
            value: 'TPG',
            description:
              '<a href="https://tpg.ir/en/tracking">TPG International & Domestic Express</a>.',
          },
          { value: 'TAIWAN_POST_TW', description: 'Taiwan Post.' },
          { value: 'TAQBIN_HK', description: 'TA-Q-BIN Parcel Hong Kong.' },
          { value: 'TAQBIN_MY', description: 'TA-Q-BIN Parcel Malaysia.' },
          { value: 'TAQBIN_SG', description: 'TA-Q-BIN Parcel Singapore.' },
          { value: 'TAXIPOST', description: 'TaxiPost.' },
          { value: 'TELIWAY', description: 'Teliway.' },
          { value: 'THAILAND_POST', description: 'Thailand Post.' },
          { value: 'THE_COURIER_GUY', description: 'The Courier Guy.' },
          { value: 'TIKI_ID', description: 'Tiki.' },
          { value: 'TOLL_IPEC', description: 'Toll IPEC.' },
          { value: 'TWO_GO', description: '2GO.' },
          { value: 'TRANSMISSION', description: 'Transmission Netherlands.' },
          { value: 'UK_MAIL', description: 'UK Mail.' },
          { value: 'UPS_MI', description: 'UPS Mail Innovations.' },
          { value: 'VIETNAM_POST', description: 'Vietnam Post.' },
          {
            value: 'WAHANA_ID',
            description: '<a href="https://www.wahana.com/">Wahana Express Indonesia</a>.',
          },
          { value: 'XEND_EXPRESS_PH', description: 'Xend Express.' },
          { value: 'XPRESSBEES', description: 'Xpress Bees.' },
          { value: 'YAMATO', description: 'Yamato Japan.' },
          { value: 'YANWEN_CN', description: 'Yanwen China.' },
          { value: 'YODEL', description: 'Yodel.' },
          { value: 'UPS_CANADA', description: 'UPS Canada.' },
          { value: 'UPS_MAIL_INNOVATIONS', description: 'UPS Mail Innovations.' },
          { value: 'DE_DELTEC', description: 'Deltec Germany.' },
          { value: 'DE_INTERNATIONALSEUR', description: 'International Seur Germany.' },
          { value: 'FR_DPD', description: 'DPD France.' },
          { value: 'FR_IMX', description: 'IMX France.' },
          { value: 'IT_IMX', description: 'IMX Italy.' },
          { value: 'AU_DTDC', description: 'DTDC Australia.' },
          { value: 'AU_SENDLE', description: 'Sendle Australia.' },
          { value: 'AU_SKYNET', description: 'Skynet Australia.' },
          {
            value: 'ES_GLS',
            description:
              '<a href="https://gls-group.eu/">General Logistics Systems (GLS) Spain</a>.',
          },
          {
            value: 'ES_INTERNATIONALSEUR',
            description: '<a href="https://www.seur.com/es/">Seur International Spain</a>.',
          },
          { value: 'ES_IMX', description: 'IMX Spain.' },
          { value: 'CN_HUAHANEXPRESS', description: 'Huahan Express China.' },
          { value: 'LOCAL_PICKUP', description: 'Local Pickup.' },
          {
            value: 'HK_DPEX',
            description: '<a href="https://dpex.com/">DPEX Worldwide Hong Kong</a>.',
          },
          { value: 'HK_KERRYEXPRESS', description: 'Kerry Express Hong Kong.' },
          {
            value: 'HK_LOGISTICSWORLDWIDEEXPRESS',
            description: 'Logistics Worldwide Express Hong Kong.',
          },
          { value: 'HK_RPX', description: 'RPX Hong Kong.' },
          { value: 'HK_SPREADEL', description: 'Spreadel Hong Kong.' },
          { value: 'IN_SPREADEL', description: 'Spreadel IN.' },
          { value: 'TH_CJ', description: 'CJ Thailand.' },
          {
            value: 'KR_LOGISTICSWORLDWIDE',
            description:
              '<a href="https://www.logisticsworldwide.com/">Logistics Worldwide Korea</a>.',
          },
          { value: 'AT_DHL', description: 'DHL Austria.' },
          { value: 'BE_IMX', description: 'IMX Belgium.' },
          {
            value: 'MY_LOGISTICSWORLDWIDE',
            description:
              '<a href="https://www.logisticsworldwide.com/">Logistics Worldwide Malaysia</a>.',
          },
          { value: 'MY_JETSHIP', description: 'Jetship Malaysia.' },
          { value: 'SG_DHL', description: 'DHL Singapore.' },
          { value: 'SG_SPREADEL', description: 'Spreadel Singapore.' },
          {
            value: 'POSTAROMANA',
            description: '<a href="https://www.posta-romana.ro/en">Romanian Post</a>.',
          },
          {
            value: 'US_PUROLATOR',
            description:
              '<a href="https://www.purolator.com/en/ship-track/shipping-services/delivery-services/us-delivery-services.page">Purolator US</a>.',
          },
          { value: 'US_FASTWAY', description: 'Fastway US.' },
          {
            value: 'CHRONOPOST',
            description: '<a href="https://www.chronopost.fr/en#/step-home">Chronopost</a>.',
          },
          {
            value: 'CORREOS_DE_ESPANA',
            description:
              '<a href="https://www.correos.es/ss/Satellite/site/pagina-inicio/info">Correos de Espana</a>.',
          },
          {
            value: 'DEUTSCHE_POST_DHL',
            description:
              '<a href="https://www.deutschepost.de/en/home.html">Deutsche Post DHL</a>.',
          },
          {
            value: 'EBOOST_SDA',
            description:
              '<a href="https://www.sda.it/SITO_SDA-INSIDEX-WEB/pages/Home_it/119">Posteitaliane</a>.',
          },
          { value: 'HONGKONG_POST', description: 'Hong Kong Post.' },
          { value: 'INTANGIBLE_DIGITAL_SERVICES', description: 'Intangible Digital Services.' },
          {
            value: 'LA_POSTE',
            description: '<a href="https://www.laposte.fr/particulier">La Poste</a>.',
          },
          {
            value: 'LA_POSTE_SUIVI',
            description:
              '<a href="https://www.csuivi.courrier.laposte.fr/suivi">La Poste Suivi</a>.',
          },
          {
            value: 'NEKO_YAMATO_UNYUU',
            description: '<a href="https://www.kuronekoyamato.co.jp/en/">Yamato Transport Co.</a>.',
          },
          {
            value: 'NITTSU_PELICAN_BIN',
            description:
              '<a href="https://www.nittsu.com/epelicangen2/secure/login.aspx">Nippon Express</a>.',
          },
          {
            value: 'POSTE_ITALIA',
            description: '<a href="https://www.poste.it/">Posteitaliane</a>.',
          },
          {
            value: 'SAGAWA_KYUU_BIN',
            description:
              '<a href="https://www.sagawa-exp.co.jp/english/service/standard/service04.html">Sagawa Express Co.</a>.',
          },
          {
            value: 'STAR_TRACK_EXPRESS',
            description:
              '<a href="https://startrack.com.au/services/receiving/track-and-trace">Star Track Express</a>.',
          },
          { value: 'US_DTDC', description: 'DTDC US.' },
          { value: 'US_STARTRACK', description: 'Star Track US.' },
          {
            value: 'ISR_ISRAEL_POST',
            description: '<a href="https://www.israelpost.co.il/">Israel Post</a>.',
          },
          { value: 'BE_MONDIAL', description: 'Mondial Belgium.' },
          {
            value: 'B_2_CEUROPE',
            description: '<a href="https://www.b2ceurope.eu/">B2C Europe</a>.',
          },
          { value: 'PHL_2_GO', description: '2GO Shipping Philippines.' },
          { value: 'PHL_AIR_21', description: 'Air 21 Philippines.' },
          {
            value: 'PT_SPANISH_SEUR',
            description:
              '<a href="https://www.seur.com/en/">Internationational Seur Spanish Portugal</a>.',
          },
          {
            value: 'ES_SPANISH_SEUR',
            description: '<a href="https://www.seur.com/es/">Seur Spain</a>.',
          },
          {
            value: 'SG_DPEX',
            description: '<a href="https://dpex.com/">DPEX Worldwide Singapore</a>.',
          },
          { value: 'CH_IMX', description: 'IMX Switzerland.' },
          { value: 'DHLG', description: 'DHLG.' },
          { value: 'RUSTON', description: 'Ruston' },
          { value: 'MIKROPAKKET', description: 'Mikropakket' },
          { value: 'XPOST', description: 'Xpost.ph' },
          { value: 'PAN_ASIA', description: 'Pan-Asia International' },
          { value: 'PARCELONE', description: 'PARCEL ONE' },
          { value: 'SPEEDEE', description: 'Spee-Dee Delivery' },
          { value: 'VENIPAK', description: 'Venipak' },
          { value: 'CROSHOT', description: 'Croshot' },
          { value: 'SHREENANDANCOURIER', description: 'SHREE NANDAN COURIER' },
          { value: 'EPST_GLBL', description: 'ePost Global' },
          { value: 'NEWGISTICS', description: 'Newgistics' },
          { value: 'POST_SLOVENIA', description: 'Post of Slovenia' },
          { value: 'JERSEY_POST', description: 'Jersey Post' },
          { value: 'WMG', description: 'WMG Delivery' },
          { value: 'BOMBINOEXP', description: 'Bombino Express Pvt' },
          { value: 'XQ_EXPRESS', description: 'XQ Express' },
          { value: 'FURDECO', description: 'Furdeco' },
          { value: 'LEGION_EXPRESS', description: 'Legion Express' },
          { value: 'YDH_EXPRESS', description: 'YDH express' },
          { value: 'LHT_EXPRESS', description: 'LHT Express' },
          { value: 'SOUTH_AFRICAN_POST_OFFICE', description: 'South African Post Office' },
          { value: 'GRUPO', description: 'Grupo ampm' },
          { value: 'SPOTON', description: 'SPOTON Logistics Pvt Ltd' },
          { value: 'DIMERCO', description: 'Dimerco Express Group' },
          { value: 'INTERPARCEL_UK', description: 'Interparcel UK' },
          { value: 'ABCUSTOM', description: 'AB Custom Group' },
          { value: 'IND_DELIVREE', description: 'deliverE' },
          { value: 'GLOBAL_ABF', description: 'ABF Freight' },
          { value: 'CN_BESTEXPRESS', description: 'Best Express' },
          { value: 'DX_SFTP', description: 'DX (SFTP)' },
          { value: 'PICKUPP_MYS', description: 'PICK UPP' },
          { value: 'XPERT_DELIVERY', description: 'Xpert Delivery' },
          { value: 'FMX', description: 'FMX' },
          { value: 'HELLMANN', description: 'Hellmann Worldwide Logistics' },
          { value: 'DHL_REFR', description: 'DHl (Reference number)' },
          { value: 'DHL_HK', description: 'DHL HonKong' },
          { value: 'SHIP_IT_ASIA', description: 'Ship It Asia' },
          { value: 'KERRY_ECOMMERCE', description: 'Kerry eCommerce' },
          { value: 'GOJEK', description: 'Gojek' },
          { value: 'FRETERAPIDO', description: 'Frete Rapido' },
          { value: 'YODEL_INTNL', description: 'Yodel International' },
          { value: 'CFL_LOGISTICS', description: 'CFL Logistics' },
          { value: 'PITNEY_BOWES', description: 'Pitney Bowes' },
          { value: 'ZA_SPECIALISED_FREIGHT', description: 'Specialised Freight' },
          { value: 'JANCO', description: 'Janco Ecommerce' },
          { value: 'XPRESSEN_DK', description: 'Xpressen courier' },
          { value: 'YTO', description: 'YTO Express' },
          { value: 'RPD2MAN', description: 'RPD2man Deliveries' },
          { value: 'SEUR_SP_API', description: 'Spanish Seur API' },
          { value: 'DELIVERYONTIME', description: 'DELIVERYONTIME LOGISTICS PVT LTD' },
          { value: 'WISE_EXPRESS', description: 'Wise Express' },
          { value: 'JINSUNG', description: 'JINSUNG TRADING' },
          { value: 'JTEXPRESS_VN', description: 'J&T Express Vietnam' },
          { value: 'CHUKOU1', description: 'Chukou1' },
          { value: 'TRANS_KARGO', description: 'Trans Kargo Internasional' },
          { value: 'FEDEX_INTL_MLSERV', description: 'FedEx International MailService' },
          { value: 'SWISHIP_DE', description: 'Swiship DE' },
          { value: 'IVOY_WEBHOOK', description: 'Ivoy courier' },
          { value: 'AIRMEE_WEBHOOK', description: 'Airmee couriers' },
          { value: 'VAMOX', description: 'VAMOX' },
          { value: 'FIRSTMILE', description: 'FirstMile' },
          { value: 'AMS_GRP', description: 'AMS Group' },
          { value: 'FASTWAY_IR', description: 'Fastway Ireland' },
          { value: 'HH_EXP', description: 'Hua Han Logistics' },
          { value: 'HRPARCEL', description: 'HR Parcel' },
          { value: 'MYS_MYPOST_ONLINE', description: 'Mypostonline' },
          { value: 'GESWL', description: 'GESWL Express' },
          { value: 'BLUESTAR', description: 'Blue Star' },
          { value: 'TIPSA', description: 'TIPSA courier' },
          { value: 'CDEK_TR', description: 'CDEK TR' },
          { value: 'KGMHUB', description: 'KGM Hub' },
          { value: 'INTEXPRESS', description: 'Internet Express' },
          { value: 'DESCARTES', description: 'Innovel courier' },
          { value: 'OVERSE_EXP', description: 'Overseas Express' },
          { value: 'ONECLICK', description: 'One click delivery services' },
          { value: 'ROADRUNNER_FREIGHT', description: 'Roadbull Logistics' },
          { value: 'GLS_CROTIA', description: 'GLS Croatia' },
          { value: 'TOURLINE', description: 'tourline' },
          { value: 'MRW_FTP', description: 'MRW courier' },
          { value: 'BH_WORLDWIDE', description: 'B&H Worldwide' },
          { value: 'BLUEX', description: 'Blue Express' },
          { value: 'DYLT', description: 'Daylight Transport' },
          { value: 'OCS', description: 'OCS ANA Group' },
          { value: 'YINGNUO_LOGISTICS', description: 'yingnuo logistics' },
          { value: 'SIN_GLBL', description: 'Sin Global Express' },
          { value: 'TUFFNELLS_REFERENCE', description: 'Tuffnells Parcels Express- Reference' },
          { value: 'CJPACKET', description: 'CJ Packet' },
          { value: 'MILKMAN', description: 'Milkman courier' },
          { value: 'FIEGE_NL', description: 'Fiege Netherlands' },
          { value: 'ASIGNA', description: 'ASIGNA courier' },
          { value: 'ONEWORLDEXPRESS', description: 'One World Express' },
          { value: 'LTIANEXP', description: 'LTIAN EXP' },
          { value: 'KWE_GLOBAL', description: 'KWE Global' },
          { value: 'CTC_EXPRESS', description: 'CTC Express' },
          { value: 'LAO_POST', description: 'Lao Post' },
          { value: 'EU_IMX', description: 'IMX Mail' },
          { value: 'GLS_SLOV', description: 'GLS General Logistics Systems Slovakia s.r.o.' },
          { value: 'AMAZON', description: 'Amazon Shipping' },
          { value: 'MORE_LINK', description: 'Morelink' },
          { value: 'JX', description: 'JX courier' },
          { value: 'MYS_EMS', description: 'Malaysia Post EMS / Pos Laju' },
          { value: 'EASY_MAIL', description: 'Easy Mail' },
          { value: 'ADUIEPYLE', description: 'A Duie Pyle' },
          { value: 'GB_PANTHER', description: 'Panther' },
          { value: 'SG_DETRACK', description: 'Detrack' },
          { value: 'EXPRESSSALE', description: 'Expresssale' },
          { value: 'DICOM', description: 'GLS Logistic Systems Canada Ltd./Dicom' },
          { value: 'MATDESPATCH', description: 'Matdespatch' },
          { value: 'TRUNKRS_WEBHOOK', description: 'Trunkrs courier' },
          { value: 'WESTBANK_COURIER', description: 'West Bank Courier' },
          { value: 'MBW', description: 'MBW Courier Inc.' },
          { value: 'KHM_CAMBODIA_POST', description: 'Cambodia Post' },
          { value: 'FEDEX_CROSSBORDER', description: 'FedEx Cross Border' },
          { value: 'JANIO', description: 'Janio Asia' },
          { value: 'SINOTRANS', description: 'Sinotrans' },
          { value: 'BRT_IT_PARCELID', description: 'BRT Bartolini(Parcel ID)' },
          { value: 'A1POST', description: 'A1Post' },
          { value: 'DHL_SUPPLY_CHAIN', description: 'DHL Supply Chain APAC' },
          { value: 'TAZMANIAN_FREIGHT', description: 'Tazmanian Freight Systems' },
          { value: 'TOPYOU', description: 'TopYou' },
          { value: 'PALEXPRESS', description: 'PAL Express Limited' },
          { value: 'SAIA_FREIGHT', description: 'Saia LTL Freight' },
          { value: 'CN_WEDO', description: 'WeDo Logistics' },
          { value: 'FULFILLME', description: 'Fulfillme' },
          { value: 'SG_QXPRESS', description: 'Qxpress' },
          { value: 'UPS_REFERENCE', description: 'UPS Reference' },
          { value: 'NHANS_SOLUTIONS', description: 'Nhans Solutions' },
          { value: 'CARIBOU', description: 'Caribou' },
          { value: 'LOCUS_WEBHOOK', description: 'Locus courier' },
          { value: 'DSV', description: 'DSV courier' },
          { value: 'CN_GOFLY', description: 'GoFly' },
          { value: 'COORDINADORA', description: 'Coordinadora' },
          { value: 'P2P_TRC', description: 'P2P TrakPak' },
          { value: 'ANDREANI', description: 'Grupo logistico Andreani' },
          { value: 'DIRECTPARCELS', description: 'Direct Parcels' },
          { value: 'DOORA', description: 'Doora Logistics' },
          { value: 'FEDEX_POLAND', description: 'FedEx® Poland Domestic' },
          { value: 'INTERPARCEL_NZ', description: 'Interparcel New Zealand' },
          { value: 'XDP_UK_REFERENCE', description: 'XDP Express Reference' },
          { value: 'ETOMARS', description: 'Etomars' },
          { value: 'CN_JCEX', description: 'JCEX courier' },
          { value: 'IND_ECOM', description: 'Ecom Express' },
          { value: 'FAR_INTERNATIONAL', description: 'FAR international' },
          { value: 'ESP_ENVIALIA', description: 'Envialia' },
          { value: 'IDEXPRESS', description: 'IDEX courier' },
          { value: 'GANGBAO', description: 'GANGBAO Supplychain' },
          { value: 'SMSA_EXPRESS', description: 'SMSA Express' },
          { value: 'NEWAY', description: 'Neway Transport' },
          { value: 'DEX_I', description: 'DEX-I courier' },
          { value: 'DESIGNERTRANSPORT_WEBHOOK', description: 'Designer Transport' },
          { value: 'BUDBEE_WEBHOOK', description: 'Budbee courier' },
          { value: 'GLS_SLOVEN', description: 'GLS Slovenia' },
          { value: 'PARCELLED_IN', description: 'Parcelled.in' },
          { value: 'COPA_COURIER', description: 'Copa Airlines Courier' },
          { value: 'GSI_EXPRESS', description: 'GSI EXPRESS' },
          { value: 'CON_WAY', description: 'Con-way Freight' },
          { value: 'BROUWER_TRANSPORT', description: 'Brouwer Transport en Logistiek' },
          { value: 'TOLL_NZ', description: 'Toll New Zealand' },
          { value: 'CPEX', description: 'Captain Express International' },
          { value: 'ECHO', description: 'Echo courier' },
          { value: 'FEDEX_FR', description: 'FedEx® Freight' },
          { value: 'XDE_WEBHOOK', description: 'Ximex Delivery Express' },
          { value: 'TOLOS', description: 'Tolos courier' },
          { value: 'BORDEREXPRESS', description: 'Border Express' },
          { value: 'GIAO_HANG', description: 'Giao hàng nhanh' },
          { value: 'MAILPLUS_JPN', description: 'MailPlus (Japan)' },
          { value: 'GEODIS_ESPACE', description: 'Geodis E-space' },
          { value: 'TNT_UK_REFR', description: 'TNT UK Reference' },
          { value: 'DOORDASH_WEBHOOK', description: 'DoorDash' },
          { value: 'KEC', description: 'KEC courier' },
          { value: 'CJ_HK_INTERNATIONAL', description: 'CJ Logistics International(Hong Kong)' },
          { value: 'HELTHJEM', description: 'Helthjem' },
          { value: 'ZA_COURIERIT', description: 'Courier IT' },
          { value: 'SFB2C', description: 'SF International' },
          { value: 'FREIGHTQUOTE', description: 'Freightquote by C.H. Robinson' },
          { value: 'FR_EXAPAQ', description: 'DPD France (formerly exapaq)' },
          { value: 'LANDMARK_GLOBAL_REFERENCE', description: 'Landmark Global Reference' },
          { value: 'PARCEL2GO', description: 'Parcel2Go' },
          { value: 'DELNEXT', description: 'Delnext' },
          { value: 'TCK_EXPRESS', description: 'TCK Express' },
          { value: 'ENDEAVOUR_DELIVERY', description: 'Endeavour Delivery' },
          { value: 'NANJINGWOYUAN', description: 'Nanjing Woyuan' },
          { value: 'HEPPNER_FR', description: 'Heppner France' },
          { value: 'PICKRR', description: 'Pickrr' },
          { value: 'FONSEN', description: 'Fonsen Logistics' },
          { value: 'APC_OVERNIGHT_CONNUM', description: 'APC Overnight Consignment' },
          { value: 'STAR_TRACK_NEXT_FLIGHT', description: 'Star Track Next Flight' },
          { value: 'UPS_FREIGHT', description: 'UPS Freight' },
          { value: 'DAJIN', description: 'Shanghai Aqrum Chemical Logistics Co.Ltd' },
          { value: 'POSTA_PLUS', description: 'Posta Plus' },
          { value: 'CEVA', description: 'CEVA LOGISTICS' },
          { value: 'ORANGE_DS', description: 'OrangeDS (Orange Distribution Solutions Inc)' },
          { value: 'ANSERX', description: 'ANSERX courier' },
          { value: 'JS_EXPRESS', description: 'JS EXPRESS' },
          { value: 'PADTF', description: 'padtf.com' },
          { value: 'GAC', description: 'GAC' },
          { value: 'EZSHIP', description: 'EZship' },
          { value: 'GEIS', description: 'Geis CZ' },
          { value: 'SYPOST', description: 'Sunyou Post' },
          { value: 'AMAZON_SHIP_MCF', description: 'Amazon Shipping + Amazon MCF' },
          { value: 'SF_EX', description: 'SF Express' },
          { value: 'YUSEN', description: 'Yusen Logistics' },
          { value: 'ESP_MRW', description: 'MRW spain' },
          { value: 'BRING', description: 'Bring' },
          { value: 'PAGO', description: 'Pago Logistics' },
          { value: 'AO_COURIER', description: 'AO Logistics' },
          { value: 'GBA', description: 'GBA Services Ltd' },
          { value: 'DIAMOND_EUROGISTICS', description: 'Diamond Eurogistics Limited' },
          { value: 'NEWEGGEXPRESS', description: 'Newegg Express' },
          { value: 'LALAMOVE', description: 'Lalamove' },
          { value: 'SPEEDCOURIERS_GR', description: 'Speed Couriers' },
          { value: 'CORPORATECOURIERS_WEBHOOK', description: 'Corporate Couriers' },
          { value: 'FORRUN', description: 'forrun Pvt Ltd (Arpatech Venture)' },
          { value: 'PICKUP', description: 'Pickupp' },
          { value: 'BOND', description: 'Bond courier' },
          { value: 'ECMS', description: 'ECMS International Logistics Co.' },
          { value: 'INTELIPOST', description: 'Intelipost (TMS for LATAM)' },
          { value: 'SK_POSTA', description: 'Slovenska pošta' },
          { value: 'FLASHEXPRESS', description: 'Flash Express' },
          { value: 'FETCHR_WEBHOOK', description: 'Mena 360 (Fetchr)' },
          { value: 'CN_STO', description: 'STO Express' },
          { value: 'SEKO_SFTP', description: 'SEKO Worldwide' },
          { value: 'THEDELIVERYGROUP', description: 'TDG – The Delivery Group' },
          { value: 'CELLO_SQUARE', description: 'Cello Square' },
          { value: 'HOME_DELIVERY_SOLUTIONS', description: 'Home Delivery Solutions Ltd' },
          { value: 'DPD_HGRY', description: 'DPD Hungary' },
          { value: 'KERRYTTC_VN', description: 'Kerry Express (Vietnam) Co Ltd' },
          { value: 'TARRIVE', description: 'TONDA GLOBAL' },
          { value: 'JOYING_BOX', description: 'Joying Box' },
          { value: 'COLLIVERY', description: 'MDS Collivery Pty (Ltd)' },
          { value: 'TOTAL_EXPRESS', description: 'Total Express' },
          { value: 'ZJS_EXPRESS', description: 'ZJS International' },
          { value: 'STARKEN', description: 'STARKEN couriers' },
          { value: 'MAINFREIGHT', description: 'Mainfreight' },
          { value: 'IND_FIRSTFLIGHT', description: 'First Flight Couriers' },
          { value: 'BE_BPOST', description: 'Bpost (www.bpost.be)' },
          { value: 'DEMANDSHIP', description: 'DemandShip' },
          { value: 'CN_DPEX', description: 'DPEX' },
          { value: 'ACSWORLDWIDE', description: 'ACS Worldwide Express' },
          { value: 'LOGISTERS', description: 'Logisters' },
          { value: 'GOGLOBALPOST', description: 'Global Post' },
          { value: 'AMSTAN', description: 'Amstan Logistics' },
          { value: 'OKAYPARCEL', description: 'OkayParcel' },
          { value: 'I_DIKA', description: 'i-dika' },
          { value: 'ENVIALIA_REFERENCE', description: 'Envialia Reference' },
          { value: 'PAACK_WEBHOOK', description: 'Paack courier' },
          { value: 'GRAB_WEBHOOK', description: 'Grab courier' },
          { value: 'PARCELPOINT', description: 'Parcelpoint' },
          { value: 'ICUMULUS', description: 'iCumulus' },
          { value: 'FDSEXPRESS', description: 'FDSEXPRESS' },
          { value: 'DAIGLOBALTRACK', description: 'DAI Post' },
          { value: 'CNDEXPRESS', description: 'CND Express' },
          { value: 'GLOBAL_IPARCEL', description: 'i-parcel' },
          { value: 'AMAZON_FBA_SWISHIP', description: 'Swiship UK' },
          { value: 'WYNGS', description: 'Wyngs' },
          { value: 'YURTICI_KARGO', description: 'Yurtici Kargo' },
          { value: 'CN_PAYPAL_PACKAGE', description: 'PayPal Package' },
          { value: 'PARCEL_2_POST', description: 'Parcel To Post' },
          { value: 'ZYLLEM', description: 'Zyllem' },
          { value: 'VIA_EXPRESS', description: 'Viaxpress' },
          { value: 'WIZMO', description: 'Wizmo' },
          { value: 'TIGFREIGHT', description: 'TIG Freight' },
          { value: 'PIL_LOGISTICS', description: 'PIL Logistics (China) Co.' },
          { value: 'ZTO_EXPRESS', description: 'ZTO Express' },
          { value: 'HEPPNER', description: 'Heppner Internationale Spedition GmbH & Co.' },
          { value: 'GENERAL_OVERNIGHT', description: 'Go!Express and logistics' },
          { value: 'HAPPY2POINT', description: 'Happy 2ThePoint' },
          { value: 'ARCO_SPEDIZIONI', description: 'Arco Spedizioni SP' },
          { value: 'CHITCHATS', description: 'Chit Chats' },
          { value: 'IML', description: 'IML courier' },
          { value: 'SMOOTH', description: 'Smooth Couriers' },
          { value: 'INTEL_VALLEY', description: 'Intel-Valley Supply chain (ShenZhen) Co. Ltd' },
          { value: 'CLE_LOGISTICS', description: 'CL E-Logistics Solutions Limited' },
          { value: 'FIEGE', description: 'Fiege Logistics' },
          { value: 'MX_CARGO', description: 'M&X cargo' },
          { value: 'ZIINGFINALMILE', description: 'Ziing Final Mile Inc' },
          { value: 'TCS', description: 'TCS courier' },
          { value: 'DAYTON_FREIGHT', description: 'Dayton Freight' },
          { value: 'ROADBULL', description: 'Red Carpet Logistics' },
          { value: 'YODEL_DIR', description: 'Yodel Direct' },
          { value: 'STONE3PL', description: 'STONE3PL' },
          { value: 'PARCELPAL_WEBHOOK', description: 'ParcelPal' },
          { value: 'DHL_ECOMERCE_ASA', description: 'DHL eCommerce Asia (API)' },
          { value: 'SIMPLYPOST', description: 'J&T Express Singapore' },
          { value: 'KY_EXPRESS', description: 'Kua Yue Express' },
          { value: 'SHENZHEN', description: 'shenzhen 1st International Logistics(Group)Co' },
          { value: 'UC_EXPRE', description: 'ucexpress' },
          { value: 'US_LASERSHIP', description: 'LaserShip' },
          { value: 'DIDADI', description: 'DIDADI Logistics tech' },
          { value: 'DYNALOGIC', description: 'Dynamic Logistics' },
          { value: 'DBSCHENKER_B2B', description: 'DB Schenker B2B' },
          { value: 'MXE', description: 'MXE Express' },
          { value: 'PFCEXPRESS', description: 'PFC Express' },
          { value: 'WHISTL', description: 'Whistl' },
          { value: 'CAE_DELIVERS', description: 'CAE Delivers' },
          { value: 'WEPOST', description: 'WePost Sdn Bhd' },
          { value: 'ALLIEDEXPRESS', description: 'Allied Express' },
          { value: 'SHIPPIT', description: 'Shippit' },
          { value: 'DDEXPRESS', description: 'DD Express Courier' },
          { value: 'ARAMEX_AU', description: 'Aramex Australia (formerly Fastway AU)' },
          { value: 'TFM', description: 'TFM Xpress' },
          { value: 'BNEED', description: 'Bneed courier' },
          { value: 'M_XPRESS', description: 'M Xpress Sdn Bhd' },
          { value: 'HK_TGX', description: 'Kerry Express Hong Kong' },
          { value: 'LATVIJAS_PASTS', description: 'Latvijas Pasts' },
          { value: 'HDB_BOX', description: 'Haidaibao (BOX)' },
          { value: 'VIAEUROPE', description: 'ViaEurope' },
          { value: 'CORREO_UY', description: 'Correo Uruguayo' },
          { value: 'CLEVY_LINKS', description: 'Clevy Links' },
          { value: 'IBEONE', description: 'Beone Logistics' },
          { value: 'J_NET', description: 'J-Net' },
          { value: 'RCL', description: 'Red Carpet Logistics' },
          { value: '6LS', description: '6ls.com' },
          { value: 'CGS_EXPRESS', description: 'CGS Express' },
          { value: 'BLR_BELPOST', description: 'Belpost' },
          { value: 'BIRDSYSTEM', description: 'BirdSystem' },
          { value: 'DOBROPOST', description: 'DobroPost' },
          { value: 'SAP_EXPRESS', description: 'SAP EXPRESS' },
          { value: 'WEASHIP', description: 'Weaship' },
          { value: 'SONICTL', description: 'Sonic Transportation & Logistics' },
          { value: 'KWT', description: 'Shenzhen Jinghuada Logistics Co.' },
          { value: 'AFLLOG_FTP', description: 'AFL LOGISTICS' },
          { value: 'IND_SAFEEXPRESS', description: 'Safexpress' },
          { value: 'TOPHATTEREXPRESS', description: 'Tophatter Express' },
          { value: 'SEINO', description: 'Seino' },
          { value: 'MGLOBAL', description: 'PT MGLOBAL LOGISTICS INDONESIA' },
          { value: 'SZENDEX', description: 'SZENDEX' },
          { value: 'AVERITT', description: 'Averitt Express' },
          { value: 'DBSCHENKER_SV', description: 'DB Schenker Sweden' },
          { value: 'LEADER', description: 'leader' },
          { value: 'AO_DEUTSCHLAND', description: 'AO Deutschland' },
          { value: '2EBOX', description: '2ebox courier' },
          { value: 'EU_FLEET_SOLUTIONS', description: 'EU Fleet Solutions' },
          { value: 'SG_SPEEDPOST', description: 'Singapore Speedpost' },
          { value: 'PCFCORP', description: 'PCF Final Mile' },
          { value: 'AERONET', description: 'Aeronet couriers' },
          { value: 'LINKBRIDGE', description: 'Link Bridge(BeiJing)international logistics co.' },
          {
            value: 'DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET',
            description: 'Deutsche Post DHL',
          },
          { value: 'PRIMAMULTICIPTA', description: 'PT Prima Multi Cipta' },
          { value: 'ISR_POST_DOMESTIC', description: 'Israel Post Domestic' },
          { value: 'COUREX', description: 'Urbanfox' },
          { value: 'ZAJIL_EXPRESS', description: 'Zajil Express Company' },
          { value: 'BESTWAYPARCEL', description: 'Best Way Parcel' },
          { value: 'COLLECTCO', description: 'CollectCo' },
          { value: 'AEX', description: 'AEX Group' },
          { value: 'JTEXPRESS', description: 'J&T EXPRESS MALAYSIA' },
          { value: 'FEDEX_UK', description: 'FedEx® UK' },
          { value: 'USHIP', description: 'uShip courier' },
          { value: 'ROUTIFIC_WEBHOOK', description: 'Routific' },
          { value: 'GLOBAL_EXPRESS', description: 'Tai Wan Global Business' },
          { value: 'BRT_IT_SENDER_REF', description: 'BRT Bartolini(Sender Reference)' },
          { value: 'GLOBAVEND', description: 'Globavend' },
          { value: 'PIXSELL', description: 'PIXSELL LOGISTICS' },
          { value: 'SHIPTOR', description: 'Shiptor' },
          { value: 'CDEK', description: 'CDEK courier' },
          { value: 'VNM_VIETTELPOST', description: 'ViettelPost' },
          { value: 'PHL_AIR21', description: 'AIR21 courier' },
          { value: 'PALLET_NETWORK', description: 'The Pallet Network' },
          { value: 'CJ_CENTURY', description: 'CJ Century' },
          { value: 'UK_XDP', description: 'XDP Express' },
          { value: 'GSO', description: 'GSO(GLS-USA)' },
          { value: 'VIWO', description: 'VIWO IoT' },
          { value: 'SKYBOX', description: 'SKYBOX' },
          { value: 'PAPER_EXPRESS', description: 'Paper Express' },
          { value: 'KERRYTJ', description: 'Kerry TJ Logistics' },
          { value: 'NTLOGISTICS_VN', description: 'Nhat Tin Logistics' },
          { value: 'SDH_SCM', description: 'lightning monkey' },
          { value: 'PALLETWAYS', description: 'Palletways' },
          {
            value: 'NOX_NACHTEXPRESS',
            description: 'Innight Express Germany GmbH (nox NachtExpress)',
          },
          { value: 'ZINC', description: 'Zinc courier' },
          { value: 'DPE_SOUTH_AFRC', description: 'DPE South Africa' },
          { value: 'LOGISTIKA', description: 'Logistika' },
          { value: 'CELERITAS', description: 'Celeritas Transporte' },
          { value: 'PRESSIODE', description: 'Pressio' },
          { value: 'SHREE_MARUTI', description: 'Shree Maruti Courier Services Pvt Ltd' },
          { value: 'PARCELINKLOGISTICS', description: 'Parcelink Logistics' },
          { value: 'EFEX', description: 'eFEx (E-Commerce Fulfillment & Express)' },
          { value: 'LOTTE', description: 'Lotte Global Logistics' },
          { value: 'LONESTAR', description: 'Lone Star Overnight' },
          { value: 'GB_NORSK', description: 'Norsk Global' },
          { value: 'APRISAEXPRESS', description: 'Aprisa Express' },
          { value: 'BEL_RS', description: 'BEL North Russia' },
          { value: 'OSM_WORLDWIDE', description: 'OSM Worldwide' },
          { value: 'SAILPOST', description: 'SAILPOST' },
          { value: 'MAILAMERICAS', description: 'MailAmericas' },
          { value: 'WESTGATE_GL', description: 'Westgate Global' },
          { value: 'DTD_EXPR', description: 'DTD Express' },
          { value: 'ALFATREX', description: 'AlfaTrex' },
          { value: 'THABIT_LOGISTICS', description: 'Thabit Logistics' },
          { value: 'PROMEDDELIVERY', description: 'ProMed Delivery' },
          { value: 'PAQUETEXPRESS', description: 'Paquetexpress' },
          { value: 'NEWZEALAND_COURIERS', description: 'NEW ZEALAND COURIERS' },
          { value: 'LIEFERY', description: 'liefery' },
          { value: 'JOOM_LOGIS', description: 'Joom Logistics' },
          { value: 'STRECK_TRANSPORT', description: 'Streck Transport' },
          { value: 'HCT_LOGISTICS', description: 'HCT LOGISTICS CO.LTD.' },
          { value: 'ZA_FASTWAY', description: 'fastway New Zealand' },
          { value: 'CARRY_FLAP', description: 'Carry-Flap Co.' },
          { value: 'PONY_EXPRESS', description: 'Pony express' },
          { value: 'US_OLD_DOMINION', description: 'Old Dominion Freight Line' },
          { value: 'ANICAM_BOX', description: 'ANICAM BOX EXPRESS' },
          { value: 'ALWAYS_EXPRESS', description: 'Always Express' },
          { value: 'WANBEXPRESS', description: 'WanbExpress' },
          { value: 'AUS_STARTRACK', description: 'StarTrack (startrack.com.au)' },
          { value: 'GBS_BROKER', description: 'GBS-Broker' },
          { value: 'STALLIONEXPRESS', description: 'Stallion Express' },
          { value: 'RAIDEREX', description: 'RaidereX' },
          { value: 'ALLJOY', description: 'ALLJOY SUPPLY CHAIN' },
          { value: 'SHOPFANS', description: 'ShopfansRU LLC' },
          { value: 'KYUNGDONG_PARCEL', description: 'Kyungdong Parcel' },
          { value: 'CHAMPION_LOGISTICS', description: 'Champion Logistics' },
          { value: 'PICKUPP_SGP', description: 'PICK UPP (Singapore)' },
          { value: 'DEALERSEND', description: 'DealerSend' },
          { value: 'MORNING_EXPRESS', description: 'Morning Express' },
          { value: 'NACEX', description: 'NACEX' },
          { value: 'THENILE_WEBHOOK', description: 'SortHub courier' },
          { value: 'JOCOM', description: 'Jocom' },
          { value: 'HOLISOL', description: 'Holisol' },
          { value: 'LBCEXPRESS_FTP', description: 'LBC EXPRESS INC.' },
          { value: 'CSE', description: 'CSE courier' },
          { value: 'TFORCE_FINALMILE', description: 'TForce Final Mile' },
          { value: 'KURASI', description: 'KURASI' },
          { value: 'GEMWORLDWIDE', description: 'GEM Worldwide' },
          { value: 'SHIP_GATE', description: 'ShipGate' },
          { value: 'USF_REDDAWAY', description: 'USF Reddaway' },
          { value: 'SHIPTER', description: 'SHIPTER' },
          { value: 'NATIONAL_SAMEDAY', description: 'National Sameday' },
          { value: 'APG', description: 'APG eCommerce Solutions ' },
          { value: 'CN_BOXC', description: 'BoxC courier' },
          { value: 'YUNEXPRESS', description: 'YunExpress' },
          { value: 'INTEGRA2_FTP', description: 'Integra2' },
          { value: 'CAINIAO', description: 'AliExpress Standard Shipping' },
          { value: 'ECOSCOOTING', description: 'ECOSCOOTING' },
          { value: 'DMS_MATRIX', description: 'DMSMatrix' },
          { value: 'MAINWAY', description: 'Mainway' },
          { value: 'ASENDIA_USA', description: 'Asendia USA' },
          { value: 'PAPERFLY', description: 'Paperfly Private Limited' },
          { value: 'HOUNDEXPRESS', description: 'Hound Express' },
          { value: '3JMSLOGISTICS', description: '3JMS Logistics' },
          { value: 'EP_BOX', description: 'EP-Box courier' },
          { value: 'BOX_BERRY', description: 'Boxberry courier' },
          { value: 'LICCARDI_EXPRESS', description: 'LICCARDI EXPRESS COURIER' },
          { value: 'PLUS_LOG_UK', description: 'Plus UK Logistics' },
          { value: 'FULFILLA', description: 'Fulfilla' },
          { value: 'SKY_POSTAL', description: 'SkyPostal' },
          { value: 'ASE', description: 'ASE KARGO' },
          { value: 'CNWANGTONG', description: 'cnwangtong' },
          { value: 'PITTOHIO', description: 'PITT OHIO' },
          { value: 'MAIL_PLUS', description: 'MailPlus' },
          { value: 'XPO_LOGISTICS', description: 'XPO logistics' },
          { value: 'WNDIRECT', description: 'wnDirect' },
          { value: 'CLOUDWISH_ASIA', description: 'Cloudwish Asia' },
          { value: 'ZELERIS', description: 'Zeleris' },
          { value: 'MARA_XPRESS', description: 'Mara Xpress' },
          { value: 'GIO_EXPRESS', description: 'Gio Express' },
          { value: 'OCS_WORLDWIDE', description: 'OCS WORLDWIDE' },
          { value: 'DESTINY', description: 'Destiny Transportation' },
          { value: 'ARK_LOGISTICS', description: 'ARK Logistics' },
          { value: 'DE_DPD_DELISTRACK', description: 'DPD Germany' },
          { value: 'COMET_TECH', description: 'CometTech' },
          { value: 'DHL_PARCEL_RU', description: 'DHL Parcel Russia' },
          { value: 'AQUILINE', description: 'Aquiline' },
          { value: 'PILOT_FREIGHT', description: 'Pilot Freight Services' },
          { value: 'TNT_REFR', description: 'TNT Reference' },
          { value: 'QWINTRY', description: 'Qwintry Logistics' },
          { value: 'DANSKE_FRAGT', description: 'Danske Fragtaend' },
          { value: 'SHREE_ANJANI_COURIER', description: 'Shree Anjani Courier' },
          { value: 'CARRIERS', description: 'Carriers courier' },
          { value: 'AIR_CANADA_GLOBAL', description: 'Rivo (Air canada)' },
          { value: 'PRESIDENT_TRANS', description: 'PRESIDENT TRANSNET CORP' },
          { value: 'STEPFORWARDFS', description: 'STEP FORWARD FREIGHT SERVICE CO LTD' },
          { value: 'ESHIPPING', description: 'Eshipping' },
          { value: 'SHREETIRUPATI', description: 'SHREE TIRUPATI COURIER SERVICES PVT. LTD.' },
          { value: 'HX_EXPRESS', description: 'HX Express' },
          { value: 'INDOPAKET', description: 'INDOPAKET' },
          { value: 'CN_17POST', description: '17 Post Service' },
          { value: 'K1_EXPRESS', description: 'K1 Express' },
          { value: 'CJ_GLS', description: 'CJ GLS' },
          { value: 'MYS_GDEX', description: 'GDEX courier' },
          { value: 'NATIONEX', description: 'Nationex courier' },
          { value: 'CN_EQUICK', description: 'Equick China' },
          { value: 'ANJUN', description: 'Anjun couriers' },
          { value: 'VIRTRANSPORT', description: 'VIR Transport' },
          { value: 'FARGOOD', description: 'FarGood' },
          { value: 'SMG_EXPRESS', description: 'SMG Direct' },
          { value: 'RZYEXPRESS', description: 'RZY Express' },
          { value: 'SEFL', description: 'Southeastern Freight Lines' },
          { value: 'HIPSHIPPER', description: 'Hipshipper' },
          { value: 'HDB', description: 'Haidaibao' },
          { value: 'RPXLOGISTICS', description: 'RPX Logistics' },
          { value: 'MIKROPAKKET_BE', description: 'Mikropakket Belgium' },
          { value: 'KUEHNE', description: 'Kuehne + Nagel' },
          { value: 'IT_NEXIVE', description: 'Nexive (TNT Post Italy)' },
          { value: 'PTS', description: 'PTS courier' },
          { value: 'ETS_EXPRESS', description: 'RETS express' },
          { value: 'SWISS_POST_FTP', description: 'Swiss Post FTP' },
          { value: 'COLIS_PRIVE', description: 'Colis Privé' },
          { value: 'FASTRK_SERV', description: 'Fastrak Services' },
          { value: '4_72', description: '4-72 Entregando' },
          { value: 'US_YRC', description: 'YRC courier' },
          { value: 'CN_YUNDA', description: 'Yunda Express' },
          { value: 'POSTNL_INTL_3S', description: 'PostNL International 3S' },
          { value: 'AAA_COOPER', description: 'AAA Cooper' },
          { value: 'ELIAN_POST', description: 'Yilian (Elian) Supply Chain' },
          { value: 'CUBYN', description: 'Cubyn' },
          { value: 'SAU_SAUDI_POST', description: 'Saudi Post' },
          { value: '360LION', description: '360 Lion Express' },
          { value: 'ABXEXPRESS_MY', description: 'ABX Express' },
          { value: 'NINJAVAN_WB', description: 'Ninjavan Webhook' },
          { value: 'ESP_PACKLINK', description: 'Packlink' },
          { value: 'IND_JAYONEXPRESS', description: 'Jayon Express (JEX)' },
          { value: 'GB_ARROW', description: 'Arrow XL' },
          { value: 'ZES_EXPRESS', description: 'Eshun international Logistic' },
          { value: 'IND_GOJAVAS', description: 'GoJavas' },
          { value: 'ZEPTO_EXPRESS', description: 'ZeptoExpress' },
          { value: 'SKYNET_ZA', description: 'Skynet World Wide Express South Africa' },
          { value: 'KPOST', description: 'Korea Post' },
          { value: 'ZEEK_2_DOOR', description: 'Zeek2Door' },
          { value: 'DHL_FREIGHT', description: 'DHL Freight' },
          { value: 'BLUECARE', description: 'Bluecare Express Ltd' },
          { value: 'BLINKLASTMILE', description: 'Blink' },
          { value: 'POSTA_UKR', description: 'UkrPoshta' },
          { value: 'LOGISTYX_TRANSGROUP', description: 'Transgroup courier' },
          { value: 'JINDOUYUN', description: 'jindouyun courier' },
          { value: 'CHROBINSON', description: 'C.H. Robinson Worldwide' },
          { value: 'TRACKON', description: 'Trackon Couriers Pvt. Ltd' },
          { value: 'CN_POST56', description: 'Post56' },
          { value: 'GB_TUFFNELLS', description: 'Tuffnells Parcels Express' },
          { value: 'COURANT_PLUS', description: 'Courant Plus' },
          { value: 'SCUDEX_EXPRESS', description: 'Scudex Express' },
          { value: 'SHIPENTEGRA', description: 'ShipEntegra' },
          { value: 'TRUMPCARD', description: 'TRUMPCARD LLC' },
          { value: 'CHOIR_EXP', description: 'Choir Express Indonesia' },
          { value: 'ETOTAL', description: 'eTotal Solution Limited' },
          { value: 'COPE', description: 'Cope Sensitive Freight' },
          { value: 'SFPLUS_WEBHOOK', description: 'Zeek courier' },
          { value: 'IND_GATI', description: 'Gati-KWE' },
          {
            value: 'HERMES_2MANN_HANDLING',
            description: 'Hermes Einrichtungs Service GmbH & Co. KG',
          },
          { value: 'CN_WISHPOST', description: 'WishPost' },
          { value: 'GLOBALTRANZ', description: 'GlobalTranz' },
          { value: 'HKD', description: 'Qingdao HKD International Logistics' },
          { value: 'UDS', description: 'United Delivery Service' },
          { value: 'BJSHOMEDELIVERY', description: 'BJS Distribution courier' },
          { value: 'YAKIT', description: 'Yakit courier' },
          { value: 'LEXSHIP', description: 'LexShip' },
          { value: 'OMNIVA', description: 'Omniva' },
          { value: 'SUTTON', description: 'Sutton Transport' },
          { value: 'COSTMETICSNOW', description: 'Cosmetics Now' },
          { value: 'PANTHER_REFERENCE', description: 'Panther Reference' },
          { value: 'SFCSERVICE', description: 'SFC Service' },
          { value: 'PFLOGISTICS', description: 'PFL' },
          { value: 'LTL', description: 'LTL COURIER' },
          { value: 'LOOMIS_EXPRESS', description: 'Loomis Express' },
          { value: 'PARKNPARCEL', description: 'Park N Parcel' },
          { value: 'SPRING_GDS', description: 'Spring GDS' },
          { value: 'GLS_ITALY', description: 'GLS Italy' },
          { value: 'ECEXPRESS', description: 'ECexpress' },
          { value: 'LINE', description: 'Line Clear Express & Logistics Sdn Bhd' },
          { value: 'INTERPARCEL_AU', description: 'Interparcel Australia' },
          { value: 'GEL_EXPRESS', description: 'Gel Express Logistik' },
          { value: 'AGILITY', description: 'Agility' },
          { value: 'XL_EXPRESS', description: 'XL Express' },
          { value: 'ADERONLINE', description: 'Ader couriers' },
          { value: 'DIRECTCOURIERS', description: 'Direct Couriers' },
          { value: 'PLANZER', description: 'Planzer Group' },
          { value: 'NOX_NIGHT_TIME_EXPRESS', description: 'NOX NightTimeExpress' },
          { value: 'SENDING', description: 'Sending Transporte Urgente y Comunicacion' },
          { value: 'HUODULL', description: 'Huodull' },
        ],
      }),
    carrier_name_other: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The name of carrier in free-form text for unavailable carriers. This field is mandatory when <code>carrier_name</code> is <code>OTHER</code>.',
      }),
    tracking_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL to track the dispute-related transaction shipment.' }),
    tracking_number: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(255)
      .openapi({ description: 'The number to track the dispute-related transaction shipment.' }),
  })
  .openapi({
    title: 'Tracking Information',
    description: 'The tracking information.',
    required: ['carrier_name', 'tracking_number'],
  })
  .openapi('TrackingInfo')

const TrackingInfoListSchema = z
  .array(TrackingInfoSchema)
  .min(1)
  .max(10)
  .openapi({
    description:
      'An array of relevant tracking information for the transaction involved in this dispute.',
  })
  .openapi('TrackingInfoList')

const RefundIdsSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ description: 'The ID of the refunded transaction.' })
  .openapi('RefundIds')

const RefundIdsListSchema = z
  .array(RefundIdsSchema)
  .min(1)
  .max(100)
  .openapi({ description: 'An array of refund IDs for the transaction involved in this dispute.' })
  .openapi('RefundIdsList')

const EvidenceInfoSchema = z
  .object({
    tracking_info: TrackingInfoListSchema.exactOptional(),
    refund_ids: RefundIdsListSchema.exactOptional(),
  })
  .openapi({
    title: 'Evidence Information',
    description: 'The evidence-related information.',
    required: [],
  })
  .openapi('EvidenceInfo')

const EvidenceSchema = z
  .object({
    evidence_type: z
      .enum([
        'PROOF_OF_FULFILLMENT',
        'PROOF_OF_REFUND',
        'PROOF_OF_DELIVERY_SIGNATURE',
        'PROOF_OF_RECEIPT_COPY',
        'RETURN_POLICY',
        'BILLING_AGREEMENT',
        'PROOF_OF_RESHIPMENT',
        'ITEM_DESCRIPTION',
        'POLICE_REPORT',
        'AFFIDAVIT',
        'PAID_WITH_OTHER_METHOD',
        'COPY_OF_CONTRACT',
        'TERMINAL_ATM_RECEIPT',
        'PRICE_DIFFERENCE_REASON',
        'SOURCE_CONVERSION_RATE',
        'BANK_STATEMENT',
        'CREDIT_DUE_REASON',
        'REQUEST_CREDIT_RECEIPT',
        'PROOF_OF_RETURN',
        'CREATE',
        'CHANGE_REASON',
        'PROOF_OF_REFUND_OUTSIDE_PAYPAL',
        'RECEIPT_OF_MERCHANDISE',
        'CUSTOMS_DOCUMENT',
        'CUSTOMS_FEE_RECEIPT',
        'INFORMATION_ON_RESOLUTION',
        'ADDITIONAL_INFORMATION_OF_ITEM',
        'DETAILS_OF_PURCHASE',
        'PROOF_OF_SIGNIFICANT_DIFFERENCE',
        'PROOF_OF_SOFTWARE_OR_SERVICE_NOT_AS_DESCRIBED',
        'PROOF_OF_CONFISCATION',
        'PROOF_OF_DAMAGE',
        'COPY_OF_LAW_ENFORCEMENT_AGENCY_REPORT',
        'ADDITIONAL_PROOF_OF_SHIPMENT',
        'PROOF_OF_DENIAL_BY_CARRIER',
        'THIRDPARTY_PROOF_FOR_DAMAGE_OR_SIGNIFICANT_DIFFERENCE',
        'VALID_SUPPORTING_DOCUMENT',
        'LEGIBLE_SUPPORTING_DOCUMENT',
        'RETURN_TRACKING_INFORMATION',
        'DELIVERY_RECEIPT',
        'PROOF_OF_INSTORE_RECEIPT',
        'ADDITIONAL_TRACKING_INFORMATION',
        'PROOF_OF_SHIPMENT_POSTAGE',
        'ONLINE_TRACKING_INFORMATION',
        'PROOF_OF_INSTORE_REFUND',
        'PROOF_FOR_SOFTWARE_OR_SERVICE_DELIVERED',
        'RETURN_ADDRESS_FOR_SHIPPING',
        'COPY_OF_THE_EPARCEL_MANIFEST',
        'COPY_OF_SHIPPING_MANIFEST',
        'APPEAL_AFFIDAVIT',
        'RECEIPT_OF_REPLACEMENT',
        'COPY_OF_DRIVERS_LICENSE',
        'ACCOUNT_CHANGE_INFORMATION',
        'DELIVERY_ADDRESS',
        'CONFIRMATION_OF_RESOLUTION',
        'MERCHANT_RESPONSE',
        'PERMISSION_DESCRIPTION',
        'STATUS_OF_MERCHANDISE',
        'LOST_CARD_DETAILS',
        'LAST_VALID_TRANSACTION_DETAILS',
        'ADDITIONAL_PROOF_OF_RETURN',
        'DECLARATION',
        'PROOF_OF_MISSING_ITEMS',
        'PROOF_OF_EMPTY_PACKAGE_OR_DIFFERENT_ITEM',
        'PROOF_OF_ITEM_NOT_RECEIVED',
        'ORDER_DETAILS',
        'LISTING_URL',
        'SHIPPING_INSURANCE',
        'BUYER_RESPONSE',
        'PHOTOS_OF_SHIPPED_ITEM',
        'OTHER',
        'CANCELLATION_DETAILS',
        'MERCHANT_CONTACT_DETAILS',
        'ITEM_DETAILS',
        'CORRECT_RECIPIENT_INFORMATION',
        'EXPLANATION_OF_FUNDS_NOT_DELIVERED',
      ])
      .exactOptional()
      .openapi({
        description: 'The evidence type.',
        'x-enumDescriptions': [
          {
            value: 'PROOF_OF_FULFILLMENT',
            description:
              "Proof of fulfillment should be a copy of the actual shipping label on the package that shows the destination address and the shipping company's stamp to verify the shipment date.",
          },
          { value: 'PROOF_OF_REFUND', description: 'Proof of refund issued to the buyer' },
          { value: 'PROOF_OF_DELIVERY_SIGNATURE', description: 'Proof of delivery signature.' },
          { value: 'PROOF_OF_RECEIPT_COPY', description: 'Copy of original receipt or invoice.' },
          {
            value: 'RETURN_POLICY',
            description: 'Copy of terms and conditions,contract or store return policy',
          },
          { value: 'BILLING_AGREEMENT', description: 'Copy of billing agreement.' },
          {
            value: 'PROOF_OF_RESHIPMENT',
            description:
              "Proof of reshipment should be a copy of the actual shipping label on the package that shows the destination address and the shipping company's stamp to verify the reshipment date. ",
          },
          {
            value: 'ITEM_DESCRIPTION',
            description: 'A copy of the original description of the item or service',
          },
          { value: 'POLICE_REPORT', description: 'Copy of the police report filed.' },
          {
            value: 'AFFIDAVIT',
            description: 'More information has to be provided about the claim using the affidavit.',
          },
          {
            value: 'PAID_WITH_OTHER_METHOD',
            description: 'Document showing item/service was paid by another payment method.',
          },
          { value: 'COPY_OF_CONTRACT', description: 'Copy of contract if applicable.' },
          { value: 'TERMINAL_ATM_RECEIPT', description: 'Copy of terminal/ATM receipt.' },
          {
            value: 'PRICE_DIFFERENCE_REASON',
            description:
              'Explanation of what the price difference is related to (increased tip amount, shipping charges, taxes, etc).',
          },
          {
            value: 'SOURCE_CONVERSION_RATE',
            description: 'Source of expected conversion rate or fee.',
          },
          {
            value: 'BANK_STATEMENT',
            description: 'Bank/Credit statement showing withdrawal transaction.',
          },
          { value: 'CREDIT_DUE_REASON', description: 'The credit due reason.' },
          { value: 'REQUEST_CREDIT_RECEIPT', description: 'The request credit receipt.' },
          {
            value: 'PROOF_OF_RETURN',
            description:
              'Proof of shipment or postage that shows you returned this item to your seller and should be a copy of the actual shipping label used.',
          },
          { value: 'CREATE', description: 'Additional evidence information during case creation.' },
          { value: 'CHANGE_REASON', description: 'The evidence related to the reason change.' },
          {
            value: 'PROOF_OF_REFUND_OUTSIDE_PAYPAL',
            description: 'Document should show that the seller issued a refund outside Paypal.',
          },
          {
            value: 'RECEIPT_OF_MERCHANDISE',
            description: 'Check with buyer if item Delivered (seller provided Proof of Shipping)',
          },
          {
            value: 'CUSTOMS_DOCUMENT',
            description: 'Document confirming that the item has been confiscated.',
          },
          { value: 'CUSTOMS_FEE_RECEIPT', description: 'Custom fees receipt paid by the buyer' },
          {
            value: 'INFORMATION_ON_RESOLUTION',
            description: 'Any resolution reached with the seller should be communicated to PayPal.',
          },
          {
            value: 'ADDITIONAL_INFORMATION_OF_ITEM',
            description: 'Any additional information of the item purchased.',
          },
          {
            value: 'DETAILS_OF_PURCHASE',
            description:
              'Specific details of a purchase made under a particular transaction has to be given.',
          },
          {
            value: 'PROOF_OF_SIGNIFICANT_DIFFERENCE',
            description:
              'More information required on how the item was damaged or was significantly different from the item advertised.',
          },
          {
            value: 'PROOF_OF_SOFTWARE_OR_SERVICE_NOT_AS_DESCRIBED',
            description:
              'Any screenshot or download/usage log showing that the software or service was unavailable or non-functional.',
          },
          {
            value: 'PROOF_OF_CONFISCATION',
            description:
              'Documentation from a third party or organization that evaluated this item that confirms they confiscated it.',
          },
          {
            value: 'PROOF_OF_DAMAGE',
            description: 'Documentation supporting the claim that the item is damaged.',
          },
          {
            value: 'COPY_OF_LAW_ENFORCEMENT_AGENCY_REPORT',
            description:
              'Report filed with a law enforcement agency or government organization. Examples of such agencies are -  Internet Crime Complaint Center (www.ic3.gov), state Consumer Protection office, state police or a Federal law enforcement agency such as the FBI or Postal Inspection Service.',
          },
          {
            value: 'ADDITIONAL_PROOF_OF_SHIPMENT',
            description:
              'Additional proof of shipment  such as a packing list, detailed invoice, or shipping manifest to confirm that all items have been shipped. Include carrier name and tracking number if available.',
          },
          {
            value: 'PROOF_OF_DENIAL_BY_CARRIER',
            description:
              'Documentation from the carrier should confirm the reason why they refuse to ship the item in question and the extent of the original damage.',
          },
          {
            value: 'THIRDPARTY_PROOF_FOR_DAMAGE_OR_SIGNIFICANT_DIFFERENCE',
            description:
              "Proof should be provided by an unbiased third-party, such as a dealer, appraiser or another individual or organisation that's qualified in the area of the item in question (other than yourself), and detail the extent of the damage or clearly explain how the item received significantly differs from the item advertised.",
          },
          {
            value: 'VALID_SUPPORTING_DOCUMENT',
            description:
              "The document you have provided doesn't support your claim that the item is Significantly Not as Described. Please provide a document to clearly show how the item received significantly differs from the item advertised.",
          },
          {
            value: 'LEGIBLE_SUPPORTING_DOCUMENT',
            description:
              'The document you have provided is illegible, unclear, or too dark to read.  Please provide a document that is legible and clear to read.',
          },
          {
            value: 'RETURN_TRACKING_INFORMATION',
            description:
              'Online tracking information for remaining items that have to be shipped to the seller.',
          },
          {
            value: 'DELIVERY_RECEIPT',
            description: 'Confirmation that the item has been received.',
          },
          {
            value: 'PROOF_OF_INSTORE_RECEIPT',
            description:
              'In-store receipt or online verification should clearly show that the buyer picked up the item.',
          },
          {
            value: 'ADDITIONAL_TRACKING_INFORMATION',
            description:
              'Tracking information should include the carrier name,  online tracking number and the website where the shipment can be tracked.',
          },
          {
            value: 'PROOF_OF_SHIPMENT_POSTAGE',
            description:
              "Proof of shipment or postage should be a copy of the actual shipping label on the package that shows the destination address and the carrier's stamp to verify the shipment date.",
          },
          {
            value: 'ONLINE_TRACKING_INFORMATION',
            description: 'Online tracking information to confirm delivery of item.',
          },
          {
            value: 'PROOF_OF_INSTORE_REFUND',
            description:
              'Proof should be an in-store refund receipt or company documentation that clearly shows a completed refund for the transaction.',
          },
          {
            value: 'PROOF_FOR_SOFTWARE_OR_SERVICE_DELIVERED',
            description:
              'Proof should be compelling evidence to prove that the item or service was as described  and was delivered to the buyer. Include information such as transaction ID, invoice ID, name or email to associate the evidence with the buyer along with date and time of the delivery.',
          },
          {
            value: 'RETURN_ADDRESS_FOR_SHIPPING',
            description:
              'Return address is required for the buyer to ship  the merchandise back to the seller.',
          },
          {
            value: 'COPY_OF_THE_EPARCEL_MANIFEST',
            description:
              "To validate a claim,  a copy of the eparcel manifest showing the buyer's address from Australia Post is required. ",
          },
          {
            value: 'COPY_OF_SHIPPING_MANIFEST',
            description:
              "The shipping manifest must show the buyer's address and can be obtained from the carrier.",
          },
          {
            value: 'APPEAL_AFFIDAVIT',
            description: 'Appeal affidavit is needed to make an appeal for any case outcome.',
          },
          {
            value: 'RECEIPT_OF_REPLACEMENT',
            description:
              'Check with buyer if the replacement of the item sent by the seller was received',
          },
          { value: 'COPY_OF_DRIVERS_LICENSE', description: 'Need Copy of Drivers license.' },
          {
            value: 'ACCOUNT_CHANGE_INFORMATION',
            description: 'Additional Details about how account was accessed/what was changed.',
          },
          {
            value: 'DELIVERY_ADDRESS',
            description: 'Address where item was supposed to be delivered.',
          },
          {
            value: 'CONFIRMATION_OF_RESOLUTION',
            description: 'Confirmation that item was received and issue resolved.',
          },
          {
            value: 'MERCHANT_RESPONSE',
            description: "Copy of merchant's response when the resolution was attempted.",
          },
          {
            value: 'PERMISSION_DESCRIPTION',
            description:
              'A Detailed description about the account or card level permission given to another person.',
          },
          {
            value: 'STATUS_OF_MERCHANDISE',
            description: "Details of the merchandise's current location.",
          },
          {
            value: 'LOST_CARD_DETAILS',
            description: 'Details of where and when the card was lost/stolen?.',
          },
          {
            value: 'LAST_VALID_TRANSACTION_DETAILS',
            description: 'Details of the last valid transaction made on the card.',
          },
          {
            value: 'ADDITIONAL_PROOF_OF_RETURN',
            description:
              'Document to confirm that the item to be returned to the seller has been shipped.',
          },
          {
            value: 'DECLARATION',
            description: 'Signed declaration about the information provided.',
          },
          {
            value: 'PROOF_OF_MISSING_ITEMS',
            description:
              'Image of open box with returned items and shipping label clearly visible.',
          },
          {
            value: 'PROOF_OF_EMPTY_PACKAGE_OR_DIFFERENT_ITEM',
            description:
              'Image of empty box or returned items that are different from what were expected and shipping label clearly visible.',
          },
          {
            value: 'PROOF_OF_ITEM_NOT_RECEIVED',
            description:
              'Any proof about the non receipt of the item, such as screenshot of tracking info.',
          },
          {
            value: 'ORDER_DETAILS',
            description:
              'Order details or photos of the item/service/booking/digital download available on the website.',
          },
          {
            value: 'LISTING_URL',
            description: 'The website URLs of the item/service/booking/digital download.',
          },
          {
            value: 'SHIPPING_INSURANCE',
            description: 'Insurance information of the shipped item.',
          },
          {
            value: 'BUYER_RESPONSE',
            description:
              "Copy of the buyer response or any other document showing buyer's understanding of the item/service/booking/digital download purchased.",
          },
          {
            value: 'PHOTOS_OF_SHIPPED_ITEM',
            description: 'Photos of the item that were shipped to the buyer.',
          },
          { value: 'OTHER', description: 'Other.' },
          {
            value: 'CANCELLATION_DETAILS',
            description:
              'Cancellation details information, for example- cancellation date, cancellation number.',
          },
          {
            value: 'MERCHANT_CONTACT_DETAILS',
            description:
              'Merchant contacted details information, for example- merchant contacted time, mode of contacting.',
          },
          {
            value: 'ITEM_DETAILS',
            description: 'Item related details information, for example- expected delivery date.',
          },
          {
            value: 'CORRECT_RECIPIENT_INFORMATION',
            description: 'Proof of the correct recipient name, email or phone.',
          },
          {
            value: 'EXPLANATION_OF_FUNDS_NOT_DELIVERED',
            description: 'Details on why the funds were not delivered to the correct recipient.',
          },
        ],
      }),
    evidence_info: EvidenceInfoSchema.exactOptional(),
    documents: DefinitionsDocumentListSchema.exactOptional(),
    notes: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'Any evidence-related notes.' }),
    source: z
      .enum([
        'REQUESTED_FROM_BUYER',
        'REQUESTED_FROM_SELLER',
        'SUBMITTED_BY_BUYER',
        'SUBMITTED_BY_SELLER',
        'SUBMITTED_BY_PARTNER',
      ])
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'The source of the evidence.',
        'x-enumDescriptions': [
          {
            value: 'REQUESTED_FROM_BUYER',
            description: 'PayPal requested evidence from the customer.',
          },
          {
            value: 'REQUESTED_FROM_SELLER',
            description: 'PayPal requested evidence from the merchant.',
          },
          { value: 'SUBMITTED_BY_BUYER', description: 'Evidence was submitted by the customer.' },
          { value: 'SUBMITTED_BY_SELLER', description: 'Evidence was submitted by the merchant.' },
          { value: 'SUBMITTED_BY_PARTNER', description: 'Evidence was submitted by the partner.' },
        ],
      }),
    date: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the evidence was received, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    item_id: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The item ID. If the merchant provides multiple pieces of evidence and the transaction has multiple item IDs, the merchant can use this value to associate a piece of evidence with an item ID.',
      }),
    item_type: ItemTypeSchema.exactOptional().openapi({
      readOnly: true,
      description: 'The item type for which the evidence is requested or submitted.',
    }),
    action_info: ActionInfoSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The action details for the information. Includes additional information such as the action for which the evidence was requested/submitted, and whether the evidence is mandatory for the corresponding action.',
    }),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      readOnly: true,
      description: 'The dispute life cycle stage for the evidence.',
    }),
  })
  .openapi({
    title: 'Evidence',
    description:
      'A merchant- or customer-submitted evidence document. evidence_info is expected for PROOF_OF_FULFILLMENT,PROOF_OF_REFUND and PROOF_OF_RETURN evidence types. documents and notes can be given for rest of the evidence types.',
    required: [],
  })
  .openapi('Evidence')

const EvidenceListSchema = z
  .array(EvidenceSchema)
  .min(1)
  .max(100)
  .openapi({ description: 'An array of evidence documents.' })
  .openapi('EvidenceList')

const OfferHistorySchema = z
  .object({
    offer_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the event occurred, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    actor: z
      .enum(['BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description: 'The event-related actor.',
        'x-enumDescriptions': [
          { value: 'BUYER', description: 'The actor is the customer.' },
          { value: 'SELLER', description: 'The actor is the merchant.' },
        ],
      }),
    event_type: z
      .enum(['PROPOSED', 'ACCEPTED', 'DENIED'])
      .exactOptional()
      .openapi({
        description: 'The type of the history event.',
        'x-enumDescriptions': [
          { value: 'PROPOSED', description: 'The merchant or customer proposed an offer.' },
          { value: 'ACCEPTED', description: 'The merchant or customer accepted the offer.' },
          { value: 'DENIED', description: 'The merchant or customer rejected the offer.' },
        ],
      }),
    offer_type: OfferTypeSchema.exactOptional(),
    offer_amount: MoneySchema.exactOptional().openapi({ description: 'The offer amount.' }),
    notes: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ readOnly: true, description: 'The user submitted notes.' }),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      readOnly: true,
      description: 'The dispute life cycle stage during the offer event.',
    }),
  })
  .openapi({ title: 'Offer History', description: 'The offer history.', required: [] })
  .openapi('OfferHistory')

const OfferHistoryListSchema = z
  .array(OfferHistorySchema)
  .min(1)
  .max(1000)
  .openapi({ description: 'An array of history information for an offer.' })
  .openapi('OfferHistoryList')

const OfferSchema = z
  .object({
    buyer_requested_amount: MoneySchema.exactOptional().openapi({
      description: 'The customer-requested refund for this dispute.',
    }),
    seller_offered_amount: MoneySchema.exactOptional().openapi({
      description: 'The merchant-offered refund for this dispute.',
    }),
    offer_type: OfferTypeSchema.exactOptional(),
    history: OfferHistoryListSchema.exactOptional(),
  })
  .openapi({
    title: 'Offer',
    description: 'The merchant-proposed offer for a dispute.',
    required: [],
  })
  .openapi('Offer')

const RefundDetailsSchema = z
  .object({
    allowed_refund_amount: MoneySchema.exactOptional().openapi({
      description: 'The maximum refundable amount.',
    }),
  })
  .openapi({ title: 'Refund Details', description: 'The refund details.', required: [] })
  .openapi('RefundDetails')

const SupportingInfoDefinitionsDocumentListSchema = z
  .array(DocumentSchema)
  .min(1)
  .max(100)
  .openapi({
    readOnly: true,
    description:
      'An array of metadata for the documents which were uploaded as supporting information for the dispute.',
  })
  .openapi('SupportingInfoDefinitionsDocumentList')

const SupportingInfoSchema = z
  .object({
    notes: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Any supporting notes.' }),
    documents: SupportingInfoDefinitionsDocumentListSchema.exactOptional(),
    source: z
      .enum(['SUBMITTED_BY_BUYER', 'SUBMITTED_BY_SELLER', 'SUBMITTED_BY_PARTNER'])
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'The source of the Information.',
        'x-enumDescriptions': [
          {
            value: 'SUBMITTED_BY_BUYER',
            description: 'Information was submitted by the customer.',
          },
          {
            value: 'SUBMITTED_BY_SELLER',
            description: 'Information was submitted by the merchant.',
          },
          {
            value: 'SUBMITTED_BY_PARTNER',
            description: 'Information was submitted by the partner.',
          },
        ],
      }),
    provided_time: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the information was received, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      readOnly: true,
      description: 'The dispute life cycle stage for the supporting info.',
    }),
  })
  .openapi({
    title: 'Supporting Info',
    description: 'A merchant- or customer-submitted supporting information.',
    required: [],
  })
  .openapi('SupportingInfo')

const SupportingInfoListSchema = z
  .array(SupportingInfoSchema)
  .min(1)
  .max(100)
  .openapi({
    readOnly: true,
    description: 'An array of all the supporting information that are associated to this dispute.',
  })
  .openapi('SupportingInfoList')

const DisputeSchema = z
  .object({
    dispute_id: z
      .string()
      .regex(/^[A-Za-z0-9-]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ readOnly: true, description: 'The ID of the dispute.' }),
    create_time: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the dispute was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    update_time: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    disputed_transactions: TransactionInfoListSchema.exactOptional(),
    reason: DisputeReasonSchema.exactOptional(),
    status: StatusSchema.exactOptional().openapi({ readOnly: true }),
    dispute_amount: MoneySchema.exactOptional().openapi({
      description:
        'The amount in the transaction that the customer originally disputed. Because customers can sometimes dispute only part of the payment, the disputed amount might be different from the total gross or net amount of the original transaction.',
    }),
    dispute_asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The asset in the transaction that the customer disputed.',
    }),
    fee_policy: FeePolicySchema.exactOptional().openapi({
      readOnly: true,
      description:
        'Policy that determines whether the fee needs to be charged, retained or returned while moving the money as part of dispute process.',
    }),
    external_reason_code: z
      .string()
      .regex(/^[A-Za-z0-9._-]+$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The code that identifies the reason for the credit card chargeback. Each card issuer follows their own standards for defining reason type, code, and its format. For more details about the external reason code, see the card issue site. Available for only unbranded transactions.',
      }),
    dispute_outcome: DisputeOutcomeSchema.exactOptional().openapi({ readOnly: true }),
    adjudications: AdjudicationListSchema.exactOptional(),
    money_movements: MoneyMovementListSchema.exactOptional(),
    fund_movements: FundMovementListSchema.exactOptional(),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      readOnly: true,
    }),
    dispute_channel: DisputeChannelSchema.exactOptional(),
    messages: MessageListSchema.exactOptional(),
    extensions: ExtensionsSchema.exactOptional(),
    evidences: EvidenceListSchema.exactOptional(),
    buyer_response_due_date: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        "The date and time by when the customer must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the customer does not respond by this date and time, the dispute is closed in the merchant's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.",
    }),
    seller_response_due_date: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        "The date and time by when the merchant must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the merchant does not respond by this date and time, the dispute is closed in the customer's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.",
    }),
    offer: OfferSchema.exactOptional().openapi({ readOnly: true }),
    refund_details: RefundDetailsSchema.exactOptional().openapi({ readOnly: true }),
    communication_details: CommunicationDetailsSchema.exactOptional(),
    supporting_info: SupportingInfoListSchema.exactOptional(),
    allowed_response_options: AllowedResponseOptionsSchema.exactOptional().openapi({
      readOnly: true,
    }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Dispute Details', description: 'The dispute details.', required: [] })
  .openapi('Dispute')

const DisputeStateSchema = z
  .enum([
    'OPEN_INQUIRIES',
    'REQUIRED_ACTION',
    'REQUIRED_OTHER_PARTY_ACTION',
    'UNDER_PAYPAL_REVIEW',
    'APPEALABLE',
    'RESOLVED',
  ])
  .openapi({
    title: 'Dispute State',
    description:
      'The user specific state of the dispute, could vary between parties during the dispute lifecycle.',
    'x-enumDescriptions': [
      { value: 'OPEN_INQUIRIES', description: 'The dispute is open.' },
      { value: 'REQUIRED_ACTION', description: 'The dispute is waiting for a response.' },
      {
        value: 'REQUIRED_OTHER_PARTY_ACTION',
        description: 'The dispute is waiting for a response from other party.',
      },
      { value: 'UNDER_PAYPAL_REVIEW', description: 'The dispute is under review with PayPal.' },
      { value: 'APPEALABLE', description: 'The dispute can be appealed.' },
      { value: 'RESOLVED', description: 'The dispute is resolved.' },
    ],
  })
  .openapi('DisputeState')

const DisputeInfoSchema = z
  .object({
    dispute_id: z
      .string()
      .regex(/^[A-Za-z0-9-]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ readOnly: true, description: 'The ID of the dispute.' }),
    create_time: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the dispute was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    update_time: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.',
    }),
    reason: DisputeReasonSchema.exactOptional(),
    status: StatusSchema.exactOptional().openapi({ readOnly: true }),
    dispute_state: DisputeStateSchema.exactOptional().openapi({ readOnly: true }),
    dispute_amount: MoneySchema.exactOptional().openapi({
      description:
        'The amount in the transaction that the customer originally disputed. Because customers can sometimes dispute only part of the payment, the disputed amount might be different from the total gross or net amount of the original transaction.',
    }),
    dispute_asset: CryptocurrencySchema.exactOptional().openapi({
      description: 'The asset in the transaction that the customer disputed.',
    }),
    dispute_life_cycle_stage: DisputeLifecycleStageSchema.exactOptional().openapi({
      readOnly: true,
    }),
    dispute_channel: DisputeChannelSchema.exactOptional().openapi({ readOnly: true }),
    buyer_response_due_date: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        "The date and time by when the customer must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the customer does not respond by this date and time, the dispute is closed in the merchant's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.",
    }),
    seller_response_due_date: DateTimeSchema.exactOptional().openapi({
      readOnly: true,
      description:
        "The date and time by when the merchant must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the merchant does not respond by this date and time, the dispute is closed in the customer's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.",
    }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute Summary Information',
    description: 'The dispute summary information.',
    required: [],
  })
  .openapi('DisputeInfo')

const DisputeInfoListSchema = z
  .array(DisputeInfoSchema)
  .min(1)
  .max(100)
  .openapi({
    description:
      'An array of disputes that match the filter criteria. Sorted in latest to earliest creation time order.',
  })
  .openapi('DisputeInfoList')

const DisputeSearchSchema = z
  .object({
    items: DisputeInfoListSchema.exactOptional(),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute Search Response',
    description:
      'An array of disputes. Includes links that enable you to navigate through the response.',
    required: [],
  })
  .openapi('DisputeSearch')

const ErrorDetails_2Schema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: z
      .string()
      .default('body')
      .exactOptional()
      .openapi({
        description:
          'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
      }),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails_2')

const ErrorDetailsListSchema = z
  .array(ErrorDetails_2Schema)
  .openapi({ description: 'An array of additional details about the error.' })
  .openapi('ErrorDetailsList')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const ErrorSchema = z
  .object({
    name: z.string().openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z.string().openapi({ description: 'The message that describes the error.' }),
    debug_id: z
      .string()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    information_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The information link, or URI, that shows detailed information about this error for the developer.',
        readOnly: true,
      }),
    details: ErrorDetailsListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Error',
    description: 'The error details.',
    required: ['name', 'message', 'debug_id'],
  })
  .openapi('Error')

const ErrorLocationSchema = z
  .enum(['body', 'path', 'query'])
  .default('body')
  .openapi({
    description:
      'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
  })
  .openapi('ErrorLocation')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: ErrorLocationSchema.exactOptional(),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails')

const ErrorLinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(20000)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(100)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('ErrorLinkDescription')

const Error_400Schema = z
  .object({
    name: z.literal('INVALID_REQUEST').exactOptional(),
    message: z
      .literal('Request is not well-formed, syntactically incorrect, or violates schema.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Bad Request Error',
    description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
    required: [],
  })
  .openapi('Error_400')

const Error_401Schema = z
  .object({
    name: z.literal('AUTHENTICATION_FAILURE').exactOptional(),
    message: z
      .literal(
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unauthorized Error',
    description:
      'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
    required: [],
  })
  .openapi('Error_401')

const Error_403Schema = z
  .object({
    name: z.literal('NOT_AUTHORIZED').exactOptional(),
    message: z.literal('Authorization failed due to insufficient permissions.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not Authorized Error',
    description:
      'The client is not authorized to access this resource, although it may have valid credentials. ',
    required: [],
  })
  .openapi('Error_403')

const Error_404Schema = z
  .object({
    name: z.literal('RESOURCE_NOT_FOUND').exactOptional(),
    message: z.literal('The specified resource does not exist.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not found Error',
    description:
      'The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.',
    required: [],
  })
  .openapi('Error_404')

const Error_409Schema = z
  .object({
    name: z.literal('RESOURCE_CONFLICT').exactOptional(),
    message: z
      .literal('The server has detected a conflict while processing this request.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Resource Conflict Error',
    description: 'The server has detected a conflict while processing this request.',
    required: [],
  })
  .openapi('Error_409')

const Error_415Schema = z
  .object({
    name: z.literal('UNSUPPORTED_MEDIA_TYPE').exactOptional(),
    message: z
      .literal("The server does not support the request payload's media type.")
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unsupported Media Type Error',
    description: "The server does not support the request payload's media type.",
    required: [],
  })
  .openapi('Error_415')

const Error_422Schema = z
  .object({
    name: z.literal('UNPROCESSABLE_ENTITY').exactOptional(),
    message: z
      .literal(
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unprocessable Entity Error',
    description:
      'The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.',
    required: [],
  })
  .openapi('Error_422')

const Error_500Schema = z
  .object({
    name: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('An internal server error occurred.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Internal Server Error',
    description:
      'This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.',
    example: {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An internal server error occurred.',
      debug_id: '90957fca61718',
      links: [
        {
          href: 'https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR',
          rel: 'information_link',
        },
      ],
    },
    required: [],
  })
  .openapi('Error_500')

const Error_503Schema = z
  .object({
    name: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Service Unavailable.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Service Unavailable Error',
    description:
      'The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.',
    example: {
      name: 'SERVICE_UNAVAILABLE',
      message: 'Service Unavailable.',
      debug_id: '90957fca61718',
      information_link:
        'https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE',
    },
    required: [],
  })
  .openapi('Error_503')

const ErrorDefaultSchema = z
  .xor([
    Error_400Schema,
    Error_401Schema,
    Error_403Schema,
    Error_404Schema,
    Error_409Schema,
    Error_415Schema,
    Error_422Schema,
    Error_500Schema,
    Error_503Schema,
  ])
  .openapi({ description: 'The default error response.' })
  .openapi('ErrorDefault')

const EscalateSchema = z
  .object({
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The notes about the escalation of the dispute to a claim.' }),
    buyer_escalation_reason: BuyerEscalationReasonSchema.exactOptional(),
  })
  .openapi({
    title: 'Escalate Claim Request',
    description: 'A merchant request to escalate a dispute, by ID, to a PayPal claim.',
    required: [],
  })
  .openapi('Escalate')

const EscalateResponseSchema = z
  .object({ links: DefinitionsLinkDescriptionListSchema.exactOptional() })
  .openapi({
    title: 'Escalate Response',
    description: 'The response for escalate action.',
    required: [],
  })
  .openapi('EscalateResponse')

const MakeOfferSchema = z
  .object({
    note: z
      .string()
      .regex(/^(.|\r?\n)*$/)
      .min(1)
      .max(2000)
      .openapi({ description: "The merchant's notes about the offer." }),
    offer_amount: MoneySchema.exactOptional().openapi({
      description: 'The amount proposed to resolve the dispute.',
    }),
    return_shipping_address: AddressPortableSchema.exactOptional().openapi({
      description:
        'The return address for the item. Required when the customer must return an item to the merchant for the <code>MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED</code> dispute reason, especially if the refund amount is less than the dispute amount.',
    }),
    invoice_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          "The merchant-provided ID of the invoice for the refund. This optional value maps the refund to an invoice ID in the merchant's system.",
      }),
    offer_type: OfferTypeSchema,
  })
  .openapi({
    title: 'Make Offer Request',
    description: 'A merchant request to make an offer to resolve a dispute.',
    required: ['note', 'offer_type'],
  })
  .openapi('MakeOffer')

const PatchSchema = z
  .object({
    op: z.enum(['add', 'remove', 'replace', 'move', 'copy', 'test']).openapi({
      description: 'The operation.',
      'x-enumDescriptions': [
        {
          value: 'add',
          description:
            'Depending on the target location reference, completes one of these functions:<ul><li><strong>The target location is an array index</strong>. Inserts a new value into the array at the specified index.</li><li><strong>The target location is an object parameter that does not already exist</strong>. Adds a new parameter to the object.</li><li><strong>The target location is an object parameter that does exist</strong>. Replaces that parameter\'s value.</li></ul>The <code>value</code> parameter defines the value to add. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.1">4.1. add</a>.',
        },
        {
          value: 'remove',
          description:
            'Removes the value at the target location. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.2">4.2. remove</a>.',
        },
        {
          value: 'replace',
          description:
            'Replaces the value at the target location with a new value. The operation object must contain a <code>value</code> parameter that defines the replacement value. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.3">4.3. replace</a>.',
        },
        {
          value: 'move',
          description:
            'Removes the value at a specified location and adds it to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to move the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.4">4.4. move</a>.',
        },
        {
          value: 'copy',
          description:
            'Copies the value at a specified location to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to copy the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.5">4.5. copy</a>.',
        },
        {
          value: 'test',
          description:
            'Tests that a value at the target location is equal to a specified value. The operation object must contain a <code>value</code> parameter that defines the value to compare to the target location\'s value. For the operation to succeed, the target location must be equal to the <code>value</code> value. For test, <code>equal</code> indicates that the value at the target location and the value that <code>value</code> defines are of the same JSON type. The data type of the value determines how equality is defined:<table><thead align="left"><tr><th>Type</th><th>Considered equal if both values</th></tr></thead><tbody align="left"><tr><td><strong>strings</strong></td><td>Contain the same number of Unicode characters and their code points are byte-by-byte equal.</td></tr><tr><td><strong>numbers</strong></td><td>Are numerically equal.</td></tr><tr><td><strong>arrays</strong></td><td>Contain the same number of values, and each value is equal to the value at the corresponding position in the other array, by using these type-specific rules.</td></tr><tr><td><strong>objects</strong></td><td>Contain the same number of parameters, and each parameter is equal to a parameter in the other object, by comparing their keys (as strings) and their values (by using these type-specific rules).</td></tr><tr><td><strong>literals (<code>false</code>, <code>true</code>, and <code>null</code>)</strong></td><td>Are the same. The comparison is a logical comparison. For example, whitespace between the parameter values of an array is not significant. Also, ordering of the serialization of object parameters is not significant.</td></tr></tbody></table>For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.6">4.6. test</a>.',
        },
      ],
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.',
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        title: 'Patch Value',
        description:
          'The value to apply. The <code>remove</code>, <code>copy</code>, and <code>move</code> operations do not require a value. Since <a href="https://www.rfc-editor.org/rfc/rfc69021">JSON Patch</a> allows any type for <code>value</code>, the <code>type</code> property is not specified.',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.',
      }),
  })
  .openapi({
    title: 'Patch',
    description: 'The JSON patch object to apply partial updates to resources.',
    required: ['op'],
  })
  .openapi('Patch')

const PatchRequestSchema = z
  .array(PatchSchema)
  .openapi({
    title: 'Patch Request',
    description: 'An array of JSON patch objects to apply partial updates to resources.',
  })
  .openapi('PatchRequest')

const RequireEvidenceSchema = z
  .object({
    action: z.enum(['BUYER_EVIDENCE', 'SELLER_EVIDENCE']).openapi({
      description:
        'The action. Indicates whether the state change enables the customer or merchant to submit evidence.',
      'x-enumDescriptions': [
        {
          value: 'BUYER_EVIDENCE',
          description:
            'Changes the status of the dispute to <code>WAITING_FOR_BUYER_RESPONSE</code>.',
        },
        {
          value: 'SELLER_EVIDENCE',
          description:
            'Changes the status of the dispute to <code>WAITING_FOR_SELLER_RESPONSE</code>.',
        },
      ],
    }),
  })
  .openapi({
    title: 'Require Evidence Request',
    description:
      'Sandbox only. Updates the state of a dispute, by ID, to either <code>WAITING_FOR_BUYER_RESPONSE</code> or <code>WAITING_FOR_SELLER_RESPONSE</code>. This state change enables either the customer or merchant to submit evidence for the dispute. Specify an <code>action</code> value in the JSON request body to indicate whether the state change enables the customer or merchant to submit evidence.',
    required: ['action'],
  })
  .openapi('RequireEvidence')

const SubsequentActionSchema = z
  .object({ links: DefinitionsLinkDescriptionListSchema.exactOptional() })
  .openapi({ title: 'Subsequent Action', description: 'The subsequent action.', required: [] })
  .openapi('SubsequentAction')

const StartTimeParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .default('Current date and time')
  .exactOptional()
  .openapi({
    param: {
      name: 'start_time',
      in: 'query',
      description:
        'Filters the disputes in the response by a creation date and time. The start time must be within the last 180 days. Value is in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.<br/><br/>You can specify either but not both the `start_time` and `disputed_transaction_id` query parameters.',
      deprecated: true,
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
        default: 'Current date and time',
      },
      required: false,
    },
  })

const DisputedTransactionIdParamsSchema = z
  .string()
  .regex(/^[0-9A-Z_]+$/)
  .min(1)
  .max(255)
  .exactOptional()
  .openapi({
    param: {
      name: 'disputed_transaction_id',
      in: 'query',
      description:
        'Filters the disputes in the response by a transaction, by ID.<br/><br/>You can specify either but not both the `start_time` and `disputed_transaction_id` query parameter.',
      schema: { type: 'string', minLength: 1, maxLength: 255, pattern: '^[0-9A-Z_]+$' },
      required: false,
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(50),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description: 'Limits the number of disputes in the response to this value.',
      schema: { type: 'integer', minimum: 1, maximum: 50, default: 10 },
      required: false,
    },
  })

const NextPageTokenParamsSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]+$/)
  .min(1)
  .max(255)
  .default('The first page of data')
  .exactOptional()
  .openapi({
    param: {
      name: 'next_page_token',
      in: 'query',
      description:
        'The token that describes the next page of results to fetch. The <a href="/docs/api/customer-disputes/v1/#disputes_list">list disputes</a> call returns this token in the HATEOAS links in the response.',
      deprecated: true,
      schema: {
        type: 'string',
        minLength: 1,
        maxLength: 255,
        pattern: '^[A-Za-z0-9+\\/=]+$',
        default: 'The first page of data',
      },
      required: false,
    },
  })

const DisputeStateParamsSchema = z
  .string()
  .regex(/^[0-9A-Z_]+$/)
  .min(1)
  .max(2000)
  .exactOptional()
  .openapi({
    param: {
      name: 'dispute_state',
      in: 'query',
      description:
        'Filters the disputes in the response by a state. Separate multiple values with a comma (`,`). When you specify more than one dispute_state, the response lists disputes that belong to any of the specified dispute_state.',
      'x-enumDescriptions': [
        {
          value: 'REQUIRED_ACTION',
          description:
            'Filters the disputes in the response to those with the <code>REQUIRED_ACTION</code> dispute state.',
        },
        {
          value: 'REQUIRED_OTHER_PARTY_ACTION',
          description:
            'Filters the disputes in the response to those with the <code>REQUIRED_OTHER_PARTY_ACTION</code> dispute state.',
        },
        {
          value: 'UNDER_PAYPAL_REVIEW',
          description:
            'Filters the disputes in the response to those with the <code>UNDER_PAYPAL_REVIEW</code> dispute state.',
        },
        {
          value: 'RESOLVED',
          description:
            'Filters the disputes in the response to those with the <code>RESOLVED</code> dispute state.',
        },
        {
          value: 'OPEN_INQUIRIES',
          description:
            'Filters the disputes in the response to those with the <code>OPEN_INQUIRIES</code> dispute state.',
        },
        {
          value: 'APPEALABLE',
          description:
            'Filters the disputes in the response to those with the <code>APPEALABLE</code> dispute state.',
        },
      ],
      schema: { type: 'string', minLength: 1, maxLength: 2000, pattern: '^[0-9A-Z_]+$' },
      required: false,
    },
  })

const UpdateTimeBeforeParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .exactOptional()
  .openapi({
    param: {
      name: 'update_time_before',
      in: 'query',
      description:
        'The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`. update_time_before must be within the last 180 days and the default is the current time.',
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
      required: false,
    },
  })

const UpdateTimeAfterParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .exactOptional()
  .openapi({
    param: {
      name: 'update_time_after',
      in: 'query',
      description:
        'The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`. update_time_after must be within the last 180 days and the default is the maximum time (180 days) supported.',
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
      required: false,
    },
  })

const IdParamsSchema = z
  .string()
  .regex(/^[A-Za-z0-9-]+$/)
  .min(1)
  .max(255)
  .openapi({
    param: {
      name: 'id',
      in: 'path',
      description: 'The ID of the dispute for which to provide the supporting information.',
      required: true,
      schema: { type: 'string', minLength: 1, maxLength: 255, pattern: '^[A-Za-z0-9-]+$' },
    },
  })

const EvidencesRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          'evidence-file': z
            .file()
            .exactOptional()
            .openapi({ type: 'string', format: 'binary', description: 'A file with evidence.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/disputes/read-seller':
          'This privilege allows client to read and search a disputes of a merchant but gets only a limited and allowed set of fields back .',
        'https://uri.paypal.com/services/disputes/read-buyer':
          'This privilege allows client to read and search disputes but returns a limited and allowed set of fields back.',
        'https://uri.paypal.com/services/disputes/read-ebay':
          'This privilege allows client to read and search a disputes of an user but gets only a limited and allowed set of fields back to ebay.',
        'https://uri.paypal.com/services/disputes/read':
          'This privilege allows client to read and search a dispute of an user with all fields.',
        'https://uri.paypal.com/services/disputes/webhooks':
          'This privilege allows webhook platform to read a dispute event',
        'https://uri.paypal.com/services/disputes/create':
          'This privilege allows client to validate eligibility and create a dispute on his transaction(s).',
        'https://uri.paypal.com/services/disputes/update-seller':
          'This privilege allows client to update a dispute (Merchant actions).',
        'https://uri.paypal.com/services/disputes/update-buyer':
          'This privilege allows client to update a dispute (customer actions).',
        'https://uri.paypal.com/services/referred-disputes/readwrite':
          'This privilege allows client to read and update a referred dispute.',
        'https://uri.paypal.com/services/disputes/read-partner':
          'This privilege allows client to read and search disputes but returns a limited and allowed set of fields back.',
        'https://uri.paypal.com/services/disputes/update-partner':
          'This privilege allows client to update a dispute (Partner actions).',
      },
    },
  },
}

export const getV1CustomerDisputesRoute = createRoute({
  method: 'get',
  path: '/v1/customer/disputes',
  tags: ['disputes'],
  summary: 'List disputes',
  description:
    'Lists disputes with a summary set of details, which shows the <code>dispute_id</code>, <code>reason</code>, <code>status</code>, <code>dispute_state</code>, <code>dispute_life_cycle_stage</code>, <code>dispute_channel</code>, <code>dispute_amount</code>, <code>create_time</code> and <code>update_time</code> fields.<br/><br/>To filter the disputes in the response, specify one or more optional query parameters. To limit the number of disputes in the response, specify the <code>page_size</code> query parameter.<br/><br/>To list multiple disputes, set these query parameters in the request:<ul><li><code>page_size=2</code></li><li><code>start_time</code> instead of <code>disputed_transaction_id</code></li></ul><br/>If the response contains more than two disputes, it lists two disputes and includes a HATEOAS link to the next page of results.',
  operationId: 'disputes.list',
  request: {
    query: z.object({
      start_time: StartTimeParamsSchema,
      disputed_transaction_id: DisputedTransactionIdParamsSchema,
      page_size: PageSizeParamsSchema,
      next_page_token: NextPageTokenParamsSchema,
      dispute_state: DisputeStateParamsSchema,
      update_time_before: UpdateTimeBeforeParamsSchema,
      update_time_after: UpdateTimeAfterParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that lists disputes with a full or summary set of details. Default is a summary set of details, which shows the <code>dispute_id</code>, <code>reason</code>, <code>status</code>, <code>dispute_amount</code>, <code>create_time</code>, and <code>update_time</code> fields for each dispute.',
      content: { 'application/json': { schema: DisputeSearchSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-buyer'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-ebay'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-partner'] },
  ],
})

export const getV1CustomerDisputesIdRoute = createRoute({
  method: 'get',
  path: '/v1/customer/disputes/{id}',
  tags: ['disputes'],
  summary: 'Show dispute details',
  description:
    "Shows details for a dispute, by ID.<blockquote><strong>Note:</strong> The fields that appear in the response depend on the access. For example, if the merchant requests shows dispute details, the customer's email ID does not appear.</blockquote>",
  operationId: 'disputes.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows dispute details.',
      content: { 'application/json': { schema: DisputeSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-buyer'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-ebay'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/read-partner'] },
  ],
})

export const patchV1CustomerDisputesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/customer/disputes/{id}',
  tags: ['disputes'],
  summary: 'Partially update dispute',
  description:
    'Partially updates a dispute, by ID. Seller can update the `communication_detail` value or The partner can add the `partner action` information.',
  operationId: 'disputes.patch',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatchRequestSchema },
        'multipart/related': { schema: PatchRequestSchema },
        'multipart/form-data': { schema: PatchRequestSchema },
        'multipart/mixed': { schema: PatchRequestSchema },
      },
    },
  },
  responses: {
    202: {
      description:
        'A successfully accepted request returns the HTTP `202 Accepted` status code and a JSON response body that includes a [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) to the ID of the request. The Clients can choose webhook option as well to receive dispute update notification.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] }],
})

export const postV1CustomerDisputesIdProvideEvidenceRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/provide-evidence',
  tags: ['disputes-actions'],
  summary: 'Provide evidence',
  description:
    'Provides evidence for a dispute, by ID. A merchant can provide evidence for disputes with the <code>WAITING_FOR_SELLER_RESPONSE</code> status while customers can provide evidence for disputes with the <code>WAITING_FOR_BUYER_RESPONSE</code> status. Evidence can be a proof of delivery or proof of refund document or notes, which can include logs. A proof of delivery document includes a tracking number while a proof of refund document includes a refund ID. For other evidence type, notes and documents can be given. Evidences requested from you can be found by checking the type of evidence for the corresponding source under the evidence section of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. The source will be <code>REQUESTED_FROM_SELLER</code> for evidences requested from the merchant while it will be <code>REQUESTED_FROM_BUYER</code> for evidences requested from the customer. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the evidence in the JSON request body and use the <code>provide-evidence</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. In case the link is not present in the response, you can\'t provide evidence for the dispute. For information about dispute reasons, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.',
  operationId: 'disputes.provide-evidence',
  request: { params: z.object({ id: IdParamsSchema }), body: EvidencesRequestBody },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-partner'] },
  ],
})

export const postV1CustomerDisputesIdAppealRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/appeal',
  tags: ['disputes-actions'],
  summary: 'Appeal dispute',
  description:
    'Appeals a dispute, by ID. To appeal a dispute, use the <code>appeal</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> from the show dispute details response. If this link does not appear, you cannot appeal the dispute. Submit new evidence as a document or notes in the JSON request body. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the dispute ID in the URI and specify the evidence in the JSON request body. For information about dispute reasons, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.',
  operationId: 'disputes.appeal',
  request: { params: z.object({ id: IdParamsSchema }), body: EvidencesRequestBody },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdAcceptClaimRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/accept-claim',
  tags: ['disputes-actions'],
  summary: 'Accept claim',
  description:
    'Accepts liability for a claim, by ID. When you accept liability for a claim, the dispute closes in the customer’s favor and PayPal automatically refunds money to the customer from the merchant\'s account. Allowed accept_claim_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object.',
  operationId: 'disputes.accept-claim',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'accept-claim-document': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'A file with evidence.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] }],
})

export const postV1CustomerDisputesIdAdjudicateRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/adjudicate',
  tags: ['disputes-actions'],
  summary: 'Settle dispute',
  description:
    '<blockquote><strong>Important:</strong> This method is for sandbox use only.</blockquote> Settles a dispute in either the customer\'s or merchant\'s favor. Merchants can make this call in the sandbox to complete end-to-end dispute resolution testing, which mimics the dispute resolution that PayPal agents normally complete. To make this call, the dispute <code>status</code> must be <code>UNDER_REVIEW</code> and <code>adjudicate</code> link  should be available in the <a href="/docs/api/customer-disputes/v1/#disputes_get!c=200&path=links&t=response/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response.',
  operationId: 'disputes.adjudicate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: AdjudicateSchema,
          examples: { adjudicate: { value: { adjudication_outcome: 'BUYER_FAVOR' } } },
        },
        'multipart/related': { schema: AdjudicateSchema },
        'multipart/form-data': { schema: AdjudicateSchema },
        'multipart/mixed': { schema: AdjudicateSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdRequireEvidenceRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/require-evidence',
  tags: ['disputes-actions'],
  summary: 'Update dispute status',
  description:
    '<blockquote><strong>Important:</strong> This method is for sandbox use only.</blockquote> Updates the status of a dispute, by ID, from <code>UNDER_REVIEW</code> to either:<ul><li><code>WAITING_FOR_BUYER_RESPONSE</code></li><li><code>WAITING_FOR_SELLER_RESPONSE</code></li></ul>This status change enables either the customer or merchant to submit evidence for the dispute. To make this call, the dispute <code>status</code> must be <code>UNDER_REVIEW</code> and <code>require-evidence</code> link  should be available in the <a href="/docs/api/customer-disputes/v1/#disputes_get!c=200&path=links&t=response/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. Specify an <code>action</code> value in the JSON request body to indicate whether the status change enables the customer or merchant to submit evidence:<table><thead><tr align="left"><th>If <code>action</code> is</th><th>The <code>status</code> updates to</th></tr></thead><tbody><tr><td><code>BUYER_EVIDENCE</code></td><td> <code>WAITING_FOR_BUYER_RESPONSE</code></td></tr><tr><td><code>SELLER_EVIDENCE</code></td><td> <code>WAITING_FOR_SELLER_RESPONSE</code></td></tr></tbody></table>.',
  operationId: 'disputes.require-evidence',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: RequireEvidenceSchema,
          examples: { escalate: { value: { note: 'Escalating to PayPal claim for resolution.' } } },
        },
        'multipart/related': { schema: RequireEvidenceSchema },
        'multipart/form-data': { schema: RequireEvidenceSchema },
        'multipart/mixed': { schema: RequireEvidenceSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdEscalateRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/escalate',
  tags: ['disputes-actions'],
  summary: 'Escalate dispute to claim',
  description:
    'Escalates the dispute, by ID, to a PayPal claim. To make this call, the stage in the dispute lifecycle must be `INQUIRY`.',
  operationId: 'disputes.escalate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: EscalateSchema,
          examples: { require_evidence: { value: { action: 'BUYER_EVIDENCE' } } },
        },
        'multipart/related': { schema: EscalateSchema },
        'multipart/form-data': { schema: EscalateSchema },
        'multipart/mixed': { schema: EscalateSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: EscalateResponseSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdSendMessageRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/send-message',
  tags: ['disputes-actions'],
  summary: 'Send message about dispute to other party',
  description:
    'Sends a message about a dispute, by ID, to the other party in the dispute. Merchants and customers can only send messages if the `dispute_life_cycle_stage` value is `INQUIRY`. For constraints and rules regarding documents that can be attached as part of the message, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>. To send a message, use the <code>send-message</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response and specify the message in the JSON request body. In case the link is not present in the response you can\'t send a message on the dispute.',
  operationId: 'disputes.send-message',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              message_document: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'A file that contains any additional info about the message posted.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdMakeOfferRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/make-offer',
  tags: ['disputes-actions'],
  summary: 'Make offer to resolve dispute',
  description:
    'Makes an offer to the other party to resolve a dispute, by ID. To make this call, the stage in the dispute lifecycle must be `INQUIRY`. If the customer accepts the offer, PayPal automatically makes a refund. Allowed offer_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object.',
  operationId: 'disputes.make-offer',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: MakeOfferSchema,
          examples: {
            make_offer: {
              value: {
                note: 'Offer refund with replacement item.',
                offer_amount: { currency_code: 'USD', value: '23' },
                offer_type: 'REFUND_WITH_REPLACEMENT',
              },
            },
          },
        },
        'multipart/related': { schema: MakeOfferSchema },
        'multipart/form-data': { schema: MakeOfferSchema },
        'multipart/mixed': { schema: MakeOfferSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] },
    { Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] },
  ],
})

export const postV1CustomerDisputesIdAcceptOfferRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/accept-offer',
  tags: ['disputes-actions'],
  summary: 'Accept offer to resolve dispute',
  description:
    'The customer accepts the offer from merchant to resolve a dispute, by ID. PayPal automatically refunds the amount proposed by merchant to the customer.',
  operationId: 'disputes.accept-offer',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: AcceptOfferSchema,
          examples: { accept_offer: { value: { note: 'I am ok with the refund offered.' } } },
        },
        'multipart/related': { schema: AcceptOfferSchema },
        'multipart/form-data': { schema: AcceptOfferSchema },
        'multipart/mixed': { schema: AcceptOfferSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    202: {
      description:
        'A successfully accepted request returns the HTTP `202 Accepted` status code and a JSON response body that includes a [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) to the ID of the request. The request returns `202 Accepted` status in case money movement for the offer is delayed due to some internal reasons.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] }],
})

export const postV1CustomerDisputesIdDenyOfferRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/deny-offer',
  tags: ['disputes-actions'],
  summary: 'Deny offer to resolve dispute',
  description: 'Denies an offer that the merchant proposes for a dispute, by ID.',
  operationId: 'disputes.deny-offer',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: DenyOfferSchema,
          examples: { deny_offer: { value: { note: 'refund offer is very low.' } } },
        },
        'multipart/related': { schema: DenyOfferSchema },
        'multipart/form-data': { schema: DenyOfferSchema },
        'multipart/mixed': { schema: DenyOfferSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/disputes/update-buyer'] }],
})

export const postV1CustomerDisputesIdAcknowledgeReturnItemRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/acknowledge-return-item',
  tags: ['disputes-actions'],
  summary: 'Acknowledge returned item',
  description:
    'Acknowledges that the customer returned an item for a dispute, by ID. A merchant can make this request for disputes with the `MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED` reason. Allowed acknowledgement_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.',
  operationId: 'disputes.acknowledge-return-item',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              acknowledgement_document: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'A file with evidence.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/disputes/update-seller'] }],
})

export const postV1CustomerDisputesIdProvideSupportingInfoRoute = createRoute({
  method: 'post',
  path: '/v1/customer/disputes/{id}/provide-supporting-info',
  tags: ['disputes-actions'],
  summary: 'Provide supporting information for dispute',
  description:
    'Provides supporting information for a dispute, by ID. A merchant or buyer can make this request for disputes if they find the `provide-supporting-info` link in the HATEOAS links in the list disputes response. The party can provide the supporting information to PayPal to defend themselves only when the `dispute_life_cycle_stage` is `CHARGEBACK`, `PRE_ARBITRATION`, or `ARBITRATION`. They can provide a note that describes their part with details or upload any supporting documents to support their side. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the dispute ID in the URI and specify the notes in the JSON request body. This method differs from the provide evidence method which supports only multipart request, where PayPal asks the concerned party for evidence.',
  operationId: 'disputes.provide-supporting-info',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'supporting document': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'A file with evidence.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.',
      content: { 'application/json': { schema: SubsequentActionSchema } },
    },
    400: {
      description:
        'The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description:
        'The request failed due to the dispute is not available. The request returns the HTTP `404 Not Found` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/disputes/update-seller',
        'https://uri.paypal.com/services/disputes/update-buyer',
        'https://uri.paypal.com/services/disputes/update-partner',
      ],
    },
  ],
})
