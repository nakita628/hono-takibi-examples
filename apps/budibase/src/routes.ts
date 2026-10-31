import { createRoute, z } from '@hono/zod-openapi'

const ApplicationSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the app.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL by which the app is accessed, this must be URL encoded.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Application')

const WorkspaceSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the app.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL by which the app is accessed, this must be URL encoded.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Workspace')

const ApplicationOutputSchema = z
  .object({
    data: z
      .object({
        name: z.string().openapi({ description: 'The name of the app.' }),
        url: z
          .string()
          .openapi({
            description: 'The URL by which the app is accessed, this must be URL encoded.',
          }),
        _id: z.string().openapi({ description: 'The ID of the app.' }),
        status: z
          .enum(['development', 'published'])
          .openapi({
            description:
              'The status of the app, stating it if is the development or published version.',
          }),
        createdAt: z
          .string()
          .openapi({
            description: 'States when the app was created, will be constant. Stored in ISO format.',
          }),
        updatedAt: z
          .string()
          .openapi({
            description: 'States the last time the app was updated - stored in ISO format.',
          }),
        version: z
          .string()
          .openapi({
            description:
              'States the version of the Budibase client this app is currently based on.',
          }),
        tenantId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'In a multi-tenant environment this will state the tenant this app is within.',
          }),
        lockedBy: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The user this app is currently being built by.' }),
      })
      .openapi({ required: ['_id', 'name', 'url', 'status', 'createdAt', 'updatedAt', 'version'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('ApplicationOutput')

const WorkspaceOutputSchema = z
  .object({
    data: z
      .object({
        name: z.string().openapi({ description: 'The name of the app.' }),
        url: z
          .string()
          .openapi({
            description: 'The URL by which the app is accessed, this must be URL encoded.',
          }),
        _id: z.string().openapi({ description: 'The ID of the app.' }),
        status: z
          .enum(['development', 'published'])
          .openapi({
            description:
              'The status of the app, stating it if is the development or published version.',
          }),
        createdAt: z
          .string()
          .openapi({
            description: 'States when the app was created, will be constant. Stored in ISO format.',
          }),
        updatedAt: z
          .string()
          .openapi({
            description: 'States the last time the app was updated - stored in ISO format.',
          }),
        version: z
          .string()
          .openapi({
            description:
              'States the version of the Budibase client this app is currently based on.',
          }),
        tenantId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'In a multi-tenant environment this will state the tenant this app is within.',
          }),
        lockedBy: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The user this app is currently being built by.' }),
      })
      .openapi({ required: ['_id', 'name', 'url', 'status', 'createdAt', 'updatedAt', 'version'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('WorkspaceOutput')

const ApplicationSearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          name: z.string().openapi({ description: 'The name of the app.' }),
          url: z
            .string()
            .openapi({
              description: 'The URL by which the app is accessed, this must be URL encoded.',
            }),
          _id: z.string().openapi({ description: 'The ID of the app.' }),
          status: z
            .enum(['development', 'published'])
            .openapi({
              description:
                'The status of the app, stating it if is the development or published version.',
            }),
          createdAt: z
            .string()
            .openapi({
              description:
                'States when the app was created, will be constant. Stored in ISO format.',
            }),
          updatedAt: z
            .string()
            .openapi({
              description: 'States the last time the app was updated - stored in ISO format.',
            }),
          version: z
            .string()
            .openapi({
              description:
                'States the version of the Budibase client this app is currently based on.',
            }),
          tenantId: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'In a multi-tenant environment this will state the tenant this app is within.',
            }),
          lockedBy: z
            .object({})
            .exactOptional()
            .openapi({ description: 'The user this app is currently being built by.' }),
        })
        .openapi({
          required: ['_id', 'name', 'url', 'status', 'createdAt', 'updatedAt', 'version'],
        }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('ApplicationSearch')

const WorkspaceSearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          name: z.string().openapi({ description: 'The name of the app.' }),
          url: z
            .string()
            .openapi({
              description: 'The URL by which the app is accessed, this must be URL encoded.',
            }),
          _id: z.string().openapi({ description: 'The ID of the app.' }),
          status: z
            .enum(['development', 'published'])
            .openapi({
              description:
                'The status of the app, stating it if is the development or published version.',
            }),
          createdAt: z
            .string()
            .openapi({
              description:
                'States when the app was created, will be constant. Stored in ISO format.',
            }),
          updatedAt: z
            .string()
            .openapi({
              description: 'States the last time the app was updated - stored in ISO format.',
            }),
          version: z
            .string()
            .openapi({
              description:
                'States the version of the Budibase client this app is currently based on.',
            }),
          tenantId: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'In a multi-tenant environment this will state the tenant this app is within.',
            }),
          lockedBy: z
            .object({})
            .exactOptional()
            .openapi({ description: 'The user this app is currently being built by.' }),
        })
        .openapi({
          required: ['_id', 'name', 'url', 'status', 'createdAt', 'updatedAt', 'version'],
        }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('WorkspaceSearch')

const DeploymentOutputSchema = z
  .object({
    data: z
      .object({
        _id: z.string().openapi({ description: 'The ID of the app.' }),
        status: z
          .enum(['SUCCESS', 'FAILURE'])
          .openapi({ description: 'Status of the deployment, whether it succeeded or failed' }),
        appUrl: z.string().openapi({ description: 'The URL of the published app' }),
      })
      .openapi({ required: ['_id', 'status', 'appUrl'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('DeploymentOutput')

const AppExportSchema = z
  .object({
    encryptPassword: z
      .string()
      .openapi({ description: 'An optional password used to encrypt the export.' }),
    excludeRows: z
      .boolean()
      .openapi({
        description: 'Set whether the internal table rows should be excluded from the export.',
      }),
  })
  .openapi({ required: ['encryptPassword', 'excludeRows'] })
  .openapi('AppExport')

const WorkspaceExportSchema = z
  .object({
    encryptPassword: z
      .string()
      .openapi({ description: 'An optional password used to encrypt the export.' }),
    excludeRows: z
      .boolean()
      .openapi({
        description: 'Set whether the internal table rows should be excluded from the export.',
      }),
  })
  .openapi({ required: ['encryptPassword', 'excludeRows'] })
  .openapi('WorkspaceExport')

const RowSchema = z
  .record(
    z.string(),
    z
      .any()
      .openapi({ description: 'Key value properties of any type, depending on the table schema.' }),
  )
  .openapi({ description: 'The row to be created/updated, based on the table schema.' })
  .openapi('Row')

const SearchOutputSchema = z
  .object({
    data: z
      .array(z.object({}))
      .openapi({
        description:
          'An array of rows, these will each contain an _id field which can be used to update or delete them.',
      }),
    bookmark: z
      .xor([z.string(), z.int()])
      .exactOptional()
      .openapi({ description: 'If pagination in use, this should be provided.' }),
    hasNextPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If pagination in use, this will determine if there is another page to fetch.',
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('SearchOutput')

const RowOutputSchema = z
  .object({
    data: z
      .object({
        _id: z.string().openapi({ description: 'The ID of the row.' }),
        tableId: z.string().openapi({ description: 'The ID of the table this row comes from.' }),
      })
      .catchall(
        z
          .any()
          .openapi({
            description: 'Key value properties of any type, depending on the table schema.',
          }),
      )
      .openapi({
        description: 'The row to be created/updated, based on the table schema.',
        required: ['tableId', '_id'],
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('RowOutput')

const TableSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the table.' }),
    primaryDisplay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the column which should be used in relationship tags when relating to this table.',
      }),
    schema: z.record(
      z.string(),
      z.xor([
        z
          .object({
            type: z
              .literal('link')
              .exactOptional()
              .openapi({ description: 'A relationship column.' }),
            constraints: z
              .object({
                type: z.string().exactOptional(),
                presence: z
                  .xor([
                    z
                      .boolean()
                      .openapi({ description: 'Defines whether the column is required or not.' }),
                    z
                      .object({
                        allowEmpty: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'Defines whether the value is allowed to be empty or not.',
                          }),
                      })
                      .openapi({
                        description: 'Defines whether the column is required or not.',
                        required: [],
                      }),
                  ])
                  .exactOptional(),
                inclusion: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'Defines the valid values for this column.' }),
              })
              .exactOptional()
              .openapi({
                description:
                  'A constraint can be applied to the column which will be validated against when a row is saved.',
                required: [],
              }),
            name: z.string().exactOptional().openapi({ description: 'The name of the column.' }),
            autocolumn: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Defines whether the column is automatically generated.' }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Defines the width of the column in the data UI.' }),
            fieldName: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The name of the column which a relationship column is related to in another table.',
              }),
            tableId: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the table which a relationship column is related to.',
              }),
            relationshipType: z
              .enum(['one-to-many', 'many-to-one', 'many-to-many'])
              .exactOptional()
              .openapi({
                description: 'Defines the type of relationship that this column will be used for.',
              }),
            through: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.',
              }),
            foreignKey: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'When using a SQL table that contains a one to many relationship this defines the foreign key.',
              }),
            throughFrom: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.',
              }),
            throughTo: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.',
              }),
          })
          .openapi({ required: [] }),
        z
          .object({
            type: z
              .literal('formula')
              .exactOptional()
              .openapi({ description: 'A formula column.' }),
            constraints: z
              .object({
                type: z.string().exactOptional(),
                presence: z
                  .xor([
                    z
                      .boolean()
                      .openapi({ description: 'Defines whether the column is required or not.' }),
                    z
                      .object({
                        allowEmpty: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'Defines whether the value is allowed to be empty or not.',
                          }),
                      })
                      .openapi({
                        description: 'Defines whether the column is required or not.',
                        required: [],
                      }),
                  ])
                  .exactOptional(),
                inclusion: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'Defines the valid values for this column.' }),
              })
              .exactOptional()
              .openapi({
                description:
                  'A constraint can be applied to the column which will be validated against when a row is saved.',
                required: [],
              }),
            name: z.string().exactOptional().openapi({ description: 'The name of the column.' }),
            autocolumn: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Defines whether the column is automatically generated.' }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Defines the width of the column in the data UI.' }),
            formula: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.',
              }),
            formulaType: z
              .enum(['static', 'dynamic'])
              .exactOptional()
              .openapi({ description: 'Defines whether this is a static or dynamic formula.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            type: z
              .enum([
                'string',
                'longform',
                'options',
                'number',
                'boolean',
                'array',
                'datetime',
                'attachment',
                'attachment_single',
                'auto',
                'ai',
                'json',
                'internal',
                'barcodeqr',
                'signature_single',
                'bigint',
                'bb_reference',
                'bb_reference_single',
              ])
              .exactOptional()
              .openapi({
                description:
                  'Defines the type of the column, most explain themselves, a link column is a relationship.',
              }),
            constraints: z
              .object({
                type: z.string().exactOptional(),
                presence: z
                  .xor([
                    z
                      .boolean()
                      .openapi({ description: 'Defines whether the column is required or not.' }),
                    z
                      .object({
                        allowEmpty: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description: 'Defines whether the value is allowed to be empty or not.',
                          }),
                      })
                      .openapi({
                        description: 'Defines whether the column is required or not.',
                        required: [],
                      }),
                  ])
                  .exactOptional(),
                inclusion: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'Defines the valid values for this column.' }),
              })
              .exactOptional()
              .openapi({
                description:
                  'A constraint can be applied to the column which will be validated against when a row is saved.',
                required: [],
              }),
            name: z.string().exactOptional().openapi({ description: 'The name of the column.' }),
            autocolumn: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Defines whether the column is automatically generated.' }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Defines the width of the column in the data UI.' }),
          })
          .openapi({ required: [] }),
      ]),
    ),
  })
  .openapi({ description: 'The table to be created/updated.', required: ['name', 'schema'] })
  .openapi('Table')

