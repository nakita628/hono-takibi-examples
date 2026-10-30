import { createRoute, z } from '@hono/zod-openapi'

const StateTerritoryCodeSchema = z
  .enum([
    'AL',
    'AK',
    'AS',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
    'MP',
    'PW',
    'FM',
    'MH',
  ])
  .openapi('StateTerritoryCode')

const MarineAreaCodeSchema = z
  .enum(['AM', 'AN', 'GM', 'LC', 'LE', 'LH', 'LM', 'LO', 'LS', 'PH', 'PK', 'PM', 'PS', 'PZ', 'SL'])
  .openapi({
    description:
      'Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n',
  })
  .openapi('MarineAreaCode')

type AreaCodeType = z.infer<typeof StateTerritoryCodeSchema> | z.infer<typeof MarineAreaCodeSchema>

const LandRegionCodeSchema = z
  .enum(['AR', 'CR', 'ER', 'PR', 'SR', 'WR'])
  .openapi({
    description:
      'Land region code. These correspond to the six NWS regional headquarters:\n* AR: Alaska Region\n* CR: Central Region\n* ER: Eastern Region\n* PR: Pacific Region\n* SR: Southern Region\n* WR: Western Region\n',
  })
  .openapi('LandRegionCode')

const MarineRegionCodeSchema = z
  .enum(['AL', 'AT', 'GL', 'GM', 'PA', 'PI'])
  .openapi({
    description:
      'Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n',
  })
  .openapi('MarineRegionCode')

type RegionCodeType = z.infer<typeof LandRegionCodeSchema> | z.infer<typeof MarineRegionCodeSchema>

const AlertIdSchema = z
  .string()
  .openapi({ description: 'The identifier of the alert message.' })
  .openapi('AlertId')

const NWSZoneIDSchema = z
  .string()
  .regex(
    /^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\d{3}$/,
  )
  .openapi({
    description:
      'UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n',
  })
  .openapi('NWSZoneID')

const AlertStatusSchema = z
  .enum(['Actual', 'Exercise', 'System', 'Test', 'Draft'])
  .openapi('AlertStatus')

const AlertMessageTypeSchema = z
  .enum(['Alert', 'Update', 'Cancel', 'Ack', 'Error'])
  .openapi('AlertMessageType')

const AlertSeveritySchema = z
  .enum(['Extreme', 'Severe', 'Moderate', 'Minor', 'Unknown'])
  .openapi('AlertSeverity')

const AlertCertaintySchema = z
  .enum(['Observed', 'Likely', 'Possible', 'Unlikely', 'Unknown'])
  .openapi('AlertCertainty')

const AlertUrgencySchema = z
  .enum(['Immediate', 'Expected', 'Future', 'Past', 'Unknown'])
  .openapi('AlertUrgency')

const AlertSchema = z
  .object({
    id: AlertIdSchema.exactOptional(),
    areaDesc: z
      .string()
      .exactOptional()
      .openapi({ description: 'A textual description of the area affected by the alert.' }),
    geocode: z
      .object({
        UGC: z
          .array(NWSZoneIDSchema)
          .exactOptional()
          .openapi({ description: 'A list of NWS public zone or county identifiers.' }),
        SAME: z
          .array(z.string().regex(/^\d{6}$/))
          .exactOptional()
          .openapi({
            description:
              'A list of SAME (Specific Area Message Encoding) codes for affected counties.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Lists of codes for NWS public zones and counties affected by the alert.',
        required: [],
      }),
    affectedZones: z
      .array(z.url())
      .exactOptional()
      .openapi({
        description:
          'An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification.\n',
      }),
    references: z
      .array(
        z
          .object({
            '@id': z
              .url()
              .exactOptional()
              .openapi({ description: 'An API link to the prior alert.' }),
            identifier: AlertIdSchema.exactOptional(),
            sender: z
              .string()
              .exactOptional()
              .openapi({ description: 'The sender of the prior alert.' }),
            sent: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'The time the prior alert was sent.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of prior alerts that this alert updates or replaces.' }),
    sent: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time of the origination of the alert message.' }),
    effective: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The effective time of the information of the alert message.' }),
    onset: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The expected time of the beginning of the subject event of the alert message.',
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiry time of the information of the alert message.' }),
    ends: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The expected end time of the subject event of the alert message.' }),
    status: AlertStatusSchema.exactOptional(),
    messageType: AlertMessageTypeSchema.exactOptional(),
    category: z
      .enum([
        'Met',
        'Geo',
        'Safety',
        'Security',
        'Rescue',
        'Fire',
        'Health',
        'Env',
        'Transport',
        'Infra',
        'CBRNE',
        'Other',
      ])
      .exactOptional()
      .openapi({
        description: 'The code denoting the category of the subject event of the alert message.',
      }),
    severity: AlertSeveritySchema.exactOptional(),
    certainty: AlertCertaintySchema.exactOptional(),
    urgency: AlertUrgencySchema.exactOptional(),
    event: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The text denoting the type of the subject event of the alert message.',
      }),
    sender: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the NWS webmaster.' }),
    senderName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text naming the originator of the alert message.' }),
    headline: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The text headline of the alert message.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text describing the subject event of the alert message.' }),
    instruction: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The text describing the recommended action to be taken by recipients of the alert message.\n',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The text note accompanying the alert message. Per CAP spec, this should accompany alerts with a status of "Test".\n',
      }),
    response: z
      .enum([
        'Shelter',
        'Evacuate',
        'Prepare',
        'Execute',
        'Avoid',
        'Monitor',
        'Assess',
        'AllClear',
        'None',
      ])
      .exactOptional()
      .openapi({
        description:
          'The code denoting the type of action recommended for the target audience.\nThis corresponds to responseType in the CAP specification.\n',
      }),
    parameters: z
      .record(z.string(), z.array(z.any()))
      .exactOptional()
      .openapi({
        description:
          'System-specific additional parameters associated with the alert message.\nThe keys in this object correspond to parameter definitions in the NWS CAP specification.\n',
      }),
    scope: z
      .enum(['Public', 'Restricted', 'Private'])
      .exactOptional()
      .openapi({
        description: 'The code denoting the intended distribution of the alert message.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code denoting the special handling of the alert message.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The code denoting the language of the info sub-element of the alert message.',
      }),
    web: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the hyperlink associating additional information within the alert message.',
      }),
    eventCode: z
      .record(z.string(), z.array(z.any()))
      .exactOptional()
      .openapi({
        description:
          'System-specific code identifiying the event type of the alert message The keys in this object correspond to eventCode definitions in the NWS CAP specification.\n',
      }),
  })
  .openapi({
    description:
      'An object representing a public alert message.\nUnless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information.\nhttp://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://vlab.noaa.gov/web/nws-common-alerting-protocol/cap-documentation\n',
    required: [],
  })
  .openapi('Alert')

const ActiveAlertCollectionSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A title describing the alert collection' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last time a change occurred to this collection' }),
  })
  .openapi({ required: [] })
  .openapi('ActiveAlertCollection')

const PaginationInfoSchema = z
  .strictObject({ next: z.url().openapi({ description: 'A link to the next page of records' }) })
  .openapi({
    required: ['next'],
    description: 'Links for retrieving more data from paged data sets',
  })
  .openapi('PaginationInfo')

const AlertCollectionSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A title describing the alert collection' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last time a change occurred to this collection' }),
    pagination: PaginationInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertCollection')

const JsonLdContextSchema = z.union([z.array(z.any()), z.object({})]).openapi('JsonLdContext')

