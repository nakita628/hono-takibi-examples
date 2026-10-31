import { createRoute, z } from '@hono/zod-openapi'

const CloseoutDocumentSchema = z
  .string()
  .openapi({
    description:
      'Represents a file hyperlink or external hyperlink to a project closeout final report artifact.',
  })
  .openapi('CloseoutDocument')

const CoInvestigatorSchema = z
  .string()
  .openapi({
    description: 'The name of an investigator who is a scientist or engineer for an project.',
  })
  .openapi('CoInvestigator')

const DestinationSchema = z
  .string()
  .openapi({
    description:
      'Represents a destination towards which the technology on this project helps advance the Agency goals.',
  })
  .openapi('Destination')

const FileSchema = z
  .object({
    id: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the file.',
      }),
    size: z.string().exactOptional().openapi({ description: 'The size of the file in bytes.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The TechPort URL at which the file is accessible for download.' }),
  })
  .openapi({ description: 'Represents a file associated with a library item.', required: [] })
  .openapi('File')

const LibraryItemSchema = z
  .object({
    completionDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the library item was completed.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the library item.' }),
    externalUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'External URL for the library item.' }),
    files: z
      .array(FileSchema)
      .exactOptional()
      .openapi({ description: 'List of files associated with the library item.' }),
    id: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the library item.',
      }),
    publishedBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publisher of the library item.' }),
    publishedDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the library item was published.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the library item' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the type of library item, e.g. Image' }),
  })
  .openapi({
    description: 'Represents a specific library item that is part of this project.',
    required: [],
  })
  .openapi('LibraryItem')

const OrganizationSchema = z
  .object({
    acronym: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acronym of the organization.' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city in which the organization is located.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the organization.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state in which the organization is located.' }),
  })
  .openapi({ description: 'A NASA center/facility associated with an project.', required: [] })
  .openapi('Organization')

const PrincipalInvestigatorSchema = z
  .string()
  .openapi({
    description:
      'The name of the Principal Investigator who is a lead scientist or engineer for an project.',
  })
  .openapi('PrincipalInvestigator')

const ProgramDirectorSchema = z
  .string()
  .openapi({
    description: 'The name of a Program Director responsible for management of an project.',
  })
  .openapi('ProgramDirector')

const ProgramManagerSchema = z
  .string()
  .openapi({
    description: 'The name of a Program Manager responsible for management of an project.',
  })
  .openapi('ProgramManager')

const TechnologyAreaSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code identifier for the Technology Area.' }),
    id: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the Technology Area.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the Technology Area.' }),
  })
  .openapi({
    description:
      'The Technology Area for a given technology that corresponds to the NASA Technology Roadmap.',
    required: [],
  })
  .openapi('TechnologyArea')

const ProjectManagerSchema = z
  .string()
  .openapi({
    description: 'The name of a Project Manager responsible for management of an project.',
  })
  .openapi('ProjectManager')

const WorkLocationSchema = z
  .string()
  .openapi({ description: 'A state/territory where work on this project is performed.' })
  .openapi('WorkLocation')