const TableOutputSchema = z
  .object({
    data: z
      .object({
        name: z.string().openapi({ description: 'The name of the table.' }),
        primaryDisplay: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the column which should be used in relationship tags when relating to this table.',
          }),
        schema: z.record(
          z.string(),
          z.xor([
            z
              .object({
                type: z
                  .literal('link')
                  .exactOptional()
                  .openapi({ description: 'A relationship column.' }),
                constraints: z
                  .object({
                    type: z.string().exactOptional(),
                    presence: z
                      .xor([
                        z
                          .boolean()
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                          }),
                        z
                          .object({
                            allowEmpty: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Defines whether the value is allowed to be empty or not.',
                              }),
                          })
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                            required: [],
                          }),
                      ])
                      .exactOptional(),
                    inclusion: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Defines the valid values for this column.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'A constraint can be applied to the column which will be validated against when a row is saved.',
                    required: [],
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the column.' }),
                autocolumn: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Defines whether the column is automatically generated.',
                  }),
                width: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Defines the width of the column in the data UI.' }),
                fieldName: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the column which a relationship column is related to in another table.',
                  }),
                tableId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The ID of the table which a relationship column is related to.',
                  }),
                relationshipType: z
                  .enum(['one-to-many', 'many-to-one', 'many-to-many'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines the type of relationship that this column will be used for.',
                  }),
                through: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.',
                  }),
                foreignKey: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'When using a SQL table that contains a one to many relationship this defines the foreign key.',
                  }),
                throughFrom: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.',
                  }),
                throughTo: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                type: z
                  .literal('formula')
                  .exactOptional()
                  .openapi({ description: 'A formula column.' }),
                constraints: z
                  .object({
                    type: z.string().exactOptional(),
                    presence: z
                      .xor([
                        z
                          .boolean()
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                          }),
                        z
                          .object({
                            allowEmpty: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Defines whether the value is allowed to be empty or not.',
                              }),
                          })
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                            required: [],
                          }),
                      ])
                      .exactOptional(),
                    inclusion: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Defines the valid values for this column.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'A constraint can be applied to the column which will be validated against when a row is saved.',
                    required: [],
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the column.' }),
                autocolumn: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Defines whether the column is automatically generated.',
                  }),
                width: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Defines the width of the column in the data UI.' }),
                formula: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.',
                  }),
                formulaType: z
                  .enum(['static', 'dynamic'])
                  .exactOptional()
                  .openapi({ description: 'Defines whether this is a static or dynamic formula.' }),
              })
              .openapi({ required: [] }),
            z
              .object({
                type: z
                  .enum([
                    'string',
                    'longform',
                    'options',
                    'number',
                    'boolean',
                    'array',
                    'datetime',
                    'attachment',
                    'attachment_single',
                    'auto',
                    'ai',
                    'json',
                    'internal',
                    'barcodeqr',
                    'signature_single',
                    'bigint',
                    'bb_reference',
                    'bb_reference_single',
                  ])
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines the type of the column, most explain themselves, a link column is a relationship.',
                  }),
                constraints: z
                  .object({
                    type: z.string().exactOptional(),
                    presence: z
                      .xor([
                        z
                          .boolean()
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                          }),
                        z
                          .object({
                            allowEmpty: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Defines whether the value is allowed to be empty or not.',
                              }),
                          })
                          .openapi({
                            description: 'Defines whether the column is required or not.',
                            required: [],
                          }),
                      ])
                      .exactOptional(),
                    inclusion: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Defines the valid values for this column.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'A constraint can be applied to the column which will be validated against when a row is saved.',
                    required: [],
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the column.' }),
                autocolumn: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Defines whether the column is automatically generated.',
                  }),
                width: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Defines the width of the column in the data UI.' }),
              })
              .openapi({ required: [] }),
          ]),
        ),
        _id: z.string().openapi({ description: 'The ID of the table.' }),
      })
      .openapi({
        description: 'The table to be created/updated.',
        required: ['name', 'schema', '_id'],
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('TableOutput')

const TableSearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          name: z.string().openapi({ description: 'The name of the table.' }),
          primaryDisplay: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the column which should be used in relationship tags when relating to this table.',
            }),
          schema: z.record(
            z.string(),
            z.xor([
              z
                .object({
                  type: z
                    .literal('link')
                    .exactOptional()
                    .openapi({ description: 'A relationship column.' }),
                  constraints: z
                    .object({
                      type: z.string().exactOptional(),
                      presence: z
                        .xor([
                          z
                            .boolean()
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                            }),
                          z
                            .object({
                              allowEmpty: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines whether the value is allowed to be empty or not.',
                                }),
                            })
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                              required: [],
                            }),
                        ])
                        .exactOptional(),
                      inclusion: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'Defines the valid values for this column.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'A constraint can be applied to the column which will be validated against when a row is saved.',
                      required: [],
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the column.' }),
                  autocolumn: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines whether the column is automatically generated.',
                    }),
                  width: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Defines the width of the column in the data UI.' }),
                  fieldName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of the column which a relationship column is related to in another table.',
                    }),
                  tableId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The ID of the table which a relationship column is related to.',
                    }),
                  relationshipType: z
                    .enum(['one-to-many', 'many-to-one', 'many-to-many'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines the type of relationship that this column will be used for.',
                    }),
                  through: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.',
                    }),
                  foreignKey: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'When using a SQL table that contains a one to many relationship this defines the foreign key.',
                    }),
                  throughFrom: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.',
                    }),
                  throughTo: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.',
                    }),
                })
                .openapi({ required: [] }),
              z
                .object({
                  type: z
                    .literal('formula')
                    .exactOptional()
                    .openapi({ description: 'A formula column.' }),
                  constraints: z
                    .object({
                      type: z.string().exactOptional(),
                      presence: z
                        .xor([
                          z
                            .boolean()
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                            }),
                          z
                            .object({
                              allowEmpty: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines whether the value is allowed to be empty or not.',
                                }),
                            })
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                              required: [],
                            }),
                        ])
                        .exactOptional(),
                      inclusion: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'Defines the valid values for this column.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'A constraint can be applied to the column which will be validated against when a row is saved.',
                      required: [],
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the column.' }),
                  autocolumn: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines whether the column is automatically generated.',
                    }),
                  width: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Defines the width of the column in the data UI.' }),
                  formula: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.',
                    }),
                  formulaType: z
                    .enum(['static', 'dynamic'])
                    .exactOptional()
                    .openapi({
                      description: 'Defines whether this is a static or dynamic formula.',
                    }),
                })
                .openapi({ required: [] }),
              z
                .object({
                  type: z
                    .enum([
                      'string',
                      'longform',
                      'options',
                      'number',
                      'boolean',
                      'array',
                      'datetime',
                      'attachment',
                      'attachment_single',
                      'auto',
                      'ai',
                      'json',
                      'internal',
                      'barcodeqr',
                      'signature_single',
                      'bigint',
                      'bb_reference',
                      'bb_reference_single',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines the type of the column, most explain themselves, a link column is a relationship.',
                    }),
                  constraints: z
                    .object({
                      type: z.string().exactOptional(),
                      presence: z
                        .xor([
                          z
                            .boolean()
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                            }),
                          z
                            .object({
                              allowEmpty: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines whether the value is allowed to be empty or not.',
                                }),
                            })
                            .openapi({
                              description: 'Defines whether the column is required or not.',
                              required: [],
                            }),
                        ])
                        .exactOptional(),
                      inclusion: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'Defines the valid values for this column.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'A constraint can be applied to the column which will be validated against when a row is saved.',
                      required: [],
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the column.' }),
                  autocolumn: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines whether the column is automatically generated.',
                    }),
                  width: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Defines the width of the column in the data UI.' }),
                })
                .openapi({ required: [] }),
            ]),
          ),
          _id: z.string().openapi({ description: 'The ID of the table.' }),
        })
        .openapi({
          description: 'The table to be created/updated.',
          required: ['name', 'schema', '_id'],
        }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('TableSearch')

const ExecuteQuerySchema = z
  .object({
    parameters: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Key value properties of any type, depending on the query output schema.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'This contains the required parameters for the query, this depends on query type, setup and bindings.',
      }),
    pagination: z
      .object({
        page: z
          .string()
          .exactOptional()
          .openapi({ description: 'The page which has been returned from a previous query.' }),
        limit: z
          .number()
          .exactOptional()
          .openapi({ description: 'The number of rows to return per page.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'For supported query types (currently on REST) pagination can be performed using these properties.',
        required: [],
      }),
  })
  .openapi({ description: 'The parameters required for executing a query.', required: [] })
  .openapi('ExecuteQuery')

const ExecuteQueryOutputSchema = z
  .object({
    data: z.array(z.object({})).openapi({ description: 'The data response from the query.' }),
    extra: z
      .object({
        headers: z
          .object({})
          .exactOptional()
          .openapi({
            description: 'If carrying out a REST request, this will contain the response headers.',
          }),
        raw: z
          .string()
          .exactOptional()
          .openapi({ description: 'The raw query response, as a string.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Extra information that is not part of the main data, e.g. headers.',
        required: [],
      }),
    pagination: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'If pagination is supported, this will contain the bookmark/anchor information for it.',
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('ExecuteQueryOutput')

const QuerySchema = z
  .object({
    _id: z.string().openapi({ description: 'The ID of the query.' }),
    datasourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the datasource the query belongs to.' }),
    parameters: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The bindings which are required to perform this query.' }),
    fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The fields that are used to perform this query, e.g. the sql statement',
      }),
    queryVerb: z
      .enum(['create', 'read', 'update', 'delete'])
      .exactOptional()
      .openapi({ description: 'The verb that describes this query.' }),
    name: z.string().openapi({ description: 'The name of the query.' }),
    schema: z
      .object({})
      .openapi({ description: 'The schema of the data returned when the query is executed.' }),
    transformer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The JavaScript transformer function, applied after the query responds with data.',
      }),
    readable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the query has readable data.' }),
  })
  .openapi({ required: ['name', 'schema', '_id'] })
  .openapi('Query')

const QuerySearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          _id: z.string().openapi({ description: 'The ID of the query.' }),
          datasourceId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The ID of the datasource the query belongs to.' }),
          parameters: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'The bindings which are required to perform this query.' }),
          fields: z
            .object({})
            .exactOptional()
            .openapi({
              description: 'The fields that are used to perform this query, e.g. the sql statement',
            }),
          queryVerb: z
            .enum(['create', 'read', 'update', 'delete'])
            .exactOptional()
            .openapi({ description: 'The verb that describes this query.' }),
          name: z.string().openapi({ description: 'The name of the query.' }),
          schema: z
            .object({})
            .openapi({
              description: 'The schema of the data returned when the query is executed.',
            }),
          transformer: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The JavaScript transformer function, applied after the query responds with data.',
            }),
          readable: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether the query has readable data.' }),
        })
        .openapi({ required: ['name', 'schema', '_id'] }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('QuerySearch')

const UserSchema = z
  .object({
    email: z
      .string()
      .openapi({ description: 'The email address of the user, this must be unique.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.',
      }),
    status: z
      .literal('active')
      .exactOptional()
      .openapi({ description: 'The status of the user, if they are active.' }),
    firstName: z.string().exactOptional().openapi({ description: 'The first name of the user' }),
    lastName: z.string().exactOptional().openapi({ description: 'The last name of the user' }),
    forceResetPassword: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If set to true forces the user to reset their password on first login.',
      }),
    builder: z
      .object({
        global: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If set to true the user will be able to build any app in the system.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.',
        required: [],
      }),
    admin: z
      .object({
        global: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If set to true the user will be able to administrate the system.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.',
        required: [],
      }),
    roles: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.',
      }),
    userGroups: z
      .array(z.string().regex(/^gr_/))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          "The IDs of the user's groups. Find group IDs using GET /workspaces/{workspaceId}/groups or the Copy group ID button in Settings > People > Groups. Requires a global admin and the user groups and expanded public API features. On update, replaces memberships; omit to preserve them or provide an empty array to remove all memberships. SCIM-managed memberships cannot be added or removed. New users without group assignments receive the default group, if configured.",
      }),
  })
  .openapi({ required: ['email'] })
  .openapi('User')