const GeoJsonCoordinateSchema = z
  .array(z.number())
  .min(2)
  .openapi({
    description:
      'A GeoJSON coordinate. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonCoordinate')

const GeoJsonBoundingBoxSchema = z
  .array(z.number())
  .min(4)
  .openapi({
    description:
      'A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonBoundingBox')

const GeoJsonLineStringSchema = z
  .array(GeoJsonCoordinateSchema)
  .min(2)
  .openapi({
    description:
      'A GeoJSON line string. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonLineString')

const GeoJsonPolygonSchema = z
  .array(z.array(GeoJsonCoordinateSchema).min(4))
  .openapi({
    description:
      'A GeoJSON polygon. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonPolygon')

const GeoJsonGeometrySchema = z
  .xor([
    z
      .object({
        type: z.literal('Point'),
        coordinates: GeoJsonCoordinateSchema,
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON Point', required: ['type', 'coordinates'] }),
    z
      .object({
        type: z.literal('LineString'),
        coordinates: GeoJsonLineStringSchema,
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON LineString', required: ['type', 'coordinates'] }),
    z
      .object({
        type: z.literal('Polygon'),
        coordinates: GeoJsonPolygonSchema,
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON Polygon', required: ['type', 'coordinates'] }),
    z
      .object({
        type: z.literal('MultiPoint'),
        coordinates: z.array(GeoJsonCoordinateSchema),
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON MultiPoint', required: ['type', 'coordinates'] }),
    z
      .object({
        type: z.literal('MultiLineString'),
        coordinates: z.array(GeoJsonLineStringSchema),
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON MultiLineString', required: ['type', 'coordinates'] }),
    z
      .object({
        type: z.literal('MultiPolygon'),
        coordinates: z.array(GeoJsonPolygonSchema),
        bbox: GeoJsonBoundingBoxSchema.exactOptional(),
      })
      .openapi({ title: 'GeoJSON MultiPolygon', required: ['type', 'coordinates'] }),
    z.null().nullable(),
  ])
  .openapi({
    description:
      'A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonGeometry')

const GeoJsonFeatureSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    id: z.url().exactOptional(),
    type: z.literal('Feature'),
    geometry: GeoJsonGeometrySchema,
    properties: z.object({}),
  })
  .openapi({
    required: ['type', 'geometry', 'properties'],
    description:
      'A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonFeature')

const GeoJsonFeatureCollectionSchema = z
  .object({
    '@context': JsonLdContextSchema.exactOptional(),
    type: z.literal('FeatureCollection'),
    features: z.array(GeoJsonFeatureSchema),
  })
  .openapi({
    required: ['type', 'features'],
    description:
      'A GeoJSON feature collection. Please refer to IETF RFC 7946 for information on the GeoJSON format.',
  })
  .openapi('GeoJsonFeatureCollection')

const ActiveAlertCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(z.object({ properties: AlertSchema.exactOptional() }).openapi({ required: [] }))
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .and(ActiveAlertCollectionSchema)
  .openapi('ActiveAlertCollectionGeoJson')

const AlertCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(z.object({ properties: AlertSchema.exactOptional() }).openapi({ required: [] }))
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .and(AlertCollectionSchema)
  .openapi('AlertCollectionGeoJson')

const ActiveAlertCollectionJsonLdSchema = ActiveAlertCollectionSchema.and(
  z
    .object({
      '@context': JsonLdContextSchema.exactOptional(),
      '@graph': z.array(AlertSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ActiveAlertCollectionJsonLd')

const AlertCollectionJsonLdSchema = AlertCollectionSchema.and(
  z
    .object({
      '@context': JsonLdContextSchema.exactOptional(),
      '@graph': z.array(AlertSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('AlertCollectionJsonLd')

const AlertCapSchema = z.object({}).openapi('AlertCap')

const AlertGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: AlertSchema.exactOptional() }).openapi({ required: [] }),
).openapi('AlertGeoJson')

const AlertJsonLdSchema = z
  .object({ '@graph': z.array(AlertSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AlertJsonLd')

const AlertXMLParameterSchema = z
  .object({ valueName: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AlertXMLParameter')

const AlertAtomEntrySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    published: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    author: z
      .object({ name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' }, required: [] }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    event: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    sent: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    effective: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    expires: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    status: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    msgType: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    category: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    urgency: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    certainty: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    areaDesc: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    polygon: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    geocode: z
      .array(AlertXMLParameterSchema)
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
    parameter: z
      .array(AlertXMLParameterSchema)
      .exactOptional()
      .openapi({ xml: { namespace: 'urn:oasis:names:tc:emergency:cap:1.2' } }),
  })
  .openapi({
    description: 'An alert entry in an Atom feed',
    xml: { name: 'entry', namespace: 'http://www.w3.org/2005/Atom' },
    required: [],
  })
  .openapi('AlertAtomEntry')

const AlertAtomFeedSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    generator: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    author: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
      })
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' }, required: [] }),
    title: z
      .string()
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
    entry: z
      .array(AlertAtomEntrySchema)
      .exactOptional()
      .openapi({ xml: { namespace: 'http://www.w3.org/2005/Atom' } }),
  })
  .openapi({
    description: 'An alert feed in Atom format',
    xml: { name: 'feed', namespace: 'http://www.w3.org/2005/Atom' },
    required: [],
  })
  .openapi('AlertAtomFeed')

const AreaCodeSchema: z.ZodType<AreaCodeType> = z
  .lazy(() =>
    z
      .xor([StateTerritoryCodeSchema, MarineAreaCodeSchema])
      .openapi({ description: 'State/territory codes and marine area codes' }),
  )
  .openapi('AreaCode')

const AstronomicalDataSchema = z
  .object({
    sunrise: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The timestamp of sunrise, defined as when the sun angle is 90°35' from vertical.\n",
      }),
    sunset: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The timestamp of sunset, defined as when the sun angle is 90°35' from vertical.\n",
      }),
    transit: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The timestamp when the sun reaches its zenith.\n' }),
    civilTwilightBegin: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the onset of civil twilight, defined as when the sun angle is 96° from vertical. This is the beginning of civil dawn and lasts until sunrise.\n',
      }),
    civilTwilightEnd: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the end of civil twilight, defined as when the sun angle is 96° from vertical. This is the end of civil dusk, which begins at sunset.\n',
      }),
    nauticalTwilightBegin: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the onset of nautical twilight, defined as when the sun angle is 102° from vertical. This is the beginning of nautical dawn and lasts until the civil dawn.\n',
      }),
    nauticalTwilightEnd: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the end of nautical twilight, defined as when the sun angle is 102° from vertical. This is the end of nautical dusk, which begins at the end of civil twilight.\n',
      }),
    astronomicalTwilightBegin: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the onset of astronomical twilight, defined as when the sun angle is 108° from vertical. This is the beginning of astronomical dawn and lasts until the nautical dawn.\n',
      }),
    astronomicalTwilightEnd: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the end of astronomical twilight, defined as when the sun angle is 108° from vertical. This is the end of astronomical dusk, which begins at the end of nautical twilight.\n',
      }),
  })
  .openapi({
    description:
      'An object representing sunrise, sunset, and twilight information for a location.\n',
    required: [],
  })
  .openapi('AstronomicalData')

const ATSUIdentifierSchema = z
  .string()
  .regex(/^[A-Z]{3,4}$/)
  .openapi({ description: 'ATSU Identifier' })
  .openapi('ATSUIdentifier')

const BinaryFileSchema = z
  .file()
  .openapi({ type: 'string', format: 'binary' })
  .openapi('BinaryFile')

const NWSCenterWeatherServiceUnitIdSchema = z
  .enum([
    'ZAB',
    'ZAN',
    'ZAU',
    'ZBW',
    'ZDC',
    'ZDV',
    'ZFA',
    'ZFW',
    'ZHU',
    'ZID',
    'ZJX',
    'ZKC',
    'ZLA',
    'ZLC',
    'ZMA',
    'ZME',
    'ZMP',
    'ZNY',
    'ZOA',
    'ZOB',
    'ZSE',
    'ZTL',
  ])
  .openapi({ description: 'Three-letter identifier for a Center Weather Service Unit (CWSU).' })
  .openapi('NWSCenterWeatherServiceUnitId')

const CenterWeatherAdvisorySchema = z
  .strictObject({
    id: z.string().exactOptional(),
    issueTime: z.iso.datetime({ offset: true }).exactOptional(),
    cwsu: NWSCenterWeatherServiceUnitIdSchema.exactOptional(),
    sequence: z.int().min(101).exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    observedProperty: z.string().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CenterWeatherAdvisory')

const CenterWeatherAdvisoryCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(
          z
            .object({ properties: CenterWeatherAdvisorySchema.exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CenterWeatherAdvisoryCollectionGeoJson')

const CenterWeatherAdvisoryGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: CenterWeatherAdvisorySchema.exactOptional() }).openapi({ required: [] }),
).openapi('CenterWeatherAdvisoryGeoJson')

const OfficeSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@type': z.literal('GovernmentOrganization').exactOptional(),
    '@id': z.url().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    address: z
      .strictObject({
        '@type': z.literal('PostalAddress').exactOptional(),
        streetAddress: z.string().exactOptional(),
        addressLocality: z.string().exactOptional(),
        addressRegion: z.string().exactOptional(),
        postalCode: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    telephone: z.string().exactOptional(),
    faxNumber: z.string().exactOptional(),
    email: z.string().exactOptional(),
    sameAs: z.url().exactOptional(),
    nwsRegion: z.string().exactOptional(),
    parentOrganization: z.url().exactOptional(),
    responsibleCounties: z.array(z.url()).exactOptional(),
    responsibleForecastZones: z.array(z.url()).exactOptional(),
    responsibleFireZones: z.array(z.url()).exactOptional(),
    approvedObservationStations: z.array(z.url()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Office')

const CenterWeatherServiceUnitJsonLdSchema = OfficeSchema.openapi('CenterWeatherServiceUnitJsonLd')

const DateSchema = z.iso
  .date()
  .openapi({ description: 'Date (in YYYY-MM-DD format).' })
  .openapi('Date')

const GeometryStringSchema = z
  .string()
  .nullable()
  .openapi({ description: 'A geometry represented in Well-Known Text (WKT) format.' })
  .openapi('GeometryString')

const ISO8601IntervalSchema = z
  .xor([
    z
      .string()
      .regex(
        /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:?\d{2}?)|NOW)\/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:?\d{2}?)|NOW)$/,
      )
      .openapi({ examples: ['2007-03-01T13:00:00Z/2008-05-11T15:30:00Z'] }),
    z
      .string()
      .regex(
        /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:?\d{2}?)|NOW)\/P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?$/,
      )
      .openapi({ examples: ['2007-03-01T13:00:00Z/P1Y2M10DT2H30M'] }),
    z
      .string()
      .regex(
        /^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?\/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:?\d{2}?)|NOW)$/,
      )
      .openapi({ examples: ['P1Y2M10DT2H30M/2008-05-11T15:30:00Z'] }),
  ])
  .openapi({
    description:
      'A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string "NOW" can also be used in place of a start/end time.\n',
  })
  .openapi('ISO8601Interval')

const UnitOfMeasureSchema = z
  .string()
  .regex(/^((wmo|uc|wmoUnit|nwsUnit):)?.*$/)
  .openapi({
    description:
      'A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".\nUnits with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.\nUnits with the namespace "nwsUnit" are currently custom and do not align to any standard.\nUnits with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).\nNamespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.\n',
  })
  .openapi('UnitOfMeasure')

const QuantitativeValueSchema = z
  .strictObject({
    value: z.number().nullable().exactOptional().openapi({ description: 'A measured value' }),
    maxValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'The maximum value of a range of measured values' }),
    minValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'The minimum value of a range of measured values' }),
    unitCode: UnitOfMeasureSchema.exactOptional(),
    qualityControl: z
      .enum(['Z', 'C', 'S', 'V', 'X', 'Q', 'G', 'B', 'T'])
      .exactOptional()
      .openapi({
        description:
          'For values in observation records, the quality control flag from the MADIS system. The definitions of these flags can be found at https://madis.ncep.noaa.gov/madis_sfc_qc_notes.shtml\n',
      }),
  })
  .openapi({
    description:
      'A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue\n',
    required: [],
  })
  .openapi('QuantitativeValue')

const GridpointQuantitativeValueLayerSchema = z
  .object({
    uom: UnitOfMeasureSchema.exactOptional(),
    values: z.array(
      z
        .strictObject({ validTime: ISO8601IntervalSchema, value: z.number().nullable() })
        .openapi({ required: ['validTime', 'value'] }),
    ),
  })
  .openapi({
    required: ['values'],
    description:
      'A gridpoint layer consisting of quantitative values (numeric values with associated units of measure).\n',
  })
  .openapi('GridpointQuantitativeValueLayer')

const GridpointSchema = z
  .object({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    '@type': z.literal('wx:Gridpoint').exactOptional(),
    updateTime: z.iso.datetime({ offset: true }).exactOptional(),
    validTimes: ISO8601IntervalSchema.exactOptional(),
    elevation: QuantitativeValueSchema.exactOptional(),
    forecastOffice: z.url().exactOptional(),
    gridId: z.string().exactOptional(),
    gridX: z.int().min(0).exactOptional(),
    gridY: z.int().min(0).exactOptional(),
    weather: z
      .object({
        values: z.array(
          z
            .strictObject({
              validTime: ISO8601IntervalSchema,
              value: z.array(
                z
                  .strictObject({
                    coverage: z
                      .enum([
                        'areas',
                        'brief',
                        'chance',
                        'definite',
                        'few',
                        'frequent',
                        'intermittent',
                        'isolated',
                        'likely',
                        'numerous',
                        'occasional',
                        'patchy',
                        'periods',
                        'scattered',
                        'slight_chance',
                        'widespread',
                      ])
                      .nullable(),
                    weather: z
                      .enum([
                        'blowing_dust',
                        'blowing_sand',
                        'blowing_snow',
                        'drizzle',
                        'fog',
                        'freezing_fog',
                        'freezing_drizzle',
                        'freezing_rain',
                        'freezing_spray',
                        'frost',
                        'hail',
                        'haze',
                        'ice_crystals',
                        'ice_fog',
                        'rain',
                        'rain_showers',
                        'sleet',
                        'smoke',
                        'snow',
                        'snow_showers',
                        'thunderstorms',
                        'volcanic_ash',
                        'water_spouts',
                      ])
                      .nullable(),
                    intensity: z.enum(['very_light', 'light', 'moderate', 'heavy']).nullable(),
                    visibility: QuantitativeValueSchema,
                    attributes: z.array(
                      z.enum([
                        'damaging_wind',
                        'dry_thunderstorms',
                        'flooding',
                        'gusty_wind',
                        'heavy_rain',
                        'large_hail',
                        'small_hail',
                        'tornadoes',
                      ]),
                    ),
                  })
                  .openapi({
                    required: ['coverage', 'weather', 'intensity', 'visibility', 'attributes'],
                    description: 'A value object representing expected weather phenomena.',
                  }),
              ),
            })
            .openapi({ required: ['validTime', 'value'] }),
        ),
      })
      .exactOptional()
      .openapi({ required: ['values'] }),
    hazards: z
      .object({
        values: z.array(
          z
            .strictObject({
              validTime: ISO8601IntervalSchema,
              value: z.array(
                z
                  .object({
                    phenomenon: z
                      .string()
                      .regex(/^\w{2}$/)
                      .openapi({
                        description:
                          'Hazard code. This value will correspond to a P-VTEC phenomenon code as defined in NWS Directive 10-1703.\n',
                      }),
                    significance: z
                      .string()
                      .regex(/^\w$/)
                      .openapi({
                        description:
                          'Significance code. This value will correspond to a P-VTEC significance code as defined in NWS Directive 10-1703.\nThis will most frequently be "A" for a watch or "Y" for an advisory.\n',
                      }),
                    event_number: z
                      .int()
                      .nullable()
                      .openapi({
                        description:
                          'Event number. If this hazard refers to a national or regional center product (such as a Storm Prediction Center convective watch), this value will be the sequence number of that product.\n',
                      }),
                  })
                  .openapi({
                    required: ['phenomenon', 'significance', 'event_number'],
                    description: 'A value object representing an expected hazard.',
                  }),
              ),
            })
            .openapi({ required: ['validTime', 'value'] }),
        ),
      })
      .exactOptional()
      .openapi({ required: ['values'] }),
  })
  .catchall(GridpointQuantitativeValueLayerSchema)
  .openapi({
    description:
      'Raw forecast data for a 2.5km grid square.\nThis is a list of all potential data layers that may appear. Some layers may not be present in all areas.\n* temperature\n* dewpoint\n* maxTemperature\n* minTemperature\n* relativeHumidity\n* apparentTemperature\n* heatIndex\n* windChill\n* wetBulbGlobeTemperature\n* skyCover\n* windDirection\n* windSpeed\n* windGust\n* weather\n* hazards: Watch and advisory products in effect\n* heatRisk\n* probabilityOfPrecipitation\n* quantitativePrecipitation\n* iceAccumulation\n* snowfallAmount\n* snowLevel\n* ceilingHeight\n* visibility\n* transportWindSpeed\n* transportWindDirection\n* mixingHeight\n* hainesIndex\n* lightningActivityLevel\n* twentyFootWindSpeed\n* twentyFootWindDirection\n* waveHeight\n* wavePeriod\n* waveDirection\n* primarySwellHeight\n* primarySwellDirection\n* secondarySwellHeight\n* secondarySwellDirection\n* wavePeriod2\n* windWaveHeight\n* dispersionIndex\n* pressure: Barometric pressure\n* probabilityOfTropicalStormWinds\n* probabilityOfHurricaneWinds\n* potentialOf15mphWinds\n* potentialOf25mphWinds\n* potentialOf35mphWinds\n* potentialOf45mphWinds\n* potentialOf20mphWindGusts\n* potentialOf30mphWindGusts\n* potentialOf40mphWindGusts\n* potentialOf50mphWindGusts\n* potentialOf60mphWindGusts\n* grasslandFireDangerIndex\n* probabilityOfThunder\n* davisStabilityIndex\n* atmosphericDispersionIndex\n* lowVisibilityOccurrenceRiskIndex\n* stability\n* redFlagThreatIndex\n',
  })
  .openapi('Gridpoint')

const GridpointGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: GridpointSchema.exactOptional() }).openapi({ required: [] }),
).openapi('GridpointGeoJson')

const GridpointJsonLdSchema = GridpointSchema.openapi('GridpointJsonLd')

const GridpointForecastUnitsSchema = z
  .enum(['us', 'si'])
  .default('us')
  .openapi({ description: 'Denotes the units used in the textual portions of the forecast.' })
  .openapi('GridpointForecastUnits')

const Gridpoint12hForecastPeriodSchema = z
  .strictObject({
    number: z.int().min(1).exactOptional().openapi({ description: 'Sequential period number.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A textual identifier for the period. This value will not be present for hourly forecasts.\n',
        examples: ['Tuesday Night'],
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The starting time that this forecast period is valid for.' }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The ending time that this forecast period is valid for.' }),
    isDaytime: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this period is daytime or nighttime.' }),
    temperature: z
      .xor([QuantitativeValueSchema, z.int()])
      .exactOptional()
      .openapi({
        description:
          'High/low temperature for the period, depending on whether the period is day or night.\nThis property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.\n',
      }),
    temperatureUnit: z
      .enum(['F', 'C'])
      .exactOptional()
      .openapi({
        description:
          'The unit of the temperature value (Fahrenheit or Celsius).\nThis property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.\n',
        deprecated: true,
      }),
    temperatureTrend: z
      .enum(['rising', 'falling'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)\n',
      }),
    probabilityOfPrecipitation: QuantitativeValueSchema.exactOptional().openapi({
      description: 'Probability of precipitation for the period.',
    }),
    windSpeed: z
      .xor([QuantitativeValueSchema, z.string()])
      .exactOptional()
      .openapi({
        description:
          'Wind speed for the period.\nThis property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.\n',
      }),
    windGust: z
      .xor([QuantitativeValueSchema, z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Peak wind gust for the period.\nThis property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.\n',
      }),
    windDirection: z
      .enum([
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
      ])
      .exactOptional()
      .openapi({
        description:
          'The prevailing direction of the wind for the period, using a 16-point compass.',
      }),
    icon: z
      .url()
      .exactOptional()
      .openapi({
        description: 'A link to an icon representing the forecast summary.',
        deprecated: true,
      }),
    shortForecast: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief textual forecast summary for the period.' }),
    detailedForecast: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed textual forecast for the period.' }),
  })
  .openapi({
    description:
      'An object containing forecast information for a specific time period (generally 12-hour or 1-hour).\n',
    required: [],
  })
  .openapi('Gridpoint12hForecastPeriod')

const Gridpoint12hForecastSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    units: GridpointForecastUnitsSchema.exactOptional(),
    forecastGenerator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal generator class used to create the forecast text (used for NWS debugging).',
      }),
    generatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time this forecast data was generated.' }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last update time of the data this forecast was generated from.',
      }),
    validTimes: ISO8601IntervalSchema.exactOptional(),
    elevation: QuantitativeValueSchema.exactOptional(),
    periods: z
      .array(Gridpoint12hForecastPeriodSchema)
      .exactOptional()
      .openapi({ description: 'An array of forecast periods.' }),
  })
  .openapi({ description: 'A multi-day forecast for a 2.5km grid square.', required: [] })
  .openapi('Gridpoint12hForecast')

const GridpointHourlyForecastPeriodSchema = z
  .strictObject({
    number: z.int().min(1).exactOptional().openapi({ description: 'Sequential period number.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A textual identifier for the period. This value will not be present for hourly forecasts.\n',
        examples: ['Tuesday Night'],
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The starting time that this forecast period is valid for.' }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The ending time that this forecast period is valid for.' }),
    isDaytime: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this period is daytime or nighttime.' }),
    temperature: z
      .xor([QuantitativeValueSchema, z.int()])
      .exactOptional()
      .openapi({
        description:
          'High/low temperature for the period, depending on whether the period is day or night.\nThis property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.\n',
      }),
    temperatureUnit: z
      .enum(['F', 'C'])
      .exactOptional()
      .openapi({
        description:
          'The unit of the temperature value (Fahrenheit or Celsius).\nThis property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.\n',
        deprecated: true,
      }),
    temperatureTrend: z
      .enum(['rising', 'falling'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)\n',
      }),
    probabilityOfPrecipitation: QuantitativeValueSchema.exactOptional().openapi({
      description: 'Probability of precipitation for the period.',
    }),
    dewpoint: QuantitativeValueSchema.exactOptional().openapi({
      description: 'Dewpoint. Only provided in hourly forecasts.\n',
    }),
    relativeHumidity: QuantitativeValueSchema.exactOptional().openapi({
      description: 'Relative humidity. Only provided in hourly forecasts.\n',
    }),
    windSpeed: z
      .xor([QuantitativeValueSchema, z.string()])
      .exactOptional()
      .openapi({
        description:
          'Wind speed for the period.\nThis property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.\n',
      }),
    windGust: z
      .xor([QuantitativeValueSchema, z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Peak wind gust for the period.\nThis property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.\n',
      }),
    windDirection: z
      .enum([
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
      ])
      .exactOptional()
      .openapi({
        description:
          'The prevailing direction of the wind for the period, using a 16-point compass.',
      }),
    icon: z
      .url()
      .exactOptional()
      .openapi({
        description: 'A link to an icon representing the forecast summary.',
        deprecated: true,
      }),
    shortForecast: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief textual forecast summary for the period.' }),
    detailedForecast: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed textual forecast for the period.' }),
  })
  .openapi({
    description:
      'An object containing forecast information for a specific time period (generally 12-hour or 1-hour).\n',
    required: [],
  })
  .openapi('GridpointHourlyForecastPeriod')

const GridpointHourlyForecastSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    units: GridpointForecastUnitsSchema.exactOptional(),
    forecastGenerator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal generator class used to create the forecast text (used for NWS debugging).',
      }),
    generatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time this forecast data was generated.' }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last update time of the data this forecast was generated from.',
      }),
    validTimes: ISO8601IntervalSchema.exactOptional(),
    elevation: QuantitativeValueSchema.exactOptional(),
    periods: z
      .array(GridpointHourlyForecastPeriodSchema)
      .exactOptional()
      .openapi({ description: 'An array of forecast periods.' }),
  })
  .openapi({ description: 'An hourly forecast for a 2.5km grid square.', required: [] })
  .openapi('GridpointHourlyForecast')

const Gridpoint12hForecastGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: Gridpoint12hForecastSchema.exactOptional() }).openapi({ required: [] }),
).openapi('Gridpoint12hForecastGeoJson')

const GridpointHourlyForecastGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: GridpointHourlyForecastSchema.exactOptional() }).openapi({ required: [] }),
).openapi('GridpointHourlyForecastGeoJson')

const Gridpoint12hForecastJsonLdSchema = Gridpoint12hForecastSchema.and(
  z
    .object({ '@context': JsonLdContextSchema, geometry: GeometryStringSchema })
    .openapi({ required: ['@context', 'geometry'] }),
).openapi('Gridpoint12hForecastJsonLd')

const GridpointHourlyForecastJsonLdSchema = GridpointHourlyForecastSchema.and(
  z
    .object({ '@context': JsonLdContextSchema, geometry: GeometryStringSchema })
    .openapi({ required: ['@context', 'geometry'] }),
).openapi('GridpointHourlyForecastJsonLd')

const ISO8601DurationSchema = z
  .string()
  .regex(/^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?$/)
  .openapi({ description: 'A time duration in ISO 8601 format.', examples: ['P2DT12H'] })
  .openapi('ISO8601Duration')

const MetarPhenomenonSchema = z
  .strictObject({
    intensity: z.enum(['light', 'heavy']).nullable(),
    modifier: z
      .enum(['patches', 'blowing', 'low_drifting', 'freezing', 'shallow', 'partial', 'showers'])
      .nullable(),
    weather: z.enum([
      'fog_mist',
      'dust_storm',
      'dust',
      'drizzle',
      'funnel_cloud',
      'fog',
      'smoke',
      'hail',
      'snow_pellets',
      'haze',
      'ice_crystals',
      'ice_pellets',
      'dust_whirls',
      'spray',
      'rain',
      'sand',
      'snow_grains',
      'snow',
      'squalls',
      'sand_storm',
      'thunderstorms',
      'unknown',
      'volcanic_ash',
    ]),
    rawString: z.string(),
    inVicinity: z.boolean().exactOptional(),
  })
  .openapi({
    required: ['intensity', 'modifier', 'weather', 'rawString'],
    description: 'An object representing a decoded METAR phenomenon string.',
  })
  .openapi('MetarPhenomenon')

const MetarSkyCoverageSchema = z
  .enum(['OVC', 'BKN', 'SCT', 'FEW', 'SKC', 'CLR', 'VV'])
  .openapi('MetarSkyCoverage')

const NWSConnectDocumentMetadataSchema = z
  .object({
    id: z.uuid().exactOptional(),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the document becomes active. ISO8601 datetime.' }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the document becomes inactive. ISO8601 datetime.' }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the document was last updated. ISO8601 datetime.' }),
    title: z.string().max(50).exactOptional().openapi({ description: 'A short title.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A longer description and/or caption.' }),
    priority: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'An indicator that a weather story should be emphasized.' }),
    download: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL of the media content for the weather story.' }),
  })
  .openapi({ description: 'Metadata for an NWS Connect document.', required: [] })
  .openapi('NWSConnectDocumentMetadata')

const NWSForecastOfficeIdSchema = z
  .enum([
    'AKQ',
    'ALY',
    'BGM',
    'BOX',
    'BTV',
    'BUF',
    'CAE',
    'CAR',
    'CHS',
    'CLE',
    'CTP',
    'GSP',
    'GYX',
    'ILM',
    'ILN',
    'LWX',
    'MHX',
    'OKX',
    'PBZ',
    'PHI',
    'RAH',
    'RLX',
    'RNK',
    'ABQ',
    'AMA',
    'BMX',
    'BRO',
    'CRP',
    'EPZ',
    'EWX',
    'FFC',
    'FWD',
    'HGX',
    'HUN',
    'JAN',
    'JAX',
    'KEY',
    'LCH',
    'LIX',
    'LUB',
    'LZK',
    'MAF',
    'MEG',
    'MFL',
    'MLB',
    'MOB',
    'MRX',
    'OHX',
    'OUN',
    'SHV',
    'SJT',
    'SJU',
    'TAE',
    'TBW',
    'TSA',
    'ABR',
    'APX',
    'ARX',
    'BIS',
    'BOU',
    'CYS',
    'DDC',
    'DLH',
    'DMX',
    'DTX',
    'DVN',
    'EAX',
    'FGF',
    'FSD',
    'GID',
    'GJT',
    'GLD',
    'GRB',
    'GRR',
    'ICT',
    'ILX',
    'IND',
    'IWX',
    'JKL',
    'LBF',
    'LMK',
    'LOT',
    'LSX',
    'MKX',
    'MPX',
    'MQT',
    'OAX',
    'PAH',
    'PUB',
    'RIW',
    'SGF',
    'TOP',
    'UNR',
    'BOI',
    'BYZ',
    'EKA',
    'FGZ',
    'GGW',
    'HNX',
    'LKN',
    'LOX',
    'MFR',
    'MSO',
    'MTR',
    'OTX',
    'PDT',
    'PIH',
    'PQR',
    'PSR',
    'REV',
    'SEW',
    'SGX',
    'SLC',
    'STO',
    'TFX',
    'TWC',
    'VEF',
    'AER',
    'AFC',
    'AFG',
    'AJK',
    'ALU',
    'GUM',
    'HPA',
    'HFO',
    'PPG',
    'PQE',
    'PQW',
    'STU',
    'NH1',
    'NH2',
    'ONA',
    'ONP',
  ])
  .openapi({ description: 'Three-letter identifier for a NWS office.' })
  .openapi('NWSForecastOfficeId')

const NWSNationalHQIdSchema = z
  .literal('NWS')
  .openapi({ description: 'Three-letter identifier for NWS National HQ.' })
  .openapi('NWSNationalHQId')

const NWSRegionalHQIdSchema = z
  .enum(['ARH', 'CRH', 'ERH', 'PRH', 'SRH', 'WRH'])
  .openapi({ description: 'Three-letter identifier for a NWS Regional HQ.' })
  .openapi('NWSRegionalHQId')

const NWSOfficeIdSchema = z
  .xor([NWSForecastOfficeIdSchema, NWSRegionalHQIdSchema, NWSNationalHQIdSchema])
  .openapi('NWSOfficeId')

