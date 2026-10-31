import { createRoute, z } from '@hono/zod-openapi'

const OptionOneNoDiscSchema = z
  .object({ discrim: z.string(), optionone: z.number().exactOptional() })
  .openapi({ title: 'Schema title option one', required: ['discrim'] })
  .openapi('OptionOneNoDisc')

const OptionTwoNoDiscSchema = z
  .object({ discrim: z.string(), optiontwo: z.string().exactOptional() })
  .openapi({ title: 'Schema title option two', required: ['discrim'] })
  .openapi('OptionTwoNoDisc')

const OptionThreeNoDiscSchema = z
  .object({ discrim: z.string(), optionthree: z.string().exactOptional() })
  .openapi({ title: 'Schema title option three', required: ['discrim'] })
  .openapi('OptionThreeNoDisc')

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

const PetNoDiscSchema = z
  .object({ pet_type: z.string() })
  .openapi({ required: ['pet_type'] })
  .openapi('PetNoDisc')

const DogNoDiscSchema = PetNoDiscSchema.and(
  z
    .object({
      bark: z.boolean().exactOptional(),
      breed: z.enum(['Dingo', 'Husky', 'Retriever', 'Shepherd']).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Woof' })
  .openapi('DogNoDisc')

const CatNoDiscSchema = PetNoDiscSchema.and(
  z
    .object({ hunts: z.boolean().exactOptional(), age: z.int().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Meow' })
  .openapi('CatNoDisc')

const GcsImportSchema = z
  .object({ gcs_bucket: z.string().exactOptional(), gcs_prefix: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GcsImport')

const S3ImportSchema = z
  .object({ s3_bucket: z.string().exactOptional(), s3_prefix: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('S3Import')

const BaseWebhookEventSchema = z
  .object({
    event_type: z
      .enum(['application_approved', 'application_denied'])
      .openapi({ description: 'Type of the webhook event.' }),
    event_id: z.string().openapi({ description: 'ID of the event.' }),
  })
  .openapi({ required: ['event_type', 'event_id'] })
  .openapi('BaseWebhookEvent')

const BaseBuyerWebhookEventSchema = BaseWebhookEventSchema.and(
  z
    .object({
      buyer_id: z.string().openapi({ description: 'ID of the buyer the event corresponds to.' }),
    })
    .openapi({ required: ['buyer_id'] }),
).openapi('BaseBuyerWebhookEvent')

const BasePurchaseWebhookEventSchema = BaseBuyerWebhookEventSchema.and(
  z
    .object({
      order_id: z.string().exactOptional().openapi({ description: 'Provided Partner Order ID.' }),
    })
    .openapi({ required: [] }),
).openapi('BasePurchaseWebhookEvent')

const ApplicationApprovedEventSchema = BasePurchaseWebhookEventSchema.openapi({
  title: 'ApplicationApprovedEvent',
  description: 'Emitted when an application is underwritten and approved.',
}).openapi('ApplicationApprovedEvent')

const ApplicationDeniedEventSchema = BasePurchaseWebhookEventSchema.openapi({
  title: 'ApplicationDeniedEvent',
  description: 'Emitted when an application is underwritten and denied.',
}).openapi('ApplicationDeniedEvent')

const BaseVehicleSchema = z
  .object({
    vehicleType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of vehicle.', example: 'bicycle' }),
    idealTerrain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A road, river, air... Where does this vehicle thrive?',
        example: 'roads',
      }),
    powerSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'How is the vehicle powered.', example: 'pedaling' }),
    topSpeed: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The top speed in kilometers per hour rounded to the nearest integer.',
        example: 83,
      }),
    range: z
      .int()
      .exactOptional()
      .openapi({ description: 'The 95th percentile range of a trip in kilometers.', example: 100 }),
  })
  .openapi({
    description:
      'Vehicle (from [Redocly example](https://redocly.com/docs/resources/discriminator#when-to-use-the-openapi-discriminator))',
    discriminator: {
      propertyName: 'powerSource',
      mapping: {
        electricity: '#/components/schemas/ElectricVehicle',
        gasoline: '#/components/schemas/FueledVehicle',
        'human-energy': '#/components/schemas/PedaledVehicle',
      },
    },
    required: [],
  })
  .openapi('BaseVehicle')

const ElectricVehicleSchema = BaseVehicleSchema.and(
  z
    .object({
      chargeSpeed: z
        .int()
        .exactOptional()
        .openapi({ description: 'In range kilometers per hour.' }),
      chargeAmps: z
        .int()
        .exactOptional()
        .openapi({ description: 'Amps recommended for charging.' }),
      chargeVoltage: z
        .int()
        .exactOptional()
        .openapi({ description: 'Voltage recommended for charging.' }),
    })
    .openapi({ description: 'Electric Vehicle', required: [] }),
).openapi('ElectricVehicle')

const FueledVehicleSchema = BaseVehicleSchema.and(
  z
    .object({
      tankCapacity: z
        .float64()
        .exactOptional()
        .openapi({ description: 'Capacity of the fuel tank in gallons.' }),
      milesPerGallon: z
        .float64()
        .exactOptional()
        .openapi({ description: 'Miles per gallon on the highway.' }),
    })
    .openapi({ title: 'Gas-powered Vehicle', required: [] }),
).openapi('FueledVehicle')

const PedaledVehicleSchema = BaseVehicleSchema.and(
  z
    .object({
      handlebars: z
        .enum(['flat', 'riser', 'bullhorn', 'drop', 'aero', 'cruiser'])
        .exactOptional()
        .openapi({ description: 'Type of handlebars' }),
    })
    .openapi({ description: 'Pedaled Vehicle', required: [] }),
).openapi('PedaledVehicle')

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

export const patchDiscriminatorWithMappingRoute = createRoute({
  method: 'patch',
  path: '/discriminator-with-mapping',
  summary: 'oneOf with discriminator and mapping',
  description:
    'Polymorphic `oneOf` schema with a top-level discriminator and a mapping definition.',
  operationId: 'oneOfWithTopLevelDiscriminatorAndMapping',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([OptionOneNoDiscSchema, OptionTwoNoDiscSchema])
            .openapi({
              discriminator: {
                propertyName: 'discrim',
                mapping: {
                  'Option One': '#/components/schemas/OptionOneNoDisc',
                  'Option Two': '#/components/schemas/OptionTwoNoDisc',
                },
              },
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'Updated' } },
})

export const patchDiscriminatorWithNoMappingRoute = createRoute({
  method: 'patch',
  path: '/discriminator-with-no-mapping',
  summary: 'oneOf with top-level discriminator (no mapping)',
  description:
    'Polymorphic `oneOf` schema with a top-level discriminator and **no** mapping definition.',
  operationId: 'oneOfWithTopLevelDiscriminatorNoMapping',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([OptionOneNoDiscSchema, OptionTwoNoDiscSchema])
            .openapi({ discriminator: { propertyName: 'discrim' } }),
        },
      },
    },
  },
  responses: { 200: { description: 'Updated' } },
})

