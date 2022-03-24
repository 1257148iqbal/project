import React from "react";
import '../../../style/contact.css'

const Contact = () => {
  //#region state

  //#endregion
  // return (
  //   <div>
  //     <h1>This is Contact Page</h1>
  //     <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet maxime cupiditate quam repellat tempora porro, dolor vitae error et ea nisi corrupti magnam obcaecati unde dicta quo molestias ratione eum eos quaerat! Pariatur impedit eveniet nemo accusantium? Possimus impedit, expedita officia odio asperiores officiis labore consequatur voluptatibus aperiam hic repellat libero sed, in rem nostrum voluptatem quidem sapiente vero veniam, suscipit dignissimos deserunt. Atque aliquid dolores doloribus ipsum animi, officia quia, placeat illo commodi delectus nesciunt error cumque porro, ipsa eligendi perspiciatis! Nemo laborum aspernatur consequuntur reiciendis laudantium doloremque animi et amet, ipsa nihil quaerat distinctio repellendus architecto dolor quisquam cupiditate placeat ex tempora non enim ipsam dicta rem porro? Distinctio, sed blanditiis temporibus cum cupiditate illum eum culpa? Atque recusandae perspiciatis dolore nostrum dignissimos officiis nisi. Laboriosam nesciunt itaque eum fugit? Fugit tenetur doloremque qui corrupti, quis rem nam aperiam autem cupiditate, assumenda numquam blanditiis voluptatum explicabo voluptatibus molestiae asperiores consequatur, ab adipisci repellat. Totam impedit laborum minima soluta, vitae ab dolore quo facere expedita aperiam dicta fuga consequuntur sed tenetur veniam laudantium ipsam doloremque dolorem velit sint exercitationem dolorum ea qui? Dolorum quaerat eveniet illum placeat dolores unde, fuga at molestias cupiditate, facilis suscipit? Ipsum ex, aperiam fugiat id, recusandae consequuntur quod dicta ad beatae, eum sunt. Vero, corporis. Ea dolore assumenda dolorem repellat est rerum ab maiores? Harum aspernatur quod sunt nulla omnis quia eius earum ipsam. A, quidem doloribus aliquid temporibus rem ratione voluptate, dolorum velit quam esse, non at suscipit expedita tenetur id officiis perspiciatis molestias perferendis nemo! Rem, non. Eum mollitia, sint libero fugit delectus nesciunt iste aliquid sequi magni earum minus, inventore incidunt veritatis. Quo unde libero quia ex quas aliquam sit porro voluptate? Modi voluptatem magni possimus quis consequatur dolores tempore dignissimos beatae nobis repudiandae, vel cum, totam alias eveniet eius nesciunt! Commodi facere alias sequi sit nobis laudantium fugit harum facilis iure possimus. Mollitia consectetur soluta illum ipsam iure iusto ducimus nobis recusandae sequi modi laboriosam quas placeat cumque pariatur amet, magni tempore veniam distinctio accusamus iste, vel corrupti sapiente! Molestias exercitationem quasi error quo quia, hic atque, aliquid ut repudiandae harum nostrum excepturi. Illo culpa dicta id debitis laborum nobis, quisquam architecto magni. Ipsam quaerat cumque eligendi cupiditate itaque quisquam sit, magnam sunt illum dolorem. Ipsum nostrum odit, ducimus aperiam quaerat officiis expedita aspernatur mollitia numquam voluptatibus, molestiae accusamus distinctio! Deleniti quasi molestiae possimus numquam neque? Officiis facilis vero unde, quaerat accusamus nihil eaque. Aut voluptates quasi accusamus totam, velit fugit officia aliquid, cupiditate, nam suscipit vitae quo? Aut expedita dicta, soluta quod aperiam omnis ut ea odit molestias dolorem quia earum quo minus, doloremque praesentium. Dolores aut quae mollitia atque. Odit, vel vitae iusto hic consequuntur earum ducimus repellendus ut vero quia iste velit officia cum modi dolor et quam, id sunt deleniti? Eum, iusto rerum! Iure, esse placeat laborum consectetur unde quis provident nihil dolorum aspernatur molestiae, aliquam, distinctio laboriosam veritatis porro reiciendis sunt nemo id impedit iste quaerat. Sit cumque possimus nobis officia ullam error sapiente pariatur ab nisi unde, doloremque nostrum! Sequi at neque officia repellendus maiores mollitia culpa incidunt, voluptatum iure corporis tempora minima fugiat animi cum quas molestiae cupiditate ab provident inventore error nostrum! Eius harum iusto unde asperiores quas eum, dicta alias non dolore voluptas quis qui, voluptatibus obcaecati iure possimus pariatur rerum temporibus repellendus nemo illo commodi laudantium similique quisquam. Quos praesentium delectus beatae. Sunt deleniti pariatur amet veniam tenetur, officia tempore. Magnam, error unde! Eius quam recusandae tempora enim porro quibusdam itaque id libero magnam, hic quod quas temporibus dolore labore praesentium illum a dolores amet aut? Mollitia veritatis, delectus voluptate animi architecto amet nihil iusto atque</h2>
  //   </div>
  // )
  return (
    <>
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          Contact Form
        </div>
        <div className="card-body">
          <form action="/" encType="multipart/form-data" autoComplete="off">
            <div className="form-group mt-3">
              <label className="mb-0 text-left">
                Your name<span className="text-danger">*</span>
              </label> 
              <input
                name="name"
                type="text"
                className="form-control" 
                placeholder="Name"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-0">
                Your email<span className="text-danger">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-0">Your contact number (Optional)</label>
              <input
                name="contact"
                type="text"
                className="form-control"
                placeholder="Contact"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-0">
                Message<span className="text-danger">*</span>
              </label>
              <textarea
                name="message"
                type="text"
                className="form-control"
                placeholder="Message"
              />
            </div>
            <p className="text-center mb-0 mt-3">
              <input
                type="submit"
                className="btn btn-primary btn-lg w-100 text-uppercase"
                value="Submit Now"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