const UserOutputSchema = z
  .object({
    data: z
      .object({
        email: z
          .string()
          .openapi({ description: 'The email address of the user, this must be unique.' }),
        password: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.',
          }),
        status: z
          .literal('active')
          .exactOptional()
          .openapi({ description: 'The status of the user, if they are active.' }),
        firstName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The first name of the user' }),
        lastName: z.string().exactOptional().openapi({ description: 'The last name of the user' }),
        forceResetPassword: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If set to true forces the user to reset their password on first login.',
          }),
        builder: z
          .object({
            global: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'If set to true the user will be able to build any app in the system.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.',
            required: [],
          }),
        admin: z
          .object({
            global: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'If set to true the user will be able to administrate the system.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.',
            required: [],
          }),
        roles: z
          .record(
            z.string(),
            z
              .string()
              .openapi({
                description:
                  'A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.',
          }),
        userGroups: z
          .array(z.string().regex(/^gr_/))
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional()
          .openapi({ description: 'The IDs of the groups the user belongs to.' }),
        _id: z.string().openapi({ description: 'The ID of the user.' }),
      })
      .openapi({ required: ['email', '_id'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('UserOutput')

const UserSearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          email: z
            .string()
            .openapi({ description: 'The email address of the user, this must be unique.' }),
          password: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.',
            }),
          status: z
            .literal('active')
            .exactOptional()
            .openapi({ description: 'The status of the user, if they are active.' }),
          firstName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The first name of the user' }),
          lastName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The last name of the user' }),
          forceResetPassword: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'If set to true forces the user to reset their password on first login.',
            }),
          builder: z
            .object({
              global: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true the user will be able to build any app in the system.',
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.',
              required: [],
            }),
          admin: z
            .object({
              global: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to true the user will be able to administrate the system.',
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.',
              required: [],
            }),
          roles: z
            .record(
              z.string(),
              z
                .string()
                .openapi({
                  description:
                    'A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.',
                }),
            )
            .exactOptional()
            .openapi({
              description:
                'Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.',
            }),
          userGroups: z
            .array(z.string().regex(/^gr_/))
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .exactOptional()
            .openapi({ description: 'The IDs of the groups the user belongs to.' }),
          _id: z.string().openapi({ description: 'The ID of the user.' }),
        })
        .openapi({ required: ['email', '_id'] }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('UserSearch')

const RowSearchSchema = z
  .object({
    query: z
      .object({
        allOr: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Specifies that a row should be returned if it satisfies any of the specified options, rather than requiring it to fulfill all the search parameters. This defaults to false, meaning AND logic will be used.',
          }),
        string: z
          .record(
            z.string(),
            z.string().openapi({ description: 'The value to search for in the column.' }),
          )
          .exactOptional()
          .openapi({
            example: { columnName1: 'value', columnName2: 'value' },
            description:
              'A map of field name to the string to search for, this will look for rows that have a value starting with the string value.',
          }),
        fuzzy: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              "Searches for a sub-string within a string column, e.g. searching for 'dib' will match 'Budibase'.",
          }),
        range: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Searches within a range, the format of this must be in the format of an object with a "low" and "high" property.',
            example: { columnName1: { low: 10, high: 20 } },
          }),
        equal: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Searches for rows that have a column value that is exactly the value set.',
          }),
        notEqual: z
          .object({})
          .exactOptional()
          .openapi({
            description: 'Searches for any row which does not contain the specified column value.',
          }),
        empty: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Searches for rows which do not contain the specified column. The object should simply contain keys of the column names, these can map to any value.',
            example: { columnName1: '' },
          }),
        notEmpty: z
          .object({})
          .exactOptional()
          .openapi({ description: 'Searches for rows which have the specified column.' }),
        oneOf: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Searches for rows which have a column value that is any of the specified values. The format of this must be columnName -> [value1, value2].',
          }),
        contains: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Searches for a value, or set of values in array column types (such as a multi-select). If an array of search options is provided then it must match all.',
            example: { arrayColumn: ['a', 'b'] },
          }),
        notContains: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'The logical inverse of contains. Only works on array column types. If an array of values is passed, the row must not match any of them to be returned in the response.',
            example: { arrayColumn: ['a', 'b'] },
          }),
        containsAny: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'As with the contains search, only works on array column types and searches for any of the provided values when given an array.',
            example: { arrayColumn: ['a', 'b'] },
          }),
      })
      .openapi({ required: [] }),
    paginate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables pagination, by default this is disabled.' }),
    bookmark: z
      .xor([z.string(), z.int()])
      .exactOptional()
      .openapi({
        description:
          'If retrieving another page, the bookmark from the previous request must be supplied.',
      }),
    limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of rows to return, useful when paginating, for internal tables this will be limited to 1000, for SQL tables it will be 5000.',
      }),
    sort: z
      .object({
        order: z
          .enum(['ascending', 'descending'])
          .exactOptional()
          .openapi({ description: 'The order of the sort, by default this is ascending.' }),
        column: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the column by which the rows will be sorted.' }),
        type: z
          .enum(['string', 'number'])
          .exactOptional()
          .openapi({
            description:
              'Defines whether the column should be treated as a string or as numbers when sorting.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A set of parameters describing the sort behaviour of the search.',
        required: [],
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('RowSearch')

const NameSearchSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The name to be used when searching - this will be used in a case insensitive starts with match.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('NameSearch')

const RolesAssignSchema = z
  .object({
    appBuilder: z
      .object({
        appId: z
          .string()
          .openapi({
            description: 'The app that the users should have app builder privileges granted for.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Allow setting users to builders per app.', required: ['appId'] }),
    builder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add/remove global builder permissions from the list of users.' }),
    admin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add/remove global admin permissions from the list of users.' }),
    role: z
      .object({
        roleId: z
          .string()
          .openapi({ description: 'The role ID, such as BASIC, ADMIN or a custom role ID.' }),
        appId: z.string().openapi({ description: 'The app that the role relates to.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Add/remove a per-app role, such as BASIC, ADMIN etc.',
        required: ['roleId', 'appId'],
      }),
    userIds: z
      .array(z.string())
      .openapi({ description: 'The user IDs to be updated to add/remove the specified roles.' }),
  })
  .openapi({ required: ['userIds'] })
  .openapi('RolesAssign')

const RolesUnAssignSchema = z
  .object({
    appBuilder: z
      .object({
        appId: z
          .string()
          .openapi({
            description: 'The app that the users should have app builder privileges granted for.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Allow setting users to builders per app.', required: ['appId'] }),
    builder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add/remove global builder permissions from the list of users.' }),
    admin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add/remove global admin permissions from the list of users.' }),
    role: z
      .object({
        roleId: z
          .string()
          .openapi({ description: 'The role ID, such as BASIC, ADMIN or a custom role ID.' }),
        appId: z.string().openapi({ description: 'The app that the role relates to.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Add/remove a per-app role, such as BASIC, ADMIN etc.',
        required: ['roleId', 'appId'],
      }),
    userIds: z
      .array(z.string())
      .openapi({ description: 'The user IDs to be updated to add/remove the specified roles.' }),
  })
  .openapi({ required: ['userIds'] })
  .openapi('RolesUnAssign')

const RolesOutputSchema = z
  .object({
    data: z
      .object({ userIds: z.array(z.string()).openapi({ description: "The updated users' IDs" }) })
      .openapi({ required: ['userIds'] }),
  })
  .openapi({ required: ['data'] })
  .openapi('RolesOutput')

const ViewSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the view.' }),
    tableId: z.string().openapi({ description: 'The ID of the table this view is based on.' }),
    type: z
      .literal('calculation')
      .exactOptional()
      .openapi({ description: 'The type of view - standard (empty value) or calculation.' }),
    primaryDisplay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A column used to display rows from this view - usually used when rendered in tables.',
      }),
    query: z
      .object({
        logicalOperator: z
          .enum(['all', 'any'])
          .exactOptional()
          .openapi({
            description:
              'When using groups this defines whether all of the filters must match, or only one of them.',
          }),
        onEmptyFilter: z
          .enum(['all', 'none'])
          .exactOptional()
          .openapi({
            description: 'If no filters match, should the view return all rows, or no rows.',
          }),
        groups: z
          .array(
            z
              .object({
                logicalOperator: z
                  .enum(['all', 'any'])
                  .exactOptional()
                  .openapi({
                    description:
                      'When using groups this defines whether all of the filters must match, or only one of them.',
                  }),
                filters: z
                  .array(
                    z
                      .object({
                        operator: z
                          .enum([
                            'equal',
                            'notEqual',
                            'empty',
                            'notEmpty',
                            'fuzzy',
                            'string',
                            'contains',
                            'notContains',
                            'containsAny',
                            'oneOf',
                            'notOneOf',
                            'range',
                          ])
                          .exactOptional()
                          .openapi({
                            description: 'The type of search operation which is being performed.',
                          }),
                        field: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The field in the view to perform the search on.',
                          }),
                        value: z
                          .xor([
                            z.string(),
                            z.number(),
                            z.boolean(),
                            z.object({}),
                            z.array(z.any()),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'The value to search for - the type will depend on the operator in use.',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'A list of filters to apply' }),
                groups: z
                  .array(
                    z
                      .object({
                        logicalOperator: z
                          .enum(['all', 'any'])
                          .exactOptional()
                          .openapi({
                            description:
                              'When using groups this defines whether all of the filters must match, or only one of them.',
                          }),
                        filters: z
                          .array(
                            z
                              .object({
                                operator: z
                                  .enum([
                                    'equal',
                                    'notEqual',
                                    'empty',
                                    'notEmpty',
                                    'fuzzy',
                                    'string',
                                    'contains',
                                    'notContains',
                                    'containsAny',
                                    'oneOf',
                                    'notOneOf',
                                    'range',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The type of search operation which is being performed.',
                                  }),
                                field: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'The field in the view to perform the search on.',
                                  }),
                                value: z
                                  .xor([
                                    z.string(),
                                    z.number(),
                                    z.boolean(),
                                    z.object({}),
                                    z.array(z.any()),
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The value to search for - the type will depend on the operator in use.',
                                  }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({ description: 'A list of filters to apply' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'A grouping of filters to be applied.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'A grouping of filters to be applied.' }),
      })
      .exactOptional()
      .openapi({ description: 'Search parameters for view', required: [] }),
    sort: z
      .xor([
        z
          .object({
            field: z
              .string()
              .openapi({ description: 'The field from the table/view schema to sort on.' }),
            order: z
              .enum(['ascending', 'descending'])
              .exactOptional()
              .openapi({ description: 'The order in which to sort.' }),
            type: z
              .enum(['string', 'number'])
              .exactOptional()
              .openapi({
                description: 'The type of sort to perform (by number, or by alphabetically).',
              }),
          })
          .openapi({ required: ['field'] }),
        z.array(
          z
            .object({
              field: z
                .string()
                .openapi({ description: 'The field from the table/view schema to sort on.' }),
              order: z
                .enum(['ascending', 'descending'])
                .exactOptional()
                .openapi({ description: 'The order in which to sort.' }),
              type: z
                .enum(['string', 'number'])
                .exactOptional()
                .openapi({
                  description: 'The type of sort to perform (by number, or by alphabetically).',
                }),
            })
            .openapi({ required: ['field'] }),
        ),
      ])
      .exactOptional(),
    schema: z.record(
      z.string(),
      z.xor([
        z
          .object({
            visible: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Defines whether the column is visible or not - rows retrieved/updated through this view will not be able to access it.',
              }),
            readonly: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  "When used in combination with 'visible: true' the column will be visible in row responses but cannot be updated.",
              }),
            order: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'A number defining where the column shows up in tables, lowest being first.',
              }),
            width: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'A width for the column, defined in pixels - this affects rendering in tables.',
              }),
            column: z
              .array(z.object({ readonly: z.boolean().exactOptional() }).openapi({ required: [] }))
              .exactOptional()
              .openapi({
                description:
                  'If this is a relationship column, we can set the columns we wish to include',
              }),
          })
          .openapi({ required: [] }),
        z
          .object({
            calculationType: z
              .enum(['sum', 'avg', 'count', 'min', 'max'])
              .exactOptional()
              .openapi({
                description:
                  'This column should be built from a calculation, specifying a type and field. It is important to note when a calculation is configured all non-calculation columns will be used for grouping.',
              }),
            field: z
              .string()
              .exactOptional()
              .openapi({ description: 'The field from the table to perform the calculation on.' }),
            distinct: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Can be used in tandem with the count calculation type, to count unique entries.',
              }),
          })
          .openapi({ required: [] }),
      ]),
    ),
  })
  .openapi({
    description: 'The view to be created/updated.',
    required: ['name', 'schema', 'tableId'],
  })
  .openapi('View')

const ViewOutputSchema = z
  .object({
    data: z
      .object({
        name: z.string().openapi({ description: 'The name of the view.' }),
        tableId: z.string().openapi({ description: 'The ID of the table this view is based on.' }),
        type: z
          .literal('calculation')
          .exactOptional()
          .openapi({ description: 'The type of view - standard (empty value) or calculation.' }),
        primaryDisplay: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A column used to display rows from this view - usually used when rendered in tables.',
          }),
        query: z
          .object({
            logicalOperator: z
              .enum(['all', 'any'])
              .exactOptional()
              .openapi({
                description:
                  'When using groups this defines whether all of the filters must match, or only one of them.',
              }),
            onEmptyFilter: z
              .enum(['all', 'none'])
              .exactOptional()
              .openapi({
                description: 'If no filters match, should the view return all rows, or no rows.',
              }),
            groups: z
              .array(
                z
                  .object({
                    logicalOperator: z
                      .enum(['all', 'any'])
                      .exactOptional()
                      .openapi({
                        description:
                          'When using groups this defines whether all of the filters must match, or only one of them.',
                      }),
                    filters: z
                      .array(
                        z
                          .object({
                            operator: z
                              .enum([
                                'equal',
                                'notEqual',
                                'empty',
                                'notEmpty',
                                'fuzzy',
                                'string',
                                'contains',
                                'notContains',
                                'containsAny',
                                'oneOf',
                                'notOneOf',
                                'range',
                              ])
                              .exactOptional()
                              .openapi({
                                description:
                                  'The type of search operation which is being performed.',
                              }),
                            field: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The field in the view to perform the search on.',
                              }),
                            value: z
                              .xor([
                                z.string(),
                                z.number(),
                                z.boolean(),
                                z.object({}),
                                z.array(z.any()),
                              ])
                              .exactOptional()
                              .openapi({
                                description:
                                  'The value to search for - the type will depend on the operator in use.',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'A list of filters to apply' }),
                    groups: z
                      .array(
                        z
                          .object({
                            logicalOperator: z
                              .enum(['all', 'any'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'When using groups this defines whether all of the filters must match, or only one of them.',
                              }),
                            filters: z
                              .array(
                                z
                                  .object({
                                    operator: z
                                      .enum([
                                        'equal',
                                        'notEqual',
                                        'empty',
                                        'notEmpty',
                                        'fuzzy',
                                        'string',
                                        'contains',
                                        'notContains',
                                        'containsAny',
                                        'oneOf',
                                        'notOneOf',
                                        'range',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The type of search operation which is being performed.',
                                      }),
                                    field: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The field in the view to perform the search on.',
                                      }),
                                    value: z
                                      .xor([
                                        z.string(),
                                        z.number(),
                                        z.boolean(),
                                        z.object({}),
                                        z.array(z.any()),
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The value to search for - the type will depend on the operator in use.',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'A list of filters to apply' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'A grouping of filters to be applied.' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'A grouping of filters to be applied.' }),
          })
          .exactOptional()
          .openapi({ description: 'Search parameters for view', required: [] }),
        sort: z
          .xor([
            z
              .object({
                field: z
                  .string()
                  .openapi({ description: 'The field from the table/view schema to sort on.' }),
                order: z
                  .enum(['ascending', 'descending'])
                  .exactOptional()
                  .openapi({ description: 'The order in which to sort.' }),
                type: z
                  .enum(['string', 'number'])
                  .exactOptional()
                  .openapi({
                    description: 'The type of sort to perform (by number, or by alphabetically).',
                  }),
              })
              .openapi({ required: ['field'] }),
            z.array(
              z
                .object({
                  field: z
                    .string()
                    .openapi({ description: 'The field from the table/view schema to sort on.' }),
                  order: z
                    .enum(['ascending', 'descending'])
                    .exactOptional()
                    .openapi({ description: 'The order in which to sort.' }),
                  type: z
                    .enum(['string', 'number'])
                    .exactOptional()
                    .openapi({
                      description: 'The type of sort to perform (by number, or by alphabetically).',
                    }),
                })
                .openapi({ required: ['field'] }),
            ),
          ])
          .exactOptional(),
        schema: z.record(
          z.string(),
          z.xor([
            z
              .object({
                visible: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Defines whether the column is visible or not - rows retrieved/updated through this view will not be able to access it.',
                  }),
                readonly: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      "When used in combination with 'visible: true' the column will be visible in row responses but cannot be updated.",
                  }),
                order: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'A number defining where the column shows up in tables, lowest being first.',
                  }),
                width: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'A width for the column, defined in pixels - this affects rendering in tables.',
                  }),
                column: z
                  .array(
                    z.object({ readonly: z.boolean().exactOptional() }).openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'If this is a relationship column, we can set the columns we wish to include',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                calculationType: z
                  .enum(['sum', 'avg', 'count', 'min', 'max'])
                  .exactOptional()
                  .openapi({
                    description:
                      'This column should be built from a calculation, specifying a type and field. It is important to note when a calculation is configured all non-calculation columns will be used for grouping.',
                  }),
                field: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The field from the table to perform the calculation on.',
                  }),
                distinct: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Can be used in tandem with the count calculation type, to count unique entries.',
                  }),
              })
              .openapi({ required: [] }),
          ]),
        ),
        id: z.string().openapi({ description: 'The ID of the view.' }),
      })
      .openapi({
        description: 'The view to be created/updated.',
        required: ['name', 'schema', 'tableId', 'id'],
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('ViewOutput')

const ViewSearchSchema = z
  .object({
    data: z.array(
      z
        .object({
          name: z.string().openapi({ description: 'The name of the view.' }),
          tableId: z
            .string()
            .openapi({ description: 'The ID of the table this view is based on.' }),
          type: z
            .literal('calculation')
            .exactOptional()
            .openapi({ description: 'The type of view - standard (empty value) or calculation.' }),
          primaryDisplay: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A column used to display rows from this view - usually used when rendered in tables.',
            }),
          query: z
            .object({
              logicalOperator: z
                .enum(['all', 'any'])
                .exactOptional()
                .openapi({
                  description:
                    'When using groups this defines whether all of the filters must match, or only one of them.',
                }),
              onEmptyFilter: z
                .enum(['all', 'none'])
                .exactOptional()
                .openapi({
                  description: 'If no filters match, should the view return all rows, or no rows.',
                }),
              groups: z
                .array(
                  z
                    .object({
                      logicalOperator: z
                        .enum(['all', 'any'])
                        .exactOptional()
                        .openapi({
                          description:
                            'When using groups this defines whether all of the filters must match, or only one of them.',
                        }),
                      filters: z
                        .array(
                          z
                            .object({
                              operator: z
                                .enum([
                                  'equal',
                                  'notEqual',
                                  'empty',
                                  'notEmpty',
                                  'fuzzy',
                                  'string',
                                  'contains',
                                  'notContains',
                                  'containsAny',
                                  'oneOf',
                                  'notOneOf',
                                  'range',
                                ])
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The type of search operation which is being performed.',
                                }),
                              field: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The field in the view to perform the search on.',
                                }),
                              value: z
                                .xor([
                                  z.string(),
                                  z.number(),
                                  z.boolean(),
                                  z.object({}),
                                  z.array(z.any()),
                                ])
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The value to search for - the type will depend on the operator in use.',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'A list of filters to apply' }),
                      groups: z
                        .array(
                          z
                            .object({
                              logicalOperator: z
                                .enum(['all', 'any'])
                                .exactOptional()
                                .openapi({
                                  description:
                                    'When using groups this defines whether all of the filters must match, or only one of them.',
                                }),
                              filters: z
                                .array(
                                  z
                                    .object({
                                      operator: z
                                        .enum([
                                          'equal',
                                          'notEqual',
                                          'empty',
                                          'notEmpty',
                                          'fuzzy',
                                          'string',
                                          'contains',
                                          'notContains',
                                          'containsAny',
                                          'oneOf',
                                          'notOneOf',
                                          'range',
                                        ])
                                        .exactOptional()
                                        .openapi({
                                          description:
                                            'The type of search operation which is being performed.',
                                        }),
                                      field: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description:
                                            'The field in the view to perform the search on.',
                                        }),
                                      value: z
                                        .xor([
                                          z.string(),
                                          z.number(),
                                          z.boolean(),
                                          z.object({}),
                                          z.array(z.any()),
                                        ])
                                        .exactOptional()
                                        .openapi({
                                          description:
                                            'The value to search for - the type will depend on the operator in use.',
                                        }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({ description: 'A list of filters to apply' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'A grouping of filters to be applied.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'A grouping of filters to be applied.' }),
            })
            .exactOptional()
            .openapi({ description: 'Search parameters for view', required: [] }),
          sort: z
            .xor([
              z
                .object({
                  field: z
                    .string()
                    .openapi({ description: 'The field from the table/view schema to sort on.' }),
                  order: z
                    .enum(['ascending', 'descending'])
                    .exactOptional()
                    .openapi({ description: 'The order in which to sort.' }),
                  type: z
                    .enum(['string', 'number'])
                    .exactOptional()
                    .openapi({
                      description: 'The type of sort to perform (by number, or by alphabetically).',
                    }),
                })
                .openapi({ required: ['field'] }),
              z.array(
                z
                  .object({
                    field: z
                      .string()
                      .openapi({ description: 'The field from the table/view schema to sort on.' }),
                    order: z
                      .enum(['ascending', 'descending'])
                      .exactOptional()
                      .openapi({ description: 'The order in which to sort.' }),
                    type: z
                      .enum(['string', 'number'])
                      .exactOptional()
                      .openapi({
                        description:
                          'The type of sort to perform (by number, or by alphabetically).',
                      }),
                  })
                  .openapi({ required: ['field'] }),
              ),
            ])
            .exactOptional(),
          schema: z.record(
            z.string(),
            z.xor([
              z
                .object({
                  visible: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines whether the column is visible or not - rows retrieved/updated through this view will not be able to access it.',
                    }),
                  readonly: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "When used in combination with 'visible: true' the column will be visible in row responses but cannot be updated.",
                    }),
                  order: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'A number defining where the column shows up in tables, lowest being first.',
                    }),
                  width: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'A width for the column, defined in pixels - this affects rendering in tables.',
                    }),
                  column: z
                    .array(
                      z.object({ readonly: z.boolean().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'If this is a relationship column, we can set the columns we wish to include',
                    }),
                })
                .openapi({ required: [] }),
              z
                .object({
                  calculationType: z
                    .enum(['sum', 'avg', 'count', 'min', 'max'])
                    .exactOptional()
                    .openapi({
                      description:
                        'This column should be built from a calculation, specifying a type and field. It is important to note when a calculation is configured all non-calculation columns will be used for grouping.',
                    }),
                  field: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The field from the table to perform the calculation on.',
                    }),
                  distinct: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Can be used in tandem with the count calculation type, to count unique entries.',
                    }),
                })
                .openapi({ required: [] }),
            ]),
          ),
          id: z.string().openapi({ description: 'The ID of the view.' }),
        })
        .openapi({
          description: 'The view to be created/updated.',
          required: ['name', 'schema', 'tableId', 'id'],
        }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('ViewSearch')

const UserGroupListSchema = z
  .object({
    data: z.array(
      z
        .object({
          _id: z
            .string()
            .openapi({ description: "The group ID to use in a user's userGroups array." }),
          name: z.string().openapi({ description: "The group's name." }),
          isDefault: z
            .boolean()
            .openapi({
              description: 'Whether new users are automatically assigned to this group.',
            }),
          managedByScim: z
            .boolean()
            .openapi({
              description:
                'Whether the group is managed by SCIM. Memberships in these groups cannot be changed through the public user API.',
            }),
        })
        .openapi({ required: ['_id', 'name', 'isDefault', 'managedByScim'] }),
    ),
  })
  .openapi({ required: ['data'] })
  .openapi('UserGroupList')

const AppIdParamsSchema = z
  .string()
  .default('{{appId}}')
  .openapi({
    param: {
      in: 'header',
      name: 'x-budibase-app-id',
      required: true,
      description: 'The ID of the app which this request is targeting.',
      schema: { default: '{{appId}}', type: 'string' },
    },
  })

const AppIdUrlParamsSchema = z
  .string()
  .default('{{appId}}')
  .openapi({
    param: {
      in: 'path',
      name: 'appId',
      required: true,
      description: 'The ID of the app which this request is targeting.',
      schema: { default: '{{appId}}', type: 'string' },
    },
  })

const QueryIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'queryId',
      required: true,
      description: 'The ID of the query which this request is targeting.',
      schema: { type: 'string' },
    },
  })

const RowIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'rowId',
      required: true,
      description: 'The ID of the row which this request is targeting.',
      schema: { type: 'string' },
    },
  })

const TableIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'tableId',
      required: true,
      description: 'The ID of the table which this request is targeting.',
      schema: { type: 'string' },
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'userId',
      required: true,
      description: 'The ID of the user which this request is targeting.',
      schema: { type: 'string' },
    },
  })

const ViewIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'viewId',
      required: true,
      description: 'The ID of the view which this request is targeting.',
      schema: { type: 'string' },
    },
  })

