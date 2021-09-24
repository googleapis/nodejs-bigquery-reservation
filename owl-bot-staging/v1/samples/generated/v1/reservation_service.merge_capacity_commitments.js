// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START reservation_v1_generated_ReservationService_MergeCapacityCommitments_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Parent resource that identifies admin project and location e.g.,
   *   `projects/myproject/locations/us`
   */
  // const parent = 'abc123'
  /**
   *  Ids of capacity commitments to merge.
   *  These capacity commitments must exist under admin project and location
   *  specified in the parent.
   *  ID is the last portion of capacity commitment name e.g., 'abc' for
   *  projects/myproject/locations/US/capacityCommitments/abc
   */
  // const capacityCommitmentIds = 'abc123'

  // Imports the Reservation library
  const {ReservationServiceClient} = require('@google-cloud/bigquery-reservation').v1;

  // Instantiates a client
  const reservationClient = new ReservationServiceClient();

  async function mergeCapacityCommitments() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await reservationClient.mergeCapacityCommitments(request);
    console.log(response);
  }

  mergeCapacityCommitments();
  // [END reservation_v1_generated_ReservationService_MergeCapacityCommitments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