const NWSZoneTypeSchema = z
  .enum(['land', 'marine', 'forecast', 'public', 'coastal', 'offshore', 'fire', 'county'])
  .openapi('NWSZoneType')

const ObservationSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    '@type': z.literal('wx:ObservationStation').exactOptional(),
    elevation: QuantitativeValueSchema.exactOptional(),
    station: z.url().exactOptional(),
    stationId: z.string().exactOptional(),
    stationName: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    rawMessage: z.string().exactOptional(),
    textDescription: z.string().exactOptional(),
    icon: z.url().nullable().exactOptional().openapi({ deprecated: true }),
    presentWeather: z.array(MetarPhenomenonSchema).exactOptional(),
    temperature: QuantitativeValueSchema.exactOptional(),
    dewpoint: QuantitativeValueSchema.exactOptional(),
    windDirection: QuantitativeValueSchema.exactOptional(),
    windSpeed: QuantitativeValueSchema.exactOptional(),
    windGust: QuantitativeValueSchema.exactOptional(),
    barometricPressure: QuantitativeValueSchema.exactOptional(),
    seaLevelPressure: QuantitativeValueSchema.exactOptional(),
    visibility: QuantitativeValueSchema.exactOptional(),
    maxTemperatureLast24Hours: QuantitativeValueSchema.exactOptional(),
    minTemperatureLast24Hours: QuantitativeValueSchema.exactOptional(),
    precipitationLastHour: QuantitativeValueSchema.exactOptional(),
    precipitationLast3Hours: QuantitativeValueSchema.exactOptional(),
    precipitationLast6Hours: QuantitativeValueSchema.exactOptional(),
    relativeHumidity: QuantitativeValueSchema.exactOptional(),
    windChill: QuantitativeValueSchema.exactOptional(),
    heatIndex: QuantitativeValueSchema.exactOptional(),
    cloudLayers: z
      .array(
        z
          .strictObject({ base: QuantitativeValueSchema, amount: MetarSkyCoverageSchema })
          .openapi({ required: ['base', 'amount'] }),
      )
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Observation')

const ObservationGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: ObservationSchema.exactOptional() }).openapi({ required: [] }),
).openapi('ObservationGeoJson')

const ObservationJsonLdSchema = ObservationSchema.openapi('ObservationJsonLd')

const ObservationCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(
          z.object({ properties: ObservationSchema.exactOptional() }).openapi({ required: [] }),
        )
        .exactOptional(),
      pagination: PaginationInfoSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ObservationCollectionGeoJson')

const ObservationCollectionJsonLdSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@graph': z.array(ObservationSchema).exactOptional(),
    pagination: PaginationInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObservationCollectionJsonLd')

const ObservationStationSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    '@type': z.literal('wx:ObservationStation').exactOptional(),
    elevation: QuantitativeValueSchema.exactOptional(),
    stationIdentifier: z.string().exactOptional(),
    name: z.string().exactOptional(),
    timeZone: z.string().exactOptional(),
    provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The data provider for this station. E.g., "ASOS," "MesoWest," etc.',
      }),
    subProvider: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sub-provider of for this station. E.g., "FAA," "DOT," etc.' }),
    forecast: z
      .url()
      .exactOptional()
      .openapi({ description: 'A link to the NWS public forecast zone containing this station.' }),
    county: z
      .url()
      .exactOptional()
      .openapi({ description: 'A link to the NWS county zone containing this station.' }),
    fireWeatherZone: z
      .url()
      .exactOptional()
      .openapi({
        description: 'A link to the NWS fire weather forecast zone containing this station.',
      }),
    distance: QuantitativeValueSchema.exactOptional(),
    bearing: QuantitativeValueSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObservationStation')

const ObservationStationGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: ObservationStationSchema.exactOptional() }).openapi({ required: [] }),
).openapi('ObservationStationGeoJson')

const ObservationStationJsonLdSchema = ObservationStationSchema.and(
  z
    .object({ '@context': JsonLdContextSchema, geometry: GeometryStringSchema })
    .openapi({ required: ['@context', 'geometry'] }),
).openapi('ObservationStationJsonLd')

const ObservationStationCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(
          z
            .object({ properties: ObservationStationSchema.exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional(),
      observationStations: z.array(z.url()).exactOptional(),
      pagination: PaginationInfoSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ObservationStationCollectionGeoJson')

const ObservationStationCollectionJsonLdSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@graph': z.array(ObservationStationSchema).exactOptional(),
    observationStations: z.array(z.url()).exactOptional(),
    pagination: PaginationInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObservationStationCollectionJsonLd')

const OfficeBriefingSchema = NWSConnectDocumentMetadataSchema.openapi('OfficeBriefing')

const OfficeHeadlineSchema = z
  .object({
    '@context': JsonLdContextSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    id: z.string().exactOptional(),
    office: z.url().exactOptional(),
    important: z.boolean().exactOptional(),
    issuanceTime: z.iso.datetime({ offset: true }).exactOptional(),
    link: z.url().exactOptional(),
    name: z.string().exactOptional(),
    title: z.string().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    content: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfficeHeadline')

const OfficeHeadlineCollectionSchema = z
  .strictObject({ '@context': JsonLdContextSchema, '@graph': z.array(OfficeHeadlineSchema) })
  .openapi({ required: ['@context', '@graph'] })
  .openapi('OfficeHeadlineCollection')

const OfficeWeatherStorySchema = NWSConnectDocumentMetadataSchema.and(
  z
    .object({
      altText: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Alternative text description of the content of the image for assistive technology.',
        }),
      order: z
        .int()
        .min(1)
        .max(7)
        .exactOptional()
        .openapi({
          description:
            'The order in which a weather story should be displayed. Unique for each object.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    required: [
      'startTime',
      'endTime',
      'updateTime',
      'title',
      'description',
      'altText',
      'priority',
      'order',
      'download',
    ],
  })
  .openapi('OfficeWeatherStory')

const OfficeWeatherStoryCollectionSchema = z
  .array(OfficeWeatherStorySchema)
  .openapi('OfficeWeatherStoryCollection')

const RelativeLocationSchema = z
  .object({
    city: z.string().exactOptional(),
    state: z.string().exactOptional(),
    distance: QuantitativeValueSchema.exactOptional(),
    bearing: QuantitativeValueSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelativeLocation')

const RelativeLocationGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: RelativeLocationSchema.exactOptional() }).openapi({ required: [] }),
).openapi('RelativeLocationGeoJson')

const RelativeLocationJsonLdSchema = RelativeLocationSchema.and(
  z.object({ geometry: GeometryStringSchema }).openapi({ required: ['geometry'] }),
).openapi('RelativeLocationJsonLd')

const PointSchema = z
  .object({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    '@type': z.literal('wx:Point').exactOptional(),
    cwa: NWSForecastOfficeIdSchema.exactOptional(),
    type: z
      .enum(['land', 'marine'])
      .exactOptional()
      .openapi({ description: 'Whether the specific point is on land or marine' }),
    forecastOffice: z.url().exactOptional(),
    gridId: NWSForecastOfficeIdSchema.exactOptional(),
    gridX: z.int().min(0).exactOptional(),
    gridY: z.int().min(0).exactOptional(),
    forecast: z.url().exactOptional(),
    forecastHourly: z.url().exactOptional(),
    forecastGridData: z.url().exactOptional(),
    observationStations: z.url().exactOptional(),
    relativeLocation: z
      .xor([RelativeLocationGeoJsonSchema, RelativeLocationJsonLdSchema])
      .exactOptional(),
    forecastZone: z.url().exactOptional(),
    county: z.url().exactOptional(),
    fireWeatherZone: z.url().exactOptional(),
    timeZone: z.string().exactOptional(),
    radarStation: z.string().exactOptional(),
    astronomicalData: AstronomicalDataSchema.exactOptional(),
    nwr: z
      .object({
        transmitter: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Transmitter callsign' }),
        sameCode: z
          .string()
          .exactOptional()
          .openapi({ description: "The SAME code of this point's county" }),
        areaBroadcast: z
          .url()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A link to the area NWR broadcast from this transmitter' }),
        pointBroadcast: z
          .url()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A link to the local NWR broadcast for this point' }),
      })
      .exactOptional()
      .openapi({ description: 'NOAA Weather Radio metadata for this point', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Point')

const PointGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: PointSchema.exactOptional() }).openapi({ required: [] }),
).openapi('PointGeoJson')

const PointJsonLdSchema = PointSchema.and(
  z
    .object({ '@context': JsonLdContextSchema, geometry: GeometryStringSchema })
    .openapi({ required: ['@context', 'geometry'] }),
).openapi('PointJsonLd')

const PointStringSchema = z
  .string()
  .regex(/^(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/)
  .openapi('PointString')

const ProblemDetailSchema = z
  .looseObject({
    type: z
      .url()
      .default('about:blank')
      .openapi({
        description:
          'A URI reference (RFC 3986) that identifies the problem type. This is only an identifier and is not necessarily a resolvable URL.\n',
        examples: ['urn:noaa:nws:api:UnexpectedProblem'],
      }),
    title: z
      .string()
      .openapi({
        description: 'A short, human-readable summary of the problem type.',
        examples: ['Unexpected Problem'],
      }),
    status: z
      .number()
      .min(100)
      .max(999)
      .openapi({
        description:
          'The HTTP status code (RFC 7231, Section 6) generated by the origin server for this occurrence of the problem.\n',
        examples: [500],
      }),
    detail: z
      .string()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
        examples: ['An unexpected problem has occurred.'],
      }),
    instance: z
      .url()
      .openapi({
        description:
          'A URI reference (RFC 3986) that identifies the specific occurrence of the problem. This is only an identifier and is not necessarily a resolvable URL.\n',
        examples: ['urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63'],
      }),
    correlationId: z
      .string()
      .openapi({
        description:
          'A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.\n',
        examples: ['493c3a1d-f87e-407f-ae2c-24483f5aab63'],
      }),
  })
  .openapi({
    required: ['type', 'title', 'status', 'detail', 'instance', 'correlationId'],
    description:
      'Detail about an error. This document conforms to RFC 7807 (Problem Details for HTTP APIs).',
  })
  .openapi('ProblemDetail')

const RegionCodeSchema: z.ZodType<RegionCodeType> = z
  .lazy(() => z.xor([LandRegionCodeSchema, MarineRegionCodeSchema]))
  .openapi('RegionCode')

const SigmetSchema = z
  .strictObject({
    id: z.url().exactOptional(),
    issueTime: z.iso.datetime({ offset: true }).exactOptional(),
    fir: z.string().nullable().exactOptional(),
    atsu: ATSUIdentifierSchema.exactOptional(),
    sequence: z.string().nullable().exactOptional(),
    phenomenon: z.url().nullable().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sigmet')

const SigmetGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: SigmetSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SigmetGeoJson')

const SigmetCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z.object({ features: z.array(SigmetGeoJsonSchema).exactOptional() }).openapi({ required: [] }),
).openapi('SigmetCollectionGeoJson')

const SigmetSequenceNumberSchema = z.string().openapi('SigmetSequenceNumber')

const TextProductSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    id: z.string().exactOptional(),
    wmoCollectiveId: z.string().exactOptional(),
    issuingOffice: z.string().exactOptional(),
    issuanceTime: z.iso.datetime({ offset: true }).exactOptional(),
    productCode: z.string().exactOptional(),
    productName: z.string().exactOptional(),
    productText: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TextProduct')

const TextProductCollectionSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@graph': z.array(TextProductSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TextProductCollection')

const TextProductTypeCollectionSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@graph': z
      .array(
        z
          .strictObject({ productCode: z.string(), productName: z.string() })
          .openapi({ required: ['productCode', 'productName'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TextProductTypeCollection')

const TextProductLocationCollectionSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    locations: z.record(z.string(), z.string().nullable()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TextProductLocationCollection')

const TimeSchema = z
  .string()
  .regex(/^([01][0-9]|2[0-3])[0-5][0-9]$/)
  .openapi({ description: 'A time (in HHMM format). This is always specified in UTC (Zulu) time.' })
  .openapi('Time')

const ZoneSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    '@id': z.url().exactOptional(),
    '@type': z.literal('wx:Zone').exactOptional(),
    id: NWSZoneIDSchema.exactOptional(),
    type: NWSZoneTypeSchema.exactOptional(),
    name: z.string().exactOptional(),
    effectiveDate: z.iso.datetime({ offset: true }).exactOptional(),
    expirationDate: z.iso.datetime({ offset: true }).exactOptional(),
    state: z.xor([StateTerritoryCodeSchema, z.literal(''), z.null().nullable()]).exactOptional(),
    forecastOffice: z.url().exactOptional(),
    gridIdentifier: z.string().exactOptional(),
    awipsLocationIdentifier: z.string().exactOptional(),
    cwa: z.array(NWSForecastOfficeIdSchema).exactOptional().openapi({ deprecated: true }),
    forecastOffices: z.array(z.url()).exactOptional().openapi({ deprecated: true }),
    timeZone: z.array(z.string()).exactOptional(),
    observationStations: z.array(z.url()).exactOptional(),
    radarStation: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Zone')

const ZoneGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: ZoneSchema.exactOptional() }).openapi({ required: [] }),
).openapi('ZoneGeoJson')

const ZoneJsonLdSchema = ZoneSchema.openapi('ZoneJsonLd')

const ZoneCollectionGeoJsonSchema = GeoJsonFeatureCollectionSchema.and(
  z
    .object({
      features: z
        .array(z.object({ properties: ZoneSchema.exactOptional() }).openapi({ required: [] }))
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ZoneCollectionGeoJson')

const ZoneCollectionJsonLdSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    '@graph': z.array(ZoneSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ZoneCollectionJsonLd')

const ZoneForecastSchema = z
  .strictObject({
    '@context': JsonLdContextSchema.exactOptional(),
    geometry: GeometryStringSchema.exactOptional(),
    zone: z
      .url()
      .exactOptional()
      .openapi({ description: 'An API link to the zone this forecast is for.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time this zone forecast product was published.' }),
    periods: z
      .array(
        z
          .strictObject({
            number: z.int().openapi({ description: 'A sequential identifier number.' }),
            name: z
              .string()
              .openapi({
                description: 'A textual description of the period.',
                examples: ['This Afternoon'],
              }),
            detailedForecast: z
              .string()
              .openapi({ description: 'A detailed textual forecast for the period.' }),
          })
          .openapi({ required: ['number', 'name', 'detailedForecast'] }),
      )
      .exactOptional()
      .openapi({ description: 'An array of forecast periods.' }),
  })
  .openapi({ description: 'An object representing a zone area forecast.', required: [] })
  .openapi('ZoneForecast')

const ZoneForecastGeoJsonSchema = GeoJsonFeatureSchema.and(
  z.object({ properties: ZoneForecastSchema.exactOptional() }).openapi({ required: [] }),
).openapi('ZoneForecastGeoJson')

const ZoneForecastJsonLdSchema = ZoneForecastSchema.openapi('ZoneForecastJsonLd')

const CorrelationIdHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.\n',
    param: { required: false },
  })

const RequestIdHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.\n',
    param: { required: false },
  })

const ServerIdHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The identifier of the server that generated the response, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.\n',
    param: { required: false },
  })

const ActiveAlertCollectionResponse = {
  description: 'A collection of active alerts.',
  content: {
    'application/geo+json': { schema: ActiveAlertCollectionGeoJsonSchema },
    'application/ld+json': { schema: ActiveAlertCollectionJsonLdSchema },
    'application/atom+xml': { schema: AlertAtomFeedSchema },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const AlertCollectionResponse = {
  description: 'A collection of alerts.',
  content: {
    'application/geo+json': { schema: AlertCollectionGeoJsonSchema },
    'application/ld+json': { schema: AlertCollectionJsonLdSchema },
    'application/atom+xml': { schema: AlertAtomFeedSchema },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const ErrorResponse = {
  description: 'An error response.',
  content: { 'application/problem+json': { schema: ProblemDetailSchema } },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const Gridpoint12hForecastResponse = {
  description: 'A forecast for a gridpoint.',
  content: {
    'application/geo+json': { schema: Gridpoint12hForecastGeoJsonSchema },
    'application/ld+json': { schema: Gridpoint12hForecastJsonLdSchema },
    'application/vnd.noaa.dwml+xml': { schema: z.any() },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const GridpointHourlyForecastResponse = {
  description: 'A forecast for a gridpoint.',
  content: {
    'application/geo+json': { schema: GridpointHourlyForecastGeoJsonSchema },
    'application/ld+json': { schema: GridpointHourlyForecastJsonLdSchema },
    'application/vnd.noaa.dwml+xml': { schema: z.any() },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const ObservationResponse = {
  description: 'An observation record.',
  content: {
    'application/geo+json': { schema: ObservationGeoJsonSchema },
    'application/ld+json': { schema: ObservationSchema },
    'application/vnd.noaa.uswx+xml': { schema: z.any() },
    'application/vnd.noaa.obs+xml': { schema: z.any() },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const ObservationCollectionResponse = {
  description: 'A collection of observation records.',
  content: {
    'application/geo+json': { schema: ObservationCollectionGeoJsonSchema },
    'application/ld+json': { schema: ObservationCollectionJsonLdSchema },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const ObservationStationCollectionResponse = {
  description: 'A collection of observation stations.',
  content: {
    'application/geo+json': { schema: ObservationStationCollectionGeoJsonSchema },
    'application/ld+json': { schema: ObservationStationCollectionJsonLdSchema },
  },
  headers: z.object({
    'X-Correlation-Id': CorrelationIdHeaderSchema,
    'X-Request-Id': RequestIdHeaderSchema,
    'X-Server-Id': ServerIdHeaderSchema,
  }),
}

const AlertAreaParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(AreaCodeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'area',
      in: 'query',
      description:
        'State/territory code or marine area code\nThis parameter is incompatible with the following parameters: point, region, region_type, zone\n',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/AreaCode' } },
      required: false,
    },
  })

const AlertCertaintyParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(AlertCertaintySchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'certainty',
      in: 'query',
      description: 'Certainty (observed, likely, possible, unlikely, unknown)',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/AlertCertainty' } },
      required: false,
    },
  })

const AlertCodeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string().regex(/^\w{3}$/)),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'code',
      in: 'query',
      description: 'Event code',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { pattern: '^\\w{3}$', type: 'string' } },
      required: false,
    },
  })

const AlertEventNameParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string().regex(/^[A-Za-z0-9 ]+$/)),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'event',
      in: 'query',
      description: 'Event name',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { pattern: '^[A-Za-z0-9 ]+$', type: 'string' } },
      required: false,
    },
  })

const AlertMessageTypeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['alert', 'update', 'cancel'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'message_type',
      in: 'query',
      description: 'Message type (alert, update, cancel)',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { enum: ['alert', 'update', 'cancel'], type: 'string' } },
      required: false,
    },
  })

