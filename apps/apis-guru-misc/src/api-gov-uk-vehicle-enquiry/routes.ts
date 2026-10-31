import { createRoute, z } from '@hono/zod-openapi'

const ErrorsSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'DVLA reference code', example: '105' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A meaningful description of the error which has occurred',
        example: 'Invalid format for field - vehicle registration number',
      }),
    status: z.string().exactOptional().openapi({ example: '400' }),
    title: z.string().openapi({ description: 'Error title', example: 'Invalid vrn number' }),
  })
  .openapi({ required: ['title'] })
  .openapi('Errors')

const ErrorResponseSchema = z
  .object({ errors: z.array(ErrorsSchema).exactOptional() })
  .openapi({ description: 'Error Response', required: [] })
  .openapi('ErrorResponse')

const VehicleSchema = z
  .object({
    artEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Additional Rate of Tax End Date, format: YYYY-MM-DD',
        example: '2007-12-25',
      }),
    co2Emissions: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Carbon Dioxide emissions in grams per kilometre', example: 0 }),
    colour: z.string().exactOptional().openapi({ description: 'Vehicle colour', example: 'Blue' }),
    dateOfLastV5CIssued: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date of last V5C issued', example: '2016-12-25' }),
    engineCapacity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Engine capacity in cubic centimetres', example: 1796 }),
    euroStatus: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Euro Status (Dealer / Customer Provided (new vehicles))',
        example: 'Euro 5',
      }),
    fuelType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fuel type (Method of Propulsion)', example: 'PETROL' }),
    make: z.string().exactOptional().openapi({ description: 'Vehicle make', example: 'ROVER' }),
    markedForExport: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True only if vehicle has been export marked', example: true }),
    monthOfFirstDvlaRegistration: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Month of First DVLA Registration', example: '2011-11' }),
    monthOfFirstRegistration: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Month of First Registration', example: '2012-12' }),
    motExpiryDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Mot Expiry Date', example: '2008-12-25' }),
    motStatus: z
      .enum(['No details held by DVLA', 'No results returned', 'Not valid', 'Valid'])
      .exactOptional()
      .openapi({ description: 'MOT Status of the vehicle', example: 'No details held by DVLA' }),
    realDrivingEmissions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real Driving Emissions value', example: '1' }),
    registrationNumber: z
      .string()
      .openapi({ description: 'Registration number of the vehicle', example: 'WN67DSO' }),
    revenueWeight: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Revenue weight in kilograms', example: 1640 }),
    taxDueDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Date of tax liablity, Used in calculating licence information presented to user',
        example: '2017-12-25',
      }),
    taxStatus: z
      .enum(['Not Taxed for on Road Use', 'SORN', 'Taxed', 'Untaxed'])
      .exactOptional()
      .openapi({ description: 'Tax status of the vehicle', example: 'Untaxed' }),
    typeApproval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle Type Approval Category', example: 'N1' }),
    wheelplan: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle wheel plan', example: 'NON STANDARD' }),
    yearOfManufacture: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Year of Manufacture', example: 2004 }),
  })
  .openapi({ required: ['registrationNumber'] })
  .openapi('Vehicle')

const VehicleRequestSchema = z
  .object({ registrationNumber: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VehicleRequest')

export const postV1VehiclesRoute = createRoute({
  method: 'post',
  path: '/v1/vehicles',
  tags: ['vehicle'],
  summary: 'Get vehicle details by registration number',
  description: 'Returns vehicle details based on registration number',
  operationId: 'getVehicleDetailsByRegistrationNumber',
  request: {
    headers: z.object({
      'x-api-key': z
        .string()
        .openapi({
          param: {
            description: 'Client Specific API Key',
            in: 'header',
            name: 'x-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-Correlation-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Consumer Correlation ID',
            in: 'header',
            name: 'X-Correlation-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Registration number of the vehicle to find details for',
      content: { 'application/json': { schema: VehicleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VehicleSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Vehicle Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
