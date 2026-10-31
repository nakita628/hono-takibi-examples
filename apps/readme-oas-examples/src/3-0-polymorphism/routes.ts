import { createRoute, z } from '@hono/zod-openapi'

const PetSchema = z
  .object({ pet_type: z.string() })
  .openapi({ required: ['pet_type'], discriminator: { propertyName: 'pet_type' } })
  .openapi('Pet')

const DogSchema = PetSchema.and(
  z
    .object({
      bark: z.boolean().exactOptional(),
      breed: z.enum(['Dingo', 'Husky', 'Retriever', 'Shepherd']).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Woof' })
  .openapi('Dog')

const CatSchema = PetSchema.and(
  z
    .object({ hunts: z.boolean().exactOptional(), age: z.int().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Meow' })
  .openapi('Cat')

const Object1Schema = z
  .object({ a: z.string().exactOptional(), b: z.string().exactOptional() })
  .openapi({ title: 'First type of object', required: [] })
  .openapi('Object1')

const Object2Schema = z
  .object({ c: z.string().exactOptional(), d: z.string().exactOptional() })
  .openapi({ title: 'Second type of object', required: [] })
  .openapi('Object2')

const String1Schema = z.string().openapi('String1')

const String2Schema = z.string().openapi('String2')

const NestedOneOfRefRequestBody = {
  content: {
    'application/json': {
      schema: z
        .strictObject({ config: z.xor([String1Schema, String2Schema]).exactOptional() })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

export const patchPetsRoute = createRoute({
  method: 'patch',
  path: '/pets',
  summary: 'oneOf request with a nested allOf',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([CatSchema, DogSchema])
            .openapi({ discriminator: { propertyName: 'pet_type' } }),
        },
      },
    },
  },
  responses: { 200: { description: 'Updated' } },
})

export const postAnythingAllOfObjectRoute = createRoute({
  method: 'post',
  path: '/anything/all-of-object',
  summary: 'allOf with listed objects',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ a: z.string().exactOptional(), b: z.string().exactOptional() })
            .openapi({ title: 'First type of object', required: [] })
            .and(
              z
                .object({ c: z.string().exactOptional(), d: z.string().exactOptional() })
                .openapi({ title: 'Second type of object', required: [] }),
            ),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingAnyOfObjectRoute = createRoute({
  method: 'post',
  path: '/anything/any-of-object',
  summary: 'anyOf object',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({ a: z.string().exactOptional(), b: z.string().exactOptional() })
              .openapi({ title: 'First type of object', required: [] }),
            z
              .object({ c: z.string().exactOptional(), d: z.string().exactOptional() })
              .openapi({ title: 'Second type of object', required: [] }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingAnyOfPrimitiveRoute = createRoute({
  method: 'post',
  path: '/anything/any-of-primitive',
  summary: 'anyOf primitive',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z.string().openapi({ title: 'First type of primitive' }),
            z.int().openapi({ title: 'Second type of primitive' }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnyOfWithTypeRoute = createRoute({
  method: 'post',
  path: '/any-of-with-type',
  summary: 'anyOf With Type',
  description:
    "AnyOf's with a top level type parameter should not render that type outside of their options",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              event: z
                .union([
                  z.string().openapi({ title: 'First type of primitive' }),
                  z.string().openapi({ title: 'Second type of primitive' }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Provides no response body' } },
})

export const postAnythingOneOfObjectRoute = createRoute({
  method: 'post',
  path: '/anything/one-of-object',
  summary: 'oneOf object',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ a: z.string().exactOptional(), b: z.string().exactOptional() })
              .openapi({ title: 'First type of object', required: [] }),
            z
              .object({ c: z.string().exactOptional(), d: z.string().exactOptional() })
              .openapi({ title: 'Second type of object', required: [] }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingOneOfPrimitiveRoute = createRoute({
  method: 'post',
  path: '/anything/one-of-primitive',
  summary: 'oneOf primitive',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.string().openapi({ title: 'First type of primitive' }),
            z.int().openapi({ title: 'Second type of primitive' }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingOneOfObjectRefRoute = createRoute({
  method: 'post',
  path: '/anything/one-of-object-ref',
  summary: 'oneOf object with $ref pointers',
  request: {
    body: { content: { 'application/json': { schema: z.xor([Object1Schema, Object2Schema]) } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postOneOfComplexRoute = createRoute({
  method: 'post',
  path: '/one-of-complex',
  summary: 'oneOf object with a complex schema',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                registration: z
                  .object({
                    permit_number: z.string(),
                    registration_ownership: z.enum(['OWNER', 'PROPERTY_MANAGER']),
                    email: z.string(),
                    full_name: z.string(),
                    identification_number: z.string(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'permit_number',
                      'registration_ownership',
                      'email',
                      'full_name',
                      'identification_number',
                    ],
                  }),
                exemption: z
                  .object({
                    reason: z.enum([
                      'LISTING_TYPE_NOT_INCLUDED',
                      'LISTING_NOT_TOURIST_ACCOMMODATION',
                    ]),
                    registration_ownership: z.enum(['OWNER', 'PROPERTY_MANAGER']),
                    email: z.string(),
                    full_name: z.string(),
                    identification_number: z.string(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'reason',
                      'registration_ownership',
                      'email',
                      'full_name',
                      'identification_number',
                    ],
                  }),
              })
              .openapi({ title: 'Andalucia', required: ['listing_id', 'regulatory_body'] }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                registration: z
                  .object({
                    permit_number: z.string(),
                    expiration_date: z.string(),
                    full_name: z.string(),
                    email: z.string(),
                    listing_address: z.string(),
                    attestation_existing_registration: z.boolean(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'permit_number',
                      'expiration_date',
                      'full_name',
                      'email',
                      'listing_address',
                      'attestation_existing_registration',
                    ],
                  }),
                exemption: z
                  .object({
                    exemption_reason: z.literal('hotel_motel'),
                    full_name: z.string(),
                    email: z.string(),
                    attestation_exemption_claim: z.boolean(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'exemption_reason',
                      'full_name',
                      'email',
                      'attestation_exemption_claim',
                    ],
                  }),
              })
              .openapi({ title: 'Baltimore', required: ['listing_id', 'regulatory_body'] }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                registration: z
                  .object({
                    permit_number: z.string(),
                    email: z.string(),
                    full_name: z.string(),
                    listing_address: z.string(),
                    attestation: z.boolean(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'permit_number',
                      'email',
                      'full_name',
                      'listing_address',
                      'attestation',
                    ],
                  }),
                exemption: z
                  .object({
                    exemption_reason: z.enum([
                      'hotel_motel',
                      'bed_breakfast_lodging',
                      'institutional_business',
                      'hospitals',
                    ]),
                    listing_address: z.string(),
                    attestation: z.boolean(),
                  })
                  .exactOptional()
                  .openapi({ required: ['exemption_reason', 'listing_address', 'attestation'] }),
              })
              .openapi({ title: 'Boston', required: ['listing_id', 'regulatory_body'] }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                registration: z
                  .object({
                    permit_number: z.string(),
                    registration_ownership: z.string(),
                    email: z.string(),
                    full_name: z.string(),
                    identification_number: z.string(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'permit_number',
                      'registration_ownership',
                      'email',
                      'full_name',
                      'identification_number',
                    ],
                  }),
                exemption: z
                  .object({
                    reason: z.enum([
                      'listing_not_full_building',
                      'listing_is_shared_room',
                      'other_exemption_reason',
                    ]),
                    registration_ownership: z.enum(['OWNER', 'PROPERTY_MANAGER']),
                    email: z.string(),
                    full_name: z.string(),
                    identification_number: z.string(),
                  })
                  .exactOptional()
                  .openapi({
                    required: [
                      'reason',
                      'registration_ownership',
                      'email',
                      'full_name',
                      'identification_number',
                    ],
                  }),
              })
              .openapi({ title: 'Catalonia', required: ['listing_id', 'regulatory_body'] }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                registration: z
                  .object({ permit_number: z.string() })
                  .openapi({ required: ['permit_number'] }),
              })
              .openapi({
                title: 'Chicago',
                required: ['listing_id', 'regulatory_body', 'registration'],
              }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                affiliation: z
                  .object({ attestation_entrepreneur: z.boolean(), listing_address: z.string() })
                  .openapi({ required: ['attestation_entrepreneur', 'listing_address'] }),
              })
              .openapi({
                title: 'Cuba',
                required: ['listing_id', 'regulatory_body', 'affiliation'],
              }),
            z
              .object({
                listing_id: z.int(),
                regulatory_body: z.string(),
                categorization: z
                  .object({
                    listing_type: z.enum([
                      'primary_residence',
                      'houseboat',
                      'tent',
                      'tree_house',
                      'hotel_or_hostel',
                      'serviced_apartment',
                      'trailer',
                      'mobile_home',
                      'summer_house',
                    ]),
                    data_reporting_status: z
                      .enum(['private_activity', 'business_activity'])
                      .exactOptional(),
                    data_reporting_bbr: z.string().exactOptional(),
                    attestation: z.boolean().exactOptional(),
                    attestation_conditional: z.boolean().exactOptional(),
                  })
                  .openapi({ required: ['listing_type'] }),
              })
              .openapi({
                title: 'Denmark',
                required: ['listing_id', 'regulatory_body', 'categorization'],
              }),
          ]),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingNestedOneOfObjectRefRoute = createRoute({
  method: 'post',
  path: '/anything/nested-one-of-object-ref',
  summary: 'nested oneOf object with $ref pointers',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ config: z.xor([Object1Schema, Object2Schema]).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingNestedOneOfRefRoute = createRoute({
  method: 'post',
  path: '/anything/nested-one-of-ref',
  request: { body: NestedOneOfRefRequestBody },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingNestedOneOfObjectWithNestedOneOfRoute = createRoute({
  method: 'post',
  path: '/anything/nested-one-of-object-with-nested-one-of',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              config: z
                .xor([
                  Object1Schema,
                  Object2Schema,
                  z
                    .xor([CatSchema, DogSchema])
                    .openapi({ discriminator: { propertyName: 'pet_type' } }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postOneOfWithTypeRoute = createRoute({
  method: 'post',
  path: '/one-of-with-type',
  summary: 'One Of With Type',
  description:
    "OneOf's with a top level type parameter should not render that type outside of their options",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              event: z
                .xor([
                  z.any().openapi({ description: 'oneof one' }),
                  z.any().openapi({ description: 'oneof two' }),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Provides no response body' } },
})