const AlertPointParamsSchema = PointStringSchema.openapi({
  param: {
    name: 'point',
    in: 'query',
    description:
      'Point (latitude,longitude)\nThis parameter is incompatible with the following parameters: area, region, region_type, zone\n',
    schema: { $ref: '#/components/schemas/PointString' },
    required: false,
  },
}).exactOptional()

const AlertRegionParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(MarineRegionCodeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'region',
      in: 'query',
      description:
        'Marine region code\nThis parameter is incompatible with the following parameters: area, point, region_type, zone\n',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/MarineRegionCode' } },
      required: false,
    },
  })

const AlertRegionTypeParamsSchema = z
  .enum(['land', 'marine'])
  .exactOptional()
  .openapi({
    param: {
      name: 'region_type',
      in: 'query',
      description:
        'Region type (land or marine)\nThis parameter is incompatible with the following parameters: area, point, region, zone\n',
      schema: { enum: ['land', 'marine'], type: 'string' },
      required: false,
    },
  })

const AlertSeverityParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(AlertSeveritySchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'severity',
      in: 'query',
      description: 'Severity (extreme, severe, moderate, minor, unknown)',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/AlertSeverity' } },
      required: false,
    },
  })

const AlertStatusParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['actual', 'exercise', 'system', 'test', 'draft'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'status',
      in: 'query',
      description: 'Status (actual, exercise, system, test, draft)',
      style: 'form',
      explode: false,
      schema: {
        type: 'array',
        items: { enum: ['actual', 'exercise', 'system', 'test', 'draft'], type: 'string' },
      },
      required: false,
    },
  })

const AlertUrgencyParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(AlertUrgencySchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'urgency',
      in: 'query',
      description: 'Urgency (immediate, expected, future, past, unknown)',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/AlertUrgency' } },
      required: false,
    },
  })

const AlertZoneParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(NWSZoneIDSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'zone',
      in: 'query',
      description:
        'Zone ID (forecast or county)\nThis parameter is incompatible with the following parameters: area, point, region, region_type\n',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/NWSZoneID' } },
      required: false,
    },
  })

const ATSUIdentifierParamsSchema = ATSUIdentifierSchema.openapi({
  param: {
    name: 'atsu',
    in: 'path',
    description: 'ATSU identifier',
    required: true,
    schema: { $ref: '#/components/schemas/ATSUIdentifier' },
  },
})

const CallSignParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'callSign',
      in: 'path',
      description: 'The call sign identifier for a NOAA transmitter station.',
      required: true,
      schema: { type: 'string' },
    },
  })

const DateParamsSchema = DateSchema.openapi({
  param: {
    name: 'date',
    in: 'path',
    description: 'Date (YYYY-MM-DD format)',
    required: true,
    schema: { $ref: '#/components/schemas/Date' },
  },
})

const GridpointForecastFeatureFlagsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
          ),
    z.array(z.enum(['forecast_temperature_qv', 'forecast_wind_speed_qv'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'Feature-Flags',
      in: 'header',
      description:
        'Enable future and experimental features (see documentation for more info):\n* forecast_temperature_qv: Represent temperature as QuantitativeValue\n* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue\n',
      required: false,
      style: 'simple',
      explode: false,
      schema: {
        type: 'array',
        items: { enum: ['forecast_temperature_qv', 'forecast_wind_speed_qv'], type: 'string' },
      },
    },
  })

const GridpointForecastUnitsParamsSchema = GridpointForecastUnitsSchema.openapi({
  param: {
    name: 'units',
    in: 'query',
    description: 'Use US customary or SI (metric) units in textual output',
    schema: { $ref: '#/components/schemas/GridpointForecastUnits' },
    required: false,
  },
}).exactOptional()

const GridpointWFOParamsSchema = NWSForecastOfficeIdSchema.openapi({
  param: {
    name: 'wfo',
    in: 'path',
    description: 'Forecast office ID',
    required: true,
    schema: { $ref: '#/components/schemas/NWSForecastOfficeId' },
  },
})

const GridpointXParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .openapi({
    param: {
      name: 'x',
      in: 'path',
      description: 'Forecast grid X coordinate',
      required: true,
      schema: { minimum: 0, type: 'integer' },
    },
  })

const GridpointYParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .openapi({
    param: {
      name: 'y',
      in: 'path',
      description: 'Forecast grid Y coordinate',
      required: true,
      schema: { minimum: 0, type: 'integer' },
    },
  })

const LatitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number().min(-90).max(90).multipleOf(0.0001),
  )
  .openapi({
    param: {
      name: 'latitude',
      in: 'path',
      description: 'Latitude',
      required: true,
      schema: { multipleOf: 0.0001, maximum: 90, minimum: -90, type: 'number' },
    },
  })

const LongitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number().min(-180).max(180).multipleOf(0.0001),
  )
  .openapi({
    param: {
      name: 'longitude',
      in: 'path',
      description: 'Longitude',
      required: true,
      schema: { multipleOf: 0.0001, maximum: 180, minimum: -180, type: 'number' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(500),
  )
  .default(500)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Limit',
      schema: { maximum: 500, minimum: 1, type: 'integer', default: 500 },
      required: false,
    },
  })

const NWSCenterWeatherServiceUnitIdParamsSchema = NWSCenterWeatherServiceUnitIdSchema.openapi({
  param: {
    name: 'cwsuId',
    in: 'path',
    description: 'NWS CWSU ID',
    required: true,
    schema: { $ref: '#/components/schemas/NWSCenterWeatherServiceUnitId' },
  },
})

const NWSOfficeIdParamsSchema = NWSOfficeIdSchema.openapi({
  param: {
    name: 'officeId',
    in: 'path',
    description: 'NWS office ID',
    required: true,
    schema: { $ref: '#/components/schemas/NWSOfficeId' },
  },
})

const NWSZoneIdParamsSchema = NWSZoneIDSchema.openapi({
  param: {
    name: 'zoneId',
    in: 'path',
    description: 'NWS public zone/county identifier',
    required: true,
    schema: { $ref: '#/components/schemas/NWSZoneID' },
  },
})

const ObservationStationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'stationId',
      in: 'path',
      description: 'Observation station ID',
      required: true,
      schema: { type: 'string' },
    },
  })

const PaginationCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      description: 'Pagination cursor',
      schema: { type: 'string' },
      required: false,
    },
  })

const QueryDateParamsSchema = DateSchema.openapi({
  param: {
    name: 'date',
    in: 'query',
    description: 'Date (YYYY-MM-DD format)',
    schema: { $ref: '#/components/schemas/Date' },
    required: false,
  },
}).exactOptional()

const QueryStartTimeParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'start',
      in: 'query',
      description: 'Start time',
      schema: { type: 'string', format: 'date-time' },
      required: false,
    },
  })

const QueryEndTimeParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'end',
      in: 'query',
      description: 'End time',
      schema: { type: 'string', format: 'date-time' },
      required: false,
    },
  })

const SigmetSequenceNumberParamsSchema = SigmetSequenceNumberSchema.openapi({
  param: {
    name: 'sequence',
    in: 'path',
    description: 'SIGMET sequence number',
    required: true,
    schema: { $ref: '#/components/schemas/SigmetSequenceNumber' },
  },
})

const TimeParamsSchema = TimeSchema.openapi({
  param: {
    name: 'time',
    in: 'path',
    description: 'Time (HHMM format). This time is always specified in UTC (Zulu) time.',
    required: true,
    schema: { $ref: '#/components/schemas/Time' },
  },
})

const XApiKeyHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'A token that a client provides when making API calls.  Please include this identifier with any correspondence to help us investigate your issue.\n',
    param: { required: false },
  })

const UserAgentSecurityScheme = {
  type: 'apiKey',
  description:
    'We require that all consumers of the API include a User-Agent header in requests. This is due to a high number of scripts exhibiting abusive behavior (intentional or unintentional). We recommend setting the value to something that identifies your application and includes a contact email. This will help us contact you if we notice unusual behavior and also aid in troubleshooting issues.\nThe API remains open and free to use and there are no limits imposed based on the User-Agent string.\nThis mechanism will be replaced with a more typical API key system at a later date.\n',
  name: 'User-Agent',
  in: 'header',
}

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  description:
    'We are testing including a more traditional API Key system on certain endpoints.  This is due to a large change in the weather.gov site.\nThe API remains open and free to use and there are no limits imposed based on the X-Api-Key string.\n',
  name: 'API-Key',
  in: 'header',
}

export const getAlertsRoute = createRoute({
  method: 'get',
  path: '/alerts',
  description: 'Returns all alerts',
  operationId: 'alerts_query',
  request: {
    query: z.object({
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'active',
            in: 'query',
            description: 'List only active alerts (use /alerts/active endpoints instead)',
            deprecated: true,
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      start: QueryStartTimeParamsSchema,
      end: QueryEndTimeParamsSchema,
      status: AlertStatusParamsSchema,
      message_type: AlertMessageTypeParamsSchema,
      event: AlertEventNameParamsSchema,
      code: AlertCodeParamsSchema,
      area: AlertAreaParamsSchema,
      point: AlertPointParamsSchema,
      region: AlertRegionParamsSchema,
      region_type: AlertRegionTypeParamsSchema,
      zone: AlertZoneParamsSchema,
      urgency: AlertUrgencyParamsSchema,
      severity: AlertSeverityParamsSchema,
      certainty: AlertCertaintyParamsSchema,
      limit: LimitParamsSchema,
      cursor: PaginationCursorParamsSchema,
    }),
  },
  responses: {
    200: AlertCollectionResponse,
    301: { description: 'Certain common queries may be redirected to discrete URLs' },
    default: ErrorResponse,
  },
})

export const getAlertsActiveRoute = createRoute({
  method: 'get',
  path: '/alerts/active',
  description: 'Returns all currently active alerts',
  operationId: 'alerts_active',
  request: {
    query: z.object({
      status: AlertStatusParamsSchema,
      message_type: AlertMessageTypeParamsSchema,
      event: AlertEventNameParamsSchema,
      code: AlertCodeParamsSchema,
      area: AlertAreaParamsSchema,
      point: AlertPointParamsSchema,
      region: AlertRegionParamsSchema,
      region_type: AlertRegionTypeParamsSchema,
      zone: AlertZoneParamsSchema,
      urgency: AlertUrgencyParamsSchema,
      severity: AlertSeverityParamsSchema,
      certainty: AlertCertaintyParamsSchema,
    }),
  },
  responses: {
    200: ActiveAlertCollectionResponse,
    301: { description: 'Certain common queries may be redirected to discrete URLs' },
    default: ErrorResponse,
  },
})

