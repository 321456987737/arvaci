import React from 'react'

const Location = () => {
  return (
          <div className="mt-20 w-full md:h-[520px] h-[300px]  overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=ARVACI%20coffee%20340%20W%2037th%20St%20New%20York&t=h&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
  )
}

export default Location