const WorkspaceIdParamsSchema = z
  .string()
  .default('{{workspaceId}}')
  .openapi({
    param: {
      in: 'path',
      name: 'workspaceId',
      required: true,
      description: 'The ID of the workspace which this request is targeting.',
      schema: { default: '{{workspaceId}}', type: 'string' },
    },
  })

const ApplicationExample = {
  value: {
    data: {
      _id: 'app_metadata',
      appId: 'app_dev_957b12f943d348faa61db7e18e088d0f',
      version: '1.0.58-alpha.0',
      name: 'App name',
      url: '/url',
      tenantId: 'default',
      updatedAt: '2022-02-22T13:00:54.035Z',
      createdAt: '2022-02-11T18:02:26.961Z',
      status: 'development',
    },
  },
}

const ApplicationsExample = {
  value: {
    data: [
      {
        _id: 'app_metadata',
        appId: 'app_dev_957b12f943d348faa61db7e18e088d0f',
        version: '1.0.58-alpha.0',
        name: 'App name',
        url: '/url',
        tenantId: 'default',
        updatedAt: '2022-02-22T13:00:54.035Z',
        createdAt: '2022-02-11T18:02:26.961Z',
        status: 'development',
      },
    ],
  },
}

const WorkspaceExample = {
  value: {
    data: {
      _id: 'app_metadata',
      appId: 'app_dev_957b12f943d348faa61db7e18e088d0f',
      version: '1.0.58-alpha.0',
      name: 'App name',
      url: '/url',
      tenantId: 'default',
      updatedAt: '2022-02-22T13:00:54.035Z',
      createdAt: '2022-02-11T18:02:26.961Z',
      status: 'development',
    },
  },
}

