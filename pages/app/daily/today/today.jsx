import {React , useState ,useEffect ,useRef} from "react";
import styles from "@/styles/daily/today/today.module.css";
import Image from "next/image";
export default function Today() {


  const [showDeleteBtn , setShowDeleteBtn] = useState(false);
  const [showSideBar , setshowSideBar] = useState(false);

  const deleteBtnRef = useRef(null);




  function addTask(){
    const inputboxs = document.getElementById("inputBoxs");
    const addTaskLi = document.getElementById("addTaskLi");
    inputboxs.style.display = "block";
    addTaskLi.style.display = "none";

  }

  function deletebtnShow(event){
    const id  = event.currentTarget.id;
    const deletebtn = document.getElementById(id).nextSibling;
    if(showDeleteBtn === false){
      // console.log("none");
      deletebtn.style.display = "flex"
      setShowDeleteBtn(!showDeleteBtn);
    }
    else{
      console.log("flex");
      deletebtn.style.display = "none";
      setShowDeleteBtn(!showDeleteBtn);
    }
  }

  function deleteTaskList(event){
    const id = event.currentTarget.id;
    const element = document.getElementById(id).parentNode.parentNode.parentNode;
    element.style.display = "none"; 
  }

  useEffect(() => {
    function outsideClick(e){
      // console.log(e.target.nextSibling.id);
      console.log(deleteBtnRef);
      
    }
    document.addEventListener("click" , outsideClick);

    return () => {
      document.removeEventListener("click", outsideClick)
    }
  },[]);





  return (
    <>
      <div className={styles.container}>
        <div className={styles.todaygroup}>
          <span className={styles.today}>Today</span>
          <div className={styles.tasks}>4/6 completed</div>
          <div className={styles.tasklist}>
            <ul className={styles.xyz}>
              <li className={styles.list1}>
                <Image
                  src="/daily/checklist.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.checkicon}
                />
                <div className={styles.frame}>
                  <div className={styles.leftside}>
                    <span className={styles.listheading}>
                      Cooking a salmon sushi
                    </span>
                    <p className={styles.listp}>
                      Salmon and tuna i think is good for dinner, i wanna make
                      it today :D
                    </p>
                  </div>
                  <div className={styles.rightsideicons}>
                    <Image
                      src="/daily/bi_pencil-square.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <Image
                      src="/daily/bi_three-dots.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                      id = "1"
                      onClick = {deletebtnShow}
                    />
                    <button className={styles.deletebtn} onClick = {deleteTaskList} id = "deletebtnId1" ref ={deleteBtnRef}>
                      <Image
                        src="/daily/bi_trash-fill.png"
                        alt="Picture of the author"
                        width={26}
                        height={25}
                        className={styles.deleteicon}
                      />
                      <span className={styles.btndeletetext} >Delete</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className={styles.list1}>
                <Image
                  src="/daily/checklist.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.checkicon}
                />
                <div className={styles.frame}>
                  <div className={styles.leftside}>
                    <span className={styles.listheading}>
                      Cooking a salmon sushi
                    </span>
                    <p className={styles.listp}>
                      Salmon and tuna i think is good for dinner, i wanna make
                      it today :D
                    </p>
                  </div>
                  <div className={styles.rightsideicons}>
                    <Image
                      src="/daily/bi_pencil-square.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <Image
                      src="/daily/bi_three-dots.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                      id = "2"
                      onClick = {deletebtnShow}
                    />
                    <button className={styles.deletebtn} onClick = {deleteTaskList} id = "deletebtnId2" ref = {deleteBtnRef}>
                      <Image
                        src="/daily/bi_trash-fill.png"
                        alt="Picture of the author"
                        width={26}
                        height={25}
                        className={styles.deleteicon}
                      />
                      <span className={styles.btndeletetext} >Delete</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className={styles.addtaskli} onClick = {() => addTask()} id = "addTaskLi" >
              <Image
                  src="/daily/fluent_add-circle-32-filled.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.addtaskicon}
                />
                <span className={styles.addtask}>Add task</span>
              </li>
              <li >
                <div className={styles.inputboxs} id = "inputBoxs">
                <input type="text" placeholder="Task title" className={styles.tasktitle} />
                <input type="text"  placeholder="Description" className={styles.description}/>
                <div className={styles.addCancelbtn}>
                  <button className={styles.btnadd}>
                    Add
                  </button>
                  <button className={styles.btncancel}>
                    Cancel
                  </button>
                </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
