import React from 'react'

export default function Cards(props) {
    return (
        <>
            <section className="container-fluid my-5">

                {props.menuuData.map((curElem) => {
                    console.log('curElem',curElem);
                    return (
                        <div class="p1" style={{ width: '25%' }}>
                            <img src={curElem.img} width='100%' />
                            <h5>{curElem.title}</h5>
                            <p>{curElem.desc}</p>
                            <button type="button" class="btn btn-secondary">{curElem.BtnText}</button>

                            <br /><br /><br />
                        </div>)
                }
                )}

            </section>

        </>
    )
}
