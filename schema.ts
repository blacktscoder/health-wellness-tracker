export const typeDefs = `
  type Query {
    getHealthData(userId: String!): HealthData
  }

  type Mutation {
    addHealthData(userId: String!, steps: Int, calories: Int, waterIntake: Int): HealthData
  }

  type HealthData {
    userId: String
    steps: Int
    calories: Int
    waterIntake: Int
  }
`;