export const patchEmbeddedDiscriminatorRoute = createRoute({
  method: 'patch',
  path: '/embedded-discriminator',
  summary: 'oneOf request with a nested allOf and embedded discriminator',
  description:
    'This operation contains a request schema of a `oneOf` that itself contains an `allOf` with a discriminator for the afformentioned `allOf`. This is considered an embedded discriminator.',
  request: { body: { content: { 'application/json': { schema: z.xor([CatSchema, DogSchema]) } } } },
  responses: { 200: { description: 'Updated' } },
})

export const patchOneofAllofTopLevelDiscRoute = createRoute({
  method: 'patch',
  path: '/oneof-allof-top-level-disc',
  summary: 'oneOf request with a nested allOf and top level discriminator',
  description:
    'This operation has a `oneOf`, with a discriminator, but its `oneOf` contents contain an `allOf` where that discriminator `propertyName` is in reference to.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([CatNoDiscSchema, DogNoDiscSchema])
            .openapi({ discriminator: { propertyName: 'pet_type' } }),
        },
      },
    },
  },
  responses: { 200: { description: 'Updated' } },
})

export const patchNestedOneOfObjectWithNestedOneOfRoute = createRoute({
  method: 'patch',
  path: '/nested-one-of-object-with-nested-one-of',
  summary: 'oneOf request with a nested oneOf, and embedded discriminator',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              config: z
                .xor([Object1Schema, Object2Schema, z.xor([CatSchema, DogSchema])])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchMappingWithDuplicateSchemasRoute = createRoute({
  method: 'patch',
  path: '/mapping-with-duplicate-schemas',
  summary: 'Handle a schema with duplicate mapping schemas',
  description:
    'Render a schema with a discriminator, where the mapping reuses a schema more than once.\n> **Note:** the discriminator is `discrimValue`, not `discrim`.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([OptionOneNoDiscSchema, OptionTwoNoDiscSchema, OptionThreeNoDiscSchema])
            .openapi({
              discriminator: {
                propertyName: 'discrimValue',
                mapping: {
                  oneA: '#/components/schemas/OptionOneNoDisc',
                  oneB: '#/components/schemas/OptionOneNoDisc',
                  oneC: '#/components/schemas/OptionOneNoDisc',
                  twoA: '#/components/schemas/OptionTwoNoDisc',
                  twoB: '#/components/schemas/OptionTwoNoDisc',
                  three: '#/components/schemas/OptionThreeNoDisc',
                },
              },
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'OK' } },
})

export const patchMappingOfSchemaNamesRoute = createRoute({
  method: 'patch',
  path: '/mapping-of-schema-names',
  summary: 'Discriminator with a schema name mapping',
  description: 'Schema names, instead of `$ref` pointers, can be used in discriminator mappings.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([OptionOneNoDiscSchema, OptionTwoNoDiscSchema])
            .openapi({
              discriminator: {
                propertyName: 'discrim',
                mapping: { 'Option One': 'OptionOneNoDisc', 'Option Two': 'OptionTwoNoDisc' },
              },
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'Updated' } },
})

export const patchImproperDiscriminatorPlacementRoute = createRoute({
  method: 'patch',
  path: '/improper-discriminator-placement',
  tags: ['Quirks'],
  summary: 'oneOf with a discriminator that is referencing a property up a level',
  description:
    "This operation has a `discriminator` that's in reference to a property a level above it. **This is an improper use of discriminators.** Though this is improper, in this case we should ignore the discriminator instead of failing to render the operation.",
  operationId: 'oneOfWithImproperlyPlacedDiscriminator',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connector_type: z.enum(['s3Import', 'gcsImport']).exactOptional(),
              connector_properties: z
                .xor([GcsImportSchema, S3ImportSchema])
                .exactOptional()
                .openapi({ discriminator: { propertyName: 'connector_type' } }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchRedoclyFlavoredDiscriminatorRoute = createRoute({
  method: 'patch',
  path: '/redocly-flavored-discriminator',
  tags: ['Quirks'],
  summary: 'Discriminator without `anyOf` or `oneOf` that Redocly supports',
  description:
    'Redocly allows users to define [a discriminator mapping without an `anyOf` or `oneOf` that contains the discriminated objects](https://redocly.com/docs/resources/discriminator#allof-for-inheritance). This endpoint demonstrates that.',
  operationId: 'redoclyQuirk',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              vehicle: BaseVehicleSchema.exactOptional(),
              some_other_property: z
                .string()
                .default('default-value')
                .exactOptional()
                .openapi({
                  description:
                    'Some other property that should render alongside the discriminated property',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postPotentiallyUndefinedFormDataRoute = createRoute({
  method: 'post',
  path: '/potentially-undefined-formData',
  tags: ['Quirks'],
  summary: 'Handling for potentially undefined formData',
  description:
    'This operation contains a schema that at one point produced an edgecase within the form system where `formData` was `undefined`.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([ApplicationApprovedEventSchema, ApplicationDeniedEventSchema])
            .openapi({
              discriminator: {
                propertyName: 'event_type',
                mapping: {
                  application_approved: '#/components/schemas/ApplicationApprovedEvent',
                  application_denied: '#/components/schemas/ApplicationDeniedEvent',
                },
              },
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
