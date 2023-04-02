import React from 'react'

export default function Requests() {
  return (
    <div className="formm">
      <div className="myForm">
        <h1>Requests</h1>
        <p>Looking for a specific Account? Fill out the Form below and our Team will get back to you via your designated email address</p>
        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" class="form-control"/>
            <input type="text" aria-label="Last name" class="form-control"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="example@email.com" required/>
        </div>
        <div class="mb-3">
            <label for="inputState" class="form-label">Platform</label>
            <select id="inputState" class="form-select">
              <option selected>Choose a Platform...</option>
              <option>PC</option>
              <option>Playstation</option>
              <option>Xbox</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="inputState" class="form-label">Game</label>
            <select required id="inputState" class="form-select">
              <option selected>Choose a game...</option>
              <option>Apex Legends</option>
              <option>Overwatch 2</option>
              <option>Valorant</option>
              <option>Other...</option>
            </select>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">If you selected "Other", Please Specify...</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..."/>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Desired Rank</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example: Diamond 1" required/>
        </div>
        <div class="input-group">
          
        <span class="input-group-text">Additional Information</span>
        <textarea class="form-control" aria-label="With textarea"minlength="5"></textarea>
        </div>

        <input class="btn btn-primary mt-2" type="submit" value="Submit"/>

      </div>

    </div>
  )
}