const ProjectSchema = z
  .object({
    acronym: z
      .string()
      .exactOptional()
      .openapi({ description: 'Abbreviated name of the project.' }),
    additionalTas: z
      .array(TechnologyAreaSchema)
      .exactOptional()
      .openapi({
        description:
          'List of additional and cross-cutting technology areas associated with the project.',
      }),
    benefits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation.',
      }),
    closeoutDocuments: z
      .array(CloseoutDocumentSchema)
      .exactOptional()
      .openapi({
        description:
          'List of document files or links to the project final report closeout documentation.',
      }),
    closeoutSummary: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project closeout summary excerpt.' }),
    coFundingPartners: z
      .array(OrganizationSchema)
      .exactOptional()
      .openapi({
        description:
          'Other government agencies, NASA Mission Directoratres, universities, or commercial entities performing contributing resources to this project.',
      }),
    coInvestigators: z
      .array(CoInvestigatorSchema)
      .exactOptional()
      .openapi({
        description:
          'Names of the additional investigators who are scientists or engineers for this project.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed description of the project.' }),
    destinations: z
      .array(DestinationSchema)
      .exactOptional()
      .openapi({
        description: 'List of the NASA destinations the technology on this project helps achieve.',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The month and year the project is expected to complete its work.' }),
    id: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the project.',
      }),
    lastUpdated: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated.',
      }),
    leadOrganization: OrganizationSchema.exactOptional(),
    libraryItems: z
      .array(LibraryItemSchema)
      .exactOptional()
      .openapi({ description: 'List of library items in the project library.' }),
    primaryTas: z
      .array(TechnologyAreaSchema)
      .exactOptional()
      .openapi({
        description:
          'List of primary technolgy areas (from the NASA Technology Roadmap) associated with the project.',
      }),
    principalInvestigators: z
      .array(PrincipalInvestigatorSchema)
      .exactOptional()
      .openapi({
        description:
          'Names of the Principal Investigators who are the lead scientists or engineers for this project.',
      }),
    programDirectors: z
      .array(ProgramDirectorSchema)
      .exactOptional()
      .openapi({
        description:
          'Names of the Program Directors responsible for the management of this project.',
      }),
    programManagers: z
      .array(ProgramManagerSchema)
      .exactOptional()
      .openapi({
        description:
          'Names of the Program Managers responsible for the management of this project.',
      }),
    projectManagers: z
      .array(ProjectManagerSchema)
      .exactOptional()
      .openapi({
        description:
          'Names of the Project Managers responsible for the management of this project.',
      }),
    responsibleMissionDirectorateOrOffice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The NASA Mission Directorate or Office that is the primary funding source for this project.',
      }),
    responsibleProgram: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The NASA program that is the primary funding source for this project.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The month and year the project was authorized to proceed.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the project is currently active, completed, or canceled.',
      }),
    supportedMissionType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The supported mission type (Projected Mission, Planned Mission, or Pull).',
      }),
    supportingOrganizations: z
      .array(OrganizationSchema)
      .exactOptional()
      .openapi({
        description:
          'The supporting organizations for this project that are conducting work on the project.',
      }),
    technologyMaturityCurrent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The current technology maturity (technology readiness level) of the project.',
      }),
    technologyMaturityEnd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The estimated technology maturity (technology readiness level) of the project at its end.',
      }),
    technologyMaturityStart: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The technology maturity (technology readiness level) of the project at its beginning.',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the project.' }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for the associated website.' }),
    workLocations: z
      .array(WorkLocationSchema)
      .exactOptional()
      .openapi({
        description: 'States and territories with people performing work on this project.',
      }),
  })
  .openapi({
    description:
      'Top-level TechPort object representing a NASA technology project and its associated data.',
    required: [],
  })
  .openapi('Project')

export const getApiRoute = createRoute({
  method: 'get',
  path: '/api',
  description: 'Returns the swagger specification for the API.',
  responses: {
    200: { description: 'Successful response' },
    default: { description: 'Object not found.' },
  },
})

export const getApiProjectsIdFormatRoute = createRoute({
  method: 'get',
  path: '/api/projects/{id}{.format}',
  description: 'Returns information about a specific technology project.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID of project to fetch',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      '.format': z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: '.format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('xml')
        .openapi({
          param: {
            description: 'The response type desired.',
            in: 'query',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: ProjectSchema },
        'application/xml': { schema: ProjectSchema },
      },
    },
    default: { description: 'Object not found.' },
  },
})

export const getApiProjectsFormatRoute = createRoute({
  method: 'get',
  path: '/api/projects{.format}',
  description: 'Returns a list of available technology project IDs.',
  request: {
    query: z.object({
      updatedSince: z.iso
        .date()
        .openapi({
          param: {
            description:
              'ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.',
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The response type desired.',
            in: 'query',
            name: 'format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
    params: z.object({
      '.format': z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: '.format',
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
          schema: z
            .object({
              id: z
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
                .openapi({ type: 'integer', format: 'int64' }),
              lastUpdated: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': {
          schema: z
            .object({
              id: z
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
                .openapi({ type: 'integer', format: 'int64' }),
              lastUpdated: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: { description: 'Object not found.' },
  },
})