const WorkspacesExample = {
  value: {
    data: [
      {
        _id: 'app_metadata',
        appId: 'app_dev_957b12f943d348faa61db7e18e088d0f',
        version: '1.0.58-alpha.0',
        name: 'App name',
        url: '/url',
        tenantId: 'default',
        updatedAt: '2022-02-22T13:00:54.035Z',
        createdAt: '2022-02-11T18:02:26.961Z',
        status: 'development',
      },
    ],
  },
}

const DeploymentOutputExample = {
  value: {
    data: { _id: 'ef12381f934b4f129675cdbb76eff3c2', status: 'SUCCESS', appUrl: '/app-url' },
  },
}

const InputRowExample = {
  value: {
    _id: 'ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4',
    type: 'row',
    tableId: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
    name: 'Mike',
    age: 30,
    relationship: ['ro_ta_...'],
  },
}

const RowExample = {
  value: {
    data: {
      _id: 'ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4',
      type: 'row',
      tableId: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
      name: 'Mike',
      age: 30,
      relationship: [{ primaryDisplay: 'Joe', _id: 'ro_ta_...' }],
    },
  },
}

const EnrichedRowExample = {
  value: {
    data: {
      _id: 'ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4',
      name: 'eg',
      tableId: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
      type: 'row',
      relationship: [
        {
          _id: 'ro_ta_users_us_8f3d717147d74d759d8cef5b6712062f',
          name: 'Joe',
          tableId: 'ta_users',
          internal: [
            {
              _id: 'ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4',
              primaryDisplay: 'eg',
            },
          ],
        },
      ],
    },
  },
}

