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
  // [START bigqueryreservation_v1_generated_ReservationService_UpdateReservation_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Content of the reservation to update.
   */
  // const reservation = {}
  /**
   *  Standard field mask for the set of fields to be updated.
   */
  // const updateMask = {}

  // Imports the Reservation library
  const {ReservationServiceClient} = require('@google-cloud/bigquery-reservation').v1;

  // Instantiates a client
  const reservationClient = new ReservationServiceClient();

  async function callUpdateReservation() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await reservationClient.updateReservation(request);
    console.log(response);
  }

  callUpdateReservation();
  // [END bigqueryreservation_v1_generated_ReservationService_UpdateReservation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