export const getAlertsActiveCountRoute = createRoute({
  method: 'get',
  path: '/alerts/active/count',
  description: 'Returns info on the number of active alerts',
  operationId: 'alerts_active_count',
  responses: {
    200: {
      description:
        'A data structure showing the counts of active alerts broken down by various categories',
      content: {
        'application/ld+json': {
          schema: z
            .object({
              total: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({ description: 'The total number of active alerts' }),
              land: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({ description: 'The total number of active alerts affecting land zones' }),
              marine: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description: 'The total number of active alerts affecting marine zones',
                }),
              regions: z
                .record(z.string(), z.int().min(1))
                .exactOptional()
                .openapi({ description: 'Active alerts by marine region' }),
              areas: z
                .record(z.string(), z.int().min(1))
                .exactOptional()
                .openapi({ description: 'Active alerts by area (state/territory)' }),
              zones: z
                .record(z.string(), z.int().min(1))
                .exactOptional()
                .openapi({ description: 'Active alerts by NWS public zone or county code' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getAlertsActiveZoneZoneIdRoute = createRoute({
  method: 'get',
  path: '/alerts/active/zone/{zoneId}',
  description: 'Returns active alerts for the given NWS public zone or county',
  operationId: 'alerts_active_zone',
  request: { params: z.object({ zoneId: NWSZoneIdParamsSchema }) },
  responses: { 200: ActiveAlertCollectionResponse, default: ErrorResponse },
})

export const getAlertsActiveAreaAreaRoute = createRoute({
  method: 'get',
  path: '/alerts/active/area/{area}',
  description: 'Returns active alerts for the given area (state or marine area)',
  operationId: 'alerts_active_area',
  request: {
    params: z.object({
      area: AreaCodeSchema.openapi({
        param: {
          name: 'area',
          in: 'path',
          description: 'State/area ID',
          required: true,
          schema: { $ref: '#/components/schemas/AreaCode' },
        },
      }),
    }),
  },
  responses: { 200: ActiveAlertCollectionResponse, default: ErrorResponse },
})

export const getAlertsActiveRegionRegionRoute = createRoute({
  method: 'get',
  path: '/alerts/active/region/{region}',
  description: 'Returns active alerts for the given marine region',
  operationId: 'alerts_active_region',
  request: {
    params: z.object({
      region: MarineRegionCodeSchema.openapi({
        param: {
          name: 'region',
          in: 'path',
          description: 'Marine region ID',
          required: true,
          schema: { $ref: '#/components/schemas/MarineRegionCode' },
        },
      }),
    }),
  },
  responses: { 200: ActiveAlertCollectionResponse, default: ErrorResponse },
})

export const getAlertsTypesRoute = createRoute({
  method: 'get',
  path: '/alerts/types',
  description: 'Returns a list of alert types',
  operationId: 'alerts_types',
  responses: {
    200: {
      description: 'A list of recognized event types',
      content: {
        'application/ld+json': {
          schema: z
            .object({
              eventTypes: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of recognized event types' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getAlertsIdRoute = createRoute({
  method: 'get',
  path: '/alerts/{id}',
  description: 'Returns a specific alert',
  operationId: 'alerts_single',
  request: {
    params: z.object({
      id: AlertIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Alert identifier',
          required: true,
          schema: { $ref: '#/components/schemas/AlertId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'An alert record',
      content: {
        'application/geo+json': { schema: AlertGeoJsonSchema },
        'application/ld+json': { schema: AlertJsonLdSchema },
        'application/cap+xml': { schema: AlertCapSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getAviationCwsusCwsuIdRoute = createRoute({
  method: 'get',
  path: '/aviation/cwsus/{cwsuId}',
  description: 'Returns metadata about a Center Weather Service Unit',
  operationId: 'cwsu',
  request: { params: z.object({ cwsuId: NWSCenterWeatherServiceUnitIdParamsSchema }) },
  responses: {
    200: { description: 'success', content: { 'application/ld+json': { schema: OfficeSchema } } },
    default: ErrorResponse,
  },
})

export const getAviationCwsusCwsuIdCwasRoute = createRoute({
  method: 'get',
  path: '/aviation/cwsus/{cwsuId}/cwas',
  description: 'Returns a list of Center Weather Advisories from a CWSU',
  operationId: 'cwas',
  request: { params: z.object({ cwsuId: NWSCenterWeatherServiceUnitIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/geo+json': { schema: CenterWeatherAdvisoryCollectionGeoJsonSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAviationCwsusCwsuIdCwasDateSequenceRoute = createRoute({
  method: 'get',
  path: '/aviation/cwsus/{cwsuId}/cwas/{date}/{sequence}',
  description: 'Returns a list of Center Weather Advisories from a CWSU',
  operationId: 'cwa',
  request: {
    params: z.object({
      cwsuId: NWSCenterWeatherServiceUnitIdParamsSchema,
      date: DateParamsSchema,
      sequence: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(100),
        )
        .openapi({
          param: {
            name: 'sequence',
            in: 'path',
            description: 'Sequence number',
            required: true,
            schema: { minimum: 100, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: CenterWeatherAdvisoryGeoJsonSchema },
        'application/vnd.noaa.uswx+xml': { schema: z.any() },
      },
    },
    default: ErrorResponse,
  },
})

export const getAviationSigmetsRoute = createRoute({
  method: 'get',
  path: '/aviation/sigmets',
  description: 'Returns a list of SIGMET/AIRMETs',
  operationId: 'sigmetQuery',
  request: {
    query: z.object({
      start: QueryStartTimeParamsSchema,
      end: QueryEndTimeParamsSchema,
      date: QueryDateParamsSchema,
      atsu: ATSUIdentifierSchema.openapi({
        param: {
          name: 'atsu',
          in: 'query',
          description: 'ATSU identifier',
          schema: { $ref: '#/components/schemas/ATSUIdentifier' },
          required: false,
        },
      }).exactOptional(),
      sequence: SigmetSequenceNumberSchema.openapi({
        param: {
          name: 'sequence',
          in: 'query',
          description: 'SIGMET sequence number',
          schema: { $ref: '#/components/schemas/SigmetSequenceNumber' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/geo+json': { schema: SigmetCollectionGeoJsonSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAviationSigmetsAtsuRoute = createRoute({
  method: 'get',
  path: '/aviation/sigmets/{atsu}',
  description: 'Returns a list of SIGMET/AIRMETs for the specified ATSU',
  operationId: 'sigmetsByATSU',
  request: { params: z.object({ atsu: ATSUIdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/geo+json': { schema: SigmetCollectionGeoJsonSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAviationSigmetsAtsuDateRoute = createRoute({
  method: 'get',
  path: '/aviation/sigmets/{atsu}/{date}',
  description: 'Returns a list of SIGMET/AIRMETs for the specified ATSU for the specified date',
  operationId: 'sigmetsByATSUByDate',
  request: { params: z.object({ atsu: ATSUIdentifierParamsSchema, date: DateParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/geo+json': { schema: SigmetCollectionGeoJsonSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAviationSigmetsAtsuDateTimeRoute = createRoute({
  method: 'get',
  path: '/aviation/sigmets/{atsu}/{date}/{time}',
  description: 'Returns a specific SIGMET/AIRMET',
  operationId: 'sigmet',
  request: {
    params: z.object({
      atsu: ATSUIdentifierParamsSchema,
      date: DateParamsSchema,
      time: TimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: SigmetGeoJsonSchema },
        'application/vnd.noaa.uswx+xml': { schema: z.any() },
      },
    },
    default: ErrorResponse,
  },
})

export const getGlossaryRoute = createRoute({
  method: 'get',
  path: '/glossary',
  description: 'Returns glossary terms',
  operationId: 'glossary',
  responses: {
    200: {
      description: 'A set of glossary terms',
      content: {
        'application/ld+json': {
          schema: z
            .object({
              '@context': JsonLdContextSchema.exactOptional(),
              glossary: z
                .array(
                  z
                    .object({
                      term: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The term being defined' }),
                      definition: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A definition for the term' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'A list of glossary terms' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getGridpointsWfoXYRoute = createRoute({
  method: 'get',
  path: '/gridpoints/{wfo}/{x},{y}',
  description: 'Returns raw numerical forecast data for a 2.5km grid area',
  operationId: 'gridpoint',
  request: {
    params: z.object({
      wfo: GridpointWFOParamsSchema,
      x: GridpointXParamsSchema,
      y: GridpointYParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Gridpoint forecast data',
      content: {
        'application/geo+json': { schema: GridpointGeoJsonSchema },
        'application/ld+json': { schema: GridpointSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getGridpointsWfoXYForecastRoute = createRoute({
  method: 'get',
  path: '/gridpoints/{wfo}/{x},{y}/forecast',
  description: 'Returns a textual forecast for a 2.5km grid area',
  operationId: 'gridpoint_forecast',
  request: {
    params: z.object({
      wfo: GridpointWFOParamsSchema,
      x: GridpointXParamsSchema,
      y: GridpointYParamsSchema,
    }),
    headers: z.object({ 'Feature-Flags': GridpointForecastFeatureFlagsParamsSchema }),
    query: z.object({ units: GridpointForecastUnitsParamsSchema }),
  },
  responses: { 200: Gridpoint12hForecastResponse, default: ErrorResponse },
})

export const getGridpointsWfoXYForecastHourlyRoute = createRoute({
  method: 'get',
  path: '/gridpoints/{wfo}/{x},{y}/forecast/hourly',
  description: 'Returns a textual hourly forecast for a 2.5km grid area',
  operationId: 'gridpoint_forecast_hourly',
  request: {
    params: z.object({
      wfo: GridpointWFOParamsSchema,
      x: GridpointXParamsSchema,
      y: GridpointYParamsSchema,
    }),
    headers: z.object({ 'Feature-Flags': GridpointForecastFeatureFlagsParamsSchema }),
    query: z.object({ units: GridpointForecastUnitsParamsSchema }),
  },
  responses: { 200: GridpointHourlyForecastResponse, default: ErrorResponse },
})

export const getGridpointsWfoXYStationsRoute = createRoute({
  method: 'get',
  path: '/gridpoints/{wfo}/{x},{y}/stations',
  description: 'Returns a list of observation stations usable for a given 2.5km grid area',
  operationId: 'gridpoint_stations',
  request: {
    params: z.object({
      wfo: GridpointWFOParamsSchema,
      x: GridpointXParamsSchema,
      y: GridpointYParamsSchema,
    }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: ObservationStationCollectionResponse, default: ErrorResponse },
})

export const getIconsSetTimeOfDayFirstRoute = createRoute({
  method: 'get',
  path: '/icons/{set}/{timeOfDay}/{first}',
  description: 'Returns a forecast icon. Icon services in API are deprecated.',
  operationId: 'icons',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            name: 'set',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timeOfDay: z
        .string()
        .openapi({
          param: {
            name: 'timeOfDay',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      first: z
        .string()
        .openapi({
          param: {
            name: 'first',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      size: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.enum(['small', 'medium', 'large']), z.int().min(10).max(500)]))
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            description: 'Font size',
            schema: {
              anyOf: [
                { enum: ['small', 'medium', 'large'], type: 'string' },
                { maximum: 500, minimum: 10, type: 'integer' },
              ],
            },
            required: false,
          },
        }),
      fontsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2).max(24),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fontsize',
            in: 'query',
            description: 'Font size',
            schema: { maximum: 24, minimum: 2, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'image/png': { schema: BinaryFileSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
  deprecated: true,
})

export const getIconsSetTimeOfDayFirstSecondRoute = createRoute({
  method: 'get',
  path: '/icons/{set}/{timeOfDay}/{first}/{second}',
  description: 'Returns a forecast icon. Icon services in API are deprecated.',
  operationId: 'iconsDualCondition',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            name: 'set',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timeOfDay: z
        .string()
        .openapi({
          param: {
            name: 'timeOfDay',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      first: z
        .string()
        .openapi({
          param: {
            name: 'first',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      second: z
        .string()
        .openapi({
          param: {
            name: 'second',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      size: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.enum(['small', 'medium', 'large']), z.int().min(10).max(500)]))
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            description: 'Font size',
            schema: {
              anyOf: [
                { enum: ['small', 'medium', 'large'], type: 'string' },
                { maximum: 500, minimum: 10, type: 'integer' },
              ],
            },
            required: false,
          },
        }),
      fontsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2).max(24),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fontsize',
            in: 'query',
            description: 'Font size',
            schema: { maximum: 24, minimum: 2, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'image/png': { schema: BinaryFileSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
  deprecated: true,
})

export const getIconsRoute = createRoute({
  method: 'get',
  path: '/icons',
  description:
    'Returns a list of icon codes and textual descriptions. Icon services in API are deprecated.',
  operationId: 'icons_summary',
  responses: {
    200: {
      description: 'success',
      content: {
        'application/ld+json': {
          schema: z
            .strictObject({
              '@context': JsonLdContextSchema.exactOptional(),
              icons: z.record(
                z.string(),
                z.strictObject({ description: z.string() }).openapi({ required: ['description'] }),
              ),
            })
            .openapi({ required: ['icons'] }),
        },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
  deprecated: true,
})

export const getThumbnailsSatelliteAreaRoute = createRoute({
  method: 'get',
  path: '/thumbnails/satellite/{area}',
  description:
    'Returns a thumbnail image for a satellite region. Image services in API are deprecated.',
  operationId: 'satellite_thumbnails',
  request: {
    params: z.object({
      area: z
        .enum(['a', 'e', 'g', 'h', 'p', 's', 'w'])
        .openapi({
          param: {
            name: 'area',
            in: 'path',
            description: '.',
            required: true,
            schema: { enum: ['a', 'e', 'g', 'h', 'p', 's', 'w'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An image file',
      content: { 'image/jpeg': { schema: BinaryFileSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
  deprecated: true,
})

export const getStationsStationIdObservationsRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}/observations',
  description: 'Returns a list of observations for a given station',
  operationId: 'station_observation_list',
  request: {
    params: z.object({ stationId: ObservationStationIdParamsSchema }),
    query: z.object({
      start: QueryStartTimeParamsSchema,
      end: QueryEndTimeParamsSchema,
      cursor: PaginationCursorParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ObservationCollectionResponse, default: ErrorResponse },
})

export const getStationsStationIdObservationsLatestRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}/observations/latest',
  description: 'Returns the latest observation for a station',
  operationId: 'station_observation_latest',
  request: {
    params: z.object({ stationId: ObservationStationIdParamsSchema }),
    query: z.object({
      require_qc: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'require_qc',
            in: 'query',
            description: 'Require QC',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ObservationResponse, default: ErrorResponse },
})

export const getStationsStationIdObservationsTimeRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}/observations/{time}',
  description: 'Returns a single observation.',
  operationId: 'station_observation_time',
  request: {
    params: z.object({
      stationId: ObservationStationIdParamsSchema,
      time: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'time',
            in: 'path',
            description: 'Timestamp of requested observation',
            required: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: { 200: ObservationResponse, default: ErrorResponse },
})

export const getStationsStationIdTafsRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}/tafs',
  description: 'Returns Terminal Aerodrome Forecasts for the specified airport station.',
  operationId: 'tafs',
  request: { params: z.object({ stationId: ObservationStationIdParamsSchema }) },
  responses: {
    200: { description: 'success', content: { 'application/ld+json': { schema: z.any() } } },
    default: ErrorResponse,
  },
})

export const getStationsStationIdTafsDateTimeRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}/tafs/{date}/{time}',
  description: 'Returns a single Terminal Aerodrome Forecast.',
  operationId: 'taf',
  request: {
    params: z.object({
      stationId: ObservationStationIdParamsSchema,
      date: DateParamsSchema,
      time: TimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/vnd.wmo.iwxxm+xml': { schema: z.any() } },
    },
    default: ErrorResponse,
  },
})

export const getStationsRoute = createRoute({
  method: 'get',
  path: '/stations',
  description: 'Returns a list of observation stations.',
  operationId: 'obs_stations',
  request: {
    query: z.object({
      id: z
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
            name: 'id',
            in: 'query',
            description: 'Filter by observation station ID',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      state: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AreaCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'Filter by state/marine area code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/AreaCode' } },
            required: false,
          },
        }),
      limit: LimitParamsSchema,
      cursor: PaginationCursorParamsSchema,
    }),
  },
  responses: { 200: ObservationStationCollectionResponse, default: ErrorResponse },
})

export const getStationsStationIdRoute = createRoute({
  method: 'get',
  path: '/stations/{stationId}',
  description: 'Returns metadata about a given observation station',
  operationId: 'obs_station',
  request: { params: z.object({ stationId: ObservationStationIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ObservationStationGeoJsonSchema },
        'application/ld+json': { schema: ObservationStationJsonLdSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}',
  description: 'Returns metadata about a NWS forecast office',
  operationId: 'office',
  request: { params: z.object({ officeId: NWSOfficeIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: OfficeSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdBriefingRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/briefing',
  description: 'Returns active briefing for an NWS office',
  operationId: 'office_briefing',
  request: { params: z.object({ officeId: NWSOfficeIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: NWSConnectDocumentMetadataSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdBriefingDownloadLatestRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/briefing/download/latest',
  description: 'Returns the latest briefing for an office',
  operationId: 'office_briefing_download_latest',
  request: { params: z.object({ officeId: NWSOfficeIdParamsSchema }) },
  responses: {
    302: {
      description: 'success',
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdBriefingDownloadBriefingIdRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/briefing/download/{briefingId}',
  description: 'Returns a briefing for an office',
  operationId: 'office_briefing_download',
  request: {
    params: z.object({
      officeId: NWSOfficeIdParamsSchema,
      briefingId: z
        .string()
        .openapi({
          param: {
            name: 'briefingId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/pdf': { schema: BinaryFileSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdHeadlinesHeadlineIdRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/headlines/{headlineId}',
  description: 'Returns a specific news headline for a given NWS office',
  operationId: 'office_headline',
  request: {
    params: z.object({
      officeId: NWSOfficeIdParamsSchema,
      headlineId: z
        .string()
        .openapi({
          param: {
            name: 'headlineId',
            in: 'path',
            description: 'Headline record ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: OfficeHeadlineSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdHeadlinesRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/headlines',
  description: 'Returns a list of news headlines for a given NWS office',
  operationId: 'office_headlines',
  request: { params: z.object({ officeId: NWSOfficeIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: OfficeHeadlineCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdWeatherstoriesRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/weatherstories',
  description: 'Returns active weather stories for an NWS office',
  operationId: 'office_weatherstory',
  request: { params: z.object({ officeId: NWSOfficeIdParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: OfficeWeatherStoryCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getOfficesOfficeIdWeatherstoriesDownloadImageIdRoute = createRoute({
  method: 'get',
  path: '/offices/{officeId}/weatherstories/download/{imageId}',
  description: 'Returns the image for a weather story',
  operationId: 'office_weatherstory_image',
  request: {
    params: z.object({
      officeId: NWSOfficeIdParamsSchema,
      imageId: z
        .string()
        .openapi({
          param: {
            name: 'imageId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'image/*': { schema: BinaryFileSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getPointsLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/points/{latitude},{longitude}',
  description: 'Returns metadata about a given latitude/longitude point',
  operationId: 'point',
  request: {
    params: z.object({ latitude: LatitudeParamsSchema, longitude: LongitudeParamsSchema }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: PointGeoJsonSchema },
        'application/ld+json': { schema: PointJsonLdSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getPointsLatitudeLongitudeRadioRoute = createRoute({
  method: 'get',
  path: '/points/{latitude},{longitude}/radio',
  description: 'Returns NOAA Weather Radio broadcast script for a latitude/longitude point',
  externalDocs: { url: 'https://www.w3.org/TR/speech-synthesis/' },
  operationId: 'point_radio',
  request: {
    params: z.object({ latitude: LatitudeParamsSchema, longitude: LongitudeParamsSchema }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ssml+xml': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getPointsLatitudeLongitudeStationsRoute = createRoute({
  method: 'get',
  path: '/points/{latitude},{longitude}/stations',
  description: 'Returns a list of observation stations for a given point',
  operationId: 'point_stations',
  request: {
    params: z.object({ latitude: LatitudeParamsSchema, longitude: LongitudeParamsSchema }),
  },
  responses: { 301: { description: 'redirect to gridpoint stations' }, default: ErrorResponse },
  deprecated: true,
})

export const getRadarServersRoute = createRoute({
  method: 'get',
  path: '/radar/servers',
  description: 'Returns a list of radar servers',
  operationId: 'radar_servers',
  request: {
    query: z.object({
      reportingHost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportingHost',
            in: 'query',
            description: 'Show records from specific reporting host',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
        'X-Api-Key': XApiKeyHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarServersIdRoute = createRoute({
  method: 'get',
  path: '/radar/servers/{id}',
  description: 'Returns metadata about a given radar server',
  operationId: 'radar_server',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      reportingHost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportingHost',
            in: 'query',
            description: 'Show records from specific reporting host',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarSpgdsRoute = createRoute({
  method: 'get',
  path: '/radar/spgds',
  description: 'Returns a list of radar spgds',
  operationId: 'radar_spgds',
  request: {
    query: z.object({
      published: ISO8601IntervalSchema.openapi({
        param: {
          name: 'published',
          in: 'query',
          description: 'Range for publish time',
          schema: { $ref: '#/components/schemas/ISO8601Interval' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarStationsRoute = createRoute({
  method: 'get',
  path: '/radar/stations',
  description: 'Returns a list of radar stations',
  operationId: 'radar_stations',
  request: {
    query: z.object({
      stationType: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().regex(/^[A-Za-z0-9-]+$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'stationType',
            in: 'query',
            description: 'Limit results to a specific station type or types',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { pattern: '^[A-Za-z0-9-]+$', type: 'string' } },
            required: false,
          },
        }),
      reportingHost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportingHost',
            in: 'query',
            description: 'Show RDA and latency info from specific reporting host',
            schema: { type: 'string' },
            required: false,
          },
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            description: 'Show latency info from specific LDM host',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: z.any() },
        'application/ld+json': { schema: z.any() },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarStationsStationIdRoute = createRoute({
  method: 'get',
  path: '/radar/stations/{stationId}',
  description: 'Returns metadata about a given radar station',
  operationId: 'radar_station',
  request: {
    params: z.object({
      stationId: z
        .string()
        .openapi({
          param: {
            name: 'stationId',
            in: 'path',
            description: 'Radar station ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      reportingHost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportingHost',
            in: 'query',
            description: 'Show RDA and latency info from specific reporting host',
            schema: { type: 'string' },
            required: false,
          },
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            description: 'Show latency info from specific LDM host',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: z.any() },
        'application/ld+json': { schema: z.any() },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarStationsStationIdAlarmsRoute = createRoute({
  method: 'get',
  path: '/radar/stations/{stationId}/alarms',
  description: 'Returns metadata about a given radar station alarms',
  operationId: 'radar_station_alarms',
  request: {
    params: z.object({
      stationId: z
        .string()
        .openapi({
          param: {
            name: 'stationId',
            in: 'path',
            description: 'Radar station ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarQueuesHostRoute = createRoute({
  method: 'get',
  path: '/radar/queues/{host}',
  description: 'Returns metadata about a given radar queue',
  operationId: 'radar_queue',
  request: {
    params: z.object({
      host: z
        .enum(['rds', 'tds'])
        .openapi({
          param: {
            name: 'host',
            in: 'path',
            description: 'LDM host',
            required: true,
            schema: { enum: ['rds', 'tds'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Record limit',
            schema: { maximum: 50000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      arrived: ISO8601IntervalSchema.openapi({
        param: {
          name: 'arrived',
          in: 'query',
          description: 'Range for arrival time',
          schema: { $ref: '#/components/schemas/ISO8601Interval' },
          required: false,
        },
      }).exactOptional(),
      created: ISO8601IntervalSchema.openapi({
        param: {
          name: 'created',
          in: 'query',
          description: 'Range for creation time',
          schema: { $ref: '#/components/schemas/ISO8601Interval' },
          required: false,
        },
      }).exactOptional(),
      published: ISO8601IntervalSchema.openapi({
        param: {
          name: 'published',
          in: 'query',
          description: 'Range for publish time',
          schema: { $ref: '#/components/schemas/ISO8601Interval' },
          required: false,
        },
      }).exactOptional(),
      station: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'station',
            in: 'query',
            description: 'Station identifier',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Record type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      feed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'feed',
            in: 'query',
            description: 'Originating product feed',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resolution: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'resolution',
            in: 'query',
            description: 'Resolution version',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadarProfilersStationIdRoute = createRoute({
  method: 'get',
  path: '/radar/profilers/{stationId}',
  description: 'Returns metadata about a given radar wind profiler',
  operationId: 'radar_profiler',
  request: {
    params: z.object({
      stationId: z
        .string()
        .openapi({
          param: {
            name: 'stationId',
            in: 'path',
            description: 'Profiler station ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      time: ISO8601IntervalSchema.openapi({
        param: {
          name: 'time',
          in: 'query',
          description: 'Time interval',
          schema: { $ref: '#/components/schemas/ISO8601Interval' },
          required: false,
        },
      }).exactOptional(),
      interval: ISO8601DurationSchema.openapi({
        param: {
          name: 'interval',
          in: 'query',
          description: 'Averaging interval',
          schema: { $ref: '#/components/schemas/ISO8601Duration' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadioRoute = createRoute({
  method: 'get',
  path: '/radio',
  description: 'Returns a collection of transmitters',
  externalDocs: { url: 'https://www.w3.org/TR/speech-synthesis/' },
  operationId: 'transmitters',
  request: { query: z.object({ cursor: PaginationCursorParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadioCallSignRoute = createRoute({
  method: 'get',
  path: '/radio/{callSign}',
  description: 'Returns a single transmitter',
  externalDocs: { url: 'https://www.w3.org/TR/speech-synthesis/' },
  operationId: 'transmitter',
  request: { params: z.object({ callSign: CallSignParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getRadioCallSignBroadcastRoute = createRoute({
  method: 'get',
  path: '/radio/{callSign}/broadcast',
  description: 'Returns NOAA Weather Radio broadcast script for a transmitter',
  externalDocs: { url: 'https://www.w3.org/TR/speech-synthesis/' },
  operationId: 'area_radio',
  request: { params: z.object({ callSign: CallSignParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ssml+xml': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  description: 'Returns a list of text products',
  operationId: 'products_query',
  request: {
    query: z.object({
      location: z
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
            name: 'location',
            in: 'query',
            description: 'Location id',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      office: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().regex(/^[A-Z]{4}$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'office',
            in: 'query',
            description: 'Issuing office',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { pattern: '^[A-Z]{4}$', type: 'string' } },
            required: false,
          },
        }),
      wmoid: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().regex(/^[A-Z]{4}\d{2}$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'wmoid',
            in: 'query',
            description: 'WMO id code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { pattern: '^[A-Z]{4}\\d{2}$', type: 'string' } },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().regex(/^\w{3}$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Product code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { pattern: '^\\w{3}$', type: 'string' } },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsLocationsRoute = createRoute({
  method: 'get',
  path: '/products/locations',
  description: 'Returns a list of valid text product issuance locations',
  operationId: 'product_locations',
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductLocationCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsTypesRoute = createRoute({
  method: 'get',
  path: '/products/types',
  description: 'Returns a list of valid text product types and codes',
  operationId: 'product_types',
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductTypeCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/products/{productId}',
  description: 'Returns a specific text product',
  operationId: 'product',
  request: {
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            name: 'productId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsTypesTypeIdRoute = createRoute({
  method: 'get',
  path: '/products/types/{typeId}',
  description: 'Returns a list of text products of a given type',
  operationId: 'products_type',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            name: 'typeId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsTypesTypeIdLocationsRoute = createRoute({
  method: 'get',
  path: '/products/types/{typeId}/locations',
  description: 'Returns a list of valid text product issuance locations for a given product type',
  operationId: 'products_type_locations',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            name: 'typeId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductLocationCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsLocationsLocationIdTypesRoute = createRoute({
  method: 'get',
  path: '/products/locations/{locationId}/types',
  description: 'Returns a list of valid text product types for a given issuance location',
  operationId: 'location_products',
  request: {
    params: z.object({
      locationId: z
        .string()
        .openapi({
          param: {
            name: 'locationId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductTypeCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsTypesTypeIdLocationsLocationIdRoute = createRoute({
  method: 'get',
  path: '/products/types/{typeId}/locations/{locationId}',
  description: 'Returns a list of text products of a given type for a given issuance location',
  operationId: 'products_type_location',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            name: 'typeId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationId: z
        .string()
        .openapi({
          param: {
            name: 'locationId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductCollectionSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getProductsTypesTypeIdLocationsLocationIdLatestRoute = createRoute({
  method: 'get',
  path: '/products/types/{typeId}/locations/{locationId}/latest',
  description:
    'Returns latest text products of a given type for a given issuance location with product text',
  operationId: 'latest_product_type_location',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            name: 'typeId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationId: z
        .string()
        .openapi({
          param: {
            name: 'locationId',
            in: 'path',
            description: '.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: TextProductSchema } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesRoute = createRoute({
  method: 'get',
  path: '/zones',
  description: 'Returns a list of zones',
  operationId: 'zone_list',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NWSZoneIDSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'Zone ID (forecast or county)',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/NWSZoneID' } },
            required: false,
          },
        }),
      area: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AreaCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'area',
            in: 'query',
            description: 'State/marine area code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/AreaCode' } },
            required: false,
          },
        }),
      region: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(RegionCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region',
            in: 'query',
            description: 'Region code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/RegionCode' } },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NWSZoneTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Zone type',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/NWSZoneType' } },
            required: false,
          },
        }),
      point: PointStringSchema.openapi({
        param: {
          name: 'point',
          in: 'query',
          description: 'Point (latitude,longitude)',
          schema: { $ref: '#/components/schemas/PointString' },
          required: false,
        },
      }).exactOptional(),
      include_geometry: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_geometry',
            in: 'query',
            description: 'Include geometry in results (true/false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      effective: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'effective',
            in: 'query',
            description: 'Effective date/time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ZoneCollectionGeoJsonSchema },
        'application/ld+json': { schema: ZoneCollectionJsonLdSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesTypeRoute = createRoute({
  method: 'get',
  path: '/zones/{type}',
  description: 'Returns a list of zones of a given type',
  operationId: 'zone_list_type',
  request: {
    params: z.object({
      type: NWSZoneTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'path',
          description: 'Zone type',
          required: true,
          schema: { $ref: '#/components/schemas/NWSZoneType' },
        },
      }),
    }),
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NWSZoneIDSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'Zone ID (forecast or county)',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/NWSZoneID' } },
            required: false,
          },
        }),
      area: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AreaCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'area',
            in: 'query',
            description: 'State/marine area code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/AreaCode' } },
            required: false,
          },
        }),
      region: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(RegionCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region',
            in: 'query',
            description: 'Region code',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/RegionCode' } },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NWSZoneTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Zone type',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/NWSZoneType' } },
            required: false,
          },
        }),
      point: PointStringSchema.openapi({
        param: {
          name: 'point',
          in: 'query',
          description: 'Point (latitude,longitude)',
          schema: { $ref: '#/components/schemas/PointString' },
          required: false,
        },
      }).exactOptional(),
      include_geometry: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_geometry',
            in: 'query',
            description: 'Include geometry in results (true/false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      effective: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'effective',
            in: 'query',
            description: 'Effective date/time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ZoneCollectionGeoJsonSchema },
        'application/ld+json': { schema: ZoneCollectionJsonLdSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesTypeZoneIdRoute = createRoute({
  method: 'get',
  path: '/zones/{type}/{zoneId}',
  description: 'Returns metadata about a given zone',
  operationId: 'zone',
  request: {
    params: z.object({
      type: NWSZoneTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'path',
          description: 'Zone type',
          required: true,
          schema: { $ref: '#/components/schemas/NWSZoneType' },
        },
      }),
      zoneId: NWSZoneIdParamsSchema,
    }),
    query: z.object({
      effective: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'effective',
            in: 'query',
            description: 'Effective date/time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ZoneGeoJsonSchema },
        'application/ld+json': { schema: ZoneSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesTypeZoneIdForecastRoute = createRoute({
  method: 'get',
  path: '/zones/{type}/{zoneId}/forecast',
  description: 'Returns the current zone forecast for a given zone',
  operationId: 'zone_forecast',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'Zone type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zoneId: NWSZoneIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ZoneForecastGeoJsonSchema },
        'application/ld+json': { schema: ZoneForecastSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesTypeZoneIdRadioRoute = createRoute({
  method: 'get',
  path: '/zones/{type}/{zoneId}/radio',
  description: 'Returns transmitter object for a given zone',
  operationId: 'transmitter_zone',
  request: {
    params: z.object({
      type: z
        .literal('county')
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: "Must be value 'county'.",
            required: true,
            schema: { enum: ['county'], type: 'string' },
          },
        }),
      zoneId: NWSZoneIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/ld+json': { schema: z.any() } },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesForecastZoneIdObservationsRoute = createRoute({
  method: 'get',
  path: '/zones/forecast/{zoneId}/observations',
  description: 'Returns a list of observations for a given zone',
  operationId: 'zone_obs',
  request: {
    params: z.object({ zoneId: NWSZoneIdParamsSchema }),
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date/time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date/time',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: {
        'application/geo+json': { schema: ObservationCollectionGeoJsonSchema },
        'application/ld+json': { schema: ObservationCollectionJsonLdSchema },
      },
      headers: z.object({
        'X-Correlation-Id': CorrelationIdHeaderSchema,
        'X-Request-Id': RequestIdHeaderSchema,
        'X-Server-Id': ServerIdHeaderSchema,
      }),
    },
    default: ErrorResponse,
  },
})

export const getZonesForecastZoneIdStationsRoute = createRoute({
  method: 'get',
  path: '/zones/forecast/{zoneId}/stations',
  description: 'Returns a list of observation stations for a given zone',
  operationId: 'zone_stations',
  request: {
    params: z.object({ zoneId: NWSZoneIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema, cursor: PaginationCursorParamsSchema }),
  },
  responses: { 200: ObservationStationCollectionResponse, default: ErrorResponse },
})