const RowsExample = {
  value: {
    data: [
      {
        _id: 'ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4',
        type: 'row',
        tableId: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
        name: 'Mike',
        age: 30,
        relationship: [{ primaryDisplay: 'Joe', _id: 'ro_ta_...' }],
      },
    ],
    hasNextPage: true,
    bookmark: 10,
  },
}

const TableExample = {
  value: {
    data: {
      _id: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
      name: 'People',
      schema: {
        name: { type: 'string', name: 'name' },
        age: { type: 'number', name: 'age' },
        relationship: {
          type: 'link',
          name: 'relationship',
          tableId: 'ta_...',
          fieldName: 'relatedColumn',
          relationshipType: 'many-to-many',
        },
      },
    },
  },
}

const TablesExample = {
  value: {
    data: [
      {
        _id: 'ta_5b1649e42a5b41dea4ef7742a36a7a70',
        name: 'People',
        schema: {
          name: { type: 'string', name: 'name' },
          age: { type: 'number', name: 'age' },
          relationship: {
            type: 'link',
            name: 'relationship',
            tableId: 'ta_...',
            fieldName: 'relatedColumn',
            relationshipType: 'many-to-many',
          },
        },
      },
    ],
  },
}

const QueryExample = {
  value: {
    data: {
      _id: 'query_datasource_plus_4d8be0c506b9465daf4bf84d890fdab6_454854487c574d45bc4029b1e153219e',
      datasourceId: 'datasource_plus_4d8be0c506b9465daf4bf84d890fdab6',
      parameters: [],
      fields: { sql: 'select * from persons' },
      queryVerb: 'read',
      name: 'Help',
      schema: {
        personid: { name: 'personid', type: 'string' },
        lastname: { name: 'lastname', type: 'string' },
        firstname: { name: 'firstname', type: 'string' },
        address: { name: 'address', type: 'string' },
        city: { name: 'city', type: 'string' },
      },
      transformer: 'return data',
      readable: true,
    },
  },
}

const QueriesExample = {
  value: {
    data: [
      {
        _id: 'query_datasource_plus_4d8be0c506b9465daf4bf84d890fdab6_454854487c574d45bc4029b1e153219e',
        datasourceId: 'datasource_plus_4d8be0c506b9465daf4bf84d890fdab6',
        parameters: [],
        fields: { sql: 'select * from persons' },
        queryVerb: 'read',
        name: 'Help',
        schema: {
          personid: { name: 'personid', type: 'string' },
          lastname: { name: 'lastname', type: 'string' },
          firstname: { name: 'firstname', type: 'string' },
          address: { name: 'address', type: 'string' },
          city: { name: 'city', type: 'string' },
        },
        transformer: 'return data',
        readable: true,
      },
    ],
  },
}

const RestResponseExample = {
  value: {
    data: [{ value: "<html lang='en-GB'></html>" }],
    pagination: { cursor: '2' },
    raw: "<html lang='en-GB'></html>",
    headers: { 'content-type': 'text/html; charset=ISO-8859-1' },
  },
}

const SqlResponseExample = {
  value: {
    data: [
      {
        personid: 1,
        lastname: 'Hughes',
        firstname: 'Mike',
        address: '123 Fake Street',
        city: 'Belfast',
      },
      {
        personid: 2,
        lastname: 'Smith',
        firstname: 'John',
        address: '64 Updown Road',
        city: 'Dublin',
      },
    ],
  },
}

const UserExample = {
  value: {
    data: {
      _id: 'us_693a73206518477283a8d5ae31103252',
      email: 'test@example.com',
      roles: { app_957b12f943d348faa61db7e18e088d0f: 'BASIC' },
      builder: { global: false },
      admin: { global: true },
      tenantId: 'default',
      status: 'active',
      budibaseAccess: true,
      csrfToken: '9c70291d-7137-48f9-9166-99ab5473a3d4',
      userId: 'us_693a73206518477283a8d5ae31103252',
      roleId: 'ADMIN',
      role: { _id: 'ADMIN', name: 'Admin', permissionId: 'admin', inherits: 'POWER' },
    },
  },
}

const UsersExample = {
  value: {
    data: [
      {
        _id: 'us_693a73206518477283a8d5ae31103252',
        email: 'test@example.com',
        roles: { app_957b12f943d348faa61db7e18e088d0f: 'BASIC' },
        builder: { global: false },
        admin: { global: true },
        tenantId: 'default',
        status: 'active',
        budibaseAccess: true,
        csrfToken: '9c70291d-7137-48f9-9166-99ab5473a3d4',
        userId: 'us_693a73206518477283a8d5ae31103252',
        roleId: 'ADMIN',
        role: { _id: 'ADMIN', name: 'Admin', permissionId: 'admin', inherits: 'POWER' },
      },
    ],
  },
}

const MetricsExample = {
  value:
    '# HELP budibase_os_uptime Time in seconds that the host operating system has been up.\n# TYPE budibase_os_uptime counter\nbudibase_os_uptime 54958\n# HELP budibase_os_free_mem Bytes of memory free for usage on the host operating system.\n# TYPE budibase_os_free_mem gauge\nbudibase_os_free_mem 804507648\n# HELP budibase_os_total_mem Total bytes of memory on the host operating system.\n# TYPE budibase_os_total_mem gauge\nbudibase_os_total_mem 16742404096\n# HELP budibase_os_used_mem Total bytes of memory in use on the host operating system.\n# TYPE budibase_os_used_mem gauge\nbudibase_os_used_mem 15937896448\n# HELP budibase_os_load1 Host operating system load average.\n# TYPE budibase_os_load1 gauge\nbudibase_os_load1 1.91\n# HELP budibase_os_load5 Host operating system load average.\n# TYPE budibase_os_load5 gauge\nbudibase_os_load5 1.75\n# HELP budibase_os_load15 Host operating system load average.\n# TYPE budibase_os_load15 gauge\nbudibase_os_load15 1.56\n# HELP budibase_tenant_user_count The number of users created.\n# TYPE budibase_tenant_user_count gauge\nbudibase_tenant_user_count 1\n# HELP budibase_tenant_app_count The number of apps created by a user.\n# TYPE budibase_tenant_app_count gauge\nbudibase_tenant_app_count 2\n# HELP budibase_tenant_production_app_count The number of apps a user has published.\n# TYPE budibase_tenant_production_app_count gauge\nbudibase_tenant_production_app_count 1\n# HELP budibase_tenant_dev_app_count The number of apps a user has unpublished in development.\n# TYPE budibase_tenant_dev_app_count gauge\nbudibase_tenant_dev_app_count 1\n# HELP budibase_tenant_db_count The number of couchdb databases including global tables such as _users.\n# TYPE budibase_tenant_db_count gauge\nbudibase_tenant_db_count 3\n# HELP budibase_quota_usage_apps The number of apps created.\n# TYPE budibase_quota_usage_apps gauge\nbudibase_quota_usage_apps 1\n# HELP budibase_quota_limit_apps The limit on the number of apps that can be created.\n# TYPE budibase_quota_limit_apps gauge\nbudibase_quota_limit_apps 9007199254740991\n# HELP budibase_quota_usage_rows The number of database rows used from the quota.\n# TYPE budibase_quota_usage_rows gauge\nbudibase_quota_usage_rows 0\n# HELP budibase_quota_limit_rows The limit on the number of rows that can be created.\n# TYPE budibase_quota_limit_rows gauge\nbudibase_quota_limit_rows 9007199254740991\n# HELP budibase_quota_usage_plugins The number of plugins in use.\n# TYPE budibase_quota_usage_plugins gauge\nbudibase_quota_usage_plugins 0\n# HELP budibase_quota_limit_plugins The limit on the number of plugins that can be created.\n# TYPE budibase_quota_limit_plugins gauge\nbudibase_quota_limit_plugins 9007199254740991\n# HELP budibase_quota_usage_user_groups The number of user groups created.\n# TYPE budibase_quota_usage_user_groups gauge\nbudibase_quota_usage_user_groups 0\n# HELP budibase_quota_limit_user_groups The limit on the number of user groups that can be created.\n# TYPE budibase_quota_limit_user_groups gauge\nbudibase_quota_limit_user_groups 9007199254740991\n# HELP budibase_quota_usage_queries The number of queries used in the current month.\n# TYPE budibase_quota_usage_queries gauge\nbudibase_quota_usage_queries 0\n# HELP budibase_quota_limit_queries The limit on the number of queries for the current month.\n# TYPE budibase_quota_limit_queries gauge\nbudibase_quota_limit_queries 9007199254740991\n# HELP budibase_quota_usage_automations The number of automations used in the current month.\n# TYPE budibase_quota_usage_automations gauge\nbudibase_quota_usage_automations 0\n# HELP budibase_quota_limit_automations The limit on the number of automations that can be created.\n# TYPE budibase_quota_limit_automations gauge\nbudibase_quota_limit_automations 9007199254740991\n',
}

const ViewExample = {
  value: {
    data: {
      name: 'peopleView',
      tableId: 'ta_896a325f7e8147d2a2cda93c5d236511',
      schema: {
        name: { visible: true, readonly: false, order: 1, width: 300 },
        age: { visible: true, readonly: true, order: 2, width: 200 },
        salary: { visible: false, readonly: false },
      },
      query: {
        logicalOperator: 'all',
        onEmptyFilter: 'none',
        groups: [
          {
            logicalOperator: 'any',
            filters: [
              { operator: 'string', field: 'name', value: 'John' },
              { operator: 'range', field: 'age', value: { low: 18, high: 100 } },
            ],
          },
        ],
      },
      primaryDisplay: 'name',
    },
  },
}

const ViewsExample = {
  value: {
    data: [
      {
        name: 'peopleView',
        tableId: 'ta_896a325f7e8147d2a2cda93c5d236511',
        schema: {
          name: { visible: true, readonly: false, order: 1, width: 300 },
          age: { visible: true, readonly: true, order: 2, width: 200 },
          salary: { visible: false, readonly: false },
        },
        query: {
          logicalOperator: 'all',
          onEmptyFilter: 'none',
          groups: [
            {
              logicalOperator: 'any',
              filters: [
                { operator: 'string', field: 'name', value: 'John' },
                { operator: 'range', field: 'age', value: { low: 18, high: 100 } },
              ],
            },
          ],
        },
        primaryDisplay: 'name',
      },
    ],
  },
}

const UserGroupsExample = {
  value: {
    data: [{ _id: 'gr_engineering', name: 'Engineering', isDefault: false, managedByScim: false }],
  },
}

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'x-budibase-api-key',
  description:
    'Your individual API key, this will provide access based on the configured RBAC settings of your user.',
}

export const postApplicationsRoute = createRoute({
  method: 'post',
  path: '/applications',
  tags: ['applications'],
  summary: 'Create an application',
  operationId: 'appCreate',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: ApplicationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the created application.',
      content: {
        'application/json': {
          schema: ApplicationOutputSchema,
          examples: { application: ApplicationExample },
        },
      },
    },
  },
  deprecated: true,
})

export const getApplicationsAppIdRoute = createRoute({
  method: 'get',
  path: '/applications/{appId}',
  tags: ['applications'],
  summary: 'Retrieve an application',
  operationId: 'appGetById',
  request: { params: z.object({ appId: AppIdUrlParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the retrieved application.',
      content: {
        'application/json': {
          schema: ApplicationOutputSchema,
          examples: { application: ApplicationExample },
        },
      },
    },
  },
  deprecated: true,
})

export const putApplicationsAppIdRoute = createRoute({
  method: 'put',
  path: '/applications/{appId}',
  tags: ['applications'],
  summary: 'Update an application',
  operationId: 'appUpdate',
  request: {
    params: z.object({ appId: AppIdUrlParamsSchema }),
    body: { content: { 'application/json': { schema: ApplicationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the updated application.',
      content: {
        'application/json': {
          schema: ApplicationOutputSchema,
          examples: { application: ApplicationExample },
        },
      },
    },
  },
  deprecated: true,
})

export const deleteApplicationsAppIdRoute = createRoute({
  method: 'delete',
  path: '/applications/{appId}',
  tags: ['applications'],
  summary: 'Delete an application',
  operationId: 'appDestroy',
  request: { params: z.object({ appId: AppIdUrlParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the deleted application.',
      content: {
        'application/json': {
          schema: ApplicationOutputSchema,
          examples: { application: ApplicationExample },
        },
      },
    },
  },
  deprecated: true,
})

export const postApplicationsAppIdUnpublishRoute = createRoute({
  method: 'post',
  path: '/applications/{appId}/unpublish',
  tags: ['applications'],
  summary: 'Unpublish an application',
  operationId: 'appUnpublish',
  request: { params: z.object({ appId: AppIdUrlParamsSchema }) },
  responses: { 204: { description: 'The app was published successfully.' } },
  deprecated: true,
})

export const postApplicationsAppIdPublishRoute = createRoute({
  method: 'post',
  path: '/applications/{appId}/publish',
  tags: ['applications'],
  summary: 'Publish an application',
  operationId: 'appPublish',
  request: { params: z.object({ appId: AppIdUrlParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the deployment object.',
      content: {
        'application/json': {
          schema: DeploymentOutputSchema,
          examples: { deployment: DeploymentOutputExample },
        },
      },
    },
  },
  deprecated: true,
})

export const postApplicationsAppIdImportRoute = createRoute({
  method: 'post',
  path: '/applications/{appId}/import',
  tags: ['applications'],
  summary: 'Import an app to an existing app 🔒',
  description: 'This endpoint is only available on a business or enterprise license.',
  operationId: 'appImport',
  request: {
    params: z.object({ appId: AppIdUrlParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              encryptedPassword: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password for the export if it is encrypted.' }),
              appExport: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The app export to import.',
                }),
            })
            .openapi({ required: ['appExport'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Application has been updated.' } },
  deprecated: true,
})

export const postApplicationsAppIdExportRoute = createRoute({
  method: 'post',
  path: '/applications/{appId}/export',
  tags: ['applications'],
  summary: 'Export an app 🔒',
  description: 'This endpoint is only available on a business or enterprise license.',
  operationId: 'appExport',
  request: {
    params: z.object({ appId: AppIdUrlParamsSchema }),
    body: { content: { 'application/json': { schema: AppExportSchema } } },
  },
  responses: {
    200: {
      description: 'A gzip tarball containing the app export, encrypted if password provided.',
      content: {
        'application/gzip': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              example: 'Tarball containing database and object store contents...',
            }),
        },
      },
    },
  },
  deprecated: true,
})

export const postApplicationsSearchRoute = createRoute({
  method: 'post',
  path: '/applications/search',
  tags: ['applications'],
  summary: 'Search for applications',
  description: 'Based on application properties (currently only name) search for applications.',
  operationId: 'appSearch',
  request: {
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the applications that were found based on the search parameters.',
      content: {
        'application/json': {
          schema: ApplicationSearchSchema,
          examples: { applications: ApplicationsExample },
        },
      },
    },
  },
  deprecated: true,
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['metrics'],
  summary: 'Retrieve Budibase tenant metrics',
  description: 'Output metrics in OpenMetrics format compatible with Prometheus',
  operationId: 'metricsGet',
  responses: {
    200: {
      description: 'Returns tenant metrics.',
      content: { 'text/plain': { schema: z.string(), examples: { metrics: MetricsExample } } },
    },
  },
})

export const postQueriesQueryIdRoute = createRoute({
  method: 'post',
  path: '/queries/{queryId}',
  tags: ['queries'],
  summary: 'Execute a query',
  description: 'Queries which have been created within a Budibase app can be executed using this,',
  operationId: 'queryExecute',
  request: {
    params: z.object({ queryId: QueryIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: ExecuteQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the result of the query execution.',
      content: {
        'application/json': {
          schema: ExecuteQueryOutputSchema,
          examples: { REST: RestResponseExample, SQL: SqlResponseExample },
        },
      },
    },
  },
})

export const postQueriesSearchRoute = createRoute({
  method: 'post',
  path: '/queries/search',
  tags: ['queries'],
  summary: 'Search for queries',
  description: 'Based on query properties (currently only name) search for queries.',
  operationId: 'querySearch',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the queries found based on the search parameters.',
      content: {
        'application/json': { schema: QuerySearchSchema, examples: { queries: QueriesExample } },
      },
    },
  },
})

export const postRolesAssignRoute = createRoute({
  method: 'post',
  path: '/roles/assign',
  tags: ['roles'],
  summary: 'Assign a role to a list of users',
  description: 'This is a business/enterprise only endpoint',
  operationId: 'roleAssign',
  request: {
    body: { content: { 'application/json': { schema: RolesAssignSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns a list of updated user IDs',
      content: { 'application/json': { schema: RolesOutputSchema } },
    },
  },
})

export const postRolesUnassignRoute = createRoute({
  method: 'post',
  path: '/roles/unassign',
  tags: ['roles'],
  summary: 'Un-assign a role from a list of users',
  description: 'This is a business/enterprise only endpoint',
  operationId: 'roleUnAssign',
  request: {
    body: { content: { 'application/json': { schema: RolesUnAssignSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns a list of updated user IDs',
      content: { 'application/json': { schema: RolesOutputSchema } },
    },
  },
})

export const postTablesTableIdRowsRoute = createRoute({
  method: 'post',
  path: '/tables/{tableId}/rows',
  tags: ['rows'],
  summary: 'Create a row',
  description: 'Creates a row within the specified table.',
  operationId: 'rowCreate',
  request: {
    params: z.object({ tableId: TableIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: RowSchema, examples: { row: InputRowExample } } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns the created row, including the ID which has been generated for it. This can be found in the Budibase portal, viewed under the developer information.',
      content: { 'application/json': { schema: RowOutputSchema, examples: { row: RowExample } } },
    },
  },
})

export const getTablesTableIdRowsRowIdRoute = createRoute({
  method: 'get',
  path: '/tables/{tableId}/rows/{rowId}',
  tags: ['rows'],
  summary: 'Retrieve a row',
  description:
    'This gets a single row, it will be enriched with the full related rows, rather than the squashed "primaryDisplay" format returned by the search endpoint.',
  operationId: 'rowGetById',
  request: {
    params: z.object({ tableId: TableIdParamsSchema, rowId: RowIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the retrieved row.',
      content: {
        'application/json': {
          schema: RowOutputSchema,
          examples: { enrichedRow: EnrichedRowExample },
        },
      },
    },
  },
})

export const putTablesTableIdRowsRowIdRoute = createRoute({
  method: 'put',
  path: '/tables/{tableId}/rows/{rowId}',
  tags: ['rows'],
  summary: 'Update a row',
  description: 'Updates a row within the specified table.',
  operationId: 'rowUpdate',
  request: {
    params: z.object({ tableId: TableIdParamsSchema, rowId: RowIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: RowSchema, examples: { row: InputRowExample } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the created row, including the ID which has been generated for it.',
      content: { 'application/json': { schema: RowOutputSchema, examples: { row: RowExample } } },
    },
  },
})

export const deleteTablesTableIdRowsRowIdRoute = createRoute({
  method: 'delete',
  path: '/tables/{tableId}/rows/{rowId}',
  tags: ['rows'],
  summary: 'Delete a row',
  description: 'Deletes a row within the specified table.',
  operationId: 'rowDestroy',
  request: {
    params: z.object({ tableId: TableIdParamsSchema, rowId: RowIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the deleted row, including the ID which has been generated for it.',
      content: { 'application/json': { schema: RowOutputSchema, examples: { row: RowExample } } },
    },
  },
})

export const postTablesTableIdRowsSearchRoute = createRoute({
  method: 'post',
  path: '/tables/{tableId}/rows/search',
  tags: ['rows'],
  summary: 'Search for rows',
  operationId: 'rowSearch',
  request: {
    params: z.object({ tableId: TableIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: RowSearchSchema } } },
  },
  responses: {
    200: {
      description: 'The response will contain an array of rows that match the search parameters.',
      content: {
        'application/json': { schema: SearchOutputSchema, examples: { search: RowsExample } },
      },
    },
  },
})

export const postTablesRoute = createRoute({
  method: 'post',
  path: '/tables',
  tags: ['tables'],
  summary: 'Create a table',
  description: 'Create a table, this could be internal or external.',
  operationId: 'tableCreate',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: TableSchema, examples: { table: TableExample } } },
    },
  },
  responses: {
    200: {
      description:
        'Returns the created table, including the ID which has been generated for it. This can be internal or external datasources.',
      content: {
        'application/json': { schema: TableOutputSchema, examples: { table: TableExample } },
      },
    },
  },
})

export const getTablesTableIdRoute = createRoute({
  method: 'get',
  path: '/tables/{tableId}',
  tags: ['tables'],
  summary: 'Retrieve a table',
  description: 'Lookup a table, this could be internal or external.',
  operationId: 'tableGetById',
  request: {
    params: z.object({ tableId: TableIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the retrieved table.',
      content: {
        'application/json': { schema: TableOutputSchema, examples: { table: TableExample } },
      },
    },
  },
})

export const putTablesTableIdRoute = createRoute({
  method: 'put',
  path: '/tables/{tableId}',
  tags: ['tables'],
  summary: 'Update a table',
  description: 'Update a table, this could be internal or external.',
  operationId: 'tableUpdate',
  request: {
    params: z.object({ tableId: TableIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: TableSchema, examples: { table: TableExample } } },
    },
  },
  responses: {
    200: {
      description: 'Returns the updated table.',
      content: {
        'application/json': { schema: TableOutputSchema, examples: { table: TableExample } },
      },
    },
  },
})

export const deleteTablesTableIdRoute = createRoute({
  method: 'delete',
  path: '/tables/{tableId}',
  tags: ['tables'],
  summary: 'Delete a table',
  description: 'Delete a table, this could be internal or external.',
  operationId: 'tableDestroy',
  request: {
    params: z.object({ tableId: TableIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the deleted table.',
      content: {
        'application/json': { schema: TableOutputSchema, examples: { table: TableExample } },
      },
    },
  },
})

export const postTablesSearchRoute = createRoute({
  method: 'post',
  path: '/tables/search',
  tags: ['tables'],
  summary: 'Search for tables',
  description:
    'Based on table properties (currently only name) search for tables. This could be an internal or an external table.',
  operationId: 'tableSearch',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the found tables, based on the search parameters.',
      content: {
        'application/json': { schema: TableSearchSchema, examples: { tables: TablesExample } },
      },
    },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['users'],
  summary: 'Create a user',
  operationId: 'userCreate',
  request: { body: { content: { 'application/json': { schema: UserSchema } }, required: true } },
  responses: {
    200: {
      description: 'Returns the created user.',
      content: {
        'application/json': { schema: UserOutputSchema, examples: { user: UserExample } },
      },
    },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['users'],
  summary: 'Retrieve a user',
  operationId: 'userGetById',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the retrieved user.',
      content: {
        'application/json': { schema: UserOutputSchema, examples: { user: UserExample } },
      },
    },
  },
})

export const putUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/users/{userId}',
  tags: ['users'],
  summary: 'Update a user',
  operationId: 'userUpdate',
  request: {
    params: z.object({ userId: UserIdParamsSchema }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the updated user.',
      content: {
        'application/json': { schema: UserOutputSchema, examples: { user: UserExample } },
      },
    },
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  tags: ['users'],
  summary: 'Delete a user',
  operationId: 'userDestroy',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the deleted user.',
      content: {
        'application/json': { schema: UserOutputSchema, examples: { user: UserExample } },
      },
    },
  },
})

export const postUsersSearchRoute = createRoute({
  method: 'post',
  path: '/users/search',
  tags: ['users'],
  summary: 'Search for users',
  description: 'Based on user properties (currently only name) search for users.',
  operationId: 'userSearch',
  request: {
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the found users based on search parameters.',
      content: {
        'application/json': { schema: UserSearchSchema, examples: { users: UsersExample } },
      },
    },
  },
})

export const postViewsRoute = createRoute({
  method: 'post',
  path: '/views',
  tags: ['views'],
  summary: 'Create a view',
  description: 'Create a view, this can be against an internal or external table.',
  operationId: 'viewCreate',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: ViewSchema, examples: { view: ViewExample } } },
    },
  },
  responses: {
    200: {
      description: 'Returns the created view, including the ID which has been generated for it.',
      content: {
        'application/json': { schema: ViewOutputSchema, examples: { view: ViewExample } },
      },
    },
  },
})

export const getViewsViewIdRoute = createRoute({
  method: 'get',
  path: '/views/{viewId}',
  tags: ['views'],
  summary: 'Retrieve a view',
  description: 'Lookup a view, this could be internal or external.',
  operationId: 'viewGetById',
  request: {
    params: z.object({ viewId: ViewIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the retrieved view.',
      content: {
        'application/json': { schema: ViewOutputSchema, examples: { view: ViewExample } },
      },
    },
  },
})

export const putViewsViewIdRoute = createRoute({
  method: 'put',
  path: '/views/{viewId}',
  tags: ['views'],
  summary: 'Update a view',
  description: 'Update a view, this can be against an internal or external table.',
  operationId: 'viewUpdate',
  request: {
    params: z.object({ viewId: ViewIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: ViewSchema, examples: { view: ViewExample } } },
    },
  },
  responses: {
    200: {
      description: 'Returns the updated view.',
      content: {
        'application/json': { schema: ViewOutputSchema, examples: { view: ViewExample } },
      },
    },
  },
})

export const deleteViewsViewIdRoute = createRoute({
  method: 'delete',
  path: '/views/{viewId}',
  tags: ['views'],
  summary: 'Delete a view',
  description: 'Delete a view, this can be against an internal or external table.',
  operationId: 'viewDestroy',
  request: {
    params: z.object({ viewId: ViewIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the deleted view.',
      content: {
        'application/json': { schema: ViewOutputSchema, examples: { view: ViewExample } },
      },
    },
  },
})

export const postViewsSearchRoute = createRoute({
  method: 'post',
  path: '/views/search',
  tags: ['views'],
  summary: 'Search for views',
  description: 'Based on view properties (currently only name) search for views.',
  operationId: 'viewSearch',
  request: {
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the found views, based on the search parameters.',
      content: {
        'application/json': { schema: ViewSearchSchema, examples: { views: ViewsExample } },
      },
    },
  },
})

export const postViewsViewIdRowsSearchRoute = createRoute({
  method: 'post',
  path: '/views/{viewId}/rows/search',
  tags: ['rows'],
  summary: 'Search for rows in a view',
  operationId: 'rowViewSearch',
  request: {
    params: z.object({ viewId: ViewIdParamsSchema }),
    headers: z.object({ 'x-budibase-app-id': AppIdParamsSchema }),
    body: { content: { 'application/json': { schema: RowSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The response will contain an array of rows that match the search parameters.',
      content: {
        'application/json': { schema: SearchOutputSchema, examples: { search: RowsExample } },
      },
    },
  },
})

export const postWorkspacesRoute = createRoute({
  method: 'post',
  path: '/workspaces',
  tags: ['workspaces'],
  summary: 'Create a workspace',
  operationId: 'workspaceCreate',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the created workspace.',
      content: {
        'application/json': {
          schema: WorkspaceOutputSchema,
          examples: { workspace: WorkspaceExample },
        },
      },
    },
  },
})

export const getWorkspacesWorkspaceIdRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}',
  tags: ['workspaces'],
  summary: 'Retrieve a workspace',
  operationId: 'workspaceGetById',
  request: { params: z.object({ workspaceId: WorkspaceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the retrieved workspace.',
      content: {
        'application/json': {
          schema: WorkspaceOutputSchema,
          examples: { workspace: WorkspaceExample },
        },
      },
    },
  },
})

export const putWorkspacesWorkspaceIdRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspaceId}',
  tags: ['workspaces'],
  summary: 'Update a workspace',
  operationId: 'workspaceUpdate',
  request: {
    params: z.object({ workspaceId: WorkspaceIdParamsSchema }),
    body: { content: { 'application/json': { schema: WorkspaceSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the updated workspace.',
      content: {
        'application/json': {
          schema: WorkspaceOutputSchema,
          examples: { workspace: WorkspaceExample },
        },
      },
    },
  },
})

export const deleteWorkspacesWorkspaceIdRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspaceId}',
  tags: ['workspaces'],
  summary: 'Delete a workspace',
  operationId: 'workspaceDestroy',
  request: { params: z.object({ workspaceId: WorkspaceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the deleted workspace.',
      content: {
        'application/json': {
          schema: WorkspaceOutputSchema,
          examples: { workspace: WorkspaceExample },
        },
      },
    },
  },
})

export const postWorkspacesWorkspaceIdPublishRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/publish',
  tags: ['workspaces'],
  summary: 'Publish a workspace',
  operationId: 'workspacePublish',
  request: { params: z.object({ workspaceId: WorkspaceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the deployment object.',
      content: {
        'application/json': {
          schema: DeploymentOutputSchema,
          examples: { deployment: DeploymentOutputExample },
        },
      },
    },
  },
})

export const postWorkspacesWorkspaceIdUnpublishRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/unpublish',
  tags: ['workspaces'],
  summary: 'Unpublish a workspace',
  operationId: 'workspaceUnpublish',
  request: { params: z.object({ workspaceId: WorkspaceIdParamsSchema }) },
  responses: { 204: { description: 'The workspace was published successfully.' } },
})

export const postWorkspacesWorkspaceIdImportRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/import',
  tags: ['workspaces'],
  summary: 'Import a workspace to an existing workspace 🔒',
  description: 'This endpoint is only available on an enterprise license.',
  operationId: 'workspaceImport',
  request: {
    params: z.object({ workspaceId: WorkspaceIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              encryptedPassword: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password for the file if it is encrypted.' }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The export to import.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Workspace has been updated.' } },
})

export const postWorkspacesWorkspaceIdExportRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/export',
  tags: ['workspaces'],
  summary: 'Export a workspace 🔒',
  description: 'This endpoint is only available on an enterprise license.',
  operationId: 'workspaceExport',
  request: {
    params: z.object({ workspaceId: WorkspaceIdParamsSchema }),
    body: { content: { 'application/json': { schema: WorkspaceExportSchema } } },
  },
  responses: {
    200: {
      description:
        'A gzip tarball containing the workspace export, encrypted if password provided.',
      content: {
        'application/gzip': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              example: 'Tarball containing database and object store contents...',
            }),
        },
      },
    },
  },
})

export const getWorkspacesWorkspaceIdGroupsRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}/groups',
  tags: ['workspaces'],
  summary: 'List user groups for a workspace',
  description:
    'Returns groups that grant role or builder access to this workspace. Requires a global admin API key and the user groups and expanded public API features. Both development and production workspace IDs are accepted. SCIM-managed groups are included but their memberships cannot be changed through the public user API.',
  operationId: 'workspaceListGroups',
  request: { params: z.object({ workspaceId: WorkspaceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Returns the groups associated with the workspace.',
      content: {
        'application/json': {
          schema: UserGroupListSchema,
          examples: { userGroups: UserGroupsExample },
        },
      },
    },
  },
})

export const postWorkspacesSearchRoute = createRoute({
  method: 'post',
  path: '/workspaces/search',
  tags: ['workspaces'],
  summary: 'Search for workspaces',
  description: 'Based on workspace properties (currently only name) search for workspaces.',
  operationId: 'workspaceSearch',
  request: {
    body: { content: { 'application/json': { schema: NameSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the workspaces that were found based on the search parameters.',
      content: {
        'application/json': {
          schema: WorkspaceSearchSchema,
          examples: { workspaces: WorkspacesExample },
        },
      },
    },
  },
})
